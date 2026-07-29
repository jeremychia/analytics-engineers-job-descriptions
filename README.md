# Analytics Engineers Job Descriptions

A corpus of European analytics engineering job postings, collected for research into whether industry survey claims (primarily dbt Labs' annual State of Analytics Engineering reports) are reflected in actual employer hiring language.

## Directory Structure

```
analytics-engineers-job-descriptions/
├── data/                     # Job description records (one folder per JD)
│   └── YYYY-MM-DD_company_role/
│       ├── {jd_id}.json      # Structured Layer B classification
│       ├── jd.md             # Formatted JD + behavioral analysis
│       └── jd_archive.md     # Raw verbatim JD text
├── analysis/                 # Cross-reference analysis & reports
│   ├── index.html            # Landing page (job seeker / hiring manager toggle)
│   ├── full-analysis.html    # Full interactive statistics dashboard
│   ├── report.md             # Full analysis vs dbt Labs reports
│   ├── data.json             # Compiled classification dataset
│   └── jd_traces/            # 3-run LLM consistency checks
├── scripts/                  # Python tools
│   └── write_jd.py           # Convert classified JD JSON → output files
├── docs/                     # Documentation
└── README.md                 # This file
```

## Quick Start

See [`analysis/report.md`](analysis/report.md) for the full analysis and key findings.

## Opening the dashboard

Both `analysis/index.html` and `analysis/full-analysis.html` load their data via `fetch('./data.json')`, which browsers block under a bare `file://` URL — serve the `analysis/` folder over HTTP instead:

```bash
cd analysis
python3 -m http.server 8000
```

Then open:
- [http://localhost:8000/index.html](http://localhost:8000/index.html) — the landing page (job seeker / hiring manager toggle)
- [http://localhost:8000/full-analysis.html](http://localhost:8000/full-analysis.html) — the full statistics dashboard
