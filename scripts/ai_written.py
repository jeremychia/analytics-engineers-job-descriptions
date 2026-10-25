"""
Estimate how likely a JD's text is to have been drafted by an LLM.

Stored as `ai_written` on each record: {"score", "spread", "measures": {...}}.
Computed from the archived text alone, so every record gets the same method;
write_jd.py stores it on new records and backfill_ai_written.py rewrites existing
ones when a rule or anchor changes.

No single detector is trusted. Six independent, model-free measures each map a
raw value to 0-100 (0 = reads human, 100 = reads LLM) through fixed anchors, and
the score is their mean. `spread` is the standard deviation across measures: high
spread means the measures disagree, so the score deserves less weight. Raw values
are stored beside each measure so anchors can be re-tuned without re-reading text.

Measures, with the research each one borrows from:
  marker_vocab     excess-vocabulary method (Kobak et al.; Juzek & Ward "delve")
  stock_phrases    LLM recruiter boilerplate ("thrive in a fast-paced environment")
  structure        bolded lead-ins on bullets and em-dash density (markdown habits)
  bullet_symmetry  coefficient of variation of bullet lengths (low = machine-even)
  burstiness       coefficient of variation of sentence lengths (GPTZero-style)
  specificity      concrete tokens (digits, mid-sentence proper nouns) per 100 words

Limits: JD text is heavily templated by humans too, and edited LLM output defeats
every one of these. Treat the score as a trend indicator across the corpus, not a
verdict on a posting. Measures that lack enough text are dropped from the mean
rather than scored as zero.

Languages: English uses every measure. French, German, Dutch and Spanish use
translated marker and stock-phrase lists (LEXICONS). Other space-separated Latin-script
languages (Swedish, Portuguese, Norwegian, Italian, Polish, Danish, Hungarian) score on
the four language-independent measures only, so they need bullets and enough sentences.
Japanese and Korean score None: no case or spacing for the sentence and proper-noun
rules. The anchors were set on English text and the non-English lists are unvalidated
translations, so compare scores within a language before comparing across languages.
"""

import re
import statistics
from pathlib import Path

MIN_WORDS = 80
MIN_BULLETS = 5
MIN_SENTENCES = 8
MIN_MEASURES = 4

# Words whose frequency rose sharply in post-2022 LLM-touched text.
MARKER_WORDS = (
    "delve", "delves", "tapestry", "testament", "spearhead", "spearheading", "leverage", "leveraging",
    "seamless", "seamlessly", "robust", "holistic", "synergy", "synergies", "pivotal", "foster",
    "fostering", "elevate", "empower", "empowering", "unlock", "unleash", "navigate", "landscape",
    "cutting-edge", "transformative", "impactful", "actionable", "streamline", "underpin", "multifaceted",
    "paramount", "meticulous", "commitment", "passionate", "dynamic", "thrive", "innovative", "bridge",
)
STOCK_PHRASES = (
    r"fast[- ]paced", r"thrive in", r"drive (?:impactful|meaningful|business) ", r"actionable insights?",
    r"cross[- ]functional", r"foster(?:ing)? a culture", r"data[- ]driven decision", r"stay ahead of",
    r"ever[- ]evolving", r"dynamic (?:environment|landscape|team)", r"make a (?:real |meaningful )?(?:difference|impact)",
    r"passion for", r"proven track record", r"strong (?:analytical|communication) skills", r"self[- ]starter",
    r"take (?:your|the) career", r"are you (?:a|an|ready|passionate|looking)", r"if you(?:'re| are) (?:passionate|looking)",
    r"turn(?:ing)? (?:raw )?data into", r"single source of truth", r"play(?:s)? a (?:key|pivotal|critical) role",
    r"at the (?:heart|forefront|intersection)", r"in today'?s", r"join (?:us|our team) (?:and|in|as)",
)

