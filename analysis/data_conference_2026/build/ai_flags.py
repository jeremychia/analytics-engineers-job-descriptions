#!/usr/bin/env python3
"""Export inputs/ai_flags.csv (one row per ad) and inputs/ai_trend.json from the AI pipeline in research/ai_pipeline.

Flags follow measure.py; guard_same = a USE sentence that names review or validation itself (guard looks one sentence either side).
Trend follows trend2.py: logistic regression of role AI on scrape date, English ads, company-clustered standard errors.
Run: uv run --with pandas --with scipy python build/ai_flags.py
"""
import sys
from pathlib import Path
HERE = Path(__file__).resolve().parent
sys.path[:0] = [str(HERE.parent / "research/ai_pipeline"), str(HERE)]
import json
import numpy as np, pandas as pd
from scipy.stats import norm
from classify import ad_rows

ROLE = ["BUILD", "USE", "PREP", "GENERIC"]
COLS = ["jd_id", "scrape", "seniority", "region", "lang", "dbt", "pbi", "fabric", "roleAI", "USE", "BUILD", "PREP", "GENERIC",
        "ai_req", "ai_nice", "ai_duty", "concrete", "vague_only", "req_no_duty", "guard", "amazon", "guard_same"]


def flags():
    ads, S = ad_rows(); R = S[S["cat"].isin(ROLE)]
    for c in ROLE: ads[c] = ads.jd_id.isin(S[S["cat"] == c].jd_id)
    ads["roleAI"] = ads[ROLE].any(axis=1)
    for l in ("req", "nice", "duty"): ads["ai_" + l] = ads.jd_id.isin(R[R.level == l].jd_id)
    ads["concrete"] = ads.jd_id.isin(R[R.concrete].jd_id)
    ads["vague_only"] = ads.roleAI & ~ads.concrete
    ads["req_no_duty"] = ads.ai_req & ~ads.ai_duty
    ads["guard"] = ads.jd_id.isin(R[(R["cat"] == "USE") & R.guard].jd_id)
    ads["guard_same"] = ads.jd_id.isin(R[(R["cat"] == "USE") & R.guard_same].jd_id)
    ads["amazon"] = ads.company.str.contains("amazon|aws|prime video", case=False)
    return ads


def logit(d, cols):
    X = np.column_stack([np.ones(len(d))] + [d[c].values.astype(float) for c in cols]); y = d.y.values; b = np.zeros(X.shape[1])
    for _ in range(50):
        p = 1 / (1 + np.exp(-X @ b)); W = p * (1 - p); b = b + np.linalg.solve(X.T @ (X * W[:, None]), X.T @ (y - p))
    p = 1 / (1 + np.exp(-X @ b)); Hi = np.linalg.inv(X.T @ (X * (p * (1 - p))[:, None])); r = (y - p)[:, None] * X; M = np.zeros((X.shape[1],) * 2)
    for _, idx in d.groupby("company").indices.items(): s = r[idx].sum(0); M += np.outer(s, s)
    se = np.sqrt(np.diag(Hi @ M @ Hi)); z = b[1] / se[1]
    return {"or": round(float(np.exp(b[1])), 3), "ci": [round(float(np.exp(b[1] - 1.96 * se[1])), 3), round(float(np.exp(b[1] + 1.96 * se[1])), 3)],
            "p": round(float(2 * norm.sf(abs(z))), 4), "n": len(d), "companies": int(d.company.nunique())}


def trend(ads):
    e = ads[ads.lang == "en"].copy()
    e["t"] = (pd.to_datetime(e.scrape) - pd.Timestamp("2026-08-01")).dt.days / 30
    e["loglen"] = np.log(e.length.clip(lower=200)); e["loglen"] -= e.loglen.mean()
    e["senior"] = e.seniority.isin(["senior", "lead", "staff"]).astype(int)
    e["dbt_only"] = (e.dbt & ~(e.pbi | e.fabric)).astype(int); e["pbi_only"] = ((e.pbi | e.fabric) & ~e.dbt).astype(int); e["y"] = e.roleAI.astype(int)
    adj = ["t", "loglen", "senior", "dbt_only", "pbi_only"]
    return {**logit(e[e.scrape >= "2026-08-01"], ["t"]), "unit": "odds ratio per 30 days, English ads scraped Aug-Oct 2026",
            "adjusted": logit(e[e.scrape >= "2026-08-01"], adj), "jul_oct": logit(e[e.scrape >= "2026-07-01"], ["t"]),
            "jul_oct_adjusted": logit(e[e.scrape >= "2026-07-01"], adj)}


if __name__ == "__main__":
    ads = flags()
    out = ads[COLS].copy()
    for c in COLS[5:]: out[c] = out[c].astype(int)
    out.sort_values("jd_id").to_csv(HERE / "inputs/ai_flags.csv", index=False)
    t = trend(ads); (HERE / "inputs/ai_trend.json").write_text(json.dumps(t, indent=1)); print(len(out), "rows;", t)
