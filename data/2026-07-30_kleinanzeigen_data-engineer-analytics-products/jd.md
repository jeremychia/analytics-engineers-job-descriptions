# Data Engineer (Analytics & Products) — Kleinanzeigen (Adevinta)

**URL:** https://adevintainfor-bad351.careers.hibob.com/jobs/36dfd772-135c-482c-8c2a-c768dc79681f
**Location:** Spain
**Date Posted:** 2026-07-30

---

Job description
As a Data Engineer (Analytics & Products) at Kleinanzeigen, you start where the data need begins — not where the code does. You will work directly with product managers, analysts, and domain stakeholders to understand what decisions the data needs to support, how it will be consumed, and what already exists in the platform before writing a single line. From there, you design and build data assets that are homogeneous with the existing stack, cost-effective at scale, maintainable by the next engineer, and self-discoverable, so consumers can find, understand, and trust what you built without asking you.

You will own the full lifecycle: ingestion through Airflow DAGs, transformation across dbt stage, core, and report layers on Databricks, and the quality, documentation, and observability that make those assets production-grade. You stay current with Airflow and design DAG topology deliberately, knowing when to use dynamic task mapping, data-aware scheduling, the TaskFlow API, or a Cosmos dbt task group with Watcher mode for performance-critical pipelines. You understand Spark well enough to know why a dbt incremental model running in Databricks produces a full table scan instead of a partition filter push-down, how a poorly configured merge operation compounds into file fragmentation over time, and what to do about it, whether that means adjusting the incremental strategy, adding liquid clustering, running OPTIMIZE, or rethinking the model grain entirely. You write Python and shell scripts as naturally as SQL and follow engineering core principles: modularity, idempotency, testability, not because they are rules, but because they make your work last.

You operate in an AI-First engineering model: AI handles execution; you own intent, precision, and correctness. You use it to automate, to accelerate best practices, and to raise the quality bar across the team, not to ship faster with less judgment. You will collaborate closely with analysts, product managers, data platform engineers, and stakeholders across the company to ensure that the datasets we create and maintain in our data platform are reliable, trustworthy, and built to serve the decisions that matter.

What You Will Do

Data Modelling & dbt Development
Implement dbt models across the medallion architecture applying the right materialisation strategy for each layer and use case — incremental, full refresh or snapshots — with consistent naming conventions, YAML documentation, metadata tagging, unit tests to validate critical business logic, and reusable macros for common transformation and data replication patterns
Build and refactor models for different business areas of the company, including for example marketing performance, product metrics, C2C transactions, monetisation, vibrancy, and trust & safety
Author reusable macros and apply consistent naming conventions, YAML documentation, and metadata tagging (billed, retention, gdpr)
Design data models that are homogeneous with the existing stack, built at the right grain for the use case, cost-effective to run, and self-discoverable without needing the author to explain them
Perform cost-aware modelling: clustering strategies, warehouse sizing, incremental scan reduction, and pre-aggregation layers

Data Ingestion & Pipeline Engineering
Build and maintain Airflow DAGs using Python operators, designing DAG topology deliberately by choosing execution patterns, dependency structures, and sensor logic that match the operational requirements of each pipeline
Design sensor logic for pipeline dependencies, including intraday vs daily completeness checks and DST-aware temporal handling
Operate Cosmos dbt task groups within Airflow, including DAG splitting, warehouse selection, and Cosmos version upgrades
Integrate new data sources end-to-end by building reliable, fault-tolerant connections across heterogeneous endpoint types including REST APIs, event streams, database connectors and file-based sources, with error handling, retry logic, and security patterns that make each integration production-safe from day one, unit testing every operator and transformation component where possible, and defining SLAs and SLOs that set clear expectations on data freshness, completeness, and availability for downstream consumers
Work with data in the right format for each layer: Avro for event-driven ingestion schemas, Parquet for efficient columnar storage, and Delta for ACID-compliant lakehouse tables with time travel and schema evolution

Data Quality & Reliability
Write dbt tests (not_null, unique, accepted_values) and semantic row-count checks to catch data quality issues before they reach consumers
Author unit tests for critical business logic using dbt's unit test framework
Own data quality across the full lifecycle: design and maintain quality check pipelines combining dbt tests, semantic validation and custom logic, monitor pipeline health proactively before issues reach downstream consumers, diagnose and resolve root causes across schema drift, silent failures, duplicate data and idempotency issues, and plan and execute backfills safely with pre-validation, before and after checks and documented rollback criteria
Apply governance standards consistently across every pipeline and data asset you own, ensuring compliance requirements, data classification, retention policies and ownership accountability are traceable and maintained as the platform evolves
Contribute to the reliability of the platform beyond your own work, flagging systemic issues, improving shared patterns, and leaving every codebase and dataset in better shape than you found it

