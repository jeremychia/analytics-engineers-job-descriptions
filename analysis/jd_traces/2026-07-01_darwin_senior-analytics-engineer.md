# Trace: 2026-07-01_darwin_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Darwin (via Aplitrak)

**URL:** https://www.aplitrak.com/?adid=R2VvZmZyZXkuS25hcHAuNDgwNjIuMTU1MEBkYXJ3aW4uYXBsaXRyYWsuY29t
**Location:** Amsterdam, Netherlands (Hybrid)
**Date Posted:** 2026-07-01
**Salary:** 6,500–7,250 EUR

---

Senior Analytics Engineer - Amsterdam International Organisation (via Darwin/Aplitrak)

Position Overview
The role involves leading the design and build of a brand-new analytics platform for an Amsterdam-based international organization. This is a rare greenfield opportunity where you'll be the first dedicated Analytics Engineer within the business.

Key Responsibilities
- Take ownership of platform architecture, data modelling standards, and engineering best practices
- Build a modern cloud-based data platform that will support the organisation's next phase of growth
- Design and build from scratch rather than maintaining existing systems

Required Qualifications
- Commercial experience designing and building modern analytics or data platforms
- Strong experience with Databricks and/or Snowflake
- Excellent SQL and Python skills
- Experience with cloud-based data platforms (Azure experience beneficial)
- Knowledge of modern data modelling and semantic layer design
- Exposure to BI tools such as Tableau or Power BI
- Advantageous: experience working with Data Science or Machine Learning teams
- Proactive approach with confidence to influence technical decisions

Compensation & Benefits
- Salary: €6,500–€7,250 gross per month
- Annual bonus opportunity
- 27 days annual leave plus holiday allowance
- Pension contribution
- Hybrid working arrangement
- Long-term growth opportunities within a collaborative, people-first culture

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 0 | 1 | 33% | ✓ |
| data_team_maturity | early | early | early | early | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | recruiter | recruiter | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The emphasis on establishing standards and best practices from the ground up signals a rigour-oriented approach to building the platform.

**Run 2:** `rigour` ✓
> Quote: "data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The explicit emphasis on standards and best practices signals a quality and rigor orientation over speed.

**Run 3:** `rigour` ✓
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize standards, architecture, and best practices rather than speed, iteration, or delivery pace.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "build a modern cloud-based data platform that will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: Generic international organization with no explicit financial reporting, compliance, or regulatory signals; analytics infrastructure supports business growth rather than mission-critical decisions.

**Run 2:** `moderate` ✓
> Quote: "support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: No explicit financial, regulatory, or compliance language; generic business analytics context implies moderate risk.

**Run 3:** `moderate` ✓
> Quote: "will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: No explicit financial reporting, compliance, or regulatory language; generic growth-oriented framing without domain-specific risk signals.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Data Science or Machine Learning teams"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named team partner mentioned as advantageous experience.

**Run 2:** `0` ✗
> Quote: "first dedicated Analytics Engineer within the business"
> Verified: ✓ found in JD
> Reasoning: No named collaboration partners are explicitly described in the role responsibilities.

**Run 3:** `1` ✓
> Quote: "experience working with Data Science or Machine Learning teams"
> Verified: ✓ found in JD
> Reasoning: One named external function (Data Science or Machine Learning teams) is identified as an explicit collaboration partner.

⚠ **LLM inconsistency**: runs gave ['1', '0', '1']

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "you'll be the first dedicated Analytics Engineer within the business"
> Verified: ✓ found in JD
> Reasoning: Explicit first hire building a greenfield platform from scratch indicates early-stage data function.

**Run 2:** `early` ✓
> Quote: "first dedicated Analytics Engineer within the business"
> Verified: ✓ found in JD
> Reasoning: Clear greenfield signal with no existing data infrastructure or team to build upon.

**Run 3:** `early` ✓
> Quote: "This is a rare greenfield opportunity where you'll be the first dedicated Analytics Engineer within the business"
> Verified: ✓ found in JD
> Reasoning: Explicitly greenfield with the candidate as the first dedicated analytics hire, signaling no existing infrastructure or data function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: Specific tool requirements (Databricks, Snowflake, SQL, Python, Azure) suggest technical input, but responsibilities use generic architectural language rather than specific operational context.

**Run 2:** `recruiter` ✗
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: Generic responsibilities with no specific technical context about actual tools, data flows, or concrete work.

**Run 3:** `recruiter` ✗
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: Responsibilities are written with generic action verbs lacking specific technical context about actual day-to-day work, scale, or concrete challenges.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`recruiter`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build a modern cloud-based data platform that will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: The role's primary deliverable is building data infrastructure and platform for internal data consumers rather than serving commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Build a modern cloud-based data platform that will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: The primary focus is establishing data infrastructure for internal consumption rather than serving a specific business function.

**Run 3:** `internal_data` ✓
> Quote: "Build a modern cloud-based data platform that will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: The focus on building platform architecture and data infrastructure from scratch indicates an internal_data orientation serving data consumers and the analytics function.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to define standards and architecture—setting direction and shaping how analytics is delivered rather than executing predefined work.

**Run 2:** `strategic` ✓
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The role expects the candidate to define technical direction, architecture decisions, and engineering standards from scratch.

**Run 3:** `strategic` ✓
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: "Take ownership" combined with "design and build from scratch" establishes the role as defining platform direction and standards rather than executing predetermined work.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, building AI infrastructure, or using AI tools—optional collaboration with Data Science teams does not constitute expected candidate AI skill.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, or AI data infrastructure expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Collaboration with ML teams is mentioned but no AI-assisted coding, agentic workflows, or AI-ready data infrastructure is expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal mentioned in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: No explicit mention of testing frameworks, data quality ownership, observability, data contracts, or SLOs anywhere in the responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality framework signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: No explicit mention of testing, data quality, data contracts, observability, or related frameworks.

**Run 3:** `absent` ✗
> Quote: "Build a modern cloud-based data platform that will support the organisation's next phase of growth"
> Verified: ✓ found in JD
> Reasoning: No explicit mention of testing, data quality frameworks, data contracts, or observability; testing is not framed as a responsibility or tool.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around building and delivery with no mention of preventing failures, regulatory risk, compliance exposure, or stakeholder trust concerns.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The role is framed around greenfield opportunity and capability delivery, with no risk, compliance, or reliability language.

**Run 3:** `none` ✗
> Quote: "Take ownership of platform architecture, data modelling standards, and engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The JD is entirely framed in delivery and capability terms without any risk, compliance, reliability, or stakeholder trust language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
