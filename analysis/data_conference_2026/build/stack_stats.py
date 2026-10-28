#!/usr/bin/env python3
"""Tests behind the stack slide: strategic share, dbt-only vs Power BI/Fabric-only ads, within level.
Per level: Fisher exact p and risk difference with company-clustered bootstrap CI.
Pooled: Cochran-Mantel-Haenszel common odds ratio with level as the stratum.
Also: duty-theme gap by level (per-ad share of theme tags, analysis/responsibility_classification.json), team context by stack group,
and the AI rows (stack, level, trend from inputs/ai_trend.json). Writes inputs/stack_stats.json."""
import json, glob, random, math
from pathlib import Path
from collections import defaultdict
from scipy.stats import fisher_exact, chi2
ROOT = Path(__file__).resolve().parents[3]; OUT = Path(__file__).parent / "inputs" / "stack_stats.json"
def grp(r):
    pb = r.get("has_power_bi") or r.get("has_fabric_synapse")
    return "dbt" if r.get("has_dbt") and not pb else "pbi" if pb and not r.get("has_dbt") else None
rows = []
for f in glob.glob(str(ROOT / "data/*/*.json")):
    r = json.load(open(f))
    if grp(r) and r.get("seniority") in ("mid", "senior"):   # every language: the classifier reads the verbs in each
        rows.append((r["seniority"], grp(r), int(r.get("autonomy_level") == "strategic"), (r.get("company") or "").lower().strip()))
random.seed(7); res = {"levels": {}}
def diff(rs):
    a = [x[2] for x in rs if x[1] == "dbt"]; b = [x[2] for x in rs if x[1] == "pbi"]
    return (sum(a) / len(a) - sum(b) / len(b)) if a and b else float("nan")
for lv in ("mid", "senior"):
    rs = [x for x in rows if x[0] == lv]; a = [x[2] for x in rs if x[1] == "dbt"]; b = [x[2] for x in rs if x[1] == "pbi"]
    tab = [[sum(a), len(a) - sum(a)], [sum(b), len(b) - sum(b)]]
    orr, p = fisher_exact(tab)
    by = defaultdict(list)
    for x in rs: by[x[3]].append(x)
    cos = list(by); bs = []
    for _ in range(4000):
        s = [x for c in random.choices(cos, k=len(cos)) for x in by[c]]; d = diff(s)
        if d == d: bs.append(d)
    bs.sort(); lo, hi = bs[int(.025 * len(bs))], bs[int(.975 * len(bs))]
    res["levels"][lv] = {"dbt": [sum(a), len(a)], "pbi": [sum(b), len(b)], "diff": diff(rs), "ci": [lo, hi], "fisher_p": p, "odds_ratio": orr, "companies": len(cos)}
num = den = 0; var_n = var_d = 0; A = E = V = 0
for lv in ("mid", "senior"):
    l = res["levels"][lv]; a, n1 = l["dbt"]; b, n2 = l["pbi"]; m1 = a + b; N = n1 + n2
    A += a; E += n1 * m1 / N; V += n1 * n2 * m1 * (N - m1) / (N * N * (N - 1))
    num += a * (n2 - b) / N; den += b * (n1 - a) / N
stat = (abs(A - E) - .5) ** 2 / V
res["cmh"] = {"or": num / den, "chi2": stat, "p": float(chi2.sf(stat, 1))}
# --- duty-theme gap by level: per-ad share of theme tags, dbt-only minus Power BI/Fabric-only, company-clustered bootstrap
from scipy.stats import ttest_ind
CLS = json.load(open(ROOT / "analysis/responsibility_classification.json"))
THEMES = [t["theme"] for t in CLS["theme_stats"]]; tags = defaultdict(lambda: defaultdict(int))
for t, hits in CLS["bullets_by_theme"].items():
    for h in hits: tags[h["jd_id"]][t] += 1
def holm(ps):
    o = sorted(range(len(ps)), key=lambda i: ps[i]); out = [0] * len(ps); run = 0
    for r, i in enumerate(o): run = max(run, min(1, (len(ps) - r) * ps[i])); out[i] = run
    return out
ads = []
for f in glob.glob(str(ROOT / "data/*/*.json")):
    r = json.load(open(f)); tot = sum(tags[r["jd_id"]].values())
    if r.get("jd_language") == "en" and grp(r) and r.get("seniority") in ("mid", "senior") and tot:
        ads.append((r["seniority"], grp(r), [tags[r["jd_id"]][t] / tot for t in THEMES], (r.get("company") or "").lower().strip()))
