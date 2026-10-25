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

Usage:
    python3 scripts/dedupe_corpus.py            # dry run: print the plan
    python3 scripts/dedupe_corpus.py --apply    # move the extras
"""

import collections
import itertools
import json
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
MIN_SHINGLES = 30
BOILERPLATE_COMPANIES = 4
INTERMEDIARIES = ("licorne society", "sharpe recruiting", "pri technology", "emagine", "smartosc",
                  "undisclosed employer", "linkedin", "flexible working", "techbiz global")


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
        docs[f.name] = dict(company=r["company"], ckey=company_key(r["company"]), tkey=title_key(r["role"]),
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
