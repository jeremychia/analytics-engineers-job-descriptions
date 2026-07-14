# Trace: 2026-06-20_adsquare_staff-data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Staff Data Analytics Engineer (m/f/d) — Adsquare GmbH

**URL:** https://adsquare.jobs.personio.de/job/2540423
**Location:** Berlin, Germany
**Salary:** €90,000 – €100,000 per year

---

## Key Responsibilities

- Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration
- Design horizontally scalable, cost-efficient, production-grade data solutions for handling massive datasets
- Champion software engineering principles including TDD and CI/CD workflows
- Drive technical alignment across multiple teams
- Build data products leveraging location signals and audience attributes
- Mentor engineers through code reviews and pair programming
- Establish monitoring frameworks for multi-terabyte data streams

---

## Required Qualifications

- 7+ years in Data Engineering, Analytics Engineering, or Backend Development
- Hands-on experience with geo-spatial data, audience attributes, and time-series datasets
- Advanced Python proficiency with TDD, mocking, and performance profiling expertise
- Deep knowledge of scalable data architectures (Snowflake, Redshift, Athena, StarRocks, Iceberg)
- Extensive experience with Apache Spark, PySpark, and AWS EMR
- Expert-level SQL and dbt skills
- AWS cloud native architecture and Terraform (IaC) experience
- Strong leadership, communication, and organizational abilities

---

## Preferred / Bonus Skills

- Polyglot programming in compiled/strongly-typed languages (Scala, Go, Kotlin, C++, Java)
- Advanced orchestration tools (Airflow, Dagster, Prefect)

---

## Benefits

- Hybrid/remote work flexibility
- €1,200 annual professional development budget
- 30 vacation days annually
- Urban Sports Club membership
- Company pension scheme
- Team and company events
- Latest hardware and tools provided

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes TDD, CI/CD, production-grade solutions, and monitoring frameworks with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: Multiple emphases on TDD, CI/CD, monitoring, production-grade quality, and code mentoring throughout the JD with no velocity or speed language signal rigour orientation.

**Run 3:** `rigour` ✓
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize software engineering practices, testing, and production-grade solutions without any velocity-oriented language like speed or rapid delivery.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: Ad tech data products affect marketing and business decisions but lack explicit financial reporting, compliance, or regulatory language that would signal high risk.

**Run 2:** `moderate` ✗
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: Adtech data products for business/marketing decisions without regulatory, compliance, or financial reporting language indicate moderate rather than high risk.

**Run 3:** `moderate` ✗
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: The role builds data products for audience attribution without explicit financial, regulatory, or compliance language, indicating moderate business impact rather than high-risk governance.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "cross-squad collaboration; Drive technical alignment across multiple teams"
> Verified: ✓ found in JD
> Reasoning: References to teams are generic ('squad', 'multiple teams', 'engineers') without naming specific functions like Finance, Product, Marketing, or Data Science.

**Run 2:** `0` ✗
> Quote: "driving cross-squad collaboration; Drive technical alignment across multiple teams"
> Verified: ✓ found in JD
> Reasoning: Cross-team collaboration is mentioned but no specific named business functions (Finance, Product, Marketing, etc.) or named data teams are explicitly identified.

**Run 3:** `0` ✗
> Quote: "Drive technical alignment across multiple teams"
> Verified: ✓ found in JD
> Reasoning: While the role collaborates across teams, no distinct named partner functions (Finance, Product, Marketing, etc.) are explicitly listed as required collaborators.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Multi-terabyte scale infrastructure already exists, multiple engineers require mentoring, and specific deployment of tools like dbt, Spark, and Snowflake indicate an established but growing data function.

**Run 2:** `mid` ✗
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration; Mentor engineers through code reviews and pair programming"
> Verified: ✓ found in JD
> Reasoning: Existing team structure with multiple engineers and established data infrastructure (Snowflake, Redshift, Spark, dbt) implies developing organization rather than early-stage greenfield.

**Run 3:** `mid` ✗
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role leads an existing squad within a multi-team structure with established tooling, indicating a maturing data function with multiple sub-teams rather than early-stage or mature scale.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Hands-on experience with geo-spatial data, audience attributes, and time-series datasets"
> Verified: ✓ found in JD
> Reasoning: Domain-specific data types (geo-spatial, audience attributes, time-series), named tool stack (Snowflake, Redshift, Athena, StarRocks, Iceberg, Spark, dbt), and multi-terabyte scale metrics reveal technical specificity only a hiring manager would include.

**Run 2:** `hiring_manager` ✓
> Quote: "Hands-on experience with geo-spatial data, audience attributes, and time-series datasets; Deep knowledge of scalable data architectures (Snowflake, Redshift, Athena, StarRocks, Iceberg); Extensive experience with Apache Spark, PySpark, and AWS EMR"
> Verified: ✓ found in JD
> Reasoning: Multiple named tools with specific architectural choices and domain-specific data types (geo-spatial, audience attributes) show technical depth only someone with hands-on experience could specify.

**Run 3:** `hiring_manager` ✓
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions for handling massive datasets"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific architectural requirements (horizontal scalability, cost-efficiency), technology context (Snowflake, Spark, dbt), and scale metrics (massive datasets, multi-terabyte) that only someone doing this work would articulate.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role's primary framing emphasizes technical leadership, mentoring engineers, and establishing internal infrastructure rather than serving commercial or business teams directly.

**Run 2:** `internal_data` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: Primary emphasis on technical leadership, mentoring engineers, and establishing data infrastructure indicates the role serves the data/engineering organization itself rather than external commercial or product stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role is framed as technical leadership building data infrastructure and mentoring engineers within the data function, not serving commercial, product, or finance stakeholders directly.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role is framed as a technical lead setting direction through architectural decisions, technical alignment, and establishing monitoring frameworks rather than executing against defined priorities.

**Run 2:** `strategic` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions"
> Verified: ✓ found in JD
> Reasoning: The role is expected to make architectural decisions and drive technical direction across multiple teams rather than execute work scoped by others.

**Run 3:** `strategic` ✓
> Quote: "making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role is expected to make architectural decisions and establish practices, indicating strategic autonomy in shaping the data platform rather than executing direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data infrastructure, or AI application development as a candidate expectation.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for candidate AI tool usage, AI-assisted development, or building AI-ready data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-enabled analytics, machine learning infrastructure, or GenAI applications; it focuses on traditional data engineering and software engineering practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: TDD is framed as a principle to 'champion', indicating the candidate owns establishing and driving testing practices rather than just using existing tools.

**Run 2:** `responsibility` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The candidate owns establishing monitoring frameworks as an explicit responsibility with action verb ownership, indicating accountability for observability practice.

**Run 3:** `responsibility` ✗
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: Testing (TDD) is framed as a principle to champion, indicating the candidate owns establishing and driving testing practices rather than just using testing tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Monitoring frameworks and production-grade systems signal operational reliability concerns but lack compliance, regulatory, or stakeholder-trust framing that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability through monitoring rather than regulatory compliance or stakeholder trust, indicating moderate but not high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Monitoring and production-grade solutions indicate operational reliability concerns without explicit risk, compliance, or prevention-of-bad-outcomes framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
