# Trace: 2026-06-30_limeflight_senior-data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Data & Analytics Engineer — LimeFlight

**URL:** https://career.limeflight.com/o/senior-data-analytics-engineer-europe-100-remote
**Location:** Europe, 100% remote
**Date Posted:** 2026-06-30

---

LimeFlight Senior Data & Analytics Engineer Position

Company: LimeFlight
Job Title: Senior Data & Analytics Engineer (Europe, 100% remote)
Locations: Multiple European cities including Vienna, Brussels, Sofia, Helsinki, Berlin, Dublin, Madrid, Stockholm, Zürich, and 19+ additional locations
Salary: Not specified in posting

Role Overview
LimeFlight seeks a Senior Data & Analytics Engineer to 'take end-to-end ownership of our data platform and BI layer.' The company focuses on sustainable inflight service management, headquartered in Zurich with teams across 11 countries.

Key Responsibilities

Platform & Architecture:
- Own end-to-end data platform using Databricks and Microsoft Fabric
- 'Design and operate scalable pipelines and lakehouse architecture'
- Build ETL/ELT workflows managing batch and near real-time processing
- Ensure data quality, reliability, observability, and performance

Data Modeling:
- Own Power BI semantic models and KPIs
- Build dimensional models using star schema
- Maintain DAX performance and dataset refresh consistency

Customer-Facing Analytics:
- Build and maintain customer dashboards and embedded analytics
- Enable self-service analytics with governance
- Maintain customer-facing exports

Platform Quality & Operations:
- Implement validation scripts, unit tests, data quality checks
- Build CI/CD, testing, and versioning for pipelines
- Support multi-tenant architecture and security governance

Migration Focus:
- Reverse-engineer vendor-built BI solution
- Reduce technical debt and rebuild toward clean architecture

Requirements

Experience:
- '5+ years in data engineering / analytics engineering for customer-facing BI products'
- SaaS or product-driven environment background
- Proven scalable data platform and analytics experience

Technical Skills:
- Databricks (Spark, PySpark, Delta Lake)
- Microsoft Fabric or Azure data stack
- Power BI data modeling and DAX
- Advanced SQL and dimensional modeling
- Lakehouse architecture and ETL/ELT design
- Multi-tenant data models and embedded analytics
- CI/CD, Git, monitoring, and data quality practices

Nice-to-Have:
- Azure infrastructure knowledge
- Data quality frameworks like Great Expectations

Mindset:
Candidates should demonstrate 'strong ownership and autonomy,' impact-driven thinking, product orientation, proactive problem-solving, business acumen, pragmatism, and clear cross-functional communication.

Additional Details

Language: Minimum English C1 level
Travel: Two annual one-week team events
Work Authorization: Must be legally eligible to work full-time in Europe under employment contract (no freelance/B2B)
Company Tech Stack: C#/.NET 8-10, ASP.NET Core, SQL Server, Azure services, Docker, Databricks, Azure Fabric
Hiring Process: Four stages including recruiter screen, manager interview, technical assessment, and founder/peer discussion

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | mixed | internal_data | product | internal_data | 33% | ✗ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, testing, CI/CD, and observability with no velocity language present, placing this firmly in the rigour category.

**Run 2:** `rigour` ✓
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: Multiple quality signals (tests, validation, CI/CD, governance) appear throughout responsibilities with no velocity language.

**Run 3:** `rigour` ✓
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, testing, and reliability practices throughout with no velocity language present, indicating a rigour-focused orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "customer-facing BI products"
> Verified: ✓ found in JD
> Reasoning: The role serves customer-facing analytics but lacks explicit financial reporting, regulatory, or compliance language that would elevate it to high risk.

**Run 2:** `moderate` ✓
> Quote: "Build and maintain customer dashboards and embedded analytics"
> Verified: ✓ found in JD
> Reasoning: Data errors affect customer-facing products and business decisions, but no explicit financial reporting or compliance language.

**Run 3:** `moderate` ✓
> Quote: "5+ years in data engineering / analytics engineering for customer-facing BI products"
> Verified: ✓ found in JD
> Reasoning: Customer-facing analytics in a SaaS product affects business decisions but without regulatory, compliance, or financial reporting language, placing this at moderate risk.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "No explicitly named partner teams or functions identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD describes customer and cross-functional engagement but does not name specific internal teams like Finance, Product, Engineering, or Data Science as collaboration partners.

**Run 2:** `0` ✗
> Quote: "None found"
> Verified: ⚠ NOT found verbatim
> Reasoning: No explicit named teams or functions (Finance, Product, Engineering, etc.) mentioned as collaboration partners in the responsibilities.

