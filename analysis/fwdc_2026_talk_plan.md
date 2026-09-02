# Forward Data Conference 2026 — Lightning Talk Plan

**When:** Monday 16 November 2026. Doors 08:30. Programme runs to about 21:30.
**Where:** Maison Internationale, Cité Internationale Universitaire de Paris, 17 bd Jourdan, 75014.
**Slot:** Lightning talk, 10 minutes.
**Track you were accepted into:** Theme 01, *Data Foundations for Humans & AI* → sub-track 02, *Data Quality & Trust in the Agentic Era*.
**Who runs it:** Hymaïa, a French data consultancy.
**Still to confirm:** the programme was due out in September 2026. Check that you are on it, which stage, and what time. Also check whether they published your abstract word for word.

---

## 1. Who is in the room

| | |
|---|---|
| People | About 650 |
| Speakers | 50+ |
| Stages | 3, running at the same time |
| Sessions | 40+ talks and workshops in about 6 hours |
| Crowd | Mostly the French data and AI community |
| Language | Talks in French or English. Content level "intermediate to advanced" |
| Sponsors | Omni, ClickHouse, MotherDuck, Starlake.ai |

Three stages at once means your room holds roughly 100 to 250 people.

Group tickets are 20% off for five or more, and the conference asks whole teams to come. So managers often sit with the people who report to them. That matters for a talk about job ads. Some people in the room wrote the ads. Some read them. Both are there, maybe in the same row.

**Who they are.** The conference recruits data engineers, analytics engineers, data architects and AI engineers. Also platform engineers, ML engineers, software engineers, product engineers, data scientists and analysts. Also heads of data, CDOs, CAIOs, engineering managers, tech leads and CISOs.

Your sub-track names its own audience: data engineers, platform engineers, analytics engineers, tech leads. That is a hands-on crowd. They want something they can use, not a market report.

**What mood they are in.** All four themes this year are about AI. But the conference's own copy is blunt about things not working:

- "Models stopped being the hard part."
- "A large share of agent failures are context failures."
- Agent designs, including "a clear-eyed look at those that should not have been built."
- Operating models: "what survived the data mesh hype."

So: they were sold an agentic future and are now marking it. Sceptical of vendors. They want evidence.

**One thing about the French market.** 29% of the French job ads in your corpus come from services companies, against 4% everywhere else.

**ESN** stands for *Entreprise de Services du Numérique* — the standard French term for an IT and engineering services company. It replaced the older term SSII. These firms hire engineers and place them on client projects. It is a normal and large part of how French tech employment works, and there is no English word that maps onto it cleanly, which is part of why it is worth naming on stage.

Ten of the 35 French ads in the corpus come from this kind of employer. Most are genuine ESNs or consultancies — ALTEN, Niji, JEMS, Néosoft, eXalt, Skiils, Size Up Consulting. Two are closer to agencies or talent marketplaces (YURI & NEIL, Licorne Society), so call the group "services companies and staffing intermediaries" if you want to be exact. **The label comes from a rule over company names, so treat 29% as approximate.**

Why this matters for the talk, beyond accuracy: a meaningful share of the room works this way, and the conference organiser is a consultancy itself. So people in that room are building for clients, not for an employer's own data team.

**This changes your pronouns more than anything else in this section.** "Your data team" and "your market" quietly exclude them.

**This changes your pronouns.** Do not say "your data team" or "your market." Say "this market" and "whatever you are building for." Otherwise you talk past the consultants.

---

## 2. The rule the whole talk depends on

Say things about **your tool**. Never about **a country**.

Good: "My English-only classifier cannot see French data-quality language."

Bad: "French companies don't care about data quality."

Both sentences carry the same fact. They are not the same act. The first blames your tool. The second blames the room. And a correction does not undo a vivid claim — that is your own point about stories beating statistics, working against you.

You never published the wrong number. You caught it. So you owe nobody a confession. Calling it one makes the mistake sound worse than it was and hides the thing that actually worked, which was running two tools over the same text.

