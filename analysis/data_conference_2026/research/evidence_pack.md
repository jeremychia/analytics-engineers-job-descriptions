# Evidence pack for the talk "for the people" (compiled 2026-10-26)

Corpus: 1,125–1,136 analytics-engineering job ads scraped Apr–Oct 2026 from LinkedIn and employer pages (mostly Europe, then US/UK/APAC). Folder dates are scrape dates. Known artefacts: July archives shorter/truncated; collection sweep changed 2026-10-05; Amazon batch (~24 ads); 82 reposts removed; seniority and many dimensions are LLM-classifier labels.

## Speaker's storyline (the brief)
When I looked at analytics engineering job descriptions I wanted to know: what do they look like; how similar are they; are there generic titles and generic responsibilities; red flags and how to read between the lines (e.g. what a stack implies, inferred from evidence in other ads); how much AI is required and how that language develops (leading or lagging indicator; NOT whether AI wrote the ad); for juniors: do roles exist, what skills, education, gates; quantify things known only anecdotally; show things people don't otherwise see; deliver a talk for the people. Wants challenge and critique, comparison with what is out there, impressive visuals.

## A. How similar are ads? (role text only: duties + requirements; benefits/culture/legal removed)
- Two ads from different companies: mean similarity 0.04; same company 0.22; typical ad's nearest stranger 0.13; only ~2.4% of ads have a different-company partner at >=0.30.
- 0.95% of duty/requirement sentences (>=6 words) appear word for word in another company's ad.
- Real copying families: Amazon/Prime Video/AWS (24 ads; one qualifications checklist, up to 18 identical lines), DoorDash + DoorDash India (12 identical lines), Woolworths + Cartology (6), act digital + Irium (Lisbon consultancies, 4 identical duty lines), NBA (2). Benefits-only overlaps (Nord/Saily etc.) vanish when benefits are excluded.
- 82 of ~1,207 scraped ads (6.7%) were relistings/recruiter copies; 5.9% of kept ads are relisted once or more.

## B. Titles and duties (data-flags agent; 942 English ads; 323 tests, BH-corrected; company-clustered CIs)
- 534 distinct title strings (~290 after stripping suffixes). 78% are AE-titled, 16% BI-titled.
- Duties are near-identical across titles: among AE-titled ads 88% list reporting/dashboard duties, 85% pipelines, 96% modelling. BI-titled: 98% reporting duties, but only 14% name dbt (vs 70% of AE ads).
- Five types of AE-titled ad (k-means on duty shares, n=721): BI developer 154 (43% BI duties, 56% Power BI), analyst 69, classic dbt modeller 189 (90% dbt), quality & governance modeller 158 (75% dbt, 57% senior+), data-engineer-like 151 (81% Python, 6.8 tools). Only ~40% match the dbt-modeller picture. Descriptive, not validated.
- Stock bullets (share of ads): SQL 89%, stakeholder collaboration 67%, data quality 58%, documentation 57%, dashboards/reports 56%, best practices 55%.
- Surviving "if you see X, expect Y" rules (adjusted pp differences, 95% CI): Power BI/Fabric stack (38% of ads): strategic autonomy -14.8pp (-20.9,-9.7), dbt -24pp, greenfield -7pp. No documentation in duties (43%): no git/CI -22.6pp, no dbt -19pp. No testing/quality language (19%): no git/CI -21pp. Kitchen-sink (>=9 tools, 13%): more pipeline duties, NOT seniority/autonomy/pay. Startup/scale-up wording (14%): dbt +22.5pp, wider collaboration. A "what success looks like" section (5%, n=46): strategic autonomy +23pp (weak).
- Failed: "fast-paced", "self-starter", "wear many hats" (6 ads), unicorn ads (bundling), pay-not-disclosed, no named stakeholders, years-vs-seniority mismatch (n=52, 7 senior ads asking <=2 yrs).
- Earlier finding: Power BI/Fabric ads vs dbt+warehouse ads: strategic autonomy 18% vs 43%, execution 40% vs 19%; odds of strategic 0.30x (0.15-0.48) after controls; BI & reporting 16.7% vs 8.1% of duties; no detectable difference in seniority (p=0.23) or rigour framing (p=0.5). Framing: same level, same rigour, different scope.
- Caveat: associations in what ads say; outcomes partly classifier labels; absence rules partly reflect terse ads; regexes English-only.

