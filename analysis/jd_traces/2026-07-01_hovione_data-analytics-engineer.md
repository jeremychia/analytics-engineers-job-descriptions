# Trace: 2026-07-01_hovione_data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data & Analytics Engineer — Hovione

**URL:** https://en-careers-hovione.icims.com/jobs/11613/data-%26-analytics-engineer/job?mode=view&mobile=false&width=1265&height=500&bga=true&needsRedirect=false&jan1offset=0&jun1offset=60
**Location:** Lisbon, Portugal
**Date Posted:** 2026-07-01

---

Data & Analytics Engineer at Hovione

Posted Date: 2026/6/30
ID: 2025-11613
Job Location: PT-Lisbon
Job Family: DIGITAL

Join a Market Leader
At Hovione, we help partners turn scientific innovation into medicines that reach patients around the world. For more than 65 years, we have connected science and technology to scale complex ideas into high-quality and innovative solutions. As an international Contract Development and Manufacturing Organization (CDMO), we support the development and manufacture of drug substances, intermediates and drug products across the full life cycle. We are globally recognised for our leadership in specialised technologies such as Spray Drying and Continuous Tableting.

Our people are a global and diverse team of more than 2,600 team members across Europe, the USA and Asia.

You will be responsible to:
- Partner with stakeholders across functions as a data business partner, identifying high impact use cases and areas for improvement
- Apply database modelling and database exploration skills with data architecture strategy and design principles to support metrics, analytics, AI/machine learning, and self-service business intelligence across the company
- Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts
- Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability
- Analyze data from multiple sources to optimize strategies, operations, and portfolio decisions
- Implement models and data products with cross functional teams; set up monitoring, alerting, and lifecycle management
- Leverage cutting-edge cloud technologies such as AWS (preferable) and Azure and data warehouses
- Communicate insights clearly through compelling visualisations and narratives tailored to technical and business audiences
- Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)
- Proactively propose process optimisations, make timely data-driven decisions, and demonstrate resilience through change

We are looking to recruit a Candidate:
- University degree in Computer Science, Engineering, Mathematics or a similar scientific field
- 4+ years of experience in data management and data analytics with considerable experience in manipulating large datasets and data products
- Strong autonomy to lead analytic solutions from design to deployment; and strong foundation in analytics framework and data management
- Strong experience with cloud data-lake architecture and technology, in particular AWS; familiarity with Python data processing libraries; knowledge of IaC is a plus
- Advanced proficiency in SQL and Python; familiarity with R and object-oriented scripting is a plus
- Strong experience with Git for version control, including branch management, code reviews, and collaborative workflows in agile teams is a plus
- Hands-on experience with SQL Server Integration Services (SSIS) for ETL/data integration workflows is a plus
- Solid data modelling and experience in data visualisation and reporting technologies - especially AWS QuickSight (preferable), MS Fabric/PBI or QlikSense
- Exceptional communication and mediation skills
- Familiarity with agile work methodologies (e.g. SCRUM)
- Fluency in English is a requirement; Portuguese proficiency strongly preferred
- Knowledge of GMP (even high-level), data governance, and safe-by-design practices; team player with resilience and a long-term mindset

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | strategic | execution | 0% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | high | high | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: Multiple governance and compliance mentions (GMP/HSE, compliance standards, IT governance) dominate the framing with no velocity or speed language.

**Run 2:** `rigour` ✓
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, compliance, GMP standards, and safety as core expectations throughout, with no mention of speed, iteration, or velocity priorities.

**Run 3:** `rigour` ✓
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: Governance, compliance, safety, and reliability dominate the delivery framing; no velocity language like fast-paced or rapid iteration appears.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: GMP compliance and HSE standards indicate pharmaceutical manufacturing with direct regulatory risk; data errors can impact quality and regulatory outcomes.

**Run 2:** `high` ✓
> Quote: "GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: This pharmaceutical CDMO role explicitly references GMP (pharmaceutical regulatory compliance) and HSE standards, indicating data errors could directly affect manufacturing compliance and patient safety.

**Run 3:** `high` ✓
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: Pharmaceutical CDMO manufacturing environment with explicit GMP and regulatory compliance standards means data errors directly affect regulatory standing and patient safety.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "cross functional teams"
> Verified: ✓ found in JD
> Reasoning: No distinct named partner functions are explicitly identified; references use generic language like 'stakeholders' and 'cross functional teams.'

**Run 2:** `0` ✓
> Quote: "Partner with stakeholders across functions as a data business partner"
> Verified: ✓ found in JD
> Reasoning: No explicitly named partner teams or business functions are identified; all collaboration references use generic terms like 'stakeholders' and 'cross-functional teams'.

**Run 3:** `0` ✓
> Quote: "None identified"
> Verified: ✓ found in JD
> Reasoning: No explicitly named teams or functions listed; stakeholders and cross-functional teams are mentioned generically without specific function names.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure (data lake) is mentioned with focus on standardization and expansion (data mesh), indicating an established but growing data function.