Also skip any joke about French being hard, or about you not speaking it. It is the easy laugh and the wrong one. It makes the language the problem. Your finding is that the tool was the problem.

### The wider version of the rule: insight, not accusation

The same trap shows up every time the data touches a group of people — a country, ESNs, recruiters, managers, this room. The talk must be interesting about them, never accusing.

The difference is not politeness. It is where the explanation sits.

| Accusing | Insightful |
|---|---|
| "Consultancy ads are vaguer." | "An ESN ad often has to describe a capability, because the client project isn't assigned yet." |
| "Managers write lazy job ads." | "The job-ad genre has no settled vocabulary for a quality bar, so everyone reaches for the same words." |
| "Recruiters strip out the technical detail." | "Ads with no technical fingerprint read as execution-only work — whoever typed them." |
| "French companies don't care about data quality." | "All 16 of my patterns are in English." |

Every sentence on the right explains a **structure or a mechanism**. Every sentence on the left assigns a **failing to a person**. Same facts. One teaches; the other picks a fight you cannot win from a stage.

Three habits that keep you on the right side:

1. **Test the hypothesis about a group, then report the result — especially when it clears them.** "I checked whether services-company ads carry less quality language. They don't." That is the most trust-building move available to you, and it costs eight seconds.
2. **Put the failing on a tool or a document, never on a job title.** Tools and genres cannot be offended, and they are the honest culprits anyway.
3. **When a number looks unflattering to a group, ask what structural reason would produce it** before you present it. If you cannot find one, you probably have a measurement problem — which is, after all, the whole subject of this talk.

---

## 3. What the room gains

This is the part the earlier draft got wrong. Every version of this talk so far was about the project. The room does not need to admire a side project. They need something they can act on.

The test for any version: **can someone change something on Monday because they sat through it?** "Be aware of X" fails that test. "Add this column, change this alert" passes.

---

## 4. The panel

Five reviewers looked at the material from different angles: what a practitioner changes on Monday, what a hiring manager gains, what it says about anyone's career, what the programme is missing, and what story shapes put the audience at the centre. They produced fourteen concepts and ran their own checks on the data. Here is what survived.

### The four strongest ideas

**① Aggregate tests pass while a segment is wrong.** This is the best number anyone found, and it is new.

| What a normal pipeline reports | Value |
|---|---|
| Job ads matching at least one theme | 624 of 631 = **98.9%** |
| Bullets matching at least one theme | 4,285 of 5,164 = **83.0%** |
| French job ads matching at least one theme | **26 of 26 = 100%** |
| Worst language group, per bullet | 114 of 177 = **64.4%** |

And the payoff:

| Data Quality & Testing prevalence | |
|---|---|
| Reported across the whole corpus | 71.6% |
| What it would be if French were read properly | 72.8% |
| **Error across the whole corpus** | **+1.2 points** |
| **Error inside the French segment** | **+28 points** |

The whole-corpus number was off by one point. The segment was off by twenty-eight. And the health metric read **100% in exactly the group that was broken.**

That is the talk. Coverage metrics cannot see this kind of bug, because the bug is an absence.

**② Refuse it, don't watch it.** Your repo already contains a clean natural experiment. Two fields, same model, same run, same documents:

| Field | What protects it | Quotes that match the source |
|---|---|---|
| `responsibilities` (5,110 bullets) | `write_jd.py` refuses the write unless every bullet is a literal substring | **99.96%** |
| `evidence` (5,745 citations) | nothing | **90.9%** |

The only difference is that one field was allowed to refuse to be written.

This is genuinely against the grain of the programme. The whole second theme is evals and observability — watch the agent, trace the agent. Your point is the opposite: for this class of failure, don't watch it, **block it at the write path.**

**③ "Data quality" carries no information.** The phrase appears in 42% of the ads. It does not predict the company's actual risk. `domain_risk × testing_framing` is V=0.086, p=0.077 — and in 200 random half-samples it reaches significance only 22% of the time. High-risk domains say the hire owns quality 70% of the time. Low-risk say it 50% of the time. The gap does not hold.

