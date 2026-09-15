# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026. Continuously revised against a growing corpus; full collection and revision history in §9.20.
**Dataset:** 629 analytics-engineering/BI/team-lead job descriptions from `data/` (April–September 2026; primarily European, with UK, DACH, Nordics, Benelux and Iberia, a 108-role APAC stratum large enough to compare directly against the European majority, and a 51-role NYC-metro cluster; see §3, §9.5, §9.13). 691 records total in the corpus including 49 data-engineering and 13 other roles excluded from the analytical cohort; see §3.
**Responsibility text:** every record carries its responsibilities section captured verbatim from the posting (5,591 bullets across 686 of 691 JDs), machine-verified against the archived text; see §4.13 and §9.19.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "[State of Analytics Engineering](https://www.getdbt.com/resources/state-of-analytics-engineering-2026)" reports, 2023–2026 (2026 edition linked) — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

## Abstract

**Question.** Analytics-engineering discourse — most visibly the annual dbt Labs *State of Analytics Engineering* survey — describes a field preoccupied with data trust, governance, and rapid AI adoption. That discourse is drawn from practitioners who opt into a vendor's community channels. This document asks a different question of a different population: what do employers actually write down when they are spending money to hire, and where does that diverge from what practitioners report about themselves?

**Data.** 691 analytics-engineering, BI, data-engineering and adjacent job descriptions collected April–September 2026, archived verbatim from the original postings. 629 form the analytical cohort (AE/BI plus team-lead roles); data-engineering and unrelated roles are excluded as a different discourse population. Coverage is opportunistic and primarily European, with an APAC stratum (n=108) and an NYC-metro cluster (n=51) large enough to compare directly rather than merely disclaim.

**Method.** Each posting is coded against a ten-dimension behavioural codebook (Layer B) capturing how the role is framed rather than what it is titled — rigour versus velocity orientation, domain risk, team maturity, autonomy, authorship, stakeholder audience, AI expectation, testing framing, and loss-aversion register. Separately, each posting's responsibilities section is captured verbatim and its individual bullets classified against a 16-theme taxonomy, giving a second, independently-derived read on the same corpus (§4.13). Two falsifiable predictions are stated in §4.0 *before* the findings that test them. Relationships are tested with chi-square and reported with effect sizes; every claim is re-tested at each corpus update and significance is not treated as permanent.

**Principal findings.** Rigour framing dominates (71% of the cohort) and is remarkably flat across sectors, though not uniform across risk tiers (85% high-risk, 50% low-risk). Team maturity is close to deterministic of mission type (V=0.44, the strongest relationship in the corpus): greenfield work is 72% of early-stage roles and 8% of mature ones. Domain risk and stakeholder audience are structurally linked (V=0.34), with regulated finance concentrating high-risk framing. Against the survey's report of 72% daily AI use in coding workflows, **60% of postings state no AI expectation of the candidate at all** — the largest single gap between practitioner self-report and formal hiring criteria in this dataset. Testing accountability, by contrast, *is* institutionalised: 66% frame data quality as something the hire personally owns. The market's stated fear is operational (56% moderate loss-aversion framing), not the hallucinated-output anxiety the survey leads with.

**Limitations.** Coverage reflects what a job search surfaced, not a sampled market; regional splits are corpus-composition facts, not labour-market claims. Classification is LLM-assisted with a measured self-consistency floor (`jd_authorship`, the weakest, at 0.58). The theme-relationship sweep in §4.13 is exploratory, tests 304 pairs without multiplicity correction, and discloses one worked example of a finding that did not survive scrutiny. All findings are cross-sectional language co-occurrences and support no causal claim.

---

## 1. What this document is

This is a structured analysis of 629 analytics engineering, BI, and team-lead job postings collected during a job search in 2026, primarily European with a substantial APAC stratum (§3, §9.5). The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 629 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±3.5pp at 95% (Wilson interval, evaluated at the §4.1 rigour proportion) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration is still primarily European, but the APAC stratum (n=108) remains large enough to test directly against the European majority rather than merely disclaim — see §9.5 for what that comparison shows and its own, tighter limits. Generalisation to North America remains a limited-n proposition, though less thin than earlier snapshots — the `nyc_metro` cluster (n=51, §3, §9.13) is large enough to support the three-way regional comparison in §9.13 but still too small, and too geographically narrow (New York City specifically, not the US broadly), to support a general US-market claim; treat it as a single-metro stratum, not a North American one on par with Europe or APAC. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Every batch added since the n=123 baseline was folded in at its face distribution, with no statistical re-weighting (§9.7–§9.20). The 2026-07-25 dedup removed 37 duplicate records across two passes rather than adding new ones (§3, §9.6) — this tightened the corpus rather than diluting it. The 2026-08-22 audit (§9.15) removed 3 corrupted/fabricated records and materially re-classified roughly 30 others.

Every relationship in this document is re-tested at each corpus update, and significance is not treated as permanent. At n=629, `domain_risk × greenfield_vs_fix` (Finding B, χ²=3.88, p=0.42, V=0.06) and `stakeholder_orientation × autonomy_level` (Finding E, χ²=10.85, p=0.21, V=0.09) are both tested nulls. `velocity_vs_rigour × has_dbt` (§4.0's Prediction 1 comparator) reads χ²=6.65, p=0.036, V=0.10 (n=610 AE/BI) — on the significant side of p<0.05 but sitting exactly on the effect-size floor this document treats as its minimum; discussed in §4.0. `jd_authorship × velocity_vs_rigour` reads χ²=10.11, p=0.039, V=0.09: below that floor, and so not reported as a finding (§4.6). Three relationships clear both thresholds at this n and are stated as current findings: `geo_region (APAC vs. rest) × jd_authorship` (χ²=7.15, p=0.028, V=0.11, §9.5), `autonomy_level × work_arrangement` on the stated-arrangement subset (χ²=9.60, p=0.048, V=0.11, §4.9 Finding H) and `greenfield_vs_fix × work_arrangement`, also stated-subset (χ²=12.87, p=0.012, V=0.13, Finding H).

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

**691 job descriptions** collected April–September 2026 across `data/`, deduplicated 2026-07-25 in two passes (§9.6), audited and corrected 2026-08-22 (§9.15), and re-founded on responsibility capture 2026-08-30 (§9.19). Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 610 | Yes — primary cohort |
| team_lead | 19 | Yes — governance-signalling stratum |
| data_engineering | 49 | No — excluded, different discourse population |
| other | 13 | No — excluded |

**Analytical cohort: 629 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily European (UK/remote 14%, Benelux 10%, Iberia 9%, other Europe 7%, Berlin 7%, Nordics 6%, France 6%, DACH-other 3%, Baltics 2%), with APAC remaining the largest single bucket (**108 roles, 17.2% of the analytical cohort**) — large enough to compare directly against the European majority rather than merely disclaim as a blind spot (§9.5). The `nyc_metro` bucket, introduced at the 2026-08-13 batch (§3), now stands at 51 roles (8.1%) — the corpus's largest single US-specific geographic concentration to date. The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim. See §9.5 for a worked APAC-vs-Europe comparison, and §9.13 for a fuller three-way Europe/APAC/NYC-metro comparison — it surfaces one large effect (`language_gate_type`) that §9.5's two-way framing never tested and that the seeker/manager-mode UI (`index.html`) does not yet surface at all.

**2026-07-13 expansion:** Nine new JDs added mid-corpus (airSlate, EPAM, KTM AG, Bose, Resourcery Group, TapTap Send, TeamViewer, woom, Funding Circle) representing high-risk (5) and moderate-risk (4) roles. Early-stage (2) and mature (2) organisations represented alongside mid-stage (5). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution.

**2026-07-16 expansion:** Twelve new JDs added (Doodle, Adaptive HVM, Top Doctors Group, Qargo, Orange, Fortnox, Amaris Consulting, bTV Media Group, TDA, Oscar, MoonPay, TRIA) representing moderate-risk (7), high-risk (3), low-risk (2) roles. Mid-stage (8) and mature (3) organisations represented alongside early-stage (1). Seniority mix: mid (9), senior (3). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution. Corpus now at 260 total records, 240 in analytical cohort.

**2026-07-17 expansion:** Thirteen new JDs added (Booking Holdings Romania, Electra, Fruition Group Ireland, Jobster, Lendable ×2, Mollie, Monzo, Niji, Paddle, Rebtel, Reeeliance, Skiils). This batch also completed the `work_arrangement` field across the corpus, enabling the chi-square sweep in Finding H (§4.9) — work arrangement is driven almost entirely by geography, with a weak, secondary maturity effect (mature teams skew more hybrid than early-stage teams).

**2026-07-21 expansion:** Twenty-one new JDs added (2026-07-19: Engelska Skolan, Gerolsteiner, Scopely, Storytel; 2026-07-21: Avalanche Studios, Bravida, Currys, Decathlon Digital, Eunice Energy, EVA Esports, Finavia, IDW, ilionx, Kaizen Gaming, LEGO Group [team lead], Moérie Beauty, PRO PLUS [team lead], Relay Technologies, Wave Group, Witteveen+Bos, Xebia), representing moderate-risk (10), low-risk (8), and high-risk (3) roles — a notably higher low-risk share than prior batches (gaming/esports and consumer-education postings). Mid-stage (12) and mature (7) organisations dominate, with early-stage (2) again a minority. Two roles (LEGO Group, PRO PLUS) are `team_lead`. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 294 total records, 272 in analytical cohort. This batch also prompted a fix to a long-standing data-pipeline bug that had silently dropped `ai_role`, `testing_framing`, and `loss_aversion_framing` from JSON records for a large stretch of the corpus — all three dimensions are now coded on the full analytical cohort (n=272, up from a stuck n=86); see §9.3 for the full account and §4.10–4.12 for the updated findings.

**2026-07-22 to 2026-07-24 expansion:** Fifty-five new AE/BI JDs added, the largest single expansion yet and the first with a deliberate APAC scraping pass (36 of the 55 new cohort roles are APAC — Singapore, Australia, India, Vietnam, Malaysia, the Philippines, Japan, South Korea, Hong Kong, Thailand, China, New Zealand; the remainder mostly UK/remote). Domain-risk mix (moderate 40, high 13, low 2) and maturity mix (mid 28, mature 17, early 10) both sit close to the pre-existing corpus distribution — this batch reinforces rather than shifts the headline findings in §4.1–4.8. Seniority skews senior (27) and mid (24), consistent with the rest of the corpus. No `team_lead` roles in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 362 total records, 327 in analytical cohort, before the 2026-07-25 dedup below. A gap in `scripts/geo_classify.py` was found and fixed during this batch's regeneration — one AU listing ("AU - HQ - NSW", state-abbreviated with no city name) was falling through to `other` instead of `apac`; the classifier now also matches `nsw`, `victoria,`, `queensland`, and `docklands`.

**2026-07-25 deduplication (pass 1):** An audit found the corpus had accumulated 36 duplicate records — the same live job posting re-scraped on a later date, under a different tracking query string, via a different job-board mirror, or (in one case) under a different company label entirely (a staffing agency's listing of a client's own posting). A company+role text match alone missed most of these and would also have wrongly merged genuinely distinct postings that happen to share a title (e.g. the same role open in two different cities, with different job IDs) — the dedup instead matched on normalized job-posting URL (netloc + path + non-tracking query params, or a shared ≥6-digit job ID embedded in the URL path), verified against location/salary metadata before removal. Where a cluster had multiple scrapes of the same posting, the fullest-content archive was kept, not simply the earliest. Corpus dropped from 362→326 total, 327→292 analytical cohort.

**2026-07-25 deduplication (pass 2):** A follow-up audit of the responsibility-bullet extraction output (comparing bullet-list content directly, not just source URL) surfaced one further duplicate the pass-1 method missed: `2026-07-17_mollie_analytics-engineer-ii-revenue-operations`, byte-near-identical JD text to `2026-06-27_mollie_analytics-engineer-revenue-operations` but listed under a different Ashby UUID, so it never shared a normalized URL with its match. Removed, keeping the earlier-dated record. Corpus dropped from 326→325 total, 292→291 analytical cohort. This second, smaller pass is what flipped `velocity_vs_rigour × has_dbt` (§4.0) back above the significance threshold after pass 1 had pushed it below — see §9.6 for the full account and §4.0/§4.9 for exactly which relationships each pass affected. `scripts/check_duplicate_jd.py` (URL-based, pass 1's method) now runs as a mandatory step in `.claude/skills/classify-jd/SKILL.md` before any new JD is written; it would not have caught the pass-2 case on its own, since that duplicate never shared a URL — content-similarity is a weaker, noisier signal and was applied manually rather than automated.

**2026-08-11 expansion:** Twenty new JDs added (17 in the analytical cohort — 2 `data_engineering`, 1 `team_lead`), the batch notable for its ATS diversity: Workday (Circles, J.Crew, Neuberger Berman), Ashby (p2p.org, and Profound via a company-site redirect — `tryprofound.com/careers/...` resolving to an Ashby-hosted posting rather than the `jobs.ashbyhq.com` domain directly), Teamtailor (Skandia), BambooHR (Cookie Information), Greenhouse (Zynga, Socialpoint — see below). Also included: a recruiter repost (Genpact, sourced via an intermediary staffing listing, "Genpact via Innova ESI"), a French-language job posting sourced via a Nuxt-based French job board (`free-work.com`, JEMS), and two non-English JDs preserved verbatim per the language-mismatch handling in `.claude/skills/classify-jd/SKILL.md`: Swedish (Skandia) and Dutch (Clovr). Zynga and Socialpoint's postings are a near-duplicate pair — both are Senior Analytics Engineer roles at sibling mobile-gaming studios under the same parent company, both sourced via Greenhouse, both `low` `domain_risk`/`mature` maturity — retained as distinct records since they are genuinely separate postings at different studios, not re-scrapes of the same URL, but flagged here as a source of correlated rather than independent signal in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 487 total records, 440 in the analytical cohort.

**2026-08-13 expansion:** Nineteen new JDs added from a 24-URL batch (18 in the analytical cohort — 16 AE/BI, 2 `team_lead`, 1 `data_engineering` excluded), notable for its skew toward larger, more established employers and a concentration of New York-based postings: Aperia Solutions, Fox Corporation (`team_lead`), Butterfly Network, Puig, Current (`team_lead`), Bristol Myers Squibb, payabl., Capitole, REVEL, MUBI, Retail Insight, Zego, Siemens, foodpanda, Jefferies (`data_engineering`, excluded), Warner Bros. Discovery, Secretlab, N-able, CMC Markets. Four URLs from this batch were confirmed duplicates of existing records (Pave, Awin, Satispay, Rippling) and skipped, not double-counted; two further URLs (Exness careers — a client-rendered Astro/MUI SPA with no embedded JSON payload or discoverable API — and UK Civil Service Jobs — blocked by a bot-check interstitial) could not be verified via curl and were left unclassified rather than substituted with a WebFetch paraphrase, per the skill's extraction-integrity rule. `domain_risk`: moderate 10, high 7 (five fintech/payments/insurance: Aperia Solutions, Current, payabl., Zego, CMC Markets, plus Bristol Myers Squibb pharma and foodpanda payments), low 1. `data_team_maturity`: mid 9, mature 8, early 1 — notably more mature-skewed than the standing corpus average, driven by this batch's large-organisation share (Fox Corporation, Siemens, Warner Bros. Discovery, N-able, CMC Markets). `seniority`: mid 7, senior 4, manager 3, staff 3, lead 1. `ai_role`: none 12, ai_user 3 (Butterfly Network, MUBI, Zego), ai_enabler 3 (Retail Insight, foodpanda, N-able) — the N-able posting is a particularly clean `ai_enabler` example, describing a Snowflake Semantic Views layer built explicitly as "the shared vocabulary AI agents use to answer business questions." `has_dbt` (AE/BI): 14/16. `job_location`: five New York City-area roles (Aperia Solutions, Butterfly Network, Puig, Current, Fox Corporation) introduced the corpus's first `nyc_metro` geo bucket, alongside three India-based roles (Jefferies/Hong Kong is not India but was grouped separately; N-able/Bangalore, Siemens/Pune-Bangalore, Warner Bros. Discovery/Hyderabad) reinforcing the existing APAC stratum. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 531 total records, 478 in the analytical cohort.

**2026-08-18 expansion:** Seventeen new JDs added (16 in the analytical cohort — all `analytics_engineering_bi`, no `team_lead`; 1 `data_engineering` excluded: S&W Group), notable for a strong European concentration alongside continued growth in the NYC-metro and APAC strata: Lupa (London), S&W Group (Southampton, excluded), Checkout.com (London), BMJ (London/Hybrid), QL Resources Berhad (Shah Alam, Malaysia), Alight (Noida/Gurgaon, India), Ridgeline (New York/San Ramon/Remote), EvolutionIQ (New York), InterEx Group (agency posting for an unnamed PE/investment-management client, New York), Minerva (New York), Orange Belgium (Brussels), UnitedHealth Group/Optum (Dublin/Letterkenny, Ireland), Qonto (Paris), Coop (Oslo — Norwegian JD, preserved verbatim in the archive per the language-mismatch rule), Kilo/Moérie (Vilnius, Lithuania), Hügli/Bell Food Group (Radolfzell, Germany — German JD, preserved verbatim), and Pluang (Singapore). `geo_region`: nyc_metro 4 (EvolutionIQ, InterEx's client, Minerva, Ridgeline), apac 3 (Alight, Pluang, QL Resources Berhad), uk_remote 3 (Lupa, BMJ, Checkout.com), and one each of dach_other (Hügli), nordics (Coop), baltics (Kilo/Moérie), benelux (Orange Belgium), france (Qonto), ireland (UnitedHealth Group/Optum) — pushing the APAC stratum to 74 roles and the NYC-metro cluster to 34 (§3, §9.5, §9.13). `domain_risk` (AE/BI, n=16): high 5 (Checkout.com and Qonto, both payments/banking; UnitedHealth Group/Optum, healthcare; Pluang, fintech/investment; InterEx's client, financial services/PE), moderate 8, low 3 — a notably high-risk-skewed batch relative to the standing corpus average (26%) driven by its fintech/banking/healthcare concentration (§9.14). `loss_aversion_framing` tracks the same concentration: `high` for Checkout.com, Qonto, BMJ, Orange Belgium, and Pluang. `ai_role`: `ai_enabler` 3 (Orange Belgium, Pluang, UnitedHealth Group/Optum — all building AI-consumable semantic layers or agentic infrastructure), `ai_user` 3 (Minerva, explicit Claude Code/Cursor usage as a stated "force multiplier"; Qonto, an explicit AI-native work-style requirement; Ridgeline), `none` 11. `has_dbt` (AE/BI): 9/16. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 557 total records, 502 in the analytical cohort (§9.14).

**2026-08-22 corpus audit and correction:** A full-corpus integrity audit found and fixed a cluster of data-quality problems that had accumulated across several recent batches, most consequentially a pattern of paraphrased or condensed `jd_archive.md` files (WebFetch-style summaries rather than verbatim raw-HTML extraction) affecting roughly 30 records dated 2026-07-13 through 2026-08-14, several of which had also been silently translated to English without the standing language-mismatch note. Also fixed: two records with fabricated salary figures, one fully fabricated record with no source text (deleted), two orphaned/broken directories (deleted), one enum violation, and one tool-array overlap. Roughly 25 further records were re-verified and confirmed genuinely stale (posting removed, filled, or expired) and correctly left untouched. Net effect: 586→585 total records, with the analytical cohort standing at 527 once this audit's corrections are reconciled with records added since the 2026-08-18 batch. Full account in §9.15.

**2026-08-25 expansion:** Twenty-four new JDs added (23 in the analytical cohort — 22 `analytics_engineering_bi`, 1 `team_lead` [Cedar]; 1 `data_engineering` excluded: KTM AG; 1 `other` excluded: We Are Meta), a European/APAC-heavy batch with a notably strong `ai_enabler` signature: MoMo, NetApp, Eden Scott, Maya, and ITE Singapore all describe building data infrastructure or semantic layers explicitly for AI/agent consumption, and Statista shows a clean `ai_user` example naming Claude Code directly in its tech-stack requirements. `geo_region`: apac 9 (Floq, Gogoro, Insulet, ITE Singapore, Lyka, Maya, Microsourcing, MoMo, NetApp), uk_remote 4 (Cedar, Checkout.com, Eden Scott, La Fosse), nyc_metro 3 (New York Technology Partners, Rockstar Games, US Mobile), global_remote 2 (Infoplus Technologies, We Are Meta excluded), dach_other 2 (KTM AG excluded, Mercedes-Benz Bank), and one each of hamburg (Eraneos), iberia (Perk), france (Pluxee), berlin (Statista). Three JDs in this batch are German-language and preserved verbatim per the standing language-mismatch rule (Eraneos, Mercedes-Benz Bank, KTM AG) — see §9.17. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 609 total records, 549 in the analytical cohort.

**2026-08-26 expansion:** Fourteen URLs submitted; eight new JDs added (all 8 in the analytical cohort — 8 `analytics_engineering_bi`, 0 `team_lead`), taking the corpus to 617 total records, 557 in the analytical cohort. Six URLs excluded: three exact-URL duplicates (IJsvogel Retail, Reeeliance, CrowdStrike), two stale/filled Scopely postings confirmed via WebFetch. New records: Dispensed (Australia/NZ/UK telehealth, `high` domain_risk), Endowus (Singapore wealth management, `high` domain_risk, first-Analytics-Engineer greenfield build), HCLTech (IT-consulting client posting, London), HubSpot (Staff Analytics Engineer, Remote-Ireland, `ai_enabler`), Keskeny Nyomda (Hungarian printing/packaging manufacturer, Hungarian-language JD preserved verbatim), Mantel Group (Principal-level, Australia IT consultancy, `ai_enabler`, commercial/pre-sales-heavy), Marktlink Capital (Amsterdam PE/VC fund manager, first-Analytics-Engineer greenfield build, `ai_user`), PRI Technology (staffing-agency posting, healthcare/research client, Rye NY). Full account, including the HubSpot Greenhouse-board-token extraction workaround, in §9.18.

**2026-09-14 expansion:** Thirty-six new JDs added (35 in the analytical cohort — all `analytics_engineering_bi`; 1 `data_engineering` excluded: aconium GmbH), taking the corpus to 691 total records and 629 in the analytical cohort. `data_team_maturity`: mid 24, mature 7, early 5. `domain_risk`: moderate 22, high 14, no low-risk roles — a 39% high-risk share, well above the standing 28% (medtech and pharma in Bristol Myers Squibb, Greenbrook Medical, Insulet and January; payments and fintech in Reap, Duetti and Flex). `seniority`: mid 18, senior 15, staff 2, junior 1. `geo_region`: apac 9, nyc_metro 8, and the remaining 19 spread thinly across nine European buckets. `ai_role`: ai_enabler 16, none 17, ai_user 3 — the densest `ai_enabler` batch in the corpus, and the reason the corpus-wide `ai_enabler` share moves up two points (§4.10). `has_dbt` (AE/BI): 24/35. All classified using the same Layer B codebook; no statistical re-weighting applied.

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4. Findings

### 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=610, AE/BI only): χ²=28.87, p<0.0001, V=0.15. χ² for `velocity_vs_rigour` × `has_dbt` (n=610, AE/BI only): χ²=6.65, **p=0.036, V=0.10 — significant, but sitting exactly on the effect-size floor this document treats as its minimum.** **This complicates Prediction 1's clean reading:** rigour framing shows a small, detectable association with both `domain_risk` and `has_dbt`, and the two are not separated by significance. `domain_risk` carries the larger effect (V=0.15 vs. 0.10), so Prediction 1's directional claim — risk matters at least as much as tool adoption — holds. Its stronger claim, that tool adoption shows *no* detectable link, does not. The `has_dbt` comparator is close enough to both thresholds that a single batch can move it either way; read it as a weak association, not a settled one. High-risk roles are markedly more rigour-dominant (85% vs. 50% for low-risk, §4.2) — a real gradient, and the most stable result in this test.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role` is coded across the full analytical cohort (n=629 — see §9.3 for the pipeline-bug history; a further evidence-quality audit on 2026-08-23 found and corrected several `ai_role` misclassifications, see §9.16). `ai_role = none` is 60% of the cohort — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=629): χ²=14.47, p=0.070, V=0.11 — **not significant**. `ai_enabler` (157, 25%) concentrates somewhat in `internal_data` and `mixed` stakeholder orientation; `ai_user` (95, 15%) spreads similarly. **Prediction 2's second half (non-random concentration) does not hold at conventional significance; the first half (large adoption-claim/hiring-criterion gap) holds — `none` is 60% of hiring criteria against the survey's 72% daily-use claim.**

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result recomputed and reported at every corpus update rather than fixed at first publication. Prediction 1's `domain_risk` comparator has been significant at a small, stable effect size across every snapshot since n=272; its `has_dbt` comparator sits close enough to both the p<0.05 line and the V≈0.10 floor that it has moved across them repeatedly, and is reported here as weak rather than settled. Prediction 2 was first tested on a small, biased coded subset (n=86), where it looked marginal and medium-effect; on the full cohort it is a clear non-result. That is a lesson about statistical power and sample composition, and it is the fix for Appendix B's "six theories, none tested" critique — an honest claim, not a stronger one than the data supports.

---

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=629) |
|--------------------|---|---|
| rigour | 447 | 71% |
| mixed | 159 | 25% |
| velocity | 23 | 4% |

**71% of JDs in the analytical cohort signal a rigour orientation.** Pure velocity is 4% — 23 JDs across 629, the same absolute count as at n=576, so the whole of this batch's growth landed in rigour and mixed. This remains the clearest single-dimension finding in the dataset by margin. The overall trajectory (80% → 75% → 72% → 73% → 71% → 71% → 68% → 68% → 69% → 71%) shows the mid-corpus downward drift has reversed back to where it sat through most of the corpus's history. Per §4.2, rigour framing shows a small but statistically real gradient with domain risk; per §4.0, its gradient with tool adoption (`has_dbt`) clears significance at this n but at the smallest effect size this document reports.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for risk, and a small, real effect for tooling — the two are not cleanly separated by significance at this n.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=629) |
|-------------|---|---|
| moderate | 417 | 66% |
| high | 178 | 28% |
| low | 34 | 5% |

