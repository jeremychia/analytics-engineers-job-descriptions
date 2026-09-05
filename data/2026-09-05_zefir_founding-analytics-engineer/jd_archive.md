**URL:** https://jobs.ashbyhq.com/zefir/ba9afc5d-ed03-4680-85ae-7ec3841f7719

Who We Are

Zefir is building an AI autopilot for home sales in Europe, starting in France: an AI agent runs the entire sale and purchase journey end-to-end, orchestrating local brokers, portals, buyers, and documents.

Backed by over $55 million from top-tier investors like Sequoia Capital, we're committed to accelerating life changes for millions of current and future European homeowners.

An AI agent that runs a property transaction end to end only works if the data underneath it is reliable, governed and cheap to query. That is the job.

Why this role exists

This is the first dedicated data hire in years. The foundations run, nobody owns them yet.

Ingestion and centralisation into BigQuery already work, so you are not starting from an empty warehouse. What is missing is everything downstream: a canonical structure, one definition per metric, query cost under control, and a self-serve layer so that Finance, Growth and Ops stop routing every question through one person.

Today the stack holds because individuals across Ops, Growth, Finance and Engineering compensate locally. They learned the quirks and built workarounds. It works, and it is fragile: KPIs drift between tools, tracking breaks silently, costs escalate, and nobody owns the translation between raw engineering data and decision-ready truth.

You will be the single accountable owner of that layer. Not a support function, not a ticketing desk, not a BI factory.

What you will own

Canonical models and metric definitions. A documented semantic layer with canonical entities (Buyer, Seller, Asset, Agent) and Bronze / Silver / Gold layers. Clear contracts between what Engineering exposes and what BI consumes, so that KPI debates stop being about whose number is right.

Self-serve enablement. The submerged part of the iceberg: clean models, consistent BI primitives, row- and column-level security, so Ops, Growth, Finance and Account Managers build their own dashboards without compromising compliance.

Analytics and tracking governance. The global event taxonomy and tracking roadmap, a hybrid client-side and server-side event strategy, consistent sync across CRMs and marketing platforms, and GDPR consent flows by design, so acquisition spend runs on attribution we can trust.

Platform reliability, safety and cost. Standards set once rather than team by team: tested and versioned transformations, monitoring of freshness, failures and usage, sane ingestion patterns (read replicas, CDC, batch), and no production code path depending on BI tables.

One thing worth stating plainly: our AI tooling already queries the warehouse directly, and the cost of it is not under control yet. Designing the guardrails, the schema curation and the authorisation layer is part of the job from week one, not a phase two.

What success looks like after 12 months

One documented event taxonomy, actually used by Engineering, Growth and CRM.

One semantic layer where every shared KPI has a single definition, a single owner and a version history. New joiners understand the data model in days, not months.

Published freshness and failure SLAs, an explicit ingestion topology, and no production path depending on BI tables.

Ops, Growth, Finance and AMs build most of their recurring dashboards themselves, and AI agents query the data layer safely through curated MCPs.

Growth attribution is trustworthy enough that annual acquisition spend decisions are defensible end to end.

What we are looking for

7+ years as a Data, Analytics or Platform Engineer, ideally including a stint at a fast-moving consumer or marketplace company. Staff or Lead exposure expected.

Hands-on with the modern data stack: BigQuery (or Snowflake, Redshift), dbt or equivalent, advanced SQL and data modeling, Python for pipelines, orchestration (Airflow, Dagster, Prefect).

You have shipped event tracking and instrumentation in production, end to end: taxonomy, client and server-side events, attribution, GDPR-compliant opt-out, propagation downstream.

Comfortable with ingestion patterns (Fivetran, Airbyte, CDC), reverse-ETL (Hightouch, Census, Segment), and access governance (IAM, row- and column-level security, PII tagging).

You have built and owned a semantic or metrics layer, and you can arbitrate metric definitions with Finance, Ops and Growth without flinching.

You treat AI agents as first-class data consumers: exposing data through MCPs, semantic APIs or text-to-SQL, with proper guardrails.

Strong ownership: you write the standards, defend them, and fix what is broken without waiting for permission.

A clear communicator who turns "ping the data person" rituals into self-serve handoffs.

Fluent in English and French.

The honest trade-off

There is no data team to manage, and none planned in the short term. You get real autonomy and a direct line to the founders, in exchange for building alone before maybe building a team. At a comparable proptech you would join an existing team and an existing roadmap. Here, what a metric means at Zefir is not decided yet, and you are the one who decides it.

It suits someone who has already led and wants to go back to building.

Hiring process

Screening with David, Talent (30 min)

Deep dive with Gabriel, Engineering Lead: your past experience and what you want next (45 min)

Technical interview with Diane, your future manager: data platform, modeling and tracking (1h)

Cultural interview with Louis, co-founder, plus an informal exchange with a function lead (1h)

Reference calls, then offer 🎉

Benefits

The following is for permanent employees only. For other contracts (interns, apprentices, fixed-term..), please, check with your recruiter.

Competitive salary: You can run your own simulation with our salary calculator.

BSPCE (Stock Options): Available for everyone, with monthly vesting after year one, over a 4-year period.

Healthcare plan: Full coverage with Alan for team members, their partners, and children.

Office in Le Peletier, Paris (9th arrondissement): With flexible remote work options.

Swile meal card: €11 per worked day.

Swile mobility card: €45/month to support sustainable transportation (metro, carpooling, biking…).

Team events: Monthly Mixers to connect and share good times, and quarterly All Hands to celebrate wins across the company.

Our Operating Principles

🏔️ Steep Mountains Are Steep: Setting ambitious goals and working hard to achieve them.

🌊 Ride Reality: Actively seeking challenges and thriving by adapting flexibly to changes.

🏀 Play for the Front of the Jersey: Prioritizing team success over individual recognition.

Application & Process

We welcome applications from anyone, regardless of background, gender, sexual orientation, religion, age, or experience. Our team values authenticity and diverse perspectives.

For all roles, our interview process emphasizes hands-on exercises, case studies, or discussions about specific examples of your previous work. We ensure objectives and expectations are clearly communicated at every step.