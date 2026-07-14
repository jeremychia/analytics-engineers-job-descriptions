# Trace: 2026-06-25_uplearn_head-of-data

## JD text (fed to classifier, Layer B stripped)

```
# Head of Data — Up Learn

**URL:** https://apply.workable.com/uplearn/j/E59EE2339F/
**Location:** London (Old Street) — hybrid, min 2 days/week in office
**Date:** 2026-06-25

---

About us
At Up Learn, we've built one of the world's most effective learning experiences by combining cognitive science, instructional theory, and artificial intelligence. Our mission is to give every learner the most effective path to success, and vision a world where every learner achieves more, faster, through adaptive, mastery-based learning.

We're the market-leading platform for A Levels, with seven courses on offer and 1 in 3 A Level students using Up Learn. Over the next year, we're launching GCSE Science and accelerating growth, expanding our impact to millions more students.

Our results speak for themselves: 97% of students who complete our courses achieve an A*/A, even those who started with lower grades. And a study of Up Learn in schools found usage is associated with 9 months additional progress, with grade improvements across whole year groups.

And for every paying student, we provide a full scholarship to a student in need - ensuring high-quality education is accessible to all.

About the role
The Head of Data will be a key senior leader at Up Learn, responsible for leading and overseeing the entire Data function, and reporting into the CEO. This role requires a strategic and practical individual who can level up Data at Up Learn and deliver new Data capabilities as needed to achieve the company's growth goals this year and beyond. You should be fluent in using AI and data to automate and re-engineer processes, and have the technical expertise to build data foundations in the right way to scale effectively long term. The Head of Data will set data strategy and own Data team OKRs, improve product analytics and use of KPIs across the company, improve learning metrics and impact evaluations, continue to build on our high quality data and analytics infrastructure, and lead a small high performing Data team.

What you'll do in the first 12 months
Up Learn is scaling into GCSEs and using AI to accelerate course development and product capability. As Head of Data, you'll run a high-leverage data function that helps us move faster, make better decisions, and maintain trust with schools and learners.

- Own the Data roadmap and deliver it: Set a clear quarterly plan aligned to our biggest company goals (GCSE expansion, impact evidence, responsible AI), and ship meaningful improvements every month with a small, AI-powered team.
- Strengthen use of measurement in product processes: Embed "instrumentation before shipping" so every major release launches with the right KPIs, tracking, dashboards, and alerts - enabling fast learning, quick diagnosis, and confident iteration.
- Level up our metric system and decision-making: Build on our use of KPIs so teams (and leadership) have an accurate view of performance across Product, Commercial, and Operations.
- Lead our next 'Measuring Learning' impact evaluation: Design and run a credible evaluation of learning impact, and translate findings into clear product/content priorities and school-ready evidence.
- Own responsible AI for learner data: Put in place pragmatic governance and monitoring for AI features that touch learner responses and scoring - so we can innovate and keep trust high.
- Take ownership of data privacy & school assurance: Become our day-to-day lead for data privacy and school-facing data assurance - supporting data sharing agreements and DPIAs, and ensuring our practices around children's data are robust and consistently applied.
- Improve GTM and business insight: Build clearer visibility into funnel performance and ROI (channel → conversion → retention) so we can double down on what works and stop what doesn't.
- Build a high-performance, pragmatic team: Coach and develop our data team, raise quality where it matters, and keep our warehouse/dbt/Lightdash stack reliable and scala…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | mixed | mixed | mixed | 100% | ✓ |
| domain_risk | moderate | moderate | high | high | 33% | ✗ |
| collaboration_width | 3 | 3 | 4 | 4 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | mixed | mixed | product | mixed | 33% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "help us move faster, make better decisions, and maintain trust with schools and learners"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role balances velocity (ship meaningful improvements every month, fast learning, quick diagnosis) with rigour (data governance, compliance, responsible AI), explicitly embodied in the opening framing.

**Run 2:** `mixed` ✓
> Quote: "you value high quality, but you don't gold-plate - except where safety/privacy demands it"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes both delivery speed (ship meaningful improvements monthly, move faster) and governance/quality (responsible AI, pragmatic governance, data privacy) with genuine equal weight.

**Run 3:** `mixed` ✓
> Quote: "raise quality where it matters, and keep our warehouse/dbt/Lightdash stack reliable and scalable - without slowing the business down"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes both velocity (ship meaningful improvements every month, move faster) and rigour (governance, privacy-by-design, robust practices), with explicit trade-off framing showing both are genuinely central to the role.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Take ownership of data privacy & school assurance: Become our day-to-day lead for data privacy and school-facing data assurance - supporting data sharing agreements and DPIAs, and ensuring our practices around children's data are robust and consistently applied"
> Verified: ✓ found in JD
> Reasoning: Risk is operational/regulatory (children's data, GDPR/privacy) rather than financial reporting, so moderate rather than high; no fintech/banking compliance levels implied.

**Run 2:** `high` ✗
> Quote: "Take ownership of data privacy & school assurance: Become our day-to-day lead for data privacy and school-facing data assurance - supporting data sharing agreements and DPIAs, and ensuring our practices around children's data are robust and consistently applied."
> Verified: ✓ found in JD
> Reasoning: The role involves handling children's personal data with explicit regulatory requirements (DPIAs, data sharing agreements) and school compliance, where data errors directly impact regulatory compliance and stakeholder trust.

**Run 3:** `high` ✗
> Quote: "supporting data sharing agreements and DPIAs, and ensuring our practices around children's data are robust and consistently applied"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly references regulatory requirements (DPIAs), children's data governance, and school assurance, placing it in a regulated context where data errors have direct compliance and trust consequences.

⚠ **Disagreement**: manual=`moderate` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "Product, Commercial, and Operations"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions explicitly listed in the metric system responsibility, plus data team which is excluded as it is their own team.

**Run 2:** `4` ✗
> Quote: "Product; Commercial; Operations; schools"
> Verified: ✓ found in JD
> Reasoning: The JD names four distinct partner teams/functions: Product (product processes, KPIs), Commercial (GTM, funnel), Operations (performance visibility), and Schools (external collaboration partners for assurance and evidence).

**Run 3:** `4` ✗
> Quote: "Product; Commercial; Operations; schools"
> Verified: ✓ found in JD
> Reasoning: The role explicitly partners with Product, Commercial, and Operations teams internally, plus external school stakeholders for data assurance and governance.

⚠ **Disagreement**: manual=`3` vs LLM majority=`4`

⚠ **LLM inconsistency**: runs gave ['3', '4', '4']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "keep our warehouse/dbt/Lightdash stack reliable and scalable"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities indicate existing infrastructure (warehouse, dbt, Lightdash) that requires scaling and improvement rather than building from zero.

**Run 2:** `mid` ✓
> Quote: "continue to build on our high quality data and analytics infrastructure, and lead a small high performing Data team"
> Verified: ✓ found in JD
> Reasoning: The role involves scaling an existing data function with named tools (warehouse/dbt/Lightdash) and improving infrastructure, indicating an established team in growth phase rather than early-stage or fully mature.

**Run 3:** `mid` ✓
> Quote: "continue to build on our high quality data and analytics infrastructure"
> Verified: ✓ found in JD
> Reasoning: The phrase 'continue to build on' indicates existing infrastructure and maturity, while the role involves improving a small team rather than building from zero, placing it in the mid-stage range.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "warehouse/dbt/Lightdash stack reliable and scalable"
> Verified: ✓ found in JD
> Reasoning: Responsibilities include technical specificity (dbt ecosystem, warehouse stack, pragmatic governance, credible evaluation methodology) alongside generic HR language (cross-functional collaboration, coaching teams).

**Run 2:** `hiring_manager` ✓
> Quote: "warehouse/dbt/Lightdash stack reliable and scalable - without slowing the business down"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical context (named tools in use, learning impact evaluation methodology, DPIA processes) and business domain knowledge (GCSE expansion, responsible AI governance for learner data) that only come from hands-on experience.

**Run 3:** `mixed` ✗
> Quote: "Embed "instrumentation before shipping" so every major release launches with the right KPIs, tracking, dashboards, and alerts"
> Verified: ✓ found in JD
> Reasoning: This responsibility shows technical specificity and methodology only a practitioner would describe, but other responsibilities use generic boilerplate language (interact cross-functionally, coach and develop), indicating mixed authorship.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "teams (and leadership) have an accurate view of performance across Product, Commercial, and Operations"
> Verified: ✓ found in JD
> Reasoning: Three equally weighted stakeholder groups (Product for measurement/iteration, Commercial for GTM/ROI, Operations for business metrics) feature prominently across distinct responsibilities.

**Run 2:** `product` ✗
> Quote: "Strengthen use of measurement in product processes: Embed 'instrumentation before shipping' so every major release launches with the right KPIs, tracking, dashboards, and alerts - enabling fast learning, quick diagnosis, and confident iteration."
> Verified: ⚠ NOT found verbatim
> Reasoning: The role primarily serves the Product team through product analytics, measurement embedding, and KPI definition to enable faster iteration and better product decisions.

**Run 3:** `mixed` ✓
> Quote: "across Product, Commercial, and Operations"
> Verified: ✓ found in JD
> Reasoning: The role distributes effort across multiple audiences with equal weight: product analytics, commercial GTM insights, internal data platform, and learning impact evaluation, with no single audience dominating.

⚠ **LLM inconsistency**: runs gave ['mixed', 'product', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Set a clear quarterly plan aligned to our biggest company goals"
> Verified: ✓ found in JD
> Reasoning: The role owns data strategy, OKRs, roadmap direction, and framing for company priorities rather than executing direction set by others.

**Run 2:** `strategic` ✓
> Quote: "The Head of Data will set data strategy and own Data team OKRs, improve product analytics and use of KPIs across the company"
> Verified: ✓ found in JD
> Reasoning: As a senior leader reporting to the CEO, the role is framed around defining strategy, owning roadmaps, and setting direction for the data function using ownership and strategic verbs throughout.

**Run 3:** `strategic` ✓
> Quote: "set data strategy and own Data team OKRs"
> Verified: ✓ found in JD
> Reasoning: The role is framed around setting direction and defining priorities (set strategy, own roadmap, establish governance), not executing pre-defined work.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "AI-fluent and excited to automate/re-engineer workflows rather than add headcount"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools to improve their own productivity and processes, not to build AI capabilities or data infrastructure for AI systems.

**Run 2:** `ai_user` ✗
> Quote: "You should be fluent in using AI and data to automate and re-engineer processes"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to personally use AI as a productivity tool to automate workflows and re-engineer processes, not to build AI infrastructure for the company's products.

**Run 3:** `ai_user` ✗
> Quote: "You should be fluent in using AI and data to automate and re-engineer processes"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI as a personal productivity tool to automate workflows, not to build AI-ready data foundations for AI systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Practical experience implementing data governance: accurate/consistent metrics, access controls, retention, auditing, and privacy-by-design"
> Verified: ✓ found in JD
> Reasoning: Governance is comprehensive but omits testing frameworks, data quality practices, or dbt tests; quality is discussed as outcome (accuracy, reliability) not practice.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality framework signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD does not mention testing, data contracts, data quality frameworks, dbt tests, observability tools, or data quality responsibilities as explicit ownership or required skills.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality framework ownership signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: While data governance and reliability are mentioned, no specific testing framework, data contracts, or observability practice is framed as a candidate responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "maintain trust with schools and learners"
> Verified: ✓ found in JD
> Reasoning: Trust and compliance are genuine concerns (children's data, DPIAs, responsible AI), but balanced against pragmatic innovation and shipping velocity rather than risk-dominance.

**Run 2:** `high` ✗
> Quote: "Own responsible AI for learner data: Put in place pragmatic governance and monitoring for AI features that touch learner responses and scoring - so we can innovate and keep trust high."
> Verified: ✓ found in JD
> Reasoning: The JD frames preventing bad outcomes (loss of trust with schools/learners, regulatory exposure through improper handling of children's data) as core responsibilities, with multiple major role components dedicated to governance, privacy, and compliance.

**Run 3:** `high` ✗
> Quote: "Put in place pragmatic governance and monitoring for AI features that touch learner responses and scoring - so we can innovate and keep trust high"
> Verified: ✓ found in JD
> Reasoning: The role centers on preventing loss of trust, regulatory non-compliance, and harm to children's data, with repeated language about governance, privacy, and compliance indicating risk-prevention as a core driver.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']
