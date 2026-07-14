# Trace: 2026-04-08_tem_staff-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Staff Analytics Engineer — tem

**URL:** https://jobs.ashbyhq.com/tem/66b06873-4d08-4347-9d16-dc5c24ae481c  
**Location:** United Kingdom (Remote)  
**Employment Type:** Full-time  
**Salary:** £100,500/year

---

## About tem

tem is rebuilding energy transactions to be transparent and fair. The company has developed AI-native transaction infrastructure for buying, selling, and pricing electricity. After closing a $75 million Series B in late 2025, tem is positioned for global expansion.

---

## The Role

This hands-on, individual contributor position focuses on building the analytics foundation. You'll work end-to-end on the analytics layer, using dbt for transformations and Omni as the semantic layer. The role involves partnering with Marketing, Finance, Operations, and Data Engineering teams.

---

## Key Responsibilities

- Design and maintain core dbt models representing business areas like customers, revenue, and operations.
- Define and implement company metrics in Omni for self-serve analytics.
- Lead cross-domain analytics projects spanning multiple teams.
- Balance speed, accuracy, and maintainability in data modeling decisions.
- Establish data quality standards using tests, CI/CD, and documentation.
- Partner with Data Engineering to diagnose issues and optimize warehouse performance.

---

## Must-Have Requirements

- Strong analytics engineering experience in fast-moving environments.
- Ability to set direction for analytics patterns, standards, and strategy.
- Production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture.
- Excellent SQL and data modeling fundamentals.
- Semantic layer/BI tool experience (Omni, Looker, or similar).
- Experience defining metrics with business stakeholders.
- Comfort operating with ambiguity.

---

## Nice-to-Haves

- Marketing and Finance data experience.
- Early-stage analytics stack building.
- Experimentation, funnel analysis, or unit economics familiarity.

---

## Benefits

- Stock options for team ownership.
- 25 days holiday plus public holidays (customizable); birthday day off.
- Fully remote, distributed across Europe.
- £1,200/€1,200 annual home office budget.
- £150/€150 monthly wellbeing budget.
- Twice-yearly salary reviews using market data.

---

## Interview Process

Approximately 2–3 weeks total:
1. Talent team call (30 mins)
2. Behaviour interview with Data Manager (60 mins)
3. Technical interview with team (90 mins)
4. Culture-add interview with stakeholders (45 mins)

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | high | high | high | moderate | 33% | ✓ |
| collaboration_width | 4 | 4 | 4 | 4 | 100% | ✓ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | mixed | internal_data | 33% | ✓ |
| autonomy_level | strategic | strategic | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality standards, testing, and CI/CD as core expectations, with rigour signals significantly outweighing the single mention of 'fast-moving environments.'

**Run 2:** `rigour` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasises data quality, testing, and CI/CD as core expectations rather than shipping speed.

**Run 3:** `rigour` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, testing standards, and technical rigor with only one velocity signal ('fast-moving environments' in requirements), making rigour the dominant orientation.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: The company operates energy transaction infrastructure (inherently financial), and the JD explicitly calls for models representing revenue data, which directly impacts financial accuracy.

**Run 2:** `high` ✓
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: Revenue attribution and financial modeling are explicitly named as core responsibilities, placing data errors in the high-risk category.

**Run 3:** `moderate` ✗
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: The role supports business operations and metrics without explicit regulatory, compliance, or financial reporting language, placing it at moderate risk.

⚠ **LLM inconsistency**: runs gave ['high', 'high', 'moderate']

### collaboration_width
**Manual:** `4`

**Run 1:** `4` ✓
> Quote: "Marketing; Finance; Operations; Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are listed as partners in the opening description: Marketing, Finance, Operations, and Data Engineering.

**Run 2:** `4` ✓
> Quote: "The role involves partnering with Marketing, Finance, Operations, and Data Engineering teams."
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly listed as collaboration partners in the role description.

**Run 3:** `4` ✓
> Quote: "Marketing, Finance, Operations, and Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Four distinct named partner teams are explicitly listed in the role description as collaboration partners.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "This hands-on, individual contributor position focuses on building the analytics foundation."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role as building analytics infrastructure with explicit named tools in responsibilities, and mentions an existing Data Engineering team, suggesting a company beyond early-stage but with analytics still under construction.

