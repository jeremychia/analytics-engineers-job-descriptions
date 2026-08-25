# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, July 21 2026 with 21 further new roles, July 22–24 2026 with 55 further new roles including the corpus's first substantial APAC batch, deduplicated 2026-07-25 in two passes (36 records removed as re-scrapes, plus one further duplicate on a follow-up audit — see §3, §9.6), expanded again 2026-07-26–29 with 33 further new roles (28 in the analytical cohort), including Parfumado, Tiqets, Riot, Emagine, Licorne Society, Montblanc, Qred Bank, Hack A Boss, StackFuel, Cultura, ASOS, Zego, NatWest Group, Kaluza, Fremantle Dockers, Joon Solutions, and Alight (§9.7), expanded again 2026-07-30 with 15 further new roles (11 in the analytical cohort), a single-day, heavily-APAC batch including Blinq, Brand New Day, Eftsure, Emapta, Samsara Eco, Southern Cross, plus BeReal, Crystalloids, Harnham, Infinite Lambda, and Zego's second posting (§9.8), expanded again 2026-07-31 with 11 further new roles (10 in the analytical cohort) including ALTEN, Appfire, Asana, Dentsply Sirona, eXalt, ITT Inc., Netflix, Rippling, and Vinted, expanded again 2026-08-01 with 11 further new roles (7 in the analytical cohort) including 1KOMMA5°, Accenture, Amazon, Google, instinctools, Northius, Siemens Energy, Technology & Strategy, and The One Enterprise, expanded again 2026-08-05 with 15 further new roles (all 15 in the analytical cohort), a mixed-European/APAC batch including Grasshopper, Canva, Bulla Dairy Foods, Love Bonito, Mimecast, team.blue, IPRoyal, RIXT.IT, Kilo, Clovr, CoolPeople Technology, WPP Media, Keepler Data Tech, Turntwo, and Synpulse (§9.9 covers all three of these previously-undocumented batches together), expanded again 2026-08-06 with 17 further new roles (§9.10), expanded again 2026-08-11 with 20 further new roles (17 in the analytical cohort) including Google, J.Crew, Neuberger Berman, Wolt, and a Zynga/Socialpoint near-duplicate studio pair, drawn from a notably ATS-diverse batch (Workday, Ashby via a resolved company-site redirect, Teamtailor, BambooHR, Greenhouse) and including two non-English JDs preserved verbatim (Swedish, Dutch), expanded again 2026-08-13 with 19 further new roles (18 in the analytical cohort) skewed toward larger established employers and a new NYC-metro geographic cluster (§9.12), and expanded again 2026-08-18 with 17 further new roles (16 in the analytical cohort — 16 analytics_engineering_bi, 0 team_lead; 1 excluded as data_engineering: S&W Group), a batch with a strong European concentration (Belgium, Norway, Germany, Lithuania, France, and further UK postings alongside the standing APAC and NYC-metro strata), two non-English JDs preserved verbatim in their archives (Norwegian: Coop; German: Bell Food Group/Hügli) though classified in English per the standing language-mismatch rule, and a fintech/banking/healthcare/insurance-heavy tilt that concentrates `domain_risk` and `loss_aversion_framing` at the high end (Checkout.com, Qonto, UnitedHealth Group/Optum, Pluang, InterEx's PE-firm client) more than in most prior batches (§9.14), audited and corrected 2026-08-22 — fixed salary fabrication, deleted 3 corrupted/fabricated records, re-extracted ~30 records that had paraphrased archives instead of verbatim text, confirmed ~25 records as genuinely stale postings left untouched; net corpus 586→585 (§9.15), and expanded again 2026-08-25 with 24 further new roles (23 in the analytical cohort), a European/APAC-heavy batch with a strong `ai_enabler` signature (MoMo, NetApp, Eden Scott, Maya, ITE Singapore) and one explicit `ai_user` example naming Claude Code directly (Statista), including three German-language JDs preserved verbatim (§9.17); all tables and test statistics reconciled to this current corpus.
**Dataset:** 549 analytics-engineering/BI/team-lead job descriptions from `data/` (April–August 2026; primarily European, Berlin-heavy, with UK, DACH, Nordics, an 88-role APAC stratum large enough to compare directly against the European majority, and a 39-role NYC-metro cluster; see §3, §9.5). 609 records total in the corpus including 47 data-engineering and 13 other roles excluded from the analytical cohort; see §3.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "[State of Analytics Engineering](https://www.getdbt.com/resources/state-of-analytics-engineering-2026)" reports, 2023–2026 (2026 edition linked) — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

---

## 1. What this document is

