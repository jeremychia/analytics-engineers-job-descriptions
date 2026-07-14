# Trace: 2026-06-27_mr-marvis_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — MR MARVIS

**URL:** https://careers.mrmarvis.com/jobs/7670021-senior-analytics-engineer
**Location:** Amsterdam HQ Office
**Date Posted:** 2026-06-27

---

"Own the analytics layer at MR MARVIS. Build trusted data products that power smarter decisions, self-serve insights and future AI use cases"

### What You'll Do

**Design & Modeling**
- Build robust data pipelines translating complex business logic into scalable dbt models
- Optimize models for performance, cost efficiency, and long-term maintainability

**Stakeholder Collaboration**
- Work with business stakeholders to translate analytical needs into structured data solutions
- Drive alignment around consistent metric definitions and reporting standards

**Self-Serve Enablement**
- Enable governed self-serve analytics by simplifying access to trusted data sources
- Support business users in adopting best practices for data exploration
- Optimize our data platform - especially the analytics layer - for AI use cases

**Data Quality & Infrastructure**
- Implement testing, monitoring, and data quality checks
- Partner with data engineers on clean ingestion and upstream design
- Optimize warehouse usage through partitioning, clustering, and incremental modeling

### Requirements

**Essential:**
- Significant Analytics Engineering or BI Engineering experience
- Strong SQL and production dbt experience
- Strong data modelling understanding (facts, dimensions, grain, reuse, testing)
- BI tool experience (Looker Studio, Tableau, Omni, Power BI or similar)
- Strong stakeholder communication skills
- Curious about using AI tools to improve coding, documentation, testing and workflow efficiency
- End-to-end cross-functional ownership capability

**Nice-to-Haves:**
- Warehouse optimization exposure
- Semantic layer or metric governance experience
- Omni experience
- Python or R experience
- Retail, ecommerce, DTC, marketplace, or consumer brand background

### Benefits

25 vacation days, 5-year sabbatical option, hybrid Amsterdam office (~3 days/week), monthly wellness budget, free coaching/psychology access, meditation app, personal development, team events, international team, mobility allowance, pension scheme, 20% employee discount, equipment provision, free office lunch, B-Corp status.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | hiring_manager | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | strategic | mixed | strategic | 33% | ✗ |
| ai_role |  | ai_user | ai_enabler | ai_user | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, testing, governance, and reliability throughout with no velocity language, clearly prioritizing correctness and maintainability over shipping speed.

**Run 2:** `rigour` ✓
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, governance, standards, and testing as core expectations with no velocity or speed-to-market language.

**Run 3:** `rigour` ✓
> Quote: "Build trusted data products that power smarter decisions, self-serve insights and future AI use cases"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes trust, governance, quality, testing, monitoring, and long-term maintainability throughout with no velocity signals like 'fast-paced' or 'ship quickly'.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Build trusted data products that power smarter decisions, self-serve insights and future AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making and analytics enablement without explicit regulatory, compliance, or financial reporting scope, typical of e-commerce/DTC data roles.

**Run 2:** `moderate` ✓
> Quote: "Build trusted data products that power smarter decisions, self-serve insights and future AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making without explicit financial reporting, compliance, or regulatory framing typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "Build trusted data products that power smarter decisions, self-serve insights and future AI use cases"
> Verified: ✓ found in JD
> Reasoning: The language suggests business intelligence enabling decisions without explicit regulatory, compliance, or financial reporting signals that would indicate high risk.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Partner with data engineers on clean ingestion and upstream design"
> Verified: ✓ found in JD
> Reasoning: Only data engineers are explicitly named as a distinct collaboration partner; business stakeholders and users are mentioned generically.

**Run 2:** `1` ✓
> Quote: "Partner with data engineers on clean ingestion and upstream design"
> Verified: ✓ found in JD
> Reasoning: Only data engineers are explicitly named as a partner function; other references are generic (stakeholders, users, business).

**Run 3:** `1` ✓
> Quote: "Partner with data engineers on clean ingestion and upstream design"
> Verified: ✓ found in JD
> Reasoning: Only 'data engineers' is explicitly named as a partner team; other collaboration is described generically as 'stakeholders' and 'users'.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Partner with data engineers on clean ingestion and upstream design; Optimize our data platform - especially the analytics layer - for AI use cases"
> Verified: ✓ found in JD
> Reasoning: Multiple data roles are implied, named tools appear in responsibilities (dbt, warehouse optimization), and the focus is on scaling and optimizing existing infrastructure rather than building from zero.

