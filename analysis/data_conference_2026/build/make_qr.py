#!/usr/bin/env python3
"""Write src/qr.js: the QR code on the closing slide, pointing at the public long read.

Run when the address changes:  .venv/bin/python analysis/data_conference_2026/build/make_qr.py
Needs the qrcode package (requirements.txt); build.py only reads the file this writes.
"""
import json
from pathlib import Path

import qrcode

URL = "https://jeremychia.github.io/analytics-engineers-job-descriptions/questions.html"
OUT = Path(__file__).resolve().parent / "src" / "qr.js"


def qr_path(url):
    """One SVG path of unit squares, one per dark module, with no quiet zone (the slide adds its own margin)."""
    code = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0)
    code.add_data(url)
    matrix = code.get_matrix()
    squares = "".join(f"M{x} {y}h1v1h-1z" for y, row in enumerate(matrix) for x, dark in enumerate(row) if dark)
    return len(matrix), squares


if __name__ == "__main__":
    size, path = qr_path(URL)
    OUT.write_text("/* Built by make_qr.py; edit the address there. */\n"
                   f"const QR = {json.dumps({'url': URL, 'size': size, 'path': path})};\n", encoding="utf-8")
    print("wrote", OUT.name, f"{size}x{size} modules")