Cost Optimisation
Identify and implement cost reduction opportunities: warehouse downsizing, incremental model rewrites, DAG consolidation, unused table deprecation
Ensure governance rules for compliance and cost ownership are applied consistently across pipelines and data assets — including tagging standards (business_unit, business_area, team) in Airflow and dbt
Evaluate and act on compute cost signals from Databricks query cost tables

Stakeholder Collaboration & Knowledge Sharing
Partner with analysts, product managers and domain teams to translate business requirements into accurate, reusable data models, and enable them to build and own their own data assets through patterns, templates, PR reviews and pair programming
Provide consultancy and training to product teams on data ingestion and transformation patterns
Support analysts in adopting dbt for report-layer development, including onboarding, PR review, and pair programming
Enable teams to build their own data products: provide patterns, templates, and consultancy so analysts and product teams can develop and own report-layer assets independently
 Define and document reusable metrics, dimensions and business logic in the semantic layer, and capture institutional knowledge including domain assumptions, architectural decisions and data lineage context so it lives in the codebase and not in people's heads
Participate in cross-team alignment on data model standards, shared definitions and platform evolution, representing the data engineering perspective in decisions that affect multiple domains


AI-First Engineering
Review and verify all AI-generated code before submitting for peer review — you own correctness, not the AI
Maintain machine-readable context files (CLAUDE.md) in repositories you own, capturing architectural constraints, naming conventions, and domain-specific rules for AI agents
Use AI tooling as a force multiplier: author intent specifications, verify AI-generated outputs with full ownership of correctness, contribute to shared skills and context files, and use automation to raise quality standards across the team
Build and iterate on Claude agents for scoped engineering tasks (e.g. report-layer model extension, documentation generation, comparison notebooks)
Orchestrate multi-agent workflows for complex tasks (large-scale migrations, documentation backfills, cross-domain refactors) while verifying outcomes
Contribute to the team's AI Skill Library: dbt patterns, ingestion templates, data quality check agents

What We're Looking For

Required
Advanced SQL: window functions, CTEs, query optimisation, partitioning and clustering, with enough depth to understand execution plans and diagnose performance issues
Hands-on production experience with dbt across the medallion architecture: models, tests, unit tests, macros, snapshots, YAML documentation and materialisation strategies
Experience building and operating Airflow DAGs using Python operators, with the ability to design DAG topology deliberately for different pipeline requirements
Proficiency in Python and shell scripting for pipeline development, ingestion tasks and operational tooling
Solid understanding of lakehouse concepts and data formats: Delta Lake for ACID-compliant storage, Parquet for columnar efficiency, and Avro for event-driven schema definition
Ability to work independently: owning tickets from design through delivery, including incident response and backfills
Ability to gather requirements from non-technical stakeholders, understand consumption patterns, and translate business needs into data models that are accurate, maintainable and cost-effective
Experience defining and maintaining schema definitions (Avro/ODIN or equivalent schema registry)
Fluency with AI-assisted development workflows as part of daily practice: authoring intent specifications, verifying and owning AI-generated outputs, and contributing to shared context and tooling so the whole team benefits
Experience with semantic layer concepts: defining reusable metrics, dimensions, and business logic that serve as a single source of truth across consumers (e.g. dbt Semantic Layer, Looker LookML, or equivalent)
Spark comprehension at the level needed to understand how Databricks processes dbt models, read execution plans, and diagnose and fix performance issues such as full table scans, merge inefficiencies and file fragmentation
Engineering fundamentals applied to data work: modularity, idempotency, testability and single responsibility as default practices, not afterthoughts
Experience treating cost as a first-class constraint: identifying and acting on optimisation opportunities across compute, storage and pipeline design

Nice to Have
Experience with Kafka or event-driven ingestion
Familiarity with Salesforce, Google Ads, Meta, or other marketing/CRM APIs
Experience with data modelling patterns and when to apply each: dimensional modelling, star schema, wide tables, one big table, slowly changing dimensions, and normalisation vs denormalisation tradeoffs
Exposure to compliance requirements in data engineering: data classification, retention policies and privacy-aware modelling
Experience with cost optimisation in cloud data platforms
Experience orchestrating multi-agent AI workflows for complex engineering tasks
Contribution to shared AI tooling, skills, or context files in previous roles

