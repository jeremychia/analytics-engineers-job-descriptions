"""Pairwise role-text similarity for a ~150-ad sample, for the 'barcode' slide.

Needs scikit-learn (not in requirements.txt): run with any Python that has it.
Role text = duties and requirements only (benefits, culture and legal text
removed by roletext.py). Also writes the corpus-wide means, the nearest other-company ad
and the verbatim copy rate. Output: inputs/similarity_matrix.json
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

RING = "2026-10-09_qonto_analytics-engineer"  # the Paris ad ringed on the slide, closest match near the median
FAMILIES = ["Amazon · Prime Video · AWS", "DoorDash", "Woolworths · Cartology", "act digital · Irium", "NBA"]


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
singles = ([] if RING in used else [RING]) + [i for i in singles if i != RING]
need = 150 - sum(len(g) for _, g in groups)
for i in singles[:max(need, 0)]:
    groups.append((meta[i]["company"], [i]))
order = [i for _, g in groups for i in g]
M = [[int(round(S[idx[a], idx[b]] * 100)) for b in order] for a in order]
gl = []
for gi, (label, g) in enumerate(groups):
    gl += [gi] * len(g)
keys = [key(meta[i]["company"]) for i in ids]; K = np.array(keys)
same = K[:, None] == K[None, :]; upper = np.triu(np.ones_like(same, dtype=bool), 1)
stranger = np.where(same, -1, S)
nearest = {i: [round(float(stranger[idx[i]].max()), 3), ids[int(stranger[idx[i]].argmax())]] for i in ids}

# verbatim copying: role lines of 6+ words (case and spacing ignored) found in another company's ad, all ads
norm = lambda s: re.sub(r"[\s.;:!,]+$", "", re.sub(r"\s+", " ", s.strip().lower()))
FAM_RE = re.compile(r"amazon|prime video|doordash|woolworths|cartology|act digital|irium|\bnba\b|national basketball", re.I)
def copies(lines):
    who = collections.defaultdict(set)
    for k, L, _ in lines.values():
        for x in L: who[x].add(k)
    copied = {j: sum(1 for x in L if who[x] - {k}) for j, (k, L, _) in lines.items()}
    n_lines = sum(len(L) for _, L, _ in lines.values()); n_copied = sum(copied.values())
    fam_copied = sum(c for j, c in copied.items() if FAM_RE.search(lines[j][2]))
    fam_lines = sum(len(lines[j][1]) for j in lines if FAM_RE.search(lines[j][2]))
    return n_lines, n_copied, fam_copied, fam_lines, sum(1 for c in copied.values() if c)


role, duty = {}, {}   # role lines (duties and requirements) and the captured duty bullets alone
for f in sorted(DATA.iterdir()):
    r = json.loads((f / f"{f.name}.json").read_text())
    role[f.name] = (key(r["company"]), {norm(x) for x in role_lines((f / "jd_archive.md").read_text(), r.get("responsibilities") or []) if len(x.split()) >= 6}, r["company"])
    duty[f.name] = (key(r["company"]), {norm(x) for x in r.get("responsibilities") or [] if len(x.split()) >= 6}, r["company"])
n_lines, n_copied, fam_copied, fam_lines, ads_with_copy = copies(role)
d_lines, d_copied, d_fam_copied, d_fam_lines, _ = copies(duty)
copy_rate = {"lines": n_lines, "copied": n_copied, "per_1000": round(1000 * n_copied / n_lines, 1), "ads": len(role),
             "ads_with_copy": ads_with_copy, "family_copied": fam_copied,
             "per_1000_outside_families": round(1000 * (n_copied - fam_copied) / (n_lines - fam_lines), 1),
             "duty_lines": d_lines, "duty_copied": d_copied, "duty_per_1000": round(1000 * d_copied / d_lines, 1),
             "duty_per_1000_outside_families": round(1000 * (d_copied - d_fam_copied) / (d_lines - d_fam_lines), 1)}

json.dump({"n": len(order), "ids": order, "company": [meta[i]["company"] for i in order], "group": gl,
           "groups": [{"label": l, "size": len(g), "family": l in FAMILIES} for l, g in groups], "m": M,
           "pop": len(ids), "mean_between": round(float(S[upper & ~same].mean()), 3), "mean_within": round(float(S[upper & same].mean()), 3),
           "nearest_median": round(float(np.median([v[0] for v in nearest.values()])), 3),
           "nearest_ge_030": round(float(np.mean([v[0] >= 0.30 for v in nearest.values()])), 3),
           "nearest": [nearest[i] for i in order], "ring": order.index(RING), "copy_rate": copy_rate},
          open(Path(__file__).parent / "inputs" / "similarity_matrix.json", "w"), separators=(",", ":"))
off = [M[a][b] for a in range(len(order)) for b in range(a + 1, len(order)) if gl[a] != gl[b]]
print("ads", len(order), "groups", len(groups), "between-group mean", round(float(np.mean(off)) / 100, 3), "max", max(off))
print("English ads", len(ids), "between", round(float(S[upper & ~same].mean()), 3), "within", round(float(S[upper & same].mean()), 3),
      "nearest median", round(float(np.median([v[0] for v in nearest.values()])), 3), "copy", copy_rate)
