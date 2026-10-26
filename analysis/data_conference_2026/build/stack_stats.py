#!/usr/bin/env python3
"""Tests behind the stack slide: strategic share, dbt-only vs Power BI/Fabric-only ads, within level.
Per level: Fisher exact p and risk difference with company-clustered bootstrap CI.
Pooled: Cochran-Mantel-Haenszel common odds ratio with level as the stratum. Writes inputs/stack_stats.json."""
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
    if r.get("jd_language") == "en" and grp(r) and r.get("seniority") in ("mid", "senior"):
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
OUT.write_text(json.dumps(res, indent=1)); print(json.dumps(res, indent=1))