What does carry information is verbs, not nouns. "own/ownership" appears in 32% of ads and predicts direction-setting work: 51% vs 25% (p=5×10⁻⁹). "Documentation" predicts nothing at all (+0 points, p=1.0). "Scalable" +3. "Best practices" +4.

And what an ad says it is **afraid** of predicts how it runs 2.5× better than what sector it is in: `loss_aversion × rigour` V=0.383 versus `domain_risk × rigour` V=0.152.

**④ Nobody defines the thing they are handing over.** 64% of ads make the hire personally responsible for data quality. Almost none say what that means. Among those 369 ads: 4.3% name an SLA or SLO. 3.8% mention an incident. 3.8% mention a data contract. 0.8% mention on-call. Across all 576, only 19 name a data-quality tool.

The insight here is about the genre, not about the people writing in it. Specificity does not track who wrote the ad at all — 15% / 13% / 11% for manager / mixed / recruiter, p=0.90. Managers write 77% of these ads, and their ads are no more specific than anyone else's. So this is not laziness and not a recruiter problem. **The job-ad genre simply has no settled vocabulary for describing a quality bar**, so everyone reaches for the same handful of words, because those are the words that exist.

Which means the fix is available rather than hard. The 15% who name a consequence read completely differently, and it takes one sentence: Rabot Energy's "errors surface in CI rather than in a management meeting"; Mimecast's "define and enforce the data quality bar: tests, freshness SLAs, lineage, incident response." Nobody needed a better attitude. They needed a more specific sentence.

### The structural fix to the story

One reviewer found the flaw in the old outline, and it is worth stating plainly.

The old cold open said: two tools disagreed by 39 points, which one was wrong? **Every engineer in that room solves that in twenty seconds.** The regex is in English. The ads are in French. There is no mystery.

The real question is not *why did it miss*. It is **why did nothing tell me it missed.** That was buried in the take-home. It belongs in the conflict.

And there is a one-word fix for the speaker-centred middle section. The three hypotheses you ruled out are not *your* hypotheses. They are **the room's objections**. Same slides, same numbers, different owner:

> Old: "Here's how I tried to kill it, in the order I actually tried them."
> New: "Nobody in this room believes that number, and I know which three reasons you don't."

Zero content lost. The longest stretch of the talk flips from being about you to being about them. And it is closer to the original storytelling advice, not further from it — the stated reason to spend time on failure is that the *audience* learns from it. An audience learns more from having its own objection killed.

---

## 5. Recommendation

**Make the room the second instrument. Pay it off with the segment-versus-aggregate numbers. End on "refuse it, don't watch it."**

Why this one:

- The audience is doing the work in the first twenty seconds. That is what "about them, not about you" actually looks like in a structure.
- The payoff is a Monday change with numbers behind it: record the axis your rules cannot read, and replace one coverage number with a per-group table.
- "Block it, don't monitor it" is the one thing on this programme nobody else will say.
- It stays exactly inside the track you were accepted into.
- It keeps the §2 rule intact. Every claim has a tool as its subject.

Total time you spend talking about yourself: **about 35 seconds**, in three places (see §6).

**What I would not do.** Don't build the talk on the hiring-manager angle (④) or the career angle (③), even though both are strong. Two reviewers flagged the same problem: `jd_authorship` is coded partly *from* how technical the text sounds, and `testing_framing` is coded from testing language. So "vague ads sound vague about testing" is partly true by definition. `jd_authorship` also has the weakest self-agreement of any dimension you have. Your own report excludes pairs like this elsewhere. Leading with it would be inconsistent.

Keep ③ and ④ as material for a longer slot somewhere else. The AI finding in particular deserves it (see §7).

---

## 6. The talk, beat by beat

Budget 9:00. Lightning slots start late and you will talk faster than you rehearse.

### Act 1 — The test, and the mirror (0:00–2:30)

