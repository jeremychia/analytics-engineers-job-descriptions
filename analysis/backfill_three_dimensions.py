"""
Backfill ai_role, testing_framing, and loss_aversion_framing into existing JD records.

Design principles:
- Append-only: never rewrites existing fields in .json or trace files
- Minimal context: prompt is built from existing JSON reasoning fields (compact),
  not from the raw jd_archive.md (large)
- One subprocess per JD: context window is flushed between JDs

Writes to:
  - {jd_id}.json       — three new fields appended via json.dumps of updated dict
  - jd_traces/{jd_id}.md — new section appended at end of file

Usage:
    python3 backfill_three_dimensions.py              # all unclassified JDs
    python3 backfill_three_dimensions.py --dry-run    # preview only
    python3 backfill_three_dimensions.py --limit 5    # first N JDs only
"""

import argparse
import json
import subprocess
from pathlib import Path

from dimensions import DIM_NAMES, KEY_MAP, VALID_VALUES

JD_DATA_DIR = Path(__file__).parent.parent / "data"
TRACES_DIR = Path(__file__).parent / "jd_traces"

CODEBOOK = """\
Classify 3 dimensions from the JD phrases below. JSON only, no markdown.

ai_role none|ai_user|ai_enabler
  none=no AI skill expected; "AI-first mindset"/company builds AI but AE does standard work→none
  ai_user=candidate uses AI coding tools (Copilot,Claude Code,Cursor,"AI-assisted coding","proven AI tool usage")
  ai_enabler=candidate builds infra AI consumes ("AI-ready","semantic model for AI","GenAI" in responsibilities,text-to-SQL); both signals→ai_enabler

testing_framing responsibility|tool_listed|absent
  responsibility=candidate owns quality practice (own/ensure/define/implement/establish + quality/testing/data contracts)
  tool_listed=testing tool in stack without ownership verb
  absent=no signal

loss_aversion_framing none|moderate|high
  none=delivery framing only
  moderate=operational reliability fear (incidents,SLOs,pipeline stability)
  high=compliance/trust dominates (regulatory,audit,"bad data reaching stakeholders",trustworthiness as primary framing)

Output (short keys, expand on write):
{"ar":"<val>","ar_q":"<verbatim JD phrase>","ar_e":"<one sentence>","tf":"<val>","tf_q":"<verbatim JD phrase>","tf_e":"<one sentence>","laf":"<val>","laf_q":"<verbatim JD phrase>","laf_e":"<one sentence>"}

JD phrases:
"""


def _find_claude() -> str:
    import shutil
    if shutil.which("claude"):
        return "claude"
    candidates = [
        Path.home() / ".vscode/extensions",
        Path.home() / "Library/Application Support/Claude/claude-code",
    ]
    for base in candidates:
        for p in sorted(base.glob("**/claude"), reverse=True):
            if p.is_file() and p.stat().st_mode & 0o111:
                return str(p)
    raise FileNotFoundError("claude CLI not found")


def already_classified(json_path: Path) -> bool:
    try:
        data = json.loads(json_path.read_text())
        return all(dim in data for dim in DIM_NAMES)
    except Exception:
        return False


def build_prompt(data: dict) -> str:
    """Deduplicated evidence quotes — the actual JD phrases, minimal context."""
    ev = data.get("evidence", {})
    skip = {"language_gate", "urgency", "ats_keywords"}
    seen = set()
    phrases = []
    for k, v in ev.items():
        if k in skip or not isinstance(v, str) or not v.strip():
            continue
        if v not in seen:
            seen.add(v)
            phrases.append(v)
    return CODEBOOK + "\n".join(f"- {p}" for p in phrases)


NUM_RUNS = 3


def _run_once(prompt: str, claude_bin: str) -> dict | None:
    try:
        result = subprocess.run(
            [claude_bin, "-p", prompt, "--model", "claude-haiku-4-5-20251001"],
            capture_output=True, text=True, timeout=60,
        )
    except subprocess.TimeoutExpired:
        return None

    output = result.stdout.strip()
    if output.startswith("```"):
        output = "\n".join(output.split("\n")[1:])
    if output.endswith("```"):
        output = "\n".join(output.split("\n")[:-1])

    try:
        parsed = json.loads(output)
    except json.JSONDecodeError:
        return None

    if not isinstance(parsed, dict):
        return None

    for short_key, valid in VALID_VALUES.items():
        if parsed.get(short_key) not in valid:
            return None

    return {KEY_MAP.get(k, k): v for k, v in parsed.items()}


