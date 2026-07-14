"""
Backfill Layer B classifications + evidence into jd_data/<id>/<id>.json
for any record where evidence is empty or layer_b_classified is False.

Reads jd_archive.md (raw JD text) as input.
Writes classification values + verbatim evidence quotes back into the JSON.

Run:
  python3 backfill_evidence.py                  # classify all unclassified
  python3 backfill_evidence.py --force           # reclassify everything
  python3 backfill_evidence.py <jd_id>           # classify one specific JD
"""

import json
import re
import sys
import time
import subprocess
from pathlib import Path

JD_DATA = Path("/Users/jeremychia/Documents/Github/jeremychia/analysis/job_descriptions/jd_data")
CLAUDE_BIN = str(Path.home() / "Library/Application Support/Claude/claude-code/2.1.170/claude.app/Contents/MacOS/claude")

SYSTEM_PROMPT = """You are classifying a job description on five structured dimensions for market analysis.
Use ONLY the JD text provided. Do not infer from company name or sector — derive from what the text explicitly states.

### velocity_vs_rigour
- rigour: responsibilities emphasise correctness, quality, governance, testing, compliance, reliability, data accuracy. Signals: "data quality", "testing", "CI/CD", "data contracts", "observability", "compliance", "governance", "reliable", "accuracy".
- velocity: responsibilities emphasise speed, shipping, iteration. Signals: "fast-paced", "move fast", "ship quickly", "MVP", "high velocity", "scrappy", "rapid delivery".
- mixed: at least two distinct velocity phrases AND multiple rigour signals. A single "fast-paced" in a rigour-dominated JD → rigour.
- Tie-breaker: rigour signals ≥2× velocity signals → rigour. Rough parity → mixed.

### domain_risk
- high: data errors directly affect financial reporting, regulatory compliance, or public-facing products at scale. Fintech, banking, insurance, regulated healthcare default to high. Signals: "financial reporting", "compliance", "audit", "regulatory", "P&L", "revenue attribution".
- moderate: data errors affect business decisions without regulatory/financial consequences. Most e-commerce, SaaS, marketplace roles.
- low: limited recoverable consequences. Education, internal tooling.
- Tie-breaker: sector implies high but JD language is generic → moderate. JD uses financial/regulatory language → high.

### collaboration_width
Count distinct named partner teams/functions. Count: "Finance", "Product", "Marketing", "Data Science", "Engineering", "Operations", "Commercial", "Legal", "Customer Success", "Sales", "Analytics", named sub-teams. Do NOT count: "stakeholders", "the business", "cross-functional teams", the role holder's own team.
Return an integer.

### data_team_maturity
- early: role exists to establish the data function; infrastructure doesn't exist yet. Signals: "first data hire", "build from zero", "greenfield", "wear many hats", "you will define".
- mid: data function exists and has produced something but growing. Signals: existing named tools in responsibilities (not just requirements), "scale existing", "improve and extend".
- mature: established, specialised, at scale. Signals: multiple named data sub-teams, team size 20+ implied, "join an established team".
- Tie-breaker: named tools only in requirements → ignore. Named tools in responsibilities → mid/mature.

### jd_authorship (responsibilities section only)
- hiring_manager: technically specific — named tools with precise context, scale numbers, specific methodology.
- recruiter: generic boilerplate — "collaborate with stakeholders", "drive data quality", "work cross-functionally" with no technical depth.
- mixed: some bullets specific, some generic.
- Tie-breaker: could you understand what this person does on a Tuesday morning? Yes → hiring_manager. No → recruiter. Mostly specific with a few generic → hiring_manager.

### greenfield_vs_fix
- greenfield: primary verbs are build/establish/create applied to infrastructure.
- fix_scale: primary verbs are improve/scale/maintain.
- mixed: both substantially present.

### urgency
- urgent: JD states ≤30 day window, "immediately", "ASAP", "critical hire", re-post signal.
- standard: otherwise.

### language_gate_type
- hard: "required", "fluent", "C1/C2", "must speak" for a non-English language.
- soft: "plus", "nice to have", "advantage", "preferred" for a non-English language.
- none: English only or not mentioned.

Respond with ONLY a valid JSON object — no explanation, no markdown fences.

{
  "velocity_vs_rigour": "<rigour|mixed|velocity>",
  "velocity_vs_rigour_quote": "<exact verbatim phrase from the JD>",
  "velocity_vs_rigour_reasoning": "<one sentence>",
  "domain_risk": "<high|moderate|low>",
  "domain_risk_quote": "<exact verbatim phrase from the JD>",
  "domain_risk_reasoning": "<one sentence>",
  "collaboration_width": <integer>,
  "collaboration_width_teams": "<semicolon-separated named teams, verbatim>",
  "data_team_maturity": "<early|mid|mature>",
  "data_team_maturity_quote": "<exact verbatim phrase from the JD>",
  "data_team_maturity_reasoning": "<one sentence>",
  "jd_authorship": "<hiring_manager|mixed|recruiter>",
  "jd_authorship_quote": "<exact verbatim phrase from responsibilities section>",
  "jd_authorship_reasoning": "<one sentence>",
  "greenfield_vs_fix": "<greenfield|fix_scale|mixed>",
  "greenfield_vs_fix_quote": "<exact verbatim phrase from the JD>",
  "urgency": "<urgent|standard>",
  "urgency_signal": "<verbatim urgency phrase, or 'No urgency signals present'>",
  "language_gate_type": "<none|soft|hard>",
  "language_gate_languages": [],
  "has_dbt": <true|false>,
  "has_spark": <true|false>,
  "has_python": <true|false>,
  "has_sql": <true|false>,
  "has_airflow": <true|false>,
  "has_dagster": <true|false>,
  "has_prefect": <true|false>,
  "has_snowflake": <true|false>,
  "has_databricks": <true|false>,
  "has_bigquery": <true|false>,
  "has_redshift": <true|false>,
  "has_duckdb": <true|false>,
  "has_kafka": <true|false>,
  "has_terraform": <true|false>,
  "has_looker": <true|false>,
  "has_tableau": <true|false>,
  "has_power_bi": <true|false>,
  "has_great_expectations": <true|false>,
  "has_soda": <true|false>
}"""


