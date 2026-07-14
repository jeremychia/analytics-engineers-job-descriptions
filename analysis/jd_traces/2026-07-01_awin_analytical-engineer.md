# Trace: 2026-07-01_awin_analytical-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytical Engineer — Awin

**URL:** https://job-boards.greenhouse.io/awin/jobs/7785591003?gh_src=e8316d393us
**Location:** Iași, Romania or Warsaw, Poland (Hybrid)
**Date Posted:** 2026-07-01

---

Analytical Engineer at Awin

Role Overview
Awin seeks an Analytical Engineer to establish their analytics engineering practice within the BI team. The position bridges Data Engineering and Business Intelligence, focusing on creating a trusted semantic layer that enables self-serve analytics across the organisation.

Primary Responsibilities
- Provide business context for the mart layers of our data architecture
- Establish a single source of truth for business metric definitions
- Partner with Data Engineering teams
- Collaborate with BI Developers and Insight Analysts
- Design data marts with self-serve usage in mind
- Coach BI Developers in Analytics Engineering best practices
- Create documentation enabling independent contributions
- Translate ambiguous business requirements into clear, well-documented data definitions

Required Qualifications
- Strong SQL proficiency
- Production experience with dbt
- Familiarity with cloud data warehouses
- Understanding of data modelling concepts like dimensional modelling and star schemas
- Experience working within BI teams
- Ability to translate ambiguous business requirements into clear, well-documented data definitions
- Strong communication abilities

Preferred Experience
- Tableau or Power BI experience
- Databricks knowledge
- Semantic layer tooling familiarity
- Mentoring experience
- Exposure to data observability or AI-readiness concepts

Location & Benefits
- Positions available in Iași, Romania and Warsaw, Poland
- Flexible four-day work weeks at full pay
- Hybrid work options
- Development programs through Awin Academy
- Remote working allowances

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
| jd_authorship | hiring_manager | hiring_manager | mixed | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes governance, documentation, and trusted metrics with no velocity language; signal phrases like 'single source of truth' and 'well-documented' dominate.

**Run 2:** `rigour` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes consistency, documentation, and governance (single source of truth, well-documented data definitions, best practices) with no counterbalancing velocity language.

**Run 3:** `rigour` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes accuracy, documentation, best practices, and creating trusted infrastructure, with no velocity or speed language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business intelligence and decision-making but lack explicit financial reporting, compliance, or regulatory consequences.

**Run 2:** `moderate` ✓
> Quote: "creating a trusted semantic layer that enables self-serve analytics across the organisation"
> Verified: ✓ found in JD
> Reasoning: The role focuses on internal analytics infrastructure for business decision-making rather than financial reporting, regulatory compliance, or revenue attribution.

**Run 3:** `moderate` ✓
> Quote: "Design data marts with self-serve usage in mind"
> Verified: ✓ found in JD
> Reasoning: The role supports internal business decision-making through analytics infrastructure without financial reporting, compliance, or regulatory framing.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "Partner with Data Engineering teams; Collaborate with BI Developers and Insight Analysts"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly identified as collaboration partners: Data Engineering, BI Developers, and Insight Analysts.

**Run 2:** `3` ✓
> Quote: "Partner with Data Engineering teams; Collaborate with BI Developers and Insight Analysts"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions explicitly mentioned as collaboration partners: Data Engineering teams, BI Developers, and Insight Analysts.

**Run 3:** `3` ✓
> Quote: "Data Engineering teams; BI Developers; Insight Analysts"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions identified across the responsibilities section.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "establish their analytics engineering practice within the BI team"
> Verified: ✓ found in JD
> Reasoning: The analytics engineering practice itself is new but sits within an already-established data organization with multiple named teams and production tools.

**Run 2:** `mid` ✓
> Quote: "establish their analytics engineering practice within the BI team"
> Verified: ✓ found in JD
> Reasoning: The role aims to scale an existing BI function by establishing a new analytics engineering practice, indicating a growing data organization rather than early-stage greenfield or mature scale.

