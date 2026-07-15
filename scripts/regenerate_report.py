#!/usr/bin/env python3
"""
Regenerate report.md statistics and index.html data from source JDs.

This is the single source of truth for updating the analysis when new JDs are added.
It runs the full pipeline:
  1. Compile all data/{jd_id}/{jd_id}.json into analysis/data.json
  2. (Optional) Regenerate consistency report from llm_classifications.csv
  3. (Future) Regenerate report.md statistics from data.json

Usage:
    python3 scripts/regenerate_report.py              # Full regeneration
    python3 scripts/regenerate_report.py --data-only  # Just compile data.json
    python3 scripts/regenerate_report.py --help       # Show options
"""

import json
import csv
import sys
from pathlib import Path
from collections import Counter, defaultdict
from typing import Dict, List, Any

# Paths
PROJECT_ROOT = Path(__file__).parent.parent
DATA_DIR = PROJECT_ROOT / "data"
ANALYSIS_DIR = PROJECT_ROOT / "analysis"
OUT_DATA_JSON = ANALYSIS_DIR / "data.json"
LLM_CSV = ANALYSIS_DIR / "llm_classifications.csv"


def compile_data_json() -> int:
    """
    Compile all data/{jd_id}/{jd_id}.json into analysis/data.json.
    Returns count of JDs compiled.
    """
    print("=" * 70)
    print("STEP 1: Compile data.json")
    print("=" * 70)

    records = []
    for jd_folder in sorted(DATA_DIR.iterdir()):
        if not jd_folder.is_dir():
            continue

        jd_id = jd_folder.name
        jd_json_path = jd_folder / f"{jd_id}.json"

        if jd_json_path.exists():
            try:
                with open(jd_json_path) as f:
                    record = json.load(f)
                # Ensure application_id field exists for backwards compat
                if "jd_id" in record and "application_id" not in record:
                    record["application_id"] = record["jd_id"]
                records.append(record)
                print(f"  ✓ {jd_id}")
            except json.JSONDecodeError as e:
                print(f"  ✗ {jd_id} — JSON decode error: {e}")
            except Exception as e:
                print(f"  ✗ {jd_id} — {e}")

    # Write output
    OUT_DATA_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_DATA_JSON, "w") as f:
        json.dump(records, f, indent=2, ensure_ascii=False)

    print(f"\n✓ Compiled {len(records)} JDs → {OUT_DATA_JSON.relative_to(PROJECT_ROOT)}")
    return len(records)


