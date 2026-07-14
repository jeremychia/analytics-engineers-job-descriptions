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
│   ├── index.html            # Interactive analytics dashboard
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