def classify_jd(data: dict) -> list[dict] | None:
    """Run classification NUM_RUNS times. Returns list of results or None if all fail."""
    prompt = build_prompt(data)
    claude_bin = _find_claude()
    runs = []
    for _ in range(NUM_RUNS):
        r = _run_once(prompt, claude_bin)
        if r is not None:
            runs.append(r)
    return runs if runs else None


def majority_value(runs: list[dict], dim: str) -> str:
    from collections import Counter
    return Counter(r[dim] for r in runs).most_common(1)[0][0]


def append_to_json(json_path: Path, runs: list[dict]) -> None:
    """Append majority-vote values + per-run quotes/reasonings. No existing fields touched."""
    data = json.loads(json_path.read_text())
    for dim in DIM_NAMES:
        data[dim] = majority_value(runs, dim)
        # Store run1 quote/reasoning as the primary evidence (same pattern as existing dims)
        data[f"{dim}_quote"] = runs[0].get(f"{dim}_quote", "")
        data[f"{dim}_reasoning"] = runs[0].get(f"{dim}_reasoning", "")
    json_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")


def append_to_trace(trace_path: Path, jd_id: str, runs: list[dict]) -> None:
    """Append dimension blocks matching existing trace format (Run 1/2/3 + majority)."""
    section = ""
    for dim in DIM_NAMES:
        majority = majority_value(runs, dim)
        section += f"\n### {dim}\n"
        for i, run in enumerate(runs, 1):
            val = run[dim]
            quote = run.get(f"{dim}_quote", "")
            reasoning = run.get(f"{dim}_reasoning", "")
            match = "✓" if val == majority else "✗"
            section += f"**Run {i}:** `{val}` {match}\n> Quote: \"{quote}\"\n> Reasoning: {reasoning}\n\n"
        if len(set(r[dim] for r in runs)) > 1:
            section += f"⚠ **LLM inconsistency**: runs gave {[r[dim] for r in runs]}\n"

    with open(trace_path, "a") as f:
        f.write(section)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--limit", type=int, default=None)
    args = parser.parse_args()

    jd_dirs = sorted(p for p in JD_DATA_DIR.iterdir() if p.is_dir())

    todo = []
    for jd_dir in jd_dirs:
        json_path = jd_dir / f"{jd_dir.name}.json"
        if not json_path.exists():
            continue
        if already_classified(json_path):
            continue
        todo.append(jd_dir)

    print(f"JDs to classify: {len(todo)}")
    if args.limit:
        todo = todo[: args.limit]
        print(f"Limiting to {args.limit}")

    n_ok = 0
    n_fail = 0

    for jd_dir in todo:
        jd_id = jd_dir.name
        json_path = jd_dir / f"{jd_id}.json"
        trace_path = TRACES_DIR / f"{jd_id}.md"

        data = json.loads(json_path.read_text())

        print(f"\n── {jd_id}")

        if args.dry_run:
            print(f"   [DRY RUN] would classify")
            n_ok += 1
            continue

        runs = classify_jd(data)
        if not runs:
            print(f"   FAIL: all runs invalid or timed out")
            n_fail += 1
            continue

        maj = {dim: majority_value(runs, dim) for dim in DIM_NAMES}
        print(f"   ai_role={maj['ai_role']}  testing_framing={maj['testing_framing']}  loss_aversion_framing={maj['loss_aversion_framing']}  ({len(runs)}/3 runs ok)")

        append_to_json(json_path, runs)

        if trace_path.exists():
            append_to_trace(trace_path, jd_id, runs)
            print(f"   json + trace appended")
        else:
            print(f"   json appended (no trace file)")

        n_ok += 1

    print(f"\n{'═'*60}")
    mode = "DRY RUN — " if args.dry_run else ""
    print(f"  {mode}classified: {n_ok}")
    print(f"  failed:      {n_fail}")
    print(f"{'═'*60}")


if __name__ == "__main__":
    main()
