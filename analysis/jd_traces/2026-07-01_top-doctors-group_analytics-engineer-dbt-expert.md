# Trace: 2026-07-01_top-doctors-group_analytics-engineer-dbt-expert

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer - dbt Expert — Top Doctors Group

**URL:** https://careers.topdoctorsgroup.com/jobs/7996325-analytics-engineer
**Location:** Spain (fully remote)
**Date Posted:** 2026-07-01
**Salary:** 33,000–38,000 EUR

---

Analytics Engineer - dbt Expert at Top Doctors Group

Location: Spain (fully remote)
Salary: €33,000 - €38,000 annually

About the Company
Top Doctors Group, established in 2013, operates as a leading technology group specialising in healthcare digitalisation. The organisation serves over 1 million monthly platform users and has earned the trust of more than 10 million patients across Europe, LATAM, the United States, and the Middle East through multiple brands including Top Doctors, Top Health Tech, and others.

Role Summary
This position focuses on designing and evolving the analytical layer used across the organisation. The Analytics Engineer will work closely with the Data Team Lead, Senior Data Engineer, and business teams to build scalable data models, define reliable metrics, and ensure consistent, actionable information organisation-wide.

Key Responsibilities
- Design and maintain analytical data models in dbt with focus on traceability and quality
- Build and optimise complex SQL queries in BigQuery
- Manage table creation, views, routines, and scheduled queries
- Define, standardise, and document metrics and KPIs
- Develop dashboards in Metabase and Tableau
- Implement testing and data validation processes within dbt
- Collaborate with non-technical teams to translate business needs into scalable solutions

Requirements
- Prior experience as an Analytics Engineer or Data Analyst with strong modelling focus
- Advanced SQL proficiency with large datasets
- Solid BigQuery and modern Data Warehouse experience
- Practical dbt experience including modelling and testing
- Cloud environment knowledge (GCP or AWS)
- Dashboard development experience
- Git familiarity and software development best practices
- Fluent English for international collaboration

Benefits
- Hybrid work arrangement
- Monday-Thursday: 9:00 AM - 6:30 PM; Friday: 9:00 AM - 3:00 PM
- Birthday day off
- Flexible compensation and social benefits
- Healthcare discounts
- Collaborative, international environment

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 0 | 0 | 1 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | execution | mixed | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, traceability, standardization, testing, and consistency throughout, with no velocity-oriented language like 'fast-paced' or 'ship quickly'.

**Run 2:** `rigour` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, standardization, documentation, and testing as core expectations without any velocity signals like speed or rapid iteration.

**Run 3:** `rigour` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes traceability, quality, testing, and documentation as core responsibilities with no velocity signals present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "This position focuses on designing and evolving the analytical layer used across the organisation."
> Verified: ✓ found in JD
> Reasoning: While the company operates in healthcare, the JD describes analytics infrastructure and dashboards without explicit compliance, regulatory, or financial reporting language, making this moderate-risk business decision-making work rather than high-risk compliance-critical work.

**Run 2:** `moderate` ✗
> Quote: "This position focuses on designing and evolving the analytical layer used across the organisation."
> Verified: ✓ found in JD
> Reasoning: While the company operates in healthcare, the JD emphasizes analytics infrastructure without compliance, regulatory, or patient safety language, indicating business decision support rather than high-risk functions.

**Run 3:** `moderate` ✗
> Quote: "serves over 1 million monthly platform users and has earned the trust of more than 10 million patients across Europe"
> Verified: ✓ found in JD
> Reasoning: Healthcare sector implies moderate-to-high risk, but the JD frames the role around business analytics and operational decisions rather than compliance or regulatory requirements.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "work closely with the Data Team Lead, Senior Data Engineer, and business teams"
> Verified: ✓ found in JD
> Reasoning: Named individuals (Data Team Lead, Senior Data Engineer) are internal colleagues not counting as distinct functions, and 'business teams' is too vague and generic per guidelines.

**Run 2:** `0` ✗
> Quote: "work closely with the Data Team Lead, Senior Data Engineer, and business teams"
> Verified: ✓ found in JD
> Reasoning: No explicitly named partner functions or departments are identified; Data Team Lead and Senior Data Engineer are roles within the data function, not external collaboration partners.

**Run 3:** `1` ✗
> Quote: "work closely with the Data Team Lead, Senior Data Engineer, and business teams"
> Verified: ✓ found in JD
> Reasoning: Only the data team is explicitly named as a distinct partner; business teams is too generic to count as a named function.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '0', '1']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: The presence of existing dbt models and references to evolving and maintaining infrastructure, combined with multiple specialized data roles (Lead, Senior Engineer), indicates a team beyond early-stage but not yet at mature scale.

