# Read the ad, not the adjectives — a talk for the people

Draft 2, 2026-10-26. Supersedes the spine of `talk_v1_fwdc_2026_talk_plan.md` (its French-versus-English story is no longer part of the spoken talk). Built from six research and analysis agents and two challengers; the raw evidence is in the session notes, the claims below carry their safe wording.

## The story, told as the questions I asked (5 minutes, about 700 words)

**The thread:** at every turn, two questions about an ad: *what does it say, and what does it ask?* The opening shows the gap in one real ad, the middle shows it again and again, and the ending comes back to it: answer what the ad asks. The spoken script does not apologise for the method; limits live in the Q&A section and the evidence tables below.

**[The line · on screen, two lines from one real ad]**
`BI Engineering Senior Analyst | Early Career | Full time`
`Minimum of 3+ years of experience in Business Data, BI Engineering, or Analytics Engineering roles` *(Accenture, Lisbon)*

"Early career. A minimum of three years. Same ad. This is what the ad says, and this is what it asks. They aren't always the same thing. I read about 1,100 job ads for analytics engineers, from LinkedIn and company career pages, to find out what they actually ask. A few questions, five minutes. Each time: what does it say, and what does it ask?"

**[Question 1 · What does a job ad look like?]**
"First: what does an ad look like? Say: 534 different job titles. Ask: about five kinds of job. And almost no two ads are alike. Two companies that have never met share about four percent of their wording, and about one duty bullet in a thousand is copied word for word. The ones that do copy are families: Amazon, DoorDash, two consultancies in Lisbon."

