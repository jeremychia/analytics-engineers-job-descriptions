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
| domain_risk | moderate | high | moderate | moderate | 33% | ✓ |
| collaboration_width | 4 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | early | mid | mid | early | 33% | ✗ |
| jd_authorship | mixed | hiring_manager | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | execution | execution | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize technical precision, complexity, and correctness (advanced SQL, expert Tableau, row-level security, data modeling) with no mentions of speed or rapid delivery.

**Run 2:** `rigour` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building structured data marts, complex business logic, and documenting KPI definitions and business rules signals quality and precision over speed.

**Run 3:** `rigour` ✗
> Quote: "Document KPI definitions and business rules"
> Verified: ✓ found in JD
> Reasoning: Documentation, governance (row-level security), and data modeling rigor are emphasized throughout responsibilities, with no velocity-oriented language like 'fast-paced' or 'ship quickly'.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `high` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Royalties and taxable turnover calculations directly affect partner payments and tax obligations, making data accuracy a financial and regulatory concern.

**Run 2:** `moderate` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Data errors affect partner business decisions and financial operations (royalties, taxable turnover) but lack explicit financial reporting, compliance, or regulatory language that would signal high risk.

**Run 3:** `moderate` ✓
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Retail franchise operations include financial calculations but lack regulatory compliance, audit, or regulatory language that would elevate this to high risk.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']

### collaboration_width
**Manual:** `4`

**Run 1:** `1` ✗
> Quote: "franchise partners"
> Verified: ✓ found in JD
> Reasoning: Franchisees/franchise partners are the only explicitly named collaboration partners mentioned across multiple responsibilities (Support franchise partners' decisions, Support franchisees in interpreting KPIs).

**Run 2:** `1` ✗
> Quote: "Support franchisees in interpreting KPIs"
> Verified: ✓ found in JD
> Reasoning: Only franchisees/franchise partners are explicitly named as a distinct collaboration group; other references to 'internal teams' are generic and do not count.

**Run 3:** `1` ✗
> Quote: "franchise partners"
> Verified: ✓ found in JD
> Reasoning: Franchise partners are explicitly named as collaboration partners; no internal functional teams (Product, Finance, Engineering, Data Science) are named.

⚠ **Disagreement**: manual=`4` vs LLM majority=`1`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Build data marts and business layers using dbt on Databricks"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Databricks, Tableau) are deployed in active use, and existing dashboards are being adapted, indicating established infrastructure that is being extended rather than built from zero.

**Run 2:** `mid` ✗
> Quote: "Early-stage opportunity to build and structure analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: While infrastructure exists (Databricks, dbt, Tableau), the language of 'build and structure' combined with adaptation of existing dashboards suggests a growing data function in mid-stage maturity.

**Run 3:** `early` ✓
> Quote: "Early-stage opportunity to build and structure analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly frames this as an early-stage role focused on building and structuring analytics infrastructure from the ground up.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'mid', 'early']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Specific technical knowledge appears throughout (exact business logic requirements, Tableau features like LODs and parameters, star schema methodology), indicating a hiring manager who understands the hands-on work required.

**Run 2:** `mixed` ✓
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: The JD combines hiring-manager-level specificity about business domain logic and technical tools (dbt on Databricks) with generic support-oriented phrases like 'support franchise partners' and 'identify trends and anomalies.'

**Run 3:** `hiring_manager` ✗
> Quote: "Code complex business logic (royalties, taxable turnover, margins)"
> Verified: ✓ found in JD
> Reasoning: Specific business logic examples (royalties, taxable turnover, margins) demonstrate technical depth only someone doing this job would write.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: Franchisees are revenue-generating partners, and the role's primary purpose is supporting their success and operational decisions, which aligns with commercial/partnership-focused functions.

**Run 2:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The primary audience is franchise partners making commercial decisions about their operations, placing this role in the commercial stakeholder category.

**Run 3:** `commercial` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The primary audience is franchise partners (external commercial stakeholders) for operational and business decisions around inventory management and pricing.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The role is framed around supporting, building, and maintaining existing priorities rather than setting direction or defining strategy.

**Run 2:** `execution` ✓
> Quote: "Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The repeated use of 'support' and 'design/maintain' verbs, combined with responsibilities framed around executing against partner and internal team needs, indicates an execution-focused role.

**Run 3:** `mixed` ✗
> Quote: "Build data marts and business layers using dbt on Databricks; Support franchise partners' decisions regarding stock, supply chain, and pricing"
> Verified: ✓ found in JD
> Reasoning: The role balances strategic elements (building and structuring analytics infrastructure, negotiating data access) with execution elements (supporting franchisees, maintaining dashboards).

⚠ **LLM inconsistency**: runs gave ['execution', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, AI tools, or AI-ready data infrastructure anywhere in the job description.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills expected from the candidate, whether as a tool user or infrastructure enabler.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, AI data infrastructure, or AI-related candidate expectations anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No mention of testing practices, data quality frameworks, data contracts, or observability anywhere in the JD.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no explicit mention of testing, data quality frameworks, observability, or data contracts in either the responsibility or requirements sections.

**Run 3:** `absent` ✗
> Quote: "Storage/Compute: Databricks (Lakehouse); Transformation: dbt with SQL; Visualization: Tableau Software"
> Verified: ⚠ NOT found verbatim
> Reasoning: The technical stack lists storage, transformation, and visualization tools but includes no testing frameworks, data quality tools, or observability platforms.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement row-level security"
> Verified: ✓ found in JD
> Reasoning: Row-level security indicates some concern for data protection and risk mitigation, but the overall role framing emphasizes capability building and business impact delivery rather than preventing failures.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in capability and business impact terms with no mention of regulatory compliance, risk management, or reliability concerns.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around capability-building and business impact opportunities with no risk, compliance, regulatory, or data trust language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'none']