mean = lambda xs, k: sum(x[2][k] for x in xs) / len(xs)
res["gap_by_level"] = {"themes": THEMES, "unit": "mean per-ad share of duty theme tags", "levels": {}}
for lv in ("mid", "senior"):
    rs = [x for x in ads if x[0] == lv]; a = [x for x in rs if x[1] == "dbt"]; b = [x for x in rs if x[1] == "pbi"]
    by = defaultdict(list)
    for x in rs: by[x[3]].append(x)
    cos = list(by); bs = []
    for _ in range(2000):
        s = [x for c in random.choices(cos, k=len(cos)) for x in by[c]]; sa = [x for x in s if x[1] == "dbt"]; sb = [x for x in s if x[1] == "pbi"]
        if sa and sb: bs.append([mean(sa, k) - mean(sb, k) for k in range(len(THEMES))])
    ci = [[sorted(v[k] for v in bs)[int(q * len(bs))] for k in range(len(THEMES))] for q in (.025, .975)]
    ps = [float(ttest_ind([x[2][k] for x in a], [x[2][k] for x in b], equal_var=False).pvalue) for k in range(len(THEMES))]
    res["gap_by_level"]["levels"][lv] = {"n": [len(a), len(b)], "dbt": [round(mean(a, k), 4) for k in range(len(THEMES))], "pbi": [round(mean(b, k), 4) for k in range(len(THEMES))],
                                         "diff": [round(mean(a, k) - mean(b, k), 4) for k in range(len(THEMES))], "lo": [round(v, 4) for v in ci[0]], "hi": [round(v, 4) for v in ci[1]],
                                         "p": ps, "holm": holm(ps)}
# --- team context by stack group (English ads, all levels): Fisher dbt-only vs Power BI/Fabric-only
grp4 = lambda r: grp(r) or ("both" if r.get("has_dbt") else "neither")
en = [json.load(open(f)) for f in glob.glob(str(ROOT / "data/*/*.json"))]; en = [r for r in en if r.get("jd_language") == "en"]
ctx = {"n": {g: sum(1 for r in en if grp4(r) == g) for g in ("dbt", "pbi", "both", "neither")}, "items": {}}
for name, f in (("early", lambda r: r.get("data_team_maturity") == "early"), ("mature", lambda r: r.get("data_team_maturity") == "mature"),
                ("fix_scale", lambda r: r.get("greenfield_vs_fix") == "fix_scale"), ("greenfield", lambda r: r.get("greenfield_vs_fix") == "greenfield")):
    k = {g: sum(1 for r in en if grp4(r) == g and f(r)) for g in ctx["n"]}
    tab = [[k["dbt"], ctx["n"]["dbt"] - k["dbt"]], [k["pbi"], ctx["n"]["pbi"] - k["pbi"]]]
    ctx["items"][name] = {"k": k, "pct": {g: round(100 * k[g] / ctx["n"][g], 1) for g in k}, "fisher_p": float(fisher_exact(tab)[1])}
res["context"] = ctx
import csv
def ai_test(name, sel_a, sel_b):
    rs = []
    for r in csv.DictReader(open(ROOT / "analysis/data_conference_2026/build/inputs/ai_flags.csv")):
        if r["lang"] != "en": continue
        g = "a" if sel_a(r) else "b" if sel_b(r) else None
        if not g: continue
        fp = ROOT / f"data/{r['jd_id']}/{r['jd_id']}.json"
        if not fp.exists(): continue   # snapshot ad since removed as a repost
        co = json.load(open(fp)).get("company", "").lower().strip()
        rs.append((g, int(r["roleAI"]), co))
    a = [x[1] for x in rs if x[0] == "a"]; b = [x[1] for x in rs if x[0] == "b"]
    _, p = fisher_exact([[sum(a), len(a) - sum(a)], [sum(b), len(b) - sum(b)]])
    by = defaultdict(list)
    for x in rs: by[x[2]].append(x)
    cos = list(by); bs = []
    for _ in range(4000):
        s = [x for c in random.choices(cos, k=len(cos)) for x in by[c]]
        sa = [x[1] for x in s if x[0] == "a"]; sb = [x[1] for x in s if x[0] == "b"]
        if sa and sb: bs.append(sum(sa) / len(sa) - sum(sb) / len(sb))
    bs.sort()
    return {"a": [sum(a), len(a)], "b": [sum(b), len(b)], "diff": sum(a) / len(a) - sum(b) / len(b), "ci": [bs[int(.025 * len(bs))], bs[int(.975 * len(bs))]], "fisher_p": p}
res["ai"] = {"dbt_vs_pbi": ai_test("stack", lambda r: r["dbt"] == "1" and r["pbi"] == "0" and r["fabric"] == "0", lambda r: r["dbt"] == "0" and (r["pbi"] == "1" or r["fabric"] == "1")),
             "senior_vs_junior": ai_test("level", lambda r: r["seniority"] in ("senior", "staff", "lead"), lambda r: r["seniority"] == "junior")}
TREND = Path(__file__).parent / "inputs" / "ai_trend.json"   # from ai_flags.py (logistic trend, company-clustered SEs)
if TREND.exists(): res["ai"]["trend"] = json.loads(TREND.read_text())
OUT.write_text(json.dumps(res, indent=1)); print(json.dumps(res, indent=1))
