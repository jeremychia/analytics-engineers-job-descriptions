#!/usr/bin/env python3
"""
Write the keyword-derived tool flags into every data/{jd_id}/{jd_id}.json.

Run after changing a pattern in tool_mentions.py so the stored values match.
Fields are placed straight after the classifier-coded has_* block; nothing else
in a record is touched.

Usage:
    python3 scripts/backfill_tool_mentions.py
"""

import json
from pathlib import Path

from tool_mentions import TOOL_FIELDS, detect_tool_mentions

DATA_DIR = Path(__file__).parent.parent / "data"
ANCHOR = "has_soda"


def main():
    changed = 0
    for jd_folder in sorted(DATA_DIR.iterdir()):
        json_path = jd_folder / f"{jd_folder.name}.json"
        if not json_path.exists():
            continue
        record = json.loads(json_path.read_text(encoding="utf-8"))
        flags = detect_tool_mentions(jd_folder / "jd_archive.md")
        rebuilt = {}
        for k, v in record.items():
            if k in TOOL_FIELDS:
                continue
            rebuilt[k] = v
            if k == ANCHOR:
                rebuilt.update(flags)
        if ANCHOR not in record:
            rebuilt.update(flags)
        if rebuilt != record or list(rebuilt) != list(record):
            json_path.write_text(json.dumps(rebuilt, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            changed += 1
    print(f"Updated {changed} records")


if __name__ == "__main__":
    main()
