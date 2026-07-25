#!/usr/bin/env python3
"""Check inline <script> blocks in HTML files for JS syntax errors.

Catches things like an errant backtick inside a template literal that
silently breaks the entire script (every onclick handler on the page
stops working, with no error visible unless you open devtools).

Usage: check-html-js-syntax.py file1.html file2.html ...
Exits non-zero if any inline script fails to parse.
"""
import re
import shutil
import subprocess
import sys
import tempfile
import os

SCRIPT_RE = re.compile(r'<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>', re.S | re.I)


def check_with_node(src: str) -> str | None:
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
        f.write(src)
        path = f.name
    try:
        result = subprocess.run(
            ["node", "--check", path], capture_output=True, text=True
        )
        if result.returncode != 0:
            return result.stderr.strip()
        return None
    finally:
        os.unlink(path)


def check_with_jsc(src: str) -> str | None:
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
        f.write(src)
        path = f.name
    try:
        jxa = f'''
        var fs = $.NSString.stringWithContentsOfFileEncodingError({path!r}, $.NSUTF8StringEncoding, null);
        try {{
          new Function(fs.js);
        }} catch(e) {{
          console.log("ERROR: " + e);
        }}
        '''
        result = subprocess.run(
            ["osascript", "-l", "JavaScript", "-e", jxa],
            capture_output=True, text=True,
        )
        out = (result.stdout or "") + (result.stderr or "")
        if "ERROR:" in out:
            return out.strip()
        return None
    finally:
        os.unlink(path)


def get_checker():
    if shutil.which("node"):
        return check_with_node
    if shutil.which("osascript"):
        return check_with_jsc
    return None


def main(paths: list[str]) -> int:
    checker = get_checker()
    if checker is None:
        print("check-html-js-syntax: no JS engine found (node or osascript), skipping check", file=sys.stderr)
        return 0

    failed = False
    for path in paths:
        try:
            html = open(path, encoding="utf-8").read()
        except OSError:
            continue
        for i, m in enumerate(SCRIPT_RE.finditer(html)):
            src = m.group(1)
            if not src.strip():
                continue
            error = checker(src)
            if error:
                failed = True
                line = html[:m.start()].count("\n") + 1
                print(f"{path}: <script> block #{i + 1} (starting near line {line}) has a syntax error:")
                print(f"  {error}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
