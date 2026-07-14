# Trace: 2026-07-01_emagine_senior-bi-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Senior BI Analyst — emagine

**URL:** https://portal.emagine.org/jobs/178078/senior-bi-analyst
**Location:** Not stated in JD
**Date Posted:** 2026-07-01

---

Senior BI Analyst at emagine

Department: Data & Analytics
Sector: Government
Job ID: #316289
Start date: 02.11.2026
Duration: > 12 months
Language: English/Full professional
Seniority: Senior

About emagine
emagine is a dynamic, fast-growing international consulting and technology company, founded on real-world experience, focused on custom-fit solutions. We have the proven people and expertise to complete complex projects, while delivering lasting knowledge-transfer benefits to empower our partners for the next challenge.

Key Responsibilities as BI Analyst:
- Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases.
- Monitor and analyze data quality, integrity, and processing logs, identifying issues and collaborating with technical teams to resolve them.
- Produce ad hoc analytical reports and data extracts to support inspections, audits, data validation, and the investigation of data defects.
- Assist in identifying, analyzing, and investigating data issues, and contribute to testing and resolution processes.
- Collaborate with project teams to deliver business and technical documentation, including data mapping and transformation rules.
- Support the design of data migration and integration processes, ensuring data quality and availability.
- Analyze data across SQL and other enterprise platforms to support operational use cases.
- Develop Data Management Plans, including governance, data flows, and controls.
- Contribute to the design and documentation of logical and physical data models.

Key Requirements:
- Proven experience in data analysis, quality assessment, validation, reconciliation, and anomaly detection.
- Experience in supporting or coordinating data testing and validation processes.
- Ability to analyze data processing outputs to identify issues and trends.
- Experience in producing ad hoc reports and data extracts for operational requirements.
- Skilled in interpreting data and presenting findings to stakeholders.
- Experience in developing technical documentation, including data mappings and transformation logic.
- Understanding logical and physical data models and documenting them appropriately.
- Experience querying and analyzing data using SQL.
- Strong analytical and problem-solving skills with attention to detail.

Nice to Have:
- Familiarity with data governance frameworks.
- Experience in integrating data from multiple sources.
- Knowledge of data lineage and process mappings.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | mixed | internal_data | finance | internal_data | 33% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: Responsibilities are dominated by quality, testing, validation, governance, and compliance language with zero velocity signals.

**Run 2:** `rigour` ✓
> Quote: "Monitor and analyze data quality, integrity, and processing logs, identifying issues and collaborating with technical teams to resolve them."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, integrity monitoring, validation, testing, and governance as core expectations with no velocity or iteration-speed signals present.

**Run 3:** `rigour` ✓
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: The entire responsibility section emphasizes data quality, testing, validation, integrity, governance, and controls—rigour signals appear 6+ times with no competing velocity language.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "supporting inspections, audits, data validation, and the investigation of data defects"
> Verified: ⚠ NOT found verbatim
> Reasoning: Government sector combined with explicit audit and governance signals indicates data errors directly affect regulatory compliance oversight.

**Run 2:** `high` ✓
> Quote: "Produce ad hoc analytical reports and data extracts to support inspections, audits, data validation, and the investigation of data defects."
> Verified: ✓ found in JD
> Reasoning: Explicit focus on audits and inspections in a government sector role indicates data errors have direct regulatory and compliance consequences.

**Run 3:** `high` ✓
> Quote: "supporting inspections, audits, data validation, and the investigation of data defects"
> Verified: ⚠ NOT found verbatim
> Reasoning: Government sector combined with explicit audit and inspection requirements signals regulatory or compliance oversight where data errors have direct governance impact.

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Collaborate with project teams; Collaborate with technical teams"
> Verified: ⚠ NOT found verbatim
> Reasoning: Only generic team references without named functions like Finance, Product, Engineering, or Operations.

**Run 2:** `0` ✗
> Quote: "None identified"
> Verified: ✓ found in JD
> Reasoning: The JD mentions generic collaboration with 'project teams' and 'technical teams' but does not name specific functions like Finance, Engineering, Product, or other named partner teams.

**Run 3:** `0` ✗
> Quote: "No named teams; only generic references to 'technical teams' and 'project teams'"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD references collaboration partners only in generic terms ('project teams', 'technical teams', 'stakeholders') with no named functions like Finance, Product, Engineering, or specific team labels.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Analyze data across SQL and other enterprise platforms to support operational use cases."
> Verified: ✓ found in JD
> Reasoning: Named platforms indicate established infrastructure exists, but support-oriented framing suggests growth and modernization phase rather than mature scale.

**Run 2:** `mid` ✗
> Quote: "Support the design of data migration and integration processes, ensuring data quality and availability."
> Verified: ✓ found in JD
> Reasoning: The role supports existing migration and data pipeline infrastructure rather than building from zero, and uses contribution and support verbs rather than defining foundational capabilities, suggesting an established function requiring coordination.

