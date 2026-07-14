# Trace: 2026-06-27_perk_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Perk

**URL:** https://jobs.ashbyhq.com/Perk/58279f63-e490-4875-a2e2-c4573a596f52
**Location:** London; Barcelona
**Date Posted:** 2026-06-27

---

Analytics Engineer
Location
London; Barcelona

Address
London

Employment Type
Full time

Department
Data

Overview
Application
About Us

Perk (formerly TravelPerk) is the intelligent platform for travel and spend management. Built to tackle the time-consuming, manual work that gets in the way of real work, our tools automate everything from travel bookings to expenses, invoice processing, and more. By eliminating this shadow work that wastes hours, erodes morale, and saps innovation, we're on a mission to power real work, with real impact.

We're trusted by more than 10,000 companies worldwide, including Wise, On Running, Breitling, and Fabletics, and we're tackling the 7 hours of lost productivity per employee each week, a $1.7 trillion problem.

Founded in 2015, Perk has grown into a global company of more than 1,800 people across 12 offices globally, with headquarters in London and Boston. We combine innovation, control, and simplicity to transform how businesses work and how people feel at work.

At Perk, we're driven by our values, like being an owner, delivering a 7-star experience, and working as one team. We value curiosity, purpose, and mindset, not just knowledge, to unlock the power in your potential. Our talent team brings together leading minds from the travel and SaaS industries, representing over 70 countries. If you're excited about having a real impact and shaping how millions of people experience work, we'd love you on the team.

Visit www.perk.com to learn more.


Overview

This critical role sits at the intersection of Data Engineering and Data Analytics, focusing on transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users. The ideal candidate will possess a strong background in SQL, dbt, data modelling, ETL/ELT principles and experience with modern cloud data platforms.

Core Responsibilities

Develop and Maintain Transformation best practices in ELT Pipelines: Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models.

Data Modelling: Implement best-practice data modelling and software engineering techniques to ensure data structures are optimised for performance, accuracy, and ease of use in reporting and analytical applications (e.g. CI/CD, testing, lineage).

Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets. Establish and maintain documentation for all data transformations and models.

Collaboration: Work closely with Data Analysts and business users to understand their reporting needs and optimise data models to support their analytical use cases. Collaborate with Data Engineers on data ingestion strategies and platform optimisation.

Performance Optimisation: Tune and optimise SQL queries and data models to reduce latency and improve the performance of our data warehouse and downstream applications.

Tool Adoption: Champion the adoption of modern data stack tools and practices (e.g. Git, CI/CD).

Build scalable, compelling data visualisations in Looker that can be used by large teams.

Required Qualifications

Experience: 3+ years of experience in a data-focused role (e.g., Analytics Engineer, Data Analyst, BI Developer).

SQL Mastery: Expert-level proficiency in writing and optimising complex SQL queries.

Data Transformation Tooling: Hands-on experience with dbt (Data Build Tool) or similar data transformation frameworks is essential.

Data Warehousing: Experience working with cloud-based data warehouses such as Snowflake, Google BigQuery, or Amazon Redshift.

Data modelling: Solid understanding of data wareh…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 3 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | hiring_manager | 100% | ✗ |
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
> Quote: "Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals present (data quality, testing, reliability, CI/CD, documentation) with no velocity language anywhere in the JD.

**Run 2:** `rigour` ✓
> Quote: "Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: The JD extensively emphasizes data quality, testing, best practices, software engineering techniques, and reliability with no velocity signals, placing it firmly in the rigour category.

**Run 3:** `rigour` ✓
> Quote: "Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section is dominated by quality, testing, and reliability language with no velocity signals, establishing rigour as the primary orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "This critical role sits at the intersection of Data Engineering and Data Analytics, focusing on transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users."
> Verified: ✓ found in JD
> Reasoning: While framed as critical, the JD lacks explicit financial reporting, regulatory, or compliance language—it emphasizes business analytics delivery without high-risk sector framing.

**Run 2:** `moderate` ✓
> Quote: "transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making through data analytics but lacks explicit financial reporting, compliance, or regulatory language typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "This critical role sits at the intersection of Data Engineering and Data Analytics, focusing on transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users."
> Verified: ✓ found in JD
> Reasoning: Perk is a travel and expense management SaaS platform; data errors affect business decisions and operational reporting but lack explicit financial reporting, regulatory, or compliance consequences typical of high-risk domains.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Data Analysts; Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Two distinct named functions explicitly listed as collaboration partners in the responsibilities section.

**Run 2:** `2` ✓
> Quote: "Data Analysts; Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Two distinct named functions are identified—Data Analysts and Data Engineers—while business users is too generic to count as a named team.

**Run 3:** `3` ✗
> Quote: "Work closely with Data Analysts and business users to understand their reporting needs and optimise data models to support their analytical use cases. Collaborate with Data Engineers on data ingestion strategies and platform optimisation."
> Verified: ✓ found in JD
> Reasoning: Three distinct named collaborators are explicitly identified: Data Analysts, Data Engineers, and business users as collaboration partners.

