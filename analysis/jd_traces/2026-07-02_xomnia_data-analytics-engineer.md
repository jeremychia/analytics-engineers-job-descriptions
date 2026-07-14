# Trace: 2026-07-02_xomnia_data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data Analytics Engineer — Xomnia

**URL:** https://careers.xomnia.com/o/data-analytics-engineer
**Location:** Amsterdam, Netherlands
**Date Posted:** 2026-07-02
**Salary:** 3,800–6,200 EUR

---

# Data Analytics Engineer at Xomnia

Location: Amsterdam, Noord-Holland, Netherlands (Hybrid)
Salary: EUR 3,800 - EUR 6,200 per month (40 hours, excluding vacation allowance)

## Key Responsibilities
The role involves building scalable data models and pipelines. Professionals will optimize data workflows for performance, usability, and cost efficiency and work with business stakeholders to understand analytics needs. Additional duties include developing self-service platforms, collaborating with data engineers, translating insights into dashboards, and contributing to internal knowledge sharing.

## Required Qualifications
Candidates need 3+ years of experience in a similar role plus a Bachelor's or Master's degree with strong IT/ICT components. Essential skills include SQL, Python/Spark proficiency, and hands-on experience with DBT and cloud data warehouses (e.g. Snowflake, BigQuery, Databricks).

Additional requirements: strong data modeling expertise, direct client communication abilities, fluent in Dutch and English (required for this role), and collaborative mindset.

## Tech Stack & Tools
DBT, Databricks, Snowflake, BigQuery, Azure Data Factory, Power BI, Tableau

## Benefits
EUR 5,000 annual development budget, 25 vacation days, flexible working arrangements, pension, company trips, and Stock Appreciation Rights opportunities.

Contact: ezra.lammers@xomnia.com

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | commercial | internal_data | internal_data | internal_data | 100% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "optimize data workflows for performance, usability, and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes optimization, scalability, and operational efficiency rather than speed of delivery or iteration pace.

**Run 2:** `rigour` ✗
> Quote: "optimize data workflows for performance, usability, and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize optimizing performance, usability, and cost efficiency rather than speed or iteration, with no mention of fast-paced delivery or rapid shipping.

**Run 3:** `rigour` ✗
> Quote: "building scalable data models and pipelines"
> Verified: ✓ found in JD
> Reasoning: The emphasis on 'scalable' systems optimized for 'performance, usability, and cost efficiency' signals concern for building well-engineered, sustainable infrastructure rather than speed or rapid delivery.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "work with business stakeholders to understand analytics needs"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making and general analytics without explicit financial reporting, compliance, or regulatory requirements.

**Run 2:** `moderate` ✓
> Quote: "work with business stakeholders to understand analytics needs"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making without explicit regulatory, compliance, or financial reporting responsibilities that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "work with business stakeholders to understand analytics needs"
> Verified: ✓ found in JD
> Reasoning: The role focuses on business analytics and decision support without financial reporting, compliance, or regulatory language, indicating data errors affect business decisions but not regulatory or financial reporting risk.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "collaborating with data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named partner team is mentioned in the responsibilities section.

**Run 2:** `1` ✓
> Quote: "data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one distinct named partner team (data engineers) is explicitly identified in the responsibilities.

**Run 3:** `1` ✓
> Quote: "data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named team/function is identified in the responsibilities section.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "DBT and cloud data warehouses (e.g. Snowflake, BigQuery, Databricks)"
> Verified: ✓ found in JD
> Reasoning: Specific named tools in the tech stack indicate an established data infrastructure that the candidate will work within.

**Run 2:** `mid` ✓
> Quote: "developing self-service platforms, collaborating with data engineers"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building self-service platforms and collaboration with an existing data engineering team indicates an established team with some infrastructure and role specialization.

**Run 3:** `mid` ✓
> Quote: "developing self-service platforms, collaborating with data engineers"
> Verified: ✓ found in JD
> Reasoning: The presence of specialized roles (data engineers distinct from analyst) and focus on building self-service capabilities indicates a team with some scale and differentiation but not yet mature/established scale.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "translating insights into dashboards, and contributing to internal knowledge sharing"
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and boilerplate responsibilities lack technical specificity about scale, methodology, or actual day-to-day work.

**Run 2:** `recruiter` ✗
> Quote: "work with business stakeholders to understand analytics needs. Additional duties include developing self-service platforms, collaborating with data engineers, translating insights into dashboards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate action verbs without technical specificity about methodology, scale, or how named tools are applied in context.

**Run 3:** `recruiter` ✗
> Quote: "work with business stakeholders to understand analytics needs"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section uses generic boilerplate verbs and concepts without technical specificity, tool context, scale numbers, or methodology details that would only come from someone doing the job.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `internal_data` ✗
> Quote: "developing self-serve platforms"
> Verified: ⚠ NOT found verbatim
> Reasoning: The emphasis on building self-serve analytics platforms indicates the primary audience is internal analytics consumers and data platform users.

**Run 2:** `internal_data` ✗
> Quote: "developing self-service platforms"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building analytics infrastructure and self-service platforms for internal analytics consumers rather than serving commercial, product, or finance functions.

**Run 3:** `internal_data` ✗
> Quote: "building scalable data models and pipelines"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building data infrastructure and collaborating with the data team, with primary focus on the mechanics of data systems rather than serving business or commercial stakeholders.

⚠ **Disagreement**: manual=`commercial` vs LLM majority=`internal_data`

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "building scalable data models and pipelines"
> Verified: ✓ found in JD
> Reasoning: The role is framed around delivering scoped technical work rather than defining strategy or shaping analytics direction.

**Run 2:** `execution` ✓
> Quote: "collaborating with data engineers, translating insights into dashboards"
> Verified: ✓ found in JD
> Reasoning: The verbs emphasize delivery and collaboration within an existing team structure rather than strategic ownership or direction-setting.

**Run 3:** `execution` ✓
> Quote: "collaborating with data engineers, translating insights into dashboards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use supporting/executing verbs ('collaborating', 'translating', 'contributing to') rather than strategic verbs like 'define', 'own', or 'architect', indicating the role executes direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, or AI-related capabilities expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No reference to AI skills, tools, or capabilities for either personal productivity or data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, or AI/ML technical capabilities required of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "optimize data workflows for performance, usability, and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities emphasize performance optimization but contain no mention of testing, data quality frameworks, or observability practices.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No mention of testing, data quality frameworks, data contracts, or observability practices anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal in responsibilities or required qualifications."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing, data quality frameworks, data contracts, and observability are not mentioned anywhere in the responsibilities, requirements, or implied practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is entirely framed in positive capability and delivery terms with no mention of risk, compliance, or reliability concerns as a primary role driver.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivering analytics capabilities and platforms without emphasis on risk prevention, operational reliability, or compliance concerns.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in terms of building and optimizing data systems with no emphasis on risk prevention, reliability concerns, compliance, or preventing bad outcomes reaching stakeholders.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
