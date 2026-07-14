# Trace: 2026-07-01_too-good-to-go_bi-developer

## JD text (fed to classifier, Layer B stripped)

```
# BI Developer — Too Good To Go

**URL:** https://www.linkedin.com/jobs/view/4431962529/
**Location:** Copenhagen, Denmark (Hybrid)
**Date Posted:** 2026-07-01

---

BI Developer (12 Month FTC) at Too Good To Go

Location: Copenhagen Municipality, Capital Region of Denmark, Denmark
Employment Type: Fixed-term contract (12 months)
Seniority Level: Mid-Senior level
Team: Parcels Planning

Role Summary
Too Good To Go seeks a BI Developer for their Parcels Planning team. The role focuses on designing the reporting architecture, semantic models and data foundations to enable business scaling over 18-24 months.

Main Responsibilities
- Own technical design and development of BI products and semantic models
- Design performant LookML models, Explores and dashboards
- Partner with Data Engineering teams on data optimisation
- Replace manual reporting and Google Sheets processes with scalable solutions
- Improve data governance through clear definitions and reusable logic

Key Requirements
- BI Engineering or Analytics Engineering experience with semantic modelling expertise
- Strong Looker and LookML proficiency (or equivalent BI tools)
- Dashboard/reporting experience for commercial, finance, or logistics teams
- Dimensional data modelling skills
- Experience with governed reporting environments
- Ability to translate business problems into reporting solutions

Benefits
Flexible hybrid work, enhanced parental leave, health insurance, pension plans, social events, and involvement in employee resource groups focused on diversity and inclusion.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 4 | 4 | 1 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | mixed | mixed | 33% | ✗ |
| autonomy_level | strategic | mixed | strategic | execution | 0% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasise governance, clear definitions, and performant architecture as core expectations over an 18-24 month timeline, with no speed or iteration-oriented language.

**Run 2:** `rigour` ✓
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance and data quality through reusable architecture rather than speed or shipping pace.

**Run 3:** `rigour` ✓
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance, clear definitions, performance, and sustainable solutions rather than speed or rapid iteration.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Dashboard/reporting experience for commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: While finance is mentioned as an audience, the JD frames this as reporting and decision-support rather than financial reporting, regulatory compliance, or mission-critical systems.

**Run 2:** `moderate` ✓
> Quote: "Dashboard/reporting experience for commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: While finance teams are mentioned, there is no language around financial reporting, P&L, compliance, or regulatory requirements that would indicate high-risk roles.

**Run 3:** `moderate` ✓
> Quote: "Replace manual reporting and Google Sheets processes with scalable solutions"
> Verified: ✓ found in JD
> Reasoning: Business intelligence role supporting operational decisions without explicit regulatory, compliance, or mission-critical financial reporting language.

### collaboration_width
**Manual:** `1`

**Run 1:** `4` ✗
> Quote: "Partner with Data Engineering teams on data optimisation; Dashboard/reporting experience for commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names four distinct partner functions: Data Engineering, Commercial, Finance, and Logistics teams.

**Run 2:** `4` ✗
> Quote: "Data Engineering teams; commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly names four distinct collaboration partners: Data Engineering, Commercial, Finance, and Logistics teams.

**Run 3:** `1` ✓
> Quote: "Partner with Data Engineering teams on data optimisation"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineering teams is explicitly named as a collaboration partner in the responsibilities section.

⚠ **Disagreement**: manual=`1` vs LLM majority=`4`

⚠ **LLM inconsistency**: runs gave ['4', '4', '1']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: The emphasis on improving existing governance practices and working with named tools (Looker, LookML) signals a growing team with existing infrastructure, not early-stage or fully mature.

**Run 2:** `mid` ✓
> Quote: "Replace manual reporting and Google Sheets processes with scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The existence of manual processes indicates a team beyond early stage, but the need to replace them with scalable solutions shows the team is still growing and maturing.

**Run 3:** `mid` ✓
> Quote: "Replace manual reporting and Google Sheets processes with scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The team has existing infrastructure (manual processes, Google Sheets) being scaled and modernized, indicating a growing mid-stage data function rather than early or mature.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design performant LookML models, Explores and dashboards; Replace manual reporting and Google Sheets processes with scalable solutions"
> Verified: ✓ found in JD
> Reasoning: The JD mixes specific technical details (LookML, Explores, dimensional modelling) and context-aware descriptions (Google Sheets replacement) with generic responsibility language (Own, Partner).

**Run 2:** `mixed` ✗
> Quote: "Design performant LookML models, Explores and dashboards"
> Verified: ✓ found in JD
> Reasoning: The inclusion of Looker-specific technical terminology (Explores) indicates hiring manager input, while the generic structure suggests recruiter involvement.

**Run 3:** `mixed` ✗
> Quote: "Design performant LookML models, Explores and dashboards"
> Verified: ✓ found in JD
> Reasoning: Specific technical knowledge (named BI tools, LookML terminology) mixed with generic collaboration language indicates input from someone with domain knowledge plus templated content.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "designing the reporting architecture, semantic models and data foundations to enable business scaling"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and improving data infrastructure (BI architecture, semantic models, governance) that serves multiple business functions, making internal platform work the core mission.

**Run 2:** `mixed` ✗
> Quote: "Dashboard/reporting experience for commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves both commercial and finance teams equally with no clear emphasis on one over the other.

**Run 3:** `mixed` ✗
> Quote: "Dashboard/reporting experience for commercial, finance, or logistics teams"
> Verified: ✓ found in JD
> Reasoning: The role serves multiple distinct business functions (commercial, finance, logistics) with roughly equal weight, indicating genuinely mixed stakeholder orientation.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Own technical design and development of BI products and semantic models"
> Verified: ✓ found in JD
> Reasoning: The role owns technical design decisions (strategic) but operates within business scaling objectives set by the Parcels Planning team (execution context).

**Run 2:** `strategic` ✓
> Quote: "Own technical design and development of BI products and semantic models"
> Verified: ✓ found in JD
> Reasoning: The verb 'own' indicates the candidate is expected to define technical approach and direction rather than execute against predefined requirements.

**Run 3:** `execution` ✗
> Quote: "Own technical design and development of BI products and semantic models"
> Verified: ✓ found in JD
> Reasoning: While the role owns technical design execution within the Parcels Planning domain, it executes against defined business needs rather than setting overall analytics direction or strategy.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, agentic workflows, or data-for-AI infrastructure expectations.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, frameworks, or capabilities that the candidate would be expected to demonstrate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-enabled data infrastructure, or any AI-related expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: Quality is framed as governance and definitions, not testing, data contracts, or observability frameworks; no ownership of testing practices is mentioned.

**Run 2:** `absent` ✗
> Quote: "No explicit testing signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: While governance is mentioned, there is no indication of testing frameworks, data contracts, or quality practices that the candidate would own.

**Run 3:** `absent` ✗
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes governance and clear definitions but does not mention testing frameworks, data quality ownership, or data contracts, indicating testing is absent as a responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Improve data governance through clear definitions and reusable logic"
> Verified: ✓ found in JD
> Reasoning: Data governance and reliability are concerns (preventing operational failures and data inconsistencies), but the framing is improvement and scaling rather than compliance risk or stakeholder trust protection.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes technical design and architectural capability rather than risk prevention, compliance, or operational reliability concerns.

**Run 3:** `none` ✗
> Quote: "designing the reporting architecture, semantic models and data foundations to enable business scaling over 18-24 months"
> Verified: ✓ found in JD
> Reasoning: The role is framed around delivery and capability (designing architecture, enabling scaling) rather than preventing failures or managing compliance risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'none']
