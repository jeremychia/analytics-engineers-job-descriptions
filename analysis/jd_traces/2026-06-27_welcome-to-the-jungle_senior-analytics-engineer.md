# Trace: 2026-06-27_welcome-to-the-jungle_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Welcome to the Jungle

**URL:** https://ats.welcometothejungle.com/board/welcome-to-the-jungle-Pg4eV6k/job/77956acb-458f-402a-8b1e-27675bb6f91b/details?igbTracker=926953053
**Location:** Paris (Hybrid)
**Date Posted:** 2026-06-27
**Salary:** €58,000 – €72,000 EUR

---

Senior Analytics Engineer
Permanent contract
Paris
Data
Hybrid
Salary: €58,000 – €72,000

The job


Application

Job details for Senior Analytics Engineer at Welcome to the Jungle

The role
The Senior Analytics Engineer (AE) at Welcome to the Jungle plays a crucial role at building up our data assets and consolidating existing ones. It's pivotal in the definition of setting up standards and guidelines for other data practitioners as well as applying the first levels of governance and participating at setting up the architecture direction.

This role is central in the data space of the company, allowing to work directly with the likes of Data Engineers (DE), Data Analyst (DA) or Data Scientists (DS). It also works closely to the different business functions.

Additionally, as a senior member of the team, they play a key role in developing more junior team members and implementing best practices.

The Analytics Engineer will work as part of the Data Platform team, regrouping both DE and AE specialists.

Our data stack
Overall, our stack is aligned with the standards of the modern data stack:

Snowflake as our Data Warehouse

dbt as our modeling tool

Airflow to manage our workflows

Rivery for our ingestions

Omni and Metabase for the Dashboarding and reporting needs

And some ad-hoc Python script

Key responsibilities
Bring-in your experience as a seasoned data specialist

Build-up our Data Warehouse by developing robust and efficient data pipelines and data models

Make our data ready to use by our end-users by setting up proper models in our BI tools and AI assistants

Interact with your data peers to advocate good practices among the practitioners

Ensure our data is well documented and well govern

Keep up to speed with the novelty of the sector

Support the use of our data by third party products (CRM, website, AI assistant…)

The ideal profile
You have at least 5 years of experience working in data and at least one previous experience as an Analytics Engineer (or other data modeling role)

You have a good understanding of the concepts of data warehouse modeling

You have a deep proficiency in SQL, including architecting scalable transformations and frameworks to handle enterprise-scale datasets

You have used dbt in a previous context

You have an experience with cloud-based data warehouses (Snowflake experience would be nice)

You have some experience using at least one BI tools such as Omni, Looker, Tableau, Power BI…

Experience using Python is a nice addition but not a requirement

Some experience working with AI in the context of a data team is a plus but not a hard requirement

Perks & benefits
4-day work week after your first month

5 weeks of paid vacation + 2 additional days

Flexible remote work (hybrid)

75% refund of Navigo Pass OR 20€ monthly allowance if you come to the office by any other means of transport (bike, on foot, etc.)"

Hiring steps
TA Interview

Case + Job Skills Interview

2 set of values interview

Best of luck !

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | mixed | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes governance, documentation, and standards with no velocity or iteration language.

**Run 2:** `rigour` ✓
> Quote: "It's pivotal in the definition of setting up standards and guidelines for other data practitioners as well as applying the first levels of governance and participating at setting up the architecture direction."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, standards, best practices, and documentation with no velocity language, establishing rigour as the primary orientation.

**Run 3:** `rigour` ✓
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (standards, guidelines, governance, documentation, best practices) throughout with zero velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Make our data ready to use by our end-users by setting up proper models in our BI tools and AI assistants"
> Verified: ✓ found in JD
> Reasoning: The role serves business users and external products rather than financial reporting or compliance functions, typical of moderate-risk SaaS/marketplace roles.

**Run 2:** `moderate` ✓
> Quote: "Make our data ready to use by our end-users by setting up proper models in our BI tools and AI assistants"
> Verified: ✓ found in JD
> Reasoning: This is standard SaaS business intelligence work affecting business decisions without regulatory or financial reporting consequences.

**Run 3:** `moderate` ✓
> Quote: "Make our data ready to use by our end-users by setting up proper models in our BI tools"
> Verified: ✓ found in JD
> Reasoning: Data supports business intelligence and operational decisions without regulatory, financial reporting, or compliance language that would signal high risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "work directly with the likes of Data Engineers (DE), Data Analyst (DA) or Data Scientists (DS)"
> Verified: ✓ found in JD
> Reasoning: Three distinct data roles explicitly mentioned as collaboration partners: Data Engineers, Data Analysts, and Data Scientists.

**Run 2:** `3` ✓
> Quote: "Data Engineers (DE); Data Analyst (DA); Data Scientists (DS)"
> Verified: ✓ found in JD
> Reasoning: Three distinct data functions are named as direct collaboration partners.

