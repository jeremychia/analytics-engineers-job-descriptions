# Data conference 2026 — talk material

Forward Data Conference, Paris, 16 November 2026. Two versions of the talk and everything behind them.

| File | What it is |
|---|---|
| `talk_v2_for_the_people.md` | **Current draft.** A 5-minute story told as eight questions, each asking what an ad means when it says something, ending on a call to action for people hiring, moving up and starting out. Evidence tables, claims to soften or cut, comparison with outside data, Q&A, checklist before slides are final. |
| `talk_v1_fwdc_2026_talk_plan.md` | The original plan: the French-versus-English keyword bug ("a zero means two things"). Kept for reference; v2 no longer uses it (it opens on an "Early Career, minimum 3+ years" ad instead). |
| `jd_deck.html` | **The slide deck for v2.** Ten animated slides (the ad, titles, similarity, stack, AI, juniors, ladder, benefits, call to action, the ad again). Each slide builds its point on the chart, with a one-word verdict tag beside each claim. Space or right arrow reveals the next build, left arrow steps back, tabs jump. Press s (or open with `?short`) for the 5-minute version, which skips the builds shown as hollow dots. Opens in any browser, no server. |
| `jd_views.html` | **The explorer.** The same visuals one at a time, with replay, step and show-final buttons, plus a duty-gap tab. Hover for detail; the pitch map is interactive. |
| `jd_deck_v1.html`, `jd_views_v1.html` | The earlier deck (v1 story plus an appendix: twin ads, language gates, pay, years, boilerplate) and the earlier explorer (fused map, stack-by-theme grid, duty-mix scatter, look-alike families). Kept for their appendix material. |
| `build/` | Sources for the two pages: `prep_data.py` (corpus and snapshots to `inputs/deck_data.json`), `src/` (engine, one JS file per slide, CSS, templates), `build.py` (writes both HTML files). Full run order: `ai_flags.py`, `titles_stats.py`, `make_similarity_matrix.py`, `benefits_tags.py`, `prep_data.py`, `stack_stats.py` and `more_stats.py`, `prep_data.py`, then `build.py`. `make_similarity_matrix.py` and `titles_stats.py` need scikit-learn. |
| `research/evidence_pack.md` | Every finding gathered for v2 in one place, with the caveats. |
| `research/ext_*.md`, `benefits_*.csv`, `ladder_*.csv` | Notes from the outside-research agents (market and juniors, AI in ads, red flags). Many sources were snippet-only; see the verification notes. |

## State of things

- Numbers come from the 1,211-ad corpus of 26 Oct 2026. Freeze it and re-run the full build order before the talk.
- Every per-ad visual is computed from the corpus by the scripts in `build/`; each slide footer names its sample and test.
- Title groups are refit on the current corpus: only two groups (reporting and analysis; data quality and pipelines) stay stable under resampling, so the slide shows one spectrum with two ends.
- The benefits tagger, ladder verb patterns and title duty shares were rebuilt from the corpus and still need a spot-check.
- Conquet and Blef quotes stay off the slides; see the outside-voices notes in the talk plan.
- French market: 94 France-located ads, 13 junior; several French keywords and the French job boards are still unsearched.
