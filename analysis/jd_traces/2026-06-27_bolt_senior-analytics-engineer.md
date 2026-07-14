# Trace: 2026-06-27_bolt_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Bolt

**URL:** https://bolt.eu/en/careers/positions/ccb51f9f-2c97-4ed7-9d1c-dbced6a7ccd2/
**Location:** Tallinn, Estonia
**Date Posted:** 2026-06-27

---

About Bolt

Bolt is shaping a future where cities are built for people, not cars. What started as an ambitious project of a 19-year-old in 2013 has grown into a global mobility platform used by more than 200 million customers and 4.5 million driver and courier partners across 50 countries.

From ride-hailing and food delivery to scooters, e-bikes, and car-sharing, Bolt helps people move through cities every day. Small, autonomous teams drive this work, combining the speed and ownership of a startup with the scale of a global technology company backed by more than €1bn in funding.

And we're just getting started.

Why join Bolt?

Build the future of mobility and help transform how people live and move in cities.

Tackle challenges at scale that span technology, operations, regulation, and growth.

Take real ownership early. Small, lean teams mean your decisions matter from day one, and you'll learn fast alongside some of the best people in the industry.

Join one of Europe's leading technology companies, backed by world-class investors including Sequoia.

About the role

Our whole platform lives and breathes on data. Every step of our product development is powered by robust, scalable data infrastructure — and Analytics Engineers are the people who make that possible.

As an Analytics Engineer at Bolt, you work at the intersection of data engineering and product analytics. You own everything between data producers and data consumers: building the pipelines, models, and data products that empower analysts and decision-makers across the organisation. You're a sparring partner to our Product Analysts and a force multiplier for the teams you support.

We operate across four product verticals — Ride-Hailing, Delivery (Bolt Food and Bolt Market), Rentals (e-bikes, scooters, and carsharing), and Bolt Business — plus two horizontals: Platform and Incentives.

We have multiple open roles across these teams. Once you apply, you'll go through a universal process designed to help you learn more about Analytics Engineering at Bolt — and help us find the team that best matches your skills and ambitions.

If you believe great data infrastructure is what separates fast-moving organisations from slow ones, you'll fit right in. Scroll down to find out what it looks like day-to-day!

Main tasks and responsibilities

Work closely with product analysts and adjacent stakeholders to prioritize and align analytics engineering roadmaps, ensuring that solutions meet the long-term business needs.

Build, expand and maintain reusable data models and metrics in dbt.

Set up and manage the architecture, documentation, and key data transformations for in-house and third-party data.

Improve the efficiency and impact of product analysts through data products, processes, collaboration and active knowledge-sharing.

Develop strategic data products such as segmentation feature store or enable advanced solutions such as interactive metrics trees.

Follow system design and architectural best practices and closely collaborate with cross-functional stakeholders to ensure data integrity and efficiency across all processes.

About you

You hold a Bachelor and/or Master degree in Statistics, Economics, Data Science, Computer Science, Mathematics, Information Management, Business or similar studies.

You have significant experience with data modeling, developing analytics architectures for large volumes of data and can demonstrate tangible impact in the area.

You are proficient in SQL, Python, Spark, data modelling tools such as dbt and orchestration tools such as Apache Airflow.

You possess excellent knowledge of system design and architectural best practices with a focus on reusability, maintainability, reliability, and scalability.

You are a strong cross-functional collaborator with…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | internal_data | product | internal_data | internal_data | 33% | ✓ |
| autonomy_level | mixed | mixed | strategic | strategic | 33% | ✗ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Follow system design and architectural best practices and closely collaborate with cross-functional stakeholders to ensure data integrity and efficiency across all processes."
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize architecture, design best practices, data integrity, and system reliability over speed or velocity, with no delivery-pace language in the core duties.

**Run 2:** `rigour` ✓
> Quote: "Follow system design and architectural best practices and closely collaborate with cross-functional stakeholders to ensure data integrity and efficiency across all processes."
> Verified: ✓ found in JD
> Reasoning: Multiple emphases on architectural best practices, data integrity, reliability, and scalability as core responsibilities outweigh velocity language in team framing.

**Run 3:** `rigour` ✓
> Quote: "Follow system design and architectural best practices and closely collaborate with cross-functional stakeholders to ensure data integrity and efficiency across all processes."
> Verified: ✓ found in JD
> Reasoning: The responsibilities prioritize architectural best practices, data integrity, and system design as core expectations rather than speed or shipping velocity.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "building the pipelines, models, and data products that empower analysts and decision-makers across the organisation."
> Verified: ✓ found in JD
> Reasoning: The role supports business decisions and product development without explicit financial reporting, compliance, or regulatory language, placing it in moderate risk territory typical of operations-critical SaaS.

**Run 2:** `moderate` ✓
> Quote: "Every step of our product development is powered by robust, scalable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: Data supports product decisions and development but no mention of financial reporting, regulatory compliance, or audit requirements.

**Run 3:** `moderate` ✓
> Quote: "Our whole platform lives and breathes on data. Every step of our product development is powered by robust, scalable data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The role supports product analytics and operational intelligence rather than financial reporting or regulatory compliance, suggesting data errors affect business decisions but not direct compliance exposure.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "product analysts and adjacent stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only Product Analysts is named as a distinct function; other collaborators are described generically as stakeholders.

**Run 2:** `1` ✓
> Quote: "Product Analysts"
> Verified: ✓ found in JD
> Reasoning: Only Product Analysts explicitly named as a distinct team; adjacent stakeholders and other references are too vague to count.

