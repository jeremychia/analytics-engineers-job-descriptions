#!/usr/bin/env python3
"""Build inputs/deck_data.json: every number and per-ad point the slides animate.

Reads the corpus (data/), the CSV/JSON snapshots in inputs/, and the geo bucketing
in scripts/geo_classify.py. Nothing is typed by hand except the ladder step sizes,
the hand-checked junior lists, the Indeed pay ticks and the quotes (checked as exact
substrings of the archives).

Order: ai_flags.py, titles_stats.py, make_similarity_matrix.py, benefits_tags.py, missing_stats.py, prep_data.py,
then stack_stats.py and more_stats.py (they read deck_data.json), then prep_data.py again.
Usage:  python3 analysis/data_conference_2026/build/prep_data.py
"""
import csv, json, math, re, subprocess, sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(HERE))
from geo_classify import classify_geo_region  # noqa: E402
from roletext import role_lines  # noqa: E402
from regions import grid_region, GRID  # noqa: E402
from missing_stats import min_years_asked  # noqa: E402
from benefits_tags import tag_ad  # noqa: E402

DATA = ROOT / "data"
IN = HERE / "inputs"
SNAPSHOT = "037ff713"   # the talk quotes the ads in the corpus at this commit; later records stay out of the deck
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
JR_TITLE = re.compile(r"\b(junior|jr\.?|graduate|grad|entry[- ]level|intern(ship)?|trainee|stage|stagiaire|alternan(ce|t)|apprenti(e|ssage)?|apprentice(ship)?|werkstudent|praktikant|working student|early career|débutant)\b", re.I)
EARLY = re.compile(r"(?<!mentor )(?<!mentoring )(?<!guide )(?:early[- ]career|entry[- ]level (?:role|position|opportunit)|recent(?:ly)? graduat|new grads?\b|fresh graduat|jeune diplômé|young graduates?)|seniority(?: level)?\W{0,4}\s*(?:entry level|internship)", re.I)
MIN_YEARS = re.compile(r"(?<![\d.])(\d{1,2})\s?(?:\+|plus)?\s?(?:(?:-|–|to)\s?\d{1,2}\s?)?\+?\s?(?:years?|yrs?|ans|jahre|jaar)\b", re.I)
ROUTE = [("internship", re.compile(r"\b(stage|stagiaire|intern(ship)?)\b", re.I)), ("alternance", re.compile(r"\b(alternan(ce|t)|apprenti(e|ssage)?|apprentice(ship)?)\b", re.I)),
         ("graduate", re.compile(r"\b(graduate|trainee)\b", re.I))]
# junior ads (classifier) whose minimum degree ask is a master's, Bac+4/5 or engineering school, read by hand; bare "master" or "ingénieur" elsewhere is not counted
BAC5_CHECKED = {"2026-10-11_leonar_consultant-analytics-engineer", "2026-10-19_devoteam-data-driven_analytics-engineer", "2026-10-26_axa_stage-data-engineering-analytics",
                "2026-10-26_back-market_customer-journey-app-analytics-apprentice", "2026-10-26_fleury-michon_stage-data-engineer-reporting-bi-mars-2027",
                "2026-10-26_grdf_analytics-engineer-data-engineer-microsoft-fabric-snowflake-power-bi", "2026-10-26_hager_stage-ingenieur-data-analytics-dashboards",
                "2026-10-26_numberly_stage-analytics-engineer-data-collab", "2026-10-26_renault-group_ap26-bac5-alternance-data-analytics-et-ia-audit-interne",
                "2026-10-26_stellantis_stage-ingenieur-data-analytics-performance-economique-base-couts-composants-mecatroniques",
                "2026-10-26_wavestone_data-platform-analytics-engineering-data-for-ia", "2026-10-11_vattenfall_international-trainee-hydro-power-optimisation-and-data-analytics-engineer",
                "2026-10-30_sia_consultant-analytics-engineer"}
