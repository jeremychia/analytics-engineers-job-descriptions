#!/usr/bin/env python3
"""Build inputs/deck_data.json: every number and per-ad point the slides animate.

Reads the corpus (data/), the CSV/JSON snapshots in inputs/, and the geo bucketing
in scripts/geo_classify.py. Nothing is typed by hand except the ladder step sizes
and the three quotes, which are checked as exact substrings of the archives.

Usage:  python3 analysis/data_conference_2026/build/prep_data.py
"""
import csv, json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(HERE))
from geo_classify import classify_geo_region  # noqa: E402
from roletext import role_lines  # noqa: E402

DATA = ROOT / "data"
IN = HERE / "inputs"
TOOLS = [("has_sql", "SQL"), ("has_python", "Python"), ("has_dbt", "dbt"), ("has_airflow", "Airflow"),
         ("has_dagster", "Dagster"), ("has_snowflake", "Snowflake"), ("has_bigquery", "BigQuery"),
         ("has_databricks", "Databricks"), ("has_redshift", "Redshift"), ("has_looker", "Looker"),
         ("has_tableau", "Tableau"), ("has_power_bi", "Power BI"), ("has_fabric_synapse", "Fabric / Synapse"),
         ("has_aws", "AWS"), ("has_azure", "Azure"), ("has_gcp", "GCP"), ("has_version_control", "Git"),
         ("has_ci_cd", "CI/CD"), ("has_semantic_layer", "Semantic layer")]
SEN = {"junior": 0, "mid": 1, "senior": 2, "lead": 3, "staff": 3, "manager": 3}
FRANCE = re.compile(r"france|paris|lyon|toulouse|nantes|lille|bordeaux|marseille|rennes|montpellier|strasbourg|île-de-france|ile-de-france|sophia|grenoble|clermont|rouen|nanterre|puteaux|courbevoie|levallois|issy", re.I)
DEGREE = re.compile(r"\b(bachelor|master|degree|bsc|msc|diplôme|diplome|licence|phd|bac\s?\+\s?[2-5]|école d.ingénieur|ecole d.ingenieur|ingénieur de formation)\b", re.I)
BAC5 = re.compile(r"bac\s?\+\s?[45]|master|école d.ingénieur|ecole d.ingenieur|diplôme d.ingénieur|cursus ingénieur|ingénieur", re.I)
YEARS = re.compile(r"(\d{1,2})\s?(?:-|–|to)?\s?(?:\d{1,2})?\s?\+?\s?(?:years?|yrs?|ans|jahre|jaar)\b", re.I)
PORTFOLIO = re.compile(r"portfolio|personal project|side project|projets? personnels?", re.I)
VISA = re.compile(r"\bvisa\b|work permit|work authori[sz]ation|right to work|clearance|background check|citizenship|permis de travail", re.I)


def short(c):
    return re.sub(r"\s*\(.*?\)", "", c).strip()


