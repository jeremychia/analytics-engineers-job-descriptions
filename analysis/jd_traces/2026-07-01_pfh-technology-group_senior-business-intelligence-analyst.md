# Trace: 2026-07-01_pfh-technology-group_senior-business-intelligence-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Senior Business Intelligence Analyst — PFH Technology Group

**URL:** https://www.linkedin.com/jobs/view/4434967351/
**Location:** Dublin, County Dublin, Ireland (Hybrid)
**Date Posted:** 2026-07-01

---

Senior Business Intelligence Analyst at PFH Technology Group

Location: Dublin, County Dublin, Ireland (Hybrid)
Contract Type: Day Rate Contract (1-year Contract)
Start Date: ASAP
Seniority Level: Mid-Senior level
Employment Type: Contract
Job Function: Information Technology
Industry: Government Administration

Overview
PFH Technology is partnering with a Dublin-based client seeking an experienced Senior BI Analyst to support delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting.

Key Responsibilities
- Develop BI reports, dashboards, KPIs, and analytical solutions using Microsoft Fabric and SQL
- Perform data migration, validation, reconciliation, and quality analysis
- Analyze enterprise data to identify trends, anomalies, and data quality issues
- Produce ad hoc reports and data extracts for business, audit, and compliance
- Create data mappings, transformation rules, Data Management Plans, and technical documentation
- Support data governance, data modelling, data lineage, and data integration initiatives
- Collaborate with business and technical teams to deliver scalable, high-quality data solutions

Must-Have Skills & Experience
- 8+ years in Business Intelligence, Data Analysis, or Data Migration
- Hands-on Microsoft Fabric experience
- Strong SQL skills (SQL Server or relational databases)
- Experience with Power BI, Data Quality, Data Validation, Data Governance, and Data Modelling
- Excellent analytical, problem-solving, and stakeholder engagement skills
- Bachelor's degree in Computer Science, IT, or related discipline (preferred)
- Microsoft Fabric, Azure Data, Power BI, or Data Analytics certifications (desirable)

Additional Notes
No visa sponsorship available for this role. Referrals increase interview chances by 2x.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | moderate | high | 33% | ✓ |
| collaboration_width | 2 | 2 | 0 | 0 | 33% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | mixed | recruiter | recruiter | 33% | ✗ |
| stakeholder_orientation | mixed | internal_data | internal_data | mixed | 33% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | tool_listed | tool_listed | 33% | ✗ |
| loss_aversion_framing |  | high | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Perform data migration, validation, reconciliation, and quality analysis"
> Verified: ✓ found in JD
> Reasoning: Multiple quality, validation, governance, and testing signals with zero velocity language indicate rigour orientation.

**Run 2:** `rigour` ✓
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize governance, validation, quality analysis, and formal documentation (Data Management Plans) with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals including governance, data lineage, quality analysis, validation, reconciliation, and compliance dominate the responsibilities with no velocity language present.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Produce ad hoc reports and data extracts for business, audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Government administration sector with explicit audit and compliance language indicates high-risk regulatory environment.

**Run 2:** `moderate` ✗
> Quote: "Produce ad hoc reports and data extracts for business, audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Audit and compliance are mentioned in a government sector, but the JD frames these as secondary audiences rather than core financial or regulatory risk drivers.

**Run 3:** `high` ✓
> Quote: "Produce ad hoc reports and data extracts for business, audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Government administration sector combined with explicit audit and compliance reporting requirements indicates data errors directly affect regulatory compliance and governance.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Audit and compliance are named functional areas; 'business' is too generic to count as a distinct team.

**Run 2:** `0` ✗
> Quote: "Collaborate with business and technical teams"
> Verified: ✓ found in JD
> Reasoning: No named distinct teams or functions identified; only generic references to 'business' and 'technical teams' do not count as specific named partners.

**Run 3:** `0` ✗
> Quote: "Collaborate with business and technical teams to deliver scalable, high-quality data solutions"
> Verified: ✓ found in JD
> Reasoning: The JD mentions generic 'business and technical teams' but does not name specific functions like Finance, Product, Marketing, or other defined partner teams.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['2', '0', '0']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "supporting delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools in responsibilities (Microsoft Fabric, SQL) and platform migration work indicate established mid-stage data function undergoing transformation.

