# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, July 21 2026 with 21 further new roles, July 22–24 2026 with 55 further new roles including the corpus's first substantial APAC batch, deduplicated 2026-07-25 in two passes (36 records removed as re-scrapes, plus one further duplicate on a follow-up audit — see §3, §9.6), expanded again 2026-07-26–29 with 33 further new roles (28 in the analytical cohort), including Parfumado, Tiqets, Riot, Emagine, Licorne Society, Montblanc, Qred Bank, Hack A Boss, StackFuel, Cultura, ASOS, Zego, NatWest Group, Kaluza, Fremantle Dockers, Joon Solutions, and Alight (§9.7), and expanded again 2026-07-30 with 15 further new roles (11 in the analytical cohort), a single-day, heavily-APAC batch including Blinq, Brand New Day, Eftsure, Emapta, Samsara Eco, Southern Cross, plus BeReal, Crystalloids, Harnham, Infinite Lambda, and Zego's second posting (§9.8); all tables and test statistics reconciled to this current corpus.
**Dataset:** 340 analytics-engineering/BI/team-lead job descriptions from `data/` (April–July 2026; primarily European, Berlin-heavy, with UK, DACH, Nordics, and a 43-role APAC stratum large enough to compare directly against the European majority; see §3, §9.5). 373 records total in the corpus including 27 data-engineering and 6 other roles excluded from the analytical cohort; see §3.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "[State of Analytics Engineering](https://www.getdbt.com/resources/state-of-analytics-engineering-2026)" reports, 2023–2026 (2026 edition linked) — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

---

## 1. What this document is