**Run 2:** `mid` ✓
> Quote: "Enable governed self-serve analytics by simplifying access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: The JD references an existing data platform with governance, dbt models, and data engineers, indicating an established function being optimized rather than built from scratch.

**Run 3:** `mid` ✓
> Quote: "Enable governed self-serve analytics by simplifying access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: References existing infrastructure ('our data platform', 'governed' practices) with emphasis on scaling and improving an established function, not building from zero.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Optimize warehouse usage through partitioning, clustering, and incremental modeling"
> Verified: ✓ found in JD
> Reasoning: Specific technical knowledge of warehouse optimization techniques and dbt modeling concepts demonstrates domain expertise only a hiring manager would possess.

**Run 2:** `hiring_manager` ✗
> Quote: "Optimize warehouse usage through partitioning, clustering, and incremental modeling"
> Verified: ✓ found in JD
> Reasoning: The technical specificity around warehouse optimization techniques (partitioning, clustering, incremental modeling) and modeling terminology (facts, dimensions, grain) indicates authorship by someone with hands-on experience.

**Run 3:** `hiring_manager` ✗
> Quote: "Optimize warehouse usage through partitioning, clustering, and incremental modeling"
> Verified: ✓ found in JD
> Reasoning: This responsibility shows specific technical patterns and optimization techniques that only someone actively doing analytics engineering would enumerate.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Enable governed self-serve analytics by simplifying access to trusted data sources; Support business users in adopting best practices for data exploration"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves other data consumers and platform users rather than specific commercial, product, or finance functions.

**Run 2:** `internal_data` ✓
> Quote: "Enable governed self-serve analytics by simplifying access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: The primary service is building and optimizing the data platform for internal analytics consumers, not revenue operations, product experimentation, or finance.

**Run 3:** `internal_data` ✓
> Quote: "Enable governed self-serve analytics by simplifying access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves analytics platform consumers and data team infrastructure needs rather than specific business functions like Finance, Product, or Commercial.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "Own the analytics layer at MR MARVIS. Build trusted data products that power smarter decisions"
> Verified: ✓ found in JD
> Reasoning: The role opens with explicit ownership of the analytics layer and uses strategic verbs like own, build, drive, and enable throughout.

**Run 2:** `mixed` ✓
> Quote: "Own the analytics layer at MR MARVIS"
> Verified: ✓ found in JD
> Reasoning: The role owns the analytics layer and drives standards (strategic) while most specific tasks focus on supporting and enabling stakeholders (execution-oriented).

**Run 3:** `strategic` ✗
> Quote: "Own the analytics layer at MR MARVIS"
> Verified: ✓ found in JD
> Reasoning: The opening 'own' verb combined with domain ownership framing indicates the role is expected to define direction for the analytics layer rather than execute against direction set by others.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Curious about using AI tools to improve coding, documentation, testing and workflow efficiency"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools to accelerate their own work in coding, documentation, testing, and workflow optimization.

**Run 2:** `ai_enabler` ✗
> Quote: "Optimize our data platform - especially the analytics layer - for AI use cases"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure optimized for AI systems to consume, with secondary signal of using AI tools for personal productivity.

**Run 3:** `ai_user` ✗
> Quote: "Curious about using AI tools to improve coding, documentation, testing and workflow efficiency"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools to improve their own productivity in coding and documentation, not to build AI infrastructure for the company.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

⚠ **LLM inconsistency**: runs gave ['ai_user', 'ai_enabler', 'ai_user']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as explicit responsibilities the candidate owns and implements, not just tools to know.

**Run 2:** `responsibility` ✗
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as owned responsibilities with clear action verbs (implement) indicating accountability for these practices.

**Run 3:** `responsibility` ✗
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are explicitly framed as something the candidate owns and implements as a core responsibility, not just tools they need to know about.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Build trusted data products that power smarter decisions"
> Verified: ✓ found in JD
> Reasoning: Trust and reliability are emphasized repeatedly through quality and governance language, but the role framing is about enabling business capabilities rather than preventing regulatory or compliance failures.

**Run 2:** `moderate` ✗
> Quote: "Build trusted data products that power smarter decisions"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building trustworthy data products and governance, but lacks explicit compliance or regulatory risk language, suggesting operational reliability rather than high-stakes risk mitigation.

**Run 3:** `moderate` ✗
> Quote: "Implement testing, monitoring, and data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and quality monitoring are core responsibilities suggesting operational reliability is important, but without explicit compliance, regulatory, or high-stakes trust framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
