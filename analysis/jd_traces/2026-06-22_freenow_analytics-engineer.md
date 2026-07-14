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
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | strategic | mixed | mixed | 33% | ✓ |
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
> Reasoning: The JD emphasizes data quality, trustworthiness, and data contracts as core responsibilities with no velocity or speed-focused language present.

**Run 2:** `rigour` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, trustworthiness, and quality checks as core responsibilities with no velocity-oriented language, making data reliability the dominant framing.

**Run 3:** `rigour` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (quality, trustworthiness, data contracts) dominate the responsibilities section with zero velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around business analytics and operational reporting without explicit financial reporting, compliance, or regulatory language typical of high-risk domains.

**Run 2:** `moderate` ✓
> Quote: "Own the quality, availability, and trustworthiness of data"
> Verified: ✓ found in JD
> Reasoning: The role is in a product/operations analytics context emphasizing data trustworthiness without regulatory, compliance, or financial reporting language, indicating moderate rather than high risk.

**Run 3:** `moderate` ✓
> Quote: "Design solutions for KPIs and business metrics"
> Verified: ✓ found in JD
> Reasoning: This is a SaaS/marketplace analytics role in a mobility company with no explicit financial reporting, regulatory, or compliance framing in the JD.

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "analysts and scientists; developers"
> Verified: ✓ found in JD
> Reasoning: The JD names three distinct partner teams: analysts, data scientists (referred to as scientists), and developers.

**Run 2:** `3` ✗
> Quote: "Engage with analysts and scientists; Work with developers"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct groups as collaboration partners: analysts, scientists (data scientists), and developers (engineering).

**Run 3:** `3` ✗
> Quote: "analysts and scientists; developers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named groups are counted: analysts, scientists (as data scientists), and developers (as engineering).

⚠ **Disagreement**: manual=`4` vs LLM majority=`3`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "develop new data products within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: The JD references sophisticated tools (Databricks, Airflow, Kafka) and advanced architecture (Data Mesh) with multiple data roles implied, indicating an established but growing data function.

**Run 2:** `mid` ✗
> Quote: "within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: The presence of Data Mesh as an established architectural pattern and named tools like Databricks, Airflow, and Kafka in daily use indicates a scaling data team with foundational infrastructure but not yet fully mature with specialized sub-teams.

**Run 3:** `mid` ✗
> Quote: "Provide expertise and collaborate with stakeholders to develop new data products within a Data Mesh environment"
> Verified: ✓ found in JD
> Reasoning: Data Mesh architecture signals an established multi-team data function, but active language around building self-serve environments suggests growth and scaling rather than full maturity.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts; Expert level of SQL (especially SparkSQL)"
> Verified: ✓ found in JD
> Reasoning: The JD combines specific technical requirements (SparkSQL, Databricks, Kafka, Debezium, data contracts) with generic responsibility language (collaborate with stakeholders, engage with analysts).

**Run 2:** `mixed` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts; Engage with analysts and scientists to understand problems and translate them into data solutions"
> Verified: ✓ found in JD
> Reasoning: The JD combines technical specificity around data architecture patterns (Data Mesh, data contracts, SparkSQL) with boilerplate action verbs like 'engage', 'understand', and 'translate', indicating mixed authorship between technical and recruiting perspectives.

**Run 3:** `mixed` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Specific technical practices (data contracts, Data Mesh) mix with generic boilerplate language like 'collaborate with stakeholders' and 'engage with analysts', indicating both hiring manager insight and recruiter templating.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build an environment where self-service capabilities are available for analysts and data consumers"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building infrastructure and platforms for internal data consumers rather than serving commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Build an environment where self-service capabilities are available for analysts and data consumers"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibilities emphasize serving internal data consumers and building self-serve analytics infrastructure rather than supporting external GTM, product experimentation, or finance functions.

**Run 3:** `internal_data` ✓
> Quote: "Build an environment where self-serve capabilities are available for analysts and data consumers"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary focus is enabling the data platform and serving internal analytics teams rather than commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The role uses ownership language and expects the candidate to define how data quality is ensured and to design solutions, not merely execute direction set by others.

**Run 2:** `mixed` ✓
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts; Engage with analysts and scientists to understand problems"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership verbs ('own') for defining data practices with execution-oriented language ('engage with', 'understand problems'), making it mixed between direction-setting and execution support.

**Run 3:** `mixed` ✓
> Quote: "Own the quality, availability, and trustworthiness of data; Troubleshoot data issues across the stack"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership over data quality and design with execution-focused troubleshooting and support work.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI-assisted coding tools, AI/ML pipeline work, or any expectation of AI skill from the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills, AI tool usage, or building data infrastructure for AI systems.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI-ready data infrastructure expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing practices (quality checks, data contracts) are framed as owned responsibilities with accountability verbs, not merely listed as tools.

**Run 2:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing practices are framed as explicit ownership responsibilities with named approaches (quality checks, data contracts), not merely listed as tools.

**Run 3:** `responsibility` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as owned responsibilities with specific named practices (quality checks, data contracts) rather than tools listed in a skills section.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data trustworthiness as concerns but lacks regulatory, compliance, or audit language typical of high loss-aversion framing.

**Run 2:** `moderate` ✗
> Quote: "Own the quality, availability, and trustworthiness of data — through quality checks and data contracts"
> Verified: ✓ found in JD
> Reasoning: The JD frames data quality and trustworthiness as central responsibilities with named practices, indicating moderate loss-aversion around preventing data errors in analytics operations rather than regulatory or compliance risk.

**Run 3:** `moderate` ✗
> Quote: "Troubleshoot data issues across the stack; Own the quality, availability, and trustworthiness of data"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and trustworthiness are present concerns but secondary to the primary framing of building infrastructure and enabling self-serve analytics.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
