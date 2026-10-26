#!/usr/bin/env python3
"""
Find postings that are the same ad listed more than once, and move the extras
out of the corpus.

Similarity is the share of the shorter ad's 8-word shingles found in the other,
ignoring shingles that appear in 4+ companies' ads (legal and ATS boilerplate).
Two ads are the same ad when:
  - similarity >= 0.97, whatever the titles; or
  - similarity >= 0.90 and the titles match once "Sr./Snr." and gender tags are
    normalised, or the ads come from different company labels (an agency or
    group reposting the ad); or
  - the company labels differ, the titles match, and similarity >= 0.85.
Same-company ads below those bars (Analytics Engineer vs Senior Analytics
Engineer sharing a template) are different postings and are kept.

One ad is kept per group: a real employer over an intermediary, then the earliest
scrape. The rest move to data_excluded/ (a git mv, so it is reversible) and are
listed with a reason in data_excluded/MANIFEST.json. Intermediaries listed in
INTERMEDIARIES are also removed when they share 0.4+ with a client's ad.

A second pass catches reposts whose text was rewritten, so few shingles match:
ads in the same city with the same title (or one title extending the other)
and a TF-IDF cosine of
  - 0.50+ when the company labels match (the same role relisted);
  - 0.60+ when they differ (a brand or group name spelled two ways);
  - 0.25+ when one side is an intermediary (a recruiter paraphrasing a client);
    only the intermediary's ad is removed, and the title may extend the other's.
Company names where one contains the other ("Global", "This Is Global") count
as the same company. Same company and 0.95+ is the same ad whatever the title.

Usage:
    python3 scripts/dedupe_corpus.py            # dry run: print the plan
    python3 scripts/dedupe_corpus.py --apply    # move the extras
"""

import collections
import itertools
import json
import math
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
DATA = ROOT / "data"
EXCLUDED = ROOT / "data_excluded"
K = 8
SAME_ANY_TITLE = 0.97
SAME_MATCHING = 0.90
INTERMEDIARY_MIN = 0.40
SAME_CROSS_TITLE = 0.85
REPOST_SAME_CO = 0.50
REPOST_CROSS = 0.60
REPOST_INTERMEDIARY = 0.25
REPOST_ANY_TITLE = 0.95
STOP = set("the and for with that this you your our are will from have has not but all can who their they about into more also its any new work role team data".split())
MIN_SHINGLES = 30
BOILERPLATE_COMPANIES = 4
INTERMEDIARIES = ("licorne society", "sharpe recruiting", "pri technology", "emagine", "smartosc",
                  "undisclosed employer", "linkedin", "flexible working", "techbiz global", "talentmerge")


def company_key(c: str) -> str:
    c = re.sub(r"\(.*?\)", "", (c or "").lower())
    c = re.sub(r"\b(group|gmbh|ltd|inc|llc|sa|ag|bv|plc|limited|company|public|belgium|malaysia|sdn|bhd|holdings?|client|the)\b", "", c)
    return re.sub(r"[^a-z0-9]", "", c)[:8]


def title_key(t: str) -> str:
    t = re.sub(r"\(.*?\)", "", (t or "").lower())
    t = re.sub(r"\b(sr|snr)\b\.?", "senior", t)
    t = re.sub(r"\b(m|f|w|d|x|h|cdi|all genders)\b", "", t)
    return re.sub(r"[^a-z]", "", t)


def is_intermediary(company: str) -> bool:
    c = (company or "").lower()
    return any(n in c for n in INTERMEDIARIES)


def load():
    docs = {}
    for f in sorted(DATA.iterdir()):
        j, a = f / f"{f.name}.json", f / "jd_archive.md"
        if not (j.exists() and a.exists()):
            continue
        r = json.loads(j.read_text(encoding="utf-8"))
        t = re.sub(r"^\*\*URL:\*\*.*$", "", a.read_text(encoding="utf-8").split("## Layer B")[0], flags=re.M)
        w = re.findall(r"[^\W_]+", t.lower())
        if len(w) < 60:
            continue
        city = re.sub(r"[^a-z]", "", (r.get("job_location") or "").lower().split(",")[0])[:8]
        tf = collections.Counter(x for x in w if len(x) > 2 and x not in STOP)
        docs[f.name] = dict(company=r["company"], ckey=company_key(r["company"]), tkey=title_key(r["role"]), city=city, tf=tf,
                            shingles={" ".join(w[i:i + K]) for i in range(len(w) - K + 1)})
    return docs


def similar_pairs(docs):
    seen_in = collections.defaultdict(set)
    for k, d in docs.items():
        for s in d["shingles"]:
            seen_in[s].add(d["ckey"])
    inverted = collections.defaultdict(list)
    for k, d in docs.items():
        d["own"] = {s for s in d["shingles"] if len(seen_in[s]) < BOILERPLATE_COMPANIES}
        for s in d["own"]:
            inverted[s].append(k)
    shared = collections.Counter()
    for ks in inverted.values():
        if len(ks) <= 40:
            for a, b in itertools.combinations(sorted(ks), 2):
                shared[(a, b)] += 1
    for (a, b), n in shared.items():
        m = min(len(docs[a]["own"]), len(docs[b]["own"]))
        if m >= MIN_SHINGLES:
            yield n / m, a, b


