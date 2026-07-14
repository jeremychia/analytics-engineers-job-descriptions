# Trace: 2026-07-02_gerolsteiner_data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data & Analytics Engineer (m/w/d) — Gerolsteiner Brunnen GmbH & Co. KG

**URL:** https://gerolsteiner.softgarden.io/job/65116063/Data-Analytics-Engineer-m-w-d-?jobDbPVId=274846393&l=de
**Location:** Gerolstein, Germany
**Date Posted:** 2026-07-02

---

# Data & Analytics Engineer (m/w/d)

Company: Gerolsteiner Brunnen GmbH & Co. KG
Location: Gerolstein, Eifel region (Vulkanring 54567 Gerolstein), Germany
Salary: Not stated

## Responsibilities
The role encompasses developing and maintaining data models, queries, and views in SAP environments. Key duties include creating and optimizing reports, stories, and planning content within SAP Analytics Cloud and advancing existing Business Warehouse implementations. The engineer will integrate new data sources via Business Data Cloud and develop analytics solutions using Azure Databricks, including Power BI reports and dashboards. Additional responsibilities involve processing IoT and market data, unifying SAP and non-SAP system data, and supporting AI-driven analytics expansion.

## Requirements
Candidates need a completed IT degree or equivalent qualification with minimum two years' experience supporting SAP modules in manufacturing settings. Required expertise includes SAP Analytics covering modules like BW, BW/4HANA, SAC, or Datasphere. Additional prerequisites include proficiency with data modeling, reporting structures, and familiarity with artificial intelligence and machine learning concepts. Preferred qualifications involve prior exposure to SAP Business Data Cloud and programming skills in ABAP or Python. The ideal candidate demonstrates structured work habits, analytical thinking, teamwork capacity, and fluency in German and English.

## Benefits
The company offers hybrid flexible work arrangements, competitive compensation with social benefits, appreciative workplace culture, team events, professional development opportunities, and complimentary beverages at the office and for home use.

Contact: Ann-Kathrin Lux (ann-kathrin.lux@gerolsteiner.com)

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | mixed | 33% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "The role encompasses developing and maintaining data models, queries, and views in SAP environments."
> Verified: ✓ found in JD
> Reasoning: The opening responsibility frames the role around maintaining and developing structured data infrastructure, with no velocity signals (fast-paced, ship quickly, iteration speed) present anywhere in the JD.

**Run 2:** `rigour` ✗
> Quote: "developing and maintaining data models, queries, and views in SAP environments"
> Verified: ✓ found in JD
> Reasoning: The emphasis on 'maintaining' and 'optimizing' existing systems signals careful stewardship over speed-to-delivery orientation.

**Run 3:** `rigour` ✗
> Quote: "creating and optimizing reports, stories, and planning content within SAP Analytics Cloud"
> Verified: ✓ found in JD
> Reasoning: Optimization of reporting—combined with the structured, process-oriented context of a traditional manufacturing company—indicates quality and efficiency focus characteristic of rigour over rapid iteration.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "processing IoT and market data, unifying SAP and non-SAP system data"
> Verified: ✓ found in JD
> Reasoning: The role handles operational and market data in a beverage manufacturing context with no explicit financial reporting, regulatory, or compliance language, placing consequences at the business decision level rather than regulatory or financial reporting risk.

**Run 2:** `moderate` ✓
> Quote: "creating and optimizing reports, stories, and planning content within SAP Analytics Cloud"
> Verified: ✓ found in JD
> Reasoning: The role focuses on operational analytics for a manufacturing company, supporting business decisions without explicit financial reporting, compliance, or regulatory requirements.

**Run 3:** `moderate` ✓
> Quote: "processing IoT and market data, unifying SAP and non-SAP system data"
> Verified: ✓ found in JD
> Reasoning: Operational data processing for manufacturing and market decisions affects business operations and stakeholder decisions but not financial reporting or regulatory compliance directly.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "No named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD describes responsibilities without naming any distinct partner functions, teams, or stakeholder groups that the role collaborates with.

**Run 2:** `0` ✓
> Quote: "teamwork capacity"
> Verified: ✓ found in JD
> Reasoning: While 'teamwork capacity' is listed as a valued quality, no specific partner teams or functions are named as collaborators.

**Run 3:** `0` ✓
> Quote: "developing and maintaining data models, queries, and views in SAP environments"
> Verified: ✓ found in JD
> Reasoning: The responsibilities describe individual technical deliverables with no named stakeholder teams, partner functions, or role cohorts explicitly mentioned.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "advancing existing Business Warehouse implementations"
> Verified: ✓ found in JD
> Reasoning: The role involves extending and optimizing established infrastructure (SAP Analytics, Business Warehouse, Azure Databricks, Power BI) rather than building from greenfield or managing a mature large-scale operation.