**[Question 2 · If the title doesn't tell me the job, what does?]**
"So if the title doesn't tell me the job, what does? The stack does. Ads that name dbt and no Power BI: about half ask for strategic work, setting direction. Ads with Power BI or Fabric and no dbt: fewer than one in five. Same seniority. Same rigour. Different scope. That's not a ranking of tools; both do serious work. It's a hint about what the job asks. And the adjectives? 'Fast-paced', 'self-starter', 'wear many hats'. They say a lot and ask for nothing: I tested them, and they predict nothing."

**[Question 3 · What do they ask about AI?]**
"Next: AI. Ads say AI. What do they ask? About half of them ask for it, as part of the role, not company marketing. Four in ten of those asks are vague: 'curiosity to leverage AI.' In a third of the ads that require AI, nothing in the duties describes any AI work. The concrete ones name the tool: Copilot, Cursor, Claude Code. Is it growing? From August to October, it's flat."

**[Question 4 · If I'm starting out, is there a door?]**
"Now the question I care about most. 'Early career' says welcome. What does it ask? About one ad in twenty is for a junior; by title closer to one in seventy; by a loose count one in ten. Another says junior and asks two to five years. Six in ten ask for a degree. One in six needs a language that isn't English, and in Portugal, Spain and France about four in ten English-language ads do. The skills are the same as at mid-level: SQL, a BI tool, Python, modelling, and being able to talk to people."

**[Question 5 · How do I move up?]**
"And the question under all of it: how do I move up? The core never changes. SQL, a warehouse, tests on your data, working with stakeholders: asked at every level. What changes is the verb. Junior ads say 'support' and 'assist'. Mid ads say 'own'. Senior ads add three things: mentor people, set the standards, decide what comes next. Mentoring and standards show up about twenty points more often than at mid-level. Lead ads add a roadmap and working across teams. Using AI tools is asked of everyone; building with AI climbs with level. The years agree: about one, three, five, six.

For this room I checked the same thing in French. The shift points the same way: mentoring and 'piloter' show up more in senior ads, and the years go from about three to about five. Then I went looking for the door in: alternance, stage, junior. I found 13 junior ads in France, and 12 of them ask for a Bac+4 or Bac+5, a master's, or an engineering school. Internship pay, where it's stated, is eleven hundred to seventeen hundred euros gross a month."

**[Question 6 · What do they offer?]**
"And what do they offer? Benefits are trivia, which is why I took them out of the comparison. But they tell you where you are. In the US an ad sells you health insurance, a pension plan and equity: about half the ads each. In France it's meal vouchers: a third of ads. Pension: not once, because it's built in. Ads advertise what the law doesn't already give you. A benefit in an ad isn't generosity. It's a gap the law leaves."

**[Question 7 · What is a pile of ads good for?]**
"So what is a pile of 1,100 ads good for? Four things. See your competition: what other people in your seat are being asked for. Know what's expected at your level: the core, and the verb. Know your worth, where pay is stated. See your gaps.

But the thing I most want you to take away: almost no two ads are alike. Six in ten have a combination of tools that no other ad has. We read ads as templates, and they aren't: each one is a specific request from a specific team. So don't answer with a template. Find where you're unusual: your stack, your domain, the mess you've cleaned up. And pitch to that. If you're the one hiring, you aren't looking for 'an analytics engineer'. You're looking for something specific. Say what it is. I believe the age of the volume application is ending, because the volume ad, with its adjectives, carries no signal."

**[The line, again]**
"That ad said early career, and asked for three years. Read what it asks. Answer what it asks."

---

## Career ladder: what the ads ask at each step (942 English ads; seniority from the classifier, checked against the title ladder and the years ladder)

Sample sizes: classifier labels junior 40, mid 415, senior 393, lead/staff/manager 94. Agreement between ladders (weighted kappa): classifier and title 0.78, classifier and years 0.57, title and years 0.38. "Robust" means the classifier shows a Benjamini-Hochberg-significant step (231 tests) and the title or years ladder shows the same direction with a CI excluding zero. The ladders are not independent: the classifier reads the title and the years.

**Common core** (prevalence at junior / mid / senior / lead+): SQL 88 / 95 / 96 / 91; data quality and testing duties 88 / 79 / 78 / 79; stakeholder collaboration duties 82 / 87 / 82 / 84; BI and reporting duties 82 / 80 / 74 / 66; any warehouse 78 / 74 / 74 / 70; Python 70 / 66 / 64 / 61; data modelling 80 / 80 / 86 / 80.

**What changes** (percentage points, 95% CI):
- **Junior to mid:** "support/assist" wording -26 (-35, -16); degree mentioned -27 (-43, -10). Directional but not robust, with only 40 juniors: end-to-end ownership +21, "own" wording +17, CI/CD +13.
- **Mid to senior:** mentoring, coaching or code review +20 (14, 26); defining standards and best practices +19 (12, 26); "lead/drive" wording +18 (11, 24); "own" +13 (6, 20); roadmap and prioritisation +12 (5, 18); governance and documentation +12; architecture wording +10.5.
- **Senior to lead/staff/manager:** roadmap or strategy +31 (21, 41); "lead/drive" +26; cross-team work +19; people management +13; "independently" -17 (-25, -8). Years never separate senior from lead (only 28 ads ask for 8+ years).
- **AI by level:** using AI tools is flat (35, 33, 37, 36%); building with AI climbs (12, 24, 25, 34%). Not robust as a step.
- **Median years asked:** 1, 3, 5, 6. Pay (annualised midpoint, only about 13% of ads state it): mid to senior about +13 to +15% in USD and EUR; junior and lead cells too thin to quote.

**Quotes** (exact substrings of the ad): Morgan Stanley, junior: "Assist development of web-based management reporting tools." Doodle, mid: "Own Data Quality: Build reliable transformations from raw product data to business-ready datasets". Dex, senior: "Set the standards for data quality, definitions and instrumentation across Dex." Kite Packaging, senior: "Mentor your colleagues, raising technical capability in the team, and create a strong engineering culture." AIHR, lead: "Own and execute a rolling one-year Data & Analytics roadmap, balancing urgent business needs with foundational work."

**Cannot say:** anything about promotion (these are ads for external hires), whether ads match what people actually do, or what gets someone promoted. Years are stated minimums, in about half the ads. Junior findings rest on 40 ads. Safe wording: "ads for senior roles ask for mentoring and standards about twenty points more often than ads for mid-level roles", never "to get promoted, do X".

**Against published ladders** (snippet-only web check): generic guides give roughly 0-2 / 2-4 / 4-7 / 7-10 years for junior, mid, senior, staff, close to the ad medians of 1 / 3 / 5 / 6. Mentoring, standards and architecture as the senior signal match several practitioner guides. No public dbt Labs or Locally Optimistic ladder turned up, and Levels.fyi has no analytics-engineer ladder.

## What the challengers said about the brief (read this first)

1. **As briefed, it is a report.** Four findings (similarity, red flags, AI, juniors) joined by "and also". A room waits for tension, and there is none until the talk makes one claim and one uncomfortable turn.
2. **The AI strand is a non-event as a trend.** The honest result is "no detectable change in three months". It becomes a finding when you say what the ask looks like (about half of ads, four in ten of those vague), not when you chase a rise.
3. **The red-flag strand mostly failed.** "Fast-paced", "self-starter", "wear many hats", unicorn ads and pay opacity predicted nothing. That is itself useful ("most red-flag adjectives carry no signal") but it is one line, not a section.
4. **"Juniors" rests on a fragile definition.** 50 ads by a classifier, 16 by title, 117 by a loose rule. Say all three.
5. **Your two storylines cannot both be spines in six minutes.** Decided: the French data-quality bug is out of the spoken talk (the numbers moved after the fix: 70% against 79%, p=0.19) and the talk opens on the Accenture "Early Career … minimum 3+ years" ad. The bug story stays in `talk_v1_fwdc_2026_talk_plan.md`.
6. **Literature check, stated carefully:** the research agents found no systematic study of analytics-engineering ads and nothing testing Power BI or Fabric against dbt as a signal of scope. Say "I found no one who has measured this", never "no one has".

## The one sentence

> A job ad often says one thing and asks another. Three things in it are real signals of what it asks: the stack, the AI sentence and the years. And almost no two ads are alike, so answer the specific request, not a template.

Spoken short: **"Read what the ad asks, not what it says: the stack, the AI sentence, the years."**

## Who it is for, and what they do on Monday

- **Job seekers and juniors:** read the years and the stack, not the title (36 of 50 junior ads carry no junior word in the title). Treat "2 years" as a soft number: 10 junior-classified ads ask exactly 2. Where the only gate is a degree and the ad says "or equivalent", that is a reason to apply, offered as permission, not as proof of how hiring works.
- **Engineers reading ads:** forward one ad you recognise to your manager with the stack and the AI sentence highlighted. Ask which tests and alerts exist. Check whether "AI required" is backed by an AI duty.
- **Managers who write ads:** write one concrete AI sentence (tool, task, review step) or none. Put the pay range in. Say how many years you truly need. Drop the adjectives.

Tone rule from the old plan, still binding: **the tool or the document is the subject of the sentence, never a group of people.** No "companies lie", no "avoid ads with X", no "AI is overhyped".

## Running order (6:00, ten beats)

| # | Time | Slide (visual) | Say | Evidence and safe wording |
|---|---|---|---|---|
| 1 | 0:00–0:30 | Two lines from one real ad: "Early Career" and "Minimum of 3+ years" (Accenture, Lisbon). | "Early career. A minimum of three years. This is what the ad says; this is what it asks." | Verbatim lines from the archive of 2026-08-01_accenture_analytics-engineer-lisbon. The French data-quality story is no longer in the spoken talk (it stays in `talk_v1_fwdc_2026_talk_plan.md`). |
| 2 | 0:30–0:50 | Dot field of the corpus, one dot per ad. | "About 1,100 ads, a year of looking, mostly Europe. One scraper, LinkedIn and company pages. I'll say the limits once." | Freeze the count before the talk (1,136 today). |
| 3 | 0:50–1:30 | 534 title strings collapsing into five job types; beside it, a similarity strip. | "534 titles, five jobs. And almost no two ads are alike: strangers share about 4%, under 1% of requirement sentences are copied. The copiers are families: Amazon, DoorDash, two consultancies in Lisbon." | Titles: 88% of "Analytics Engineer" ads list reporting duties, 85% pipelines, 96% modelling. Five types is one way to slice it, k-means, unvalidated. Say "about four in ten are dbt-heavy", not "40% match". Similarity is role text only. |
| 4 | 1:30–2:20 | Four bars: strategic scope by stack, with "same seniority, same rigour" pinned beneath. Optional decoder: two ads, company names hidden, guess the stack. | "The tool names the job better than the title. Ads that name dbt and no Power BI describe strategic scope 47% of the time; Power BI or Fabric with no dbt, 18%. Same seniority, same rigour. Different scope." | English ads: dbt-no-PBI 47%, PBI plus dbt 31%, neither 32%, PBI-no-dbt 18%. Say "associated with, especially without dbt". Never "means". Never a ranking: no difference in seniority (p=0.23) or rigour framing (p=0.5). Autonomy is a classifier label: show the hand check. |
| 5 | 2:20–3:05 | One real ad, full page, five margin marks: the stack, the AI sentence, the years, a stock bullet, a mechanism. | "Five lines carry the information. The rest is the dialect." | Stock bullets: SQL 89%, stakeholder collaboration 67%, data quality 58% of ads. Most red-flag phrases ("fast-paced", "self-starter") predicted nothing here. Say so in one line. |
| 6 | 3:05–3:55 | An AI-ask spectrum, vague to concrete, three real quotes pinned along it. | "About half of ads ask for AI. Four in ten of those stay vague: 'curiosity to leverage AI' (Aritzia). A third of ads that require it describe no AI duty anywhere. The concrete ones name Copilot, Cursor or Claude Code (LC Waikiki)." | 46% of all ads, 50% of English ads (state which). 26% required, 17% nice-to-have. 59% name a tool or task. 31% of required-AI ads have no AI duty. Only 35% of tool asks name review in the same sentence. Say "ads often ask for AI without describing AI work". Do not say "leading indicator": it cannot be tested here. |
| 7 | 3:55–4:15 | A flat line, labelled "no detectable change". | "I looked for a trend and could not show one in three months of scrapes, so be wary of anyone who says there is." | August, September, October: 48%, 48%, 50%, intervals about 40–56. Never quote the old 37% to 47% rise: it was ad length and a collection change. Do not set 46% next to Indeed's 4.2% or about 45%: different dictionaries and populations. |
| 8 | 4:15–5:00 | A junior ladder (117, 60, 50, 16 as nested rungs) and three contradiction cards: Accenture Lisbon, Dataroots, Enhance. | "Four ways to count juniors, four answers: about one ad in 20, from one in 70 to one in 10. Some say 'early career' and ask for 'a minimum of 3+ years'." | 4.4% [3.3, 5.8] by classifier; 1.4% by title; 10.3% loose. 60% of junior ads state a degree against 34% of mid ("stated more often", never "a missing line means no gate"). 20 of 50 carry a hard gate: show the components. Zero name a certification. Pair the small number with: the title skews senior and the route often runs through other titles. |
| 9 | 5:00–5:20 | Map of Europe tinted by the share of English-language ads that need another language. | "In this market it is a gate you can read in advance: about one in five English-language EU ads needs another language, near 40% in Portugal, Spain and France." | 18.7% [14.6, 22.8]; hard gates 11.7%. Use for direction: LinkedIn, one scraper. Indeed's separate data: few ads waive the local language (2–8%). |
| 10 | 5:20–6:00 | Three Monday lines and the QR. | "Read the years. Read the stack. Read the AI sentence." | Calls to action above. |

**Ten-minute version:** add the live decoder (+60 s), the junior gate stack of 50 dots with 20 lit (+45 s), the failed red flags as a short list (+45 s), the stack-to-scope duty gaps chart (+30 s), and 15 more seconds on the contradiction cards.

## Visuals worth building (name, data, one-line takeaway)

Existing in `jd_deck.html` or `jd_views.html` (this folder): the similarity strip (slide 2), the twin ads with step-by-step highlights (slide 4), the duty-gap dot chart (slide 7), the language-gate bars (slide 9). Needing work or new:

1. **Annotated real ad.** One page, five hand-drawn marks. "Five lines carry the information."
2. **Ad decoder.** Six real ads, names hidden; the room guesses the stack and scope. "The stack predicts the job better than the title."
3. **Stack-to-scope four-bar chart** with "same seniority" as an equal-height pair. "Same level, different scope."
4. **Title explosion.** 534 dots collapsing into five types. "Many names, five jobs."
5. **AI-ask spectrum.** 59% concrete to 41% vague, quotes pinned. "Where does your ad sit?"
6. **Said, not described.** Two stacked bars: required AI, and how many have an AI duty. "Said, not described."
7. **Flat-line honesty slide.** Three months, wide intervals. "What I could not find."
8. **Junior ladder** (nested rungs) and **junior gate stack** (50 dots, 20 lit).
9. **Contradiction cards.** Three real snippets in big type. "Junior in the title, 3+ years in the text."
10. **Language map of Europe.**

Style: type only on the quote slides, one idea per slide, two colours plus one highlight, no decoration.

## Claims to cut or soften (from the claims challenger)

- **Cut:** "only 40% match the dbt-modeller picture" (cluster-dependent); "what success looks like implies autonomy" (n=46, one of 323 tests); junior shares by region (cells of a few ads).
- **Soften:** every stack and absence rule ("no documentation implies no git or CI" is association in terse ads, and could harm a job seeker as advice; turn it into a question to ask); kitchen-sink ads ("breadth did not predict seniority or pay here"; small teams legitimately wear many hats); relistings ("about 7% of scraped ads", heuristic rules); the 78% AE-titled figure (the scraper searched that title).
- **Do not say:** "AI demand is rising"; "Stanford shows AI kills junior jobs" (the authors say descriptive, not causal); "ghost jobs are X%" (the 18–22% is a secondary Greenhouse figure); "apply even if you do not meet the years" as advice without the 20-of-50 gate numbers beside it.

## Where this sits against what others say

| Topic | Corpus | Outside |
|---|---|---|
| Few juniors | 4.4% by classifier, 1.4% by title | Stanford (rev. 12 Aug 2026): employment of 22–25-year-olds in AI-exposed jobs 19% below trend, "descriptive, not causal". APEC via secondary coverage: data engineer offers +10% in 2025 (1,920 offers; confirmed by two outlets). The "junior IT -19%" and INSEE "-7.4%" figures could not be confirmed at source: leave them out. Numeum: "nous sommes loin de la job apocalypse". |
| EU pay stated | 18% of EU ads, 80% US | Indeed, Mar 2026: UK 56%, NL 48%, FR 43%, ES 17%, DE 12%. Italy went from 35% to 61% in six months after its law. Only 4 of 27 states met the 7 June deadline. |
| Local-language gate | 18.7% of English-language EU ads | Indeed (Oct 2024): 2–8% of postings say the local language is not needed. |
| Degree gates | 60% of junior ads state a degree | HBS and Burning Glass (Feb 2024): fewer than 1 in 700 hires benefited from dropped degree requirements; about 45% of firms changed postings only. |
| AI in ads | About half of ads in this corpus | **Indeed AI tracker** (verified from the published CSV): share of postings with AI-related terms on 30 Sep 2026: UK 9.9%, US 7.3%, Germany 5.7%, France 4.5%. Indeed France blog (1 Apr 2026): France 3.4% in February, the lowest of the countries compared (UK 7.5%, US 4.9%, DE 4.1%). The dictionary includes "Machine Learning" and "Data Science". Lightcast: 2.5% of US postings name AI skills in 2025. **Not comparable with 46–50%: different dictionaries and populations; say so.** |
| Titles | 534 strings, same duties | dbt Labs (Cohen): analyst and engineer ads often describe analytics-engineering work. Holistics: an informal Indeed search found most "analytics engineer" hits were analyst roles. Nothing systematic. |

## Must be checked before any slide is final

1. **Freeze the corpus** (1,136 ads today, 11 added on 25 Oct by another session) and re-run every number once.
2. **Reconcile** the AI share: 46% of all ads, 50% of English ads.
3. **Re-run the four-group stack-to-scope table with CIs** on the frozen corpus (the 47/31/18/32 numbers are the challenger's, 942 English ads, no CIs yet).
4. **External figures: verification status** (full notes in `research/ext_verify.md`). Verified from a fetched page: Indeed France 3.4% (Feb 2026) and the AI-tracker CSV; Lightcast 28% premium; Eurostat 10.45M ICT specialists (5.0%); Anthropic Economic Index (the Jan 2026 report, 52% augmentation and 45% automation, Claude.ai only); Numeum +4.3% (Dec 2025 forecast, since revised toward +3%). Snippet-only, do not put on a slide: PwC 62% and 1.3%; Greenhouse 18–22% (Fox syndication only, and the definition differs from "no intention to hire"). Not confirmable: APEC -19% and -21%, INSEE -7.4%. The TalentWorks 61% is from 2018. The Conquet and Blef points are in the next item.
5. **French-market coverage.** Done in part on 26 Oct: a paced sweep for alternance, stage, junior and BI titles added 14 French ads (13 junior in France in total). LinkedIn blocked the second keyword chunk (429), so "développeur BI", "BI engineer alternance", "business intelligence alternance" and "ingénieur décisionnel" are still unsearched, and the French job boards (Welcome to the Jungle, APEC, Hellowork, France Travail) are not covered. Re-run the France ladder and junior cuts on the new data before freezing.
6. **Hand-check the three contradiction ads** (Accenture Lisbon, Dataroots, Enhance) for exact wording and dates.
7. **Check your abstract.** If it promises the French-bug talk, reframe or re-submit.

## Q&A ready

- "One scraper, mostly Europe." Say it once. Directional claims only.
- "Juniors are hired as analysts and promoted." True. The 4.4% describes ads with this title.
- "Classifier labels, not truth." Seniority and autonomy are LLM-coded; the 60-ad hand check agrees on AI presence 98% of the time and on category 80%.
- "Power BI shops are worse." No: same seniority, same rigour, different scope.
- "So how do I get promoted?" The ads are for external hires. They show what employers write at each level, not what earns a promotion.
- "Is the AI ask a leading indicator?" Nobody has tested ad wording against measured adoption. Practitioner surveys (dbt Labs: 72% prioritise AI-assisted coding, n=363, vendor) run well ahead of what ads say, which fits either story.
- "Why not call out bad ads?" The tool is the subject, not the company. Breadth in a small team is legitimate.

## Decisions for you

- 6 or 10 minutes? The order above works for 6; the 10-minute adds are listed.
- ~~Keep the French opener~~ Decided: open on the Accenture ad and carry the "says versus asks" thread to the end.
- **Outside voices, as verified (2026-10-26):** Conquet, DataGen #160 (3 Aug 2026): "80% des besoins de nos clients sont sur des fondamentaux et 20% sont sur des sujets très innovants" is about his freelance collective's clients, and he says 80% of the podcast is about innovative topics; it is a usable quote if attributed that way. "En France, 99% sont français" is about the roughly 50 leaders he contacted at German and British unicorns, not about French team composition: do not use it for the language gate. Blef, DataGen #242 (8 Dec 2025): the show notes list semantic layer, MCP, "95% des projets ne sont pas en production" and internal AI assistants as 2026 trends; the 95% comes from an MIT study in the resources, so do not attribute it to him. #267: the title is "L'agentique accélère : quel impact pour l'équipe data ?" and the rest is unconfirmed.
