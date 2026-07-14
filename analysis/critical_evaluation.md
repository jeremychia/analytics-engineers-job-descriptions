# Critical Evaluation — report.md, dashboard, and data

**Prepared:** July 2026. Everything below was verified directly against `data.json`, `llm_classifications.csv`, and `consistency_report.md` — not taken from the report's own self-description. Statistical claims in report.md were independently recomputed; all χ² values replicate.

---

## 1. Verified factual errors (fix before anything ships)

### 1.1 The corpus count is off by one, twice
`report.md` line 4 says **"131 records total including 6 data-engineering and 2 other roles excluded."** The actual corpus (`data.json`) is **132 records: 116 AE/BI + 7 team_lead + 6 data_engineering + 3 other**. Both the total (131 vs 132) and the "other" count (2 vs 3) are wrong. The analytical cohort of 123 is correct. §9.1's "all 131 JDs classified in the same session" carries the same error.

### 1.2 The manual–LLM match-rate claim misstates its own consistency study
`report.md` §3 says manual–LLM match rates "sit at 25–35% across dimensions." Recomputed from the current CSV, the actual range is **13% to 54%**:

| Dimension | Match (recomputed) |
|---|---|
| stakeholder_orientation | 6/45 = **13%** |
| autonomy_level | 9/45 = **20%** |
| data_team_maturity | 22/82 = 27% |
| jd_authorship | 27/82 = 33% |
| domain_risk | 29/82 = 35% |
| velocity_vs_rigour | 32/82 = 39% |
| collaboration_width | 44/82 = **54%** |

The "25–35%" band both understates the worst dimensions and hides that one dimension (collaboration_width — ironically the one §4.7 retires as unreliable) has the *best* manual–LLM agreement. The claim needs to be replaced with the per-dimension table.

### 1.3 consistency_report.md is stale and internally contradictory
- Header says 131 JDs; every agreement table is denominated /93 (the pre-July corpus).
- "autonomy_level — no disagreements ✓" (line 191) sits in the same file as a 7.5% match-rate row for autonomy_level (line 39). These describe different corpus states.
- **Column misalignment in the July batch:** disagreement tables for July-dated records show evidence-quote text and `True` flags inside the run-label columns (e.g. the `2026-07-01_emagine` and `2026-07-02_funke-medien` rows in the domain_risk table). The underlying CSV labels are valid — I checked — so this is a report-generator bug, but as published the document contains visibly corrupted rows. Regenerate the whole file from the current CSV.
- The LLM self-consistency figures report.md cites (0.94 / 0.95 / 0.58 etc.) come from these stale /93 tables. They need recomputation over all 131/132 records before being cited anywhere external.

### 1.4 The n=86 AI-dimension subset is the *oldest* part of the corpus, not a neutral subset
§9.3 says `ai_role`/`testing_framing`/`loss_aversion_framing` "were added after part of the corpus was already classified," implying a benign coverage gap. The actual coverage, by collection month: **April–June records are 100% coded (86/86); all 37 July records are uncoded (0/37)**. The three newest-collected records in ten are missing from exactly the dimension that Prediction 2 claims is an *emerging* fashion. If AI hiring criteria are growing month over month, censoring the most recent 30% of the corpus biases the "83% expect no AI skill" figure upward. This is not a random-missingness caveat — it's temporal censoring on the study's headline trend variable. Backfill the July batch before citing Prediction 2 externally; it's a few script runs.

---

## 2. Methodological critiques (ranked by how much a reviewer would care)

### 2.1 The premise partially undermines itself — and that's actually the paper
The report's foundation is Deming & Kahn: JDs are *revealed preference*, surveys are cheap talk. But the report's own central finding — rigour language is flat at ~80% across risk, stack, and authorship — is interpreted as an **institutionalised norm**, i.e. ceremonial language decoupled from local need. You cannot hold both positions: if JD rigour language is ceremonial, JD text is not revealed preference either — it's a second discourse arena with different (higher, but nonzero) production costs. The current framing treats JDs as ground truth against which the survey is judged; the defensible framing is a **dual-discourse comparison** (vendor-mediated community discourse vs. employer hiring discourse), read through institutional decoupling (Meyer & Rowan 1977; Bromley & Powell 2012). This reframe is not a concession — it's a stronger and more novel contribution, and it's how the paper draft (`paper.md`) is now positioned.

