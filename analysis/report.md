# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, and now July 21 2026 with 21 further new roles; all tables and test statistics reconciled to the July 21 2026 corpus snapshot in this revision (see §3, corpus vintages)
**Dataset:** 272 analytics-engineering/BI/team-lead job descriptions from `data/` (April–July 2026; European market, Berlin-heavy, with UK, DACH, Nordics, and selected global roles). 294 records total in the corpus including 17 data-engineering and 5 other roles excluded from the analytical cohort; see §3.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "State of Analytics Engineering" reports, 2023–2026 — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

---

## 1. What this document is

This is a structured analysis of 272 analytics engineering, BI, and team-lead job postings collected during a European job search in 2026. The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 272 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±5-6pp at 95% (Wilson interval) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration (primarily European/Berlin market) limits generalisation to North America or APAC. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Mid-corpus expansions (July 13, 2026: +9 JDs; July 16, 2026: +12 JDs; July 17, 2026: +13 JDs; July 21, 2026: +21 JDs) added new roles without statistical re-weighting, so updated findings reflect raw inclusion in the analytical cohort and show sustained pattern stability.

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

**294 job descriptions** collected April–July 2026 across `data/`. Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 262 | Yes — primary cohort |
| team_lead | 10 | Yes — governance-signalling stratum |
| data_engineering | 17 | No — excluded, different discourse population |
| other | 5 | No — excluded |

**Analytical cohort: 272 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily Berlin/DACH, with meaningful Nordics and UK representation and a smaller France/global-remote cluster. The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim.

**2026-07-13 expansion:** Nine new JDs added mid-corpus (airSlate, EPAM, KTM AG, Bose, Resourcery Group, TapTap Send, TeamViewer, woom, Funding Circle) representing high-risk (5) and moderate-risk (4) roles. Early-stage (2) and mature (2) organisations represented alongside mid-stage (5). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution.

**2026-07-16 expansion:** Twelve new JDs added (Doodle, Adaptive HVM, Top Doctors Group, Qargo, Orange, Fortnox, Amaris Consulting, bTV Media Group, TDA, Oscar, MoonPay, TRIA) representing moderate-risk (7), high-risk (3), low-risk (2) roles. Mid-stage (8) and mature (3) organisations represented alongside early-stage (1). Seniority mix: mid (9), senior (3). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution. Corpus now at 260 total records, 240 in analytical cohort.

**2026-07-17 expansion:** Thirteen new JDs added (Booking Holdings Romania, Electra, Fruition Group Ireland, Jobster, Lendable ×2, Mollie, Monzo, Niji, Paddle, Rebtel, Reeeliance, Skiils). This batch also completed the `work_arrangement` field across the corpus, enabling the chi-square sweep in Finding H (§4.9) — work arrangement is driven almost entirely by geography, with a weak, secondary maturity effect (mature teams skew more hybrid than early-stage teams).

