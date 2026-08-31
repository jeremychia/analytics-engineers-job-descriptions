#!/usr/bin/env python3
"""
Check whether a job-posting URL already exists in the corpus before scraping it.

Same postings get re-shared/re-indexed under different tracking query strings,
different job-board mirrors of the same req, or even different "company" labels
(agency vs. hiring company) — a raw URL-equality or company+role-slug check
misses most of that. This normalizes the same way the corpus-wide dedup pass did:

  1. Exact match on (netloc, path, query) with known tracking params stripped
     (source, gh_src, feedId, Codes, jobDbPVId, utm_*, trid, src).
  2. A >=6-digit job-id run embedded in the URL PATH (not query — query-string
     digit runs are often unrelated tracking/analytics ids and produce false
     matches), matched against the same netloc.

Deliberately does NOT fall back to comparing generic paths with no real id
(e.g. two different ATS's generic "/career" or "/job-search" endpoint) — that
produced false positives (different jobs, same boilerplate path) when this
logic was validated against the corpus in 2026-07.

Reads data/{jd_id}/{jd_id}.json directly rather than analysis/data.json. Those
agree only right after a regeneration: data.json is a compiled artifact, so
checking against it made this blind to every record written since the last
`/regenerate-analysis` run — including earlier URLs in the same batch, which is
exactly when a duplicate is most likely to be about to be written. Scanning the
source of truth costs ~40ms on a 636-record corpus.

Usage:
    python3 scripts/check_duplicate_jd.py "<url>"

Exit code 0 + prints "NO MATCH" if the URL looks new.
Exit code 1 + prints the matching jd_id(s) if a likely duplicate is found.
"""

import json
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit, parse_qsl

ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "data"

JUNK_PARAMS = {
    "source", "gh_src", "feedid", "codes", "jobdbpvid",
    "utm_source", "utm_medium", "utm_campaign", "trid", "src",
}


def norm_url(u):
    if not u:
        return None
    p = urlsplit(u)
    q = tuple(sorted((k, v) for k, v in parse_qsl(p.query) if k.lower() not in JUNK_PARAMS))
    return (p.netloc, p.path.rstrip("/"), q)


def job_id_key(u):
    if not u:
        return None
    p = urlsplit(u)
    digit_runs = re.findall(r"\d{6,}", p.path)
    if not digit_runs:
        return None
    return (p.netloc, max(digit_runs, key=len))


def load_corpus():
    """Every record on disk, whether or not it has been compiled into data.json yet."""
    records = []
    for jd_dir in sorted(DATA_DIR.iterdir()):
        record_path = jd_dir / f"{jd_dir.name}.json"
        if not record_path.is_file():
            continue
        try:
            records.append(json.loads(record_path.read_text(encoding="utf-8")))
        except json.JSONDecodeError:
            # A malformed record still occupies its jd_id; skipping it here only
            # costs a missed duplicate, and regenerate_report.py reports it loudly.
            print(f"warning: skipping unparseable {record_path.name}", file=sys.stderr)
    return records


def find_duplicates(candidate_url, corpus=None):
    if corpus is None:
        corpus = load_corpus()

    cand_norm = norm_url(candidate_url)
    cand_id = job_id_key(candidate_url)

    matches = []
    for j in corpus:
        u = j.get("source_url")
        if cand_norm and norm_url(u) == cand_norm:
            matches.append(j["jd_id"])
        elif cand_id and job_id_key(u) == cand_id:
            matches.append(j["jd_id"])
    return matches


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 check_duplicate_jd.py <url>", file=sys.stderr)
        sys.exit(2)

    url = sys.argv[1]
    matches = find_duplicates(url)
    if matches:
        print("DUPLICATE OF:", ", ".join(matches))
        sys.exit(1)
    else:
        print("NO MATCH")
        sys.exit(0)
