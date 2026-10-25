# AI-written score

How the `ai_written` field on each JD record is computed, and how far to trust it.

Code: [ai_written.py](ai_written.py) (scoring), [backfill_ai_written.py](backfill_ai_written.py) (rewrite existing records), [write_jd.py](write_jd.py) (stores it on new records).

## What it is

An estimate of how much a posting's text *reads like* LLM output, from 0 (reads human) to 100 (reads LLM). It is a relative indicator for corpus-level trends, not a verdict on any one posting. Edited LLM output and heavily templated human writing both defeat it.

```json
"ai_written": {
  "score": 41.2,
  "spread": 12.8,
  "measures": {
    "marker_vocab": {"raw": 4.1, "score": 17.5},
    "stock_phrases": {"raw": 2.0, "score": 40.0}
  }
}
```

- `score`: mean of the available measure scores.
- `spread`: standard deviation across the measure scores. High spread means the measures disagree, so down-weight the score.
- `measures`: each measure's raw value and its 0-100 score. Raw values are kept so anchors can be re-tuned without re-reading the text.

## Why several measures

No single detector is reliable on this kind of text. Per-document detectors are known to be weak on edited or paraphrased output and biased against non-native English writers, and a marker word can fall in use once it becomes publicly known as an AI tell. Averaging independent, differently-biased signals dampens any one of those failures, and `spread` exposes when they conflict.

## Methods considered

| Method | Needs | Used |
|---|---|---|
| Perplexity / burstiness (GPTZero-style) | A language model, or sentence-length variation as a proxy | Burstiness only |
| Log-probability curvature (DetectGPT), Binoculars | Token probabilities from a model | No: needs a model |
| Watermarking | The generator's cooperation | No: not applicable to scraped text |
| Excess vocabulary (Kobak et al.; Juzek & Ward) | A word list | Yes |
| Stylometry (structure, uniformity, lexical specificity) | The text | Yes |
| Hand rubric (intro formulas, buzzwords, specificity deficit) | The text | Partly (axes 1, 2, 4) |

Only model-free methods are used, so backfilling the whole corpus is instant and needs no API.

## The six measures

Each maps a raw value to 0-100 linearly between two fixed anchors (`ANCHORS` in `ai_written.py`), clamped at both ends.

| Measure | Raw value | Score 0 at | Score 100 at |
|---|---|---|---|
| `marker_vocab` | LLM-associated words ("spearhead", "leverage", "seamless", "robust", "foster", ...) per 1000 words | 2.0 | 14.0 |
| `stock_phrases` | Recruiter boilerplate ("fast-paced", "actionable insights", "thrive in", "are you a...") per 1000 words | 0.0 | 5.0 |
| `structure` | Share of bullets opening with a bold or `Title:` lead-in, plus 0.1 x em-dashes per 1000 words | 0.0 | 0.5 |
| `bullet_symmetry` | Coefficient of variation (CV) of bullet word counts. Low means machine-even | 0.75 | 0.30 |
| `burstiness` | CV of sentence word counts. Low means uniform | 0.75 | 0.40 |
| `specificity` | Digits and mid-sentence capitalised tokens per 100 words. Low means generic | 14.0 | 5.0 |

## Eligibility

A posting is scored only if:

- `jd_language` is a scored language (see below). Japanese, Korean and any other language not listed get no field.
- It has at least 80 words (`MIN_WORDS`).
- At least 4 measures could be computed (`MIN_MEASURES`). `structure` and `bullet_symmetry` need at least 5 bullets, and `burstiness` needs at least 8 sentences. A measure without enough text is dropped from the mean, never scored as 0.

### Languages

| Language | Measures |
| --- | --- |
| English | all six |
| French, German, Dutch, Spanish | all six, with translated marker and stock-phrase lists (`LEXICONS`) |
| Swedish, Portuguese, Norwegian, Italian, Polish, Danish, Hungarian | the four language-independent measures (`structure`, `bullet_symmetry`, `burstiness`, `specificity`) |
| Japanese, Korean | not scored: no case or word spacing for the sentence and proper-noun rules |

Non-English text changes three rules. A sentence can start with any letter, because the English rule needs a capital. `specificity` counts digits, all-caps acronyms and camel-case tool names, because counting capitalised mid-sentence words would treat every German noun as concrete. The bold lead-in rule drops its capital requirement.

At the last backfill, 163 of 193 non-English postings were scored (fr 57/60, de 45/47, nl 35/35, es 12/12, sv 8/13, no 3/4, da 1/1, it 1/2, pl 1/2, pt 0/5, hu 0/2, ko 0/8, ja 0/2). The rest lacked the bullets or sentences to reach four measures.

The `**URL:**` line at the top of `jd_archive.md` is stripped first.

## Calibration status

The anchors were set by hand from the corpus distribution (985 scored postings at the time of writing: score deciles ran roughly 0, 18, 25, 30, 36, 39, 42, 47, 53, 61, 84). They are **not** calibrated against labelled AI and human text. Read scores as relative: "this month's postings score higher than last month's", not "this posting has a 60% chance of being AI".

To calibrate properly, generate JDs with an LLM, pair them with known-human postings, and check how each measure separates the two (AUC per measure), then adjust the anchors and weights.

## Limitations

- **Cross-language comparison:** the anchors come from English text and the non-English lists are unvalidated translations. Compare scores within a language, or across the all-six languages with care. Languages scored on four measures only (for example Swedish, median about 56 against about 39 for English) are not comparable with the rest.
- **Date axis:** a time series uses the date in the folder name, which is the scrape date, not the posting date. It shows what was live at each sweep.
- **Templates:** recruiters and ATS templates produce uniform, buzzword-heavy text that scores high without any LLM.
- **Edited output:** light human editing removes most of these signals.
- **Not covered:** contradictory requirements (for example 8+ years for a junior title) and kitchen-sink tool lists need judgment, so they are not scored here. A classifier flag would be the place for them.

## Usage

```bash
python3 scripts/backfill_ai_written.py   # rewrite ai_written on every record; idempotent
```

New records get the field automatically from `write_jd.py`. After changing a word list, phrase or anchor, rerun the backfill.
