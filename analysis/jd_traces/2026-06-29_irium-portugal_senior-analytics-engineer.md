# Trace: 2026-06-29_irium-portugal_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineers / Mid Analytics Engineers — Irium Portugal

**URL:** https://www.buscojobs.pt/senior-analytics-engineers-mid-analytics-engineers-ID-26089604?source=linkedin
**Location:** Lisbon, Portugal (hybrid)
**Date Posted:** 2026-06-29
**Salary:** 55,000–60,000 EUR

---

Senior Analytics Engineers / Mid Analytics Engineers

Company: Irium Portugal
Location: Lisbon, Portugal (hybrid)
Salary: €55,000-60,000 gross annually (includes base, variable, meal allowance, remote work, and benefits)

About the Role:
IRIUM seeks Analytics Engineers to model and transform data into consistent analytical structures and build ELT pipelines with quality tests.

Key Responsibilities:
- Model and transform data into consistent analytical structures
- Build and optimize ELT pipelines and quality tests
- Documentation of business rules and transformation logic
- Dataset monitoring and SLA management
- Support for Data Science/BI/ML teams with reliable data infrastructure
- Cross-functional collaboration with Data Engineering and Product teams
- CI/CD implementation for data workflows
- Mentoring junior staff and promoting team quality improvements

Technical Requirements:
- Advanced data modeling expertise in star schema and medallion architecture
- Pipeline orchestration tools: Azure Data Factory, Apache Airflow, Databricks
- SQL performance optimization and PySpark/Spark SQL proficiency
- CI/CD implementation for data workflows
- Data governance tools like Microsoft Purview
- Power BI semantic modeling and DAX optimization
- Cloud platforms: BigQuery, Snowflake, Synapse, Delta Lake
- Data quality frameworks

Experience Requirements:
- Senior Role: Minimum 5+ years in analytics environments with proven production deployment experience
- Mid Role: Minimum 3+ years in data analytics environments with hands-on data solutions experience
- Degree in Data Science, Computer Science, or related field
- English proficiency minimum B2 level

Benefits:
- Professional development opportunities
- Flexible pay and medical insurance
- Unlimited access to technological training

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 5 | 5 | 5 | 5 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | hiring_manager | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Dataset monitoring and SLA management"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability, monitoring, testing, CI/CD, and quality improvements, with explicit SLA commitments indicating rigour-focused delivery.

**Run 2:** `rigour` ✓
> Quote: "Build and optimize ELT pipelines and quality tests"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality testing, documentation, dataset monitoring, SLA management, and CI/CD implementation—all rigour signals with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Build and optimize ELT pipelines and quality tests"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (quality tests, SLA management, CI/CD, monitoring, documentation) with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The role supports internal analytics and ML teams without explicit financial reporting, compliance, or regulatory impact.

**Run 2:** `moderate` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The role builds internal analytics infrastructure without explicit financial reporting, compliance, or regulatory requirements, placing it in moderate business intelligence territory.

**Run 3:** `moderate` ✓
> Quote: "Model and transform data into consistent analytical structures"
> Verified: ✓ found in JD
> Reasoning: Data analytics infrastructure role without explicit financial reporting, regulatory, compliance, or mission-critical language.

### collaboration_width
**Manual:** `5`

**Run 1:** `5` ✓
> Quote: "Data Science/BI/ML teams; Data Engineering; Product teams"
> Verified: ⚠ NOT found verbatim
> Reasoning: Five distinct named teams are explicitly listed as collaboration partners across the responsibilities.

**Run 2:** `5` ✓
> Quote: "Data Science; BI; ML; Data Engineering; Product"
> Verified: ⚠ NOT found verbatim
> Reasoning: Five distinct named teams are identified: Data Science, BI, and ML teams in support responsibilities, plus Data Engineering and Product teams in cross-functional collaboration.

**Run 3:** `5` ✓
> Quote: "Data Science/BI/ML teams; Data Engineering and Product teams"
> Verified: ⚠ NOT found verbatim
> Reasoning: Five named partner functions: Data Science, BI, ML, Data Engineering, and Product.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and optimize ELT pipelines and quality tests"
> Verified: ✓ found in JD
> Reasoning: The word 'optimize' indicates existing infrastructure is already in place and being improved, characteristic of a growing mid-stage team.