**2026-07-21 expansion:** Twenty-one new JDs added (2026-07-19: Engelska Skolan, Gerolsteiner, Scopely, Storytel; 2026-07-21: Avalanche Studios, Bravida, Currys, Decathlon Digital, Eunice Energy, EVA Esports, Finavia, IDW, ilionx, Kaizen Gaming, LEGO Group [team lead], Moérie Beauty, PRO PLUS [team lead], Relay Technologies, Wave Group, Witteveen+Bos, Xebia), representing moderate-risk (10), low-risk (8), and high-risk (3) roles — a notably higher low-risk share than prior batches (gaming/esports and consumer-education postings). Mid-stage (12) and mature (7) organisations dominate, with early-stage (2) again a minority. Two roles (LEGO Group, PRO PLUS) are `team_lead`. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 294 total records, 272 in analytical cohort. `ai_role`, `testing_framing`, and `loss_aversion_framing` were not coded on this batch — the coded subset for those three dimensions remains n=86 (§9.3, §4.10–4.12).

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=272): χ²=13.26, p=0.010, V=0.16. χ² for `velocity_vs_rigour` × `has_dbt` (n=262): χ²=8.59, p=0.014, V=0.18. **At this larger n, both relationships now clear p<0.05 — a reversal from the earlier non-result — but the effect sizes remain small (V=0.16, 0.18) and nearly identical to each other.** Rigour framing is not detectably *more* tied to real organisational risk than to vendor-adoption signal — both associations are comparably weak. The larger sample has enough power to detect small effects that a smaller n could not, which is itself the lesson: statistical significance and practical significance have diverged now that n has grown. The honest reading: high-risk roles do skew somewhat more rigour-dominant (89% vs. 63–67% for low/moderate), and dbt-equipped roles skew somewhat more rigour-dominant (78% vs. 63%) — real but modest gradients, not the flat null reported at n=123/199/240. This softens Prediction 1's earlier "pure institutionalised norm" reading: rigour framing is closer to universal everywhere, but does still track risk and tooling to a small degree. Fashion theory and a genuine-need account are no longer indistinguishable at this n, though neither is decisively confirmed — both directions now show a small, real signal of the same order of magnitude.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role = none` is 83% of the analytical cohort (n=86, the subset with this dimension coded) — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=86): χ²=14.87 → recomputed at the current corpus, χ²=13.98, p=0.082, V=0.29 (§4.10). **This remains directionally supportive but not conclusive** — p sits just above the conventional 0.05 threshold, with a medium effect size, essentially unchanged from the earlier snapshot because `ai_role` has not been coded on any of the 143 JDs added since the coded subset was fixed at n=86 (§9.3). The `ai_enabler` cohort (14 of 86, 16%) concentrates 9-of-14 in `internal_data` stakeholder orientation and 4-of-14 in `mixed` — consistent with structural concentration in platform-facing roles rather than even spread. Both halves of Prediction 2 hold directionally: a large adoption-claim/hiring-criterion gap, and non-random concentration where formal adoption exists. Neither is a strong statistical confirmation; both remain stuck at the same n and are overdue for a coding pass against the newer JDs.

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result reported honestly as it changes. Prediction 1 has now flipped from a clean non-result (n≤240) to a small-but-real significant effect (n=272, §4.2) — itself an instructive case of statistical power outrunning practical significance as the corpus has grown. This is the fix for Appendix B's "six theories, none tested" critique — not a stronger claim than the data supports, but an honest, and honestly-updated, one.

---

## 4. Findings

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=272) |
|--------------------|---|---|
| rigour | 196 | 72% |
| mixed | 67 | 25% |
| velocity | 9 | 3% |

**72% of JDs in the analytical cohort signal a rigour orientation** (73% in the AE/BI-only subset, n=262). Pure velocity remains at 3% (9 JDs across 272). This remains the clearest single-dimension finding in the dataset, though the percentage has drifted down slightly across expansions (80% → 75% → 75% → 72%) as the corpus has diversified into more low-risk, gaming/consumer roles (§3). Per §4.2, rigour framing now shows a small but statistically real gradient with domain risk and tool adoption rather than the flat null reported at smaller n — an institutionalised norm that is still, modestly, responsive to context.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for both risk and tooling but nothing large enough to favour one explanation over the others.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=272) |
|-------------|---|---|
| moderate | 179 | 66% |
| high | 66 | 24% |
| low | 27 | 10% |

**Cross-tab with velocity_vs_rigour:**

| domain_risk | rigour | mixed | velocity | n |
|-------------|--------|-------|----------|---|
| high | 89% | 9% | 2% | 66 |
| low | 63% | 33% | 4% | 27 |
| moderate | 67% | 29% | 4% | 179 |

χ²=13.26, p=0.010, V=0.16 (n=272 — a reversal from the non-significant reads at n≤240). **High-risk roles are now detectably, not just directionally, more rigour-dominant (89%) than moderate or low-risk roles (63–67%).** This changes §4.0 Prediction 1's honest interpretation from "no relationship detected" to "a small, real relationship detected, alongside an equally small relationship with tool adoption (§4.0)." The larger n has enough power to separate this signal from noise, but the effect size (V=0.16) stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is close to universal everywhere (63%+ in every risk tier) but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=272) |
|--------------------|---|---|
| mid | 173 | 64% |
| mature | 66 | 24% |
| early | 33 | 12% |

