"""
Derive the language a JD is written in.

Stored as `jd_language` (ISO 639-1 code), computed from text rather than judged by
the classifier, so every record gets the same method. write_jd.py stores it on new
records, compile time recomputes it, and backfill_language.py rewrites existing
records when the rule changes.

Rule: read the responsibility bullets (the archive body when a record has none).
Kana, hangul or CJK characters decide Japanese, Korean or Chinese. Otherwise count
each language's function words; the top language wins with at least 3 hits,
anything else is English. The French list is the one behind the FWDC talk figures.
"""

import re
from pathlib import Path

MIN_HITS = 3
MIN_SCRIPT_CHARS = 20

# Words chosen to be rare in English text and in each other's lists.
FUNCTION_WORDS = {
    "fr": "vous nous avec données équipe être vos notre nos dans une des pour",
    "de": "und der die das mit für wir ihre ihr bei von zur zum eine einer auf sowie",
    "nl": "het een wij jij je voor onze zijn ook naar bij jouw van met wordt bent",
    "sv": "och att är för våra inom också vi",
    "no": "og ikke våre til hos også",
    "da": "og ikke vores til af hos også",
    "es": "para con los las del nuestro nuestra equipo datos una",
    "pt": "com os dos das nossa nosso equipa dados uma você",
    "it": "per il della dei delle nostro nostra dati squadra",
    "pl": "oraz dla danych zespołu będzie się",
    "hu": "és az egy vagy valamint adatok csapat",
}
_COMPILED = {
    lang: re.compile(r"(?<!\w)(" + "|".join(words.split()) + r")(?!\w)", re.IGNORECASE)
    for lang, words in FUNCTION_WORDS.items()
}
_KANA = re.compile(r"[぀-ヿ]")
_HANGUL = re.compile(r"[가-힯]")
_CJK = re.compile(r"[一-鿿]")


def detect_language_in_text(text: str) -> str:
    """Return an ISO 639-1 code for the text; 'en' when no other language clears the bar."""
    if len(_KANA.findall(text)) >= MIN_SCRIPT_CHARS:
        return "ja"
    if len(_HANGUL.findall(text)) >= MIN_SCRIPT_CHARS:
        return "ko"
    if len(_CJK.findall(text)) >= MIN_SCRIPT_CHARS:
        return "zh"
    hits = {lang: len(rx.findall(text)) for lang, rx in _COMPILED.items()}
    lang, n = max(hits.items(), key=lambda kv: kv[1])
    return lang if n >= MIN_HITS else "en"


def detect_language(record: dict, jd_archive_path: Path | None = None) -> str:
    """Language of a record: its responsibility bullets, else its archive body."""
    bullets = record.get("responsibilities") or []
    if bullets:
        return detect_language_in_text(" ".join(bullets))
    text = record.get("jd_text") or ""
    if not text and jd_archive_path is not None and jd_archive_path.exists():
        lines = jd_archive_path.read_text(encoding="utf-8").split("\n")
        text = "\n".join(lines[1:]) if lines and lines[0].startswith("**URL:**") else "\n".join(lines)
    return detect_language_in_text(text)