def strip_layer_b(text: str) -> str:
    for marker in ["## Layer B", "## Layer B —", "## Layer B—"]:
        idx = text.find(marker)
        if idx != -1:
            return text[:idx].strip()
    return text.strip()


def classify(jd_text: str) -> dict:
    prompt = f"{SYSTEM_PROMPT}\n\nClassify this job description:\n\n{jd_text}"
    result = subprocess.run(
        [CLAUDE_BIN, "--print", "--model", "claude-haiku-4-5-20251001", prompt],
        capture_output=True, text=True, timeout=120,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr[:300])
    raw = result.stdout.strip()
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    m = re.search(r"\{.*\}", raw, re.DOTALL)
    if not m:
        raise ValueError(f"No JSON in output: {raw[:200]}")
    return json.loads(m.group())


def needs_classification(record: dict, force: bool) -> bool:
    if force:
        return True
    if not record.get("evidence"):
        return True
    if not record.get("layer_b_classified"):
        return True
    return False


def main():
    args = sys.argv[1:]
    force = "--force" in args
    targets = [a for a in args if not a.startswith("--")]

    dirs = sorted(JD_DATA.iterdir())
    if targets:
        dirs = [JD_DATA / t for t in targets if (JD_DATA / t).is_dir()]
        if not dirs:
            print(f"No matching JD dirs found for: {targets}")
            return

    done = skipped = failed = 0

    for jd_dir in dirs:
        if not jd_dir.is_dir():
            continue
        jd_id = jd_dir.name
        json_path = jd_dir / f"{jd_id}.json"
        archive_path = jd_dir / "jd_archive.md"

        if not json_path.exists():
            print(f"[skip] {jd_id} — no JSON file")
            skipped += 1
            continue
        if not archive_path.exists():
            print(f"[skip] {jd_id} — no jd_archive.md")
            skipped += 1
            continue

        with open(json_path) as f:
            record = json.load(f)

        if not needs_classification(record, force):
            print(f"[skip] {jd_id} — already classified (use --force to redo)")
            skipped += 1
            continue

        jd_text = strip_layer_b(archive_path.read_text())
        if len(jd_text) < 100:
            print(f"[skip] {jd_id} — archive too short ({len(jd_text)} chars)")
            skipped += 1
            continue

        print(f"[classify] {jd_id} ({len(jd_text)} chars)...", end=" ", flush=True)
        try:
            result = classify(jd_text)
        except Exception as e:
            print(f"FAILED: {e}")
            failed += 1
            continue

        # Update record with all classification fields + evidence
        bool_fields = {k for k in result if k.startswith("has_")}
        for k, v in result.items():
            if k in bool_fields:
                record[k] = bool(v) if v is not None else False
            else:
                record[k] = v

        # Structured evidence block
        record["evidence"] = {
            "velocity_vs_rigour": result.get("velocity_vs_rigour_quote", ""),
            "domain_risk": result.get("domain_risk_quote", ""),
            "collaboration_width": result.get("collaboration_width_teams", ""),
            "data_team_maturity": result.get("data_team_maturity_quote", ""),
            "jd_authorship": result.get("jd_authorship_quote", ""),
            "greenfield_vs_fix": result.get("greenfield_vs_fix_quote", ""),
            "language_gate": result.get("urgency_signal", ""),
            "urgency": result.get("urgency_signal", ""),
        }
        record["layer_b_classified"] = True
        record["layer_b_source"] = "backfill_evidence.py"

        with open(json_path, "w") as f:
            json.dump(record, f, indent=2)

        v = result.get("velocity_vs_rigour", "?")
        d = result.get("domain_risk", "?")
        m = result.get("data_team_maturity", "?")
        a = result.get("jd_authorship", "?")
        cw = result.get("collaboration_width", "?")
        print(f"v={v} dr={d} tm={m} auth={a} cw={cw}")
        done += 1
        time.sleep(0.5)

    print(f"\nDone: {done} | Skipped: {skipped} | Failed: {failed}")


if __name__ == "__main__":
    main()
