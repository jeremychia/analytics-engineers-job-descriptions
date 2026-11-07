# Job ads as a record — v7, for a senior room

Draft 1, 6 November 2026. The deck is `jd_deck_v7.html` (eight slides and one for questions, built from `build/src/slides_v7.js` and `build/src/s_v7.js`). The slot is 5 minutes.

## The angle

- **The opening claim:** a job ad is a record of what we expect from each other. Read enough of them, over time, and you can see a field change.
- **Why this corpus exists:** to take a first snapshot, so later snapshots can be compared with it.
- **Five things snapshot one shows:**
  1. **No consensus:** analytics engineering still has no agreed job. The ads share almost no wording across companies.
  2. **Ads lag:** they describe the team we have, not the one we're building. "Context engineering" is almost absent; "semantic layer" is common.
  3. **Information asymmetry:** the ad asks a lot and tells little. Where the law asks for pay, ads give it.
  4. **Juniors:** few junior ads, a senior ask to mentor, and a degree asked of juniors more than anyone.
  5. **Moving up:** the skills stay flat, and the rule that seniors move closer to the business stays unwritten.
- **The close:** no one knows exactly, but the ad is ours to write. Be intentional, and make room for juniors.
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
| Juniors | Employers raise degree and experience asks when job seekers are plentiful. After 2008, more applicants explained 18–25% of the rise in skill asks. | Modestino, Shoag and Ballance, "Upskilling", *Review of Economics and Statistics*, 2020 ([record](https://econpapers.repec.org/RePEc:tpr:restat:v:102:y:2020:i:4:p:793-805)) | "Economists saw employers raise the bar when job seekers were plentiful." It is a mechanism to consider, not proof it is happening here. |
| Moving up | Much of what makes someone senior is tacit: "we can know more than we can tell." | Polanyi, *The Tacit Dimension*, 1966 | Optional. Use it in Q&A if someone asks why ads don't write the business down. |

## The script (about 4:52 at 130 words a minute, about 630 words; about 5:00 with the pauses)

**[Why read job ads?]**
"A job ad is a small promise. It says what we expect from the person we hire, and what they can expect from us.

Economists treat job ads as a record. One team read millions of newspaper ads from 1940 to 2000. The titles stayed the same. The work inside them changed.

So I started a record of our own. Over seven months, I saved about 1,500 ads for analytics engineers. I wanted a snapshot I could compare against later, to see how our field changes. This is snapshot one."

**[One · What is an analytics engineer?]**
"First, we still don't agree on what the job is. These ads use 442 different titles. Each row and column here is an ad, and darker means more shared wording. Two ads from different companies share about four percent. Two from the same company share about a quarter.

Fishtown Analytics gave us the name. It was the work between the analyst and the engineer, the part neither wanted to own, done with software engineering habits. Seven years on, the ads still don't agree where it starts and stops."

**[Two · Do ads see what is coming?]**
"Second, ads look backwards. We write them from the skills our team has today, not the ones we'll need. The creator of FastAPI once saw an ad asking for four years of FastAPI. He had one and a half.

You'll hear 'context engineering' all day here. Four ads in 1,500 use the phrase. Over four hundred say 'semantic layer'. The work is arriving under an older name. And four in ten ads that ask for AI only say things like 'curiosity to leverage AI'. No one knows how to write it down yet."

**[Three · What do ads leave unsaid?]**
"Third, the ad asks a lot and tells little. I wanted to learn to read between the lines. A quarter of ads give the pay. One in ten describes the interview. One in a hundred says how big the team is.

Where the law asks, ads answer. Washington and New York require the pay range. Eighty percent of US ads give it. In Europe, under one in five.

Employers hold the information, and silence feels safe. I want to challenge that. Say what the job is and what it pays. The right people apply, and you spend less time sifting through the wrong ones."

**[Four · Is there a way in?]**
"Fourth, juniors. This is the part that worries me. For every junior ad here, there are eight at senior level or above. These ads lean senior because of how I found them.

And a third of senior ads ask you to mentor. Mentor whom? Someone has to reconcile that."

**[Four · What do we ask of juniors?]**
"And the juniors who do get an ad? More than half of those ads mention a degree. At every other level, it's a third. That gap is beyond chance. Economists saw employers raise the bar when job seekers were plentiful. Are we pulling the ladder up behind us?"

**[Five · How do you move up?]**
"Fifth, moving up. The skills in the ads stay flat from mid to lead. SQL is in ninety-five percent at every level. Understanding the business is in about a third, also at every level.

Yet we all know the rule. Think of the staff engineers you know. The higher you go, the closer you are to the business, and the more of your time goes to people. Two in three ads don't say so."

**[Where that leaves us]**
"So where does that leave us? No one knows exactly what they're doing. But the ad is still ours to write.

This is snapshot one. Not many relationships held up as significant; the ones that did are on my last slide, so ask me. I'll keep reading, so next year we can see what changed.

Write down what you expect. Write down who will teach. Right now, the ads make it really scary to start. Let's spend more time shaping junior roles, and be intentional about the ad."

## Running order

| # | Slide | Clicks | Time | The one number | How sure |
|---|---|---|---|---|---|
| 1 | The record | 3 | 0:00–0:41 | 1,478 ads, April to November | a count |
| 2 | No consensus | 2 | 0:41–1:22 | 442 titles; 4% shared wording across companies, 23% within | a count |
| 3 | Lagging | 5 | 1:22–2:05 | 4 say "context engineering"; 451 say "semantic layer"; 284 of 684 AI asks are vague | phrase matches |
| 4 | Asymmetry | 3 | 2:05–2:53 | pay in 24% of ads; US 80%, Europe 18% | read from each ad, checked by hand on 60 |
| 5 | Juniors | 3 | 2:53–3:15 | 1 junior ad for every 8 senior or above; a third of senior ads ask you to mentor | a count; the corpus leans senior |
| 6 | What we ask | 1 | 3:15–3:37 | 54% of junior ads mention a degree, about a third at other levels | tested, p < 0.001 |
| 7 | Moving up | 3 | 3:37–4:12 | SQL 95% and the business about a third, at every level | a phrase match |
| 8 | Close | 3 | 4:12–4:52 | none | — |
| 9 | Ask me | 1 | questions | six tested findings | each p < 0.001 |

**Pauses that the timing does not include:** 3 seconds after "He had one and a half.", 3 seconds after "Mentor whom?", 3 seconds after "Two in three ads don't say so." (about 5:00 in all). There is no spare time, so decide the cuts below before you go on.

**Cut points, decided in advance:**
1. **Behind at 1:30, not yet on "Lagging":** skip the Fishtown description; keep "Seven years on…".
2. **Behind at 3:00, not yet on "Juniors":** skip the Washington and New York sentence and "I want to challenge that… sifting through the wrong ones."
3. **Behind at 4:20, not yet on "Close":** skip the significance sentence. Say "This is snapshot one. Write down what you expect, and who will teach. Be intentional about the ad."

**Never cut:** the opening claim, "Mentor whom?", or the close.

## Slides

The room sees only the visual: no titles, section labels, footers or navigation. You say the headline; the sources are in the table below. Press **n** to show titles and footers while rehearsing, and again to hide them. Each click puts one thing in front of the room.

| # | Slide | The eye goes to | Said, not shown |
|---|---|---|---|
| 1 | The record | 1,478 dots, one per ad, juniors in coral; then the dots fold onto a timeline: the 1940–2000 newspaper ads, 2019 when the role got its name, and 2026 as snapshot one; then an empty dashed "snapshot two" and the line "A job ad is a record of what we expect from each other. This is snapshot one." | "a small promise" |
| 2 | No consensus | 442 titles; then the similarity square with 4% and 23% | Fishtown and the name |
| 3 | Lagging | "How it started": Ramírez's 2020 post (4+ years asked, 1.5 since he created it); then "How it's going" beside it: his 2026 Bluesky post ("I might not have enough experience to apply… 100k GitHub stars"); then 4 against 451, which replaces it; then the vague AI ask; then "Ads describe the team we have. Not the one we are building." | "we write them from the skills our team has today" |
| 4 | Asymmetry | six bars of what ads tell you; then the box around the four most ads leave out; then US 80% against Europe 18% | "read between the lines"; the Washington and New York laws; "I want to challenge that" |
| 5 | Juniors | the level pyramid with its narrow base; then "A third of senior ads ask you to mentor."; then "Mentor whom?" | "this is the part that worries me"; that the corpus leans senior |
| 6 | What we ask | 46 coral dots; the junior bar at 54% against 31–34% | the upskilling research |
| 7 | Moving up | two flat lines; then "The higher you go, the closer to the business. Two in three ads don't say so." | the staff engineers; "more of your time goes to people" |
| 8 | Close | three lines, one per click | "no one knows exactly"; the pointer to the last slide |
| 9 | Ask me | six cards of tested findings | nothing; leave it up during questions |

## Numbers and how sure

| Claim | Source | How sure |
|---|---|---|
| 1,478 ads, saved April to November 2026 | `build/inputs/ai_flags.csv`, by the month each ad was saved; pinned to commit 037ff713 | A count. One person's searches, so the mix leans senior and English-language. |
| 442 titles among 1,064 ads titled analytics engineer | `titles_stats.py` | A count. |
| 4% shared wording across companies, 23% within a company | TF-IDF cosine similarity on duties and requirements, 1,171 English ads (`make_similarity_matrix.py`) | A count, no test. "Shared wording" is not the same as "same job", but two ads that share 4% of their words are not describing one agreed role. |
| 4 ads say "context engineering"; 451 say "semantic layer" or "semantic model" | Phrase matches, all ads (`prep_data.py`, `semantics`) | Counted, every "context engineering" match read: Block Labs, Ironclad, Meta, Crystalloids. 86 of the 451 are Power BI's "semantic model". |
| 284 of 684 ads that ask for AI only ask vaguely | AI pipeline (`ai_flags.csv`): vague = no named tool or task | Model-read, first pass. |
| Pay in 24% of ads; US 80%, Europe 18% (176 of 980) | Read from each ad; regions from `regions.py` | A hand read of 60 ads agreed on 55 to 60 for each item. The US is high where state laws require it; the corpus can't separate law from culture. |
| 1 junior ad for every 8 senior or above (85 against 692) | Level read by an AI model, all ads | A count. The corpus leans senior because of how it was collected. Say so. |
| A third of senior ads ask you to mentor | 18 of 50 senior ads read by hand; the phrase match gives 36% | Hand-read sample. The phrase match rises from 19% at mid to 36% at senior (Holm p < 0.001). |
| More than half of junior ads mention a degree, about a third at other levels | 46 of 85 junior, 449 of 1,393 at other levels | Tested, Fisher p < 0.001. |
| SQL 95% and the business about a third, at every level | English ads with a level, phrase match | Counted. The business match is a first pass. |
| Two in three ads don't name the business | 427 of 1,198 English ads with a level name it | Phrase match. Say "don't say so", not "don't need it". |

## Q&A ready

- **"Isn't this just your job search?"** Yes, and the talk says so. It is one person's searches, mostly in English. That is why it is snapshot one, and why the comparison matters more than any single number.
- **"Is the similarity measure fair?"** It counts shared wording, not shared meaning. Two ads can describe one job in different words. But within one company, ads share about six times as much wording as across companies, so the measure does pick up sameness when it is there.
- **"Does saying the pay really bring better candidates?"** The evidence is mostly employer surveys: in SHRM's, 70% of organisations listing ranges said they got more applicants. A 2026 study found very wide ranges put off women more than men, and that adding how offers are set fixes most of it. It's a view I hold, not a result from these ads.
- **"Does the EU directive put pay in the ad?"** Not necessarily. It gives applicants the right to the pay range before the interview, and countries are writing it into law at different speeds.
- **"Are juniors being replaced by AI?"** The ads can't show a trend yet; that's what later snapshots are for. Outside these ads, Stanford finds US employment of 22-to-25-year-olds in AI-exposed jobs 19% below trend; the authors call it a pattern, not proof.
- **"Do juniors come in as analysts instead?"** Possibly. These are analytics-engineering and BI ads, so analyst roles may be a door this corpus doesn't see.
- **"What's statistically significant here?"** Leave slide 9 up. Senior ads asking for AI name a semantic layer more (46% against 25%, holding level and ad length fixed). Mid-level dbt ads ask you to define, own or lead more than Power BI ads (22% against 4%). Senior ads ask you to mentor more than mid ads (36% against 19%). Junior ads mention a degree more (54% against 32%). French junior ads ask for a master's (12 of 15, against 1 of 70). 25 of 28 benefit types differ by region.
- **"Why don't ads write the business down?"** It's hard to write. Polanyi called it tacit knowledge: we know more than we can tell. SQL is easy to list, so it gets listed.
- **"What will you compare next time?"** The same counts, on ads saved from now on: the junior share, the AI asks, "context engineering", pay in the ad, and the business line.

## Before the slides are final

1. **Check the FastAPI numbers.** His 11 July 2020 post says "4+ years of experience in FastAPI" and "1.5+ years of experience since I created that thing". The slide shows both posts as text, the 2020 one and his 6 July 2026 Bluesky post, each with his profile picture from Bluesky (`build/inputs/img/tiangolo_avatar.jpg`).
2. **Check the Carroll wording** against her 2019 post before saying how Fishtown described the role.
3. **Check the EU directive's Article 5** on EUR-Lex if you want to say anything about pay in the ad.
4. **Read 20 semantic-layer matches** and confirm most mean a semantic layer, not a passing word.
5. Time a run-through against the 5-minute slot. It is about 5:00 with pauses, so rehearse the three cuts too.
6. Rebuild with `build/build.py` and click through `jd_deck_v7.html` once.
