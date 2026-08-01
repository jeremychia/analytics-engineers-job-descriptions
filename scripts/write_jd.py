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
import sys
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
] + BOOL_FIELDS + ["required_tools", "preferred_tools", "source_url", "evidence"]


def write_files(data: dict):
    jd_id = data["jd_id"]
    jd_text = data.pop("jd_text", "")
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
