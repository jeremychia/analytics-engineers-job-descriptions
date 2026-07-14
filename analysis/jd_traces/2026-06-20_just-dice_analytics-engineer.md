# Trace: 2026-06-20_just-dice_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (f/m/d) — justDice

**URL:** https://jobs.ashbyhq.com/justDice/07c63836-8e46-4408-95bb-fcc9c30c51be
**Location:** Hamburg, Germany (Hybrid — 3 core office days)

---

## Key Responsibilities

**Data Engineering**

- Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services.
- Create and maintain data architecture and data models for various business domains.
- Implement data quality and validation processes to guarantee data accuracy and consistency.
- Automate and streamline data integration, ETL, and ELT processes to improve efficiency.

**Analytics**

- Establish and implement data requirements and analytics solutions with our tech and product teams.
- Plan, execute, and evaluate experiments with our marketing and product teams.
- Establish the KPIs and metrics that will be used by the business. Develop appropriate monitoring tools for these indicators.
- Convey the message using visualization tools (Tableau)

---

## Required Qualifications

- Bachelor's degree in STEM fields or previous experience in related jobs or projects.
- Minimum 3 years of experience in data science, engineering, analytics, or a related field.
- Strong SQL, Python programming skills.
- Knowledge of dbt
- Proficient in data modeling, data architecture, and data engineering principles.
- Knowledge of GitLab or similar git-based version control systems.
- Ability to validate hypotheses through data visualization.
- Strong analytical skills.
- Autonomy and ability to work independently.
- Strong problem-solving skills.
- Growth mindset and eagerness to learn new technologies and methodologies.
- Is able to communicate in a pragmatic and professional manner.

---

## Preferred / Bonus Skills

None explicitly listed.

---

## Benefits

- **Invest in Your Future:** Regular feedback and our development program support your growth, helping you expand your skill set and achieve your career goals.
- **Easy Arrival to justDice:** From signing to settling in Hamburg, we've got you covered. Need a visa? No problem. Ready to build your new life and career at justDice in Hamburg? We support every ambition—from learning German to a relocation bonus that helps you settle in and make Hamburg feel like home.
- **Live Your Best Life, at Work and Beyond:** We work in a hybrid setup with 3 core office days, plus flexible working hours. Enjoy 30 vacation days, 3 weeks of remote work per year, and free access to an in-house gym with lots of different fitness classes and mental health support through our Employee Assistance Program (EAP).
- **Thrive Where You Work:** Enjoy the Alster lake view from our central office with top notch equipment, fun open spaces, and a large variety of snacks and drinks.
- **Join the Community!** Participate in regular team and company events, including hackathons and social gatherings. We work together, and we celebrate together, too.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 3 | 3 | 3 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | mixed | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | product | product | mixed | product | 33% | ✓ |
| autonomy_level | mixed | mixed | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: The responsibilities explicitly emphasize correctness, quality assurance, and validation as core expectations.

**Run 2:** `rigour` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data accuracy, consistency, and validation as core expectations, using explicit rigour signals with no corresponding velocity or speed-oriented language.

**Run 3:** `rigour` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data quality, validation, accuracy, and consistency are the dominant framing across responsibilities, with no velocity language present.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Establish the KPIs and metrics that will be used by the business."
> Verified: ✓ found in JD
> Reasoning: The role affects business decision-making without explicit regulatory, compliance, or financial reporting language.

**Run 2:** `moderate` ✓
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: While data quality is emphasized, there is no language around regulatory compliance, financial reporting, or audit requirements that would indicate high-risk domain exposure.

**Run 3:** `moderate` ✓
> Quote: "Plan, execute, and evaluate experiments with our marketing and product teams."
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making through analytics and experiments without explicit regulatory, compliance, or financial reporting language.

### collaboration_width
**Manual:** `2`

**Run 1:** `3` ✗
> Quote: "tech and product teams; marketing and product teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions are explicitly listed: tech/engineering, product, and marketing.

**Run 2:** `3` ✗
> Quote: "with our tech and product teams; with our marketing and product teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly mentioned as collaborators: tech/engineering, product, and marketing.

**Run 3:** `3` ✗
> Quote: "tech and product teams; marketing and product teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct functions are named: tech/engineering, product, and marketing.