**Run 3:** `0` ✗
> Quote: "No named collaboration partners identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities section does not explicitly name any partner functions, teams, or external collaborators.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Reduce technical debt and rebuild toward clean architecture"
> Verified: ✓ found in JD
> Reasoning: The data function is operational with customer-facing products and named tools in responsibilities (Databricks, Power BI), but the company is undergoing significant modernization from a vendor-built solution, indicating growth rather than early stage or full maturity.

**Run 2:** `mid` ✓
> Quote: "Reverse-engineer vendor-built BI solution; Reduce technical debt and rebuild toward clean architecture"
> Verified: ✓ found in JD
> Reasoning: Existing platform infrastructure (Databricks, Fabric, Power BI) is being operated and migrated, indicating a mid-stage team with established tooling.

**Run 3:** `mid` ✓
> Quote: "Reduce technical debt and rebuild toward clean architecture"
> Verified: ✓ found in JD
> Reasoning: The role involves maintaining and improving existing platforms (Databricks, Fabric, Power BI) rather than building from zero or joining a mature 20+ person team.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Maintain DAX performance and dataset refresh consistency"
> Verified: ✓ found in JD
> Reasoning: The responsibilities demonstrate technical specificity about Power BI internals, lakehouse architecture, star schema modeling, and multi-tenant patterns that only come from someone who performs this work regularly.

**Run 2:** `hiring_manager` ✓
> Quote: "Reverse-engineer vendor-built BI solution"
> Verified: ✓ found in JD
> Reasoning: Specific technical challenge unique to this business context demonstrates hands-on knowledge from someone who has done this work.

**Run 3:** `hiring_manager` ✓
> Quote: "Reverse-engineer vendor-built BI solution"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical contexts and business challenges that only someone who owns this work would articulate, including vendor migration, dimensional modeling, and DAX optimization.

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `internal_data` ✗
> Quote: "Own end-to-end data platform using Databricks and Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: The primary stakeholder is the data platform and analytics infrastructure itself; customer-facing analytics are built on top of and depend on this platform.

**Run 2:** `product` ✗
> Quote: "customer-facing BI products"
> Verified: ✓ found in JD
> Reasoning: Role serves customer value through BI and analytics products in a product-driven SaaS environment.

**Run 3:** `internal_data` ✗
> Quote: "Own end-to-end data platform using Databricks and Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and maintaining the data infrastructure platform itself, serving data consumers and platform operators rather than commercial or finance functions.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'product', 'internal_data']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "take end-to-end ownership of our data platform and BI layer"
> Verified: ✓ found in JD
> Reasoning: The role is expected to own, design, and build the data platform and quality frameworks rather than execute against defined priorities, reflecting strategic authority over the analytics function.

**Run 2:** `strategic` ✓
> Quote: "take end-to-end ownership of our data platform and BI layer"
> Verified: ✓ found in JD
> Reasoning: Ownership and design language indicate the role sets platform direction and strategy, not executing defined tasks.

**Run 3:** `strategic` ✓
> Quote: "Own end-to-end data platform using Databricks and Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: The role is framed around ownership and architectural definition of the platform rather than executing work scoped by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, LLM-assisted workflows, or AI infrastructure expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI tools, AI-ready foundations, or AI/ML pipeline signals mentioned; no expectation of AI skill from candidates.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no references to AI coding tools, GenAI applications, AI-assisted workflows, or AI-ready data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as responsibilities the candidate owns and implements, not merely tools they should know about.

**Run 2:** `responsibility` ✗
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and validation are framed as core responsibilities that the candidate owns and implements, not just tools in a requirements list.

**Run 3:** `responsibility` ✗
> Quote: "Implement validation scripts, unit tests, data quality checks"
> Verified: ✓ found in JD
> Reasoning: Testing and quality practices are framed as candidate-owned responsibilities using action verbs like 'implement' and 'build', not merely listed as required tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Build CI/CD, testing, and versioning for pipelines"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are concerns, but framed as performance and operational discipline rather than regulatory compliance or prevention of stakeholder trust failure.

**Run 2:** `moderate` ✗
> Quote: "Ensure data quality, reliability, observability, and performance"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are emphasized as core concerns, but there is no compliance, regulatory, or high-level business risk language.

**Run 3:** `moderate` ✗
> Quote: "Ensure data quality, reliability, observability, and performance"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are emphasized as service concerns without framing around regulatory compliance, audit, or preventing bad data reaching decision-makers.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
