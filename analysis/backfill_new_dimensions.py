"""
Backfill stakeholder_orientation and autonomy_level into existing jd.md and .json files.

Reads majority-vote values and evidence quotes from llm_classifications.csv, then:
  1. Patches jd.md Layer B section — inserts two new lines after **jd_authorship:**
  2. Patches {base-name}.json — adds stakeholder_orientation and autonomy_level fields
     into the top-level object and into the evidence sub-object

Only processes JDs that:
  - appear in the CSV (i.e. have been classified with the new dimensions)
  - have a jd.md or .json file in jd_data/

Safe to re-run: skips files that already contain the new fields.

Run:
  python3 backfill_new_dimensions.py
  python3 backfill_new_dimensions.py --dry-run   # print what would change, don't write
"""

import csv
import json
import re
import sys
from pathlib import Path
from collections import Counter

DRY_RUN = "--dry-run" in sys.argv

CSV_PATH = Path(__file__).parent / "llm_classifications.csv"
JD_DATA_DIR = Path(__file__).parent.parent / "jd_data"
APPLICATIONS_DIR = Path(__file__).parent.parent.parent.parent / "resume" / "applications"

NEW_DIMS = ["stakeholder_orientation", "autonomy_level"]
ALL_DIMS = ["velocity_vs_rigour", "domain_risk", "collaboration_width", "data_team_maturity",
            "jd_authorship", "stakeholder_orientation", "autonomy_level"]
NUM_RUNS = 3


def majority_vote(values: list[str]) -> str:
    return Counter(str(v) for v in values if v).most_common(1)[0][0] if values else ""


def best_quote(rows_for_id: dict, dim: str) -> str:
    """Pick the quote from the first run that has a non-empty value."""
    for i in range(1, NUM_RUNS + 1):
        q = rows_for_id.get(f"run{i}_{dim}_quote", "").strip()
        if q:
            return q
    return ""


def best_reasoning(rows_for_id: dict, dim: str) -> str:
    for i in range(1, NUM_RUNS + 1):
        r = rows_for_id.get(f"run{i}_{dim}_reasoning", "").strip()
        if r:
            return r
    return ""


def load_csv() -> dict[str, dict]:
    if not CSV_PATH.exists():
        raise FileNotFoundError(f"CSV not found: {CSV_PATH}")
    rows = {}
    with open(CSV_PATH) as f:
        for row in csv.DictReader(f):
            app_id = row["application_id"]
            rows[app_id] = row
    return rows


def patch_jd_md(jd_md_path: Path, app_id: str, row: dict, dry_run: bool) -> bool:
    """Insert stakeholder_orientation and autonomy_level lines into Layer B section.
    Returns True if the file was (or would be) modified."""
    text = jd_md_path.read_text()

    # Skip if already patched
    if "**stakeholder_orientation:**" in text:
        return False

    so_val = row.get("majority_vote_stakeholder_orientation", "")
    al_val = row.get("majority_vote_autonomy_level", "")
    so_reasoning = best_reasoning(row, "stakeholder_orientation")
    al_reasoning = best_reasoning(row, "autonomy_level")

    if not so_val or not al_val:
        print(f"  SKIP {app_id}: missing majority vote values in CSV")
        return False

    so_line = f"\n**stakeholder_orientation:** {so_val} — {so_reasoning}"
    al_line = f"\n**autonomy_level:** {al_val} — {al_reasoning}"

    # Insert after the **jd_authorship:** line (the whole line, ends with newline before next **)
    # Pattern: find **jd_authorship:** ... up to the next \n\n** or \n\n (end of that block)
    pattern = r'(\*\*jd_authorship:\*\*[^\n]*(?:\n(?!\*\*)[^\n]*)*)'
    match = re.search(pattern, text)
    if not match:
        print(f"  SKIP {app_id}: could not find **jd_authorship:** in {jd_md_path.name}")
        return False

    insert_at = match.end()
    new_text = text[:insert_at] + so_line + al_line + text[insert_at:]

    if dry_run:
        print(f"  [DRY RUN] Would patch {jd_md_path}")
        print(f"    + stakeholder_orientation: {so_val}")
        print(f"    + autonomy_level: {al_val}")
        return True

    jd_md_path.write_text(new_text)
    return True