**Run 2:** `mid` ✓
> Quote: "Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts"
> Verified: ✓ found in JD
> Reasoning: The JD references existing infrastructure (data lake, data mesh, cloud platforms) being standardized and improved, indicating an established data function scaling rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts"
> Verified: ✓ found in JD
> Reasoning: Named data architectures (data lake, data mesh) are already in place and being extended with standardization, indicating infrastructure exists but is growing and needs refinement.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about feature engineering and data architecture patterns coexists with generic collaboration language like 'partner with stakeholders.'

**Run 2:** `mixed` ✓
> Quote: "Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability"
> Verified: ✓ found in JD
> Reasoning: The JD combines technical specificity (data lake, data mesh, feature engineering, SSIS, lifecycle management) with generic collaboration language ('partner with stakeholders', 'identify high impact use cases').

**Run 3:** `mixed` ✓
> Quote: "Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability; set up monitoring, alerting, and lifecycle management"
> Verified: ✓ found in JD
> Reasoning: Technical specificity (feature engineering from unstructured data, lineage tracking, monitoring setup) mixes with boilerplate stakeholder collaboration language found in recruiter templates.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts"
> Verified: ✓ found in JD
> Reasoning: Emphasis on building self-serve platforms and data infrastructure that other teams consume, rather than serving a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "Build, standardize, and maintain reporting and self-service analytics as part of data lake and data mesh concepts"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building and maintaining analytics infrastructure (data lake, self-serve BI, data mesh) that data consumers and analytics teams use, rather than serving a specific business function.

**Run 3:** `internal_data` ✓
> Quote: "Build, standardize, and maintain reporting and self-serve analytics as part of data lake and data mesh concepts"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary emphasis is building internal data infrastructure and self-serve analytics for internal data consumers rather than commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Strong autonomy to lead analytic solutions from design to deployment; and strong foundation in analytics framework and data management"
> Verified: ✓ found in JD
> Reasoning: Explicit language about leading solutions from design to deployment indicates strategic ownership, though implementation occurs within cross-functional teams.

**Run 2:** `strategic` ✗
> Quote: "Strong autonomy to lead analytic solutions from design to deployment"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to lead analytics solutions end-to-end from design through deployment and proactively propose optimizations, indicating strategic direction-setting rather than execution of set scope.

**Run 3:** `execution` ✗
> Quote: "Implement models and data products with cross functional teams; set up monitoring, alerting, and lifecycle management"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes implementing solutions and executing within cross-functional team contexts; priorities and direction appear to come from stakeholders rather than being set by this role.

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the data infrastructure should support AI/ML capabilities, the JD does not require the candidate to demonstrate AI skills, use AI tools, or build AI-specific data products.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the JD mentions supporting AI/machine learning as one of many functions, there is no specific expectation for the candidate to demonstrate AI skills (coding with AI tools) or build AI-enabled data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions AI/machine learning as a domain the data infrastructure supports, but does not expect the candidate to use AI coding tools, build GenAI applications, or demonstrate AI expertise.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "set up monitoring, alerting, and lifecycle management"
> Verified: ✓ found in JD
> Reasoning: Ownership verbs like 'set up' and 'ensuring quality, lineage, and reliability' frame testing and monitoring as the candidate's responsibility, though no specific testing tools are named.

**Run 2:** `responsibility` ✗
> Quote: "Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability"
> Verified: ✓ found in JD
> Reasoning: The candidate is responsible for ensuring data quality and reliability as an ownership verb embedded in their core data engineering responsibilities, not just listed as a tool or skill.

**Run 3:** `responsibility` ✗
> Quote: "Preprocess and engineer features from structured and unstructured data, ensuring quality, lineage, and reliability; set up monitoring, alerting, and lifecycle management"
> Verified: ✓ found in JD
> Reasoning: Quality assurance (ensuring quality, lineage, reliability) and observability (monitoring and alerting setup) are framed as the role's direct ownership, not as tool skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: Risk and compliance language (GMP/HSE, safe-by-design, IT governance) appears throughout and dominates the framing of project delivery, indicating high loss-aversion focus on regulatory and safety compliance.

**Run 2:** `high` ✗
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: The JD repeatedly frames the role around preventing regulatory non-compliance and manufacturing safety failures through governance and compliance adherence, a core concern in regulated pharmaceutical manufacturing.

**Run 3:** `high` ✗
> Quote: "Deliver projects safely, on time, and cost effectively while upholding IT governance, GMP/HSE, and compliance standards (COPs, SOPs)"
> Verified: ✓ found in JD
> Reasoning: Repeated emphasis on safety, governance, and regulatory compliance (GMP, COPs, SOPs) in a pharmaceutical manufacturing context indicates high loss-aversion framing centered on preventing regulatory failure and patient safety risks.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`