**Run 3:** `1` ✓
> Quote: "sparring partner to our Product Analysts and a force multiplier for the teams you support"
> Verified: ✓ found in JD
> Reasoning: Only product analysts are explicitly named as a collaboration partner; other stakeholders are referred to generically as 'adjacent stakeholders' or 'teams'.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Build, expand and maintain reusable data models and metrics in dbt."
> Verified: ✓ found in JD
> Reasoning: The language 'expand and maintain' alongside responsibilities named across multiple product verticals suggests an established function scaling existing infrastructure rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "Build, expand and maintain reusable data models and metrics in dbt."
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Airflow, Looker) appearing in responsibilities and expand language indicate established infrastructure being scaled rather than early-stage.

**Run 3:** `mid` ✗
> Quote: "Build, expand and maintain reusable data models and metrics in dbt."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize expanding existing infrastructure with named tools like dbt and Airflow, indicating an established but growing data function rather than early-stage startup.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop strategic data products such as segmentation feature store or enable advanced solutions such as interactive metrics trees."
> Verified: ✓ found in JD
> Reasoning: Specific product examples (segmentation feature store, interactive metrics trees) and dbt context show hiring-manager specificity, while generic collaboration language shows recruiter influence.

**Run 2:** `mixed` ✓
> Quote: "Develop strategic data products such as segmentation feature store or enable advanced solutions such as interactive metrics trees."
> Verified: ✓ found in JD
> Reasoning: Technical specificity in some responsibilities (feature stores, metrics trees, architecture details) mixed with generic collaboration language (sparring partner, force multiplier).

**Run 3:** `mixed` ✓
> Quote: "Develop strategic data products such as segmentation feature store or enable advanced solutions such as interactive metrics trees."
> Verified: ✓ found in JD
> Reasoning: Specific technical examples like segmentation feature store and interactive metrics trees suggest hiring manager input, though some responsibilities use generic stakeholder collaboration language.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `product` ✗
> Quote: "you work at the intersection of data engineering and product analytics."
> Verified: ✓ found in JD
> Reasoning: The role explicitly centers product analytics as the primary partner and product development as the end goal, with data products supporting product teams rather than data professionals.

**Run 2:** `internal_data` ✓
> Quote: "Improve the efficiency and impact of product analysts through data products, processes, collaboration and active knowledge-sharing."
> Verified: ✓ found in JD
> Reasoning: Primary audience is the analytics function itself with responsibility to make Product Analysts more efficient, even though downstream impact serves product decisions.

**Run 3:** `internal_data` ✓
> Quote: "You own everything between data producers and data consumers: building the pipelines, models, and data products that empower analysts and decision-makers across the organisation."
> Verified: ✓ found in JD
> Reasoning: The role primarily builds data infrastructure and platforms serving internal data consumers (analysts, data engineers) rather than specific commercial or product teams.

⚠ **LLM inconsistency**: runs gave ['product', 'internal_data', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "You own everything between data producers and data consumers: building the pipelines, models, and data products that empower analysts and decision-makers across the organisation."
> Verified: ✓ found in JD
> Reasoning: The role owns technical architecture and infrastructure decisions, but business priorities and direction are set through collaboration with product teams rather than autonomously.

**Run 2:** `strategic` ✗
> Quote: "You own everything between data producers and data consumers: building the pipelines, models, and data products that empower analysts and decision-makers across the organisation."
> Verified: ✓ found in JD
> Reasoning: Own framing and responsibility to set analytics engineering roadmaps indicates strategic direction-setting within the data domain rather than execution against externally-set priorities.

**Run 3:** `strategic` ✗
> Quote: "You own everything between data producers and data consumers"
> Verified: ✓ found in JD
> Reasoning: The role is framed with ownership verbs and responsibility for defining the analytics architecture and roadmap direction rather than executing scoped work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "At Bolt, using AI daily is a baseline expectation for everyone. If there's a faster, smarter way to do your work, we expect you to find it."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools to accelerate their own work and productivity, with no mention of building AI infrastructure or data for AI pipelines.

**Run 2:** `ai_user` ✗
> Quote: "At Bolt, using AI daily is a baseline expectation for everyone. If there's a faster, smarter way to do your work, we expect you to find it."
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to use AI tools daily to accelerate their own work and productivity, not to build AI infrastructure or enable GenAI applications.

**Run 3:** `ai_user` ✗
> Quote: "At Bolt, using AI daily is a baseline expectation for everyone. If there's a faster, smarter way to do your work, we expect you to find it."
> Verified: ✓ found in JD
> Reasoning: The JD explicitly expects candidates to use AI tools daily to accelerate their work, indicating AI tool usage is a baseline skill expectation for the role.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Set up and manage the architecture, documentation, and key data transformations for in-house and third-party data."
> Verified: ✓ found in JD
> Reasoning: No testing tools, data quality frameworks, observability practices, or data contracts are mentioned anywhere in the JD, despite responsibilities covering architecture and data transformations.

**Run 2:** `absent` ✗
> Quote: "No testing, data quality, or observability framework signal in responsibilities or requirements."
> Verified: ⚠ NOT found verbatim
> Reasoning: No mention of testing standards, data contracts, quality frameworks, or observability practices as owned responsibilities or required skills.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality framework signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes architectural best practices and data integrity but does not explicitly mention testing, data contracts, observability, or data quality frameworks as a responsibility or tool.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The role is framed entirely around building capabilities and delivering value, with no risk register, compliance concerns, or loss-aversion language.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: Emphasis is on building great data infrastructure and engineering practices; no language about regulatory compliance, risk mitigation, incident response, or preventing failures.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in terms of building capability and empowering teams rather than preventing failures, regulatory violations, or safeguarding data quality.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
