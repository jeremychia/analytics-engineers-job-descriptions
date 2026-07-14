# Trace: 2026-04-22_pergolux_senior-analytics-engineer-finance-operations

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer - Finance & Operations — Pergolux LLC

**URL:** https://talents.studysmarter.de/companies/pergolux-llc/senior-analytics-engineer-finance-operations-32039219/
**Location:** Berlin, Germany (Full-time, on-site)
**Salary:** €60,000–€80,000 annually (estimated)

---

## Key Responsibilities

- Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting
- Creating and maintaining a "Finance Single Source of Truth" covering revenue, COGS, logistics costs, and EBITDA
- Designing demand and revenue forecasting models for company-wide planning
- Developing product profitability models by combining purchasing, operational, and financial data
- Collaborating with finance, operations, and leadership teams to align on metrics and embed data in decision-making

---

## Required Qualifications

- Expert SQL proficiency and proven experience with dbt building scalable, well-structured models
- Hands-on experience with modern data stacks (Snowflake, Airbyte, Python)
- Strong business acumen with ability to prioritize impactful work
- Comfort navigating uncertainty and bringing structure to developing systems
- Experience with financial or supply chain data, understanding revenue recognition and KPIs

---

## Preferred / Bonus Skills

- Not explicitly listed

---

## Benefits

- Competitive salary aligned with experience and impact
- Structured pension contributions for long-term financial security
- Significant responsibility directly influencing business outcomes
- International team across Europe
- Product discounts, bike leasing program, career advancement opportunities
- Team culture emphasizing collaboration and regular events

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 3 | 3 | 2 | 2 | 33% | ✗ |
| data_team_maturity | early | early | mid | early | 33% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize accuracy, reliability, and establishing robust foundations for financial data rather than speed or iteration.

**Run 2:** `rigour` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes building a reliable, foundational financial reporting system without any velocity or rapid iteration language.

**Run 3:** `rigour` ✗
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building accurate, well-structured financial foundations with no velocity language; the focus on 'Single Source of Truth' and specific financial metrics signals rigour-oriented work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Errors in financial reporting directly affect compliance and regulatory exposure, placing this in the highest risk category.

**Run 2:** `high` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Financial reporting is explicitly named and directly ties data accuracy to regulatory and stakeholder reporting requirements.

**Run 3:** `high` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Financial reporting is explicitly the core mission, and errors directly affect regulatory compliance and financial accuracy, placing this in the high-risk category.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "finance; operations; leadership teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct partner teams: Finance, Operations, and Leadership.

**Run 2:** `2` ✗
> Quote: "Collaborating with finance, operations, and leadership teams"
> Verified: ✓ found in JD
> Reasoning: Finance and Operations are explicitly named partner functions.

**Run 3:** `2` ✗
> Quote: "Collaborating with finance, operations, and leadership teams"
> Verified: ✓ found in JD
> Reasoning: Finance and Operations are the two explicitly named functional teams counted; leadership is governance rather than an operational function.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

⚠ **LLM inconsistency**: runs gave ['3', '2', '2']

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The emphasis on establishing foundations and navigating uncertainty suggests the financial data infrastructure does not yet exist in mature form.

**Run 2:** `mid` ✗
> Quote: "Expert SQL proficiency and proven experience with dbt building scalable, well-structured models"
> Verified: ✓ found in JD
> Reasoning: Named tools with specific application context and responsibility for building scalable models indicates an existing data function being developed, not greenfield startup.

**Run 3:** `early` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The explicit language of 'establishing the foundation' and the greenfield nature of building the financial data infrastructure signal an early-stage data function.

⚠ **LLM inconsistency**: runs gave ['early', 'mid', 'early']

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Developing product profitability models by combining purchasing, operational, and financial data"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific domain methodology (profitability models, revenue recognition, COGS analysis) only someone with hands-on financial analytics experience would articulate.

**Run 2:** `hiring_manager` ✓
> Quote: "Designing demand and revenue forecasting models for company-wide planning"
> Verified: ✓ found in JD
> Reasoning: The JD specifies model types (demand, revenue forecasting), data domains (COGS, EBITDA, product profitability), and integration tasks (ERP) that only a hiring manager who works in financial data would articulate.

**Run 3:** `mixed` ✗
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA; Designing demand and revenue forecasting models"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD shows domain-specific knowledge (exact financial metrics, ERP integration, forecasting models) alongside generic collaboration language, indicating both hiring manager and recruiter authorship.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary outputs—financial reporting, revenue recognition, EBITDA calculation—all serve finance and FP&A stakeholders.

**Run 2:** `finance` ✓
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary responsibilities center on financial reporting and metrics, making finance the primary stakeholder.

**Run 3:** `finance` ✓
> Quote: "Collaborating with finance, operations, and leadership teams to align on metrics and embed data in decision-making"
> Verified: ✓ found in JD
> Reasoning: All responsibilities and outputs (financial reporting, forecasting models, profitability analysis) are oriented toward Finance and leadership decision-making.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The verbs "leading" and "establishing" indicate the role defines how financial data foundations are built, not just executes work scoped by others.

**Run 2:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The role is expected to establish and lead the financial reporting function, not execute scoped work defined by others.

**Run 3:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The strategic verbs 'leading' and 'establishing' frame this role as defining and shaping the financial data infrastructure rather than executing predefined work.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, agentic workflows, or building infrastructure for AI systems.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD makes no mention of AI skills for the candidate; Python is listed as a general tool without AI application context.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation for the candidate to use, build, or enable AI capabilities or tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD does not mention data quality frameworks, testing practices, data contracts, or observability tools.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of testing practices, data quality frameworks, or observability responsibilities.

**Run 3:** `absent` ✗
> Quote: "Expert SQL proficiency and proven experience with dbt building scalable, well-structured models"
> Verified: ✓ found in JD
> Reasoning: While 'well-structured models' implies quality, there is no explicit mention of testing frameworks, data quality ownership, or data contracts as a responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The role frames financial reporting accuracy in the first responsibility and references regulatory-adjacent concepts (revenue recognition, EBITDA) that imply preventing compliance exposure.

**Run 2:** `moderate` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: While financial reporting inherently requires accuracy and compliance, the JD frames this as a capability-building opportunity rather than emphasizing risk mitigation or compliance requirements.

**Run 3:** `moderate` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The finance domain and emphasis on accurate reporting foundations imply operational reliability is important, but without explicit risk or compliance language, this signals moderate rather than high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']
