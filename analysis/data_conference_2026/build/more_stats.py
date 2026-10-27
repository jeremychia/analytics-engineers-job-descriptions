#!/usr/bin/env python3
"""Tests for the juniors, ladder and benefits slides. Writes inputs/more_stats.json.
Juniors: Wilson intervals on gate shares; France vs rest Fisher (regex and hand-checked degree asks).
Ladder (English ads, classifier levels): prevalence of the core and the six verb lines, adjacent-level differences with Newcombe CIs,
Fisher p with Holm per panel; France strategic share by level with Wilson intervals.
Benefits: chi-square across the nine grid regions per benefit tag (Benjamini-Hochberg).
Run after prep_data.py and benefits_tags.py: uv run --with scipy python build/more_stats.py"""
import json, glob, csv, random, math, re, sys
from pathlib import Path
from collections import defaultdict
from scipy.stats import fisher_exact, chi2_contingency
HERE = Path(__file__).resolve().parent; ROOT = HERE.parents[2]; random.seed(11)
sys.path.insert(0, str(HERE)); from roletext import role_lines
def wilson(k, n, z=1.96):
    p = k / n; d = 1 + z * z / n; c = (p + z * z / (2 * n)) / d; h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return [c - h, c + h]
def holm(ps):
    o = sorted(range(len(ps)), key=lambda i: ps[i]); out = [0] * len(ps); m = len(ps); run = 0
    for r, i in enumerate(o): run = max(run, min(1, (m - r) * ps[i])); out[i] = run
    return out
def bh(ps):
    m = len(ps); o = sorted(range(m), key=lambda i: ps[i]); out = [0] * m; prev = 1
    for r in range(m - 1, -1, -1): i = o[r]; prev = min(prev, ps[i] * m / (r + 1)); out[i] = prev
    return out
res = {}
# --- juniors
D = json.loads((HERE / "inputs/deck_data.json").read_text())["junior"]; ads = D["ads"]; n = len(ads)
res["juniors"] = {"n": n, "shares": {}}
for k, lab in enumerate(D["labels"]):
    x = sum(a["flags"][k] for a in ads); res["juniors"]["shares"][lab] = [x, n, wilson(x, n)]
x = sum(a["gate"] for a in ads); res["juniors"]["gate"] = [x, n, wilson(x, n)]
fr = [a for a in ads if a["fr"]]; rest = [a for a in ads if not a["fr"]]
tab = [[sum(a["bac"] for a in fr), len(fr) - sum(a["bac"] for a in fr)], [sum(a["bac"] for a in rest), len(rest) - sum(a["bac"] for a in rest)]]
res["juniors"]["france_bac"] = {"fr": [tab[0][0], len(fr)], "rest": [tab[1][0], len(rest)], "fisher_p": fisher_exact(tab)[1]}
tab = [[sum(a["bac_checked"] for a in fr), len(fr) - sum(a["bac_checked"] for a in fr)], [sum(a["bac_checked"] for a in rest), len(rest) - sum(a["bac_checked"] for a in rest)]]
res["juniors"]["france_bac_checked"] = {"fr": [tab[0][0], len(fr)], "rest": [tab[1][0], len(rest)], "fisher_p": fisher_exact(tab)[1],
                                        "fr_ci": wilson(tab[0][0], len(fr)), "rest_ci": wilson(tab[1][0], len(rest)),
                                        "rule": "a master's, Bac+4/5 or engineering-school degree is the minimum ask (read by hand)"}
# --- ladder: one ad set (English ads with a classifier level) for prevalence and tests
def newcombe(k1, n1, k2, n2):
    l1, u1 = wilson(k1, n1); l2, u2 = wilson(k2, n2); p1, p2 = k1 / n1, k2 / n2; d = p2 - p1
    return [d - math.sqrt((p2 - l2) ** 2 + (u1 - p1) ** 2), d + math.sqrt((u2 - p2) ** 2 + (p1 - l1) ** 2)]
REC = json.load(open(ROOT / "analysis/data.json")); THEMES = json.load(open(ROOT / "analysis/responsibility_classification.json"))["jd_theme_sets"]
lv = lambda r: {"junior": 0, "mid": 1, "senior": 2, "lead": 3, "staff": 3, "manager": 3}.get(r.get("seniority"))
R = [r for r in REC if r.get("jd_language") == "en" and lv(r) is not None]; names = ["junior", "mid", "senior", "lead/staff/manager"]
text = lambda r: re.sub(r"^\*\*URL:\*\*.*$", "", (ROOT / "data" / r["jd_id"] / "jd_archive.md").read_text(encoding="utf-8").split("## Layer B")[0], flags=re.M)
ROLE = {r["jd_id"]: "\n".join(role_lines(text(r), r.get("responsibilities") or [])) for r in R}
VERBS = {  # matched in the role text (duties and requirements) of each ad
    "SCOPE: support / assist": r"\b(support(s|ing)?|assist(s|ing)?)\b",
    "SCOPE: own": r"(?<!your )(?<!their )(?<!our )(?<!its )(?<!my )\b(own|owns|owning|ownership)\b",
    "Mentoring / coaching / code review": r"\bmentor\w*|\bcoach(es|ing)?\b|code reviews?|review(ing)? (code|pull requests|PRs)\b",
    "Define standards / best practices / conventions": r"\b(set|sets|setting|define|defines|defining|establish\w*|shape|shapes|shaping|drive|drives|driving|champion\w*|own|owns|lead|leads|leading|create|creating|introduce|introducing|promote|promoting|enforce|enforcing|raise|raising|uphold|upholding)\b\W+(?:[\w-]+\W+){0,5}?(standards?|best practices?|conventions?|guidelines)\b",
    "Roadmap / prioritisation / strategy": r"\b(roadmaps?|prioriti[sz]\w*|strategy|strategies)\b",
    "SCOPE: lead / drive": r"\b(lead|leads|leading|drive|drives|driving|spearhead\w*)\b(?! to\b)(?!-edge)(?! edge)"}
