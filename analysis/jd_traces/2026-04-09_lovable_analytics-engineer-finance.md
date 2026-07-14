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
| jd_authorship | mixed | mixed | hiring_manager | hiring_manager | 33% | ✗ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data accuracy, consistency verification, and QA implementation with zero velocity signals, establishing rigour as the dominant orientation.

**Run 2:** `rigour` ✓
> Quote: "Meticulous attention to financial data accuracy"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes accuracy, verification, quality assurance, and meticulous attention throughout with no velocity-oriented language present.

**Run 3:** `rigour` ✓
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize verification, documentation, and quality assurance with no velocity or speed signals present.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition is a core accounting and regulatory compliance function; errors directly affect financial reporting accuracy and regulatory compliance.

**Run 2:** `high` ✓
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: The role involves revenue recognition, a directly regulated financial reporting function with compliance and regulatory implications.

**Run 3:** `high` ✓
> Quote: "Document business logic for financial metrics including revenue recognition and deferred income"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition and deferred income are financial reporting and compliance-critical areas where data errors have direct regulatory implications.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a collaboration partner; payment processors and billing platforms are data sources, not partner teams.

**Run 2:** `1` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a collaboration partner in the JD.

**Run 3:** `1` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a partner team; payment processors and BI platforms are systems/tools rather than partner teams.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns"
> Verified: ✓ found in JD
> Reasoning: The presence of SQLMesh as an active tool and the framing to 'sustain' existing models suggests infrastructure exists, while 'establish foundational tables' indicates the team is expanding capacity rather than starting from zero.

**Run 2:** `mid` ✗
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition"
> Verified: ✓ found in JD
> Reasoning: The role involves sustaining existing infrastructure (SQLMesh) and building on established data sources rather than building from zero.

**Run 3:** `mid` ✗
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: The data function uses named tools (SQLMesh) and has existing infrastructure to sustain, while establishing foundational models for the revenue analytics domain.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: Technical specificity appears (SQLMesh, revenue recognition, Stripe integrations) alongside generic boilerplate verbs ('collaborate with stakeholders', 'implement protocols'), indicating both hiring manager and recruiter input.

**Run 2:** `hiring_manager` ✗
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics; Oversee data ingestion from Stripe, billing platforms, and payment processors"
> Verified: ✓ found in JD
> Reasoning: The responsibilities demonstrate technical specificity with named tools (SQLMesh), specific metrics (MRR, ARR, churn, LTV), and precise data sources that indicate authorship by someone who performs this work.

**Run 3:** `hiring_manager` ✗
> Quote: "Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics"
> Verified: ✓ found in JD
> Reasoning: The responsibilities name specific tools (SQLMesh) with precise domain context (revenue recognition), specific financial methodologies (dimensional modeling, deferred income), and named payment systems (Stripe) that indicate hands-on experience.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Document business logic for financial metrics including revenue recognition and deferred income"
> Verified: ✓ found in JD
> Reasoning: The role exclusively serves Finance through accounting-focused metrics (revenue recognition, deferred income, MRR/ARR) with Finance explicitly named as the primary collaboration partner.

**Run 2:** `finance` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Finance is explicitly named as the primary stakeholder, and all responsibilities flow from financial requirements including revenue recognition and deferred income.

**Run 3:** `finance` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Finance is explicitly named as the primary stakeholder, and all responsibilities focus on revenue recognition, subscription metrics, and financial data accuracy.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: Requirements originate from Finance and the role executes their conversion into data infrastructure, with scope and direction set externally rather than the candidate defining strategy.

**Run 2:** `mixed` ✗
> Quote: "Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns; Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic definition of foundational data models with execution in service of Finance's external requirements.

**Run 3:** `execution` ✓
> Quote: "Collaborate with Finance to convert requirements into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role receives scoped requirements from Finance and delivers data solutions against those requirements rather than setting strategic direction.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted workflows, GenAI applications, or AI-ready data infrastructure appears anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no signal that the candidate is expected to use or build AI capabilities.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI, machine learning, AI tools, or AI-assisted workflows in either the candidate requirements or responsibilities sections.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The action verb 'implement' applied to QA protocols positions the candidate as owning the testing and quality framework, not merely using existing tools.

**Run 2:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to implement and own quality assurance protocols as an active responsibility rather than operate existing tools.

**Run 3:** `responsibility` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility with an action verb 'implement', not merely listed as a required tool or technical skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Implement quality assurance protocols for financial data"
> Verified: ✓ found in JD
> Reasoning: Revenue recognition is inherently compliance-critical, and the repeated emphasis on accuracy, consistency verification, and QA protocols reflects high loss aversion around financial data quality reaching decision-makers.

**Run 2:** `moderate` ✗
> Quote: "Meticulous attention to financial data accuracy"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes accuracy and quality in financial data consistently, indicating moderate loss aversion focused on operational correctness and stakeholder trust rather than explicit compliance/regulatory risk mitigation.

**Run 3:** `high` ✗
> Quote: "Meticulous attention to financial data accuracy"
> Verified: ✓ found in JD
> Reasoning: Risk prevention dominates through repeated emphasis on accuracy, verification, and quality assurance in a compliance-critical domain (revenue recognition and financial reporting).

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']
