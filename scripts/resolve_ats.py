#!/usr/bin/env python3
"""
Find the employer's own ATS posting behind a LinkedIn job.

LinkedIn's logged-out job page hides the "Apply on company website" link behind
sign-in, so it cannot be followed. Instead this probes the public job-board APIs
of common ATS platforms under slugs guessed from the company name, matches the
job title, and accepts a candidate only when the record's verbatim responsibility
bullets appear in the ATS posting text.

Usage:
    python3 scripts/resolve_ats.py --company "Ro" --title "Analytics Engineer" --text-file posting.txt
        prints the verified ATS posting as JSON (exit 0), or NO VERIFIED ATS MATCH (exit 1)
    python3 scripts/resolve_ats.py --corpus [--apply]   # every record whose source_url is LinkedIn
    python3 scripts/resolve_ats.py --record <jd_id> --url <url> --platform <p> --job-id <id> --text-file employer.txt
        switches one LinkedIn-sourced record to an employer posting found by hand, if its text matches

With --apply, a verified record gets source_url, ats_platform and ats_job_id set to
the ATS posting, its old LinkedIn URL kept in linkedin_url, and the archive URL line
updated. The archived text is left as captured.
"""

import argparse
import difflib
import html
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).parent.parent
DATA_DIR = ROOT / "data"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
MIN_TITLE_SIM = 0.82
MIN_BULLET_COVERAGE = 0.6
LEGAL = r"\b(inc|ltd|limited|llc|gmbh|ag|sa|sas|bv|plc|corp|corporation|co|group|holdings|technologies|technology|labs|hq|se|nv|oy|ab|as)\b"
# LinkedIn often appends the country of the hiring entity ("Funding Circle UK", "TD SYNNEX Poland").
PLACE = r"\b(uk|us|usa|deutschland|germany|france|espana|spain|italia|italy|nederland|netherlands|polska|poland|portugal|sverige|sweden|danmark|denmark|norge|norway|suomi|finland|belgium|belgique|schweiz|switzerland|osterreich|austria|ireland|europe|emea|global|international)\b"

_cache = {}


def get(url, data=None):
    if url in _cache:
        return _cache[url]
    req = urllib.request.Request(url, data=data, headers={"User-Agent": UA, "Accept": "application/json",
                                                          **({"Content-Type": "application/json"} if data else {})})
    body = None
    for attempt in range(3):  # boards drop requests under load; a miss here is a missed match
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                body = r.read().decode("utf-8", "replace")
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                break
            time.sleep(1 + attempt)
        except Exception:
            time.sleep(1 + attempt)
    _cache[url] = body
    return body


def get_json(url, data=None):
    body = get(url, data)
    try:
        return json.loads(body) if body else None
    except json.JSONDecodeError:
        return None


def norm(s):
    s = html.unescape(html.unescape(s or ""))  # Greenhouse content arrives double-escaped
    s = unicodedata.normalize("NFKC", s).lower()
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"[‘’´`]", "'", s)
    s = re.sub(r"[“”]", '"', s)
    s = re.sub(r"[–—−]", "-", s)
    return re.sub(r"\s+", " ", s).strip()


def title_key(t):
    t = re.sub(r"\(.*?\)|\[.*?\]", " ", t or "")
    t = re.sub(r"\b(m/f/d|f/m/d|w/m/d|m/w/d|f/m/x|h/f|f/h|all genders|remote|hybrid)\b", " ", t, flags=re.I)
    return re.sub(r"[^a-z0-9 ]", " ", norm(t)).split()


def title_sim(a, b):
    ka, kb = " ".join(title_key(a)), " ".join(title_key(b))
    if not ka or not kb:
        return 0.0
    if ka == kb:
        return 1.0
    return difflib.SequenceMatcher(None, ka, kb).ratio()