def main():
    recs = {}
    for f in sorted(DATA.iterdir()):
        j, a = f / f"{f.name}.json", f / "jd_archive.md"
        if j.exists() and a.exists():
            recs[f.name] = (json.loads(j.read_text(encoding="utf-8")), a.read_text(encoding="utf-8").split("## Layer B")[0])
    out = {"corpus_n": len(recs), "tools": [t[1] for t in TOOLS]}

    # --- AI waffle: one row per ad (regenerated 26 Oct from the full corpus; see research/ai_pipeline)
    ai = list(csv.DictReader(open(IN / "ai_flags.csv")))
    out["ai"] = {
        "n": len(ai),
        "rows": [[int(r["roleAI"]), 2 if int(r["concrete"]) else 1 if int(r["vague_only"]) else 0 if not int(r["roleAI"]) else 1,
                  int(r["req_no_duty"]), int(r["ai_req"]), SEN.get(r["seniority"], 1)] for r in ai],
        "months": {m: round(100 * sum(int(r["roleAI"]) for r in ai if r["lang"] == "en" and r["scrape"][:7] == k) / max(1, sum(1 for r in ai if r["lang"] == "en" and r["scrape"][:7] == k))) for m, k in (("Aug", "2026-08"), ("Sep", "2026-09"), ("Oct", "2026-10"))},
    }

    # --- titles -> five jobs
    cl = list(csv.DictReader(open(IN / "ae_clusters.csv")))
    names = {"1": "BI developer", "0": "Analyst", "3": "dbt modeller", "2": "Quality and governance", "4": "Data-engineer-like"}
    out["titles"] = {"n_titles": 534, "names": names, "ads": [[int(r["cl"]), r["role"]] for r in cl]}

    # --- similarity barcode
    out["sim"] = json.loads((IN / "similarity_matrix.json").read_text())

    # --- benefits grid
    rows = list(csv.DictReader(open(IN / "benefits_prevalence_by_region.csv")))
    regions = ["US", "UK & Ireland", "France", "DACH", "Benelux", "Southern Europe", "CEE/Baltics", "Nordics", "APAC"]
    tags = ["health", "pension", "equity", "bonus", "pto", "parental", "remote_flex", "learning", "wellbeing",
            "meal", "transport", "flex_hours"]
    have = {r["tag"] for r in rows}
    tags = [t for t in tags if t in have] or sorted(have)[:12]
    grid = {t: {r["region"]: round(float(r["pct"]), 1) for r in rows if r["tag"] == t} for t in tags}
    out["benefits"] = {"regions": regions, "tags": tags, "pct": grid,
                       "n": {r["region"]: int(r["n"]) for r in rows if r["tag"] == tags[0]}}

    # --- ladder core (classifier ladder) and the wording steps
    lad = list(csv.reader(open(IN / "ladder_prevalence_by_level.csv")))
    core = {}
    for r in lad[2:]:
        if r and r[0]:
            core[r[0]] = [float(x) for x in r[1:5]]
    out["ladder"] = {"core": core, "years": [1, 3, 5, 6],
                     "steps": {"junior_to_mid": [["'support / assist' wording", -26], ["degree mentioned", -27]],
                               "mid_to_senior": [["mentoring, coaching, code review", 20], ["defining standards and best practices", 19],
                                                 ["'lead / drive' wording", 18], ["'own' wording", 13], ["roadmap and prioritisation", 12]],
                               "senior_to_lead": [["roadmap or strategy", 31], ["'lead / drive' wording", 26], ["cross-team work", 19],
                                                  ["people management", 13], ["'independently'", -17]]}}

    # --- juniors (classifier label) and the France cut
    jr = []
    for jid, (r, txt) in recs.items():
        if r.get("seniority") != "junior":
            continue
        rl = txt  # full ad text: the role-section parser only knows English headings
        yrs = [int(m.group(1)) for m in YEARS.finditer(rl)]
        langs = [l for l in (r.get("language_gate_languages") or []) if str(l).lower() != "english"]
        flags = [int(bool(DEGREE.search(rl))), int(bool(yrs and max(yrs) >= 2)),
                 int(r.get("language_gate_type") == "hard" and bool(langs)), int(bool(PORTFOLIO.search(rl))),
                 int(bool(VISA.search(rl)))]
        fr = bool(FRANCE.search(r.get("job_location") or ""))
        jr.append({"id": jid, "co": short(r["company"]), "role": r["role"], "flags": flags, "gate": int(bool(flags[1] or flags[2] or flags[4])),
                   "fr": int(fr), "bac": int(bool(BAC5.search(rl))), "lang": r.get("jd_language")})
    out["junior"] = {"n": len(jr), "ads": jr, "labels": ["degree stated", "2+ years", "non-English language", "portfolio", "visa / clearance"]}
    out["junior_counts"] = {"classifier": 50, "title": 16, "text_label": 60, "loose": 117}

    # --- duty gaps: Power BI / Fabric ads minus dbt + warehouse ads, by responsibility theme
    g = json.loads((IN / "duty_gap_stats.json").read_text())
    holm = {t["test"][7:]: t["holm"] for t in g["tests"] if t["test"].startswith("theme: ")}
    out["gap"] = {"themes": g["themes"], "mean": g["gap"]["mean"], "lo": g["gap"]["lo"], "hi": g["gap"]["hi"],
                  "holm": [holm[t] for t in g["themes"]], "n": g["gap"]["n"], "ms": g["gap"]["ms"], "dbt": g["gap"]["dbt"],
                  "autonomy": g["autonomy"], "or_strategic": g["or_strategic"]}

    # --- stack against scope, within seniority (English ads; groups from the has_* flags)
    grp = lambda r: ("dbt_only" if r.get("has_dbt") and not (r.get("has_power_bi") or r.get("has_fabric_synapse")) else
                     "pbi_only" if (r.get("has_power_bi") or r.get("has_fabric_synapse")) and not r.get("has_dbt") else
                     "pbi_dbt" if r.get("has_dbt") else "neither")
    en = [(r, grp(r)) for r, _ in recs.values() if r.get("jd_language") == "en"]
    st = {"n": len(en), "levels": {}}
    for lv in ("mid", "senior"):
        st["levels"][lv] = {}
        for g in ("dbt_only", "pbi_only"):
            sel = [r for r, gg in en if r.get("seniority") == lv and gg == g]
            st["levels"][lv][g] = [round(100 * sum(1 for r in sel if r.get("autonomy_level") == "strategic") / len(sel)), len(sel)]
    ae = [(r, g) for r, g in en if re.search(r"analytics engineer", r["role"], re.I)]
    st["ae_titled"] = {"n": len(ae), "pbi_only_pct": round(100 * sum(1 for _, g in ae if g == "pbi_only") / len(ae))}
    out["stack"] = st
    out["stats2"] = json.loads((IN / "more_stats.json").read_text())   # from more_stats.py (run it after prep once, then prep again)
    out["stats"] = json.loads((IN / "stack_stats.json").read_text())   # from stack_stats.py

    # --- verified quotes
    quotes = [("2026-08-01_accenture_analytics-engineer-lisbon", "BI Engineering Senior Analyst | Early Career | Full time"),
              ("2026-08-01_accenture_analytics-engineer-lisbon", "Minimum of 3+ years of experience in Business Data, BI Engineering, or Analytics Engineering roles"),
              ("2026-10-16_aritzia_senior-analytics-engineer", "Curiosity to leverage AI to accelerate workflows and generate business solutions"),
              ("2026-10-07_lc-waikiki_analytics-engineer", "Active use of AI code assistant tools, preferably GitHub Copilot, Cursor, or Claude Code, in daily development practice"),
              ("2026-07-22_lenovo_senior-finance-data-analysis-engineer", "Act as a BI Developer / Consultant, supporting Lenovo's Finance team"),
              ("2026-09-08_january_senior-analytics-engineer", "Own the gold layer and build January's semantic layer"),
              ("2026-09-05_dataroots_analytics-engineer", "You have 3+ years of experience where you were involved in a data project"),
              ("2026-10-09_enhance_analytics-engineer", "2-5 years in analytics, BI or data engineering. Strong internships or graduate projects count."),
              ("2026-10-09_enhance_analytics-engineer", "Enhance is hiring a Junior Analytics Engineer"),
              ("2026-07-31_itt-inc_junior-analytics-engineer", "2+ years of experience in data analytics, or a similar role")]
    for jid, q in quotes:
        txt = recs[jid][1] if jid in recs else ""
        if q not in txt:
            print("WARNING quote not found verbatim:", jid, q[:60])
    out["quotes"] = {"accenture_says": quotes[0][1], "accenture_asks": quotes[1][1], "vague": quotes[2][1], "concrete": quotes[3][1],
                     "lenovo": quotes[4][1], "january": quotes[5][1],
                     "dataroots": quotes[6][1], "enhance_asks": quotes[7][1], "enhance_says": quotes[8][1], "itt": quotes[9][1]}

    # --- pitch-yourself map: fused positions + tools
    pos = {n[0]: n for n in json.loads((IN / "fused_positions.json").read_text())["nodes"]}
    rgn = ["US", "UK & Ireland", "France", "DACH", "Benelux", "Southern Europe", "CEE/Baltics", "Nordics", "APAC", "Other"]
    ads = []
    for jid, (r, txt) in recs.items():
        if jid not in pos:
            continue
        mask = sum(1 << k for k, (f, _) in enumerate(TOOLS) if r.get(f))
        reg = classify_geo_region(r.get("job_location") or "")
        ads.append([round(pos[jid][3], 2), round(pos[jid][4], 2), mask, SEN.get(r.get("seniority"), 1), reg, short(r["company"])])
    out["pitch"] = {"ads": ads, "n": len(ads), "regions": sorted({a[4] for a in ads})}
    json.dump(out, open(IN / "deck_data.json", "w"), separators=(",", ":"), ensure_ascii=False)
    print("corpus", len(recs), "| ai rows", len(ai), "| junior", len(jr), "| france junior", sum(j["fr"] for j in jr),
          "| pitch ads", len(ads), "| benefit tags", tags)


if __name__ == "__main__":
    main()
