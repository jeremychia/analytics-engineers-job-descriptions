# Read the ad, not the adjectives — a talk for the people

Draft 3, 26 October 2026. The deck is `jd_deck.html`: press **s** for the 5-minute version, which skips the optional builds. The French-versus-English story lives in `talk_v1_fwdc_2026_talk_plan.md` and is not part of this talk.

## The story, told as the questions I asked (5 minutes, about 750 words)

**The thread:** every question asks the same thing: *when an ad says X, what does it mean?* The answers build to one call to action. There is no shared template for an analytics engineer, so your own mix is the pitch. Lines marked **[10 min]** are for the long version only. The spoken script does not apologise for the method; limits live in the Q&A section and the evidence tables below.

**[The ad · on screen, two lines from one real ad]**
`Enhance is hiring a Junior Analytics Engineer in Dubai to help turn our data into insights…`
`2-5 years in analytics, BI or data engineering. Strong internships or graduate projects count.` *(Enhance, Dubai)*

"I started with one question. When an ad says it's hiring a junior analytics engineer, what does that mean? This one says junior. Then it asks for two to five years. The median junior ad asks for one year, but you never really know. So I read about 1,200 job ads for analytics engineers, from LinkedIn and company career pages. Each time I asked: when the ad says this, what does it mean?"

**[Question 1 · What does the title tell me?]**
"First, the title. 358 different titles on 908 ads, and they don't say much. It's almost eight years since the role was first written up, and there is still no shared definition. But there are expectations. The duties sit on a spectrum from reporting to engineering: dashboards and analysis at one end, then dbt modelling, data quality and governance, and pipelines close to data engineering at the other. The same title, 'Analytics Engineer', turns up at both ends. And SQL is asked at both ends, in 95% of ads."

**[Question 2 · Do ads borrow from each other?]**
"I expected ads to borrow from each other. Ideas cross-pollinate, and people recycle what's there. They mostly don't. Two ads from different companies are about four percent alike. About two duty bullets in a thousand are copied word for word, and half of those copies sit inside one company family: Amazon, DoorDash, two consultancies in Lisbon. No two ads are alike. Hold on to that; it matters at the end."

