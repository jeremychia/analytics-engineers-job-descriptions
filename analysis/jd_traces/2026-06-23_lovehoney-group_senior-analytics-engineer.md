# Trace: 2026-06-23_lovehoney-group_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Lovehoney Group

**URL:** https://jobs.eu.lever.co/lovehoneygroup/c5a8c4ee-4490-4e32-b25f-9a5d4afc70f4
**Location:** Berlin / Bath (Hybrid)

---

## Key Responsibilities

- Lead enterprise-wide data warehouse architecture and implement high-performance data processing systems.
- Drive platform evolution by designing sophisticated ETL/ELT pipelines and orchestrating them via Airflow.
- Implement enterprise-level data quality strategies and governance frameworks across the organisation.
- Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development.
- Represent data engineering in strategic initiatives, helping influence long-term planning and cross-functional alignment.

---

## Required Qualifications

- 5+ years of experience in data engineering or architecture, ideally in a complex, enterprise-scale environment.
- Expertise in SQL, Python, and cloud data warehouse technologies such as BigQuery.
- Strong knowledge of orchestration tools (e.g., Airflow) and data quality frameworks (e.g., Soda Core).
- A strategic mindset with experience designing scalable platforms and data governance models.
- Experience mentoring engineers and influencing technology direction at an organisational level.

---

## Preferred / Bonus Skills

None explicitly listed beyond the requirements above.

---

## Benefits

- A welcoming workplace full of drinks, snacks, friendly faces and fun team-building events.
- Access to unique discounts at high street retailers, hotels, and service providers, in addition to a 50% discount on all Lovehoney products to explore and discover new ways to have fun.
- Enjoy a hybrid work model that fosters flexibility and work-life balance, with three days per week in-office and the opportunity to work remotely for up to 4 weeks per year, alongside 25 days' holiday, plus an additional day for each year you are with Lovehoney.
- Access to customized training opportunities to support your unique learning journey, complemented by biannual feedback cycles, offering valuable insights into your performance and growth areas, enhancing your development within the company.
- Recognising the significance of physical and mental health, we proudly provide gym benefits in addition to a mental wellbeing platform, to ensure our employees thrive both professionally and personally.

---

## Interview Process

1. CV review
2. Interview with one of our Talent Acquisition Team Members
3. Hiring Manager Interview
4. Hiring Team Interview

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mature | mid | 33% | ✓ |
| jd_authorship | mixed | hiring_manager | mixed | recruiter | 0% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Governance, data quality, and enterprise-level frameworks dominate the responsibilities with no velocity or speed-oriented language present.

**Run 2:** `rigour` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, data quality, and enterprise-scale reliability with no velocity signals like 'move fast', 'iteration', or 'MVP'.

**Run 3:** `rigour` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, governance, and architectural rigor throughout with no velocity or shipping language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: While data quality and governance are priorities, there is no explicit mention of financial reporting, compliance, regulatory impact, or revenue attribution.

**Run 2:** `moderate` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Lovehoney is an e-commerce company; the JD emphasizes operational governance and quality but lacks regulatory, compliance, or financial reporting language typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Data errors affect operational reliability in an e-commerce context without explicit financial reporting, regulatory, or compliance consequences.

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "Represent data engineering in strategic initiatives, helping influence long-term planning and cross-functional alignment."
> Verified: ✓ found in JD
> Reasoning: The JD describes cross-functional collaboration but does not explicitly name specific partner teams or business functions.

**Run 2:** `0` ✗
> Quote: "cross-functional alignment"
> Verified: ✓ found in JD
> Reasoning: No named partner teams or functions (Finance, Product, Marketing, etc.) are explicitly listed; collaboration is mentioned generically.

**Run 3:** `0` ✗
> Quote: "No named partner teams identified; mentions mentoring own engineers and cross-functional alignment without naming specific functions."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD references mentoring engineers and cross-functional work but does not explicitly name any specific partner teams or business functions.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Drive platform evolution by designing sophisticated ETL/ELT pipelines and orchestrating them via Airflow."
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Airflow) and multiple engineers to mentor indicate established infrastructure being evolved rather than built from zero.

