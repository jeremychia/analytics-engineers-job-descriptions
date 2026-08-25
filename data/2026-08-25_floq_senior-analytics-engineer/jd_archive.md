**URL:** https://www.linkedin.com/jobs/view/4457184653/

Role Overview

As our Senior Analytics Engineer, you will own the layer between raw data and every number this company makes decisions on. We operate in digital assets, and our data warehouse already runs well over a hundred production pipelines covering every trade, deposit, withdrawal, hedge and customer verification we process. The foundation is built. What it needs now is someone to own the layer on top of it.

This role asks for a rare combination: the modelling rigour to design dimensional schemas that survive contact with financial reality, and the engineering discipline to ship and operate the pipelines that populate them. You will not be handed clean data and a ticket queue. You will own the problem from source system through to the dashboard a director opens on Monday morning.

You will join a small, senior data team. There is no analyst layer between you and the stakeholder, and no ticket-pusher between you and production. Your mission is to make the warehouse the single source of truth for Finance, Compliance, Growth, Support and the executive team, so that one metric means one thing everywhere, and everyone trusts it enough to stop keeping their own spreadsheet.

Core Responsibilities

Dimensional Modelling: Design, build and maintain the warehouse's core models. This covers SCD dimensions such as customers and verification profiles, partitioned fact tables for trades, payments, hedging and balances, and the analytics marts that sit on top of them for finance, product and leadership.

Transformation Pipelines: Own analytics pipelines end to end, from schedule and upstream dependencies through to the transformation logic and the target table. Every model you write must be safe to rerun and safe to backfill by construction rather than by convention.

Metric Definition Ownership: Be the authority on how a metric is calculated, covering active users, assets under management, take rate, revenue, funnel conversion and acquisition cost. Drive cross-team alignment to a written, versioned definition, then build the dashboards that make the parallel spreadsheets redundant.

Data Ingestion: Build and maintain extractors against REST and GraphQL sources, including exchange platforms, custody providers, payment gateways, support systems and external price feeds. Handle pagination, retries and error states properly.

Data Quality Contracts: Declare quality checks alongside every model, covering completeness, uniqueness, consistency, validity, timeliness and accuracy, with thresholds you can defend when they fire at 3am. Investigate discrepancies against source systems and close them with a written root cause rather than a nudge to the numbers.

Cost Guardrails: Design for what a query costs. Warehouse compute, scanned data volume and storage growth are all measurable, and we expect you to weigh them and choose the cheaper option when two designs solve the same problem.

Technical Requirements

Experience: 4+ years in analytics engineering, data engineering, or a data warehouse role where you personally owned models in production. You designed the grain, wrote the transformation logic, and answered for it when it broke.

SQL Mastery (Must-Have): Expert level. Window functions, layered CTEs, anti-joins, deduplication, and point-in-time (as-of) joins against Type 2 dimensions. You should be able to read a query plan and explain why it is slow before you change anything.

Dimensional Modelling (Must-Have): Star schema design, fact grain selection, SCD Type 2, additive versus semi-additive measures, and incremental loading patterns that are genuinely idempotent. You can defend a grain decision under sustained questioning.

Orchestration: Production experience with a workflow orchestrator, ideally Apache Airflow. This means authoring pipelines, wiring cross-pipeline dependencies, managing scheduling windows and backfills, and debugging a failed run from logs without hand-holding.

Cloud Warehouse: Hands-on experience with a columnar cloud warehouse at scale. Amazon Redshift is preferred; Snowflake, BigQuery or Databricks are acceptable if you can speak precisely about distribution and sort strategy or their equivalents.

Programming: Python at a level sufficient to write and maintain data extractors in production, including HTTP and GraphQL clients, retry logic and object storage writes.

Cloud Infrastructure: Working knowledge of a major cloud platform. On AWS that means S3 and IAM basics, plus at least one query or compute service such as Athena, Glue or Lambda.

Engineering Practice: Git-based workflow with branches, pull requests, code review and continuous integration. You have had your SQL reviewed, and you have reviewed someone else's.