**Run 2:** `mid` ✗
> Quote: "support delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting"
> Verified: ✓ found in JD
> Reasoning: The organization has existing infrastructure being modernized and names specific tools in responsibilities, indicating a growing team at mid-stage rather than early-stage or fully mature.

**Run 3:** `mid` ✗
> Quote: "support delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure (Microsoft Fabric, Power BI) is named in responsibilities and being actively used and migrated, indicating an established team undergoing platform modernization.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Create data mappings, transformation rules, Data Management Plans, and technical documentation"
> Verified: ✓ found in JD
> Reasoning: Specific technical outputs (data mappings, transformation rules, Data Management Plans) mixed with generic collaboration language indicates both hiring manager and recruiter input.

**Run 2:** `recruiter` ✗
> Quote: "Develop BI reports, dashboards, KPIs, and analytical solutions using Microsoft Fabric and SQL"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs and boilerplate language without specific context, scale, methodology, or the detailed application knowledge a hiring manager would provide.

**Run 3:** `recruiter` ✗
> Quote: "Develop BI reports, dashboards, KPIs, and analytical solutions using Microsoft Fabric and SQL"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs without technical specificity, scale context, or details that only someone performing the role would include.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'recruiter']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `internal_data` ✗
> Quote: "supporting delivery of a modern enterprise data platform using Microsoft Fabric"
> Verified: ⚠ NOT found verbatim
> Reasoning: Core mission is building and maintaining data platform infrastructure; audit/compliance are secondary consumers.

**Run 2:** `internal_data` ✗
> Quote: "support delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting"
> Verified: ✓ found in JD
> Reasoning: The primary framing emphasizes supporting the data platform itself through governance, lineage, and infrastructure work; BI reporting is an output of platform focus rather than primary audience.

**Run 3:** `mixed` ✓
> Quote: "support delivery of a modern enterprise data platform using Microsoft Fabric, focusing on business intelligence, data analysis, migration, quality, governance, and reporting"
> Verified: ✓ found in JD
> Reasoning: The role balances internal data platform and governance work with business-facing BI and reporting responsibilities equally.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: Consistent support/deliver/perform language without strategic direction-setting verbs indicates role is execution-focused.

**Run 2:** `execution` ✓
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: The repeated use of 'support' indicates the role executes direction set by others rather than defining priorities or shaping analytics strategy.

**Run 3:** `execution` ✓
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: The word 'support' combined with absence of strategic verbs like 'define', 'own', or 'establish' indicates the role executes pre-scoped work within existing initiatives.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI infrastructure, or AI skills expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD makes no reference to AI tools, AI-assisted coding, or building data infrastructure for AI systems.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI skills, tools, or applications appears anywhere in the requirements or responsibilities section.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Perform data migration, validation, reconciliation, and quality analysis"
> Verified: ✓ found in JD
> Reasoning: Quality analysis is an owned responsibility in core duties with ownership language, not just listed as a tool.

**Run 2:** `tool_listed` ✗
> Quote: "Perform data migration, validation, reconciliation, and quality analysis"
> Verified: ✓ found in JD
> Reasoning: Data quality work is executed as part of responsibilities but framed as tactical execution rather than owning or defining quality standards and frameworks.

**Run 3:** `tool_listed` ✗
> Quote: "Experience with Power BI, Data Quality, Data Validation, Data Governance, and Data Modelling"
> Verified: ✓ found in JD
> Reasoning: Data quality and validation appear in the requirements list as skills needed without framing the candidate as owning or defining testing standards.

⚠ **Disagreement**: manual=`` vs LLM majority=`tool_listed`

⚠ **LLM inconsistency**: runs gave ['responsibility', 'tool_listed', 'tool_listed']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Produce ad hoc reports and data extracts for business, audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Government administration sector combined with explicit audit and compliance language throughout indicates regulatory compliance risk is primary concern.

**Run 2:** `moderate` ✗
> Quote: "Produce ad hoc reports and data extracts for business, audit, and compliance"
> Verified: ✓ found in JD
> Reasoning: Audit and compliance are mentioned in a government context with repeated quality and governance emphasis, but concerns are framed as operational reliability rather than preventing regulatory exposure or protecting stakeholder trust.

**Run 3:** `moderate` ✗
> Quote: "Support data governance, data modelling, data lineage, and data integration initiatives"
> Verified: ✓ found in JD
> Reasoning: Governance and data quality concerns are present but secondary to platform delivery; operational reliability is prioritized over preventing regulatory or trust-damaging failures.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']
