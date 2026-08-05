# Responsibility taxonomy

Extracted from 407 of 409 JDs with an archived JD text file (one JD in the corpus has a classification record but no archived raw text, so it's excluded from this denominator entirely): 314 parsed directly (markdown headings, plain-text sections, or condensed paragraph summaries), 93 recovered via LLM interpretation of prose that had no cleanly-parseable structure (see responsibility_bullets_llm.json). 2 JDs have no extractable responsibilities at all — the source scrape is a thin listing stub with zero role-content (verified by direct read, not assumed). Regenerate with `python3 analysis/responsibility_taxonomy.py`.

Classification is rule-based keyword matching (see `responsibility_taxonomy.py::TAXONOMY`), not per-line LLM judgment — treat this as a directional map, not a precise census. Of 2828 extracted bullets, 2412 (85.3%) matched at least one theme; 416 (14.7%) matched none (miscellaneous duties too specific/rare to warrant their own theme — not a sign of missing bullets). A bullet can match more than one theme, so theme percentages sum to well over 100%. Each bullet's extraction source (`regex` vs `llm_interpreted`) is recorded per-JD in responsibility_bullets.json.

The corpus was deduplicated at the source (data/ directories, keyed on normalized job-posting URL — same company+role text alone was not treated as sufficient evidence, since several pairs turned out to be genuinely distinct openings at different locations). A residual same-company+role-text signature check against the current corpus (a cruder heuristic than the URL-based dedup actually applied) still shows a spread of at most 0.7 percentage points per theme, confirming no further collapsing would change the ranking.

## Themes, ranked by share of JDs

| Theme | % of JDs | # JDs | # bullets |
|---|---|---|---|
| Stakeholder Collaboration & Requirements | 78.9% | 321 | 570 |
| Data Modeling & Transformation | 77.9% | 317 | 670 |
| BI & Reporting/Dashboards | 68.1% | 277 | 566 |
| Data Quality & Testing | 67.6% | 275 | 437 |
| Governance & Documentation | 60.2% | 245 | 366 |
| Pipeline Engineering & Orchestration | 58.7% | 239 | 336 |
| Data Infrastructure & Warehouse Ops | 52.1% | 212 | 329 |
| Architecture & Platform Strategy | 49.1% | 200 | 290 |
| Business Analysis & Insight Generation | 48.2% | 196 | 333 |
| Performance & Cost Optimization | 44.5% | 181 | 257 |
| Self-Service Enablement & Data Literacy | 32.9% | 134 | 174 |
| AI & Agentic Workflows | 30.0% | 122 | 169 |
| Data Ownership (end-to-end) | 29.2% | 119 | 155 |
| Mentorship & Leadership | 14.0% | 57 | 66 |
| Security, Privacy & Risk | 12.0% | 49 | 59 |
| Vendor & Tooling Evaluation | 3.4% | 14 | 15 |

## What each theme looks like

### Stakeholder Collaboration & Requirements — 78.9% of JDs

Partnering with business/analyst/engineering stakeholders, translating requirements, cross-functional alignment.

Keyword pattern: `\b(stakeholder|collaborat|partner with|cross-functional|business (needs|requirements|users)|translate|liais|bridg(e|ing)|link between|align(ment)?|requirements gathering|work(ing)? closely with|works? with (customer|end.user)s?)`

Example bullets, verbatim from postings:

- Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products.
- Partner with the Analytics Innovation & Automation and Data Office product teams to prototype & deliver innovative features across the Data Platform; ensure platforms, tools & processes meet business needs.
- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.
- Working in an agile, cross-functional data product model, this role is accountable for the results and contributions of the data engineering discipline — ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes.
- Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy.
- Champion the adoption of modern data engineering and agile delivery practices, fostering close collaboration with product owners, BI, data analysis, data science, data platform, and tech teams.
- Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability.
- Collaborate closely with Data Product Owners to prioritize and deliver data engineering work in alignment with business priorities.
- Partner with Platform Engineering teams to ensure smooth operation of data pipelines within the shared core data platform.
- Collaborate with the Business IT teams to create reliable and robust interfaces to the source systems.

### Data Modeling & Transformation — 77.9% of JDs

Building/maintaining dbt models, semantic layers, metrics definitions, dimensional models — turning raw data into trusted, reusable structures.

Keyword pattern: `\b(data model(l)?(ing|s)?\b|dbt model|semantic (layer|model)|data mart|star schema|dimensional model|DAX|LookML|transform(ation)?s?\b|build.*models|reusable (data )?models|metrics? (layer|definition)|business logic|data product)`

Example bullets, verbatim from postings:

- Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products centered around Retail Execution Commercial pillar.
- Ensure Data Products follow CI/CD standards, adhere to data quality frameworks; include assertion checks and have performance & cost optimization applied.
- Build and maintain semantic layer infrastructure including metric view pipelines, materialization and optimization.
- Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products.
- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.
- Consistently champion best practices in data product development within the team, across Markets & Channels and with the broader analytics community, helping ensure data integrity, quality, and scalability of overall data products on the LEGO Data Platform.
- The Data Engineering Lead leads the design, development, and delivery of high-quality data pipelines and data products that power analytics, BI, and AI across the fintech ecosystem in payments, dunning, invoicing, and collections. This leader will build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets — ensuring that the broader organization can make faster and smarter decisions.
- Working in an agile, cross-functional data product model, this role is accountable for the results and contributions of the data engineering discipline — ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes.
- Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance).
- Oversee the development of robust ETL/ELT pipelines to ingest and transform data from multiple internal and external sources.