**Run 2:** `mature` ✗
> Quote: "Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development."
> Verified: ✓ found in JD
> Reasoning: The role requires mentoring multiple engineers and defining strategic direction for an established enterprise data function, implying a team of significant size already operating.

**Run 3:** `mid` ✓
> Quote: "Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development."
> Verified: ✓ found in JD
> Reasoning: Multiple engineers exist to mentor and the role involves evolving an existing platform, indicating an established team in active growth rather than fully mature operations.

⚠ **LLM inconsistency**: runs gave ['mid', 'mature', 'mid']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Drive platform evolution by designing sophisticated ETL/ELT pipelines and orchestrating them via Airflow."
> Verified: ✓ found in JD
> Reasoning: Most responsibilities contain technical specificity (Airflow orchestration, enterprise data warehouse architecture, tool evaluation) that reflects hands-on practitioner experience.

**Run 2:** `mixed` ✓
> Quote: "Drive platform evolution by designing sophisticated ETL/ELT pipelines and orchestrating them via Airflow."
> Verified: ✓ found in JD
> Reasoning: Named tools with operational context (Airflow for orchestration) signal hiring manager input, but strategic verbs like 'lead' and 'drive' without specific scale or methodology details suggest recruiter framing mixed in.

**Run 3:** `recruiter` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and boilerplate language throughout with no specific technical context, scale numbers, or named systems the candidate will actually maintain.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development."
> Verified: ✓ found in JD
> Reasoning: The role serves the data engineering team and data infrastructure itself, not external business functions like sales, product, or finance.

**Run 2:** `internal_data` ✓
> Quote: "Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development."
> Verified: ✓ found in JD
> Reasoning: The core responsibilities focus on the data platform, data quality infrastructure, and data team capability rather than serving specific business functions like commercial, product, or finance.

**Run 3:** `internal_data` ✓
> Quote: "Lead enterprise-wide data warehouse architecture and implement high-performance data processing systems."
> Verified: ✓ found in JD
> Reasoning: The primary focus is on building and evolving the data platform itself, serving data consumers and engineers rather than a specific business function.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Lead enterprise-wide data warehouse architecture and implement high-performance data processing systems."
> Verified: ✓ found in JD
> Reasoning: The 'Lead' verb combined with architectural scope and responsibilities for setting technology direction indicate expected strategic direction-setting authority.

**Run 2:** `strategic` ✓
> Quote: "Lead enterprise-wide data warehouse architecture and implement high-performance data processing systems."
> Verified: ✓ found in JD
> Reasoning: Action verbs throughout—'lead', 'drive', 'influence', 'implement'—frame the role as setting direction and defining strategic priorities for the data function rather than executing direction from others.

**Run 3:** `strategic` ✓
> Quote: "Drive platform evolution by designing sophisticated ETL/ELT pipelines and orchestrating them via Airflow."
> Verified: ✓ found in JD
> Reasoning: The repeated use of 'drive', 'lead', and 'influence technology direction' indicates the role shapes strategic direction rather than executing pre-set plans.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-ready data foundations, GenAI applications, or any AI skills expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no reference to AI coding tools, AI-ready data foundations, or candidate expectations to work with AI; the company's domain is irrelevant to candidate skill requirements.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation for the candidate to use AI coding tools, build AI infrastructure, or work with AI/ML systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: The 'Implement' action verb frames data quality as an owned responsibility, not merely a skill or tool to know.

**Run 2:** `responsibility` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: The action verb 'implement' in the responsibilities section frames data quality as something the candidate owns and defines, not a tool to use from a list.

**Run 3:** `responsibility` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as something the candidate owns and implements, not merely as a tool in their skillset.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Data quality and governance signal that operational reliability is a concern, but the overall framing emphasises architecture and leadership over risk prevention or compliance.

**Run 2:** `moderate` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are core concerns, but the JD lacks regulatory, compliance, or audit language that would signal high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Implement enterprise-level data quality strategies and governance frameworks across the organisation."
> Verified: ✓ found in JD
> Reasoning: Data quality and governance emphasis indicates concern for operational reliability but lacks explicit compliance, regulatory, or risk-prevention language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
