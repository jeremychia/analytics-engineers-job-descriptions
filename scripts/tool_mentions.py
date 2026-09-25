"""
Derive keyword-based tool flags from a JD's archived text.

These cover tools and practices the classifier's has_* vocabulary never tracked.
They are mention flags only, with no required/preferred split, and are always
computed from the text rather than judged by the classifier, so every record
gets the same method. write_jd.py stores them on new records, compile time
recomputes them, and backfill_tool_mentions.py rewrites existing records when a
pattern changes.
"""

import re
from pathlib import Path

TOOL_PATTERNS = {
    "has_version_control": r"\bgit\b|\bgithub\b(?!\s+copilot)|\bgitlab\b|\bbitbucket\b|version control",
    "has_ci_cd": r"\bci\s?/\s?cd\b|\bcicd\b|continuous integration|continuous (?:deployment|delivery)|github actions|gitlab ci|\bjenkins\b|circleci",
    "has_aws": r"\baws\b|amazon web services",
    "has_azure": r"\bazure\b",
    "has_gcp": r"\bgcp\b|google cloud",
    "has_semantic_layer": r"semantic layer|metrics layer|metricflow|dbt semantic|\bcube\.dev\b|\batscale\b",
}
TOOL_FIELDS = list(TOOL_PATTERNS)

_COMPILED = {k: re.compile(p, re.IGNORECASE) for k, p in TOOL_PATTERNS.items()}


def detect_tool_mentions_in_text(jd_text: str) -> dict:
    """Return {field: bool} for each pattern against the JD text alone."""
    return {k: bool(rx.search(jd_text)) for k, rx in _COMPILED.items()}


def detect_tool_mentions(jd_archive_path: Path) -> dict:
    """Same as detect_tool_mentions_in_text, reading jd_archive.md; all False when it is missing."""
    if not jd_archive_path.exists():
        return {k: False for k in _COMPILED}
    # the first line is the source URL, whose path segments can contain tool names
    lines = jd_archive_path.read_text(encoding="utf-8").split("\n")
    text = "\n".join(lines[1:]) if lines and lines[0].startswith("**URL:**") else "\n".join(lines)
    return detect_tool_mentions_in_text(text)