# ads that name a way in other than a degree (a bootcamp, an apprenticeship, self-taught practice, a non-traditional background), read by hand from a wide pattern search
OTHER_ROUTES = [("2026-07-21_moerie-beauty_analytics-engineer", "through a degree or a relevant bootcamp/training program"),
                ("2026-07-29_fremantle-dockers_analytics-engineer", "This may come from study, work, or self-taught practice"),
                ("2026-10-09_zillow_analytics-engineer", "Zillow values the experience and perspective of candidates with non-traditional backgrounds"),
                ("2026-10-30_glovo_data-analytics-engineer-mx-global", "Relevant internship, bootcamp, academic or personal project, or previous experience in a fast-paced product/tech/marketplace environment."),
                ("2026-11-02_inverto_senior-business-intelligence-developer-fmd", "You've successfully completed your apprenticeship as a Fachinformatiker für Anwendungsentwicklung and/or a degree in IT or a related field")]
# junior ads that say internships or projects count toward the experience ask, read by hand (exact substrings, checked below)
COUNTS_PROJECTS = [("2026-06-30_louis-dreyfus-company_data-analytics-engineer-finance-systems", "Internship experience is welcomed"),
                   ("2026-07-06_intelligent-lending_analytics-engineer-ocean-squad", "0–2 years' experience in an analytics, data or engineering role, including internships, placements or strong personal/academic projects"),
                   ("2026-07-14_carlyle-wissing-cushman-wakefield_eic-junior-analytics-engineer", "Some practical experience with data engineering, analytics engineering, or BI development through employment, internships, or academic projects"),
                   ("2026-08-19_glovo_analytics-engineer-i-ai-and-data-enablement", "Previous professional, internship, academic or personal project related to data, analytics or AI"),
                   ("2026-08-26_endowus_analytics-engineer", "(strong internship experience welcome)"),
                   ("2026-10-05_isa_associate-data-analytics-engineer", "(including internships or academic projects)"),
                   ("2026-10-05_shi-international_associate-analytics-engineer-data-visualization", "Internship, academic, or project experience using Microsoft Power BI or similar business intelligence tools"),
                   ("2026-10-09_enhance_analytics-engineer", "Strong internships or graduate projects count."),
                   ("2026-10-11_leonar_consultant-analytics-engineer", "Minimum 1 an d’expérience, stages inclus"),
                   ("2026-10-22_wd_engineer-data-analytics-engineering", "Coursework or project work in machine learning, statistical modeling, or process analytics"),
                   ("2026-10-26_abn-amro-bank-nv_analytics-engineer-global-finance", "Demonstrated initiative beyond your academic studies, for example through extra-curricular activities or internships"),
                   ("2026-10-30_rabot-energy_analytics-engineer", "First practical experience with data (roughly 0 to 3 years, including working-student roles, internships or a serious own project)."),
                   ("2026-11-01_dialogic_junior-analytics-engineer-data-driven-marketing", "Du hast erste praktische Erfahrung mit SQL und/oder Python, zum Beispiel aus Uni, Projekten oder einem Job")]
# Indeed Hiring Lab, 7 May 2026: share of postings stating pay, Mar 2026 (research/ext_market.md)
INDEED_PAY = {"source": "Indeed Hiring Lab, 7 May 2026 (Mar 2026 postings)", "url": "https://hiringlab.indeed.com/uk/blog/2026/05/07/full-salary-transparency-in-europe-is-still-a-distant-prospect/",
              "pct": {"UK": 56, "FR": 43, "NL": 48, "DE": 12}, "grid_region": {"UK": "UK & Ireland", "FR": "France", "NL": "Benelux", "DE": "DACH"}}


def wilson(k, n, z=1.96):
    if not n: return [0, 0]
    p = k / n; d = 1 + z * z / n; c = (p + z * z / (2 * n)) / d; h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return [round(c - h, 4), round(c + h, 4)]