def slugs(company):
    c = norm(company)
    c = re.sub(r"[®™©]", "", c)
    c = re.sub(r"\(.*?\)", " ", c)
    c = c.split(",")[0]  # "dataroots, a Talan company"
    c = re.sub(r"^the\s+", "", c.strip())
    c = re.sub(LEGAL, " ", c)
    ascii_c = unicodedata.normalize("NFKD", c).encode("ascii", "ignore").decode()
    words = re.findall(r"[a-z0-9]+", ascii_c)
    bare = re.findall(r"[a-z0-9]+", re.sub(PLACE, " ", ascii_c))
    out = []
    for w in (words, bare):
        for s in ["".join(w), "-".join(w), "".join(w[:2]), w[0] if w else ""]:
            if s and s not in out:
                out.append(s)
    return out


# Each board returns [(title, url, job_id, text)] for a slug, or [].
def greenhouse(slug, title=None):
    d = get_json(f"https://boards-api.greenhouse.io/v1/boards/{slug}/jobs?content=true")
    return [(j["title"], j["absolute_url"], str(j["id"]), j.get("content") or "") for j in (d or {}).get("jobs", [])]


def lever(slug, title=None):
    out = []
    for host in ("api.lever.co", "api.eu.lever.co"):
        d = get_json(f"https://{host}/v0/postings/{slug}?mode=json")
        if isinstance(d, list):
            for j in d:
                text = " ".join([j.get("descriptionPlain") or ""] + [(l.get("text") or "") + " " + (l.get("content") or "") for l in j.get("lists") or []] + [j.get("additionalPlain") or ""])
                out.append((j["text"], j["hostedUrl"], j["id"], text))
    return out


def ashby(slug, title=None):
    d = get_json(f"https://api.ashbyhq.com/posting-api/job-board/{slug}")
    return [(j["title"], j["jobUrl"], j["id"], j.get("descriptionPlain") or j.get("descriptionHtml") or "") for j in (d or {}).get("jobs", [])]


def workable(slug, title=None):
    d = get_json(f"https://apply.workable.com/api/v1/widget/accounts/{slug}?details=true")
    return [(j["title"], j["url"], j.get("shortcode") or "", j.get("description") or "") for j in (d or {}).get("jobs", [])]


def smartrecruiters(slug, title=None):
    d = get_json(f"https://api.smartrecruiters.com/v1/companies/{slug}/postings?limit=100")
    out = []
    for j in (d or {}).get("content", []):
        det = get_json(f"https://api.smartrecruiters.com/v1/companies/{slug}/postings/{j['id']}")
        secs = ((det or {}).get("jobAd") or {}).get("sections", {})
        text = " ".join(v.get("text") or "" for v in secs.values() if isinstance(v, dict))
        out.append((j["name"], f"https://jobs.smartrecruiters.com/{slug}/{j['id']}", str(j["id"]), text))
    return out


def recruitee(slug, title=None):
    d = get_json(f"https://{slug}.recruitee.com/api/offers/")
    return [(j["title"], j["careers_url"], str(j["id"]), (j.get("description") or "") + " " + (j.get("requirements") or "")) for j in (d or {}).get("offers", [])]


def personio(slug, title=None):
    out = []
    for tld in ("de", "com"):
        body = get(f"https://{slug}.jobs.personio.{tld}/xml")
        if not body or "<position>" not in body:
            continue
        for pos in re.findall(r"<position>(.*?)</position>", body, re.S):
            name = re.search(r"<name>(.*?)</name>", pos, re.S)
            pid = re.search(r"<id>(\d+)</id>", pos)
            text = " ".join(re.findall(r"<value>(.*?)</value>", pos, re.S))
            if name and pid:
                out.append((html.unescape(re.sub(r"<!\[CDATA\[|\]\]>", "", name.group(1))).strip(),
                            f"https://{slug}.jobs.personio.{tld}/job/{pid.group(1)}", pid.group(1), html.unescape(re.sub(r"<!\[CDATA\[|\]\]>", "", text))))
        break
    return out