**Run 3:** `mid` ✓
> Quote: "establish their analytics engineering practice within the BI team"
> Verified: ✓ found in JD
> Reasoning: An existing BI team structure is present, but the analytics engineering practice specifically is being newly established.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design data marts with self-serve usage in mind"
> Verified: ✓ found in JD
> Reasoning: The responsibilities demonstrate specific technical knowledge of semantic layer architecture and self-serve analytics patterns that come from hands-on experience.

**Run 2:** `mixed` ✗
> Quote: "Design data marts with self-serve usage in mind; Coach BI Developers in Analytics Engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The description contains both specific technical context (data marts, semantic layer, dimensional modelling) and generic action verbs (coach, collaborate, partner) without implementation specificity.

**Run 3:** `hiring_manager` ✓
> Quote: "Design data marts with self-serve usage in mind"
> Verified: ✓ found in JD
> Reasoning: The responsibilities are technically specific about architecture and data mart design, requiring hands-on domain knowledge.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "focusing on creating a trusted semantic layer that enables self-serve analytics across the organisation"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data function (BI Developers, Insight Analysts, data consumers) by building internal analytics infrastructure.

**Run 2:** `internal_data` ✓
> Quote: "enables self-serve analytics across the organisation"
> Verified: ✓ found in JD
> Reasoning: The role's primary purpose is enabling internal analytics consumers (BI developers, insight analysts) to access and use data independently, not serving commercial, product, finance, or external stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "enables self-serve analytics across the organisation"
> Verified: ✓ found in JD
> Reasoning: The entire role is focused on building data infrastructure and enabling internal analytics teams, with no commercial or financial reporting audience.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "establish their analytics engineering practice within the BI team"
> Verified: ✓ found in JD
> Reasoning: The role is expected to define analytics engineering practices, establish metric governance, and coach others—not execute existing processes.

**Run 2:** `strategic` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: The role uses strategic ownership verbs like establish, design, and coach, indicating the candidate is expected to set direction for analytics engineering practices rather than execute preset tasks.

**Run 3:** `strategic` ✓
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: The role uses strategic verbs like 'establish' and 'design' to define the analytics engineering practice and architecture.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Preferred experience mentions 'exposure to data observability or AI-readiness concepts' only as passive awareness, not a required or actively practiced skill.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Vague reference to 'Exposure to data observability or AI-readiness concepts' in preferred experience does not constitute a concrete AI skill expectation for the candidate.

**Run 3:** `none` ✗
> Quote: "Exposure to data observability or AI-readiness concepts"
> Verified: ✓ found in JD
> Reasoning: The mention is vague, only in preferred experience, and does not demonstrate a clear AI skill requirement for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Design data marts with self-serve usage in mind"
> Verified: ✓ found in JD
> Reasoning: No testing, data quality frameworks, data contracts, or observability ownership appears in the responsibilities; the focus is on metric definitions and self-serve design.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: Testing, data quality frameworks, and observability are not framed as owned responsibilities or listed as required tools in the responsibilities section.

**Run 3:** `absent` ✗
> Quote: "Establish a single source of truth for business metric definitions"
> Verified: ✓ found in JD
> Reasoning: No explicit mention of testing, data contracts, or observability as responsibilities; the quote shows emphasis on accuracy without testing language.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "creating a trusted semantic layer that enables self-serve analytics across the organisation"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and stakeholder trust in data are central to the role, but driven by preventing analytics errors rather than regulatory or compliance risk.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in delivery and capability terms (establish practice, create documentation, design architecture) with no risk register, operational reliability concerns, or explicit loss-aversion language.

**Run 3:** `none` ✗
> Quote: "enabling self-serve analytics across the organisation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed around delivery capability and enabling analytics access, not around preventing bad outcomes, compliance, or operational reliability.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'none']
