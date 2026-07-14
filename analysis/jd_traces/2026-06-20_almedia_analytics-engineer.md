# Trace: 2026-06-20_almedia_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Almedia

**URL:** https://jobs.ashbyhq.com/almedia/8d28d1b5-1508-473b-a599-55e133fba45b
**Location:** Berlin, Germany (On-site)
**Compensation:** €70K – €140K • Offers Equity • Offers Bonus

---

## Overview

This isn't your regular job. Almedia is a place where those who want to push harder can accelerate their careers faster than anywhere else. We're aiming to become Germany's second bootstrapped unicorn. Almedia is already Europe's #3 fastest-growing company in 2025 (FT1000).

We are building the future of marketing by rewarding our community of over 70 million users for engaging with our advertisers' products. We are offering a new way to acquire users for the biggest companies in the world.

Join our team as an Analytics Engineer, where you'll ensure our data is clean, accessible, and ready for analysis. As a core member of our analytics team, you'll ensure our data infrastructure effectively supports self-service analytics, insightful reporting, and business intelligence across the organisation.

---

## Key Responsibilities

- Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt.
- Apply software engineering practices to analytics code, including version control, testing, and continuous integration.
- Automate and streamline data validation, testing, and reporting processes.
- Take ownership of data analysis for a designated domain, collaborating closely with Product Analysts, Data Scientists, and Business Stakeholders to meet their analytical and reporting needs.
- Proactively monitor data integrity, identify issues, and perform root cause analysis.
- Maintain comprehensive data documentation and definitions for easy reference and understanding.
- Train business users on utilising the data platform and data visualisation tools effectively.

---

## Required Qualifications

- 2-4 years of experience as an Analytics Engineer, Data Analyst, or similar role.
- Experience in marketing analytics, with proficiency in SQL and Python.
- Understanding of data warehousing concepts, data modelling, and performance optimization.
- Knowledge of data validation, testing frameworks, and version control best practices (Git).
- Familiarity with modern data stacks (dbt, Snowflake/BigQuery/Redshift, Dagster/Airflow) and cloud data platforms (GCP, AWS).
- Ability to communicate complex analytical findings clearly and concisely to diverse audiences, influencing data-driven decisions.

---

## Preferred / Bonus Skills

- Passionate about transforming data into actionable insights.
- A detail-oriented problem-solver who excels in a collaborative environment.
- Eager to innovate and continuously improve data processes.

---

## Benefits

- Own Our Growth: All Berlin-based employees receive equity in Almedia.
- Scale With Almedia: Grow alongside a startup that has been profitable from day one.
- Central Berlin Office: Work from a fully-stocked modern office built for collaboration, accessible from all around Berlin.
- Other Benefits: Transport subsidy, breakfasts and lunches, language learning, Urban Sports Club, and more.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes testing, version control, CI, data integrity monitoring, and documentation, with no velocity signals like 'ship quickly' or 'fast-paced' present.

**Run 2:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes testing, version control, data validation, and continuous integration as core expectations, with no velocity language present.

**Run 3:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes testing, data quality, software practices, and documentation as core expectations with no velocity or speed-focused language.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "building the future of marketing by rewarding our community of over 70 million users for engaging with our advertisers' products"
> Verified: ✓ found in JD
> Reasoning: This is a marketing/user engagement platform with no mention of financial reporting, compliance, regulatory requirements, or audit obligations, indicating data errors affect business decisions but not regulatory or financial consequences.

**Run 2:** `moderate` ✓
> Quote: "ensure our data infrastructure effectively supports self-service analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ✓ found in JD
> Reasoning: The role supports business intelligence and marketing analytics decisions without explicit financial reporting, regulatory, or compliance language that would elevate risk to high.

**Run 3:** `moderate` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role serves business intelligence and marketing analytics without explicit financial reporting, compliance, or regulatory language, placing it in the moderate category typical of SaaS and marketing roles.

### collaboration_width
**Manual:** `4`

**Run 1:** `2` ✗
> Quote: "Product Analysts; Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Only two named role cohorts are explicitly mentioned as collaboration partners; 'Business Stakeholders' is generic and does not count.

**Run 2:** `2` ✗
> Quote: "Product Analysts, Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Two distinct named role cohorts are identified in the collaboration responsibilities; generic terms like 'Business Stakeholders' do not count.

