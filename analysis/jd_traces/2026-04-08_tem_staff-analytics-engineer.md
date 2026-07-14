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
| velocity_vs_rigour | mixed | mixed | rigour | rigour | 33% | ✗ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 4 | 4 | 4 | 4 | 100% | ✓ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | mixed | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Balance speed, accuracy, and maintainability in data modeling decisions."
> Verified: ✓ found in JD
> Reasoning: The JD explicitly pairs speed with accuracy and maintainability, and includes multiple rigour signals (testing, CI/CD, data quality standards, production optimization) alongside velocity signals (fast-moving environments, operating with ambiguity).

**Run 2:** `rigour` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes correctness and reliability through data quality standards, CI/CD, and careful architectural decisions, with only one velocity signal in the requirements section.

**Run 3:** `rigour` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes quality standards, testing, and CI/CD as core expectations, with rigour signals substantially outweighing the single 'fast-moving environments' requirement.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

⚠ **LLM inconsistency**: runs gave ['mixed', 'rigour', 'rigour']

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: While the company operates in energy transactions, the JD language focuses on operational and revenue analytics without explicit regulatory, compliance, or financial reporting signals.

**Run 2:** `moderate` ✗
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: Though the sector (fintech/energy) implies high risk, the JD language focuses on analytics infrastructure without explicit financial reporting, compliance, or regulatory framing.

**Run 3:** `moderate` ✗
> Quote: "Design and maintain core dbt models representing business areas like customers, revenue, and operations."
> Verified: ✓ found in JD
> Reasoning: The role involves revenue data in a fintech company, but the JD uses generic analytics language without explicit financial reporting, compliance, or regulatory signals.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `4`

**Run 1:** `4` ✓
> Quote: "Marketing, Finance, Operations, and Data Engineering teams"
> Verified: ✓ found in JD
> Reasoning: Four distinct named partner functions are explicitly mentioned as collaboration partners.

**Run 2:** `4` ✓
> Quote: "The role involves partnering with Marketing, Finance, Operations, and Data Engineering teams."
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly listed as collaboration partners: Marketing, Finance, Operations, and Data Engineering.

**Run 3:** `4` ✓
> Quote: "Marketing, Finance, Operations, and Data Engineering teams"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams explicitly listed as collaboration partners in the responsibilities.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "This hands-on, individual contributor position focuses on building the analytics foundation."
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure (dbt, Omni, Data Engineering team) is in place but the role is establishing patterns, standards, and practices rather than operating a mature platform at scale.

**Run 2:** `mid` ✗
> Quote: "This hands-on, individual contributor position focuses on building the analytics foundation."
> Verified: ✓ found in JD
> Reasoning: The JD describes building out analytics infrastructure with existing tools (dbt, Omni) and a separate Data Engineering team already in place, indicating a growing function rather than early-stage bootstrap.

**Run 3:** `mid` ✗
> Quote: "This hands-on, individual contributor position focuses on building the analytics foundation."
> Verified: ✓ found in JD
> Reasoning: The team has deployed named tools (Omni, dbt) at scale (~1B rows daily) with multiple roles present, indicating mid-stage growth rather than early or mature enterprise infrastructure.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture."
> Verified: ✓ found in JD
> Reasoning: The inclusion of specific scale numbers (~1B rows daily) and precise technical application context demonstrates hands-on expertise that only someone performing this work would specify.

**Run 2:** `mixed` ✗
> Quote: "Production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture."
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical details (dbt patterns, scale numbers, tool names) alongside generic collaboration language, indicating input from both hiring manager and recruiter.

**Run 3:** `hiring_manager` ✓
> Quote: "Production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and architecture."
> Verified: ✓ found in JD
> Reasoning: The presence of specific scale metrics, dbt architecture details, and named tools with implementation context demonstrates technical specificity only someone doing this job would articulate.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Define and implement company metrics in Omni for self-serve analytics."
> Verified: ✓ found in JD
> Reasoning: The primary focus is building the analytics foundation and enabling internal analytics consumers through self-serve infrastructure rather than serving external commercial, product, or finance stakeholders directly.

**Run 2:** `internal_data` ✓
> Quote: "Define and implement company metrics in Omni for self-serve analytics."
> Verified: ✓ found in JD
> Reasoning: The primary responsibility is building a self-serve analytics platform and infrastructure for internal analytics consumers, not serving external customers or GTM teams.

**Run 3:** `internal_data` ✓
> Quote: "Define and implement company metrics in Omni for self-serve analytics."
> Verified: ✓ found in JD
> Reasoning: The primary focus is building analytics infrastructure and self-serve capabilities for data platform consumers rather than serving GTM, product, or finance stakeholders specifically.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly expected to set direction for analytics patterns and establish standards, indicating strategic ownership rather than execution of prescribed work.

**Run 2:** `strategic` ✓
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The role explicitly requires setting direction for analytics patterns and strategy, with responsibilities using strategic verbs like 'define', 'establish', and 'lead'.

**Run 3:** `strategic` ✓
> Quote: "Ability to set direction for analytics patterns, standards, and strategy."
> Verified: ✓ found in JD
> Reasoning: The role explicitly requires setting direction for analytics patterns and strategy while being hands-on, not executing direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds AI-native products, the JD contains no expectation for the candidate to demonstrate AI skills, use AI tools, or build AI-ready data infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI skill signals appear in the candidate requirements; the company's AI-native infrastructure is not reflected in candidate expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds AI-native products, the analytics role has no expectation of AI tool usage, agentic workflows, or AI infrastructure work from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as a core responsibility the candidate owns and establishes, not merely as tools or practices to be familiar with.

**Run 2:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality frameworks are framed as something the candidate owns and defines using the action verb 'establish', not just as a listed tool.

**Run 3:** `responsibility` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as something the candidate owns and establishes using the action verb 'establish,' signaling clear ownership.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Data quality and operational reliability are concerns but framed in capability-building and maintainability terms rather than risk mitigation, compliance, or preventing stakeholder trust damage.

**Run 2:** `moderate` ✗
> Quote: "Balance speed, accuracy, and maintainability in data modeling decisions."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and accuracy are concerns secondary to the primary framing of building analytics capability, without explicit compliance or risk language.

**Run 3:** `moderate` ✗
> Quote: "Establish data quality standards using tests, CI/CD, and documentation."
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data accuracy are explicit concerns through quality standards and performance optimization, but there is no high-level compliance or stakeholder trust risk framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
