# Trace: 2026-06-22_freenow_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — FREE NOW (Freenow by Lyft)

**URL:** https://job-boards.greenhouse.io/freenow/jobs/7189275?gh_src=0c92915e1us
**Location:** Hamburg, Berlin, or Barcelona

---

## Key Responsibilities

- Provide expertise and collaborate with stakeholders to develop new data products within a Data Mesh environment
- Engage with analysts and scientists to understand problems and translate them into data solutions
- Work with developers on data creation aligned with business logic
- Own the quality, availability, and trustworthiness of data — through quality checks and data contracts
- Design solutions for KPIs and business metrics
- Troubleshoot data issues across the stack
- Build an environment where self-service capabilities are available for analysts and data consumers

---

## Required Qualifications

- Curiosity in your essence, aligned with attention to detail
- Background in data-driven analytics environments, ideally within tech product organisations
- Expert level of SQL (especially SparkSQL) and experience in building data pipelines
- Knowledge of at least one programming language (Python preferred)
- Exceptional analytical skills, lateral thinking, and proven experience in solving complex data problems
- Experience with data visualisation tools (e.g. Tableau) and event tracking platforms (e.g. Mixpanel)
- Excellent English communication skills

---

## Preferred / Bonus Skills

- Experience with AWS, Hive, Spark, Trino, Databricks, and Airflow
- Familiarity with streaming tools such as Kafka and Debezium
- Experience working in Data Mesh or distributed data ownership architectures

---

## Tech Stack

SQL | Python | Databricks | Tableau | Mixpanel | Airflow | AWS | Kafka | Debezium

---

## Benefits

- Flexible working arrangements
- LinkedIn Learning access
- Sabbatical and special leave policies
- WeRoad partnership (travel benefits)
- Health insurance
- Employee Assistance Programme
- Location-specific additional benefits (Hamburg, Berlin, Barcelona)

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 3 | 3 | 3 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | mixed | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize quality assurance, data contracts, trustworthiness, and availability with no velocity language, indicating a rigour-focused orientation.

**Run 2:** `rigour` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, trustworthiness, data contracts, and quality checks as core expectations with no corresponding velocity signals.

**Run 3:** `rigour` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, trustworthiness, and quality assurance frameworks with no velocity-oriented language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: A mobility/marketplace platform role focused on business metrics without explicit financial reporting, compliance, or regulatory language suggests moderate risk.

**Run 2:** `moderate` ✓
> Quote: "Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: The JD frames data work around business intelligence and operational metrics rather than financial reporting or regulatory compliance.

**Run 3:** `moderate` ✓
> Quote: "Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: The role affects business decision-making through KPIs and metrics but contains no language about financial reporting, compliance, or regulatory impact.

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "analysts; scientists; developers"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct partner teams: analysts, scientists (data scientists), and developers.

**Run 2:** `3` ✗
> Quote: "Engage with analysts and scientists to understand problems and translate them into data solutions; Work with developers on data creation"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct partner functions: analysts, data scientists, and developers.

**Run 3:** `3` ✗
> Quote: "Engage with analysts and scientists; Work with developers on data creation"
> Verified: ✓ found in JD
> Reasoning: Analysts, data scientists, and developers are each named as distinct collaboration partners.

⚠ **Disagreement**: manual=`4` vs LLM majority=`3`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: The Data Mesh environment and named tools (Databricks, Kafka, Debezium, Airflow) in responsibilities signal an established data function with sophisticated infrastructure, but no "20+ team" or "join established team" language.

**Run 2:** `mid` ✗
> Quote: "Provide expertise and collaborate with stakeholders to develop new data products within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: The Data Mesh architecture and references to building self-serve infrastructure for existing analysts and data scientists signal an established team scaling its practices.

**Run 3:** `mid` ✗
> Quote: "Provide expertise and collaborate with stakeholders to develop new data products within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: Data Mesh is an established architectural pattern with multiple named tools in use, and explicit focus on self-serve analytics infrastructure indicates a maturing data function.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Technical specificity around data contracts and Data Mesh is mixed with generic collaboration verbs like 'engage', 'collaborate', and 'provide expertise'.

**Run 2:** `hiring_manager` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The specificity of 'data contracts' as a named methodology and Data Mesh architecture shows hands-on domain expertise, not recruiter boilerplate.

**Run 3:** `mixed` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical concepts (data contracts, Data Mesh) alongside generic collaboration verbs, indicating both hiring manager and recruiter contributions.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build an environment where self-service capabilities are available for analysts and data consumers"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building data infrastructure and self-serve platforms for internal data users (analysts, scientists, developers), not external GTM or business teams.

**Run 2:** `internal_data` ✓
> Quote: "Build an environment where self-serve capabilities are available for analysts and data consumers"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary responsibility is serving the data function and infrastructure through self-serve analytics and data products.

**Run 3:** `internal_data` ✓
> Quote: "Build an environment where self-serve capabilities are available for analysts and data consumers"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role explicitly states its primary audience is internal data professionals (analysts, data consumers), serving the data platform and infrastructure layer.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of technical domains (quality/contracts, KPI solutions, self-serve platforms) with execution responsibilities (collaborating with and supporting analysts, scientists, developers).

**Run 2:** `mixed` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts; Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of data quality practices and solution design with execution on specific analytical problems from analysts and scientists.

**Run 3:** `mixed` ✓
> Quote: "Own the quality, availability, and trustworthiness of data; Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: The role owns quality and design decisions but executes within problems and business logic defined by stakeholders, combining strategic ownership with execution constraints.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI-assisted coding, AI tools, or AI-ready data infrastructure as a candidate skill expectation.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or building AI infrastructure for the candidate to use or develop.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD lists no expectation for AI-assisted coding, AI-ready data infrastructure, or any AI capability from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as candidate ownership and definition using the verb 'own', not listed as tools in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The JD frames data quality and contracts as something the candidate owns and is accountable for, making it a core responsibility, not just a required tool.

**Run 3:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly expected to own quality checks and data contracts as core practices, framing testing as a primary responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Own the quality, availability, and trustworthiness of data"
> Verified: ✓ found in JD
> Reasoning: Operational reliability concerns (quality, availability, trustworthiness) are present alongside troubleshooting, but there is no regulatory, compliance, or stakeholder-trust language.

**Run 2:** `moderate` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The emphasis on data trustworthiness and contracts indicates concern for preventing bad data reaching stakeholders, but without regulatory or compliance language.

**Run 3:** `moderate` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data quality but lacks compliance or regulatory language; fear is data failures and pipeline outages, not regulatory exposure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