# Translated counterparts of MARKER_WORDS / STOCK_PHRASES, matched as word stems.
LEXICONS = {
    "fr": (
        ("tapisserie", "témoignage", "tirer parti", "exploiter", "fluide", "robuste", "holistique", "synergie",
         "essentiel", "favoriser", "renforcer", "libérer", "naviguer", "paysage", "innovant", "percutant",
         "exploitable", "rationaliser", "multifacette", "primordial", "passionné", "dynamique", "épanouir"),
        (r"environnement (?:dynamique|en constante évolution)", r"évolue(?:r|nt) (?:dans|rapidement)", r"rythme soutenu",
         r"passion(?:né)?(?:e)? (?:pour|par)", r"esprit d'équipe", r"transformer (?:les )?données en",
         r"source unique de vérité", r"prise de décision (?:basée|fondée) sur", r"rejoign(?:ez|ez-nous|ez notre)",
         r"jou(?:e|er) un rôle (?:clé|central|essentiel)", r"au cœur de", r"à la pointe", r"dans le monde (?:d'aujourd|actuel)",
         r"expérience (?:avérée|éprouvée)", r"fort(?:e)?s? compétences", r"autonome et", r"faire la différence"),
    ),
    "de": (
        ("wandteppich", "zeugnis", "nutzen", "nahtlos", "robust", "ganzheitlich", "synergie", "synergien",
         "entscheidend", "fördern", "stärken", "freisetzen", "navigieren", "landschaft", "innovativ", "wirkungsvoll",
         "umsetzbar", "optimieren", "vielschichtig", "leidenschaft", "leidenschaftlich", "dynamisch", "begeistern"),
        (r"dynamische[nrs]? (?:umfeld|team|umgebung)", r"schnelllebig", r"stetig wachsend", r"leidenschaft für",
         r"datengetrieben(?:e)? entscheidung", r"single source of truth", r"eine (?:schlüssel|zentrale|entscheidende) rolle",
         r"im herzen", r"an der spitze", r"in der heutigen", r"nachgewiesene[rn]? erfahrung", r"starke[nr]? (?:analytische|kommunikative)",
         r"daten in (?:erkenntnisse|wert)", r"werde teil", r"(?:werden sie|werde) teil unseres", r"einen unterschied machen",
         r"eigenverantwortlich(?:e|es)? arbeiten", r"hands-on[- ]mentalität"),
    ),
    "nl": (
        ("tapijt", "getuigenis", "benutten", "naadloos", "robuust", "holistisch", "synergie", "cruciaal",
         "stimuleren", "versterken", "ontsluiten", "navigeren", "landschap", "innovatief", "impactvol",
         "bruikbaar", "stroomlijnen", "veelzijdig", "passie", "gepassioneerd", "dynamisch", "bloeien"),
        (r"dynamische (?:omgeving|team)", r"snel(?:le)? (?:groeiende|veranderende)", r"constant evoluerend",
         r"passie voor", r"datagedreven beslissingen", r"single source of truth", r"een (?:sleutel|cruciale|belangrijke) rol",
         r"in het hart van", r"voorop(?:lopen)?", r"in de huidige", r"bewezen trackrecord", r"sterke (?:analytische|communicatieve)",
         r"data omzetten in", r"word (?:jij|je) onderdeel", r"het verschil maken", r"zelfstarter", r"hands-on mentaliteit"),
    ),
    "es": (
        ("tapiz", "testimonio", "aprovechar", "fluido", "robusto", "holístico", "sinergia", "sinergias", "fundamental",
         "fomentar", "potenciar", "desbloquear", "navegar", "panorama", "innovador", "impactante", "accionable",
         "optimizar", "multifacético", "apasionado", "pasión", "dinámico", "prosperar"),
        (r"entorno (?:dinámico|de ritmo acelerado|en constante evolución)", r"ritmo acelerado", r"pasión por",
         r"decisiones basadas en (?:datos)", r"fuente única de verdad", r"papel (?:clave|fundamental|crucial)",
         r"en el corazón de", r"a la vanguardia", r"en el mundo actual", r"experiencia comprobada", r"sólidas? habilidades",
         r"convertir (?:los )?datos en", r"únete a", r"marcar la diferencia", r"proactivo y autónomo"),
    ),
}
# Space-separated Latin-script languages with no lexicon: scored on the four
# language-independent measures only.
UNIVERSAL_LANGUAGES = {"sv", "pt", "no", "nb", "it", "pl", "da", "hu"}

# (raw value at score 0, raw value at score 100); linear between, clamped. Raw values
# below/above the pair swap meaning when the first number is larger (lower raw = more LLM).
ANCHORS = {
    "marker_vocab": (2.0, 14.0),        # hits per 1000 words
    "stock_phrases": (0.0, 5.0),        # hits per 1000 words
    "structure": (0.0, 0.5),            # share of bullets with a bold lead-in, plus em-dashes/1000w scaled below
    "bullet_symmetry": (0.75, 0.30),    # bullet-length CV
    "burstiness": (0.75, 0.40),         # sentence-length CV
    "specificity": (14.0, 5.0),         # concrete tokens per 100 words
}