### BI & Reporting/Dashboards — 68.1% of JDs

Dashboards, reporting, visualization tools (Looker, Tableau, Power BI, Grafana), self-service BI.

Keyword pattern: `\b(dashboard|report(ing|s)?\b|visuali[sz]ation|Looker\b|Tableau\b|Power ?BI|Grafana|BI (tool|layer|developer)|self-service (analytics|reporting)?)`

Example bullets, verbatim from postings:

- Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting.
- Verify data consistency across systems and reporting layers
- Create Power BI dashboards and reports for monitoring and decision-making
- Gather requirements and translate them into effective reporting and analytics solutions
- Design and maintain dashboards for franchisees and internal teams
- Adapt existing dashboards from other business domains
- Own the most important company reports that inform executive decisions and serve other departments.
- Build new Looker dashboards from scratch within tight deadlines
- Identify and propose enhancements to reporting systems for better clarity and faster creation
- Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights

### Data Quality & Testing — 67.6% of JDs

Tests, validation, monitoring, anomaly detection, data trust/observability.

Keyword pattern: `\b(data quality|test(ing|s)?\b|validat|monitor(ing)?|assertion|anomaly|reliability|accura(cy|te)|observability|data trust|Monte Carlo)`

Example bullets, verbatim from postings:

- Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products centered around Retail Execution Commercial pillar.
- Ensure Data Products follow CI/CD standards, adhere to data quality frameworks; include assertion checks and have performance & cost optimization applied.
- Maintain and develop our data architecture to ensure reliability and performance
- Implement data quality frameworks and automation across pipelines owned by agile teams.
- Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of timeliness, accuracy, and availability.
- Promote proactive data reliability engineering, enabling teams to detect and resolve issues early.
- Promote automation, CI/CD for data, and observability across all data engineering workstreams, including AI-based productivity increases.
- Balance speed, accuracy, and maintainability in data modeling decisions.
- Establish data quality standards using tests, CI/CD, and documentation.
- Create Power BI dashboards and reports for monitoring and decision-making

### Governance & Documentation — 60.2% of JDs

Cataloging, metadata, access control, lineage, documentation, standards, compliance frameworks.

Keyword pattern: `\b(governance|catalog|metadata|access control|documentation|document\b|lineage|compliance|standards?\b|single (source|version) of truth|certified metrics)`

Example bullets, verbatim from postings:

- Ensure Data Products follow CI/CD standards, adhere to data quality frameworks; include assertion checks and have performance & cost optimization applied.
- Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment.
- Enable Markets & Channels specific data understanding and champion data literacy via guidelines, training, drop-in sessions, documentation, and knowledge sharing.
- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.
- Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance).
- Work hand-in-hand with Data Governance and Data Architecture to ensure alignment on metadata, lineage, and data ownership.
- Ensure consistent technical standards, delivery practices, and performance management across the discipline, even within decentralized team setups.
- Establish data quality standards using tests, CI/CD, and documentation.
- Document business logic for financial metrics including revenue recognition and deferred income
- Document KPI definitions and business rules

### Pipeline Engineering & Orchestration — 58.7% of JDs

ETL/ELT pipelines, ingestion, orchestration tooling (Airflow/Dagster/Prefect), moving data end to end.

Keyword pattern: `\b(pipeline|ETL|ELT|ingest(ion)?|orchestrat|airflow|dagster|prefect|data flows?|data integration|data sources?\b(?:\W+\w+){0,6}?\W+integrat|integrat\w*(?:\W+\w+){0,6}?\W+data sources?\b)`

Example bullets, verbatim from postings:

- Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products centered around Retail Execution Commercial pillar.
- Build and maintain semantic layer infrastructure including metric view pipelines, materialization and optimization.
- The Data Engineering Lead leads the design, development, and delivery of high-quality data pipelines and data products that power analytics, BI, and AI across the fintech ecosystem in payments, dunning, invoicing, and collections. This leader will build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets — ensuring that the broader organization can make faster and smarter decisions.
- Oversee the development of robust ETL/ELT pipelines to ingest and transform data from multiple internal and external sources.
- Drive excellence in data modeling and pipeline design, ensuring solutions are efficient, maintainable, and well-documented.
- Implement data quality frameworks and automation across pipelines owned by agile teams.
- Partner with Platform Engineering teams to ensure smooth operation of data pipelines within the shared core data platform.
- Establish KPIs for engineering productivity, pipeline performance, and data delivery quality within product teams.
- Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner
- Collaborating with OEM partners and external developers to productionise pipelines at pace

### Data Infrastructure & Warehouse Ops — 52.1% of JDs

Warehouse platform work (Snowflake/BigQuery/Redshift/Databricks), CI/CD, cloud infra, Terraform.

Keyword pattern: `\b(warehouse|data lake|infrastructure|CI/CD|version control|cloud\b|devops|Snowflake|BigQuery|Redshift|Databricks|Terraform)`

Example bullets, verbatim from postings:

- Ensure Data Products follow CI/CD standards, adhere to data quality frameworks; include assertion checks and have performance & cost optimization applied.
- Build and maintain semantic layer infrastructure including metric view pipelines, materialization and optimization.
- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.
- Promote automation, CI/CD for data, and observability across all data engineering workstreams, including AI-based productivity increases.
- Establish data quality standards using tests, CI/CD, and documentation.
- Partner with Data Engineering to diagnose issues and optimize warehouse performance.
- Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
- Build data marts and business layers using dbt on Databricks
- Build, maintain, and drive the transition to our new DataPlatform (Dagster, dbt, AWS ECS, and GCP BigQuery). This involves creating foundational tools and monitoring systems for other data teams.
- Oversee the company's largest data movement operations, handling terabyte-scale transfers from MySQL in AWS to BigQuery nightly while maintaining source system performance.

### Architecture & Platform Strategy — 49.1% of JDs

System/data architecture, platform design, scalability, tech-stack decisions, roadmap/strategy.

Keyword pattern: `\b(architecture|data (delivery )?platform|platform (design|strategy)|scalab(le|ility) (data|pipeline|platform|architecture|system)s?|infrastructure|tech(nical|nology)? stack( strateg(y|ies))?|system design|roadmap|(data|platform|technical|technology) strateg(y|ies)|strategic (data|platform|direction|decision))`

Example bullets, verbatim from postings:

- Build and maintain semantic layer infrastructure including metric view pipelines, materialization and optimization.
- Partner with the Analytics Innovation & Automation and Data Office product teams to prototype & deliver innovative features across the Data Platform; ensure platforms, tools & processes meet business needs.
- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.
- Consistently champion best practices in data product development within the team, across Markets & Channels and with the broader analytics community, helping ensure data integrity, quality, and scalability of overall data products on the LEGO Data Platform.
- You'll own and improve our data platform, keeping it fast, scalable, and trustworthy
- Maintain and develop our data architecture to ensure reliability and performance
- Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy.
- Champion the adoption of modern data engineering and agile delivery practices, fostering close collaboration with product owners, BI, data analysis, data science, data platform, and tech teams.
- Partner with Platform Engineering teams to ensure smooth operation of data pipelines within the shared core data platform.
- Work hand-in-hand with Data Governance and Data Architecture to ensure alignment on metadata, lineage, and data ownership.

### Business Analysis & Insight Generation — 48.2% of JDs

Generating insight, supporting decisions, forecasting, experimentation/A-B testing, KPI definition.

Keyword pattern: `\b(insight|analy[sz]e|analytics? (to support|for)|decision.making|forecast|experiment(ation)?|A/B test|KPI|metrics? (tracking|definition)|business (impact|problems|decisions))`

Example bullets, verbatim from postings:

- Establish KPIs for engineering productivity, pipeline performance, and data delivery quality within product teams.
- Create Power BI dashboards and reports for monitoring and decision-making
- Support franchisees in interpreting KPIs
- Promote data-driven decision-making
- Document KPI definitions and business rules
- Design and maintain advanced semantic layers to unify KPIs and analytical logic across business domains
- Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces
- Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights
- Designing demand and revenue forecasting models for company-wide planning
- Collaborating with finance, operations, and leadership teams to align on metrics and embed data in decision-making

### Performance & Cost Optimization — 44.5% of JDs

Improving query/pipeline performance, cost efficiency, resource optimization.

Keyword pattern: `\b(performance|cost (optimi[sz]ation|efficiency|reduction)|efficien(cy|t)|optimi[sz]e)`

Example bullets, verbatim from postings:

- Ensure Data Products follow CI/CD standards, adhere to data quality frameworks; include assertion checks and have performance & cost optimization applied.
- Maintain and develop our data architecture to ensure reliability and performance
- Drive excellence in data modeling and pipeline design, ensuring solutions are efficient, maintainable, and well-documented.
- Ensure consistent technical standards, delivery practices, and performance management across the discipline, even within decentralized team setups.
- Establish KPIs for engineering productivity, pipeline performance, and data delivery quality within product teams.
- Partner with Data Engineering to diagnose issues and optimize warehouse performance.
- Oversee the company's largest data movement operations, handling terabyte-scale transfers from MySQL in AWS to BigQuery nightly while maintaining source system performance.
- Develop modeling patterns, documentation standards, and workflows for analytical efficiency
- Partner with data platform, engineering, and analytics teams on high-performance pipelines
- Optimise AWS cloud-native services (Glue, Athena, S3, MWAA) to support scalable analytical and AI workloads

### Self-Service Enablement & Data Literacy — 32.9% of JDs

Enabling others to self-serve, training, data literacy programs, knowledge-sharing.

Keyword pattern: `\b(self-serv(e|ice)|data literacy|training|enable(ment)?|educat|champion.*(practice|literacy)|drop-in sessions|knowledge.shar)`

Example bullets, verbatim from postings:

- Enable Markets & Channels specific data understanding and champion data literacy via guidelines, training, drop-in sessions, documentation, and knowledge sharing.
- Consistently champion best practices in data product development within the team, across Markets & Channels and with the broader analytics community, helping ensure data integrity, quality, and scalability of overall data products on the LEGO Data Platform.
- Working in an agile, cross-functional data product model, this role is accountable for the results and contributions of the data engineering discipline — ensuring that the data engineers deliver trusted, timely, and high-quality data to enable business and analytical outcomes.
- Champion the adoption of modern data engineering and agile delivery practices, fostering close collaboration with product owners, BI, data analysis, data science, data platform, and tech teams.
- Define and implement company metrics in Omni for self-serve analytics.
- Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights
- Create self-serve analytics capabilities that empower teams to independently answer questions
- Enable Data Analysts to deliver insights through reliable, documented dbt models
- Own the data pipeline from architecting dbt models to enabling self-service in Looker
- Develop and execute strategies to grow and engage the analytics engineering community around Lightdash. This includes cultivating relationships with community members, identifying product champions, and creating spaces for knowledge sharing and collaboration around modern analytics practices.

