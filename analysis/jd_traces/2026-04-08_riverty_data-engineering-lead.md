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
| collaboration_width | 9 | 10 | 9 | 8 | 0% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | high | high | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, reliability, compliance, and governance as core accountability throughout, with no velocity or fast-paced language present.

**Run 2:** `rigour` ✓
> Quote: "Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, reliability, governance, and correctness throughout with multiple rigour signals (SLAs, SLOs, quality frameworks, data modeling excellence) and zero velocity signals.

**Run 3:** `rigour` ✓
> Quote: "Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, reliability, compliance, and data SLOs as core expectations rather than speed or iteration pace.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting."
> Verified: ✓ found in JD
> Reasoning: FinTech sector with explicit regulatory reporting requirement and compliance embedded as core accountability signal high-risk consequences for data errors.

**Run 2:** `high` ✓
> Quote: "Riverty is a FinTech company...Operates in payments, dunning, invoicing, and collections"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role operates in fintech with explicit regulatory reporting responsibilities, placing data errors in the category of financial and compliance risk.

**Run 3:** `high` ✓
> Quote: "ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance)"
> Verified: ✓ found in JD
> Reasoning: Fintech sector combined with explicit compliance language in a regulated payments, dunning, and collections context signals high cost of data errors for regulatory and financial reporting.

### collaboration_width
**Manual:** `9`

**Run 1:** `10` ✗
> Quote: "product owners; BI; data analysis; data science; data platform; tech teams; Platform Engineering teams; Business IT teams; Data Governance; Data Architecture"
> Verified: ✓ found in JD
> Reasoning: The JD names six initial collaboration partners (product owners, BI, data analysis, data science, data platform, tech teams) plus four additional partners (Platform Engineering teams, Business IT teams, Data Governance, Data Architecture) across strategy and collaboration sections.

**Run 2:** `9` ✓
> Quote: "product owners; BI; data analysis; data science; data platform; Platform Engineering teams; Business IT teams; Data Governance; Data Architecture"
> Verified: ✓ found in JD
> Reasoning: Nine distinct named teams and functions are explicitly listed across the strategic leadership and collaboration sections.

**Run 3:** `8` ✗
> Quote: "product owners; BI; data analysis; data science; data platform; Business IT teams; Data Governance; Data Architecture"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names eight distinct partner functions: product owners, BI, data analysts, data scientists, data platform/Platform Engineering, Business IT, Data Governance, and Data Architecture.

⚠ **Disagreement**: manual=`9` vs LLM majority=`10`

⚠ **LLM inconsistency**: runs gave ['10', '9', '8']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clear accountability for delivery outcomes"
> Verified: ✓ found in JD
> Reasoning: The JD describes existing infrastructure, named technologies (dbt, Airflow, Databricks, Medallion architecture), and multiple teams being scaled and improved, indicating mid-stage maturation rather than greenfield or fully mature.

**Run 2:** `mid` ✗
> Quote: "build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets"
> Verified: ✓ found in JD
> Reasoning: The team is scaling and maturing with specific tools (dbt, Airflow, Databricks) and data-as-product thinking already in place, but not yet at the scale of a highly mature, multi-specialized operation.

**Run 3:** `mid` ✗
> Quote: "lead, mentor, and grow a high-performing team of data engineers working across multiple agile data product teams"
> Verified: ✓ found in JD
> Reasoning: Multiple existing teams, named tools with specific context (dbt, Airflow, Spark, Databricks), and the need to scale and improve operating model suggest an established function in growth phase, not building from scratch.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical practices (SLAs, SLOs, data quality frameworks, CI/CD for data) suggesting hiring manager input, but most responsibilities use generic action verbs without deep company-specific architectural context.

