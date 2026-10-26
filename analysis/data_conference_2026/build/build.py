#!/usr/bin/env python3
"""Assemble the self-contained pages from src/ and inputs/deck_data.json.

Usage:  python3 analysis/data_conference_2026/build/build.py
Run prep_data.py first when the corpus or the snapshots change.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
SRC = HERE / "src"
SHARED = ["lib.js", "s_open.js", "s_titles.js", "s_barcode.js", "s_stack.js", "s_ai.js", "s_juniors.js",
          "s_ladder.js", "s_benefits.js", "s_pitch.js", "s_gap.js", "s_sowhat.js", "slides_def.js"]


def assemble(template, runtime, name):
    data = (HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")
    js = "\n".join((SRC / f).read_text(encoding="utf-8") for f in SHARED + [runtime])
    html = (SRC / template).read_text(encoding="utf-8")
    html = html.replace("/*__CSS__*/", (SRC / "style.css").read_text(encoding="utf-8"))
    html = html.replace("/*__DATA__*/", "const D=" + data + ";").replace("/*__JS__*/", js)
    (OUT / name).write_text(html, encoding="utf-8")
    print("wrote", name, len(html) // 1024, "KB")


if __name__ == "__main__":
    assemble("deck.template.html", "deck.js", "jd_deck.html")
    assemble("views.template.html", "views.js", "jd_views.html")
