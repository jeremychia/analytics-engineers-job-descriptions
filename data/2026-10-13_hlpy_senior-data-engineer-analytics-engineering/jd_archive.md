**URL:** https://www.linkedin.com/jobs/view/4478575579/

Senior Data Engineer (Analytics Engineering)
hlpy
Milan, Lombardy, Italy

We're building the future of mobility.

At hlpy, we're building much more than a company.

We're building the technology platform that is transforming how mobility services are delivered across Europe.

Every month, our platform orchestrates tens of thousands of real-world operations, connecting drivers, insurers, fleets, OEMs, service providers and business partners through technology.

As we continue to expand internationally, broaden our product offering and integrate new businesses, the complexity of what we do grows with us.

Scaling hlpy isn't simply about increasing revenues.

It's about building an organization capable of executing consistently across countries, products and teams.

To get there, strategy alone isn't enough.

Execution is what makes the difference.

That's why we're looking for a genuinely senior, hands-on Data Engineer to join our AI & Data team as a peer to our current engineers — someone who owns definitions, not just deliverables.

Our analytics platform — dbt on Snowflake, fed by CDC replication from our operational PostgreSQL estate, by our ERP, and by partner files and webhooks — is what tells hlpy and its enterprise customers what actually happened on every roadside assistance mission across four countries. Those numbers are not decoration: they settle SLAs, they drive invoices, and they land in our customers' inboxes every morning.

You will own models end to end, from raw source to the extraction files our contracts depend on, and you will be expected to push back when a number is wrong.

Key Responsibilities

1. Modelling & Ownership (dbt on Snowflake)

- Design, build and own models across the full stack — staging, intermediate, the entity-pure silver layer, marts, and the customer-facing outbound extractions — in a dbt project of roughly 200 models and growing.
- Build models that stand up to scrutiny. There are cases where the same business event is captured by more than one system, and the right answer is not obvious from the data alone: we expect you to investigate, connect with the people who produce and use that data, agree on a rule, publish it with its provenance, and make it testable.
- Take genuine end-to-end responsibility: scoping, modelling, testing, review, release — and what happens in production the morning after.
- Migrate legacy business logic out of hand-written database views and ad-hoc scripts into dbt, without silently changing a number a customer is already reading.

2. Semantics, Data Quality & Governance

- Treat definitions as a deliverable. A metric is not done until it is named, documented, tested, and impossible to compute a second way somewhere else in the estate.
- Build the test layer that catches real defects — grain, referential integrity, reconciliation against source, negative durations, silent timezone reinterpretation — rather than decorative tests that always pass.
- Measure the impact of every definition change before it ships, and communicate it clearly to the teams that rely on the number.
- Help maintain and extend our house conventions, which live in the repository, are graded by a linter in CI, and are changed by merge request like any other code.
- Contribute to the shared vocabulary: one name, one meaning, written down, for every event and metric the business argues about.

3. Pipelines, Sources & Platform

- Work hands-on with the ingestion layer that feeds the warehouse: CDC replication from PostgreSQL (Airbyte), API extraction from NetSuite via SuiteQL, partner file drops over S3 and SFTP, and inbound webhooks.
- Keep it healthy and affordable: replication slot health and WAL budgets, incremental strategies, warehouse and connector cost, and the honest trade-offs between CDC and cheaper capture methods.
- Contribute to our orchestration migration (Airflow to Astronomer) and to retiring the legacy reporting jobs that still live outside dbt.

4. Customer-Facing Data Products

- Build and operate the daily extractions, SLA reports and KPI files that our enterprise fleet, leasing and rental customers receive — contractual deliverables with a recipient, not dashboards.
- Model contractual logic — thresholds, exclusions, effective dates, per-partner exceptions — so it lives in one governed place instead of in a folder of spreadsheets.
- Work directly with other business units and the customer-facing teams to agree what a number means before building it, and to explain it afterwards.

What This Role Is Not

- Not a dashboard-building or BI-reporting role.
- Not a pure ingestion or plumbing role — the modelling and the semantics are the job.
- Not a ticket-taking role: we are not looking for someone who writes SQL to someone else's spec.
- Not a data science or ML role.

Required Skills & Experience

This is a real senior role. We are hiring for judgement as much as for tooling.

- 5+ years building and operating production data platforms, with several of those years spent doing analytics engineering on a modern cloud warehouse.
- Deep, hands-on dbt: incremental models, snapshots and SCD2, macros, generic and singular tests, packages, selectors, exposures, CI runs — plus firm opinions on project structure and layering, and the ability to defend them.
- Expert SQL on a cloud warehouse (Snowflake strongly preferred): window functions, query profiling, clustering, and cost and performance tuning.
- Comfortable with an orchestrator (Airflow, Astronomer, Dagster or similar) and with Git-based delivery: branches, merge requests, peer review, CI.
- Reliable on commitments: you plan realistically, flag risks early, and hit the deadlines you agree to — our customer-facing deliverables run on a daily schedule and cannot slip.
- Fluent working alongside AI coding agents as part of your day-to-day delivery.
- Experience modelling from source systems you do not control, where the upstream data is incomplete, contradictory or occasionally wrong.
- The seniority signal we care about most: you can take a vague business question, investigate how the data is actually produced upstream, and come back with a model, a number, and the caveats that belong with it.
- Professional working English, written and spoken. Italian is welcome but not required.

Nice to Have

- Experience modelling ERP, billing or invoicing data (NetSuite a strong plus).
- Semantic layer or metrics layer experience.
- Experience with contractual, regulated or externally audited reporting, where a wrong number has consequences.
- Data contracts, lineage or data observability tooling.

What We Offer

- Salary package ranging from € 55.000 to € 60.000 and MBO.
- Fresh fruit and good snacks to share with your nice colleagues
- Training budget
- Remote Working

Why hlpy

Because we're building something meaningful.

Because we move fast.

Because responsibility grows faster than hierarchy.

Because we believe the best ideas can come from anyone.

Because we value ownership over politics and execution over bureaucracy.

And because if we do our job well, millions of people across Europe will experience mobility in a smarter, faster and more reliable way.

If building rather than maintaining excites you, we'd love to meet you.