def teamtailor(slug, title=None):
    body = get(f"https://{slug}.teamtailor.com/jobs.rss")
    out = []
    for item in re.findall(r"<item>(.*?)</item>", body or "", re.S):
        t = re.search(r"<title>(.*?)</title>", item, re.S)
        link = re.search(r"<link>(.*?)</link>", item, re.S)
        desc = re.search(r"<description>(.*?)</description>", item, re.S)
        if t and link:
            url = link.group(1).strip()
            jid = re.search(r"/jobs/(\d+)", url)
            out.append((html.unescape(t.group(1)).strip(), url, jid.group(1) if jid else "", html.unescape(desc.group(1)) if desc else ""))
    return out


def bamboohr(slug, title=None):
    d = get_json(f"https://{slug}.bamboohr.com/careers/list")
    out = []
    for j in (d or {}).get("result", []):
        if title and title_sim(title, j.get("jobOpeningName")) < MIN_TITLE_SIM:
            continue  # the detail call is per job, so fetch only plausible titles
        det = ((get_json(f"https://{slug}.bamboohr.com/careers/{j['id']}/detail") or {}).get("result") or {}).get("jobOpening") or {}
        out.append((j["jobOpeningName"], f"https://{slug}.bamboohr.com/careers/{j['id']}", str(j["id"]), det.get("description") or ""))
    return out


def amazon(slug, title=None):
    if slug not in ("amazon", "amazonwebservices", "aws") or not title:
        return []
    d = get_json("https://www.amazon.jobs/en/search.json?result_limit=50&base_query=" + urllib.parse.quote(title))
    return [(j["title"], "https://www.amazon.jobs" + j["job_path"], str(j["id_icims"]),
             " ".join(j.get(k) or "" for k in ("description", "basic_qualifications", "preferred_qualifications")).replace("<br/>", " "))
            for j in (d or {}).get("jobs", [])]


BOARDS = {"greenhouse": greenhouse, "lever": lever, "ashby": ashby, "workable": workable,
          "smartrecruiters": smartrecruiters, "recruitee": recruitee, "personio": personio,
          "teamtailor": teamtailor, "bamboohr": bamboohr, "amazon_jobs": amazon}


def coverage(bullets, text):
    if not bullets:
        return None
    # whitespace is dropped because scrapes split words around punctuation ("dbt- Modelle")
    squash = lambda s: re.sub(r"\s+", "", norm(s))
    t = squash(text)
    return sum(squash(b)[:120] in t for b in bullets) / len(bullets)


def resolve(company, title, bullets=None):
    """Best verified (platform, url, job_id, title, coverage), or None."""
    best = None
    for platform, fn in BOARDS.items():
        for slug in slugs(company):
            try:
                jobs = fn(slug, title)
            except Exception:
                jobs = []
            for jt, url, jid, text in jobs:
                ts = title_sim(title, jt)
                if ts < MIN_TITLE_SIM:
                    continue
                cov = coverage(bullets, text)
                ok = cov is not None and cov >= MIN_BULLET_COVERAGE
                cand = (platform, url, jid, jt, cov, ts)
                if ok and (best is None or (cov, ts) > (best[4], best[5])):
                    best = cand
            if jobs:
                break  # a slug that answered on this platform is the right slug for it
    return best


def load_linkedin_records():
    out = []
    for d in sorted(DATA_DIR.iterdir()):
        f = d / f"{d.name}.json"
        if f.is_file():
            r = json.loads(f.read_text(encoding="utf-8"))
            if "linkedin.com" in (r.get("source_url") or ""):
                out.append((f, r))
    return out


