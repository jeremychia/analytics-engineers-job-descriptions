# Trace: 2026-04-09_lovable_analytics-engineer-finance

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer - Finance — Lovable

**URL:** https://jobs.ashbyhq.com/lovable/081be99e-95bf-4992-9cf2-d16371635ac1
**Location:** Stockholm, Sweden
**Employment Type:** Full Time
**Salary:** Not listed

---

## Key Responsibilities

- Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics
- Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns
- Oversee data ingestion from Stripe, billing platforms, and payment processors
- Verify data consistency across systems and reporting layers
- Document business logic for financial metrics including revenue recognition and deferred income
- Implement quality assurance protocols for financial data
- Collaborate with Finance to convert requirements into structured data solutions

---

## Required Qualifications

- Knowledge of subscription economy metrics (MRR, ARR, churn, LTV)
- Background with payment platforms like Stripe or Chargebee
- SQL and dbt expertise including data modeling and testing
- Understanding of dimensional modeling and semantic layers
- Experience with cloud data warehouses (Snowflake, BigQuery, Redshift, Databricks)
- Familiarity with BI platforms (Looker, Tableau, Power BI, Metabase)
- Meticulous attention to financial data accuracy

---

## Preferred / Bonus Skills

Not listed in the posting.

---

## Benefits

Not specified in the posting.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | hiring_manager | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | execution | execution | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Verify data consistency across systems and reporting layers"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize verification of consistency and implementation of quality protocols rather than speed or iteration pace.

**Run 2:** `rigour` ✓
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data consistency verification, quality assurance, and meticulous accuracy throughout with no velocity language, clearly indicating a rigour-focused orientation.

**Run 3:** `rigour` ✓
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes verification, documentation, quality assurance, and accuracy with no signals of speed or iteration-focused delivery.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition is a compliance-sensitive financial reporting area where errors directly impact financial statements and regulatory audit.

**Run 2:** `high` ✓
> Quote: "revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition is explicitly a regulated financial reporting concern that directly affects financial statements and audit, placing this in the high-risk category.

**Run 3:** `high` ✓
> Quote: "financial metrics including revenue recognition and deferred income"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition and deferred income accounting are explicit financial reporting and regulatory compliance matters with direct business and legal implications.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Collaborate with Finance"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a collaborating partner in the responsibilities section.

**Run 2:** `1` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a collaboration partner in the responsibilities.

**Run 3:** `1` ✓
> Quote: "Finance"
> Verified: ✓ found in JD
> Reasoning: Finance is the only named internal function explicitly mentioned as a collaboration partner in the JD.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns"
> Verified: ✓ found in JD
> Reasoning: Named modern tools (SQLMesh) and existing integrations indicate established infrastructure, but the role is building out financial analytics capabilities within that foundation.

**Run 2:** `mid` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns"
> Verified: ✓ found in JD
> Reasoning: The JD names specific tools in responsibilities (SQLMesh, Stripe) and describes both establishing new foundational work and sustaining existing systems, indicating a growing data function rather than early-stage startup or fully mature operation.

**Run 3:** `mid` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns"
> Verified: ✓ found in JD
> Reasoning: The JD describes establishing core financial models in a new domain while overseeing existing data ingestion pipelines, indicating an established data function expanding into finance analytics.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical tools (SQLMesh), precise financial methodologies (revenue recognition, churn analysis), and specific integration sources (Stripe, payment processors) that demonstrate domain expertise.

**Run 2:** `hiring_manager` ✗
> Quote: "Oversee data ingestion from Stripe, billing platforms, and payment processors"
> Verified: ✓ found in JD
> Reasoning: The JD demonstrates domain-specific knowledge of payment infrastructure, subscription metrics (MRR, ARR, churn, LTV), and accounting concepts (revenue recognition, deferred income) that only someone performing this job would include.

**Run 3:** `mixed` ✓
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: The JD combines specific technical knowledge (named tool SQLMesh, precise subscription economy metrics) with some generic responsibility statements, indicating both hiring manager and recruiter input.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves Finance as the primary stakeholder, building financial metrics and data models for their use and decision-making.

**Run 2:** `finance` ✓
> Quote: "Document business logic for financial metrics including revenue recognition and deferred income"
> Verified: ✓ found in JD
> Reasoning: All responsibilities center on financial metrics, revenue recognition, and subscription accounting, with explicit Finance team collaboration as the primary audience.

**Run 3:** `finance` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The entire role focuses on delivering financial metrics and revenue reporting solutions directly to Finance stakeholders.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role executes Finance's requirements with technical autonomy in implementation but lacks strategic direction-setting authority.

**Run 2:** `execution` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role is framed around implementing Finance's requirements rather than defining what Finance should prioritize or how analytics should be delivered.

**Run 3:** `mixed` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns"
> Verified: ✓ found in JD
> Reasoning: The role owns the technical design and implementation of the data foundation while receiving priorities and requirements from Finance stakeholders.

⚠ **LLM inconsistency**: runs gave ['execution', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The job description contains no mention of AI tools, AI-assisted coding, or AI infrastructure that the candidate should use or build.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI-assisted coding tools, AI-ready data infrastructure, or any AI skill expectations for the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for the candidate to use or build AI/ML tools or infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: Quality assurance is framed as an ownership responsibility using the action verb 'implement,' not merely listed as a tool in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The action verb 'Implement' in the responsibilities section indicates the candidate owns defining and establishing QA practices, not merely using existing testing tools.

**Run 3:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: Quality assurance is framed as a responsibility the candidate implements and owns, not merely a required tool skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Meticulous attention to financial data accuracy"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes accuracy and consistency concerns in a high-risk financial domain, but lacks explicit compliance, audit, or regulatory language.

**Run 2:** `high` ✗
> Quote: "Meticulous attention to financial data accuracy"
> Verified: ✓ found in JD
> Reasoning: The role operates in an inherently regulated financial reporting domain (revenue recognition) with repeated emphasis on data consistency, verification, and accuracy, indicating high stakes around preventing inaccurate financial data from reaching decision-makers.

**Run 3:** `moderate` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes preventing financial data errors through quality assurance and accuracy checks, reflecting operational reliability concerns in a high-stakes domain without explicit compliance or regulatory language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']
