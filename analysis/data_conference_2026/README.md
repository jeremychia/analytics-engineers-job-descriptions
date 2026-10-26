# Data conference 2026 — talk material

Forward Data Conference, Paris, 16 November 2026. Two versions of the talk and everything behind them.

| File | What it is |
|---|---|
| `talk_v2_for_the_people.md` | **Current draft.** A 5-minute story told as the questions the speaker asked, with one thread: what an ad says versus what it asks. Evidence tables, claims to soften or cut, comparison with outside data, Q&A, checklist before slides are final. |
| `talk_v1_fwdc_2026_talk_plan.md` | The original plan: the French-versus-English keyword bug ("a zero means two things"). Kept for reference; v2 no longer uses it (it opens on an "Early Career, minimum 3+ years" ad instead). |
| `jd_deck.html` | **The slide deck for v2.** Ten animated slides (the ad, titles to jobs, similarity, stack, AI, juniors, ladder, benefits, pitch yourself, close). Space or right arrow reveals the next build step, left arrow steps back, tabs jump. Opens in any browser, no server. |
| `jd_views.html` | **The explorer.** The same visuals one at a time, with replay, step and show-final buttons, plus a duty-gap tab. Hover for detail; the pitch map is interactive. |
| `jd_deck_v1.html`, `jd_views_v1.html` | The earlier deck (v1 story plus an appendix: twin ads, language gates, pay, years, boilerplate) and the earlier explorer (fused map, stack-by-theme grid, duty-mix scatter, look-alike families). Kept for their appendix material. |
| `build/` | Sources for the two pages: `prep_data.py` (corpus and snapshots to `inputs/deck_data.json`), `src/` (engine, one JS file per slide, CSS, templates), `build.py` (writes both HTML files). Rebuild with `python3 build/prep_data.py && python3 build/build.py`. `make_similarity_matrix.py` needs scikit-learn. |
| `research/evidence_pack.md` | Every finding gathered for v2 in one place, with the caveats. |
| `research/ext_*.md`, `benefits_*.csv`, `ladder_*.csv` | Notes from the outside-research agents (market and juniors, AI in ads, red flags). Many sources were snippet-only; see the verification notes. |

## State of things

- Numbers come from the corpus of 25 Oct 2026 (about 1,136 ads after removing 82 reposts). Freeze it and re-run before the talk.
- The deck follows the v2 story. Per-ad visuals use snapshots of the analyses (AI flags 1,125 ads; clusters 721; junior features from the current 1,211-ad corpus); each slide caption names its sample.
- Quotes from Conquet and Blef, and the "Indeed France 3.4%" figure, are unverified and must not go on a slide unless the verification pass confirms them.
- French market: 94 France-located ads, 13 junior (after a paced sweep on 26 Oct; the second keyword chunk was blocked by LinkedIn). The French ladder was computed before the sweep and still needs a re-run.
- Raw scripts for the analyses live outside the repo for now.
