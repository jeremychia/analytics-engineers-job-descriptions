# dbt Champions — Big 6-Month Project Proposal

Draft answers. Paste field by field.

---

## Name

Jeremy Chia

---

## Project Title (concise, 1-line summary)

A validated, open framework for decoding what analytics engineering job descriptions actually ask for.

---

## What are you trying to change? (1–3 sentences)

Every company defines "analytics engineer" slightly differently, and job seekers and hiring managers currently have no way to tell which lines in a posting carry real information and which are boilerplate that every posting includes regardless. I've built a corpus of 427 European and APAC postings classified along a behavioural codebook, and it already shows the difference is measurable — but the classification is currently LLM-only and unvalidated, which limits how much anyone should trust it. Over the next six months I want to turn that pilot into a validated, openly documented framework that people can actually use on a posting in front of them.

---

## Why does this matter? (anticipated impact and benefit)

**For job seekers**, it converts a guessing game into a readable signal. The corpus already shows company stage and mission type move together almost deterministically — "early-stage startup" is in practice a reliable proxy for "you will be building from scratch" — while "we care about data quality" appears at roughly the same rate at cautious fintechs and low-risk consumer startups alike, which makes it close to worthless as a differentiator. Knowing which is which changes how you read every posting and which roles you apply to.

**For hiring managers**, it shows what your posting communicates versus what you meant. Roughly a third of postings that use rigour-coded language say nothing at all about testing, review, or quality practice — the language is present, the substance is not. That gap is visible from the outside, and candidates who can read it will draw conclusions.

**For the community**, it complements the State of Analytics Engineering report rather than competing with it. Surveys measure what practitioners say about their work; job descriptions measure what employers formally screen for and are willing to commit to in writing. Those are two independent readings of the same territory, and where they agree the finding is much stronger than either alone. The survey's finding that governance and trust dominate, for instance, shows up independently in hiring language — that convergence is worth more than either source on its own.

**For APAC specifically**, there is no quantitative reference at all for what that market asks of analytics engineers. As someone from Singapore living in Berlin I have a personal stake in this, and the corpus now carries 50 APAC roles — enough to compare directly against the European majority rather than merely disclaim the gap.

---

## What is the final, tangible deliverable by the end of the 6-month period?

Three things, all public:

1. **A decoder tool** — a curated web page where you can work through what a job description is actually telling you: which signals are informative, which are universal boilerplate, and what characteristics tend to travel together (if you want high autonomy, what else should you expect to find alongside it?). Built for someone with a posting open in another tab, not for someone who wants to read a report.

2. **A published codebook with validated reliability** — every dimension with its exact inclusion rules, verbatim JD examples for each level, and an inter-rater reliability figure per dimension from multiple independent human coders. This is the piece that makes the whole thing citable rather than merely interesting, and it will name which dimensions are fragile rather than hiding them.

3. **The open dataset and pipeline** — corpus, classifications, scripts and consistency checks, already on GitHub and kept current, so anyone can rerun the analysis, disagree with a classification, or extend the codebook to a role family I haven't covered.

Target corpus at six months: 700+ postings with meaningful non-European representation.

---

## What does 'progress' look like in the first 4–6 weeks? (key early milestones)

**Weeks 1–2 — make the current output legible.** The existing dashboard has more information than focus, which is the main piece of feedback I've had on it so far. Cut it to the claims that survive scrutiny, put n and uncertainty next to every percentage, and add the State of Analytics Engineering comparison that is currently only in the long-form report.

**Weeks 2–4 — run the validation study.** Recruit 2–3 reviewers from the Champions community, have each independently classify the same stratified sample of 10–15 postings with written reasoning, then measure agreement per dimension and adjudicate the disagreements. I expect `jd_authorship` and `autonomy_level` to be the weak ones — the codebook already flags them as the ambiguous cases. Publish the disagreement rates whatever they say.

**Weeks 4–6 — act on what validation shows.** Rewrite the decision rules for whichever dimensions came out fragile, reclassify against the revised codebook, and freeze v1 so that later collection waves are measured against a stable instrument. In parallel, run a model-consensus check (multiple models on the same postings) as a cheaper ongoing proxy for human review.

Running throughout: continued collection, currently at roughly 15 postings per batch, weighted toward closing the APAC and non-European gap.

Concrete test of whether the first six weeks worked: a reader who has never seen the project can open the page, understand a real posting better than they did five minutes earlier, and check exactly how any number on it was derived.

---

## Where might you get stuck, and what specific support or resources would help you?

**1. Human validation reviewers — the main ask.** The methodology needs independent coders and I cannot be all of them; self-agreement is not validation. What would help: 2–3 people willing to spend an hour or so each classifying the same 10–15 postings against a written codebook and noting their reasoning. This is a concrete, bounded, one-hour ask and it is the single thing that most improves the project's credibility. I would like help putting it in front of the right people in the community.

**2. Reach beyond Europe.** Collection is currently geographically skewed because it reflects where I am and what I can find. APAC is at 50 roles; North America is untested entirely. Pointers to regional job boards, or Champions in other markets willing to flag postings, would fix a limitation I can otherwise only disclaim.

**3. Editorial judgement on what to cut.** My instinct is to publish everything the analysis produces, and the feedback I've had is consistently that this makes the work harder to trust, not easier — volume of output is not evidence of value, and a reader cannot tell the difference by looking. Someone with a good editorial eye telling me which two-thirds to delete would materially improve the final artefact.

**4. Sanity-checking the framing against the survey.** I want the comparison with the State of Analytics Engineering report to be genuinely useful and fairly stated in both directions. Input from people close to that work on how to frame the comparison would be welcome, and would make the result more credible than if I frame it alone.

---

## Is this a project you would be open to discussing publicly?

**Yes**

The corpus is public job postings, the repository and dataset are already open, and no sensitive or personal data is involved. Happy to write it up, talk about it, or record something — including the parts that did not work, which are arguably the more useful half.

---

## Any additional comments or context for your project proposal?

This started as personal curiosity while reading postings and wondering how much of the language was real. It is already live: 427 postings classified along a behavioural codebook, an open repository, an interactive dashboard, and a full methods write-up including the mistakes — a pipeline bug that silently dropped three dimensions for a large stretch of the corpus, a deduplication pass that removed 37 records, and a case where salary figures were being estimated rather than extracted, all documented rather than quietly fixed.

Two findings I'd flag as the most interesting so far. First, the gap between rigour language and rigour substance: about a third of postings that talk like quality-focused teams say nothing concrete about testing or review practice, which suggests the language has become something you write rather than something you mean. Second, AI: two-thirds of postings still don't mention it in any form, but the most recent batch showed a visible cluster of roles explicitly framed around building semantic layers and datasets for AI and agent consumption. If formal hiring language lags practice, that lag is measurable, and six months is long enough to watch it move.

The honest limitation is the one this proposal is designed to fix. The classification is currently zero-shot LLM with self-consistency checks, and self-consistency is not accuracy — a model can be reliably wrong. Everything else is downstream of solving that, which is why validation is the first block of work rather than something bolted on at the end.

Repository and dashboard: https://jeremychia.github.io/analytics-engineers-job-descriptions/