**Cross-tab with velocity_vs_rigour** (AE/BI only, n=610):

χ²=28.87, p<0.0001, V=0.15. **High-risk roles are detectably more rigour-dominant than moderate or low-risk roles** — 85% rigour at high risk, 67% at moderate, 50% at low. The relationship has held through every expansion, both dedup passes, and the 2026-08-22 audit's re-classification of ~30 records (§9.15) at essentially the same effect size. This confirms §4.0 Prediction 1's interpretation: domain risk carries the larger of the two effect sizes, and its lead over the `has_dbt` comparator (V=0.10) holds at this n (§4.0). The effect size stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is common everywhere but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=629) |
|--------------------|---|---|
| mid | 362 | 58% |
| mature | 171 | 27% |
| early | 96 | 15% |

**Just under three-fifths of roles are mid-stage.** Early-stage roles sit at 15%; genuinely mature organisations are 27%. APAC's own maturity mix (§9.5) runs somewhat more mature than the corpus average.

**Maturity × greenfield_vs_fix cross-tab** (χ²=239.88, p<0.0001, V=0.44, n=629 — the strongest relationship in the dataset, and stable across every expansion, dedup pass, and the 2026-08-22 audit):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 6% | 72% | 22% | 96 |
| mid | 30% | 7% | 63% | 362 |
| mature | 37% | 8% | 55% | 171 |

Greenfield work concentrates sharply at early-stage (72%) and is nearly absent at mature (8%). This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, at V=0.44.

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 10% | 25% | 65% | 96 |
| mid | 34% | 42% | 24% | 362 |
| mature | 26% | 37% | 37% | 171 |

χ²=57.83, p<0.0001, V=0.21 (n=629). Early-stage roles offer strategic autonomy at 65% — far above mid- or mature-stage roles (24% and 37%). Mid-stage remains the least strategic tier despite being the largest market segment. The core pattern — greenfield work and direction-setting cluster at early-stage companies — holds.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=629) |
|-------------------------|---|---|
| internal_data | 304 | 48% |
| mixed | 127 | 20% |
| commercial | 90 | 14% |
| finance | 65 | 10% |
| product | 43 | 7% |

**48% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market. APAC's own stakeholder mix isn't a standout finding — see §9.5.

**Cross-tab with rigour** (χ²=61.09, p<0.0001, V=0.22, n=629):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 14% | 86% | 0% | 65 |
| internal_data | 17% | 81% | 3% | 304 |
| mixed | 39% | 58% | 2% | 127 |
| product | 37% | 58% | 5% | 43 |
| commercial | 37% | 52% | 11% | 90 |

Finance and internal_data roles are the most rigour-dominant (81–86%); commercial, product and mixed roles split closer to evenly between rigour and mixed framing, and commercial carries the only meaningful velocity share (11%). This remains the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=629) |
|----------------|---|---|
| mixed | 238 | 38% |
| strategic | 213 | 34% |
| execution | 178 | 28% |

The three-way split persists, with `mixed` narrowly ahead of `strategic` and `execution` (38/34/28). This is within the range this corpus size produces from batch to batch and is not read as a trend toward `mixed` overtaking the other two categories structurally — just where the current n happens to land. This even distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=135.81, p<0.0001, V=0.33, n=629):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 74% | 26% | 0% | 27 |
| mid | 37% | 45% | 18% | 294 |
| senior | 18% | 34% | 47% | 256 |
| lead | 4% | 25% | 71% | 24 |
| manager | 0% | 30% | 70% | 10 |
| staff | 0% | 11% | 89% | 18 |

The relationship is statistically real (p<0.0001, V=0.33) and the practical read is stable: **"Mid" is the single largest title cohort (n=294) but "Senior" (n=256) is the more informative one, splitting 18/34/47 across execution/mixed/strategic — solidly more strategic-leaning than the corpus-wide split.** A "Senior Analytics Engineer" title is a meaningfully positive predictor of strategic scope, though far from deterministic (about a fifth of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (70–89%), but remain small cells. The practical implication for interviews is unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title is informative but still leaves real uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly three-quarters of the corpus, and the regional gap is significant on both cuts

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=629) |
|---------------|---|---|
| hiring_manager | 482 | 77% |
| mixed | 104 | 17% |
| recruiter | 43 | 7% |

**Hiring-manager-authored JDs are 77% of the corpus.** **The regional gap clears p<0.05 on both available cuts.** On the three-way regional comparison, APAC roles are 86% hiring-manager-authored and NYC-metro roles 84%, against 73% for the European majority (χ²=11.66, p=0.020, V=0.10, n=570; §9.13). The narrower binary APAC-vs-rest test reads χ²=7.15, p=0.028, V=0.11 (n=629; §9.5). Both effect sizes sit at the V≈0.10 floor used elsewhere on this page. Read the direction as established and the magnitude as modest.

Authorship and rigour framing were also tested against each other (χ²=10.11, p=0.039, V=0.09, n=629). The effect size is below the floor this document treats as its minimum, so no claim is made on it either way.

