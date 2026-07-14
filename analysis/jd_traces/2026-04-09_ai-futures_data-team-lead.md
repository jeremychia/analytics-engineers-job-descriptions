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
| velocity_vs_rigour | velocity | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | high | high | moderate | high | 33% | ✓ |
| collaboration_width | 2 | 1 | 0 | 1 | 33% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | mixed | mixed | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_enabler | none | ai_enabler | 33% | ✗ |
| testing_framing |  | tool_listed | absent | absent | 33% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `velocity`

**Run 1:** `rigour` ✗
> Quote: "Designing and building a modern data platform for "high-volume, real-time vehicle and transaction data""
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize designing robust infrastructure and modern data platforms with only one reference to pace, indicating a rigour-focused orientation.

**Run 2:** `rigour` ✗
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: The JD emphasises building, designing, and owning infrastructure, which reflects a rigour-oriented focus on getting the platform right, despite the presence of "at pace" language.

**Run 3:** `rigour` ✗
> Quote: "Building infrastructure that powers 'AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems'"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role emphasizes building reliable infrastructure for high-volume financial systems and governance patterns (medallion architectures) rather than speed or iteration.

⚠ **Disagreement**: manual=`velocity` vs LLM majority=`rigour`

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems""
> Verified: ✓ found in JD
> Reasoning: The explicit mention of payments and financial decisioning indicates direct financial and regulatory risk with compliance implications.

**Run 2:** `moderate` ✗
> Quote: "Building infrastructure that powers AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ⚠ NOT found verbatim
> Reasoning: While the data directly powers financial decisions, the JD contains no explicit regulatory, compliance, or audit language, classifying this as significant business impact rather than regulatory risk.

**Run 3:** `high` ✓
> Quote: "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ✓ found in JD
> Reasoning: Explicit mention of payments and financial decisioning indicates that data errors directly affect financial systems with immediate business and potential regulatory consequences.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "OEM partners"
> Verified: ✓ found in JD
> Reasoning: Only OEM partners are explicitly named as a distinct external collaboration function; external developers is not specific enough to count.

**Run 2:** `0` ✗
> Quote: "No named internal partner teams or client/customer collaboration partners identified."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions OEM partners and external developers but no internal named functions (Product, Finance, Engineering, etc.) and external parties do not fit the client/customer criteria.

**Run 3:** `1` ✗
> Quote: "OEM partners"
> Verified: ✓ found in JD
> Reasoning: Only OEM partners are explicitly named as a distinct external collaboration partner; external developers is too vague to count as a specific named team.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['1', '0', '1']

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team"
> Verified: ✓ found in JD
> Reasoning: The role involves growing an existing data engineering team with named tools and modern architectural patterns, indicating a mid-stage function with infrastructure being scaled.

**Run 2:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team and contributing to hiring decisions"
> Verified: ✓ found in JD
> Reasoning: An existing data engineering team is already in place and actively growing, indicating a function scaling from an earlier state rather than early-stage startup.

**Run 3:** `mid` ✗
> Quote: "Growing and mentoring a data engineering team and contributing to hiring decisions"
> Verified: ✓ found in JD
> Reasoning: The presence of an existing team to grow and mentor suggests the data function exists and is in expansion phase, characteristic of mid-stage maturity rather than greenfield or fully established.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner; Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems""
> Verified: ✓ found in JD
> Reasoning: Specific application context, named tools, and architecture patterns show hiring manager insight, though leadership and mentoring language is more generic.

**Run 2:** `mixed` ✓
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: Technical specificity in pipeline tooling and domain context is mixed with generic responsibilities around mentoring and collaboration that could apply to any data leadership role.

**Run 3:** `hiring_manager` ✗
> Quote: "Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific tool names with precise application context (RapidMiner, medallion architectures, high-volume vehicle data) that indicates domain expertise beyond generic templates.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Designing and building a modern data platform... Growing and mentoring a data engineering team"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary responsibilities center on building and maintaining the data platform and team, with external partners and financial systems as consumers rather than primary stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Designing and building a modern data platform for high-volume, real-time vehicle and transaction data"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary focus is building and owning the data infrastructure platform itself, serving internal platform consumers rather than a specific business function.

**Run 3:** `internal_data` ✓
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data platform infrastructure and growing the data engineering team rather than serving a specific business function like sales, finance, or product.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Owning ETL and ELT pipeline development"
> Verified: ✓ found in JD
> Reasoning: The role is expected to own and design major components like the pipeline development and platform architecture rather than execute predefined work.

**Run 2:** `strategic` ✓
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: The use of "designing" and "building" as core responsibilities, combined with team lead title and hiring decision input, signals direction-setting authority rather than executing on assigned priorities.

**Run 3:** `strategic` ✓
> Quote: "Designing and building a modern data platform"
> Verified: ✓ found in JD
> Reasoning: The role owns platform design and infrastructure decisions, grows the engineering team, and contributes to hiring rather than executing direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems""
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure that enables AI-driven systems rather than use AI tools personally or develop AI models.

**Run 2:** `none` ✗
> Quote: "Building infrastructure that powers AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
> Verified: ⚠ NOT found verbatim
> Reasoning: The infrastructure enables AI systems, but the JD expects standard data pipeline work (Python, RapidMiner, ETL/ELT) with no explicit requirement for AI-assisted tooling or AI-ready data foundations.

**Run 3:** `ai_enabler` ✗
> Quote: "Building infrastructure that powers 'AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems'"
> Verified: ⚠ NOT found verbatim
> Reasoning: The candidate is expected to build data infrastructure that AI systems consume and operate on, rather than use AI tools personally.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'none', 'ai_enabler']

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "data lakes, medallion architectures, or SQL-based platforms"
> Verified: ✓ found in JD
> Reasoning: Medallion architecture (a data quality layering pattern) is mentioned in required experience without ownership framing, classifying this as tool_listed.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD makes no mention of testing, data quality, observability, data contracts, or reliability frameworks in responsibilities or requirements.

**Run 3:** `absent` ✗
> Quote: "high-volume, real-time vehicle and transaction data"
> Verified: ✓ found in JD
> Reasoning: While the data characteristics (high-volume, real-time, financial decisioning) suggest testing frameworks would be critical, the JD contains no mention of data quality, testing practices, or observability.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'absent', 'absent']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems""
> Verified: ✓ found in JD
> Reasoning: While the financial decisioning domain carries inherent operational risk, the JD frames the role around building infrastructure rather than explicitly preventing bad outcomes or managing compliance.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely around building capability and delivery speed, with no explicit mention of risk mitigation, reliability SLOs, compliance, or preventing bad outcomes.

**Run 3:** `moderate` ✗
> Quote: "high-volume, real-time vehicle and transaction data"
> Verified: ✓ found in JD
> Reasoning: While high-volume real-time processing and financial decisioning imply operational reliability concerns, the JD frames the role primarily around building capability and platform architecture rather than preventing failures or managing risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