This is a structured analysis of 340 analytics engineering, BI, and team-lead job postings collected during a job search in 2026, primarily European with a substantial APAC stratum (§3, §9.5). The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 340 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±4.8pp at 95% (Wilson interval) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration is still primarily European/Berlin, but the APAC stratum (n=43) remains large enough to test directly against the European majority rather than merely disclaim — see §9.5 for what that comparison shows and its own, tighter limits. Generalisation to North America remains untested. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Mid-corpus expansions (July 13, 2026: +9 JDs; July 16, 2026: +12 JDs; July 17, 2026: +13 JDs; July 21, 2026: +21 JDs; July 22–24, 2026: +55 JDs; July 26–29, 2026: +38 JDs; July 30, 2026: +11 JDs to the analytical cohort, §9.8) added new roles without statistical re-weighting, so updated findings through that point reflected raw inclusion in the analytical cohort. The 2026-07-25 dedup removed 37 duplicate records across two passes rather than adding new ones (§3, §9.6) — this tightened the corpus rather than diluting it. Every relationship in this document is re-tested at each corpus update, and significance is not treated as permanent: this revision (n=340) finds `velocity_vs_rigour × has_dbt` (§4.0's Prediction 1 comparator), `domain_risk × greenfield_vs_fix` (previously Finding B), and `stakeholder_orientation × autonomy_level` (previously Finding E) still do not clear p<0.05 — each restated below as a current null or directional read. `geo_region (APAC) × jd_authorship` (previously part of Finding G), which had drifted just above the threshold at n=329, is back below p<0.05 at this n and is restated as a current finding, not a reinstated one. `data_team_maturity × work_arrangement` on the stated-arrangement subset, promoted into the findings at the last update, remains significant and if anything strengthens further at this n.

---

## 2. The dbt Labs survey — claims and constraints

The dbt Labs "[State of Analytics Engineering](https://www.getdbt.com/resources/state-of-analytics-engineering-2026)" reports (2023–2026) are the most influential annual survey of the analytics engineering profession. Key stated findings by year:

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

**373 job descriptions** collected April–July 2026 across `data/`, deduplicated 2026-07-25 in two passes (§9.6). Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 329 | Yes — primary cohort |
| team_lead | 11 | Yes — governance-signalling stratum |
| data_engineering | 27 | No — excluded, different discourse population |
| other | 6 | No — excluded |

**Analytical cohort: 340 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily European (UK/remote 14%, Benelux 11%, Berlin 9%, Iberia 9%, Nordics 8%, France 7%), but APAC is now the second-largest single bucket at **43 roles (13% of the analytical cohort)** — large enough to compare directly against the European majority rather than merely disclaim as a blind spot (§9.5). The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim. See §9.5 for a worked APAC-vs-Europe comparison.

**2026-07-13 expansion:** Nine new JDs added mid-corpus (airSlate, EPAM, KTM AG, Bose, Resourcery Group, TapTap Send, TeamViewer, woom, Funding Circle) representing high-risk (5) and moderate-risk (4) roles. Early-stage (2) and mature (2) organisations represented alongside mid-stage (5). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution.

**2026-07-16 expansion:** Twelve new JDs added (Doodle, Adaptive HVM, Top Doctors Group, Qargo, Orange, Fortnox, Amaris Consulting, bTV Media Group, TDA, Oscar, MoonPay, TRIA) representing moderate-risk (7), high-risk (3), low-risk (2) roles. Mid-stage (8) and mature (3) organisations represented alongside early-stage (1). Seniority mix: mid (9), senior (3). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution. Corpus now at 260 total records, 240 in analytical cohort.

**2026-07-17 expansion:** Thirteen new JDs added (Booking Holdings Romania, Electra, Fruition Group Ireland, Jobster, Lendable ×2, Mollie, Monzo, Niji, Paddle, Rebtel, Reeeliance, Skiils). This batch also completed the `work_arrangement` field across the corpus, enabling the chi-square sweep in Finding H (§4.9) — work arrangement is driven almost entirely by geography, with a weak, secondary maturity effect (mature teams skew more hybrid than early-stage teams).

**2026-07-21 expansion:** Twenty-one new JDs added (2026-07-19: Engelska Skolan, Gerolsteiner, Scopely, Storytel; 2026-07-21: Avalanche Studios, Bravida, Currys, Decathlon Digital, Eunice Energy, EVA Esports, Finavia, IDW, ilionx, Kaizen Gaming, LEGO Group [team lead], Moérie Beauty, PRO PLUS [team lead], Relay Technologies, Wave Group, Witteveen+Bos, Xebia), representing moderate-risk (10), low-risk (8), and high-risk (3) roles — a notably higher low-risk share than prior batches (gaming/esports and consumer-education postings). Mid-stage (12) and mature (7) organisations dominate, with early-stage (2) again a minority. Two roles (LEGO Group, PRO PLUS) are `team_lead`. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 294 total records, 272 in analytical cohort. This batch also prompted a fix to a long-standing data-pipeline bug that had silently dropped `ai_role`, `testing_framing`, and `loss_aversion_framing` from JSON records for a large stretch of the corpus — all three dimensions are now coded on the full analytical cohort (n=272, up from a stuck n=86); see §9.3 for the full account and §4.10–4.12 for the updated findings.

**2026-07-22 to 2026-07-24 expansion:** Fifty-five new AE/BI JDs added, the largest single expansion yet and the first with a deliberate APAC scraping pass (36 of the 55 new cohort roles are APAC — Singapore, Australia, India, Vietnam, Malaysia, the Philippines, Japan, South Korea, Hong Kong, Thailand, China, New Zealand; the remainder mostly UK/remote). Domain-risk mix (moderate 40, high 13, low 2) and maturity mix (mid 28, mature 17, early 10) both sit close to the pre-existing corpus distribution — this batch reinforces rather than shifts the headline findings in §4.1–4.8. Seniority skews senior (27) and mid (24), consistent with the rest of the corpus. No `team_lead` roles in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 362 total records, 327 in analytical cohort, before the 2026-07-25 dedup below. A gap in `scripts/geo_classify.py` was found and fixed during this batch's regeneration — one AU listing ("AU - HQ - NSW", state-abbreviated with no city name) was falling through to `other` instead of `apac`; the classifier now also matches `nsw`, `victoria,`, `queensland`, and `docklands`.

**2026-07-25 deduplication (pass 1):** An audit found the corpus had accumulated 36 duplicate records — the same live job posting re-scraped on a later date, under a different tracking query string, via a different job-board mirror, or (in one case) under a different company label entirely (a staffing agency's listing of a client's own posting). A company+role text match alone missed most of these and would also have wrongly merged genuinely distinct postings that happen to share a title (e.g. the same role open in two different cities, with different job IDs) — the dedup instead matched on normalized job-posting URL (netloc + path + non-tracking query params, or a shared ≥6-digit job ID embedded in the URL path), verified against location/salary metadata before removal. Where a cluster had multiple scrapes of the same posting, the fullest-content archive was kept, not simply the earliest. Corpus dropped from 362→326 total, 327→292 analytical cohort.

**2026-07-25 deduplication (pass 2):** A follow-up audit of the responsibility-bullet extraction output (comparing bullet-list content directly, not just source URL) surfaced one further duplicate the pass-1 method missed: `2026-07-17_mollie_analytics-engineer-ii-revenue-operations`, byte-near-identical JD text to `2026-06-27_mollie_analytics-engineer-revenue-operations` but listed under a different Ashby UUID, so it never shared a normalized URL with its match. Removed, keeping the earlier-dated record. Corpus dropped from 326→325 total, 292→291 analytical cohort. This second, smaller pass is what flipped `velocity_vs_rigour × has_dbt` (§4.0) back above the significance threshold after pass 1 had pushed it below — see §9.6 for the full account and §4.0/§4.9 for exactly which relationships each pass affected. `scripts/check_duplicate_jd.py` (URL-based, pass 1's method) now runs as a mandatory step in `.claude/skills/classify-jd/SKILL.md` before any new JD is written; it would not have caught the pass-2 case on its own, since that duplicate never shared a URL — content-similarity is a weaker, noisier signal and was applied manually rather than automated.

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=340): χ²=20.14, p=0.0005, V=0.17 — stable, essentially identical to the n=329 reading (p=0.0006, V=0.17). χ² for `velocity_vs_rigour` × `has_dbt` (n=329): χ²=2.24, p=0.326, V=0.08 — **still not significant, and the effect has weakened further.** The point estimate has narrowed again (rigour rate 67% for `has_dbt=False` vs. 73% for `has_dbt=True`, a 6pp gap, down from the 8pp read at n=318), and the effect size itself dropped (V=0.08, was 0.10, now below even the small-effect floor used elsewhere in this document). The relationship sat close to the conventional threshold across several snapshots (crossing it in both directions through the 2026-07-25 dedup passes) before settling into null territory at n=318; the current expansion moved it further still. Read this as the comparator relationship continuing to show no detectable link between rigour framing and tool adoption — not as `domain_risk` weakening; `domain_risk`'s own association with rigour is essentially unchanged. With the `has_dbt` comparator null and `domain_risk` still real, Prediction 1's core claim ("rigour is not detectably *more* tied to real risk than to vendor-adoption signal") continues to have a small, real `domain_risk` effect and no detectable `has_dbt` effect to point to: rigour framing tracks real organisational stakes, not tool adoption, at this corpus size. High-risk roles remain markedly more rigour-dominant (88% vs. 58–66% for low/moderate — §4.2), a real gradient, stable across every snapshot from n≤240 onward.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role` is coded across the full analytical cohort (n=340 — see §9.3 for the pipeline-bug history). `ai_role = none` is 67% of the cohort (essentially flat against every prior snapshot) — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=340): χ²=11.21, p=0.19, V=0.13 — **remains not significant**, consistent with every prior reading. `ai_enabler` (67 of 340, 20%) still concentrates somewhat in `internal_data` (54%) and `mixed` (22%) stakeholder orientation versus `ai_user` (44, 13%) which spreads more toward `commercial`/`finance` (11%/11%), and the association's weakness is stable rather than still trending toward zero. **Prediction 2's second half (non-random concentration) continues to not hold at conventional significance; the first half (large adoption-claim/hiring-criterion gap) still holds — `none` is 67% of hiring criteria against the survey's 72% daily-use claim.**

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result reported honestly as it changes — including when a corpus expansion moves an earlier reading, as happened here. Prediction 1's `domain_risk` comparator has held significant at essentially the same effect size from n=272 through the current n=340; its `has_dbt` comparator, which had already settled into null territory by n=318, is even more clearly non-significant at n=329 (p=0.326, V=0.08, both weaker than the n=318 reading) — the current expansion moved it further from the threshold rather than back across it. Prediction 2 flipped a different direction earlier on: a marginal, medium-effect result at a small, biased coded subset (n=86) gave way to a clear non-result once the same three dimensions were coded across the full cohort, and that non-result has held at every subsequent n including n=340. These trajectories are instructive about statistical power and sample composition rather than embarrassing reversals to paper over — this is the fix for Appendix B's "six theories, none tested" critique — not a stronger claim than the data supports, but an honest, and honestly-updated, one.

---

## 4. Findings

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=340) |
|--------------------|---|---|
| rigour | 240 | 71% |
| mixed | 94 | 28% |
| velocity | 6 | 2% |

**71% of JDs in the analytical cohort signal a rigour orientation**, unchanged from the 71% reading at n=329 — the flattest single-update reading yet, since this batch's 11 new cohort records were not disproportionately rigour- or velocity-skewed. Pure velocity holds flat at 2% (6 JDs across 340). This remains the clearest single-dimension finding in the dataset — the percentage has drifted down across most expansions (80% → 75% → 75% → 72% → 73% → 71% → 71%) as the corpus has diversified into more low-risk, gaming/consumer, and now AI-forward roles (§3), but the band has stayed narrow (71-73%) since n=272, including the first sizeable non-European stratum. Per §4.2, rigour framing shows a small but statistically real gradient with domain risk; per §4.0, its gradient with tool adoption (`has_dbt`) continues to show no detectable effect at this n — an institutionalised norm that still responds modestly to real stakes, but not detectably to tool adoption.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for risk but no longer a detectable one for tooling.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=340) |
|-------------|---|---|
| moderate | 229 | 67% |
| high | 85 | 25% |
| low | 26 | 8% |

**Cross-tab with velocity_vs_rigour:**

| domain_risk | rigour | mixed | velocity | n |
|-------------|--------|-------|----------|---|
| high | 88% | 9% | 2% | 85 |
| low | 58% | 38% | 4% | 26 |
| moderate | 66% | 33% | 1% | 229 |

χ²=20.14, p=0.0005, V=0.17 (n=340 — stable, essentially identical to the n=329 reading of p=0.0006, V=0.17). **High-risk roles remain detectably more rigour-dominant (88%) than moderate or low-risk roles (58–66%),** and the relationship has held through every expansion and both dedup passes essentially unchanged in effect size. This confirms §4.0 Prediction 1's interpretation: with the `has_dbt` comparator continuing to test null (§4.0), this remains the more clearly real of the two originally-compared associations. The effect size (V=0.17) stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is close to universal everywhere (58%+ in every risk tier) but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=340) |
|--------------------|---|---|
| mid | 202 | 59% |
| mature | 85 | 25% |
| early | 53 | 16% |

**Just under two-thirds of roles are mid-stage.** Early-stage roles hold at 16%; genuinely mature organisations are 25% — both close to the n=329 snapshot (15%/26%), with the current batch's slightly early-skewed composition (§9.8) nudging the early share up a point rather than down. APAC's own maturity mix (§9.5) continues to track the corpus average closely.

**Maturity × greenfield_vs_fix cross-tab** (χ²=185.57, p<0.0001, V=0.52, n=340 — the strongest relationship in the dataset, and stable across every expansion and dedup pass):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 9% | 77% | 13% | 53 |
| mid | 38% | 4% | 58% | 202 |
| mature | 54% | 5% | 41% | 85 |

Greenfield work concentrates sharply at early-stage (77%) and is nearly absent at mature (5%). This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, with the effect size unchanged at V=0.52.

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 13% | 21% | 66% | 53 |
| mid | 36% | 38% | 26% | 202 |
| mature | 31% | 39% | 31% | 85 |

χ²=31.73, p<0.0001, V=0.22 (n=340, essentially unchanged from n=329's V=0.21). Early-stage roles offer strategic autonomy at 66% — still far above mid- or mature-stage roles (26% and 31%), back up from n=329's 62% and closer to the n=291 reading of 66%. Mid-stage remains the least strategic tier despite being the largest market segment. The core pattern — greenfield work and direction-setting cluster at early-stage companies — holds.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=340) |
|-------------------------|---|---|
| internal_data | 172 | 51% |
| mixed | 61 | 18% |
| commercial | 43 | 13% |
| finance | 37 | 11% |
| product | 27 | 8% |

**51% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market, unchanged from the n=329 reading (51%) — the decline that ran through earlier snapshots (60%→55%→51%→54%→52%→51%) has clearly stabilised in the 51-54% band. APAC's own stakeholder mix isn't a standout finding — see §9.5.

**Cross-tab with rigour** (χ²=52.43, p<0.0001, V=0.28, n=340):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 8% | 92% | 0% | 37 |
| internal_data | 16% | 83% | 2% | 172 |
| product | 41% | 56% | 4% | 27 |
| commercial | 49% | 49% | 2% | 43 |
| mixed | 52% | 46% | 2% | 61 |

Finance and internal_data roles remain the most rigour-dominant (83–92%); commercial and product roles are close to evenly split between rigour and mixed framing. This relationship remains clearly significant at n=340 (V=0.28, essentially unchanged from n=329) — still the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=340) |
|----------------|---|---|
| mixed | 121 | 36% |
| strategic | 113 | 33% |
| execution | 106 | 31% |

The three-way split persists, and `mixed` continues to edge narrowly ahead of `strategic` (36% vs. 33%, the same 3pp gap as at n=329). Given that both a 1pp gap at n=291 and this gap at prior snapshots have been shown to sit well within the range this corpus size produces, the stable 3pp reading is not evidence of a trend toward `mixed` overtaking `strategic` — just where the current n happens to land. This even distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=69.40, p<0.0001, V=0.32, n=340):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 77% | 23% | 0% | 13 |
| mid | 39% | 43% | 18% | 171 |
| senior | 23% | 29% | 49% | 133 |
| lead | 0% | 42% | 58% | 12 |
| manager | 0% | 20% | 80% | 5 |
| staff | 0% | 0% | 100% | 6 |

The relationship remains statistically real (p<0.0001, effect size essentially unchanged at V=0.32) and the practical read is stable: **"Mid" remains the single largest title cohort (n=171) but "Senior" (n=133) remains the more informative one, splitting 23/29/49 across execution/mixed/strategic — solidly more strategic-leaning than the corpus-wide split, and consistent with the n=329 reading (23/29/48).** A "Senior Analytics Engineer" title continues to be a meaningfully positive predictor of strategic scope, though it remains far from deterministic (roughly a quarter of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (58–100%), but remain small cells. The practical implication for interviews is unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title is informative but still leaves real uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly 70% of the corpus; the APAC gap is back below the significance threshold

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=340) |
|---------------|---|---|
| hiring_manager | 238 | 70% |
| mixed | 71 | 21% |
| recruiter | 31 | 9% |

**Hiring-manager-authored JDs are 70% of the corpus**, essentially unchanged from 69% at n=329. **The APAC gap is back below p<0.05 at this n:** APAC roles are 86% hiring_manager-authored vs. 68% for the rest of the corpus (χ²=6.32, p=0.042, V=0.14, n=340 — up from χ²=5.92, p=0.052, V=0.13 at n=329; see §9.5). This batch's six new APAC records (§9.8) are 5 hiring_manager / 1 mixed, none recruiter, which pulled the APAC hiring-manager share back toward its earlier, larger gap against the rest of the corpus. This dimension remains the lowest in LLM self-consistency (0.58) — a codebook-ambiguity signal — so this finding should be read as "a real, currently-significant gap," carrying that caveat, not as a newly-confirmed claim independent of it; the relationship has crossed the conventional threshold in both directions across the last two snapshots, which is itself informative about how close to the boundary it sits.

**Cross-tab with rigour** (χ²=6.13, p=0.190, V=0.10, n=340): hiring_manager 74% rigour / 24% mixed / 1% velocity; mixed 63% rigour / 34% mixed / 3% velocity; recruiter 58% rigour / 39% mixed / 3% velocity. Still not significant at conventional thresholds — unlike domain_risk (§4.2), authorship sophistication continues to show no detectable relationship with rigour framing.

**Cross-tab with has_dbt** (χ²=19.03, p<0.0001, V=0.24, n=329, AE/BI only):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 28% | 72% | 230 |
| mixed | 46% | 54% | 69 |
| recruiter | 63% | 37% | 30 |

Hiring-manager-authored JDs name dbt at roughly 2× the rate of recruiter-authored ones (72% vs. 37%), essentially unchanged from the n=329 reading (71% vs. 37%) — the relationship is stable and the effect size held (V=0.24). Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.58 | 85 |
| mid | 2.36 | 202 |
| early | 2.34 | 53 |

The earlier draft's finding — mature teams have the widest named-stakeholder count — is directionally intact (2.58 vs. 2.36 vs. 2.34), and the spread has narrowed slightly since n=329 (2.60/2.32/2.22) as the current batch's early-stage additions pulled that tier's mean up toward mid — the ordering hasn't changed at any snapshot, but the gap between mature and early still hasn't reached a magnitude worth treating as reliable given this dimension's known noise (§9.1's evidence-quote pass-rate problem). **This dimension still does not currently support a confident finding.** It is retained in the codebook for future corpus growth, but no claim built on it should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **65% of AE/BI roles (n=329) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last several snapshots (68%→66%→65%→65%→66%→65%→64%→65%), including through both dedup passes and the current expansion — dbt prevalence (65%, n=43 APAC AE/BI) has converged exactly onto the corpus average this snapshot, up from 59% at n=329 (§9.5). This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: roughly one in three roles don't name dbt at all, stable across eight consecutive corpus snapshots.

---

## 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=340, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.17 — essentially the same as the n=329 threshold, since this update added only 11 cohort records. Findings below the current threshold are still directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.38, n=340)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=85) | 6% | 39% | 41% | 12% | 2% |
| low (n=26) | 4% | 0% | 73% | 15% | 8% |
| moderate (n=229) | 16% | 2% | 52% | 21% | 10% |

High-risk roles concentrate heavily in finance (39%, vs. 0% of low-risk and 2% of moderate-risk roles), essentially unchanged since n=329 — still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3), with the effect size essentially stable (V=0.38, was 0.39). Product-facing roles remain rare in high-risk contexts (2%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (73%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: domain risk and mission type — a tested null (χ², p=0.194, V=0.09, n=340)

| domain_risk | fix_scale | greenfield | mixed |
|-------------|-----------|-----------|-------|
| high (n=85) | 42% | 16% | 41% |
| low (n=26) | 54% | 15% | 31% |
| moderate (n=229) | 34% | 16% | 51% |

Moderate-risk roles still look the most "mixed" (incremental extension of an existing stack, 51%) and high/low-risk roles still lean somewhat more toward fix_scale (42%, 54%) than moderate-risk roles (34%) — the direction is the same as prior snapshots, and the test remains well short of p<0.05 at this n (V=0.09, below the small-effect floor used elsewhere in this document). This relationship has moved across the threshold in both directions across recent snapshots (p=0.040 pre-dedup → p=0.017 post-dedup → p=0.134 at n=329 → p=0.194 at the current n) — read that trajectory as a small, marginal effect that this corpus size can't reliably detect either way, not as evidence the underlying pattern has changed. Kept here as a documented test, not as a claimed finding.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.52, n=340)

Full cross-tab in §4.3. Greenfield work is 77% of early-stage roles and 5% of mature-team roles — the sharpest, most reliable relationship in the corpus, holding at V=0.52, unchanged from n=329.

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (45%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.32, n=340)

Full cross-tab in §4.5. "Mid" (n=171) remains the largest title cohort by count, but "Senior" (n=133) remains the more informative title, spanning execution/mixed/strategic at 23/29/49 — noticeably more strategic-leaning than the corpus-wide split, and consistent with the n=329 reading (23/29/48). Staff, manager, and lead titles (n=6, n=5, n=12) predict strategic scope near-perfectly (58–100%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, now more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=340 "Senior" remains a meaningfully informative signal (49% strategic vs. an overall cohort rate of 33%), consistent with the n=329 reading (48% vs. 33%) — the signalling account continues to look less contradicted than the n=123 baseline suggested, though a quarter of senior roles remain pure execution, so the signal stays noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: stakeholder orientation and autonomy level — a tested null (χ², p=0.072, V=0.15, n=340)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| finance (n=37) | 43% | 27% | 30% |
| commercial (n=43) | 21% | 51% | 28% |
| mixed (n=61) | 30% | 39% | 31% |
| internal_data (n=172) | 33% | 35% | 33% |
| product (n=27) | 26% | 19% | 56% |

Finance-facing roles still look the most execution-concentrated segment (43%) and product-facing roles still look the most strategic (56%), the same direction as every prior snapshot, and the test remains just short of p<0.05 at this n (p=0.072, down from p=0.087 at n=329 — closer to the line, still on the null side). This relationship has now crossed the significance threshold four times across seven snapshots (significant at n=123, non-significant at n=272, significant from n=327 through n=291, non-significant at n=329 and n=340) — the clearest demonstration in this document that a small effect sitting close to the detection threshold will keep crossing it as n changes by double digits in either direction. Read the underlying pattern as a stable, small, directionally-consistent tendency that this corpus size cannot reliably confirm or reject — not as a relationship that comes and goes.

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.24, n=329)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 72% vs. 37% for recruiter-authored — still the clearest authorship-quality signal in the dataset, with the gap and effect size essentially stable against the n=329 reading (V=0.24). Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

**Geography's link to JD authorship is back below p<0.05 (χ², p=0.042, V=0.14, n=340):** APAC roles are 86% hiring-manager-authored vs. 68% for the rest of the corpus, up from χ²=5.92, p=0.052, V=0.13 at n=329 (§9.5). The current batch's six new APAC records (§9.8) are almost entirely hiring_manager-authored (5 of 6), which widened the gap back across the threshold after it had narrowed at the last snapshot. The direction has been consistent throughout and this remains one of the clearer geographic effects in the dataset, though its p-value has now crossed the conventional line in both directions across two consecutive updates (0.0008 at n=291 → 0.052 at n=329 → 0.042 at n=340) — a small effect sitting close to the detection boundary, not a settled one. Two readings remain plausible and the JD text alone can't distinguish them: APAC hiring managers may write JDs more directly (less recruiter/ATS-template mediation in this sample), or the `jd_authorship` codebook's technical-specificity heuristic may be picking up an ATS-formatting convention specific to how these postings were sourced (many via LinkedIn/company career pages with detailed bullet-point tool lists) rather than true authorship. Given `jd_authorship`'s already-low self-consistency (0.58, §3), this finding should be read as a real, currently-significant pattern that has moved across the threshold before and could again, not as a settled claim about who actually writes APAC job postings.

---

### Finding H: Work arrangement — driven almost entirely by geography, with a maturity effect and an APAC disclosure signature that both now clear significance (n=373 total / 340 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 37% of the analytical cohort) against all other categorical and boolean dimensions found essentially one dominant driver: **where the job is**. `geo_region` remains by far the strongest association (χ²=113.41, p<0.0001, V=0.51, n=214 stated — direction and magnitude consistent with earlier snapshots) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region (Berlin, Iberia, Benelux, Nordics, France). This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test remains statistically unreliable at the sparse-cell level given 14 regions × 3-4 arrangement categories. Treat the direction as real, the p-value as decorative.

**APAC's own signature now clears p<0.05 for the first time, on both cuts of the question.** Of the 43 APAC roles, 44% state no work arrangement at all, vs. 36% for the rest of the corpus — directionally the same read as every prior snapshot, but the current batch's six new APAC records (§9.8, 3 not_stated of 6) also brought a new signal: APAC's *stated* arrangements now include a meaningfully higher onsite share (14% vs. 3% for the rest of the corpus) alongside a lower hybrid share (40% vs. 50%). Crossing the full four-category `work_arrangement` breakdown (hybrid/not_stated/onsite/remote) against APAC-vs-rest gives χ²=13.20, p=0.0042, V=0.20, n=340 — a small effect, but now on the significant side of the line for the first time, up from χ²=7.57, p=0.056, V=0.15 at n=329. Read this as APAC's work-arrangement profile (both what gets disclosed and, when disclosed, what it says) now measurably differing from the rest of the corpus, not just directionally suggestive of it. Among the 24 APAC roles that do state an arrangement, hybrid still dominates numerically (17 of 24) but the onsite share (6 of 24) is the largest of any region in the dataset.

**The `data_team_maturity` relationship, on the stated-arrangement subset, remains significant and strengthens: χ²=14.97, p=0.0048, V=0.19 (n=214 stated)** — a clearly tighter reading than the n=329 snapshot's χ²=10.28, p=0.036, V=0.16. Mature teams post hybrid most often (90% of stated arrangements) vs. 63% for early-stage teams, who split more evenly across hybrid/remote/onsite (63% / 17% / 20%); mid-stage sits between the two (76% / 19% / 5%). The direction is identical to every prior snapshot and matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs. This is now the second consecutive snapshot in which this relationship clears p<0.05, and the effect size has grown rather than merely held, which is a stronger signal than a single threshold-crossing would be on its own. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**`autonomy_level` × `work_arrangement` remains marginally significant: χ²=11.20, p=0.024, V=0.16 (n=214 stated)** — slightly stronger than the n=329 reading (p=0.041, V=0.16). Hybrid roles split 27%/42%/32% execution/mixed/strategic; onsite roles skew toward execution and away from strategic (much smaller cell, n=14); remote roles remain the most strategic-leaning group. The effect size still sits right at the small-effect floor (V=0.16) — worth treating as a small, currently-real relationship rather than a headline finding, and one to keep re-checking rather than build a large claim on.

**On the missing 37% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. Across maturity tiers it still does not concentrate strongly — mature (40%), mid (37%), and early-stage (34%) withhold a policy at close to the same rate, essentially unchanged from earlier snapshots. Folding `not_stated` back in as a fourth category for the maturity test (rather than excluding it) now *also* crosses into significance: χ²=15.71, dof=6, p=0.015, V=0.15, n=340 — up from χ²=10.94, p=0.090, V=0.13 at n=329. This is a different question than the stated-only test above ("does maturity predict whether an arrangement is stated at all," answer now: modestly, yes) and both readings are legitimate; the two tests moving into agreement at this n is a stronger overall maturity-arrangement story than either reading alone gave at the last snapshot. "Does geography predict whether an arrangement is stated at all" is now also confirmed at conventional thresholds for APAC (above) — and the dashboard panel shows the maturity views.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `greenfield_vs_fix`, `ai_role`, `testing_framing`, `loss_aversion_framing`, and `stakeholder_orientation` (all p>0.20). `ats_platform` came close in earlier snapshots but has the worst sparse-cell problem of any test run and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 37% of the analytical cohort states no work arrangement at all, and that rate is not uniform by region — APAC's 44% not-stated rate (above), combined with its distinct stated-arrangement mix (more onsite, less hybrid), is now a confirmed, not merely directional, difference at this n. Whether it reflects different posting conventions (many APAC postings were sourced via LinkedIn/company career pages that omit a work-arrangement field entirely, or via channels more likely to post explicitly onsite roles) or genuine underlying differences in how APAC employers set policy is not resolvable from JD text alone.

---

### Finding I: With `ai_role`, `testing_framing`, and `loss_aversion_framing` coded on the full cohort (n=340; §9.3), a systematic sweep against every other categorical dimension and tool flag surfaces several relationships, all stable at the current n

**Testing accountability tracks the fear register closely (χ²=83.09, p<0.0001, V=0.35, n=340):**

| testing_framing | high | moderate | none |
|---|---|---|---|
| absent (n=81) | 10% | 33% | 57% |
| responsibility (n=211) | 27% | 64% | 9% |
| tool_listed (n=48) | 8% | 62% | 29% |

JDs that frame testing as an owned responsibility carry almost no `loss_aversion_framing = none` (9%, vs. 57% for `absent`-testing JDs) — essentially unchanged from prior snapshots. This is a construct-validity result as much as a substantive one: two dimensions coded independently, from different evidence quotes, land in the same place — a JD that asks the candidate to own data quality is, unsurprisingly, also a JD that is afraid of something going wrong. The `absent`/`none` corner (57%) is the "pure delivery" JD with no quality or risk register at all; the `responsibility`/`moderate` combination (64% of `responsibility`-coded JDs) is the modal case — quality ownership paired with garden-variety operational-reliability fear, not compliance framing.

**Loss aversion tracks rigour framing even more tightly than domain risk does (χ²=78.44, p<0.0001, V=0.34, n=340):**

| loss_aversion_framing | mixed | rigour | velocity |
|---|---|---|---|
| high (n=69) | 3% | 97% | 0% |
| moderate (n=193) | 22% | 76% | 2% |
| none (n=78) | 63% | 33% | 4% |

97% of `high`-loss-aversion JDs are rigour-framed, against 33% for JDs with no loss-aversion signal at all — essentially unchanged in magnitude from prior snapshots, and still a cleaner split than domain_risk's own relationship with rigour framing (§4.2, V=0.17). Read together with §4.2, this suggests `loss_aversion_framing` is picking up something closer to the JD's *actual* fear register than `domain_risk`'s sector-level proxy does — a JD can be sector-coded `moderate` risk but still carry `high` loss-aversion language if the role's specific responsibilities emphasise trust/audit framing (see Finding A's DiMaggio & Powell read, §4.9, for why sector and role-level framing can diverge).

**dbt-equipped roles are far more likely to frame testing as an owned responsibility (χ²=35.17, p<0.0001, V=0.33, n=329, AE/BI only):**

| testing_framing | has_dbt=False | has_dbt=True |
|---|---|---|
| absent (n=78) | 63% | 37% |
| responsibility (n=203) | 25% | 75% |
| tool_listed (n=48) | 33% | 67% |

This remains the strongest tool-stack relationship found for any of the three dimensions, essentially unchanged from prior snapshots, and it cuts against a purely fashion-driven reading of dbt adoption: `has_dbt` JDs are 75% likely to frame testing as an owned responsibility, vs. 37% for JDs with no dbt mention — dbt's testing framework (`dbt test`) appears to travel with genuine ownership language, not just as a name-drop.

**`ai_role` and autonomy move together in an unexpected direction — `ai_user` roles skew the most strategic of the three groups, not the least (χ²=32.08, p<0.0001, V=0.22, n=340):**

| ai_role | execution | mixed | strategic |
|---|---|---|---|
| ai_enabler (n=67) | 18% | 37% | 45% |
| ai_user (n=44) | 9% | 32% | 59% |
| none (n=229) | 39% | 36% | 25% |

The naive expectation might be that "use AI coding tools" is a junior-coded, execution-heavy ask (accelerate scoped work faster) while "build AI-consuming infrastructure" is the more strategic mandate. The data continues to show the opposite ordering, essentially unchanged from prior snapshots: `ai_user` JDs are the *most* strategic-leaning of the three groups (59%, only 9% pure execution), more so even than `ai_enabler` (45% strategic). One plausible read: JDs that expect AI-tool fluency are disproportionately senior/lead-level postings at companies confident enough in their engineering culture to name a specific workflow expectation ("use Claude Code/Copilot as part of your daily workflow") rather than a junior competency checkbox — the ask reads more like "operate at a higher level of leverage" than "be fast at typing." This is exploratory and not pre-registered (§4.0 only tested `ai_role × stakeholder_orientation`); it's flagged here as a candidate for a future prediction, not a confirmed causal story.

**`ai_role` also tracks `greenfield_vs_fix` (χ²=32.42, p<0.0001, V=0.22, n=340):**

| ai_role | fix_scale | greenfield | mixed |
|---|---|---|---|
| ai_enabler (n=67) | 21% | 33% | 46% |
| ai_user (n=44) | 20% | 23% | 57% |
| none (n=229) | 45% | 10% | 45% |

Both `ai_enabler` and `ai_user` roles show meaningfully more greenfield work (33%/23%) than `none` roles (10%) — consistent with prior snapshots, with the effect size essentially stable (V=0.21→0.22). This dovetails with the `ai_role × autonomy_level` finding above: greenfield work and strategic autonomy already travel together generally (§4.3), so some of the "AI roles skew strategic" pattern may be downstream of "AI roles skew greenfield" rather than a direct effect of the AI expectation itself. Disentangling the two would need a three-way cross-tab at a larger n than this corpus currently supports.

**Everything else involving the three new dimensions tested null or only weakly suggestive** (p>0.05 or V<0.15): no meaningful association between `ai_role`/`testing_framing`/`loss_aversion_framing` and `seniority`, `urgency`, or most individual BI-tool flags. `testing_framing × geo_region` remains a sparse-cell test (14 regions × 3 categories, several expected cells <1) and should be treated as decorative, not evidential, despite APAC's own testing_framing mix (65% responsibility, close to the corpus average of 62%; §9.5) not standing out as directionally interesting.

---

### Summary of relationships tested

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | 0.0005 | 0.17 | Stable at n=340 (was p=0.0006, V=0.17 at n=329) — small real effect, high-risk roles more rigour-dominant |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.326 | 0.08 | **Still not significant at n=329**, and weaker still (was p=0.177, V=0.10 at n=318) — point estimate narrowed further to a 6pp rigour-rate gap (was 8pp); this comparator settled into null territory at n=318 after crossing the threshold in both directions through the 2026-07-25 dedup passes, and has stayed there and weakened further since — see §4.0 |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.19 | 0.13 | Still not significant at n=340 (was p=0.225, V=0.13 at n=329) — stable non-result |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.38 | Strongest relationship: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.52 | Near-deterministic and stable: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.194 | 0.09 | **Still not significant at n=340** (was p=0.134, V=0.10 at n=329) — this relationship has crossed the threshold in both directions across recent snapshots (p=0.040→0.017→0.134→0.194); read as a marginal effect this corpus size can't reliably detect either way, not a reversal (§4.9 Finding B) |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.24 | Hiring-manager JDs name dbt ~1.9× more than recruiter JDs — stable |
| geo_region (APAC vs. rest) × jd_authorship | χ² | 0.042 | 0.14 | **Back below p<0.05 at n=340** (was p=0.052, V=0.13 at n=329) — direction unchanged (86% vs. 68% hiring-manager-authored); the current batch's new APAC records are almost entirely hiring-manager-authored, widening the gap back across the threshold; Finding G, §9.5 |
| geo_region (APAC vs. rest) × work_arrangement (4-category) | χ² | 0.0042 | 0.20 | **Newly significant at n=340** (was p=0.056, V=0.15 at n=329) — APAC's not-stated rate (44% vs. 36%) and its stated-arrangement mix (more onsite, less hybrid) both now measurably differ from the rest of the corpus; Finding H, §9.5 |
| seniority × autonomy_level | χ² | <0.0001 | 0.32 | Significant overall; "Senior" (n=133, still not the modal title by count — "Mid" is, at n=171) still predicts strongly (49% strategic) |
| stakeholder_orientation × autonomy_level | χ² | 0.072 | 0.15 | **Still not significant at n=340** (was p=0.087, V=0.15 at n=329) — this relationship has now crossed the threshold four times across seven snapshots; read as a stable, small, directionally-consistent effect this corpus size can't reliably confirm (§4.9 Finding E) |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.28 | Finance/internal_data most rigour-dominant; commercial/product carry the most mixed framing |
| collaboration_width × data_team_maturity | — | — | — | Still does not support a claim at n=340 (§4.7) |
| work_arrangement × geo_region (stated subset) | χ² | <0.0001 | 0.51 | Strongest association found, but unreliable — most cells <5 (Finding H) |
| work_arrangement × data_team_maturity (stated subset) | χ² | 0.0048 | 0.19 | **Still significant at n=340, and strengthening** (was p=0.036, V=0.16 at n=329) — same direction as every prior snapshot (mature teams skew hybrid); second consecutive snapshot clearing the threshold (Finding H) |
| work_arrangement × autonomy_level (stated subset) | χ² | 0.024 | 0.16 | **Still marginally significant** (was p=0.041, V=0.16 at n=329) — remote roles skew somewhat more strategic than hybrid on the stated subset, effect sits right at the small-effect floor (Finding H) |
| work_arrangement × everything else (tool stack, seniority, rigour, domain risk) | χ² | >0.20 | ≤0.13 | Null — unrelated to arrangement |
| loss_aversion_framing × domain_risk | χ² | <0.0001 | 0.41 | 72% of high-loss-aversion JDs are high-domain-risk (equivalently: 59% of high-domain-risk roles carry high loss-aversion framing) (Finding I) |
| testing_framing × loss_aversion_framing | χ² | <0.0001 | 0.35 | Quality-ownership and fear-register track each other closely (Finding I) |
| loss_aversion_framing × velocity_vs_rigour | χ² | <0.0001 | 0.34 | Cleaner than domain_risk's own link to rigour — 97% of high-loss-aversion JDs are rigour-framed (Finding I) |
| testing_framing × has_dbt | χ² | <0.0001 | 0.33 | dbt JDs 75% likely to frame testing as owned responsibility vs. 37% without dbt (Finding I) |
| testing_framing × jd_authorship | χ² | <0.0001 | 0.27 | Hiring-manager JDs skew toward `responsibility`/`tool_listed`, recruiter JDs toward `absent` (Finding I) |
| ai_role × autonomy_level | χ² | <0.0001 | 0.22 | Unexpected direction, stable: `ai_user` roles are the most strategic-leaning of the three groups, not the least (Finding I) |
| ai_role × greenfield_vs_fix | χ² | <0.0001 | 0.22 | `ai_enabler`/`ai_user` roles carry meaningfully more greenfield work than `none` roles (Finding I) |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language narrows once fully coded, but stays real

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. **Coded on the full analytical cohort (n=340)** — a bug in `scripts/write_jd.py` had silently dropped this field (and `testing_framing`, `loss_aversion_framing`) from JSON output for a long stretch of the corpus even when correctly classified; the backlog was fully re-coded against the JD archive text and the codebook (§9.3).

| ai_role | n | % (n=340) |
|---------|---|---|
| none | 229 | 67% |
| ai_enabler | 67 | 20% |
| ai_user | 44 | 13% |

This is Prediction 2 from §4.0. **67% of JDs expect no AI skill from the candidate**, essentially flat against the n=329 reading (68%), against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. The gap between claimed personal-workflow adoption and formal hiring criteria has held steady. χ² for `ai_role` × `stakeholder_orientation` (n=340) remains non-significant (p=0.19, V=0.13; §4.0) — the `ai_enabler` cohort still leans toward `internal_data` (54%) and `mixed` (22%) stakeholder orientation, and `ai_user` leans more evenly toward `commercial`/`finance` (11%/11%), and the association's weakness is stable rather than still trending toward zero as it was at earlier snapshots.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption. `ai_user` roles → demonstrate fluency with AI coding tools directly (Copilot, Claude Code, Cursor) as a nontrivial minority expectation. `none` (still the majority at 67%) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

`ai_role` continues to track `autonomy_level` (χ²=32.08, p<0.0001, V=0.22) and `greenfield_vs_fix` (χ²=32.42, p<0.0001, V=0.22) at n=340 — see Finding I (§4.9) for the counter-intuitive direction (`ai_user` roles skew *more* strategic and *more* greenfield, not less). Both relationships are stable in direction against the n=329 reading, with both effect sizes essentially unchanged.

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. **Coded on the full analytical cohort (n=340)** — see §9.3 for the write-pipeline bug that delayed this.

| testing_framing | n | % (n=340) |
|-----------------|---|---|
| responsibility | 211 | 62% |
| absent | 81 | 24% |
| tool_listed | 48 | 14% |

**62% of JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language, unchanged from 62% at n=329. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former. `testing_framing × velocity_vs_rigour` is significant (χ²=41.87, p<0.0001, V=0.25, n=340): `responsibility`-coded JDs are 82% rigour-framed vs. 49% for `absent`-coded JDs — testing ownership and rigour framing move together but are not the same signal, since a substantial share of the cohort is rigour-framed with no testing-ownership language at all.

The 24% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

`testing_framing`'s strongest tool-stack link (`has_dbt`, χ²=35.17, p<0.0001, V=0.33) and its link to `jd_authorship` (χ²=49.89, p<0.0001, V=0.27) and `loss_aversion_framing` (χ²=83.09, p<0.0001, V=0.35) all hold stable at n=340 — see Finding I (§4.9) for detail. APAC roles now run somewhat above the corpus average on `responsibility` framing (65% vs. 62% for the rest of the corpus) — a small gap that has re-opened slightly since the n=329 snapshot, where APAC and the rest of the corpus were identical at 62%; §9.5.

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. **Coded on the full analytical cohort (n=340)** — see §9.3.

| loss_aversion_framing | n | % (n=340) |
|-----------------------|---|---|
| moderate | 193 | 57% |
| none | 78 | 23% |
| high | 69 | 20% |

Roughly three in four JDs carry some fear signal, but it's still predominantly operational (57%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing sits at 20%, unchanged from n=329. `loss_aversion_framing × domain_risk` is the strongest relationship among these three dimensions (χ²=111.67, p<0.0001, V=0.41, n=340, essentially unchanged from n=329): of JDs with `high` loss-aversion framing, 72% are `high`-domain-risk, vs. 16% of `moderate`-risk and 0% of `low`-risk roles carrying `high` framing — the fear register tracks real domain stakes closely, which is reassuring for the codebook's construct validity on this dimension. `high` loss-aversion framing remains concentrated in finance-adjacent and regulated-sector roles; APAC's own `high` rate (14%) remains below the corpus average this snapshot, up slightly from 11% at n=329 (§9.5).

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

### 4.13 What the responsibility text itself predicts — a second, independent classification pass

Everything above classifies each JD as a whole against the ten Layer B dimensions. A separate pipeline (`analysis/responsibility_taxonomy.py`) takes a different cut of the same corpus: it parses just the responsibilities section of each JD (markdown headings, plain-text scrapes, condensed paragraph summaries, or — for JDs with no cleanly-parseable structure — an LLM-interpreted fallback, see `responsibility_bullets_llm.json`) into individual bullets, then keyword-classifies each bullet against a fixed 15-theme taxonomy (Data Modeling & Transformation, Stakeholder Collaboration, Mentorship & Leadership, and so on — full definitions and the keyword pattern behind each theme are in `analysis/responsibility_taxonomy.md`). 342 of the 373 total JDs (312 of the 340 analytical-cohort JDs) have a theme reading, extracting 2,365 bullets. Because each theme is a binary per-JD indicator, it can be crossed against any Layer B dimension as an ordinary 2×k contingency table — the question this section asks is which *specific responsibilities* go with which *behavioural traits*, not just which traits co-occur with each other (§4.9).

The most prevalent themes are Stakeholder Collaboration & Requirements (80% of parsed JDs), Data Quality & Testing (69%), BI & Reporting/Dashboards (68%), Data Modeling & Transformation (63%), and Architecture & Platform Strategy (61%) — essentially unchanged in ranking from the n=306 snapshot.

**The auto-correlation risk, and how it's handled.** Several theme/dimension pairs are excluded from the findings below because they're circular, not because they're weak — the theme's regex keywords and the dimension's own LLM coding rubric detect the same textual signal. The single strongest pairing in the entire sweep, "Data Quality & Testing" vs. `testing_framing` (V=0.51), is excluded on exactly this basis: `testing_framing` is coded by looking for testing/quality language in the JD, so crossing it against a theme built from testing/quality keywords mostly measures whether two classification methods agree with each other. The same logic excludes "Security, Privacy & Risk" vs. `domain_risk`/`loss_aversion_framing`, "Data Ownership" vs. `autonomy_level` (whose own rubric lists "own" as a strategic-verb signal), and any theme against a tech-stack flag whose tool name is literally embedded in that theme's regex (dbt, Looker, Tableau, Power BI, Snowflake, Databricks, Airflow). See `OVERLAP_PAIRS` in `responsibility_taxonomy.py` for the full list.

**Three relationships survived that screen at p<0.01 with no keyword overlap and a reasonable effect size, and are reported here — with different levels of confidence:**

1. **Mentorship & Leadership × `autonomy_level` (χ²=25.38, p<0.0001, V=0.29, n=312) — the one relationship in this section that received an actual confounder check, and passed it.** Mentorship/leadership language climbs from 11% of execution-coded JDs to 25% mixed to 43% strategic. Because `autonomy_level` and seniority title are themselves correlated (§4.5), this could just be seniority in disguise — so it was re-tested within seniority strata specifically: **within "Mid" titles alone**, the gradient is 7%→22%→26% (execution→mixed→strategic); **within "Senior" titles alone**, it's 18%→27%→38%. The gradient survives in both strata, meaning `autonomy_level` predicts mentorship-scope on top of what the title already tells you, not instead of it.
2. **Data Infrastructure & Warehouse Ops × `jd_authorship` (χ²=18.49, p<0.0001, V=0.24, n=312) — clean-screen only, not independently confounder-checked.** Hiring-manager-authored JDs name warehouse/infrastructure responsibilities at 56% vs. 14% for recruiter-authored — a considerably wider gap than authorship's already-known link to whether dbt is merely named (§4.6, §4.9 Finding G). Directionally consistent with the revealed-preference logic elsewhere in this document (naming a platform's actual cost/governance responsibilities requires knowing the team's real infrastructure problem, not just its tool list), but this specific pairing has not been re-tested against a plausible confounder the way (1) was.
3. **Self-Service Enablement & Data Literacy × `data_team_maturity` (χ²=5.55, p=0.06, V=0.13, n=312) — clean-screen only, still doesn't clear p<0.01 at this n.** Self-service/data-literacy responsibilities appear in 38% of mature-team JDs vs. 19% of early-stage ones. The direction is unchanged from the n=306 reading, and the p-value is essentially unchanged (0.06→0.06) — this relationship has now sat just outside the p<0.01 screen for two consecutive updates, having previously crossed it (p=0.02 at n=288). Read as the weakest of the three, kept here because the direction is consistent and the underlying maturity→autonomy story (§4.3) it complements is well-established, but it should be read more cautiously than (1) and (2).

**A relationship that looked exactly as real as the three above, and didn't survive scrutiny — kept as a worked example, not dropped:** `Architecture & Platform Strategy × work_arrangement` clears the identical screen (χ²=11.86, p=0.008, V=0.20, n=312) and on its own reads as a headline — "remote roles carry less architectural scope" (71% hybrid vs. 58% remote). It does not survive a stratification check against `data_team_maturity`, a plausible confounder since maturity independently correlates with both work arrangement (mature teams skew hybrid, §4.9 Finding H) and this theme. Split by maturity tier, `remote` stops being consistently the lowest group — `not_stated` is consistently the lowest group in every tier instead, and several strata have single-digit cell counts for `remote`/`onsite`, which makes the unstratified comparison mostly noise. Full stratified breakdown in `responsibility_taxonomy.md`.

**Why this pairing was checked and the other two weren't, and what that means for reading them:** the architecture/work-arrangement check was run first, specifically because "remote work correlates with less architectural ownership" was the kind of clean, quotable claim that warranted scrutiny before being written up — and it failed. That's informative about the corpus generally: a p<0.01, no-keyword-overlap screen alone is not sufficient here, and relationship (2) above has only cleared that screen, not the stratification check that debunked this one; relationship (3) sits outside the screen entirely at this n. Treat (1) as confounder-checked, (2) as "survived the same filter a false lead also passed," and (3) as directional only.

**How this section could be wrong, more broadly:**

- **Multiple comparisons.** The full sweep tests all 15 themes against every coded dimension (285 pairs) with no Bonferroni or FDR correction. At p<0.01 across that many tests, some number of the "clean" pairs are expected false positives by chance alone — this is exactly the failure mode the debunked architecture pairing demonstrates directly, not hypothetically.
- **Post-hoc selection.** All three featured relationships were chosen *after* seeing effect sizes, then (in one case) checked — not pre-registered, unlike §4.0's two predictions. This is the "garden of forking paths" pattern this document otherwise tries to avoid (§4.0); it's disclosed rather than hidden here because the theme classification itself is a newer, more exploratory layer on top of the pre-registered Layer B analysis.
- **Two independent classification methods, two independent error rates.** Every relationship compounds the regex theme-classifier's error rate with whatever error rate the paired Layer B dimension's LLM coding carries — `jd_authorship` specifically has the lowest self-consistency of any dimension in the codebook (0.58, §3), so relationship (2) above should be read with that additional caveat.
- **Cross-sectional text, not causal evidence.** Every relationship here is a same-JD language co-occurrence, not a causal claim — "mentorship language correlates with strategic-autonomy language" says nothing about which drives which, or whether both are downstream of an uncoded third factor (company size, funding stage, sector) this corpus can't check.
- **The stratification checks are not exhaustive.** Surviving one plausible confounder (seniority, for relationship 1) doesn't rule out others not tested. Company size and sector are not coded dimensions in this corpus.
- **Significance is not permanent, and this update again shows the same pattern in the opposite direction from most of this document.** Relationship (3) above has now held flat at p=0.06 across two consecutive snapshots (n=306, n=312) after weakening from p=0.02 at n=288 — a small effect that has stabilised just outside, rather than continuing to drift from, the p<0.01 screen. That plateau is itself informative: not every marginal relationship keeps moving as n grows; some settle.

Full theme definitions, all 285 tested pairs, the complete construct-overlap table, and this same write-up regenerated fresh on every corpus update live in `analysis/responsibility_taxonomy.md` (`python3 analysis/responsibility_taxonomy.py` to reproduce).

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=340 analytical cohort) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 71% rigour-oriented; testing framing coded on full cohort (n=340, 62% responsibility framing) | Confirmed at the orientation level and at the testing-accountability level, essentially unchanged from n=329 |
| 72% use AI in coding workflows daily | 67% of JDs (n=340, full coverage) expect no AI skill; 13% name AI coding tools directly (`ai_user`) | Gap persists, essentially unchanged from the n=329 reading (68%/13%) — Prediction 2 (§4.0), first half still holds, second half (structural concentration) remains non-significant |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability (62% of n=340 full cohort); AI hiring signal ~33% (`ai_enabler`+`ai_user`) | The JD evidence still suggests governance accountability further institutionalised than AI hiring criteria, and the ratio has held stable |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 20% of n=340 full cohort; 57% report operational reliability concerns | Not confirmed — dominant fear is still operational reliability, not AI-trust hallucination; both figures unchanged from the n=329 reading |
| Rigour framing tracks risk/stakes | χ²=20.14, p=0.0005, V=0.17 (§4.0/§4.2, Prediction 1) — stable at n=340 | Confirmed for `domain_risk`; the `has_dbt` comparator that previously ran alongside it (§4.0) continues to show no detectable effect, which if anything sharpens this reading — rigour tracks risk, not tool adoption; rigour still close to universal (58%+) in every risk tier |
| dbt is the field standard | 65% of AE/BI JDs mention dbt (n=329) | Real but not universal; roughly one in three AE/BI roles run dbt-free stacks; stable across eight consecutive snapshots, including in the APAC subset specifically (65% — now identical to the corpus average; §9.5) |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (62% of coded roles) than AI hiring criteria (33% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

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

**Current state: all three dimensions are coded on the full analytical cohort (n=340, including all JDs added since the fix, surviving both 2026-07-25 dedup passes, and both the 2026-07-26–29 and 2026-07-30 expansions)**, with consistent `evidence.{dim}` (quote) + `evidence.{dim}_explanation` (reasoning) entries on every record, and no legacy-format duplication. Findings in §4.10–4.12 and Prediction 2 (§4.0) are stated against the full current n, not a small coded subset — this changed several conclusions materially when the fix first landed at n=272 (§4.0, §4.10), and the corpus has grown, been deduplicated twice, and grown again since without disturbing that fix.

### 9.4 What n=340 supports

At n=340, the margin of error on a single proportion is approximately ±4.8pp at 95% confidence (Wilson interval) — the 71% rigour finding (§4.1) is defensible as "likely between 66% and 75%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above. The corpus additions from the n=123 baseline through n=340 provided meaningful confidence-interval tightening and, along the way, flipped several relationships across the significance threshold in both directions (§4.0, §4.9 document each one as it happened). The current +11-record expansion (§9.8) is small, but it still moved two relationships across the significance threshold, both into significance: `geo_region (APAC) × jd_authorship` (previously part of Finding G, back below p<0.05 after briefly sitting above it at n=329) and `geo_region (APAC) × work_arrangement` (previously part of Finding H, now significant for the first time on the full four-category breakdown). `data_team_maturity × work_arrangement` on the stated-arrangement subset (promoted at the last update) remained significant and strengthened further. The three relationships that tested null at n=329 — `velocity_vs_rigour × has_dbt`, `domain_risk × greenfield_vs_fix`, `stakeholder_orientation × autonomy_level` — all remain null at n=340, with the first two weakening further rather than approaching the line. This asymmetry (small-batch geographic effects moving while the Prediction-1-adjacent nulls stay put or weaken) is plausible given the batch's composition: 6 of 11 new cohort records are APAC (§9.8), so a small addition had an outsized effect specifically on APAC-linked tests, while dimensions unrelated to geography saw only the general n increase. Pattern stability continues to hold for the strongest relationships (maturity × mission, domain_risk × stakeholder, domain_risk × rigour) across every snapshot from n=123 to n=340.

### 9.5 What the geographic concentration means, and what the APAC stratum shows

This remains a primarily European, Berlin-heavy dataset. The APAC stratum, built by a deliberate scraping pass in late July and reinforced by the 2026-07-30 batch (§9.8), holds at **43 roles (13% of the analytical cohort)** — up from 37 at the last snapshot, and now the second-largest single geographic bucket in the corpus after UK/remote — still large enough to run a direct APAC-vs-rest-of-corpus comparison rather than only disclaiming the gap, as earlier snapshots of this document had to.

**Most substantive dimensions still track closely, but rigour orientation and work-arrangement disclosure both continue to differ from the rest of the corpus, the latter now confirmed rather than directional.** Domain risk (72% moderate vs. 67%), data team maturity (53% mid vs. 60%), dbt prevalence (65% vs. 65% — now identical), and `testing_framing` mix (65% responsibility vs. 62%) all sit within a normal range of the non-APAC corpus. Rigour orientation remains lower for APAC (60%) than the rest of the corpus (72%) — consistent in direction with the n=329 snapshot (65% vs. 72%), and now a two-snapshot pattern rather than a single-batch anomaly, though still not formally tested given the stratum's size. `loss_aversion_framing = high` also remains lower for APAC (14% vs. 21% for the rest of the corpus), essentially unchanged from n=329's 11% vs. 21%. None of the risk/maturity/dbt/testing comparisons are statistically distinguishable at this n, but the rigour and loss-aversion gap having now held in the same direction across two consecutive, partly-independent scraping batches makes it a steadier signal than a single-snapshot reading would be.

**Two dimensions that were directional at n=329 now both clear conventional significance:**

| Dimension | APAC (n=43) | Rest of corpus (n=297) | Test |
|---|---|---|---|
| `jd_authorship = hiring_manager` | 86% | 68% | χ²=6.32, p=0.042, V=0.14 |
| `work_arrangement` (full 4-category: hybrid/not_stated/onsite/remote) | 40% / 44% / 14% / 2% | 50% / 36% / 3% / 11% | χ²=13.20, p=0.0042, V=0.20 |

This batch's six new APAC records (§9.8) are almost entirely hiring-manager-authored (5 of 6), which pushed the authorship gap back below p<0.05 after it had briefly narrowed above the threshold at n=329 (χ²=5.92, p=0.052, V=0.13). Held carefully: `jd_authorship`'s LLM self-consistency is the lowest of any dimension in the codebook (0.58, §3), so part of this gap could be a codebook-boundary artefact interacting with how APAC postings happen to be formatted (many sourced via LinkedIn/company career pages with detailed technical bullet lists, which the heuristic may read as "hiring-manager-authored" regardless of who actually wrote them) rather than a real difference in who authors these JDs — and the test has now crossed the conventional threshold in both directions across two consecutive snapshots, which is itself a reason for caution. The work-arrangement picture has changed in kind, not just degree: APAC's not-stated rate (44% vs. 36%) is the same direction as every prior snapshot, but the batch's new APAC records also carry a distinctly higher onsite share (14% vs. 3%) and lower hybrid share (40% vs. 50%) among stated arrangements, and testing the full category breakdown (rather than a stated/not-stated binary) now clears p<0.05 for the first time (was χ²=7.57, p=0.056, V=0.15 at n=329, using the binary cut). Among APAC roles that do state an arrangement, hybrid still dominates numerically (17 of 24) but the onsite share (6 of 24) stands out against the rest of the corpus.

**What this does and doesn't license:** the JD data cannot distinguish "APAC employers write JDs differently" from "this specific sample happens to have been sourced through channels that produce more hiring-manager-style, or more onsite, postings" — the collection method for this stratum (several distinct scraping passes, not the same multi-month opportunistic accumulation as the European portion) is a real confound, and it is a plausible explanation for why a single small batch (11 records) moved two tests across a significance threshold at once. Treat most of the substantive-dimension comparisons (risk, maturity, dbt, testing framing) as reasonably solid — a genuine absence of large difference across several independently-coded dimensions, holding across two snapshots now. Treat the authorship and work-arrangement findings as real at this n but worth re-checking at the next update, given how much a small APAC-heavy batch just moved them.

The dbt survey itself skews North American, though post-2023 reports don't disclose the exact split — this dataset still has no North American stratum to compare against, and the 71% rigour figure should not be assumed to hold in the US market without separate data.

### 9.6 The 2026-07-25 corpus dedup — method and impact

An audit (prompted by a request to double-check the corpus for completeness) found the corpus had accumulated 36 duplicate records across 32 clusters — the same live job posting scraped more than once, usually because the posting was still live on a later collection pass. Naively grouping by company+role text would have both missed real duplicates (the same posting under two different tracking URLs, or — in one case — the same posting scraped once under the hiring company's name and once under its staffing agency's name) and wrongly merged genuinely distinct postings that happen to share a title (e.g. the same role open simultaneously in two different cities, with two different job IDs and two different salary bands).

**Method:** two records were treated as the same posting if (a) their `source_url`s matched exactly after stripping known tracking-only query parameters (`source`, `gh_src`, `utm_*`, `feedId`, `Codes`, `jobDbPVId`, etc.), or (b) their URLs shared a ≥6-digit job-ID number embedded in the URL *path* specifically — query-string digit runs were excluded from this check after an early version produced false matches against unrelated analytics/tracking IDs that happened to be longer than the real job ID. Within each confirmed cluster, the record with the fuller-content archive was kept (10 of 32 clusters had a meaningfully more complete alternate scrape than the earliest-dated one) rather than defaulting to earliest-date.

**Impact (pass 1):** 362→326 total records, 327→292 analytical cohort (283 AE/BI, 9 team_lead). Two relationships crossed below p<0.05: `velocity_vs_rigour × has_dbt` (§4.0, to p=0.058) and APAC `work_arrangement = not_stated` (§9.5, to p=0.057) — smaller n means less power, and both were already close to the threshold pre-dedup. No relationship moved the other direction (null to significant) in this pass.

**Impact (pass 2, method and one further case):** the same URL-based method used for pass 1 is necessarily blind to duplicates that never share a URL. A follow-up check compared the *content* of the extracted responsibility bullets directly (built while auditing the corpus for this analysis) and found one such case: `2026-07-17_mollie_analytics-engineer-ii-revenue-operations` was byte-near-identical to `2026-06-27_mollie_analytics-engineer-revenue-operations` (same team, same responsibilities, only the Ashby listing UUID, title suffix "II", and location-string word order differed) but listed under a distinct ATS UUID, so pass 1's URL match never caught it. Removed, keeping the earlier-dated, equally-complete record. 326→325 total, 292→291 analytical cohort. This single-record removal was enough to flip `velocity_vs_rigour × has_dbt` back above p<0.05 (to p=0.045) — direct evidence that this specific relationship sits close enough to the threshold that single-digit changes in n move it across the line either way, not that the underlying effect changed between passes. APAC `work_arrangement = not_stated` was essentially unaffected by pass 2 (p=0.057→0.059; the Mollie record was neither APAC nor `not_stated`) and remains below the threshold.

Every distribution and cross-tab in §4 has been recomputed against the corpus after both passes; changes versus the original (n=327) snapshot are noted inline where they moved by more than a percentage point or crossed a significance threshold. `scripts/check_duplicate_jd.py` encodes pass 1's URL-based matching logic and now runs as a mandatory pre-write check in the `classify-jd` skill — it would not, on its own, have caught the pass-2 case, since content-similarity duplicates that never share a URL require the kind of direct comparison pass 2 used, which is not yet automated.

### 9.7 2026-07-26 to 2026-07-29 expansion

New JDs added, taking the corpus from 325→358 total (33 net new records), 291→329 analytical cohort (38 net new cohort records — the count exceeds the number of individually-dated 07-26–29 additions because a small number of records dated on or before 2026-07-25 were also added to the corpus in the same working session, after the dedup snapshot in §9.6 was written). Notable additions in this batch: a small finance/regulated-banking cluster (Montblanc — finance-domain, high `domain_risk`; NatWest Group — regulated bank, though its record classifies as `data_engineering` and sits outside the analytical cohort; Qred Bank/NIBC Bank — fintech/banking, high `domain_risk`), and an AI-forward cluster at the opposite end of the risk spectrum (Zego — explicitly AI-first framing, `ai_role = ai_user`; Hack A Boss — an AI-native analytics-education product, early-stage/greenfield, `ai_role = ai_enabler`). Kaluza (`team_lead`, Analytics Engineering Lead) and Fremantle Dockers (AFL sports club, low `domain_risk`, early-stage) add further variety at the seniority and domain-risk tails.

Batch-level distribution (the 28 cohort records dated 2026-07-26 or later): `domain_risk` moderate 20 (71%), high 6 (21%), low 2 (7%) — close to the corpus-wide split (67%/25%/8%) with a slightly higher moderate share. `data_team_maturity` mid 14 (50%), mature 9 (32%), early 5 (18%) — mature is somewhat over-represented against the corpus average (26% at n=329) on this batch. `seniority` skews mid (18, 64%), consistent with the corpus overall. All classified using the same Layer B codebook; no statistical re-weighting applied — the batch is small enough relative to the standing corpus that it nudges but doesn't materially reshape any headline distribution in §4.1–4.8. See §4.9 for which relationships the added n moved across a significance threshold in either direction.

### 9.8 2026-07-30 expansion

Eleven new AE/BI JDs (plus four `data_engineering` records excluded from the analytical cohort — Kleinanzeigen, Kognitiv, SanDisk, Toss) added in a single day, taking the corpus from 358→373 total, 329→340 analytical cohort. This is the smallest expansion batch since the 2026-07-13 baseline (+9 JDs), but it is also the most geographically concentrated: 6 of the 11 new cohort roles are APAC (Blinq, Brand New Day, Eftsure, Emapta, Samsara Eco, Southern Cross), pushing the APAC stratum from 37 to 43 roles and making it the second-largest single geographic bucket in the corpus (§3, §9.5). The remainder is UK/remote (Harnham, Infinite Lambda, a second Zego posting distinct from the one added in §9.7), France (BeReal), and Benelux (Crystalloids).

Batch-level distribution (the 11 new cohort records): `domain_risk` moderate 7 (64%), high 4 (36%) — no low-risk roles this batch, skewing the batch itself higher-risk than the corpus average, though the batch is too small (n=11) to move the corpus-wide split meaningfully (§4.2 shows only a 1pp change in the high-risk share). `data_team_maturity` mid 7 (64%), early 3 (27%), mature 1 (9%) — early-stage is over-represented against the corpus average (16% at n=340) on this batch, nudging the corpus-wide early share up a point (§4.3). `seniority` mid (7), senior (3), staff (1 — BeReal's Staff Analytics Engineer posting, a rare title in this corpus). No `team_lead` roles in this batch.

Because 6 of the 11 new records are APAC, this batch's effect on APAC-linked statistics is disproportionate to its overall size: it moved `geo_region (APAC) × jd_authorship` back below p<0.05 (§4.9 Finding G, §9.5) and pushed `geo_region (APAC) × work_arrangement` into significance for the first time on the full four-category breakdown (§4.9 Finding H, §9.5). Non-geographic relationships were largely unaffected by a batch this small — the three long-standing nulls (`velocity_vs_rigour × has_dbt`, `domain_risk × greenfield_vs_fix`, `stakeholder_orientation × autonomy_level`) all remained null, with the first two weakening slightly further. All classified using the same Layer B codebook; no statistical re-weighting applied. See §4.9 and §9.4 for the full account of which relationships moved.

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