This is a structured analysis of 549 analytics engineering, BI, and team-lead job postings collected during a job search in 2026, primarily European with a substantial APAC stratum (§3, §9.5). The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 549 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±3.9pp at 95% (Wilson interval, evaluated at the §4.1 rigour proportion) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration is still primarily European/Berlin, but the APAC stratum (n=88) remains large enough to test directly against the European majority rather than merely disclaim — see §9.5 for what that comparison shows and its own, tighter limits. Generalisation to North America remains a limited-n proposition, though less thin than earlier snapshots — the `nyc_metro` cluster (n=39, §3, §9.13) is large enough to support the three-way regional comparison in §9.13 but still too small, and too geographically narrow (New York City specifically, not the US broadly), to support a general US-market claim; treat it as a single-metro stratum, not a North American one on par with Europe or APAC. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Mid-corpus expansions (July 13, 2026: +9 JDs; July 16, 2026: +12 JDs; July 17, 2026: +13 JDs; July 21, 2026: +21 JDs; July 22–24, 2026: +55 JDs; July 26–29, 2026: +38 JDs; July 30, 2026: +11 JDs; August 5, 2026: +15 JDs; August 6, 2026: +17 JDs; August 11, 2026: +17 JDs; August 13, 2026: +18 JDs; August 18, 2026: +16 JDs; August 25, 2026: +23 JDs to the analytical cohort, §9.9–§9.17) added new roles without statistical re-weighting, so updated findings through that point reflected raw inclusion in the analytical cohort. The 2026-07-25 dedup removed 37 duplicate records across two passes rather than adding new ones (§3, §9.6) — this tightened the corpus rather than diluting it. The 2026-08-22 audit (§9.15) removed 3 corrupted/fabricated records and materially re-classified roughly 30 others, taking the corpus from 586 to 585 total records and the analytical cohort from 502 to 527. Every relationship in this document is re-tested at each corpus update, and significance is not treated as permanent: this revision (n=549) finds `domain_risk × greenfield_vs_fix` (Finding B, χ²=3.95, p=0.413, V=0.06) still does not clear p<0.05 — restated below as a current null. `stakeholder_orientation × autonomy_level` (Finding E) reads χ²=15.11, p=0.057 this revision — a small effect that no longer clears p<0.05, one revision after it briefly did (was p=0.035 at n=527); restated below as a current null rather than a standing finding. `velocity_vs_rigour × has_dbt` (§4.0's Prediction 1 comparator) reads χ²=6.60, p=0.037, V=0.11 this revision (n=531 AE/BI) — still significant but markedly weaker than the prior snapshot (was p=0.0084, V=0.14), and its effect size has dropped out of the "small effect" territory this document otherwise treats as the floor; flagged and discussed in §4.0. `geo_region (APAC) × jd_authorship` (previously part of Finding G) reads χ²=5.22, p=0.074, V=0.10 this revision — short of p<0.05 and at the effect-size floor, remains a current null. `data_team_maturity × work_arrangement` on the stated-arrangement subset remains significant at this n (χ²=27.59, p<0.0001, V=0.20, n=352 stated). `domain_risk × geo_region` in the three-way Europe/APAC/NYC comparison (§9.13), newly significant last revision, reads short of p<0.05 this revision (χ²=8.50, p=0.075, V=0.09) — restated as a current null in §9.13.

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

**609 job descriptions** collected April–August 2026 across `data/`, deduplicated 2026-07-25 in two passes (§9.6) and audited and corrected 2026-08-22 (§9.15). Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 531 | Yes — primary cohort |
| team_lead | 18 | Yes — governance-signalling stratum |
| data_engineering | 47 | No — excluded, different discourse population |
| other | 13 | No — excluded |

**Analytical cohort: 549 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily European (Benelux 10%, UK/remote 14%, Iberia 9%, Berlin 7%, France 6%, Nordics 6%, other Europe 7%), with APAC remaining the largest single bucket (**88 roles, 16.0% of the analytical cohort**) — large enough to compare directly against the European majority rather than merely disclaim as a blind spot (§9.5). The `nyc_metro` bucket, introduced at the 2026-08-13 batch (§9.12), now stands at 39 roles (7.1%) — the corpus's largest single US-specific geographic concentration to date. The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim. See §9.5 for a worked APAC-vs-Europe comparison, and §9.13 for a fuller three-way Europe/APAC/NYC-metro comparison — it surfaces one large effect (`language_gate_type`) that §9.5's two-way framing never tested and that the seeker/manager-mode UI (`index.html`) does not yet surface at all.

**2026-07-13 expansion:** Nine new JDs added mid-corpus (airSlate, EPAM, KTM AG, Bose, Resourcery Group, TapTap Send, TeamViewer, woom, Funding Circle) representing high-risk (5) and moderate-risk (4) roles. Early-stage (2) and mature (2) organisations represented alongside mid-stage (5). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution.

**2026-07-16 expansion:** Twelve new JDs added (Doodle, Adaptive HVM, Top Doctors Group, Qargo, Orange, Fortnox, Amaris Consulting, bTV Media Group, TDA, Oscar, MoonPay, TRIA) representing moderate-risk (7), high-risk (3), low-risk (2) roles. Mid-stage (8) and mature (3) organisations represented alongside early-stage (1). Seniority mix: mid (9), senior (3). All classified using the same Layer B codebook; no statistical re-weighting applied — new entries are simply added to the analytical cohort at their face distribution. Corpus now at 260 total records, 240 in analytical cohort.

**2026-07-17 expansion:** Thirteen new JDs added (Booking Holdings Romania, Electra, Fruition Group Ireland, Jobster, Lendable ×2, Mollie, Monzo, Niji, Paddle, Rebtel, Reeeliance, Skiils). This batch also completed the `work_arrangement` field across the corpus, enabling the chi-square sweep in Finding H (§4.9) — work arrangement is driven almost entirely by geography, with a weak, secondary maturity effect (mature teams skew more hybrid than early-stage teams).

**2026-07-21 expansion:** Twenty-one new JDs added (2026-07-19: Engelska Skolan, Gerolsteiner, Scopely, Storytel; 2026-07-21: Avalanche Studios, Bravida, Currys, Decathlon Digital, Eunice Energy, EVA Esports, Finavia, IDW, ilionx, Kaizen Gaming, LEGO Group [team lead], Moérie Beauty, PRO PLUS [team lead], Relay Technologies, Wave Group, Witteveen+Bos, Xebia), representing moderate-risk (10), low-risk (8), and high-risk (3) roles — a notably higher low-risk share than prior batches (gaming/esports and consumer-education postings). Mid-stage (12) and mature (7) organisations dominate, with early-stage (2) again a minority. Two roles (LEGO Group, PRO PLUS) are `team_lead`. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus now at 294 total records, 272 in analytical cohort. This batch also prompted a fix to a long-standing data-pipeline bug that had silently dropped `ai_role`, `testing_framing`, and `loss_aversion_framing` from JSON records for a large stretch of the corpus — all three dimensions are now coded on the full analytical cohort (n=272, up from a stuck n=86); see §9.3 for the full account and §4.10–4.12 for the updated findings.

**2026-07-22 to 2026-07-24 expansion:** Fifty-five new AE/BI JDs added, the largest single expansion yet and the first with a deliberate APAC scraping pass (36 of the 55 new cohort roles are APAC — Singapore, Australia, India, Vietnam, Malaysia, the Philippines, Japan, South Korea, Hong Kong, Thailand, China, New Zealand; the remainder mostly UK/remote). Domain-risk mix (moderate 40, high 13, low 2) and maturity mix (mid 28, mature 17, early 10) both sit close to the pre-existing corpus distribution — this batch reinforces rather than shifts the headline findings in §4.1–4.8. Seniority skews senior (27) and mid (24), consistent with the rest of the corpus. No `team_lead` roles in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 362 total records, 327 in analytical cohort, before the 2026-07-25 dedup below. A gap in `scripts/geo_classify.py` was found and fixed during this batch's regeneration — one AU listing ("AU - HQ - NSW", state-abbreviated with no city name) was falling through to `other` instead of `apac`; the classifier now also matches `nsw`, `victoria,`, `queensland`, and `docklands`.

**2026-07-25 deduplication (pass 1):** An audit found the corpus had accumulated 36 duplicate records — the same live job posting re-scraped on a later date, under a different tracking query string, via a different job-board mirror, or (in one case) under a different company label entirely (a staffing agency's listing of a client's own posting). A company+role text match alone missed most of these and would also have wrongly merged genuinely distinct postings that happen to share a title (e.g. the same role open in two different cities, with different job IDs) — the dedup instead matched on normalized job-posting URL (netloc + path + non-tracking query params, or a shared ≥6-digit job ID embedded in the URL path), verified against location/salary metadata before removal. Where a cluster had multiple scrapes of the same posting, the fullest-content archive was kept, not simply the earliest. Corpus dropped from 362→326 total, 327→292 analytical cohort.

**2026-07-25 deduplication (pass 2):** A follow-up audit of the responsibility-bullet extraction output (comparing bullet-list content directly, not just source URL) surfaced one further duplicate the pass-1 method missed: `2026-07-17_mollie_analytics-engineer-ii-revenue-operations`, byte-near-identical JD text to `2026-06-27_mollie_analytics-engineer-revenue-operations` but listed under a different Ashby UUID, so it never shared a normalized URL with its match. Removed, keeping the earlier-dated record. Corpus dropped from 326→325 total, 292→291 analytical cohort. This second, smaller pass is what flipped `velocity_vs_rigour × has_dbt` (§4.0) back above the significance threshold after pass 1 had pushed it below — see §9.6 for the full account and §4.0/§4.9 for exactly which relationships each pass affected. `scripts/check_duplicate_jd.py` (URL-based, pass 1's method) now runs as a mandatory step in `.claude/skills/classify-jd/SKILL.md` before any new JD is written; it would not have caught the pass-2 case on its own, since that duplicate never shared a URL — content-similarity is a weaker, noisier signal and was applied manually rather than automated.

**2026-08-11 expansion:** Twenty new JDs added (17 in the analytical cohort — 2 `data_engineering`, 1 `team_lead`), the batch notable for its ATS diversity: Workday (Circles, J.Crew, Neuberger Berman), Ashby (p2p.org, and Profound via a company-site redirect — `tryprofound.com/careers/...` resolving to an Ashby-hosted posting rather than the `jobs.ashbyhq.com` domain directly), Teamtailor (Skandia), BambooHR (Cookie Information), Greenhouse (Zynga, Socialpoint — see below). Also included: a recruiter repost (Genpact, sourced via an intermediary staffing listing, "Genpact via Innova ESI"), a French-language job posting sourced via a Nuxt-based French job board (`free-work.com`, JEMS), and two non-English JDs preserved verbatim per the language-mismatch handling in `.claude/skills/classify-jd/SKILL.md`: Swedish (Skandia) and Dutch (Clovr). Zynga and Socialpoint's postings are a near-duplicate pair — both are Senior Analytics Engineer roles at sibling mobile-gaming studios under the same parent company, both sourced via Greenhouse, both `low` `domain_risk`/`mature` maturity — retained as distinct records since they are genuinely separate postings at different studios, not re-scrapes of the same URL, but flagged here as a source of correlated rather than independent signal in this batch. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 487 total records, 440 in the analytical cohort (§9.11).

**2026-08-13 expansion:** Nineteen new JDs added from a 24-URL batch (18 in the analytical cohort — 16 AE/BI, 2 `team_lead`, 1 `data_engineering` excluded), notable for its skew toward larger, more established employers and a concentration of New York-based postings: Aperia Solutions, Fox Corporation (`team_lead`), Butterfly Network, Puig, Current (`team_lead`), Bristol Myers Squibb, payabl., Capitole, REVEL, MUBI, Retail Insight, Zego, Siemens, foodpanda, Jefferies (`data_engineering`, excluded), Warner Bros. Discovery, Secretlab, N-able, CMC Markets. Four URLs from this batch were confirmed duplicates of existing records (Pave, Awin, Satispay, Rippling) and skipped, not double-counted; two further URLs (Exness careers — a client-rendered Astro/MUI SPA with no embedded JSON payload or discoverable API — and UK Civil Service Jobs — blocked by a bot-check interstitial) could not be verified via curl and were left unclassified rather than substituted with a WebFetch paraphrase, per the skill's extraction-integrity rule. `domain_risk`: moderate 10, high 7 (five fintech/payments/insurance: Aperia Solutions, Current, payabl., Zego, CMC Markets, plus Bristol Myers Squibb pharma and foodpanda payments), low 1. `data_team_maturity`: mid 9, mature 8, early 1 — notably more mature-skewed than the standing corpus average, driven by this batch's large-organisation share (Fox Corporation, Siemens, Warner Bros. Discovery, N-able, CMC Markets). `seniority`: mid 7, senior 4, manager 3, staff 3, lead 1. `ai_role`: none 12, ai_user 3 (Butterfly Network, MUBI, Zego), ai_enabler 3 (Retail Insight, foodpanda, N-able) — the N-able posting is a particularly clean `ai_enabler` example, describing a Snowflake Semantic Views layer built explicitly as "the shared vocabulary AI agents use to answer business questions." `has_dbt` (AE/BI): 14/16. `job_location`: five New York City-area roles (Aperia Solutions, Butterfly Network, Puig, Current, Fox Corporation) introduced the corpus's first `nyc_metro` geo bucket, alongside three India-based roles (Jefferies/Hong Kong is not India but was grouped separately; N-able/Bangalore, Siemens/Pune-Bangalore, Warner Bros. Discovery/Hyderabad) reinforcing the existing APAC stratum. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 531 total records, 478 in the analytical cohort (§9.12).

**2026-08-18 expansion:** Seventeen new JDs added (16 in the analytical cohort — all `analytics_engineering_bi`, no `team_lead`; 1 `data_engineering` excluded: S&W Group), notable for a strong European concentration alongside continued growth in the NYC-metro and APAC strata: Lupa (London), S&W Group (Southampton, excluded), Checkout.com (London), BMJ (London/Hybrid), QL Resources Berhad (Shah Alam, Malaysia), Alight (Noida/Gurgaon, India), Ridgeline (New York/San Ramon/Remote), EvolutionIQ (New York), InterEx Group (agency posting for an unnamed PE/investment-management client, New York), Minerva (New York), Orange Belgium (Brussels), UnitedHealth Group/Optum (Dublin/Letterkenny, Ireland), Qonto (Paris), Coop (Oslo — Norwegian JD, preserved verbatim in the archive per the language-mismatch rule), Kilo/Moérie (Vilnius, Lithuania), Hügli/Bell Food Group (Radolfzell, Germany — German JD, preserved verbatim), and Pluang (Singapore). `geo_region`: nyc_metro 4 (EvolutionIQ, InterEx's client, Minerva, Ridgeline), apac 3 (Alight, Pluang, QL Resources Berhad), uk_remote 3 (Lupa, BMJ, Checkout.com), and one each of dach_other (Hügli), nordics (Coop), baltics (Kilo/Moérie), benelux (Orange Belgium), france (Qonto), ireland (UnitedHealth Group/Optum) — pushing the APAC stratum to 74 roles and the NYC-metro cluster to 34 (§3, §9.5, §9.13). `domain_risk` (AE/BI, n=16): high 5 (Checkout.com and Qonto, both payments/banking; UnitedHealth Group/Optum, healthcare; Pluang, fintech/investment; InterEx's client, financial services/PE), moderate 8, low 3 — a notably high-risk-skewed batch relative to the standing corpus average (26%) driven by its fintech/banking/healthcare concentration (§9.14). `loss_aversion_framing` tracks the same concentration: `high` for Checkout.com, Qonto, BMJ, Orange Belgium, and Pluang. `ai_role`: `ai_enabler` 3 (Orange Belgium, Pluang, UnitedHealth Group/Optum — all building AI-consumable semantic layers or agentic infrastructure), `ai_user` 3 (Minerva, explicit Claude Code/Cursor usage as a stated "force multiplier"; Qonto, an explicit AI-native work-style requirement; Ridgeline), `none` 11. `has_dbt` (AE/BI): 9/16. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 557 total records, 502 in the analytical cohort (§9.14).

**2026-08-22 corpus audit and correction:** A full-corpus integrity audit found and fixed a cluster of data-quality problems that had accumulated across several recent batches, most consequentially a pattern of paraphrased or condensed `jd_archive.md` files (WebFetch-style summaries rather than verbatim raw-HTML extraction) affecting roughly 30 records dated 2026-07-13 through 2026-08-14, several of which had also been silently translated to English without the standing language-mismatch note. Also fixed: two records with fabricated salary figures, one fully fabricated record with no source text (deleted), two orphaned/broken directories (deleted), one enum violation, and one tool-array overlap. Roughly 25 further records were re-verified and confirmed genuinely stale (posting removed, filled, or expired) and correctly left untouched. Net effect: 586→585 total records, with the analytical cohort standing at 527 once this audit's corrections are reconciled with records added since the 2026-08-18 batch. Full account in §9.15.

**2026-08-25 expansion:** Twenty-four new JDs added (23 in the analytical cohort — 22 `analytics_engineering_bi`, 1 `team_lead` [Cedar]; 1 `data_engineering` excluded: KTM AG; 1 `other` excluded: We Are Meta), a European/APAC-heavy batch with a notably strong `ai_enabler` signature: MoMo, NetApp, Eden Scott, Maya, and ITE Singapore all describe building data infrastructure or semantic layers explicitly for AI/agent consumption, and Statista shows a clean `ai_user` example naming Claude Code directly in its tech-stack requirements. `geo_region`: apac 9 (Floq, Gogoro, Insulet, ITE Singapore, Lyka, Maya, Microsourcing, MoMo, NetApp), uk_remote 4 (Cedar, Checkout.com, Eden Scott, La Fosse), nyc_metro 3 (New York Technology Partners, Rockstar Games, US Mobile), global_remote 2 (Infoplus Technologies, We Are Meta excluded), dach_other 2 (KTM AG excluded, Mercedes-Benz Bank), and one each of hamburg (Eraneos), iberia (Perk), france (Pluxee), berlin (Statista). Three JDs in this batch are German-language and preserved verbatim per the standing language-mismatch rule (Eraneos, Mercedes-Benz Bank, KTM AG) — see §9.17. All classified using the same Layer B codebook; no statistical re-weighting applied. Corpus reached 609 total records, 549 in the analytical cohort.

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=531, AE/BI only): χ²=25.64, p<0.0001, V=0.16 — stable, essentially identical to the n=510 reading (p<0.0001, V=0.16). χ² for `velocity_vs_rigour` × `has_dbt` (n=531, AE/BI only): χ²=6.60, **p=0.037, V=0.11 — remains significant, but markedly weaker than the n=510 reading (p=0.0084, V=0.14).** This comparator sat just below the conventional threshold for many consecutive snapshots before first crossing it at n=427, held across the next several updates, and this revision it stays on the significant side of p<0.05 but has drifted noticeably closer to the line and its effect size has dropped out of the "small effect" range this document otherwise treats as its own floor (V≈0.10–0.14) — worth flagging as a comparator that may cross back to null at the next update rather than treating this crossing as newly re-confirmed. **This continues to complicate Prediction 1's clean reading, though somewhat less than before:** rigour framing shows a small, detectable association with both `domain_risk` (V=0.16) and `has_dbt` (V=0.11) — the two remain not cleanly separated by significance, but `domain_risk`'s effect is now more clearly the larger of the two than in the prior two snapshots. Prediction 1's directional claim (risk matters at least as much as tool adoption) still holds; its stronger claim (tool adoption shows *no* detectable link) continues to not hold at this n, though the margin by which it fails to hold has narrowed. High-risk roles remain markedly more rigour-dominant (§4.2), a real gradient, stable across every snapshot from n≤240 onward.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role` is coded across the full analytical cohort (n=549 — see §9.3 for the pipeline-bug history; a further evidence-quality audit on 2026-08-23 found and corrected several `ai_role` misclassifications, see §9.16). `ai_role = none` is 62% of the cohort (unchanged from 62% at n=527) — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=549): χ²=12.35, p=0.136, V=0.11 — **not significant**, essentially unchanged from the prior reading (p=0.137). `ai_enabler` (123 of 549, 22%) still concentrates somewhat in `internal_data` and `mixed` stakeholder orientation versus `ai_user` (87, 16%) which spreads similarly. **Prediction 2's second half (non-random concentration) continues to not hold at conventional significance; the first half (large adoption-claim/hiring-criterion gap) still holds — `none` is 62% of hiring criteria against the survey's 72% daily-use claim.**

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result reported honestly as it changes — including when a corpus expansion moves an earlier reading, as happened here. Prediction 1's `domain_risk` comparator has held significant at essentially the same effect size from n=272 through the current n=531 (AE/BI); its `has_dbt` comparator, non-significant across every snapshot through n=389, crossed p<0.05 for the first time at n=427 and continues to hold at n=531 (p=0.037, V=0.11) — but this revision's margin and effect size are both visibly weaker than the four prior updates that held the crossing, worth watching rather than treating as settled. Prediction 2 flipped a different direction earlier on: a marginal, medium-effect result at a small, biased coded subset (n=86) gave way to a clear non-result once the same three dimensions were coded across the full cohort, and that non-result has held at every subsequent n including n=549. These trajectories are instructive about statistical power and sample composition rather than embarrassing reversals to paper over — this is the fix for Appendix B's "six theories, none tested" critique — not a stronger claim than the data supports, but an honest, and honestly-updated, one.

---

## 4. Findings

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=549) |
|--------------------|---|---|
| rigour | 375 | 68% |
| mixed | 153 | 28% |
| velocity | 21 | 4% |

