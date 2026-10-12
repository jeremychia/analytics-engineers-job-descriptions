---
name: discover-jds
description: Sweep LinkedIn's public job search for new analytics-engineering postings in the configured regions, queue the ones not yet in the corpus, and classify them with /classify-jd. Use when asked to find, discover, scrape or refresh new job listings.
allowed-tools: Bash Read Write Skill
argument-hint: '[--regions france,germany,uk,...] [--days 4] [--max 20] [--dry-run]'
---

`$ARGUMENTS` may set `--regions`, `--days`, `--max` (postings to classify this run, default 20) and `--dry-run` (search and list only). Run every command from the repo root.

## Step 1 — Sweep

```bash
python3 scripts/discover_jobs.py search [--regions ...] [--days N]
```

- Pass `--regions` and `--days` through only when the user gave them. Otherwise the defaults in `discovery/search_config.json` apply.
- Report each search line and the final counts to the user.
- If any line says `blocked`, stop sweeping for this session. Do not retry, raise the page count or shorten the delay. Carry on with Step 2 using what is already queued.
- Sweep regions that have never been swept first, with `--regions`, then the rest. A sweep of every configured region often hits LinkedIn's rate limit before the end of the list.

## Step 2 — Pick the batch

```bash
python3 scripts/discover_jobs.py list --limit <max>
```

- With `--dry-run`, print this list and stop.
- Skip every entry marked `possible repost of <jd_id>`: the same company and exact title are already in the corpus under another URL. Mark them `duplicate` (Step 4) and name them in the summary, so the user can classify one deliberately if it is a new opening.
- Keep entries marked `similar to <jd_id>`, but compare before writing. Fetch the posting and compare its responsibilities with that record's `responsibilities`. Identical bullets mean a relabelled repost: mark it `duplicate`. A different level, team or pay band means a new opening: classify it and name the related record in its evidence.
- Keep only the first of entries marked `same title as queued <job_id>`. After classifying it, fetch each twin and diff the body text. Identical apart from location means one opening listed twice: mark it `duplicate`. A separate country, pay band or contract means a distinct opening: classify it, reuse the first record's coding where the text is the same, and flag the pair as correlated signal in the summary.
- Keep everything else, up to `--max`.
- Read the queue from stdout. `list` prints its `N pending` count to stderr, so stripping the first line of stdout drops a real posting.
- Run `python3 scripts/discover_jobs.py recheck` after a batch adds records, so postings already queued get compared against them.

## Step 3 — Classify

Invoke the `classify-jd` skill once with the kept URLs, newline-separated, and follow its batch mode to the end. Do not skip its duplicate check: a posting can enter the corpus between the sweep and the classification.

For more than 20 kept postings, split them into batches of about 20 by region and run one agent per batch in parallel.

- Put every posting from the same company in one batch: twins, `similar to` entries and one job listed in several countries.
- Tell each agent not to run `discover_jobs.py done` or edit `discovery/*.json`. Concurrent writes overwrite the queue.
- Have each agent report one line per job id with its status. Record every outcome yourself in Step 4.

Every URL here is a LinkedIn job, so run classify-jd's Step 1.4 on each one. It looks up the employer's own ATS posting with `scripts/resolve_ats.py`. A verified match becomes `source_url`, and the LinkedIn URL moves to `linkedin_url`. Without a verified match the LinkedIn URL stays as `source_url`. Count resolved and unresolved postings in the summary.

## Step 4 — Close out each posting

After the batch, record what happened to every posting in it:

```bash
python3 scripts/discover_jobs.py done <job_id> [...] --status classified|duplicate|skipped|failed
```

- `classified` — a record was written.
- `duplicate` — `/classify-jd` found it in the corpus, or Step 2 skipped it as a repost.
- `failed` — extraction failed or needed pasted text. Name these in the summary with their URLs.
- `skipped` — the user asked to drop it.

Postings left out of the batch stay queued for the next run.

## Step 5 — Summarise

Print: postings found, queued, classified, duplicates, failures, and how many remain queued. Suggest `/regenerate-analysis` when at least one record was written.

## Notes

- Add or change a region in `discovery/search_config.json`. Take the `geoId` from the region's LinkedIn search URL, and add `distance_miles` for a city.
- Check a new `geoId` before relying on it. Fetch one results page and confirm the cards' locations are in that country.
- Europe is searched country by country: every EU member, plus Norway and Switzerland. The broad `emea` search stops at its page limit, so it only catches what the country searches miss.
  - EU: austria, belgium, bulgaria, croatia, cyprus, czechia, denmark, estonia, finland, france, germany, greece, hungary, ireland, italy, latvia, lithuania, luxembourg, malta, netherlands, poland, portugal, romania, slovakia, slovenia, spain, sweden.
  - Outside the EU: norway, switzerland, uk, apac, nyc_metro, seattle, and the `emea` catch-all.
- A region's name only scopes the search. A record's `geo_region` comes from its `job_location`, through `scripts/geo_classify.py`.
- The `seattle` region has no `geo_region` bucket in `scripts/geo_classify.py`, so its records compile into `other`.
- The search uses LinkedIn's logged-out job search. Keep to the configured regions, keywords and page limits.

- The sweep and `check_duplicate_jd.py` both read `linkedin_url` as well as `source_url`, so a record moved to its ATS URL is still recognised when LinkedIn shows it again.
- To move older LinkedIn-sourced records to their ATS URLs, run `python3 scripts/resolve_ats.py --corpus` to preview, then add `--apply`. Only verified matches are changed. Expect many misses: postings close, and Workday, Teamtailor and company sites aren't covered.
- Run every shell loop over job ids with `xargs` or a quoted array. In zsh an unquoted `$ids` stays one word, and `done` then records the whole string as a single bogus id.

## Worked case

`/discover-jds --regions nyc_metro --days 4 --max 10`: the sweep finds 10 cards and queues 7 of them. Four carry `possible repost of …` (Pelago, Taptap Send, Harvey, Flex), so mark them `duplicate`. Classify the other three with `/classify-jd`. Mark the two written records `classified` and the one that needed pasted text `failed`. Report that zero remain queued, list the failed URL, and suggest `/regenerate-analysis`.