What Makes You a Great Fit
Proactive by default: you don't wait to be asked. You flag issues before they become incidents, own follow-ups after delivery, and look for ways to improve things beyond the scope of your ticket.
Generous with knowledge: you enjoy sharing what you know, whether that's through documentation, pair programming, code reviews, or supporting analysts and product teams in adopting the data platform.
A team builder: you care about the people around you as much as the work. You contribute to a culture where the team gets better together, not just individually.
An architect of intent, not just a code translator: you define the what and why with precision, use AI to handle the how, and verify that the output actually solves the problem. You understand that AI commoditizes syntax production — your value is in T-shaped thinking that connects business context, data modeling, and technical constraints.
Quality-first mindset enabled by AI: you treat comprehensive testing, documentation, and data quality checks as non-negotiable — precisely because AI has made them cheap to produce. Low test coverage is no longer a time constraint; it's a choice.
Job benefits
Life at Adevinta comes with its perks! Our Adevintans enjoy the following benefits:

An attractive Base Salary
Participation in our Short-Term Incentive plan (annual bonus)
Work From Anywhere: Enjoy up to 20 days a year of working from anywhere! Maybe not from the moonwell why not! just make sure you have internet connection!
A 24/7 Employee Assistance Program for you and your family, because we care
Win together, lose together is one of our key behaviours. At Adevinta you will find a collaborative environment with an opportunity to explore your potential and grow

On top of these, we also provide a range of locally relevant benefits. Wanna know more? Apply and ask our recruiters!
Adevinta is an equal opportunity employer and we value diversity. We do not discriminate on the basis of race, religion, colour, national origin, gender, sexual orientation, age, marital status or disability status.

---

## Layer B — Behavioural Analysis

*3-run LLM consistency check: `../../analysis/jd_traces/2026-07-30_kleinanzeigen_data-engineer-analytics-products.md` (generated by `classify_jds.py`, may not exist yet)*

**velocity_vs_rigour:** rigour — Responsibilities are dominated by testing, data quality ownership, governance, observability, and correctness framing throughout, with velocity/speed appearing only as AI-driven execution efficiency rather than a core value — clear rigour classification.

**domain_risk:** high — Explicit compliance, GDPR retention tagging, data classification, and governance-as-traceable-accountability framing across a large-scale consumer marketplace platform places this at high domain risk.

**collaboration_width:** 4 — named teams: product managers; analysts; domain stakeholders; data platform engineers

**data_team_maturity:** mature — An existing, sophisticated medallion architecture, established Airflow/dbt/Databricks stack, cost-governance tagging standards, and multiple named business domains (marketing, C2C transactions, monetisation, trust & safety) indicate a mature, specialised data function.

**jd_authorship:** hiring_manager — Extraordinarily precise technical detail (DAG topology choices, Cosmos task groups, Spark execution plans, liquid clustering) gives an unusually vivid, specific picture of daily work — strong hiring_manager authorship.

**stakeholder_orientation:** internal_data — The role's central mission is building and maintaining internal data platform infrastructure and self-service assets that analysts and product teams consume, an internal_data orientation despite naming multiple business domains.

**autonomy_level:** mixed — The role blends strategic architectural ownership (DAG topology, cost strategy, standards-setting, cross-team alignment) with hands-on ticket-level delivery and support work, giving a mixed autonomy signal.

**ai_role:** ai_user — The candidate is explicitly expected to use AI coding tools (Claude agents, AI-generated code review, multi-agent workflows) to accelerate their own engineering work while owning correctness — the AI is the candidate's tool, making this ai_user despite the AI-native framing throughout.

**testing_framing:** responsibility — Testing and data quality are explicitly owned end-to-end with named frameworks (dbt unit tests, semantic row-count checks) and accountable outcomes, a strong responsibility framing.

**loss_aversion_framing:** high — High: repeated compliance, governance, GDPR, data classification, and trust framing throughout ('reliable, trustworthy', 'production-safe from day one', documented rollback criteria for backfills) reflects a dominant risk-and-compliance register.

**greenfield_vs_fix:** fix_scale — Responsibilities center on extending, optimizing, and maintaining an existing mature platform (cost optimisation, refactoring models, DAG consolidation) rather than building from zero.

**urgency:** standard — No urgency signals present.

**work_arrangement:** remote — Work From Anywhere: Enjoy up to 20 days a year of working from anywhere!

**language_gate:** none — Not stated in JD.

**interview_stages:** Not stated in JD

**ats_platform:** unknown

**ats_job_id:** 36dfd772-135c-482c-8c2a-c768dc79681f

**loss_aversion:** Apply governance standards consistently ... compliance requirements, data classification, retention policies — explicit compliance/governance framing dominant throughout.

**ATS keywords:**
- Data Engineer
- dbt
- Airflow DAGs
- Databricks
- medallion architecture
- Spark
- Delta Lake
- data quality
- AI-First engineering
- semantic layer
- GDPR
- cost optimisation
