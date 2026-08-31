#!/usr/bin/env python3
"""
Write the output files for a classified JD.

Usage (pipe Claude's JSON output directly):
    echo '<json>' | python3 write_jd.py

Input (stdin): JSON object with all classification fields plus:
  - jd_text: full verbatim JD text
  - source_url: original URL

Output files written to data/{jd_id}/:
  - jd_archive.md   — raw verbatim JD text
  - {jd_id}.json    — classification record (source_url + evidence included)
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

JD_DATA_DIR = Path(__file__).parent.parent / "data"

BOOL_FIELDS = [
    "has_dbt", "has_dbt_cloud", "has_spark", "has_python", "has_sql",
    "has_airflow", "has_dagster", "has_prefect",
    "has_snowflake", "has_databricks", "has_bigquery", "has_redshift", "has_duckdb",
    "has_fabric_synapse", "has_postgres",
    "has_fivetran", "has_airbyte", "has_glue",
    "has_kafka", "has_terraform",
    "has_looker", "has_tableau", "has_power_bi", "has_metabase",
    "has_great_expectations", "has_soda",
]

LAYER_B_FIELDS = [
    "velocity_vs_rigour", "domain_risk", "collaboration_width", "data_team_maturity",
    "jd_authorship", "stakeholder_orientation", "autonomy_level",
    "ai_role", "testing_framing", "loss_aversion_framing",
    "greenfield_vs_fix", "urgency", "work_arrangement", "language_gate_type",
    "interview_stages", "ats_platform", "ats_job_id",
]

JSON_FIELD_ORDER = [
    "jd_id", "company", "role", "job_location", "seniority", "role_type",
    "salary_min", "salary_max", "salary_currency", "salary_period",
    "jd_authorship", "stakeholder_orientation", "autonomy_level",
    "ai_role", "testing_framing", "loss_aversion_framing",
    "greenfield_vs_fix", "velocity_vs_rigour", "domain_risk",
    "collaboration_width", "data_team_maturity", "urgency", "work_arrangement",
    "language_gate_type", "language_gate_languages",
    "interview_stages", "ats_platform", "ats_job_id",
] + BOOL_FIELDS + [
    "required_tools", "preferred_tools",
    "responsibilities", "responsibilities_source",
    "source_url", "evidence",
]

# Responsibility bullets are captured at classification time (the model reads the
# JD and pulls the responsibilities section) rather than re-derived later by regex.
# That makes them unreproducible, so they are verified here instead: every bullet
# claiming to come from a responsibilities section must be a literal substring of
# jd_text. See verify_responsibilities().
RESPONSIBILITY_SOURCES = ("jd_section", "inferred_from_prose")

# Fields that may legitimately be absent from a record:
#   salary_period                  - only meaningful when a salary was extracted
#   required_tools/preferred_tools - empty when the JD draws no required/preferred
#                                    split; additive fields, added after the corpus
#                                    was already ~350 records deep
# Everything else in JSON_FIELD_ORDER is present in every record in the corpus and
# is assumed present by something downstream, so its absence is a fatal error here
# rather than a silently-dropped key. A missing `responsibilities` in particular
# used to write cleanly and only surface much later, as a non-fatal warning from
# responsibility_taxonomy.py, by which point the bullets can no longer be captured
# without re-reading the posting.
OPTIONAL_FIELDS = {"salary_period", "required_tools", "preferred_tools"}
REQUIRED_FIELDS = [f for f in JSON_FIELD_ORDER if f not in OPTIONAL_FIELDS]


def _norm(s: str) -> str:
    """Normalize for substring comparison: unify quotes/dashes, collapse whitespace.

    Scrapes routinely differ from the model's echo of them by curly-vs-straight
    quotes, en/em dashes, non-breaking spaces and line wrapping - none of which
    are content differences. Anything beyond that is a real mismatch.
    """
    s = unicodedata.normalize("NFC", s)
    for a, b in (("’", "'"), ("‘", "'"), ("“", '"'),
                 ("”", '"'), ("–", "-"), ("—", "-"),
                 (" ", " ")):
        s = s.replace(a, b)
    return re.sub(r"\s+", " ", s).strip()


def verify_required_fields(data: dict, jd_text: str) -> list[str]:
    """Return a list of fatal errors for fields that are absent entirely.

    Checks presence, not value: `null` is a meaningful answer for several of these
    (salary_min on a JD with no salary, interview_stages when unstated), but a
    missing key means the classifier never considered the dimension.
    """
    errors = []
    if not jd_text.strip():
        errors.append("jd_text is empty - jd_archive.md would be written with no JD in it")

    missing = [f for f in REQUIRED_FIELDS if f not in data]
    if missing:
        errors.append(f"{len(missing)} required field(s) absent from the record:")
        errors += [f"    - {f}" for f in missing]
        errors.append("  Fix: classify the missing dimension(s) and re-run. Use null for a "
                      "dimension the JD genuinely does not state, [] for an empty list.")
    return errors


def verify_responsibilities(data: dict, jd_text: str) -> list[str]:
    """Return a list of fatal errors; empty means the record is safe to write."""
    if "responsibilities" not in data:
        return []  # absence is already reported by verify_required_fields
    bullets = data["responsibilities"]
    # Unlike the dimensions, null is not a meaningful value here - use [] for a
    # posting with genuinely no responsibilities content. Null would pass this
    # check and then read back as "no captured bullets" in
    # responsibility_taxonomy.py, silently dropping the JD onto the retired
    # regex extractor - the exact path this capture-at-classification-time
    # architecture exists to avoid.
    if bullets is None:
        return ["responsibilities is null - use [] if the JD has no responsibilities content"]
    if not isinstance(bullets, list):
        return ["responsibilities must be a list of strings"]

    source = data.get("responsibilities_source")
    if bullets and source not in RESPONSIBILITY_SOURCES:
        return [f"responsibilities_source must be one of {RESPONSIBILITY_SOURCES}, got {source!r}"]

    # Prose-only JDs have no bullet list to copy, so that path necessarily
    # rewrites sentences into bullets and cannot be substring-checked. It is
    # warned about and marked in the record rather than blocked.
    if source == "inferred_from_prose":
        if bullets:
            print(f"  ! {len(bullets)} responsibility bullets marked inferred_from_prose "
                  f"(not verbatim-checkable)", file=sys.stderr)
        return []

    haystack = _norm(jd_text)
    missing = [b for b in bullets if _norm(b) not in haystack]
    if missing:
        errs = [f"{len(missing)}/{len(bullets)} responsibility bullets are not verbatim in jd_text:"]
        errs += [f"    - {b[:120]}" for b in missing[:5]]
        if len(missing) > 5:
            errs.append(f"    ... and {len(missing) - 5} more")
        errs.append("  Fix: copy bullets exactly from the JD, or set "
                    "responsibilities_source to 'inferred_from_prose' if the JD has no bullet list.")
        return errs
    return []


def write_files(data: dict):
    jd_text = data.pop("jd_text", "")

    # Verify before reading any field off the record - a record with fabricated
    # responsibility bullets, or with a dimension missing outright, should never
    # reach disk: nothing downstream can detect the first, and the second only
    # shows up as a warning in a different script, long after the JD text is out
    # of context. jd_id is itself a required field, so it is reported here rather
    # than subscripted first (which raised a bare KeyError instead).
    errors = verify_required_fields(data, jd_text) + verify_responsibilities(data, jd_text)
    if errors:
        print(f"ERROR: {data.get('jd_id', '<no jd_id>')} - refusing to write.", file=sys.stderr)
        for e in errors:
            print(f"  {e}", file=sys.stderr)
        sys.exit(1)

    jd_id = data["jd_id"]
    source_url = data.get("source_url", "")
    evidence = data.get("evidence", {})

    out_dir = JD_DATA_DIR / jd_id
    out_dir.mkdir(parents=True, exist_ok=True)

    # ── jd_archive.md ──────────────────────────────────────────────────────
    archive_md = f"**URL:** {source_url}\n\n{jd_text}"
    (out_dir / "jd_archive.md").write_text(archive_md, encoding="utf-8")

    # ── {jd_id}.json ───────────────────────────────────────────────────────
    record = {k: data.get(k) for k in JSON_FIELD_ORDER if k in data or k == "evidence"}
    record["evidence"] = evidence
    # Ensure bool fields are actual booleans
    for f in BOOL_FIELDS:
        v = record.get(f)
        if isinstance(v, str):
            record[f] = v.lower() == "true"
    json_path = out_dir / f"{jd_id}.json"
    json_path.write_text(json.dumps(record, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Written to data/{jd_id}/")
    print(f"  jd_archive.md")
    print(f"  {jd_id}.json")


def main():
    raw = sys.stdin.read().strip()
    try:
        data = json.loads(raw)
    except json.JSONDecodeError as e:
        print(f"ERROR: invalid JSON on stdin — {e}", file=sys.stderr)
        sys.exit(1)
    write_files(data)


if __name__ == "__main__":
    main()