### AI & Agentic Workflows — 30.0% of JDs

Using AI/agentic tools to accelerate the candidate's own work (Claude Code, Cursor, Copilot), or building data infrastructure that AI/ML systems consume or run on — the bullet-level counterpart to the `ai_role` Layer B dimension.

Keyword pattern: `\b(AI|ML|machine learning|LLM|GenAI|generative AI|agentic|AI agents?|AI-assisted|AI-driven|AI-powered|AI-native|AI coding|copilot|prompts?)\b`

Example bullets, verbatim from postings:

- Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products.
- The Data Engineering Lead leads the design, development, and delivery of high-quality data pipelines and data products that power analytics, BI, and AI across the fintech ecosystem in payments, dunning, invoicing, and collections. This leader will build and scale a high-performing data engineering team focused on transforming raw data into trusted, accessible, and reusable assets — ensuring that the broader organization can make faster and smarter decisions.
- Define and execute the data engineering vision and roadmap aligned with the overall Data, AI & Analytics strategy.
- Ensure that agile data product teams deliver fit-for-purpose data models that meet the needs of analytics, AI, and regulatory reporting.
- Promote automation, CI/CD for data, and observability across all data engineering workstreams, including AI-based productivity increases.
- Building infrastructure that powers "AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems"
- Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces
- Optimise AWS cloud-native services (Glue, Athena, S3, MWAA) to support scalable analytical and AI workloads
- Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights
- Contribute strategic input around data modeling, BI tooling, and AI-assisted analytics

### Data Ownership (end-to-end) — 29.2% of JDs

Explicit end-to-end/full-stack ownership language, independent of which stage.

Keyword pattern: `\b(own(ership)?\b|end.to.end|full.stack|from ingestion to)`

Example bullets, verbatim from postings:

- You'll own and improve our data platform, keeping it fast, scalable, and trustworthy
- Work hand-in-hand with Data Governance and Data Architecture to ensure alignment on metadata, lineage, and data ownership.
- Cultivate a culture of ownership, accountability, and collaboration within and across agile data product teams.
- This hands-on, individual contributor position focuses on building the analytics foundation. You'll work end-to-end on the analytics layer, using dbt for transformations and Omni as the semantic layer. The role involves partnering with Marketing, Finance, Operations, and Data Engineering teams.
- Own the most important company reports that inform executive decisions and serve other departments.
- Design, own, and evolve core data models and the modelling architecture
- Increase transparency around data sources, KPI definitions, and report ownership.
- Own and evolve core business metrics - from definition to tracking and operationalisation
- Own the data pipeline from architecting dbt models to enabling self-service in Looker
- You'll be the go-to Lightdash pro, both internally and in the community. You'll stay current with our latest features, including our evolving AI capabilities (using Lightdash for our own analytics and demos), understand how they fit into broader BI and analytics engineering workflows, and share this knowledge widely. You'll represent Lightdash at community events, conferences, and meetups with curiosity and enthusiasm, showcasing how AI is transforming analytics workflows.

### Mentorship & Leadership — 14.0% of JDs

Mentoring, leading a team, hiring, coaching, people management.

Keyword pattern: `\b(mentor|lead(ing|ership)?\b\s*(,|and)?\s*(mentor|develop|grow|coach)?\s*(a |the )?team\b|\bteam lead\b|lead(ing)? a team of|\bas a lead\b|\bas the lead\b|carry expertise as a lead|(provide|providing) (technical )?leadership|technical leadership|manage (a|the) team|coach|hire|hiring|grow (the )?team|line manag|people manag|guide (junior|other))`

Example bullets, verbatim from postings:

- Lead, mentor, and grow a high-performing team of data engineers working across multiple agile data product teams.
- Growing and mentoring a data engineering team and contributing to hiring decisions
- Mentor analytics engineers and analysts on modeling skills and technical standards
- Leading a team of two Analytics Engineers, providing direction and fostering their professional growth
- Support the growth of junior analysts through code reviews, coaching, and documentation
- Provide mentorship and maintain data culture quality
- Mentor Junior Talent
- Mentor junior data analysts and engineers
- Mentor engineers through code reviews and pair programming
- Lead, mentor, and guide more junior team members

### Security, Privacy & Risk — 12.0% of JDs

Data privacy, security, PII/GDPR handling, risk management.

Keyword pattern: `\b(privacy|security\b|risk (management|mitigation|assessment|scoring|model)|data risk|privacy risk|compliance risk|PII|GDPR|complian)`

Example bullets, verbatim from postings:

- Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment.
- Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clear accountability for delivery outcomes (timeliness, quality, completeness, compliance).
- Implement row-level security
- Implement data governance protocols addressing GDPR compliance and access management
- Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring, building well-documented, quality-assured data products
- Take ownership of data privacy & school assurance: Become our day-to-day lead for data privacy and school-facing data assurance - supporting data sharing agreements and DPIAs, and ensuring our practices around children's data are robust and consistently applied.
- Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment
- Implement risk models (ICAAP, capital ratios) into production Python solutions
- The role focuses on data architecture development. Candidates will 'extract, clean, and transform data from various sources' and collaborate with data scientists to provide reliable datasets. They must design data models capturing gaming KPIs and user profiles while ensuring 'accuracy, compliance, scalability, and long-term usability.'
- Ensure data quality, governance, and security standards

### Vendor & Tooling Evaluation — 3.4% of JDs

Evaluating/selecting third-party tools and vendors.

Keyword pattern: `\b(vendor|tool(ing)? selection|evaluat\w* (new )?tool|evaluat\w*.{0,20}vendor|new tooling|tooling adoption|third.party)`

Example bullets, verbatim from postings:

- Mentor other engineers while leading tool selection, technology evaluation, and architectural roadmap development.
- Support vendor partnerships and system rollouts
- Set up and manage the architecture, documentation, and key data transformations for in-house and third-party data.
- Build client relationships, collaborate with vendors and technology partners, and communicate results to colleagues and clients
- Contributing to AI-driven tooling adoption
- Support the use of our data by third party products (CRM, website, AI assistant…)
- Automate reconciliation at scale — build automated frameworks that prove our numbers against third-party data, across our core product and every new launch
- Become the go-to expert for new tooling like dbt and AI applications, leading its adoption and rollout
- Stay pragmatic with technology: Build with our proven stack—dbt, BigQuery, LlamaIndex, ADK, and n8n—while thoughtfully evaluating new tools that add real value. Lead with both technical depth and business judgment.
- Challenge Product Managers, Engineering Managers, and Senior Leadership with evidence when the data contradicts intuition, acting as a neutral third party in the debate.

## Responsibility themes vs. Layer B dimensions

Each of the 15 responsibility themes is a binary per-JD indicator (matched at least one bullet, or didn't), so it can be crossed against any single-valued Layer B dimension as a standard 2×k contingency table (χ², Cramér's V) — this is valid even though a JD can match several themes at once, because each such test only looks at one theme's indicator in isolation, independent of which other themes also matched the same JD. Scoped to the analytical cohort (AE/BI + team_lead), same as every other Layer B finding in report.md — `data_engineering`/`other` role types are excluded here too.

**The auto-correlation risk, and how it's handled:** several theme/dimension pairs are excluded from the findings below not because they're weak, but because they're circular — the theme's regex keywords and the dimension's own LLM coding rubric (or, for tech-stack flags, a literal tool name embedded in the theme's regex) detect the same textual signal. The single strongest pairing found in the entire sweep — "Data Quality & Testing" vs. `testing_framing`, Cramér's V=0.51 — is excluded on exactly this basis: `testing_framing` is coded by looking for testing/quality language in the JD, so crossing it against a theme built from testing/quality keywords mostly measures whether two classification methods agree with each other, not a substantive relationship. See `OVERLAP_PAIRS` in `responsibility_taxonomy.py` for the full list and the reasoning per pair.

### Construct-overlap pairs (validity checks, not findings)

