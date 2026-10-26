# Read the ad, not the adjectives — a talk for the people

Draft 2, 2026-10-26. Supersedes the spine of `talk_v1_fwdc_2026_talk_plan.md` (its French-versus-English story survives as the cold open). Built from six research and analysis agents and two challengers; the raw evidence is in the session notes, the claims below carry their safe wording.

## The story, told as the questions I asked (5 minutes, about 700 words)

The thread is a person asking one question after another, each answer raising the next. The room follows the question, not a list of findings. Slide cues in brackets; every number is in the evidence table below.

**[The line: silent vote]**
Read this line. Does it make data quality part of the job? ... Yes. You all said yes in about two seconds. My tool said zero. It only knew English words. So when I tell you what about 1,100 job ads for analytics engineers say, keep one thing in mind: a zero can mean "it isn't there", or it can mean "I can't read it". I'll tell you which one each time.

**[Question 1 · What does a job ad actually look like?]**
So I started with a plain question: what does a job ad actually look like? I read about 1,100 of them, mostly from Europe, over the year. One scraper, LinkedIn and company pages. That's the limit, and it's the last time I'll say it. First surprise: 534 different job titles. But read what they ask for, and they fall into about five kinds of job. And almost no two ads are alike. Two companies that have never met share about four percent of their wording, and about one duty bullet in a thousand is copied word for word. The ones that do copy are families: Amazon, DoorDash, two consultancies in Lisbon.