**Run 3:** `3` ✓
> Quote: "Data Engineers (DE), Data Analyst (DA) or Data Scientists (DS)"
> Verified: ✓ found in JD
> Reasoning: Three distinct named data functions explicitly listed as collaborators.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "building up our data assets and consolidating existing ones. It's pivotal in the definition of setting up standards and guidelines"
> Verified: ✓ found in JD
> Reasoning: The data function has existing infrastructure and tools but is in a growth phase establishing standards and governance.

**Run 2:** `mid` ✓
> Quote: "building up our data assets and consolidating existing ones"
> Verified: ✓ found in JD
> Reasoning: The team has established tools and infrastructure (Snowflake, dbt, Airflow) but is actively growing the function with governance still in early stages.

**Run 3:** `mid` ✓
> Quote: "The Analytics Engineer will work as part of the Data Platform team, regrouping both DE and AE specialists."
> Verified: ✓ found in JD
> Reasoning: Existing tools and infrastructure (Snowflake, dbt, Airflow) with multiple data roles and formalizing governance indicates an established function scaling, not building from scratch.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Build-up our Data Warehouse by developing robust and efficient data pipelines and data models"
> Verified: ✓ found in JD
> Reasoning: Responsibilities combine specific tool context (dbt, Snowflake, third-party integrations) with generic action verbs and boilerplate phrases like 'keep up to speed with the novelty.'

**Run 2:** `mixed` ✗
> Quote: "Build-up our Data Warehouse by developing robust and efficient data pipelines and data models"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific technical context (named tools, data warehouse work) mixed with generic action verbs (advocate good practices, keep up to speed).

**Run 3:** `mixed` ✗
> Quote: "Build-up our Data Warehouse by developing robust and efficient data pipelines and data models"
> Verified: ✓ found in JD
> Reasoning: Technical specificity (named stack, specific roles) present but mixed with generic boilerplate language lacking specific context, scale, or methodology.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Make our data ready to use by our end-users by setting up proper models in our BI tools and AI assistants"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building and maintaining the data infrastructure and platform that business users and external systems consume.

**Run 2:** `internal_data` ✓
> Quote: "Make our data ready to use by our end-users by setting up proper models in our BI tools"
> Verified: ✓ found in JD
> Reasoning: The role primarily enables data infrastructure and governance for internal consumption rather than serving commercial, product, or finance functions.

**Run 3:** `internal_data` ✓
> Quote: "The Analytics Engineer will work as part of the Data Platform team, regrouping both DE and AE specialists."
> Verified: ✓ found in JD
> Reasoning: Role is centered on building and maintaining data infrastructure that serves other data practitioners, not commercial, product, finance, or GTM teams.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "It's pivotal in the definition of setting up standards and guidelines for other data practitioners as well as applying the first levels of governance and participating at setting up the architecture direction"
> Verified: ✓ found in JD
> Reasoning: The role genuinely combines strategic responsibilities (setting standards, defining architecture) with execution (building pipelines, maintaining models).

**Run 2:** `mixed` ✓
> Quote: "It's pivotal in the definition of setting up standards and guidelines for other data practitioners as well as applying the first levels of governance and participating at setting up the architecture direction."
> Verified: ✓ found in JD
> Reasoning: The role sets strategic direction through standards and governance participation but also executes on implementation, creating a mixed autonomy pattern.

**Run 3:** `mixed` ✓
> Quote: "pivotal in the definition of setting up standards and guidelines for other data practitioners as well as applying the first levels of governance and participating at setting up the architecture direction"
> Verified: ✓ found in JD
> Reasoning: Role genuinely combines strategic direction-setting (defining standards, governance, architecture) with execution (building pipelines, supporting data use).

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Mentions of AI (supporting AI assistants, optional experience with AI) are vague and not requirements for the candidate's own AI skills.

**Run 2:** `none` ✗
> Quote: "Some experience working with AI in the context of a data team is a plus but not a hard requirement"
> Verified: ✓ found in JD
> Reasoning: AI experience is mentioned only as a vague, non-required nice-to-have with no description of specific AI skills the candidate must demonstrate.

**Run 3:** `none` ✗
> Quote: "Some experience working with AI in the context of a data team is a plus but not a hard requirement"
> Verified: ✓ found in JD
> Reasoning: Vague reference to AI experience is not a specific skill expectation; neither ai_user (personal AI tool usage) nor ai_enabler (building AI infrastructure) is clearly signaled.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance and documentation but contains no mention of testing frameworks, data contracts, or data quality responsibilities.

**Run 2:** `absent` ✗
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: Testing, data quality frameworks, data contracts, or observability practices are absent; the JD emphasizes governance and documentation instead.

**Run 3:** `absent` ✗
> Quote: "No testing framing signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: No mention of testing frameworks, data contracts, data quality practices, or observability anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability through governance and documentation, but this is secondary to the primary delivery mission of building data assets.

**Run 2:** `moderate` ✗
> Quote: "Ensure our data is well documented and well govern"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through governance and robust pipelines is valued, but there is no language about compliance, audit, or stakeholder trust exposure.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: JD is framed around building and developing capabilities; governance is mentioned as a setup activity rather than risk/compliance/reliability prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