### 2.2 Double selection: the corpus is filtered through one job-seeker's preferences
The report flags geographic concentration but underplays the sharper threat: every JD entered the corpus because **one person judged it worth saving during a job search**. If the collector systematically prefers (or avoids) rigour-oriented, dbt-based, internal-data roles, every marginal distribution is contaminated in the direction of the collector's taste — selection on something correlated with the dependent variables. The 80% rigour figure could be partly "the kind of role Jeremy applies to." Mitigations, in increasing order of strength: (a) state the inclusion protocol explicitly (what made a JD get saved vs. skipped?); (b) test robustness across collection waves — I checked this one: rigour is 70/86 pre-July vs. 28/37 (76%) in July, so the headline finding is at least wave-stable; (c) collect a **neutral validation corpus** — every AE posting on one job board in one week, no applicant filter — and show the distributions match. (c) is the single highest-value piece of new data collection available.

### 2.3 Prediction 2 has an unaddressed rival explanation that inverts its meaning
The 83%-no-AI-criterion finding is read as "fashion not yet institutionalised." Spence's own logic supplies the rival: **a universal skill has zero screening value and therefore never appears as a criterion** — nobody lists "can use email." If AI tool use is *fully* diffused, JDs would look exactly like this. Informal-not-yet-institutionalised and fully-institutionalised-hence-unstated are observationally equivalent in JD data. The partial discriminator the data does offer: `ai_enabler` criteria cluster in AI-product/platform contexts rather than appearing idiosyncratically, which fits "criteria emerge where structurally needed" better than "universal and unstated" — but this needs to be argued explicitly, and the conclusion softened. Currently the report mentions the survey/JD apples-to-oranges issue but not this sharper version.

### 2.4 "Manual takes precedence" is inconsistent with the report's own diagnosis
§3 resolves manual/LLM conflicts in favour of manual coding; §9.2 says low match rates mean "the codebook is ambiguous or the original manual call was more subjective than the codebook implies." If the second disjunct is live, manual precedence is arbitrary. Worse, classification provenance correlates with collection wave (manual codes concentrate in the April–May job-search records), so provenance is confounded with time. Minimum fix: report every headline finding stratified by provenance (manual vs. LLM-majority) and show the direction holds in both strata. Real fix: adjudicated gold standard on a sample (see §4 roadmap).

### 2.5 Statistical practice — adequate for a pilot memo, not for submission
- **Sparse cells:** several tests have minimum expected frequencies well under 5 (velocity × domain_risk min-exp ≈ 0.0 with the velocity=1 row; ai_role × stakeholder min-exp ≈ 0.1). Use Fisher-Freeman-Halton exact tests or collapse categories; several reported p-values are formally invalid as χ².
- **Flatness is asserted, not tested.** "Rigour is flat across partitions" is a failure-to-reject at low power (MDE V≈0.28), which is not evidence of absence. If flatness is the finding — and it's load-bearing for the institutionalisation claim — run equivalence tests (TOST; Lakens 2017) or report Bayes factors.
- **Ordinal structure ignored.** domain_risk, maturity, seniority, loss_aversion are ordered; χ² throws that information away. Jonckheere-Terpstra or ordinal gamma would be both more powerful and more appropriate.
- **Multiple comparisons:** ~10 exploratory tests, no correction, and Finding E (p=0.007) would not survive Bonferroni at 0.005. The report says effect size matters more — fine, but then say which findings survive Benjamini-Hochberg and which don't.
- **Reliability statistics:** raw % agreement is not chance-corrected. Use Krippendorff's α for inter-run consistency and Cohen's/Fleiss' κ for human-model agreement — the tooling exists (`krippendorff` pip package) and the report already cites Krippendorff for the *concept*.

### 2.6 The LLM-annotation validation design is inverted relative to the methods literature
The emerging standard (Gilardi et al. 2023; Pangakis et al. 2023; Ziems et al. 2024; Ollion et al. 2023's caution) is: build a **human gold standard** (2+ trained coders, adjudication, κ per dimension), then measure the LLM against it, then let the LLM scale to the full corpus. The current design uses LLM self-consistency as the quality metric and treats human-model disagreement as diagnostic ambiguity. Self-consistency is necessary but nowhere near sufficient — a model can be reliably wrong (the report itself makes exactly this point about the verifier in §9.1, then doesn't apply it to the classifier). This is the single biggest methods gap for any journal.

---

## 3. Dashboard critique (`resume/analysis/index.html`)

### 3.1 The dashboard's flagship panel is built on the dimension the report retired
The loss-aversion × collaboration-width panel calls itself **"the cleanest gradient in the dataset"** — but report §4.7 says collaboration_width "does not currently support a reliable finding," and the consistency data agrees (worst evidence-verification pass rate: 44–49/131; 64 JDs with inter-run disagreement). The two artifacts directly contradict each other on the same dimension. Either the panel gets the report's caveat verbatim, or it comes out. As it stands, the most confident sentence on the page rests on the least reliable variable in the codebook.