**Cold open.** No title slide. No bio. Ask them to work first.

> "Before I tell you anything about myself, I need six seconds of work from you.
> This is one line from a job ad for an analytics engineer, in this market, this year.
> *[full screen, untranslated, three full seconds of silence]*
> Decide, in your head: does that line make data quality part of this job? Yes or no.
> …You all got there in about two seconds. You are the second instrument in this talk. The first one scored that line **zero**."

Use one of these. All three are real, and all three score zero against the live pattern in `responsibility_taxonomy.py`:

- **Emeria (Reemia)** — "Garantir la qualité et la fiabilité : tu veilles à ce que chaque chiffre communiqué soit juste. Tu mets en place les bonnes pratiques de gouvernance et de contrôle qualité pour assurer l'intégrité de la donnée dans toute l'entreprise."
- **YURI & NEIL** — "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting."
- **Decathlon Digital** — "Définir la stratégie de nos stacks techniques et garantir la qualité, la fiabilité et la pertinence des données exposées."

Prefer Emeria or YURI & NEIL. A Decathlon employee may well be in the room, and you do not need a named French employer on a slide about a failure, even one where the ad comes out looking good.

Then show the pattern itself, all fifteen words of it. Admit it is reasonable. They will see instantly why it missed, and that they would have written the same one.

**Provenance — 12 seconds, the first of your three.**

> "I have been reading these ads for a year. Two programs read them for me: a keyword pass over 5,163 responsibility bullets, and an LLM pass over ten behavioural dimensions."

**The mirror.** 636 ads, 36 from this market. Named on screen: Decathlon, Qonto, BeReal, Welcome to the Jungle, Electra, Orano, Pluxee, Cultura. Three facts:

- **83% name dbt — the highest share of any region in the corpus**
- **29% come from ESNs and services companies, against 4% elsewhere** — the most distinctive structural feature of this market, and the one with no equivalent in the corpus's other regions
- **63% are language-gated. 46% hard-require French.**

All three are neutral facts about how this market is shaped. None is a criticism. The dbt number is a genuine compliment — this is the most dbt-fluent hiring market in the corpus — so lead with it.

Say the language-gate one flat and move on. Do not flag it. It is the cause of the bug and it pays off in Act 2.

Phrase the whole slide as "36 of these were written by people in this building." Not "36 of them are yours" — for everyone in the room who builds for clients rather than for an in-house team, that is not true.

### Act 2 — Their objections (2:30–6:15)

**The number.** Attribute it to the tool. Never say it in your own voice.

> "Across the French-language ads, my keyword pass reports data-quality language in 35% of them, against 74% of the English-language ones. p<0.0001. Twelve of sixteen themes, same shape."

**Two seconds of silence.** Script it. Rehearse it with a timer. Untrained speakers cut it to half a second because it feels like dying on stage. It isn't.

Then hand it to them:

> "Nobody in this room believes that number, and I know exactly which three reasons you don't."

Kill them in their voice. Same sentence shape each time.

**Objection 1 — the French ads are shorter.** Partly true. Median 6.5 bullets versus 7, and that is significant at p=0.019. So control for it. The gap still runs −33 points among short ads, −31 among medium, −37 among long. Per bullet it is 6.7% versus 16.6%, p=0.000003. Length explains none of it.

**Objection 2 — it's the mix of employers, not the language.** This one needs care, because you are saying it in a room where a lot of people work for services companies, at a conference run by one. Do not put it as "maybe consultancy ads are vaguer." That is an accusation, it is the same mistake as blaming a country, and it is not even the interesting hypothesis.

The interesting version is about **how the job is known at the time of writing**, not about who wrote it:

> "29% of the French ads come from services companies, against 4% elsewhere. An ESN ad often describes a role before the client project is assigned — so it has to describe a capability rather than a specific system. That is a real structural difference, and it is a good reason to expect different language. So I checked whether it explains the gap."

Then the answer, which is a point **in their favour** and worth delivering as one:

