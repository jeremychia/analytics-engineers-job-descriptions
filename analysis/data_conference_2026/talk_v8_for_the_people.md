# Job ads as a record — v8, for a senior room

Draft 1, 7 November 2026. The deck is `jd_deck_v8.html` (eight slides and one for questions, built from `build/src/slides_v8.js`, `build/src/s_v8.js` and `build/src/s_v7.js`). The slot is 5 minutes.

## The angle

- **The opening claim:** a job ad is a record of what we expect from each other. Read enough of them, over time, and you can see a field change.
- **Why this corpus exists:** to take a first snapshot, so later snapshots can be compared with it.
- **Four things snapshot one shows:**
  1. **A shared core, local edges:** the ads don't agree where the job stops. Two analytics-engineer ads are no more alike than an analytics-engineer ad and a data-engineer ad. But three in four ask you to model the data, test it, report on it and work with stakeholders, and 95% ask for SQL.
  2. **Ads lag:** they describe the team we have, not the one we're building. "Context engineering" is almost absent. "Semantic layer" is common, and ads that ask for AI name it more than twice as often.
  3. **What's left unsaid:** the ad asks a lot and tells little about pay, the interview and the team. Where the law asks for pay, ads give it. Yet growth is written down clearly: SQL stays flat, "support" falls, and "lead", "roadmap", "define standards" and "mentor" climb; four in five lead-level ads ask you to lead. Say the pay as clearly as the growth.
  4. **Juniors, the main point:** few junior ads, so few seniors later, like an ageing population. It leads straight into the close.
- **The close:** no one knows exactly, but the job description is ours to write. Be intentional, and make room for juniors.
- **Tone:** the ads are the subject, never the people who write them. Say "I think" when it is your view, not the data's.

## Theory to cite

Use one sentence of theory per point, at most. The room needs the idea, not the paper.

