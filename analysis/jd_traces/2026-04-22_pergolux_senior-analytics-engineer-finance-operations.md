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
| collaboration_width | 3 | 3 | 3 | 2 | 33% | ✓ |
| data_team_maturity | early | early | mid | early | 33% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building a reliable, well-structured financial data foundation with no velocity language present.

**Run 2:** `rigour` ✗
> Quote: "Creating and maintaining a "Finance Single Source of Truth" covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ✓ found in JD
> Reasoning: The focus on creating a single source of truth for financial metrics indicates a rigour orientation toward accuracy and reliability rather than speed.

**Run 3:** `rigour` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building reliable, foundational financial systems without any velocity-oriented language, prioritizing structural integrity over speed.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ⚠ NOT found verbatim
> Reasoning: Financial reporting, revenue recognition (regulatory), and COGS/EBITDA tracking directly affect financial accuracy and regulatory compliance.

**Run 2:** `high` ✓
> Quote: "leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Creating the foundation for financial reporting with revenue recognition data directly impacts regulatory compliance and accurate financial statements.

**Run 3:** `high` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Data errors directly affect financial reporting, revenue recognition, and EBITDA calculations, which are regulated financial outputs.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "finance; operations; leadership teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly listed as collaboration partners in the responsibilities.

**Run 2:** `3` ✓
> Quote: "Collaborating with finance, operations, and leadership teams to align on metrics"
> Verified: ✓ found in JD
> Reasoning: This lists three distinct named functions (finance, operations, leadership) as collaboration partners.

**Run 3:** `2` ✗
> Quote: "finance; operations"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct functions (finance and operations) that the role collaborates with regularly.

⚠ **LLM inconsistency**: runs gave ['3', '3', '2']

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "comfort navigating uncertainty and bringing structure to developing systems"
> Verified: ✓ found in JD
> Reasoning: The language about 'bringing structure to developing systems' and 'establishing the foundation' indicates the financial data infrastructure is nascent and being built.

**Run 2:** `mid` ✗
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The emphasis on "establishing the foundation" suggests building critical infrastructure, but the requirement for proven dbt and modern data stack experience implies existing tools, placing this at mid-stage maturity.

**Run 3:** `early` ✓
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The primary mission is to build the finance data function from scratch, with language about establishing and creating new infrastructure.

⚠ **LLM inconsistency**: runs gave ['early', 'mid', 'early']

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The specificity about ERP integration, revenue recognition, COGS tracking, and profitability modeling demonstrates hands-on domain knowledge, not generic boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Creating and maintaining a "Finance Single Source of Truth" covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ✓ found in JD
> Reasoning: The specificity of financial metrics (COGS, EBITDA) and named deliverable (Single Source of Truth) suggest hiring manager input, but generic action verbs and boilerplate elsewhere indicate recruiter involvement.

**Run 3:** `mixed` ✗
> Quote: "Collaborating with finance, operations, and leadership teams to align on metrics and embed data in decision-making"
> Verified: ✓ found in JD
> Reasoning: The JD mixes specific domain knowledge (ERP integration, COGS, EBITDA, profitability models) with generic boilerplate collaboration language.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary mission is delivering financial data and models to the finance organization for reporting and decision-making.

**Run 2:** `finance` ✓
> Quote: "Creating and maintaining a "Finance Single Source of Truth" covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ✓ found in JD
> Reasoning: The explicit focus on revenue, COGS, and EBITDA clearly identifies the finance function as the primary stakeholder.

**Run 3:** `finance` ✓
> Quote: "Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary audience is the finance function, explicitly named as the 'Single Source of Truth' customer with financial metrics as core deliverables.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally about establishing and designing the financial data domain, not executing predefined priorities.

**Run 2:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: The verbs "leading" and "establishing" indicate the role sets direction for how financial reporting data is organized, rather than executing a pre-defined plan.

**Run 3:** `strategic` ✓
> Quote: "Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: Strategic verbs (leading, establishing) dominate the responsibilities, positioning the role as a builder and definer of the finance data function.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, or AI-ready data pipelines anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for AI tool usage or building AI-ready infrastructure; Python is listed generically as part of the modern data stack.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding agents, or AI-related expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Expert SQL proficiency and proven experience with dbt building scalable, well-structured models"
> Verified: ✓ found in JD
> Reasoning: dbt is listed as a tool requirement but there is no mention of testing, data contracts, or quality frameworks as ownership responsibilities.

**Run 2:** `absent` ✗
> Quote: "No testing signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of data quality frameworks, testing practices, data contracts, or observability as a responsibility or required tool.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality language present in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD never mentions testing, data contracts, data quality frameworks, or observability practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Understanding revenue recognition and KPIs"
> Verified: ✓ found in JD
> Reasoning: The domain carries compliance risk, but the JD frames the role as delivery and capability rather than risk prevention or governance.

**Run 2:** `moderate` ✗
> Quote: "establishing the foundation for all financial reporting"
> Verified: ✓ found in JD
> Reasoning: While the financial context implies reliability is important, there's no explicit risk, compliance, or loss-prevention language; the framing is about enabling good decisions rather than preventing bad outcomes.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed purely in delivery and capability terms (leading, creating, designing) despite the implicit high-risk nature of financial reporting.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
