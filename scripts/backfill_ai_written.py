#!/usr/bin/env python3
"""
Write the derived ai_written field into every data/{jd_id}/{jd_id}.json.

Run after changing a measure or anchor in ai_written.py so the stored values
match. The field is placed straight after jd_language; nothing else in a record
is touched. Records that cannot be scored (non-English, too short) get no field.

Usage:
    python3 scripts/backfill_ai_written.py
"""

import json
from pathlib import Path

from ai_written import ai_written_for_archive

DATA_DIR = Path(__file__).parent.parent / "data"
ANCHOR = "jd_language"
FIELD = "ai_written"


def main():
    changed = scored = 0
    for jd_folder in sorted(DATA_DIR.iterdir()):
        json_path = jd_folder / f"{jd_folder.name}.json"
        if not json_path.exists():
            continue
        record = json.loads(json_path.read_text(encoding="utf-8"))
        result = ai_written_for_archive(jd_folder / "jd_archive.md", record.get(ANCHOR, "en"))
        rebuilt = {}
        for k, v in record.items():
            if k == FIELD:
                continue
            rebuilt[k] = v
            if k == ANCHOR and result:
                rebuilt[FIELD] = result
        if ANCHOR not in record and result:
            rebuilt[FIELD] = result
        scored += bool(result)
        if rebuilt != record or list(rebuilt) != list(record):
            json_path.write_text(json.dumps(rebuilt, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            changed += 1
    print(f"Scored {scored}; updated {changed} records")


if __name__ == "__main__":
    main()