### 3.2 Other content issues
- **"Staff titles are 100% strategic"** renders without n. n=4. The report is careful about this ("too small to generalise"); the dashboard stat line isn't. Add `(n=4)` to every statFn that quotes a percentage from a cell under 10.
- **"Hard language gate"** appears in the stats strip but no section on the page defines or discusses it.
- **Default cohort mismatch:** dashboard defaults to AE/BI-only (n=116) while the report's headline stats use the n=123 cohort — the numbers differ subtly (82% vs 80% rigour) with no explanation visible to a reader holding both documents.
- Evidence quotes render in drill-downs without flagging the ~103 known paraphrase-drift quotes (§9.1) — an "evidence" label on a quote the verifier failed is over-claiming.

### 3.3 Code issues
- `pct()` (index.html:526) is broken — it filters the same predicate twice and returns a count, not a percentage. It's dead code; delete it.
- Scatter jitter uses `Math.random()` per render (index.html:641) — the same data paints differently on every filter change. Hash the record ID for deterministic jitter.
- Tooltips are mouse-only (`onmousemove`) — no keyboard or touch path to the evidence, which is the dashboard's best feature.
- Chart.js loads from CDN — fine locally, but it means the page cannot ship as a self-contained artifact or work offline.

---

## 4. What it takes to be a conference talk (Forward Data, CFP 24 July)

The Appendix C proposal is already strong — the bug-story angle is genuinely good conference material. Gaps:

1. **Backfill the July batch on the three new dimensions first** (§1.4). The talk's headline number (83% no-AI) currently excludes the newest 30% of the corpus; if the number moves after backfill, better to find out before the CFP than on stage.
2. **One slide the proposal doesn't have yet: the rival explanation** (§2.3). A sophisticated audience member *will* raise "nobody lists email as a requirement." Owning it — and showing the ai_enabler concentration evidence as the partial answer — turns the weakest moment of the Q&A into a planned beat.
3. **Regenerate consistency_report.md** so any methodology slide cites current numbers, not the stale /93 tables.
4. **A live or recorded demo of the dashboard** fits the 19–23 min "what broke in the tooling" segment — but fix §3.1 first, since the flagship panel contradicts the talk's own methodology section.
5. **Fix the 131/132 count** — a talk about data rigour cannot have its own n wrong on slide 2.
6. Reframe the title/abstract slightly per §2.1: "job postings are revealed preference" is the setup, "and then my own data showed employer language is partly ceremonial too" is the twist. The proposal currently buries this — it's the best narrative beat available.

## 5. What it takes to be a journal paper — tiered roadmap

**Tier 1 — blocking (no serious venue without these):**
1. Human gold standard: second trained coder on a stratified ~25–30% sample, adjudication protocol, Cohen's κ per dimension; then validate the LLM against the adjudicated labels (§2.6). Tighten `jd_authorship` and `autonomy_level` decision rules first — the report already knows they're the ambiguous ones.
2. Neutral validation corpus to address double selection (§2.2).
3. Full-corpus uniform classification: July batch backfilled on all dimensions; uniform post-fix evidence verification across all records; regenerate consistency report; Krippendorff's α throughout.
4. Statistical rework: exact tests for sparse tables, equivalence testing for the flatness claim, ordinal tests where applicable, FDR control across the exploratory battery.
5. The reframing in §2.1 — dual-discourse + decoupling — as the paper's actual theory contribution. Written up in `paper.md`.

**Tier 2 — strongly expected:**
6. Corpus to n≈300, ideally with a North American arm (enables the cross-market test the report keeps disclaiming).
7. Wave 2 collection (Q4 2026) against the frozen codebook — turns Prediction 2 from a cross-sectional gap into an actual diffusion trajectory, which is what fashion theory really predicts.
8. Pre-registration of the wave-2 predictions (OSF) — the report's "predictions stated before findings" rhetoric becomes verifiable.
9. The "ceremonial rigour" construct (rigour-coded JD × testing_framing=absent, currently ~36% of coded records) operationalised as a decoupling measure — this is the most publishable single idea in the dataset and the report currently treats it as a throwaway paragraph in §4.11.

**Tier 3 — venue-dependent polish:**
10. Interview-content schema (§8 of report) to test the interview-process claims.
11. Open data + code release (the CSV, codebook, scripts, verifier) as a replication package — cheap, and reviewers at IS venues increasingly expect it.

**Venue reality check:** with Tier 1 done, this is a credible *Information Systems Journal* / *Journal of Information Technology* submission (critical IS + novel method). A genuine A+ shot (*MISQ*, *ISR*) additionally needs Tier 2 — specifically the longitudinal wave and the larger multi-market corpus; a cross-sectional n=123 single-collector pilot will not survive a 4* desk edit regardless of framing. The paper draft in `paper.md` is written to the A+ ambition with the Tier 1/2 slots marked.
