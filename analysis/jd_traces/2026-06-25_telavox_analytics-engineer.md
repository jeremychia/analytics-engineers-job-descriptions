# Trace: 2026-06-25_telavox_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Telavox

**Company:** Telavox
**Location:** Malmö
**Salary:** Not stated
**URL:** https://career.telavox.com/jobs/7661845-analytics-engineer
**Date saved:** 2026-06-25

---

## Role summary

Telavox seeks an Analytics Engineer to manage the complete lifecycle of data, from raw backend events to executive dashboards. The role emphasises trustworthy data and making information findable and useful throughout the organisation.

## Key responsibilities

- Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers
- Design and evolve data marts encoding Telavox business logic
- Operate CDC pipelines, monitor health, manage failures, and optimise BigQuery costs and performance
- Build and maintain semantic layers powering self-service and agentic analytics
- Partner with analysts and stakeholders to create durable data products

## Required qualifications

- Advanced SQL and strong dbt fundamentals
- Solid BigQuery knowledge including partitioning and performance tuning
- Experience building dimensional models or analytical schemas
- Ability to translate business questions into data models
- Working Python proficiency
- Fluent English (Swedish preferred)

## Preferred experience

- CDC concepts
- Fivetran
- Semantic layers (Cube or MetricFlow)

## Classification

| Field | Value |
|---|---|
| Seniority | mid |
| Role type | analytics_engineering_bi |
| JD authorship | hiring_manager |
| Greenfield vs fix | fix_scale |
| Velocity vs rigour | rigour |
| Domain risk | moderate |
| Collaboration width | 1 |
| Data team maturity | mid |
| Urgency | standard |
| Language gate | soft — Swedish |
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | mixed | execution | mixed | 33% | ✗ |
| ai_role |  | none | ai_enabler | ai_enabler | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "The role emphasises trustworthy data and making information findable and useful throughout the organisation"
> Verified: ✓ found in JD
> Reasoning: The role explicitly emphasizes trustworthy data, documentation, and testing as core values, with no velocity or speed language present.

**Run 2:** `rigour` ✓
> Quote: "transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The emphasis on documentation, testing, and structured layered architecture signals a rigour-oriented approach to data work.

**Run 3:** `rigour` ✓
> Quote: "The role emphasises trustworthy data and making information findable and useful throughout the organisation."
> Verified: ✓ found in JD
> Reasoning: The role summary prioritizes trustworthiness and all responsibilities emphasize tested, documented, durable outputs with reliability concerns (monitor health, manage failures), with no velocity or shipping language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "manage the complete lifecycle of data, from raw backend events to executive dashboards"
> Verified: ✓ found in JD
> Reasoning: The role impacts executive decision-making through dashboards but lacks financial, regulatory, or compliance language associated with high domain risk.

**Run 2:** `moderate` ✓
> Quote: "emphasises trustworthy data and making information findable and useful throughout the organisation"
> Verified: ✓ found in JD
> Reasoning: While trustworthiness matters, the JD frames this as organizational accessibility and usefulness rather than financial reporting or regulatory compliance.

**Run 3:** `moderate` ✓
> Quote: "manage the complete lifecycle of data, from raw backend events to executive dashboards"
> Verified: ✓ found in JD
> Reasoning: The role supports executive decision-making but contains no explicit financial reporting, compliance, or regulatory language that would elevate it to high risk.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Partner with analysts and stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is explicitly named as a partner team; 'stakeholders' is too vague to count per the classification rules.

**Run 2:** `1` ✓
> Quote: "Partner with analysts and stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is explicitly named as a distinct partner team; 'stakeholders' is generic and does not count.

**Run 3:** `1` ✓
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is named as a distinct team in 'Partner with analysts and stakeholders'; 'stakeholders' is a generic descriptor.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The JD references established infrastructure (dbt, BigQuery, medallion architecture, CDC pipelines) being operated and evolved rather than built from zero.

**Run 2:** `mid` ✓
> Quote: "Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The existence of an established dbt project with structured layers indicates a mid-stage data function with working infrastructure that needs evolution.

