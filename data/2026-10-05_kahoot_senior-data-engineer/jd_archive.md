**URL:** https://apply.workable.com/kahoot/j/9C1A0D9A53

Senior Data Engineer
Location: Oslo, Oslo, Norway
Workplace: On-site
Type: Full time
Department: Technology/Engineering

Are you interested in how data comes to life? We’re looking for someone who enjoys building things from scratch and seeing their work make a real difference for students, teachers, and professionals. If you like the idea of working with a friendly team to build clean, helpful data tools, we’d love to chat with you! Then Kahoot! has the job for you! We're looking for a Senior Data Engineer to join the global Kahoot! Data Team and help us build the next generation of the Kahoot! data platform.

And we mean the next generation quite literally. We are building an agent-driven data warehouse. You'll be a senior voice in a small, high-trust team that owns everything from ingestion to the semantic layer. That means real ownership, and you work directly with the analysts and business stakeholders who depend on your data. It also means real leverage — the models you build are the ones the whole company reports on.

The team
The Kahoot! Data Team is a small, cross-functional group of seven covering both data engineering and analytics. Our engineers own the core data platform and our automation and data product work; our analysts are embedded with Sales, Product, and Finance, so the people consuming your models sit in the same standup as you.
We build and run the Data Kabal — the Kahoot! data platform. Concretely, that is:
- Google BigQuery as our data warehouse
- Dagster+ as our orchestrator, coordinating both dbt models and Python assets
- Terraform / Terragrunt for infrastructure as code, stored on GitHub
- AI agents (Claude, MCP servers, coding and data agents) as a first-class part of the platform rather than a side experiment
We care a lot about conventions and documentation as code: Identifiers and naming conventions come from central registries, data models have data quality checks, and data documentation lives in the repository. Hence, it propagates downstream instead of going stale in a wiki. That discipline is what makes the agent work possible.

Agent-driven data warehousing
This is where we are placing our biggest bet, and where this role will have the most impact. We are building data agents across three areas:
- Modeling — agents that scaffold and refactor dbt models, Dagster assets and tests in line with our conventions, propose dimensional models from source schemas, and handle the mechanical parts of migrations and remodeling so engineers can spend their time on design
- Monitoring — agents that watch asset checks, freshness, and pipeline failures, correlate them with recent changes, do the first round of root cause investigation, and hand a human a diagnosis instead of an alert
- Analytics — agents that answer business questions against our governed models and semantic layer, with the lineage and caveats attached, so stakeholders get trustworthy self-service and analysts get their time back
The company's HQ is in Oslo, Norway, and Oslo is our first choice for this position. This role reports to the Chief Technology Officer, located in Norway.

Responsibilities
- Own data domains end to end — from source system and ingestion, through dbt models in BigQuery, to the marts our analysts and BI tools build on
- Design and build pipelines in Dagster+, orchestrating both dbt models and Python assets, with partitions, sensors, and automation conditions that fit the data rather than a cron guess
- Model our data warehouse using dimensional modeling, and take a leading role in remodeling domains that have outgrown their original design
- Set and hold the quality bar — data quality and freshness checks, meaningful tests, and monitoring and alerting so we find problems before our stakeholders do
- Build and operate our data agents for modeling, monitoring, and analytics — design the workflows, tools, and guardrails, decide where an agent acts autonomously and where a human approves, and measure whether the output is actually good
- Make the warehouse agent ready — treat metadata, documentation, data contracts and the semantic layer as production interfaces, because they are what agents (and people) reason from
- Build data products and automations that put data to work directly in the business, not only in dashboards
- Modernize and consolidate the platform — we are actively migrating legacy workloads onto Dagster and dbt, and paying down modeling debt as we go
- Own your infrastructure as code with Terraform/Terragrunt, and treat DataOps (CI/CD, environments, branch deployments) as part of the job
- Ensure compliance with data governance — high quality, secure, well documented and correctly retained datasets, including data deletion and privacy requirements
- Work directly with stakeholders in Sales, Product, Finance and Engineering: turn a vague business question into a well-specified data model, and say no to the ones that should not be built
- Raise the level of the team — thorough rubber ducking, code reviews, strengthening our conventions, writing the documentation that makes the platform learnable, and mentoring colleagues and new joiners

