# Trace: 2026-04-10_decathlon_senior-data-analyst-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Data Analyst & Analytics Engineer - Franchise (H/F) — Decathlon Digital FR

**URL:** https://job-boards.eu.greenhouse.io/decathlontechnology/jobs/4796699101?gh_src=cb30d7c2teu
**Location:** Lille - Btwin Village, Nord, France
**Salary:** Not listed

---

## Key Responsibilities

### Business Analysis & Insights
- Support franchise partners' decisions regarding stock, supply chain, and pricing
- Identify trends and anomalies; translate findings into "clear, actionable recommendations"

### Data Visualization & Delivery (Tableau)
- Design and maintain dashboards for franchisees and internal teams
- Adapt existing dashboards from other business domains
- Implement row-level security

### Analytics Engineering (dbt & SQL)
- Build data marts and business layers using dbt on Databricks
- Code complex business logic (royalties, taxable turnover, margins)

### Stakeholder Management
- Negotiate access to internal data sources
- Support franchisees in interpreting KPIs
- Gather feedback for product improvement

### Data Culture
- Promote data-driven decision-making
- Document KPI definitions and business rules

---

## Required Qualifications

- 3+ years in BI, data analysis, or analytics engineering
- Advanced SQL (window functions, joins, performance optimization)
- Expert Tableau proficiency (LODs, parameters, complex blending)
- Understanding of data modeling and star schema concepts
- Fluent English (mandatory); French preferred
- Self-directed problem-solving approach
- Ability to communicate technical concepts to non-technical audiences

---

## Preferred Qualifications

- Retail industry experience
- Understanding of supply chain, inventory rotation, pricing elasticity
- Tableau Server management experience

---

## Technical Stack

- **Storage/Compute:** Databricks (Lakehouse)
- **Transformation:** dbt with SQL
- **Visualization:** Tableau Software

---

## Why Join

- Direct business impact on partner operations
- Early-stage opportunity to build and structure analytics capabilities
- Modern data technology environment

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 1 | 0 | 1 | 33% | ✗ |
| data_team_maturity | early | mid | early | mid | 33% | ✗ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Document KPI definitions and business rules"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance, documentation, and quality concerns throughout, with no signals of speed or rapid delivery orientation.

**Run 2:** `rigour` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Emphasis on handling complex, precise business logic (financial calculations) signals that correctness and structural rigor are expected rather than speed of delivery.

**Run 3:** `rigour` ✗
> Quote: "Document KPI definitions and business rules"
> Verified: ✓ found in JD
> Reasoning: Documentation and standards emphasis indicates governance and rigor focus over speed.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Data errors affect operational business decisions without regulatory, compliance, or financial reporting consequences.

**Run 2:** `moderate` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Data errors affect operational business decisions without explicit regulatory or compliance framing, placing this in the moderate rather than high-risk category.

**Run 3:** `moderate` ✓
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Financial calculations affect franchise operational decisions but are not company-wide reporting or regulatory compliance.

### collaboration_width
**Manual:** `4`

**Run 1:** `1` ✗
> Quote: "franchisees; franchise partners"
> Verified: ✓ found in JD
> Reasoning: Only franchisees and franchise partners are explicitly named as collaboration partners; 'internal teams' is too generic to count.

**Run 2:** `0` ✗
> Quote: "Design and maintain dashboards for franchisees and internal teams"
> Verified: ✓ found in JD
> Reasoning: The JD mentions only generic 'internal teams' and external franchisees as stakeholders, without naming specific internal departments like Finance, Product, or Engineering.

**Run 3:** `1` ✗
> Quote: "franchise partners"
> Verified: ✓ found in JD
> Reasoning: Only franchise partners are explicitly named as a collaboration partner; internal teams are mentioned but not specifically named.

⚠ **Disagreement**: manual=`4` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['1', '0', '1']

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Adapt existing dashboards from other business domains"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and named tools (dbt, Databricks, Tableau) are in place and being extended, indicating a growing data function rather than greenfield.

**Run 2:** `early` ✓
> Quote: "Early-stage opportunity to build and structure analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: This explicitly frames the analytics function as early-stage and requiring structural building, indicating the data function is not yet fully established.

**Run 3:** `mid` ✗
> Quote: "Early-stage opportunity to build and structure analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: Existing tech stack and dashboards indicate established infrastructure, but 'build and structure' language suggests function is not yet fully mature.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'early', 'mid']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Contains technically specific responsibilities with domain context (royalties, row-level security, dbt implementation) alongside generic stakeholder management language.

**Run 2:** `mixed` ✓
> Quote: "Build data marts and business layers using dbt on Databricks; Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Technical responsibilities demonstrate hiring manager specificity with named tools and precise business logic, while stakeholder responsibilities employ generic boilerplate, indicating mixed authorship.

**Run 3:** `mixed` ✓
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Specific business logic and named technical stack indicate domain knowledge, but many generic responsibility action verbs present throughout.

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The primary audience is franchisees as external commercial partners, focused on their operational and GTM-adjacent decisions.

**Run 2:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The primary stakeholder audience is franchise partners making business operations decisions, positioning this as commercial stakeholder support within a franchise partnership model.

**Run 3:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Role primarily serves franchisees' commercial and operational decisions; partnerships and external stakeholders are the main audience.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Responsibilities center on delivering within a pre-scoped domain and supporting defined franchise needs rather than setting analytical strategy.

**Run 2:** `mixed` ✗
> Quote: "Early-stage opportunity to build and structure analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic framing around building and structuring the analytics function with mostly execution-oriented support responsibilities for franchisees and internal teams.

**Run 3:** `execution` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Role frames as supporting stakeholder decisions and delivering analytics products rather than defining analytics strategy.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools (Copilot, Claude Code, Cursor), AI-ready data infrastructure, or AI-adjacent responsibilities expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data infrastructure, or GenAI applications expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, coding assistants, or data infrastructure for AI systems expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing, data quality, or observability signal in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: No data quality frameworks, testing tools, or observability practices are mentioned in responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD does not mention testing frameworks, data quality practices, data contracts, or observability as a candidate responsibility or requirement.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: JD mentions no testing frameworks, data contracts, observability, or quality ownership responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: JD is framed around capability building and delivery impact rather than risk prevention, compliance, or preventing bad outcomes.

**Run 2:** `moderate` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: The role handles sensitive financial calculations (royalties, taxes) affecting partner operations with direct business impact, indicating moderate concern for accuracy and reliability without explicit compliance framing.

**Run 3:** `none` ✗
> Quote: "No loss aversion signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: JD framed in delivery and capability terms with no explicit risk prevention, compliance, or data trustworthiness language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'none']
