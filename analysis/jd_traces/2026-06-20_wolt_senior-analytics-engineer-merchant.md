# Trace: 2026-06-20_wolt_senior-analytics-engineer-merchant

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer, Merchant — Wolt

**URL:** https://job-boards.greenhouse.io/wolt/jobs/8006892
**Location:** Berlin, Germany; Helsinki, Finland; Stockholm, Sweden
**Salary:** Not listed

---

## Key Responsibilities

- Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data
- Working on centrally maintained data integrations and data pipelines
- Design and implement complex data pipelines with dependency control and orchestration
- Develop a self-service data modelling strategy
- Increase data literacy across the domain through training and documentation
- Lead, mentor, and guide more junior team members
- Managing data integrations, pipelines, models, and dashboards using modern tools (Snowflake, SQL, Looker, Airflow, Dagster, GitHub)

---

## Required Qualifications

- 5+ years of experience as an Analytics Engineer or BI Developer
- Strong hands-on experience with data integrations, data pipelines, data models, metric development, and dashboards
- Proficiency in Snowflake, SQL, Airflow, DBT, and visualization tools (Looker, Tableau, or Power BI)
- Advanced SQL skills and ability to write optimized queries for large data sets
- Strong business acumen and product-oriented thinking

---

## Preferred / Bonus Skills

- Experience with orchestration tools (Airflow, Dagster)
- Familiarity with in-house ETL systems
- Exposure to complex geolocational and temporal data challenges

---

## Benefits

- Hybrid, at the office, or remote within the location (Berlin, Helsinki, or Stockholm)
- Exposure to complex geolocational and temporal data challenges
- Opportunity to create significant impact
- Collaborative team environment with mentorship opportunities
- Inclusive company culture emphasising ownership and continuous learning

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: The emphasis on dependency control, orchestration, and structured management signals a rigour-oriented approach focused on reliability and quality rather than delivery speed.

**Run 2:** `rigour` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, clarity, and standards (metrics quality, dependency control, documentation) with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, strategy, training, and mentorship with zero velocity language (no fast-paced, ship quickly, or iteration speed signals).

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: The role focuses on business decision support and operational reporting without explicit regulatory, compliance, or financial reporting language, indicating moderate business risk rather than high compliance risk.

**Run 2:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: Wolt is a marketplace platform where data errors affect business decisions but not regulatory compliance or financial reporting.

**Run 3:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: Wolt is a marketplace where data errors affect operational and business decisions but lack the regulatory, compliance, or financial reporting exposure that would elevate risk to high.

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "No named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: Although the role supports central infrastructure and business needs, no explicitly named partner functions (Finance, Product, Engineering, etc.) are identified in the JD.

**Run 2:** `0` ✗
> Quote: "Collaborative team environment with mentorship opportunities"
> Verified: ✓ found in JD
> Reasoning: The JD mentions collaboration generically but does not name any specific partner teams such as Finance, Product, Engineering, or other functions.

**Run 3:** `0` ✗
> Quote: "No named partner teams explicitly identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD refers to generic terms like 'business' and 'domain' but does not name specific functions (Finance, Product, Marketing, Engineering, Data Science, etc.) as collaboration partners.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Managing data integrations, pipelines, models, and dashboards using modern tools (Snowflake, SQL, Looker, Airflow, Dagster, GitHub)"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Snowflake, Airflow, Dagster, Looker) combined with multi-person team structure and strategy development indicates an established data function at mid-maturity.

**Run 2:** `mid` ✓
> Quote: "Working on centrally maintained data integrations and data pipelines"
> Verified: ✓ found in JD
> Reasoning: The JD describes maintaining existing infrastructure with specific named tools while also scaling capabilities through mentoring and developing new strategic initiatives.

**Run 3:** `mid` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration; Develop a self-service data modelling strategy"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Snowflake, Airflow, Dagster, Looker) and strategy-development focus signal an established data function growing and improving, not greenfield, with some specialization beginning.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: The technical specificity around orchestration patterns, dependency control, and named tools (Airflow, Dagster, Snowflake) demonstrates domain knowledge from someone who has performed this work.

**Run 2:** `hiring_manager` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: The mention of specific technical concepts like dependency control and orchestration methodology demonstrates hands-on understanding of the actual work only someone doing this job would articulate.

**Run 3:** `hiring_manager` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration; Managing data integrations, pipelines, models, and dashboards using modern tools (Snowflake, SQL, Looker, Airflow, Dagster, GitHub)"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (dependency control, self-serve modelling strategy, named tool stack in operational context) and concrete methodologies could only come from someone doing this work, not recruiter boilerplate.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop a self-service data modelling strategy"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building self-serve analytics infrastructure and increasing data literacy across the domain, serving data consumers and the data platform itself.

**Run 2:** `internal_data` ✓
> Quote: "Develop a self-service data modelling strategy"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building data infrastructure and capability for internal data consumers and the data function itself, not commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Develop a self-serve data modelling strategy; Increase data literacy across the domain through training and documentation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role primarily builds analytics infrastructure, enables self-serve data access, and improves data literacy within the data function and internal consumers, not commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop a self-service data modelling strategy; Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (developing strategy, leading team) with substantial execution responsibilities (implementing, managing).

**Run 2:** `mixed` ✓
> Quote: "Develop a self-service data modelling strategy; Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic elements (developing strategy, mentoring, driving data literacy) with execution elements (maintaining existing pipelines and infrastructure).

**Run 3:** `strategic` ✗
> Quote: "Develop a self-service data modelling strategy; Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: The role owns strategy definition, technical design, and team direction rather than executing priorities set by others.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for the candidate to use AI coding tools or build AI-ready data infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted workflows, or AI data infrastructure that the candidate must work with or build.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted work, AI infrastructure, or GenAI applications expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: While metrics quality is mentioned, there is no explicit responsibility for testing, data quality frameworks, or observability practices.

**Run 2:** `absent` ✗
> Quote: "Enhancing reporting and metrics quality as a whole"
> Verified: ✓ found in JD
> Reasoning: Quality is mentioned as an outcome but testing frameworks, data contracts, or observability tools are neither named as responsibilities nor listed as required skills.

**Run 3:** `absent` ✗
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: While metrics quality is mentioned as a goal, there is no explicit ownership of testing practices, data contracts, or data quality frameworks, nor are testing tools named.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: Emphasis on operational reliability through dependency control signals concern for pipeline stability, but this is secondary to the primary delivery and capability-building mission.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in capability and delivery terms with no mention of regulatory compliance, audit, reliability targets, or prevention of bad outcomes.

**Run 3:** `moderate` ✗
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: Dependency control and quality focus signal concern about pipeline failures and data reliability, but risk language is operational (not compliance or regulatory), making this a moderate loss-aversion frame secondary to delivery capability.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
