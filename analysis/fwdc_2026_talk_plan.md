# Forward Data Conference 2026 — Lightning Talk Plan

## Overview

| | |
|---|---|
| **Date** | Monday 16 November 2026. Doors 08:30, runs to about 21:30 |
| **Venue** | Maison Internationale, Cité Internationale Universitaire de Paris, 17 bd Jourdan, 75014 |
| **Format** | Lightning talk, 10 minutes. Plan for 9 |
| **Track** | Theme 01, *Data Foundations for Humans & AI* → sub-track 02, *Data Quality & Trust in the Agentic Era* |
| **Organiser** | Hymaïa, a French data consultancy |

### To confirm

- [ ] You are on the programme (due out September 2026)
- [ ] Stage and time slot
- [ ] Published abstract matches your submission word for word — this decides how far the talk can move from it
- [ ] Slide format, aspect ratio, submission deadline
- [ ] Whether talks are recorded — if so, the repo QR code on the last slide must still work later
- [ ] Whether Christophe Blefari is involved in running the conference ([his post](https://www.blef.fr/forward-data-conference-some-news)) alongside Hymaïa
- [ ] Freeze all numbers about a week before the talk and re-run the reference table

---

## The talk in one line

**A pipeline reported 100% coverage on exactly the group it was reading wrong. Record the thing your rules can't read, alert on the spread between groups, and make bad writes fail instead of watching for them.**

```
   AGGREGATE LOOKS HEALTHY            SEGMENT IS BROKEN               THE FIX
   ------------------------          --------------------          ------------------
   99% of ads match a theme    →     French ads: 8% of bullets  →   1. Record language
   Whole-corpus error ~1 pt          flagged vs 16% in English      2. Alert on spread
   French coverage: 100%             Segment error: 23 pts          3. Block, don't watch
```

---

## Key facts (checked 2026-10-05)

1. **The bug still exists.** The Data Quality keyword pattern is English-only.
2. **The gap:** the keyword pass finds data-quality language in **50%** of French-language ads vs **73%** of English ones (p=0.008). Per bullet: **8.5% vs 16.3%** (p=0.0005). Use the per-bullet figure if challenged.
3. **The health metric that lied:** **100%** of French-language ads (32 of 32) matched at least one theme.
4. **Length isn't the cause.** Median 7 bullets in both languages (p=0.78).
5. **Employer type isn't the cause.** French-market ads written in English score **83%** (15 of 18).
6. **The LLM control agrees.** No significant French/English difference on any of 10 dimensions.
7. **The gated field is clean, the monitored one isn't.** 100% vs 82% of quotes match the source.

---

## The room

| | |
|---|---|
| **Size** | About 650 people, 3 stages at once — so about 100–250 in your room |
| **Who** | Data, analytics and platform engineers; tech leads; heads of data. Your sub-track names data, platform and analytics engineers and tech leads |
| **Language** | French or English. Level "intermediate to advanced" |
| **Sponsors** | Omni, ClickHouse, MotherDuck, Starlake.ai |
| **Seating** | Group tickets are discounted, so managers sit with their teams. People who write job ads and people who read them are in the same row |
| **Mood** | Sold an agentic future, now checking it. Sceptical of vendors. Want evidence |

The conference's own copy sets the tone:

- "Models stopped being the hard part."
- "A large share of agent failures are context failures."
- "A clear-eyed look at those that should not have been built."
- "What survived the data mesh hype."

### Services companies in the room

- **ESN** = *Entreprise de Services du Numérique*: an IT services company that places engineers on client projects. No clean English equivalent.
- **About a third of the French ads** in the corpus come from ESNs, consultancies and staffing intermediaries: 18 of 52 by hand check, 24 if you count four likely ones.
  - ESNs and consultancies: ALTEN, Aubay, Ekkiden, JEMS, Niji, Néosoft, eXalt, Optimize matter, Skiils, Size Up Consulting.
  - Closer to agencies: YURI & NEIL, Licorne Society, Socratiz.
- **No comparable figure exists for other regions yet.** Don't put an "elsewhere" comparison on a slide.
- **Watch your pronouns.** Many people in the room build for clients, and the organiser is a consultancy. Say "this market" and "whatever you are building for", never "your data team".

---

## The rule the whole talk depends on

**Blame the tool, never a group.**

| Accusing — never say | Explaining — say this |
|---|---|
| "French companies don't care about data quality." | "All 16 of my patterns are in English." |
| "Consultancy ads are vaguer." | "An ESN ad often describes a capability, because the client project isn't assigned yet." |
| "Managers write lazy job ads." | "Job ads have no settled words for a quality bar, so everyone uses the same ones." |
| "Recruiters strip out the technical detail." | "Ads with no technical detail read as execution-only work, whoever typed them." |

Three habits:

1. **Test a claim about a group, then report the result — especially when it clears them.** "I checked whether services-company ads carry less quality language. They don't."
2. **Make a tool or a document the subject of the sentence**, never a job title or a country.
3. **When a number looks bad for a group, look for the structure that produces it** before presenting it. If there is none, suspect the measurement.

Also:

- **No confession.** You caught the error before publishing it. Present it as a debugging story, not an apology.
- **No jokes about French being hard**, or about not speaking it. The tool was the problem, not the language.

---

## Talk structure

```
0:00           2:30                        6:15                    9:00
┌──────────────┬───────────────────────────┬───────────────────────┐
│ ACT 1        │ ACT 2                     │ ACT 3                 │
│ Cold open    │ The number                │ LLM control           │
│ The mirror   │ Three objections, killed  │ Aggregate vs segment  │
│              │ The pattern reveal        │ Monday change, close  │
└──────────────┴───────────────────────────┴───────────────────────┘
```

**Time talking about yourself: about 25 seconds, in three places** — provenance (12s), the pattern reveal (8s), the teaser (5s).

---

## Act 1 — The test and the mirror (0:00–2:30)

### Slide 1: Cold open

**On screen:** one French job-ad line, full screen, untranslated. Nothing else — no title, no bio.

**Say:**

> Before I tell you anything about myself, I need six seconds of work from you.
> This is one line from a job ad for an analytics engineer, in this market, this year.
> *[three seconds of silence]*
> Decide, in your head: does that line make data quality part of this job? Yes or no.
> …You all got there in about two seconds. You are the second instrument in this talk. The first one scored that line **zero**.

**Line to use** (both score zero against the live pattern):

- **Emeria (Reemia), preferred:** "Garantir la qualité et la fiabilité : tu veilles à ce que chaque chiffre communiqué soit juste. Tu mets en place les bonnes pratiques de gouvernance et de contrôle qualité pour assurer l'intégrité de la donnée dans toute l'entreprise."
- **YURI & NEIL:** "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting."
- Avoid Decathlon Digital's line — a Decathlon employee may be in the room.

### Slide 2: The pattern

**On screen:** the real Data Quality pattern from `analysis/responsibility_taxonomy.py`:

```python
r'\b(data quality|test(ing|s)?\b|validat|monitor(ing)?|assertion|anomaly|reliability|accura(cy|te)|observability|data trust|Monte Carlo)'
```

**Say:** admit it is reasonable. They will see why it missed, and that they would have written the same one.

### Provenance (12 seconds — first of three)

> I have been reading these ads for a year. Two programs read them for me: a keyword pass over 7,054 responsibility bullets, and an LLM pass over ten behavioural dimensions.

### Slide 3: The mirror

**On screen:** "52 of these were written by people in this building." Names: Decathlon, Qonto, BeReal, Welcome to the Jungle, Electra, Orano, Pluxee, Cultura, Dashlane.

| Fact | Figure |
|---|---|
| **Name dbt** | **83%** — highest of any region in the corpus. Berlin next at 79%; rest of corpus 58% |
| **Come from services companies** | **About a third** |
| **Written in French** | **Two in three** |
| **Hard-require French** | **27%** — and about a quarter more hard-require English |
| Optional: **mention version control / CI/CD** | **54% / 38%**, vs 36% / 27% elsewhere |

**Say:**

- Lead with dbt. It is a genuine compliment.
- Add Conquet's line after the language fact: "En France, 99% sont français" ([DataGen #160](https://datageneration.substack.com/p/quel-est-lepisode-datagen-le-plus)). It makes the language requirement a feature of a domestic talent pool, not a barrier anyone chose.
- Say the language fact flat. It pays off in Act 2.
- Say "written by people in this building", not "yours" — many build for clients.
- Version control and CI/CD come from keyword fields, so say "mention", not "require".

---

## Act 2 — Their objections (2:30–6:15)

### Slide 4: The number (2:30–3:15)

**On screen:**
- **50% vs 73%** — ads with data-quality language, French vs English
- **8.5% vs 16.3%** — per bullet
- Small chart: 14 of 16 themes lower in French

**Say** (the tool is the subject, not you):

> Across the French-language ads, my keyword pass reports data-quality language in half of them, against three quarters of the English-language ones. Per bullet it is 8.5% against 16%. Fourteen of sixteen themes, same direction.
> *[two seconds of silence — rehearse with a timer]*
> Nobody in this room believes that number, and I know exactly which three reasons you don't.

### Slide 5: Objection 1 — "French ads are shorter" (3:15–3:50)

**On screen:**

| | French | English |
|---|---|---|
| Median bullets | **7** | **7** (p=0.78) |
| Data quality per bullet | **8.5%** | **16.3%** (p=0.0005) |

**Say:**

> They aren't. Median seven bullets in both. Per bullet, the gap is the same: 8.5 against 16.3. Same length, half the signal.

### Slide 6: Objection 2 — "It's who is hiring" (3:50–4:55)

**On screen:** three cards.

| French ads, services companies | French ads, everyone else | Same market, written in English |
|---|---|---|
| **47%** (7/15) | **53%** (9/17) | **83%** (15/18) |

Caption: *Same market, same employers, different language.*

**Say:**

> About a third of the ads from this market come from services companies. An ESN ad often describes a role before the client project is assigned, so it describes a capability rather than a system. That is a real difference, and a good reason to expect different language. So I checked whether it explains the gap.
> It doesn't. Among the French-language ads, services companies and everyone else score about the same. And ads from this same market, written in English, score 83%. Same market, different language. Whatever is going on, it isn't who is hiring.

**Notes:**
- This clears the group you tested. Deliver it as a point in their favour.
- Don't claim the English ads beat the corpus average. At 18 ads that is noise.
- Step toward the audience here.

### Slide 7: Objection 3 and the reveal (4:55–6:15)

**On screen:** left, the pattern again. Right:

> **A zero means two things:**
> 1. It isn't there.
> 2. I can't read it.

**Say:**

> Third objection: the two markets really do emphasise different things. That is the reasonable answer, and the right one if you trust your pipeline.
> Two in three of these ads are written in French. All 16 of my patterns are in English.
> *[pause — second speaker moment, 8 seconds]*
> The line you voted on was Emeria's. A zero means two things: "it isn't there" and "I can't read it." Same zero.

**Q&A ready:** Skiils' ad *does* match, because "validation" hits the `validat` stem. The misses are chance vocabulary, not a pattern.

---

## Act 3 — Verdict and transfer (6:15–9:00)

### Slide 8: The control run

**On screen:** 10 dimensions, French vs English — all "no significant difference". Highlight testing framing: **69% vs 68%, p≈1.0**.

**Say:**

> Same ads, the LLM pass. No difference on any of ten dimensions. The idea was fine. The tool wasn't.
> I am not telling you to swap rules for a model. The model is a second opinion, not a better one. At this sample size I can detect a 23-point tool error. I cannot detect a real 5-point difference.

### Slide 9: Nothing knew

**On screen:**

| What the pipeline reported | Value |
|---|---|
| Bullets matching a theme | **83%** |
| French-language ads matching a theme | **100%** |
| Error across the whole corpus | **about 1 point** |
| Error inside the French segment | **23 points** |

**Say:**

> 83% of bullets matched something. Every French-language ad matched something. No error. No null. No alert. Across the whole corpus this bug cost me about one point. Inside the French segment it cost me twenty-three.

### Slide 10: The Monday change

**On screen:**

1. **Record the thing your rules can't read** — language, locale, source system, schema or extractor version — as a column when data comes in.
2. **Replace one coverage number with a per-group table.** Alert on the spread, not the mean.
3. **Size the alarm for small groups.** This one was 4% of rows.

**Say:**

> I could not run that check for eight months, because language was not a column in my schema. I had to go back and add it to find my own bug.

### Slide 11: Block it, don't watch it

**On screen:**

| Field | Protection | Quotes matching the source |
|---|---|---|
| `responsibilities` | Write is refused unless every bullet is copied exactly | **100%** (6,987) |
| `evidence` | None — checked afterwards | **82%** (13,421) |

**Say:**

> Most of this programme is about watching your systems more closely. For this kind of failure, watching does not help. Make the write fail, not the dashboard. Same model, same run, same documents — the only difference is that one field was allowed to refuse.

### Close

> Two hundred of you read one line of French faster and better than the cheap, deterministic, fully auditable tool this industry is telling you to prefer. The rules are not the problem. The problem is that a zero means two things, and only one of them shows up on your dashboard.

### Teaser (5 seconds — third of three)

> The corpus is open. One of its other findings: 58% of employers ask for no AI skill at all — and Indeed's French data puts AI in 3.4% of all ads.

**On screen:** QR code to the repo. Stop.

---

## Delivery checklist

- [ ] One pass of the script checking only sentence subjects. Any sentence starting "French ads…" that ends in a shortfall gets rewritten.
- [ ] Memorise the cold open and the close word for word. Nothing else needs it.
- [ ] Rehearse the objections as a rhythm: kill, kill, reveal.
- [ ] Rehearse both silences with a timer (3 seconds on the cold open, 2 after the number).
- [ ] Make the French line a large, readable screenshot.
- [ ] Never ask for hands. "Decide in your head" works with a quiet room.
- [ ] State the sample size once. Never defend it again.
- [ ] If 90 seconds over, cut Objection 2. Never cut the Monday change.
- [ ] Test the framing on a French colleague: "Does this feel like it's about his tool, or about us?"
- [ ] Practise words, delivery and body language separately.

**The feeling to leave them with:** capable, not scolded. A bug report from a system a lot like theirs, plus a cheap fix.

---

## Reference numbers

Checked against `analysis/data.json` on 2026-10-05. French-language means `jd_language = "fr"`, stored on every record by `scripts/language_detect.py`: an ad counts as French when its responsibility bullets contain at least three of *vous, nous, avec, données, équipe, être, vos, notre, nos, dans, une, des, pour*. "English" means every other analytical-cohort ad. Per-ad p-values are Fisher's exact test; theme significance counts use uncorrected chi-square. Figures marked *not re-run* are the 845-JD values, because their exact pattern could not be reproduced.

| Figure | Value | Note |
|---|---|---|
| Corpus / analytical cohort | 869 / 787 | Cohort = AE/BI + team lead |
| France | 52 ads (49 in cohort), 42 employers | |
| French-language ads | 32 in cohort | `jd_language = "fr"` |
| Responsibility bullets | 7,054 across 864 ads | 82.5% match at least one theme |
| Data quality, FR vs EN, per ad | 50% vs 73% | p=0.008 |
| Data quality, FR vs EN, per bullet | 8.5% vs 16.3% | p=0.0005 — the robust figure |
| Themes lower in French | 14 of 16 | 7 significantly |
| LLM testing framing, FR vs EN | 69% vs 68% | p≈1.0 |
| LLM dimensions with no FR/EN difference | 10 of 10 | |
| Whole-corpus error | about 1 point | 71.8% reported vs 72.7% corrected |
| Segment error | 23 points | 36 with a looser detector (not re-run) |
| French-language coverage | 100% (32 of 32) | |
| Median bullets, FR vs EN | 7 vs 7 | p=0.78 |
| French ads by employer type | services 47% (7/15), others 53% (9/17) | |
| French-market ads in English | 83% (15/18) | |
| dbt, France | 83% (43/52) | Berlin 79%, rest 58% |
| Written in French, France | 65% (34/52) | |
| Hard-require French, France | 27% (14/52) | Any French requirement 37%; 13 more hard-require English (not re-run) |
| Any language requirement | France 58%, elsewhere 25% | UK 4%, NYC 0% |
| Services companies, France | about a third (18–24 of 52) | Hand check |
| Version control / CI/CD, France | 54% / 38% | vs 36% / 27% elsewhere |
| Semantic layer mentioned | 25% of cohort | Only 14 ads name a product |
| No AI expectation | 58% (455/787) | dbt Labs survey: 72% daily AI use |
| Hire owns data quality | 67% (531/787) | |
| Gated field matches source | 100% (6,987) | `responsibilities` |
| Monitored field matches source | 82.3% (11,044 of 13,421) | `evidence` |

### Caveats to say once

- **Small sample for France.** It shows what these ads look like, not what the French market is.
- **The LLM nulls are weak evidence of sameness.** 32 ads can reveal a 23-point tool error, not a real 5-point difference.
- **Services-company share is a hand check.** The corpus comes from a job search, not a sample.
- **Collection date is not posting date.** Don't show the month-by-month AI trend.

---

## Findings not in this talk

| Finding | Key numbers | Why it's out |
|---|---|---|
| **"Data quality" carries little information** | Phrase in 52% of ads. Risk × quality ownership V=0.096 — below the report's effect-size floor. Ownership verbs predict direction-setting work: 52% vs 21% (not re-run) | Second argument; 10 minutes holds one |
| **Nobody defines the quality they hand over** | Of 531 quality-owning ads: incident 3.6%, data contract 6.2%; SLA 6.8% and on-call 1.0% (both not re-run). 28 of 787 name a data-quality tool | Partly true by definition: authorship and testing are coded from the same text. Keep for Q&A |
| **AI expectation comes with quality ownership** | 78% vs 60% (p=1×10⁻⁷); manager-written only 80% vs 67%. AI-infrastructure roles carry the most compliance fear (39% vs 21%) | The most publishable finding — save for a longer slot |
| **Fear is the honest signal** | Of 205 high-fear ads, 65% are high-risk, none low-risk | Longer slot |
| **The semantic layer has the same shape as data quality** | Mentioned in 25% of ads, product named in 14 | Bridge to the agentic track for a future talk |

Good one-sentence examples for any of these: Rabot Energy — "errors surface in CI rather than in a management meeting"; Mimecast — "define and enforce the data quality bar: tests, freshness SLAs, lineage, incident response."

---

## What the French data community is saying

**Nothing found measures what this corpus measures.** No French source counts the services-company share of data ads, French-language requirements, or whether ads define data quality. Most of what exists supports the talk.

### Voices

| Who | Where | What they said |
|---|---|---|
| **Robin Conquet** — DataGen podcast; co-author of [TPC's data jobs study](https://tpc-recrutement.com/ressources/etudes-de-salaires/etude-2026/metier-data) | [DataGen #160, 3 Aug 2026](https://datageneration.substack.com/p/quel-est-lepisode-datagen-le-plus) | "80% des besoins de nos clients sont sur des fondamentaux", while 80% of the podcast is about agentic topics. And: "En France, 99% sont français" in data and AI teams |
| **Christophe Blefari** — blef.fr newsletter; co-founder of nao | [DataGen #242, 8 Dec 2025](https://shows.acast.com/data-gen/episodes/242-on-decrypte-4-tendances-data-ia-de-2026-avec-blef) | 2026 trends: semantic layer, MCP, "95% of projects are not in production". *Episode description only* |
| | [DataGen #267, 27 Apr 2026](https://open.spotify.com/episode/5iNqFHkMB0ifuA4QE0Mz1d) | Agentic impact on data roles, "why data catalogs missed the mark". *Search snippet only* |
| **Véronique Torner** — president of Numeum | [Blog du Modérateur, 4 Jun 2026](https://www.blogdumoderateur.com/emploi-numerique-loin-job-apocalypse-promet/) | "nous sommes loin de la job apocalypse". Junior roles declining |

### Reports

| Source | Claim | Fit with the corpus |
|---|---|---|
| [Indeed Hiring Lab France](https://hiringlab.indeed.com/fr/blog/2026/04/01/avril-2026-lia-progresse-dans-un-marche-du-travail-en-recul/), 1 Apr 2026 | AI in 3.4% of French ads — lowest compared (UK 7.5%, US 4.9%, Germany 4.1%) | **Supports** 58% no-AI |
| [TPC "Métiers Data 2026"](https://tpc-recrutement.com/ressources/etudes-de-salaires/etude-2026/metier-data) | Analytics engineer "le chaînon manquant"; "outil phare : DBT"; data engineers often in "agence, ESN ou cabinet"; junior hiring frozen | **Supports** dbt and services share. *Verify on page* |
| [APEC 2026](https://corporate.apec.fr/home/nos-etudes/toutes-nos-etudes/les-metiers-cadres-porteurs-edition-2026.html), 19 Feb 2026 | Data engineer offers up 10%; developer offers down 20% | Context. *Via [Le Monde Informatique](https://www.lemondeinformatique.fr/actualites/lire-la-demande-en-developpeurs-et-chefs-de-projets-it-s-erode-en-2025-99488.html)* |
| [Numeum / KPMG](https://kpmg.com/fr/fr/media/press-releases/2025/10/numeum-kpmg-innovation-numerique-grand-angle-esn-ict-2025.html), 14 Oct 2025 | 81% of services firms see generative AI as their top opportunity | **Contrasts** — firms talk up AI, ads don't ask for it |
| [LinkedIn Jobs on the Rise France](https://www.rhmatin.com/sirh/gestion-talents/25-metiers-en-croissance-en-france-par-linkedin-l-influence-de-l-ia-se-confirme-en-2026.html) | AI engineer #1; no data or BI role in top 25 | Context |
| [Jedha](https://www.jedha.co/formation-analyse-donnee/chiffres-sur-le-marche-de-la-data-en-2025) | Top tools Dataiku, Azure, Power BI, AWS — no dbt | **Complicates** dbt. Bootcamp source |
| [dbt Labs State of AE 2025](https://www.getdbt.com/blog/state-of-analytics-engineering-2025-summary) | 56% name data quality their top problem; 80% use AI at work | Frames both gaps |
| [Forward Data Conference 2026](https://www.hymaia.com/evenement/forward-data-conference-2026/) | Quality and data contracts are the "infrastructure of trust" for AI | **Contrasts** — 6% of quality-owning ads mention a data contract |

Salary sources, out of scope: [TPC analytics engineer](https://tpc-recrutement.com/ressources/salaires/data/analytics-engineer), [Silkhom](https://www.silkhom.com/les-salaires-informatique-et-electronique/), [Malt](https://www.malt.fr/t/barometre-tarifs).

### How to use it

1. **Language requirement → Conquet's "99% sont français"**, in the Act 1 mirror.
2. **Fundamentals → Conquet's "80% des besoins… fondamentaux"**, as an epigraph before the teaser or in Q&A. Name him; he may be in the room.
3. **AI teaser → Indeed's 3.4%.** A large sample closes the "one person's job search" objection.
4. **"What should employers write?" → the conference's own "infrastructure of trust"** vs 6% mentioning data contracts. Q&A only.
5. **dbt challenge → Jedha.** Answer: this corpus skews toward scale-ups; corporate BI hiring looks different.

---

## Repo actions before the talk

- [x] **Add a `jd_language` field.** Stored on every record and derived by `scripts/language_detect.py`. French-language now means `jd_language = "fr"`: 32 cohort ads, a 23-point data-quality gap. The looser stopword detector (54 ads, a 36-point gap on the 845-JD corpus) is retired, because it also caught German, Swedish and Spanish ads.
- [ ] **Gate `evidence` in `write_jd.py`**, the way `responsibilities` is gated. Split the quote from the reasoning; gate the quote, monitor the reasoning. Same bug class as the talk, one field over.
- [ ] **Reconcile `consistency_report.md` with `report.md`.** One gives `jd_authorship` 0.43 and `domain_risk` 0.80; the other 0.58 and 0.95.
- [ ] **Hand-check services companies outside France** before comparing regions.
- [ ] **Verify every quote marked *verify*, *description only* or *snippet only*** on the page itself.
- [ ] **Find the source of the "close the loop" advice.** It is not in the Rebecca Williams article ([The Science Behind Storytelling](https://rebecca-williams.com/the-science-behind-storytelling-why-its-the-secret-weapon-for-persuasion/)). That article does say: "Only 5% of audiences could remember statistics, 63% could repeat story elements."