def apply(f, r, res):
    platform, url, jid = res[0], res[1], res[2]
    r["linkedin_url"] = r["source_url"]
    r["source_url"] = url
    r["ats_platform"] = platform
    r["ats_job_id"] = jid
    keys = list(r.keys())
    if "linkedin_url" in keys:  # keep linkedin_url right after source_url
        keys.remove("linkedin_url")
        keys.insert(keys.index("source_url") + 1, "linkedin_url")
    f.write_text(json.dumps({k: r[k] for k in keys}, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    a = f.parent / "jd_archive.md"
    if a.exists():
        txt = a.read_text(encoding="utf-8")
        if txt.startswith("**URL:**"):
            first, rest = txt.split("\n", 1)
            a.write_text(f"**URL:** {url}\n{rest}", encoding="utf-8")


def switch_record(args):
    """Move one record's source_url to an employer posting found outside the boards above."""
    f = DATA_DIR / args.record / f"{args.record}.json"
    r = json.loads(f.read_text(encoding="utf-8"))
    if "linkedin.com" not in (r.get("source_url") or ""):
        sys.exit(f"NOT SWITCHED: source_url is not LinkedIn ({r.get('source_url')})")
    text = Path(args.text_file).read_text(encoding="utf-8")
    checked = r.get("responsibilities") or []
    if not checked:  # prose-only records: check the archive's longer lines instead
        body = (f.parent / "jd_archive.md").read_text(encoding="utf-8").split("\n")[5:]
        checked = [l.strip("- ").strip() for l in body if len(l.strip()) > 60][:8]
    cov = coverage(checked, text)
    print(f"coverage={cov or 0:.2f} over {len(checked)} lines")
    if cov is None or cov < MIN_BULLET_COVERAGE:
        sys.exit("NOT SWITCHED: the employer text does not match the record")
    apply(f, r, (args.platform, args.url, args.job_id))
    print(f"SWITCHED {args.record} -> {args.url}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--company")
    ap.add_argument("--title")
    ap.add_argument("--text-file", help="fetched posting text; its bullet lines verify the ATS match")
    ap.add_argument("--corpus", action="store_true")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--record", help="jd_id to switch to the employer posting given by --url")
    ap.add_argument("--url")
    ap.add_argument("--platform", default="unknown")
    ap.add_argument("--job-id", default="")
    args = ap.parse_args()
    if args.record:
        switch_record(args)
        return
    if args.company:
        bullets = None
        if args.text_file:
            lines = Path(args.text_file).read_text(encoding="utf-8").split("\n")
            bullets = [l.strip()[2:].strip() for l in lines if l.strip().startswith("- ") and len(l.strip()) > 40][:15] or None
        res = resolve(args.company, args.title or "", bullets) if bullets else None
        if res:
            print(json.dumps({"ats_platform": res[0], "source_url": res[1], "ats_job_id": res[2],
                              "ats_title": res[3], "coverage": round(res[4], 2)}))
            return
        found = []
        for platform, fn in BOARDS.items():
            for slug in slugs(args.company):
                jobs = fn(slug, args.title)
                for jt, url, jid, _ in jobs:
                    if title_sim(args.title or "", jt) >= MIN_TITLE_SIM:
                        found.append((platform, jt, url))
                if jobs:
                    break
        print("NO VERIFIED ATS MATCH" + (" (unverified title matches: " + json.dumps(found) + ")" if found else ""))
        sys.exit(1)
    recs = load_linkedin_records()
    with ThreadPoolExecutor(max_workers=3) as ex:
        results = list(ex.map(lambda fr: resolve(fr[1]["company"], fr[1]["role"], fr[1].get("responsibilities")), recs))
    n = 0
    for (f, r), res in zip(recs, results):
        if res:
            n += 1
            print(f"RESOLVED\t{r['jd_id']}\t{res[0]}\t{res[1]}\tcoverage={res[4]:.2f}\ttitle={res[5]:.2f}")
            if args.apply:
                apply(f, r, res)
        else:
            print(f"UNRESOLVED\t{r['jd_id']}")
    print(f"{n} of {len(recs)} LinkedIn records resolved to a verified ATS posting" + (" and updated" if args.apply else ""), file=sys.stderr)


if __name__ == "__main__":
    main()