**Run 3:** `mid` ✓
> Quote: "Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The JD describes existing, mature infrastructure (dbt with medallion architecture, CDC pipelines, BigQuery, semantic layers) being operated and evolved, not built from scratch.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Operate CDC pipelines, monitor health, manage failures, and optimise BigQuery costs and performance"
> Verified: ✓ found in JD
> Reasoning: The responsibility specifies technical concepts (CDC, BigQuery optimization) and operational concerns that only come from someone doing this work.

**Run 2:** `hiring_manager` ✓
> Quote: "Operate CDC pipelines, monitor health, manage failures, and optimise BigQuery costs and performance"
> Verified: ✓ found in JD
> Reasoning: This level of technical specificity about CDC operational concerns and BigQuery optimization demonstrates hands-on knowledge only a hiring manager would include.

**Run 3:** `hiring_manager` ✓
> Quote: "Operate CDC pipelines, monitor health, manage failures, and optimise BigQuery costs and performance"
> Verified: ✓ found in JD
> Reasoning: The specificity of operational concerns (CDC concepts, pipeline health monitoring, BigQuery cost optimization) indicates hands-on technical knowledge only a hiring manager would possess.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary focus is building data infrastructure that serves internal analytics consumers and systems rather than commercial, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The emphasis on self-serve analytics and semantic layers indicates the primary audience is internal analytics consumers.

**Run 3:** `internal_data` ✓
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary function is building and operating the analytics platform infrastructure that serves analysts, self-serve users, and AI agents, not external commercial or finance stakeholders.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Own the dbt project"
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of technical domains (dbt, data mart design) combined with operational execution responsibilities (operate pipelines, maintain infrastructure).

**Run 2:** `execution` ✗
> Quote: "Design and evolve data marts encoding Telavox business logic"
> Verified: ✓ found in JD
> Reasoning: The responsibility to encode existing business logic indicates the role executes against requirements defined elsewhere.

**Run 3:** `mixed` ✗
> Quote: "Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership (Own, Design, Build) of the technical data architecture with execution responsibility (transforming, operating, maintaining) within a defined scope.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: While agentic analytics is mentioned, the JD does not explicitly require the candidate to build AI infrastructure or demonstrate AI expertise.

**Run 2:** `ai_enabler` ✗
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: Building semantic layers to power agentic analytics indicates the candidate constructs data infrastructure that AI systems consume.

**Run 3:** `ai_enabler` ✗
> Quote: "Build and maintain semantic layers powering self-serve and agentic analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The candidate is expected to build semantic layers that enable agentic (AI) analytics systems to function, making them responsible for AI-ready data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['none', 'ai_enabler', 'ai_enabler']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own the dbt project, transforming raw data into staged, modelled, documented, and tested tables across bronze, silver, and gold layers"
> Verified: ✓ found in JD
> Reasoning: The candidate owns the dbt project and is responsible for delivering tested tables, indicating ownership of testing practice rather than just demonstrating skill.

**Run 2:** `responsibility` ✗
> Quote: "transforming raw data into staged, modelled, documented, and tested tables"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an integral responsibility within core dbt project ownership, not as a listed tool.

**Run 3:** `responsibility` ✗
> Quote: "transforming raw data into staged, modelled, documented, and tested tables"
> Verified: ✓ found in JD
> Reasoning: By owning the dbt project and being accountable for producing tested tables as a core output, the candidate owns data quality through testing as a fundamental responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "The role emphasises trustworthy data and making information findable and useful throughout the organisation"
> Verified: ✓ found in JD
> Reasoning: Trust language appears in the role summary as a primary framing, indicating strong focus on preventing untrustworthy data from reaching decision-makers.

**Run 2:** `moderate` ✗
> Quote: "emphasises trustworthy data and making information findable and useful throughout the organisation"
> Verified: ✓ found in JD
> Reasoning: While trustworthiness and durability are concerns, the framing centers on organizational usefulness rather than preventing regulatory exposure or bad data reaching decision-makers.

**Run 3:** `moderate` ✗
> Quote: "monitor health, manage failures, and optimise BigQuery costs and performance"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes operational reliability and failure management, but lacks explicit compliance, regulatory, or stakeholder-trust risk framing that would constitute high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']