We're looking for someone who has:
- A degree in a computing-related field, or equivalent practical experience
- 5+ years of experience as a data engineer, including clear ownership of production data pipelines and warehouse models
- Strong SQL — you are comfortable reasoning about query cost and performance, not just correctness
- Strong Python, with an eye for clean, tested, typed, and reviewable code.
- Solid experience with a cloud data warehouse — BigQuery ideally, otherwise Snowflake, Redshift, or Databricks
- Hands-on production experience with an orchestration framework (Dagster, Airflow, Prefect, Argo…)
- Hands-on experience with dbt, or a comparable transformation framework
- Experience with dimensional data modeling (Kimball/star schema) and an opinion about when to apply it
- Experience integrating third-party APIs and source systems into a warehouse, including the unglamorous parts: pagination, backfills, schema drift, and late-arriving data
- Comfortable with cloud platforms (GCP preferred, AWS or Azure fine) and with DevOps practices — Git, CI/CD, containers, infrastructure as code
- Familiarity with BI and analytics tools (Power BI, ThoughtSpot, Looker, Tableau, Amplitude) and with what makes a data model pleasant to consume in them
- Genuine hands-on use of AI coding and data agents in your daily work, and a clear-eyed view of where they help and where they quietly make things worse — this is central to how we work, not a nice-to-have
- The seniority to work with non-technical stakeholders directly: asking the right questions, pushing back where needed, and explaining data in plain language
Ideally, you'll also have:
- Experience building with LLMs and agents rather than only using them: tool and context design, MCP servers, retrieval over metadata and lineage, structured outputs, and human-in-the-loop review flows
- Experience evaluating non-deterministic systems — building evals, measuring quality and regressions, and knowing when an agent is not yet good enough to trust
- Experience with semantic layers, data contracts, or metadata platforms as the interface between the warehouse and its consumers
- Experience with Terraform/Terragrunt or similar infrastructure as code tooling
- Experience with streaming or event data (Kafka, product analytics event pipelines)
- Experience with data governance and privacy work (GDPR, retention, deletion, access control, column-level security)
- Experience migrating a legacy data platform onto a modern stack without stopping the business
- Familiarity with Polars, dlt, or other dataframe libraries, and with ML or analytics engineering workflows, and dealing with virtual environments and dependencies, formatters, linters, etc.
- Experience mentoring other engineers, or having been the person who set a team's conventions

About Kahoot! Kahoot! is a global learning and engagement platform company, on a mission to make learning awesome by empowering everyone- children, students, and employees- to reach their full potential.

Our Kahoot! learning platform makes it easy for individuals and corporations to create, share, and host learning sessions that drive compelling engagement.
Since launching in 2013, Kahoot! has become a global leader, hosting hundreds of millions of sessions with over 14 billion cumulative, non-unique participants across 195 countries worldwide.

The Kahoot! Group includes Clever, the global identity platform for K-12, serving millions of educators, students, and schools every day; learning applications DragonBox and Drops; and workplace communication and corporate learning tools Actimo and Motimate.

The Kahoot! head office is located in Oslo, Norway, while our 600+ Kahoot! colleagues (the K!rew) are located across the globe, working from offices in the United States, the United Kingdom, France, Singapore, Australia, Japan, Finland, Estonia, Denmark, Spain, and Poland.
Our K!rew
At the Kahoot! Group we champion a positive culture of collaborative learning and innovation. With a global team of more than 600 employees representing over 50 different nationalities, we’re a diverse and fun bunch of people! We work hard and celebrate our wins, tackle challenges with original ideas, and learn something new every day.
At Kahoot! our mission is to make learning awesome! We are all about lifelong learning and developing new skills through curiosity and play. By combining the two in a fun, social way, we can unlock the learning potential within all of us, no matter the subject, age, or ability.

Suppose you talk to anyone working in the Kahoot! Group, they will tell you that one of the greatest perks is seeing how your work puts a smile on the faces of kids, teachers, and learners around the world.

- A competitive compensation package
- Share option program
- Home broadband allowance
- Mobile phone subscription
- Flexible working
- Buddy program
- Social and company events (virtual and in person)
- A diverse, friendly and international environment
- Subsidized sports activities such as padel, cageball and running
- Sponsored Norwegian language classes

We look forward to hearing from you! Application deadline: 30 September 2026.