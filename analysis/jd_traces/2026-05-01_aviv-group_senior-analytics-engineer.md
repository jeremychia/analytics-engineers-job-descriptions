# Trace: 2026-05-01_aviv-group_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — AVIV Group

**URL:** https://www.linkedin.com/jobs/view/4378126108/
**Location:** Berlin, Germany
**Salary:** Extremely competitive comp + equity

---

## Key Responsibilities

- Developing and maintaining dbt models transforming raw data into analytics-ready datasets in Snowflake
- Defining data contracts, metrics, and semantic models across business domains
- Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery
- Applying testing, documentation, and version control best practices
- Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"

---

## Required Qualifications

- 5+ years in analytics engineering, data modeling, or advanced analytics
- Strong SQL and dbt skills including "modeling, testing, and macro development"
- Hands-on experience with Snowflake or comparable cloud data warehouse
- Understanding of data modeling principles, ELT workflows, and modern data stack tools
- Strong communication and collaboration abilities across teams

---

## Preferred / Bonus Skills

- Data contracts and semantic modeling expertise
- Bronze/silver/gold layer architecture
- CI/CD pipeline design for data workflows
- Data governance and monitoring practices
- Modern data stack tools and integrations

---

## Additional Information

**Seniority Level:** Mid-Senior
**Employment Type:** Full-time
**Posted:** 10 hours ago with 68 applicants
**Recruiter Contact:** Ben Johnson, Principal Talent Partner

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | hiring_manager | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | strategic | mixed | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes correctness, governance, and reliability across testing, data contracts, and monitoring with no velocity or speed language present.

**Run 2:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, documentation, governance, CI/CD, and monitoring with no countervailing velocity language.

**Run 3:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize testing, documentation, governance, monitoring, and reliable delivery with no velocity language like fast-paced or rapid iteration.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and cross-functional delivery but contains no financial, regulatory, or compliance language that would signal high risk.

**Run 2:** `moderate` ✓
> Quote: "transforming raw data into analytics-ready datasets in Snowflake"
> Verified: ✓ found in JD
> Reasoning: The role is generic SaaS data platform work without explicit financial reporting, compliance, or regulatory language to signal high risk.

**Run 3:** `moderate` ✓
> Quote: "reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The JD focuses on data infrastructure and platform work without explicit financial reporting, compliance, regulatory, or audit language that would indicate high-risk domain.

### collaboration_width
**Manual:** `4`

**Run 1:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Only two distinct named partner functions appear in the responsibilities: analysts and data scientists; 'business stakeholders' is too generic to count.

**Run 2:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Only two named partner functions explicitly identified in the responsibilities section.

**Run 3:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Two named role cohorts explicitly listed as collaboration partners; business stakeholders is too generic to count per the rules.

⚠ **Disagreement**: manual=`4` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Contributing to data platform architecture including bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools appear in responsibilities indicating an established function, multiple data roles are implied, and the work involves advancing/scaling existing infrastructure.

**Run 2:** `mid` ✓
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: Existing named infrastructure (dbt, Snowflake, bronze/silver/gold layers) and the hiring of a senior person indicates a team that is mature enough to have built something but still growing.

**Run 3:** `mid` ✓
> Quote: "Contributing to data platform architecture including bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools and architectural patterns appear in responsibilities with specific context, indicating existing infrastructure being extended rather than built from zero.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: Technical specificity throughout (named tools like dbt/Snowflake with context, specific architectural patterns like bronze/silver/gold, methodology names like data contracts and semantic models) indicates authorship by someone with hands-on domain experience.

**Run 2:** `hiring_manager` ✗
> Quote: "Developing and maintaining dbt models transforming raw data into analytics-ready datasets in Snowflake"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about tools, their application context, and methodology (dbt models, Snowflake, bronze/silver/gold) indicates someone with hands-on experience wrote this.

**Run 3:** `hiring_manager` ✗
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: Specific technical practices and methodologies (data contracts, semantic models, bronze/silver/gold architecture) demonstrate someone with hands-on analytics engineering experience wrote this.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Contributing to data platform architecture including bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role primarily serves the data platform consumers (analysts, data scientists) and the data function itself through infrastructure and governance work.

**Run 2:** `internal_data` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The primary collaboration partners are analysts and data scientists, and the core responsibilities are building data platform infrastructure.

**Run 3:** `internal_data` ✓
> Quote: "Contributing to data platform architecture including bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"
> Verified: ⚠ NOT found verbatim
> Reasoning: Responsibilities emphasize building the data platform itself that serves internal data consumers (analysts, data scientists) rather than commercial, product, or finance functions.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: The use of 'defining' as the primary action verb signals authority to set standards and architecture direction, not just execute scoped work.

**Run 2:** `mixed` ✓
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (defining data contracts and models) with execution responsibilities (developing and maintaining models).

**Run 3:** `mixed` ✓
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: The role has strategic authority to define data contracts and models across domains while contributing (not owning) to the broader platform architecture.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding tools, AI-ready data foundations, or GenAI applications anywhere in the JD responsibilities or requirements.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, agentic workflows, or AI/ML infrastructure work.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, LLMs, GenAI applications, or AI-related responsibilities in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Testing appears as an owned responsibility in the main duties section as an active practice the candidate will apply and maintain, not merely as a skill listed in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Testing appears as an action verb in the responsibilities section, indicating the candidate is expected to own/apply testing practices.

**Run 3:** `responsibility` ✗
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an active responsibility to apply as part of daily work, not merely as a tool skill listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and governance are mentioned but secondary to the primary framing of building and maintaining data infrastructure; no regulatory or trust-focused language dominates.

**Run 2:** `moderate` ✗
> Quote: "reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a concern without compliance/regulatory framing, indicating moderate risk sensitivity focused on pipeline stability rather than existential risk.

**Run 3:** `moderate` ✗
> Quote: "reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is mentioned as a value but the dominant framing is capability building; no compliance, regulatory, or risk-prevention language present.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
