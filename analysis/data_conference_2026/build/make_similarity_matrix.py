"""Pairwise role-text similarity for a ~150-ad sample, for the 'barcode' slide.

Needs scikit-learn (not in requirements.txt): run with any Python that has it.
Role text = duties and requirements only (benefits, culture and legal text
removed by roletext.py). Output: inputs/similarity_matrix.json
"""
import json, random, re, collections
from pathlib import Path
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from roletext import role_lines

ROOT = Path(__file__).resolve().parents[3]
DATA = ROOT / "data"
random.seed(11)

def key(c):
    c = re.sub(r"\(.*?\)", "", c.lower())
    c = re.sub(r"\b(the|group|gmbh|ltd|inc|llc|plc|limited|holdings?)\b", "", c)
    return re.sub(r"[^a-z0-9]", "", c)

ids, texts, meta = [], [], {}
for f in sorted(DATA.iterdir()):
    r = json.loads((f / f"{f.name}.json").read_text())
    if r["jd_language"] != "en":
        continue
    ll = role_lines((f / "jd_archive.md").read_text(), r.get("responsibilities") or [])
    if sum(len(x.split()) for x in ll) < 80:
        continue
    ids.append(f.name); texts.append("\n".join(ll)); meta[f.name] = r
X = TfidfVectorizer(ngram_range=(1, 2), sublinear_tf=True, stop_words="english", min_df=3, max_df=0.4).fit_transform(texts)
S = (X @ X.T).toarray()
idx = {i: k for k, i in enumerate(ids)}
by_co = collections.defaultdict(list)
for i in ids:
    by_co[key(meta[i]["company"])].append(i)

def fam(names):
    return [i for i in ids if any(n in meta[i]["company"].lower() for n in names)]

groups = []  # (label, [ids])
amazon = fam(["amazon", "prime video"])
groups.append(("Amazon · Prime Video · AWS", amazon))
for label, names in [("DoorDash", ["doordash"]), ("Woolworths · Cartology", ["woolworths", "cartology"]),
                     ("act digital · Irium", ["act digital", "irium"]), ("NBA", ["nba", "national basketball"])]:
    groups.append((label, fam(names)))
used = {i for _, g in groups for i in g}
multi = [(k, g) for k, g in by_co.items() if 2 <= len(g) <= 4 and not (set(g) & used)]
random.shuffle(multi)
for k, g in multi[:14]:
    groups.append((meta[g[0]]["company"], g)); used |= set(g)
singles = [g[0] for k, g in by_co.items() if len(g) == 1 and g[0] not in used]
random.shuffle(singles)
need = 150 - sum(len(g) for _, g in groups)
for i in singles[:max(need, 0)]:
    groups.append((meta[i]["company"], [i]))
order = [i for _, g in groups for i in g]
M = [[int(round(S[idx[a], idx[b]] * 100)) for b in order] for a in order]
gl = []
for gi, (label, g) in enumerate(groups):
    gl += [gi] * len(g)
json.dump({"n": len(order), "ids": order, "company": [meta[i]["company"] for i in order], "group": gl,
           "groups": [{"label": l, "size": len(g)} for l, g in groups], "m": M},
          open(Path(__file__).parent / "inputs" / "similarity_matrix.json", "w"), separators=(",", ":"))
off = [M[a][b] for a in range(len(order)) for b in range(a + 1, len(order)) if gl[a] != gl[b]]
print("ads", len(order), "groups", len(groups), "between-group mean", round(float(np.mean(off)) / 100, 3), "max", max(off))