**Just under two-thirds of roles are mid-stage.** Early-stage roles hold at 12%; genuinely mature organisations are 24% — both stable across every expansion since n=199. The July 21 batch (21 new JDs) skewed mid/mature (12 mid, 7 mature, 2 early), reflecting the particular companies added that day (several larger, established employers) but again reinforcing rather than disturbing the mid-stage dominance in the overall market structure.

**Maturity × greenfield_vs_fix cross-tab** (χ²=146.83, p<0.0001, V=0.52, n=272 — the strongest relationship in the dataset, and stable across every expansion):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 9% | 79% | 12% | 33 |
| mid | 43% | 5% | 50% | 173 |
| mature | 65% | 3% | 29% | 66 |

Greenfield work concentrates sharply at early-stage (79%, up from 67% at n=199) and is nearly absent at mature (3%). Mature teams have shifted further toward fix/scale (65%, up from 40%) at the expense of "mixed" — they are replacing or extending, essentially never building from nothing. This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, and the effect size has grown (V=0.46→0.52) rather than diluted as n has increased.

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 18% | 9% | 73% | 33 |
| mid | 39% | 34% | 28% | 173 |
| mature | 39% | 26% | 35% | 66 |

χ²=25.51, p<0.0001, V=0.22 (n=272). Early-stage roles offer strategic autonomy at 73% — even higher than the 61% seen at n=240 — still far above mid- or mature-stage roles (28% and 35%). Mid-stage remains the least strategic tier despite being the largest market segment. The pattern has sharpened, not softened, with growth: greenfield work and direction-setting cluster ever more strongly at early-stage companies.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=272) |
|-------------------------|---|---|
| internal_data | 144 | 53% |
| mixed | 44 | 16% |
| commercial | 32 | 12% |
| finance | 31 | 11% |
| product | 21 | 8% |

**53% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market, essentially flat against the last snapshot (51%→53%) after several rounds of gradual decline (60%→55%→51%→53%) — the decline appears to have stabilised rather than continued. The July 21 batch added no strong skew in any one direction.

**Cross-tab with rigour** (χ²=60.06, p<0.0001, V=0.33, n=272):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 13% | 87% | 0% | 31 |
| internal_data | 12% | 86% | 1% | 144 |
| product | 38% | 52% | 10% | 21 |
| commercial | 38% | 50% | 12% | 32 |
| mixed | 57% | 41% | 2% | 44 |

Finance and internal_data roles remain the most rigour-dominant (86–87%); commercial and product roles are close to evenly split between rigour and mixed framing, and now show most of the corpus's pure-velocity roles (10–12% each) — the fastest-moving stakeholder groups create the most pressure on delivery speed, and JD language reflects it. This relationship is now clearly significant at n=272 (V=0.33, a medium effect) — the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=272) |
|----------------|---|---|
| execution | 99 | 36% |
| strategic | 95 | 35% |
| mixed | 78 | 29% |

The three-way split persists across the corpus expansion — execution and strategic remain nearly balanced (36% vs. 35%), with mixed at 29%. The balance held even with the addition of 34 total JDs (13+21) since the last snapshot, spanning both early-stage strategic and finance-facing execution roles. This even distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=55.16, p<0.0001, V=0.32, n=272):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 91% | 9% | 0% | 11 |
| mid | 43% | 37% | 20% | 126 |
| senior | 30% | 21% | 49% | 118 |
| lead | 0% | 50% | 50% | 8 |
| manager | 0% | 25% | 75% | 4 |
| staff | 0% | 0% | 100% | 5 |

The relationship is statistically real (p<0.0001) but the practical read matters more than the p-value: **"Senior" is now the single largest title cohort (n=118, overtaking "mid") and splits 30/21/49 across execution/mixed/strategic — a meaningfully more strategic-leaning distribution than the near-even split seen at n=199 (33/23/44).** A "Senior Analytics Engineer" title now leans toward predicting strategic scope more than it did in earlier snapshots, though it remains far from deterministic (nearly a third of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (50–100%), but remain small cells. The practical implication for interviews is essentially unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title is more informative than it was, but still leaves substantial uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly 63% of the expanded corpus, signal remains noisy

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=272) |
|---------------|---|---|
| hiring_manager | 172 | 63% |
| mixed | 73 | 27% |
| recruiter | 27 | 10% |

