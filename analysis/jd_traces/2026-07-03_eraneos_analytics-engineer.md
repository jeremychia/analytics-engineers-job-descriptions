# Trace: 2026-07-03_eraneos_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Eraneos

**URL:** https://eraneos.jobs.personio.de/job/2567559?language=de&src=LinkedIn
**Location:** Hamburg, Munich, Düsseldorf, remote
**Date Posted:** 2026-07-03

---

Analytics Engineer (all genders)

Eraneos seeks an Analytics Engineer to design data models in modern warehouses, build transformation pipelines using dbt, and develop dimensional models (Kimball Star Schema, Snowflake Schema, DataVault 2.0). The engineer will implement data quality checks, optimize database performance, and collaborate with analysts and stakeholders.

Key Responsibilities
• Design data models in modern warehouses
• Build transformation pipelines using dbt
• Develop dimensional models (Kimball Star Schema, Snowflake Schema, DataVault 2.0)
• Implement data quality checks
• Optimize database performance
• Collaborate with analysts and stakeholders to translate business needs into scalable solutions

Requirements
Technical Skills:
• Substantial experience in data modeling within data platform environments
• Practical dbt experience (6+ months or multiple projects)
• Strong SQL knowledge and ideally Python programming
• Familiarity with Data Lakehouses (Snowflake, Databricks, BigQuery, Redshift)
• Preferred: Delta Lake/Apache Iceberg experience, Data Vault 2.0 knowledge

Soft Skills:
• German (B1 minimum) and English proficiency
• Strong communication and teamwork abilities
• Willingness for occasional client travel

Company Culture
Eraneos emphasizes flexible working hours and locations including home office, collaborative team environment, professional development opportunities, and comprehensive benefits.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: The explicit inclusion of data quality checks as a core responsibility, combined with emphasis on specific modelling architectures (Kimball Star Schema, Snowflake Schema, DataVault 2.0), signals a rigour orientation with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: The emphasis on data quality implementation and specific modeling methodologies (Kimball, Snowflake Schema, DataVault 2.0) indicates rigour-focused responsibilities without any velocity signals.

**Run 3:** `rigour` ✓
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, structured modeling methodologies (Kimball Star Schema, DataVault 2.0), and performance optimization with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The focus on solving operational business needs through data architecture rather than financial reporting, compliance, or regulatory requirements suggests moderate domain risk.

**Run 2:** `moderate` ✓
> Quote: "Collaborate with analysts and stakeholders to translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The role supports business analytics and decision-making through data infrastructure without explicit financial reporting, compliance, or regulatory language that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The JD describes building data infrastructure for business decisions without explicit financial, regulatory, or compliance language.

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is explicitly named as a distinct collaboration partner; 'stakeholders' is generic and does not count as a named team.

**Run 2:** `1` ✗
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is a named function appearing in 'Collaborate with analysts and stakeholders'; 'stakeholders' is too generic to count.

**Run 3:** `1` ✗
> Quote: "Collaborate with analysts and stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' counts as a named function; 'stakeholders' is generic and does not count toward collaboration width.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build transformation pipelines using dbt"
> Verified: ✓ found in JD
> Reasoning: The explicit mention of dbt as an established tool in the responsibilities section indicates infrastructure is operational, suggesting a mid-stage team with defined tooling and multiple roles.

**Run 2:** `mid` ✓
> Quote: "Build transformation pipelines using dbt"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in core responsibilities rather than just requirements, indicating established infrastructure being scaled rather than early-stage construction.

**Run 3:** `mid` ✓
> Quote: "Build transformation pipelines using dbt"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Snowflake/Databricks/BigQuery/Redshift) referenced in responsibilities signal existing infrastructure being scaled and optimized, not greenfield.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Develop dimensional models (Kimball Star Schema, Snowflake Schema, DataVault 2.0)"
> Verified: ✓ found in JD
> Reasoning: Specific methodology names and dbt reference suggest technical authorship, but generic action verbs and the boilerplate 'collaborate with stakeholders' phrasing indicate mixed authorship.

**Run 2:** `hiring_manager` ✓
> Quote: "Develop dimensional models (Kimball Star Schema, Snowflake Schema, DataVault 2.0)"
> Verified: ✓ found in JD
> Reasoning: The specific methodologies mentioned demonstrate technical knowledge only someone who has actually done this work would include.

**Run 3:** `mixed` ✗
> Quote: "Develop dimensional models (Kimball Star Schema, Snowflake Schema, DataVault 2.0)"
> Verified: ✓ found in JD
> Reasoning: Specific methodologies and named modeling approaches show technical hiring manager input, while boilerplate verbs like 'collaborate with analysts and stakeholders' show recruiter templating.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Collaborate with analysts and stakeholders to translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data infrastructure (modelling, pipelines, quality) primarily for analysts and data consumers rather than commercial, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "Design data models in modern warehouses"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and improving the data platform itself through modeling, pipelines, and quality infrastructure, not serving external commercial or product teams.

**Run 3:** `internal_data` ✓
> Quote: "Design data models in modern warehouses"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building data infrastructure (models, pipelines, quality checks) that serves data consumers and analysts rather than revenue, product, or finance functions.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Collaborate with analysts and stakeholders to translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities frame the role as executing against business needs translated by others, not defining strategy or owning the direction of the data function.

**Run 2:** `execution` ✓
> Quote: "Collaborate with analysts and stakeholders to translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The role executes design and building tasks within a framework where direction comes from analysts and stakeholders rather than defining that direction.

**Run 3:** `execution` ✓
> Quote: "Collaborate with analysts and stakeholders to translate business needs into scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The role receives scoped requirements to translate and executes technical solutions with design autonomy within technical parameters, but no strategic direction-setting authority.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI skill expectations are mentioned for the candidate in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, agentic workflows, AI-ready infrastructure, or any AI-related candidate expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted workflows, or AI data infrastructure requirements anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a core responsibility the candidate will implement and maintain, not as a tool listed in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: Data quality checking is framed as a core responsibility to implement, not merely a tool listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: The action verb 'Implement' signals the candidate owns and is accountable for defining data quality practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: Data quality and performance optimization reflect operational reliability concerns, but the JD lacks compliance, regulatory, or stakeholder-trust language that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: Reliability and quality are concerns shown by quality checks and performance optimization, but secondary to delivery framing rather than dominating the role.

**Run 3:** `moderate` ✗
> Quote: "Implement data quality checks"
> Verified: ✓ found in JD
> Reasoning: Core responsibility for data quality implementation signals concern about operational reliability and preventing data failures, but this is secondary to the delivery-focused capability framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
