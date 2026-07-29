# Verbatim-fidelity audit — progress checkpoint

**Last updated:** 2026-07-29 (session paused here, resume from "Next up" below)

## Why this exists
Discovered that many `jd_archive.md` files in `data/` were not verbatim copies of the
source posting — they were silently paraphrased/condensed, because they'd been produced
via WebFetch (which pipes content through a small summarizing model) instead of raw
HTML/API extraction. Root cause and fixes are documented in
`.claude/skills/classify-jd/SKILL.md`. This file tracks the *cleanup* of the existing
corpus, going in reverse-chronological order by archive date.

## Status by date batch

### 2026-07-26 / 2026-07-28 (11 records) — ✅ DONE
All checked and fixed where needed. See git history for details — these are already
staged/committed as clean `??` (untracked, ready to add) in `data/`.

### 2026-07-24 (20 records) — ✅ DONE
17 fixed, 2 unrecoverable (Deel — client-rendered, no accessible API via curl; NETS —
position filled/removed, no Wayback snapshot), all re-verified.

### 2026-07-22 (44 records) — ✅ DONE
20 fixed, 9 already verbatim (no action), 5 unrecoverable (Riveron, MarqVision —
postings removed since archiving; Fuku, Linktree — pure client-rendered SPA with no
accessible payload; Intuitive — Cloudflare-gated, curl blocked by JS challenge).

### 2026-07-21 (16 records) — 🟡 IN PROGRESS, stopped here
Verification complete for all 16. Fix status:

**Confirmed verbatim, no action needed:**
- `2026-07-21_finavia_analytics-engineer` ✅
- `2026-07-21_moerie-beauty_analytics-engineer` ✅
- `2026-07-21_witteveenbos_bi-specialist` ✅
- `2026-07-21_bravida_analytics-engineer` ✅
- `2026-07-21_kaizen-gaming_analytics-engineer` ✅
- `2026-07-21_relay-technologies_senior-analytics-engineer` ✅

**Fixed this session (re-extracted + reclassified from true verbatim source):**
- `2026-07-21_currys-plc_senior-analytics-engineer` ✅
- `2026-07-21_eunice-energy-group_senior-data-analytics-engineer` ✅

**NEXT UP — flagged paraphrased/translated, NOT yet fixed:**
- `2026-07-21_eva-esports-virtual-arenas_data-analytics-engineer` — French source,
  archive is an English summary. Raw HTML already fetched to scratchpad as `eva_full.txt`
  in a prior session's scratchpad (now gone — re-fetch). Key details to preserve:
  80 salles, 11 pays, 500 m², €35M raised, 3 founders, 80 collaborateurs, goal of 100
  salles by end 2026, full recruitment process (Claire/Alexis/Jean interview steps),
  "Pourquoi rejoindre EVA" section.
- `2026-07-21_idw_data-analytics-engineer` — Portuguese source, archive is English
  summary. Opening line "Junta-te à IDW e constrói o futuro da tecnologia connosco! 🚀"
  and full company description need restoring in Portuguese.
- `2026-07-21_ilionx_data-analytics-engineer` — Dutch source, archive is English
  summary/translation. Drops team size ("~40 data driven consultants" / "350
  professionals" Data & AI community) and intro tagline.
- `2026-07-21_pro-plus_lead-analytics-engineer` — Slovenian source ("ODGOVORNOSTI:",
  "PRIČAKUJEMO:"), archive is English. Also drops "CV in English" application
  instruction.
- `2026-07-21_wave-group_senior-analytics-engineer` — partially paraphrased with real
  omissions (not just rewording): drops Industry: Logistics, Team: ~110, Funding:
  ~$45m Series A, company-description paragraph, and the "6 days" dev-budget detail
  (only kept the €5,000 figure). Original tone is informal/emoji-heavy
  ("🔥 Equity: up to 170% (!!!)") — preserve that verbatim, don't re-formalize it.
- `2026-07-21_xebia_analytics-engineer` — condensed, drops "6 days" dev budget,
  blog-post/customer-story links, "Xebia Data Fridays," "NS Business Card," "People
  First" ethos paragraph, and replaces the ❌ "THIS IS NOT YOUR DREAM JOB IF…" bullets
  with a paraphrased "What Won't Fit" section instead of quoting them directly.
- `2026-07-21_lego-group_lead-analytics-engineer` — heavily condensed. Extract via
  `__NEXT_DATA__` embedded JSON in the SSR HTML (field: `description`). Drops opening
  narrative paragraph, the "Play your part in our team succeeding" section (~200
  words), "applications reviewed on an ongoing basis" notice, and DEI/Child
  Safeguarding closing paragraphs.
- `2026-07-21_decathlon-digital_analytics-engineer-pricing-data` (07-21 copy — note
  there's a SEPARATE 07-22 Decathlon Digital record already fixed, this is a
  different/earlier archive of a similar-but-not-identical posting) — original job ID
  4888952101 now 404s on Greenhouse; it was reposted as ID **4933944101** (find via
  Greenhouse Boards API search or company careers page). True source is **entirely in
  French** ("Notre Team Pricing recherche un·e Analytics Engineer...", "TA FUTURE
  CONTRIBUTION", "CE QUE TU APPORTES") — archive is English with fabricated section
  headers not in source, plus an invented "Salary: Not stated" field and an invented
  "The role focuses on four key areas" framing sentence not present in source. Must
  re-extract in French via Greenhouse Boards API (`boards-api.greenhouse.io/v1/boards/
  decathlontechnology/jobs/4933944101`) and reclassify.

## How to resume
1. Read `.claude/skills/classify-jd/SKILL.md` Step 1 for the extraction playbook
   (raw HTML default, platform-specific API fallbacks, depth-counted div extraction).
2. For each "NEXT UP" item: re-fetch raw HTML/API JSON fresh (scratchpad from prior
   sessions is gone), extract full verbatim text preserving original language, then
   pipe through `scripts/write_jd.py` with a full Layer B reclassification (all 7
   dimensions + tool flags + evidence quotes) based on the corrected text — don't just
   patch `jd_archive.md`, the JSON classification record needs redoing too since it was
   built from the corrupted text.
3. After 07-21 is done, continue the same reverse-chronological audit into any earlier
   dates in `data/` that haven't been checked yet (everything before 2026-07-21).
4. `analysis/data.json` has NOT been regenerated since these fixes started — run the
   `regenerate-analysis` skill once ALL fixes across all dates are complete, not
   incrementally (per explicit user instruction earlier in this work).