Financial Data Rigour (Plus): Familiarity with digital assets, trading, fintech, payments or banking is highly preferred. Relevant experience includes order matching, fees and spreads, settlement, custody, customer verification and anti-money-laundering data, or regulatory reporting. Prior work on reconciliation against a source of truth, cost basis or profit and loss calculation, and precision and rounding discipline stands out strongly.

A Note on Tooling: Our transformation layer is configuration-driven with hand-written SQL rather than dbt. The modelling concepts transfer directly, but the tooling habits will not. Candidates who can explain why an incremental load is idempotent, and not merely which tool produces one, will do well here.

Soft Skills & Experience

Analytical Mindset: An exceptional ability to decompose a "this number looks wrong" report into a specific layer, a specific join and a specific root cause, and to tell the difference between a data bug, a definition disagreement and a genuine change in the business.

Stakeholder Fluency: You can run a requirements conversation with a finance controller or a compliance lead, surface the ambiguity in their request before you build ("do you mean gross revenue, or net of hedging cost?"), and push back gracefully when the request is the wrong question. On a small team this is not a soft skill, it is load-bearing.

Cross-Functional Collaboration: Strong pairing instincts across data engineering, finance, compliance, growth and product. You will spend real time outside the data team.

Written Communication: Documentation is part of shipping here. Architecture notes, entity relationship diagrams, runbooks and design documents are kept current, and we intend to keep it that way.

Strategic "North Star" Priorities

One Number, One Meaning: Establish the warehouse as the undisputed single source of truth. Success looks like ad-hoc "can you double-check this figure?" requests drying up, and the parallel spreadsheets quietly dying.

Trust Through Verifiability: Move data quality from reactive firefighting to declared, monitored contracts, so a broken pipeline is caught by a check we wrote in advance rather than by a stakeholder in a meeting.

Critical Challenges You Will Solve

The Retroactive Truth Problem: Our dimensions track history for a reason. A customer's verification status, fee tier or account classification changes over time, and naively joining to the current version silently rewrites last quarter's numbers. You will design models where history stays history, and where a classification change made today cannot restate a report from April.

Reconciling Real-Time and Batch: Several core fact tables are written by more than one pipeline at once, a near-real-time stream and an authoritative nightly batch, and they must converge to exactly one truth without double-counting or gaps. Add the timezone boundary that sits underneath every daily aggregate, and correctness stops being obvious.

Financial-Grade Precision: Digital asset amounts carry many more decimal places than conventional currency, profit and loss is calculated on an average-cost basis with tax treatment baked in, and the gap between a rounding choice and a rounding bug is a number Finance has to explain to a regulator. You will be the person who gets this right.

"A Day in the Life"

Morning: A data quality check fired overnight on a fact table, flagging duplicate rows above threshold. You trace it to an upstream extractor that re-delivered a window after a source-side retry, confirm the downstream mart is unaffected, then ship a deduplication fix and a tighter check so it cannot recur silently.

Afternoon: Sitting with the finance lead to pin down what a revenue metric actually means before month-end close, covering which costs are in scope, how it is attributed and what it should reconcile to. You leave with the definition written down and a model design that produces it.

Evening: Reviewing a teammate's pull request on a new customer funnel mart, catching a join to a history-tracking dimension that would have multiplied the row count many times over while still reporting a plausible-looking match rate.

Why Join Us?

Genuine ownership. You will own what the company believes about its own data. On a small team, that is not a figure of speech.

A mature platform rather than a greenfield mess. Over a hundred production pipelines, real continuous integration, maintained documentation and an existing data quality framework. You will build on solid ground rather than firefighting an abandoned proof of concept.

A direct line to leadership. Your models feed the executive scorecard. There is no layer of translation between your work and the decision it informs.

Technically serious problems. Financial correctness, real-time reconciliation and regulatory reporting in digital assets. The constraints are real and mistakes are expensive, which is what makes the work interesting.

Competitive salary and performance bonuses in IDR.