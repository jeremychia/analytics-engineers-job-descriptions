# Analytics Engineer (Mid/Senior) — Apolitical

**URL:** https://app.beapplied.com/apply/mxn63tswrm
**Location:** Hybrid, UK-based, 2 days per week onsite at London office
**Date Posted:** 2026-07-26

---

Analytics Engineer (Mid/Senior)

## Overview
- **Reporting to:** Head of Data (incoming)
- **Location:** Hybrid, UK-based due to data handling and contractual constraints. 2 days per week onsite at our London office.
- **Visa sponsorship:** UK national or visa holder preferred, but not a dealbreaker.
- **Background checks:** Due to the non-partisan nature of the work we do with global governments and partners, all employees need to pass background checks, verifying your identity, education (if relevant), work history, sanctions, criminal record, adverse financial history, and right to work. To ensure we maintain high standards of political neutrality, we also perform media and social media checks.
- **You can expect to hear from us, no matter the outcome, by:** 28th August 2026
- **Salary expectations:** We aim for transparency on salary bands. We've set the band to attract experienced mid-level Analytics Engineers or those in a senior IC role. If our range is misaligned with your expectations, we'd welcome an open conversation as early as possible.

## Role
Apolitical builds products for public-sector professionals worldwide. Our core product stack runs in a modern TypeScript mono-repo; our analytics stack centres on Google BigQuery, dbt (Core) for transformation, Airflow / Airbyte / GitHub Actions for orchestration and CI, ThoughtSpot for BI, and Colab/Jupyter notebooks for ideation and analysis. You'll turn warehouse data into trusted, self-serve insights, define core metrics, and ship dashboards that unblock rapid, data-informed decisions across Product, Growth, Partnerships and Ops.

You'll be the go-to partner for stakeholders, owning the modelling layer, data quality, and the BI experience end-to-end, while contributing to our Airflow-based pipelines and data contracts that keep analytics reliable.

## Tasks and remit
- **Model the warehouse:** Design and maintain dbt models (incremental/snapshot), sources, tests, and documentation; enforce naming and folder conventions for scalable analytics.
- **Define metrics & semantics:** Establish a governed, reusable layer (semantic definitions / metrics catalog) so the same KPI means the same thing everywhere.
- **Build business dashboards:** Craft ThoughtSpot answers and dashboards for Exec, Product, Growth and Customer teams; automate refresh and distribution.
- **Champion self-serve analytics:** Craft intuitive star/galaxy schemas for data marts following best practices so analysts and non-technical team members can get what they need.
- **Data quality & contracts:** Add and maintain tests (dbt + Great Expectations), SLAs and alerting; evolve data contracts in version control and CI.
- **Orchestrate & automate:** Contribute Airflow DAGs for scheduled loads, dbt runs and backfills; improve observability, retries and alerts.
- **Governance & privacy:** Handle PII with care; partner with Eng/Legal on compliant data use and auditability across pipelines and BI.
- **Stakeholder enablement:** Run office hours, write playbooks, and create training resources that reduce ad-hoc analysis load.
- **Incident readiness:** Help operate and improve our backup/restore and environment-sync workflows to keep analytics resilient.

## Role expectations
Timelines vary by onboarding needs, but most team members achieve the following:

**Within one month, you will…**
- Ship your first dbt model + tests to production and document it in the catalog.
- Publish a high-value dashboard (e.g., weekly growth or funnel view) consumed by one business team.
- Set up your Airflow/dev environment and complete stack onboarding.

**Within three months, you will…**
- Establish core metric definitions (e.g., activation, engagement, retention) with stakeholders; codify them in models and BI.
- Add quality alerts (dbt tests / Great Expectations) on critical tables; reduce false positives.
- Improve/author at least one Airflow DAG for dbt jobs or backfills; document runbooks.

**Within six months, you will…**
- Own a domain (e.g., revenue or content analytics) end-to-end with a trusted, self-serve dashboard suite.
- Cut time-to-insight for a key KPI by >50% via modelling and self-serve improvements.
- Propose and deliver a roadmap to evolve our semantic layer / contracts in CI.