**Run 2:** `mid` ✓
> Quote: "This position focuses on designing and evolving the analytical layer used across the organisation."
> Verified: ✓ found in JD
> Reasoning: The existence of an analytical layer requiring evolution, multiple named roles (Team Lead, Senior Engineer), and established tools (dbt, BigQuery, Metabase) indicate a growing data function that has moved beyond early-stage infrastructure building.

**Run 3:** `mid` ✓
> Quote: "work closely with the Data Team Lead, Senior Data Engineer, and business teams"
> Verified: ✓ found in JD
> Reasoning: Multiple specialized data roles and named tools in active use (dbt, BigQuery, Metabase, Tableau) indicate an established but growing data function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Manage table creation, views, routines, and scheduled queries; Define, standardise, and document metrics and KPIs; Implement testing and data validation processes within dbt"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific technical details about the work (dbt models, BigQuery optimization, Metabase/Tableau dashboards, testing practices) that demonstrate someone with hands-on experience in the role wrote these.

**Run 2:** `hiring_manager` ✓
> Quote: "Manage table creation, views, routines, and scheduled queries"
> Verified: ✓ found in JD
> Reasoning: The specific enumeration of database objects (views, routines, scheduled queries) and technical context throughout indicates authorship by someone with hands-on analytics engineering experience.

**Run 3:** `hiring_manager` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality; Implement testing and data validation processes within dbt"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific tool names and methodologies (dbt models, BigQuery, testing frameworks, metrics definition) that reflect hands-on technical experience.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "define reliable metrics, and ensure consistent, actionable information organisation-wide"
> Verified: ✓ found in JD
> Reasoning: The focus is on building reliable metrics and analytics infrastructure for internal organisational consumption rather than supporting commercial, product, or finance-specific goals.

**Run 2:** `internal_data` ✓
> Quote: "This position focuses on designing and evolving the analytical layer used across the organisation."
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and maintaining the data infrastructure layer, with the role's success measured by providing reliable analytics infrastructure to data consumers across the organization.

**Run 3:** `internal_data` ✓
> Quote: "build scalable data models, define reliable metrics, and ensure consistent, actionable information organisation-wide"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building the analytical infrastructure and data models that serve organizational data consumers rather than a specific business function.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "work closely with the Data Team Lead, Senior Data Engineer, and business teams"
> Verified: ✓ found in JD
> Reasoning: The role operates within the data team's leadership structure under the Data Team Lead, suggesting direction and priorities are set by leadership while the Analytics Engineer executes within that framework.

**Run 2:** `mixed` ✓
> Quote: "Design and maintain analytical data models in dbt with focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic technical autonomy (designing models, defining metrics) with execution-oriented responsibilities (implementing processes, collaborating on translation), indicating both ownership and scope set by others.

**Run 3:** `mixed` ✓
> Quote: "Design and evolve the analytical layer used across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role combines strategic direction-setting (designing the analytical layer, defining standards) with execution responsibilities (building queries, developing dashboards).

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI/ML infrastructure skills that the candidate is expected to demonstrate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding agents, or AI-related infrastructure; it focuses entirely on traditional analytics engineering with dbt, SQL, and dashboarding.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI data infrastructure that the candidate is expected to use or build.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement testing and data validation processes within dbt"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an owned responsibility with the action verb 'implement', indicating the candidate is accountable for establishing and maintaining testing practices.

**Run 2:** `responsibility` ✗
> Quote: "Implement testing and data validation processes within dbt"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a responsibility the candidate owns through the action verb 'Implement', indicating accountability for establishing and maintaining testing practices.

**Run 3:** `responsibility` ✗
> Quote: "Implement testing and data validation processes within dbt"
> Verified: ✓ found in JD
> Reasoning: Testing is listed as a Key Responsibility with the action verb 'Implement', indicating the candidate owns this practice.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "define reliable metrics, and ensure consistent, actionable information organisation-wide"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and consistency as concerns without compliance, regulatory, or trust-risk language, indicating moderate concern for data reliability but not high loss aversion driven by regulatory exposure.

**Run 2:** `moderate` ✗
> Quote: "focus on traceability and quality"
> Verified: ✓ found in JD
> Reasoning: Quality and reliability are emphasized as operational concerns to support consistent business decisions, but without compliance, regulatory, or stakeholder trust framing that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "ensure consistent, actionable information organisation-wide"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data quality as delivery concerns, but contains no compliance, regulatory, or stakeholder-trust language that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
