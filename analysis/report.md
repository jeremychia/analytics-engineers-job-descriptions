# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, July 21 2026 with 21 further new roles, and now July 22–24 2026 with 55 further new roles including the corpus's first substantial APAC batch; all tables and test statistics reconciled to the July 24 2026 corpus snapshot in this revision (see §3, corpus vintages)
**Dataset:** 327 analytics-engineering/BI/team-lead job descriptions from `data/` (April–July 2026; primarily European, Berlin-heavy, with UK, DACH, Nordics, and — as of this revision — a 38-role APAC stratum large enough to compare directly against the European majority; see §3, §9.5). 362 records total in the corpus including 22 data-engineering and 13 other roles excluded from the analytical cohort; see §3.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "State of Analytics Engineering" reports, 2023–2026 — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

---

## 1. What this document is

This is a structured analysis of 327 analytics engineering, BI, and team-lead job postings collected during a job search in 2026, primarily European with a now-substantial APAC stratum (§3, §9.5). The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 327 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±5pp at 95% (Wilson interval) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration is still primarily European/Berlin, but this revision adds the first APAC stratum large enough (n=38) to test directly against the European majority rather than merely disclaim — see §9.5 for what that comparison shows and its own, tighter limits. Generalisation to North America remains untested. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Mid-corpus expansions (July 13, 2026: +9 JDs; July 16, 2026: +12 JDs; July 17, 2026: +13 JDs; July 21, 2026: +21 JDs; July 22–24, 2026: +55 JDs) added new roles without statistical re-weighting, so updated findings reflect raw inclusion in the analytical cohort and show sustained pattern stability.

---

## 2. The dbt Labs survey — claims and constraints

The dbt Labs "State of Analytics Engineering" reports (2023–2026) are the most influential annual survey of the analytics engineering profession. Key stated findings by year:

| Year | n | Central claim |
|------|---|---------------|
| 2023 | 567 | Analytics engineering is a distinct profession; data quality is the #1 investment area |
| 2024 | 456 | Data trust is the #1 org priority; budget contraction visible; AI data management at 57% |
| 2025 | 459 | AI in daily workflows: 80% (up from 30%); budget and team growth recovering |
| 2026 | 363 | AI adoption (72% AI coding) outpacing governance (24% AI observability); trust priority: 83% |

**The self-selection constraint:** The survey is distributed through dbt's own community channels. In 2023 (the only year raw data was released), 76% of respondents already used dbt. Later years do not disclose this figure but the distribution channel is unchanged. Every finding from this survey describes the dbt community, not the analytics engineering profession broadly. This constraint is never acknowledged in the reports themselves.

**The sample decline:** n has fallen from 567 to 363 over four years — a 36% drop with no explanation. At n=363 from a non-random sample, year-on-year percentage comparisons should be read as sentiment signals, not measurements.

**The product-narrative alignment:** Each year's report aligns precisely with dbt's product priorities that year — data contracts (2024), AI assist (2025), observability and governance (2026). Whether this reflects shared market signals or editorial framing, the reports are not independent of dbt's commercial interests.

These constraints don't make the findings false. They mean the reports should be read as community sentiment documents, produced by an interested party — which is exactly the setup Abrahamson's management fashion theory describes, and which motivates the theoretical frame used here (§4.0).

---

## 3. The dataset

**362 job descriptions** collected April–July 2026 across `data/`. Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 317 | Yes — primary cohort |
| team_lead | 10 | Yes — governance-signalling stratum |
| data_engineering | 22 | No — excluded, different discourse population |
| other | 13 | No — excluded |

**Analytical cohort: 327 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily European (UK/remote 13%, Benelux 12%, Nordics 10%, Berlin 10%, Iberia 9%, France 7%), but APAC is now the third-largest single bucket at **38 roles (12% of the analytical cohort)** — large enough to compare directly against the European majority rather than merely disclaim as a blind spot (§9.5). The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim. See §9.5 for a worked APAC-vs-Europe comparison and a note on a classification gap in `scripts/geo_classify.py` found and fixed during this revision.

**2026-07-13 expansion:** Nine new JDs added mid-corpus (airSlate, EPAM, KTM AG, Bose, Resourcery Group, TapTap Send, TeamViewer, woom, Funding Circle) representing high-risk (5) and moderate-risk (4) roles. Early-stage (2) and mature (2) organisations represented alongside mid-stage (5). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution.

**2026-07-16 expansion:** Twelve new JDs added (Doodle, Adaptive HVM, Top Doctors Group, Qargo, Orange, Fortnox, Amaris Consulting, bTV Media Group, TDA, Oscar, MoonPay, TRIA) representing moderate-risk (7), high-risk (3), low-risk (2) roles. Mid-stage (8) and mature (3) organisations represented alongside early-stage (1). Seniority mix: mid (9), senior (3). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution. Corpus now at 260 total records, 240 in analytical cohort.

**2026-07-17 expansion:** Thirteen new JDs added (Booking Holdings Romania, Electra, Fruition Group Ireland, Jobster, Lendable ×2, Mollie, Monzo, Niji, Paddle, Rebtel, Reeeliance, Skiils). This batch also completed the `work_arrangement` field across the corpus, enabling the chi-square sweep in Finding H (§4.9) — work arrangement is driven almost entirely by geography, with a weak, secondary maturity effect (mature teams skew more hybrid than early-stage teams).

**2026-07-21 expansion:** Twenty-one new JDs added (2026-07-19: Engelska Skolan, Gerolsteiner, Scopely, Storytel; 2026-07-21: Avalanche Studios, Bravida, Currys, Decathlon Digital, Eunice Energy, EVA Esports, Finavia, IDW, ilionx, Kaizen Gaming, LEGO Group [team lead], Moérie Beauty, PRO PLUS [team lead], Relay Technologies, Wave Group, Witteveen+Bos, Xebia), representing moderate-risk (10), low-risk (8), and high-risk (3) roles — a notably higher low-risk share than prior batches (gaming/esports and consumer-education postings). Mid-stage (12) and mature (7) organisations dominate, with early-stage (2) again a minority. Two roles (LEGO Group, PRO PLUS) are `team_lead`. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 294 total records, 272 in analytical cohort. This batch also prompted a fix to a long-standing data-pipeline bug that had silently dropped `ai_role`, `testing_framing`, and `loss_aversion_framing` from JSON records for a large stretch of the corpus — all three dimensions are now coded on the full analytical cohort (n=272, up from a stuck n=86); see §9.3 for the full account and §4.10–4.12 for the updated findings.