| Theme | Dimension | V | p | n |
|---|---|---|---|---|
| AI & Agentic Workflows | ai_role | 0.67 | p<0.0001 | 370 |
| Data Quality & Testing | testing_framing | 0.51 | p<0.0001 | 370 |
| Security, Privacy & Risk | loss_aversion_framing | 0.30 | p<0.0001 | 370 |
| Data Ownership (end-to-end) | autonomy_level | 0.28 | p<0.0001 | 370 |
| Data Modeling & Transformation | has_dbt | 0.26 | p<0.0001 | 370 |
| BI & Reporting/Dashboards | has_power_bi | 0.21 | p<0.0001 | 370 |
| Security, Privacy & Risk | domain_risk | 0.18 | p=0.003 | 370 |
| BI & Reporting/Dashboards | has_looker | 0.12 | p=0.03 | 370 |
| Pipeline Engineering & Orchestration | has_airflow | 0.11 | p=0.03 | 370 |
| BI & Reporting/Dashboards | has_tableau | 0.01 | p=0.87 | 370 |

### Clean relationships (p<0.01, min expected cell ≥5, no keyword overlap)

Ranked by effect size. These are exploratory — no multiple-comparison correction is applied across the 304 pairs tested in the full sweep, so p<0.01 alone should not be read as strong evidence at this scale; effect size (V) and, ideally, a stratification check (see below) matter more here than the p-value.

| Theme | Dimension | V | p | n |
|---|---|---|---|---|
| Governance & Documentation | testing_framing | 0.35 | p<0.0001 | 370 |
| Governance & Documentation | loss_aversion_framing | 0.32 | p<0.0001 | 370 |
| Data Quality & Testing | loss_aversion_framing | 0.29 | p<0.0001 | 370 |
| Data Modeling & Transformation | testing_framing | 0.28 | p<0.0001 | 370 |
| Data Infrastructure & Warehouse Ops | jd_authorship | 0.24 | p<0.0001 | 370 |
| Mentorship & Leadership | autonomy_level | 0.22 | p<0.001 | 370 |
| Governance & Documentation | stakeholder_orientation | 0.21 | p=0.003 | 370 |
| AI & Agentic Workflows | autonomy_level | 0.21 | p<0.001 | 370 |
| AI & Agentic Workflows | greenfield_vs_fix | 0.20 | p<0.001 | 370 |
| AI & Agentic Workflows | has_python | 0.20 | p<0.001 | 370 |
| Data Quality & Testing | jd_authorship | 0.20 | p<0.001 | 370 |
| Data Modeling & Transformation | loss_aversion_framing | 0.20 | p<0.001 | 370 |
| Data Ownership (end-to-end) | has_power_bi | 0.19 | p<0.001 | 370 |
| Performance & Cost Optimization | data_team_maturity | 0.19 | p=0.001 | 370 |
| Data Ownership (end-to-end) | ai_role | 0.19 | p=0.002 | 370 |
| Data Ownership (end-to-end) | greenfield_vs_fix | 0.17 | p=0.004 | 370 |
| Data Modeling & Transformation | jd_authorship | 0.17 | p=0.004 | 370 |
| Self-Service Enablement & Data Literacy | has_looker | 0.17 | p<0.001 | 370 |
| Stakeholder Collaboration & Requirements | data_team_maturity | 0.17 | p=0.004 | 370 |
| Data Ownership (end-to-end) | jd_authorship | 0.17 | p=0.005 | 370 |

### Featured relationships, stratification-checked

Hand-picked from the clean list above and, for the first one, re-tested within subgroups of a plausible confounder before being written up as a finding — a check the rest of the clean list has *not* individually received, so treat anything not covered by name below as directional only, same as the rest of this document.

**Mentorship & Leadership × autonomy_level** — χ²=17.99, p<0.001, V=0.22, n=370

- Overall: execution: 6% (n=113); mixed: 14% (n=138); strategic: 26% (n=119)
- Within seniority=mid: execution: 3% (n=71); mixed: 11% (n=81); strategic: 6% (n=31)
- Within seniority=senior: execution: 13% (n=31); mixed: 15% (n=47); strategic: 21% (n=70)
- **Verdict:** survives the stratification check — the gradient holds within each stratum, not just across the whole corpus.