**Run 2:** `hiring_manager` ✓
> Quote: "Deep experience with cloud-based data lakehouses (Azure cloud, Databricks Medallion architecture)"
> Verified: ✓ found in JD
> Reasoning: Technical specificity including named architecture patterns (Medallion), specific tools in context (dbt, Airflow, Spark), and data SLAs/SLOs indicate someone who has practiced this discipline.

**Run 3:** `mixed` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams. Define and monitor data SLAs and SLOs."
> Verified: ⚠ NOT found verbatim
> Reasoning: Technical specificity around SLAs, SLOs, ETL/ELT pipelines, and data reliability engineering is balanced by generic leadership language like 'Cultivate a culture of ownership' and 'Champion the adoption.'

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Contribute to the evolution of our data-as-a-product approach, ensuring data products are discoverable, well-documented, and reusable"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building and scaling internal data infrastructure and products for consumption by other data functions (analytics, BI, data science teams) rather than serving commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "data pipelines and data products that power analytics, BI, and AI across the fintech ecosystem"
> Verified: ✓ found in JD
> Reasoning: The primary framing emphasizes building a data platform (data-as-product) that internal teams (analytics, BI, data science) consume, with regulatory reporting as a use case of that platform.

**Run 3:** `internal_data` ✓
> Quote: "power analytics, BI, and AI across the fintech ecosystem"
> Verified: ✓ found in JD
> Reasoning: The role is oriented toward building data infrastructure and platforms (data quality frameworks, SLAs, data models, metadata management) that serve analytics, BI, and data science teams—fundamentally internal data function work.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy"
> Verified: ✓ found in JD
> Reasoning: The role is structured around setting direction (define, establish, shape) and leading teams rather than executing priorities set by others, with accountability for outcomes and team development.

**Run 2:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy"
> Verified: ✓ found in JD
> Reasoning: The role is expected to set direction, define vision, establish operating models, and shape the evolution of the data platform rather than execute direction set by others.

**Run 3:** `strategic` ✓
> Quote: "Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy."
> Verified: ✓ found in JD
> Reasoning: The role explicitly sets direction through defining vision, roadmap, and operating model, rather than executing priorities set by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Although AI is mentioned as a data consumer and one vague reference to 'AI-based productivity increases' appears, the JD does not explicitly require the candidate to demonstrate any AI coding skill, build AI infrastructure, or use AI tools.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While AI is mentioned as a use case for data pipelines, there is no expectation that the candidate demonstrate AI coding tool usage or AI infrastructure skills.

**Run 3:** `none` ✗
> Quote: "Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting"
> Verified: ✓ found in JD
> Reasoning: While AI is mentioned as a stakeholder for data models, there is no expectation for AI-focused candidate skills, AI coding tools, or building AI-specific data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as something the candidate owns and defines through implementation verbs, not just listed as tools in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams"
> Verified: ✓ found in JD
> Reasoning: Data quality frameworks and SLOs are framed as responsibilities the lead owns and defines, not as existing tools to use.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality frameworks and automation across pipelines owned by agile teams."
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability frameworks are owned as core responsibilities to implement and define, not listed as tools to learn.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance)"
> Verified: ✓ found in JD
> Reasoning: Compliance is named as a core accountability alongside quality and timeliness, reflecting the fintech regulatory context and framing risk to stakeholder trust and regulatory exposure as central to the role.

**Run 2:** `high` ✗
> Quote: "transforming raw data into trusted, accessible, and reusable assets — ensuring that the broader organization can make faster and smarter decisions"
> Verified: ✓ found in JD
> Reasoning: The role is framed around trust and regulatory compliance in a fintech/payments context where data errors carry financial and regulatory consequences, reflecting strong loss aversion.

**Run 3:** `high` ✗
> Quote: "ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance)"
> Verified: ✓ found in JD
> Reasoning: The FinTech sector combined with explicit compliance language, dedicated Data Quality & Reliability section, and repeated emphasis on SLAs, SLOs, and proactive reliability engineering signal strong loss-aversion framing around regulatory exposure and data accuracy.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`
