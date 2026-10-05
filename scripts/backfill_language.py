#!/usr/bin/env python3
"""
Write the derived jd_language field into every data/{jd_id}/{jd_id}.json.

Run after changing the rule in language_detect.py so the stored values match.
The field is placed straight after language_gate_languages; nothing else in a
record is touched.

Usage:
    python3 scripts/backfill_language.py
"""

import json
from pathlib import Path

from language_detect import detect_language

DATA_DIR = Path(__file__).parent.parent / "data"
ANCHOR = "language_gate_languages"
FIELD = "jd_language"


def main():
    changed = 0
    for jd_folder in sorted(DATA_DIR.iterdir()):
        json_path = jd_folder / f"{jd_folder.name}.json"
        if not json_path.exists():
            continue
        record = json.loads(json_path.read_text(encoding="utf-8"))
        lang = detect_language(record, jd_folder / "jd_archive.md")
        rebuilt = {}
        for k, v in record.items():
            if k == FIELD:
                continue
            rebuilt[k] = v
            if k == ANCHOR:
                rebuilt[FIELD] = lang
        if ANCHOR not in record:
            rebuilt[FIELD] = lang
        if rebuilt != record or list(rebuilt) != list(record):
            json_path.write_text(json.dumps(rebuilt, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            changed += 1
    print(f"Updated {changed} records")


if __name__ == "__main__":
    main()
