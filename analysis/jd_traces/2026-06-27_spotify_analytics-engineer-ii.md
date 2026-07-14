# Trace: 2026-06-27_spotify_analytics-engineer-ii

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer II — Spotify

**URL:** https://jobs.lever.co/spotify/08d82da1-0c72-44d1-91eb-7fa22dee3d39
**Location:** Stockholm / London
**Date Posted:** 2026-06-27

---

Analytics Engineer II
Stockholm / LondonData and Analytics – Platform /Permanent /Hybrid
The Platform team creates the technology that enables Spotify to learn quickly and scale easily, enabling rapid growth in our users and our business around the globe. Spanning many disciplines, we work to make the business work; creating the infrastructure, tooling, frameworks, and capabilities needed to welcome a billion customers.

We're looking for an Analytics Engineer II to join Spotify's Platform Central Data (PCD) squad, a cross-functional Data Engineering and Analytics Engineering team within the Platform Mission. You'll help build and maintain trusted analytical models, metrics, and data products that power developer productivity, platform health, and leadership decision-making. Working closely with Data Engineers, Product, Engineering, and Platform partners, you'll translate platform signals into reliable, well-modeled data assets that help Spotify ship faster and safer.

What You'll Do
Build and maintain analytical data models using dbt (or similar SQL-based transformation frameworks) in BigQuery for a broad set of stakeholders
Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD
Help define and evolve key metrics for platform health, developer productivity, and ML/AI platform adoption
Partner with Data Engineers on upstream pipelines and collaborate with Product, Engineering, and Data Science to scope and deliver insights
Improve data quality, performance, and cost efficiency across pipelines and models, including troubleshooting and backfills
Contribute to dashboards and self-serve data products that enable better decision-making across teams
Follow and contribute to data quality, testing, and documentation practices across the analytics layer
Participate in a fair support rotation for key datasets, pipelines, and analytical products
Who You Are
You have 2+ years of experience in analytics engineering, data engineering, or a related field
You have strong SQL skills and experience with data modelling
You are experienced with dbt (or similar SQL-based transformation frameworks) and a cloud data warehouse such as BigQuery, Snowflake, Redshift, or Databricks SQL
You are familiar with workflow orchestration tools such as Airflow, Dagster, Prefect, or Flyte
You care about data quality, reliability, and testability
You are comfortable working with BI/visualisation tools such as Looker or Tableau
You communicate clearly with both technical and non-technical partners
You are able to prioritize and deliver in a fast-moving environment
You have experience with platform or developer productivity data, experimentation, or ML/AI metrics
Where You'll Be
This role is based in London or Stockholm.

We offer you the flexibility to work where you work best! There will be some in person meetings, but still allows for flexibility to work from home.
Spotify is an equal opportunity employer. You are welcome at Spotify for who you are, no matter where you come from, what you look like, or what's playing in your headphones. Our platform is for everyone, and so is our workplace. The more voices we have represented and amplified in our business, the more we will all thrive, contribute, and be forward-thinking! So bring us your personal experience, your perspectives, and your background. It's in our differences that we will find the power to keep revolutionizing the way the world listens.

At Spotify, we are passionate about inclusivity and making sure our entire recruitment process is accessible to everyone. We have ways to request reasonable accommodations during the interview process and help assist in what you need. If you need accommodations at any stage of the application or interview process, please let us know - we're here…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 5 | 4 | 4 | 4 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, CI/CD, data quality, and reliability throughout the responsibilities section, with far more rigour signals than velocity signals despite one mention of shipping faster.

**Run 2:** `rigour` ✓
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, observability, CI/CD, data quality, and reliability across multiple sections, with quality and reliability framing dominating over speed.

**Run 3:** `rigour` ✓
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Rigour signals (reliable, testing, observability, CI/CD, data quality) dominate extensively over minimal velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Help define and evolve key metrics for platform health, developer productivity, and ML/AI platform adoption"
> Verified: ✓ found in JD
> Reasoning: The role serves internal operations and business decisions without explicit financial reporting, compliance, or regulatory framing that would classify as high-risk.

**Run 2:** `moderate` ✓
> Quote: "power developer productivity, platform health, and leadership decision-making"
> Verified: ✓ found in JD
> Reasoning: While the role affects platform operations and leadership decisions, it lacks explicit regulatory or financial reporting responsibilities that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "translate platform signals into reliable, well-modeled data assets that help Spotify ship faster and safer"
> Verified: ✓ found in JD
> Reasoning: Data errors affect operational decisions and platform health but not financial reporting, regulatory compliance, or public-facing revenue systems.

### collaboration_width
**Manual:** `5`

**Run 1:** `4` ✗
> Quote: "Data Engineers; Product; Engineering; Data Science"
> Verified: ✓ found in JD
> Reasoning: Four distinct partner functions are named: Data Engineers from "Working closely with Data Engineers, Product, Engineering, and Platform partners" and Data Science from "collaborate with Product, Engineering, and Data Science".

**Run 2:** `4` ✗
> Quote: "Data Engineers; Product; Engineering; Data Science"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly mentioned as collaboration partners in the responsibilities section.

**Run 3:** `4` ✗
> Quote: "Partner with Data Engineers on upstream pipelines and collaborate with Product, Engineering, and Data Science to scope and deliver insights"
> Verified: ✓ found in JD
> Reasoning: Four distinct named functions explicitly referenced: Data Engineers, Product, Engineering, and Data Science.

