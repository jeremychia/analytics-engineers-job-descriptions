# France junior-route sweep: plan and outcome

Decided 2026-10-26: narrow scope (analytics engineer and BI titles plus junior routes), France only, run only when no other session is working in the checkout.

## Why
The corpus has 80 France-located ads: 3 classified junior, 0 junior titles, 0 offering alternance, stage, apprentissage or VIE. The scraper searched only `"analytics engineer"`. In France many beginners start through alternance under other titles, so the corpus cannot show that door.

## What changes in `discovery/search_config.json` (for the run only; revert or keep as a separate profile afterwards)
- `keywords` (France region only): `"analytics engineer" alternance`, `"analytics engineer" stage`, `"analytics engineer" junior`, `"ingénieur BI"`, `"développeur BI"`, `"BI engineer" alternance`, `"business intelligence" alternance`, `"ingénieur décisionnel"`.
- `title_include`: keep the existing pattern and add `ing[ée]nieur(e)? (bi|business intelligence|d[ée]cisionnel)|d[ée]veloppeu(r|se) (bi|d[ée]cisionnel)|(alternan|apprenti|stagiaire|stage|junior).{0,40}(analytics|\bbi\b|business intelligence|d[ée]cisionnel)|(analytics|\bbi\b|business intelligence).{0,40}(alternan|apprenti|stagiaire|stage|junior)`.
- Window: `--days 30`, `--max-pages 2`, region `france` only (the earlier lesson: LinkedIn throttles after about 10–15 searches; keep chunks of 4 keywords about 10 minutes apart).

## Steps
1. Confirm no other session is working in the checkout (its uncommitted data and discovery files are committed or pushed).
2. Work on a fresh worktree of `origin/main`; `git fetch` first.
3. `python3 scripts/discover_jobs.py search --regions france --days 30 --max-pages 2` in chunks; stop at the first `blocked`.
4. `python3 scripts/discover_jobs.py list`; skip entries marked `possible repost`.
5. Classify with `/classify-jd` (batches of about 20, one agent each; agents must not run `discover_jobs.py done`).
6. `python3 scripts/dedupe_corpus.py`, `backfill_language.py`, `backfill_ai_written.py`, `/regenerate-analysis`.
7. Fetch again before pushing; rebase if origin moved; push.
8. Re-run the France ladder analysis (`research/ladder_france_*.csv` shows the current thin version) and update Question 4 and 5 of `talk_v2_for_the_people.md`.

## What it can and cannot fix
It can show whether alternance, stage and junior-titled ads exist in the French market at this scale, with tools and degree wording. It cannot show hiring rates, and LinkedIn's logged-out search will under-represent the French job boards (Welcome to the Jungle, APEC, Hellowork, France Travail), which a later pass could cover by hand.

## Outcome (2026-10-26)
- Chunk 1 (`"analytics engineer"` with alternance, stage, junior, and `"ingénieur BI"`, 30 days, 2 pages) queued 15 French postings; 14 were classified and 1 was a twin duplicate (AXA).
- Chunk 2 (`"développeur BI"`, `"BI engineer" alternance`, `"business intelligence" alternance`, `"ingénieur décisionnel"`) was blocked by LinkedIn (HTTP 429) on the first request, even after a 10-minute gap. Not retried.
- Result: 94 France-located ads, 13 classified junior; 12 of 13 name Bac+4/5, a master's or an engineering school. Selection effect: the internships were found by searching for them.
- Still to do: chunk 2 in a later session, the French job boards by hand, and a re-run of the France ladder analysis on the larger sample.