## C. AI in ads (AI agent; 941 English ads; hand-validated on 60 ads: presence 98%, primary category 80%)
- 46% [43,49] of ads ask for role-relevant AI (10% mention AI only in company text; 4% have AI-in-hiring boilerplate, excluded).
- 26% put it in a required section, 17% nice-to-have, 33% in duties. USE AI tools 31%, BUILD AI 22%, PREP data for AI 12%, generic 16% (sub-type shares +/-5pp).
- 59% of AI asks name a tool or concrete task; 41% vague ("Curiosity to leverage AI to accelerate workflows", Aritzia; "Experience with AI would be advantageous", Experian). Concrete: "Active use of AI code assistant tools, preferably GitHub Copilot, Cursor, or Claude Code, in daily development practice" (LC Waikiki).
- 31% of ads with required AI have no AI duty anywhere. Only 35% of tool asks name review/validation in the same sentence (57% within a sentence).
- By group (share with role AI): dbt 53%, Power BI/Fabric 34%; junior 32%, senior 49%, staff 64%; DACH 37%, N. America 55%; DE vs AE no difference; consultancies no difference.
- Trend: NONE detectable. Aug/Sep/Oct role-AI share 48/48/50% (CIs ~[40,56]); logistic OR per 30 days 1.10 [0.92,1.32]. The earlier naive 37%->47% rise was a length/collection artefact. Do not quote.
- New vocabulary (corpus-wide counts; Aug-Oct share): agentic 94 (9.3%), Claude Code 44 (4.2%; 40 of 44 are dbt ads), Cursor 29, MCP 22, RAG 20, evals 6, context engineering 7, prompt engineering 7, human in the loop 5, agent skills/subagents 3, vibe coding 2 (late arrivals, very rare).
- Leading/lagging: ads cannot show whether work happens; 41% vague + 31% "required with no duty" hints ad language runs ahead of described work (inference). Practitioner use (dbt Labs survey, n=363, vendor: 72% prioritise AI-assisted coding) is far above the ~2.5-6% of ALL postings mentioning AI (Lightcast/Indeed) — for data & analytics roles Indeed's tracker says ~45%. Nobody has tested ad language vs measured adoption.