**[Question 2 · If the title doesn't tell me the job, what does?]**
So if the title doesn't tell me the job, what does? The stack does. Ads that name dbt and no Power BI: about half describe strategic work, setting direction. Ads with Power BI or Fabric and no dbt: fewer than one in five. Same seniority. Same rigour. Different scope. That is not a ranking of tools; both stacks do serious work. It's a hint about how the job is written. And here's the other half: the adjectives told me nothing. "Fast-paced", "self-starter", "wear many hats". I tested them. They predict nothing I could find.

**[Question 3 · What are they asking about AI?]**
Next: how much AI do they want? About half of the ads. Not company marketing; I'm counting ads where AI is part of the role. And here's the part I find useful: four in ten of those asks are vague. "Curiosity to leverage AI." In a third of the ads that require AI, nothing in the duties describes any AI work. The concrete ones name a tool: Copilot, Cursor, Claude Code. Is it growing? I looked for a trend, and in three months of scrapes I can't show one. So be wary of anyone who tells you there is.

**[Question 4 · If I'm just starting, is there a door?]**
Now the question I care about most. If I'm starting out, is there a door? About one ad in twenty is for a junior. By title it's closer to one in seventy; by a loose count, one in ten. And read them. One "early career" ad asks for "a minimum of 3+ years". Another says junior and asks for two to five. Six in ten ask for a degree. One in six needs a language that isn't English; in Portugal, Spain and France, about four in ten English-language ads do, and you can read that gate before you apply. The skills are the same as for mid-level: SQL, a BI tool, Python, modelling, and being able to talk to people.

**[Question 5 · How do I move up?]**
And the question under all of it: how do I move up? Here's what surprised me. The core never changes. SQL, a warehouse, tests on your data, working with stakeholders: asked at every level, juniors and leads alike. What changes is the verb. Junior ads say "support" and "assist". Mid ads say "own": own the pipeline, own the model. Senior ads add three things: mentor people, set the standards, and decide what comes next. Mentoring and standards show up about twenty points more often than at mid-level. Lead ads add a roadmap and working across teams. The AI ask follows the same shape: using AI tools is asked of everyone; building with AI climbs with level. And the years agree: about one, three, five, six.

For this room I checked the same thing in French. There the sample is thinner, 80 ads, but the shift points the same way: mentoring and "piloter" show up more in senior ads, and the years go from about three to about five. What I can't show you is the door in. I have three junior ads in France, and not one offers an alternance. That's my search, not your market: I looked for "analytics engineer", and in France many beginners start through alternance, under other titles.

**[Question 6 · What are they offering?]**
Benefits are the one part of the ad I took out of the comparison, because they're trivia. But they tell you where you are. In the US, an ad sells you health insurance, a pension plan and equity: about half the ads each. In France, it's meal vouchers: a third of ads. Pension: not once, because it's built in. Same for parental leave: a quarter of UK ads, a handful on the continent. Ads advertise what the law doesn't already give you. So a benefit in an ad isn't generosity. It's a gap the law leaves. And a quarter of ads mention no benefit at all.

**[Question 7 · What is a pile of ads good for?]**
So what is a pile of 1,100 ads good for? Four things. See your competition: what other people in your seat are being asked for. Know what's expected at your level: the core, and the verb. Know your worth, where pay is stated. And see your gaps. Read the years. Read the stack. Read the AI sentence.

But the thing I most want you to take away is this. Almost no two ads are alike. Six in ten have a combination of tools that no other ad has. We read ads as templates, and they aren't: each one is a specific request from a specific team. So don't answer with a template. Find where you're unusual: your stack, your domain, the mess you've cleaned up. And pitch to that. And if you're the one hiring: you aren't looking for "an analytics engineer". You're looking for something specific. Say what it is. I believe the age of the volume application is ending, because the volume ad, with its adjectives, carries no signal. Don't send the template. Answer the specific.


---

## Career ladder in the French market (80 France-located ads, 85 with French-language ads elsewhere; the English ladder above covers 942 English ads)

**Sample:** classifier levels in France: junior 3, mid 38, senior 33, lead/staff/manager 6. Title ladder: 0 junior titles. Years ladder: 10 ads asking 2 years or fewer, 21 asking 3–4, 23 asking 5–7. 77 of 80 titles contain "Analytics Engineer", so there is no Data Analyst, BI engineer or BI developer ladder.

**Mid to senior, percentage points (95% CI), English / France-located / French-language:**
- Mentoring and code review: +21 (15, 27) / +15 (-5, 36) / +7 (-17, 30)
- Lead or drive ("piloter", "porter"): +23 (16, 29) / +20 (-3, 41) / +17 (-8, 42)
- Standards and best practices: +20 (14, 26) / +6 (-17, 29) / -4 (-31, 21)
- Own: +13 (7, 20) / -4 (-25, 18) / -7 (-31, 16)
- Roadmap and prioritisation: +18 (12, 24) / +2 (-20, 23) / +8 (-17, 31)

Same sign as English on 5 of 8 features (6 of 8 on the title ladder). Only mentoring and lead/drive point consistently the same way; every French interval includes zero, so nothing is confirmed. Standards, "own" and roadmap do not replicate in France. Junior to mid and senior to lead are not testable (3 and 6 ads).

**Years asked in France:** median 1 (n=2), 3 (n=26), 5 (n=23), 5 (n=4), against English 1 / 3 / 5 / 6.

**France-specific:**
- Degree: 50% mention one; 31% name Bac+5, master or école d'ingénieur; 29% say "ou équivalent". Bac+5 does not rise with level (mid 32%, senior 30%). French-language ads mention it about five times as often as English-language ads in France (about 40% against 8%).
- Alternance, stage, apprentissage, VIE: none of the 85 ads offers one. This reflects how the corpus was collected (search on "analytics engineer"), not the French market.
- Language gate: 41% name one (English only 15, French only 15, both 3). Six of 24 English-language ads in France require French; 12 of 61 French-language ads require English.
- Pay stated in 24% of ads (all annual EUR): mid about 52k (n=12), senior 65k (n=5); junior and lead are single ads.
- Remote: 51% hybrid, 9% remote, 40% not stated.

**Method checks:** French dictionaries hand-checked on 26 ads (precision 70–95%, recall 70–95%; "support/assist" is the weak one because "participer à" appears in 70% of ads). The classifier's seniority label looked plausible on 25 of 25 French ads checked (kappa 0.67 against the title ladder, 0.54 against years).

**Safe wording for the French room:** "In 80 French postings the wording shifts from junior to senior in the same direction as in English for mentoring and for driving the work, and the years go from about three to about five. I cannot say anything solid about junior or lead roles. These are associations in ads for external hires, not advice on how to be promoted. Bac+5 or any particular phrase does not get you hired."

**French quotes (exact substrings):** Léonar, junior: "Participer au cadrage et à la collecte des données." Elax Énergie, mid: "Prendre progressivement la responsabilité d’un domaine métier de bout en bout." Exalt, mid: "Participer à la mise en place de bonnes pratiques autour du versioning, de l’intégration continue, de la documentation et des revues de code." Akuo, senior: "Accompagner les utilisateurs, former les Analytics Engineers et contribuer à leur montée en compétence par les revues et le partage de bonnes pratiques." ALTEN, senior: "accompagner la montée en compétences des profils plus juniors". EVA Esports, senior: "Capacité à définir une vision, une roadmap et, à terme, à encadrer une squad Data". AXA, lead: "accompagnez une équipe de 10 collaborateurs en France et en Pologne".

## Benefits, separately from duties (1,136 ads; extractor in 7 languages; hand-checked on 54 ads, tag precision about 94%)

No backfill is needed: benefits are extracted at analysis time from headings and benefit sentences (28 tags). A heading-only field would miss about 29% of ads that mention benefits outside headings. If a stored field is wanted later: `benefits: {tags, text, section_found, extractor_version}`, and `scripts/write_jd.py`'s field whitelist must be updated first because it silently drops new fields.

- **Coverage:** 76% of ads mention at least one benefit; 24% (277) mention none (55 of those point to a careers page). Ad length is the strongest confounder: only APAC's gap (short LinkedIn excerpts) survives a length control.
- **Typical package by region** (tags in 40% or more of ads): US health 58%, paid time off 56%, pension/401k 54%, equity 48%, parental leave 40%. UK and Ireland: remote/hybrid 61%, paid time off 42%. Benelux: learning 48%, paid time off 46%, remote 45%. **France: remote 58% only, with meal vouchers 35% the signature**, then learning 31%, health 28%, profit-sharing 15%, RTT about 10%, pension 0%. DACH: remote 56%, learning 49%, wellbeing 44%. Southern Europe: remote 63%, learning 45%, health 40%.
- **Biggest contrasts** (percentage points, 95% CI): equity US 48% against Europe 10%, +38 (29, 46); pension US +36 (27, 45); health US +31 (22, 39); meal vouchers France 35% against UK and Ireland 8%, +27 (16, 38); transport and mobility Benelux 33% and DACH 23% against US 10%.
- **By level and company type** (after region, language, length): senior ads mention bonus more (OR 1.5) and learning less (0.73); startup wording does not mean more benefits; consultancy ads mention fewer (32% mention none).
- **Cannot say:** generosity, take-up, unstated benefits, or anything about statutory baselines (EU paid leave and parental leave are statutory, so a mention is a selling point). Remote or hybrid is mostly a statement of arrangement, not a perk.
- **Quotes:** Chobani (US): "To support growing families, we provide fertility and childcare assistance, and 12 weeks of parental leave at full pay". Médiaperformances (France): "RTT : 18 jours de RTT en plus des 25 jours habituels de congés payés" and "Des Tickets restaurant, deux restaurants d'entreprise, une cafétéria". Chefs Culinar West (Germany): "Fahrradleasing- und Jobticket-Bezuschussung sowie kostenfreie Mitarbeiterparkplätze".

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
5. **Your two storylines cannot both be spines in six minutes.** The French-misread bug is now a bug you fixed; its numbers moved (after the fix 70% against 79%, p=0.19). Keep it as a thirty-second credibility beat.
6. **Literature check, stated carefully:** the research agents found no systematic study of analytics-engineering ads and nothing testing Power BI or Fabric against dbt as a signal of scope. Say "I found no one who has measured this", never "no one has".

## The one sentence

> A job ad is mostly a shared dialect that says little, but three things in it are real signals: the stack, the AI sentence and the years. And for juniors, the door is narrower and more contradictory than the titles admit.

Spoken short: **"Ignore the adjectives. Read the stack, the AI sentence and the years."**

## Who it is for, and what they do on Monday

- **Job seekers and juniors:** read the years and the stack, not the title (36 of 50 junior ads carry no junior word in the title). Treat "2 years" as a soft number: 10 junior-classified ads ask exactly 2. Where the only gate is a degree and the ad says "or equivalent", that is a reason to apply, offered as permission, not as proof of how hiring works.
- **Engineers reading ads:** forward one ad you recognise to your manager with the stack and the AI sentence highlighted. Ask which tests and alerts exist. Check whether "AI required" is backed by an AI duty.
- **Managers who write ads:** write one concrete AI sentence (tool, task, review step) or none. Put the pay range in. Say how many years you truly need. Drop the adjectives.

Tone rule from the old plan, still binding: **the tool or the document is the subject of the sentence, never a group of people.** No "companies lie", no "avoid ads with X", no "AI is overhyped".

## Running order (6:00, ten beats)

| # | Time | Slide (visual) | Say | Evidence and safe wording |
|---|---|---|---|---|
| 1 | 0:00–0:30 | The French Emeria line, full screen, nothing else. Silent vote. | "Does this line make data quality part of the job? ... My tool scored it zero. A zero means 'not there' or 'I can't read it'. Keep that in mind for every number I show you." | Earns the right to say ads are weak evidence. Old numbers: before the fix 40% (18 of 45) of French ads against 79% (683 of 860) had data-quality language; after, 70% against 79%. |
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
5. **French-market coverage.** The corpus has only 80 ads in France, 3 junior, 0 alternance, 0 junior titles, because the scraper searched for "analytics engineer". Decide whether to run a small paced sweep for France with broader titles (data analyst, BI engineer or developer, ingénieur data) and the alternance, stage and apprentissage routes before the talk. Until then, say it is a gap in the data.
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
- Keep the French opener and its credibility line, or open with the Accenture "Early Career … minimum 3+ years" ad instead? The challengers like both; the French line ties to your track.
- **Outside voices, as verified (2026-10-26):** Conquet, DataGen #160 (3 Aug 2026): "80% des besoins de nos clients sont sur des fondamentaux et 20% sont sur des sujets très innovants" is about his freelance collective's clients, and he says 80% of the podcast is about innovative topics; it is a usable quote if attributed that way. "En France, 99% sont français" is about the roughly 50 leaders he contacted at German and British unicorns, not about French team composition: do not use it for the language gate. Blef, DataGen #242 (8 Dec 2025): the show notes list semantic layer, MCP, "95% des projets ne sont pas en production" and internal AI assistants as 2026 trends; the 95% comes from an MIT study in the resources, so do not attribute it to him. #267: the title is "L'agentique accélère : quel impact pour l'équipe data ?" and the rest is unconfirmed.
