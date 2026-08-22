# Analytics Engineering Job Market, 2026 — JD Analysis

**Prepared:** June 2026; revised July 2026 against the full corpus, expanded July 13 2026 with 9 new roles, July 16 2026 with 12 new roles, July 17 2026 with 13 new roles, July 21 2026 with 21 further new roles, July 22–24 2026 with 55 further new roles including the corpus's first substantial APAC batch, deduplicated 2026-07-25 in two passes (36 records removed as re-scrapes, plus one further duplicate on a follow-up audit — see §3, §9.6), expanded again 2026-07-26–29 with 33 further new roles (28 in the analytical cohort), including Parfumado, Tiqets, Riot, Emagine, Licorne Society, Montblanc, Qred Bank, Hack A Boss, StackFuel, Cultura, ASOS, Zego, NatWest Group, Kaluza, Fremantle Dockers, Joon Solutions, and Alight (§9.7), expanded again 2026-07-30 with 15 further new roles (11 in the analytical cohort), a single-day, heavily-APAC batch including Blinq, Brand New Day, Eftsure, Emapta, Samsara Eco, Southern Cross, plus BeReal, Crystalloids, Harnham, Infinite Lambda, and Zego's second posting (§9.8), expanded again 2026-07-31 with 11 further new roles (10 in the analytical cohort) including ALTEN, Appfire, Asana, Dentsply Sirona, eXalt, ITT Inc., Netflix, Rippling, and Vinted, expanded again 2026-08-01 with 11 further new roles (7 in the analytical cohort) including 1KOMMA5°, Accenture, Amazon, Google, instinctools, Northius, Siemens Energy, Technology & Strategy, and The One Enterprise, expanded again 2026-08-05 with 15 further new roles (all 15 in the analytical cohort), a mixed-European/APAC batch including Grasshopper, Canva, Bulla Dairy Foods, Love Bonito, Mimecast, team.blue, IPRoyal, RIXT.IT, Kilo, Clovr, CoolPeople Technology, WPP Media, Keepler Data Tech, Turntwo, and Synpulse (§9.9 covers all three of these previously-undocumented batches together), expanded again 2026-08-06 with 17 further new roles (§9.10), expanded again 2026-08-11 with 20 further new roles (17 in the analytical cohort) including Google, J.Crew, Neuberger Berman, Wolt, and a Zynga/Socialpoint near-duplicate studio pair, drawn from a notably ATS-diverse batch (Workday, Ashby via a resolved company-site redirect, Teamtailor, BambooHR, Greenhouse) and including two non-English JDs preserved verbatim (Swedish, Dutch), expanded again 2026-08-13 with 19 further new roles (18 in the analytical cohort) skewed toward larger established employers and a new NYC-metro geographic cluster (§9.12), and expanded again 2026-08-18 with 17 further new roles (16 in the analytical cohort — 16 analytics_engineering_bi, 0 team_lead; 1 excluded as data_engineering: S&W Group), a batch with a strong European concentration (Belgium, Norway, Germany, Lithuania, France, and further UK postings alongside the standing APAC and NYC-metro strata), two non-English JDs preserved verbatim in their archives (Norwegian: Coop; German: Bell Food Group/Hügli) though classified in English per the standing language-mismatch rule, and a fintech/banking/healthcare/insurance-heavy tilt that concentrates `domain_risk` and `loss_aversion_framing` at the high end (Checkout.com, Qonto, UnitedHealth Group/Optum, Pluang, InterEx's PE-firm client) more than in most prior batches (§9.14), and audited and corrected 2026-08-22 — fixed salary fabrication, deleted 3 corrupted/fabricated records, re-extracted ~30 records that had paraphrased archives instead of verbatim text, confirmed ~25 records as genuinely stale postings left untouched; net corpus 586→585 (§9.15); all tables and test statistics reconciled to this current corpus.
**Dataset:** 527 analytics-engineering/BI/team-lead job descriptions from `data/` (April–August 2026; primarily European, Berlin-heavy, with UK, DACH, Nordics, a 79-role APAC stratum large enough to compare directly against the European majority, and a 36-role NYC-metro cluster; see §3, §9.5). 585 records total in the corpus including 46 data-engineering and 12 other roles excluded from the analytical cohort; see §3.
**Classification:** Layer B codebook applied by one analyst (manual) or by LLM majority vote (3 independent claude-haiku-4-5 runs per JD); full consistency study in `consistency_report.md`.
**Context source:** dbt Labs "[State of Analytics Engineering](https://www.getdbt.com/resources/state-of-analytics-engineering-2026)" reports, 2023–2026 (2026 edition linked) — used as a foil, not as the primary data.
**Theoretical frame:** Abrahamson (1996), management fashion theory — used to derive two falsifiable predictions before presenting findings (§4.0). Other theoretical lenses (§6) are applied afterward as secondary, exploratory reads, not as pre-registered tests.

---

## 1. What this document is

This is a structured analysis of 527 analytics engineering, BI, and team-lead job postings collected during a job search in 2026, primarily European with a substantial APAC stratum (§3, §9.5). The goal is to characterise what employers actually reveal they want through hiring language — not what practitioners report wanting in surveys.

The dbt Labs annual reports (2023–2026) are used as a reference point throughout: they are the most widely-circulated claims about the state of the profession. The core question is whether those claims show up in what employers write when they have real hiring costs at stake.

**Why this matters:** Survey responses are cheap. Writing a job description carries hiring cost. Deming and Kahn (2018) established that job postings are revealed-preference data — employers write what they actually value. This analysis holds the survey claims against that harder evidence.

**Honest scope limitations:** 527 JDs (analytical cohort) is a moderate-scale dataset with tighter confidence intervals than earlier snapshots. The confidence interval on a single proportion is approximately ±4.0pp at 95% (Wilson interval, evaluated at the §4.1 rigour proportion) — tight enough that core dimensions (rigour, domain_risk, maturity) show directional consistency, but still wide enough that individual percentages should be read as directional signals, not precise market measurements. The geographic concentration is still primarily European/Berlin, but the APAC stratum (n=79) remains large enough to test directly against the European majority rather than merely disclaim — see §9.5 for what that comparison shows and its own, tighter limits. Generalisation to North America remains a limited-n proposition, though less thin than earlier snapshots — the `nyc_metro` cluster (n=36, §3, §9.13) is large enough to support the three-way regional comparison in §9.13 but still too small, and too geographically narrow (New York City specifically, not the US broadly), to support a general US-market claim; treat it as a single-metro stratum, not a North American one on par with Europe or APAC. These limitations are stated once here and apply to every finding in this document; they are not repeated at every mention. Mid-corpus expansions (July 13, 2026: +9 JDs; July 16, 2026: +12 JDs; July 17, 2026: +13 JDs; July 21, 2026: +21 JDs; July 22–24, 2026: +55 JDs; July 26–29, 2026: +38 JDs; July 30, 2026: +11 JDs; August 5, 2026: +15 JDs; August 6, 2026: +17 JDs; August 11, 2026: +17 JDs; August 13, 2026: +18 JDs; August 18, 2026: +16 JDs to the analytical cohort, §9.9–§9.14) added new roles without statistical re-weighting, so updated findings through that point reflected raw inclusion in the analytical cohort. The 2026-07-25 dedup removed 37 duplicate records across two passes rather than adding new ones (§3, §9.6) — this tightened the corpus rather than diluting it. The 2026-08-22 audit (§9.15) removed 3 corrupted/fabricated records and materially re-classified roughly 30 others, taking the corpus from 586 to 585 total records and the analytical cohort from 502 to 527 (the cohort grew even as the total shrank, since the deletions fell outside the cohort and the batch reconciliation that regenerated `data.json` picked up records added between the last report update and the audit). Every relationship in this document is re-tested at each corpus update, and significance is not treated as permanent: this revision (n=527) finds `domain_risk × greenfield_vs_fix` (Finding B, χ²=4.66, p=0.324, V=0.07) still does not clear p<0.05 — restated below as a current null. `stakeholder_orientation × autonomy_level` (Finding E) reads χ²=16.53, p=0.035, V=0.13 this revision — a small effect that clears p<0.05 at this n, written up fresh below rather than as a return to an earlier claim. `velocity_vs_rigour × has_dbt` (§4.0's Prediction 1 comparator) reads χ²=9.56, p=0.0084, V=0.14 this revision (n=510 AE/BI) — significant, consistent with the prior snapshot. `geo_region (APAC) × jd_authorship` (previously part of Finding G) reads χ²=4.78, p=0.092, V=0.10 this revision — short of p<0.05 and at the effect-size floor, restated below as a current null rather than a finding. `data_team_maturity × work_arrangement` on the stated-arrangement subset remains significant at this n (χ²=28.57, p<0.0001, V=0.21, n=340 stated).

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

**585 job descriptions** collected April–August 2026 across `data/`, deduplicated 2026-07-25 in two passes (§9.6) and audited and corrected 2026-08-22 (§9.15). Role-type breakdown:

| role_type | n | In scope |
|---|---|---|
| analytics_engineering_bi | 510 | Yes — primary cohort |
| team_lead | 17 | Yes — governance-signalling stratum |
| data_engineering | 46 | No — excluded, different discourse population |
| other | 12 | No — excluded |

**Analytical cohort: 527 records** (AE/BI + team_lead). Team-lead roles are retained because they are the most likely to contain explicit governance-mandate language ("define testing standards", "establish data culture") — relevant to whether the 2026 report's governance anxiety has entered hiring language at the decision-making level, not just the individual-contributor level.

**Geographic spread:** Primarily European (Benelux 10%, UK/remote 14%, Iberia 9%, Berlin 7%, France 6%, Nordics 6%, other Europe 7%), with APAC remaining the largest single bucket (**79 roles, 15.0% of the analytical cohort**) — large enough to compare directly against the European majority rather than merely disclaim as a blind spot (§9.5). The `nyc_metro` bucket, introduced at the 2026-08-13 batch (§9.12), now stands at 36 roles (6.8%) — the corpus's largest single US-specific geographic concentration to date. The `geo_region` field is a keyword match against free-text `job_location` strings collected opportunistically during a job search — it describes what got scraped, not real market concentration. Treat regional splits as corpus-coverage information, not a labour-market claim. See §9.5 for a worked APAC-vs-Europe comparison, and §9.13 for a fuller three-way Europe/APAC/NYC-metro comparison — it surfaces one large effect (`language_gate_type`) that §9.5's two-way framing never tested and that the seeker/manager-mode UI (`index.html`) does not yet surface at all.

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

**Classification method:** A subset of records were hand-coded by the author during the job search. The remainder were classified using LLM majority vote — three independent runs of claude-haiku-4-5 against the same Layer B codebook, with a fixed evidence-quote verifier (§9.1). Where manual and LLM classifications exist for the same JD, manual takes precedence.

**LLM classification quality:** Self-consistency across three runs is high for structured dimensions (`velocity_vs_rigour`: 0.94, `domain_risk`: 0.95, `data_team_maturity`: 0.94) and lower for dimensions with more subjective decision boundaries (`jd_authorship`: 0.58, `autonomy_level`: 0.72). Manual–LLM match rates sit at 25–35% across dimensions on the subset with both — a codebook-validity signal, not a model failure; see §9.2. Full detail in `consistency_report.md`.

---

## 4.0 Theoretical frame and predictions

Six theoretical lenses were applied to this dataset in an earlier draft, each fitted to a finding after the fact. That is post-hoc rationalisation dressed as testing, and a reviewer would be right to flag it. This revision picks one frame — Abrahamson's (1996) management fashion theory — and derives two falsifiable predictions from it before presenting the findings that bear on them. Other lenses (§6) remain in the document as secondary, exploratory reads on findings the primary frame doesn't reach — labelled as such, not as confirmatory tests.

**The frame:** Abrahamson's management fashion theory holds that fashion-setters (consultants, vendors, business press) promote techniques as rational and necessary, and that adoption follows fashion cycles substantially independent of a technique's actual efficacy — driven as much by fashion-setter commercial interest as by genuine organisational need. dbt Labs' annual report, funded and distributed by a company that sells the tooling its own survey validates, is a textbook fashion-setting document (§2). The question this frame poses: does employer JD language track organisational substance, or does it track the vendor's narrative?

**Prediction 1 — rigour framing should track organisational risk more than vendor-adoption or template-sophistication signals, if it reflects genuine need rather than fashion diffusion.**
If rigour-oriented JD language (§4.1) is substantively driven by real stakes — the cost of a data error — it should correlate more strongly with `domain_risk` (a property of the business, independent of any vendor) than with proxies for how deeply a company has absorbed vendor/fashion language, such as `has_dbt` (tool adoption) or `jd_authorship` (how technically fluent the JD's language is).

**Test:** χ² for `velocity_vs_rigour` × `domain_risk` (n=510, AE/BI only): χ²=25.02, p<0.0001, V=0.16 — stable, essentially identical to the n=486 reading (p<0.0001, V=0.17). χ² for `velocity_vs_rigour` × `has_dbt` (n=510, AE/BI only): χ²=9.56, **p=0.0084, V=0.14 — remains significant, essentially the same margin as the n=486 reading (p=0.0096, V=0.14).** This comparator sat just below the conventional threshold for many consecutive snapshots before first crossing it at n=427; this revision continues to hold the crossing, now across four consecutive corpus updates. **This continues to complicate Prediction 1's clean reading:** rigour framing shows a small, detectable association with both `domain_risk` (V=0.16) and `has_dbt` (V=0.14) — the two remain not cleanly separated by significance, though `domain_risk`'s effect remains the larger of the two. Prediction 1's directional claim (risk matters at least as much as tool adoption) still holds; its stronger claim (tool adoption shows *no* detectable link) continues to not hold at this n. High-risk roles remain markedly more rigour-dominant (§4.2), a real gradient, stable across every snapshot from n≤240 onward.

**Prediction 2 — AI-skill hiring criteria, if still an unconsummated fashion (adopted informally, not yet institutionalised into screening), should show both a low base rate relative to survey-claimed adoption and concentration in a narrow, structurally-motivated segment rather than even market-wide spread.**
Abrahamson's model distinguishes early-fashion adoption (informal, imitative, uneven) from institutionalised practice (formal, criteria-based, widespread). If AI tool use is currently informal and imitative — teams copying peers without a shared professional standard — the *survey* self-report (informal use) should run well ahead of the *JD* screening criterion (formal adoption), and what formal adoption does exist should cluster in companies with a structural reason to need it (AI-product companies, AI-consuming infrastructure), not diffuse evenly.

**Test:** `ai_role` is coded across the full analytical cohort (n=527 — see §9.3 for the pipeline-bug history). `ai_role = none` is 63% of the cohort (down slightly from 65% at n=502) — against the dbt 2026 report's claim of 72% *daily* AI coding use. χ² for `ai_role` × `stakeholder_orientation` (n=527): χ²=15.08, p=0.058, V=0.12 — **not significant**, though closer to the conventional threshold than the prior reading (was p=0.065 at n=502). `ai_enabler` (112 of 527, 21%) still concentrates somewhat in `internal_data` and `mixed` stakeholder orientation versus `ai_user` (81, 15%) which spreads similarly. **Prediction 2's second half (non-random concentration) continues to not hold at conventional significance; the first half (large adoption-claim/hiring-criterion gap) still holds — `none` is 63% of hiring criteria against the survey's 72% daily-use claim.**

**What this buys the document:** two explicit, checkable predictions, stated before the findings that test them, with the statistical result reported honestly as it changes — including when a corpus expansion moves an earlier reading, as happened here. Prediction 1's `domain_risk` comparator has held significant at essentially the same effect size from n=272 through the current n=510 (AE/BI); its `has_dbt` comparator, non-significant across every snapshot through n=389, crossed p<0.05 for the first time at n=427 and continues to hold at n=510 (p=0.0084, V=0.14) — a borderline effect that has now held across four consecutive corpus updates rather than a one-off crossing (see the Test paragraph above). Prediction 2 flipped a different direction earlier on: a marginal, medium-effect result at a small, biased coded subset (n=86) gave way to a clear non-result once the same three dimensions were coded across the full cohort, and that non-result has held at every subsequent n including n=527. These trajectories are instructive about statistical power and sample composition rather than embarrassing reversals to paper over — this is the fix for Appendix B's "six theories, none tested" critique — not a stronger claim than the data supports, but an honest, and honestly-updated, one.

---

## 4. Findings

### 4.1 Work orientation: rigour dominates, and dominates flatly

The `velocity_vs_rigour` dimension captures whether the JD's primary framing is about quality, correctness, and reliability (rigour) or about speed, iteration, and throughput (velocity).

| velocity_vs_rigour | n | % (analytical, n=527) |
|--------------------|---|---|
| rigour | 359 | 68% |
| mixed | 150 | 28% |
| velocity | 18 | 3% |

**68% of JDs in the analytical cohort signal a rigour orientation**, unchanged from n=502. Pure velocity holds at 3% (18 JDs across 527, same absolute count as n=502, a share point lower on the larger base). This remains the clearest single-dimension finding in the dataset by margin. The overall trajectory (80% → 75% → 75% → 72% → 73% → 71% → 71% → 71% → 71% → 68% → 68% → 68% → 68%) continues to show the mid-corpus downward drift levelled off at this n. Per §4.2, rigour framing shows a small but statistically real gradient with domain risk; per §4.0, its gradient with tool adoption (`has_dbt`) also clears significance at this n — see §4.0 for the full account.

This is broadly consistent with the dbt 2026 report's governance framing — but the consistency is directional, not mechanistic. The JD data cannot distinguish "rigour because of genuine engineering craft" from "rigour because of fashion diffusion" from "rigour because of fear of AI-generated errors." §4.0's test finds a small, real effect for risk, and a small, real effect for tooling — the two are not cleanly separated by significance at this n.

**What this looks like in practice:** JDs signal rigour through phrases like "single source of truth," "data quality standards," "you will own data reliability," CI/CD requirements, and emphasis on testing and documentation — appearing across company size, seniority level, and domain.

---

### 4.2 Domain risk: moderate dominates; high-risk roles are not more rigour-focused

`domain_risk` measures the stakes of a data error in the role's primary domain (high = finance, fintech, compliance, safety; moderate = marketplace, SaaS, general commercial; low = internal tooling, education).

| domain_risk | n | % (analytical, n=527) |
|-------------|---|---|
| moderate | 355 | 67% |
| high | 140 | 27% |
| low | 32 | 6% |

**Cross-tab with velocity_vs_rigour** (AE/BI only, n=510):

χ²=25.02, p<0.0001, V=0.16 (n=510 — stable, essentially identical to the n=486 reading of p<0.0001, V=0.17). **High-risk roles remain detectably more rigour-dominant than moderate or low-risk roles,** and the relationship has held through every expansion, both dedup passes, and the 2026-08-22 audit's re-classification of ~30 records (§9.15) essentially unchanged in effect size. This still broadly confirms §4.0 Prediction 1's interpretation: domain risk carries the larger of the two effect sizes now that the `has_dbt` comparator has also crossed significance (§4.0). The effect size (V=0.16) stays in "small" territory — domain risk explains some but far from most of the variance in rigour framing. Read this as: rigour language is common everywhere but shifts upward, modestly and reliably, when the stakes of an error are genuinely higher.

---

### 4.3 Data team maturity: the market skews mid-stage, and maturity reshapes everything

`data_team_maturity` estimates where the organisation's data function sits on a development arc: `early` (building the foundation, often first or second data hire), `mid` (established stack, active growth), or `mature` (sophisticated platform, federated or domain-oriented structure).

| data_team_maturity | n | % (analytical, n=527) |
|--------------------|---|---|
| mid | 301 | 57% |
| mature | 144 | 27% |
| early | 82 | 16% |

**Just under three-fifths of roles are mid-stage.** Early-stage roles hold at 16%; genuinely mature organisations are 27% — both essentially unchanged from the n=502 snapshot (16%/27%). APAC's own maturity mix (§9.5) continues to track the corpus average closely.

**Maturity × greenfield_vs_fix cross-tab** (χ²=255.42, p<0.0001, V=0.49, n=527 — the strongest relationship in the dataset, and stable across every expansion, dedup pass, and the 2026-08-22 audit):

| data_team_maturity | fix_scale | greenfield | mixed | n |
|--------------------|-----------|-----------|-------|---|
| early | 5% | 74% | 21% | 82 |
| mid | 31% | 5% | 63% | 301 |
| mature | 43% | 5% | 52% | 144 |

Greenfield work concentrates sharply at early-stage (74%) and is nearly absent at mature (5%). This is the structural basis for the common career-advice claim "go early-stage for greenfield work," and it continues to hold cleanly — the strongest and most reliable relationship in the entire dataset, with the effect size essentially unchanged at V=0.49.

**Autonomy by maturity:**

| data_team_maturity | execution | mixed | strategic | n |
|--------------------|-----------|-------|-----------|---|
| early | 10% | 27% | 63% | 82 |
| mid | 33% | 44% | 23% | 301 |
| mature | 27% | 38% | 35% | 144 |

χ²=49.56, p<0.0001, V=0.22 (n=527, essentially unchanged from n=502's V=0.21). Early-stage roles offer strategic autonomy at 63% — still far above mid- or mature-stage roles (23% and 35%). Mid-stage remains the least strategic tier despite being the largest market segment; mature-stage's strategic share holds essentially flat (35%→35%). The core pattern — greenfield work and direction-setting cluster at early-stage companies — holds.

---

### 4.4 Stakeholder orientation: internal_data dominates

`stakeholder_orientation` identifies who the AE primarily serves: `commercial` (GTM, sales, marketing, RevOps), `product` (experimentation, funnels), `internal_data` (other data practitioners, platform consumers), `finance`, or `mixed`.

| stakeholder_orientation | n | % (analytical, n=527) |
|-------------------------|---|---|
| internal_data | 256 | 49% |
| mixed | 105 | 20% |
| commercial | 73 | 14% |
| finance | 58 | 11% |
| product | 35 | 7% |

**49% of roles in this cohort primarily serve internal data consumers** — other analysts, data scientists, ML engineers, or the platform itself. This remains the dominant archetype in the market, essentially unchanged from the n=502 reading (48%). APAC's own stakeholder mix isn't a standout finding — see §9.5.

**Cross-tab with rigour** (χ²=68.85, p<0.0001, V=0.26, n=527):

| stakeholder_orientation | mixed | rigour | velocity | n |
|-------------------------|-------|--------|----------|---|
| finance | 16% | 84% | 0% | 58 |
| internal_data | 19% | 79% | 2% | 256 |
| product | 40% | 54% | 6% | 35 |
| mixed | 45% | 53% | 2% | 105 |
| commercial | 44% | 44% | 12% | 73 |

Finance and internal_data roles remain the most rigour-dominant (79–84%); commercial and product roles are close to evenly split between rigour and mixed framing, with commercial's velocity share ticking up slightly (10%→12%). This relationship remains clearly significant at n=527 (V=0.26, essentially unchanged from n=502's V=0.25) — still the clearest stakeholder-level driver of rigour/velocity framing in the dataset.

**What this means for positioning:** applying to an `internal_data` role with a speed-first pitch is a framing mismatch with what these employers write they want.

---

### 4.5 Autonomy level: roughly a three-way split, and seniority title predicts it weakly

`autonomy_level` separates roles where the AE sets direction (`strategic`) from roles that execute against direction set by others (`execution`), with `mixed` covering roles signalling both.

| autonomy_level | n | % (analytical, n=527) |
|----------------|---|---|
| mixed | 207 | 39% |
| strategic | 173 | 33% |
| execution | 147 | 28% |

The three-way split persists, and `mixed` continues to lead `strategic`/`execution` (39% vs. 33%/28%, essentially unchanged from the n=502 reading of 39/32/28). This remains within the range this corpus size produces from batch to batch and is not read as a trend toward `mixed` overtaking the other two categories structurally — just where the current n happens to land. This even distribution reinforces that autonomy cannot be read from title or seniority label alone; context (maturity, stakeholder, domain risk) matters much more.

**Seniority × autonomy** (χ²=119.61, p<0.0001, V=0.34, n=527):

| seniority | execution | mixed | strategic | n |
|-----------|-----------|-------|-----------|---|
| junior | 73% | 27% | 0% | 22 |
| mid | 37% | 46% | 17% | 258 |
| senior | 18% | 35% | 47% | 203 |
| lead | 0% | 26% | 74% | 19 |
| manager | 0% | 30% | 70% | 10 |
| staff | 0% | 13% | 87% | 15 |

The relationship remains statistically real (p<0.0001, effect size essentially unchanged at V=0.34) and the practical read is stable: **"Mid" remains the single largest title cohort (n=258) but "Senior" (n=203) remains the more informative one, splitting 18/35/47 across execution/mixed/strategic — solidly more strategic-leaning than the corpus-wide split, consistent with prior snapshots.** A "Senior Analytics Engineer" title continues to be a meaningfully positive predictor of strategic scope, though it remains far from deterministic (nearly a fifth of senior roles are still pure execution). Lead, manager, and staff titles predict strategic scope more clearly still (70–87%), but remain small cells. The practical implication for interviews is unchanged: ask explicitly what decisions the role makes autonomously in year one; the senior title is informative but still leaves real uncertainty.

---

### 4.6 JD authorship: hiring managers write roughly three-quarters of the corpus; the APAC gap and the rigour link both read as tested nulls this revision

`jd_authorship` distinguishes JDs written by (or heavily informed by) the hiring manager — technical specificity, named tools in precise context — from recruiter-authored JDs (generic requirements, boilerplate language).

| jd_authorship | n | % (analytical, n=527) |
|---------------|---|---|
| hiring_manager | 403 | 76% |
| mixed | 88 | 17% |
| recruiter | 36 | 7% |

**Hiring-manager-authored JDs are 76% of the corpus**, essentially unchanged from 75% at n=502. **The APAC gap reads short of p<0.05 this revision:** APAC roles are 86% hiring_manager-authored vs. 75% for the rest of the corpus (χ²=4.78, p=0.092, V=0.10, n=527). Per the "significance is not permanent" principle applied throughout this document (§1), this is stated plainly as the current state of the evidence: the point estimate barely moved (87%→86% APAC) and the gap direction is unchanged, but the effect size sits right at the V≈0.10 floor used elsewhere on this page and the test itself no longer clears the conventional threshold. This gap has crossed the conventional threshold in both directions across several consecutive snapshots (§9.5's table shows the trajectory); treat the direction (APAC skews toward hiring-manager authorship) as a plausible, still-live signal and the specific significance test as too sensitive to batch composition at this n to lean on.

**Cross-tab with rigour** (χ²=8.64, p=0.071, V=0.09, n=527): hiring_manager 71% rigour / 26% mixed / 4% velocity; mixed 63% rigour / 36% mixed / 1% velocity; recruiter 56% rigour / 42% mixed / 3% velocity. This reads short of p<0.05 this revision (was p=0.022 at n=502) and the effect size (V=0.09) now sits just below the floor used elsewhere on this page. The direction is unchanged — more hiring-manager sophistication still tracks with somewhat more rigour framing — but this specific test no longer clears significance; read it as a plausible, currently-undetectable-at-this-n association rather than a confirmed finding.

**Cross-tab with has_dbt** (χ²=29.64, p<0.0001, V=0.24, n=510, AE/BI only):

| jd_authorship | has_dbt=False | has_dbt=True | n |
|---------------|---------------|---------------|---|
| hiring_manager | 30% | 70% | 392 |
| mixed | 53% | 47% | 83 |
| recruiter | 66% | 34% | 35 |

Hiring-manager-authored JDs name dbt at roughly 2× the rate of recruiter-authored ones (70% vs. 34%), essentially unchanged from the n=486 reading — the relationship is stable and the effect size held (V=0.24, unchanged). Read against Deming & Kahn's revealed-preference framework (§6): a hiring-manager-named tool requirement is a higher-fidelity signal than a recruiter-named one — the manager screens for it because they use it; the recruiter may be pulling from a template. The practical implication: dbt's *absence* in a recruiter-authored JD is weaker evidence the team doesn't use it than absence in a hiring-manager-authored JD.

---

### 4.7 Collaboration width: a weak, noisy dimension

`collaboration_width` counts named partner teams in the JD's responsibilities section. It is the noisiest dimension in the codebook — the evidence-quote pass rate is the lowest of any dimension even after the verifier fix (§9.1), because many JDs describe collaboration generically ("cross-functional teams") rather than naming specific teams.

| data_team_maturity | mean collaboration_width | n |
|--------------------|--------------------------|---|
| mature | 2.89 | 144 |
| mid | 2.49 | 301 |
| early | 2.59 | 82 |

The earlier draft's finding — mature teams have the widest named-stakeholder count — is directionally intact (2.89 vs. 2.49 vs. 2.59), broadly consistent with the n=502 reading (2.81/2.40/2.53). Mature still leads and mid still trails, the same ordering as every prior snapshot, and early sits between the two as it has for several snapshots now rather than at either extreme. **This dimension still does not currently support a confident finding.** It is retained in the codebook for future corpus growth, but no claim built on it should be treated as established.

---

### 4.8 dbt prevalence: real but not universal

`has_dbt` is a required-or-preferred tool flag, not a Layer B dimension. **64% of AE/BI roles (n=510) mention dbt.**

This is consistent with dbt's own claim that it has become the field standard, but roughly one in three AE/BI roles run on a stack without it. The prevalence has held essentially flat across the last several snapshots (68%→66%→65%→65%→66%→65%→64%→65%→65%→66%→64%→65%→64%→64%), including through both dedup passes, every subsequent expansion, and the 2026-08-22 audit's re-classification of ~30 records (§9.15) — dbt prevalence among APAC AE/BI roles specifically remains close to the corpus average (§9.5). This market includes a meaningful share of Databricks SQL, BigQuery-native, and Spark-first stacks. A survey distributed exclusively through dbt's community channels cannot see that portion of the market by construction — this is the self-selection constraint from §2, made concrete. The JD data documents this blind spot directly: roughly one in three roles don't name dbt at all, stable across fourteen consecutive corpus snapshots.

---

## 4.9 Statistical relationships across dimensions

The sections above treat each dimension mostly in isolation. This section runs pairwise tests across categorical fields to surface relationships beyond §4.0's two pre-specified predictions. These are exploratory, not confirmatory — read them as candidates for future pre-registration, not as tested hypotheses.

### Statistical methods

**Chi-squared (χ²):** applied to categorical × categorical pairs with adequate expected cell frequencies. At n=527, the minimum detectable effect (α=0.05, 80% power) for a typical cross-tab is Cramér's V ≈ 0.14 — essentially unchanged from the n=502 threshold, consistent with the modest power gain from ~25 additional records. Findings below the current threshold are still directional only.

**Cramér's V** reported alongside all χ² tests (0 = no association, 1 = perfect association). V≥0.10 small, V≥0.30 medium, V≥0.50 large.

**Multiple comparison note:** no Bonferroni correction is applied — these are exploratory findings. p<0.05 alone is not sufficient to treat a result as robust at this n; effect size (V) matters more than significance here.

---

### Finding A: Domain risk and stakeholder orientation are structurally linked (χ², p<0.0001, V=0.36, n=527)

| domain_risk | commercial | finance | internal_data | mixed | product |
|-------------|-----------|---------|---------------|-------|---------|
| high (n=140) | 4% | 36% | 37% | 17% | 5% |
| low (n=32) | 6% | 0% | 69% | 22% | 3% |
| moderate (n=355) | 18% | 2% | 51% | 21% | 8% |

High-risk roles concentrate heavily in finance (~36%, vs. 0% of low-risk and ~2% of moderate-risk roles), unchanged in direction and essentially unchanged in effect size (V=0.36, essentially unchanged from n=502's V=0.37). Still the strongest, cleanest relationship in the dataset outside of maturity × mission (§4.3). Product-facing roles remain rare in high-risk contexts (5%) — experimentation and funnel work is essentially never coded high-stakes in this corpus, even though A/B test errors can carry real revenue consequences. Low-risk roles skew overwhelmingly `internal_data` (69%) — internal tooling and education-sector roles serve internal data consumers almost by definition.

**Theoretical read — DiMaggio & Powell (1983), coercive isomorphism:** finance is a field with an externally imposed risk hierarchy (audit standards, IFRS, regulatory reporting) that constrains how the role gets written regardless of the individual employer's preference. Product analytics has no equivalent external body defining what "high stakes" means for an experiment, so employers default to moderate. The domain-risk classification in this dataset appears to track external regulatory pressure more than an employer's independent risk judgment.

---

### Finding B: domain risk and mission type — a tested null (χ², p=0.324, V=0.07, n=527)

| domain_risk | fix_scale | greenfield | mixed |
|-------------|-----------|-----------|-------|
| high (n=140) | 34% | 16% | 50% |
| low (n=32) | 44% | 12% | 44% |
| moderate (n=355) | 28% | 16% | 56% |

Moderate-risk roles still look the most "mixed" (incremental extension of an existing stack, 56%) and low-risk roles still lean somewhat more toward fix_scale (44%) than moderate-risk roles (28%) — the direction is broadly the same as prior snapshots, and the test remains well short of p<0.05 at this n, with the effect size essentially unchanged (V=0.07, was 0.08 at n=502). This relationship has moved across the threshold in both directions across earlier snapshots and remains null at the current n — read that trajectory as a small, marginal effect that this corpus size can't reliably detect either way, not as evidence the underlying pattern has changed. Kept here as a documented test, not as a claimed finding.

---

### Finding C: Maturity determines mission almost deterministically (χ², p<0.0001, V=0.49, n=527)

Full cross-tab in §4.3. Greenfield work is 74% of early-stage roles and 5% of mature-team roles — the sharpest, most reliable relationship in the corpus, holding at V=0.49, essentially unchanged from n=502.

**Theoretical read — Rogers (2003), diffusion S-curve:** early adopters build from scratch, the majority scale and extend, late adopters inherit and optimise. The maturity × mission distribution maps closely onto this. What the diffusion model doesn't predict as cleanly is the mature/fix_scale share (45%) — Rogers treats late-stage adoption as stabilisation, not remediation. Read alongside Finding B, this looks like a *post-stabilisation regression*: mature teams rebuilding systems that were adequate when adopted but have since accumulated debt — closer to Collingridge's framework than Rogers' for that specific slice.

---

### Finding D: Seniority predicts autonomy moderately for the modal title, strongly at the tails (χ², p<0.0001, V=0.34, n=527)

Full cross-tab in §4.5. "Mid" (n=258) remains the largest title cohort by count, but "Senior" (n=203) remains the more informative title, spanning execution/mixed/strategic at 18/35/47 — noticeably more strategic-leaning than the corpus-wide split, consistent with prior snapshots. Staff, manager, and lead titles (n=15, n=10, n=19) predict strategic scope near-perfectly (70–87%), but the cells remain too small to generalise with confidence.

**Theoretical read — Spence (1973), signalling, now more mixed than contradicted:** if job titles were reliable, costly-to-fake signals, "Senior" should predict autonomy cleanly. At n=527 "Senior" remains a meaningfully informative signal (47% strategic vs. an overall cohort rate of 33%), consistent with prior snapshots — the signalling account continues to look less contradicted than the n=123 baseline suggested, though nearly a fifth of senior roles remain pure execution, so the signal stays noisy. Staff/manager/lead titles retain the strongest signal value, consistent with being rarer and costlier to award, but the cells are too small here to treat as confirmed.

---

### Finding E: Stakeholder orientation carries a small, detectable link to autonomy level (χ², p=0.035, V=0.13, n=527)

| stakeholder_orientation | execution | mixed | strategic |
|-------------------------|-----------|-------|-----------|
| finance (n=58) | 29% | 33% | 38% |
| commercial (n=73) | 18% | 47% | 36% |
| mixed (n=105) | 20% | 47% | 33% |
| internal_data (n=256) | 34% | 37% | 29% |
| product (n=35) | 26% | 29% | 46% |

Product-facing roles carry the highest strategic share (46%) and internal_data roles the lowest (29%), with finance and commercial sitting closer to product than to internal_data on this dimension. The effect is small (V=0.13) and this specific relationship has sat close to the conventional threshold across several corpus updates, crossing it in both directions before — worth reading as a real but modest tendency rather than a strong driver of autonomy, on the same footing as the other small-effect findings in this section.

---

### Finding G: JD authorship predicts stated dbt requirement (χ², p<0.0001, V=0.24, n=510)

Full cross-tab in §4.6. Hiring-manager-authored JDs name dbt at 70% vs. 34% for recruiter-authored — still the clearest authorship-quality signal in the dataset, with the gap and effect size essentially stable against the n=486 reading (V=0.24→0.24). Directly relevant to the dbt-prevalence caveat in §4.8 (recruiter-authored non-mentions of dbt are lower-fidelity evidence than hiring-manager non-mentions).

**Geography's link to JD authorship reads short of p<0.05 this revision (χ², p=0.092, V=0.10, n=527):** APAC roles are 86% hiring-manager-authored vs. 75% for the rest of the corpus — the same direction held across every prior snapshot (§9.5), and the gap is essentially the same size as before (87%→86% APAC), but the test no longer clears the conventional threshold and the effect size (V=0.10) sits right at the floor used elsewhere on this page. Per this document's "significance is not permanent" convention, this is restated plainly as the current state of the evidence: a directionally consistent gap that this specific test can no longer confirm at conventional significance. Two readings remain plausible and the JD text alone can't distinguish them: APAC hiring managers may write JDs more directly (less recruiter/ATS-template mediation in this sample), or the `jd_authorship` codebook's technical-specificity heuristic may be picking up an ATS-formatting convention specific to how these postings were sourced (many via LinkedIn/company career pages with detailed bullet-point tool lists) rather than true authorship. Given `jd_authorship`'s already-low self-consistency (0.58, §3) and this relationship's history of repeatedly crossing the p<0.05 line in both directions across consecutive snapshots, treat the direction (APAC skews toward hiring-manager authorship) as a plausible but currently-unconfirmed signal, not a finding to build on.

---

### Finding H: Work arrangement — driven almost entirely by geography, with a maturity effect and an APAC disclosure signature that both remain significant (n=585 total / 527 analytical cohort)

A chi-square sweep of `work_arrangement` (hybrid / remote / onsite; `not_stated` excluded, 35% of the analytical cohort) against all other categorical and boolean dimensions found essentially one dominant driver: **where the job is**. `geo_region` remains by far the strongest association (χ²=161.70, p<0.0001, V=0.49, n=340 stated — direction and magnitude consistent with earlier snapshots) — remote roles concentrate almost entirely in `global_remote` and `uk_remote`, hybrid dominates every other region. This is close to tautological (a posting tagged "global remote" is remote by construction of the label) and the test remains statistically unreliable at the sparse-cell level given 15 regions × 3 arrangement categories. Treat the direction as real, the p-value as decorative.

**APAC's own signature remains significant on both cuts of the question.** Of the 79 APAC roles, 51% state no work arrangement at all, vs. 33% for the rest of the corpus — directionally the same read as every prior snapshot. APAC's *stated* arrangements continue to show a meaningfully higher onsite share (26% vs. 8% for the rest of the corpus) alongside a lower hybrid share (67% vs. 77%). Crossing the full four-category `work_arrangement` breakdown (hybrid/not_stated/onsite/remote) against APAC-vs-rest gives χ²=18.70, p=0.0003, V=0.19, n=527 — a small effect, essentially unchanged from the n=502 snapshot (χ²=15.72, p=0.0013, V=0.18). Read this as APAC's work-arrangement profile (both what gets disclosed and, when disclosed, what it says) continuing to measurably differ from the rest of the corpus. Among the 39 APAC roles that do state an arrangement, hybrid still dominates numerically but the onsite share (26%) remains among the largest of any region in the dataset, matched closely by the `nyc_metro` bucket (§9.13).

**The `data_team_maturity` relationship, on the stated-arrangement subset, remains significant: χ²=28.57, p<0.0001, V=0.21 (n=340 stated)** — a slightly larger effect size than the n=502 snapshot's V=0.19, within the range of batch-to-batch noise this test has shown before. Mature teams post hybrid most often (87% of stated arrangements) vs. 56% for early-stage teams, who split more evenly across hybrid/onsite/remote (56% / 26% / 18%); mid-stage sits between the two (77% / 7% / 16%). The direction is identical to every prior snapshot and matches the §4.3 maturity story — mature teams have converged on an operating default, early-stage teams are still deciding theirs. Interactive cross-tab and full write-up live in the dashboard (`index.html`, "Team maturity × Work arrangement" panel).

**`autonomy_level` × `work_arrangement` remains marginally significant: χ²=9.77, p=0.044, V=0.12 (n=340 stated)** — essentially unchanged in direction from the n=502 reading (p=0.012, V=0.14), and the pattern is broadly stable: mixed-autonomy roles remain the most hybrid-concentrated (83%), while strategic roles show the highest onsite share (16%) and a matching remote share (17%) simultaneously — a polarised strategic-role profile consistent with prior snapshots. The effect size still sits right at the small-effect floor (V=0.12) — worth treating as a small, currently-real relationship rather than a headline finding, and one to keep re-checking rather than build a large claim on.

**On the missing 35% itself:** rather than just excluding `not_stated`, it's worth showing it as its own category, because it's an interesting result in its own right. Across maturity tiers it still does not concentrate strongly — mature (40%), mid (36%), and early-stage (26%) withhold a policy at close to the same rate, essentially unchanged from earlier snapshots. Folding `not_stated` back in as a fourth category for the maturity test (rather than excluding it) remains significant, at a level consistent with prior snapshots (χ²=35.96, p<0.0001, V=0.19, n=527). This is a different question than the stated-only test above ("does maturity predict whether an arrangement is stated at all," answer: modestly, yes) and both readings remain legitimate. "Does geography predict whether an arrangement is stated at all" remains confirmed at conventional thresholds for APAC (above) — and the dashboard panel shows the maturity views.

**Everything else tested null.** No tool-stack flag (`has_dbt`, `has_python`, `has_airflow`, `has_snowflake`, etc.) shows any association with work arrangement — remote/hybrid/onsite roles run the same stack in the same proportions. Same null result for `seniority`, `velocity_vs_rigour`, `domain_risk`, `urgency`, `jd_authorship`, `greenfield_vs_fix`, `ai_role`, `testing_framing`, `loss_aversion_framing`, and `stakeholder_orientation` (all p>0.20). `ats_platform` came close in earlier snapshots but has the worst sparse-cell problem of any test run and isn't interpretable without collapsing platforms into broader buckets first.

**Caveat on missingness:** 35% of the analytical cohort states no work arrangement at all, and that rate is not uniform by region — APAC's 51% not-stated rate (above), combined with its distinct stated-arrangement mix (more onsite, less hybrid), remains a confirmed, not merely directional, difference at this n. Whether it reflects different posting conventions (many APAC postings were sourced via LinkedIn/company career pages that omit a work-arrangement field entirely, or via channels more likely to post explicitly onsite roles) or genuine underlying differences in how APAC employers set policy is not resolvable from JD text alone.

---

### Finding I: With `ai_role`, `testing_framing`, and `loss_aversion_framing` coded on the full cohort (n=527; §9.3), a systematic sweep against every other categorical dimension and tool flag surfaces several relationships, all stable at the current n

**Testing accountability tracks the fear register closely (χ²=127.88, p<0.0001, V=0.35, n=527):**

| testing_framing | high | moderate | none |
|---|---|---|---|
| absent (n=120) | 9% | 35% | 56% |
| responsibility (n=331) | 26% | 67% | 8% |
| tool_listed (n=76) | 12% | 62% | 26% |

JDs that frame testing as an owned responsibility carry almost no `loss_aversion_framing = none` (8%, vs. 56% for `absent`-testing JDs) — essentially unchanged from prior snapshots. This is a construct-validity result as much as a substantive one: two dimensions coded independently, from different evidence quotes, land in the same place — a JD that asks the candidate to own data quality is, unsurprisingly, also a JD that is afraid of something going wrong. The `absent`/`none` corner (56%) is the "pure delivery" JD with no quality or risk register at all; the `responsibility`/`moderate` combination (67% of `responsibility`-coded JDs) is the modal case — quality ownership paired with garden-variety operational-reliability fear, not compliance framing.

**Loss aversion tracks rigour framing even more tightly than domain risk does (χ²=147.49, p<0.0001, V=0.37, n=527):**

| loss_aversion_framing | mixed | rigour | velocity |
|---|---|---|---|
| high (n=105) | 2% | 98% | 0% |
| moderate (n=310) | 25% | 73% | 2% |
| none (n=112) | 63% | 25% | 12% |

98% of `high`-loss-aversion JDs are rigour-framed, against 25% for JDs with no loss-aversion signal at all — essentially unchanged in magnitude from prior snapshots, and still a cleaner split than domain_risk's own relationship with rigour framing (§4.2, V=0.16). Read together with §4.2, this suggests `loss_aversion_framing` is picking up something closer to the JD's *actual* fear register than `domain_risk`'s sector-level proxy does — a JD can be sector-coded `moderate` risk but still carry `high` loss-aversion language if the role's specific responsibilities emphasise trust/audit framing (see Finding A's DiMaggio & Powell read, §4.9, for why sector and role-level framing can diverge).

**dbt-equipped roles are far more likely to frame testing as an owned responsibility (χ²=59.65, p<0.0001, V=0.34, n=510, AE/BI only):**

| testing_framing | has_dbt=False | has_dbt=True |
|---|---|---|
| absent (n=115) | 64% | 36% |
| responsibility (n=321) | 25% | 75% |
| tool_listed (n=74) | 43% | 57% |

This remains the strongest tool-stack relationship found for any of the three dimensions, essentially unchanged from prior snapshots, and it cuts against a purely fashion-driven reading of dbt adoption: `has_dbt` JDs are 75% likely to frame testing as an owned responsibility, vs. 36% for JDs with no dbt mention — dbt's testing framework (`dbt test`) appears to travel with genuine ownership language, not just as a name-drop.

**`ai_role` and autonomy move together in an unexpected direction — `ai_user` and `ai_enabler` roles both remain markedly more strategic than `none` (χ²=44.82, p<0.0001, V=0.21, n=527):**

| ai_role | execution | mixed | strategic |
|---|---|---|---|
| ai_enabler (n=112) | 15% | 38% | 47% |
| ai_user (n=81) | 12% | 37% | 51% |
| none (n=334) | 37% | 40% | 23% |

The naive expectation might be that "use AI coding tools" is a junior-coded, execution-heavy ask (accelerate scoped work faster) while "build AI-consuming infrastructure" is the more strategic mandate. The data continues to show the opposite ordering: both `ai_user` and `ai_enabler` JDs are markedly more strategic-leaning than `none` (47–51% vs. 23%), with `ai_user` running slightly ahead of `ai_enabler` this revision (51% vs. 47%, close to the n=502 reading of 52%/48%). One plausible read: JDs that expect AI-tool fluency, whether as user or infrastructure-builder, are disproportionately senior/lead-level postings at companies confident enough in their engineering culture to name a specific workflow expectation rather than a junior competency checkbox — the ask reads more like "operate at a higher level of leverage" than "be fast at typing." This is exploratory and not pre-registered (§4.0 only tested `ai_role × stakeholder_orientation`); it's flagged here as a candidate for a future prediction, not a confirmed causal story.

**`ai_role` also tracks `greenfield_vs_fix` (χ²=30.31, p<0.0001, V=0.17, n=527):**

| ai_role | fix_scale | greenfield | mixed |
|---|---|---|---|
| ai_enabler (n=112) | 21% | 26% | 53% |
| ai_user (n=81) | 21% | 22% | 57% |
| none (n=334) | 38% | 10% | 52% |

Both `ai_enabler` and `ai_user` roles show meaningfully more greenfield work (26%/22%) than `none` roles (10%) — consistent with prior snapshots, with the effect size settling slightly lower than the n=502 reading (V=0.17, was 0.19) but the direction and gap are unchanged. This dovetails with the `ai_role × autonomy_level` finding above: greenfield work and strategic autonomy already travel together generally (§4.3), so some of the "AI roles skew strategic" pattern may be downstream of "AI roles skew greenfield" rather than a direct effect of the AI expectation itself. Disentangling the two would need a three-way cross-tab at a larger n than this corpus currently supports.

**Everything else involving the three new dimensions tested null or only weakly suggestive** (p>0.05 or V<0.15): no meaningful association between `ai_role`/`testing_framing`/`loss_aversion_framing` and `seniority`, `urgency`, or most individual BI-tool flags. `testing_framing × geo_region` remains a sparse-cell test (15 regions × 3 categories, several expected cells <1) and should be treated as decorative, not evidential, despite APAC's own testing_framing mix not standing out as directionally interesting (§9.5).

---

### Summary of relationships tested

| Relationship | Test | p | V | Interpretation |
|---|---|---|---|---|
| velocity_vs_rigour × domain_risk (Prediction 1) | χ² | <0.0001 | 0.16 | Stable at n=510 AE/BI (was p<0.0001, V=0.17 at n=486) — small real effect, high-risk roles more rigour-dominant |
| velocity_vs_rigour × has_dbt (Prediction 1 comparator) | χ² | 0.0084 | 0.14 | **Significant at n=510 AE/BI, fourth consecutive corpus update** (was p=0.0096, V=0.14 at n=486) — a borderline effect that keeps holding at essentially the same margin; see §4.0 |
| ai_role × stakeholder_orientation (Prediction 2) | χ² | 0.058 | 0.12 | Still not significant at n=527 (was p=0.065 at n=502) — closer to the threshold than the prior reading, but a stable non-result |
| domain_risk × stakeholder_orientation | χ² | <0.0001 | 0.36 | Strongest relationship: finance concentrates high-risk, low-risk concentrates internal_data |
| data_team_maturity × greenfield_vs_fix | χ² | <0.0001 | 0.49 | Near-deterministic and stable: early=greenfield, mature=fix/scale |
| domain_risk × greenfield_vs_fix | χ² | 0.324 | 0.07 | **Still not significant at n=527** (was p=0.176, V=0.08 at n=502) — this relationship has crossed the threshold in both directions across earlier snapshots and remains null; read as a marginal effect this corpus size can't reliably detect either way, not a reversal (§4.9 Finding B) |
| jd_authorship × has_dbt | χ² | <0.0001 | 0.24 | Hiring-manager JDs name dbt ~2× more than recruiter JDs — stable |
| geo_region (APAC vs. rest) × jd_authorship | χ² | 0.092 | 0.10 | **Not significant at n=527** (was p=0.045, V=0.11 at n=502) — direction unchanged (86% vs. 75% hiring-manager-authored), but the test no longer clears p<0.05 and the effect size sits at the floor; Finding G, §9.5 |
| geo_region (APAC vs. rest) × work_arrangement (4-category) | χ² | 0.0003 | 0.19 | **Remains significant at n=527, effect size essentially unchanged** (was p=0.0013, V=0.18 at n=502) — APAC's not-stated rate (51% vs. 33%) and its stated-arrangement mix (more onsite, less hybrid) both continue to measurably differ from the rest of the corpus; Finding H, §9.5 |
| seniority × autonomy_level | χ² | <0.0001 | 0.34 | Significant overall; "Senior" (n=203, still not the modal title by count — "Mid" is, at n=258) still predicts strongly (47% strategic) |
| stakeholder_orientation × autonomy_level | χ² | 0.035 | 0.13 | **Significant at n=527** (was p=0.125, V=0.11 at n=502) — a small effect that clears p<0.05 at this n; product-facing roles carry the highest strategic share (46%), internal_data the lowest (29%) (§4.9 Finding E) |
| stakeholder_orientation × velocity_vs_rigour | χ² | <0.0001 | 0.26 | Finance/internal_data most rigour-dominant; commercial/product carry the most mixed/velocity framing |
| collaboration_width × data_team_maturity | — | — | — | Still does not support a claim at n=527 (§4.7) |
| work_arrangement × geo_region (stated subset) | χ² | <0.0001 | 0.49 | Strongest association found, but unreliable — most cells <5 (Finding H) |
| language_gate_type × geo_region (3-way: Europe/APAC/NYC metro) | χ² | <0.0001 | 0.22 | **Largest region effect in this document.** Hard/soft language gates: Europe 39.0%, APAC 8.9%, NYC metro 0% — near-exclusively a European phenomenon; §9.13, n=469 |
| velocity_vs_rigour × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.0002 | 0.15 | `rigour` share steps down Europe 72.0% → APAC 67.1% → NYC 44.4% with domain_risk composition holding closer to flat than not across regions — a framing/dialect gap, not primarily a risk gap; §9.13, n=469 |
| domain_risk × geo_region (3-way: Europe/APAC/NYC metro) | χ² | 0.035 | 0.11 | **Newly significant at n=469** — `high` domain_risk climbs step-wise Europe 24.0% → APAC 34.2% → NYC 41.7%; a small effect, but the confound check behind the two findings above (§9.13) can no longer treat domain_risk composition as flat across regions — see §9.13 |
| work_arrangement × data_team_maturity (stated subset) | χ² | <0.0001 | 0.21 | **Still significant at n=527** (was p<0.0001, V=0.19 at n=502) — same direction as every prior snapshot (mature teams skew hybrid) (Finding H) |
| work_arrangement × autonomy_level (stated subset) | χ² | 0.044 | 0.12 | **Still marginally significant** (was p=0.012, V=0.14 at n=502) — mixed-autonomy roles remain the most hybrid-concentrated, strategic roles show the highest onsite and remote shares, effect sits right at the small-effect floor (Finding H) |
| work_arrangement × everything else (tool stack, seniority, rigour, domain risk) | χ² | >0.20 | ≤0.13 | Null — unrelated to arrangement |
| loss_aversion_framing × domain_risk | χ² | <0.0001 | 0.40 | 74% of high-loss-aversion JDs are high-domain-risk (equivalently: 56% of high-domain-risk roles carry high loss-aversion framing) (Finding I) |
| testing_framing × loss_aversion_framing | χ² | <0.0001 | 0.35 | Quality-ownership and fear-register track each other closely (Finding I) |
| loss_aversion_framing × velocity_vs_rigour | χ² | <0.0001 | 0.37 | Cleaner than domain_risk's own link to rigour — 98% of high-loss-aversion JDs are rigour-framed (Finding I) |
| testing_framing × has_dbt | χ² | <0.0001 | 0.34 | dbt JDs 75% likely to frame testing as owned responsibility vs. 36% without dbt (Finding I) |
| testing_framing × jd_authorship | χ² | <0.0001 | 0.22 | Hiring-manager JDs skew toward `responsibility`/`tool_listed`, recruiter JDs toward `absent` (Finding I) |
| ai_role × autonomy_level | χ² | <0.0001 | 0.21 | Unexpected direction, stable: `ai_user` (51%) and `ai_enabler` (47%) roles are both markedly more strategic-leaning than `none` (23%) (Finding I) |
| ai_role × greenfield_vs_fix | χ² | <0.0001 | 0.17 | `ai_enabler`/`ai_user` roles carry meaningfully more greenfield work than `none` roles (Finding I) |

---

### 4.10 AI role: the gap between AI adoption discourse and hiring language narrows once fully coded, but stays real

`ai_role` classifies whether the JD expects the candidate to *use* AI tools, *build* infrastructure AI systems consume, or neither. **Coded on the full analytical cohort (n=527)** — a bug in `scripts/write_jd.py` had silently dropped this field (and `testing_framing`, `loss_aversion_framing`) from JSON output for a long stretch of the corpus even when correctly classified; the backlog was fully re-coded against the JD archive text and the codebook (§9.3).

| ai_role | n | % (n=527) |
|---------|---|---|
| none | 334 | 63% |
| ai_enabler | 112 | 21% |
| ai_user | 81 | 15% |

This is Prediction 2 from §4.0. **63% of JDs expect no AI skill from the candidate**, down slightly from 65% at n=502, against the dbt 2026 report's claim of 72% *daily* AI coding use among survey respondents. The gap between claimed personal-workflow adoption and formal hiring criteria has held steady. χ² for `ai_role` × `stakeholder_orientation` (n=527) remains non-significant (p=0.058, V=0.12; §4.0) — the `ai_enabler` cohort still leans toward `internal_data` and `mixed` stakeholder orientation, and `ai_user` leans similarly, and the association's weakness is stable rather than trending toward zero.

**Actionable read:** `ai_enabler` roles → demonstrate data infrastructure built specifically for AI consumption. `ai_user` roles → demonstrate fluency with AI coding tools directly (Copilot, Claude Code, Cursor) as a nontrivial minority expectation. `none` (still the majority at 63%) → AI tool fluency is not a stated differentiator; leading with it misreads what's being screened for.

`ai_role` continues to track `autonomy_level` (χ²=44.82, p<0.0001, V=0.21) and `greenfield_vs_fix` (χ²=30.31, p<0.0001, V=0.17) at n=527 — see Finding I (§4.9) for the counter-intuitive direction (`ai_user` and `ai_enabler` roles skew *more* strategic and *more* greenfield, not less).

---

### 4.11 Testing framing: governance accountability is a majority hiring criterion

`testing_framing` distinguishes whether testing/data quality appears as something the candidate *owns*, a listed tool, or absent. **Coded on the full analytical cohort (n=527)** — see §9.3 for the write-pipeline bug that delayed this.

| testing_framing | n | % (n=527) |
|-----------------|---|---|
| responsibility | 331 | 63% |
| absent | 120 | 23% |
| tool_listed | 76 | 14% |

**63% of JDs frame testing as an owned responsibility** — action verbs (own, ensure, define, implement) paired with quality/data-contracts/observability language, essentially unchanged from 61% at n=502. This is the clearest confirmation in the dataset of dbt 2026's "trust gap" narrative at the level of formal hiring criteria, distinct from §4.1's rigour finding: two rigour-coded JDs can differ in whether the *individual hire* is personally accountable for quality or whether it's team culture. `testing_framing = responsibility` identifies the former. `testing_framing × velocity_vs_rigour` is significant (χ²=65.82, p<0.0001, V=0.25, n=527): `responsibility`-coded JDs are 80% rigour-framed vs. 45% for `absent`-coded JDs — testing ownership and rigour framing move together but are not the same signal, since a substantial share of the cohort is rigour-framed with no testing-ownership language at all.

The 23% `absent` cluster has not operationalised quality concern into hiring language even where the role otherwise reads as rigour-oriented — either the expectation is assumed and unstated, or it isn't a real priority. JD text alone can't distinguish the two; that requires interview-stage questions (§7).

`testing_framing`'s strongest tool-stack link (`has_dbt`, χ²=59.65, p<0.0001, V=0.34) and its link to `jd_authorship` (χ²=51.06, p<0.0001, V=0.22) and `loss_aversion_framing` (χ²=127.88, p<0.0001, V=0.35) all hold stable at n=527 — see Finding I (§4.9) for detail. APAC roles run somewhat above the corpus average on `responsibility` framing, consistent with prior snapshots; §9.5.

---

### 4.12 Loss-aversion framing: the market fears operational failure, not AI hallucinations

`loss_aversion_framing` classifies what the JD is afraid of: nothing, operational failure (outages, SLOs), or compliance/stakeholder-trust failure. **Coded on the full analytical cohort (n=527)** — see §9.3.

| loss_aversion_framing | n | % (n=527) |
|-----------------------|---|---|
| moderate | 310 | 59% |
| none | 112 | 21% |
| high | 105 | 20% |

Roughly four in five JDs carry some fear signal, but it's still predominantly operational (59%), not the compliance/AI-trust framing the dbt 2026 report leads with (71% citing fear of hallucinated outputs). `high` loss-aversion framing holds at 20%, unchanged from n=502. `loss_aversion_framing × domain_risk` is the strongest relationship among these three dimensions (χ²=166.85, p<0.0001, V=0.40, n=527, essentially unchanged from n=502): of JDs with `high` loss-aversion framing, 74% are `high`-domain-risk, vs. 8% of `moderate`-risk and 0% of `low`-risk roles carrying `high` framing — the fear register tracks real domain stakes closely, which is reassuring for the codebook's construct validity on this dimension. `high` loss-aversion framing remains concentrated in finance-adjacent and regulated-sector roles; APAC's own `high` rate remains below the corpus average, consistent with prior readings (§9.5).

**Actionable read:** `high` → lead with risk-reduction proof (zero-incident records, audit trails). `moderate` (the majority case) → reliability metrics (uptime, incident response) resonate more than feature-delivery framing. `none` → pure capability and delivery framing; risk-avoidance language will read as mismatched.

---

### 4.13 What the responsibility text itself predicts — a second, independent classification pass

Everything above classifies each JD as a whole against the ten Layer B dimensions. A separate pipeline (`analysis/responsibility_taxonomy.py`) takes a different cut of the same corpus: it parses just the responsibilities section of each JD (markdown headings, plain-text scrapes, condensed paragraph summaries, or — for JDs with no cleanly-parseable structure — an LLM-interpreted fallback, see `responsibility_bullets_llm.json`) into individual bullets, then keyword-classifies each bullet against a fixed 16-theme taxonomy (Data Modeling & Transformation, Stakeholder Collaboration, Mentorship & Leadership, AI & Agentic Workflows, and so on — full definitions and the keyword pattern behind each theme are in `analysis/responsibility_taxonomy.md`). 516 of the 585 total JDs have an archived text file and 464 of those, all in the analytical cohort, have a theme reading, extracting 3,626 bullets. Because each theme is a binary per-JD indicator, it can be crossed against any Layer B dimension as an ordinary 2×k contingency table — the question this section asks is which *specific responsibilities* go with which *behavioural traits*, not just which traits co-occur with each other (§4.9).

The most prevalent themes are Stakeholder Collaboration & Requirements (77% of parsed JDs), Data Modeling & Transformation (77%), BI & Reporting/Dashboards (68%), Data Quality & Testing (67%), and Governance & Documentation (60%). AI & Agentic Workflows sits at 31% — the sixteenth theme, added after an earlier corpus audit found the original 15-theme taxonomy had no bucket for AI-referencing responsibility bullets despite over a third of JDs containing them (see `project_responsibility_taxonomy_ai_gap` in the maintenance history); it now tracks closely with the Layer B `ai_role` dimension by construction (§ construct-overlap below).

| Theme | % of parsed JDs | Bullets |
|---|---|---|
| Stakeholder Collaboration & Requirements | 77.1% | 749 |
| Data Modeling & Transformation | 76.9% | 879 |
| BI & Reporting/Dashboards | 68.4% | 749 |
| Data Quality & Testing | 67.1% | 588 |
| Governance & Documentation | 59.9% | 480 |
| Pipeline Engineering & Orchestration | 58.5% | 440 |
| Data Infrastructure & Warehouse Ops | 52.3% | 426 |
| Business Analysis & Insight Generation | 51.4% | 467 |
| Architecture & Platform Strategy | 49.0% | 386 |
| Performance & Cost Optimization | 47.3% | 358 |
| Self-Service Enablement & Data Literacy | 33.9% | 226 |
| Data Ownership (end-to-end) | 32.2% | 215 |
| AI & Agentic Workflows | 30.6% | 228 |
| Mentorship & Leadership | 13.4% | 80 |
| Security, Privacy & Risk | 13.0% | 82 |
| Vendor & Tooling Evaluation | 3.3% | 19 |

**The auto-correlation risk, and how it's handled.** Several theme/dimension pairs are excluded from the findings below because they're circular, not because they're weak — the theme's regex keywords and the dimension's own LLM coding rubric detect the same textual signal. The single strongest pairing in the entire sweep, "AI & Agentic Workflows" vs. `ai_role` (V=0.62), is excluded on exactly this basis, followed closely by "Data Quality & Testing" vs. `testing_framing` (V=0.44): `testing_framing` is coded by looking for testing/quality language in the JD, so crossing it against a theme built from testing/quality keywords mostly measures whether two classification methods agree with each other. The same logic excludes "Security, Privacy & Risk" vs. `loss_aversion_framing` (V=0.33) and `domain_risk` (V=0.17), "Data Ownership" vs. `autonomy_level` (V=0.28, whose own rubric lists "own" as a strategic-verb signal), "Data Modeling & Transformation" vs. `has_dbt` (V=0.28), and "BI & Reporting/Dashboards" vs. tool flags whose name is literally embedded in that theme's regex (`has_power_bi` V=0.19, `has_looker` V=0.13, `has_tableau` V=0.09). See `OVERLAP_PAIRS` in `responsibility_taxonomy.py` for the full list.

**Two relationships survive that screen at p<0.01 with no keyword overlap and a reasonable effect size, and are reported here — with different levels of confidence:**

1. **Mentorship & Leadership × `autonomy_level` (χ²=23.61, p<0.0001, V=0.23, n=464) — the one relationship in this section that received an actual confounder check, and passed it.** Mentorship/leadership language climbs from 6% of execution-coded JDs to 11% mixed to 25% strategic. Because `autonomy_level` and seniority title are themselves correlated (§4.5), this could just be seniority in disguise — so it was re-tested within seniority strata specifically: **within "Mid" titles alone**, the gradient is 2%→7%→10% (execution→mixed→strategic, noisy at these cell sizes); **within "Senior" titles alone**, it's 13%→15%→23%. The gradient is directionally consistent within the senior stratum specifically; the mid stratum is noisier at this n, so read the within-seniority claim as suggestive rather than as clean as the unstratified figure implies. This is essentially unchanged from the n=465 reading (χ²=21.04, V=0.21).
2. **Data Infrastructure & Warehouse Ops × `jd_authorship` (χ²=20.39, p<0.0001, V=0.21, n=464) — clean-screen only, not independently confounder-checked.** Hiring-manager-authored JDs name warehouse/infrastructure responsibilities at 56% vs. 14% for recruiter-authored — a considerably wider gap than authorship's already-known link to whether dbt is merely named (§4.6, §4.9 Finding G). Directionally consistent with the revealed-preference logic elsewhere in this document (naming a platform's actual cost/governance responsibilities requires knowing the team's real infrastructure problem, not just its tool list), but this specific pairing has not been re-tested against a plausible confounder the way (1) was. Essentially unchanged from the n=465 reading (χ²=22.63, V=0.22).

**Self-Service Enablement & Data Literacy × `data_team_maturity` still does not clear the p<0.01 screen and is not featured**, consistent with its status at every recent snapshot since it first fell short.

**A relationship that looked real and didn't survive scrutiny — kept as a worked example, not dropped:** `Architecture & Platform Strategy × work_arrangement` at one point cleared the p<0.01 screen and on its own read as a headline — "remote roles carry less architectural scope." A taxonomy audit corrected several loose keywords in this theme, and the pairing **still does not clear the screen at current corpus size** (χ²=4.57, p=0.21, V=0.10, n=464; overall: hybrid 53%, remote 45%, onsite 37%, not_stated 44%) — it was never a stratification failure story to begin with; it was a keyword-precision artifact of the looser pre-audit pattern, and it remains a null after the fix. The stratification breakdown is kept below as a worked example of *why* a stratification check matters, but the more direct lesson from this specific relationship turned out to be about pattern precision, not confounding:

- Within `data_team_maturity=early`: hybrid 41% (n=32); remote 27% (n=11); onsite 36% (n=14); not_stated 53% (n=19)
- Within `data_team_maturity=mid`: hybrid 50% (n=125); remote 48% (n=31); onsite 36% (n=11); not_stated 38% (n=98)
- Within `data_team_maturity=mature`: hybrid 63% (n=62); remote 60% (n=5); onsite 40% (n=5); not_stated 53% (n=51)

Split by maturity tier, `remote` is not consistently the lowest group — `not_stated` is the consistently-lowest group in every tier instead, and several strata have single-digit cell counts for `remote`/`onsite`, which makes any reading of this pairing mostly noise rather than signal, unstratified or not.

**Why this pairing was checked and the others weren't, and what that means for reading them:** the architecture/work-arrangement check was run first, specifically because "remote work correlates with less architectural ownership" was the kind of clean, quotable claim that warranted scrutiny before being written up — and it failed, twice over (once on stratification, then again on keyword precision once the taxonomy was audited). That's informative about the corpus and the method generally: a p<0.01, no-keyword-overlap screen alone is not sufficient here, and it isn't even stable across a keyword-pattern correction that didn't touch the underlying JD text at all — only the regex used to read it. Relationship (2) above has only cleared that screen, not a stratification check; relationship (1) is the only one confounder-checked. Treat (1) as confounder-checked, (2) as "survived the screen, unstratified," and treat any theme-based finding in this section as provisional against future taxonomy-precision fixes, not just against future data.

**How this section could be wrong, more broadly:**

- **Multiple comparisons.** The full sweep tests all 16 themes against every coded dimension (304 pairs) with no Bonferroni or FDR correction. At p<0.01 across that many tests, some number of the "clean" pairs are expected false positives by chance alone — this is exactly the failure mode the debunked architecture pairing demonstrates directly, not hypothetically.
- **Post-hoc selection.** The featured relationships were chosen *after* seeing effect sizes, then (in one case) checked — not pre-registered, unlike §4.0's two predictions. This is the "garden of forking paths" pattern this document otherwise tries to avoid (§4.0); it's disclosed rather than hidden here because the theme classification itself is a newer, more exploratory layer on top of the pre-registered Layer B analysis.
- **Two independent classification methods, two independent error rates.** Every relationship compounds the regex theme-classifier's error rate with whatever error rate the paired Layer B dimension's LLM coding carries — `jd_authorship` specifically has the lowest self-consistency of any dimension in the codebook (0.58, §3), so relationship (2) above should be read with that additional caveat.
- **Cross-sectional text, not causal evidence.** Every relationship here is a same-JD language co-occurrence, not a causal claim — "mentorship language correlates with strategic-autonomy language" says nothing about which drives which, or whether both are downstream of an uncoded third factor (company size, funding stage, sector) this corpus can't check.
- **The stratification checks are not exhaustive.** Surviving one plausible confounder (seniority, for relationship 1) doesn't rule out others not tested. Company size and sector are not coded dimensions in this corpus.
- **Regex keyword precision is a demonstrated source of drift in its own right, distinct from sample-size drift.** The Architecture/work_arrangement finding above moved once already because the *classifier* was corrected, not because new JDs were added — a reminder that every number in this section is a function of `responsibility_taxonomy.py`'s current keyword patterns as much as of the underlying text, and is expected to keep moving as that classifier is refined, independent of corpus growth.

Full theme definitions, all 304 tested pairs, the complete construct-overlap table, and this same write-up regenerated fresh on every corpus update live in `analysis/responsibility_taxonomy.md` (`python3 analysis/responsibility_taxonomy.py` to reproduce). This section was reconciled against that file's 2026-08-22 regeneration, run against the audited corpus (§9.15) — both featured relationships and the debunked example held essentially flat through the audit's ~30 record re-classifications.

---

## 5. What the survey claims vs. what JDs show

| dbt 2026 claim | JD evidence (n=527 analytical cohort) | Assessment |
|----------------|-------------|------------|
| 83% prioritise data trust | 68% rigour-oriented; testing framing coded on full cohort (n=527, 63% responsibility framing) | Confirmed at the orientation level and at the testing-accountability level; rigour share holds flat against n=502 (68%→68%, §4.1) |
| 72% use AI in coding workflows daily | 63% of JDs (n=527, full coverage) expect no AI skill; 15% name AI coding tools directly (`ai_user`) | Gap persists, essentially unchanged from the n=502 reading (65%/15%) — Prediction 2 (§4.0), first half still holds, second half (structural concentration) remains non-significant |
| AI adoption outpacing governance (72% vs. 24%) | Governance accountability (63% of n=527 full cohort); AI hiring signal 37% (`ai_enabler`+`ai_user`) | The JD evidence still suggests governance accountability further institutionalised than AI hiring criteria, and the ratio has held stable |
| Fear of hallucinated outputs (71%) | `loss_aversion_framing = high` is 20% of n=527 full cohort; 59% report operational reliability concerns | Not confirmed — dominant fear is still operational reliability, not AI-trust hallucination; both figures essentially unchanged from the n=502 reading |
| Rigour framing tracks risk/stakes | χ²=25.02, p<0.0001, V=0.16 (§4.0/§4.2, Prediction 1) — stable at n=510 AE/BI | Confirmed for `domain_risk`; the `has_dbt` comparator that previously ran alongside it (§4.0) also remains significant at a comparable effect size (p=0.0084, V=0.14) — rigour tracks risk somewhat more strongly than tool adoption, but the two are no longer cleanly separated by significance |
| dbt is the field standard | 64% of AE/BI JDs mention dbt (n=510) | Real but not universal; roughly one in three AE/BI roles run dbt-free stacks; stable across fourteen consecutive snapshots, including in the APAC subset specifically (§9.5) |

**The governance-vs-AI gap inverts the dbt narrative's emphasis**, though both halves are visible in the data: dbt 2026 frames the central tension as AI adoption outrunning governance readiness. The JD evidence shows governance accountability further along toward institutionalisation (63% of coded roles) than AI hiring criteria (37% combined `ai_enabler`+`ai_user`). Whether that reflects genuine institutional maturity in analytics engineering specifically, or simply that governance is an older, more diffused fashion than AI-assisted coding, the data doesn't resolve — but the dbt framing of governance as the deficit side of the gap is not what employer hiring language shows.

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

**Current state: all three dimensions are coded on the full analytical cohort (n=527, including all JDs added since the fix, surviving both 2026-07-25 dedup passes, every subsequent expansion through 2026-08-18, and the 2026-08-22 audit's re-classifications, §9.9–§9.15)**, with consistent `evidence.{dim}` (quote) + `evidence.{dim}_explanation` (reasoning) entries on every record, and no legacy-format duplication. Findings in §4.10–4.12 and Prediction 2 (§4.0) are stated against the full current n, not a small coded subset — this changed several conclusions materially when the fix first landed at n=272 (§4.0, §4.10), and the corpus has grown, been deduplicated twice, grown again multiple times, and been audited and corrected since without disturbing that fix.

### 9.4 What n=527 supports

At n=527, the margin of error on a single proportion is approximately ±4.0pp at 95% confidence (Wilson interval, evaluated at the §4.1 rigour proportion — very slightly tighter in decimal terms than the n=502 reading, 3.97pp vs. 4.07pp, not enough to change how any percentage in this document should be read) — the 68% rigour finding (§4.1) is defensible as "likely between 64% and 72%," not as a precise market figure. Cross-tabs with cell sizes below ~15 (junior seniority, pure velocity, low domain-risk in some cross-tabs) are illustrative, not evidential, and are flagged as such at each occurrence above. The corpus additions from the n=123 baseline through n=527 provided meaningful confidence-interval tightening and, along the way, flipped several relationships across the significance threshold in both directions (§4.0, §4.9 document each one as it happened). The 2026-08-22 audit (§9.15) grew the analytical cohort from 502 to 527 — a net addition even though the total corpus shrank slightly (586→585) — while materially re-classifying roughly 30 existing records; every headline distribution held within a point or two of the n=502 reading despite that churn: rigour held at 68% (§4.1), `has_dbt` held at 64% (§4.8), and `ai_role=none` moved from 65% to 63% (§4.10), within the range prior batches have produced. The relationships that tested null at n=502 — `domain_risk × greenfield_vs_fix`, `ai_role × stakeholder_orientation` — remain null at n=527; `geo_region (APAC) × jd_authorship`, significant at n=502 (p=0.045), reads short of p<0.05 this revision (p=0.092) and its effect size (V=0.10) now sits at the floor used elsewhere on this page — restated plainly as a current null (§4.9 Finding G). `stakeholder_orientation × autonomy_level`, a null at n=502 (p=0.125), crosses into significance this revision (p=0.035, V=0.13) — written up fresh as Finding E rather than as a "recovery." `velocity_vs_rigour × has_dbt`, which first crossed p<0.05 at n=427, remains significant at n=510 at essentially the same margin (p=0.0084, V=0.14, was p=0.0096, V=0.14) — a small effect that has now held across four consecutive corpus snapshots. Pattern stability continues to hold for the strongest relationships (maturity × mission, domain_risk × stakeholder, domain_risk × rigour) across every snapshot from n=123 to n=527, including through the audit's re-classifications.

### 9.5 What the geographic concentration means, and what the APAC stratum shows

This remains a primarily European, Berlin-heavy dataset. The APAC stratum, built by a deliberate scraping pass in late July and reinforced by subsequent batches (§9.8, §9.9, §9.14), holds at **79 roles (15% of the analytical cohort)** — up from 74 at the last snapshot, and remains the largest single geographic bucket in the corpus, ahead of UK/remote — still large enough to run a direct APAC-vs-rest-of-corpus comparison rather than only disclaiming the gap, as earlier snapshots of this document had to.

**Most substantive dimensions still track closely; the picture on which comparisons are formally significant shifted this revision.** Domain risk (63% moderate vs. 68%), data team maturity (49% mid vs. 59%), dbt prevalence (62% vs. 64%), and `testing_framing` mix (62% responsibility vs. 63%) all sit within a normal range of the non-APAC corpus. Rigour orientation runs close to the rest of the corpus this revision (67% vs. 68%) — a narrower gap than prior snapshots showed. `loss_aversion_framing = high` also sits close to the rest of the corpus (20% vs. 20%). None of the risk/maturity/dbt/testing/rigour/loss-aversion comparisons are statistically distinguishable at this n.

**One dimension that was significant at the last snapshot now reads as a tested null; one remains significant:**

| Dimension | APAC (n=79) | Rest of corpus (n=448) | Test |
|---|---|---|---|
| `jd_authorship = hiring_manager` | 86% | 75% | χ²=4.78, p=0.092, V=0.10 |
| `work_arrangement` (full 4-category: hybrid/not_stated/onsite/remote) | 33% / 51% / 13% / 4% | 52% / 33% / 6% / 10% | χ²=18.70, p=0.0003, V=0.19 |

The `jd_authorship` gap reads short of p<0.05 this revision (was p=0.045 at n=502) — the point estimate barely moved (86% vs. 75%, close to the prior 87%/73%) and the direction is unchanged, but the effect size (V=0.10) sits right at the floor used elsewhere on this page and the test itself no longer clears the conventional threshold. `jd_authorship`'s LLM self-consistency is the lowest of any dimension in the codebook (0.58, §3), so part of this gap could be a codebook-boundary artefact interacting with how APAC postings happen to be formatted (many sourced via LinkedIn/company career pages with detailed technical bullet lists, which the heuristic may read as "hiring-manager-authored" regardless of who actually wrote them) rather than a real difference in who authors these JDs — and the test has crossed the conventional threshold in both directions across earlier snapshots, which is itself a reason for caution about leaning on it either way. The work-arrangement picture continues to differ in kind, not just degree: APAC's not-stated rate (51% vs. 33%) is the same direction as every prior snapshot, and APAC continues to carry a distinctly higher onsite share (26% vs. 8%) among stated arrangements, with the hybrid gap holding at roughly the same margin as the last snapshot (67% vs. 77%). Among APAC roles that do state an arrangement, hybrid still dominates numerically but the onsite share stands out against the rest of the corpus.

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

§9.5 tests APAC against "the rest of the corpus" — a framing that was reasonable when APAC was the only non-European stratum large enough to test, but which folds the `nyc_metro` cluster into the European comparison group by default. Once NYC is split out as its own arm, three regions are jointly comparable: **Europe (n=354), APAC (n=79), NYC metro (n=36)** — 469 of the 527-record analytical cohort with a usable macro-region (`global_remote` and `other` excluded as incoherent geographies). A chi-square sweep of all thirteen categorical Layer B dimensions against this 3-way split found six that clear p<0.05: `velocity_vs_rigour` (p=0.0002, V=0.15), `data_team_maturity` (p=0.0071, V=0.12), `jd_authorship` (p=0.046, V=0.10), `work_arrangement` (p<0.0001, V=0.17), `language_gate_type` (p<0.0001, **V=0.22 — the largest effect size of any relationship tested against region in this document**, larger than either of §9.5's headline findings), and — newly, this revision — `domain_risk` (p=0.035, V=0.11) and `stakeholder_orientation` (p=0.045, V=0.13), both of which read as nulls at the prior snapshot. `autonomy_level`, `ai_role`, `testing_framing`, and `loss_aversion_framing` show no significant regional difference — worth stating positively, not just as an absence: a job seeker's read on genuine ownership and AI expectations should generalise across these three regions in this dataset; their read on rigour-language, risk composition, stakeholder mix, language gates, and salary disclosure should not.

**One confound check behind the findings below needs restating this revision.** `domain_risk` composition is no longer flat across the three regions — it now itself clears p<0.05 (above), stepping up from Europe (24.0% high) to APAC (34.2%) to NYC (41.7%). This means the `velocity_vs_rigour` and `stakeholder_orientation` regional gaps below can no longer be read as cleanly separated from a risk-composition difference the way the prior snapshot's flat-risk confound check allowed; both are still worth reporting, but as regional differences that co-occur with a real risk gradient, not ones proven independent of it. The NYC cluster itself remains not one loud employer or one ATS's house style: 36 roles span 33 distinct companies (only Current, DoorDash, and New York Life repeat, each twice), and its ATS mix (Greenhouse 14, Ashby 7, LinkedIn 6, unknown 6, Workday 3) doesn't concentrate the way a single-source artifact would. n=36 is still thin, so NYC percentages here should be read as directional, not precise — but they are not obviously an artifact of collection method.

**`language_gate_type` is the standout finding this section adds.** Hard language requirements (fluency/C1-C2 gates): Europe 29.9%, APAC 7.6%, NYC 0%. Adding soft gates, Europe reaches 39.0% versus APAC's 8.9% and NYC's 0%. This is almost certainly a genuine market feature — client-facing analytics roles across DACH/Benelux/France routinely gate on the local language, with no real equivalent in an English-default APAC or US hiring market — and it is the single most actionable "know before you apply" fact a non-European candidate in this corpus could act on. This dimension isn't surfaced in the seeker-mode hygiene card in `index.html` either (that card reports a single blended `hardLangPct` across all regions, currently ~useless for a candidate targeting a specific market — see the cross-reference note below).

**`velocity_vs_rigour` drops step-wise Europe → APAC → NYC.** `rigour`-coded: Europe 72.0%, APAC 67.1%, NYC 44.4%. Reading the NYC records by hand: the velocity-coded roles cluster in genuinely earlier-stage consumer fintech/proptech, while the rigour-coded ones are the regulated-finance names (Current, Gemini, New York Life, Neuberger Berman) — so this isn't simply "NYC roles are less rigorous," it's that NYC JDs are more willing to name velocity plainly when that's the honest framing for an early-stage company, whereas the European corpus defaults to rigour-coded vocabulary even for comparable-risk, non-regulated work. But per the confound note above, some of this step-down now plausibly tracks the region-level risk gradient rather than being a pure framing/dialect effect independent of risk — the two can no longer be cleanly separated at this n. Practically: a `rigour` classification from a European JD is still weaker evidence of genuinely elevated stakes than the same classification from a US JD, but the size of that gap should be read with the risk-composition caveat attached. (A calibration note on this dialect effect already lives in `.claude/skills/classify-jd/SKILL.md`'s `velocity_vs_rigour` section.)

**`jd_authorship` and `work_arrangement` continue to differ by region once NYC is added as a third point of comparison, but `jd_authorship`'s three-way test now only barely clears significance and the likely driver remains company profile, not region per se.** `hiring_manager`-authored: Europe 72.9%, APAC 86.1%, NYC 88.9% (χ²=9.68, p=0.046, V=0.10 — down from the prior snapshot's p=0.021, V=0.11, and consistent with §4.9/§9.5's two-way APAC-vs-rest test for the same dimension no longer clearing p<0.05 either). Both the APAC and NYC batches skew toward either large established single-market employers or well-funded technically sophisticated startups — segments where the req owner is also the JD author — while the European sample carries a longer mid-market/agency tail. Treat this as a company-size/maturity effect that correlates with region in this corpus's specific sampling, not a claim that APAC or NYC hiring managers inherently write better JDs, and treat the three-way test itself as marginal rather than robust this revision. `work_arrangement`: APAC is both the most silent (50.6% `not_stated` vs. Europe 33.3%, NYC 30.6%) and, where stated, the most onsite-leaning (12.7% onsite vs. Europe 4.8%); NYC splits close to Europe on hybrid (50.0% vs. 56.2%) but shows zero fully-remote share alongside a notably higher onsite share (19.4%), worth flagging even at this n. The seeker-mode hygiene card's current blanket advice ("don't read silence as onsite by default, ask directly") is better calibrated for Europe than for APAC, where silence does correlate with a real onsite lean.

**`stakeholder_orientation`'s regional shift crosses into significance this revision.** `mixed` orientation rises outside Europe (Europe 15.5% → APAC 27.8% → NYC 33.3%), with `internal_data`-primary framing falling correspondingly (52.8% → 44.3% → 27.8%), and the three-way test itself now clears p<0.05 (p=0.045, V=0.13) — a small effect, and one that per the confound note above co-occurs with a region-level risk-composition gradient rather than being demonstrably independent of it. This may be a genuine structural difference in how the analytics function sits in APAC/NYC organisations, or it may partly be a classifier mechanical effect — `mixed` is the catch-all when a JD names two functions with genuinely equal weight, and the same larger/more-mature companies driving the authorship finding above may simply name more stakeholder groups by virtue of size, independent of any real orientation shift. Worth re-checking once NYC's n grows further and, ideally, alongside a domain_risk-stratified cut once the cells support it.

**Salary disclosure: the sharpest single number in this section, and it should not be read as a market-culture finding.** Salary stated: Europe 21.8% (77/354), APAC 2.5% (2/79), NYC metro 86.1% (31/36). The NYC figure is very likely a **legal-regime effect**, not an employer-culture one — New York's pay transparency law requires a posted range, and the number reflects that law doing exactly what it was designed to do, not that NYC employers are more forthcoming by disposition. `index.html`'s current seeker hygiene card blends all regions into one `salaryPct` figure — that single blended number actively misleads in both directions: a US job seeker outside a pay-transparency jurisdiction would over-trust the disclosure norm, and an APAC job seeker (2.5%!) would be right to essentially never expect a stated range regardless of company quality.

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

**Net corpus impact:** 586 total records before the audit → **585 after** (net −1, from the one fabricated-record deletion and two orphaned-directory deletions netting against no additions). The analytical cohort stands at **527**, up from the 502 last reported — this reflects both the audit's corrections and reconciliation of `data.json` against records added to `data/` since the 2026-08-18 batch was last folded into this report. `analysis/data.json` and `analysis/responsibility_taxonomy.py`'s outputs were regenerated fresh against the corrected corpus before any statistic in this revision was computed (`scripts/regenerate_report.py`, then `python3 analysis/responsibility_taxonomy.py`) — every table and test in §4 and §9.13 above reflects the post-audit corpus, not a patch applied on top of stale numbers. The audit work itself was carried out as a batch of background re-classification agents working from the `classify-jd` skill's raw-HTML extraction standard, the same standard every other record in this corpus is held to.

**What this means for reading this document going forward.** The paraphrased-archive pattern is now a confirmed-bad extraction failure mode, not a hypothetical one — worth actively checking for in future batches, particularly ones classified via WebFetch-adjacent tooling rather than direct HTML capture. Any dimension described elsewhere in this document as "essentially unchanged" across this audit genuinely is — the aggregate percentages moved by at most a percentage point or two on most tables (§4.1–§4.12), and no previously-significant relationship's *demotion* (§4.9 Findings E, G) should be attributed to this audit specifically; those movements are consistent with ordinary sample-composition churn at this scale, not a symptom of the paraphrase-archive problem being corrected. The corrections here are about record-level fidelity, not a systematic bias in one direction across the corpus.

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