**Run 3:** `mid` ✗
> Quote: "supporting migration and ongoing data pipeline releases"
> Verified: ✓ found in JD
> Reasoning: Existing named infrastructure (SQL, pipelines, data models) indicates established function, but focus on validation, testing, and governance suggests systems exist but require stabilization and improvement rather than mature, fully-scaled operation.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `recruiter` ✗
> Quote: "Assist in identifying, analyzing, and investigating data issues, and contribute to testing and resolution processes."
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and boilerplate phrasing lack specific context about tools, scale, or how methodologies are applied in practice.

**Run 2:** `recruiter` ✗
> Quote: "Assist in identifying, analyzing, and investigating data issues, and contribute to testing and resolution processes."
> Verified: ✓ found in JD
> Reasoning: The responsibilities rely on generic action verbs (assist, contribute, coordinate, support) that could apply to any data role, with no named tools beyond SQL, no scale/volume metrics, and no specific methodologies indicating hands-on authorship.

**Run 3:** `recruiter` ✗
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: Generic action verb structure ('Coordinate', 'Support', 'Assist', 'Contribute') and lack of concrete context about specific tools, data volumes, or domain-specific challenges indicates recruiter rather than hiring manager authorship.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `internal_data` ✗
> Quote: "Develop Data Management Plans, including governance, data flows, and controls."
> Verified: ✓ found in JD
> Reasoning: Role primarily supports data infrastructure, governance frameworks, and validation rather than serving business functions like sales, product, or finance.

**Run 2:** `finance` ✗
> Quote: "Produce ad hoc analytical reports and data extracts to support inspections, audits, data validation, and the investigation of data defects."
> Verified: ✓ found in JD
> Reasoning: The explicit focus on supporting audits and inspections in a government sector context indicates the primary stakeholder is the audit and compliance function.

**Run 3:** `internal_data` ✗
> Quote: "Develop Data Management Plans, including governance, data flows, and controls."
> Verified: ✓ found in JD
> Reasoning: The role is primarily focused on data platform reliability, governance, quality assurance, and documentation—serving data consumers and the data function rather than external commercial, product, or finance audiences.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'finance', 'internal_data']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support the design of data migration and integration processes, ensuring data quality and availability."
> Verified: ✓ found in JD
> Reasoning: "Support" framing indicates execution of scoped project work rather than strategic direction-setting or organizational priorities.

**Run 2:** `execution` ✓
> Quote: "Support the design of data migration and integration processes, ensuring data quality and availability."
> Verified: ✓ found in JD
> Reasoning: The role uses primarily execution verbs (support, contribute, assist, coordinate) indicating the candidate receives scoped work and delivers it rather than setting strategic direction.

**Run 3:** `execution` ✓
> Quote: "Coordinate and execute data validation and acceptance testing activities"
> Verified: ✓ found in JD
> Reasoning: Execution verbs throughout ('execute', 'support', 'assist', 'contribute') indicate the role delivers scoped work defined by others rather than setting strategic direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: JD contains no mention of AI tools, agentic workflows, or data infrastructure for AI systems.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no reference to AI tools, skills, or capabilities the candidate should demonstrate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, coding assistants, or data infrastructure for AI systems anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are owned core responsibilities with action verbs indicating accountability, not tools listed in a requirements section.

**Run 2:** `responsibility` ✗
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: Data validation and testing are framed as responsibilities the candidate coordinates and executes, indicating some accountability for the practice rather than just listing testing tools.

**Run 3:** `responsibility` ✗
> Quote: "Coordinate and execute data validation and acceptance testing activities, supporting migration and ongoing data pipeline releases."
> Verified: ✓ found in JD
> Reasoning: Testing and validation are actively executed and coordinated by this role—a named responsibility with action ownership rather than a tool listed in a skills matrix.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "supporting inspections, audits, data validation, and the investigation of data defects"
> Verified: ⚠ NOT found verbatim
> Reasoning: Audit and governance concerns are present in government consulting context, but role is framed as supporting compliance operations rather than preventing catastrophic business consequences.

**Run 2:** `high` ✗
> Quote: "Produce ad hoc analytical reports and data extracts to support inspections, audits, data validation, and the investigation of data defects."
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally structured around preventing data errors from reaching compliance stakeholders, with explicit framing around audits, investigations, and quality assurance in a regulatory government context.

**Run 3:** `high` ✗
> Quote: "Develop Data Management Plans, including governance, data flows, and controls."
> Verified: ✓ found in JD
> Reasoning: Government sector combined with repeated emphasis on audits, governance, integrity, and controls indicates that regulatory compliance and stakeholder trust are core concerns rather than secondary operational reliability.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']
