# Trace: 2026-06-27_datenna_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Datenna BV

**URL:** https://jobs.datenna.com/o/senior-analytics-engineer-3
**Location:** Hybrid, Eindhoven, Noord-Brabant, Netherlands
**Date Posted:** 2026-06-27

---

Senior Analytics Engineer at Datenna BV

Position: Senior Analytics Engineer
Location: Hybrid, Eindhoven, Noord-Brabant, Netherlands
Department: Engineering

About the Company

Datenna is a fast-growing tech scale-up combining cutting-edge OSINT and AI technologies focused on providing governments with insights into China's technological and economic landscape.

Key Responsibilities

- Design efficient data models using techniques like star schema and snowflake schema
- Develop and maintain data transformation pipelines using dbt, SQL, and Python
- Implement data quality checks and governance practices
- Collaborate with stakeholders to understand data requirements and implement solutions
- Maintain data documentation and catalogs to improve data discoverability
- Apply software engineering best practices to analytics code
- Optimize data models and pipelines for performance

Required Qualifications

- Bachelor's degree in Computer Science, Engineering, or related field
- 5+ years of experience in analytics engineering, or data engineering with focus on data modelling
- Strong SQL skills and experience with data modeling techniques
- Proficiency in dbt, Databricks and Python for data transformation
- Strong problem-solving and communication skills
- Experience with version control systems like Git
- Experience with CI/CD practices for data pipelines
- Experience with orchestrations frameworks, such as Dagster or Airflow

Preferred Skills

- Experience with AI coding assistants (like Claude Code or Codex) is advantageous
- AI is part of how we build — candidates are expected to use AI tools responsibly in daily work

Why Join Datenna

- Impactful geopolitical intelligence work
- OSINT and AI innovation opportunities
- Competitive compensation
- International team environment
- Growth prospects in a scaling company

Application Process

Four stages: recruiter screening call, behavioral interview, system design interview, and skill assessment.

Note: Candidates must already reside in the Netherlands.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals—governance, quality checks, best practices, documentation, CI/CD—dominate the responsibilities with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, governance, best practices, and performance optimization with no velocity language in the responsibilities section.

**Run 3:** `rigour` ✓
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, governance, documentation, and software engineering practices with no velocity-oriented language like 'fast-paced' or 'ship quickly'.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Intelligence work for government is inherently high-stakes, but the JD frames it through operational governance language rather than explicit compliance, regulatory, or audit framing typical of high-risk roles.

**Run 2:** `moderate` ✓
> Quote: "Impactful geopolitical intelligence work"
> Verified: ✓ found in JD
> Reasoning: While the company serves governments with intelligence, the JD uses no explicit regulatory, compliance, or financial language that would elevate this to high-risk classification.

**Run 3:** `moderate` ✓
> Quote: "providing governments with insights into China's technological and economic landscape"
> Verified: ✓ found in JD
> Reasoning: While government clients are served, the JD contains no explicit financial reporting, regulatory compliance, or audit language, making it moderate business intelligence risk rather than high-risk financial/compliance work.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "Collaborate with stakeholders to understand data requirements and implement solutions"
> Verified: ✓ found in JD
> Reasoning: No specific named teams, departments, or functions are identified; only generic 'stakeholders' is mentioned without naming any partner groups.

**Run 2:** `0` ✓
> Quote: "Collaborate with stakeholders to understand data requirements and implement solutions"
> Verified: ✓ found in JD
> Reasoning: The JD uses generic terms like 'stakeholders' without naming specific teams or functions, so no named partnerships count toward collaboration width.

**Run 3:** `0` ✓
> Quote: "Collaborate with stakeholders to understand data requirements and implement solutions"
> Verified: ✓ found in JD
> Reasoning: The collaboration reference uses generic 'stakeholders' without naming specific functions like Finance, Product, Engineering, or Data Science teams, resulting in a count of zero named partner teams.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Develop and maintain data transformation pipelines using dbt, SQL, and Python"
> Verified: ✓ found in JD
> Reasoning: The 'maintain' verb combined with named tools (dbt, Databricks) in a responsibilities context indicates existing operational infrastructure being optimized and scaled, not early-stage building.