> "It doesn't. Among non-services employers alone the gap is still −39 points (p<0.0001). And services-company ads carry data-quality language at statistically the same rate as everyone else's — 60% versus 74%, p=0.19, not significant. Whatever is going on, it isn't that."

Same evidence, and the room hears you check a hypothesis about them and clear it, rather than assert one. That is the difference between insight and blame throughout this talk: **describe a structure, test it, report what you found — including when the answer exonerates the group you tested.**

**Objection 3 — the two markets really do emphasise different things.** The reasonable answer, and the one you would be right to hold until you see a second tool.

**Then fire.**

> "63% of these ads are written in French. All 16 of my patterns are in English."

That is your second speaker moment — 8 seconds, and the funniest line in the talk. Let it sit. The broken tool needs a named owner here, or the deficit drifts back onto the market by default.

**The receipt.** Callback to the opening line: "The line you voted on was Emeria's." Then name the villain:

> "A zero means two things. 'It isn't there' and 'I can't read it.' Same zero."

Have a good Q&A answer ready: Skiils' ad *does* match, because the French word "validation" happens to hit the `validat` stem. The misses are lexical accident, not anything systematic.

### Act 3 — Verdict and transfer (6:15–9:00)

**The control run.** Same ads, LLM pass. 9 of 10 dimensions show no significant difference. Testing framing reads 60% vs 65%, **p=0.59**. The idea was fine. The tool wasn't. Volunteer the one dimension that does differ (`domain_risk`, p=0.011). It makes the other nine believable.

Say this once, out loud, so it does not read as an advert for LLMs in a room that distrusts vendors:

> "I am not telling you to swap rules for a model. The model here is a second opinion, not a better one. At this sample size I can detect a 39-point tool error. I cannot detect a real 5-point difference."

**The real conflict.** This is the part nobody guesses:

> "83% of bullets matched something. No error. No null. No alert. Nothing in that pipeline knew."

Then the two numbers that make it a data-quality talk instead of a regex anecdote:

> "Across the whole corpus this bug cost me 1.2 points. Inside the French segment it cost me 28. And per-ad coverage in the broken group was 100%."

**The Monday change.** Three lines:

1. Whatever axis your rules cannot read — language, locale, source system, schema version, extractor version — **record it as a column at ingest.**
2. Replace your one coverage number with a per-group table. **Alert on the spread, not the mean.**
3. Size the alarm for small groups. This one was 4% of rows.

Then the honest admission that explains why a careful person misses this:

> "I could not run that check for eight months, because language was not a column in my schema. I had to go back and invent it to find my own bug."

**The inversion.** This is your counter-programming line, and it needs saying plainly:

> "Most of this programme is about watching your systems more closely. For this kind of failure, watching does not help. The fix is to make the write fail, not the dashboard."

Back it with the two fields: gated field 99.96% grounded, monitored field 90.9%. Same model, same run, same documents.

**Close on their work, not yours.**

> "Two hundred of you read one line of French faster and better than the cheap, deterministic, fully auditable tool this industry is currently telling you to prefer. The rules are not the problem. The problem is that a zero means two things, and only one of them shows up on your dashboard."

**Teaser — 5 seconds, your third and last.** The corpus is open. Fifteen other dimensions in it. One says 61% of employers ask for no AI skill at all. QR code. Stop.

### The feeling to end on

Capable, not scolded, and not insulted. The register is **a debugging story you are pleased to have solved** — not a confession. You are handing them a bug report from a system a lot like theirs, plus a cheap fix. The humility is that your favourite tool failed. The competence is that your setup caught it.

One sentence worth stealing, from the panel: **"Nothing I believe about this matters."** It is the cheapest fix for the vanity problem, and it is true.

### What is cut, and why

- **The AI gap (61% vs 72%)** drops to one clause in the teaser. It was a second conflict, and a 10-minute talk holds one. Cut it entirely if you run long.
- **The job-market findings** survive only as the Act 1 mirror. That still keeps the promise the abstract made — those France facts *are* which-lines-to-trust content.
- **The dbt Labs comparison, the codebook, maturity-to-mission, the finding that collapsed at n=270** — all out.

