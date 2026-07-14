# Trace: 2026-04-09_nkg_sustainability-data-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Sustainability Data Analyst (f/m/d) — Neumann Kaffee Gruppe (NKG)

**URL:** https://nkg.wd103.myworkdayjobs.com/en-US/nkg/job/Sustainability-Data-Analyst_JR102809-1
**Location:** Hamburg, Germany (Telecommute)
**Employment Type:** Full-time

---

## Key Responsibilities

- Develop and implement a unified sustainability data platform integrating multiple sources
- Design and operate scalable data pipelines within Microsoft Fabric
- Create Power BI dashboards and reports for monitoring and decision-making
- Gather requirements and translate them into effective reporting and analytics solutions
- Improve data management processes and contribute innovative ideas to the team

---

## Required Qualifications

- Professional experience in Business Intelligence or Data Analytics
- Power BI expertise
- DAX knowledge
- Microsoft Fabric experience
- SQL proficiency
- Data modeling capabilities
- Structured and analytical manner with emphasis on data quality
- English fluency
- Proactive, self-motivated, solution-oriented approach
- Strong cross-functional collaboration abilities

---

## Preferred / Bonus Skills

- Python and/or PySpark knowledge
- Background with sustainability-related data
- German, Spanish, or Portuguese language skills
- Experience with EUDR compliance systems (e.g., osapiens)
- Geodata validation tools experience

---

## Benefits

Not specified in the posting.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | moderate | moderate | 33% | ✗ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | mixed | recruiter | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly emphasizes data quality as a core expectation with no velocity or fast-paced language present.

**Run 2:** `rigour` ✓
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality as a core qualification and frames responsibilities around infrastructure building and improvement, with no velocity language.

**Run 3:** `rigour` ✓
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality and structured analytical approaches with no velocity signals like fast-paced or rapid delivery.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: EUDR is an EU regulatory framework for deforestation compliance in supply chains, placing this role in a high-risk regulatory context.

**Run 2:** `moderate` ✗
> Quote: "Create Power BI dashboards and reports for monitoring and decision-making"
> Verified: ✓ found in JD
> Reasoning: The role is oriented toward business intelligence and operational reporting despite the sector's regulatory implications (EUDR compliance), which are only mentioned in preferred skills.

**Run 3:** `moderate` ✗
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: While EUDR regulatory context appears in preferred skills, the JD frames this as standard BI/analytics work rather than compliance-critical reporting.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes cross-functional collaboration generically without naming any specific partner teams or functions.

**Run 2:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes collaboration but names no specific functions, teams, or partner roles like Finance, Product, or Engineering.

**Run 3:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities"
> Verified: ✓ found in JD
> Reasoning: The JD mentions cross-functional collaboration generically but does not name any specific partner teams or functions.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: Named tools (Microsoft Fabric, Power BI) appear in core responsibilities with 'improve' language indicating existing infrastructure being enhanced rather than built from scratch.

**Run 2:** `mid` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Microsoft Fabric, Power BI) combined with scaling and improvement language suggest an existing function being enhanced, not a greenfield build.

**Run 3:** `mid` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: The presence of 'operate' signals existing infrastructure and production responsibility, while 'improve data management processes' suggests a team growing its capabilities rather than building from zero.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric; Create Power BI dashboards and reports for monitoring and decision-making"
> Verified: ✓ found in JD
> Reasoning: Specific tool stack and domain context suggest hiring manager input, but generic action verbs and vague stakeholder language indicate recruiter contribution.

**Run 2:** `recruiter` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs without technical context or domain-specific problem details that would indicate hiring manager authorship.

**Run 3:** `recruiter` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic boilerplate verbs and lack specific application context, scale, or methodology that would indicate hands-on hiring manager authorship.

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: Primary emphasis is building data platform infrastructure for internal consumption rather than serving specific commercial, product, or finance audiences.

**Run 2:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The primary framing emphasizes data platform infrastructure and data management processes rather than serving external business functions.

**Run 3:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The framing emphasizes building data infrastructure (platform) and improving internal processes rather than serving commercial, product, or finance stakeholders explicitly.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The role is scoped to translate others' requirements into technical solutions rather than defining overall direction or strategy.

**Run 2:** `mixed` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic responsibility for technical platform design (develop, design, implement) with execution in gathering stakeholder requirements and contributing ideas.

**Run 3:** `execution` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities frame the role as receiving scoped requirements and delivering against them, rather than defining strategy or shaping how analytics is delivered.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, AI infrastructure, or AI capabilities anywhere in the job description.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No signals that the candidate must use AI coding tools or build AI-ready infrastructure; Python is listed as a bonus skill but without AI context.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Python/PySpark appear in preferred skills but are listed without AI-specific context; no coding assistants, AI pipelines, or enablement responsibilities are mentioned.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned as a desired mindset but not as a specific testing responsibility or named tool.

**Run 2:** `absent` ✗
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: While data quality is valued as a competency, no specific testing tools, data contracts, or quality frameworks are mentioned as owned responsibilities.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality practice mentioned with ownership or tool names."
> Verified: ⚠ NOT found verbatim
> Reasoning: While 'emphasis on data quality' appears in qualifications as a candidate trait, no testing framework, data contracts, or quality ownership responsibility is named.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: Compliance and regulatory concern are present via EUDR but secondary to the delivery-focused core responsibilities; role is not primarily framed around risk prevention.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The role is described entirely in terms of building and improving systems, with no emphasis on preventing bad outcomes, operational reliability, or compliance concerns.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in delivery and capability terms ('develop', 'implement', 'create', 'improve') with no language about preventing failures or managing risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'none']