WH = ("has_snowflake", "has_bigquery", "has_databricks", "has_redshift", "has_fabric_synapse")
CORE = {"SQL": lambda r: r.get("has_sql"), "Any warehouse (Snowflake/BQ/Databricks/Redshift/Fabric)": lambda r: any(r.get(f) for f in WH),
        "THEME: Data Quality & Testing": lambda r: "Data Quality & Testing" in THEMES.get(r["jd_id"], []),
        "THEME: Stakeholder Collaboration & Requirements": lambda r: "Stakeholder Collaboration & Requirements" in THEMES.get(r["jd_id"], []),
        "Python": lambda r: r.get("has_python"), "dbt": lambda r: r.get("has_dbt"), "version control": lambda r: r.get("has_version_control"), "CI/CD": lambda r: r.get("has_ci_cd")}
VERB = {"strategic verbs": lambda r: r.get("autonomy_level") == "strategic", **{k: (lambda r, p=re.compile(v, re.I): bool(p.search(ROLE[r["jd_id"]]))) for k, v in VERBS.items()}}
res["ladder_core"] = {}; tests = []
for panel, items in (("core", CORE), ("verbs", VERB)):
    fam = []
    for it, f in items.items():
        sh = [[sum(1 for r in R if lv(r) == L and f(r)), sum(1 for r in R if lv(r) == L)] for L in range(4)]
        res["ladder_core"][it] = [round(100 * a / b, 1) for a, b in sh]
        for L in range(3):
            a, b = sh[L], sh[L + 1]; p = fisher_exact([[a[0], a[1] - a[0]], [b[0], b[1] - b[0]]])[1]
            fam.append({"panel": panel, "item": it, "step": f"{names[L]} to {names[L+1]}", "pa": a[0] / a[1], "pb": b[0] / b[1], "diff": b[0] / b[1] - a[0] / a[1],
                        "ci": newcombe(a[0], a[1], b[0], b[1]), "ka": a, "kb": b, "p": p})
    for t, h in zip(fam, holm([t["p"] for t in fam])): t["holm"] = h
    tests += fam
res["ladder_shares"] = {it: res["ladder_core"][it] for it in ("SQL", "Python", "dbt", "version control", "CI/CD", "strategic verbs")}
res["ladder"] = {"population": "English ads with a classifier level", "n": [sum(1 for r in R if lv(r) == L) for L in range(4)], "tests": tests,
                 "verb_patterns": VERBS, "family": "Holm within each panel (core: 8 items x 3 steps; verbs: 7 items x 3 steps)"}
FR = re.compile(r"france|paris|lyon|toulouse|nantes|lille|bordeaux|marseille|rennes|montpellier|strasbourg|île-de-france|ile-de-france|sophia|grenoble|clermont|rouen|nanterre|puteaux|courbevoie|levallois|issy", re.I)
F = [r for r in REC if FR.search(r.get("job_location") or "") and lv(r) is not None]
res["ladder_france"] = {"population": "France-located ads, all languages", "levels": {}}
for L, name in enumerate(names):
    g = [r for r in F if lv(r) == L]; k = sum(1 for r in g if r.get("autonomy_level") == "strategic")
    res["ladder_france"]["levels"][name] = {"k": k, "n": len(g), "pct": round(100 * k / len(g), 1) if g else None, "ci": wilson(k, len(g)) if g else None}
# --- benefits: nine grid regions only (no ALL, Unknown or Other row), specific tags only (no summary flags)
rows = list(csv.DictReader(open(HERE / "inputs/benefits_prevalence_by_region.csv"))); by = defaultdict(list)
GRID = ["US", "UK & Ireland", "France", "DACH", "Benelux", "Southern Europe", "CEE/Baltics", "Nordics", "APAC"]
for r in rows:
    if r["region"] in GRID and r["tag"] not in ("any_tag", "any_specific", "none"): by[r["tag"]].append((int(r["n"]), int(r["k"]), r["region"], float(r["pct"])))
bt = []
for tag, v in by.items():
    chi, p, _, _ = chi2_contingency([[k, n - k] for n, k, _, _ in v]) if sum(k for _, k, _, _ in v) else (0, 1, 0, 0)
    hi = max(v, key=lambda x: x[3]); lo = min(v, key=lambda x: x[3]); bt.append({"tag": tag, "p": float(p), "hi": [hi[2], hi[3]], "lo": [lo[2], lo[3]], "regions": len(v)})
for t, q in zip(bt, bh([t["p"] for t in bt])): t["q"] = q
res["benefits"] = bt
res["benefits_summary"] = {"tags": len(bt), "differ_q01": sum(t["q"] < 0.01 for t in bt), "not_differ": [t["tag"] for t in bt if t["q"] >= 0.01], "regions": GRID}
(HERE / "inputs/more_stats.json").write_text(json.dumps(res, indent=1)); print(json.dumps({k: res[k] for k in ("juniors",)}, indent=0)[:900])
for t in res["ladder"]["tests"]: print(t["item"], t["step"], round(t["pa"], 2), round(t["pb"], 2), "holm", round(t["holm"], 4))
print(res["ladder"]["n"], res["ladder_france"]); print(res["benefits_summary"])