### Rehearsal notes

- **Check the subject of every sentence.** Anything about the finding should have a tool as its subject. If a sentence starts "French ads…" and ends in a deficit, rewrite it. Do one pass for this alone.
- Cut these phrases: "three days", "in the order I actually tried them", "the one I expected to land on", "the one I trusted more". Replace "I didn't believe it" with "nobody in this room believes that number."
- Rehearse the three objections as a rhythm — kill, kill, reveal. Same shape each time. That is what makes the third one land.
- The French line must be a big, readable screenshot. Native speakers will read it faster than you can talk. Let them. Say nothing for three seconds.
- Practise three separate things: the words, the delivery, your body language. Memorise the cold open and the closing lines word for word. Nothing else needs it.
- Never require hands. "Decide in your head" works with a dead room, and "you all got there in two seconds" is true either way.
- Do not apologise for the sample size. State it once and never defend it again.
- Never cut the Monday change. If you are 90 seconds over, cut objection 2 and the `domain_risk` caveat.
- Test the framing on a French colleague before Paris. Ask one question: "does this feel like it's about his tool, or about us?"

---

## 7. Numbers you can use

Checked against `analysis/data.json` on 2026-09-01. Re-run before the talk — the corpus grows.

| Figure | Value | Note |
|---|---|---|
| Corpus / analytical cohort | 636 / 576 | cohort = AE/BI + team lead |
| France region | 35 (cohort), 36 (all) | 30 distinct employers |
| French-language ads | 26 to 55 | **depends on the detector — see §8** |
| Responsibility bullets | 5,163 across 631 ads | 83.0% matched at least one theme |
| Keyword pass, Data Quality, FR vs EN | 35% vs 74% | p<0.0001 |
| LLM pass, testing framing, FR vs EN | 60% vs 65% | p=0.59 |
| LLM dimensions with no FR/EN difference | 9 of 10 | only `domain_risk` differs (p=0.011) |
| Whole-corpus error from the bug | +1.2 points | 71.6% reported vs 72.8% corrected |
| Segment error from the bug | +28 points | |
| Coverage inside the broken group | 100% (26 of 26 ads) | the health metric that lied |
| dbt named, France | 83% (30 of 36) | highest of any region; 61% elsewhere |
| Language-gated, France | 63% (46% hard) | vs 28% elsewhere. UK 4%, NYC 0% |
| Consultancy/ESN, France | 29% | vs 4% elsewhere, p<0.0001 |
| `ai_role` = none | 61% (350 of 576) | vs dbt Labs' 72% daily AI use |
| `testing_framing` = responsibility | 64% (369 of 576) | |
| Gated field grounded | 99.96% (5,108 of 5,110) | `responsibilities` |
| Monitored field grounded | 90.9% (of 5,745) | `evidence` |

### The two objections, in detail

**Objection 1 — length.** True but insufficient.

| | French-language | English-language |
|---|---|---|
| Median / mean bullets | 6.5 / 6.8 | 7.0 / 8.2 (p=0.019) |
| Data Quality, 1–5 bullets | 19% (3/16) | 52% (64/123) — −33pts, p=0.016 |
| Data Quality, 6–8 bullets | 44% (7/16) | 75% (170/228) — −31pts, p=0.016 |
| Data Quality, 9+ bullets | 50% (4/8) | 87% (158/181) — −37pts, p=0.016 |
| **Per bullet** | **6.7% (18/270)** | **16.6% (726/4,365)** — p=0.000003 |

The band sizes are small (8 to 16 French ads each). **The per-bullet rate is the robust version. Lead with it if challenged.**

**Objection 2 — consultancies.** Dead.

- Non-consultancy employers only: 35% (11/31) vs 74% (380/512), −39 points, p<0.0001. The full gap survives.
- Consultancy status alone, English ads only: 60% (12/20) vs 74% (380/512), p=0.19. Not significant.

