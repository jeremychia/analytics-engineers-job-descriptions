#!/usr/bin/env python3
"""
Compile all individual JD JSON files into analysis/data.json.

Scans data/{jd_id}/{jd_id}.json for all JDs and merges them into
a single flat array for consumption by the interactive dashboard.

Usage:
    python3 scripts/compile_data.py

Output:
    analysis/data.json — flat array of all classified JDs
"""

import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"
OUT_FILE = Path(__file__).parent.parent / "analysis" / "data.json"

def main():
    records = []

    # Find all {jd_id}.json files
    for jd_folder in sorted(DATA_DIR.iterdir()):
        if not jd_folder.is_dir():
            continue

        jd_id = jd_folder.name
        jd_json_path = jd_folder / f"{jd_id}.json"

        if jd_json_path.exists():
            try:
                with open(jd_json_path) as f:
                    record = json.load(f)
                # Ensure application_id field exists for backwards compat
                if "jd_id" in record and "application_id" not in record:
                    record["application_id"] = record["jd_id"]
                records.append(record)
                print(f"✓ {jd_id}")
            except json.JSONDecodeError as e:
                print(f"✗ {jd_id} — JSON decode error: {e}")
            except Exception as e:
                print(f"✗ {jd_id} — {e}")

    # Write output
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_FILE, "w") as f:
        json.dump(records, f, indent=2, ensure_ascii=False)

    print(f"\nCompiled {len(records)} JDs → {OUT_FILE}")

if __name__ == "__main__":
    main()
