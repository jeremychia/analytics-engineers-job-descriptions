# Trace: 2026-04-22_qasa_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Qasa

**URL:** https://careers.qasa.se/jobs/7452878-analytics-engineer-build-qasa-s-data-foundation
**Location:** Stockholm, Sweden (Hybrid)

---

## Key Responsibilities

- Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams
- Design and construct data models serving as the bridge between raw data and business insights
- Create self-serve analytics capabilities that empower teams to independently answer questions
- Transform complex data into compelling narratives informing product strategy and financial planning
- Partner with engineering to ensure data pipelines meet organizational needs
- Implement data governance protocols addressing GDPR compliance and access management
- Explore forecasting, modeling, and machine learning opportunities

---

## Required Qualifications

- Advanced SQL proficiency and data modeling expertise
- Demonstrated success designing and maintaining production data models
- Track record defining KPIs with consistent metric standards across organizations
- Strong analytical abilities paired with clear data communication skills
- Experience implementing BI tools (Metabase preferred)
- Cross-functional collaboration experience
- Business acumen across product, marketing, and finance domains
- Familiarity with AI-assisted development tools

---

## Preferred / Bonus Skills

- Amplitude and GA4 platform experience
- Data product deployment background
- GDPR and data governance legal knowledge

---

## Benefits

- 30 paid vacation days
- Pension contributions (ITP1 formula-based)
- Salary exchange program with 6% employer top-up
- Parental benefits (10% salary for 2-6 months)
- Annual wellness allowance: SEK 5,000
- Equipment provision (laptop, phone)
- Södermalm office location with Friday social events

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | high | high | 33% | ✗ |
| collaboration_width | 5 | 6 | 6 | 6 | 100% | ✗ |
| data_team_maturity | early | early | mid | mid | 33% | ✗ |
| jd_authorship | recruiter | recruiter | hiring_manager | mixed | 0% | ✓ |
| stakeholder_orientation | internal_data | mixed | internal_data | mixed | 33% | ✗ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance, compliance, and standardization (unified KPIs, data governance protocols) with no velocity signals like fast-paced or rapid iteration.

**Run 2:** `rigour` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, compliance, and standardization as core expectations with no velocity-oriented language present.

**Run 3:** `rigour` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance, compliance, and structured data management with no velocity language, making rigour the clear dominant orientation.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: While GDPR and financial planning are mentioned, this is a general analytics role serving multiple stakeholders rather than a fintech/banking/regulated context where data errors directly impact financial reporting or regulatory compliance.

**Run 2:** `high` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Explicit regulatory (GDPR) compliance responsibility indicates data errors could create direct regulatory exposure.

**Run 3:** `high` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance and regulatory requirements are explicitly named as core responsibilities, placing data errors directly in the regulatory risk domain.

⚠ **Disagreement**: manual=`moderate` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']

### collaboration_width
**Manual:** `5`

**Run 1:** `6` ✗
> Quote: "Product, Marketing, Finance, Support, and Country Management teams; engineering"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names six distinct teams: Product, Marketing, Finance, Support, Country Management, and Engineering.

**Run 2:** `6` ✗
> Quote: "Product, Marketing, Finance, Support, and Country Management; engineering"
> Verified: ✓ found in JD
> Reasoning: Six distinct named functions explicitly listed across the KPI standardization and pipeline partnership responsibilities.

**Run 3:** `6` ✗
> Quote: "Product; Marketing; Finance; Support; Country Management; Engineering"
> Verified: ✓ found in JD
> Reasoning: Six distinct named teams are explicitly listed as collaboration partners in the first responsibility and throughout the JD.

⚠ **Disagreement**: manual=`5` vs LLM majority=`6`

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The dominant responsibility verbs are foundational (establish, design, construct, create, implement) indicating the role is building the analytics function from the ground up, not scaling an existing mature practice.

**Run 2:** `mid` ✗
> Quote: "Design and construct data models serving as the bridge between raw data and business insights; Create self-serve analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: Named infrastructure focus (models, self-serve analytics, governance protocols) indicates an established data function being scaled, not a greenfield build.

**Run 3:** `mid` ✗
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The use of 'establish' signals building new capabilities while references to existing pipelines and BI tools indicate some infrastructure already exists.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['early', 'mid', 'mid']

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Strong analytical abilities paired with clear data communication skills"
> Verified: ✓ found in JD
> Reasoning: The responsibilities and requirements lack technical specificity—no named tools with context, no scale numbers, no specific methodologies—relying instead on generic boilerplate action verbs that could apply to any analytics role.

**Run 2:** `hiring_manager` ✗
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: This describes a specific, concrete business problem (KPI fragmentation across five named teams) that only surfaces from hands-on experience doing this work.

**Run 3:** `mixed` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Most responsibilities use generic action verbs, but specific GDPR governance implementation and named BI tools (Metabase, Amplitude, GA4) suggest hiring manager input on technical sections.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `mixed` ✗
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: The responsibilities show equal emphasis serving product (product strategy), finance (financial planning), and the internal data function (self-serve analytics, engineering partnership).

**Run 2:** `internal_data` ✓
> Quote: "Create self-serve analytics capabilities that empower teams to independently answer questions"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities center on building analytics infrastructure (self-serve capabilities, data models, KPI standardization) rather than serving a specific business function.

**Run 3:** `mixed` ✗
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes serving both product teams and finance teams with equal weight, while also establishing data infrastructure for internal consumption.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The role is expected to define direction and set standards (establish KPIs, design models, create capabilities, implement governance) rather than execute predefined work.

**Run 2:** `strategic` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize establishing frameworks, designing solutions, and implementing governance—actions that shape how analytics is delivered rather than executing scoped work.

**Run 3:** `strategic` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The role is expected to establish and define analytics standards and capabilities across the organization rather than execute scoped work set by others.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to have familiarity with AI-assisted development tools (like Copilot or similar), indicating expectation to use AI tools to accelerate their own coding work.

**Run 2:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to be familiar with AI coding tools to accelerate their own development work.

**Run 3:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly requires familiarity with AI-assisted development tools, expecting the candidate to use these tools to accelerate their own development work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: There is no mention of testing, data contracts, data quality frameworks, or observability; the focus is on governance and compliance rather than testing practices.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality frameworks mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: No data quality, testing frameworks, observability practices, or data contracts are mentioned anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "No testing, data contracts, or quality framework signals in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: While data governance is mentioned, it focuses on GDPR compliance and access management rather than testing practices, data quality frameworks, or observability.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance and operational reliability are mentioned but as secondary concerns within a role primarily framed around capability-building (establish KPIs, design models, create analytics).

**Run 2:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance is one responsibility among many delivery-focused objectives; regulatory risk is present but not the dominant framing of the role.

**Run 3:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Compliance and governance are present concerns but appear as one of seven responsibilities rather than dominating the role framing, indicating moderate risk aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