**2026-07-22 to 2026-07-24 expansion:** Fifty-five new AE/BI JDs added, the largest single expansion yet and the first with a deliberate APAC scraping pass (36 of the 55 new cohort roles are APAC — Singapore, Australia, India, Vietnam, Malaysia, the Philippines, Japan, South Korea, Hong Kong, Thailand, China, New Zealand; the remainder mostly UK/remote). Domain-risk mix (moderate 40, high 13, low 2) and maturity mix (mid 28, mature 17, early 10) both sit close to the pre-existing corpus distribution — this batch reinforces rather than shifts the headline findings in §4.1–4.8. Seniority skews senior (27) and mid (24), consistent with the rest of the corpus. No `team_lead` roles in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 362 total records, 327 in analytical cohort. A gap in `scripts/geo_classify.py` was found and fixed during this batch's regeneration — one AU listing ("AU - HQ - NSW", state-abbreviated with no city name) was falling through to `other` instead of `apac`; the classifier now also matches `nsw`, `victoria,`, `queensland`, and `docklands`. See §9.5 for the resulting APAC-vs-Europe comparison, now supportable at n=38.

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=327): χ²=15.83, p=0.0033, V=0.16. χ² for `velocity_vs_rigour` × `has_dbt` (n=317): χ²=9.50, p=0.0087, V=0.17. **Both relationships remain significant at the larger n, with effect sizes essentially unchanged from the n=272 snapshot (V=0.16, 0.17 vs. 0.16, 0.18).** Rigour framing is still not detectably *more* tied to real organisational risk than to vendor-adoption signal — both associations remain comparably weak, and the July batch (heavy on APAC and moderate-risk roles) neither strengthened nor diluted the pattern. The honest reading is unchanged from the last snapshot: high-risk roles skew more rigour-dominant (89% vs. 59–68% for low/moderate — see §4.2 for the full cross-tab), and dbt-equipped roles skew more rigour-dominant (71% vs. 52% for `has_dbt=False`) — real but modest gradients, not the flat null reported at n=123/199/240. Fashion theory and a genuine-need account remain hard to distinguish at this n — both directions show a small, real, stable signal of the same order of magnitude, now confirmed stable across two further corpus expansions since the effect first appeared.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role` is coded across the full analytical cohort (n=327 — see §9.3 for the pipeline-bug history). `ai_role = none` is 67% of the cohort (essentially flat against 68% at n=272) — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=327): χ²=10.44, p=0.236, V=0.13 — **remains not significant**, and the effect size has weakened slightly further from the n=272 reading (p=0.147, V=0.15). `ai_enabler` (63 of 327, 19%) still concentrates somewhat in `internal_data` (56%) and `mixed` (22%) stakeholder orientation versus `ai_user` (44, 13%) which spreads more toward `commercial`/`finance` (18%/14%) — the direction is unchanged from the last two snapshots but the association keeps getting weaker as the corpus grows, which is itself informative: this looks increasingly like noise rather than a structural pattern that a larger n would eventually confirm. **Prediction 2's second half (non-random concentration) continues to not hold at conventional significance, now across two consecutive corpus expansions; the first half (large adoption-claim/hiring-criterion gap) still holds — `none` is 67% of hiring criteria against the survey's 72% daily-use claim.**

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result reported honestly as it changes — including when a full re-coding overturns an earlier reading, as happened here. Prediction 1 flipped from a clean non-result (n≤240) to a small-but-real significant effect at n=272 and has now held stable through n=327 (§4.2). Prediction 2 flipped the other direction: a marginal, medium-effect result at a small, biased coded subset (n=86) dissolved into a clear non-result once the same three dimensions were coded across the full cohort, and has continued to weaken slightly at n=327. Both trajectories are instructive about statistical power and sample composition rather than embarrassing reversals to paper over — this is the fix for Appendix B's "six theories, none tested" critique — not a stronger claim than the data supports, but an honest, and honestly-updated, one.

---

## 4. Findings

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=327) |
|--------------------|---|---|
| rigour | 236 | 72% |
| mixed | 81 | 25% |
| velocity | 10 | 3% |

**72% of JDs in the analytical cohort signal a rigour orientation**, exactly flat against the n=272 snapshot despite 55 new JDs added, over a third of them APAC. Pure velocity remains at 3% (10 JDs across 327). This remains the clearest single-dimension finding in the dataset — the percentage drifted down across earlier expansions (80% → 75% → 75% → 72%) as the corpus diversified into more low-risk, gaming/consumer roles (§3), but has now held at 72% through two further expansions, including the first sizeable non-European stratum (APAC rigour rate is 76%, slightly above the corpus average — see §9.5). Per §4.2, rigour framing shows a small but statistically real gradient with domain risk and tool adoption rather than the flat null reported at smaller n — an institutionalised norm that is still, modestly, responsive to context.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for both risk and tooling but nothing large enough to favour one explanation over the others.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=327) |
|-------------|---|---|
| moderate | 219 | 67% |
| high | 79 | 24% |
| low | 29 | 9% |

**Cross-tab with velocity_vs_rigour:**

| domain_risk | rigour | mixed | velocity | n |
|-------------|--------|-------|----------|---|
| high | 89% | 9% | 3% | 79 |
| low | 59% | 38% | 3% | 29 |
| moderate | 68% | 29% | 3% | 219 |

χ²=15.83, p=0.0033, V=0.16 (n=327 — stable, and slightly stronger, than the n=272 reading of p=0.010, V=0.16). **High-risk roles remain detectably more rigour-dominant (89%) than moderate or low-risk roles (59–68%),** and the relationship has held through two further expansions unchanged in effect size. This confirms §4.0 Prediction 1's interpretation: "a small, real relationship detected, alongside an equally small relationship with tool adoption (§4.0)." The larger n continues to separate this signal from noise, but the effect size (V=0.16) stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is close to universal everywhere (59%+ in every risk tier) but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=327) |
|--------------------|---|---|
| mid | 200 | 61% |
| mature | 84 | 26% |
| early | 43 | 13% |

**Just under two-thirds of roles are mid-stage.** Early-stage roles hold at 13%; genuinely mature organisations are 26% — both effectively unchanged from the n=272 snapshot (12%/25%) and stable across every expansion since n=199. The July 22–24 batch (55 new JDs, mostly APAC) skewed mid/mature (28 mid, 17 mature, 10 early), again reinforcing rather than disturbing the mid-stage dominance in the overall market structure — APAC's own maturity mix (58% mid, 26% mature, 16% early; §9.5) tracks the corpus average closely.

**Maturity × greenfield_vs_fix cross-tab** (χ²=173.80, p<0.0001, V=0.52, n=327 — the strongest relationship in the dataset, and stable across every expansion):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 9% | 77% | 14% | 43 |
| mid | 39% | 5% | 56% | 200 |
| mature | 57% | 2% | 40% | 84 |

Greenfield work concentrates sharply at early-stage (77%) and is nearly absent at mature (2%). This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, with the effect size holding at V=0.52 through the latest expansion (unchanged from n=272, having grown from V=0.46 at earlier snapshots).

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 14% | 19% | 67% | 43 |
| mid | 36% | 36% | 29% | 200 |
| mature | 32% | 31% | 37% | 84 |

χ²=22.88, p=0.0001, V=0.19 (n=327). Early-stage roles offer strategic autonomy at 67% — still far above mid- or mature-stage roles (29% and 37%), though the effect size has softened slightly from the n=272 reading (V=0.22→0.19) as the mature tier's autonomy mix has moved closer to mid-stage's. Mid-stage remains the least strategic tier despite being the largest market segment. The core pattern — greenfield work and direction-setting cluster at early-stage companies — holds; the mature-tier autonomy split is the part worth watching as the corpus grows further.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=327) |
|-------------------------|---|---|
| internal_data | 174 | 53% |
| mixed | 54 | 17% |
| commercial | 40 | 12% |
| finance | 36 | 11% |
| product | 23 | 7% |

**53% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market, essentially flat against the last snapshot (54%→53%) — the decline that ran through earlier snapshots (60%→55%→51%→54%) has clearly stabilised. The July 22–24 batch, despite its heavy APAC weighting, added no strong skew in any one direction (APAC's own stakeholder mix isn't a standout finding — see §9.5).

**Cross-tab with rigour** (χ²=59.75, p<0.0001, V=0.30, n=327):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 11% | 89% | 0% | 36 |
| internal_data | 14% | 84% | 2% | 174 |
| commercial | 35% | 55% | 10% | 40 |
| product | 43% | 48% | 9% | 23 |
| mixed | 54% | 44% | 2% | 54 |

Finance and internal_data roles remain the most rigour-dominant (84–89%); commercial and product roles are close to evenly split between rigour and mixed framing, and carry most of the corpus's pure-velocity roles (9–10% each) — the fastest-moving stakeholder groups create the most pressure on delivery speed, and JD language reflects it. This relationship remains clearly significant at n=327 (V=0.30, still a medium effect, down slightly from V=0.33 at n=272) — still the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=327) |
|----------------|---|---|
| strategic | 118 | 36% |
| mixed | 105 | 32% |
| execution | 104 | 32% |

The three-way split persists across the corpus expansion, though strategic has edged into the lead (36% vs. 32%/32%) for the first time — a shift worth watching but not yet large (4pp) against the near-even split at n=272 (36%/35%/29%). This even-to-slightly-strategic-leaning distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=62.31, p<0.0001, V=0.31, n=327):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 77% | 23% | 0% | 13 |
| mid | 39% | 41% | 20% | 150 |
| senior | 25% | 23% | 52% | 145 |
| lead | 0% | 50% | 50% | 10 |
| manager | 0% | 25% | 75% | 4 |
| staff | 0% | 0% | 100% | 5 |

The relationship remains statistically real (p<0.0001, effect size stable at V=0.31 vs. 0.32) but the practical read matters more than the p-value: **"Senior" remains the single largest title cohort (n=145, up from n=118) and now splits 25/23/52 across execution/mixed/strategic — even more strategic-leaning than the n=272 reading (30/21/49), and far removed from the near-even split at n=199 (33/23/44).** A "Senior Analytics Engineer" title continues to strengthen as a predictor of strategic scope, though it remains far from deterministic (a quarter of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (50–100%), but remain small cells. The practical implication for interviews is essentially unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title keeps getting more informative, but still leaves real uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly 68% of the expanded corpus, and the APAC batch pushed the share up sharply

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=327) |
|---------------|---|---|
| hiring_manager | 223 | 68% |
| mixed | 76 | 23% |
| recruiter | 28 | 9% |

**Hiring-manager-authored JDs are now 68% of the expanded corpus, up from 63% at n=272** — the largest single-snapshot move in this dimension since n=199, and it traces almost entirely to the APAC batch: APAC roles are 95% hiring_manager-authored vs. 65% for the rest of the corpus (χ²=14.10, p=0.0009, V=0.21, n=327 — see §9.5). Zero of the 38 APAC JDs coded as pure `recruiter`. This dimension remains the lowest in LLM self-consistency (0.58) — a codebook-ambiguity signal — so some of this shift could reflect how APAC postings are written (many are pulled directly from ATS/LinkedIn with detailed technical bullet lists) rather than a change in who's actually authoring them; `recruiter` is a comparatively clean classification, but `hiring_manager` vs. `mixed` should still be treated as a soft signal.

**Cross-tab with rigour** (χ²=6.57, p=0.160, V=0.10, n=327): hiring_manager 76% rigour / 21% mixed / 3% velocity; mixed 63% rigour / 34% mixed / 3% velocity; recruiter 64% rigour / 32% mixed / 4% velocity. Still not significant at conventional thresholds and the effect size stays small (V=0.10, down slightly from 0.12) — unlike domain_risk and has_dbt (§4.2), authorship sophistication continues to show no detectable relationship with rigour framing even with the APAC-driven shift toward more hiring-manager authorship.

**Cross-tab with has_dbt** (χ²=21.96, p<0.0001, V=0.26, n=317):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 25% | 75% | 217 |
| mixed | 51% | 49% | 73 |
| recruiter | 56% | 44% | 27 |

Hiring-manager-authored JDs name dbt at nearly 2× the rate of recruiter-authored ones (75% vs. 44%), essentially unchanged from the n=272 reading (75% vs. 42%) despite the shift in authorship mix — the relationship is stable even as its base rate has moved. Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.31 | 84 |
| mid | 2.17 | 200 |
| early | 2.14 | 43 |

The earlier draft's finding — mature teams have the widest named-stakeholder count — remains flat at n=327 (2.31 vs. 2.17 vs. 2.14, a small spread with no meaningful separation, unchanged in ordering and magnitude from the n=272 reading). **This dimension does not currently support a reliable finding.** It is retained in the codebook for future corpus growth, but no claim built on it in the earlier draft should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **66% of AE/BI roles (n=317) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last three expansions (68%→66%→65%→65%→66%) — including through the APAC batch, where dbt prevalence (63%, n=38 AE/BI) tracks the corpus average closely (§9.5). This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: one in three roles don't name dbt at all, stable across five consecutive corpus snapshots.

---

## 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=327, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.17 — tighter still than the n=272 threshold of ≈0.19, meaning the power to detect small effects keeps improving as the corpus grows. Findings below the current threshold are still directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.36, n=327)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=79) | 8% | 38% | 41% | 11% | 3% |
| low (n=29) | 3% | 0% | 76% | 14% | 7% |
| moderate (n=219) | 15% | 3% | 55% | 19% | 9% |

High-risk roles concentrate heavily in finance (38%, vs. 0% of low-risk and 3% of moderate-risk roles), essentially unchanged from the n=272 reading (39%) — still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3), with the effect size holding steady (V=0.37→0.36) through the latest expansion. Product-facing roles remain rare in high-risk contexts (3%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (76%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: High-risk roles skew away from incremental "mixed" mission work (χ², p=0.040, V=0.12, n=327)

| domain_risk | fix_scale | greenfield | mixed |
|-------------|-----------|-----------|-------|
| high (n=79) | 49% | 16% | 34% |
| low (n=29) | 52% | 14% | 34% |
| moderate (n=219) | 35% | 13% | 53% |

Moderate-risk roles remain the most "mixed" (incremental extension of an existing stack, 53%). High-risk and low-risk roles continue to split more sharply toward fix_scale (49%, 52%) than moderate-risk roles (35%) — the same pattern as the n=272 snapshot, reinforcing that the moderate/mixed pattern is the outlier rather than high-risk/fix_scale being distinctively high-risk behaviour. The effect size has weakened further with the larger n (V=0.15→0.12) and the relationship now sits close to the conventional significance threshold (p=0.040, up from p=0.018) — this remains the least robust of the "significant" cross-tabs in this section and should be read as directional.

**Theoretical read — Collingridge (1980), the control dilemma:** technology is easiest to correct early and hardest once dependencies lock in. The high-risk/fix_scale concentration is consistent with organisations in regulated domains having already hit the locked-in phase — the existing stack can't be safely patched incrementally under compliance pressure, forcing more explicit replacement work.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.52, n=327)

Full cross-tab in §4.3. Greenfield work is 77% of early-stage roles and 2% of mature-team roles — the sharpest, most reliable relationship in the corpus, holding at V=0.52 through the latest expansion (having grown from V=0.46 at earlier snapshots).

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (45%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.31, n=327)

Full cross-tab in §4.5. "Senior" (n=145, still the largest single title cohort) spans execution/mixed/strategic at 25/23/52 — noticeably more strategic-leaning than the corpus-wide split, and a stronger read than both the n=272 snapshot (30/21/49) and the near-flat 47/22/31 seen at n=123. Staff, manager, and lead titles (n=5, n=4, n=10) predict strategic scope near-perfectly (50–100%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, now more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=327 the modal "Senior" title has become a more informative signal still (52% strategic vs. an overall cohort rate of 36%) than at n=272 (49% vs. 35%) — the signalling account keeps looking less contradicted with each expansion, though a quarter of senior roles remain pure execution, so the signal stays noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: Finance roles remain the most execution-oriented in the dataset (χ², p=0.024, V=0.16, n=327)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| finance (n=36) | 47% | 14% | 39% |
| commercial (n=40) | 18% | 52% | 30% |
| mixed (n=54) | 35% | 31% | 33% |
| internal_data (n=174) | 32% | 33% | 36% |
| product (n=23) | 26% | 22% | 52% |

Finance-facing roles are still the most execution-concentrated segment (47%), and product-facing roles remain the most strategic (52%), and — unlike at n=272 — the relationship has moved back below p<0.05 (p=0.024, down from 0.107), though the effect size stays modest (V=0.16, unchanged). This relationship has now flipped significance twice across three snapshots (significant at n=123, non-significant at n=272, significant again at n=327 with an identical effect size to the n=272 reading) — a caution against reading either the earlier loss of significance or this recovery as a real trend break; the underlying association looks like a stable, small effect that straddles the n=327-ish detection threshold rather than one that's strengthening or weakening.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism (same mechanism as Finding A):** finance-facing AE roles operate under externally defined reporting requirements (audit cycles, IFRS, regulatory deadlines) that specify the deliverable before any internal conversation about direction happens. The result flipping back to significant at n=327 is consistent with this reading, but given the identical effect size across the last two snapshots, "finance = execution" is best treated as a stable small effect rather than a strengthening one.

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.26, n=317)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 75% vs. 44% for recruiter-authored — still the clearest authorship-quality signal in the dataset, with the gap and effect size essentially stable against the n=272 reading (V=0.28→0.26). Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

**New at n=327 — geography predicts JD authorship (χ², p=0.0009, V=0.21, n=327):** APAC roles are 95% hiring-manager-authored vs. 65% for the rest of the corpus, and zero of the 38 APAC JDs code as pure `recruiter` (§9.5). This is the single clearest geographic effect surfaced by the July 22–24 APAC batch — larger than any of the substantive-dimension differences between APAC and the rest of the corpus. Two readings are plausible and the JD text alone can't distinguish them: APAC hiring managers may write JDs more directly (less recruiter/ATS-template mediation in this sample), or the `jd_authorship` codebook's technical-specificity heuristic may be picking up an ATS-formatting convention specific to how these postings were sourced (many via LinkedIn/company career pages with detailed bullet-point tool lists) rather than true authorship. Given `jd_authorship`'s already-low self-consistency (0.58, §3), this finding should be treated as a real pattern in the coded data, but not yet as a confirmed claim about who actually writes APAC job postings.

---

### Finding H: Work arrangement — driven almost entirely by geography, with a weak maturity effect, and now a distinct APAC signature (added 2026-07-17, updated 2026-07-24, n=362 total / 327 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 36% of the analytical cohort) against all other categorical and boolean dimensions found essentially one real driver: **where the job is**. `geo_region` remains by far the strongest association (χ²=101.37, p<0.0001, V=0.49, n=208 stated — direction and magnitude consistent with earlier snapshots) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region (Berlin, Iberia, Benelux, Nordics, France). This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test remains statistically unreliable at the sparse-cell level given 14 regions × 3-4 arrangement categories. Treat the direction as real, the p-value as decorative.

**APAC's own signature is not "more remote" — it's "silent."** Of the 38 APAC roles, 53% state no work arrangement at all, vs. 34% for the rest of the corpus (χ²=8.61, p=0.035, V=0.16, n=327) — the largest not-stated rate of any region in the dataset. Among the 18 APAC roles that do state an arrangement, hybrid still dominates (14 of 18), but the headline finding is the silence itself, not a different arrangement preference once one is disclosed.

The `data_team_maturity` relationship remains directional, not confirmed, at the current n: on the stated-arrangement subset (n=208), χ²=9.31, dof=4, p=0.054, V=0.15 (min expected cell 1.75) — just short of conventional significance, essentially the same read as the n=272 snapshot (p=0.075). Mature teams still post hybrid most often (90% of stated arrangements) vs. 68% for early-stage teams, who still split more evenly across hybrid/remote/onsite (68% / 18% / 14%); mid-stage sits between the two (75% / 20% / 5%). The direction is unchanged from the earlier snapshots and matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs — but this should still be read as a directional pattern only. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**On the missing 36% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. Across maturity tiers it does *not* concentrate strongly — mature (40%), early-stage (35%), and mid (35%) withhold a policy at close to the same rate, essentially unchanged from earlier snapshots. That's the more useful finding than it first appears: the arrangement-silence rate is close to a flat, corpus-wide background level *by maturity* — but as Finding H's APAC update shows, it is not flat *by geography*. Folding `not_stated` back in as a fourth category for the maturity test (rather than excluding it) keeps the maturity × arrangement relationship non-significant (χ²=9.93, dof=6, p=0.128, V=0.12, n=327). Both readings are legitimate and answer different questions — "does maturity predict which arrangement is chosen, given one is stated" (weak, not significant) vs. "does maturity predict whether an arrangement is stated at all" (no) vs. "does geography predict whether an arrangement is stated at all" (yes, for APAC specifically) — and the dashboard panel shows the maturity views.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `autonomy_level`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `greenfield_vs_fix`, `ai_role`, `testing_framing`, `loss_aversion_framing`, and `stakeholder_orientation` (all p>0.20). `ats_platform` came close in earlier snapshots but has the worst sparse-cell problem of any test run and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 36% of the analytical cohort states no work arrangement at all, and that rate is not uniform by region — APAC's 53% not-stated rate (above) is the clearest evidence yet that non-response is not random with respect to geography. Whether it reflects different posting conventions (many APAC postings were sourced via LinkedIn/company career pages that omit a work-arrangement field entirely) or genuine underlying differences in how APAC employers set policy is not resolvable from JD text alone.

---

### Finding I: With `ai_role`, `testing_framing`, and `loss_aversion_framing` coded on the full cohort (n=327; §9.3), a systematic sweep against every other categorical dimension and tool flag surfaces several relationships, all stable through the APAC-heavy July batch

**Testing accountability tracks the fear register closely (χ²=75.60, p<0.0001, V=0.34, n=327):**

| testing_framing | high | moderate | none |
|---|---|---|---|
| absent (n=78) | 12% | 32% | 56% |
| responsibility (n=200) | 27% | 64% | 8% |
| tool_listed (n=49) | 14% | 59% | 27% |

JDs that frame testing as an owned responsibility carry almost no `loss_aversion_framing = none` (8%, vs. 56% for `absent`-testing JDs) — essentially unchanged from the n=272 snapshot. This is a construct-validity result as much as a substantive one: two dimensions coded independently, from different evidence quotes, land in the same place — a JD that asks the candidate to own data quality is, unsurprisingly, also a JD that is afraid of something going wrong. The `absent`/`none` corner (56%) is the "pure delivery" JD with no quality or risk register at all; the `responsibility`/`moderate` combination (64% of `responsibility`-coded JDs) is the modal case — quality ownership paired with garden-variety operational-reliability fear, not compliance framing.

**Loss aversion tracks rigour framing even more tightly than domain risk does (χ²=65.01, p<0.0001, V=0.32, n=327):**

| loss_aversion_framing | mixed | rigour | velocity |
|---|---|---|---|
| high (n=70) | 4% | 96% | 0% |
| moderate (n=183) | 20% | 77% | 3% |
| none (n=74) | 55% | 38% | 7% |

96% of `high`-loss-aversion JDs are rigour-framed, against 38% for JDs with no loss-aversion signal at all — identical in magnitude to the n=272 reading, and still a cleaner split than domain_risk's own relationship with rigour framing (§4.2, V=0.16). Read together with §4.2, this suggests `loss_aversion_framing` is picking up something closer to the JD's *actual* fear register than `domain_risk`'s sector-level proxy does — a JD can be sector-coded `moderate` risk but still carry `high` loss-aversion language if the role's specific responsibilities emphasise trust/audit framing (see Finding A's DiMaggio & Powell read, §4.9, for why sector and role-level framing can diverge).

**dbt-equipped roles are far more likely to frame testing as an owned responsibility (χ²=38.43, p<0.0001, V=0.35, n=327, AE/BI only n=317):**

| testing_framing | has_dbt=False | has_dbt=True |
|---|---|---|
| absent (n=75) | 63% | 37% |
| responsibility (n=193) | 23% | 77% |
| tool_listed (n=49) | 33% | 67% |

This remains the strongest tool-stack relationship found for any of the three dimensions, essentially unchanged from the n=272 reading, and it cuts against a purely fashion-driven reading of dbt adoption: `has_dbt` JDs are 77% likely to frame testing as an owned responsibility, vs. 37% for JDs with no dbt mention — dbt's testing framework (`dbt test`) appears to travel with genuine ownership language, not just as a name-drop.

**`ai_role` and autonomy move together in an unexpected direction — `ai_user` roles skew the most strategic of the three groups, not the least (χ²=26.23, p<0.0001, V=0.20, n=327):**

| ai_role | execution | mixed | strategic |
|---|---|---|---|
| ai_enabler (n=63) | 22% | 32% | 46% |
| ai_user (n=44) | 7% | 34% | 59% |
| none (n=220) | 40% | 32% | 29% |

The naive expectation might be that "use AI coding tools" is a junior-coded, execution-heavy ask (accelerate scoped work faster) while "build AI-consuming infrastructure" is the more strategic mandate. The data continues to show the opposite ordering, essentially unchanged from the n=272 reading: `ai_user` JDs are the *most* strategic-leaning of the three groups (59%, only 7% pure execution), more so even than `ai_enabler` (46% strategic). One plausible read: JDs that expect AI-tool fluency are disproportionately senior/lead-level postings at companies confident enough in their engineering culture to name a specific workflow expectation ("use Claude Code/Copilot as part of your daily workflow") rather than a junior competency checkbox — the ask reads more like "operate at a higher level of leverage" than "be fast at typing." This is exploratory and not pre-registered (§4.0 only tested `ai_role × stakeholder_orientation`); it's flagged here as a candidate for a future prediction, not a confirmed causal story.

**`ai_role` also tracks `greenfield_vs_fix` (χ²=15.98, p=0.003, V=0.16, n=327):**

| ai_role | fix_scale | greenfield | mixed |
|---|---|---|---|
| ai_enabler (n=63) | 27% | 22% | 51% |
| ai_user (n=44) | 32% | 25% | 43% |
| none (n=220) | 45% | 9% | 46% |

Both `ai_enabler` and `ai_user` roles show meaningfully more greenfield work (22%/25%) than `none` roles (9%) — consistent with the n=272 reading, though the effect size has softened somewhat (V=0.20→0.16) as the corpus has grown. This dovetails with the `ai_role × autonomy_level` finding above: greenfield work and strategic autonomy already travel together generally (§4.3), so some of the "AI roles skew strategic" pattern may be downstream of "AI roles skew greenfield" rather than a direct effect of the AI expectation itself. Disentangling the two would need a three-way cross-tab at a larger n than this corpus currently supports.

**Everything else involving the three new dimensions tested null or only weakly suggestive** (p>0.05 or V<0.15): no meaningful association between `ai_role`/`testing_framing`/`loss_aversion_framing` and `seniority`, `urgency`, or most individual BI-tool flags. `work_arrangement` also stays null for all three dimensions once tested against the stated-arrangement subset. `testing_framing × geo_region` remains a sparse-cell test (14 regions × 3 categories, several expected cells <1) and should be treated as decorative, not evidential, despite APAC's own testing_framing mix (71% responsibility, above the corpus average of 61%; §9.5) being directionally interesting.

---

### Summary of relationships tested

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | 0.0033 | 0.16 | Stable at n=327 (was p=0.010, V=0.16 at n=272) — small real effect, high-risk roles more rigour-dominant |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.0087 | 0.17 | Stable at n=317 (was p=0.014, V=0.18 at n=262) — comparably small effect to domain_risk |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.236 | 0.13 | Still not significant at n=327 (was p=0.147, V=0.15 at n=272) — effect continues to weaken as corpus grows |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.36 | Strongest relationship: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.52 | Near-deterministic and stable: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.040 | 0.12 | Weakened further (was V=0.15) — now close to the significance threshold; least robust "significant" finding in this table |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.26 | Hiring-manager JDs name dbt ~1.7× more than recruiter JDs — stable |
| geo_region (APAC vs. rest) × jd_authorship | χ² | 0.0009 | 0.21 | New: APAC roles are 95% hiring-manager-authored vs. 65% for the rest of the corpus (§4.6, §9.5) |
| geo_region (APAC vs. rest) × work_arrangement | χ² | 0.035 | 0.16 | New: APAC roles state no work arrangement 53% of the time vs. 34% for the rest of the corpus (Finding H, §9.5) |
| seniority × autonomy_level | χ² | <0.0001 | 0.31 | Significant overall; "Senior" (still modal title, n=145) predicts more strongly than before (52% strategic) |
| stakeholder_orientation × autonomy_level | χ² | 0.024 | 0.16 | Back to significant at n=327 (was p=0.107 at n=272) — same effect size both times; read as a stable small effect, not a trend |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.30 | Finance/internal_data most rigour-dominant; commercial/product carry most pure-velocity roles |
| collaboration_width × data_team_maturity | — | — | — | Still does not support a claim at n=327 (§4.7) |
| work_arrangement × geo_region | χ² | <0.0001 | 0.49 | Strongest association found, but unreliable — most cells <5 (Finding H) |
| work_arrangement × data_team_maturity | χ² | 0.054 | 0.15 | Just short of significance on stated-arrangement subset (was p=0.075 at n=272) — directional only |
| work_arrangement × everything else (28 dims tested) | χ² | >0.20 | ≤0.13 | Null — tool stack, seniority, autonomy, rigour, domain risk unrelated to arrangement |
| loss_aversion_framing × domain_risk | χ² | <0.0001 | 0.37 | 58% of high-risk roles carry high loss-aversion framing (Finding I) |
| testing_framing × loss_aversion_framing | χ² | <0.0001 | 0.34 | Quality-ownership and fear-register track each other closely (Finding I) |
| loss_aversion_framing × velocity_vs_rigour | χ² | <0.0001 | 0.32 | Cleaner than domain_risk's own link to rigour — 96% of high-loss-aversion JDs are rigour-framed (Finding I) |
| testing_framing × has_dbt | χ² | <0.0001 | 0.35 | dbt JDs 77% likely to frame testing as owned responsibility vs. 37% without dbt (Finding I) |
| testing_framing × jd_authorship | χ² | <0.0001 | 0.24 | Hiring-manager JDs skew toward `responsibility`/`tool_listed`, recruiter JDs toward `absent` (Finding I) |
| ai_role × autonomy_level | χ² | <0.0001 | 0.20 | Unexpected direction, stable: `ai_user` roles are the most strategic-leaning of the three groups, not the least (Finding I) |
| ai_role × greenfield_vs_fix | χ² | 0.003 | 0.16 | `ai_enabler`/`ai_user` roles carry meaningfully more greenfield work than `none` roles (Finding I) |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language narrows once fully coded, but stays real

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. **Coded on the full analytical cohort (n=327)** — a bug in `scripts/write_jd.py` had silently dropped this field (and `testing_framing`, `loss_aversion_framing`) from JSON output for a long stretch of the corpus even when correctly classified; the backlog was fully re-coded against the JD archive text and the codebook (§9.3).

| ai_role | n | % (n=327) |
|---------|---|---|
| none | 220 | 67% |
| ai_enabler | 63 | 19% |
| ai_user | 44 | 13% |

This is Prediction 2 from §4.0. **67% of JDs expect no AI skill from the candidate**, essentially flat against 68% at n=272, against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. The gap between claimed personal-workflow adoption and formal hiring criteria has held steady across the latest expansion. χ² for `ai_role` × `stakeholder_orientation` (n=327) remains non-significant (p=0.236, V=0.13; §4.0) — the `ai_enabler` cohort still leans toward `internal_data` (56%) and `mixed` (22%) stakeholder orientation, and `ai_user` leans more commercial/finance (18%/14%), but the association keeps weakening as n grows (V=0.15→0.13), reinforcing that this is best read as noise rather than a structural pattern.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption. `ai_user` roles → demonstrate fluency with AI coding tools directly (Copilot, Claude Code, Cursor) as a nontrivial minority expectation. `none` (still the majority at 67%) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

`ai_role` continues to track `autonomy_level` (χ²=26.23, p<0.0001, V=0.20) and `greenfield_vs_fix` (χ²=15.98, p=0.003, V=0.16) at n=327 — see Finding I (§4.9) for the counter-intuitive direction (`ai_user` roles skew *more* strategic and *more* greenfield, not less). Both relationships are stable in direction against the n=272 reading, with the greenfield link softening somewhat (V=0.20→0.16).

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. **Coded on the full analytical cohort (n=327)** — see §9.3 for the write-pipeline bug that delayed this.

| testing_framing | n | % (n=327) |
|-----------------|---|---|
| responsibility | 200 | 61% |
| absent | 78 | 24% |
| tool_listed | 49 | 15% |

**61% of JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language, essentially unchanged from the 60% seen at n=272. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former. `testing_framing × velocity_vs_rigour` is significant (χ²=34.26, p<0.0001, V=0.23, n=327): `responsibility`-coded JDs are 84% rigour-framed vs. 51% for `absent`-coded JDs — testing ownership and rigour framing move together but are not the same signal, since a quarter of the cohort is rigour-framed with no testing-ownership language at all.

The 24% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

`testing_framing`'s strongest tool-stack link (`has_dbt`, χ²=38.43, p<0.0001, V=0.35) and its link to `jd_authorship` (χ²=38.42, p<0.0001, V=0.24) and `loss_aversion_framing` (χ²=75.60, p<0.0001, V=0.34) all hold stable at n=327 — see Finding I (§4.9) for detail. APAC roles skew slightly above the corpus average on `responsibility` framing (71% vs. 60% for the rest of the corpus; §9.5).

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. **Coded on the full analytical cohort (n=327)** — see §9.3.

| loss_aversion_framing | n | % (n=327) |
|-----------------------|---|---|
| moderate | 183 | 56% |
| none | 74 | 23% |
| high | 70 | 21% |

Three in four JDs carry some fear signal, but it's still predominantly operational (56%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing holds at 21%, unchanged from n=272. `loss_aversion_framing × domain_risk` is the strongest relationship among these three dimensions (χ²=88.96, p<0.0001, V=0.37, n=327, slightly stronger than the n=272 reading of V=0.35): 58% of `high`-domain-risk roles carry `high` loss-aversion framing, vs. 11% of `moderate`-risk and 0% of `low`-risk roles (equivalently: of JDs with `high` loss-aversion framing, 66% are `high`-domain-risk) — the fear register tracks real domain stakes closely, which is reassuring for the codebook's construct validity on this dimension. `high` loss-aversion framing remains concentrated in finance-adjacent and regulated-sector roles; APAC's own `high` rate (18%) tracks the corpus average closely (§9.5).

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=327 analytical cohort, expanded July 24 2026) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 72% rigour-oriented; testing framing coded on full cohort (n=327, 61% responsibility framing) | Confirmed at the orientation level and at the testing-accountability level, stable across the latest expansion |
| 72% use AI in coding workflows daily | 67% of JDs (n=327, full coverage) expect no AI skill; 13% name AI coding tools directly (`ai_user`) | Gap persists, essentially unchanged from the n=272 reading (68%/13%) — Prediction 2 (§4.0), first half still holds, second half (structural concentration) continues to weaken further from significance |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability (61% of n=327 full cohort); AI hiring signal ~32% (`ai_enabler`+`ai_user`) | The JD evidence still suggests governance accountability further institutionalised than AI hiring criteria, and the ratio has held stable across the latest expansion |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 21% of n=327 full cohort; 56% report operational reliability concerns | Not confirmed — dominant fear is still operational reliability, not AI-trust hallucination; both figures stable against the n=272 reading |
| Rigour framing tracks risk/stakes | χ²=15.83, p=0.0033, V=0.16 (§4.0/§4.2, Prediction 1) — stable at n=327 | Partially confirmed — small but real effect first emerged at n=272 and has now held through a further 55-JD expansion, including a first sizeable APAC stratum; rigour still close to universal (59%+) in every risk tier |
| dbt is the field standard | 66% of AE/BI JDs mention dbt (n=317) | Real but not universal; one in three AE/BI roles run dbt-free stacks; stable across five consecutive snapshots, including in the APAC subset specifically (63%; §9.5) |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (61% of coded roles) than AI hiring criteria (32% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

---

## 6. Secondary theoretical reads

§4.0 establishes Abrahamson's management fashion theory as the primary, pre-specified frame, tested against two explicit predictions. The lenses below are applied afterward, to findings the primary frame doesn't reach — they are exploratory interpretive tools, not additional confirmatory tests. Each is noted where it is supported, contradicted, or in tension with another lens on the same finding (§4.9's Findings A–G carry the detailed per-finding reads).

**Deming & Kahn (2018) — revealed preference:** the foundational assumption of this whole analysis — JD requirements carry hiring cost, survey answers don't. Finding G (§4.9) refines this: the *fidelity* of a revealed preference depends on who wrote it. A hiring-manager-named dbt requirement is higher-fidelity evidence than a recruiter-named one.

**DiMaggio & Powell (1983) — coercive isomorphism:** supported cleanly by Findings A and E (§4.9) — finance-facing roles are shaped by external regulatory mandate (audit, IFRS) more than by employer preference, producing both the domain-risk concentration and the execution-orientation of finance roles.

**Spence (1973) — signalling:** partially contradicted by Finding D (§4.9) — "Senior," the modal seniority title, predicts autonomy only weakly; staff/manager titles predict it more cleanly but on too few cases to generalise.

**Rogers (2003) — diffusion:** strongly supported by Finding C's maturity × mission relationship (early=greenfield, mid=mixed, mature=fix/scale), with one anomaly (mature teams' meaningful fix_scale share) better explained by Collingridge's control-dilemma framework than by Rogers' stabilisation model.

**Collingridge (1980) — control dilemma:** supported by Finding B and the mature/fix_scale anomaly in Finding C — high-risk and mature organisations disproportionately face costly late-stage correction rather than incremental adjustment.

---

## 7. What JDs cannot tell you — interview questions that fill the gap

Two factors that matter most for long-term role satisfaction cannot be inferred reliably from JD text: growth ceiling and management quality. Both are partially signalled but easily faked, because JDs are marketing documents.

### Growth ceiling

**Stronger JD signals (use these to screen):**
- Explicit cross-domain rotation or architecture exposure
- Named senior technical roles the position will partner with
- `jd_authorship = hiring_manager` — a mild positive proxy, and per §4.6 the more reliable half of a noisy dimension
- `data_team_maturity = early` — per §4.3, the strongest structural predictor of strategic scope, more reliable than the maturity=mid growth-through-scale story in the earlier draft

**Questions to ask:**
- "What does the person who succeeds in this role do 18 months from now — deeper in this domain, or into something different?"
- "Can you tell me about someone on the team who grew significantly in the last two years — what did their growth actually look like?"
- "What's the highest-impact decision this role would make autonomously in the first year?"

**Red flags:** vague growth language ("the sky's the limit"), growth defined only as headcount management, no concrete example of a team member who grew.

### Management quality

**Stronger JD signals:**
- `jd_authorship = hiring_manager` — the single most useful proxy, treated cautiously per §4.6's consistency caveat.
- Scope that is clearly defined and internally consistent — contradictory scope ("own the strategy" but "support all stakeholders") predicts a difficult first year.

**Questions to ask:**
- "How do you typically set priorities — do you set the roadmap and hand it down, or build it together?"
- "What would I need to do in the first three months to make you feel confident this hire was the right one?"
- "What's one thing people who've worked for you say they wished you did differently?"

**Process signals:** a disorganised interview process tends to mirror disorganised management. Generic interview questions suggest the manager doesn't know what they're evaluating for.

---

## 8. Schema gaps — questions this dataset cannot yet answer

### What the interview process signals about team reality

The schema captures `interview_stages` (count) but not interview *content*. A four-stage process with a case study and a technical deep-dive signals something different from three recruiter screens and an HR check. What would help: whether a technical assessment was present, whether the hiring manager conducted at least one stage, whether a work sample was required. This would let the §7 claim about interview disorganisation be tested rather than asserted.

### Compensation coverage is too thin for salary analysis to be reliable

Salary disclosure is a minority of records and varies by country (German and Nordic employers disclose more often than UK/pan-European roles) — a structured, non-random bias. Any salary-linked finding in an earlier draft of this document (autonomy predicting pay, maturity predicting pay) has been removed from this revision pending a larger, less country-skewed sample; re-derive and re-check before citing externally.

### Longitudinal signal is absent

Every JD was collected within a roughly four-month window. Several findings would look different tracked over time: is `ai_role = ai_enabler` growing? Is `testing_framing = responsibility` a recent shift or a stable norm? Is `loss_aversion_framing = high` rising with AI deployment? The corpus structure (dated IDs, archived JD text) supports longitudinal extension; a quarterly re-run against the same codebook would enable trend detection. Without it, every percentage in this document is a snapshot, not a trajectory.

---

## 9. Methodological notes

### 9.1 The evidence-verifier bug, and what fixing it revealed

Every LLM-cited evidence quote is checked against the source JD text by a verifier function, `quote_present_in_jd()`, to catch hallucinated or fabricated evidence. In the pre-July-2026 corpus, this verifier flagged 391 quotes across the dataset as "not found verbatim" — a rate high enough to look like a real reliability problem.

Investigating the failures found the verifier itself was the defect, not the classifications. Three of ten dimensions (`collaboration_width`, `jd_authorship`, `stakeholder_orientation`) legitimately synthesise evidence from multiple non-adjacent JD bullets — a JD naming five separate stakeholder teams across five different sentences produces a semicolon-joined evidence quote, correctly summarising real evidence that does not exist as one contiguous span. The verifier's single-substring match flagged every one of these as hallucinated. Manually checking a sample confirmed each individual segment was verbatim-present in the source text; the *synthesis*, not the evidence, tripped the check.

Fixing the verifier to check semicolon-joined quotes segment-by-segment resolved 288 of the 391 original failures (74%). The remaining ~103 were genuine, if minor: single-word paraphrase drift ("Establish" quoted as "Define," "self-service" quoted as "self-serve") — real evidence of imperfect quote fidelity, not fabrication, and now the honest baseline going forward.

**Why this belongs in the methods section, not a footnote:** it is the clearest demonstration in this project of Krippendorff's (2018) point that inter-run consistency and evidence validity are different properties — a verifier can be internally consistent (flagging the same things every time) while being wrong about what it's flagging. The fix is a worked example of exactly the kind of codebook/tooling revision the consistency study (§9.2) is meant to surface.

**A related data-integrity issue** was found and fixed in the same pass: the classification CSV had accumulated duplicate rows for ~14 JDs across multiple script runs predating a dedup safeguard, silently inflating those JDs' weight in every downstream percentage by 2–10×. This was deduped (keeping the most recent classification per JD) before any of the statistics in this revision were computed. The evidence-verifier fix was applied to all 131 JDs classified in the same session (§9.3); the ~93 records classified before this session were not fully rerun and retain some old-verifier evidence flags — a caveat, not a correctness issue, since the flag only affects the *evidence-verification metadata*, not the underlying Layer B classification values themselves.

### 9.2 What the consistency study establishes, and doesn't

The three-run LLM consistency check establishes that the codebook produces *stable* automated classifications on structured dimensions (§3) and *unstable* ones on dimensions with underspecified decision boundaries (`jd_authorship`, `autonomy_level`). Stable LLM classification and validated human classification are different properties: a codebook can produce the same answer three times in a row while that answer disagrees with the original hand-coded label 65–75% of the time. That gap is itself a finding — it means either the codebook's decision rules are ambiguous enough that a careful reader (human or model) reasonably lands somewhere else than the original coder did, or the original manual call was more subjective than the codebook implies. Before any inter-rater reliability work with a second human coder, `jd_authorship` and `autonomy_level` need their decision rules tightened — they are the two dimensions where this gap is largest.

### 9.3 Dimension coverage: a write-pipeline bug, found and fixed

`ai_role`, `testing_framing`, and `loss_aversion_framing` were added to the Layer B codebook after part of the corpus was already classified, and for a long stretch these three dimensions were coded on only 86 of 272 analytical-cohort records (all findings using them, and Prediction 2 in §4.0, were stated against that n=86 subset in prior revisions of this report).

Investigating the stall found the root cause: `scripts/write_jd.py`'s field-serialisation lists (`LAYER_B_FIELDS`, `JSON_FIELD_ORDER`) never included these three dimensions. The `classify-jd` skill's prompt template correctly asked for all three fields, and the classification work itself was frequently done correctly — but the write step silently dropped the three top-level fields from every JSON record it touched, for every JD processed while the bug was live. In many cases the underlying evidence quote and reasoning survived (nested under `evidence` or as legacy top-level `{dim}_quote`/`{dim}_reasoning` keys from an earlier, separately-broken backfill script), which meant the classification work was recoverable rather than lost, but the top-level enum value used by every crosstab in this report was missing from the record either way.

**The fix, in three parts:**
1. `scripts/write_jd.py` now includes `ai_role`, `testing_framing`, `loss_aversion_framing` in its field lists, so newly classified JDs get all three fields going forward.
2. `.claude/skills/classify-jd/SKILL.md`'s Step 5 output-summary template was also missing these three dimensions from its printed checklist (Steps 2 and 4 already had them) — fixed for consistency, though this only affected what gets printed to the terminal, not the JSON record.
3. The 201 records missing the top-level fields were backfilled: 186 had enough surviving evidence (quote + explanation) to derive the value directly; the remaining ~15 (plus 2 stragglers found on a final sweep) had no surviving evidence and were classified fresh from the archived JD text. A further 93 records had top-level values but no supporting `evidence` entries (an artifact of the same underlying issue interacting with the earlier backfill attempt) — those were backfilled with evidence quotes and explanations, and redundant legacy `{dim}_quote`/`{dim}_reasoning` fields left by the earlier backfill script were removed once the standard `evidence.{dim}` / `evidence.{dim}_explanation` format was confirmed present, to keep one consistent evidence format across the corpus.

All backfill classification work was done by reading each JD's archived text directly against the exact codebook rules in `.claude/skills/classify-jd/SKILL.md` — not by guessing from partial evidence or regex-extracting values from free-text explanations (an early attempt at the latter was tried and abandoned once it proved unreliable — different classification runs used inconsistent explanation phrasing that didn't survive pattern-matching). Several dozen pre-existing values were corrected in the process where the archived JD text clearly contradicted the stored evidence or reasoning (most commonly: missed `ai_user` signals like "AI-assisted coding tools" or "Claude Code" mentioned in requirements, misclassified as `none`).

**Current state: all three dimensions are coded on the full analytical cohort (n=327, including all JDs added since the fix)**, with consistent `evidence.{dim}` (quote) + `evidence.{dim}_explanation` (reasoning) entries on every record, and no legacy-format duplication. Findings in §4.10–4.12 and Prediction 2 (§4.0) are stated against the full current n, not a small coded subset — this changed several conclusions materially when the fix first landed at n=272 (§4.0, §4.10), and the corpus has grown by a further 55 JDs since without disturbing that fix.

### 9.4 What n=327 supports

At n=327, the margin of error on a single proportion is approximately ±5pp at 95% confidence (Wilson interval) — the 72% rigour finding (§4.1) is defensible as "likely between 67% and 76%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above. The five corpus additions since the n=123 baseline (July 13: +9 JDs; July 16: +12 JDs; July 17: +13 JDs; July 21: +21 JDs; July 22–24: +55 JDs) provided meaningful confidence-interval tightening and, at n=272, enough added power to flip two previously-null relationships (domain_risk × rigour, has_dbt × rigour; §4.0, §4.2) to statistically significant small effects — while weakening others (stakeholder × autonomy, domain_risk × greenfield/fix; §4.9) toward non-significance or smaller effect sizes. The latest expansion (n=272→327) has been comparatively quiet for the headline findings — every dimension in §4.1–4.8 moved by 0–2pp — with the interesting news concentrated in the new APAC stratum specifically (§9.5) rather than in a shift to the corpus-wide averages. One relationship (stakeholder_orientation × autonomy_level) flipped back to significant at an unchanged effect size, a reminder that a single significance flip at this corpus size is not itself evidence of a strengthening or weakening trend. Pattern stability holds for the strongest relationships (maturity × mission, domain_risk × stakeholder) across all six snapshots (n=123→199→240→251→272→327).

### 9.5 What the geographic concentration means, and what the APAC stratum now shows

This remains a primarily European, Berlin-heavy dataset, but the July 22–24 expansion added a scraping pass targeted specifically at APAC postings, bringing that stratum from a handful of opportunistic finds to **38 roles (12% of the analytical cohort)** — large enough to run a direct APAC-vs-rest-of-corpus comparison rather than only disclaiming the gap, as earlier snapshots of this document had to.

**The headline result: APAC looks like the rest of the corpus on every substantive Layer B dimension.** Rigour orientation (76% vs. 72%), domain risk (71% moderate vs. 67%), data team maturity (58% mid vs. 61%), dbt prevalence (63% vs. 67%), `ai_role` mix, `testing_framing` mix, and `loss_aversion_framing` mix all sit within a few points of the non-APAC corpus, none of it statistically distinguishable at this n. This is itself a useful finding: whatever is driving the rigour/velocity, domain-risk, and maturity patterns documented in §4.1–4.3 does not appear to be a Europe-specific artefact of this corpus's collection method — the same broad pattern shows up in a geographically distinct, independently-scraped batch of roles.

**Two dimensions do diverge, both statistically significant, and both about how the JD was produced rather than about the substance of the role:**

| Dimension | APAC (n=38) | Rest of corpus (n=289) | Test |
|---|---|---|---|
| `jd_authorship = hiring_manager` | 95% | 65% | χ²=14.10, p=0.0009, V=0.21 |
| `work_arrangement = not_stated` | 53% | 34% | χ²=8.61, p=0.035, V=0.16 |

Zero of the 38 APAC JDs code as pure `recruiter`-authored, and over half state no work arrangement at all — the highest not-stated rate of any region in the dataset (§4.9, Finding H). Both readings should be held carefully: `jd_authorship`'s LLM self-consistency is the lowest of any dimension in the codebook (0.58, §3), so part of this gap could be a codebook-boundary artefact interacting with how APAC postings happen to be formatted (many sourced via LinkedIn/company career pages with detailed technical bullet lists, which the heuristic may read as "hiring-manager-authored" regardless of who actually wrote them) rather than a real difference in who authors these JDs. The work-arrangement gap is more straightforwardly a *disclosure* difference — APAC employers in this sample state a hybrid/remote/onsite policy less often, not a *different* policy once one is stated (14 of 18 APAC roles with a stated arrangement are hybrid, matching the corpus-wide hybrid skew).

**What this does and doesn't license:** the JD data cannot distinguish "APAC employers write JDs differently" from "this specific 38-role sample happens to have been sourced through channels that produce more hiring-manager-style, arrangement-silent postings" — the collection method for this batch (a single scraping pass, not the same multi-month opportunistic accumulation as the European portion) is a real confound. Treat the substantive-dimension null result (rigour, risk, maturity, dbt, AI/testing/loss-aversion framing) as reasonably solid — it's a genuine absence of difference across many independently-coded dimensions. Treat the two authorship/disclosure findings as real in the coded data but open on mechanism.

The dbt survey itself skews North American, though post-2023 reports don't disclose the exact split — this dataset still has no North American stratum to compare against, and the 72% rigour figure should not be assumed to hold in the US market without separate data.

---

## Appendix A: dbt Labs survey — year-by-year detail

For reference, key metrics from the dbt reports that motivated the research questions above.

### 2023 (n=567)
- 46% plan to invest more in data quality/observability
- Most time spent maintaining datasets, not building new ones
- "Cross-team alignment on data ownership" rated worst performance area (44% poor)
- 76% of respondents already use dbt

### 2024 (n=456)
- 57% cite poor data quality as predominant issue (up from 41% in 2022)
- "Increasing data trust" = #1 org focus for the first time
- 33% experienced headcount reduction from macroeconomic conditions
- 57% currently manage or plan to manage data for AI training

### 2025 (n=459)
- AI in daily workflows: 80% (up from 30%)
- Budget growth: 30% report budget growth (vs 9% prior year)
- Team growth: 40% report team growth (vs 14% prior year)
- 45% cite AI tooling as largest investment priority

### 2026 (n=363)
- 72% prioritise AI-assisted coding; 24% prioritise AI-assisted pipeline management ("trust gap")
- Trust in data as org priority: 83% (up from 66%)
- 71% cite hallucinated or incorrect outputs reaching stakeholders as top concern
- Infrastructure costs: 57% report increased warehouse/compute spend; only 36% report increased team budgets

**Persistent comparable metrics across years:**

| Theme | 2023 | 2024 | 2025 | 2026 |
|-------|------|------|------|------|
| Poor data quality (top concern) | 41%* | 57% | 56% | not published separately |
| Ambiguous data ownership | 44% (poor rating) | ~50% (challenge) | — | 41% (obstacle) |
| Trust in data as top priority | — | #1 (qualitative) | 66% | 83% |
| Budget growth | — | contracting | 30% growth | 36% team budgets growing |

*2022 baseline from 2024 report retrospective.

Data quality concern has been essentially flat at 56–57% for two consecutive years despite being named the #1 investment priority in 2023. Either the investment didn't resolve it, or the investment was stated preference rather than revealed preference — the Deming & Kahn point applied to organisations' own internal reporting.

---

## Appendix B: Academic reviewer critique and journal submission path — status

For a potential journal submission, the primary outlet recommendation remains *Information Systems Journal* (ABS 3), positioning the paper as a critical IS discourse study with a pilot JD empirical component.

**Six issues raised against the earlier draft, and their status in this revision:**

1. **No methodology section.** *Partially resolved.* §9 now states the method plainly (structured qualitative content analysis, codebook as coding instrument, single coder for the manual subset). Still needed: explicit citation of Krippendorff (2018) in the methods section itself, not just in the evidence-verifier discussion (§9.1).

2. **Single-coder reliability.** *Not resolved.* Requires a second coder on a random ~20% sample (~25 JDs) with kappa reported per dimension. The consistency study (§9.2) remains a diagnostic for codebook revision, not a substitute.

3. **n=93 is pilot-scale.** *Resolved for the immediate staleness problem, not for the underlying power issue.* The corpus is now 131 JDs (123 analytical). For a 3×3 chi-squared table to be reliably powered (minimum expected cell frequency ≥5), roughly n=150 is needed across 9 cells; for cross-market subgroup analysis, n≈300. Findings above are labelled as directional pilot observations, consistent with this constraint.

4. **Vendor-produced primary source.** *Resolved in framing.* §2 and the Abrahamson frame (§4.0) now explicitly treat the dbt survey as a fashion-setting document produced by an interested party, not a neutral primary source. Every percentage attributed to the survey should still be read as "dbt Labs' survey reports that X% of dbt community respondents say Y," not as a market-wide claim.

5. **Six theories cited, none tested.** *Resolved.* §4.0 picks Abrahamson's management fashion theory, derives two explicit, falsifiable predictions before presenting findings, and reports the statistical result for each — including the honest non-result on Prediction 1. §6 retains the other five lenses as clearly-labelled secondary, exploratory reads applied after the fact, not additional confirmatory tests.

6. **No literature review.** *Not resolved.* Still needs three streams: vendor knowledge production/management fashion (Abrahamson 1996 — now load-bearing rather than decorative, given §4.0), critical IS and technology discourse (Orlikowski & Barley 2001), job postings as labour-market data (Deming & Kahn 2018, Hershbein & Kahn 2018).

**Remaining before external submission:** items 2 and 6 above, plus a full corpus reclassification under the fixed evidence-verifier (§9.1) so the evidence-verification statistic is uniform across all 131 records rather than mixed pre/post-fix.

---

## Appendix C: Forward Data Conference proposal

**Conference:** Forward Data, Paris, 16 November 2026
**CFP deadline:** 24 July 2026
**Target:** Theme 01 — Data Foundations for Humans & AI → *Data Quality & Trust in the Agentic Era*
**Format:** 25-minute Regular Talk

**Proposed title:** "363 self-selected dbt users vs. 123 revealed-preference job descriptions: what the 2026 governance panic actually shows up in employer hiring language"

**Abstract:**

Every year dbt Labs publishes a survey of the analytics engineering community. Every year it headlines a new central anxiety. In 2026 it is governance: AI adoption is outpacing trust, 71% fear hallucinated outputs, 83% now rank data trust as their top priority.

The report is widely read. Its vocabulary circulates through hiring managers and conference talks within weeks. But the sample is 363 self-selected respondents from dbt's own community channels, and surveys measure stated preferences. Job postings measure revealed ones.

I collected 123 analytics engineering and BI job postings from a European job search, classified each on ten behavioural dimensions using a structured codebook, and derived two falsifiable predictions from management fashion theory before looking at the results. One prediction — that AI-skill hiring criteria would lag survey-claimed adoption and cluster in structurally-motivated roles — held up directionally (83% of JDs expect no AI skill from the candidate, against the survey's 72% daily-use claim). The other — that rigour framing would track real organisational risk more than vendor-adoption signals — did not: rigour language is close to flat (79–85%) across domain risk, tool stack, and JD-authorship sophistication, a pattern more consistent with an institutionalised norm than a locally-calibrated response.

Getting to that result required finding and fixing a bug in my own evidence-verification tooling — a check that flagged 391 LLM-cited quotes as hallucinated, when 74% of those "failures" were real evidence synthesised across multiple JD bullets that a naive substring match couldn't recognise as legitimate. That bug, and fixing it, is a better demonstration of what "testing your own codebook" actually looks like than anything that worked on the first try.

This talk covers what the 123 JDs show, what a genuinely falsifiable prediction looks like when it fails, and what broke in the methodology along the way.

**Talk structure (25 minutes):**
- 0–3 min: What revealed-preference data is and why it's different from a survey
- 3–8 min: Four years of dbt report narrative — each year's anxiety, each year's product
- 8–13 min: The two predictions, derived from management fashion theory, before the data
- 13–19 min: What the data actually showed — one prediction supported, one not, and why the non-result matters
- 19–23 min: What broke in the tooling — the evidence-verifier bug, the CSV dedup bug, and what fixing them changed
- 23–25 min: What this means if you're writing the JD or applying to one; the dataset is open

---

## Appendix D: Interactive report (`index.html`) — dual-persona redesign (July 2026)

The interactive report originally addressed a single implied reader: the job seeker whose search produced the corpus. On 2026-07-14 it was reworked around two explicit personas — **job seeker** and **hiring manager** — selected via a full-screen chooser on first visit and switchable at any time from a fixed toggle in the top-right corner of the screen. The choice persists across visits (`localStorage: aeProfile`).

**Why two personas.** Nearly every finding in this dataset is actionable in opposite directions depending on who is reading. The seniority × autonomy result is the cleanest example: to a seeker it reads "the title tells you little — ask in the interview what decisions the role owns"; to a hiring manager the *same statistic* reads "the title communicates little — write the decision rights into the posting explicitly." The evidence is shared; only the imperative inverts. That symmetry is what makes a shared-evidence, dual-framing design workable without maintaining two documents.

**What changes between views:**

| Element | Job seeker | Hiring manager |
|---|---|---|
| Hero framing | "What actually predicts what" — use relationships to target roles | "What your JD signals" — benchmarked against a market of near-identical postings |
| Section order | Baseline → relationships → negative results → tool stack (what to learn) → explorer/reference | Baseline → **saturated signals** → inference channels → explorer/reference → stack |
| Negative-results section | "What we expected but the data didn't support" (epistemics: nulls fight survivorship bias) | Retitled "Saturated signals: language that no longer differentiates a posting" — the flat results are *promoted above* the positive findings, because a fully-diffused signal (rigour vocabulary) is exactly what a JD writer most needs to know is noise |
| Panel order within relationships | Effect size (Cramér's V), strongest first — targeting needs discriminating power | Consequence for writing a posting: title→autonomy first (cheapest fix), then quality accountability, authorship/stack, stage honesty |
| Panel questions | e.g. "Where is the 'build from scratch' work, really?" | e.g. "Candidates infer the day-to-day work from your company stage — is your posting honest about which it is?" |
| Action tips | "Apply this:" — positioning, filtering, interview questions | "For your JD:" — what to write, what to cut, what candidates will infer |

**What deliberately does not change:** the data, every statistic, every caveat, and the null results themselves. No persona sees different numbers, softer sparse-cell warnings, or a hidden retraction — this is a presentation-layer decision, not an analytical one. The chooser overlay states this explicitly ("the data, statistics, and caveats are identical in both views").

**Design rationale worth preserving for future revisions:**

1. **For the seeker, the strongest relationships are the most useful** (targeting requires cross-tabs that actually discriminate between segments), so effect-size ordering is correct for that reader.
2. **For the manager, the null results are arguably the most useful content on the page.** The rigour-flatness finding (§4.1, §4.0 Prediction 1) means rigour vocabulary is institutionalised boilerplate — writing it is necessary (absence would be noticed) but it attracts no one. The manager view is built around this inversion: what the analysis frames as "failure to reject the null," a JD writer should read as "this channel is saturated; differentiate elsewhere" — named accountabilities, explicit year-one decision rights, a real stack list, honest stage-appropriate scope.
3. **The revealed-preference logic (§6, Deming & Kahn) runs both directions.** JDs are revealed-preference data about employers; but employers should also assume candidates treat their posting the same way — every generic phrase is read (increasingly by candidates' own tools) as evidence about the team that wrote it.
4. **The dissolved finding (stakeholder × autonomy) gets a persona-specific moral:** for seekers, "don't infer autonomy from the audience label"; for managers, "the audience label doesn't lock in how your role reads — write the decision rights, don't let a template's assumptions write them for you."

**Implementation notes:** persona state in `localStorage`; sections live in a `<main id="sectionsWrap">` and are physically reordered per persona (dividers are CSS `border-top` rather than `<hr>` so reordering stays clean); nav links regenerate per persona with persona-specific labels; panels carry `q`/`tip` objects keyed by persona while `read` (the analytical middle) stays shared; the scroll-position observer queries nav links live to survive regeneration.

---

## Sources

- dbt Labs, "State of Analytics Engineering" (2023–2026). Raw 2023 data: github.com/dbt-labs/analytics-engineering-survey
- Deming, D. and Kahn, L.B. (2018). "Skill Requirements across Firms and Labor Markets." *Journal of Labor Economics*, 36(S1), S337–S369. DOI: 10.1086/694106.
- Abrahamson, E. (1996). "Management Fashion." *Academy of Management Review*, 21(1), 254–285.
- DiMaggio, P.J. and Powell, W.W. (1983). "The Iron Cage Revisited." *American Sociological Review*, 48, 147–160.
- Spence, M. (1973). "Job Market Signaling." *Quarterly Journal of Economics*, 87(3), 355–374.
- Rogers, E.M. (2003). *Diffusion of Innovations* (5th ed.). Free Press.
- Collingridge, D. (1980). *The Social Control of Technology*. Frances Pinter.
- Krippendorff, K. (2018). *Content Analysis: An Introduction to Its Methodology* (4th ed.). Sage.
- Orlikowski, W.J. and Barley, S.R. (2001). "Technology and Institutions." *MIS Quarterly*, 25(2), 145–165.
- Hershbein, B. and Kahn, L.B. (2018). "Do Recessions Accelerate Routine-Biased Technological Change?" *American Economic Review*, 108(7), 1737–1772.