### Say these caveats out loud, briefly

- **The sample is small for France.** Say it once. It supports "here is what these ads look like," not "the French market is X."
- **The LLM nulls are weak evidence of sameness.** At this sample size you can detect the 30-to-50-point tool errors easily. You cannot rule out a real 5-point difference. The honest claim: the keyword tool was wrong by 30 to 50 points, and the LLM tool's leftover differences are within noise here. Not "the LLM is perfect."
- **`domain_risk` really does differ** for French-language ads (82% moderate vs 65%). Volunteer it. It makes the other nine nulls credible instead of convenient.
- **The consultancy figure uses a company-name rule**, and the corpus is opportunistic — collected during a job search, not sampled. Regional splits describe the corpus, not the labour market.
- **Collection date is not posting date**, so the month-by-month AI trend is not a time series. Do not show it.

### Held back for a longer slot

Two findings the panel verified that are too good to bury and too big for ten minutes:

- **AI expectation comes with quality liability, not without it.** Ads that state any AI expectation make data quality personally owned 76% of the time, versus 57% where they don't (p=5×10⁻⁶, V=0.19). It survives when you look only at manager-written ads (79% vs 64%, p=0.001). `ai_enabler` roles carry the highest compliance-fear framing of any group (31% vs 19%). This inverts the usual "AI is outrunning governance" story. It is the most publishable thing in the corpus.
- **Fear is the honest signal.** `loss_aversion × domain_risk` is V=0.39, p<0.0001. Of the 129 high-fear ads, 71% are genuinely high-risk and **zero** are low-risk. So the market *can* signal real stakes accurately. It does it by naming what it is afraid of, not by saying "quality matters."

---

## 8. Three things to fix in the repo first

The panel found these. Two affect what you can honestly say on stage.

**① The French/English gap is not reproducible from `data.json`.** There is no `jd_language` field. Every version of that number is an after-the-fact reconstruction, and it moves a lot depending on how you detect language:

| Detector | French-language ads | Data Quality gap |
|---|---|---|
| Mine | 40 | −39 points |
| Reviewer 1 (stopword ratio) | 26 | −28 points |
| Reviewer 4 (stopword density) | 55 | −43 points |

The direction is solid across all three. The headline number is not. **§7 previously listed −39 points as verified. It isn't — it is detector-dependent.** Add a `jd_language` field, pick a detector, document it, and freeze the figure before you build a slide on it. Right now you would be quoting a number a curious attendee cannot reproduce from your own repo.

**② `write_jd.py` gates `responsibilities` but not `evidence`.** `verify_responsibilities` refuses a write unless every bullet is a literal substring of the archive. Nothing does that for the `evidence` quotes. Reviewers measured the result two ways and got 90.9% and 80.8% grounded depending on how strictly you match. Two fields fail badly: `collaboration_width` at about 70% and `loss_aversion` at about 91% by one measure. Those were never quotes — they are synthesised lists and paraphrase, sitting in a field the schema calls evidence.

Fix: split `span` from `rationale`. Gate the span. Monitor the rationale. Or stop calling the field evidence.

This is also good material. It is the same bug class as the talk's, in the same repo, one field over.

**③ Two of your own files disagree.** `consistency_report.md` gives `jd_authorship` a mean of 0.43 and `domain_risk` 0.80. Report §3 quotes 0.58 and 0.95. Different runs, presumably. Reconcile them or someone will find it.

---

## 9. Still to check

1. Are you on the programme, and in which slot?
2. Did they publish your abstract word for word? That decides how far §5 can move from it.
3. Slide format, aspect ratio, submission deadline.
4. Will the corpus grow before 16 November? If so, freeze the numbers about a week out and re-run §7.
5. Recording — if talks go online, the repo link needs to survive as a QR code on the last slide.
6. Read the Rebecca Williams article yourself. Medium blocks automated fetching, so the "close the loop" advice in this plan came from search extracts, not the full text.
