# Trace: 2026-04-09_ai-futures_data-team-lead

## JD text (fed to classifier, Layer B stripped)

```
# Data Team Lead — AI Futures

**URL:** https://www.linkedin.com/jobs/view/4398675612/
**Location:** Stuttgart Region (Hybrid)
**Seniority:** Mid-Senior level
**Employment Type:** Full-time

**Salary:** Base up to €130,000 + performance bonus up to 20%

---

## Key Responsibilities

- Designing and building a modern data platform for "high-volume, real-time vehicle and transaction data"
- Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner
- Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
- Growing and mentoring a data engineering team and contributing to hiring decisions
- Collaborating with OEM partners and external developers to productionise pipelines at pace

---

## Required Qualifications

- Proven experience building pipelines within modern data stacks such as data lakes, medallion architectures, or SQL-based platforms
- Strong Python skills across both high-code and low-code tooling
- Leadership experience or a genuine ambition to lead for the first time
- Microsoft ecosystem confidence including Power BI and Azure; Kafka or Spark experience is a strong plus
- Interest in automotive, IoT, or mobility data is highly desirable
- Professional-level German required

---

## Preferred / Bonus Skills

- Kafka or Spark experience
- Interest in automotive, IoT, or mobility data sectors
- Experience with RapidMiner or similar low-code data platforms

---

## Benefits

- Base salary: up to €130,000
- Performance bonus: up to 20%
- Equity and options package
- 30 days annual leave
- Private health insurance
- Learning & development budget
- Relocation support

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | velocity | velocity | velocity | rigour | 33% | ✓ |
| domain_risk | high | moderate | moderate | high | 33% | ✗ |
| collaboration_width | 2 | 0 | 1 | 1 | 33% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | hiring_manager | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | commercial | internal_data | internal_data | 33% | ✓ |
| autonomy_level | strategic | mixed | strategic | strategic | 33% | ✓ |
| ai_role |  | ai_enabler | none | none | 33% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `velocity`

**Run 1:** `velocity` ✓
> Quote: "productionise pipelines at pace"
> Verified: ✓ found in JD
> Reasoning: The only signal phrase is 'at pace' (velocity), while rigour signals like data quality, testing, CI/CD, compliance, or governance are entirely absent.

**Run 2:** `velocity` ✓
> Quote: "Collaborating with OEM partners and external developers to productionise pipelines at pace"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly prioritizes shipping pace without naming quality controls, testing frameworks, compliance, or governance as core responsibilities.

**Run 3:** `rigour` ✗
> Quote: "Designing and building a modern data platform for "high-volume, real-time vehicle and transaction data""
> Verified: ✓ found in JD
> Reasoning: The JD emphasises modern architectural patterns (medallion architectures, data lakes, SQL-based platforms) and platform design over speed; a single "at pace" phrase does not shift the rigour-dominant orientation.

⚠ **LLM inconsistency**: runs gave ['velocity', 'velocity', 'rigour']

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ✓ found in JD
> Reasoning: The role involves financial decisioning and payment processing in a fintech/automotive context, implying business impact, but the JD lacks explicit regulatory, compliance, or audit language that would elevate this to high risk.

**Run 2:** `moderate` ✗
> Quote: "Building infrastructure that powers AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ⚠ NOT found verbatim
> Reasoning: Pricing and payment errors have direct financial impact, but the JD lacks regulatory, compliance, or audit language that would elevate this to high risk.

**Run 3:** `high` ✓
> Quote: "Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems""
> Verified: ✓ found in JD
> Reasoning: Explicit mention of financial decisioning and payments—core financial functions with direct business consequence—elevates risk despite absence of regulatory language.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'high']

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "No named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: OEM partners and external developers are mentioned but are too generic to count as named teams or functions under the definition.

**Run 2:** `1` ✗
> Quote: "OEM partners"
> Verified: ✓ found in JD
> Reasoning: Only OEM partners are explicitly named as a distinct collaboration group; external developers is generic phrasing without specific team identity.

**Run 3:** `1` ✗
> Quote: "OEM partners"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named external collaboration partner; no internal functions (Finance, Product, Engineering, etc.) are named.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['0', '1', '1']

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team and contributing to hiring decisions"
> Verified: ✓ found in JD
> Reasoning: A team already exists and requires growth; named tools appear in responsibilities (RapidMiner, medallion architectures, Power BI, Azure); the focus is modernization and scaling, not establishment from zero.

**Run 2:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team and contributing to hiring decisions"
> Verified: ✓ found in JD
> Reasoning: The phrasing indicates an existing data team being expanded with named tools (Python, RapidMiner, medallion architecture), suggesting mid-stage maturity beyond greenfield but not yet fully specialized.

**Run 3:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team and contributing to hiring decisions"
> Verified: ✓ found in JD
> Reasoning: Team already exists and is actively growing with hiring; multiple named technical platforms and a mentorship function imply an established but expanding team, not greenfield.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: The specificity of named tools (RapidMiner), architecture patterns (medallion architectures, data lakes), and domain context (high-volume real-time vehicle/transaction data) indicates deep technical knowledge of the actual role.

**Run 2:** `mixed` ✓
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: Technical tool specificity (RapidMiner, medallion architecture) indicates hiring manager input, though generic action verbs elsewhere (growing, collaborating, productionise) reflect recruiter language.

**Run 3:** `hiring_manager` ✗
> Quote: "Proven experience building pipelines within modern data stacks such as data lakes, medallion architectures, or SQL-based platforms"
> Verified: ✓ found in JD
> Reasoning: The JD names specific architectural patterns (medallion), domain context (vehicle/transaction data), and tool combinations (RapidMiner for ETL/ELT, Azure/Kafka/Spark stack) with precision only a hiring manager would provide.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `commercial` ✗
> Quote: "Building infrastructure that powers AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ⚠ NOT found verbatim
> Reasoning: The platform's primary purpose is to enable revenue/commercial functions—pricing strategy, payment processing, and financial operations for OEM partnerships.

**Run 2:** `internal_data` ✓
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities focus on platform and infrastructure ownership for the data function; the team being led is data engineers; external outputs serve commercial purposes but the role itself is platform-centric.

**Run 3:** `internal_data` ✓
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: The role is framed as a Data Team Lead responsible for building platform infrastructure and growing the data team; while the output serves financial decisioning, the primary stakeholder relationship is with the data engineering function.

⚠ **LLM inconsistency**: runs gave ['commercial', 'internal_data', 'internal_data']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Owning ETL and ELT pipeline development"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic elements (designing the platform, owning pipeline development, growing/mentoring the team) with execution work (collaborating with external partners to productionize).

**Run 2:** `strategic` ✓
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: Ownership verbs (designing, building, owning, growing) and responsibility for team expansion indicate direction-setting authority over the data platform rather than execution of others' priorities.

**Run 3:** `strategic` ✓
> Quote: "Owning ETL and ELT pipeline development"
> Verified: ✓ found in JD
> Reasoning: Ownership verbs ("owning," "designing," "building") and responsibility for team growth and hiring decisions position this as strategic direction-setting for the data platform.

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Building infrastructure that powers AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ⚠ NOT found verbatim
> Reasoning: The candidate is expected to build data infrastructure that enables AI-driven business systems, making them an infrastructure enabler for AI rather than a user of AI coding tools.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds AI-driven products, the JD does not expect the candidate to demonstrate AI coding, usage, or AI infrastructure skills—they are building data infrastructure that feeds AI systems.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions "AI-driven pricing" as a business outcome the platform will serve, but does not require the candidate to demonstrate any AI skill—no coding tools, enablement, or ML collaboration is mentioned.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'none', 'none']

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: The technical responsibilities describe development and infrastructure work without any mention of testing frameworks, data quality practices, data contracts, or observability standards.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of testing frameworks, data contracts, observability, data quality ownership, or quality-related tools.

**Run 3:** `absent` ✗
> Quote: "No mention of testing, data quality, or observability frameworks."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD focuses on platform design, pipeline development, and team leadership with no reference to testing practices, data contracts, SLOs, or quality frameworks.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "Designing and building a modern data platform for high-volume, real-time vehicle and transaction data"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed around designing, building, and owning technical capabilities with no emphasis on risk, compliance, reliability concerns, or preventing bad outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is entirely framed around building and shipping capabilities with no mention of preventing bad outcomes, reliability concerns, or compliance constraints.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in delivery and capability terms (building, designing, owning) with no explicit language around compliance, reliability, preventing bad outcomes, or risk management.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