⚠ **Disagreement**: manual=`2` vs LLM majority=`3`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services."
> Verified: ✓ found in JD
> Reasoning: Named tools in the responsibilities section indicate existing data infrastructure being scaled and enhanced rather than built from zero.

**Run 2:** `mid` ✗
> Quote: "Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services; Create and maintain data architecture and data models"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, AWS, SQL, Python) appear in responsibilities framed as actively used in enhancement and maintenance, indicating an established data function with existing infrastructure rather than building from zero.

**Run 3:** `mid` ✗
> Quote: "Create and maintain data architecture and data models for various business domains."
> Verified: ✓ found in JD
> Reasoning: The role involves maintaining existing infrastructure and extending it across multiple domains, signaling an established function that is growing.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services; Establish and implement data requirements and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The JD includes specific technical tools and named methodologies alongside generic action verbs like 'establish' and 'implement' that could apply to any data role.

**Run 2:** `mixed` ✓
> Quote: "Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services; Establish and implement data requirements and analytics solutions with our tech and product teams"
> Verified: ✓ found in JD
> Reasoning: The responsibilities combine specific technical tool references (dbt, AWS services, Tableau) suggesting hiring manager input with generic action verbs ('establish,' 'implement') typical of recruiter language.

**Run 3:** `recruiter` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs and listed tools lack specific context about what technical problems need solving or what scale/volume matters.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `product` ✓
> Quote: "Plan, execute, and evaluate experiments with our marketing and product teams."
> Verified: ✓ found in JD
> Reasoning: The emphasis on experiments and KPI establishment for product-driven decision-making indicates a product analytics orientation.

**Run 2:** `mixed` ✗
> Quote: "Design, construct, and enhance data pipelines utilizing SQL, Python, dbt, git, and AWS services; Establish and implement data requirements and analytics solutions with our tech and product teams; Plan, execute, and evaluate experiments with our marketing and product teams"
> Verified: ✓ found in JD
> Reasoning: The role is split equally between data infrastructure serving the internal data function and analytics/experiments serving product and business decision-making, with no single dominant audience.

**Run 3:** `product` ✓
> Quote: "Plan, execute, and evaluate experiments with our marketing and product teams."
> Verified: ✓ found in JD
> Reasoning: The role's primary emphasis is on analytics supporting product and marketing experimentation rather than internal data platform or financial reporting.

⚠ **LLM inconsistency**: runs gave ['product', 'mixed', 'product']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Establish the KPIs and metrics that will be used by the business; Establish and implement data requirements and analytics solutions with our tech and product teams."
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of metrics and data architecture with collaborative execution in support of other teams' priorities.

**Run 2:** `execution` ✗
> Quote: "Establish and implement data requirements and analytics solutions with our tech and product teams; Plan, execute, and evaluate experiments with our marketing and product teams"
> Verified: ✓ found in JD
> Reasoning: The repeated phrase 'with our teams' indicates the role executes within a collaborative framework set by product, marketing, and business stakeholders rather than autonomous strategic ownership.

**Run 3:** `mixed` ✓
> Quote: "Establish the KPIs and metrics that will be used by the business."
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of defining metrics and requirements, but experiments are planned collaboratively with product and marketing teams.

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, AI infrastructure, or AI products that the candidate should engage with.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI, machine learning, AI coding tools, or AI data infrastructure, indicating no AI skill is expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted workflows, or AI-ready data infrastructure in candidate expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data quality and validation are framed as something the candidate owns and implements using an action verb, indicating responsibility rather than tool usage.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data quality and validation are framed as an owned responsibility using the action verb 'implement', indicating the candidate is accountable for defining and maintaining these practices.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data quality and validation are framed as an owned responsibility with action verb 'Implement' rather than as a tool or requirement.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data quality and operational reliability are emphasized but framed as delivery excellence rather than risk/compliance/trust protection.

**Run 2:** `moderate` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and preventing bad data are concerns articulated through data quality language, but there is no compliance, regulatory, or stakeholder-trust framing that would elevate this to high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Implement data quality and validation processes to guarantee data accuracy and consistency."
> Verified: ✓ found in JD
> Reasoning: Data reliability is a concern but secondary to delivery; no regulatory, compliance, or stakeholder-trust language dominates the framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
