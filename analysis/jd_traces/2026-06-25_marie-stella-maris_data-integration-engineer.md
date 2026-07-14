# Trace: 2026-06-25_marie-stella-maris_data-integration-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data & Integration Engineer — Marie-Stella-Maris

**Company:** Marie-Stella-Maris
**Location:** Amsterdam
**Salary:** Not stated
**URL:** https://careers.marie-stella-maris.com/jobs/7053032-data-integration-engineer
**ATS Job ID:** 7053032

---

## Classification

| Field | Value |
|---|---|
| Role Type | data_engineering |
| Seniority | mid |
| JD Authorship | hiring_manager |
| Greenfield vs Fix | mixed |
| Velocity vs Rigour | rigour |
| Domain Risk | moderate |
| Collaboration Width | 3 |
| Data Team Maturity | mid |
| Urgency | standard |
| Language Gate | soft — Dutch |
| Interview Stages | not stated |

**Stack:** dbt, Databricks, Power BI, Fivetran, Celigo, Shopify, Salesforce

---

## Role Summary

Data & Integration Engineer within the Business Technology team at Marie-Stella-Maris (~100 employees), a Dutch lifestyle/social enterprise brand. The role owns pipelines and integrations across retail, e-commerce, and back-office systems (POS, ERP, OMS, CRM, BI), and involves building out data lake and BI environments alongside maintaining existing flows.

---

## Key Responsibilities

- Design and maintain pipelines between core systems (POS, e-commerce, ERP, OMS, CRM, BI)
- Ensure data quality, consistency, and availability
- Build integrations using APIs and Celigo middleware
- Develop data lake and BI environments (Fivetran, Databricks, dbt)
- Support data analytics models
- Work with Data Analysts, Product Owners, and operations teams
- Translate business requirements into technical solutions
- Establish standards and best practices

## Required Qualifications

- Data Engineering or Integration Specialist experience
- Hands-on API, webhook, and middleware integration (preferably Celigo)
- Data pipeline and analytics expertise (Fivetran, Databricks, dbt)
- SaaS platform experience: Shopify, Salesforce, Power BI, PIM, POS
- English fluency; Dutch preferred
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | execution | execution | mixed | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, consistency, and establishing standards—core rigour signals with no velocity language.

**Run 2:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, consistency, availability, and establishing standards—core rigour indicators with no counterbalancing velocity language.

**Run 3:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (data quality, consistency, standards, best practices) dominate the responsibilities with no velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design and maintain pipelines between core systems (POS, e-commerce, ERP, OMS, CRM, BI)"
> Verified: ✓ found in JD
> Reasoning: The operational data scope (retail, e-commerce, back-office) affects business decisions but shows no financial reporting or compliance signals.

**Run 2:** `moderate` ✓
> Quote: "Design and maintain pipelines between core systems (POS, e-commerce, ERP, OMS, CRM, BI)"
> Verified: ✓ found in JD
> Reasoning: Retail/e-commerce systems where data errors affect business operations and analytics but lack explicit financial reporting, compliance, or regulatory risk language.

**Run 3:** `moderate` ✓
> Quote: "Design and maintain pipelines between core systems (POS, e-commerce, ERP, OMS, CRM, BI)"
> Verified: ✓ found in JD
> Reasoning: E-commerce retail operations where data errors affect business decisions without regulatory or financial reporting consequences.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "Work with Data Analysts, Product Owners, and operations teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly mentioned as collaboration partners.

**Run 2:** `3` ✓
> Quote: "Work with Data Analysts, Product Owners, and operations teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams explicitly listed in the collaboration statement.

**Run 3:** `3` ✓
> Quote: "Data Analysts; Product Owners; operations teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions identified as collaboration partners.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "building out data lake and BI environments alongside maintaining existing flows"
> Verified: ✓ found in JD
> Reasoning: The mixed language of building new infrastructure while maintaining existing flows, combined with named tools in responsibilities (Fivetran, Databricks, dbt), indicates a growing data function at mid-maturity.

**Run 2:** `mid` ✓
> Quote: "Develop data lake and BI environments (Fivetran, Databricks, dbt)"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure to maintain alongside development of new environments, with specific named tools in responsibilities suggesting an active, scaling data function.

**Run 3:** `mid` ✓
> Quote: "involves building out data lake and BI environments alongside maintaining existing flows"
> Verified: ✓ found in JD
> Reasoning: Combination of maintaining existing pipelines while developing new infrastructure indicates growth-stage maturity.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Build integrations using APIs and Celigo middleware"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (Celigo middleware for integration work) mixed with generic boilerplate verbs like 'translate business requirements' suggests both hiring manager and recruiter involvement.

**Run 2:** `mixed` ✗
> Quote: "Design and maintain pipelines between core systems (POS, e-commerce, ERP, OMS, CRM, BI)"
> Verified: ✓ found in JD
> Reasoning: Mixes technical specificity (named systems and tools with implementation context) with generic action verbs like support and translate business requirements.

**Run 3:** `hiring_manager` ✓
> Quote: "Build integrations using APIs and Celigo middleware"
> Verified: ✓ found in JD
> Reasoning: Specific tool choice (Celigo as middleware) and named system integrations reflect hands-on technical knowledge of integration patterns.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop data lake and BI environments"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities focus on building data infrastructure and platforms that internal analysts and operations teams consume, rather than serving external customers or revenue functions.

**Run 2:** `internal_data` ✓
> Quote: "Develop data lake and BI environments"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building and maintaining data infrastructure for internal data consumers and analytics.

**Run 3:** `internal_data` ✓
> Quote: "Develop data lake and BI environments (Fivetran, Databricks, dbt)"
> Verified: ✓ found in JD
> Reasoning: Primary responsibility is building data infrastructure for analytics consumption rather than serving external stakeholders.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Translate business requirements into technical solutions"
> Verified: ✓ found in JD
> Reasoning: The role executes requirements from Product Owners and stakeholders, with technical design authority in implementation rather than strategic direction-setting.

**Run 2:** `execution` ✗
> Quote: "Support data analytics models"
> Verified: ✓ found in JD
> Reasoning: While the role includes design and development responsibilities, they are scoped to defined systems and serve defined analytics needs rather than setting overall direction.

**Run 3:** `mixed` ✓
> Quote: "Establish standards and best practices"
> Verified: ✓ found in JD
> Reasoning: Role owns technical direction (design, standards) but executes in service of analytics and operations functions.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

⚠ **LLM inconsistency**: runs gave ['execution', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI, ML, or AI-assisted coding is mentioned in the responsibilities, requirements, or tech stack.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI infrastructure expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, coding agents, or AI infrastructure for the candidate to use or build.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns through the action verb 'ensure', not as a tool-based practice.

**Run 2:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: The candidate is accountable for data quality as a core responsibility, framed with an ownership verb (ensure).

**Run 3:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Candidate is accountable for data quality as a core responsibility, indicating ownership of quality practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Operational reliability (availability, quality) is a concern, but there is no regulatory, compliance, or stakeholder trust framing characteristic of high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are core concerns but lack explicit regulatory, compliance, or stakeholder-trust risk language.

**Run 3:** `moderate` ✗
> Quote: "Ensure data quality, consistency, and availability"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a concern (quality, availability) but framed as operational excellence rather than risk or compliance prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
