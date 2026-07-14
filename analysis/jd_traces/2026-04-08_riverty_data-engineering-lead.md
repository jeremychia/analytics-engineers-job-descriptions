# Trace: 2026-04-08_riverty_data-engineering-lead

## JD text (fed to classifier, Layer B stripped)

```
# Data Engineering Lead (m/w/d) — Riverty

**URL:** https://jobsearch.createyourowncareer.com/Riverty/job/Berlin-Data-Engineering-Lead-%28mwd%29-BE-10623/284720-de_DE/
**Location:** Berlin, Verl, Baden-Baden or Oslo (hybrid)
**Employment Type:** Full-time, unlimited
**Job ID:** 284720

---

## About Riverty

Riverty is a FinTech company and part of the Bertelsmann Group. Mission: "Mit Empathie, moderner Technologie und datengestützten Erkenntnissen dafür zu sorgen, dass Menschen und Unternehmen im Fluss bleiben." (Using empathy, modern technology, and data-driven insights to keep people and businesses flowing.) Over 4,000 people from almost 80 nations in 11 countries, across 30 hybrid work environments. Operates in payments, dunning, invoicing, and collections.

---

## The Role

The Data Engineering Lead leads the design, development, and delivery of high-quality data pipelines and data products that power analytics, BI, and AI across the fintech ecosystem in payments, dunning, invoicing, and collections. This leader will build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets — ensuring that the broader organization can make faster and smarter decisions.

Working in an agile, cross-functional data product model, this role is accountable for the results and contributions of the data engineering discipline — ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes.

---

## Key Responsibilities

### Strategic Leadership
- Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy.
- Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance).
- Champion the adoption of modern data engineering and agile delivery practices, fostering close collaboration with product owners, BI, data analysis, data science, data platform, and tech teams.

### Data Pipelines & Modeling
- Oversee the development of robust ETL/ELT pipelines to ingest and transform data from multiple internal and external sources.
- Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting.
- Drive excellence in data modeling and pipeline design, ensuring solutions are efficient, maintainable, and well-documented.

### Data Quality & Reliability
- Implement data quality frameworks and automation across pipelines owned by agile teams.
- Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability.
- Promote proactive data reliability engineering, enabling teams to detect and resolve issues early.

### Collaboration & Stakeholder Management
- Collaborate closely with Data Product Owners to prioritize and deliver data engineering work in alignment with business priorities.
- Partner with Platform Engineering teams to ensure smooth operation of data pipelines within the shared core data platform.
- Collaborate with the Business IT teams to create reliable and robust interfaces to the source systems.
- Work hand-in-hand with Data Governance and Data Architecture to ensure alignment on metadata, lineage, and data ownership.

### Team Leadership & Development
- Lead, mentor, and grow a high-performing team of data engineers working across multiple agile data product teams.
- Ensure consistent technical standards, delivery practices, and performance management across the discipline, even within decentralized team setups.
- Cultivate a culture of ownership, accountability, and collaboration within and across agile data product teams.

### Process & Operational Excellence
- Promote automation, CI/CD for data, and observability across all data engineering workstreams…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 9 | 9 | 9 | 10 | 33% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | mixed | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_enabler | none | none | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, reliability, SLAs/SLOs, governance, and documentation throughout, with no velocity signals such as 'fast-paced' or 'rapid delivery'.

**Run 2:** `rigour` ✓
> Quote: "ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes trusted, high-quality data delivery with explicit references to SLAs, SLOs, data quality frameworks, observability, and compliance as core accountability dimensions throughout.

**Run 3:** `rigour` ✓
> Quote: "Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality frameworks, SLAs/SLOs, data reliability engineering, and accuracy as core responsibilities, with no velocity-oriented language about speed or rapid delivery.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "fintech ecosystem in payments, dunning, invoicing, and collections"
> Verified: ✓ found in JD
> Reasoning: Fintech operations inherently carry high financial and regulatory risk, compounded by explicit mention of 'regulatory reporting' as a core data modeling requirement.

**Run 2:** `high` ✓
> Quote: "Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting"
> Verified: ✓ found in JD
> Reasoning: Riverty operates in fintech payments/collections with explicit mention of regulatory reporting, indicating that data errors directly affect financial compliance and regulatory exposure.

**Run 3:** `high` ✓
> Quote: "Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting."
> Verified: ✓ found in JD
> Reasoning: This is fintech operating in payments and financial services with explicit mention of regulatory reporting; data errors directly affect financial compliance and audit requirements.

### collaboration_width
**Manual:** `9`

**Run 1:** `9` ✓
> Quote: "product owners, BI, data analysis, data science, data platform, and tech teams; Platform Engineering teams; Business IT teams; Data Governance and Data Architecture"
> Verified: ✓ found in JD
> Reasoning: Nine distinct collaborating functions are named: product owners, BI, data analysis, data science, data platform, tech teams, Business IT, Data Governance, and Data Architecture.

**Run 2:** `9` ✓
> Quote: "product owners; BI; data analysis; data science; data platform; tech teams; Platform Engineering teams; Business IT teams; Data Governance; Data Architecture"
> Verified: ✓ found in JD
> Reasoning: Nine distinct named partner functions explicitly listed across product, analytics, engineering, infrastructure, and governance domains in the responsibilities section.

**Run 3:** `10` ✗
> Quote: "product owners; BI; data analysis; data science; data platform; tech teams; Platform Engineering teams; Business IT teams; Data Governance; Data Architecture"
> Verified: ✓ found in JD
> Reasoning: The JD names ten distinct collaboration partners across multiple named functions including product, BI, analytics, data science, data platform, engineering, business IT, data governance, and data architecture.

⚠ **LLM inconsistency**: runs gave ['9', '9', '10']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "shared core data platform"
> Verified: ✓ found in JD
> Reasoning: The JD describes an established data platform with named tools (dbt, Airflow, Spark, Databricks) and multiple specialized teams, but is focused on scaling and improving rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "This leader will build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets"
> Verified: ✓ found in JD
> Reasoning: The role involves scaling an existing multi-team data function with named modern tools (dbt, Airflow, Spark, Databricks), multiple product teams, and an established platform, indicating mid-stage maturity with growth focus.

**Run 3:** `mid` ✗
> Quote: "lead, mentor, and grow a high-performing team of data engineers working across multiple agile data product teams"
> Verified: ✓ found in JD
> Reasoning: Multiple data sub-teams already exist (BI, data analysis, data science, platform), but the role is about growing and scaling the data engineering discipline rather than building from scratch.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical specificity (Medallion architecture, SLAs/SLOs, regulatory reporting, data lineage) and operational context that reflects hands-on domain knowledge rather than recruiter boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Deep experience with cloud-based data lakehouses (Azure cloud, Databricks Medallion architecture)"
> Verified: ✓ found in JD
> Reasoning: Requirements show hiring manager specificity (Medallion architecture, precise tool stacks), but responsibilities rely on generic leadership verbs ('drive', 'champion', 'promote') without concrete execution context.

**Run 3:** `hiring_manager` ✓
> Quote: "Oversee the development of robust ETL/ELT pipelines to ingest and transform data from multiple internal and external sources"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical practices (ETL/ELT, data quality frameworks, SLAs/SLOs, data modeling) and methodological detail that reflects hands-on understanding of the work rather than generic recruitment language.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "transforming raw data into trusted, accessible, and reusable assets"
> Verified: ✓ found in JD
> Reasoning: The role's primary accountability is building infrastructure and standards for the data function itself—BI, analytics, and data science teams—not serving commercial or product stakeholders directly.

**Run 2:** `internal_data` ✓
> Quote: "Working in an agile, cross-functional data product model, this role is accountable for the results and contributions of the data engineering discipline"
> Verified: ✓ found in JD
> Reasoning: Primary accountability is to the data engineering discipline and internal data consumers (BI, data science, analytics), not to commercial, product, or finance end-users.

**Run 3:** `internal_data` ✓
> Quote: "Contribute to the evolution of our data-as-a-product approach, ensuring data products are discoverable, well-documented, and reusable."
> Verified: ✓ found in JD
> Reasoning: The role primarily serves internal data functions (BI, data science, analytics teams) by building trusted, reusable data products and platforms rather than directly supporting commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly expected to define strategy, establish operating models, champion practices, and drive standards, not execute work scoped by others.

**Run 2:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy"
> Verified: ✓ found in JD
> Reasoning: 'Define and execute the vision' places direction-setting and strategic ownership at the core of the role rather than execution of others' priorities.

**Run 3:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy."
> Verified: ✓ found in JD
> Reasoning: The role is expected to define vision, establish operating models, champion practices, and set technical standards—shaping the discipline rather than executing direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "power analytics, BI, and AI across the fintech ecosystem"
> Verified: ✓ found in JD
> Reasoning: The candidate must architect data infrastructure that AI systems consume, not demonstrate personal AI tool usage for coding or productivity.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company works with AI systems and mentions 'AI-based productivity increases', there is no explicit requirement for the candidate to demonstrate AI coding tool usage, AI-assisted workflows, or AI data infrastructure skills.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company operates in fintech and mentions AI products, the JD contains no expectation that the candidate use AI tools for personal productivity or build AI-specific data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'none', 'none']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are framed as owned responsibilities with action verbs ('implement', 'define', 'monitor', 'promote'), not as tools or skills to apply.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams"
> Verified: ✓ found in JD
> Reasoning: Data quality, observability, SLAs/SLOs, and reliability engineering are framed as practices the candidate owns, defines, and implements rather than skills to possess.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as responsibilities the candidate owns and defines through active verbs (implement, define, promote), not merely as tools listed in a skill set.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes"
> Verified: ✓ found in JD
> Reasoning: The JD repeatedly emphasizes trust, quality, and regulatory compliance in a fintech context where data errors directly impact financial decisions and regulatory standing.

**Run 2:** `moderate` ✗
> Quote: "ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance)"
> Verified: ✓ found in JD
> Reasoning: Compliance appears as one delivery accountability alongside timeliness and quality; operational reliability is central, but the role frames around building quality systems rather than preventing regulatory violations or trust damage.

**Run 3:** `high` ✗
> Quote: "ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes preventing bad outcomes through repeated focus on trust, quality, reliability engineering, regulatory compliance, and SLOs—reflecting fintech's inherent regulatory and financial risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']