**Data Infrastructure & Warehouse Ops × jd_authorship** — χ²=21.41, p<0.0001, V=0.241, n=370

- Overall: hiring_manager: 57% (n=263); mixed: 47% (n=77); recruiter: 13% (n=30)
- Not independently stratification-checked beyond the overlap-keyword screen — read as directional.

### A relationship that looked real and didn't survive scrutiny

**Architecture & Platform Strategy × work_arrangement** — unstratified: χ²=5.69, p=0.13, V=0.124, n=370. Overall: hybrid: 53% (n=175); remote: 46% (n=39); onsite: 26% (n=19); not_stated: 46% (n=137)

This pairing clears the same p<0.01 / no-overlap screen as the clean findings above, and on its own looks like a headline ("remote roles get less architectural scope"). It doesn't survive a stratification check against `data_team_maturity` — a plausible confounder, since maturity is independently correlated with work arrangement (mature teams skew hybrid) and with this theme:

- Within data_team_maturity=early: hybrid: 39% (n=23); remote: 22% (n=9); onsite: 43% (n=7); not_stated: 47% (n=19)
- Within data_team_maturity=mid: hybrid: 50% (n=103); remote: 54% (n=26); onsite: 11% (n=9); not_stated: 42% (n=81)
- Within data_team_maturity=mature: hybrid: 65% (n=49); remote: 50% (n=4); onsite: 33% (n=3); not_stated: 54% (n=37)

Once split by maturity tier, `remote` stops being consistently the lowest group — `not_stated` is the consistently-lowest group in every tier instead, and several strata have single-digit cell counts for `remote`/`onsite`, which makes the unstratified comparison mostly noise rather than signal. Kept here as a documented negative result and a worked example of why a stratification check matters, not silently dropped.

### Critical assessment: how this whole approach could be wrong

- **Multiple comparisons.** The full sweep tests every theme against every dimension (304 pairs tested in total across all 16 themes) with no Bonferroni or FDR correction. At p<0.01 with that many tests, a meaningful number of the "clean" pairs are expected to be false positives by chance alone — the effect-size floor (V) and the stratification checks are the mitigation, not a substitute for treating this section as exploratory.
- **Post-hoc selection.** The featured relationships were picked *after* seeing which pairs had large effect sizes, then checked — not pre-registered. That ordering (see p-values, then decide what to scrutinize) is exactly the "garden of forking paths" pattern that makes exploratory findings less trustworthy than confirmatory ones. Only one of the two received an actual stratification check; the other is reported with that caveat explicit, not implied.
- **Two independent classification methods, two independent error rates.** Every relationship here compounds the regex classifier's error rate (§ uncategorized-bullet rate above) with whatever error rate the Layer B LLM coding carries on the paired dimension (`jd_authorship` self-consistency is 0.58 per report.md §3 — the lowest of any dimension) — a relationship involving `jd_authorship` specifically should be read with that codebook-ambiguity caveat layered on top of everything else in this section.
- **Cross-sectional text, not causal evidence.** Every relationship here is a same-JD co-occurrence pattern in language written at one point in time. "Mentorship language correlates with strategic autonomy language" says nothing about whether one causes the other, or whether both are downstream of a third factor (company culture, team size) not coded in this corpus at all.
- **The stratification checks themselves are not exhaustive.** Confirming a relationship survives a *single* plausible confounder (seniority, maturity) doesn't rule out a different confounder not tested — company size, sector, and funding stage are not coded dimensions in this corpus and could not be checked.
- **Rebuttal most likely to land:** an outside reviewer's strongest objection would probably be the multiple-comparisons point combined with the fact that only one of the two featured relationships got an actual confounder check — the other (`Data Infrastructure & Warehouse Ops × jd_authorship`) is reported at the same confidence level as a relationship that hasn't been stress-tested the way the debunked example shows this corpus can produce false leads. Treat that one as "survived the overlap screen and a p<0.01/effect-size floor," not as "confirmed."
