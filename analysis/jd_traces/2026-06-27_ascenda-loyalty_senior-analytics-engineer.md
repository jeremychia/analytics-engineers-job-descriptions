# Trace: 2026-06-27_ascenda-loyalty_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Ascenda Loyalty

**URL:** https://jobs.gem.com/ascenda-loyalty/am9icG9zdDofWVA0wxcjbbNzBTyR7eUG
**Location:** Singapore • Ho Chi Minh, Vietnam
**Date Posted:** 2026-06-27

---

Senior Analytics Engineer
Singapore • Ho Chi Minh, Vietnam
Engineering
Hybrid
Full-time
Great to Meet You! We are Ascenda

Ascenda powers the growth of leading financial services brands worldwide with premium rewards programs that differentiate their products, drive profitable customer behaviors, and create sustained engagement.

We are behind the world-class rewards propositions of major banks and fintechs around the globe, including brands like American Express, Capital One, Brex, Revolut, Ramp, HSBC, Bank of New Zealand, Virgin Money (Australia), Bradesco (Brazil), ANZ (Australia), HDFC (India) and many others.

We are a thriving global Loyalty as a Service company and experiencing rapid expansion. Join our dynamic finance team as one of its earliest leaders, contributing to the development of our financial planning strategies as we strive for hypergrowth. Our team spans 20 cities worldwide, with dual headquarters in Singapore and New York, totaling 250 team members.

Join us as a Senior Analytics Engineer in Singapore/Vietnam!
 
The Role
As an experienced Analytics Engineer in Ascenda's Data Team, you will act as a Data Architect and technical leader, designing, building, and governing our data medallion architecture to deliver reliable, scalable, and high-trust data products — serving both internal and external stakeholders.

You will shape how our loyalty-as-a-service business models its data, metrics, and data products for enterprise clients and partners.

You'll collaborate closely with product managers, commercial account managers, engineers, and data scientists in a modern, fast-moving environment that values autonomy, clarity, and measurable outcomes.
 
Your Impact
Architect the data foundations that enable both internal teams and global partners to turn raw data into trusted insights powering real business decisions.
Champion dimensional modelling principles, ensuring our medallion architecture scales efficiently with increasing data volume, variety, and complexity.
Design, standardise, and evolve our data modelling (dbt) frameworks to transform raw data into self-explanatory, performant, and reusable datasets for analytics and reporting.
Empower analysts, engineers, and business teams with high-quality semantic layers and data models that serve as a single source of truth across Ascenda and our partner ecosystem.
Drive excellence in our modern data stack — AWS Redshift, dbt, Airflow, Meltano, Python (Pandas, Jupyter) — ensuring performance, scalability, and maintainability.
Mentor analytics engineers, define best practices, and embed data quality, governance, and observability throughout our data stack.
Work closely with data engineers, scientists, and AI engineers to power machine learning workflows and predictive models.
 
Who You Are
5–10 years of experience in analytics engineering, data engineering, or data modelling within large-scale data environments (fintech, banking, e-commerce, telco, etc.).
Deep hands-on expertise with dbt, applying best practices in modular design, macros, reusable patterns, and unit testing.
Proven experience designing and evolving enterprise-scale data models (Kimball, Inmon, or Data Vault).
Strong SQL and Python skills, with a performance-driven mindset and production-ready practices (CI/CD, version control, monitoring).
Strong analytical and problem-solving skills, with the ability to draw insights and make data-driven recommendations.
Excellent business acumen — able to translate product and business stakeholder needs into scalable data models and semantic layers.
Outstanding communicator who can articulate architectural trade-offs and influence both technical and non-technical audiences.
Collaborative, proactive, and self-motivated, with a commitment to continuous learning an…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 6 | 7 | 8 | 5 | 0% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "designing, building, and governing our data medallion architecture to deliver reliable, scalable, and high-trust data products"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes governance, reliability, trust, and architectural standardization as core expectations, with no velocity or speed signals present.

**Run 2:** `rigour` ✓
> Quote: "embed data quality, governance, and observability throughout our data stack"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section consistently emphasizes data quality, governance, best practices, and reliability rather than speed or delivery pace, with no velocity-oriented language in core duties.

