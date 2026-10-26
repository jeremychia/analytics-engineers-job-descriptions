#!/usr/bin/env python3
"""Tests for the juniors, ladder and benefits slides. Writes inputs/more_stats.json.
Juniors: Wilson intervals on gate shares; France vs rest Fisher. Ladder: adjacent-level Fisher tests (Holm over the family) for core skills,
and for strategic-verb share with company-clustered bootstrap. Benefits: chi-square across regions per benefit (Benjamini-Hochberg)."""
import json, glob, csv, random, math
from pathlib import Path
from collections import defaultdict
from scipy.stats import fisher_exact, chi2_contingency
HERE = Path(__file__).parent; ROOT = HERE.parents[2]; random.seed(11)
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
# --- ladder
R = [json.load(open(f)) for f in glob.glob(str(ROOT / "data/*/*.json"))]
R = [r for r in R if r.get("jd_language") == "en"]
lv = lambda r: {"junior": 0, "mid": 1, "senior": 2, "lead": 3, "staff": 3, "manager": 3}.get(r.get("seniority"))
R = [r for r in R if lv(r) is not None]; names = ["junior", "mid", "senior", "lead/staff/manager"]
items = {"SQL": "has_sql", "Python": "has_python", "dbt": "has_dbt", "version control": "has_version_control", "CI/CD": "has_ci_cd", "strategic verbs": None}
tests = []
for it, fld in items.items():
    f = (lambda r, fld=fld: int(bool(r.get(fld)))) if fld else (lambda r: int(r.get("autonomy_level") == "strategic"))
    sh = []
    for L in range(4): g = [f(r) for r in R if lv(r) == L]; sh.append([sum(g), len(g)])
    for L in range(3):
        a, b = sh[L], sh[L + 1]; p = fisher_exact([[a[0], a[1] - a[0]], [b[0], b[1] - b[0]]])[1]
        tests.append({"item": it, "step": f"{names[L]} to {names[L+1]}", "pa": a[0] / a[1], "pb": b[0] / b[1], "p": p})
    res.setdefault("ladder_shares", {})[it] = [round(100 * a / b, 1) for a, b in sh]
for t, h in zip(tests, holm([t["p"] for t in tests])): t["holm"] = h
res["ladder"] = {"n": [sum(1 for r in R if lv(r) == L) for L in range(4)], "tests": tests}
# --- benefits
rows = list(csv.DictReader(open(HERE / "inputs/benefits_prevalence_by_region.csv"))); by = defaultdict(list)
for r in rows: by[r["tag"]].append((int(r["n"]), int(r["k"]), r["region"], float(r["pct"])))
bt = []
for tag, v in by.items():
    v = [x for x in v if x[0] >= 30]; chi, p, _, _ = chi2_contingency([[k, n - k] for n, k, _, _ in v])
    hi = max(v, key=lambda x: x[3]); lo = min(v, key=lambda x: x[3]); bt.append({"tag": tag, "p": p, "hi": [hi[2], hi[3]], "lo": [lo[2], lo[3]], "regions": len(v)})
for t, q in zip(bt, bh([t["p"] for t in bt])): t["q"] = q
res["benefits"] = bt
(HERE / "inputs/more_stats.json").write_text(json.dumps(res, indent=1)); print(json.dumps({k: res[k] for k in ("juniors",)}, indent=0)[:900])
for t in res["ladder"]["tests"]: print(t["item"], t["step"], round(t["pa"], 2), round(t["pb"], 2), "holm", round(t["holm"], 4))
print(res["ladder"]["n"]); print([(t["tag"], round(t["q"], 4), t["hi"], t["lo"]) for t in bt])
