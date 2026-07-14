# Trace: 2026-06-22_scoot_senior-analyst-business-intelligence

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analyst, Business Intelligence — Scoot

**URL:** https://flyscoot.wd102.myworkdayjobs.com/ScootExternalCareers/job/Singapore-HQ/Senior-Analyst--Business-Intelligence_R0005764-1?source=LinkedIn
**Location:** Singapore HQ

---

## Key Responsibilities

- Execute dashboard implementation that meet end-user requirements.
- Maintain, and manage advanced reporting, analyses, dashboards, and other BI solutions.
- Responsible for the structure, quality, and management of large volumes of data from different sources within the business.
- Develop and utilize custom queries, stored procedures, and triggers to extract data from Microsoft SQL Server and Google BigQuery.
- Distil complex data into meaningful business insights to facilitate decision-making and forward planning.

---

## Required Qualifications

- Bachelor's degree in Data Analytics / Computer Science / Information Technology / Mathematics / Statistics.
- At least 2 years of working experience in developing dashboards using Tableau (Dashboard creation, report authoring, troubleshooting, data source management).
- At least 2 years of working experience in managing relational database system and writing complex SQL queries.
- Ability to understand and explain complex data and effective working as a liaison between technical and non-technical groups.
- Willingness to show initiative and take ownership of job responsibilities.
- Ability to handle multiple tasks and support special project needs simultaneously.

---

## Preferred / Bonus Skills

None explicitly listed.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | responsibility | 33% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: The explicit responsibility for 'quality and management' of data demonstrates a rigour-first orientation without any velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality and structure as core expectations with no velocity language, positioning this as a rigour-oriented role.

**Run 3:** `rigour` ✓
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, structure, and management as core expectations with no velocity language present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Distil complex data into meaningful business insights to facilitate decision-making and forward planning."
> Verified: ✓ found in JD
> Reasoning: The role serves business decision-making without explicit financial reporting or regulatory language, indicating moderate risk from data errors.

**Run 2:** `moderate` ✗
> Quote: "Distil complex data into meaningful business insights to facilitate decision-making and forward planning."
> Verified: ✓ found in JD
> Reasoning: Data errors affect business decisions without explicit regulatory, compliance, or financial reporting consequences.

**Run 3:** `moderate` ✗
> Quote: "Distil complex data into meaningful business insights to facilitate decision-making and forward planning"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect business decisions but the JD contains no financial reporting, regulatory, compliance, or audit language.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Ability to understand and explain complex data and effective working as a liaison between technical and non-technical groups."
> Verified: ✓ found in JD
> Reasoning: No distinct named partner teams or functions are explicitly identified; 'technical and non-technical groups' is too generic to count as named collaborators.

**Run 2:** `0` ✗
> Quote: "No named teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD references only generic 'end-user requirements' and 'technical and non-technical groups' without naming specific functions or teams.

**Run 3:** `0` ✗
> Quote: "effective working as a liaison between technical and non-technical groups"
> Verified: ✓ found in JD
> Reasoning: The JD references only generic collaboration with unspecified groups but does not name specific partner functions, teams, or departments.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Maintain, and manage advanced reporting, analyses, dashboards, and other BI solutions."
> Verified: ✓ found in JD
> Reasoning: The language emphasizes maintaining and managing existing infrastructure rather than building from scratch or being an established large-scale operation.

**Run 2:** `mid` ✗
> Quote: "Maintain, and manage advanced reporting, analyses, dashboards, and other BI solutions."
> Verified: ✓ found in JD
> Reasoning: The emphasis on maintaining and advancing existing BI infrastructure with named tools (Tableau, BigQuery, SQL Server) indicates an established but still-growing data function.

**Run 3:** `mid` ✗
> Quote: "Develop and utilize custom queries, stored procedures, and triggers to extract data from Microsoft SQL Server and Google BigQuery."
> Verified: ✓ found in JD
> Reasoning: Named tools and existing infrastructure mentioned in responsibilities indicate an established data function maintaining existing systems rather than building from zero.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Develop and utilize custom queries, stored procedures, and triggers to extract data from Microsoft SQL Server and Google BigQuery."
> Verified: ✓ found in JD
> Reasoning: Technical specificity about named tools and database operations (stored procedures, triggers) mixed with otherwise generic responsibility framing indicates mixed authorship.

**Run 2:** `mixed` ✗
> Quote: "Develop and utilize custom queries, stored procedures, and triggers to extract data from Microsoft SQL Server and Google BigQuery."
> Verified: ✓ found in JD
> Reasoning: Technical specificity about database work and tools appears alongside boilerplate action verbs like 'Maintain' and 'manage' that could apply to any BI role.

**Run 3:** `mixed` ✗
> Quote: "Develop and utilize custom queries, stored procedures, and triggers to extract data from Microsoft SQL Server and Google BigQuery."
> Verified: ✓ found in JD
> Reasoning: Specific technical details about tools and methods are mixed with generic action verbs like 'Execute dashboard implementation' and 'Distil complex data' typical of recruiter writing.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Distil complex data into meaningful business insights to facilitate decision-making and forward planning."
> Verified: ✓ found in JD
> Reasoning: The role builds and maintains the BI infrastructure (dashboards and reporting) that internal platform consumers rely on for decision-making.

**Run 2:** `internal_data` ✓
> Quote: "Maintain, and manage advanced reporting, analyses, dashboards, and other BI solutions."
> Verified: ✓ found in JD
> Reasoning: The primary responsibility is maintaining the analytics platform itself rather than serving a specific business function like finance, product, or commercial.

**Run 3:** `internal_data` ✓
> Quote: "Maintain, and manage advanced reporting, analyses, dashboards, and other BI solutions."
> Verified: ✓ found in JD
> Reasoning: The role focuses on maintaining the analytics infrastructure and BI platform itself rather than serving a specific commercial, product, or finance function.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Execute dashboard implementation that meet end-user requirements."
> Verified: ✓ found in JD
> Reasoning: The verb 'execute' indicates the role delivers against requirements rather than setting direction or defining strategy.

**Run 2:** `execution` ✓
> Quote: "Execute dashboard implementation that meet end-user requirements."
> Verified: ✓ found in JD
> Reasoning: All responsibilities use execution verbs and imply requirements come from elsewhere, with no strategic direction-setting expected.

**Run 3:** `execution` ✓
> Quote: "Execute dashboard implementation that meet end-user requirements."
> Verified: ✓ found in JD
> Reasoning: The verb 'Execute' indicates the role receives requirements from end-users and delivers against them, with scope and direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD makes no reference to AI tools, capabilities, or skills expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI tools, coding assistants, AI infrastructure, or machine learning in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, ML pipelines, or AI-ready data foundations anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: The role addresses data quality through structure and management rather than through testing frameworks, data contracts, or observability practices.

**Run 2:** `absent` ✗
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: While quality is mentioned, no testing framework, data contracts, or quality assurance practice is explicitly framed or owned by this role.

**Run 3:** `responsibility` ✗
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: The ownership verb 'Responsible for' combined with 'quality' indicates the candidate owns data quality management as a core responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['absent', 'absent', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames quality and data management as operational responsibilities without explicitly signaling concerns about preventing bad outcomes, failures, or compliance risks.

**Run 2:** `moderate` ✗
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: Operational data quality and reliability are clearly expected but secondary to the delivery and maintenance of dashboards, without regulatory or stakeholder-trust framing.

**Run 3:** `moderate` ✗
> Quote: "Responsible for the structure, quality, and management of large volumes of data from different sources within the business."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality management are concerns, but the JD lacks compliance, regulatory, or stakeholder-trust framing that would signal high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
