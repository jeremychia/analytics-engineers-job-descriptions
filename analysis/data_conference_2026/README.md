# Data conference 2026 — talk material

Forward Data Conference, Paris, 16 November 2026. Two versions of the talk and everything behind them.

| File | What it is |
|---|---|
| `talk_v3_for_the_people.md` | **Current script.** The 5-minute talk as five questions (titles, stack, juniors, ladder, what now), each with one number and one real ad line, around one theme: read what the ad asks, then answer with your own story. Running order, slide rules, rehearsal checklist. |
| `talk_v2_for_the_people.md` | **The evidence behind the script.** A 5-minute story told as eight questions, each asking what an ad means when it says something, ending on a call to action for people hiring, moving up and starting out. Evidence tables, claims to soften or cut, comparison with outside data, Q&A, checklist before slides are final. |
| `talk_v1_fwdc_2026_talk_plan.md` | The original plan: the French-versus-English keyword bug ("a zero means two things"). Kept for reference; v2 no longer uses it (it opens on an "Early Career, minimum 3+ years" ad instead). |
| `jd_deck.html` | **The slide deck for v2.** Ten animated slides (the ad, titles, similarity, stack, AI, juniors, ladder, benefits, call to action, the ad again). Each slide builds its point on the chart, with a one-word verdict tag beside each claim. Space or right arrow reveals the next build, left arrow steps back, tabs jump. Press s (or open with `?short`) for the 5-minute version, which skips the builds shown as hollow dots. Opens in any browser, no server. |
| `talk_v4_for_the_people.md` | **The script for a senior room.** Let them in, help them up, teach them: the junior pipeline, the years asked of juniors, the next verb as mentoring advice, and the headline that three in four junior ads don't say who will teach the new hire (all 64 read by hand). One action: if you mentor, say so in the junior ad. Closes on "Someone held the door for each of us. Hold it for the next one." The thinking is in `rethink_growing_people.md`. |
| `jd_deck_v4.html` | **The stage deck for v4.** Six slides and 15 clicks, built from `build/src/slides_v4.js` on top of the v2 slide list. The mentoring numbers come from hand reads saved in `build/inputs/hand_read_mentoring.json`. |
| `jd_deck_v2.html` | **The stage version for the v3 script, 5 minutes.** Seven slides and 17 clicks: the ad, titles and similarity on one slide, stack, juniors, ladder, the call to action, the ad again. Same charts and numbers as `jd_deck.html`, cut to the builds that answer each question, with plain-language footers (`build/src/slides_v2.js`). |
| `jd_views.html` | **The explorer.** The same visuals one at a time, with replay, step and show-final buttons, plus a duty-gap tab. Hover for detail; the pitch map is interactive. |
| `../question-charts.js` | The slides' charts inside `index.html` and `full-analysis.html`, redrawn in those pages' colours and fonts (`SITE_COLOURS` in `build.py`, `src/embed.css`). The pages load it through `../question-charts-embed.js`; it fills every element marked `data-q="<chart id>"` with that chart, including ones the page adds later. `data-who` keeps the advice for one audience, `data-body` adds the explanation, `data-note` extends the grey line under the title. The text beside each chart (question, answer, explanation, advice, verdicts) lives in `build/src/questions.json`; every figure in it is a `{{name}}` placeholder that `build.py` computes from `inputs/deck_data.json`. |
| `jd_deck_v1.html`, `jd_views_v1.html` | The earlier deck (v1 story plus an appendix: twin ads, language gates, pay, years, boilerplate) and the earlier explorer (fused map, stack-by-theme grid, duty-mix scatter, look-alike families). Kept for their appendix material. |
| `build/` | Sources for the deck, the explorer and the main-page charts: `prep_data.py` (corpus and snapshots to `inputs/deck_data.json`), `src/` (engine, one JS file per slide, CSS, templates), `build.py` (writes the decks, the explorer and `../question-charts.js`). Full run order: `ai_flags.py`, `titles_stats.py`, `make_similarity_matrix.py`, `benefits_tags.py`, `missing_stats.py`, `prep_data.py`, `stack_stats.py` and `more_stats.py`, `prep_data.py`, then `build.py`. `make_similarity_matrix.py` and `titles_stats.py` need scikit-learn. `make_qr.py` writes `src/qr.js`, the QR code on the closing slide; run it only when the address changes (it needs the qrcode package). |
| `research/evidence_pack.md` | Every finding gathered for v2 in one place, with the caveats. |
| `research/ext_*.md`, `benefits_*.csv`, `ladder_*.csv` | Notes from the outside-research agents (market and juniors, AI in ads, red flags). Many sources were snippet-only; see the verification notes. |

## State of things

- Numbers come from the 1,211-ad corpus of 26 Oct 2026. Freeze it and re-run the full build order before the talk.
- Every per-ad visual is computed from the corpus by the scripts in `build/`; each slide footer names its sample and test.
- Title groups are refit on the current corpus: only two groups (reporting and analysis; data quality and pipelines) stay stable under resampling, so the slide shows one spectrum with two ends.
- The benefits tagger, ladder verb patterns and title duty shares were rebuilt from the corpus and still need a spot-check.
- Conquet and Blef quotes stay off the slides; see the outside-voices notes in the talk plan.
- French market: 94 France-located ads, 13 junior; several French keywords and the French job boards are still unsearched.
