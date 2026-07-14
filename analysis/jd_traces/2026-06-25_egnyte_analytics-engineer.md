# Trace: 2026-06-25_egnyte_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Egnyte

**URL:** https://jobs.jobvite.com/egnyte/job/oNOlzfwf
**Location:** Poznań, Poland (Remote option available)
**Date:** 2026-06-25

---

Analytics Engineer
Company: Egnyte
Location: Poznań, Poland (Remote option available)
Department: Data Analytics

About the Company:
Egnyte is "the secure multi-cloud platform for content security and governance" established in 2008, serving over 22,000 organizations. The company emphasizes organizational values including invested relationships, fiscal prudence, and candid conversations.

Key Responsibilities:
- Design and build data transformation pipelines
- Develop dbt semantic layer architecture
- Collaborate across departments on data strategy
- Manage CI/CD processes
- Create test cases for data accuracy
- Document data models
- Address data quality issues

Required Qualifications:
- Deep dbt expertise
- Extensive SQL proficiency
- BigQuery experience
- 3+ years in data-related roles
- Test automation tools experience
- Git proficiency
- Agile team collaboration
- Familiarity with Terraform and visualization platforms like Tableau or Power BI

Benefits:
- Competitive salary
- 50TB lifetime Egnyte cloud storage access
- Monthly wellness choices (MultiSport cards or gift cards)
- Private healthcare
- In-house English instruction

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
| jd_authorship | mixed | mixed | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | mixed | mixed | execution | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, CI/CD processes, and data quality as core expectations, with no velocity or shipping language present.

**Run 2:** `rigour` ✓
> Quote: "Create test cases for data accuracy; Manage CI/CD processes"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, CI/CD management, documentation, and data quality assurance with zero velocity language, indicating a rigour-focused orientation.

**Run 3:** `rigour` ✓
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (testing, CI/CD, documentation, quality assurance) dominate the responsibilities with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design and build data transformation pipelines"
> Verified: ✓ found in JD
> Reasoning: This is a standard SaaS analytics infrastructure role with no explicit financial reporting, compliance, or regulatory language in the responsibilities.

**Run 2:** `moderate` ✓
> Quote: "secure multi-cloud platform for content security and governance"
> Verified: ✓ found in JD
> Reasoning: The company operates in governance and security but the JD contains no explicit financial, regulatory, or compliance language, indicating moderate rather than high risk.

**Run 3:** `moderate` ✓
> Quote: "secure multi-cloud platform for content security and governance"
> Verified: ✓ found in JD
> Reasoning: While the company operates in security and governance, the JD responsibilities lack explicit financial reporting, regulatory compliance, or audit language that would indicate high domain risk.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "Collaborate across departments on data strategy"
> Verified: ✓ found in JD
> Reasoning: The JD mentions cross-functional collaboration but does not name any specific teams, functions, or partner groups.

**Run 2:** `0` ✓
> Quote: "Collaborate across departments on data strategy"
> Verified: ✓ found in JD
> Reasoning: The JD mentions generic collaboration language but does not identify any named partner teams such as Finance, Product, Engineering, or Data Science.

**Run 3:** `0` ✓
> Quote: "Collaborate across departments on data strategy"
> Verified: ✓ found in JD
> Reasoning: Collaboration is described generically as 'across departments' without naming specific functions such as Finance, Product, or Engineering.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The role develops new semantic layer capabilities on top of existing named tools (dbt, BigQuery, CI/CD), indicating an established data team in growth phase.

**Run 2:** `mid` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The JD names specific tools (dbt, BigQuery, Terraform) in responsibilities rather than just requirements, indicating existing infrastructure that the role will develop and extend.

**Run 3:** `mid` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The presence of named tools in responsibilities (dbt, BigQuery, CI/CD) applied in context indicates an established data function extending and improving existing infrastructure rather than building from zero.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: Specific technical language (dbt semantic layers, BigQuery, CI/CD) indicates hiring manager input, while generic phrases like "Collaborate across departments" and "Agile team collaboration" indicate recruiter involvement.

**Run 2:** `mixed` ✓
> Quote: "Develop dbt semantic layer architecture; Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: The JD contains technical specificity (dbt semantic layer architecture, CI/CD processes) alongside generic action verbs, suggesting input from both hiring manager and recruiter.

**Run 3:** `recruiter` ✗
> Quote: "Collaborate across departments on data strategy; Manage CI/CD processes; Address data quality issues"
> Verified: ✓ found in JD
> Reasoning: Responsibilities rely on generic action verbs and boilerplate language without the specific technical context (scale, volumes, methodology application) that only a hiring manager would know.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data infrastructure (transformation pipelines, semantic layers, models) for internal data consumers rather than external commercial or business stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The responsibilities focus on data infrastructure, semantic modeling, documentation, and data quality testing—all serving internal data consumers rather than commercial or business stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data infrastructure and self-serve analytics foundations for internal data consumers and the analytics platform itself.

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Design and build data transformation pipelines"
> Verified: ✓ found in JD
> Reasoning: Strategic ownership of technical direction (designing and building pipelines, developing architecture) is balanced by "Collaborate across departments on data strategy," indicating decisions happen within a collaborative framework.

**Run 2:** `mixed` ✗
> Quote: "Develop dbt semantic layer architecture"
> Verified: ✓ found in JD
> Reasoning: The role includes strategic ownership of the semantic layer architecture combined with operational execution tasks (managing CI/CD, creating tests, documenting models).

**Run 3:** `execution` ✓
> Quote: "Design and build data transformation pipelines"
> Verified: ✓ found in JD
> Reasoning: While the role includes design tasks, the overall framing is execution-oriented: delivering against predefined responsibilities rather than setting strategic direction or shaping analytics delivery.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no requirements for candidate AI skills, AI coding tools, or AI-enabled data work.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or AI-ready data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, LLMs, agentic workflows, or AI-enabled infrastructure; no AI skill is expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a core responsibility the candidate owns ("Create test cases") rather than as a tool requirement.

**Run 2:** `responsibility` ✗
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a responsibility the candidate owns ('Create test cases'), not merely as a tool to be familiar with.

**Run 3:** `responsibility` ✗
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an owned responsibility with the action verb 'create', indicating the candidate is accountable for defining and implementing the testing practice.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Create test cases for data accuracy"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are explicit concerns through testing and CI/CD management, but the primary role framing is delivery and capability building rather than compliance or catastrophic risk prevention.

**Run 2:** `moderate` ✗
> Quote: "Create test cases for data accuracy; Address data quality issues"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data accuracy concerns but lacks compliance, regulatory, or stakeholder-trust language that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Create test cases for data accuracy; Address data quality issues"
> Verified: ✓ found in JD
> Reasoning: Data accuracy and quality appear as operational reliability concerns secondary to delivery, without regulatory, compliance, or stakeholder-trust language that would elevate to high loss aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