**Hiring-manager-authored JDs remain a clear majority (63%) of the expanded corpus**, essentially flat against the 65% seen at n=240. This dimension remains the lowest in LLM self-consistency (0.58) — a codebook-ambiguity signal. The boundary between "specific but not clearly technical" and "clearly written by someone technical" is underspecified in the current decision rules. `recruiter` is a comparatively clean classification, but `hiring_manager` vs. `mixed` should be treated as a soft signal, not a hard one.

**Cross-tab with rigour** (χ²=8.37, p=0.079, V=0.12, n=272): hiring_manager 77% rigour / 19% mixed / 4% velocity; mixed 63% rigour / 34% mixed / 3% velocity; recruiter 67% rigour / 33% mixed / 0% velocity. Still not significant at conventional thresholds and the effect size stays small (V=0.12), so — unlike domain_risk and has_dbt (§4.2) — authorship sophistication continues to show no detectable relationship with rigour framing even at this larger n.

**Cross-tab with has_dbt** (χ²=20.89, p<0.0001, V=0.28, n=262):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 25% | 75% | 166 |
| mixed | 51% | 49% | 70 |
| recruiter | 58% | 42% | 26 |

Hiring-manager-authored JDs name dbt at nearly 2× the rate of recruiter-authored ones (75% vs. 42%) — a similar direction to the n=123 reading (79% vs. 28%) but a narrower gap now that the corpus has grown, and the effect size has moderated from V=0.37 to V=0.28. Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.35 | 66 |
| mid | 2.20 | 173 |
| early | 2.18 | 33 |

The earlier draft's finding — mature teams have the widest named-stakeholder count — remains flat at n=272 (2.35 vs. 2.20 vs. 2.18, a small spread with no meaningful separation, and the ordering of mid/early has even swapped from the n=123 snapshot). **This dimension does not currently support a reliable finding.** It is retained in the codebook for future corpus growth, but no claim built on it in the earlier draft should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **65% of AE/BI roles (n=262) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last two expansions (68%→66%→65%→65%). This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: one in three roles don't name dbt at all, stable across four consecutive corpus snapshots.

---

## 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=272, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.19 — tighter than the n=123 threshold of ≈0.28, meaning several relationships that read as null at smaller n (e.g. domain_risk × rigour, §4.2) now clear significance at small-to-medium effect sizes. Findings below the current threshold are still directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.37, n=272)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=66) | 9% | 39% | 39% | 9% | 3% |
| low (n=27) | 4% | 0% | 78% | 11% | 7% |
| moderate (n=179) | 14% | 3% | 54% | 20% | 9% |

High-risk roles concentrate even more heavily in finance now (39%, vs. 0% of low-risk and 3% of moderate-risk roles) than at the earlier n=119 snapshot (28%) — still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3), though the effect size has moderated somewhat (V=0.47→0.37) with the addition of the `low` risk tier, which wasn't broken out in the original three-year table. Product-facing roles remain rare in high-risk contexts (3%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (78%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: High-risk roles skew away from incremental "mixed" mission work (χ², p=0.041, V=0.16, n=272)

| domain_risk | fix_scale | greenfield | mid | mixed |
|-------------|-----------|-----------|-----|-------|
| high (n=66) | 53% | 20% | 2% | 26% |
| low (n=27) | 56% | 15% | 4% | 26% |
| moderate (n=179) | 40% | 11% | 2% | 47% |

Moderate-risk roles remain the most "mixed" (incremental extension of an existing stack, 47%). High-risk roles split more sharply toward fix_scale (53%), and — newly visible with the `low` tier broken out — low-risk roles show the same fix_scale skew (56%), suggesting the moderate/mixed pattern is the outlier rather than high-risk/fix_scale being distinctively high-risk behaviour. The effect size has weakened substantially (V=0.36→0.16) now that `low` risk is included and n has grown; still significant, but this relationship is markedly less clean than it looked at n=119.