def analyze_dimensions(data: List[Dict]) -> Dict[str, Any]:
    """
    Compute summary statistics on all Layer B dimensions.
    Returns a dict with tables and cross-tabs ready for markdown.
    """
    print("\n" + "=" * 70)
    print("STEP 2: Analyze dimensions")
    print("=" * 70)

    stats = {}

    # Filter to analytical cohort: analytics_engineering_bi or team_lead
    analytical = [
        d for d in data
        if d.get("role_type") in ("analytics_engineering_bi", "team_lead")
    ]
    n_analytical = len(analytical)

    # Filter to AE/BI only
    ae_bi = [
        d for d in data
        if d.get("role_type") == "analytics_engineering_bi"
    ]
    n_ae_bi = len(ae_bi)

    stats["n_total"] = len(data)
    stats["n_analytical"] = n_analytical
    stats["n_ae_bi"] = n_ae_bi

    print(f"  Total records: {stats['n_total']}")
    print(f"  Analytical cohort (AE/BI + team_lead): {n_analytical}")
    print(f"  AE/BI only: {n_ae_bi}")

    # Role type breakdown
    role_types = Counter(d.get("role_type") for d in data if d.get("role_type"))
    stats["role_type_breakdown"] = dict(sorted(role_types.items(), key=lambda x: -x[1]))
    print(f"\n  Role type breakdown: {stats['role_type_breakdown']}")

    # velocity_vs_rigour
    v_r = Counter(d.get("velocity_vs_rigour") for d in analytical if d.get("velocity_vs_rigour"))
    stats["velocity_vs_rigour"] = {k: v for k, v in sorted(v_r.items(), key=lambda x: -x[1])}
    print(f"\n  velocity_vs_rigour: {stats['velocity_vs_rigour']}")
    print(f"    — rigour: {stats['velocity_vs_rigour'].get('rigour', 0)}/{n_analytical} ({100*stats['velocity_vs_rigour'].get('rigour', 0)/n_analytical:.0f}%)")

    # domain_risk
    dr = Counter(d.get("domain_risk") for d in analytical if d.get("domain_risk"))
    stats["domain_risk"] = {k: v for k, v in sorted(dr.items(), key=lambda x: -x[1])}
    print(f"\n  domain_risk: {stats['domain_risk']}")

    # data_team_maturity
    dtm = Counter(d.get("data_team_maturity") for d in analytical if d.get("data_team_maturity"))
    stats["data_team_maturity"] = {k: v for k, v in sorted(dtm.items(), key=lambda x: -x[1])}
    print(f"\n  data_team_maturity: {stats['data_team_maturity']}")

    # stakeholder_orientation
    so = Counter(d.get("stakeholder_orientation") for d in analytical if d.get("stakeholder_orientation"))
    stats["stakeholder_orientation"] = {k: v for k, v in sorted(so.items(), key=lambda x: -x[1])}
    print(f"\n  stakeholder_orientation: {stats['stakeholder_orientation']}")

    # autonomy_level
    al = Counter(d.get("autonomy_level") for d in analytical if d.get("autonomy_level"))
    stats["autonomy_level"] = {k: v for k, v in sorted(al.items(), key=lambda x: -x[1])}
    print(f"\n  autonomy_level: {stats['autonomy_level']}")

    # jd_authorship
    ja = Counter(d.get("jd_authorship") for d in data if d.get("jd_authorship"))
    stats["jd_authorship"] = {k: v for k, v in sorted(ja.items(), key=lambda x: -x[1])}
    print(f"\n  jd_authorship: {stats['jd_authorship']}")

    # has_dbt
    ae_bi_dbt = sum(1 for d in ae_bi if d.get("has_dbt") is True)
    stats["has_dbt_count"] = ae_bi_dbt
    stats["has_dbt_pct"] = 100 * ae_bi_dbt / n_ae_bi if n_ae_bi > 0 else 0
    print(f"\n  has_dbt (AE/BI): {ae_bi_dbt}/{n_ae_bi} ({stats['has_dbt_pct']:.0f}%)")

    # ai_role (only on coded subset)
    ai_coded = [d for d in analytical if d.get("ai_role") is not None]
    n_ai_coded = len(ai_coded)
    if n_ai_coded > 0:
        ai = Counter(d.get("ai_role") for d in ai_coded)
        stats["ai_role"] = {k: v for k, v in sorted(ai.items(), key=lambda x: -x[1])}
        stats["n_ai_coded"] = n_ai_coded
        print(f"\n  ai_role (coded n={n_ai_coded}): {stats['ai_role']}")

    # testing_framing (only on coded subset)
    testing_coded = [d for d in analytical if d.get("testing_framing") is not None]
    n_testing_coded = len(testing_coded)
    if n_testing_coded > 0:
        tf = Counter(d.get("testing_framing") for d in testing_coded)
        stats["testing_framing"] = {k: v for k, v in sorted(tf.items(), key=lambda x: -x[1])}
        stats["n_testing_coded"] = n_testing_coded
        print(f"\n  testing_framing (coded n={n_testing_coded}): {stats['testing_framing']}")

    # loss_aversion_framing (only on coded subset)
    laf_coded = [d for d in analytical if d.get("loss_aversion_framing") is not None]
    n_laf_coded = len(laf_coded)
    if n_laf_coded > 0:
        laf = Counter(d.get("loss_aversion_framing") for d in laf_coded)
        stats["loss_aversion_framing"] = {k: v for k, v in sorted(laf.items(), key=lambda x: -x[1])}
        stats["n_laf_coded"] = n_laf_coded
        print(f"\n  loss_aversion_framing (coded n={n_laf_coded}): {stats['loss_aversion_framing']}")

    return stats, analytical, ae_bi


def print_stats_summary(stats: Dict[str, Any]):
    """Pretty-print a summary of what was analyzed."""
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"""
Dataset:
  Total JDs: {stats['n_total']}
  Analytical cohort (AE/BI + team_lead): {stats['n_analytical']}
  AE/BI only: {stats['n_ae_bi']}

Key Findings:
  — Rigour: {stats['velocity_vs_rigour'].get('rigour', 0)}/{stats['n_analytical']} ({100*stats['velocity_vs_rigour'].get('rigour', 0)/stats['n_analytical']:.0f}%)
  — dbt prevalence (AE/BI): {stats['has_dbt_count']}/{stats['n_ae_bi']} ({stats['has_dbt_pct']:.0f}%)
  — Data team maturity: mid {stats['data_team_maturity'].get('mid', 0)} ({100*stats['data_team_maturity'].get('mid', 0)/stats['n_analytical']:.0f}%)
""")


def main():
    import argparse
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data-only", action="store_true", help="Only regenerate data.json (default: full regen)")
    args = parser.parse_args()

    try:
        n_compiled = compile_data_json()

        if not args.data_only:
            # Load and analyze
            with open(OUT_DATA_JSON) as f:
                data = json.load(f)

            stats, analytical, ae_bi = analyze_dimensions(data)
            print_stats_summary(stats)

            print("\n" + "=" * 70)
            print("NEXT STEPS")
            print("=" * 70)
            print("""
The following files have been regenerated:
  ✓ analysis/data.json — updated with all JD classifications

Manual updates still needed:
  → Report statistics (report.md) — copy tables from above into the report
  → Test the interactive dashboard at analysis/index.html
  → Commit changes with appropriate message
""")

        return 0
    except Exception as e:
        print(f"\nERROR: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
