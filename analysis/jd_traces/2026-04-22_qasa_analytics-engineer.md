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
| domain_risk | moderate | high | moderate | moderate | 33% | ✓ |
| collaboration_width | 5 | 6 | 6 | 6 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | mixed | 33% | ✓ |
| autonomy_level | strategic | strategic | strategic | mixed | 33% | ✓ |
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
> Reasoning: The JD emphasizes governance, compliance, and maintaining production standards with no velocity language present.

**Run 2:** `rigour` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, compliance, standardization, and quality (unified KPIs, data models, governance protocols) with no velocity signals present.

**Run 3:** `rigour` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data governance, compliance standards, and consistent KPI definitions with no velocity language; governance and GDPR compliance are primary responsibility frames.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `high` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance and regulatory requirements indicate high-risk domain where data errors have regulatory consequences.

**Run 2:** `moderate` ✓
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: While GDPR compliance is mentioned, the JD does not frame the role around financial reporting, audit, or regulatory exposure to data errors; the domain appears to be general business analytics.

**Run 3:** `moderate` ✓
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: While financial planning is mentioned, the JD lacks signals of mission-critical financial reporting, audit, or regulatory consequences; this is typical SaaS analytics without high-risk regulatory framing.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']

### collaboration_width
**Manual:** `5`

**Run 1:** `6` ✗
> Quote: "Product; Marketing; Finance; Support; Country Management; engineering"
> Verified: ✓ found in JD
> Reasoning: Product, Marketing, Finance, Support, and Country Management are explicitly named as teams requiring unified KPIs, plus explicit partnership with engineering.

**Run 2:** `6` ✗
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams; Partner with engineering"
> Verified: ✓ found in JD
> Reasoning: Six distinct functions are explicitly named as collaboration partners: Product, Marketing, Finance, Support, Country Management, and engineering.

**Run 3:** `6` ✗
> Quote: "Product, Marketing, Finance, Support, and Country Management teams; Partner with engineering"
> Verified: ✓ found in JD
> Reasoning: Six distinct teams are explicitly named as collaboration partners: Product, Marketing, Finance, Support, Country Management, and Engineering.

⚠ **Disagreement**: manual=`5` vs LLM majority=`6`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: Language of establishing unified standards and creating self-serve capabilities suggests building on existing infrastructure rather than greenfield or mature operations.

**Run 2:** `mid` ✗
> Quote: "Create self-serve analytics capabilities that empower teams to independently answer questions"
> Verified: ✓ found in JD
> Reasoning: The role focuses on establishing standards, implementing governance, and creating self-serve infrastructure, indicating a function being professionalized and scaled rather than greenfield building.

**Run 3:** `mid` ✗
> Quote: "Demonstrate success designing and maintaining production data models"
> Verified: ⚠ NOT found verbatim
> Reasoning: The emphasis on maintaining production systems and implementing governance frameworks indicates an existing data function that is growing and formalizing, not building from zero or operating at full scale.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and marketing-style language throughout responsibilities with limited technical specificity about day-to-day work.

**Run 2:** `mixed` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Some domain-specific knowledge (GDPR compliance, governance protocols, access management) suggests hiring manager input, but the lack of scale metrics, tool specifics, or concrete methodology names indicates recruiter contribution.

**Run 3:** `recruiter` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs without specific technical context, methodology names, or concrete implementation details that only a practitioner would include; tools appear in requirements without explaining how they are used.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Create self-serve analytics capabilities that empower teams to independently answer questions"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building analytics infrastructure and platforms for internal teams to use rather than serving a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "Create self-serve analytics capabilities that empower teams to independently answer questions"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building analytics infrastructure and platform capabilities that enable internal teams to self-serve, not creating analytics directly for specific business functions.

**Run 3:** `mixed` ✗
> Quote: "Transform complex data into compelling narratives informing product strategy and financial planning"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves product strategy and financial planning with equal emphasis, plus operational teams (Marketing, Support, Country Management), indicating genuinely distributed stakeholder weight.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: Strategic verbs like establish, design, and create indicate the role sets direction for analytics rather than executing someone else's priorities.

**Run 2:** `strategic` ✓
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The responsibilities are dominated by strategic action verbs (establish, design, create, explore) that define direction and shape how analytics is delivered, rather than executing on existing priorities.

**Run 3:** `mixed` ✗
> Quote: "Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic responsibilities (establishing KPIs, creating self-serve capabilities, implementing governance frameworks) with execution in partnership with engineering teams.

⚠ **LLM inconsistency**: runs gave ['strategic', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to be familiar with AI tools to accelerate their own coding and development work.

**Run 2:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: The required qualification expects candidates to be familiar with AI tools for accelerating their own development work, not to build data infrastructure for AI systems.

**Run 3:** `ai_user` ✗
> Quote: "Familiarity with AI-assisted development tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI-assisted development tools to accelerate their own work, signaling a personal productivity expectation rather than building AI infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of testing frameworks, data quality standards, or observability practices anywhere in the JD.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions data governance and GDPR compliance but contains no reference to testing, data contracts, observability, data quality frameworks, or related practices.

**Run 3:** `absent` ✗
> Quote: "No data quality or testing framework mentioned in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no signal of testing practices, data contracts, observability frameworks, or data quality ownership; governance is mentioned but not linked to testing.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Compliance and governance are explicit concerns but represent one of seven responsibilities, not the dominant role framing which emphasizes building analytics capabilities.

**Run 2:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: While GDPR compliance suggests operational governance concerns, the JD is primarily delivery and capability-focused; risk framing is operational rather than dominating the role's strategic purpose.

**Run 3:** `moderate` ✗
> Quote: "Implement data governance protocols addressing GDPR compliance and access management"
> Verified: ✓ found in JD
> Reasoning: Compliance and governance are mentioned as operational concerns but secondary to the primary framing of building analytics capabilities and enabling teams; fear is about regulatory exposure and governance, not preventing bad data reaching stakeholders.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