**68% of JDs in the analytical cohort signal a rigour orientation**, unchanged from n=527. Pure velocity ticks up to 4% (21 JDs across 549, up from 18 at n=527 — within normal batch-to-batch noise, not a shift). This remains the clearest single-dimension finding in the dataset by margin. The overall trajectory (80% → 75% → 75% → 72% → 73% → 71% → 71% → 71% → 71% → 68% → 68% → 68% → 68% → 68%) continues to show the mid-corpus downward drift levelled off at this n. Per §4.2, rigour framing shows a small but statistically real gradient with domain risk; per §4.0, its gradient with tool adoption (`has_dbt`) also clears significance at this n, though more narrowly than the prior snapshot — see §4.0 for the full account.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for risk, and a small, real effect for tooling — the two are not cleanly separated by significance at this n.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=549) |
|-------------|---|---|
| moderate | 369 | 67% |
| high | 146 | 27% |
| low | 34 | 6% |

**Cross-tab with velocity_vs_rigour** (AE/BI only, n=531):

χ²=25.64, p<0.0001, V=0.16 (n=531 — stable, essentially identical to the n=510 reading of p<0.0001, V=0.16). **High-risk roles remain detectably more rigour-dominant than moderate or low-risk roles,** and the relationship has held through every expansion, both dedup passes, and the 2026-08-22 audit's re-classification of ~30 records (§9.15) essentially unchanged in effect size. This still broadly confirms §4.0 Prediction 1's interpretation: domain risk carries the larger of the two effect sizes, and its lead over the `has_dbt` comparator widened this revision as that comparator's own effect size narrowed (§4.0). The effect size (V=0.16) stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is common everywhere but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=549) |
|--------------------|---|---|
| mid | 311 | 57% |
| mature | 153 | 28% |
| early | 85 | 15% |

**Just under three-fifths of roles are mid-stage.** Early-stage roles sit at 15%; genuinely mature organisations are 28% — both essentially unchanged from the n=527 snapshot (16%/27%). APAC's own maturity mix (§9.5) continues to track the corpus average closely.

**Maturity × greenfield_vs_fix cross-tab** (χ²=248.44, p<0.0001, V=0.48, n=549 — the strongest relationship in the dataset, and stable across every expansion, dedup pass, and the 2026-08-22 audit):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 5% | 73% | 22% | 85 |
| mid | 32% | 5% | 63% | 311 |
| mature | 41% | 6% | 53% | 153 |

Greenfield work concentrates sharply at early-stage (73%) and is nearly absent at mature (6%). This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, with the effect size essentially unchanged at V=0.48.

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 11% | 27% | 62% | 85 |
| mid | 34% | 43% | 23% | 311 |
| mature | 26% | 37% | 37% | 153 |

χ²=51.82, p<0.0001, V=0.22 (n=549, essentially unchanged from n=527's V=0.22). Early-stage roles offer strategic autonomy at 62% — still far above mid- or mature-stage roles (23% and 37%). Mid-stage remains the least strategic tier despite being the largest market segment; mature-stage's strategic share ticks up slightly (35%→37%, within noise). The core pattern — greenfield work and direction-setting cluster at early-stage companies — holds.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=549) |
|-------------------------|---|---|
| internal_data | 270 | 49% |
| mixed | 107 | 19% |
| commercial | 75 | 14% |
| finance | 60 | 11% |
| product | 37 | 7% |

**49% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market, unchanged from the n=527 reading (49%). APAC's own stakeholder mix isn't a standout finding — see §9.5.

**Cross-tab with rigour** (χ²=66.74, p<0.0001, V=0.25, n=549):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 15% | 85% | 0% | 60 |
| internal_data | 18% | 79% | 3% | 270 |
| product | 43% | 51% | 5% | 37 |
| mixed | 44% | 53% | 3% | 107 |
| commercial | 43% | 45% | 12% | 75 |

Finance and internal_data roles remain the most rigour-dominant (79–85%); commercial and product roles are close to evenly split between rigour and mixed framing, with commercial's velocity share holding at 12%. This relationship remains clearly significant at n=549 (V=0.24, essentially unchanged from n=527's V=0.26) — still the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=549) |
|----------------|---|---|
| mixed | 214 | 39% |
| strategic | 179 | 33% |
| execution | 156 | 28% |

The three-way split persists, and `mixed` continues to lead `strategic`/`execution` (39% vs. 33%/28%, unchanged from the n=527 reading of 39/33/28). This remains within the range this corpus size produces from batch to batch and is not read as a trend toward `mixed` overtaking the other two categories structurally — just where the current n happens to land. This even distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=126.89, p<0.0001, V=0.34, n=549):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 75% | 25% | 0% | 24 |
| mid | 37% | 47% | 16% | 264 |
| senior | 19% | 35% | 47% | 216 |
| lead | 0% | 25% | 75% | 20 |
| manager | 0% | 30% | 70% | 10 |
| staff | 0% | 13% | 87% | 15 |

The relationship remains statistically real (p<0.0001, effect size essentially unchanged at V=0.34) and the practical read is stable: **"Mid" remains the single largest title cohort (n=264) but "Senior" (n=216) remains the more informative one, splitting 19/35/47 across execution/mixed/strategic — solidly more strategic-leaning than the corpus-wide split, consistent with prior snapshots.** A "Senior Analytics Engineer" title continues to be a meaningfully positive predictor of strategic scope, though it remains far from deterministic (about a fifth of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (70–87%), but remain small cells. The practical implication for interviews is unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title is informative but still leaves real uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly three-quarters of the corpus; the APAC gap remains a tested null, the rigour link crosses back into significance

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=549) |
|---------------|---|---|
| hiring_manager | 423 | 77% |
| mixed | 89 | 16% |
| recruiter | 37 | 7% |