**Theoretical read — Collingridge (1980), the control dilemma:** technology is easiest to correct early and hardest once dependencies lock in. The high-risk/fix_scale concentration is consistent with organisations in regulated domains having already hit the locked-in phase — the existing stack can't be safely patched incrementally under compliance pressure, forcing more explicit replacement work.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.52, n=272)

Full cross-tab in §4.3. Greenfield work is 79% of early-stage roles and 3% of mature-team roles — the sharpest, most reliable relationship in the corpus, and the effect size has grown rather than diluted as the corpus has expanded (V=0.46→0.52).

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (45%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.32, n=272)

Full cross-tab in §4.5. "Senior" (n=118, now the largest single title cohort) spans execution/mixed/strategic at 30/21/49 — noticeably more strategic-leaning than the corpus-wide split, a stronger read than the near-flat 47/22/31 seen at n=123. Staff, manager, and lead titles (n=5, n=4, n=8) predict strategic scope near-perfectly (50–100%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, now more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=272 the modal "Senior" title has become a moderately informative signal (49% strategic vs. an overall cohort rate of 35%) rather than the near-uninformative one seen at n=123 — the signalling account looks less contradicted than it did in earlier snapshots, though a third of senior roles are still pure execution, so the signal remains noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: Finance roles remain the most execution-oriented in the dataset (χ², p=0.107, V=0.16, n=272)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| finance (n=31) | 48% | 16% | 35% |
| commercial (n=32) | 22% | 47% | 31% |
| mixed (n=44) | 45% | 25% | 30% |
| internal_data (n=144) | 35% | 30% | 35% |
| product (n=21) | 29% | 19% | 52% |

Finance-facing roles are still the most execution-concentrated segment (48%), and product-facing roles remain the most strategic (52%), but the relationship no longer clears p<0.05 at this n (p=0.107, down from p=0.007) and the effect size has weakened substantially (V=0.29→0.16). The earlier finding's direction holds, but "finance = execution" should now be read as a directional tendency, not a confirmed relationship — the larger, more diverse corpus has diluted what looked like a clean pattern at n=123.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism (same mechanism as Finding A):** finance-facing AE roles operate under externally defined reporting requirements (audit cycles, IFRS, regulatory deadlines) that specify the deliverable before any internal conversation about direction happens. The weakened statistical result doesn't overturn this reading (finance is still the most execution-heavy segment) but does mean it should be held more loosely than the earlier snapshot suggested.

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.28, n=262)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 75% vs. 42% for recruiter-authored — still the clearest authorship-quality signal in the dataset, though the gap has narrowed and the effect size moderated (V=0.37→0.28) as the corpus has grown. Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

---

### Finding H: Work arrangement — driven almost entirely by geography, with a weak maturity effect (added 2026-07-17, n=294 total / 272 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 35% of the analytical cohort) against all other categorical and boolean dimensions found essentially one real driver: **where the job is**. `geo_region` remains by far the strongest association (direction and magnitude consistent with the n=163 reading) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region (Berlin, Iberia, Benelux, Nordics, France). This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test remains statistically unreliable at the sparse-cell level. Treat the direction as real, the p-value as decorative.

