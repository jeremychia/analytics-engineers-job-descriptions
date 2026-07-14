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
| jd_authorship | hiring_manager | hiring_manager | mixed | hiring_manager | 33% | ✓ |
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
> Reasoning: The responsibilities emphasize test-driven development, continuous integration/deployment, code reviews, and production-grade quality over speed or iteration velocity.

**Run 2:** `rigour` ✓
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes production-grade solutions, testing practices, and monitoring frameworks as core responsibilities with no velocity or speed-oriented language present.

**Run 3:** `rigour` ✓
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize TDD, CI/CD, and production-grade quality as core expectations with zero velocity language like 'fast-paced' or 'ship quickly'.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: The role involves adtech/location intelligence where data accuracy affects business operations and product effectiveness, but lacks explicit financial reporting, regulatory, or compliance framing.

**Run 2:** `moderate` ✗
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: The ad-tech domain is data-driven but lacks explicit financial reporting, compliance, or regulatory language that would signal high risk.

**Run 3:** `moderate` ✗
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions for handling massive datasets"
> Verified: ✓ found in JD
> Reasoning: Production-scale data infrastructure affects business decisions but lacks explicit financial reporting, compliance, or regulatory framing that would elevate to high risk.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "Drive technical alignment across multiple teams"
> Verified: ✓ found in JD
> Reasoning: The JD references collaboration with squads and multiple teams but does not explicitly name distinct partner functions like Finance, Product, Marketing, or Sales.

**Run 2:** `0` ✗
> Quote: "No named partner teams or functions identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions cross-squad and cross-team collaboration but does not name specific functions like Finance, Product, or other explicit partner teams.

**Run 3:** `0` ✗
> Quote: "Drive technical alignment across multiple teams"
> Verified: ✓ found in JD
> Reasoning: Multiple teams are referenced but no specific named functions or teams are identified as collaboration partners.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The explicit mention of large-scale infrastructure (multi-terabyte streams) and established squad structure indicates a growing data function with existing complexity beyond early-stage greenfield work.

**Run 2:** `mid` ✗
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions for handling massive datasets"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and scale (massive datasets) are implied, with multiple named tools and team structures in place, but the scope is a single squad with cross-team alignment responsibility.

**Run 3:** `mid` ✗
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: Leadership of an existing squad with cross-squad collaboration implies an established, growing data function beyond early-stage greenfield work.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The combination of specific scale metrics (multi-terabyte), precise technical practices (monitoring frameworks), and contextual tool listings throughout indicates someone with deep domain knowledge wrote the JD.

**Run 2:** `mixed` ✗
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The responsibilities combine domain-specific technical concerns (architectural decisions, production-grade systems) with generic leadership boilerplate (drive collaboration), indicating mixed authorship.

**Run 3:** `hiring_manager` ✓
> Quote: "Build data products leveraging location signals and audience attributes"
> Verified: ✓ found in JD
> Reasoning: Specific domain knowledge (location signals, audience attributes) tied to the unique technical context indicates hiring manager rather than generic recruiter language.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibilities emphasize technical leadership within the data function, mentoring engineers, and architectural decisions for infrastructure rather than serving commercial, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "Mentor engineers through code reviews and pair programming"
> Verified: ✓ found in JD
> Reasoning: The role focuses on mentoring and leading the internal data team rather than serving commercial, product, or finance functions.

**Run 3:** `internal_data` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role is framed around technical leadership, engineering mentorship, and platform architecture rather than serving commercial, product, or finance teams explicitly.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions"
> Verified: ✓ found in JD
> Reasoning: The explicit framing around making architectural decisions and acting as technical lead indicates strategic autonomy to define technical direction rather than execute predefined work.

**Run 2:** `strategic` ✓
> Quote: "Act as technical lead for a squad, making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: The role expects the candidate to define architecture and drive technical alignment across teams, not execute pre-scoped work.

**Run 3:** `strategic` ✓
> Quote: "making architectural decisions and driving cross-squad collaboration"
> Verified: ✓ found in JD
> Reasoning: Architectural decision-making and cross-squad alignment authority indicates the role sets technical direction rather than executing direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, GenAI applications, or AI skill expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI coding tools, AI-assisted workflows, or AI data infrastructure anywhere in the job description.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No expectation that the candidate demonstrate AI coding tools, AI infrastructure, or any AI-related skills in their own work.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: TDD is framed as a principle to champion in the responsibilities section using an ownership verb, indicating the role includes establishing and promoting testing practices.

**Run 2:** `responsibility` ✗
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: TDD and CI/CD are framed as something to champion (implement/advocate for) as a responsibility, rather than listed as a skill requirement.

**Run 3:** `responsibility` ✗
> Quote: "Champion software engineering principles including TDD and CI/CD workflows"
> Verified: ✓ found in JD
> Reasoning: The action verb 'champion' indicates active ownership and advocacy for testing practices across the squad, not merely using tools defined by others.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Monitoring for large-scale operations indicates operational reliability and prevention of pipeline failures are concerns, though secondary to the primary framing of technical excellence and capability.

**Run 2:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Operational reliability (monitoring, production-grade systems) is a concern but the JD lacks explicit compliance, regulatory, or stakeholder-trust language that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Establish monitoring frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Focus on monitoring and operational reliability for large-scale data suggests concern for pipeline stability, but lacks compliance or stakeholder-trust language of high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