def patch_json(json_path: Path, app_id: str, row: dict, dry_run: bool) -> bool:
    """Add stakeholder_orientation and autonomy_level to the JSON.
    Returns True if modified."""
    try:
        data = json.loads(json_path.read_text())
    except Exception as e:
        print(f"  SKIP {app_id}: JSON parse error: {e}")
        return False

    if "stakeholder_orientation" in data:
        return False

    so_val = row.get("majority_vote_stakeholder_orientation", "")
    al_val = row.get("majority_vote_autonomy_level", "")
    so_quote = best_quote(row, "stakeholder_orientation")
    al_quote = best_quote(row, "autonomy_level")
    so_reasoning = best_reasoning(row, "stakeholder_orientation")
    al_reasoning = best_reasoning(row, "autonomy_level")

    if not so_val or not al_val:
        print(f"  SKIP {app_id}: missing majority vote values")
        return False

    # Insert after jd_authorship in the top-level object
    # Build new ordered dict preserving key order
    new_data = {}
    for k, v in data.items():
        new_data[k] = v
        if k == "jd_authorship":
            new_data["stakeholder_orientation"] = so_val
            new_data["autonomy_level"] = al_val

    # Patch evidence sub-object
    if "evidence" in new_data and isinstance(new_data["evidence"], dict):
        ev = new_data["evidence"]
        new_ev = {}
        for k, v in ev.items():
            new_ev[k] = v
            if k == "jd_authorship":
                new_ev["stakeholder_orientation"] = so_quote
                new_ev["autonomy_level"] = al_quote
        new_data["evidence"] = new_ev

    # Also add reasoning fields adjacent to existing reasoning fields
    if "jd_authorship_reasoning" in new_data:
        ordered = {}
        for k, v in new_data.items():
            ordered[k] = v
            if k == "jd_authorship_reasoning":
                ordered["stakeholder_orientation_quote"] = so_quote
                ordered["stakeholder_orientation_reasoning"] = so_reasoning
                ordered["autonomy_level_quote"] = al_quote
                ordered["autonomy_level_reasoning"] = al_reasoning
        new_data = ordered

    if dry_run:
        print(f"  [DRY RUN] Would patch {json_path.name}")
        print(f"    + stakeholder_orientation: {so_val}")
        print(f"    + autonomy_level: {al_val}")
        return True

    json_path.write_text(json.dumps(new_data, indent=2, ensure_ascii=False) + "\n")
    return True


def find_jd_paths(app_id: str) -> tuple[Path | None, Path | None]:
    """Return (jd_md_path_or_None, json_path_or_None) for an app_id."""
    # Check jd_data first
    jd_folder = JD_DATA_DIR / app_id
    jd_md = jd_folder / "jd.md" if jd_folder.exists() else None
    json_file = jd_folder / f"{app_id}.json" if jd_folder.exists() else None

    if jd_md and not jd_md.exists():
        jd_md = None
    if json_file and not json_file.exists():
        json_file = None

    # Also check applications/ for jd.md
    app_folder = APPLICATIONS_DIR / app_id
    if jd_md is None and app_folder.exists():
        candidate = app_folder / "jd.md"
        if candidate.exists():
            jd_md = candidate

    return jd_md, json_file


def main():
    rows = load_csv()
    print(f"Loaded {len(rows)} rows from CSV")

    n_jd_patched = 0
    n_json_patched = 0
    n_skipped = 0

    for app_id, row in sorted(rows.items()):
        # Check the new dimensions are present in this row
        so = row.get("majority_vote_stakeholder_orientation", "")
        al = row.get("majority_vote_autonomy_level", "")
        if not so or not al:
            print(f"[SKIP] {app_id}: not yet classified with new dimensions")
            n_skipped += 1
            continue

        jd_md_path, json_path = find_jd_paths(app_id)

        label = app_id[11:]  # strip date prefix for readability
        print(f"\n── {label}")
        print(f"   so={so}  al={al}")

        if jd_md_path:
            if patch_jd_md(jd_md_path, app_id, row, DRY_RUN):
                n_jd_patched += 1
                if not DRY_RUN:
                    print(f"   jd.md ✓ patched")
            else:
                print(f"   jd.md — already up to date")
        else:
            print(f"   jd.md — not found (jd_archive.md only)")

        if json_path:
            if patch_json(json_path, app_id, row, DRY_RUN):
                n_json_patched += 1
                if not DRY_RUN:
                    print(f"   .json ✓ patched")
            else:
                print(f"   .json — already up to date")
        else:
            print(f"   .json — not found")

    print(f"\n{'═'*60}")
    mode = "DRY RUN — " if DRY_RUN else ""
    print(f"  {mode}jd.md files patched:  {n_jd_patched}")
    print(f"  {mode}.json files patched:  {n_json_patched}")
    print(f"  Skipped (not classified): {n_skipped}")
    print(f"{'═'*60}")


if __name__ == "__main__":
    main()
