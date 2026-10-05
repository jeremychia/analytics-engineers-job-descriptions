#!/usr/bin/env python3
"""
Find new job postings on LinkedIn's public (logged-out) job search and queue them
for /classify-jd.

Searches every region x keyword in discovery/search_config.json, keeps titles that
match the config's title filter, drops anything already in the corpus, already
queued or already handled, and appends the rest to discovery/queue.json. Postings
whose company and title match an existing record are queued with a
`possible_repost_of` note, because a re-posted listing has a new URL that the
URL-based duplicate check cannot catch.

Requests are spaced 2-4 seconds apart, and a search stops at the first rate-limit
or block response (HTTP 429 or 999) instead of retrying.

Usage:
    python3 scripts/discover_jobs.py search [--regions emea,uk] [--days 4] [--max-pages 3]
    python3 scripts/discover_jobs.py list [--limit 20]
    python3 scripts/discover_jobs.py done <job_id> [<job_id> ...] --status classified|duplicate|skipped|failed
"""

import argparse
import datetime as dt
import html
import json
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from check_duplicate_jd import find_duplicates, load_corpus

ROOT = Path(__file__).parent.parent
DISCOVERY_DIR = ROOT / "discovery"
CONFIG_PATH = DISCOVERY_DIR / "search_config.json"
QUEUE_PATH = DISCOVERY_DIR / "queue.json"
SEEN_PATH = DISCOVERY_DIR / "seen.json"

SEARCH_URL = "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search"
VIEW_URL = "https://www.linkedin.com/jobs/view/{}/"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")
PAGE_SIZE = 10
STATUSES = ("classified", "duplicate", "skipped", "failed")


def load_json(path, default):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else default


def save_json(path, obj):
    path.write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", (s or "").lower()).strip()


