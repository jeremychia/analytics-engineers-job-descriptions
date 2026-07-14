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
| domain_risk | high | moderate | high | moderate | 33% | ✗ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality and structured analytical approaches with no velocity language like 'fast-paced' or 'move quickly'.

**Run 2:** `rigour` ✓
> Quote: "emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly emphasizes data quality as a core expectation in the qualifications, paired with responsibilities focused on building reliable, scalable infrastructure rather than speed.

**Run 3:** `rigour` ✓
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: The explicit qualification demanding emphasis on data quality signals rigour as the primary orientation, with no velocity-oriented language (fast-paced, rapid delivery, MVP) present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: While EUDR compliance introduces regulatory exposure, the role is framed as building analytics infrastructure rather than ensuring compliance, and regulatory responsibility is listed as a bonus skill.

**Run 2:** `high` ✓
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: EUDR is an explicit regulatory compliance requirement for supply chain sustainability, and data accuracy directly affects regulatory standing and market access.

**Run 3:** `moderate` ✗
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: While EUDR compliance is mentioned as a bonus skill indicating regulatory relevance, the main responsibilities focus on dashboards and reporting rather than compliance-critical work, placing this in the moderate risk category.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities"
> Verified: ✓ found in JD
> Reasoning: The JD does not name any specific partner teams or functions, only references generic cross-functional collaboration.

**Run 2:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities; Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: While collaboration is emphasized, the JD uses generic language without naming specific partner functions, teams, or departments.

**Run 3:** `0` ✗
> Quote: "Strong cross-functional collaboration abilities"
> Verified: ✓ found in JD
> Reasoning: No explicitly named partner teams, functions, or departments are listed in the JD; only generic cross-functional collaboration is mentioned.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The role involves building a new platform capability while working within an existing tech stack (Fabric, Power BI), indicating growth and expansion of an established data function.

**Run 2:** `mid` ✗
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The focus on developing and implementing a unified platform suggests the team is in a growth phase with existing infrastructure to build upon, not greenfield but not yet established.

**Run 3:** `mid` ✗
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The language suggests consolidating existing data sources into a unified platform with named tools already in use (Microsoft Fabric), indicating a growing team improving existing infrastructure rather than building from zero.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities rely heavily on generic action verbs with minimal context on specific business problems, scale, or methodologies that would indicate hiring-manager authorship.

**Run 2:** `mixed` ✗
> Quote: "Design and operate scalable data pipelines within Microsoft Fabric"
> Verified: ✓ found in JD
> Reasoning: Some technical specificity appears (Microsoft Fabric with scaling context) alongside generic phrasing like 'gather requirements' and 'contribute innovative ideas', indicating mixed hiring manager and recruiter input.

**Run 3:** `recruiter` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate verbs and phrasing that could apply to many BI/analytics roles, with tools mentioned but without specific context about scale, volume, or methodology.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data infrastructure and platforms for internal decision-making rather than supporting commercial, product, or finance-specific functions.

**Run 2:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The primary focus is on building and operating data infrastructure (platform, pipelines, dashboards) for internal consumption rather than serving commercial, product, or finance teams.

**Run 3:** `internal_data` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The focus on building data infrastructure for internal consumption signals the primary audience is platform consumers and internal stakeholders requiring sustainability analytics.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources"
> Verified: ✓ found in JD
> Reasoning: The role receives a defined objective (build sustainability platform) and executes against it, rather than setting strategic direction for how analytics is delivered.

**Run 2:** `mixed` ✗
> Quote: "Develop and implement a unified sustainability data platform integrating multiple sources; Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The role owns strategic design and implementation of infrastructure while also executing on requirements gathered from others, creating both strategic and execution-oriented responsibilities.

**Run 3:** `execution` ✓
> Quote: "Gather requirements and translate them into effective reporting and analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The emphasis on gathering requirements from others and translating them into solutions indicates the role executes a defined mandate to build sustainability reporting, with direction set by stakeholder needs.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, machine learning, coding agents, or GenAI; Python/PySpark are listed as optional skills without AI context.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI-related workflows expected of the candidate; Python is listed but not tied to AI applications.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, or AI infrastructure expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: While data quality is valued as a trait, the JD does not frame testing, data contracts, observability, or quality frameworks as something the candidate owns or defines, and no testing tools are mentioned.

**Run 2:** `absent` ✗
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: While data quality mindset is valued as a qualification, no testing practices, data quality frameworks, observability tools, or quality ownership responsibilities are mentioned.

**Run 3:** `absent` ✗
> Quote: "Structured and analytical manner with emphasis on data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned only as a desirable approach in the qualifications, not as an owned testing responsibility with frameworks, tools, or data contracts.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in terms of building capabilities and improving processes rather than preventing risk, compliance violations, or bad data reaching decision-makers.

**Run 2:** `moderate` ✗
> Quote: "Experience with EUDR compliance systems (e.g., osapiens)"
> Verified: ✓ found in JD
> Reasoning: Compliance is mentioned in preferred skills rather than core responsibilities, and the main role framing emphasizes infrastructure building over risk mitigation, placing it at moderate rather than high loss aversion.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around building and improving systems rather than preventing failures or managing compliance risk, with EUDR compliance mentioned only as a bonus skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'none']
