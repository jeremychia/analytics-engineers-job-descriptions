#!/usr/bin/env python3
"""Titles slide: duty groups for every analytics-engineer-titled ad, with k chosen by bootstrap stability. Writes inputs/titles_stats.json.

Per ad, count the responsibility bullets that hit each of six duty groups (themes from analysis/responsibility_classification.json,
a bullet counts once per group) and turn the counts into shares. k-means (k-means++ seeding, 8 starts) for k = 2..6, each with
100 bootstrap refits scored by adjusted Rand index against the full-data fit; keep the largest k with mean ARI >= 0.75.
The x axis is the first principal component of the shares, oriented so reporting and BI duty is negative. Fixed seeds.
Run: uv run --with numpy python build/titles_stats.py
"""
import json, re
from collections import Counter, defaultdict
from math import comb
from pathlib import Path
import numpy as np

HERE = Path(__file__).resolve().parent; A = HERE.parents[1]
TITLE = re.compile(r"analytic(s|al)? engineer", re.I)
GROUPS = {"bi": ["BI & Reporting/Dashboards"], "de": ["Pipeline Engineering & Orchestration", "Data Infrastructure & Warehouse Ops"],
          "model": ["Data Modeling & Transformation"], "analysis": ["Business Analysis & Insight Generation"],
          "ds": ["AI & Agentic Workflows"], "gov": ["Governance & Documentation", "Data Quality & Testing"]}
PLAIN = {"bi": "reporting", "de": "pipelines", "model": "modelling", "analysis": "analysis", "ds": "AI", "gov": "data quality"}
MIN_ARI, KS, BOOT = 0.75, range(2, 7), 100


def km(X, k, rs, ninit=8, it=60):
    best = None
    for _ in range(ninit):
        C = [X[rs.integers(len(X))]]
        for _ in range(k - 1):
            d = np.min(((X[:, None] - np.array(C)[None]) ** 2).sum(2), 1); C.append(X[rs.choice(len(X), p=d / d.sum())])
        C = np.array(C)
        for _ in range(it):
            L = ((X[:, None] - C[None]) ** 2).sum(2).argmin(1); C2 = np.array([X[L == j].mean(0) if (L == j).any() else C[j] for j in range(k)])
            if np.allclose(C, C2): break
            C = C2
        L = ((X[:, None] - C[None]) ** 2).sum(2).argmin(1); inr = ((X - C[L]) ** 2).sum()
        if best is None or inr < best[0]: best = (inr, C, L)
    return best[1], best[2]


def ari(a, b):
    s = sum(comb(v, 2) for v in Counter(zip(a, b)).values()); sa = sum(comb(v, 2) for v in Counter(a).values())
    sb = sum(comb(v, 2) for v in Counter(b).values()); e = sa * sb / comb(len(a), 2)
    return (s - e) / ((sa + sb) / 2 - e)


def silhouette(D, L):
    s = []
    for i in range(len(L)):
        same = L == L[i]; a = D[i][same].sum() / max(same.sum() - 1, 1)
        b = min(D[i][L == j].mean() for j in set(L.tolist()) if j != L[i]); s.append((b - a) / max(a, b) if same.sum() > 1 else 0)
    return float(np.mean(s))


def name(centre, mean):
    lift = centre - mean; top = np.argsort(-lift)
    keys = [list(GROUPS)[top[0]]] + ([list(GROUPS)[top[1]]] if lift[top[1]] >= 0.03 else [])
    return " and ".join(PLAIN[k] for k in keys)


def main():
    recs = [r for r in json.load(open(A / "data.json")) if TITLE.search(r["role"])]
    bul = defaultdict(lambda: defaultdict(set))
    for theme, hits in json.load(open(A / "responsibility_classification.json"))["bullets_by_theme"].items():
        for h in hits: bul[h["jd_id"]][theme].add(h["bullet"])
    counts = {r["jd_id"]: [len(set().union(*[bul[r["jd_id"]][t] for t in ts])) for ts in GROUPS.values()] for r in recs}
    live = [r for r in recs if sum(counts[r["jd_id"]])]   # ads with no classified duty have no shares
    X = np.array([counts[r["jd_id"]] for r in live], float); X = X / X.sum(1, keepdims=True)
    Dm = np.sqrt(((X[:, None] - X[None]) ** 2).sum(2))
    stab, fits = {}, {}
    for k in KS:
        rs = np.random.default_rng(k); C, L = km(X, k, rs); fits[k] = (C, L); aris = []
        for _ in range(BOOT):
            idx = rs.integers(0, len(X), len(X)); Cb, _ = km(X[idx], k, rs, ninit=3); aris.append(ari(L.tolist(), ((X[:, None] - Cb[None]) ** 2).sum(2).argmin(1).tolist()))
        stab[k] = {"ari_mean": round(float(np.mean(aris)), 3), "ari_lo": round(float(np.percentile(aris, 2.5)), 3),
                   "silhouette": round(silhouette(Dm, L), 3), "sizes": sorted(np.bincount(L).tolist(), reverse=True)}
        print(k, stab[k])
    k = max([k for k in KS if stab[k]["ari_mean"] >= MIN_ARI] or [2])
    Xc = X - X.mean(0); pc = np.linalg.svd(Xc, full_matrices=False)[2][0]
    if pc[list(GROUPS).index("bi")] > 0: pc = -pc
    x = Xc @ pc
    C, L = fits[k]; med = [float(np.median(x[L == j])) for j in range(k)]; order = np.argsort(med)   # group 0 is the most reporting-heavy
    gid = {int(o): i for i, o in enumerate(order)}; lab = [gid[int(l)] for l in L]
    C2, L2 = fits[2]; m2 = [np.median(x[L2 == j]) for j in range(2)]; pole = [int(m2[l] > min(m2)) for l in L2]   # 1 engineering, 0 reporting
    keep = {r["jd_id"] for r in live}
    out = {"population": "ads whose title contains analytics, analytical or analytic engineer", "n_titled": len(recs), "n_no_duties": len(recs) - len(live),
           "n": len(live), "k": k, "stability": {str(j): v for j, v in stab.items()}, "rule": f"largest k with mean bootstrap ARI >= {MIN_ARI}",
           "ids": [r["jd_id"] for r in live], "roles": [r["role"] for r in live], "group": lab, "x": [round(float(v), 4) for v in x],
           "names": {i: name(C[o], X.mean(0)) for i, o in enumerate(order)}, "group_n": {i: int((L == o).sum()) for i, o in enumerate(order)},
           "group_x": {i: round(med[o], 4) for i, o in enumerate(order)},
           "centres": {i: {g: round(float(C[o][j]), 3) for j, g in enumerate(GROUPS)} for i, o in enumerate(order)},
           "x_loadings": {g: round(float(pc[j]), 3) for j, g in enumerate(GROUPS)}, "pole": pole, "pole_names": ["reporting", "engineering"],
           "pole_sizes": [pole.count(0), pole.count(1)], "dropped_no_duties": [r["jd_id"] for r in recs if r["jd_id"] not in keep],
           "method": f"{len(live)} analytics-engineer-titled ads; k-means on the share of duty bullets in six groups; k = {k} is the largest k whose "
                     f"bootstrap agreement (adjusted Rand, {BOOT} refits) averages at least {MIN_ARI}; x = first principal component of the duty shares"}
    (HERE / "inputs/titles_stats.json").write_text(json.dumps(out, separators=(",", ":")))
    print("n", len(recs), "kept", len(live), "k", k, out["names"], out["group_n"], out["group_x"], out["x_loadings"])


if __name__ == "__main__":
    main()