def cosine_vectors(docs):
    df = collections.Counter(t for d in docs.values() for t in d["tf"])
    n = len(docs)
    vecs = {}
    for k, d in docs.items():
        v = {t: (1 + math.log(c)) * math.log(n / df[t]) for t, c in d["tf"].items() if df[t] / n <= 0.4}
        norm = math.sqrt(sum(x * x for x in v.values())) or 1.0
        vecs[k] = {t: x / norm for t, x in v.items()}
    return vecs


def name_variant(x, y):
    nx = re.sub(r"[^a-z0-9]", "", re.sub(r"\(.*?\)", "", (x or "").lower()))
    ny = re.sub(r"[^a-z0-9]", "", re.sub(r"\(.*?\)", "", (y or "").lower()))
    return min(len(nx), len(ny)) >= 4 and (nx in ny or ny in nx)


def repost_pairs(docs, find, parent, reason, parent_drops):
    vecs = cosine_vectors(docs)
    by_city = collections.defaultdict(list)
    for k, d in docs.items():
        if d["city"] and d["tkey"]:
            by_city[d["city"]].append(k)
    for ks in by_city.values():
        for a, b in itertools.combinations(sorted(ks), 2):
            A, B = docs[a], docs[b]
            ta, tb = A["tkey"], B["tkey"]
            cross = A["ckey"] != B["ckey"]
            intermediary = is_intermediary(A["company"]) or is_intermediary(B["company"])
            extends = min(len(ta), len(tb)) >= 12 and (ta.startswith(tb) or tb.startswith(ta))
            va, vb = vecs[a], vecs[b]
            if len(va) > len(vb):
                va, vb = vb, va
            sim = sum(x * vb.get(t, 0.0) for t, x in va.items())
            variant = cross and name_variant(A["company"], B["company"])
            if cross and intermediary and (ta == tb or extends):
                if sim >= REPOST_INTERMEDIARY:
                    drop = a if is_intermediary(A["company"]) else b
                    keep = b if drop == a else a
                    if not is_intermediary(docs[keep]["company"]) and drop not in parent_drops:
                        parent_drops[drop] = (keep, round(sim, 2))
                continue
            if ta != tb and not (sim >= REPOST_ANY_TITLE and not cross):
                continue
            if sim >= (REPOST_SAME_CO if (not cross or variant) else REPOST_CROSS):
                parent[find(b)] = find(a)
                reason[(a, b)] = round(sim, 2)


def plan(docs):
    parent = {k: k for k in docs}
    reason = {}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for sim, a, b in similar_pairs(docs):
        A, B = docs[a], docs[b]
        cross = A["ckey"] != B["ckey"]
        same = (sim >= SAME_ANY_TITLE or (sim >= SAME_MATCHING and (A["tkey"] == B["tkey"] or cross))
                or (cross and A["tkey"] == B["tkey"] and sim >= SAME_CROSS_TITLE)
                or (sim >= INTERMEDIARY_MIN and A["tkey"] == B["tkey"] and cross
                    and (is_intermediary(A["company"]) or is_intermediary(B["company"]))))
        if same:
            parent[find(b)] = find(a)
            reason[(a, b)] = round(sim, 2)
    parent_drops = {}
    repost_pairs(docs, find, parent, reason, parent_drops)
    groups = collections.defaultdict(list)
    for k in docs:
        groups[find(k)].append(k)
    removals = []
    for members in groups.values():
        if len(members) < 2:
            continue
        keep = sorted(members, key=lambda k: (is_intermediary(docs[k]["company"]), k))[0]
        for k in members:
            if k != keep:
                best = max([v for (x, y), v in reason.items() if k in (x, y)] or [0])
                removals.append({"jd_id": k, "company": docs[k]["company"], "kept": keep,
                                 "kept_company": docs[keep]["company"], "similarity": best})
    gone = {r["jd_id"] for r in removals}
    for drop, (keep, sim) in parent_drops.items():
        if drop not in gone and keep not in parent_drops:
            removals.append({"jd_id": drop, "company": docs[drop]["company"], "kept": keep,
                             "kept_company": docs[keep]["company"], "similarity": sim})
    return sorted(removals, key=lambda r: r["jd_id"])


def main():
    removals = plan(load())
    for r in removals:
        print(f"{r['similarity']:.2f}  {r['jd_id']}  ->  kept {r['kept']}")
    print(f"\n{len(removals)} extras")
    if "--apply" not in sys.argv:
        return
    EXCLUDED.mkdir(exist_ok=True)
    for r in removals:
        subprocess.run(["git", "mv", str(DATA / r["jd_id"]), str(EXCLUDED / r["jd_id"])], check=True, cwd=ROOT)
    manifest = EXCLUDED / "MANIFEST.json"
    old = json.loads(manifest.read_text()) if manifest.exists() else []
    manifest.write_text(json.dumps(old + removals, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"moved to {EXCLUDED}")


if __name__ == "__main__":
    main()