The `data_team_maturity` relationship has weakened at the current n: on the stated-arrangement subset (n=177), χ²=8.51, dof=4, p=0.075, V=0.16 (smallest expected cell 1.19) — no longer clearing conventional significance, versus p=0.043 at n=163. Mature teams still post hybrid most often (90% of stated arrangements) vs. 62% for early-stage teams, who still split more evenly across hybrid/remote/onsite (62% / 24% / 14%); mid-stage sits between the two (75% / 20% / 5%). The direction is unchanged from the earlier snapshot and matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs — but this should now be read as a directional pattern only, not a statistically confirmed one. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**On the missing 35% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. It does *not* concentrate at any one maturity tier — mature (38%), early-stage (36%), and mid (34%) all withhold a policy at roughly the same rate, essentially unchanged from the n=251 reading. That's the more useful finding than it first appears: the arrangement-silence rate is a flat, corpus-wide background level, not a signal that varies with company stage. Practically, this means the hybrid/remote/onsite splits above describe only the ~65% of the market that specifies at all — and folding `not_stated` back in as a fourth category (rather than excluding it) drops the maturity × arrangement test further from significance (χ²=8.68, dof=6, p=0.193, V=0.13, n=272): four categories dilute a pattern that was already weakening among the three *stated* options. Both readings are legitimate and answer different questions — "does maturity predict which arrangement is chosen, given one is stated" (weak, no longer significant) vs. "does maturity predict whether an arrangement is stated at all" (no) — and the dashboard panel shows both.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `autonomy_level`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `greenfield_vs_fix`, `ai_role`, `testing_framing`, `loss_aversion_framing`, and `stakeholder_orientation` (all p>0.20). `ats_platform` came close (p=0.056) but has the worst sparse-cell problem of any test run (min expected cell = 0.04, 13 platform categories against 3 arrangement categories) and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 34% of the analytical cohort states no work arrangement at all. That non-response wasn't itself tested against other dimensions in this pass — whether "not stated" clusters by region or platform (rather than being random) is an open question worth a follow-up test before treating the stated-policy subset as representative of the whole corpus.

---

### Summary of relationships tested

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | 0.010 | 0.16 | Now significant at n=272 (was p=0.286 at n=240) — small real effect, high-risk roles more rigour-dominant |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.014 | 0.18 | Now significant at n=262 (was p=0.333 at n=232) — comparably small effect to domain_risk |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.082 | 0.29 | Marginal, medium effect, unchanged (coded subset still n=86; see §9.3) |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.37 | Strongest relationship: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.52 | Near-deterministic and strengthening: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.041 | 0.16 | Weakened substantially (was V=0.36) — high- and low-risk both skew fix/scale over moderate |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.28 | Hiring-manager JDs name dbt ~1.8× more than recruiter JDs (gap narrowed from ~3×) |
| seniority × autonomy_level | χ² | <0.0001 | 0.32 | Significant overall; "Senior" (now modal title, n=118) predicts more strongly than before (49% strategic) |
| stakeholder_orientation × autonomy_level | χ² | 0.107 | 0.16 | No longer significant (was p=0.007) — finance/execution link now directional only |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.33 | New: finance/internal_data most rigour-dominant; commercial/product carry most pure-velocity roles |
| collaboration_width × data_team_maturity | — | — | — | Still does not support a claim at n=272 (§4.7) |
| work_arrangement × geo_region | χ² | <0.0001 | ~0.49 | Strongest association found, but unreliable — most cells <5 (Finding H) |
| work_arrangement × data_team_maturity | χ² | 0.075 | 0.16 | No longer significant on stated-arrangement subset (was p=0.043 at n=163) — directional only |
| work_arrangement × everything else (28 dims tested) | χ² | >0.20 | ≤0.13 | Null — tool stack, seniority, autonomy, rigour, domain risk unrelated to arrangement |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language persists

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. Coded on 86 of 272 analytical-cohort records (this dimension was added after part of the corpus was collected; see §9.3). Note: none of the 143 JDs added since this dimension's coding was fixed (July 13 onward) have been coded on it — this is now a substantial and growing uncoded majority of the corpus, and a re-coding pass is overdue.

| ai_role | n | % (n=86) |
|---------|---|---|
| none | 71 | 83% |
| ai_enabler | 14 | 16% |
| ai_user | 1 | 1% |

This is Prediction 2 from §4.0. **83% of coded JDs expect no AI skill from the candidate**, against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. Almost no employers name AI coding tools as a hiring criterion — the gap between claimed personal-workflow adoption and formal hiring criteria remains large and, per §4.0, directionally consistent with an informally-diffusing-but-not-yet-institutionalised fashion. The `ai_enabler` cohort (16%) concentrates in roles with explicit generative-AI product context (Orange's "prepare datasets for AI-driven analytics", MoonPay's "Ledger" system for crypto reconciliation) — a structural signal, not a general market shift.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption. `none` (the large majority) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. Coded on 86 of 272 records (§9.3).