## D. Juniors (junior agent; 1,136 records; exact/clustered CIs)
- Availability: D1 classifier seniority=junior 50 ads (4.4% [3.3,5.8]); title-regex only 16 (1.4%); incl. explicit early-career text 60 (5.3%); incl. mid-titled ads with stated minimum <=2 years 117 (10.3%) — a loose upper bound. 36 of 50 junior ads have no junior word in the title (classifier read the text).
- Regions (D1/D3; tiny cells): Benelux 8.0/15.9, S. Europe 7.8/17.1, France 4.1/18.9, APAC 5.1/11.5, UK&IE 3.4/7.4, N. America 3.4/8.1, DACH 2.4/4.9, Nordics 2.9/7.4. Dutch-language ads 12.9% D1. Consultancies 10.5%; tech/SaaS 2.0%.
- Minimum viable junior profile (share of junior ads vs mid): SQL 88/94, stakeholder communication 92/86, data modelling 74/74, Python 64/64, data quality/testing 62/59, dbt 52/56, any BI tool 72/66 (Power BI 52/39), Snowflake 52/36, Git 46/37, AI/LLM mention 42/51, Airflow 20/31, CI/CD 12/23, Terraform 2/5, Kafka 2/4. Juniors are asked for less orchestration/CI, not fewer core tools.
- Education: degree stated for 60% of junior ads vs 34% of mid (+26pp [11,40]); 'or equivalent experience' in 28% of degree-stating junior ads. Fields named: CS/IT, engineering, maths/stats, economics/business, data science. Certifications named: 0 of 50 junior ads. Bootcamp: 3 junior ads, 0 of 986 others.
- Gates among juniors: degree 60%, stated 2+ years experience 26% (vs 45% mid), hard non-English language 16% (Dutch 5, English 4...), portfolio/personal project wording 18% (vs 6%), onsite-only 10%, visa wording 4%, clearance 0%. 20 of 50 junior ads have at least one hard gate (2+ years, language, visa, clearance). Pay stated in only 9 of 50 junior ads.
- Contradictions ("junior" that isn't): Accenture Lisbon "Early Career" asks "Minimum of 3+ years"; Dataroots 'junior' slug asks 3+ years; Enhance says Junior but "2-5 years in analytics, BI or data engineering. Strong internships or graduate projects count." 10 more junior-classified ads ask exactly 2 years.
- Quotes: Intelligent Lending "ideal for someone early in their career (a recent graduate, up to ~2 years' experience)"; QL Resources "Open to fresh graduates and candidates with up to 2 years' experience"; Glovo "This is an entry-level role for someone who wants to grow in Analytics Engineering while developing strong foundations in AI-enabled data work."
- Cannot tell: hiring rates, applicants per role, whether juniors were hired, ghost/evergreen share.

## E. Other earlier findings from the corpus
- 18.7% [14.6,22.8] of EU English-language ads require another language (UK/US 0%; Portugal/Spain/France ~40%); hard gates 11.7%.
- Pay stated: US 79.6%, UK 22.6%, EU 18.0%; after 7 Jun 2026 EU deadline OR 0.78 [0.47,1.31] (scrape dates, not posting dates).
- Asked-for years match title: mid ~3 (49% of mid ads stating years say exactly 3), senior 5 (49% exactly 5); only 4% of mid ads ask 5+; lead/manager 5.1 vs senior 4.7; only 56% of ads state years.
- Keyword pass bug story (data-quality themes): French ads 40% vs English 79% with DQ language before fixing English-only patterns; 100% of French ads matched some theme; segment error 31 points vs 1.5 whole corpus; the fix = add French terms; non-English ads (16% of corpus) still match fewer themes (en 87% of bullets tagged; fr 60%, de 58%, nl 47%).
- AI-written score of ads: flat; speaker says this is "meaningless", drop it from the talk.

## F. External evidence (agent research; many snippet-only — verify before slides)
- Stanford Digital Economy Lab (Brynjolfsson et al., rev. 12 Aug 2026, fetched): employment of 22–25-year-olds in AI-exposed jobs 19% below trend; experienced workers no gap; "descriptive, not causal".
- Indeed Hiring Lab (7 May 2026, fetched): share of postings with pay (Mar 2026): UK 56%, NL 48%, FR 43%, IE 39%, IT 36%, ES 17%, DE 12%. Euronews 8 Sep 2026: Italy 35%->61% Jan->Jul after transposition. WageIndicator 30 Jun 2026: only 4 of 27 member states transposed by the deadline.
- Indeed Hiring Lab AI Tracker (22 Jan 2026, fetched): AI in 4.2% of US postings Dec 2025; data & analytics highest ~45% (keyword dictionary includes "Machine Learning", "Data Science"). Lightcast/Stanford AI Index 2026 (fetched): 2.5% of US postings name AI skills in 2025; agentic cluster 0.06%->0.23%. Lightcast 19 Oct 2026 (fetched): AI mentions +60% in H1 2026; junior postings mention AI 1.4%, 5+ years postings 9.3%. Fed FEDS note 30 Sep 2026 (fetched): AI wage premium emerged before postings surged.
- dbt Labs State of Analytics Engineering (14 Apr 2026; vendor survey n=363): 72% prioritise AI-assisted coding, 24% AI-assisted pipeline management; says nothing on hiring. dbt blog 16 Jun 2026: governance, semantic precision, AI context are now the job (marketing).
- France: L'Essentiel de l'Éco 8 Apr 2026 (press relay of Hellowork/APEC/INSEE, not opened): French IT job offers -28% in 2025; APEC junior IT offers -19% in 2024; data engineer offers +10% in 2025; INSEE digital employment of 15–29s -7.4% Q4 2025. Numeum's Torner (Blog du Modérateur 4 Jun 2026, fetched): "nous sommes loin de la job apocalypse"; firms will want more experienced hires. 
- Harvard Business School/Burning Glass (Feb 2024, fetched): "not even 1 in 700 hires" benefited from dropped degree requirements; ~45% of firms changed postings only.
- Indeed Hiring Lab (10 Oct 2024, fetched): share of postings saying local language not needed: NL 7.8%, ES 5.8%, FR/IT ~4%, DE 2.4–3.4%, UK 2.8%.
- Indeed Hiring Lab (30 Jul 2025): under a third of postings state years of experience (40% in Apr 2022).
- Ghost jobs: Greenhouse via WSJ/Fortune 16 Jan 2025: 18–22% of postings per quarter never led to hiring activity (primary report not read); CRS Apr 2025: no official statistics.
- Practitioner/vendor: dbt Labs (Carroll 2019; Cohen) titles vary, duties similar; Holistics anecdote (most 'analytics engineer' search hits were analyst roles); KORE1 recruiter template says the title covers >=4 jobs. No systematic study of AE ads found; nothing testing Power BI/Fabric vs dbt as a maturity signal — the corpus would be new evidence. The '60% vs 100%' women-apply stat is not research (HP internal claim).
- Unverified: Robin Conquet quotes (DataGen #160), Blef claims (#242, #267), 'Indeed France 3.4%' (only PwC France 1.3% and +156% growth found). Blef's author co-founded nao (sells AI analytics tooling).