**Run 2:** `mid` ✓
> Quote: "Dataset monitoring and SLA management"
> Verified: ✓ found in JD
> Reasoning: Existing operational responsibilities like SLA management and dataset monitoring, combined with pipeline optimization and team mentoring, indicate an established data function in growth phase rather than greenfield.

**Run 3:** `mid` ✓
> Quote: "Mentoring junior staff and promoting team quality improvements"
> Verified: ✓ found in JD
> Reasoning: Existing team structure with multiple levels and mentorship signalling growth beyond early stage; named tools and optimization responsibilities indicate established infrastructure.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Cross-functional collaboration with Data Engineering and Product teams"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic boilerplate action verbs without the technical specificity or named tool context that would indicate hiring manager authorship.

**Run 2:** `hiring_manager` ✗
> Quote: "Build and optimize ELT pipelines and quality tests"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical work (ELT, quality tests, SLA management, CI/CD, dataset monitoring) that clearly articulates what the role does day-to-day, beyond generic boilerplate verbs.

**Run 3:** `hiring_manager` ✗
> Quote: "Build and optimize ELT pipelines and quality tests"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (ELT pipelines, quality tests, SLA management, CI/CD, star schema, medallion architecture) demonstrates knowledge of what the job entails.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves internal data function teams rather than commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building and maintaining data infrastructure to serve internal data and analytics teams, not commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: Role primarily serves internal data teams by building analytics infrastructure rather than supporting commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The 'support' framing indicates the role executes priorities defined by other teams rather than setting strategic direction.

**Run 2:** `execution` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The primary verb 'support' combined with execution-focused responsibilities (build, monitor, implement) indicates the role receives scoped work rather than setting strategic direction.

**Run 3:** `execution` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: Emphasis on supporting, delivering, and implementing work rather than setting direction or defining analytics strategy.

### ai_role
**Run 1:** `none` ✓
> Quote: "Build and optimize ELT pipelines; Support for Data Science/BI/ML teams with reliable data infrastructure"
> Reasoning: No AI coding tools or GenAI infrastructure responsibilities mentioned; standard data engineering/analytics work

**Run 2:** `none` ✓
> Quote: "Support for Data Science/BI/ML teams with reliable data infrastructure"
> Reasoning: Supporting ML teams with data infrastructure is operational support, not building AI-ready systems or using AI tools.

**Run 3:** `none` ✓
> Quote: "Build and optimize ELT pipelines; Support for Data Science/BI/ML teams"
> Reasoning: No AI-specific skills, tools, or infrastructure requirements mentioned; traditional data engineering focus.


### testing_framing
**Run 1:** `responsibility` ✓
> Quote: "CI/CD implementation for data workflows; data quality frameworks; quality tests; SLA management"
> Reasoning: Candidate implements CI/CD and owns quality testing infrastructure with explicit SLA management accountability

**Run 2:** `responsibility` ✓
> Quote: "CI/CD implementation for data workflows; data quality frameworks; quality tests; SLA management"
> Reasoning: Implementation and framework-building verbs paired with quality/tests indicate ownership of testing practices.

**Run 3:** `responsibility` ✓
> Quote: "Build and optimize ELT pipelines and quality tests; CI/CD implementation for data workflows"
> Reasoning: Candidate builds and implements quality tests and CI/CD pipelines with clear ownership verbs.


### loss_aversion_framing
**Run 1:** `moderate` ✓
> Quote: "reliable data infrastructure; SLA management; CI/CD implementation for data workflows"
> Reasoning: Operational reliability and SLOs emphasized but no regulatory/compliance language dominates the framing

**Run 2:** `moderate` ✓
> Quote: "SLA management; reliable data infrastructure"
> Reasoning: SLA and reliability language signal operational concerns, but absence of compliance/regulatory framing places this at moderate not high.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing detected"
> Reasoning: JD emphasizes delivery and infrastructure quality without regulatory, compliance, or trust-based language.

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