**Run 2:** `mid` ✓
> Quote: "advancing existing Business Warehouse implementations"
> Verified: ✓ found in JD
> Reasoning: The phrase 'advancing existing' indicates established foundational infrastructure being expanded and improved rather than building from zero or a fully mature, specialized operation.

**Run 3:** `mid` ✓
> Quote: "advancing existing Business Warehouse implementations"
> Verified: ✓ found in JD
> Reasoning: The emphasis on advancing and extending existing SAP BI infrastructure indicates an established data function at scale, moving beyond early-stage but not yet mature.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "integrate new data sources via Business Data Cloud and develop analytics solutions using Azure Databricks, including Power BI reports and dashboards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific product-level technical details (Business Data Cloud, Azure Databricks, Power BI) and methodological context that only someone actively working with these systems would write.

**Run 2:** `mixed` ✗
> Quote: "develop analytics solutions using Azure Databricks, including Power BI reports and dashboards"
> Verified: ✓ found in JD
> Reasoning: Specific tool naming (Azure Databricks, Power BI) and SAP module differentiation suggest technical input, but vague applications like 'analytics solutions' suggest recruiter contribution.

**Run 3:** `mixed` ✗
> Quote: "integrate new data sources via Business Data Cloud and develop analytics solutions using Azure Databricks"
> Verified: ✓ found in JD
> Reasoning: Specific tool names (Business Data Cloud, Azure Databricks) suggest hiring manager input, but generic responsibility framing without scale, methodology, or business context indicates recruiter templating.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "developing and maintaining data models, queries, and views in SAP environments... integrate new data sources via Business Data Cloud"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary focus is building and maintaining data infrastructure (models, warehousing, integration) that serves the analytics function itself rather than commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "developing and maintaining data models, queries, and views in SAP environments"
> Verified: ✓ found in JD
> Reasoning: Responsibilities center on data infrastructure, modeling, and integration serving the data function itself rather than directly supporting commercial, product, or finance stakeholders.

**Run 3:** `mixed` ✗
> Quote: "developing and maintaining data models, queries, and views in SAP environments. Key duties include creating and optimizing reports, stories, and planning content within SAP Analytics Cloud"
> Verified: ✓ found in JD
> Reasoning: The role combines data infrastructure development (internal_data audience) and business analytics delivery (finance/planning and commercial/operations audiences), with no clear primary emphasis.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "advancing existing Business Warehouse implementations"
> Verified: ✓ found in JD
> Reasoning: The role is framed around delivering enhancements to existing systems set by others rather than defining strategy, owning direction, or shaping how analytics is delivered.

**Run 2:** `execution` ✓
> Quote: "develop analytics solutions using Azure Databricks, including Power BI reports and dashboards"
> Verified: ✓ found in JD
> Reasoning: Verbs throughout are execution-focused ('develop', 'create', 'integrate', 'maintain') with no framing of strategic direction-setting or defining analytics approach.

**Run 3:** `execution` ✓
> Quote: "supporting AI-driven analytics expansion"
> Verified: ✓ found in JD
> Reasoning: The verb 'supporting' indicates execution of strategic initiatives directed by others, not ownership of strategic direction or priorities.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions 'supporting AI-driven analytics expansion' and requires 'familiarity with artificial intelligence and machine learning concepts' but neither specifies what the candidate must actually do with AI—no signals for using AI tools personally (ai_user) or building AI-ready infrastructure (ai_enabler).

**Run 2:** `none` ✗
> Quote: "familiarity with artificial intelligence and machine learning concepts"
> Verified: ✓ found in JD
> Reasoning: The requirement for 'familiarity' is vague awareness language rather than expectation of active AI tool usage or AI infrastructure building by the candidate.

**Run 3:** `none` ✗
> Quote: "familiarity with artificial intelligence and machine learning concepts"
> Verified: ✓ found in JD
> Reasoning: Vague familiarity language without specific indication of using AI tools for personal productivity or building AI-ready data infrastructure indicates no specific AI skill expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of testing frameworks, data quality practices, data contracts, observability, or quality ownership.

**Run 2:** `absent` ✗
> Quote: "processing IoT and market data, unifying SAP and non-SAP system data, and supporting AI-driven analytics expansion"
> Verified: ✓ found in JD
> Reasoning: No mention of data quality, testing frameworks, data contracts, observability, or reliability appears anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "developing and maintaining data models, queries, and views in SAP environments"
> Verified: ✓ found in JD
> Reasoning: No testing, data quality, observability, or data contract frameworks appear anywhere in the responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in neutral delivery and capability terms (developing, maintaining, optimizing, advancing) with no language around risk, compliance, reliability, or preventing bad outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely around technical capability delivery and execution with no reference to risk, compliance, reliability requirements, or preventing bad outcomes.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The role is framed entirely in technical capability and delivery terms with no emphasis on compliance, reliability, preventing bad data, or building stakeholder trust.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