| testing_framing | n | % (n=86) |
|-----------------|---|---|
| responsibility | 51 | 59% |
| absent | 31 | 36% |
| tool_listed | 4 | 5% |

**59% of coded JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former.

The 36% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. Coded on 86 of 272 records (§9.3).

| loss_aversion_framing | n | % (n=86) |
|-----------------------|---|---|
| moderate | 53 | 62% |
| none | 20 | 23% |
| high | 13 | 15% |

Three in four coded roles carry some fear signal, but it's overwhelmingly operational (62%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing is a minority (15%), concentrated in finance-adjacent and regulated-sector roles — a narrower slice than the survey's headline figure implies.

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=272 analytical cohort, expanded July 21 2026) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 72% rigour-oriented; testing framing coded on n=86 subset (59% responsibility framing) | Confirmed at the orientation level; testing accountability detail still pending re-coding across expanded corpus |
| 72% use AI in coding workflows daily | 83% of coded JDs (n=86) expect no AI skill; <2% name AI coding tools | Large gap persists — Prediction 2 (§4.0), directionally consistent with informal/imitative adoption, not conclusively confirmed; coded subset unchanged since July 13 |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability (59% of n=86 coded roles); AI hiring signal remains ~17% (`ai_enabler`+`ai_user`) | The JD evidence suggests governance accountability further institutionalised than AI hiring criteria |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 14% of n=86 coded roles; 62% report operational reliability concerns | Not confirmed — dominant fear is operational reliability, not AI-trust hallucination |
| Rigour framing tracks risk/stakes | χ²=13.26, p=0.010, V=0.16 (§4.0/§4.2, Prediction 1) — now significant at n=272 | Partially confirmed — small but real effect emerged as n grew (was a non-result through n=240); rigour still close to universal (63%+) in every risk tier |
| dbt is the field standard | 65% of AE/BI JDs mention dbt (n=262) | Real but not universal; one in three AE/BI roles run dbt-free stacks; stable across four consecutive snapshots |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (59% of coded roles) than AI hiring criteria (17% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

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

### 9.3 Dimension coverage varies across the corpus

`ai_role`, `testing_framing`, and `loss_aversion_framing` were added to the Layer B codebook after part of the corpus was already classified. They are coded on 86 of 272 analytical-cohort records — every finding using these three dimensions (§4.10–4.12, and Prediction 2 in §4.0) is stated against n=86, not the full n=272, and is noted as such at each occurrence. This coded subset has not grown since the July 13 expansion; all 143 JDs added since then remain uncoded on these three dimensions.

### 9.4 What n=272 supports

At n=272, the margin of error on a single proportion is approximately ±5.5pp at 95% confidence (Wilson interval) — the 72% rigour finding (§4.1) is defensible as "likely between 66% and 77%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above. The four corpus additions since the n=123 baseline (July 13: +9 JDs; July 16: +12 JDs; July 17: +13 JDs; July 21: +21 JDs) provided meaningful confidence-interval tightening and, notably, enough added power to flip two previously-null relationships (domain_risk × rigour, has_dbt × rigour; §4.0, §4.2) to statistically significant small effects — while weakening two previously-significant ones (stakeholder × autonomy, domain_risk × greenfield/fix; §4.9) toward non-significance or smaller effect sizes. Pattern stability holds for the strongest relationships (maturity × mission, domain_risk × stakeholder) across all five snapshots (n=123→199→240→251→272), but several medium-strength relationships have proven less stable than the headline findings — a caution against treating any single-snapshot p-value as final at this corpus size.

### 9.5 What the geographic concentration means

This is a European, Berlin-heavy dataset. The dbt survey skews North American, though post-2023 reports don't disclose the exact split. North American AE roles may show a different rigour/velocity distribution — faster-growth startups, different engineering cultures, more VC-driven urgency. The 80% European rigour figure should not be assumed to hold in the US market without separate data.

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