**Run 3:** `rigour` ✓
> Quote: "data quality, governance, and observability throughout our data stack"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, quality, and observability as core practices the candidate will embed, not speed or iteration.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "We are behind the world-class rewards propositions of major banks and fintechs around the globe"
> Verified: ✓ found in JD
> Reasoning: The role serves fintech and banking clients whose customer-facing rewards programs and financial operations depend on accurate data, placing errors in the high-impact financial domain.

**Run 2:** `high` ✓
> Quote: "delivering reliable, scalable, and high-trust data products — serving both internal and external stakeholders"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role serves major financial institutions and fintechs (American Express, HSBC, Brex, etc.) where data errors directly impact financial decision-making in a regulated industry.

**Run 3:** `high` ✓
> Quote: "high-trust data products — serving both internal and external stakeholders"
> Verified: ✓ found in JD
> Reasoning: The explicit 'high-trust' framing combined with fintech sector (banks, fintechs) and external enterprise clients indicates financial/operational data affecting critical decisions.

### collaboration_width
**Manual:** `6`

**Run 1:** `7` ✗
> Quote: "product managers, commercial account managers, engineers, and data scientists; analysts; data engineers; AI engineers"
> Verified: ✓ found in JD
> Reasoning: Seven distinct named partner functions are explicitly mentioned across the collaboration and impact sections of the role.

**Run 2:** `8` ✗
> Quote: "product managers; commercial account managers; engineers; data scientists; data engineers; AI engineers; analytics engineers; global partners"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names eight distinct partner functions and external parties across product, commercial, engineering, data science, data engineering, AI/ML, analytics, and external enterprise partners.

**Run 3:** `5` ✗
> Quote: "product managers, commercial account managers, engineers, and data scientists; AI engineers"
> Verified: ✓ found in JD
> Reasoning: Five distinct named functions identified: product, commercial, engineering, data science, and AI/ML teams.

⚠ **Disagreement**: manual=`6` vs LLM majority=`7`

⚠ **LLM inconsistency**: runs gave ['7', '8', '5']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design, standardise, and evolve our data modelling (dbt) frameworks to transform raw data into self-explanatory, performant, and reusable datasets for analytics and reporting"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt frameworks) appear in responsibilities with clear application context, and the role involves maturing and scaling existing infrastructure rather than building from zero.

**Run 2:** `mid` ✓
> Quote: "Design, standardise, and evolve our data modelling (dbt) frameworks to transform raw data into self-explanatory, performant, and reusable datasets for analytics and reporting"
> Verified: ✓ found in JD
> Reasoning: The JD names established tools and infrastructure (dbt, Redshift, Airflow, Meltano) being evolved, implies multiple analytics engineer roles to mentor, and describes scaling an existing practice rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Design, standardise, and evolve our data modelling (dbt) frameworks to transform raw data"
> Verified: ✓ found in JD
> Reasoning: The data function has existing tools and frameworks in place, and the role scales them rather than building from zero, indicating mid-stage maturity.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Champion dimensional modelling principles, ensuring our medallion architecture scales efficiently with increasing data volume, variety, and complexity"
> Verified: ✓ found in JD
> Reasoning: The responsibilities combine specific architectural patterns (medallion architecture, dimensional modelling) with scale context (data volume, variety, complexity) that only someone who has implemented these architectures would specify.

**Run 2:** `hiring_manager` ✓
> Quote: "Champion dimensional modelling principles, ensuring our medallion architecture scales efficiently with increasing data volume, variety, and complexity"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use specific architectural methodologies (medallion, Kimball, Inmon, Data Vault), named tools with technical context, and scale-aware language that only someone doing the work would naturally articulate.

**Run 3:** `hiring_manager` ✓
> Quote: "Champion dimensional modelling principles, ensuring our medallion architecture scales efficiently with increasing data volume, variety, and complexity"
> Verified: ✓ found in JD
> Reasoning: The specific reference to dimensional modelling and medallion architecture demonstrates hands-on technical knowledge of the exact work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Architect the data foundations that enable both internal teams and global partners to turn raw data into trusted insights powering real business decisions"
> Verified: ✓ found in JD
> Reasoning: The primary impact is building and governing the data platform and semantic layers that internal analysts, engineers, and data consumers depend on, rather than directly serving commercial, product, or finance functions.

