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
| jd_authorship | mixed | hiring_manager | mixed | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | strategic | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (testing, CI/CD, data validation, data integrity monitoring) throughout with no velocity language.

**Run 2:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Multiple explicit testing, quality, documentation, and integrity signals throughout responsibilities with no velocity language.

**Run 3:** `rigour` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize testing, continuous integration, and data integrity monitoring as core expectations, with no velocity-oriented language like 'fast-paced' or 'iteration speed'.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Marketing analytics supporting business intelligence and self-serve analytics without financial reporting, regulatory, or compliance language.

**Run 2:** `moderate` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Marketing analytics role affects business decisions but contains no regulatory, compliance, or financial reporting language.

**Run 3:** `moderate` ✓
> Quote: "ensure our data is clean, accessible, and ready for analysis"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business intelligence and marketing operations decisions without explicit regulatory or financial reporting consequences.

### collaboration_width
**Manual:** `4`

**Run 1:** `2` ✗
> Quote: "Product Analysts; Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Product Analysts and Data Scientists are the only explicitly named role cohorts; Business Stakeholders is generic.

**Run 2:** `2` ✗
> Quote: "Product Analysts; Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Product Analysts and Data Scientists are explicitly named role cohorts; Business Stakeholders is too vague per classification rules.

**Run 3:** `2` ✗
> Quote: "Product Analysts; Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Product Analysts and Data Scientists are explicitly named partner teams; 'Business Stakeholders' is too generic to count as a named team.

⚠ **Disagreement**: manual=`4` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt."
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt) and maintenance/scale language indicate an established function beyond early-stage.

**Run 2:** `mid` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Describes maintaining and scaling existing infrastructure with named tools (dbt, Snowflake, Dagster/Airflow) in responsibilities section.

**Run 3:** `mid` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools (dbt, Snowflake, Dagster/Airflow) in requirements and existing platform supporting multiple analytical use cases indicate a functioning but growing data function.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Take ownership of data analysis for a designated domain, collaborating closely with Product Analysts, Data Scientists, and Business Stakeholders to meet their analytical and reporting needs."
> Verified: ✓ found in JD
> Reasoning: Technical specificity about dbt, domain ownership, RCA methodology, and testing practices indicates hands-on experience.

**Run 2:** `mixed` ✓
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Specific technical practices (dbt, testing, version control) and methodologies suggest hiring manager input, mixed with generic collaboration language indicating recruiter additions.

**Run 3:** `mixed` ✓
> Quote: "Design, build, and maintain clean, scalable, and performance-optimised data models using SQL and dbt."
> Verified: ✓ found in JD
> Reasoning: Specific technical responsibilities (dbt, SQL, software engineering practices, root cause analysis) are combined with generic action verbs like 'collaborating with stakeholders' and 'training business users'.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: Role serves the data infrastructure and self-serve analytics platform for internal data consumers, not a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: Primary mission is supporting data platform and analytics infrastructure for internal consumers—analysts, data scientists, and business users.

**Run 3:** `internal_data` ✓
> Quote: "ensure our data infrastructure effectively supports self-serve analytics, insightful reporting, and business intelligence across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary purpose is building and maintaining the data platform for internal consumption by Product Analysts, Data Scientists, and business users.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Take ownership of data analysis for a designated domain"
> Verified: ✓ found in JD
> Reasoning: Ownership is scoped to 'a designated domain'—the domain is set by others, making this execution within defined bounds.

**Run 2:** `strategic` ✗
> Quote: "Take ownership of data analysis for a designated domain"
> Verified: ✓ found in JD
> Reasoning: Explicit 'Take ownership' of a defined domain shows strategic ownership and accountability for direction-setting within that scope.

**Run 3:** `execution` ✓
> Quote: "Take ownership of data analysis for a designated domain, collaborating closely with Product Analysts, Data Scientists, and Business Stakeholders to meet their analytical and reporting needs."
> Verified: ✓ found in JD
> Reasoning: Ownership is scoped to a designated domain and framed in terms of meeting others' defined needs rather than setting strategic direction for the analytics function.

⚠ **LLM inconsistency**: runs gave ['execution', 'strategic', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-ready data infrastructure, or expectation for the candidate to work with AI systems.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: JD contains no mention of AI tools, AI-ready data infrastructure, or AI workflows the candidate would engage with.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no reference to AI-assisted coding tools, AI-ready data foundations, or AI/ML pipeline considerations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Automate and streamline data validation, testing, and reporting processes."
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to own and automate testing processes as a core responsibility, not merely use testing tools.

**Run 2:** `responsibility` ✗
> Quote: "Apply software engineering practices to analytics code, including version control, testing, and continuous integration."
> Verified: ✓ found in JD
> Reasoning: Testing appears in responsibilities section with action verb 'Apply', indicating the candidate actively performs and owns testing practices.

**Run 3:** `responsibility` ✗
> Quote: "Automate and streamline data validation, testing, and reporting processes."
> Verified: ✓ found in JD
> Reasoning: Testing and data validation are framed as owned responsibilities with action verbs 'automate and streamline', not merely listed as required skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis."
> Verified: ✓ found in JD
> Reasoning: Risk language focuses on operational reliability and preventing data quality failures, not regulatory compliance or stakeholder trust.

**Run 2:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are clearly important but secondary to delivery mission; framing emphasizes incident response and integrity rather than regulatory risk or stakeholder trust prevention.

**Run 3:** `moderate` ✗
> Quote: "Proactively monitor data integrity, identify issues, and perform root cause analysis."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are emphasized through monitoring and root cause analysis, but without explicit risk/compliance/stakeholder trust language that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
