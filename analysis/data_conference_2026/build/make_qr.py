#!/usr/bin/env python3
"""Write src/qr.js: the QR codes on the slides, one to the public long read and one to the speaker's LinkedIn profile.

Run when the address changes:  .venv/bin/python analysis/data_conference_2026/build/make_qr.py
Needs the qrcode package (requirements.txt); build.py only reads the file this writes.
"""
import json
from pathlib import Path

import qrcode

URL = "https://jeremychia.github.io/analytics-engineers-job-descriptions/questions.html"
LINKEDIN = "https://www.linkedin.com/in/jjchia/"
OUT = Path(__file__).resolve().parent / "src" / "qr.js"


def qr_path(url):
    """One SVG path of unit squares, one per dark module, with no quiet zone (the slide adds its own margin)."""
    code = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0)
    code.add_data(url)
    matrix = code.get_matrix()
    squares = "".join(f"M{x} {y}h1v1h-1z" for y, row in enumerate(matrix) for x, dark in enumerate(row) if dark)
    return len(matrix), squares


if __name__ == "__main__":
    lines = []
    for name, url in [("QR", URL), ("QR_LINKEDIN", LINKEDIN)]:
        size, path = qr_path(url)
        lines.append(f"const {name} = {json.dumps({'url': url, 'size': size, 'path': path})};")
        print(name, f"{size}x{size} modules")
    OUT.write_text("/* Built by make_qr.py; edit the addresses there. */\n" + "\n".join(lines) + "\n", encoding="utf-8")