**Cross-tab with has_dbt** (χ²=40.27, p<0.0001, V=0.26, n=610, AE/BI only):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 30% | 70% | 469 |
| mixed | 56% | 44% | 99 |
| recruiter | 67% | 33% | 42 |

Hiring-manager-authored JDs name dbt at roughly 2× the rate of recruiter-authored ones (70% vs. 33%) — the relationship is stable and its effect size has strengthened slightly (V=0.26). Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.88 | 171 |
| mid | 2.52 | 362 |
| early | 2.78 | 96 |

Mature teams have the widest named-stakeholder count (2.88), mid the narrowest (2.52), and early sits between the two (2.78). The ordering matches every prior snapshot, but the whole spread is under half a named team. **This dimension still does not currently support a confident finding.** It is retained in the codebook for future corpus growth, but no claim built on it should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **63% of AE/BI roles (n=610) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last several snapshots (68%→66%→65%→66%→64%→65%→64%→63%→63%), including through both dedup passes, every subsequent expansion, and the 2026-08-22 audit's re-classification of ~30 records (§9.15). APAC AE/BI roles sit at the corpus average on this (60% vs. 64% for the rest of the corpus, p=0.57, §9.5). This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: roughly one in three roles don't name dbt at all, stable across eighteen consecutive corpus snapshots.

---

### 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=629, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.13. Findings below that threshold are directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.34, n=629)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=178) | 6% | 33% | 36% | 19% | 6% |
| low (n=34) | 6% | 0% | 68% | 21% | 6% |
| moderate (n=417) | 18% | 2% | 52% | 21% | 7% |