**Run 2:** `internal_data` ✓
> Quote: "Empower analysts, engineers, and business teams with high-quality semantic layers and data models that serve as a single source of truth across Ascenda and our partner ecosystem"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities focus on building data infrastructure and architecture for internal and external data consumers, with primary emphasis on the data function itself rather than commercial, product, or financial stakeholder alignment.

**Run 3:** `internal_data` ✓
> Quote: "Empower analysts, engineers, and business teams with high-quality semantic layers and data models that serve as a single source of truth"
> Verified: ✓ found in JD
> Reasoning: The core impact is building a data platform that internal teams consume as a single source of truth for analytics infrastructure.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "You will shape how our loyalty-as-a-service business models its data, metrics, and data products for enterprise clients and partners"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed around setting direction and defining standards for data modelling across the business, not executing priorities defined by others.

**Run 2:** `strategic` ✓
> Quote: "You will act as a Data Architect and technical leader, designing, building, and governing our data medallion architecture"
> Verified: ✓ found in JD
> Reasoning: The role is framed around owning and shaping data architecture strategy, defining governance standards, and mentoring practitioners rather than executing direction set by other teams.

**Run 3:** `strategic` ✓
> Quote: "you will shape how our loyalty-as-a-service business models its data, metrics, and data products"
> Verified: ✓ found in JD
> Reasoning: The explicit 'shape how' signal, combined with 'architect', 'define standards', and 'design and evolve' demonstrates strategic ownership of the data platform direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "Keeps up-to-date with emerging data and AI technologies, actively exploring innovative applications such as GenAI for analytics and data automation"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to be aware of AI trends and explore applications, but there is no specific expectation to use AI coding tools for personal productivity or build AI-ready data infrastructure.

**Run 2:** `none` ✗
> Quote: "Keeps up-to-date with emerging data and AI technologies, actively exploring innovative applications such as GenAI for analytics and data automation"
> Verified: ✓ found in JD
> Reasoning: The AI expectation is framed as exploratory awareness and continuous learning rather than a demonstrated skill requirement; no expectation to use AI coding tools or architect AI-specific data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions AI only in terms of staying informed about trends and working with AI engineers on their projects, not requiring the candidate to use or enable AI.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "define best practices, and embed data quality, governance, and observability throughout our data stack"
> Verified: ✓ found in JD
> Reasoning: The role owns defining and embedding data quality and observability practices organization-wide, making testing and quality assurance an owned responsibility rather than a tool to be used.

**Run 2:** `responsibility` ✗
> Quote: "embed data quality, governance, and observability throughout our data stack"
> Verified: ✓ found in JD
> Reasoning: Data quality and observability are framed with ownership verbs as core responsibilities to embed across the entire stack, not listed as tools or secondary competencies.

**Run 3:** `responsibility` ✗
> Quote: "Mentor analytics engineers, define best practices, and embed data quality, governance, and observability throughout our data stack"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as something the candidate defines and embeds, showing clear ownership and accountability.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "designing, building, and governing our data medallion architecture to deliver reliable, scalable, and high-trust data products — serving both internal and external stakeholders"
> Verified: ✓ found in JD
> Reasoning: Trust in data products is framed as a primary concern in the role summary, with repeated emphasis on reliability and trustworthiness to prevent bad data reaching internal teams and external partners making business decisions.

**Run 2:** `moderate` ✗
> Quote: "delivering reliable, scalable, and high-trust data products"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes operational reliability and data trust as primary concerns but lacks explicit regulatory or compliance language; the fear is operational failure and stakeholder loss of confidence rather than regulatory exposure.

**Run 3:** `moderate` ✗
> Quote: "reliable, scalable, and high-trust data products — serving both internal and external stakeholders"
> Verified: ✓ found in JD
> Reasoning: The emphasis on 'high-trust' and serving external enterprise clients indicates concern about stakeholder trust and data reliability, but without compliance language typical of high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']