| Point | The idea | Source | How to say it |
|---|---|---|---|
| Opening | Job ads are a record of how work changes. Economists read millions of newspaper ads and found that tasks changed inside the same job titles, 1940–2000. | Atalay, Phongthiengtham, Sotelo and Tannenbaum, "The Evolution of Work in the United States", *American Economic Journal: Applied Economics*, 2020 ([paper](https://public.websites.umich.edu/~ssotelo/research/APST_evolution_of_work.pdf), [BLS summary](https://www.bls.gov/opub/mlr/2021/beyond-bls/work-has-transformed-in-the-united-states-just-not-how-you-think-it-has.htm)) | "The titles stayed the same. The work inside them changed." |
| No consensus | The name came from practitioners, not from a standard. Claire Carroll's 2019 post on the Fishtown Analytics (now dbt Labs) blog defined it; she says the name took hold in the Locally Optimistic community from 2018. Tristan Handy says they named a workflow analysts were already building. | Carroll, "What is analytics engineering?", 2019; summary [here](https://www.packtpub.com/en-us/product/fundamentals-of-analytics-engineering-3-9781837636457/chapter/chapter-1-what-is-analytics-engineering/introducing-analytics-engineering) | Say "Fishtown Analytics gave us the name", not "coined". Who coined it is disputed. |
| Ads lag | An ad is written from the team that exists and the last person hired. Sebastián Ramírez, who created FastAPI, posted that he saw an ad asking for 4+ years of FastAPI when he had 1.5 years since creating it. | His post of 11 July 2020, mirrored [here](https://nitter.kareem.one/tiangolo); also retold in a [2022 Python mailing-list post](https://www.python.org/pipermail/tutor/2022-April/119722.html). The slide shows his [callback on Bluesky](https://bsky.app/profile/tiangolo.com/post/3mpywc57qhs2j), 6 July 2026. | Use his numbers, 4+ and 1.5. "Ten years for a three-year-old language" is the folk version; the real one is stronger because it's checkable. |
| Asymmetry | When one side knows more, the market works worse (Akerlof). The side that knows less relies on signals, such as a degree (Spence). In hiring, the employer holds the pay, the team and the process. | Akerlof, "The Market for 'Lemons'", 1970; Spence, "Job Market Signaling", 1973 | "The employer knows the pay, the team and the interview. The candidate knows what the ad says." |
| Asymmetry: disclosure pays | Most evidence is employer surveys, not experiments. In a SHRM survey, 70% of organisations that list pay ranges said they got more applicants, and 66% said better ones. A 2026 study found very wide ranges put off women more than men, and that a line on how offers are set fixes most of it. | [SHRM press release](https://www.shrm.org/about/press-room/new-shrm-research-shows-pay-transparency-makes-organizations-competitive-leads-to-increase-qualified-applicants); [HBR on the 2026 study](https://hbr.org/2026/02/posting-a-wide-salary-range-can-deter-women-from-applying) | Say "I think" for the claim that disclosure gets better hires. Use the survey only if asked; it is self-reported. |
| Asymmetry: the law | Washington state has required a pay range in ads since 1 January 2023, and New York State since 17 September 2023. The EU directive (2023/970) was due in national law by 7 June 2026; summaries disagree on whether pay must be in the ad or only before the interview. | [Washington](https://shrm.org/topics-tools/news/talent-acquisition/washington-state-to-require-salary-ranges-job-posts); [EU summary](https://www.debevoise.com/insights/publications/2025/12/the-eu-pay-transparency-directive-what-it-means) | Say "Washington state", not "Seattle". Don't say the EU directive requires pay in the ad. |
| Juniors | Employers raise degree and experience asks when job seekers are plentiful. After 2008, more applicants explained 18–25% of the rise in skill asks. | Modestino, Shoag and Ballance, "Upskilling", *Review of Economics and Statistics*, 2020 ([record](https://econpapers.repec.org/RePEc:tpr:restat:v:102:y:2020:i:4:p:793-805)) | Optional, for Q&A on degrees: "Economists saw employers raise the bar when job seekers were plentiful." It is a mechanism to consider, not proof it is happening here. |
| Juniors: the shape | A narrow base under a wide middle is an ageing population: fewer young people now, fewer workers later. South Korea has the narrowest base of any large country: ages 0–4 are 29% of its widest band (50–54). Japan is 40%, Italy 42%, France 76%. In these ads, junior is 12% of the widest level (mid). | UN World Population Prospects 2024, 2025 figures, via [populationpyramid.net](https://www.populationpyramid.net/republic-of-korea/2025/); saved as `build/inputs/population_south_korea_2025.csv` | "South Korea has the lowest birth rate in the world." Don't say the ads match Korea; they are narrower still. |
| Moving up | Much of what makes someone senior is tacit: "we can know more than we can tell." | Polanyi, *The Tacit Dimension*, 1966 | Optional. Use it in Q&A if someone asks why ads don't write the business down. |

## The script (about 4:28 at 130 words a minute, about 581 words; about 4:37 with the pauses)

**[Why read job ads?]**
"Economists treat job ads as a record. One team read millions of newspaper ads from 1940 to 2000. The titles stayed the same. The work inside them changed.

So I started a record of our own. Over seven months, I saved about 1,500 ads for analytics engineers. I wanted a snapshot I could compare against later, to see how our field changes. This is snapshot one."

**[One · What is an analytics engineer?]**
"First, what is an analytics engineer? Ask the ads, and no one really agrees. I scored how alike the responsibilities in two ads are, where a hundred means identical. Two analytics-engineer ads from different companies score about four. That's the same as an analytics-engineer ad against a data-engineer ad. Fishtown Analytics gave us the name in 2019. Seven years on, the ads still don't agree where the job stops."

**[One · What do the ads agree on?]**
"But there is a core we agree on. About three ads in four ask you to model the data, test it, report on it, and work with stakeholders. Ninety-five percent ask for SQL. After that, it splits. The top warehouse, Snowflake, is in about a third. The top BI tool, Power BI, is in four in ten. If you hire or train analytics engineers, start from that core."

**[Two · Do ads see what is coming?]**
"Second, ads look backwards. We write them from the skills our team has today, not the ones we'll need. The creator of FastAPI once saw an ad asking for four years of FastAPI. He'd had it for one and a half.

You'll hear 'context engineering' all day here. Four ads in 1,500 use the phrase. About 340 name a semantic layer. A semantic layer defines each metric once, so people and AI agents get the same answer. One ad says it outright: so that 'AI agents can query trusted metrics directly.' I think it's the same work under an older name."

**[Three · What do ads leave unsaid?]**
"Third, the ad asks a lot and tells little. A quarter of ads give the pay. One in ten describes the interview.

Washington and New York require the pay range. Eighty percent of US ads give it. In Europe, under one in five."

**[Three · What does it take to move up?]**
"Growth is different. Here the job description is clear. SQL stays at about ninety-five percent at every level. 'Support' falls. 'Lead', 'roadmap', 'define standards' and 'mentor' all climb. At lead and above, four in five ask you to lead. You stop supporting and start leading.

So job descriptions already say what it takes to grow. Say what the job pays just as clearly. The right people apply, and you spend less time sifting through the wrong ones."

**[Four · Who will be senior next?]**
"Fourth, juniors. This is the part that worries me most. For every junior ad here, there are eight at senior level or above.

On the right is South Korea, which has the lowest birth rate in the world. Its youngest children are under a third of its biggest age group. In these ads, juniors are an eighth.

Today's juniors are the seniors we'll need in five years. A third of senior ads ask you to mentor. If this continues, who will they mentor, and who will be senior next?"

**[Where that leaves us]**
"No one knows exactly what they're doing. But the job description is still ours to write.

This is snapshot one. Six findings held up when tested. They're on my last slide, so ask me.

Write down what you expect. Write down who will teach. Right now, the ads make it really scary to start. Let's spend more time shaping junior roles, and be intentional about the job description."

## Running order

| # | Slide | Clicks | Time | The one number | How sure |
|---|---|---|---|---|---|
| 1 | The record | 3 | 0:00–0:30 | 1,478 ads, April to November | a count |
| 2 | No consensus | 4 | 0:30–1:02 | responsibilities scored 8.7% alike for two ads from one company; 3.8% for two analytics-engineer ads from different companies; 3.9% for an analytics-engineer ad and a data-engineer ad | a score against a baseline; the gap's 95% range includes zero |
| 3 | The core | 2 | 1:02–1:33 | model, test, report and work with stakeholders in about three ads in four; SQL 95%, Python 64%, dbt 55%; top warehouse Snowflake 36%, top BI tool Power BI 40% | duties read from each ad's responsibilities; tools named anywhere |
| 4 | Lagging | 3 | 1:33–2:20 | 4 say "context engineering"; 338 name a semantic layer | phrase matches; the link to AI asks is tested (p < 0.001) and kept for questions |
| 5 | Asymmetry | 3 | 2:20–2:40 | pay in 24% of ads; US 80%, Europe 18% | read from each ad, checked by hand on 60 |
| 6 | Moving up | 4 | 2:40–3:15 | SQL 88–95% at every level; support 92% → 57%; lead or drive 37% at mid → 81% at lead and above; roadmap, define standards and mentor all rise | phrase matches; the rises hold from mid to senior (Holm p < 0.001) |
| 7 | Juniors | 3 | 3:15–3:56 | 1 junior ad for every 8 senior or above; a third of senior ads ask you to mentor | a count; the corpus leans senior |
| 8 | Close | 3 | 3:56–4:28 | none | — |
| 9 | Ask me | 1 | questions | six tested findings | each p < 0.001 |

**Pauses that the timing does not include:** 3 seconds after "He'd had it for one and a half.", 3 seconds after "who will be senior next?", 3 seconds after "You stop supporting and start leading." (about 4:37 in all). This leaves a little spare time, so decide the cuts below before you go on.

**Cut points, decided in advance:**
1. **Behind at 1:40, not yet on "Lagging":** skip "If you hire or train analytics engineers, start from that core."; go straight to the second point.
2. **Behind at 3:20, not yet on "Juniors":** skip the Washington and New York sentence and "The right people apply… sifting through the wrong ones." Keep the ask.
3. **Behind at 4:05, not yet on "Close":** skip the significance sentence. Say "This is snapshot one. Write down what you expect, and who will teach. Be intentional about the job description."

**Never cut:** the opening claim, "who will be senior next?", or the close.

## Slides

The room sees only the visual: no titles, section labels, footers or navigation. You say the headline; the sources are in the table below. Press **n** to show titles and footers while rehearsing, and again to hide them. Each click puts one thing in front of the room.

| # | Slide | The eye goes to | Said, not shown |
|---|---|---|---|
| 1 | The record | 1,478 dots, one per ad, juniors in coral; then the dots fold onto a timeline: the 1940–2000 newspaper ads, 2019 when the role got its name, and 2026 as snapshot one; then an empty dashed "snapshot two" and the line "A job ad is a record of what we expect from each other. This is snapshot one." | the newspaper-ads study |
| 2 | No consensus | three bars, one per click, on the full 0–100% scale: two ads from the same company score 8.7%, the yardstick; two analytics-engineer ads from different companies score 3.8%; an analytics-engineer ad and a data-engineer ad score 3.9%; then "Same title. No closer than a data-engineer ad." | that most ads share the title; Fishtown and the name |
| 3 | The core | eight duty bars with the top four lit and "about three ads in four: model the data, test it, report on it, work with people"; then the tools grouped by kind, one colour each: core (SQL 95%, Python 64%, dbt 55%), warehouse (Snowflake 36%, BigQuery 25%, Databricks 23%), BI tool (Power BI 40%, Tableau 28%, Looker 22%); then "SQL in 95%. Then it splits: the top warehouse and the top BI tool are each in under half." | "if you hire or train analytics engineers, start from that core" |
| 4 | Lagging | "4 of 1,478 ads say 'context engineering'" and "338 name a semantic layer"; then the Multiverse quote; then "Same work. An older name." | the FastAPI story, spoken over the first screen with no picture; what a semantic layer is |
| 5 | Asymmetry | six bars of what ads tell you; then the box around the four most ads leave out; then US 80% against Europe 18% | "read between the lines"; the Washington and New York laws; "I want to challenge that" |
| 6 | Moving up | one chart: SQL flat in grey; then "support or assist" falling; then lead or drive, roadmap or strategy, define standards and mentor or coach climbing, each labelled at the right; then "SQL stays the same. You stop supporting and start leading." | "four in five ask you to lead"; the ask to say the pay as clearly as the growth |
| 7 | Juniors | the level pyramid; then South Korea's 2025 population pyramid beside it, under-20s in coral; then an arrow from the junior bar to the senior bar, "today's juniors are tomorrow's seniors"; then "1 junior ad for every 8 senior. Who will the seniors be in five years?" | "this is the part that worries me most"; that the corpus leans senior; South Korea's lowest birth rate; the senior ask to mentor |
| 8 | Close | three lines, one per click | "no one knows exactly"; the pointer to the last slide |
| 9 | Ask me | six cards of tested findings | nothing; leave it up during questions |

## Numbers and how sure

| Claim | Source | How sure |
|---|---|---|
| 1,478 ads, saved April to November 2026 | `build/inputs/ai_flags.csv`, by the month each ad was saved; pinned to commit 037ff713 | A count. One person's searches, so the mix leans senior and English-language. |
| Most ads share the title: 676 of 1,064 are "analytics engineer" once levels and team names are removed | A one-off check on `titles_stats.json`: level words and anything after a dash or comma removed. Not in the build | A rough count. Said as "most", not as a number. |
| Responsibilities in two analytics-engineer ads from different companies score 3.8% alike; an analytics-engineer ad and a data-engineer ad 3.9%; two ads from one company 8.7% | TF-IDF cosine similarity of the captured responsibility bullets only (no requirements, stack or benefits), 1,159 English ads with at least 40 words of bullets. Job read from the title: "data engineer" must appear as the job, and combined titles such as "Analytics & Data Engineer" or "Data Engineer / BI Developer" are left out. Related names count as one company: Amazon with AWS and Prime Video, Toss with its units, country branches with their parent (`make_similarity_matrix.py`, `duties_only`, run on the snapshot at 037ff713) | Resampling whole companies 200 times: analytics-engineer pairs 3.6–3.9%, analytics-engineer and data-engineer pairs 3.5–4.3%, the gap −0.2 to +0.5 points, so "about the same". The level moves from 2% to 7% with the settings; the two stay equal at every setting. Only 21 data-engineer ads, and most were found by searches for analytics roles. |
| 4 ads say "context engineering"; 338 name a semantic layer | Phrase matches, all ads (`prep_data.py`, `semantics.layer`). "Semantic model" is left out because it is Power BI's name for a dataset; with it, the count is 451 | Counted. Every "context engineering" match read: Block Labs, Ironclad, Meta, Crystalloids. |
| Ads that ask for AI name a semantic layer 33% of the time, other ads 14% (senior ads: 37% against 16%) | Cochran-Mantel-Haenszel test within level and ad-length bands (`prep_data.py`) | Tested, p < 0.001. The Multiverse quote is one ad, shown as an example, not as proof. |
| Pay in 24% of ads; US 80%, Europe 18% (176 of 980) | Read from each ad; regions from `regions.py` | A hand read of 60 ads agreed on 55 to 60 for each item. The US is high where state laws require it; the corpus can't separate law from culture. |
| 1 junior ad for every 8 senior or above (85 against 692) | Level read by an AI model, all ads | A count. The corpus leans senior because of how it was collected. Say so. |
| A third of senior ads ask you to mentor | 18 of 50 senior ads read by hand; the phrase match gives 36% | Hand-read sample. The phrase match rises from 19% at mid to 36% at senior (Holm p < 0.001). |
| More than half of junior ads mention a degree, about a third at other levels | 46 of 85 junior, 449 of 1,393 at other levels | Tested, Fisher p < 0.001. |
| SQL 88–95% at every level; set direction 0%, 17%, 43%, 79% from junior to lead and above | English ads with a level (59, 536, 487, 116). SQL is a phrase match. Set direction is the autonomy level an AI model gave each ad at classification: "strategic" means it sets direction and priorities (define, establish, own, shape, lead, drive, architect) (`stats2.ladder_shares`) | SQL does not change. Set direction rises at every step (Holm p < 0.001). The same model also read the level, so part of the rise may be built in; the plain verb matches below rise too, which they could not if it were only that. The website uses the same field on newer data, so its figures differ slightly. |
| Mentoring rises with level: 19% at mid, 36% at senior, 48% at lead and above | Phrase match on mentoring, coaching or code review (`ladder.core`) | Mid to senior tested, Holm p < 0.001. |
| The verbs rise too, as plain phrase matches: own 31% → 43% → 57% → 66%; lead or drive 44% → 37% → 52% → 81%; roadmap, priorities or strategy 15% → 19% → 30% → 58%; define standards 12% → 14% → 31% → 57%. Support or assist falls: 92% → 67% → 62% → 57% | Phrase matches in each ad's duties and requirements (`more_stats.py`, `VERBS`) | Holm-corrected within the verb panel; check `stats2.ladder.tests` for each step. |

## Q&A ready

- **"Isn't this just your job search?"** Yes. It is one person's searches, mostly in English, so the mix leans senior and the 1-in-8 junior ratio is high for that reason too. That is why it is snapshot one, and why the comparison matters more than any single number.
- **"How is similarity measured?"** Only each ad's list of responsibilities is used, not the requirements or the stack. Each list becomes a set of words and two-word phrases, weighted by how rare each is across all ads. Words in most ads, like "data", count for little; specific phrases count for a lot. The score compares two ads' lists: 100% is identical, 0% is nothing in common. It is a score, not the share of words two ads have in common.
- **"Isn't 4% just what this measure always gives?"** Yes, and that is why the slide compares. Two analytics-engineer ads score about the same as an analytics-engineer ad and a data-engineer ad (3.8% against 3.9%). Two BI ads score a little higher with each other than with analytics-engineer ads (4.1% against 3.4%). The level moves with the settings, from 2% to 7%, but the two stay equal at every setting. Two ads from one company score 8.7%, partly because one team writes them. There are only 21 data-engineer ads, and most were found by searches for analytics roles.
- **"Does saying the pay really bring better candidates?"** The evidence is mostly employer surveys: in SHRM's, 70% of organisations listing ranges said they got more applicants. A 2026 study found very wide ranges put off women more than men, and that adding how offers are set fixes most of it. It's a view I hold, not a result from these ads.
- **"Does the EU directive put pay in the ad?"** Not necessarily. It gives applicants the right to the pay range before the interview, and countries are writing it into law at different speeds.
- **"Are juniors being replaced by AI?"** The ads can't show a trend yet; that's what later snapshots are for. Outside these ads, Stanford finds US employment of 22-to-25-year-olds in AI-exposed jobs 19% below trend; the authors call it a pattern, not proof.
- **"Do juniors come in as analysts instead?"** Possibly. These are analytics-engineering and BI ads, so analyst roles may be a door this corpus doesn't see.
- **"What's statistically significant here?"** Leave slide 9 up. Senior ads asking for AI name a semantic layer more (37% against 16%, holding level and ad length fixed, leaving out Power BI's "semantic model"). Mid-level dbt ads ask you to define, own or lead more than Power BI ads (22% against 4%). Senior ads ask you to mentor more than mid ads (36% against 19%). Junior ads mention a degree more (54% against 32%). French junior ads ask for a master's (12 of 15, against 1 of 70). 25 of 28 benefit types differ by region.
- **"Do ads mention the business?"** About a third at every level, and it doesn't rise. What rises is setting direction. Polanyi's tacit knowledge, "we can know more than we can tell", may explain why the business itself is hard to write down.
- **"What will you compare next time?"** The same counts, on ads saved from now on: the junior share, the AI asks, "context engineering", pay in the ad, and the set-direction line.

## Before the slides are final

1. **Check the FastAPI numbers.** His 11 July 2020 post says "4+ years of experience in FastAPI" and "1.5+ years of experience since I created that thing". The slide shows both posts as text, the 2020 one and his 6 July 2026 Bluesky post, each with his profile picture from Bluesky (`build/inputs/img/tiangolo_avatar.jpg`).
2. **Check the Carroll wording** against her 2019 post before saying how Fishtown described the role.
3. **Check the EU directive's Article 5** on EUR-Lex if you want to say anything about pay in the ad.
4. **Read 20 semantic-layer matches** and confirm most mean a semantic layer, not a passing word.
5. Time a run-through against the 5-minute slot. It is about 5:00 with pauses, so rehearse the three cuts too.
6. Rebuild with `build/build.py` and click through `jd_deck_v7.html` once.