High-risk roles concentrate heavily in finance (33%, vs. 0% of low-risk and 2% of moderate-risk roles). Still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3). Product-facing roles remain rare in high-risk contexts (6%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (68%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: domain risk and mission type — a tested null (χ², p=0.42, V=0.06, n=629)

| domain_risk | fix_scale | greenfield | mixed |
|-------------|-----------|-----------|-------|
| high (n=178) | 29% | 19% | 52% |
| low (n=34) | 41% | 15% | 44% |
| moderate (n=417) | 27% | 17% | 56% |

The hypothesis was that higher stakes push work toward remediation rather than new building. It does not show up. Moderate-risk roles look the most "mixed" (incremental extension of an existing stack, 56%) and low-risk roles lean somewhat more toward fix_scale (41%) than moderate-risk ones (27%), but the differences are small and the test is well short of p<0.05. Whatever determines mission type, domain risk is not it — team maturity is (Finding C). Kept here as a documented test, not as a claimed finding.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.44, n=629)

Full cross-tab in §4.3. Greenfield work is 72% of early-stage roles and 8% of mature-team roles — the sharpest, most reliable relationship in the corpus, holding at V=0.44.

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (37%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt (37% of mature-team roles are fix/scale) — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.33, n=629)

Full cross-tab in §4.5. "Mid" (n=294) is the largest title cohort by count, but "Senior" (n=256) is the more informative title, spanning execution/mixed/strategic at 18/34/47 — noticeably more strategic-leaning than the corpus-wide split. Staff, manager, and lead titles (n=18, n=10, n=24) predict strategic scope near-perfectly (70–89%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=629 "Senior" is a meaningfully informative signal (47% strategic vs. an overall cohort rate of 34%) — the signalling account looks less contradicted than the n=123 baseline suggested, though about a fifth of senior roles remain pure execution, so the signal stays noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: Stakeholder orientation and autonomy level — a tested null (χ², p=0.21, V=0.09, n=629)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| product (n=43) | 23% | 30% | 47% |
| finance (n=65) | 29% | 32% | 38% |
| mixed (n=127) | 21% | 43% | 36% |
| commercial (n=90) | 26% | 41% | 33% |
| internal_data (n=304) | 33% | 37% | 30% |

The hypothesis was that who a role serves shapes how much direction it sets — that product- and finance-facing roles would carry more strategic scope than platform-facing ones. The ordering is in that direction (product 47% strategic, internal_data 30%), but the spread is narrow, the test does not clear p<0.05, and the effect size is below the V≈0.10 floor this document uses. On this corpus, the stakeholder label tells a candidate nothing reliable about decision rights. Ask in the interview instead (§7).

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.26, n=610)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 70% vs. 33% for recruiter-authored — the clearest authorship-quality signal in the dataset. Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

**Geography also predicts authorship, on both available cuts.** On the three-way regional comparison, APAC roles are 86% hiring-manager-authored and NYC-metro roles 84%, against 73% for the European majority (χ²=11.66, p=0.020, V=0.10, n=570; §9.13). The binary APAC-vs-rest test agrees (χ²=7.15, p=0.028, V=0.11, n=629). Two readings remain plausible and the JD text alone can't distinguish them: APAC hiring managers may write JDs more directly (less recruiter/ATS-template mediation in this sample), or the `jd_authorship` codebook's technical-specificity heuristic may be picking up an ATS-formatting convention specific to how these postings were sourced (many via LinkedIn/company career pages with detailed bullet-point tool lists) rather than true authorship. Given `jd_authorship`'s low self-consistency (0.58, §3) and an effect size sitting at the floor used elsewhere on this page, treat the direction as established and the magnitude as modest.

---

### Finding H: Work arrangement — driven almost entirely by geography, with significant secondary links to team maturity, mission type and autonomy (n=691 total / 629 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 35% of the analytical cohort) against all other categorical and boolean dimensions found one dominant driver: **where the job is**. `geo_region` is by far the strongest association (χ²=183.96, V=0.47, n=409 stated) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region. This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test is statistically unreliable at the sparse-cell level given 15 regions × 3 arrangement categories. Treat the direction as real, the p-value as decorative.

**APAC's own signature is significant on both cuts of the question.** Of the 108 APAC roles, 51% state no work arrangement at all, vs. 32% for the rest of the corpus. APAC's *stated* arrangements show a markedly higher onsite share (26% vs. 8% for the rest of the corpus) alongside a lower hybrid share (58% vs. 77%). Crossing the full four-category `work_arrangement` breakdown (hybrid/not_stated/onsite/remote) against APAC-vs-rest gives χ²=27.22, p<0.0001, V=0.21, n=629 — a small effect. Read this as APAC's work-arrangement profile (both what gets disclosed and, when disclosed, what it says) measurably differing from the rest of the corpus. Among the 53 APAC roles that do state an arrangement, hybrid still dominates numerically but the onsite share is among the largest of any region in the dataset, matched closely by the `nyc_metro` bucket (§9.13).

**Team maturity predicts arrangement on the stated subset: χ²=18.77, p=0.0009, V=0.15 (n=409 stated).** Mature teams post hybrid most often (84% of stated arrangements) vs. 59% for early-stage teams, who split more evenly across hybrid/onsite/remote (59% / 24% / 18%); mid-stage sits between the two (75% / 9% / 16%). The direction matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**Mission type also predicts arrangement: χ²=12.87, p=0.012, V=0.13 (n=409 stated).** Greenfield roles are the least hybrid-concentrated of the three (58%, vs. 76% fix/scale and 78% mixed) and carry both the highest onsite share (19%) and the highest remote share (22%). Some of this is the maturity relationship above showing through — greenfield work concentrates at early-stage companies (§4.3), and early-stage teams are the least hybrid-converged. A candidate reading this should not treat "greenfield" as a remote-friendly signal; it is a signal that the policy has not settled, in either direction.

**Autonomy level clears the threshold, narrowly: χ²=9.60, p=0.048, V=0.11 (n=409 stated).** Mixed-autonomy roles are the most hybrid-concentrated (81%), while strategic roles carry both the highest onsite share (16%) and the highest remote share (18%). The effect size sits at the V≈0.10 floor and the p-value is within a batch of the line, so read this as a weak pattern: roles that set direction are the ones most likely to be at either extreme of the office question, and least likely to be on the hybrid default.

**On the missing 35% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. Across maturity tiers it does not concentrate strongly — mature (39%), mid (35%), and early-stage (29%) withhold a policy at close to the same rate. Folding `not_stated` back in as a fourth category for the maturity test (rather than excluding it) is significant (χ²=22.40, p=0.001, V=0.13, n=629). This is a different question than the stated-only test above ("does maturity predict whether an arrangement is stated at all," answer: modestly, yes) and both readings are legitimate. "Does geography predict whether an arrangement is stated at all" is confirmed at conventional thresholds for APAC (above) — and the dashboard panel shows the maturity views.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `ai_role`, `testing_framing`, `loss_aversion_framing`, `language_gate_type`, and `stakeholder_orientation` (all p>0.20). `ats_platform` has the worst sparse-cell problem of any test run and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 35% of the analytical cohort states no work arrangement at all, and that rate is not uniform by region — APAC's 51% not-stated rate (above), combined with its distinct stated-arrangement mix (more onsite, less hybrid), is a confirmed, not merely directional, difference at this n. Whether it reflects different posting conventions (many APAC postings were sourced via LinkedIn/company career pages that omit a work-arrangement field entirely, or via channels more likely to post explicitly onsite roles) or genuine underlying differences in how APAC employers set policy is not resolvable from JD text alone.

---

### Finding I: With `ai_role`, `testing_framing`, and `loss_aversion_framing` coded on the full cohort (n=629; §9.3), a systematic sweep against every other categorical dimension and tool flag surfaces several relationships, all stable at the current n

**Testing accountability tracks the fear register closely (χ²=181.81, p<0.0001, V=0.38, n=629):**

| testing_framing | high | moderate | none |
|---|---|---|---|
| absent (n=128) | 9% | 34% | 58% |
| responsibility (n=416) | 32% | 62% | 6% |
| tool_listed (n=85) | 12% | 61% | 27% |

JDs that frame testing as an owned responsibility carry almost no `loss_aversion_framing = none` (6%, vs. 58% for `absent`-testing JDs). This is a construct-validity result as much as a substantive one: two dimensions coded independently, from different evidence quotes, land in the same place — a JD that asks the candidate to own data quality is, unsurprisingly, also a JD that is afraid of something going wrong. The `absent`/`none` corner (58%) is the "pure delivery" JD with no quality or risk register at all; the `responsibility`/`moderate` combination (62% of `responsibility`-coded JDs) is the modal case — quality ownership paired with garden-variety operational-reliability fear, not compliance framing.

**Loss aversion tracks rigour framing even more tightly than domain risk does (χ²=176.47, p<0.0001, V=0.38, n=629):**

| loss_aversion_framing | mixed | rigour | velocity |
|---|---|---|---|
| high (n=156) | 4% | 96% | 0% |
| moderate (n=351) | 23% | 75% | 2% |
| none (n=122) | 59% | 27% | 14% |

96% of `high`-loss-aversion JDs are rigour-framed, against 27% for JDs with no loss-aversion signal at all — still a far cleaner split than domain_risk's own relationship with rigour framing (§4.2, V=0.15). Read together with §4.2, this suggests `loss_aversion_framing` is picking up something closer to the JD's *actual* fear register than `domain_risk`'s sector-level proxy does — a JD can be sector-coded `moderate` risk but still carry `high` loss-aversion language if the role's specific responsibilities emphasise trust/audit framing (see Finding A's DiMaggio & Powell read, §4.9, for why sector and role-level framing can diverge).

**dbt-equipped roles are far more likely to frame testing as an owned responsibility (χ²=53.88, p<0.0001, V=0.30, n=610, AE/BI only):**

| testing_framing | has_dbt=False | has_dbt=True |
|---|---|---|
| absent (n=123) | 63% | 37% |
| responsibility (n=405) | 27% | 73% |
| tool_listed (n=82) | 45% | 55% |

This remains the strongest tool-stack relationship found for any of the three dimensions, and it cuts against a purely fashion-driven reading of dbt adoption: `has_dbt` JDs are 73% likely to frame testing as an owned responsibility, vs. 37% for JDs with no dbt mention — dbt's testing framework (`dbt test`) appears to travel with genuine ownership language, not just as a name-drop.

**`ai_role` and autonomy move together in an unexpected direction — `ai_user` and `ai_enabler` roles are both markedly more strategic than `none` (χ²=53.85, p<0.0001, V=0.21, n=629):**

| ai_role | execution | mixed | strategic |
|---|---|---|---|
| ai_enabler (n=157) | 16% | 33% | 51% |
| ai_user (n=95) | 16% | 38% | 46% |
| none (n=377) | 37% | 40% | 24% |

The naive expectation might be that "use AI coding tools" is a junior-coded, execution-heavy ask (accelerate scoped work faster) while "build AI-consuming infrastructure" is the more strategic mandate. The data shows the opposite ordering: both `ai_user` and `ai_enabler` JDs are markedly more strategic-leaning than `none` (51%/46% vs. 24%), holding the pattern seen at every prior n. One plausible read: JDs that expect AI-tool fluency, whether as user or infrastructure-builder, are disproportionately senior/lead-level postings at companies confident enough in their engineering culture to name a specific workflow expectation rather than a junior competency checkbox — the ask reads more like "operate at a higher level of leverage" than "be fast at typing." This is exploratory and not pre-registered (§4.0 only tested `ai_role × stakeholder_orientation`); it's flagged here as a candidate for a future prediction, not a confirmed causal story.

**`ai_role` also tracks `greenfield_vs_fix` (χ²=33.88, p<0.0001, V=0.16, n=629):**

| ai_role | fix_scale | greenfield | mixed |
|---|---|---|---|
| ai_enabler (n=157) | 16% | 26% | 58% |
| ai_user (n=95) | 20% | 24% | 56% |
| none (n=377) | 35% | 12% | 53% |

Both `ai_enabler` and `ai_user` roles show meaningfully more greenfield work (26%/24%) than `none` roles (12%). This dovetails with the `ai_role × autonomy_level` finding above: greenfield work and strategic autonomy already travel together generally (§4.3), so some of the "AI roles skew strategic" pattern may be downstream of "AI roles skew greenfield" rather than a direct effect of the AI expectation itself. Disentangling the two would need a three-way cross-tab at a larger n than this corpus currently supports.

**Everything else involving the three new dimensions tested null or only weakly suggestive** (p>0.05 or V<0.15): no meaningful association between `ai_role`/`testing_framing`/`loss_aversion_framing` and `seniority`, `urgency`, or most individual BI-tool flags. `testing_framing × geo_region` remains a sparse-cell test (15 regions × 3 categories, several expected cells <1) and should be treated as decorative, not evidential, despite APAC's own testing_framing mix not standing out as directionally interesting (§9.5).

---

### Summary of relationships tested

All figures recomputed against the current corpus (n=629 analytical cohort; n=610 AE/BI). Relationships below the V≈0.10 effect-size floor are reported as nulls regardless of p.

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | <0.0001 | 0.15 | Small real effect — high-risk roles 85% rigour vs. 50% low-risk (n=610 AE/BI) |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.036 | 0.10 | Significant, but sitting exactly on the effect-size floor this document treats as its minimum; a weak association, see §4.0 |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.070 | 0.11 | Not significant — AI expectations do not concentrate by who the role serves (§4.0, §4.10) |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.34 | Strongest relationship after maturity × mission: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.44 | Near-deterministic: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.42 | 0.06 | Null — domain risk does not predict mission type (Finding B) |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.26 | Hiring-manager JDs name dbt ~2× more than recruiter JDs (70% vs. 33%) |
| geo_region (APAC vs. rest) × work_arrangement (4-category) | χ² | <0.0001 | 0.21 | APAC's not-stated rate (51% vs. 32%) and its stated-arrangement mix (more onsite, less hybrid) both differ measurably from the rest of the corpus; Finding H, §9.5 |
| geo_region (APAC vs. rest) × jd_authorship | χ² | 0.028 | 0.11 | APAC 86% hiring-manager-authored vs. 75% for the rest of the corpus; agrees with the three-way regional test below (§4.6, §9.5) |
| seniority × autonomy_level | χ² | <0.0001 | 0.33 | "Senior" (n=256) predicts strategic scope at 47%, against a cohort rate of 34%; "Mid" (n=294) is the larger but less informative cohort |
| stakeholder_orientation × autonomy_level | χ² | 0.21 | 0.09 | Null on both counts — the stakeholder label does not predict decision rights (Finding E) |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.22 | Finance/internal_data most rigour-dominant (81–86%); commercial carries the most velocity framing (11%) |
| jd_authorship × velocity_vs_rigour | χ² | 0.039 | 0.09 | Below the effect-size floor — no claim made either way (§4.6) |
| collaboration_width × data_team_maturity | — | — | — | Does not support a claim at n=629 (§4.7) |
| work_arrangement × geo_region (stated subset) | χ² | <0.0001 | 0.47 | Strongest association found, but unreliable — most cells <5 (Finding H) |
| language_gate_type × geo_region (3-way: Europe/APAC/NYC metro) | χ² | <0.0001 | 0.23 | **Largest region effect in this document.** Hard/soft language gates: Europe 38.7%, APAC 9.3%, NYC metro 0% — near-exclusively a European phenomenon; §9.13, n=570 |
| work_arrangement × geo_region (3-way) | χ² | <0.0001 | 0.19 | APAC most silent (51% not stated) and most onsite-leaning when stated; §9.13 |
| velocity_vs_rigour × geo_region (3-way) | χ² | 0.0015 | 0.12 | `rigour` share steps down Europe 74.7% → APAC 71.3% → NYC 54.9%; part framing dialect, part risk composition (below); §9.13 |
| stakeholder_orientation × geo_region (3-way) | χ² | 0.0099 | 0.13 | `mixed` orientation rises outside Europe (15.8% → 25.9% → 33.3%); §9.13 |
| greenfield_vs_fix × geo_region (3-way) | χ² | 0.0076 | 0.11 | `greenfield`-coded climbs Europe 14.1% → APAC 19.4% → NYC 33.3%; §9.13 |
| data_team_maturity × geo_region (3-way) | χ² | 0.008 | 0.11 | Europe is the most mid-stage arm (61% vs. APAC 47%, NYC 45%); APAC carries more mature teams, NYC more early-stage; §9.13 |
| jd_authorship × geo_region (3-way) | χ² | 0.020 | 0.10 | APAC 86.1% and NYC 84.3% hiring-manager-authored vs. Europe 72.7%; at the effect-size floor; §9.13 |
| domain_risk × geo_region (3-way) | χ² | 0.026 | 0.10 | `high` domain_risk climbs step-wise Europe 25.3% → APAC 34.3% → NYC 43.1%, at the effect-size floor — enough to keep regional risk composition as a live confound behind the rigour gradient above; §9.13 |
| work_arrangement × data_team_maturity (stated subset) | χ² | 0.0009 | 0.15 | Mature teams skew hybrid (84%), early-stage teams split across all three (Finding H) |
| work_arrangement × greenfield_vs_fix (stated subset) | χ² | 0.012 | 0.13 | Greenfield roles are the least hybrid-concentrated (58%) and the most polarised between onsite and remote (Finding H) |
| work_arrangement × autonomy_level (stated subset) | χ² | 0.048 | 0.11 | Strategic roles carry both the highest onsite and highest remote shares; clears p<0.05 narrowly, at the effect-size floor (Finding H) |
| work_arrangement × everything else (tool stack, seniority, rigour, domain risk, language gate) | χ² | >0.20 | ≤0.12 | Null — unrelated to arrangement |
| loss_aversion_framing × domain_risk | χ² | <0.0001 | 0.39 | 69% of high-loss-aversion JDs are high-domain-risk (Finding I) |
| testing_framing × loss_aversion_framing | χ² | <0.0001 | 0.38 | Quality-ownership and fear-register track each other closely (Finding I) |
| loss_aversion_framing × velocity_vs_rigour | χ² | <0.0001 | 0.38 | Cleaner than domain_risk's own link to rigour — 96% of high-loss-aversion JDs are rigour-framed (Finding I) |
| testing_framing × has_dbt | χ² | <0.0001 | 0.30 | dbt JDs 73% likely to frame testing as owned responsibility vs. 37% without dbt (Finding I) |
| testing_framing × jd_authorship | χ² | <0.0001 | 0.21 | Hiring-manager JDs skew toward `responsibility`/`tool_listed`, recruiter JDs toward `absent` (Finding I) |
| ai_role × autonomy_level | χ² | <0.0001 | 0.21 | Unexpected direction: `ai_user` and `ai_enabler` roles (46–51% strategic) lead `none` (24%) (Finding I) |
| ai_role × greenfield_vs_fix | χ² | <0.0001 | 0.16 | `ai_enabler`/`ai_user` roles carry more greenfield work than `none` roles (Finding I) |
| **Responsibility themes (§4.13)** | | | | |
| Mentorship & Leadership × autonomy_level | χ² | <0.0001 | 0.25 | 7%→13%→30% execution→mixed→strategic; survives a seniority control **within senior titles only** (9%→22%→31%); flat within mid (§4.13) |
| Data Infrastructure & Warehouse Ops × jd_authorship | χ² | <0.0001 | 0.23 | Hiring-manager JDs name infrastructure responsibilities at 58% vs. 12% recruiter (§4.13) |
| Self-Service Enablement × data_team_maturity | χ² | 0.006 | 0.13 | 26% early → 37% mid → 46% mature (§4.13) |
| Architecture & Platform Strategy × work_arrangement | χ² | 0.41 | 0.07 | Documented null, kept as a worked example of a screen-only finding that did not survive (§4.13) |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language narrows once fully coded, but stays real

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. **Coded on the full analytical cohort (n=629)** — a bug in `scripts/write_jd.py` had silently dropped this field (and `testing_framing`, `loss_aversion_framing`) from JSON output for a long stretch of the corpus even when correctly classified; the backlog was fully re-coded against the JD archive text and the codebook (§9.3).

| ai_role | n | % (n=629) |
|---------|---|---|
| none | 377 | 60% |
| ai_enabler | 157 | 25% |
| ai_user | 95 | 15% |

This is Prediction 2 from §4.0. **60% of JDs expect no AI skill from the candidate**, against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. The gap between claimed personal-workflow adoption and formal hiring criteria has narrowed by a couple of points but stays wide. The movement comes almost entirely from one batch: 16 of the 36 JDs added 2026-09-14 are `ai_enabler`, the densest such batch in the corpus, which lifts the corpus-wide `ai_enabler` share from 23% to 25% (§3). What is growing is the infrastructure-for-AI ask, not the expectation that the candidate personally uses AI tools — `ai_user` is flat at 15%. χ² for `ai_role` × `stakeholder_orientation` (n=629) remains non-significant (p=0.070, V=0.11; §4.0): the `ai_enabler` cohort leans toward `internal_data` and `mixed` stakeholder orientation, and `ai_user` leans similarly, but not enough to separate them.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption; this is the growing quarter of the market. `ai_user` roles → demonstrate fluency with AI coding tools directly (Copilot, Claude Code, Cursor) as a nontrivial minority expectation. `none` (still the majority at 60%) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

`ai_role` continues to track `autonomy_level` (χ²=53.85, p<0.0001, V=0.21) and `greenfield_vs_fix` (χ²=33.88, p<0.0001, V=0.16) at n=629 — see Finding I (§4.9) for the counter-intuitive direction (`ai_user` and `ai_enabler` roles skew *more* strategic and *more* greenfield, not less).

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. **Coded on the full analytical cohort (n=629)** — see §9.3 for the write-pipeline bug that delayed this.

| testing_framing | n | % (n=629) |
|-----------------|---|---|
| responsibility | 416 | 66% |
| absent | 128 | 20% |
| tool_listed | 85 | 14% |

**66% of JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language, up two points from 64% at n=576. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former. `testing_framing × velocity_vs_rigour` is significant (χ²=79.86, p<0.0001, V=0.25, n=629): `responsibility`-coded JDs are 82% rigour-framed vs. 46% for `absent`-coded JDs — testing ownership and rigour framing move together but are not the same signal, since a substantial share of the cohort is rigour-framed with no testing-ownership language at all.

The 20% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

`testing_framing`'s strongest tool-stack link (`has_dbt`, χ²=53.88, p<0.0001, V=0.30, n=610) and its links to `jd_authorship` (χ²=54.65, p<0.0001, V=0.21) and `loss_aversion_framing` (χ²=181.81, p<0.0001, V=0.38) all hold at n=629 — see Finding I (§4.9) for detail. APAC roles sit two points above the corpus average on `responsibility` framing (68% vs. 66%), a difference too small to test as real; §9.5.

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. **Coded on the full analytical cohort (n=629)** — see §9.3.

| loss_aversion_framing | n | % (n=629) |
|-----------------------|---|---|
| moderate | 351 | 56% |
| high | 156 | 25% |
| none | 122 | 19% |

Roughly four in five JDs carry some fear signal, but it's still predominantly operational (56%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing rises to 25%, up three points from 22% at n=576 — the 2026-09-14 batch's medtech, pharma and payments concentration is the driver (§3). `loss_aversion_framing × domain_risk` is the strongest relationship among these three dimensions (χ²=189.22, p<0.0001, V=0.39, n=629): of JDs with `high` loss-aversion framing, 69% are `high`-domain-risk and none are `low`-risk — the fear register tracks real domain stakes closely, which is reassuring for the codebook's construct validity on this dimension. `high` loss-aversion framing remains concentrated in finance-adjacent and regulated-sector roles. APAC's own `high` rate runs above the corpus average (31% vs. 24% for the rest of the corpus), but the difference is not statistically distinguishable at this n (p=0.31, §9.5).

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

### 4.13 What the responsibility text itself predicts — a second, independent classification pass

Everything above classifies each JD as a whole against the ten Layer B dimensions. This section takes a different cut of the same corpus: it works from each JD's responsibilities section, captured **verbatim** from the posting at classification time and stored in that JD's own record (`data/<jd_id>/<jd_id>.json`, field `responsibilities`), then keyword-classifies each bullet against a fixed 16-theme taxonomy (Data Modeling & Transformation, Stakeholder Collaboration, Mentorship & Leadership, AI & Agentic Workflows, and so on — full definitions and the keyword pattern behind each theme are in `analysis/responsibility_taxonomy.md`).

**This pass was re-founded on 2026-08-30** (§9.19). Bullets were previously derived at analysis time by a regex over the archived text, with a hand-curated fallback file for the JDs it could not parse; they are now captured once, by the same pass that codes the Layer B dimensions, and machine-verified — `scripts/write_jd.py` refuses to write a record unless every bullet is a literal substring of the archived JD text. Coverage now stands at **686 of 691 JDs and 5,591 bullets** — 675 verbatim copies, 11 records whose postings describe the role only in running prose, and 5 with an explicit empty list because the posting carries no responsibilities content at all. Percentages in this section are **not** comparable to those in revisions before 2026-08-30 — the earlier figures were computed over a systematically incomplete extraction, not a smaller sample of a complete one. §9.19 documents what was wrong and how it was measured.

Because each theme is a binary per-JD indicator, it can be crossed against any Layer B dimension as an ordinary 2×k contingency table — the question this section asks is which *specific responsibilities* go with which *behavioural traits*, not just which traits co-occur with each other (§4.9). The 625 analytical-cohort JDs with a theme reading are the denominator for every relationship below.

The most prevalent themes are Stakeholder Collaboration & Requirements (77% of JDs with a reading), Data Modeling & Transformation (76%), Data Quality & Testing (72%), BI & Reporting/Dashboards (70%), and Governance & Documentation (66%). AI & Agentic Workflows sits at 31% — the sixteenth theme, added after an earlier corpus audit found the original 15-theme taxonomy had no bucket for AI-referencing responsibility bullets despite over a third of JDs containing them; it tracks closely with the Layer B `ai_role` dimension by construction (§ construct-overlap below).

| Theme | % of JDs with a reading | Bullets |
|---|---|---|
| Stakeholder Collaboration & Requirements | 77.1% | 1053 |
| Data Modeling & Transformation | 75.5% | 1196 |
| Data Quality & Testing | 71.7% | 900 |
| BI & Reporting/Dashboards | 70.3% | 1052 |
| Governance & Documentation | 65.7% | 766 |
| Pipeline Engineering & Orchestration | 61.2% | 630 |
| Business Analysis & Insight Generation | 55.2% | 683 |
| Data Infrastructure & Warehouse Ops | 53.2% | 578 |
| Performance & Cost Optimization | 47.2% | 510 |
| Architecture & Platform Strategy | 43.1% | 457 |
| Self-Service Enablement & Data Literacy | 36.7% | 331 |
| Data Ownership (end-to-end) | 33.5% | 322 |
| AI & Agentic Workflows | 31.0% | 337 |
| Mentorship & Leadership | 15.9% | 117 |
| Security, Privacy & Risk | 14.1% | 125 |
| Vendor & Tooling Evaluation | 3.9% | 28 |

Every theme's share sits within a point of the previous revision's, so this batch reinforces the ranking rather than moving it. 83% of bullets match at least one theme; the remaining 17% are duties too specific or rare to warrant a theme of their own, not bullets the extraction missed.

**The auto-correlation risk, and how it's handled.** Several theme/dimension pairs are excluded from the findings below because they're circular, not because they're weak — the theme's regex keywords and the dimension's own LLM coding rubric detect the same textual signal. The single strongest pairing in the entire sweep, "AI & Agentic Workflows" vs. `ai_role` (V=0.67), is excluded on exactly this basis, followed closely by "Data Quality & Testing" vs. `testing_framing` (V=0.50): `testing_framing` is coded by looking for testing/quality language in the JD, so crossing it against a theme built from testing/quality keywords mostly measures whether two classification methods agree with each other. The same logic excludes "Security, Privacy & Risk" vs. `loss_aversion_framing` (V=0.30) and `domain_risk` (V=0.17), "Data Ownership" vs. `autonomy_level` (V=0.28, whose own rubric lists "own" as a strategic-verb signal), "Data Modeling & Transformation" vs. `has_dbt` (V=0.22), "Pipeline Engineering & Orchestration" vs. `has_airflow` (V=0.16), and "BI & Reporting/Dashboards" vs. tool flags whose name is literally embedded in that theme's regex (`has_power_bi` V=0.25, `has_tableau` V=0.12, `has_looker` V=0.12). See `OVERLAP_PAIRS` in `responsibility_taxonomy.py` for the full list.

**Three relationships survive that screen at p<0.01 with no keyword overlap and a reasonable effect size, and are reported here — with different levels of confidence:**

1. **Mentorship & Leadership × `autonomy_level` (χ²=40.08, p<0.0001, V=0.25, n=625) — the relationship in this section with the largest effect, and the one whose confounder check is most informative.** Mentorship/leadership language climbs from 7% of execution-coded JDs to 13% mixed to 30% strategic. Because `autonomy_level` and seniority title are themselves correlated (§4.5), this could be seniority in disguise, so it is re-tested within seniority strata. **The two strata behave differently, and that difference is the finding.** Within "Senior" titles alone the gradient is 9%→22%→31% (execution→mixed→strategic, χ²=9.15, p=0.010, n=255) — a real gradient that survives the control. Within "Mid" titles alone it is 5%→5%→6% (p=0.95, n=291): flat, on a base rate low enough that no gradient could be detected there reliably either way. **Once a posting is pitched at senior level, autonomy framing predicts mentorship scope better than the title does; at mid level, mentorship language is uncommon across all autonomy levels and its absence tells a candidate little.**
2. **Data Infrastructure & Warehouse Ops × `jd_authorship` (χ²=34.13, p<0.0001, V=0.23, n=625) — clean-screen only, not independently confounder-checked.** Hiring-manager-authored JDs name warehouse/infrastructure responsibilities at 58% vs. 12% for recruiter-authored (mixed-authorship JDs sit at 45%) — a considerably wider gap than authorship's already-known link to whether dbt is merely named (§4.6, §4.9 Finding G). Directionally consistent with the revealed-preference logic elsewhere in this document (naming a platform's actual cost/governance responsibilities requires knowing the team's real infrastructure problem, not just its tool list), but this specific pairing has not been re-tested against a plausible confounder the way (1) was.
3. **Self-Service Enablement & Data Literacy × `data_team_maturity` (χ²=10.15, p=0.006, V=0.13, n=625) — the weakest of the three.** Self-service and data-literacy responsibilities rise with team maturity: 26% of early-stage JDs, 37% mid, 46% mature. The direction is intuitive — enabling other people to serve themselves presupposes a platform worth serving from — and it matches the §4.3 maturity story. But the effect size sits just above the V≈0.10 floor this document treats as its minimum, and it does not make the top twenty of the clean-findings list by effect size. Report it as a current finding, not a settled one.

**A relationship that looked real and didn't survive scrutiny — kept as a worked example, not dropped:** `Architecture & Platform Strategy × work_arrangement` at one point cleared the p<0.01 screen and on its own read as a headline — "remote roles carry less architectural scope." A taxonomy audit corrected several loose keywords in this theme, and the pairing **does not clear the screen at current corpus size** (χ²=2.88, p=0.41, V=0.07, n=625; overall: hybrid 44%, remote 38%, onsite 51%, not_stated 40%) — it was never a stratification failure story to begin with; it was a keyword-precision artifact of the looser pre-audit pattern, and it remains a null after the fix. The stratification breakdown is kept below as a worked example of *why* a stratification check matters, but the more direct lesson from this specific relationship turned out to be about pattern precision, not confounding:

- Within `data_team_maturity=early`: hybrid 38% (n=40); remote 8% (n=12); onsite 50% (n=16); not_stated 39% (n=28)
- Within `data_team_maturity=mid`: hybrid 41% (n=175); remote 46% (n=39); onsite 50% (n=20); not_stated 36% (n=124)
- Within `data_team_maturity=mature`: hybrid 54% (n=87); remote 40% (n=10); onsite 57% (n=7); not_stated 46% (n=67)

Split by maturity tier, `remote` stops being the lowest group: it is the lowest in the early tier (8%, on n=12) and mid-pack in the other two. The consistently-lowest group in every tier is `not_stated` instead. Several strata have single-digit cell counts, which makes any reading of this pairing mostly noise rather than signal, unstratified or not.

**Why this pairing was checked and the others weren't, and what that means for reading them:** the architecture/work-arrangement check was run first, specifically because "remote work correlates with less architectural ownership" was the kind of clean, quotable claim that warranted scrutiny before being written up — and it failed, twice over (once on stratification, then again on keyword precision once the taxonomy was audited). That's informative about the corpus and the method generally: a p<0.01, no-keyword-overlap screen alone is not sufficient here, and it isn't even stable across a keyword-pattern correction that didn't touch the underlying JD text at all — only the regex used to read it. Relationships (2) and (3) above have only cleared that screen, not a stratification check; relationship (1) is the only one confounder-checked — and that check is what narrowed its claim to senior titles. Treat (1) as confounder-checked, (2) and (3) as "survived the screen, unstratified," and treat any theme-based finding in this section as provisional against future taxonomy-precision fixes, not just against future data.

**How this section could be wrong, more broadly:**

- **Multiple comparisons.** The full sweep tests all 16 themes against every coded dimension (304 pairs) with no Bonferroni or FDR correction. At p<0.01 across that many tests, some number of the "clean" pairs are expected false positives by chance alone — this is exactly the failure mode the debunked architecture pairing demonstrates directly, not hypothetically.
- **Post-hoc selection.** The featured relationships were chosen *after* seeing effect sizes, then (in one case) checked — not pre-registered, unlike §4.0's two predictions. This is the "garden of forking paths" pattern this document otherwise tries to avoid (§4.0); it's disclosed rather than hidden here because the theme classification itself is a newer, more exploratory layer on top of the pre-registered Layer B analysis.
- **Two independent classification methods, two independent error rates.** Every relationship compounds the keyword theme-classifier's error rate with whatever error rate the paired Layer B dimension's LLM coding carries — `jd_authorship` specifically has the lowest self-consistency of any dimension in the codebook (0.58, §3), so relationship (2) above should be read with that additional caveat.
- **Cross-sectional text, not causal evidence.** Every relationship here is a same-JD language co-occurrence, not a causal claim — "mentorship language correlates with strategic-autonomy language" says nothing about which drives which, or whether both are downstream of an uncoded third factor (company size, funding stage, sector) this corpus can't check.
- **The stratification checks are not exhaustive.** Surviving one plausible confounder (seniority, for relationship 1) doesn't rule out others not tested. Company size and sector are not coded dimensions in this corpus.
- **Extraction and keyword precision are demonstrated sources of drift in their own right, distinct from sample-size drift.** This section has moved twice for reasons unrelated to corpus growth: once when the Architecture theme's keywords were corrected, and again — far more consequentially — when bullet extraction moved from a regex over archived text to verbatim capture at classification time (§9.19), which changed theme prevalences by up to 4.8pp and narrowed the mentorship finding to senior titles only. Every number in this section is a function of both how the bullets were obtained and `responsibility_taxonomy.py`'s current keyword patterns, as much as of the underlying text.
- **A false-positive mode that is now closed, and worth naming.** The previous extractor had no way to tell whether the page it was reading was a job posting at all. In one confirmed case (`emnify`) it mined six "You'll …" sentences out of a mis-scraped careers landing page — one blurb each for Engineering, Finance, Sales, Legal, HR and Product — and the taxonomy tagged that single record with four themes, including Mentorship & Leadership drawn from the HR blurb. That record now correctly carries no themes. Findings in earlier revisions of this section absorbed an unknown but non-zero amount of this kind of noise.

Full theme definitions, all 304 tested pairs, the complete construct-overlap table, and this same write-up regenerated fresh on every corpus update live in `analysis/responsibility_taxonomy.md` (`./.venv/bin/python analysis/responsibility_taxonomy.py` to reproduce — bare `python3` has no scipy). This section was reconciled against that file's current regeneration, run against the full corpus (n=691 total / 629 analytical cohort, 625 with a theme reading). All three featured relationships and the debunked example held through this expansion.

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=629 analytical cohort) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 71% rigour-oriented; 66% frame testing as an owned responsibility | Confirmed at the orientation level and at the testing-accountability level; both rose two points at this n (§4.1, §4.11) |
| 72% use AI in coding workflows daily | 60% of JDs expect no AI skill; 15% name AI coding tools directly (`ai_user`) | Gap narrows by two points but stays wide — Prediction 2 (§4.0), first half holds, second half (structural concentration) remains non-significant |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability 66%; AI hiring signal 40% (`ai_enabler`+`ai_user`) | Governance accountability is still further institutionalised than AI hiring criteria, but the gap is closing from the AI side: `ai_enabler` grew from 23% to 25% this batch while `ai_user` stayed flat (§4.10) |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 25%; 56% carry operational-reliability concerns | Not confirmed — the dominant fear is operational reliability, not AI-trust hallucination. `high` rose three points on this batch's medtech/pharma/payments mix, so this is a sector-composition move, not a shift in what employers fear |
| Rigour framing tracks risk/stakes | χ²=27.96, p<0.0001, V=0.15 (n=629; §4.0/§4.2, Prediction 1) | Confirmed for `domain_risk`. The `has_dbt` comparator (§4.0) is also significant, at a smaller effect size (V=0.10) — rigour tracks risk more strongly than tool adoption, but the two are not cleanly separated by significance |
| dbt is the field standard | 63% of AE/BI JDs mention dbt (n=610) | Real but not universal; roughly one in three AE/BI roles run dbt-free stacks; stable across eighteen consecutive snapshots, including in the APAC subset specifically (§9.5) |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (66% of coded roles) than AI hiring criteria (40% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

---

## 6. Secondary theoretical reads

§4.0 establishes Abrahamson's management fashion theory as the primary, pre-specified frame, tested against two explicit predictions. The lenses below are applied afterward, to findings the primary frame doesn't reach — they are exploratory interpretive tools, not additional confirmatory tests. Each is noted where it is supported, contradicted, or in tension with another lens on the same finding (§4.9's Findings A–G carry the detailed per-finding reads).

**Deming & Kahn (2018) — revealed preference:** the foundational assumption of this whole analysis — JD requirements carry hiring cost, survey answers don't. Finding G (§4.9) refines this: the *fidelity* of a revealed preference depends on who wrote it. A hiring-manager-named dbt requirement is higher-fidelity evidence than a recruiter-named one.

**DiMaggio & Powell (1983) — coercive isomorphism:** supported by Finding A (§4.9) — finance-facing roles are shaped by external regulatory mandate (audit, IFRS) more than by employer preference, which is what concentrates high domain risk there. It does not extend to autonomy: finance roles split across execution/mixed/strategic much like the rest of the cohort (Finding E).

**Spence (1973) — signalling:** partially contradicted by Finding D (§4.9) — "Senior" predicts autonomy moderately at best (47% strategic against a cohort rate of 34%); staff/manager titles predict it more cleanly but on too few cases to generalise.

**Rogers (2003) — diffusion:** strongly supported by Finding C's maturity × mission relationship (early=greenfield, mid=mixed, mature=fix/scale), with one anomaly (mature teams' meaningful fix_scale share) better explained by Collingridge's control-dilemma framework than by Rogers' stabilisation model.

**Collingridge (1980) — control dilemma:** supported by the mature/fix_scale anomaly in Finding C — mature organisations disproportionately face costly late-stage correction rather than incremental adjustment. The lens does not extend to domain risk, which Finding B tests and finds unrelated to mission type.

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

**Current state: all three dimensions are coded on the full analytical cohort (n=629, including all JDs added since the fix, surviving both 2026-07-25 dedup passes, every subsequent expansion, and the 2026-08-22 audit's re-classifications, §9.9–§9.18)**, with consistent `evidence.{dim}` (quote) + `evidence.{dim}_explanation` (reasoning) entries on every record, and no legacy-format duplication. Findings in §4.10–4.12 and Prediction 2 (§4.0) are stated against the full current n, not a small coded subset — this changed several conclusions materially when the fix first landed at n=272 (§4.0, §4.10), and the corpus has grown, been deduplicated twice, grown again multiple times, and been audited and corrected since without disturbing that fix.

### 9.4 What n=629 supports

At n=629, the margin of error on a single proportion is approximately ±3.5pp at 95% confidence (Wilson interval, evaluated at the §4.1 rigour proportion) — the 71% rigour finding (§4.1) is defensible as "likely between 67% and 74%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above.

Growth from the n=123 baseline to n=629 has tightened every interval and, along the way, moved several marginal relationships across the p<0.05 line in both directions. What that means in practice: any relationship this document reports at V≈0.10 is one batch away from reading differently, and should be acted on as a direction rather than a measurement. Four relationships sit in that band right now — `velocity_vs_rigour × has_dbt`, `geo_region (APAC) × jd_authorship`, `autonomy_level × work_arrangement`, and `domain_risk × geo_region`.

The strongest relationships have been stable at every n from 123 upward, through both dedup passes and the 2026-08-22 audit's re-classifications: maturity × mission (V=0.44), domain_risk × stakeholder (V=0.34), seniority × autonomy (V=0.33), and the loss-aversion/testing/rigour cluster (V=0.38–0.39). Those are the findings this corpus size genuinely supports. Headline distributions moved by at most three points across the 2026-09-14 batch — rigour 69%→71%, testing responsibility 64%→66%, `high` loss aversion 22%→25%, `ai_enabler` 23%→25%, `has_dbt` flat at 63%.

### 9.5 What the geographic concentration means, and what the APAC stratum shows

This remains a primarily European, Berlin-heavy dataset. The APAC stratum, built by a deliberate scraping pass in late July and reinforced by subsequent batches (§9.8, §9.9, §9.14, §9.17), holds at **108 roles (17% of the analytical cohort)** and remains the largest single geographic bucket in the corpus, ahead of UK/remote — large enough to run a direct APAC-vs-rest-of-corpus comparison rather than only disclaiming the gap, as earlier snapshots of this document had to.

**Most substantive dimensions track closely.** Domain risk (62% moderate vs. 67%), data team maturity (47% mid vs. 60%), dbt prevalence (60% vs. 64%), `testing_framing` mix (68% responsibility vs. 66%), and rigour orientation (71% vs. 71%) all sit within a normal range of the non-APAC corpus. `loss_aversion_framing = high` runs higher (31% vs. 24%) but not distinguishably so (p=0.31). None of the risk/maturity/dbt/testing/rigour/loss-aversion comparisons are statistically distinguishable at this n.

**Two dimensions do differ measurably:**

| Dimension | APAC (n=108) | Rest of corpus (n=521) | Test |
|---|---|---|---|
| `jd_authorship = hiring_manager` | 86% | 75% | χ²=7.15, p=0.028, V=0.11 |
| `work_arrangement` (full 4-category: hybrid/not_stated/onsite/remote) | 29% / 51% / 13% / 7% | 52% / 32% / 6% / 10% | χ²=27.22, p<0.0001, V=0.21 |

The `jd_authorship` gap clears p<0.05 on both cuts — this binary test and the three-way regional comparison (χ²=11.66, p=0.020, V=0.10, §9.13) — at an effect size sitting at the floor used elsewhere on this page. `jd_authorship`'s LLM self-consistency is the lowest of any dimension in the codebook (0.58, §3), so part of this gap could be a codebook-boundary artefact interacting with how APAC postings happen to be formatted (many sourced via LinkedIn/company career pages with detailed technical bullet lists, which the heuristic may read as "hiring-manager-authored" regardless of who actually wrote them) rather than a real difference in who authors these JDs. Treat the direction as established, the magnitude as modest, and the mechanism as unresolved.

The work-arrangement picture differs in kind, not just degree. APAC's not-stated rate is 51% against 32% for the rest of the corpus, and among the 53 APAC roles that do state an arrangement the onsite share is 26% against 8% elsewhere, with hybrid correspondingly lower (58% vs. 77%). For a candidate, the consequence is concrete: an APAC posting that says nothing about work arrangement is a weaker signal of hybrid-by-default than a European one, and worth asking about before the offer stage.

**What this does and doesn't license:** the JD data cannot distinguish "APAC employers write JDs differently" from "this specific sample happens to have been sourced through channels that produce more hiring-manager-style, or more onsite, postings" — the collection method for this stratum (several distinct scraping passes, not the same multi-month opportunistic accumulation as the European portion) is a real confound. Treat the substantive-dimension comparisons (risk, maturity, dbt, testing framing, rigour) as reasonably solid — a genuine absence of large, confirmable difference across several independently-coded dimensions. Treat the work-arrangement finding as real at this n.

The dbt survey itself skews North American, though post-2023 reports don't disclose the exact split — this dataset's only US stratum is a single metro (§9.13), and the 71% rigour figure should not be assumed to hold in the US market without separate data.

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

### 9.9 2026-07-31 through 2026-08-05 expansions (three batches, documented together)

Three further batches were added to the corpus without an accompanying report update at the time — this section covers all three together, reconciling the report to the corpus as it now stands rather than reconstructing what each individual batch changed in isolation.

**2026-07-31:** Eleven new JDs (9 AE/BI, 1 `team_lead`, 1 `data_engineering` excluded from the cohort) — ALTEN, Appfire (×2), Asana, Dentsply Sirona, eXalt, ITT Inc. (×2), Netflix, Rippling, Vinted. 10 in the analytical cohort. `domain_risk`: moderate 8, low 1, high 1. `data_team_maturity`: mature 4, mid 3, early 3 — notably more mature-skewed than the standing corpus average. `geo_region`: other_europe 4, France 2, Benelux 2, global_remote 1, Ireland 1 — no APAC in this batch. `seniority`: senior 5, mid 3, junior 1, lead 1.

**2026-08-01:** Eleven new JDs (7 AE/BI, 4 `data_engineering` excluded from the cohort) — 1KOMMA5°, Accenture (×2), Amazon, Google, instinctools, Northius, Siemens Energy, Technology & Strategy, The One Enterprise, Toss. 7 in the analytical cohort — the smallest cohort contribution of any dated batch to date, since more than a third of this batch classified as `data_engineering` rather than AE/BI. `domain_risk`: moderate 6, high 1. `data_team_maturity`: mid 5, mature 1, early 1. `geo_region`: Iberia 2, Berlin 1, Benelux 1, other_europe 1, dach_other 1, apac 1. `seniority`: senior 3, mid 3, junior 1.

**2026-08-05:** Fifteen new JDs, all AE/BI (no `team_lead`/`data_engineering`/`other` this batch) — Grasshopper, Canva, Bulla Dairy Foods, Love Bonito, Mimecast, team.blue, IPRoyal, RIXT.IT, Kilo, Clovr, CoolPeople Technology, WPP Media, Keepler Data Tech, Turntwo, Synpulse. All 15 in the analytical cohort. `domain_risk`: moderate 11, high 4 — no low-risk roles this batch. `data_team_maturity`: mid 11, mature 3, early 1. `geo_region`: apac 5, benelux 4, global_remote 2, dach_other 1, iberia 1, other_europe 1, other 1 — the largest single-batch APAC contribution since §9.8. `seniority`: mid 8, senior 7. This batch also included the first Dutch- and Spanish-original archived JD text preserved verbatim rather than translated (Clovr, WPP Media, Turntwo in Dutch; Keepler Data Tech in Spanish) — see `.claude/skills/classify-jd/SKILL.md`'s language-mismatch handling.

**Combined effect across the three batches:** corpus grew from 373→410 total (37 net new records), 340→372 analytical cohort (32 net new cohort records — fewer than the sum of the three batches' totals because the 2026-08-01 batch skewed unusually `data_engineering`-heavy). Across the three batches, 6 of 32 new cohort roles are APAC, pushing the APAC stratum from 43 to 49 roles (§3, §9.5) while it remains the largest single geographic bucket alongside UK/remote. Headline distributions were essentially unmoved by this combined addition: `velocity_vs_rigour` rigour holds at 71% (unchanged from n=340), `domain_risk` moderate holds near 69% (68% at n=340), `has_dbt` (AE/BI) holds at 65% (unchanged), and `ai_role = none` holds at 67% (unchanged) — see §4.1–§4.12 for the updated per-dimension figures. The three long-standing nulls (`velocity_vs_rigour × has_dbt`, `domain_risk × greenfield_vs_fix`, `stakeholder_orientation × autonomy_level`) all remain null at n=372. `geo_region (APAC) × jd_authorship` and `data_team_maturity × work_arrangement` both remain significant at p<0.05, consistent in direction with §9.8. All classified using the same Layer B codebook; no statistical re-weighting applied.

### 9.10 2026-08-06 expansion

Seventeen new JDs, all AE/BI (no `team_lead`/`data_engineering`/`other` this batch) — Visser & Van Baars, N26, NOBA Bank Group, Rabot Energy, Optimize matter, Metyis, Capital.com, PortoBay Hotéis e Resorts, Oxylabs.io, Hetzner Online, Ebury, Quest for Knowledge, Coins.ph, Super Payments, BCB Group, On the Beach, Harnham. One URL from this batch (Fortnox, `fortnoxab.teamtailor.com/jobs/7956800-analytics-engineer`) was a confirmed duplicate of an existing record (`2026-07-16_fortnox_analytics-engineer`) and was skipped, not double-counted. All 17 in the analytical cohort. `domain_risk`: moderate 11, high 5, low 1 — three of the five high-risk roles are regulated payments/crypto (Ebury, Coins.ph, Super Payments), plus BCB Group (also crypto/payments) and NOBA Bank Group. `data_team_maturity`: mid 13, mature 4, no early-stage roles this batch. `seniority`: mid 12, senior 5. `geo_region`: uk_remote 4, iberia 4, benelux 2, one each of other_europe, apac, dach_other, nordics, france, baltics, berlin. `ai_role`: none 9, ai_enabler 5, ai_user 3 — a notably higher ai_enabler share than the corpus baseline (Capital.com, Ebury, Super Payments, Quest for Knowledge, and On the Beach all build semantic layers or datasets explicitly framed for AI/agent consumption; BCB Group and Oxylabs.io are `ai_user`, both naming Cursor/GitHub Copilot/Claude Code directly in the tech stack). `has_dbt` (AE/BI): 12/17. This batch included four non-English archives preserved verbatim per the language-mismatch handling in `.claude/skills/classify-jd/SKILL.md`: Dutch (Visser & Van Baars, and — company-culture text only — Optimize matter is French throughout), French (Optimize matter), Portuguese (PortoBay), and German (Hetzner Online). Real salary data was extracted for one record from explicit JD wording (Oxylabs.io: €3,500–6,000/month) — all other salary fields left `null` per the extraction-only rule, including one ceiling-only figure (Harnham: "up to £65,000") that was correctly not backfilled into a fabricated floor. Six of the seventeen JDs (Harnham, Hetzner, On the Beach, Optimize matter, PortoBay, Visser & Van Baars) were not parseable by the regex responsibility-bullet extractor — despite two of them being English-language — and were added to `responsibility_bullets_llm.json` as hand-extracted (English-translated where applicable) bullet lists so they still contribute to the §4.13 theme classification. *(Process superseded 2026-08-30: bullets are now captured verbatim at classification time and the fallback file is retired — see §9.19. The English-translated bullets described here were replaced with the postings' original-language text in the backfill.)* Corpus reached 427 total records, 389 in analytical cohort. Headline distributions held essentially flat: `velocity_vs_rigour` rigour 71.0% (unchanged), `domain_risk` moderate 68.4% (68.4%→68.4%, no shift), `has_dbt` (AE/BI) 65.5% (unchanged), `ai_role = none` 66.1% (down from ~67%, within noise given n=17). All classified using the same Layer B codebook; no statistical re-weighting applied.

### 9.13 A three-way Europe/APAC/NYC-metro comparison, and one large effect §9.5 missed

§9.5 tests APAC against "the rest of the corpus" — a framing that was reasonable when APAC was the only non-European stratum large enough to test, but which folds the `nyc_metro` cluster into the European comparison group by default. Once NYC is split out as its own arm, three regions are jointly comparable: **Europe (n=411), APAC (n=108), NYC metro (n=51)** — 570 of the 629-record analytical cohort with a usable macro-region (`global_remote` and `other` excluded as incoherent geographies). A chi-square sweep of all thirteen categorical Layer B dimensions against this 3-way split found eight that clear p<0.05: `language_gate_type` (p<0.0001, **V=0.23 — the largest effect size of any relationship tested against region in this document**, larger than either of §9.5's headline findings), `work_arrangement` (p<0.0001, V=0.19), `velocity_vs_rigour` (p=0.0015, V=0.12), `greenfield_vs_fix` (p=0.0076, V=0.11), `data_team_maturity` (p=0.008, V=0.11), `stakeholder_orientation` (p=0.0099, V=0.13), `jd_authorship` (p=0.020, V=0.10), and `domain_risk` (p=0.026, V=0.10). `autonomy_level`, `ai_role`, `testing_framing`, and `loss_aversion_framing` show no significant regional difference — worth stating positively, not just as an absence: a job seeker's read on genuine ownership and AI expectations should generalise across these three regions in this dataset; their read on rigour-language, project framing, stakeholder mix, language gates, and salary disclosure should not.

**The confound check behind the findings below.** `domain_risk` composition differs significantly across the three regions (χ²=11.02, p=0.026, V=0.10): Europe 25.3% high, APAC 34.3%, NYC 43.1%. That *complicates* the read on `velocity_vs_rigour` and `stakeholder_orientation` below, because regional risk composition cannot be treated as flat: some of the rigour gradient is a composition effect rather than a pure framing one, and the two cannot be separated at this n. The effect size sits at the V≈0.10 floor, so the confound is demonstrable but small. The NYC cluster itself is not one loud employer or one ATS's house style: 51 roles span 47 distinct companies, and its ATS mix (Greenhouse 19, LinkedIn 10, Ashby 9, unknown 7, Workday 4) doesn't concentrate the way a single-source artifact would. n=51 is still thin, so NYC percentages here should be read as directional, not precise — but they are not an artifact of collection method.

**`language_gate_type` is the standout finding this section adds, and remains so.** Hard language requirements (fluency/C1-C2 gates): Europe 29.7%, APAC 6.5%, NYC 0%. Adding soft gates, Europe reaches 38.7% versus APAC's 9.3% and NYC's 0%. This is almost certainly a genuine market feature — client-facing analytics roles across DACH/Benelux/France routinely gate on the local language, with no real equivalent in an English-default APAC or US hiring market — and it is the single most actionable "know before you apply" fact a non-European candidate in this corpus could act on. This dimension isn't surfaced in the seeker-mode hygiene card in `index.html` either (that card reports a single blended `hardLangPct` across all regions, currently ~useless for a candidate targeting a specific market — see the cross-reference note below).

**`velocity_vs_rigour` drops step-wise Europe → APAC → NYC.** `rigour`-coded: Europe 74.7%, APAC 71.3%, NYC 54.9%. Reading the NYC records by hand: the velocity-coded roles cluster in genuinely earlier-stage consumer fintech/proptech (Copilot Money, CurbWaste, Spot & Tango, Profound, US Mobile), while the rigour-coded ones concentrate in regulated-finance and high-scrutiny names (Current ×2, Gemini, New York Life ×2, Neuberger Berman) — so this isn't simply "NYC roles are less rigorous," it's that NYC JDs are more willing to name velocity plainly when that's the honest framing for an early-stage company, whereas the European corpus defaults to rigour-coded vocabulary even for comparable-risk, non-regulated work. The domain_risk gradient above runs the opposite way (NYC is the *highest*-risk arm), which is what keeps this readable as a framing effect rather than a stakes effect — if it were purely composition, the highest-risk region would carry the most rigour language, and it carries the least. Practically: a `rigour` classification from a European JD is weaker evidence of genuinely elevated stakes than the same classification from a US JD. (A calibration note on this dialect effect already lives in `.claude/skills/classify-jd/SKILL.md`'s `velocity_vs_rigour` section.)

**`jd_authorship` and `work_arrangement` differ by region on the three-way cut.** `hiring_manager`-authored: Europe 72.7%, APAC 86.1%, NYC 84.3% (χ²=11.66, p=0.020, V=0.10). The two-way APAC-vs-rest test for the same dimension now agrees (p=0.028, §9.5). Both the APAC and NYC batches skew toward either large established single-market employers or well-funded technically sophisticated startups — segments where the req owner is also the JD author — while the European sample carries a longer mid-market/agency tail. Treat this as a company-size/maturity effect that correlates with region in this corpus's specific sampling, not a claim that APAC or NYC hiring managers inherently write better JDs. `work_arrangement`: APAC is both the most silent (50.9% `not_stated` vs. Europe 31.6%, NYC 31.4%) and, where stated, among the most onsite-leaning (13.0% onsite vs. Europe 4.9%); NYC trails Europe on hybrid (51.0% vs. 57.2%) and shows zero fully-remote share alongside the highest onsite share of the three regions (17.6%). The seeker-mode hygiene card's current blanket advice ("don't read silence as onsite by default, ask directly") is better calibrated for Europe than for APAC, where silence does correlate with a real onsite lean.

**`stakeholder_orientation`'s regional shift is significant.** `mixed` orientation rises outside Europe (Europe 15.8% → APAC 25.9% → NYC 33.3%), with `internal_data`-primary framing falling correspondingly (52.8% → 43.5% → 27.5%), and the three-way test clears p<0.05 (χ²=20.11, p=0.0099, V=0.13) — a small effect. This may be a genuine structural difference in how the analytics function sits in APAC/NYC organisations, or it may partly be a classifier mechanical effect — `mixed` is the catch-all when a JD names two functions with genuinely equal weight, and the same larger/more-mature companies driving the authorship finding above may simply name more stakeholder groups by virtue of size, independent of any real orientation shift. Worth re-checking once NYC's n grows further.

**`greenfield_vs_fix` holds significance.** `greenfield`-coded: Europe 14.1%, APAC 19.4%, NYC 33.3% (χ²=13.91, p=0.0076, V=0.11); `fix_scale`-coded runs the other direction: Europe 29.2%, APAC 25.9%, NYC 15.7%. NYC stands out here specifically — a third of its roles are coded pure-greenfield versus roughly one in seven in Europe, consistent with the same earlier-stage-startup skew visible in the `velocity_vs_rigour` read above (several of the same companies — Copilot Money, CurbWaste, Profound — are building something new rather than scaling or fixing an existing stack).

**Salary disclosure: the sharpest single number in this section, and it should not be read as a market-culture finding.** Salary stated: Europe 22.6% (93/411), APAC 3.7% (4/108), NYC metro 82.4% (42/51). The NYC figure is very likely a **legal-regime effect**, not an employer-culture one — New York's pay transparency law requires a posted range, and the number reflects that law doing exactly what it was designed to do, not that NYC employers are more forthcoming by disposition. `index.html`'s current seeker hygiene card blends all regions into one `salaryPct` figure — that single blended number actively misleads in both directions: a US job seeker outside a pay-transparency jurisdiction would over-trust the disclosure norm, and an APAC job seeker would be right to essentially never expect a stated range regardless of company quality.

**What this means for `index.html` (the seeker/manager tool, not just this report):** the region filter in `index.html` already exists and can recompute every hygiene stat live per region — but the narrative text around those stats, and the seeker-mode motivator checklists, are currently written as if the blended, mostly-European averages generalise. Three concrete, low-risk fixes worth making: (1) add `language_gate_type` to the seeker hygiene grid and manager hygiene checklist — currently absent from both despite being the largest regional effect in the dataset; (2) reframe the salary-disclosure stat's copy to name the legal-transparency-law explanation rather than implying a market norm, especially once a reader has filtered to `nyc_metro`; (3) soften the work-arrangement "don't assume onsite" guidance so it doesn't overclaim uniformity once a reader has filtered to `apac`, where silence does skew onsite. None of these require new data collection — `geo_region`, `language_gate_type`, and `salary_min`/`salary_max` are already captured per-JD; this is a presentation and copy fix in `index.html`'s JS, not a `classify-jd` codebook change.

---

### 9.14 2026-08-18 expansion

Seventeen new JDs added (16 in the analytical cohort — all `analytics_engineering_bi`, no `team_lead`; 1 `data_engineering` excluded: S&W Group), taking the corpus from 540→557 total, 486→502 in the analytical cohort. Full company list and per-batch classification detail (`domain_risk`, `data_team_maturity`, `ai_role`, `geo_region`) live in §3's 2026-08-18 expansion entry; this section covers the batch's cross-cutting statistical properties.

**Geographic composition: European-heavy with continued NYC-metro and APAC growth.** Of the 16 AE/BI roles, 3 are `uk_remote` (Lupa, BMJ, Checkout.com), 4 land in the NYC-metro cluster (EvolutionIQ, InterEx's client, Minerva, Ridgeline), 3 are `apac` (Alight — India, coded APAC by the `geo_classify.py` heuristic; Pluang — Singapore; QL Resources Berhad — Malaysia), and the remaining 6 are single-country European additions: `dach_other` (Hügli/Bell Food Group, Germany), `nordics` (Coop, Norway), `baltics` (Kilo/Moérie, Lithuania), `benelux` (Orange Belgium), `france` (Qonto), and `ireland` (UnitedHealth Group/Optum). This pushes the APAC stratum from 69 to 74 roles and the NYC-metro cluster from 29 to 34 roles (§9.5, §9.13) — both strata grew this batch even though the batch's own headline framing is European concentration, since European additions are spread thinly across six different single-country buckets rather than one large regional cluster.

**Two non-English JDs preserved verbatim, both classified in English.** Coop's Oslo posting is archived in Norwegian and Hügli/Bell Food Group's Radolfzell posting is archived in German, both per the standing language-mismatch rule in `.claude/skills/classify-jd/SKILL.md` — full source text kept unmodified in the archive, Layer B classification performed in English against the same codebook applied to every other record. This is the corpus's third and fourth non-English archives after the 2026-08-11 batch's Swedish/Dutch pair (§3) and the 2026-08-05 batch's Dutch/Spanish set (§9.9).

**Domain-risk and loss-aversion concentration, driven by sector mix rather than region.** Five of the 16 AE/BI roles code `high` domain_risk — Checkout.com and Qonto (payments/banking), UnitedHealth Group/Optum (healthcare), Pluang (fintech/investment), and InterEx's PE-firm client (financial services) — a 31% high-risk share against the batch's own n, well above the standing corpus average (26%, §4.2). `loss_aversion_framing = high` tracks the same five-role cluster closely (Checkout.com, Qonto, BMJ, Orange Belgium, Pluang — BMJ and Orange Belgium carry high loss-aversion framing despite moderate domain_risk, consistent with §4.9 Finding I's observation that loss-aversion framing tracks a JD's specific fear register more tightly than the sector-level `domain_risk` proxy). This batch's sector mix — payments, banking, healthcare, fintech/investment, financial-services-PE — is the underlying driver: unlike the 2026-08-13 batch's risk concentration (driven by large-employer scale), this batch's risk concentration is driven by which sectors happened to be sourced, and reinforces rather than shifts the standing `domain_risk`/`loss_aversion_framing` distributions once folded into the full n=502 cohort (§4.2, §4.12).

**`ai_role` contributes clean examples across all three categories.** `ai_enabler`: Orange Belgium and UnitedHealth Group/Optum (both building AI-consumable semantic layers), plus Pluang (building a text-to-SQL agent architecture directly, the clearest infrastructure-for-AI example in this batch). `ai_user`: Minerva (explicit Claude Code/Cursor usage framed as a "force multiplier"), Qonto (an explicit AI-native work-style requirement independent of any single named tool), and Ridgeline. `has_dbt` (AE/BI): 9/16, close to the standing corpus rate (64%, §4.8).

All classified using the same Layer B codebook; no statistical re-weighting applied. Every headline distribution in §4.1–§4.12 held within 1–2 percentage points of the n=478 reading once this batch was folded in — see §9.4 for the full account of which relationships moved and which held.

---

### 9.15 The 2026-08-22 corpus audit — a confirmed-bad extraction pattern, and what fixing it changed

A full-corpus integrity audit, prompted by a routine spot-check of recent `jd_archive.md` files against their live source pages, found that several records dated 2026-07-13 through 2026-08-14 had been written with **paraphrased or condensed archive text** rather than the verbatim raw-HTML extraction the `classify-jd` skill requires — a WebFetch-style summary of the posting's content, not the posting's actual text. This matters beyond tidiness: the Layer B classification for every affected record had been coded against a paraphrase, which can silently shift wording-sensitive dimensions (`velocity_vs_rigour`, `jd_authorship`, `testing_framing`) away from what the original JD text would have supported, and strips the evidence-quote verifier (§9.1) of its actual job — checking a quote against a summary the classifier itself produced is circular, not verification.

**What the audit found and fixed, in five parts:**

1. **Paraphrased archives, the largest single issue.** Roughly 30 records across the affected date range had condensed or WebFetch-style archives instead of verbatim raw-HTML text. Several of these paraphrases had also been silently translated to English from the original posting language (German, French, Dutch) with no note of the translation — compounding the extraction-fidelity problem with an undocumented language change, both violations of the standing rules in `.claude/skills/classify-jd/SKILL.md`. All ~30 were re-extracted from the live posting where still accessible, or reconstructed from the most complete available cached/archived source, with verbatim text and (where applicable) the original-language note restored; each was then re-classified against the corrected archive text. Because several of the shifted dimensions are exactly the ones this document treats as wording-sensitive, these ~30 records may carry different Layer B codes than they did in the last report revision — the aggregate statistics above reflect the corrected values throughout.
2. **Fabricated salary figures.** Two records (both Axle Energy postings) had base-salary figures in `salary_min`/`salary_max` that traced back to a total-compensation-with-equity figure in the source text, not a base-salary figure — the fields were cleared rather than backfilled with a fabricated split, consistent with the extraction-only rule (§8's compensation-coverage note already flags this as a thin, non-random field; this was a fabrication on top of that thinness, not a sampling-bias question).
3. **One fully fabricated record, deleted.** `2026-04-09_finn_data-engineer` had a complete classification record with no corresponding source text anywhere in the archive — nothing to verify it against. Deleted rather than reconstructed, per the skill's standing rule that an unverifiable record is flagged, not invented a second time by writing new text to match the old classification.
4. **Two orphaned directories, deleted.** Leftover debris from failed or interrupted write operations in earlier sessions — directories with no complete JSON record, contributing nothing to any statistic but inflating directory-listing counts. Removed.
5. **A scraping-artifact misclassification, corrected.** One record (Maxicon) had "LinkedIn respects your privacy" — a cookie-banner string — captured as the `company` field, a scraping failure that had gone undetected because the record still had a plausible-looking JSON shape. Re-extracted and re-classified against the actual posting. Two further small-but-real defects were fixed alongside these: one enum violation (NatWest Group's `data_team_maturity` had been coded `"mixed"`, not a valid value in the codebook — corrected to `early`) and one tool-array overlap (Translucent had BigQuery listed in both `required_tools` and `preferred_tools`, which double-counts the same signal — removed from the weaker list).

**What was deliberately left alone.** Roughly 25 further records flagged during re-verification turned out to be genuinely stale — the posting had been removed, filled, or expired since collection — and were confirmed as such rather than reconstructed from a paraphrase or a memory of what the posting probably said. Per the skill's standing rule, a stale posting with an imperfect-but-real historical record is left untouched rather than "fixed" with fabricated current text; these ~25 records carry no changes from this audit. One further record (Fuku) was confirmed unverifiable — a client-rendered single-page app with no accessible extraction path, curl or otherwise — and was likewise left as-is rather than substituted with a WebFetch paraphrase, the same standard applied to the two unverifiable URLs in the 2026-08-13 batch (§3).

**Net corpus impact:** 586 total records before the audit → **585 after** (net −1, from the one fabricated-record deletion and two orphaned-directory deletions netting against no additions). The analytical cohort stood at **527** once reconciled against records added since the 2026-08-18 batch (§9.15), up from the 502 last reported — this reflects both the audit's corrections and reconciliation of `data.json` against records added to `data/` since the 2026-08-18 batch was last folded into this report. `analysis/data.json` and `analysis/responsibility_taxonomy.py`'s outputs were regenerated fresh against the corrected corpus before any statistic in this revision was computed (`scripts/regenerate_report.py`, then `python3 analysis/responsibility_taxonomy.py`) — every table and test in §4 and §9.13 above reflects the post-audit corpus, not a patch applied on top of stale numbers. The audit work itself was carried out as a batch of background re-classification agents working from the `classify-jd` skill's raw-HTML extraction standard, the same standard every other record in this corpus is held to.

**What this means for reading this document going forward.** The paraphrased-archive pattern is now a confirmed-bad extraction failure mode, not a hypothetical one — worth actively checking for in future batches, particularly ones classified via WebFetch-adjacent tooling rather than direct HTML capture. Any dimension described elsewhere in this document as "essentially unchanged" across this audit genuinely is — the aggregate percentages moved by at most a percentage point or two on most tables (§4.1–§4.12), and no previously-significant relationship's *demotion* (§4.9 Findings E, G) should be attributed to this audit specifically; those movements are consistent with ordinary sample-composition churn at this scale, not a symptom of the paraphrase-archive problem being corrected. The corrections here are about record-level fidelity, not a systematic bias in one direction across the corpus.

### 9.16 The 2026-08-23 `ai_role` evidence-quality audit

A follow-up review, prompted by checking whether `index.html`'s and `full-analysis.html`'s reader-facing "see the data" links actually pointed at accurate content, spot-checked `ai_role`'s evidence quotes against their source archives and found a further, narrower problem: roughly 60 records coded `ai_role = none` had an `evidence.ai_role` quote that had nothing to do with AI at all — a leftover or misapplied quote from an earlier coding pass, not the actual basis for the "none" label. Most of these turned out to be a purely cosmetic defect (the label was correct, only the evidence string was stale), but working through the full list surfaced a smaller number of genuine misclassifications: JDs whose responsibilities section named a specific AI-tool or AI-infrastructure expectation that an earlier coding pass had missed entirely and coded `none` instead of `ai_user` or `ai_enabler`.

**What the audit found, worked in two background batches of ~30 records each, plus one manually-verified fix:**

- **7 genuine relabels.** Two near-duplicate LEGO postings and one Slack/Salesforce posting were relabeled `none → ai_enabler` on responsibility-section language like "turn business requirements into productionised AI-enabling data products" and "Develop AI-powered intelligence solutions." Riverty and Lexroom were relabeled the same direction on "meet the needs of analytics, AI, and regulatory reporting" and "partner with the AI & Search Platform team" respectively. Welcome to the Jungle was relabeled on "setting up proper models in our BI tools and AI assistants." Protolabs was relabeled `none → ai_user` on "using AI powered IDEs, coding assistants, agents, and automation tools" — a direct personal-tool-use signal, not an infrastructure one.
- **18 evidence-only fixes.** The `none` label was correct in each case (no genuine AI skill or infrastructure responsibility anywhere in the JD), but the evidence quote was replaced with the standard `"No AI skill signal."` string rather than left pointing at an unrelated sentence.
- **1 further inconsistency, found separately.** `2026-07-15_immediate-media_analytics-engineer` had `ai_role: "ai_enabler"` at the top level but an `evidence.ai_role_explanation` that argued the opposite conclusion ("no mention of AI tools or AI-infrastructure expected") — an internal contradiction between the label and its own stated reasoning, not just a stray quote. Re-reading the source confirmed `ai_enabler` was in fact the correct label ("helping design data structures that natural language query tools can reliably and accurately query" is a textbook AI-infrastructure responsibility); the evidence was rewritten to match.
- **~35 records confirmed correct as-is**, both label and evidence, after the same source-text check — vague company-culture AI mentions ("AI-first mindset," "you'll work alongside the latest AI and GenAI tools"), AI referenced only in hiring-process boilerplate, and preferred-but-hedged nice-to-haves ("basic AI/ML knowledge... would be a plus") were correctly left as `none` per the codebook's own tie-breaker for vague or company-description-only AI mentions.

**What moved.** `ai_role = none` shifted from 334/527 (63%) to 327/527 (62%); `ai_enabler` from 112 (21%) to 118 (22%); `ai_user` from 81 (15%) to 82 (16%) — every headline percentage in §4.10 moved by 1pp or less. The one relationship that moved by more than a rounding error is `ai_role × stakeholder_orientation` (§4.0's Prediction 2 test): p rose from 0.058 to 0.137, moving further from the conventional threshold rather than closer to it — the audit's relabeling, if anything, weakened rather than strengthened this specific association. Every other `ai_role` cross-tabulation in §4.9 and §4.13 held its prior significance status and direction; only the exact statistics shifted, not the substantive conclusion any of them support.

**Why this is worth documenting rather than silently patching.** Both this audit and §9.15's paraphrase-archive audit surfaced the same underlying risk from two different angles: a record can carry a plausible-looking, internally-consistent-seeming JSON shape — a real label, a real (but wrong) evidence string — and pass every schema check while still being substantively wrong. Neither problem was caught by the schema validation used elsewhere in this pipeline (enum membership, boolean typing, non-null checks); both required actually reading the evidence field against the source text. This is the same category of failure as the confirmed-bad "condensed archive" pattern in §9.15, just operating at the level of a single field's evidence quote rather than the whole archive.

---

### 9.17 2026-08-25 expansion

Twenty-four new JDs added (23 in the analytical cohort — 22 `analytics_engineering_bi`, 1 `team_lead` [Cedar]; 1 `data_engineering` excluded: KTM AG; 1 `other` excluded: We Are Meta), taking the corpus from 585→609 total, 527→549 in the analytical cohort. A European/APAC-heavy batch: `geo_region` breaks down as apac 9 (Floq, Gogoro, Insulet, ITE Singapore, Lyka, Maya, Microsourcing, MoMo, NetApp), uk_remote 4 (Cedar, Checkout.com, Eden Scott, La Fosse), nyc_metro 3 (New York Technology Partners, Rockstar Games, US Mobile), global_remote 2 (Infoplus Technologies, We Are Meta), dach_other 2 (KTM AG, Mercedes-Benz Bank), and one each of hamburg (Eraneos), iberia (Perk), france (Pluxee), and berlin (Statista) — pushing the APAC stratum to 88 and the NYC-metro cluster to 39 (§9.5, §9.13).

**A notably strong `ai_enabler` signature this batch.** MoMo, NetApp, Eden Scott, Maya, and ITE Singapore all describe building data infrastructure or semantic layers explicitly for AI/agent consumption. Statista is a clean `ai_user` example, naming Claude Code directly in its tech-stack requirements — one of the more explicit personal-AI-tool-use signals seen in the corpus, in the same category as the BCB Group/Oxylabs.io Claude Code mentions noted in §9.10.

**Three German-language JDs preserved verbatim per the standing language-mismatch rule** (`.claude/skills/classify-jd/SKILL.md`): Eraneos, Mercedes-Benz Bank, and KTM AG. Full source text kept unmodified in each archive; Layer B classification performed in English against the same codebook applied to every other record. Unlike this batch, none of the three were added to `responsibility_bullets_llm.json` — the English-regex responsibility-bullet extractor correctly returns zero bullets against German text, and no hand-extraction fallback was done for them, so all three sit among the 72 JDs in §4.13 with no theme reading. This was checked against precedent rather than assumed: the corpus's two pre-existing German-language records (Hetzner Online, §9.10; Hügli/Bell Food Group, §9.14) were also unparseable by the regex extractor, but both of those *were* hand-added to the LLM fallback file at the time, so they do carry theme readings. This run's three new German JDs are a stricter case of the same underlying exclusion, not a new or different gap — English-regex-based classification correctly does not fire on German text either way; whether a given non-English JD also gets a manual LLM-fallback bullet extraction is a separate, inconsistently-applied step, not a bug in the language-mismatch handling itself. *(Resolved 2026-08-30: the inconsistency described here no longer exists — every JD's responsibilities are now captured verbatim in its original language at classification time, German and Hungarian included, so all three of this batch's records carry theme readings. See §9.19.)*

### 9.18 2026-08-26 expansion

Fourteen URLs submitted; eight new records written (Dispensed, Endowus, HCLTech, HubSpot, Keskeny Nyomda, Mantel Group, Marktlink Capital, PRI Technology), taking the corpus from 609→617 total, 549→557 in the analytical cohort. Six URLs were excluded before classification: three were exact-URL duplicates of existing records (IJsvogel Retail, Reeeliance, CrowdStrike — caught by `check_duplicate_jd.py`), and two Scopely postings (Senior Analytics Engineer and Analytics Engineer, both Barcelona) had been filled and taken down between posting and this scrape, confirmed via WebFetch showing the platform's "job has been filled" message rather than a job description — no reconstruction attempted, consistent with the stale-posting handling rule.

**A Hungarian-language JD preserved verbatim** (Keskeny Nyomda, a Hungarian printing/packaging manufacturer): source text kept unmodified in the archive per the language-mismatch rule; Layer B classification performed in English against the same codebook. Unlike the three German JDs in §9.17, this one *was* hand-added to `responsibility_bullets_llm.json` (translated bullets, English) so it carries a theme reading in §4.13 — precedent following the Hetzner/Hügli treatment rather than the stricter Eraneos/Mercedes-Benz Bank/KTM AG gap. *(Superseded 2026-08-30: its bullets are now the posting's own Hungarian text, captured verbatim rather than translated, and the inconsistency with the German records is resolved — see §9.19.)*

**HubSpot's Staff Analytics Engineer required two extraction workarounds.** The direct URL (`hubspot.com/careers/jobs/8001806?gh_jid=...`) is a CMS page that serves a generic careers-listing shell to a plain curl request — no Greenhouse reference anywhere in the raw HTML — while WebFetch (browser-rendered) confirmed the posting was live with full JD content, indicating a bot-detection or client-side-render gap rather than a stale posting. The `gh_jid=8001806` query param also pointed at the wrong Greenhouse board token (`hubspot` returns zero jobs); the correct token, found by testing variants, is `hubspotjobs`. Once resolved, `boards-api.greenhouse.io/v1/boards/hubspotjobs/jobs/8001806?content=true` returned the full JD text directly. Its responsibilities section (`In this role, you'll get to:` followed by a flat bullet list) did not match the regex parser's heading patterns and required hand-adding to `responsibility_bullets_llm.json`, alongside Keskeny Nyomda, taking the LLM-fallback count from 115→117 and parsed-responsibilities coverage from 543/617 to 545/617. *(This was the eighth consecutive batch to require hand-extending that file — the maintenance pattern that prompted the 2026-08-30 architectural change in §9.19.)*

**A dense `ai_enabler` batch.** HubSpot (composable agentic AE delivery pipeline, MCP servers, semantic models "for AI consumption"), Mantel Group (data structures "optimised for Agentic AI and LLM integration"), and Endowus (AI-assisted workflows built on governed data foundations) all describe building infrastructure for downstream AI systems rather than just using AI tools personally — consistent with the `ai_enabler`-over-`ai_user` tie-breaker. Marktlink Capital and Endowus both show clean `ai_user` signals naming Claude Code/Codex/Cursor directly as tools the candidate is expected to already use, continuing the pattern of explicit named-tool AI mentions noted in §9.10 and §9.17.

**Marktlink Capital and Endowus are both "first analytics hire" greenfield builds** at financial-services firms (PE/VC fund manager and MAS/SFC-licensed wealth platform respectively), reinforcing the early-stage/high-domain-risk-finance pairing seen elsewhere in the corpus. Dispensed (Australian/NZ/UK telehealth) is the batch's other high-domain-risk record, driven by explicit "healthcare or regulated environments" language rather than sector default alone.

---

### 9.19 The 2026-08-30 responsibility-capture change — an architectural fix, and the measurement error it removed

**What changed.** Responsibility bullets used to be derived at analysis time: `responsibility_taxonomy.py` ran a regex (`START_RE`/`STOP_RE`) over each `jd_archive.md` to find the responsibilities section, and a hand-curated file, `responsibility_bullets_llm.json`, supplied bullets for the JDs it could not parse. Bullets are now captured when each JD is classified — the same pass that codes the Layer B dimensions copies the responsibilities section out of the posting verbatim into that JD's own record — and `scripts/write_jd.py` refuses to write a record unless every bullet is a literal substring of the archived text. All 636 records were backfilled in one pass; both fallbacks are retired.

**Why it was worth doing.** The architectural argument is that finding where a responsibilities section starts, across arbitrary heading phrasing and multiple sections per posting and eleven languages, is comprehension work, and comprehension work should happen once, where the full JD text is in context — not be re-derived afterwards by pattern matching. The regex had accumulated 26 heading alternations, each added reactively after a batch failed, and the fallback file had been extended in eight consecutive batches. That is a maintenance treadmill with no end state.

**What it corrected, measured by diffing the two extractions.** The regex failed in four distinct ways, in ascending order of harm:

1. **Hard failure** — 129 JDs (19% of the corpus) it could not parse at all, handled by the hand-curated file. Visible, but the file was an unreproducible input living in the derived-artifacts directory; deleting `analysis/` to force a clean rebuild would have destroyed data nothing could regenerate.
2. **Silent truncation** — a posting splitting responsibilities across two headings yielded only the first section, *reported as a success*. 67 of 500 regex-parsed JDs had a second responsibilities-style heading. Parfumado captured 4 of 14 bullets; ASOS 2 of 38; Doodle 1 of 17. This produced **false negatives**: themes the JD genuinely carried, coded absent.
3. **Wrong-section capture** — requirements text ("Bachelor's degree in Computer Science...", "3–5 years of experience..."), job-title lines and company boilerplate recorded as responsibilities (GHD, Mollie).
4. **Garbage extraction** — with no notion of whether a page is a job posting at all, it mined "You'll ..." sentences out of a mis-scraped careers landing page. `emnify`'s archive is site navigation plus one blurb each for Engineering, Finance, Sales, Legal, HR and Product; six of those became "responsibilities" and the taxonomy tagged the record with four themes, including Mentorship & Leadership drawn from the HR blurb. This produced **false positives** — the most damaging mode, because it adds signal that was never in the posting.

**Scale of the correction.** Bullet coverage went from 545 of 617 JDs to 631 of 636; total bullets from 3,829 to 5,164 (+35%). 128 JDs gained bullets, 111 lost some, 306 were unchanged. Every large loss inspected was the regex being wrong rather than the new extraction being incomplete. Theme prevalences moved by up to 4.8pp (Governance & Documentation 60.0%→65.1%, Data Quality & Testing 67.6%→71.6%, Architecture & Platform Strategy 48.4%→44.1%). **§4.13 percentages from revisions before this date are therefore not comparable to current ones** — the earlier figures measured a systematically incomplete extraction, not a smaller sample of a complete one.

**What it changed in the findings.** The Mentorship & Leadership × `autonomy_level` relationship strengthened overall (V=0.23→0.26) because the correction removed false negatives — but its *stratification check*, the thing that made it the one confounder-checked finding in §4.13, no longer holds in both strata. Within senior titles the gradient is real (10%→22%→31%); within mid titles it is flat (4%→6%→6%). Earlier revisions reported a gradient in both. The claim is now stated narrowly, in §4.13 and in the corresponding `full-analysis.html` panel. Self-Service Enablement × `data_team_maturity` moved the other way, clearing the p<0.01 screen for the first time.

**Verification.** Every one of the 620 records marked `responsibilities_source: jd_section` was re-checked directly against its archive after the backfill: all bullets are literal substrings, zero failures. 11 records are marked `inferred_from_prose` — postings that describe the role only in running prose with no list to copy — and bypass the substring check by design; they were reviewed individually. 5 records carry an explicit empty list, meaning a classifier read the posting and found no responsibilities content (stub scrapes and, in `emnify`'s case, a mis-scraped careers page). An empty list is a positive finding and is distinguishable from a missing field, which matters: treating "no content" as "not yet captured" is what would silently hand those records back to the regex.

**Residual limitation.** Extraction is now non-reproducible in the strict sense — a model read each posting once, and re-running would not be guaranteed to produce byte-identical bullets. This is the same trade the Layer B dimensions already make, and 19% of the corpus was already paying it invisibly through the hand-curated fallback. The substring gate is what makes it acceptable: the bullets cannot drift from what the posting actually said, only in how the section boundary is drawn. Because the whole corpus was backfilled in one pass rather than incrementally, extraction method does not correlate with corpus vintage — which would have made §4.13's trend claims uninterpretable.

---

### 9.20 Collection and revision history

This document has been revised continuously against a growing corpus rather than published once. The full batch-by-batch history is retained here for provenance; §9.6–§9.19 give the detailed accounts of the passes that materially changed the data or the findings.

**Revision history.** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, July 21 2026 with 21 further new roles, July 22–24 2026 with 55 further new roles including the corpus's first substantial APAC batch, deduplicated 2026-07-25 in two passes (36 records removed as re-scrapes, plus one further duplicate on a follow-up audit — see §3, §9.6), expanded again 2026-07-26–29 with 33 further new roles (28 in the analytical cohort), including Parfumado, Tiqets, Riot, Emagine, Licorne Society, Montblanc, Qred Bank, Hack A Boss, StackFuel, Cultura, ASOS, Zego, NatWest Group, Kaluza, Fremantle Dockers, Joon Solutions, and Alight (§9.7), expanded again 2026-07-30 with 15 further new roles (11 in the analytical cohort), a single-day, heavily-APAC batch including Blinq, Brand New Day, Eftsure, Emapta, Samsara Eco, Southern Cross, plus BeReal, Crystalloids, Harnham, Infinite Lambda, and Zego's second posting (§9.8), expanded again 2026-07-31 with 11 further new roles (10 in the analytical cohort) including ALTEN, Appfire, Asana, Dentsply Sirona, eXalt, ITT Inc., Netflix, Rippling, and Vinted, expanded again 2026-08-01 with 11 further new roles (7 in the analytical cohort) including 1KOMMA5°, Accenture, Amazon, Google, instinctools, Northius, Siemens Energy, Technology & Strategy, and The One Enterprise, expanded again 2026-08-05 with 15 further new roles (all 15 in the analytical cohort), a mixed-European/APAC batch including Grasshopper, Canva, Bulla Dairy Foods, Love Bonito, Mimecast, team.blue, IPRoyal, RIXT.IT, Kilo, Clovr, CoolPeople Technology, WPP Media, Keepler Data Tech, Turntwo, and Synpulse (§9.9 covers all three of these previously-undocumented batches together), expanded again 2026-08-06 with 17 further new roles (§9.10), expanded again 2026-08-11 with 20 further new roles (17 in the analytical cohort) including Google, J.Crew, Neuberger Berman, Wolt, and a Zynga/Socialpoint near-duplicate studio pair, drawn from a notably ATS-diverse batch (Workday, Ashby via a resolved company-site redirect, Teamtailor, BambooHR, Greenhouse) and including two non-English JDs preserved verbatim (Swedish, Dutch), expanded again 2026-08-13 with 19 further new roles (18 in the analytical cohort) skewed toward larger established employers and a new NYC-metro geographic cluster (§3), and expanded again 2026-08-18 with 17 further new roles (16 in the analytical cohort — 16 analytics_engineering_bi, 0 team_lead; 1 excluded as data_engineering: S&W Group), a batch with a strong European concentration (Belgium, Norway, Germany, Lithuania, France, and further UK postings alongside the standing APAC and NYC-metro strata), two non-English JDs preserved verbatim in their archives (Norwegian: Coop; German: Bell Food Group/Hügli) though classified in English per the standing language-mismatch rule, and a fintech/banking/healthcare/insurance-heavy tilt that concentrates `domain_risk` and `loss_aversion_framing` at the high end (Checkout.com, Qonto, UnitedHealth Group/Optum, Pluang, InterEx's PE-firm client) more than in most prior batches (§9.14), audited and corrected 2026-08-22 — fixed salary fabrication, deleted 3 corrupted/fabricated records, re-extracted ~30 records that had paraphrased archives instead of verbatim text, confirmed ~25 records as genuinely stale postings left untouched; net corpus 586→585 (§9.15), and expanded again 2026-08-25 with 24 further new roles (23 in the analytical cohort), a European/APAC-heavy batch with a strong `ai_enabler` signature (MoMo, NetApp, Eden Scott, Maya, ITE Singapore) and one explicit `ai_user` example naming Claude Code directly (Statista), including three German-language JDs preserved verbatim (§9.17), and expanded again 2026-08-26 with 8 further new roles (all 8 in the analytical cohort) including Dispensed, Endowus, HCLTech, HubSpot, Keskeny Nyomda, Mantel Group, Marktlink Capital, and PRI Technology, with two greenfield "first analytics hire" builds at regulated-finance firms (Marktlink Capital, Endowus), a dense `ai_enabler` cluster (HubSpot, Mantel Group, Endowus), and one Hungarian-language JD preserved verbatim (Keskeny Nyomda; §9.18), expanded again 2026-08-30 with 19 further new roles, and re-founded on 2026-08-30 by moving responsibility-bullet extraction out of the analysis pipeline and into classification, then backfilling all 636 records (§9.19), expanded again 2026-09-01 with 19 further new roles (18 in the analytical cohort), and expanded again 2026-09-14 with 36 further new roles (35 in the analytical cohort), a high-risk-skewed, densely `ai_enabler` batch taking the corpus to 691 total records and 629 in the analytical cohort (§3); all tables and test statistics reconciled to this current corpus.

**A note on the numbering.** §9.11 and §9.12 are intentionally absent. Those two batches (2026-08-11 and 2026-08-13) are documented in full in §3; the §9 subsections were reserved and never written, and the remaining numbers are left stable so existing cross-references keep resolving.

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

3. **n=93 is pilot-scale.** *Resolved.* The corpus is now 691 JDs (629 analytical), past the n≈300 a cross-market subgroup analysis needs. The residual constraint is effect size, not table power: relationships at V≈0.10 remain batch-sensitive at this n (§9.4).

4. **Vendor-produced primary source.** *Resolved in framing.* §2 and the Abrahamson frame (§4.0) now explicitly treat the dbt survey as a fashion-setting document produced by an interested party, not a neutral primary source. Every percentage attributed to the survey should still be read as "dbt Labs' survey reports that X% of dbt community respondents say Y," not as a market-wide claim.

5. **Six theories cited, none tested.** *Resolved.* §4.0 picks Abrahamson's management fashion theory, derives two explicit, falsifiable predictions before presenting findings, and reports the statistical result for each — including the honest non-result on Prediction 1. §6 retains the other five lenses as clearly-labelled secondary, exploratory reads applied after the fact, not additional confirmatory tests.

6. **No literature review.** *Not resolved.* Still needs three streams: vendor knowledge production/management fashion (Abrahamson 1996 — now load-bearing rather than decorative, given §4.0), critical IS and technology discourse (Orlikowski & Barley 2001), job postings as labour-market data (Deming & Kahn 2018, Hershbein & Kahn 2018).

**Remaining before external submission:** items 2 and 6 above, plus a full corpus reclassification under the fixed evidence-verifier (§9.1) so the evidence-verification statistic is uniform across the whole corpus rather than mixed pre/post-fix.

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
4. **Stakeholder orientation does not predict autonomy (§4.9 Finding E, a tested null), and that null has a persona-specific moral:** for seekers, "don't infer autonomy from the audience label alone"; for managers, "the audience label doesn't lock in how your role reads — write the decision rights, don't let a template's assumptions write them for you."

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