⚠ **Disagreement**: manual=`5` vs LLM majority=`4`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Participate in a fair support rotation for key datasets, pipelines, and analytical products"
> Verified: ✓ found in JD
> Reasoning: The JD indicates an established team with operating infrastructure (dbt, BigQuery, support rotations) and existing governance practices, but hiring Analytics Engineer II to grow and scale rather than build from zero.

**Run 2:** `mid` ✗
> Quote: "Participate in a fair support rotation for key datasets, pipelines, and analytical products"
> Verified: ✓ found in JD
> Reasoning: The existence of established products requiring support rotation indicates a mid-stage team with infrastructure already in place, not early-stage greenfield work.

**Run 3:** `mid` ✗
> Quote: "Participate in a fair support rotation for key datasets, pipelines, and analytical products"
> Verified: ✓ found in JD
> Reasoning: Multiple established analytical products under maintenance and a support rotation model imply a team that has produced significant outputs and is operationally scaling.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Build and maintain analytical data models using dbt (or similar SQL-based transformation frameworks) in BigQuery"
> Verified: ✓ found in JD
> Reasoning: The specific pairing of dbt with BigQuery, focus on platform health/developer productivity metrics, and mention of backfills reflect technical hands-on experience in this role.

**Run 2:** `hiring_manager` ✓
> Quote: "Build and maintain analytical data models using dbt (or similar SQL-based transformation frameworks) in BigQuery"
> Verified: ✓ found in JD
> Reasoning: Specific technical detail about named tools and platform (dbt, BigQuery) with precise application context indicates authorship by someone with direct experience in the role.

**Run 3:** `hiring_manager` ✓
> Quote: "Improve data quality, performance, and cost efficiency across pipelines and models, including troubleshooting and backfills"
> Verified: ✓ found in JD
> Reasoning: Concrete operational knowledge (troubleshooting, backfills, support rotation specifics) and understanding of real trade-offs indicate familiarity with the actual day-to-day work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "data products that enable better decision-making across teams"
> Verified: ✓ found in JD
> Reasoning: The role's primary work is building trusted data infrastructure and self-serve analytics that serve the data function and enable other teams, rather than a specific business function like product, finance, or GTM.

**Run 2:** `internal_data` ✓
> Quote: "self-serve data products that enable better decision-making across teams"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data platform and internal teams through self-serve infrastructure and modeling, not external-facing products or revenue-focused functions.

**Run 3:** `internal_data` ✓
> Quote: "Contribute to dashboards and self-serve data products that enable better decision-making across teams"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building self-serve data infrastructure and operational metrics (platform health, developer productivity) for internal technical teams rather than commercial or product functions.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Help build and maintain analytical data models"
> Verified: ⚠ NOT found verbatim
> Reasoning: The repeated use of "help" and "contribute to" frames this as delivery and support work within an established analytics function rather than strategic ownership of direction.

**Run 2:** `mixed` ✗
> Quote: "Help define and evolve key metrics for platform health, developer productivity, and ML/AI platform adoption"
> Verified: ✓ found in JD
> Reasoning: While most responsibilities are execution-focused (building and maintaining existing models), this phrase establishes strategic involvement in metrics definition.

**Run 3:** `execution` ✓
> Quote: "Help define and evolve key metrics for platform health, developer productivity, and ML/AI platform adoption"
> Verified: ✓ found in JD
> Reasoning: The use of 'help define' rather than 'own' or 'define' indicates executing work scoped by others rather than setting strategic direction.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions ML/AI platform adoption as a metric domain but does not expect the candidate to use or build AI tools; no signal phrases about AI coding assistance, GenAI applications, or AI-ready data infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Though ML/AI platform adoption is mentioned as a metrics domain, no AI skill is expected of the candidate; the company's AI work is separate from this analytics engineering role.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The only AI mention refers to observing ML/AI platform adoption metrics; no expectation that the candidate use AI tools or build AI-ready infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as core to the candidate's responsibilities in building and operating pipelines, making it an ownership responsibility rather than a listed tool.

**Run 2:** `responsibility` ✗
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Testing, observability, and CI/CD are core responsibilities the candidate owns within their pipeline work, not just tools listed in a requirements section.

**Run 3:** `responsibility` ✗
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Testing is a core focus area of the primary responsibility (building and operating pipelines), indicating accountability for the practice rather than mere tool listing.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are consistently important throughout, but compliance and regulatory risk language are absent; the fear is pipeline failure or bad analytics reaching decision-makers, not regulatory exposure.

**Run 2:** `moderate` ✗
> Quote: "Build and operate reliable data pipelines using SQL, with a focus on testing, observability, and CI/CD"
> Verified: ✓ found in JD
> Reasoning: Emphasis on reliability, quality, and testing reflects concern for operational stability and preventing pipeline failures, but without regulatory or compliance language.

**Run 3:** `moderate` ✗
> Quote: "well-modeled data assets that help Spotify ship faster and safer"
> Verified: ✓ found in JD
> Reasoning: While reliability and quality are valued concerns (support rotation, focus on testing), they're framed as operational excellence rather than preventing regulatory consequences or stakeholder trust crises.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