**Run 2:** `mid` ✗
> Quote: "This hands-on, individual contributor position focuses on building the analytics foundation."
> Verified: ✓ found in JD
> Reasoning: The analytics function exists with named tools (dbt, Omni) and a dedicated Data Engineering team, but the framing of 'building the foundation' under a Series B company indicates growth toward maturity rather than full establishment.

**Run 3:** `mid` ✗
> Quote: "building the analytics foundation"
> Verified: ✓ found in JD
> Reasoning: The role involves building out analytics infrastructure with established named tools (dbt, Omni) and an existing Data Engineering team partnership, indicating mid-stage maturity.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture."
> Verified: ✓ found in JD
> Reasoning: The requirements include precise technical specifications (row volumes, specific dbt patterns, optimization concepts) that only someone who has performed the role would articulate with this specificity.

**Run 2:** `mixed` ✗
> Quote: "Production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture."
> Verified: ✓ found in JD
> Reasoning: The requirements show technical specificity about scale and complexity (1B rows daily, custom macros), but the responsibilities remain mostly generic action verbs, indicating input from both hiring manager and recruiter.

**Run 3:** `mixed` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Most responsibilities use generic verbs ('Design', 'Define', 'Partner') while this one shows specific technical context (tests, CI/CD, standards), indicating mixed authorship.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Define and implement company metrics in Omni for self-serve analytics."
> Verified: ✓ found in JD
> Reasoning: The core mission is building analytics infrastructure and a metrics layer for downstream internal consumers, prioritizing the data platform itself over serving commercial, product, or finance stakeholders directly.

**Run 2:** `mixed` ✗
> Quote: "The role involves partnering with Marketing, Finance, Operations, and Data Engineering teams."
> Verified: ✓ found in JD
> Reasoning: Four distinct stakeholder categories (finance, commercial, operations, internal data platform) have equal emphasis in the responsibilities, indicating genuinely distributed audience rather than primary focus on one.

**Run 3:** `internal_data` ✓
> Quote: "Define and implement company metrics in Omni for self-serve analytics."
> Verified: ✓ found in JD
> Reasoning: The primary mission is building analytics infrastructure and enabling self-serve analytics for internal data consumers rather than serving specific business functions.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The must-have requirements explicitly expect the candidate to set direction and define standards, supported by responsibilities like 'define,' 'lead,' and 'establish,' indicating strategic ownership rather than execution of set priorities.

**Run 2:** `mixed` ✗
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The role explicitly combines hands-on individual contributor execution with strategic direction-setting authority, making this genuinely mixed autonomy.

**Run 3:** `strategic` ✓
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The role is explicitly expected to set direction, define standards, and establish practices rather than execute scoped work set by others.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds AI-native infrastructure, the JD asks for standard analytics engineering work with no expectation of AI coding tools, GenAI infrastructure, or AI data skills from the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The company builds AI-native infrastructure but the candidate role is standard analytics engineering with no expected AI skill demonstration from the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds AI-native infrastructure, the role requires standard analytics engineering work (dbt, SQL, metrics) with no AI tool usage or AI data pipeline expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as responsibilities the candidate owns and establishes, using the ownership verb 'establish' with explicit testing and CI/CD tools.

**Run 2:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as something the candidate owns and establishes as company standards, not just tools they use.

**Run 3:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as a responsibility the candidate owns through the verb 'establish', not merely tools listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Balance speed, accuracy, and maintainability in data modeling decisions."
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are operational concerns reflected in testing standards and CI/CD, but accuracy is balanced with speed rather than dominant, and there is no compliance or stakeholder-trust framing.

**Run 2:** `moderate` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a concern shown through repeated emphasis on data quality, accuracy, and warehouse performance, but there is no compliance, regulatory, or stakeholder-trust framing indicating high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Balance speed, accuracy, and maintainability in data modeling decisions."
> Verified: ✓ found in JD
> Reasoning: Accuracy and reliability are valued but explicitly balanced against speed, reflecting operational concerns about performance and data quality rather than regulatory or trust-based risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