**[Question 3 · If the title doesn't tell me the job, what does?]**
"So what does tell you the job? The stack, for one. Take two ads at the same level. Mid-level ads that name dbt and not Power BI ask for strategic work, 'define, own, shape, lead', 27% of the time. Ads that name Power BI or Fabric and no dbt: 4%. Senior: 60% against 27%. And the title won't warn you: 15% of ads titled 'Analytics Engineer' are Power BI jobs without dbt. This isn't a ranking of tools. It's a choice. Want modelling and ownership? That's what the dbt ads ask for. Like reporting and BI? Dashboards fill twice the share of a Power BI ad. **[10 min]** The teams differ too: Power BI ads come from early-stage teams less often, and describe fixing and scaling more often."

**[Question 4 · Is the ad ahead of us, or behind?]**
"Then AI. About half the ads ask for it as part of the role, not as company marketing. Four in ten of those asks are vague: 'curiosity to leverage AI.' The concrete ones name the tool: Copilot, Cursor, Claude Code. dbt's State of Analytics Engineering survey says 72% of teams prioritise AI-assisted coding, and that is my lived experience too. The ads ask less, and more vaguely. Is it growing? In three months, no clear trend. So here's my question. Is the job ad a lagging indicator? And if it lags on AI, does it lag on everything else you live at work?"

**[10 min]** "A third of the ads that require AI describe no AI work in the duties. One tool ask in three mentions checking the output. One AI ask in four puts you on the other side: the person who gets the data ready for AI."

**[Question 5 · If I'm starting out, is there a door?]**
"That brings me to juniors, and this is the one I worry about. How do people get in? What do we expect of them? About one ad in twenty is for a junior; by title, about one in sixty. Four in ten junior ads carry a hard gate: two or more years, a language that isn't English, or a visa. Some say junior and ask for three years. In France, 11 of the 13 junior ads I found ask for a master's or an engineering school. But six in ten have no hard gate, and most ask for a year or less. Eleven say internships or projects count. If you meet the core, apply, and lead with the project."

**[Question 6 · How do I move up?]**
"Once you're in, how do you move up? The core never changes. SQL, a warehouse, tests on your data, working with stakeholders: asked at every level. So if you're starting out, don't be discouraged: the hard skills are the same. What changes is the verb. Junior ads say 'support'. Mid ads say 'own'. Senior ads add mentoring and setting standards, both about seventeen points more often than mid-level ads. Lead ads add a roadmap. The years agree: about one, three, five, six."

**[Question 7 · What can I negotiate?]**
"What can you expect, and what can you ask for? The norm depends on where you are. A US ad sells you health insurance, a pension and equity: about half the ads each. In France it's meal vouchers, a third of ads, and a pension never, because the law already gives it. Ads advertise what the law leaves out. So read the ads around you as the competition. What do they list that your offer doesn't? That's your lever. **[10 min]** And pay: 78% of US ads state it, 18% of French ads. The EU directive wants that to change."

**[Question 8 · What do I do with this?]**
"So what can you do with 1,200 ads? Six in ten have a mix of tools no other ad has. Usually it's one tool apart: the same core, and a specific tail. That tail is the point.

If you hire: read your ad again. What did you want that you didn't write down? Honest years, one concrete AI sentence, the pay, the stack.

If you want the next level: practise the next verb on the work you already do.

If you're starting out: don't be discouraged. The core is the same everywhere, and no two ads are alike, so you can be the niche. Every brilliant analytics engineer I know came from somewhere different. That background is your story. Pitch it."

**[The ad, again]**
"That ad said junior, and asked for two to five years. Read what it asks. Then answer with your own story."

---

## Tone and arc: hopeful and definitive, with care about what we paint

Aim: a field guide that reminds analytics engineers why the job matters, not a list of what is wrong with ads. Each question ends on something the audience can do or take pride in.

- **Juniors are the heart of it.** Say that you worry about them, then stay honest, not gloomy: name the gate, then the six in ten with no hard gate, then what to do.
- **The stack is a choice, not a ranking.** Pick the job you want by what fills the ad.
- **AI ends on a question, not a claim.** "Lagging indicator" is the speaker's hypothesis; the data cannot test it.
- **The close speaks to three people:** the person who hires, the person moving up, the person starting out.

What the 1,211 ads support for a hopeful close (classifier labels, all ads):
- **Care about trust is the universal.** 77% of ads lean to rigour over velocity (only 3% to velocity); 80% frame testing or data quality as a responsibility or name a tool for it, in high-, moderate- and low-risk domains alike. Reminder line: "Everyone asks for it. It is the job."
- **Stage predicts mission, but not almost deterministically.** Early-stage teams: 68% greenfield (106 of 157). Mature teams: 6% greenfield, 36% fix-and-scale, 57% mixed (n = 317). So "early-stage means you build from scratch" is a good bet; "mature means fixing" is only half-true, and most mature roles are both. Do not say "almost entirely".
- **Honest, not gloomy, on juniors:** "junior" ads ask a median of one year, and a minority ask two to five. The advice is to apply anyway and pitch specifically.

Not in the data, so not to be said as findings: the "who a role serves vs autonomy held at 120 postings and fell apart at 270" story (not reproducible from the current files), "big enterprise" for Power BI teams (there is no company-size field), and "the age of the volume application is ending" (an opinion; say it as one if at all).

## How the slides carry the "so what"

Each slide builds its point on the chart; there is no separate summary box. The finding comes first, then each reading (hopeful, cautious, practical) as a build that changes the visual, and most slides end on an open question drawn on the chart. A one-word verdict tag sits beside each claim (conclusive, suggestive, descriptive, inconclusive, untested); the test detail is in the slide footer. Outside sources appear as a comparison mark on the same chart only where the number is comparable; otherwise they are spoken or kept for Q&A. Builds marked optional are skipped in the 5-minute version.

## Statistical verdict per slide (build/stack_stats.py, build/more_stats.py)

| Slide | Test | Result | Verdict |
|---|---|---|---|
| Titles | k-means on duty shares, 100 bootstrap refits per k | 908 ads; only two groups hold up (agreement 0.81; three to six groups 0.56 to 0.67); separation weak (silhouette 0.19) | Suggestive: two ends of a spectrum, not two jobs |
| Similarity | none | different companies 4.1% alike, same company 24.1%, nearest stranger 12.6%; 22 of 9,534 duty bullets copied (2.3 in 1,000), 1.1 in 1,000 outside the families | Descriptive |
| Stack | Fisher, company-clustered bootstrap CI, Cochran-Mantel-Haenszel | mid +23 pts (CI 15 to 31), senior +33 (21 to 44), pooled OR 5.0, all p < 0.001 | Conclusive (association) |
| Stack, duties | bootstrap CI by level | dashboards and reporting: mid 21% against 10%, senior 17% against 9% of duties | Conclusive |
| Stack, team stage | Fisher | early-stage 6.8% (Power BI only) against 16.0% (dbt only), p = 0.001; fix-and-scale 38.8% against 25.3%, p < 0.001; mature 27.2% against 22.6%, p = 0.23 | Suggestive |
| AI by stack | same as stack | dbt-only 57% vs Power BI/Fabric-only 38%, +19 pts (CI 11 to 28), p < 0.001 | Conclusive |
| AI by level | same | senior 52.5% (258 of 491) vs junior 39.5% (17 of 43), +13 (CI -3 to 29), p = 0.11 | Inconclusive |
| AI over time | logistic trend | English ads, August to October: 52%, 53%, 57%; odds ratio 1.15 per 30 days (95% CI 0.96 to 1.37), p = 0.13 | Inconclusive |
| AI as a lagging indicator | none possible | survey and ads cover different people and ask different questions | Untested |
| Juniors | Wilson CI; Fisher | 2+ years 28% (18 of 64; CI 19 to 40); any hard gate 42% (27 of 64; CI 31 to 54); France master's 11 of 13 vs 1 of 51 elsewhere, p < 0.001 (selection effect) | Suggestive, n = 64 |
| Ladder | adjacent-level Fisher, Holm | strategic verbs 0% to 19% to 46% to 79%, each step p < 0.01; SQL, a warehouse, data-quality duties and stakeholder duties no detectable change; junior-to-mid dips in mentoring and "lead / drive" within noise (43 juniors) | Conclusive on the verb; null on the core |
| Benefits | chi-square across regions, Benjamini-Hochberg | 25 of 28 tags differ (q < 0.01); home-office equipment, relocation and collective agreements do not | Conclusive that regions differ |
| Close | none | 582 of 937 ads (62%) have a unique tool mix; 389 of those are one tool from another ad; the five most-named tools fit 4 ads exactly, 141 are one tool away | Descriptive |

## Method notes (1,211 ads, 26 October)

- **AI in ads:** 47% of all ads (566), 51% of English ads (n = 992) ask for role-relevant AI. 58% of those asks are concrete. 101 ads require AI and describe no AI duty. 34.5% of AI-tool asks (130 of 377) mention review or validation in the same sentence. 24% of AI asks (138 of 566) are about getting data ready for AI. Pipeline in `build/ai_flags.py` and `research/ai_pipeline/`.
- **AI trend:** including July the raw trend is significant (p = 0.003) but vanishes after adjusting for ad length, level and stack (OR 1.06, 0.94 to 1.19): ads got longer (median about 1.7k characters in April, about 5k from August). Do not claim AI is rising.
- **Titles:** 908 ads whose title names an analytics engineer, grouped by their share of six duty themes (`build/titles_stats.py`). Two groups hold up under resampling: "reporting and analysis" (362 ads; Power BI 44% against 29%) and "data quality and pipelines" (546 ads; CI/CD 37% against 21%). Each ad sits on a reporting-to-engineering axis (first principal component of the duty shares: dashboards and analysis pull one way; modelling, quality and pipelines the other). 102 and 141 ads titled exactly "Analytics Engineer" sit in each group. Say "a spectrum from reporting to engineering", never "five jobs" or "two jobs".
- **France:** 94 France-located ads (13 junior, 39 mid, 36 senior, 6 lead or above). Junior to mid: only the degree is clear. Mid to senior: same direction as English ads but intervals include zero except cross-team work. The strategic-verb share by level in France is 0 of 13, 5 of 39, 12 of 36, 5 of 6. Files: `research/ladder_france_steps.csv`, `ladder_france_counts.csv`, `ladder_france_vs_english.csv`.
- **Rebuilt measures:** the benefits tagger, the ladder verb patterns and the title duty shares were rebuilt from the corpus (`build/benefits_tags.py`, `build/more_stats.py`, `build/titles_stats.py`). "Set standards" now needs a setting verb (set, define, establish), so it reads 14 / 15 / 32 / 53% by level.

## Stack against title: what was tested (992 English ads, cross-validated logistic regression, AUC of predicting "strategic")

| Predictor | AUC |
|---|---|
| Title family (Analytics Engineer / BI / Data Engineer / Analyst) | 0.54 |
| Stack group (dbt only / Power BI+dbt / Power BI only / neither) | 0.62 |
| Level word in the title (junior / none / senior / lead) | 0.68 |
| Classifier seniority label | 0.72 |
| Title level + family + stack | 0.74 |
| Seniority label + stack | 0.77 |

The level in the title predicts scope better than the stack does, the title *family* predicts almost nothing, and the stack adds real information on top. Within a level the stack gap is large: strategic share at mid level 27% (dbt only, n = 169) against 4% (Power BI or Fabric only, n = 92); at senior level 60% (n = 180) against 27% (n = 81); juniors are 0% in every group. "Strategic" is coded from verbs ("define, establish, own, shape, lead, drive, architect" against "support, assist, deliver, help"), so the stack finding is partly a finding about verbs. Across the four stack groups the seniority mix differs little (p = 0.10; senior or above is 55% for dbt only, 48% for Power BI only) and the rigour framing differs in the "neither" group (p = 0.001, driven by its share of "velocity"), not between dbt-only and Power BI-only (80% against 78% rigour). 15% of ads titled "Analytics Engineer" (746 ads) name Power BI or Fabric and no dbt.

## Career ladder: what the ads ask at each step (English ads with a classifier level: junior 43, mid 441, senior 410, lead/staff/manager 98)

Agreement between ladders (weighted kappa): classifier and title 0.78, classifier and years 0.57, title and years 0.38. The ladders are not independent: the classifier reads the title and the years.

**Common core** (prevalence at junior / mid / senior / lead+): SQL 86 / 95 / 96 / 92; data quality and testing duties 86 / 77 / 78 / 78; stakeholder collaboration duties 84 / 86 / 83 / 83; any warehouse 72 / 75 / 75 / 70; Python 70 / 66 / 63 / 61. None shows a detectable step between adjacent levels after Holm correction.

**What changes** (prevalence at junior / mid / senior / lead+):
- "Strategic" verbs 0 / 19 / 46 / 79: every step p < 0.01.
- "Support / assist" wording 91 / 66 / 60 / 55: the junior-to-mid fall (-24 points, Holm p = 0.008) is the only clear junior step.
- "Own" wording 26 / 45 / 57 / 62.
- Mentoring, coaching or code review 23 / 19 / 37 / 46: mid to senior +18.
- Defining standards 14 / 15 / 32 / 53: mid to senior +17.
- Roadmap or prioritisation 16 / 18 / 30 / 61.
- "Lead / drive" wording 47 / 37 / 53 / 80.
- The junior-to-mid dips in mentoring and "lead / drive" are within noise on 43 junior ads.
- **AI by level:** using AI tools is flat; building with AI climbs, but not robustly as a step.
- **Median years asked:** 1, 3, 5, 6. Pay (annualised midpoint, only about 13% of ads state it): mid to senior about +13 to +15% in USD and EUR; junior and lead cells too thin to quote.

**Quotes** (exact substrings of the ad): Morgan Stanley, junior: "Assist development of web-based management reporting tools." Doodle, mid: "Own Data Quality: Build reliable transformations from raw product data to business-ready datasets". Dex, senior: "Set the standards for data quality, definitions and instrumentation across Dex." Kite Packaging, senior: "Mentor your colleagues, raising technical capability in the team, and create a strong engineering culture." AIHR, lead: "Own and execute a rolling one-year Data & Analytics roadmap, balancing urgent business needs with foundational work."

**Cannot say:** anything about promotion (these are ads for external hires), whether ads match what people actually do, or what gets someone promoted. Years are stated minimums, in about half the ads. Junior findings rest on 43 ads. Safe wording: "ads for senior roles ask for mentoring and standards about seventeen points more often than ads for mid-level roles", never "to get promoted, do X".

**Against published ladders** (snippet-only web check): generic guides give roughly 0-2 / 2-4 / 4-7 / 7-10 years for junior, mid, senior, staff, close to the ad medians of 1 / 3 / 5 / 6. Mentoring, standards and architecture as the senior signal match several practitioner guides. No public dbt Labs or Locally Optimistic ladder turned up, and Levels.fyi has no analytics-engineer ladder.

## What the challengers said about the brief

1. **As briefed, it is a report.** Four findings joined by "and also". A room waits for tension, and there is none until the talk makes one claim and one uncomfortable turn. The "when it says X, what does it mean?" thread and the three-person close answer this.
2. **The AI strand is a non-event as a trend.** The honest result is "no clear trend in three months". It becomes a finding when you say what the ask looks like (about half of ads, four in ten of those vague), and a question when you set it beside the survey.
3. **The red-flag strand mostly failed.** "Fast-paced", "self-starter", "wear many hats", unicorn ads and pay opacity predicted nothing. That is itself useful ("most red-flag adjectives carry no signal") but it is one spoken line in the close, not a build.
4. **"Juniors" rests on a fragile definition.** 20 ads by title, 64 by the classifier, 68 with early-career wording, 125 by a loose rule. Say the range.
5. **Two storylines cannot both be spines in five minutes.** The French data-quality story stays in `talk_v1_fwdc_2026_talk_plan.md`; the talk opens on the Enhance ad.
6. **Literature check, stated carefully:** no systematic study of analytics-engineering ads turned up, and nothing testing Power BI or Fabric against dbt as a signal of scope. Say "I found no one who has measured this", never "no one has".

## The one sentence

> A job ad says one thing and often means another, and no two ads are alike. So read what each one asks, and answer with your own story.

Spoken short: **"Read what it asks. Answer with your own story."**

## Who it is for, and what they do on Monday

- **People starting out:** don't be discouraged; the core skills are the same at every level. Read the years and the gate, not the title (44 of 64 junior ads carry no junior word in the title). Treat "2 years" as a soft number. Where the only gate is a degree and the ad says "or equivalent", apply, and lead with the project.
- **People moving up:** practise the next verb on the work you already do. Choose the next job by what fills the ad, not by its title.
- **Everyone reading ads:** read the ads in your region as the competition, and negotiate on what they list that your offer doesn't. Check whether "AI required" is backed by an AI duty.
- **People who hire:** read your own ad again and ask what you wanted but didn't write. Write one concrete AI sentence (tool, task, review step) or none. Put the pay range in. Say how many years you truly need. Drop the adjectives.

Tone rule, still binding: **the tool or the document is the subject of the sentence, never a group of people.** No "companies lie", no "avoid ads with X", no "AI is overhyped", no "entrenched".

## Running order (about 5:30; the long version adds about 2 minutes)

| # | Time | Slide | The point | Evidence and safe wording |
|---|---|---|---|---|
| 1 | 0:00–0:30 | The ad | Junior, then two to five years. | Verbatim lines from 2026-10-09_enhance_analytics-engineer, including the internships sentence. |
| 2 | 0:30–1:00 | Titles | 358 titles, no shared definition after almost eight years, but a spectrum of expectations. | 908 ads; two ends hold up; role first written up by Locally Optimistic in early 2019 (dbt Labs: the term circulated in 2018). Say "first written up", not "coined". |
| 3 | 1:00–1:25 | Similarity | I expected borrowing; ads are 4% alike, copying sits in families. | 2.3 duty bullets in 1,000; half in the five families. Similarity is role text only. |
| 4 | 1:25–2:10 | Stack | Same level, different stack, different job: a choice, not a ranking. | Mid 27 vs 4%, senior 60 vs 27%; 15% of AE-titled ads; dashboards 21 vs 10% of duties at mid level. Never "means", never "enterprise". |
| 5 | 2:10–2:50 | AI | About half ask, four in ten vaguely; is the ad a lagging indicator? | 47%; 42% vague; survey 72% is a different population and question. Never "AI is rising". |
| 6 | 2:50–3:40 | Juniors | One in twenty; four in ten gated; six in ten not; apply and lead with the project. | 64 ads; 27 gated; France 11 of 13 master's (selection effect); 11 say projects count. |
| 7 | 3:40–4:10 | Ladder | The core is the same; the verb changes. | Strategic verbs 0 / 19 / 46 / 79%; years 1 / 3 / 5 / 6. Ads for outside hires, not promotion rules. |
| 8 | 4:10–4:35 | Benefits | The norm differs by region; the competition is your lever. | 25 of 28 tags differ; US health, pension and equity about half each; France meal vouchers 34%, pension 0%. |
| 9 | 4:35–5:15 | Close | Same core, specific tail; three calls to action. | 62% unique mixes, 389 one tool apart; template CV fits 4 ads. |
| 10 | 5:15–5:30 | The ad, again | Read what it asks. Answer with your own story. | Same card as slide 1. |

## Claims to cut or soften

- **Cut:** "five jobs", "five kinds of job" or "two jobs" (only the two ends of the spectrum are stable; say "a spectrum"); "only 40% match the dbt-modeller picture"; "what success looks like implies autonomy" (n = 46, one of 323 tests); junior shares by region (cells of a few ads); "Power BI is big enterprise" (no company-size data).
- **Soften:** every stack and absence rule ("no documentation implies no git or CI" is association in terse ads; turn it into a question to ask); kitchen-sink ads ("breadth did not predict seniority or pay here"; small teams legitimately wear many hats); relistings ("about 7% of scraped ads", heuristic rules); the 78% AE-titled figure (the scraper searched that title); "lagging indicator" (a question, never a finding).
- **Do not say:** "AI demand is rising" or "AI in ads is flat" (say "no clear trend"); "Stanford shows AI kills junior jobs" (the authors say descriptive, not causal); "ghost jobs are X%" (the 18–22% is a secondary Greenhouse figure); "apply even if you do not meet the years" as advice without the 27-of-64 gate numbers beside it.

## Where this sits against what others say

| Topic | Corpus | Outside |
|---|---|---|
| The role's age | 358 titles on 908 ads | Locally Optimistic (Kaminsky) first wrote up the analytics engineer in early 2019; dbt Labs says the term already circulated in its community in 2018 and does not claim to have coined it. Secondary sources only; no dated first use found. |
| AI in practice | 47% of ads ask for role AI; 42% of those vaguely | dbt Labs, 2026 State of Analytics Engineering (14 Apr 2026, n = 363, vendor survey): 72% prioritise AI-assisted coding; 71% worry about wrong AI output reaching stakeholders. Different people and a different question from the ads; say so. |
| Few juniors | 5.3% by classifier, 1.7% by title | Stanford (rev. 12 Aug 2026): employment of 22–25-year-olds in AI-exposed jobs 19% below trend, "descriptive, not causal". APEC via secondary coverage: data engineer offers +10% in 2025 (1,920 offers; confirmed by two outlets). The "junior IT -19%" and INSEE "-7.4%" figures could not be confirmed at source: leave them out. Numeum: "nous sommes loin de la job apocalypse". |
| Pay stated | US 78%, UK & Ireland 24%, Benelux 35%, France 18%, DACH 15% of ads | Indeed, Mar 2026: UK 56%, NL 48%, FR 43%, ES 17%, DE 12% of all postings. Italy went from 35% to 61% in six months after its law. Only 4 of 27 states met the 7 June deadline. |
| Local-language gate | 18.7% of English-language EU ads | Indeed (Oct 2024): 2–8% of postings say the local language is not needed. |
| Degree gates | 58% of junior ads state a degree | HBS and Burning Glass (Feb 2024): fewer than 1 in 700 hires benefited from dropped degree requirements; about 45% of firms changed postings only. |
| AI in ads | About half of ads in this corpus | Indeed AI tracker (from the published CSV): share of postings with AI-related terms on 30 Sep 2026: UK 9.9%, US 7.3%, Germany 5.7%, France 4.5%. Indeed France blog (1 Apr 2026): France 3.4% in February. The dictionary includes "Machine Learning" and "Data Science". Lightcast: 2.5% of US postings name AI skills in 2025. **Not comparable with 47–51%: different dictionaries and populations; Q&A only.** |
| Titles | 358 titles, one spectrum | dbt Labs (Cohen): analyst and engineer ads often describe analytics-engineering work. Holistics: an informal Indeed search found most "analytics engineer" hits were analyst roles. Nothing systematic. |

## Must be checked before any slide is final

1. **Freeze the corpus** (1,211 ads today) and re-run every number once: `ai_flags.py → titles_stats.py → make_similarity_matrix.py → benefits_tags.py → prep_data.py → stack_stats.py + more_stats.py → prep_data.py`, then `build.py`.
2. **Spot-check the rebuilt measures:** the benefits tagger (18 of 310 cells differ by more than 10 points from the old grid), the ladder verb patterns, and the title duty shares.
3. **Strip Amazon boilerplate** in `roletext.role_lines`: about 140 Amazon benefits and legal lines survive and inflate the role-line copy rate (the slide uses duty bullets, which are not affected).
4. **Re-run the local-language gate** (18.7%) on the 1,211 corpus; it was not part of this pass.
5. **External figures:** verification notes in `research/ext_verify.md`. Verified from a fetched page: Indeed France 3.4% and the AI-tracker CSV; Lightcast 28% premium; Eurostat 10.45M ICT specialists (5.0%); Anthropic Economic Index (Jan 2026); Numeum +4.3% (since revised toward +3%). Snippet-only, do not put on a slide: PwC 62% and 1.3%; Greenhouse 18–22%. Not confirmable: APEC -19% and -21%, INSEE -7.4%. The TalentWorks 61% is from 2018.
6. **French-market coverage.** "Développeur BI", "BI engineer alternance", "business intelligence alternance" and "ingénieur décisionnel" are still unsearched (LinkedIn blocked the second keyword chunk), and the French job boards (Welcome to the Jungle, APEC, Hellowork, France Travail) are not covered.
7. **Hand-check the three contradiction ads** (Enhance, Dataroots, ITT) for exact wording and dates.
8. **Check the abstract.** If it promises the French-bug talk, reframe or re-submit.

## Q&A ready

- "One scraper, mostly Europe." Say it once. Directional claims only.
- "Juniors are hired as analysts and promoted." True. The 5.3% describes ads with this title.
- "Classifier labels, not truth." Seniority and autonomy are LLM-coded; the 60-ad hand check agrees on AI presence 98% of the time and on category 80%.
- "Power BI shops are worse." No. Dbt-only and Power BI-only ads have a similar seniority mix (55% and 48% senior or above) and similar rigour framing (80% and 78%); within each level they differ in scope, and in what fills the duties.
- "So how do I get promoted?" The ads are for external hires. They show what employers write at each level, not what earns a promotion.
- "Is the ad really a lagging indicator?" I can't test that here. The survey and the ads cover different people and ask different questions; what I can say is that the ads ask less, and more vaguely, than practitioners say they use. It fits a lag, or ads written from a template.
- "Why not call out bad ads?" The tool is the subject, not the company. Breadth in a small team is legitimate.

## Outside voices (verified 26 October 2026)

Conquet, DataGen #160 (3 Aug 2026): "80% des besoins de nos clients sont sur des fondamentaux et 20% sont sur des sujets très innovants" is about his freelance collective's clients, and he says 80% of the podcast is about innovative topics; usable if attributed that way. "En France, 99% sont français" is about the roughly 50 leaders he contacted at German and British unicorns, not about French team composition: do not use it for the language gate. Blef, DataGen #242 (8 Dec 2025): the show notes list semantic layer, MCP, "95% des projets ne sont pas en production" and internal AI assistants as 2026 trends; the 95% comes from an MIT study in the resources, so do not attribute it to him. #267: the title is "L'agentique accélère : quel impact pour l'équipe data ?" and the rest is unconfirmed.