**Hiring-manager-authored JDs are 77% of the corpus**, essentially unchanged from 76% at n=527. **The APAC gap remains short of p<0.05 this revision:** APAC roles are 86% hiring_manager-authored vs. 75% for the rest of the corpus (χ²=5.22, p=0.074, V=0.10, n=549). Per the "significance is not permanent" principle applied throughout this document (§1), this is stated plainly as the current state of the evidence: the point estimate is essentially unchanged (86%→86% APAC) and the gap direction is unchanged, but the effect size sits right at the V≈0.10 floor used elsewhere on this page and the test itself continues to fall short of the conventional threshold. This gap has crossed the conventional threshold in both directions across several consecutive snapshots (§9.5's table shows the trajectory); treat the direction (APAC skews toward hiring-manager authorship) as a plausible, still-live signal and the specific significance test as too sensitive to batch composition at this n to lean on.

**Cross-tab with rigour** (χ²=10.47, p=0.033, V=0.10, n=549): hiring_manager 71% rigour / 25% mixed / 4% velocity; mixed 62% rigour / 37% mixed / 1% velocity; recruiter 54% rigour / 41% mixed / 5% velocity. **This crosses back above p<0.05 this revision** (was p=0.071 at n=527, and p=0.022 at n=502 before that) — the third reversal of this specific test's significance status across recent snapshots, at an effect size (V=0.10) that sits exactly at the floor this document treats as its threshold for a "small" effect. The direction has been consistent throughout — more hiring-manager sophistication tracks with somewhat more rigour framing — but given how repeatedly this test has flipped across the p<0.05 line at essentially the same small effect size, it should be read as a marginal, batch-sensitive association rather than a settled finding in either direction.

**Cross-tab with has_dbt** (χ²=26.59, p<0.0001, V=0.22, n=531, AE/BI only):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 31% | 69% | 411 |
| mixed | 54% | 46% | 84 |
| recruiter | 64% | 36% | 36 |

Hiring-manager-authored JDs name dbt at roughly 2× the rate of recruiter-authored ones (69% vs. 36%), essentially unchanged from the n=510 reading — the relationship is stable and the effect size held close to its prior level (V=0.22, was 0.24). Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.90 | 153 |
| mid | 2.48 | 311 |
| early | 2.55 | 85 |

The earlier draft's finding — mature teams have the widest named-stakeholder count — is directionally intact (2.90 vs. 2.48 vs. 2.55), essentially unchanged from the n=527 reading (2.89/2.49/2.59). Mature still leads and mid still trails, the same ordering as every prior snapshot, and early sits between the two as it has for several snapshots now rather than at either extreme. **This dimension still does not currently support a confident finding.** It is retained in the codebook for future corpus growth, but no claim built on it should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **63% of AE/BI roles (n=531) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last several snapshots (68%→66%→65%→65%→66%→65%→64%→65%→65%→66%→64%→65%→64%→64%→63%), including through both dedup passes, every subsequent expansion, and the 2026-08-22 audit's re-classification of ~30 records (§9.15) — dbt prevalence among APAC AE/BI roles specifically now runs a few points below the corpus average (58% vs. 64% for the rest of the corpus, §9.5), a wider gap than earlier snapshots showed. This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: roughly one in three roles don't name dbt at all, stable across fifteen consecutive corpus snapshots.

---

## 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=549, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.14 — essentially unchanged from the n=527 threshold, consistent with the modest power gain from ~22 additional records. Findings below the current threshold are still directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.36, n=549)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=146) | 4% | 36% | 38% | 16% | 5% |
| low (n=34) | 6% | 0% | 68% | 21% | 6% |
| moderate (n=369) | 18% | 2% | 52% | 21% | 7% |

High-risk roles concentrate heavily in finance (~36%, vs. 0% of low-risk and ~2% of moderate-risk roles), unchanged in direction and essentially unchanged in effect size (V=0.36, unchanged from n=527's V=0.36). Still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3). Product-facing roles remain rare in high-risk contexts (5%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (68%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: domain risk and mission type — a tested null (χ², p=0.413, V=0.06, n=549)

| domain_risk | fix_scale | greenfield | mixed |
|-------------|-----------|-----------|-------|
| high (n=146) | 33% | 17% | 50% |
| low (n=34) | 41% | 15% | 44% |
| moderate (n=369) | 28% | 16% | 56% |

Moderate-risk roles still look the most "mixed" (incremental extension of an existing stack, 56%) and low-risk roles still lean somewhat more toward fix_scale (41%) than moderate-risk roles (28%) — the direction is broadly the same as prior snapshots, and the test remains well short of p<0.05 at this n, with the effect size essentially unchanged (V=0.06, was 0.07 at n=527). This relationship has moved across the threshold in both directions across earlier snapshots and remains null at the current n — read that trajectory as a small, marginal effect that this corpus size can't reliably detect either way, not as evidence the underlying pattern has changed. Kept here as a documented test, not as a claimed finding.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.48, n=549)

Full cross-tab in §4.3. Greenfield work is 73% of early-stage roles and 6% of mature-team roles — the sharpest, most reliable relationship in the corpus, holding at V=0.48, essentially unchanged from n=527's V=0.48.

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (45%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.34, n=549)

Full cross-tab in §4.5. "Mid" (n=264) remains the largest title cohort by count, but "Senior" (n=216) remains the more informative title, spanning execution/mixed/strategic at 19/35/47 — noticeably more strategic-leaning than the corpus-wide split, consistent with prior snapshots. Staff, manager, and lead titles (n=15, n=10, n=20) predict strategic scope near-perfectly (70–87%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, now more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=549 "Senior" remains a meaningfully informative signal (47% strategic vs. an overall cohort rate of 33%), consistent with prior snapshots — the signalling account continues to look less contradicted than the n=123 baseline suggested, though about a fifth of senior roles remain pure execution, so the signal stays noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: Stakeholder orientation and autonomy level — a tested null again this revision (χ², p=0.057, V=0.12, n=549)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| finance (n=60) | 28% | 32% | 40% |
| commercial (n=75) | 20% | 45% | 35% |
| mixed (n=107) | 21% | 47% | 33% |
| internal_data (n=270) | 34% | 37% | 29% |
| product (n=37) | 27% | 30% | 43% |

**This relationship reads short of p<0.05 this revision** (was p=0.035, V=0.13 at n=527) — the direction is essentially unchanged (product carries the highest strategic share at 43%, internal_data the lowest at 29%), but the test no longer clears the conventional threshold and the effect size has dipped to V=0.12. This is the third time this specific relationship has crossed the p<0.05 line in either direction across recent snapshots (null at n=502, significant at n=527, null again at n=549) — treat it as a real but modest tendency that this corpus size cannot reliably pin down as significant or not from one update to the next, not as a confirmed driver of autonomy or a retraction of the pattern.

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.22, n=531)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 69% vs. 36% for recruiter-authored — still the clearest authorship-quality signal in the dataset, with the gap and effect size essentially stable against the n=510 reading (V=0.24→0.22). Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

**Geography's link to JD authorship reads short of p<0.05 this revision (χ², p=0.074, V=0.10, n=549):** APAC roles are 86% hiring-manager-authored vs. 75% for the rest of the corpus — the same direction held across every prior snapshot (§9.5), and the gap is essentially the same size as before (86%→86% APAC), and the test remains just short of the conventional threshold, with the effect size (V=0.10) sitting right at the floor used elsewhere on this page. Per this document's "significance is not permanent" convention, this is restated plainly as the current state of the evidence: a directionally consistent gap that this specific test still cannot confirm at conventional significance. Two readings remain plausible and the JD text alone can't distinguish them: APAC hiring managers may write JDs more directly (less recruiter/ATS-template mediation in this sample), or the `jd_authorship` codebook's technical-specificity heuristic may be picking up an ATS-formatting convention specific to how these postings were sourced (many via LinkedIn/company career pages with detailed bullet-point tool lists) rather than true authorship. Given `jd_authorship`'s already-low self-consistency (0.58, §3) and this relationship's history of repeatedly crossing the p<0.05 line in both directions across consecutive snapshots, treat the direction (APAC skews toward hiring-manager authorship) as a plausible but currently-unconfirmed signal, not a finding to build on.

---

### Finding H: Work arrangement — driven almost entirely by geography, with a maturity effect and an APAC disclosure signature that both remain significant; the autonomy link crosses to a tested null (n=609 total / 549 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 36% of the analytical cohort) against all other categorical and boolean dimensions found essentially one dominant driver: **where the job is**. `geo_region` remains by far the strongest association (direction and magnitude consistent with earlier snapshots) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region. This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test remains statistically unreliable at the sparse-cell level given 15 regions × 3 arrangement categories. Treat the direction as real, the p-value as decorative.

**APAC's own signature remains significant on both cuts of the question.** Of the 88 APAC roles, 53% state no work arrangement at all, vs. 33% for the rest of the corpus — directionally the same read as every prior snapshot. APAC's *stated* arrangements continue to show a meaningfully higher onsite share (27% vs. 8% for the rest of the corpus) alongside a lower hybrid share (66% vs. 77%). Crossing the full four-category `work_arrangement` breakdown (hybrid/not_stated/onsite/remote) against APAC-vs-rest gives χ²=24.49, p<0.0001, V=0.21, n=549 — a small effect, slightly larger than the n=527 snapshot (χ²=18.70, p=0.0003, V=0.19). Read this as APAC's work-arrangement profile (both what gets disclosed and, when disclosed, what it says) continuing to measurably differ from the rest of the corpus. Among the 41 APAC roles that do state an arrangement, hybrid still dominates numerically but the onsite share (27%) remains among the largest of any region in the dataset, matched closely by the `nyc_metro` bucket (§9.13).

**The `data_team_maturity` relationship, on the stated-arrangement subset, remains significant: χ²=27.59, p<0.0001, V=0.20 (n=352 stated)** — essentially unchanged from the n=527 snapshot's V=0.21, within the range of batch-to-batch noise this test has shown before. Mature teams post hybrid most often (87% of stated arrangements) vs. 56% for early-stage teams, who split more evenly across hybrid/onsite/remote (56% / 26% / 18%); mid-stage sits between the two (77% / 7% / 16%). The direction is identical to every prior snapshot and matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**`autonomy_level` × `work_arrangement` reads short of p<0.05 this revision: χ²=8.67, p=0.070, V=0.11 (n=352 stated)** — a reversal from the n=527 reading (p=0.044, V=0.12), the second consecutive snapshot at which this specific test has sat right on the threshold. The pattern is broadly the same shape as before — mixed-autonomy roles remain the most hybrid-concentrated (82%), while strategic roles show the highest onsite share (16%) and a matching remote share (16%) simultaneously — but the test itself no longer clears conventional significance. Given the effect size has consistently sat at or just below the small-effect floor across every recent snapshot, treat this as a marginal, batch-sensitive relationship rather than a confirmed finding in either direction.

**On the missing 36% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. Across maturity tiers it still does not concentrate strongly — mature (40%), mid (36%), and early-stage (27%) withhold a policy at close to the same rate, essentially unchanged from earlier snapshots. Folding `not_stated` back in as a fourth category for the maturity test (rather than excluding it) remains significant, at a level consistent with prior snapshots (χ²=33.54, p<0.0001, V=0.17, n=549). This is a different question than the stated-only test above ("does maturity predict whether an arrangement is stated at all," answer: modestly, yes) and both readings remain legitimate. "Does geography predict whether an arrangement is stated at all" remains confirmed at conventional thresholds for APAC (above) — and the dashboard panel shows the maturity views.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `greenfield_vs_fix`, `ai_role`, `testing_framing`, `loss_aversion_framing`, and `stakeholder_orientation` (all p>0.20). `ats_platform` came close in earlier snapshots but has the worst sparse-cell problem of any test run and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 36% of the analytical cohort states no work arrangement at all, and that rate is not uniform by region — APAC's 53% not-stated rate (above), combined with its distinct stated-arrangement mix (more onsite, less hybrid), remains a confirmed, not merely directional, difference at this n. Whether it reflects different posting conventions (many APAC postings were sourced via LinkedIn/company career pages that omit a work-arrangement field entirely, or via channels more likely to post explicitly onsite roles) or genuine underlying differences in how APAC employers set policy is not resolvable from JD text alone.

---

### Finding I: With `ai_role`, `testing_framing`, and `loss_aversion_framing` coded on the full cohort (n=549; §9.3), a systematic sweep against every other categorical dimension and tool flag surfaces several relationships, all stable at the current n

**Testing accountability tracks the fear register closely (χ²=138.31, p<0.0001, V=0.35, n=549):**

| testing_framing | high | moderate | none |
|---|---|---|---|
| absent (n=122) | 9% | 34% | 57% |
| responsibility (n=346) | 27% | 66% | 7% |
| tool_listed (n=81) | 12% | 62% | 26% |

JDs that frame testing as an owned responsibility carry almost no `loss_aversion_framing = none` (7%, vs. 57% for `absent`-testing JDs) — essentially unchanged from prior snapshots. This is a construct-validity result as much as a substantive one: two dimensions coded independently, from different evidence quotes, land in the same place — a JD that asks the candidate to own data quality is, unsurprisingly, also a JD that is afraid of something going wrong. The `absent`/`none` corner (57%) is the "pure delivery" JD with no quality or risk register at all; the `responsibility`/`moderate` combination (66% of `responsibility`-coded JDs) is the modal case — quality ownership paired with garden-variety operational-reliability fear, not compliance framing.

**Loss aversion tracks rigour framing even more tightly than domain risk does (χ²=158.04, p<0.0001, V=0.38, n=549):**

| loss_aversion_framing | mixed | rigour | velocity |
|---|---|---|---|
| high (n=113) | 3% | 97% | 0% |
| moderate (n=321) | 24% | 74% | 2% |
| none (n=115) | 63% | 24% | 13% |

97% of `high`-loss-aversion JDs are rigour-framed, against 24% for JDs with no loss-aversion signal at all — essentially unchanged in magnitude from prior snapshots, and still a cleaner split than domain_risk's own relationship with rigour framing (§4.2, V=0.16). Read together with §4.2, this suggests `loss_aversion_framing` is picking up something closer to the JD's *actual* fear register than `domain_risk`'s sector-level proxy does — a JD can be sector-coded `moderate` risk but still carry `high` loss-aversion language if the role's specific responsibilities emphasise trust/audit framing (see Finding A's DiMaggio & Powell read, §4.9, for why sector and role-level framing can diverge).

**dbt-equipped roles are far more likely to frame testing as an owned responsibility (χ²=55.10, p<0.0001, V=0.32, n=531, AE/BI only):**

| testing_framing | has_dbt=False | has_dbt=True |
|---|---|---|
| absent (n=117) | 64% | 36% |
| responsibility (n=336) | 26% | 74% |
| tool_listed (n=78) | 44% | 56% |

This remains the strongest tool-stack relationship found for any of the three dimensions, essentially unchanged from prior snapshots, and it cuts against a purely fashion-driven reading of dbt adoption: `has_dbt` JDs are 74% likely to frame testing as an owned responsibility, vs. 36% for JDs with no dbt mention — dbt's testing framework (`dbt test`) appears to travel with genuine ownership language, not just as a name-drop.

**`ai_role` and autonomy move together in an unexpected direction — `ai_user` and `ai_enabler` roles both remain markedly more strategic than `none` (χ²=43.53, p<0.0001, V=0.20, n=549):**

| ai_role | execution | mixed | strategic |
|---|---|---|---|
| ai_enabler (n=123) | 15% | 37% | 49% |
| ai_user (n=87) | 17% | 37% | 46% |
| none (n=339) | 36% | 40% | 23% |

The naive expectation might be that "use AI coding tools" is a junior-coded, execution-heavy ask (accelerate scoped work faster) while "build AI-consuming infrastructure" is the more strategic mandate. The data continues to show the opposite ordering: both `ai_user` and `ai_enabler` JDs are markedly more strategic-leaning than `none` (49%/46% vs. 23%), close to the prior snapshot's tied reading (both 49% at n=527). One plausible read: JDs that expect AI-tool fluency, whether as user or infrastructure-builder, are disproportionately senior/lead-level postings at companies confident enough in their engineering culture to name a specific workflow expectation rather than a junior competency checkbox — the ask reads more like "operate at a higher level of leverage" than "be fast at typing." This is exploratory and not pre-registered (§4.0 only tested `ai_role × stakeholder_orientation`); it's flagged here as a candidate for a future prediction, not a confirmed causal story.

**`ai_role` also tracks `greenfield_vs_fix` (χ²=30.64, p<0.0001, V=0.17, n=549):**

| ai_role | fix_scale | greenfield | mixed |
|---|---|---|---|
| ai_enabler (n=123) | 18% | 26% | 56% |
| ai_user (n=87) | 21% | 23% | 56% |
| none (n=339) | 37% | 11% | 53% |

Both `ai_enabler` and `ai_user` roles show meaningfully more greenfield work (26%/23%) than `none` roles (11%) — consistent with prior snapshots, with the effect size essentially unchanged from n=527 (V=0.17, was 0.18). This dovetails with the `ai_role × autonomy_level` finding above: greenfield work and strategic autonomy already travel together generally (§4.3), so some of the "AI roles skew strategic" pattern may be downstream of "AI roles skew greenfield" rather than a direct effect of the AI expectation itself. Disentangling the two would need a three-way cross-tab at a larger n than this corpus currently supports.

**Everything else involving the three new dimensions tested null or only weakly suggestive** (p>0.05 or V<0.15): no meaningful association between `ai_role`/`testing_framing`/`loss_aversion_framing` and `seniority`, `urgency`, or most individual BI-tool flags. `testing_framing × geo_region` remains a sparse-cell test (15 regions × 3 categories, several expected cells <1) and should be treated as decorative, not evidential, despite APAC's own testing_framing mix not standing out as directionally interesting (§9.5).

---

### Summary of relationships tested

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | <0.0001 | 0.16 | Stable at n=531 AE/BI (was p<0.0001, V=0.16 at n=510) — small real effect, high-risk roles more rigour-dominant |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.037 | 0.11 | **Still significant at n=531 AE/BI, but visibly weaker than last revision** (was p=0.0084, V=0.14 at n=510) — the margin has narrowed for the first time since the crossing first held; see §4.0 |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.136 | 0.11 | Still not significant at n=549 (was p=0.137 at n=527) — a stable non-result |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.36 | Strongest relationship: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.48 | Near-deterministic and stable: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.413 | 0.06 | **Still not significant at n=549** (was p=0.324, V=0.07 at n=527) — this relationship has crossed the threshold in both directions across earlier snapshots and remains null; read as a marginal effect this corpus size can't reliably detect either way, not a reversal (§4.9 Finding B) |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.22 | Hiring-manager JDs name dbt ~2× more than recruiter JDs — stable |
| geo_region (APAC vs. rest) × jd_authorship | χ² | 0.074 | 0.10 | **Not significant at n=549** (was p=0.092, V=0.10 at n=527) — direction unchanged (86% vs. 75% hiring-manager-authored), the test still doesn't clear p<0.05 and the effect size sits at the floor; Finding G, §9.5 |
| geo_region (APAC vs. rest) × work_arrangement (4-category) | χ² | <0.0001 | 0.21 | **Remains significant at n=549, effect size slightly larger** (was p=0.0003, V=0.19 at n=527) — APAC's not-stated rate (53% vs. 33%) and its stated-arrangement mix (more onsite, less hybrid) both continue to measurably differ from the rest of the corpus; Finding H, §9.5 |
| seniority × autonomy_level | χ² | <0.0001 | 0.34 | Significant overall; "Senior" (n=216, still not the modal title by count — "Mid" is, at n=264) still predicts strongly (47% strategic) |
| stakeholder_orientation × autonomy_level | χ² | 0.057 | 0.12 | **Not significant at n=549** (was p=0.035, V=0.13 at n=527) — a small effect that has now crossed the p<0.05 line in both directions across three consecutive snapshots; product-facing roles still carry the highest strategic share (43%), internal_data the lowest (29%) (§4.9 Finding E) |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.25 | Finance/internal_data most rigour-dominant; commercial/product carry the most mixed/velocity framing |
| jd_authorship × velocity_vs_rigour | χ² | 0.033 | 0.10 | **Newly significant at n=549** (was p=0.071, V=0.09 at n=527) — the third reversal of this specific test's significance status across recent snapshots at an effect size right at the small-effect floor; treat as marginal and batch-sensitive, not settled (§4.6) |
| collaboration_width × data_team_maturity | — | — | — | Still does not support a claim at n=549 (§4.7) |
| work_arrangement × geo_region (stated subset) | χ² | <0.0001 | — | Strongest association found, but unreliable — most cells <5 (Finding H) |
| language_gate_type × geo_region (3-way: Europe/APAC/NYC metro) | χ² | <0.0001 | 0.23 | **Largest region effect in this document.** Hard/soft language gates: Europe 40.0%, APAC 9.1%, NYC metro 0% — near-exclusively a European phenomenon; §9.13, n=497 |
| velocity_vs_rigour × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.0001 | 0.16 | `rigour` share steps down Europe 72.2% → APAC 68.2% → NYC 46.2%; a framing/dialect gap, though the confound check below means it can no longer be read as cleanly separate from a risk-composition gap; §9.13, n=497 |
| domain_risk × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.075 | 0.09 | **Back to a tested null at n=497** (was significant last revision, p=0.035, V=0.11) — `high` domain_risk still climbs step-wise Europe 24.1% → APAC 35.2% → NYC 38.5%, but the three-way test no longer clears p<0.05; the confound check behind the two findings above (§9.13) is restored to treating domain_risk composition as approximately flat, though the point estimates themselves still show the same gradient — see §9.13 |
| stakeholder_orientation × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.039 | 0.13 | Still significant at n=497 (was p=0.045, V=0.13) — `mixed` orientation rises outside Europe; §9.13 |
| jd_authorship × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.024 | 0.11 | Still significant at n=497 (was p=0.046, V=0.10), same direction; §9.13 |
| greenfield_vs_fix × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.0063 | 0.12 | **Newly significant this revision** — `greenfield`-coded climbs Europe 12.7% → APAC 17.0% → NYC 33.3%; not part of this table at the prior snapshot; §9.13, n=497 |
| work_arrangement × data_team_maturity (stated subset) | χ² | <0.0001 | 0.20 | **Still significant at n=549** (was p<0.0001, V=0.21 at n=527) — same direction as every prior snapshot (mature teams skew hybrid) (Finding H) |
| work_arrangement × autonomy_level (stated subset) | χ² | 0.070 | 0.11 | **No longer significant at n=549** (was p=0.044, V=0.12 at n=527) — same broad shape (mixed-autonomy most hybrid-concentrated, strategic most polarised), but the test itself now falls short of p<0.05 (Finding H) |
| work_arrangement × everything else (tool stack, seniority, rigour, domain risk) | χ² | >0.20 | ≤0.13 | Null — unrelated to arrangement |
| loss_aversion_framing × domain_risk | χ² | <0.0001 | 0.40 | 73% of high-loss-aversion JDs are high-domain-risk (equivalently: 57% of high-domain-risk roles carry high loss-aversion framing) (Finding I) |
| testing_framing × loss_aversion_framing | χ² | <0.0001 | 0.35 | Quality-ownership and fear-register track each other closely (Finding I) |
| loss_aversion_framing × velocity_vs_rigour | χ² | <0.0001 | 0.38 | Cleaner than domain_risk's own link to rigour — 97% of high-loss-aversion JDs are rigour-framed (Finding I) |
| testing_framing × has_dbt | χ² | <0.0001 | 0.32 | dbt JDs 74% likely to frame testing as owned responsibility vs. 36% without dbt (Finding I) |
| testing_framing × jd_authorship | χ² | <0.0001 | 0.23 | Hiring-manager JDs skew toward `responsibility`/`tool_listed`, recruiter JDs toward `absent` (Finding I) |
| ai_role × autonomy_level | χ² | <0.0001 | 0.20 | Unexpected direction, stable: `ai_user` and `ai_enabler` roles (46–49%) are markedly more strategic-leaning than `none` (23%) (Finding I) |
| ai_role × greenfield_vs_fix | χ² | <0.0001 | 0.17 | `ai_enabler`/`ai_user` roles carry meaningfully more greenfield work than `none` roles (Finding I) |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language narrows once fully coded, but stays real

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. **Coded on the full analytical cohort (n=549)** — a bug in `scripts/write_jd.py` had silently dropped this field (and `testing_framing`, `loss_aversion_framing`) from JSON output for a long stretch of the corpus even when correctly classified; the backlog was fully re-coded against the JD archive text and the codebook (§9.3).

| ai_role | n | % (n=549) |
|---------|---|---|
| none | 339 | 62% |
| ai_enabler | 123 | 22% |
| ai_user | 87 | 16% |

This is Prediction 2 from §4.0. **62% of JDs expect no AI skill from the candidate**, unchanged from 62% at n=527, against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. The gap between claimed personal-workflow adoption and formal hiring criteria has held steady. This batch's own `ai_role` mix leaned notably toward `ai_enabler` — MoMo, NetApp, Eden Scott, Maya, and ITE Singapore all named AI-consuming infrastructure explicitly (§3, §9.17) — without moving the corpus-wide percentages by more than a point. χ² for `ai_role` × `stakeholder_orientation` (n=549) remains non-significant (p=0.136, V=0.11; §4.0) — the `ai_enabler` cohort still leans toward `internal_data` and `mixed` stakeholder orientation, and `ai_user` leans similarly, and the association's weakness is stable rather than trending toward zero.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption. `ai_user` roles → demonstrate fluency with AI coding tools directly (Copilot, Claude Code, Cursor) as a nontrivial minority expectation. `none` (still the majority at 62%) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

`ai_role` continues to track `autonomy_level` (χ²=43.53, p<0.0001, V=0.20) and `greenfield_vs_fix` (χ²=30.64, p<0.0001, V=0.17) at n=549 — see Finding I (§4.9) for the counter-intuitive direction (`ai_user` and `ai_enabler` roles skew *more* strategic and *more* greenfield, not less).

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. **Coded on the full analytical cohort (n=549)** — see §9.3 for the write-pipeline bug that delayed this.

| testing_framing | n | % (n=549) |
|-----------------|---|---|
| responsibility | 346 | 63% |
| absent | 122 | 22% |
| tool_listed | 81 | 15% |

**63% of JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language, unchanged from 63% at n=527. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former. `testing_framing × velocity_vs_rigour` is significant (χ²=67.00, p<0.0001, V=0.25, n=549): `responsibility`-coded JDs are 80% rigour-framed vs. 45% for `absent`-coded JDs — testing ownership and rigour framing move together but are not the same signal, since a substantial share of the cohort is rigour-framed with no testing-ownership language at all.

The 22% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

`testing_framing`'s strongest tool-stack link (`has_dbt`, χ²=55.10, p<0.0001, V=0.32) and its link to `jd_authorship` (χ²=57.58, p<0.0001, V=0.23) and `loss_aversion_framing` (χ²=138.31, p<0.0001, V=0.35) all hold stable at n=549 — see Finding I (§4.9) for detail. APAC roles run somewhat above the corpus average on `responsibility` framing, consistent with prior snapshots; §9.5.

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. **Coded on the full analytical cohort (n=549)** — see §9.3.

| loss_aversion_framing | n | % (n=549) |
|-----------------------|---|---|
| moderate | 321 | 58% |
| none | 115 | 21% |
| high | 113 | 21% |

Roughly four in five JDs carry some fear signal, but it's still predominantly operational (58%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing ticks up to 21%, essentially unchanged from 20% at n=527. `loss_aversion_framing × domain_risk` is the strongest relationship among these three dimensions (χ²=174.95, p<0.0001, V=0.40, n=549, essentially unchanged from n=527): of JDs with `high` loss-aversion framing, 73% are `high`-domain-risk, vs. 8% of `moderate`-risk and roughly 0% of `low`-risk roles carrying `high` framing — the fear register tracks real domain stakes closely, which is reassuring for the codebook's construct validity on this dimension. `high` loss-aversion framing remains concentrated in finance-adjacent and regulated-sector roles; APAC's own `high` rate now runs slightly above the corpus average (23% vs. 20%), a small reversal from prior snapshots where it ran below, worth watching but not yet a pattern (§9.5).

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

### 4.13 What the responsibility text itself predicts — a second, independent classification pass

Everything above classifies each JD as a whole against the ten Layer B dimensions. A separate pipeline (`analysis/responsibility_taxonomy.py`) takes a different cut of the same corpus: it parses just the responsibilities section of each JD (markdown headings, plain-text scrapes, condensed paragraph summaries, or — for JDs with no cleanly-parseable structure — an LLM-interpreted fallback, see `responsibility_bullets_llm.json`) into individual bullets, then keyword-classifies each bullet against a fixed 16-theme taxonomy (Data Modeling & Transformation, Stakeholder Collaboration, Mentorship & Leadership, AI & Agentic Workflows, and so on — full definitions and the keyword pattern behind each theme are in `analysis/responsibility_taxonomy.md`). 537 of the 609 total JDs have an archived text file and 484 of those, all in the analytical cohort, have a theme reading, extracting 3,778 bullets (72 JDs have no extractable responsibilities at all — thin listing stubs with zero role-content, verified by direct read, not assumed). Because each theme is a binary per-JD indicator, it can be crossed against any Layer B dimension as an ordinary 2×k contingency table — the question this section asks is which *specific responsibilities* go with which *behavioural traits*, not just which traits co-occur with each other (§4.9).

The most prevalent themes are Stakeholder Collaboration & Requirements (78% of parsed JDs), Data Modeling & Transformation (77%), BI & Reporting/Dashboards (69%), Data Quality & Testing (68%), and Governance & Documentation (60%). AI & Agentic Workflows sits at 31% — the sixteenth theme, added after an earlier corpus audit found the original 15-theme taxonomy had no bucket for AI-referencing responsibility bullets despite over a third of JDs containing them (see `project_responsibility_taxonomy_ai_gap` in the maintenance history); it now tracks closely with the Layer B `ai_role` dimension by construction (§ construct-overlap below).

| Theme | % of parsed JDs | Bullets |
|---|---|---|
| Stakeholder Collaboration & Requirements | 77.7% | 783 |
| Data Modeling & Transformation | 77.1% | 920 |
| BI & Reporting/Dashboards | 68.7% | 780 |
| Data Quality & Testing | 67.6% | 619 |
| Governance & Documentation | 60.0% | 503 |
| Pipeline Engineering & Orchestration | 58.7% | 468 |
| Data Infrastructure & Warehouse Ops | 52.3% | 447 |
| Business Analysis & Insight Generation | 51.4% | 490 |
| Architecture & Platform Strategy | 48.4% | 398 |
| Performance & Cost Optimization | 46.9% | 373 |
| Self-Service Enablement & Data Literacy | 34.5% | 239 |
| Data Ownership (end-to-end) | 32.8% | 230 |
| AI & Agentic Workflows | 30.7% | 239 |
| Mentorship & Leadership | 13.0% | 81 |
| Security, Privacy & Risk | 12.8% | 84 |
| Vendor & Tooling Evaluation | 3.4% | 20 |

**The auto-correlation risk, and how it's handled.** Several theme/dimension pairs are excluded from the findings below because they're circular, not because they're weak — the theme's regex keywords and the dimension's own LLM coding rubric detect the same textual signal. The single strongest pairing in the entire sweep, "AI & Agentic Workflows" vs. `ai_role` (V=0.66), is excluded on exactly this basis, followed closely by "Data Quality & Testing" vs. `testing_framing` (V=0.44): `testing_framing` is coded by looking for testing/quality language in the JD, so crossing it against a theme built from testing/quality keywords mostly measures whether two classification methods agree with each other. The same logic excludes "Security, Privacy & Risk" vs. `loss_aversion_framing` (V=0.32) and `domain_risk` (V=0.17), "Data Ownership" vs. `autonomy_level` (V=0.28, whose own rubric lists "own" as a strategic-verb signal), "Data Modeling & Transformation" vs. `has_dbt` (V=0.27), "Pipeline Engineering & Orchestration" vs. `has_airflow` (V=0.15), and "BI & Reporting/Dashboards" vs. tool flags whose name is literally embedded in that theme's regex (`has_power_bi` V=0.20, `has_looker` V=0.12, `has_tableau` V=0.09). See `OVERLAP_PAIRS` in `responsibility_taxonomy.py` for the full list.

**Two relationships survive that screen at p<0.01 with no keyword overlap and a reasonable effect size, and are reported here — with different levels of confidence:**

1. **Mentorship & Leadership × `autonomy_level` (χ²=26.29, p<0.0001, V=0.23, n=484) — the one relationship in this section that received an actual confounder check, and passed it.** Mentorship/leadership language climbs from 5% of execution-coded JDs to 11% mixed to 25% strategic. Because `autonomy_level` and seniority title are themselves correlated (§4.5), this could just be seniority in disguise — so it was re-tested within seniority strata specifically: **within "Mid" titles alone**, the gradient is 2%→7%→10% (execution→mixed→strategic, noisy at these cell sizes); **within "Senior" titles alone**, it's 12%→14%→23%. The gradient holds within each stratum, not just across the whole corpus — this is the one relationship in this section that survives the stratification check cleanly. Essentially unchanged from the n=464 reading (χ²=23.61, V=0.23).
2. **Data Infrastructure & Warehouse Ops × `jd_authorship` (χ²=22.1, p<0.0001, V=0.21, n=484) — clean-screen only, not independently confounder-checked.** Hiring-manager-authored JDs name warehouse/infrastructure responsibilities at 56% vs. 13% for recruiter-authored (mixed-authorship JDs sit at 45%) — a considerably wider gap than authorship's already-known link to whether dbt is merely named (§4.6, §4.9 Finding G). Directionally consistent with the revealed-preference logic elsewhere in this document (naming a platform's actual cost/governance responsibilities requires knowing the team's real infrastructure problem, not just its tool list), but this specific pairing has not been re-tested against a plausible confounder the way (1) was. Essentially unchanged from the n=464 reading (χ²=20.39, V=0.21).

**Self-Service Enablement & Data Literacy × `data_team_maturity` still does not clear the p<0.01 screen and is not featured**, consistent with its status at every recent snapshot since it first fell short.

**A relationship that looked real and didn't survive scrutiny — kept as a worked example, not dropped:** `Architecture & Platform Strategy × work_arrangement` at one point cleared the p<0.01 screen and on its own read as a headline — "remote roles carry less architectural scope." A taxonomy audit corrected several loose keywords in this theme, and the pairing **still does not clear the screen at current corpus size** (χ²=3.79, p=0.29, V=0.09, n=484; overall: hybrid 52%, remote 44%, onsite 41%, not_stated 43%) — it was never a stratification failure story to begin with; it was a keyword-precision artifact of the looser pre-audit pattern, and it remains a null after the fix. The stratification breakdown is kept below as a worked example of *why* a stratification check matters, but the more direct lesson from this specific relationship turned out to be about pattern precision, not confounding:

- Within `data_team_maturity=early`: hybrid 39% (n=33); remote 27% (n=11); onsite 36% (n=14); not_stated 52% (n=21)
- Within `data_team_maturity=mid`: hybrid 51% (n=128); remote 47% (n=32); onsite 42% (n=12); not_stated 38% (n=103)
- Within `data_team_maturity=mature`: hybrid 60% (n=65); remote 60% (n=5); onsite 50% (n=6); not_stated 50% (n=54)

Split by maturity tier, `remote` is not consistently the lowest group — `not_stated` is the consistently-lowest group in every tier instead, and several strata have single-digit cell counts for `remote`/`onsite`, which makes any reading of this pairing mostly noise rather than signal, unstratified or not.

**Why this pairing was checked and the others weren't, and what that means for reading them:** the architecture/work-arrangement check was run first, specifically because "remote work correlates with less architectural ownership" was the kind of clean, quotable claim that warranted scrutiny before being written up — and it failed, twice over (once on stratification, then again on keyword precision once the taxonomy was audited). That's informative about the corpus and the method generally: a p<0.01, no-keyword-overlap screen alone is not sufficient here, and it isn't even stable across a keyword-pattern correction that didn't touch the underlying JD text at all — only the regex used to read it. Relationship (2) above has only cleared that screen, not a stratification check; relationship (1) is the only one confounder-checked. Treat (1) as confounder-checked, (2) as "survived the screen, unstratified," and treat any theme-based finding in this section as provisional against future taxonomy-precision fixes, not just against future data.

**How this section could be wrong, more broadly:**

- **Multiple comparisons.** The full sweep tests all 16 themes against every coded dimension (304 pairs) with no Bonferroni or FDR correction. At p<0.01 across that many tests, some number of the "clean" pairs are expected false positives by chance alone — this is exactly the failure mode the debunked architecture pairing demonstrates directly, not hypothetically.
- **Post-hoc selection.** The featured relationships were chosen *after* seeing effect sizes, then (in one case) checked — not pre-registered, unlike §4.0's two predictions. This is the "garden of forking paths" pattern this document otherwise tries to avoid (§4.0); it's disclosed rather than hidden here because the theme classification itself is a newer, more exploratory layer on top of the pre-registered Layer B analysis.
- **Two independent classification methods, two independent error rates.** Every relationship compounds the regex theme-classifier's error rate with whatever error rate the paired Layer B dimension's LLM coding carries — `jd_authorship` specifically has the lowest self-consistency of any dimension in the codebook (0.58, §3), so relationship (2) above should be read with that additional caveat.
- **Cross-sectional text, not causal evidence.** Every relationship here is a same-JD language co-occurrence, not a causal claim — "mentorship language correlates with strategic-autonomy language" says nothing about which drives which, or whether both are downstream of an uncoded third factor (company size, funding stage, sector) this corpus can't check.
- **The stratification checks are not exhaustive.** Surviving one plausible confounder (seniority, for relationship 1) doesn't rule out others not tested. Company size and sector are not coded dimensions in this corpus.
- **Regex keyword precision is a demonstrated source of drift in its own right, distinct from sample-size drift.** The Architecture/work_arrangement finding above moved once already because the *classifier* was corrected, not because new JDs were added — a reminder that every number in this section is a function of `responsibility_taxonomy.py`'s current keyword patterns as much as of the underlying text, and is expected to keep moving as that classifier is refined, independent of corpus growth.

Full theme definitions, all 304 tested pairs, the complete construct-overlap table, and this same write-up regenerated fresh on every corpus update live in `analysis/responsibility_taxonomy.md` (`python3 analysis/responsibility_taxonomy.py` to reproduce). This section was reconciled against that file's current regeneration, run against the 2026-08-25 corpus (n=609 total / 549 analytical cohort, §9.17) — both featured relationships and the debunked example held essentially flat through this expansion.

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=549 analytical cohort) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 68% rigour-oriented; testing framing coded on full cohort (n=549, 63% responsibility framing) | Confirmed at the orientation level and at the testing-accountability level; rigour share holds flat against n=527 (68%→68%, §4.1) |
| 72% use AI in coding workflows daily | 62% of JDs (n=549, full coverage) expect no AI skill; 16% name AI coding tools directly (`ai_user`) | Gap persists, essentially unchanged from the n=527 reading (62%/16%) — Prediction 2 (§4.0), first half still holds, second half (structural concentration) remains non-significant |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability (63% of n=549 full cohort); AI hiring signal 38% (`ai_enabler`+`ai_user`) | The JD evidence still suggests governance accountability further institutionalised than AI hiring criteria, and the ratio has held stable |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 21% of n=549 full cohort; 58% report operational reliability concerns | Not confirmed — dominant fear is still operational reliability, not AI-trust hallucination; both figures essentially unchanged from the n=527 reading |
| Rigour framing tracks risk/stakes | χ²=25.02, p<0.0001, V=0.16 (§4.0/§4.2, Prediction 1) — stable at n=549 AE/BI+team_lead | Confirmed for `domain_risk`; the `has_dbt` comparator that previously ran alongside it (§4.0) also remains significant at a comparable effect size — rigour tracks risk somewhat more strongly than tool adoption, but the two are no longer cleanly separated by significance |
| dbt is the field standard | 63% of AE/BI JDs mention dbt (n=531) | Real but not universal; roughly one in three AE/BI roles run dbt-free stacks; stable across fifteen consecutive snapshots, including in the APAC subset specifically (§9.5) |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (63% of coded roles) than AI hiring criteria (38% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

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

**Current state: all three dimensions are coded on the full analytical cohort (n=549, including all JDs added since the fix, surviving both 2026-07-25 dedup passes, every subsequent expansion through 2026-08-25, and the 2026-08-22 audit's re-classifications, §9.9–§9.17)**, with consistent `evidence.{dim}` (quote) + `evidence.{dim}_explanation` (reasoning) entries on every record, and no legacy-format duplication. Findings in §4.10–4.12 and Prediction 2 (§4.0) are stated against the full current n, not a small coded subset — this changed several conclusions materially when the fix first landed at n=272 (§4.0, §4.10), and the corpus has grown, been deduplicated twice, grown again multiple times, and been audited and corrected since without disturbing that fix.

### 9.4 What n=549 supports

At n=549, the margin of error on a single proportion is approximately ±3.9pp at 95% confidence (Wilson interval, evaluated at the §4.1 rigour proportion — very slightly tighter in decimal terms than the n=527 reading, 3.88pp vs. 3.97pp, not enough to change how any percentage in this document should be read) — the 68% rigour finding (§4.1) is defensible as "likely between 64% and 72%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above. The corpus additions from the n=123 baseline through n=549 provided meaningful confidence-interval tightening and, along the way, flipped several relationships across the significance threshold in both directions (§4.0, §4.9 document each one as it happened). The 2026-08-25 expansion (§9.17) grew the analytical cohort from 527 to 549 — a straightforward addition of ~24 new roles rather than an audit-driven reconciliation this time; every headline distribution held within a point or two of the n=527 reading across this batch: rigour held at 68% (§4.1), `has_dbt` held at 63% (§4.8), and `ai_role=none` moved from 62% to 62% (unchanged to the point). The relationships that tested null at n=527 — `domain_risk × greenfield_vs_fix`, `ai_role × stakeholder_orientation` — remain null at n=549; `geo_region (APAC) × jd_authorship`, which read short of p<0.05 at n=527 (p=0.092), reads short again this revision (p=0.074, V=0.10, §4.9 Finding G) — still directionally consistent, still unconfirmed. `stakeholder_orientation × autonomy_level`, significant at n=527 (p=0.035, V=0.13), has crossed back to a tested null this revision (p=0.057, V=0.12, §4.9 Finding E) — the third time this specific relationship has flipped across the p<0.05 line in either direction across recent snapshots (null at n=502, significant at n=527, null again at n=549), a reminder that this corpus size cannot yet pin this one down reliably from one update to the next. `velocity_vs_rigour × has_dbt`, which first crossed p<0.05 at n=427, remains significant at n=549 at essentially the same margin as the last several snapshots — a small effect that has now held across five consecutive corpus snapshots. Pattern stability continues to hold for the strongest relationships (maturity × mission, domain_risk × stakeholder, domain_risk × rigour) across every snapshot from n=123 to n=549, including through the prior audit's re-classifications and this batch's straightforward addition.

### 9.5 What the geographic concentration means, and what the APAC stratum shows

This remains a primarily European, Berlin-heavy dataset. The APAC stratum, built by a deliberate scraping pass in late July and reinforced by subsequent batches (§9.8, §9.9, §9.14, §9.17), holds at **88 roles (16% of the analytical cohort)** — up from 79 at the last snapshot, and remains the largest single geographic bucket in the corpus, ahead of UK/remote — still large enough to run a direct APAC-vs-rest-of-corpus comparison rather than only disclaiming the gap, as earlier snapshots of this document had to.

**Most substantive dimensions still track closely; the picture on which comparisons are formally significant is essentially unchanged this revision.** Domain risk (60% moderate vs. 69%), data team maturity (49% mid vs. 58%), dbt prevalence (58% vs. 64%), and `testing_framing` mix (64% responsibility vs. 63%) all sit within a normal range of the non-APAC corpus. Rigour orientation runs essentially identical to the rest of the corpus this revision (68% vs. 68%). `loss_aversion_framing = high` also sits close to the rest of the corpus (23% vs. 20%). None of the risk/maturity/dbt/testing/rigour/loss-aversion comparisons are statistically distinguishable at this n.

**One dimension reads short of significance again; one remains significant:**

| Dimension | APAC (n=88) | Rest of corpus (n=461) | Test |
|---|---|---|---|
| `jd_authorship = hiring_manager` | 86% | 75% | χ²=5.22, p=0.074, V=0.10 |
| `work_arrangement` (full 4-category: hybrid/not_stated/onsite/remote) | 31% / 53% / 13% / 3% | 52% / 33% / 6% / 10% | χ²=24.49, p<0.0001, V=0.21 |

The `jd_authorship` gap remains short of p<0.05 this revision (p=0.074, essentially the same as the n=527 reading of p=0.092) — the point estimate is unchanged (86% vs. 75%) and the direction is unchanged, and the effect size (V=0.10) still sits right at the floor used elsewhere on this page. `jd_authorship`'s LLM self-consistency is the lowest of any dimension in the codebook (0.58, §3), so part of this gap could be a codebook-boundary artefact interacting with how APAC postings happen to be formatted (many sourced via LinkedIn/company career pages with detailed technical bullet lists, which the heuristic may read as "hiring-manager-authored" regardless of who actually wrote them) rather than a real difference in who authors these JDs — and the test has crossed the conventional threshold in both directions across earlier snapshots, which is itself a reason for caution about leaning on it either way. The work-arrangement picture continues to differ in kind, not just degree, and is now more clearly significant than at the last snapshot (V=0.21, up from V=0.19): APAC's not-stated rate (53% vs. 33%) is the same direction as every prior snapshot, and APAC continues to carry a distinctly higher onsite share (27% vs. 8%) among stated arrangements, with the hybrid gap holding at roughly the same margin as the last snapshot (66% vs. 77%). Among APAC roles that do state an arrangement, hybrid still dominates numerically but the onsite share stands out against the rest of the corpus.

**What this does and doesn't license:** the JD data cannot distinguish "APAC employers write JDs differently" from "this specific sample happens to have been sourced through channels that produce more hiring-manager-style, or more onsite, postings" — the collection method for this stratum (several distinct scraping passes, not the same multi-month opportunistic accumulation as the European portion) is a real confound. Treat most of the substantive-dimension comparisons (risk, maturity, dbt, testing framing, and now authorship) as reasonably solid — a genuine absence of large, confirmable difference across several independently-coded dimensions. Treat the work-arrangement finding as real at this n but worth re-checking at the next update.

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

### 9.9 2026-07-31 through 2026-08-05 expansions (three batches, documented together)

Three further batches were added to the corpus without an accompanying report update at the time — this section covers all three together, reconciling the report to the corpus as it now stands rather than reconstructing what each individual batch changed in isolation.

**2026-07-31:** Eleven new JDs (9 AE/BI, 1 `team_lead`, 1 `data_engineering` excluded from the cohort) — ALTEN, Appfire (×2), Asana, Dentsply Sirona, eXalt, ITT Inc. (×2), Netflix, Rippling, Vinted. 10 in the analytical cohort. `domain_risk`: moderate 8, low 1, high 1. `data_team_maturity`: mature 4, mid 3, early 3 — notably more mature-skewed than the standing corpus average. `geo_region`: other_europe 4, France 2, Benelux 2, global_remote 1, Ireland 1 — no APAC in this batch. `seniority`: senior 5, mid 3, junior 1, lead 1.

**2026-08-01:** Eleven new JDs (7 AE/BI, 4 `data_engineering` excluded from the cohort) — 1KOMMA5°, Accenture (×2), Amazon, Google, instinctools, Northius, Siemens Energy, Technology & Strategy, The One Enterprise, Toss. 7 in the analytical cohort — the smallest cohort contribution of any dated batch to date, since more than a third of this batch classified as `data_engineering` rather than AE/BI. `domain_risk`: moderate 6, high 1. `data_team_maturity`: mid 5, mature 1, early 1. `geo_region`: Iberia 2, Berlin 1, Benelux 1, other_europe 1, dach_other 1, apac 1. `seniority`: senior 3, mid 3, junior 1.

**2026-08-05:** Fifteen new JDs, all AE/BI (no `team_lead`/`data_engineering`/`other` this batch) — Grasshopper, Canva, Bulla Dairy Foods, Love Bonito, Mimecast, team.blue, IPRoyal, RIXT.IT, Kilo, Clovr, CoolPeople Technology, WPP Media, Keepler Data Tech, Turntwo, Synpulse. All 15 in the analytical cohort. `domain_risk`: moderate 11, high 4 — no low-risk roles this batch. `data_team_maturity`: mid 11, mature 3, early 1. `geo_region`: apac 5, benelux 4, global_remote 2, dach_other 1, iberia 1, other_europe 1, other 1 — the largest single-batch APAC contribution since §9.8. `seniority`: mid 8, senior 7. This batch also included the first Dutch- and Spanish-original archived JD text preserved verbatim rather than translated (Clovr, WPP Media, Turntwo in Dutch; Keepler Data Tech in Spanish) — see `.claude/skills/classify-jd/SKILL.md`'s language-mismatch handling.

**Combined effect across the three batches:** corpus grew from 373→410 total (37 net new records), 340→372 analytical cohort (32 net new cohort records — fewer than the sum of the three batches' totals because the 2026-08-01 batch skewed unusually `data_engineering`-heavy). Across the three batches, 6 of 32 new cohort roles are APAC, pushing the APAC stratum from 43 to 49 roles (§3, §9.5) while it remains the largest single geographic bucket alongside UK/remote. Headline distributions were essentially unmoved by this combined addition: `velocity_vs_rigour` rigour holds at 71% (unchanged from n=340), `domain_risk` moderate holds near 69% (68% at n=340), `has_dbt` (AE/BI) holds at 65% (unchanged), and `ai_role = none` holds at 67% (unchanged) — see §4.1–§4.12 for the updated per-dimension figures. The three long-standing nulls (`velocity_vs_rigour × has_dbt`, `domain_risk × greenfield_vs_fix`, `stakeholder_orientation × autonomy_level`) all remain null at n=372. `geo_region (APAC) × jd_authorship` and `data_team_maturity × work_arrangement` both remain significant at p<0.05, consistent in direction with §9.8. One previously-featured relationship in the responsibility-taxonomy pass (§4.13), `Self-Service Enablement & Data Literacy × data_team_maturity`, no longer clears the p<0.01 screen at this n (χ²=4.46, p=0.11, V=0.11) and has been dropped from the featured list — see §4.13 for the full account. All classified using the same Layer B codebook; no statistical re-weighting applied.

### 9.10 2026-08-06 expansion

Seventeen new JDs, all AE/BI (no `team_lead`/`data_engineering`/`other` this batch) — Visser & Van Baars, N26, NOBA Bank Group, Rabot Energy, Optimize matter, Metyis, Capital.com, PortoBay Hotéis e Resorts, Oxylabs.io, Hetzner Online, Ebury, Quest for Knowledge, Coins.ph, Super Payments, BCB Group, On the Beach, Harnham. One URL from this batch (Fortnox, `fortnoxab.teamtailor.com/jobs/7956800-analytics-engineer`) was a confirmed duplicate of an existing record (`2026-07-16_fortnox_analytics-engineer`) and was skipped, not double-counted. All 17 in the analytical cohort. `domain_risk`: moderate 11, high 5, low 1 — three of the five high-risk roles are regulated payments/crypto (Ebury, Coins.ph, Super Payments), plus BCB Group (also crypto/payments) and NOBA Bank Group. `data_team_maturity`: mid 13, mature 4, no early-stage roles this batch. `seniority`: mid 12, senior 5. `geo_region`: uk_remote 4, iberia 4, benelux 2, one each of other_europe, apac, dach_other, nordics, france, baltics, berlin. `ai_role`: none 9, ai_enabler 5, ai_user 3 — a notably higher ai_enabler share than the corpus baseline (Capital.com, Ebury, Super Payments, Quest for Knowledge, and On the Beach all build semantic layers or datasets explicitly framed for AI/agent consumption; BCB Group and Oxylabs.io are `ai_user`, both naming Cursor/GitHub Copilot/Claude Code directly in the tech stack). `has_dbt` (AE/BI): 12/17. This batch included four non-English archives preserved verbatim per the language-mismatch handling in `.claude/skills/classify-jd/SKILL.md`: Dutch (Visser & Van Baars, and — company-culture text only — Optimize matter is French throughout), French (Optimize matter), Portuguese (PortoBay), and German (Hetzner Online). Real salary data was extracted for one record from explicit JD wording (Oxylabs.io: €3,500–6,000/month) — all other salary fields left `null` per the extraction-only rule, including one ceiling-only figure (Harnham: "up to £65,000") that was correctly not backfilled into a fabricated floor. Six of the seventeen JDs (Harnham, Hetzner, On the Beach, Optimize matter, PortoBay, Visser & Van Baars) were not parseable by the regex responsibility-bullet extractor — despite two of them being English-language — and were added to `responsibility_bullets_llm.json` as hand-extracted (English-translated where applicable) bullet lists so they still contribute to the §4.13 theme classification. Corpus reached 427 total records, 389 in analytical cohort. Headline distributions held essentially flat: `velocity_vs_rigour` rigour 71.0% (unchanged), `domain_risk` moderate 68.4% (68.4%→68.4%, no shift), `has_dbt` (AE/BI) 65.5% (unchanged), `ai_role = none` 66.1% (down from ~67%, within noise given n=17). All classified using the same Layer B codebook; no statistical re-weighting applied.

### 9.13 A three-way Europe/APAC/NYC-metro comparison, and one large effect §9.5 missed

§9.5 tests APAC against "the rest of the corpus" — a framing that was reasonable when APAC was the only non-European stratum large enough to test, but which folds the `nyc_metro` cluster into the European comparison group by default. Once NYC is split out as its own arm, three regions are jointly comparable: **Europe (n=370), APAC (n=88), NYC metro (n=39)** — 497 of the 549-record analytical cohort with a usable macro-region (`global_remote` and `other` excluded as incoherent geographies). A chi-square sweep of all thirteen categorical Layer B dimensions against this 3-way split found seven that clear p<0.05: `language_gate_type` (p<0.0001, **V=0.23 — the largest effect size of any relationship tested against region in this document**, larger than either of §9.5's headline findings), `work_arrangement` (p<0.0001, V=0.19), `velocity_vs_rigour` (p=0.0001, V=0.16), `greenfield_vs_fix` (p=0.0063, V=0.12 — newly significant this revision; not previously reported in this section's sweep), `data_team_maturity` (p=0.0127, V=0.11), `jd_authorship` (p=0.024, V=0.11), and `stakeholder_orientation` (p=0.039, V=0.13). `domain_risk` (p=0.075, V=0.09) has moved back into a tested null at this n, having briefly cleared p<0.05 at the prior snapshot — stated plainly, not as confirmation of an earlier read either way, just what the current sweep shows. `autonomy_level`, `ai_role`, `testing_framing`, and `loss_aversion_framing` continue to show no significant regional difference — worth stating positively, not just as an absence: a job seeker's read on genuine ownership and AI expectations should generalise across these three regions in this dataset; their read on rigour-language, project framing, stakeholder mix, language gates, and salary disclosure should not.

**The confound check behind the findings below has flipped this revision.** `domain_risk` composition no longer clears p<0.05 across the three regions (χ²=8.50, p=0.075, V=0.09): Europe 24.1% high, APAC 35.2%, NYC 38.5% — still a numeric step-up, but the three-way test itself is now a tested null, not a significant one. This actually *simplifies* the read on `velocity_vs_rigour` and `stakeholder_orientation` below relative to the prior snapshot's caveat: since risk composition is no longer independently distinguishable by region at this n, there is less basis this revision for treating those two gaps as confounded by a risk gradient specifically — though domain_risk's point estimate is still moving in the same direction as before, so this should be read as "the confound is no longer statistically demonstrable," not "there is definitely no risk-composition effect at all." The NYC cluster itself remains not one loud employer or one ATS's house style: 39 roles span 36 distinct companies (only Current, DoorDash, and New York Life repeat, each twice), and its ATS mix (Greenhouse 15, LinkedIn 8, Ashby 7, unknown 6, Workday 3) doesn't concentrate the way a single-source artifact would. n=39 is still thin, so NYC percentages here should be read as directional, not precise — but they are not obviously an artifact of collection method.

**`language_gate_type` is the standout finding this section adds, and remains so.** Hard language requirements (fluency/C1-C2 gates): Europe 30.8%, APAC 8.0%, NYC 0%. Adding soft gates, Europe reaches 40.0% versus APAC's 9.1% and NYC's 0%. This is almost certainly a genuine market feature — client-facing analytics roles across DACH/Benelux/France routinely gate on the local language, with no real equivalent in an English-default APAC or US hiring market — and it is the single most actionable "know before you apply" fact a non-European candidate in this corpus could act on. This dimension isn't surfaced in the seeker-mode hygiene card in `index.html` either (that card reports a single blended `hardLangPct` across all regions, currently ~useless for a candidate targeting a specific market — see the cross-reference note below).

**`velocity_vs_rigour` still drops step-wise Europe → APAC → NYC.** `rigour`-coded: Europe 72.2%, APAC 68.2%, NYC 46.2%. Reading the NYC records by hand: the velocity-coded roles still cluster in genuinely earlier-stage consumer fintech/proptech (Copilot Money, CurbWaste, Spot & Tango, Profound, US Mobile), while the rigour-coded ones remain concentrated in regulated-finance and high-scrutiny names (Current ×2, Gemini, New York Life ×2, Neuberger Berman) — so this isn't simply "NYC roles are less rigorous," it's that NYC JDs are more willing to name velocity plainly when that's the honest framing for an early-stage company, whereas the European corpus defaults to rigour-coded vocabulary even for comparable-risk, non-regulated work. With the domain_risk confound no longer independently significant at this n (above), this step-down reads somewhat more cleanly as a framing/dialect effect than the prior snapshot's caveat allowed — though not so cleanly that the risk-composition explanation should be dismissed outright, since the underlying point estimates still move in the same direction. Practically: a `rigour` classification from a European JD is still weaker evidence of genuinely elevated stakes than the same classification from a US JD. (A calibration note on this dialect effect already lives in `.claude/skills/classify-jd/SKILL.md`'s `velocity_vs_rigour` section.)

**`jd_authorship` and `work_arrangement` continue to differ by region once NYC is added as a third point of comparison; `jd_authorship`'s three-way test is more comfortably significant than at the prior snapshot.** `hiring_manager`-authored: Europe 73.0%, APAC 86.4%, NYC 89.7% (χ²=11.28, p=0.024, V=0.11 — down in p-value from the prior snapshot's p=0.046, i.e. more clearly significant this revision, though §4.9/§9.5's two-way APAC-vs-rest test for the same dimension still does not clear p<0.05 on its own). Both the APAC and NYC batches continue to skew toward either large established single-market employers or well-funded technically sophisticated startups — segments where the req owner is also the JD author — while the European sample carries a longer mid-market/agency tail. Treat this as a company-size/maturity effect that correlates with region in this corpus's specific sampling, not a claim that APAC or NYC hiring managers inherently write better JDs. `work_arrangement`: APAC is both the most silent (53.4% `not_stated` vs. Europe 32.7%, NYC 33.3%) and, where stated, the most onsite-leaning (12.5% onsite vs. Europe 4.6%); NYC now trails Europe somewhat on hybrid (46.2% vs. 57.0%) and shows zero fully-remote share alongside the highest onsite share of the three regions (20.5%), worth flagging even at this n. The seeker-mode hygiene card's current blanket advice ("don't read silence as onsite by default, ask directly") is better calibrated for Europe than for APAC, where silence does correlate with a real onsite lean.

**`stakeholder_orientation`'s regional shift remains significant this revision.** `mixed` orientation still rises outside Europe (Europe 14.9% → APAC 26.1% → NYC 33.3%), with `internal_data`-primary framing falling correspondingly (53.2% → 45.5% → 28.2%), and the three-way test still clears p<0.05 (p=0.039, V=0.13) — a small effect. This may be a genuine structural difference in how the analytics function sits in APAC/NYC organisations, or it may partly be a classifier mechanical effect — `mixed` is the catch-all when a JD names two functions with genuinely equal weight, and the same larger/more-mature companies driving the authorship finding above may simply name more stakeholder groups by virtue of size, independent of any real orientation shift. Worth re-checking once NYC's n grows further.

**New this revision: `greenfield_vs_fix` clears significance for the first time in this sweep.** `greenfield`-coded: Europe 12.7%, APAC 17.0%, NYC 33.3% (χ²=14.34, p=0.0063, V=0.12); `fix_scale`-coded runs the other direction: Europe 31.1%, APAC 28.4%, NYC 12.8%. NYC stands out here specifically — a third of its roles are coded pure-greenfield versus roughly one in eight in Europe, consistent with the same earlier-stage-startup skew visible in the `velocity_vs_rigour` read above (several of the same companies — Copilot Money, CurbWaste, Profound — are building something new rather than scaling or fixing an existing stack). This dimension was not part of the sweep's reported findings at the prior snapshot; whether it was tested and fell short of p<0.05 then, or simply wasn't surfaced, is not reconstructable from the prior text, so this should be read as a new finding at the current n rather than a crossing.

**Salary disclosure: the sharpest single number in this section, and it should not be read as a market-culture finding.** Salary stated: Europe 21.4% (79/370), APAC 2.3% (2/88), NYC metro 82.1% (32/39). The NYC figure is very likely a **legal-regime effect**, not an employer-culture one — New York's pay transparency law requires a posted range, and the number reflects that law doing exactly what it was designed to do, not that NYC employers are more forthcoming by disposition. `index.html`'s current seeker hygiene card blends all regions into one `salaryPct` figure — that single blended number actively misleads in both directions: a US job seeker outside a pay-transparency jurisdiction would over-trust the disclosure norm, and an APAC job seeker (2.3%!) would be right to essentially never expect a stated range regardless of company quality.

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

**What was deliberately left alone.** Roughly 25 further records flagged during re-verification turned out to be genuinely stale — the posting had been removed, filled, or expired since collection — and were confirmed as such rather than reconstructed from a paraphrase or a memory of what the posting probably said. Per the skill's standing rule, a stale posting with an imperfect-but-real historical record is left untouched rather than "fixed" with fabricated current text; these ~25 records carry no changes from this audit. One further record (Fuku) was confirmed unverifiable — a client-rendered single-page app with no accessible extraction path, curl or otherwise — and was likewise left as-is rather than substituted with a WebFetch paraphrase, the same standard applied to the two unverifiable URLs in the 2026-08-13 batch (§3, §9.12).

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

**Three German-language JDs preserved verbatim per the standing language-mismatch rule** (`.claude/skills/classify-jd/SKILL.md`): Eraneos, Mercedes-Benz Bank, and KTM AG. Full source text kept unmodified in each archive; Layer B classification performed in English against the same codebook applied to every other record. Unlike this batch, none of the three were added to `responsibility_bullets_llm.json` — the English-regex responsibility-bullet extractor correctly returns zero bullets against German text, and no hand-extraction fallback was done for them, so all three sit among the 72 JDs in §4.13 with no theme reading. This was checked against precedent rather than assumed: the corpus's two pre-existing German-language records (Hetzner Online, §9.10; Hügli/Bell Food Group, §9.14) were also unparseable by the regex extractor, but both of those *were* hand-added to the LLM fallback file at the time, so they do carry theme readings. This run's three new German JDs are a stricter case of the same underlying exclusion, not a new or different gap — English-regex-based classification correctly does not fire on German text either way; whether a given non-English JD also gets a manual LLM-fallback bullet extraction is a separate, inconsistently-applied step, not a bug in the language-mismatch handling itself.

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
4. **The stakeholder × autonomy finding (§4.9 Finding E — a small effect that has moved across the significance threshold in both directions across several corpus snapshots, currently significant) gets a persona-specific moral regardless of its current test status:** for seekers, "don't infer autonomy from the audience label alone"; for managers, "the audience label doesn't lock in how your role reads — write the decision rights, don't let a template's assumptions write them for you."

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