_URL_LINE = re.compile(r"^\*\*URL:\*\*.*$", re.MULTILINE)
_WORD = re.compile(r"[A-Za-z][A-Za-z'-]*")
_BULLET = re.compile(r"^\s*(?:[-*•]|\d+[.)])\s+(.*\S)\s*$", re.MULTILINE)
_BOLD_LEAD = re.compile(r"^\s*(?:[-*•]\s+)?(?:\*\*[^*]{2,60}\*\*|[A-Z][\w &/-]{2,40}:)\s")
_MARKERS = re.compile(r"\b(" + "|".join(MARKER_WORDS) + r")\b", re.IGNORECASE)
_PHRASES = re.compile("|".join(STOCK_PHRASES), re.IGNORECASE)
_SENT_SPLIT = re.compile(r"(?<=[.!?])\s+(?=[A-Z])")
_CONCRETE = re.compile(r"\d|(?<=[a-z,] )[A-Z][A-Za-z0-9+#.]+")

# Non-English variants. No capital required after a full stop or before a proper noun,
# because German capitalises every noun and the rule would call all of them concrete.
_WORD_U = re.compile(r"[^\W\d_][\w'’-]*")
_BOLD_LEAD_U = re.compile(r"^\s*(?:[-*•]\s+)?(?:\*\*[^*]{2,60}\*\*|[^\W\d_][\w &/-]{2,40}:)\s")
_SENT_SPLIT_U = re.compile(r"(?<=[.!?])\s+(?=[^\W\d_])")
# Digits, all-caps acronyms (SQL, BI) and camel-case tool names (BigQuery, PowerBI).
_CONCRETE_U = re.compile(r"\d|\b[A-Z]{2,}\b|\b[A-Za-z]+[a-z][A-Z][A-Za-z]*\b")
_LEX_CACHE: dict = {}


def _lexicon(language: str):
    if language not in _LEX_CACHE:
        markers, phrases = LEXICONS[language]
        _LEX_CACHE[language] = (
            re.compile(r"\b(?:" + "|".join(re.escape(m) for m in markers) + r")\w*", re.IGNORECASE),
            re.compile("|".join(phrases), re.IGNORECASE),
        )
    return _LEX_CACHE[language]


def _scale(raw: float, zero: float, hundred: float) -> float:
    frac = (raw - zero) / (hundred - zero)
    return round(100 * min(1.0, max(0.0, frac)), 1)


def _cv(values: list[int]) -> float:
    return statistics.pstdev(values) / statistics.mean(values)


def clean_text(text: str) -> str:
    return _URL_LINE.sub("", text).strip()


def ai_written_score(text: str, language: str = "en") -> dict | None:
    """Return {"score", "spread", "measures"} or None when the text cannot be scored."""
    text = clean_text(text)
    english = language == "en"
    if not english and language not in LEXICONS and language not in UNIVERSAL_LANGUAGES:
        return None
    word_re, bold_re, split_re, concrete_re = (
        (_WORD, _BOLD_LEAD, _SENT_SPLIT, _CONCRETE) if english else (_WORD_U, _BOLD_LEAD_U, _SENT_SPLIT_U, _CONCRETE_U)
    )
    words = word_re.findall(text)
    if len(words) < MIN_WORDS:
        return None
    per_k = 1000 / len(words)
    bullets = [m.group(1) for m in _BULLET.finditer(text)]
    prose = re.sub(r"^\s*(?:[-*•]|\d+[.)])\s+", "", text, flags=re.MULTILINE)
    sentences = [s for s in split_re.split(re.sub(r"\s+", " ", prose)) if len(s.split()) >= 3]

    measures = {}

    def add(name, raw):
        zero, hundred = ANCHORS[name]
        measures[name] = {"raw": round(raw, 3), "score": _scale(raw, zero, hundred)}

    if english:
        add("marker_vocab", len(_MARKERS.findall(text)) * per_k)
        add("stock_phrases", len(_PHRASES.findall(text)) * per_k)
    elif language in LEXICONS:
        markers, phrases = _lexicon(language)
        add("marker_vocab", len(markers.findall(text)) * per_k)
        add("stock_phrases", len(phrases.findall(text)) * per_k)
    if len(bullets) >= MIN_BULLETS:
        lead_share = sum(1 for b in bullets if bold_re.match(b)) / len(bullets)
        add("structure", lead_share + 0.1 * text.count("—") * per_k)
        add("bullet_symmetry", _cv([len(b.split()) for b in bullets]))
    if len(sentences) >= MIN_SENTENCES:
        add("burstiness", _cv([len(s.split()) for s in sentences]))
    add("specificity", len(concrete_re.findall(text)) * 100 / len(words))

    if len(measures) < MIN_MEASURES:
        return None
    scores = [m["score"] for m in measures.values()]
    return {
        "score": round(statistics.mean(scores), 1),
        "spread": round(statistics.pstdev(scores), 1),
        "measures": measures,
    }


def ai_written_for_archive(jd_archive_path: Path, language: str = "en") -> dict | None:
    if not jd_archive_path.exists():
        return None
    return ai_written_score(jd_archive_path.read_text(encoding="utf-8"), language)
