# Regenerating Analysis & Reports

When you add new job descriptions to the corpus, use this workflow to update the analysis dashboard and markdown report.

## Quick Start

```bash
python3 scripts/regenerate_report.py
```

This will:
1. ✅ Compile all JD JSON files into `analysis/data.json` (248 JDs in current corpus)
2. ✅ Analyze all Layer B dimensions
3. ✅ Print summary statistics ready for `report.md`

## The Pipeline

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

## What Gets Updated

| File | What | When |
|------|------|------|
| `analysis/data.json` | All 248 JD records compiled | Every run (automatic) |
| `analysis/index.html` | Dashboard | Auto-refreshes from `data.json` on page load |
| `analysis/report.md` | Statistics tables | Manual — copy printed tables into report |

## Workflow

### 1. Add new JDs to corpus

Use `/classify-jd` skill to scrape and classify, OR manually add JSON files to `data/{jd_id}/`:

```
data/2026-07-15_capitalontap_analytics-engineer-london/
  ├── 2026-07-15_capitalontap_analytics-engineer-london.json
  ├── jd.md
  └── jd_archive.md
```

### 2. Regenerate analysis

```bash
python3 scripts/regenerate_report.py
```

Output:
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
  velocity_vs_rigour: {'rigour': 170, 'mixed': 52, 'velocity': 6}
    — rigour: 170/228 (75%)
  domain_risk: {'moderate': 158, 'high': 57, 'low': 13}
  data_team_maturity: {'mid': 145, 'mature': 56, 'early': 27}
  [... more stats ...]
```

### 3. Update dashboard

Just reload `analysis/index.html` in your browser — it auto-fetches the new `data.json`.

### 4. Update report.md (optional)

Copy the statistics tables from the script output into `analysis/report.md` where needed. For example:

**Before:**
```markdown
| velocity_vs_rigour | n | % (analytical, n=199) |
|--------------------|---|---|
| rigour | 150 | 75% |
| mixed | 43 | 22% |
| velocity | 6 | 3% |
```

**After (updated):**
```markdown
| velocity_vs_rigour | n | % (analytical, n=228) |
|--------------------|---|---|
| rigour | 170 | 75% |
| mixed | 52 | 23% |
| velocity | 6 | 3% |
```

### 5. Commit

```bash
git add analysis/data.json analysis/report.md
git commit -m "feat(analysis): regenerate with 12 new JDs from 2026-07-15"
git push
```

## Script Options

```bash
# Full regeneration (compile + analyze)
python3 scripts/regenerate_report.py

# Just recompile data.json (skip analysis)
python3 scripts/regenerate_report.py --data-only

# Show help
python3 scripts/regenerate_report.py --help
```

## Source Files

- `scripts/regenerate_report.py` — main script (compile + analyze)
- `scripts/compile_data.py` — helper (compile data.json only)
- `analysis/data.json` — output data for dashboard
- `analysis/index.html` — interactive visualization
- `analysis/report.md` — static markdown analysis

## Why This Exists

Previously there was no automated way to:
- Aggregate individual JD files into a single dataset
- Recompute statistics when new JDs were added
- Keep the dashboard and report in sync

Now everything flows through a single `data.json` file, making updates fast and reproducible.
