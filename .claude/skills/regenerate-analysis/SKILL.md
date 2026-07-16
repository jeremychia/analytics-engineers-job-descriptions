---
name: regenerate-analysis
description: Regenerate analysis/data.json and compute statistics when new JDs are added to the corpus
allowed-tools: Bash Read Write
argument-hint: '[--data-only]'
---

Regenerate the analysis pipeline after new JDs are added to the corpus.

**Usage:**
```bash
/regenerate-analysis                # Full regeneration (compile + analyze)
/regenerate-analysis --data-only    # Just recompile data.json (faster)
```

**What this does:**

1. **Compiles all individual JD JSON files** from `data/{jd_id}/{jd_id}.json` into a single `analysis/data.json`
2. **Analyzes all Layer B dimensions** across the analytical cohort (rigour, domain risk, team maturity, autonomy, AI role, testing framing, loss aversion)
3. **Prints summary statistics** ready for copying into `analysis/report.md`
4. **Updates `index.html` automatically** (no code changes needed — dashboard auto-fetches `data.json`)

**When to use:**

After you:
- Add new JDs to the corpus (via `/classify-jd` or manual addition to `data/`)
- Want to update `index.html` with new data
- Need current statistics for the markdown report

**The pipeline:**

```
data/{jd_id}/{jd_id}.json (individual JD records)
           ↓
scripts/regenerate_report.py
           ↓
analysis/data.json (single compiled source)
           ↓
analysis/index.html (auto-fetches on page load)
           ↓
Interactive browser dashboard ✨
```

**After regeneration:**

1. Reload `analysis/index.html` in browser — it auto-fetches the new `data.json`
2. **Update `analysis/report.md`** with statistics from the script output:
   - **Preamble** (§0): update corpus size, date, and count of JDs added in this batch
   - **§3 (The dataset)**: update role-type breakdown table and analytical cohort size
   - **§3 (Corpus vintages)**: add a line describing the new JDs added and their distribution (maturity, risk, seniority)
   - **§4.1–4.8**: update all percentage tables and key statistics with new n's; flag where % changed >2pp
   - **§4.10–4.12** (AI role, testing, loss aversion): check if new JDs were coded on these dimensions; update sample sizes
   - **§5 (Survey comparison)**: update n's and re-check claimed gaps against new data
   - **§9.4 (What n supports)**: update confidence intervals and cite the new corpus size
3. Test the interactive dashboard at `analysis/index.html` — spot-check a few filters and crosstabs
4. Commit all files with message like:
   ```
   feat(analysis): regenerate with 12 new JDs (Doodle, Orange, MoonPay, etc.)
   
   - 260 total JDs (240 in analytical cohort, +12 from 2026-07-16)
   - Rigour: 75% (stable), dbt: 65%, mid-stage: 64%
   - Updated all statistics tables in report.md
   - No pattern breaks; early confidence-interval tightening on core dimensions
   ```

**Example output:**

```
======================================================================
STEP 1: Compile data.json
======================================================================
  ✓ 2026-04-08_lego_senior-analytics-engineer
  ... (248 JDs total)
✓ Compiled 248 JDs → analysis/data.json

======================================================================
STEP 2: Analyze dimensions
======================================================================
  Total records: 248
  Analytical cohort (AE/BI + team_lead): 228
  
  velocity_vs_rigour: rigour 170 (75%), mixed 52, velocity 6
  domain_risk: moderate 158 (69%), high 57, low 13
  data_team_maturity: mid 145 (64%), mature 56, early 27
  stakeholder_orientation: internal_data 115 (50%), mixed 39, ...
  autonomy_level: execution 87 (38%), strategic 81, mixed 60
  
  has_dbt (AE/BI): 143/220 (65%)
  ai_role (coded n=86): none 71 (83%), ai_enabler 14 (16%)
  testing_framing (coded n=86): responsibility 51 (59%), absent 31
  loss_aversion_framing (coded n=86): moderate 53 (62%), none 21
```

**Files involved:**

- `scripts/regenerate_report.py` — main regeneration script
- `scripts/compile_data.py` — helper that aggregates JSON files
- `analysis/data.json` — output (consumed by `index.html`)
- `analysis/report.md` — output (manual table updates from printed stats)
- `analysis/index.html` — no edit needed (auto-fetches `data.json`)