def stated_min_years(txt, resp):
    t = "\n".join(role_lines(txt, resp)) or txt
    v = [int(m.group(1)) for m in MIN_YEARS.finditer(t) if int(m.group(1)) <= 15]
    return max(v) if v else None


def short(c):
    return re.sub(r"\s*\(.*?\)", "", c).strip()


def main():
    recs = {}
    in_snapshot = set(subprocess.check_output(["git", "ls-tree", "--name-only", f"{SNAPSHOT}:data"], cwd=ROOT, text=True).split())
    for f in sorted(DATA.iterdir()):
        if f.name not in in_snapshot:
            continue
        j, a = f / f"{f.name}.json", f / "jd_archive.md"
        if j.exists() and a.exists():
            recs[f.name] = (json.loads(j.read_text(encoding="utf-8")), a.read_text(encoding="utf-8").split("## Layer B")[0])
    out = {"corpus_n": len(recs), "tools": [t[1] for t in TOOLS]}

    # --- AI waffle: one row per ad (regenerated 26 Oct from the full corpus; see research/ai_pipeline)
    ai = list(csv.DictReader(open(IN / "ai_flags.csv")))
    I = lambda r, c: int(r[c])
    month = lambda k: [r for r in ai if r["lang"] == "en" and r["scrape"][:7] == k]
    role = [r for r in ai if I(r, "roleAI")]; use = [r for r in ai if I(r, "USE")]
    out["ai"] = {
        "n": len(ai),
        "rows": [[int(r["roleAI"]), 2 if int(r["concrete"]) else 1 if int(r["vague_only"]) else 0 if not int(r["roleAI"]) else 1,
                  int(r["req_no_duty"]), int(r["ai_req"]), SEN.get(r["seniority"], 1), I(r, "PREP"), I(r, "USE"), I(r, "guard_same")] for r in ai],
        "row_cols": ["role_ai", "kind (0 none, 1 vague, 2 concrete)", "required_no_duty", "required", "level (0 junior .. 3 lead+)", "prep", "use", "guard_same"],
        "months_detail": {m: {"k": sum(I(r, "roleAI") for r in month(k)), "n": len(month(k)), "ci": wilson(sum(I(r, "roleAI") for r in month(k)), len(month(k)))}
                          for m, k in (("Aug", "2026-08"), ("Sep", "2026-09"), ("Oct", "2026-10"))},
        "enabler": {"k": sum(I(r, "PREP") for r in role), "n": len(role), "pct": round(100 * sum(I(r, "PREP") for r in role) / len(role), 1),
                    "ci": wilson(sum(I(r, "PREP") for r in role), len(role)), "population": "ads asking for role AI, all languages"},
        "guard_same": {"k": sum(I(r, "guard_same") for r in use), "n": len(use), "pct": round(100 * sum(I(r, "guard_same") for r in use) / len(use), 1),
                       "ci": wilson(sum(I(r, "guard_same") for r in use), len(use)), "population": "ads asking to use AI tools, all languages"},
        "months": {m: round(100 * sum(int(r["roleAI"]) for r in ai if r["lang"] == "en" and r["scrape"][:7] == k) / max(1, sum(1 for r in ai if r["lang"] == "en" and r["scrape"][:7] == k))) for m, k in (("Aug", "2026-08"), ("Sep", "2026-09"), ("Oct", "2026-10"))},
    }

    # --- titles -> duty groups (titles_stats.py: k chosen by bootstrap stability, x = first principal component of duty shares)
    ts = json.loads((IN / "titles_stats.json").read_text())
    ids, grp = ts["ids"], ts["group"]; gs = sorted(ts["names"], key=int)
    member = lambda g: [recs[j][0] for j, c in zip(ids, grp) if str(c) == g]; rest = lambda g: [recs[j][0] for j, c in zip(ids, grp) if str(c) != g]
    share = lambda rs, f: round(100 * sum(1 for r in rs if r.get(f)) / len(rs), 1)
    mark = lambda g: max(TOOLS, key=lambda t: share(member(g), t[0]) - share(rest(g), t[0]))
    out["titles"] = {"n_titles": len(set(ts["roles"])), "n_titles_corpus": len({r["role"] for r, _ in recs.values()}), "names": ts["names"],
                     "ads": [[c, role] for c, role in zip(grp, ts["roles"])], "ids": ids, "x": ts["x"], "group_x": ts["group_x"], "group_n": ts["group_n"],
                     "core": {g: share(member(g), "has_sql") for g in gs},
                     "marks": {g: {"tool": mark(g)[1], "share": share(member(g), mark(g)[0]), "rest": share(rest(g), mark(g)[0])} for g in gs},
                     "exact_ae": {g: sum(1 for r in member(g) if r["role"].strip() == "Analytics Engineer") for g in gs},
                     "off_title": [j for j, role in zip(ids, ts["roles"]) if not re.search(r"analytics engineer", role, re.I)],
                     **{k: ts[k] for k in ("n", "n_titled", "n_no_duties", "k", "stability", "rule", "method", "centres", "x_loadings", "pole", "pole_names", "pole_sizes", "population")}}

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
    geo = {r["jd_id"]: r.get("geo_region") for r in json.loads((ROOT / "analysis/data.json").read_text())}   # per-ad files lack geo_region
    pay = {g: [r for jid, (r, _) in recs.items() if grid_region({**r, "geo_region": geo.get(jid)}) == g] for g in GRID}
    out["benefits"] = {"regions": regions, "tags": tags, "pct": grid,
                       "n": {r["region"]: int(r["n"]) for r in rows if r["tag"] == tags[0]},
                       "pay": {g: {"k": sum(1 for r in v if r.get("salary_min") is not None or r.get("salary_max") is not None), "n": len(v),
                                   "pct": round(100 * sum(1 for r in v if r.get("salary_min") is not None or r.get("salary_max") is not None) / len(v), 1)} for g, v in pay.items()},
                       "indeed_pay": INDEED_PAY}

    # --- ladder core (classifier ladder) and the wording steps
    lad = list(csv.reader(open(IN / "ladder_prevalence_by_level.csv")))
    core = {}
    for r in lad[2:]:
        if r and r[0]:
            core[r[0]] = [float(x) for x in r[1:5]]
    s2 = json.loads((IN / "more_stats.json").read_text()) if (IN / "more_stats.json").exists() else {}
    if "ladder_core" in s2: core = s2["ladder_core"]   # English ads, same set as the tests (more_stats.py)
    tests = s2.get("ladder", {}).get("tests", [])
    support = next((t for t in tests if t["item"] == "SCOPE: support / assist" and t["step"] == "junior to mid"), None)
    holm = {"core_min": min((t["holm"] for t in tests if t["panel"] == "core"), default=None),
            "strategic_max": max((t["holm"] for t in tests if t["item"] == "strategic verbs"), default=None),
            "support_junior_to_mid": [round(100 * support["diff"]), support["holm"]] if support else None}
    out["ladder"] = {"core": core, "years": [1, 3, 5, 6], "n": s2.get("ladder", {}).get("n"), "holm": holm, "france": s2.get("ladder_france"),
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
        jr.append({"id": jid, "co": short(r["company"]), "role": r["role"], "flags": flags, "gate": int(bool(flags[1] or flags[2] or flags[4])), "yrs2": int((min_years_asked(rl) or 0) >= 2),
                   "fr": int(fr), "bac": int(bool(BAC5.search(rl))), "bac_checked": int(jid in BAC5_CHECKED), "lang": r.get("jd_language"),
                   "route": next((k for k, p in ROUTE if p.search(r["role"])), None)})
    for jid, q in COUNTS_PROJECTS:
        if q not in recs[jid][1]:
            print("WARNING counts-projects quote not found verbatim:", jid, q[:60])
    out["junior"] = {"n": len(jr), "ads": jr, "labels": ["degree stated", "2+ years", "non-English language", "portfolio", "visa / clearance"],
                     "counts_projects": [{"id": j, "co": short(recs[j][0]["company"]), "quote": q} for j, q in COUNTS_PROJECTS]}
    # the degree is the gate that falls hardest on juniors: language and visa asks differ little by level once the ad's language is held fixed
    level = {"junior": "junior", "mid": "mid", "senior": "senior", "lead": "lead+", "staff": "lead+", "manager": "lead+"}
    level_text = lambda lv: [t for r, t in recs.values() if level.get(r.get("seniority")) == lv]
    out["junior"]["degree_by_level"] = {lv: [sum(bool(DEGREE.search(t)) for t in level_text(lv)), len(level_text(lv))] for lv in ("junior", "mid", "senior", "lead+")}
    for jid, q in OTHER_ROUTES:
        if q not in recs[jid][1]:
            print("WARNING other-route quote not found verbatim:", jid, q[:60])
    out["junior"]["other_routes"] = [{"id": j, "co": short(recs[j][0]["company"]), "quote": q} for j, q in OTHER_ROUTES]
    # four nested counts on all ads: title word, classifier, plus early-career wording, plus mid ads asking at most 2 years
    title = {j for j, (r, _) in recs.items() if JR_TITLE.search(r["role"])}
    clf = {j for j, (r, _) in recs.items() if r.get("seniority") == "junior"}
    text = clf | title | {j for j, (_, t) in recs.items() if EARLY.search(t)}
    loose = text | {j for j, (r, t) in recs.items() if r.get("seniority") == "mid" and (stated_min_years(t, r.get("responsibilities") or []) or 99) <= 2}
    out["junior_counts"] = {"classifier": len(clf), "title": len(title), "text_label": len(text), "loose": len(loose), "n": len(recs),
                            "title_not_classifier": sorted(title - clf), "text_extra": sorted(text - clf)}

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
    every = [(r, grp(r)) for r, _ in recs.values()]   # strategic share by stack: every language, same set as stack_stats.py
    st = {"n": len(en), "corpus_n": len(every), "levels": {}}
    for lv in ("mid", "senior"):
        st["levels"][lv] = {}
        for g in ("dbt_only", "pbi_only"):
            sel = [r for r, gg in every if r.get("seniority") == lv and gg == g]
            st["levels"][lv][g] = [round(100 * sum(1 for r in sel if r.get("autonomy_level") == "strategic") / len(sel)), len(sel)]
    ae = [(r, g) for r, g in en if re.search(r"analytics engineer", r["role"], re.I)]
    st["ae_titled"] = {"n": len(ae), "pbi_only_pct": round(100 * sum(1 for _, g in ae if g == "pbi_only") / len(ae))}
    out["stack"] = st
    out["seniority_n"] = dict(Counter(r.get("seniority") for r, _ in recs.values()))   # every ad, classifier level
    hr = json.loads((IN / "hand_read_mentoring.json").read_text())   # hand-read: all junior ads, and a sample of 50 senior ads
    jr_guides = [a for a in hr["junior"] if a["names_guide"]]
    out["mentoring"] = {"junior_names_guide": [len(jr_guides), len(hr["junior"])], "junior_any_support": [sum(a["any_support"] for a in hr["junior"]), len(hr["junior"])],
                        "senior_asks_mentor": [sum(a["asks_mentor"] for a in hr["senior_sample"]), len(hr["senior_sample"])],
                        "senior_asks_enable": [sum(a["asks_enable"] for a in hr["senior_sample"]), len(hr["senior_sample"])],
                        "quotes": {a["id"]: a["quote"] for a in jr_guides}}
    asks_ai = {r["jd_id"] for r in ai if r["roleAI"] == "1"}; jr_ai = [a for a in hr["junior"] if a["id"] in asks_ai]
    out["mentoring"]["junior_asks_ai"] = [sum(a["names_guide"] for a in jr_ai), len(jr_ai)]   # junior ads asking for AI: how many say who will teach
    out["mentoring"]["junior_learning"] = [sum(a["learning"] for a in hr["junior"]), len(hr["junior"])]   # hand-read: a budget, programme, courses or set time to learn
    out["mentoring"]["junior_neither"] = [sum(not a["names_guide"] and not a["learning"] for a in hr["junior"]), len(hr["junior"])]   # no one named to teach, nothing to learn with
    lb = lambda lv: [tag_ad(re.sub(r"^\*\*URL:\*\*.*$", "", txt, flags=re.M))["learning"] for r, txt in recs.values() if r.get("seniority") == lv]
    out["mentoring"]["learning_benefit_pct"] = {lv: round(100 * sum(v) / len(v)) for lv in ("junior", "senior") for v in [lb(lv)]}   # the benefits pattern, before any hand read
    # --- progression: is SQL, or understanding the business, a rung? English ads, the share naming each at every level (pattern only; a phrase match cannot tell a real ask from boilerplate)
    BIZ = re.compile(r"understand(?:ing)? (?:of )?(?:the |our |your )?(?:business|domain|commercial)|business (?:context|acumen|understanding|knowledge|impact|outcomes|value|strategy|domain)|domain (?:knowledge|expertise|understanding)|commercial (?:awareness|acumen|understanding|mindset)|curious about|how the business|business-minded|business mindset", re.I)
    grp = lambda lv: "lead+" if lv in ("lead", "staff", "manager") else lv
    prog = {lv: [(bool(re.search(r"\bSQL\b", txt)), bool(BIZ.search(txt))) for r, txt in recs.values() if r.get("jd_language") == "en" and grp(r.get("seniority")) == lv] for lv in ("junior", "mid", "senior", "lead+")}
    out["progression"] = {"levels": list(prog), "n": [len(v) for v in prog.values()], "sql": [round(100 * sum(a for a, _ in v) / len(v)) for v in prog.values()],
                          "business": [round(100 * sum(b for _, b in v) / len(v)) for v in prog.values()], "business_k": [sum(b for _, b in v) for v in prog.values()]}
    out["stats2"] = json.loads((IN / "more_stats.json").read_text())   # from more_stats.py (run it after prep once, then prep again)
    out["stats"] = json.loads((IN / "stack_stats.json").read_text())   # from stack_stats.py
    m = json.loads((IN / "missing_stats.json").read_text())   # from missing_stats.py; totals only, the per-ad flags stay in the file
    out["missing"] = {"n": m["n"], "items": m["items"]}
    out["stack"]["context"] = out["stats"].get("context")
    out["gap_by_level"] = out["stats"].get("gap_by_level")

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
              ("2026-07-31_itt-inc_junior-analytics-engineer", "2+ years of experience in data analytics, or a similar role"),
              ("2026-09-25_dex_founding-analytics-engineer", "Set the standards for data quality, definitions and instrumentation across Dex."),
              ("2026-07-29_zego_analytics-engineer", "AI tools now handle a lot of the heavy lifting of writing SQL and boilerplate"),
              ("2026-07-29_zego_analytics-engineer", "Read, debug, and critically review SQL (including AI-generated code)"),
              ("2026-08-07_asb-bank_analytics-engineer", "Enjoy dedicated time for training and certification, with guidance and mentorship from Senior/Staff Engineers and Chapter Leads.")]
    for jid, q in quotes:
        txt = recs[jid][1] if jid in recs else ""
        if q not in txt:
            print("WARNING quote not found verbatim:", jid, q[:60])
    out["quotes"] = {"accenture_says": quotes[0][1], "accenture_asks": quotes[1][1], "vague": quotes[2][1], "concrete": quotes[3][1],
                     "lenovo": quotes[4][1], "january": quotes[5][1],
                     "dataroots": quotes[6][1], "enhance_asks": quotes[7][1], "enhance_says": quotes[8][1], "itt": quotes[9][1], "dex": quotes[10][1],
                     "zego_says": quotes[11][1], "zego_asks": quotes[12][1], "asb": quotes[13][1]}
    # Stanford Digital Economy Lab, "Canaries in the Coal Mine", revised 12 Aug 2026: US employment of 22-25-year-olds in AI-exposed jobs, against trend
    out["stanford"] = {"gap_pct": 19, "ages": "22–25", "revised": "12 Aug 2026"}

    # --- what the job is: duty themes read from each ad's responsibility bullets, and the tools it names
    themes = json.loads((ROOT / "analysis" / "responsibility_classification.json").read_text())["jd_theme_sets"]
    themes = {j: set(ts) for j, ts in themes.items() if j in recs}
    names = sorted({t for ts in themes.values() for t in ts}, key=lambda t: -sum(t in ts for ts in themes.values()))
    tool_share = lambda f: sum(1 for r, _ in recs.values() if r.get(f) is True)
    out["job"] = {"n_themes": len(themes), "themes": [[t, sum(t in ts for ts in themes.values())] for t in names],
                  "tools": {g: [[label, tool_share(f)] for f, label in fs] for g, fs in (
                      ("core", [("has_sql", "SQL"), ("has_python", "Python"), ("has_dbt", "dbt")]),
                      ("warehouse", [("has_snowflake", "Snowflake"), ("has_bigquery", "BigQuery"), ("has_databricks", "Databricks")]),
                      ("BI", [("has_power_bi", "Power BI"), ("has_tableau", "Tableau"), ("has_looker", "Looker")]))},
                  "tools_next": sorted([[label, tool_share(f)] for f, label in TOOLS[3:]], key=lambda t: -t[1])[:4],   # the four most named after SQL, Python and dbt, of any kind
                  "max_other": max(tool_share(f) for f in {k for r, _ in recs.values() for k in r if k.startswith("has_")} - {"has_sql", "has_python", "has_dbt"})}

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
    ads = [a for a in ads if a[2]]   # ads naming none of the 19 tools have no mix to compare
    mix = Counter(a[2] for a in ads); pop = lambda m: bin(m).count("1")
    unique = [a[2] for a in ads if mix[a[2]] == 1]
    one_apart = [m for m in unique if any(pop(m ^ o) == 1 for o in mix)]
    named = Counter(k for a in ads for k in range(len(TOOLS)) if a[2] >> k & 1); top5 = [k for k, _ in named.most_common(5)]; T = sum(1 << k for k in top5)
    near = [a[2] & ~T for a in ads if pop(a[2] & ~T) == 1]
    out["pitch"] = {"ads": ads, "n": len(ads), "regions": sorted({a[4] for a in ads}), "population": "ads on the map naming at least one of the 19 tools",
                    "unique": len(unique), "one_apart": len(one_apart),
                    "top_mix": {"tools": [TOOLS[k][1] for k in range(len(TOOLS)) if mix.most_common(1)[0][0] >> k & 1], "count": mix.most_common(1)[0][1]},
                    "template": {"tools": [TOOLS[k][1] for k in top5], "exact": sum(1 for a in ads if a[2] == T), "subset": sum(1 for a in ads if a[2] & ~T == 0),
                                 "one_away": len(near), "one_away_missing": [[TOOLS[k][1], c] for k, c in Counter(m.bit_length() - 1 for m in near).most_common(3)]}}
    json.dump(out, open(IN / "deck_data.json", "w"), separators=(",", ":"), ensure_ascii=False)
    print("corpus", len(recs), "| ai rows", len(ai), "| junior", len(jr), "| france junior", sum(j["fr"] for j in jr),
          "| pitch ads", len(ads), "| benefit tags", tags)
    print("junior counts", {k: v for k, v in out["junior_counts"].items() if not isinstance(v, list)}, "| pitch", {k: v for k, v in out["pitch"].items() if k not in ("ads", "regions")})
    print("ai", out["ai"]["months_detail"], out["ai"]["enabler"], out["ai"]["guard_same"], "| pay", out["benefits"]["pay"])


if __name__ == "__main__":
    main()