**Run 3:** `2` ✗
> Quote: "Product Analysts, Data Scientists, and Business Stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only Product Analysts and Data Scientists are named as distinct partner functions; Business Stakeholders is a generic term that does not count as a named team.

⚠ **Disagreement**: manual=`4` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools appear in responsibilities (dbt, Snowflake, BigQuery, Dagster, Airflow) and the role assumes existing infrastructure to maintain and extend, consistent with a growing mid-stage team.

**Run 2:** `mid` ✓
> Quote: "As a core member of our analytics team, you'll ensure our data infrastructure effectively supports self-service analytics"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, SQL) appear in operational responsibilities, multiple data roles are implied, and infrastructure exists to be maintained and improved, suggesting a growing data function past early stage.

**Run 3:** `mid` ✓
> Quote: "collaborating closely with Product Analysts, Data Scientists, and Business Stakeholders to meet their analytical and reporting needs"
> Verified: ✓ found in JD
> Reasoning: The presence of specialized roles (Product Analysts, Data Scientists) and references to existing self-serve analytics infrastructure indicate a data function that is established and scaling, not in early stage.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about dbt and performance optimization indicates hiring manager input, but generic stakeholder collaboration language suggests recruiter additions.

**Run 2:** `hiring_manager` ✗
> Quote: "Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt. Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ⚠ NOT found verbatim
> Reasoning: The technical specificity of named tools (dbt, SQL, CI/CD, data validation frameworks) and clear understanding of daily work (monitor integrity, root cause analysis) indicate someone who has done this role wrote the responsibilities.

**Run 3:** `mixed` ✓
> Quote: "Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt. Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ⚠ NOT found verbatim
> Reasoning: The first responsibility shows technical specificity by naming dbt and engineering practices, but most other responsibilities rely on generic action verbs like maintain, ensure, and collaborate without context suggesting hands-on authorship.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary mission is building and maintaining the data platform and infrastructure that internal analytics consumers (analysts, data scientists, business users) rely on.

**Run 2:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-service analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and maintaining a self-serve data platform infrastructure for analytics consumers rather than serving a specific business function like product, finance, or commercial.

**Run 3:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary focus is on building and maintaining data infrastructure and enabling data consumers through self-serve analytics, not on serving commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Take ownership of data analysis for a designated domain"
> Verified: ✓ found in JD
> Reasoning: While ownership is stated, the scope is 'designated' by others, and the role executes responsibilities within that assigned domain rather than setting analytical direction.

**Run 2:** `execution` ✓
> Quote: "Take ownership of data analysis for a designated domain"
> Verified: ✓ found in JD
> Reasoning: While the role owns technical delivery within a scoped domain, most responsibilities are execution-oriented (apply practices, automate, maintain, train) rather than defining broader analytics strategy.

**Run 3:** `strategic` ✗
> Quote: "Take ownership of data analysis for a designated domain"
> Verified: ✓ found in JD
> Reasoning: The responsibility to take ownership and design/build data models indicates strategic direction-setting within a domain, rather than pure execution of direction set by others.

⚠ **LLM inconsistency**: runs gave ['execution', 'execution', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, coding assistants, agentic workflows, or AI-related skill expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or data infrastructure for AI systems; no AI skill is expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, or AI-ready data infrastructure in the responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration"
> Verified: ✓ found in JD
> Reasoning: Testing and data validation are framed as core responsibilities the candidate actively applies, not merely listed as tools in a requirements section.

**Run 2:** `responsibility` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration. Automate and streamline data validation, testing, and reporting processes."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing and data validation are framed as owned practices the candidate actively applies and automates, not as a tool or requirement they should possess.

**Run 3:** `responsibility` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a practice the candidate applies and owns as part of their responsibilities, not as a tool they use.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and issue response are concerns, but the role is primarily delivery-focused (design, build, maintain) rather than compliance or risk-driven.

**Run 2:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are concerns but framed in terms of integrity monitoring and root cause analysis rather than compliance, regulatory, or stakeholder trust language.

**Run 3:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and preventing data issues are present concerns, but there is no compliance, regulatory, or stakeholder-trust framing that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