**Run 2:** `mid` ✓
> Quote: "Develop and maintain data transformation pipelines using dbt, SQL, and Python"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities and responsibilities focused on maintaining/developing existing pipelines indicate an established data function with infrastructure already in place.

**Run 3:** `mid` ✓
> Quote: "Develop and maintain data transformation pipelines using dbt, SQL, and Python"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize maintaining and optimizing existing infrastructure (dbt, documentation catalogs) rather than building from zero or establishing large sub-teams.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Design efficient data models using techniques like star schema and snowflake schema"
> Verified: ✓ found in JD
> Reasoning: Some responsibilities show technical specificity (schema techniques, named tools, optimization) while others are generic boilerplate (collaborate, apply best practices), indicating mixed authorship.

**Run 2:** `mixed` ✗
> Quote: "Design efficient data models using techniques like star schema and snowflake schema"
> Verified: ✓ found in JD
> Reasoning: The presence of specific data modeling techniques alongside generic collaboration and best-practices language suggests both hiring manager technical specificity and recruiter boilerplate.

**Run 3:** `mixed` ✗
> Quote: "Design efficient data models using techniques like star schema and snowflake schema"
> Verified: ✓ found in JD
> Reasoning: Technical specificity (named schema techniques, specific tools) is present alongside generic phrases like 'Collaborate with stakeholders to understand data requirements', indicating mixed hiring manager and recruiter input.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Maintain data documentation and catalogs to improve data discoverability"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize data infrastructure, quality, governance, and team enablement rather than serving commercial, product, finance, or external teams.

**Run 2:** `internal_data` ✓
> Quote: "Maintain data documentation and catalogs to improve data discoverability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities focus on data infrastructure, quality, and accessibility for internal data consumers rather than serving commercial, product, finance, or external stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Maintain data documentation and catalogs to improve data discoverability"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and maintaining data infrastructure and self-serve analytics rather than serving commercial, product, or finance teams directly.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Collaborate with stakeholders to understand data requirements and implement solutions"
> Verified: ✓ found in JD
> Reasoning: The role is framed around implementing requirements identified by others rather than defining strategic direction or establishing priorities.

**Run 2:** `execution` ✓
> Quote: "Collaborate with stakeholders to understand data requirements and implement solutions"
> Verified: ✓ found in JD
> Reasoning: The analyst's work is scoped by stakeholder requirements rather than the analyst setting strategic direction for analytics delivery.

**Run 3:** `execution` ✓
> Quote: "Develop and maintain data transformation pipelines using dbt, SQL, and Python"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes developing, maintaining, and optimizing existing infrastructure using defined tools and practices rather than defining strategy or setting direction.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "candidates are expected to use AI tools responsibly in daily work"
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly expected to use AI coding assistants (Claude Code mentioned by name) as personal productivity tools, not to build AI infrastructure.

**Run 2:** `ai_user` ✗
> Quote: "candidates are expected to use AI tools responsibly in daily work"
> Verified: ✓ found in JD
> Reasoning: The preferred skills explicitly expect candidates to use AI coding assistants like Claude Code as a daily productivity tool.

**Run 3:** `ai_user` ✗
> Quote: "candidates are expected to use AI tools responsibly in daily work"
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly expected to use AI coding assistants as a personal productivity tool in their daily work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: The verb 'implement' frames data quality checks as an owned responsibility the candidate will define and establish, not a tool listed in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are framed as responsibilities the candidate owns and implements, not as tools listed in a skills requirement.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: The action verb 'Implement' indicates the candidate owns and is accountable for data quality and governance practices, not just using existing tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Quality checks and governance practices indicate concern for operational reliability and preventing data failures, but the framing is procedural rather than risk-centric or compliance-dominated.

**Run 2:** `moderate` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are framed as operational practices to implement rather than as preventing specific bad outcomes or regulatory risk.

**Run 3:** `moderate` ✗
> Quote: "Implement data quality checks and governance practices"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are concerns reflected in the data quality responsibility, but compliance or trust framing does not dominate the overall role positioning.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
