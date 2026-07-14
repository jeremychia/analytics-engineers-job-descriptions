# Trace: 2026-07-02_asics_senior-business-intelligence-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Business Intelligence Engineer — ASICS

**URL:** https://career5.successfactors.eu/career?career_ns=job_listing&company=S003910448P&navBarLevel=JOB_SEARCH&rcm_site_locale=en_GB&career_job_req_id=76188&source=LinkedIn
**Location:** Hoofddorp, Netherlands
**Date Posted:** 2026-07-02

---

# Senior Business Intelligence Engineer

Company: ASICS
Requisition ID: 76188
Location: Hoofddorp, near Amsterdam (EMEA headquarters)
Employment Type: Permanent, Full Time
Salary: Not stated

## Key Responsibilities
- Define and prioritise technical requirements that align with the overall business strategy
- Directing data integration and pipeline orchestration across the organization
- Creating data models and implementing transformation/cleansing/enrichment processes
- Enhancing database platform performance and cost-effectiveness
- Establishing documentation, version control, and data privacy compliance
- Providing technical support and training to colleagues
- Promoting BI adoption and data literacy across EMEA

## Required Qualifications
- Extensive SQL and relational database experience
- Strong hands-on experience with Snowflake and DBT
- Bachelor's degree in Computer Science, IT, or related field
- CI/CD standards experience for data engineering
- Proven success leading ETL and database initiatives

## Preferred Qualifications
- Experience with complementary ETL solutions like Azure Data Factory

Interview Process & Team Structure: Not specified in the job posting.

Benefits: Gym access, 50% ASICS gear discount, Calm app access, wellness programs, hybrid work flexibility, and annual working abroad allowance.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | recruiter | recruiter | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | absent | absent | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, compliance, and documentation as core expectations with no velocity or speed language present.

**Run 2:** `rigour` ✓
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize governance, documentation, and compliance practices with no speed or delivery-pace language typical of velocity-oriented roles.

**Run 3:** `rigour` ✓
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasise governance, documentation, compliance, and standards—classic rigour signals—with no velocity or speed language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect operational decisions and business continuity through infrastructure failures, but there are no signals of financial reporting, regulatory, or compliance-driven consequences.

**Run 2:** `moderate` ✓
> Quote: "Enhancing database platform performance and cost-effectiveness"
> Verified: ✓ found in JD
> Reasoning: Focus is operational efficiency and cost optimization rather than financial reporting, regulatory compliance, or mission-critical revenue exposure typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: While regulatory compliance is explicitly mentioned (GDPR for EMEA), the role focuses on infrastructure rather than compliance-dependent financial reporting or mission-critical decisions.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "No named teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: No distinct named functions (Finance, Product, Engineering, etc.) are explicitly listed; only generic references to colleagues and business strategy.

**Run 2:** `0` ✓
> Quote: "Providing technical support and training to colleagues"
> Verified: ✓ found in JD
> Reasoning: Collaboration is mentioned generically; no specific functions (Finance, Product, Engineering, Sales, etc.) or named teams are explicitly identified as collaboration partners.

**Run 3:** `0` ✓
> Quote: "Providing technical support and training to colleagues"
> Verified: ✓ found in JD
> Reasoning: No named partner teams or functions (Product, Finance, Engineering, Sales, etc.) are identified; collaboration references use only generic terms like 'colleagues' and 'the organization'.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities assume existing infrastructure and data processes, with focus on optimization and governance rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: Language indicates an established data function operating at organizational scale with named tools (Snowflake, DBT) in responsibilities, typical of a scaling mid-stage team.

**Run 3:** `mid` ✗
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: Named tools (Snowflake, DBT) and orchestration responsibilities indicate existing infrastructure requiring direction and enhancement, not early-stage establishment.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Directing data integration and pipeline orchestration across the organization; Creating data models and implementing transformation/cleansing/enrichment processes"
> Verified: ✓ found in JD
> Reasoning: Boilerplate action verbs and generic responsibilities that could apply to any mid-level data infrastructure role, with named tools (Snowflake, DBT) listed without specific context about use cases or scale.

**Run 2:** `recruiter` ✗
> Quote: "Creating data models and implementing transformation/cleansing/enrichment processes"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs without specific technical context, scale figures, methodology names, or domain application knowledge that would indicate hiring manager authorship.

**Run 3:** `mixed` ✓
> Quote: "Creating data models and implementing transformation/cleansing/enrichment processes"
> Verified: ✓ found in JD
> Reasoning: Technical specificity in infrastructure responsibilities (data models, transformation, orchestration) is mixed with generic language around strategy alignment and BI adoption.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: Core responsibilities focus on building and optimizing data platform infrastructure for internal consumption rather than serving specific business functions.

**Run 2:** `internal_data` ✓
> Quote: "Promoting BI adoption and data literacy across EMEA"
> Verified: ✓ found in JD
> Reasoning: Primary audience is the data function and analytics consumers within the organization rather than commercial, product, finance, or external stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Directing data integration and pipeline orchestration across the organization"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building and enhancing the data platform to serve internal data consumers and data literacy, not commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Define and prioritise technical requirements that align with the overall business strategy"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities use strategic verbs (define, prioritise, directing, establishing) indicating the role sets direction for data infrastructure and initiatives.

**Run 2:** `strategic` ✓
> Quote: "Define and prioritise technical requirements that align with the overall business strategy"
> Verified: ✓ found in JD
> Reasoning: Opening responsibility uses the strategic verb 'define' to establish that the role sets technical direction and priorities aligned with business needs rather than executing work assigned by others.

**Run 3:** `strategic` ✓
> Quote: "Define and prioritise technical requirements that align with the overall business strategy"
> Verified: ✓ found in JD
> Reasoning: The verbs 'define', 'prioritise', and 'directing' indicate the role sets technical direction and establishes standards rather than executing direction from others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for the candidate to use AI tools or build AI infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools (Copilot, Claude Code, Cursor), AI-enabled data infrastructure, or AI capabilities expected of the candidate; focus is traditional BI and data engineering.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI-enablement responsibilities expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "CI/CD standards experience for data engineering"
> Verified: ✓ found in JD
> Reasoning: CI/CD appears in required qualifications as a skill but not as an owned responsibility with accountability for defining or owning testing frameworks.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: Testing, data quality frameworks, data contracts, or observability practices are not mentioned in responsibilities or requirements sections.

**Run 3:** `absent` ✗
> Quote: "Creating data models and implementing transformation/cleansing/enrichment processes"
> Verified: ✓ found in JD
> Reasoning: While data cleansing is mentioned, no testing frameworks, data contracts, or data quality ownership practices appear in the responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'absent', 'absent']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: Compliance and governance are present as responsibilities but the overall JD is framed around capability and optimization rather than preventing regulatory or business risk.

**Run 2:** `moderate` ✗
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: Compliance is mentioned as a responsibility area, but overall role framing emphasizes delivery and infrastructure building rather than risk prevention or stakeholder trust.

**Run 3:** `moderate` ✗
> Quote: "Establishing documentation, version control, and data privacy compliance"
> Verified: ✓ found in JD
> Reasoning: Regulatory compliance is explicitly mentioned as a responsibility, but it is framed as one technical concern among others rather than as the dominant risk or trust driver.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
