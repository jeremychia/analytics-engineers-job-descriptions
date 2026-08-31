# Regenerating Analysis & Reports

When you add job descriptions to the corpus, regenerate the derived artifacts.

**The authoritative, maintained procedure is the `/regenerate-analysis` skill** —
[`.claude/skills/regenerate-analysis/SKILL.md`](.claude/skills/regenerate-analysis/SKILL.md).
Read it there rather than following a summary here. This file used to carry its own
copy of the steps and silently went stale: it still described a 248-record corpus
and a two-step pipeline, omitting the responsibility-taxonomy stage, the virtualenv
it requires, and the hardcoded corpus-size strings in `index.html`.

## Quick start

```bash
# 1. compile data/{jd_id}/{jd_id}.json -> analysis/data.json, print summary stats
python3 scripts/regenerate_report.py

# 2. reclassify responsibility themes + theme x dimension relationships
#    (needs scipy: python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt)
./.venv/bin/python analysis/responsibility_taxonomy.py
```

Both are idempotent — re-running against an unchanged corpus produces no diff.

Everything after that is judgment work the skill walks through: updating the
statistics tables in `analysis/report.md`, re-testing every relationship panel
against the new n (significance is not permanent), and refreshing the hardcoded
corpus-size strings in `analysis/index.html`.

## The pipeline

```
data/{jd_id}/{jd_id}.json (source of truth — Layer B codes AND
           ↓               verbatim `responsibilities` bullets,
           ↓               both written by /classify-jd)
scripts/regenerate_report.py
           ↓
analysis/data.json (compiled, disposable)
           ↓                              ↘
index.html, full-analysis.html               analysis/responsibility_taxonomy.py
(auto-fetch on page load)                    ↓
                                             responsibility_classification.json
                                             (fetched + merged client-side by
                                              full-analysis.html)
```

**The architectural rule:** anything requiring comprehension of a JD is captured
once, per-JD, next to its archive, and is never machine-overwritten. Anything
computable from those captures is derived centrally and is disposable — deleting
every generated file in `analysis/` must always be recoverable by re-running the
two commands above.

## Source files

- `scripts/regenerate_report.py` — compile + analyze (`--data-only` skips analyze)
- `scripts/compile_data.py` — compile-only helper
- `scripts/write_jd.py` — writes a classified record; validates required fields and
  verbatim responsibility bullets before anything reaches disk
- `scripts/check_duplicate_jd.py` — pre-scrape duplicate check against `data/`
- `analysis/responsibility_taxonomy.py` — theme classification + relationship stats
- `analysis/data.json`, `analysis/responsibility_classification.json` — generated
- `analysis/report.md` — statistics tables updated by hand from the printed output