⚠ **LLM inconsistency**: runs gave ['2', '2', '3']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Develop and Maintain Transformation best practices in ELT Pipelines: Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake)"
> Verified: ✓ found in JD
> Reasoning: Existing named tools in responsibilities (dbt, Snowflake, Looker) and multiple defined data roles indicate a growing team with established infrastructure, not early-stage or fully mature.

**Run 2:** `mid` ✓
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake)"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Snowflake, dbt) and focus on maintaining and optimizing existing transformation pipelines indicates a functioning data infrastructure being scaled and formalized.

**Run 3:** `mid` ✓
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models."
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Snowflake, Looker) appear in responsibilities with specific application context, multiple distinct data roles are implied, and the focus is on scaling and optimizing existing infrastructure.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models."
> Verified: ✓ found in JD
> Reasoning: Technical specificity about exact tools and their roles (dbt for transformations, Snowflake as warehouse platform) and precise application context reflects hands-on practitioner knowledge.

**Run 2:** `hiring_manager` ✗
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section contains specific technical context about exact tools (dbt, Snowflake, Looker), actual business problems (pipeline optimization, query tuning), and infrastructure that only someone performing the role would specify.

**Run 3:** `hiring_manager` ✗
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models."
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain technical specificity only from someone doing this work: named tools with precise context (dbt for transformations, Snowflake as warehouse), specific technical practices (CI/CD, testing, lineage), and concrete technical outcomes (reduce latency, performance optimization).

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "focusing on transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users"
> Verified: ✓ found in JD
> Reasoning: Role's core responsibility is building the data platform layer itself—data transformations, models, and infrastructure—serving internal analytics consumers rather than a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "Work closely with Data Analysts and business users to understand their reporting needs and optimise data models to support their analytical use cases."
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building data infrastructure that other analysts and business users consume as a platform, making internal data platform consumption the primary orientation.

**Run 3:** `internal_data` ✓
> Quote: "transforming raw data into high-quality, trustworthy, and easily consumable datasets and visualisations for business users."
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building data infrastructure and models that serve the data function itself (Data Analysts, Data Engineers) and internal business users through self-serve analytics platforms.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Work closely with Data Analysts and business users to understand their reporting needs and optimise data models to support their analytical use cases."
> Verified: ✓ found in JD
> Reasoning: Role responds to stakeholder-defined needs and operates within scoped technical responsibilities, rather than setting analytics strategy or direction.

**Run 2:** `execution` ✓
> Quote: "Design, develop, and maintain efficient and scalable workflows"
> Verified: ✓ found in JD
> Reasoning: Responsibilities focus on executing technical work within a defined scope (transformation pipelines, quality checks, query optimization) rather than setting strategic direction for how analytics is delivered.

**Run 3:** `execution` ✓
> Quote: "Design, develop, and maintain efficient and scalable workflows using tools like dbt to transform raw data loaded into our data warehouse (Snowflake) into clean, ready-to-use data models."
> Verified: ✓ found in JD
> Reasoning: The responsibility verbs are execution-oriented (develop, maintain, implement, write, tune, collaborate, champion adoption of tools) with no evidence that the role defines analytics strategy or direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding tools, AI-for-ML data infrastructure, or GenAI applications expected of the candidate anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI infrastructure requirements for the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, agentic workflows, GenAI applications, or AI-assisted productivity—no AI skill is expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets. Establish and maintain documentation for all data transformations and models."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing framed as core responsibility with ownership verbs 'Write' and 'Establish', not listed as a tool skill.

**Run 2:** `responsibility` ✗
> Quote: "Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as a direct responsibility the candidate owns with specific action verbs (write, ensure) rather than as tools listed in a requirements section.

**Run 3:** `responsibility` ✗
> Quote: "Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as an explicit responsibility where the candidate owns and defines the checks, scripts, and monitoring—not a tool listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "ensure the accuracy, completeness, and reliability of all transformed data assets"
> Verified: ✓ found in JD
> Reasoning: Reliability and data quality are central concerns, framed as professional capability delivery rather than compliance or regulatory risk prevention.

**Run 2:** `moderate` ✗
> Quote: "ensure the accuracy, completeness, and reliability of all transformed data assets"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data accuracy are emphasized concerns, but the framing addresses preventing pipeline failures and analytical errors rather than regulatory exposure or preventing bad data reaching decision-makers.

**Run 3:** `moderate` ✗
> Quote: "Data Quality and Testing: Write comprehensive data quality checks, tests, and monitoring scripts to ensure the accuracy, completeness, and reliability of all transformed data assets."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and preventing data quality failures are central concerns (entire dedicated responsibility section), but the fear is analytics errors and pipeline stability, not regulatory or compliance risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