## About you
This is a great fit if you…
- Are an Analytics Engineer / BI Engineer with strong SQL and data-modelling fundamentals (star/snowflake, slowly changing dimensions, incremental patterns).
- Have hands-on experience with BigQuery + dbt Core (sources, macros, snapshots, documentation) and are comfortable reviewing SQL/PRs in Git.
- Can design effective dashboards in ThoughtSpot or other BI tools, balancing UX with performance.
- Understand orchestration (Airflow), testing (dbt tests / Great Expectations), and CI for analytics code.
- Communicate clearly with non-technical partners; you enjoy translating ambiguous questions into measurable metrics.

To highlight on your CV…
- Familiarity with Airbyte or other ingestion tools; Python for lightweight transforms; exposure to data contracts in CI.
- Prior work in a modern TypeScript/NodeJS/NestJS environment alongside product squads.

You won't be…
- A pure data scientist or ML researcher; this role focuses on analytics engineering (modelling, quality, BI, orchestration).
- A people manager; this is an IC role with broad cross-team influence.

---

## Layer B — Behavioural Analysis

*3-run LLM consistency check: `../../analysis/jd_traces/2026-07-26_apolitical_analytics-engineer.md` (generated by `classify_jds.py`, may not exist yet)*

**velocity_vs_rigour:** rigour — Responsibilities are dominated by testing, data quality, SLAs, and data contracts with no velocity/speed language present.

**domain_risk:** moderate — PII handling and auditability are named but there is no financial reporting or regulatory-audit exposure described, placing this at moderate.

**collaboration_width:** 4 — named teams: Product; Growth; Partnerships; Ops

**data_team_maturity:** mid — An analytics stack (BigQuery, dbt, Airflow, ThoughtSpot) is already in production use in responsibilities, and the role scales/extends it (own a domain end-to-end, evolve the semantic layer) rather than building from zero, though the Head of Data is still incoming.

**jd_authorship:** hiring_manager — Responsibilities name precise methodologies (incremental/snapshot models, star/galaxy schemas), specific tools, and concrete milestones, showing exactly what the role does day to day.

**stakeholder_orientation:** internal_data — The role centers on building the modelling/semantic layer and self-serve analytics infrastructure that the whole business consumes, not one specific commercial, product, or finance function.

**autonomy_level:** mixed — The six-month milestone grants strategic domain ownership, but near-term work (office hours, dashboard delivery, stakeholder enablement) is execution-oriented, making this mixed.

**ai_role:** none — The JD names Colab/Jupyter notebooks for analysis but does not ask the candidate to use AI coding tools or build AI-consuming infrastructure.

**testing_framing:** responsibility — Testing and data contracts appear as an owned responsibility with action verbs (add, maintain, evolve), not just a tool in a skills list.

**loss_aversion_framing:** moderate — Operational reliability (tests, SLAs, alerting, PII/auditability) is a recurring secondary concern but the JD is not framed around regulatory or stakeholder-trust fear, placing it at moderate.

**greenfield_vs_fix:** mixed — The role both builds new artifacts (semantic layer, metrics catalog, new dashboards) and improves/extends existing pipelines (Airflow DAGs, data contracts), making it mixed.

**urgency:** standard — No urgency signals present.

**work_arrangement:** hybrid — Location: Hybrid, UK-based due to data handling and contractual constraints. 2 days per week onsite at our London office.

**language_gate:** none — Not stated in JD.

**interview_stages:** Not stated in JD

**ats_platform:** unknown

**ats_job_id:** mxn63tswrm

**loss_aversion:** Handle PII with care; partner with Eng/Legal on compliant data use and auditability across pipelines and BI. Reflects a secondary operational/compliance concern rather than a dominant risk register.

**ATS keywords:**
- dbt models
- incremental/snapshot
- ThoughtSpot
- BigQuery
- Airflow DAGs
- data contracts
- Great Expectations
- self-serve analytics
- star/galaxy schemas
- semantic layer
- PII
- Airbyte