def fetch(params):
    """Return (status, body). Body is '' on any non-200 response."""
    req = urllib.request.Request(f"{SEARCH_URL}?{urllib.parse.urlencode(params)}", headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except urllib.error.URLError:
        return 0, ""


def parse_cards(body):
    """One dict per job card on a search results page."""
    cards = []
    for chunk in body.split("<li")[1:]:
        m = re.search(r"urn:li:jobPosting:(\d+)", chunk)
        if not m:
            continue
        def grab(pattern):
            g = re.search(pattern, chunk, re.S)
            return html.unescape(re.sub(r"<[^>]+>", "", g.group(1))).strip() if g else ""
        cards.append({
            "job_id": m.group(1),
            "title": grab(r'base-search-card__title[^>]*>(.*?)</h3>'),
            "company": grab(r'base-search-card__subtitle[^>]*>(.*?)</h4>'),
            "location": grab(r'job-search-card__location[^>]*>(.*?)</span>'),
            "posted": (re.search(r'datetime="([\d-]+)"', chunk) or [None, None])[1],
        })
    return cards


def search_region(region, keyword, days, max_pages):
    """All cards for one region x keyword, plus the reason the search stopped."""
    params = {"keywords": keyword, "geoId": region["geo_id"], "f_TPR": f"r{days * 86400}"}
    if region.get("distance_miles"):
        params["distance"] = region["distance_miles"]
    cards = []
    for page in range(max_pages):
        params["start"] = page * PAGE_SIZE
        status, body = fetch(params)
        time.sleep(random.uniform(2, 4))
        if status in (429, 999):
            return cards, f"blocked (HTTP {status}) on page {page + 1}"
        if status != 200:
            return cards, f"HTTP {status} on page {page + 1}"
        page_cards = parse_cards(body)
        if not page_cards:
            return cards, f"end of results after {page} page(s)"
        cards += page_cards
    return cards, f"page limit ({max_pages}) reached"


def corpus_linkedin_ids(corpus):
    """LinkedIn job ids in the corpus, whatever LinkedIn host the URL was saved from."""
    ids = set()
    for r in corpus:
        u = r.get("source_url") or ""
        if "linkedin.com" not in u:
            continue
        p = urllib.parse.urlsplit(u)
        ids.update(re.findall(r"\d{9,}", p.path))
        ids.update(v for k, v in urllib.parse.parse_qsl(p.query) if k == "currentJobId")
    return ids


def cmd_search(args):
    cfg = load_json(CONFIG_PATH, None)
    if cfg is None:
        sys.exit(f"missing {CONFIG_PATH}")
    regions = cfg["regions"]
    if args.regions:
        wanted = set(args.regions.split(","))
        regions = [r for r in regions if r["name"] in wanted]
        if not regions:
            sys.exit(f"no configured region matches {args.regions}")
    days = args.days or cfg.get("time_window_days", 7)
    max_pages = args.max_pages or cfg.get("max_pages_per_search", 5)
    include = re.compile(cfg["title_include"], re.I)

    corpus = load_corpus()
    li_ids = corpus_linkedin_ids(corpus)
    by_company_title = {(norm(r.get("company")), norm(r.get("role"))): r["jd_id"] for r in corpus}
    queue = load_json(QUEUE_PATH, [])
    seen = load_json(SEEN_PATH, {})
    known = {q["job_id"] for q in queue} | set(seen)

    today = dt.date.today().isoformat()
    found, added, counts = {}, [], {"off_title": 0, "in_corpus": 0, "known": 0}
    for region in regions:
        for kw in cfg["keywords"]:
            cards, stop = search_region(region, kw, days, max_pages)
            print(f"{region['name']:10s} {kw:30s} {len(cards):3d} cards  ({stop})")
            for c in cards:
                c.setdefault("region", region["name"])
                found.setdefault(c["job_id"], c)

    for jid, c in found.items():
        url = VIEW_URL.format(jid)
        if not include.search(c["title"]):
            counts["off_title"] += 1
        elif jid in li_ids or find_duplicates(url, corpus):
            counts["in_corpus"] += 1
        elif jid in known:
            counts["known"] += 1
        else:
            entry = {**c, "url": url, "found_on": today}
            repost = by_company_title.get((norm(c["company"]), norm(c["title"])))
            if repost:
                entry["possible_repost_of"] = repost
            added.append(entry)

    queue += added
    save_json(QUEUE_PATH, queue)
    print(f"\n{len(found)} unique postings: {len(added)} queued, {counts['off_title']} off-title, "
          f"{counts['in_corpus']} already in corpus, {counts['known']} already queued or handled")
    print(f"queue now holds {len(queue)} pending posting(s)")
    for e in added:
        flag = f"  [possible repost of {e['possible_repost_of']}]" if e.get("possible_repost_of") else ""
        print(f"  {e['region']:10s} {e['company'][:28]:28s} {e['title'][:50]:50s} {e['url']}{flag}")


def cmd_list(args):
    queue = load_json(QUEUE_PATH, [])
    corpus = load_corpus()
    li_ids = corpus_linkedin_ids(corpus)
    pending = [q for q in queue if q["job_id"] not in li_ids]
    for e in pending[: args.limit or None]:
        flag = f" [possible repost of {e['possible_repost_of']}]" if e.get("possible_repost_of") else ""
        print(f"{e['job_id']}\t{e['region']}\t{e['company']}\t{e['title']}\t{e['url']}{flag}")
    print(f"{len(pending)} pending", file=sys.stderr)


def cmd_done(args):
    queue = load_json(QUEUE_PATH, [])
    seen = load_json(SEEN_PATH, {})
    today = dt.date.today().isoformat()
    ids = set(args.job_ids)
    for e in queue:
        if e["job_id"] in ids:
            seen[e["job_id"]] = {"status": args.status, "on": today, "company": e["company"], "title": e["title"]}
    missing = ids - {e["job_id"] for e in queue}
    for jid in missing:
        seen.setdefault(jid, {"status": args.status, "on": today})
    save_json(QUEUE_PATH, [e for e in queue if e["job_id"] not in ids])
    save_json(SEEN_PATH, seen)
    print(f"marked {len(ids)} as {args.status}" + (f" ({len(missing)} were not in the queue)" if missing else ""))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search")
    s.add_argument("--regions", help="comma-separated region names from the config")
    s.add_argument("--days", type=int, help="posted within this many days")
    s.add_argument("--max-pages", type=int, help="pages of 10 results per region x keyword")
    l = sub.add_parser("list")
    l.add_argument("--limit", type=int)
    d = sub.add_parser("done")
    d.add_argument("job_ids", nargs="+")
    d.add_argument("--status", required=True, choices=STATUSES)
    args = ap.parse_args()
    {"search": cmd_search, "list": cmd_list, "done": cmd_done}[args.cmd](args)


if __name__ == "__main__":
    main()
