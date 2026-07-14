# Trace: 2026-07-01_booking-com_data-analytics-engineer-ii

## JD text (fed to classifier, Layer B stripped)

```
# Data Analytics Engineer II — Booking.com

**URL:** https://jobs.booking.com/booking/jobs/29172?lang=en-us&iis=Job+Board&iisn=Linkedin
**Location:** Amsterdam, Netherlands
**Date Posted:** 2026-07-01

---

Data Analytics Engineer II at Booking.com

Location: Amsterdam, Netherlands
Department: Data Engineering
Job ID: 29172

Role Description
At Booking.com, data drives our decisions. Technology is at our core and innovation is everywhere. But our company is more than just datasets, lines of code or A/B tests. We're the thrill of the first night in a new place.

B. Data Teams
The Data team's responsibilities include data platforms, warehousing, enrichment and machine learning functionality, enabling teams across the organisation to understand and manage our business performance and improve the experience of our customers. You will be responsible for delivering products that advance data excellence and innovation within your product team, and across the business, helping us shape Booking.com's data journey.

Platform Team
The Platform team is responsible for creating, developing and maintaining a robust data platform and integrations in/out of it. In conjunction with our colleagues across Booking.com, the team is embarking on an ambitious modernisation programme focusing not just on infrastructure transition to the cloud but a complete overhaul of data ingestion, quality, security and governance. Providing a platform as a service is our goal.

Data Enablement Teams
Using the ecosystem our platform team have created, our Data Enablement teams work closely with teams across the business to ensure that data is ingested, transformed and enriched into secure, high quality, well governed consumption layers. Our customers are anyone from Finance to Marketing and everyone in between.

Flights Data Enablement Team
This Data Engineering team is focused on Flights data at Booking. We are building new products for creating, maintaining, and presenting flights data using the Booking Data Exchange (BDX) platform. We enable our analysts and product teams to make data-driven decisions about product improvements, streamline their processes, and build a deeper understanding of their systems.

You Will:
- Iteratively develop next-generation scalable, reliable, flexible, high-performance data pipeline capabilities and data platforms.
- Use standardised tooling and procedures to work with business users to model and implement data pipelines which are performant, scalable, reliable, secure, well governed with required observability.
- Engage with other teams as needed to achieve business objectives.
- End-to-end ownership of data quality in our core datasets and data pipelines.
- Engage with other teams to help them identify and resolve data quality issues.
- Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices.
- Adhere to the defined principles for architecture, quality and non-functional requirements.
- Proactively help colleagues grow professionally, taking a significant role in on-boarding and mentoring new team members.
- Continuously improve services you own, making them more performant, and utilising resources in the most optimised way.
- Ensure that products/services are always kept up to date with the latest technology standards and company guidelines.
- Ensuring that service level agreements are met by implementing tests and processes.
- Perform profiling to find bottlenecks and optimise performance, and ensure that performance metrics are set up and monitored for product health.
- Be able to connect business and product goals to complex technical tasks.
- Solve issues by prioritising on customer impact and perform root cause analysis to find ways to prevent recurrence.
- Contribute to Booking.com's growth through interviewing, on-boarding and other recruitment efforts.
- Be working in an agile environment and expect to contri…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | high | moderate | 33% | ✗ |
| collaboration_width | 4 | 4 | 4 | 4 | 100% | ✓ |
| data_team_maturity | mature | mature | mid | mature | 33% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | mixed | internal_data | 33% | ✓ |
| autonomy_level | mixed | mixed | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, governance, reliability, regulatory compliance, and testing across multiple responsibilities, with no velocity or fast-delivery framing.

**Run 2:** `rigour` ✓
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines."
> Verified: ✓ found in JD
> Reasoning: The responsibilities consistently emphasize data quality, governance, reliability, compliance, and observability with no velocity signals like 'fast-paced' or 'move fast'.

**Run 3:** `rigour` ✓
> Quote: "Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices."
> Verified: ✓ found in JD
> Reasoning: Data quality, governance, regulatory compliance, and testing are emphasized throughout the responsibilities section with no velocity, speed, or startup-pace language present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices."
> Verified: ✓ found in JD
> Reasoning: While regulatory requirements are mentioned, the role is framed around platform reliability and business decision-making rather than financial reporting or compliance, placing it in moderate risk.

**Run 2:** `high` ✓
> Quote: "Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices."
> Verified: ✓ found in JD
> Reasoning: Explicit mention of regulatory requirements combined with Booking.com's status as a regulated payment and travel platform indicates high consequence for data integrity failures.

**Run 3:** `moderate` ✗
> Quote: "effectively following regulatory requirements, company standards, and best practices"
> Verified: ✓ found in JD
> Reasoning: While regulatory language appears, Booking.com is a commercial travel platform where data errors cause operational and revenue impact rather than direct financial reporting or audit exposure.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']

### collaboration_width
**Manual:** `4`

**Run 1:** `4` ✓
> Quote: "Finance to Marketing; analysts and product teams"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly identified as collaboration partners or internal customers: Finance, Marketing, analysts, and product teams.

**Run 2:** `4` ✓
> Quote: "Finance; Marketing; analysts; product teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names Finance, Marketing, analysts, and product teams as distinct stakeholder groups served by this role.

**Run 3:** `4` ✓
> Quote: "Our customers are anyone from Finance to Marketing and everyone in between; We enable our analysts and product teams to make data-driven decisions"
> Verified: ✓ found in JD
> Reasoning: Finance, Marketing, Product teams, and Analysts are explicitly named as distinct collaborating functions this role serves.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mature` ✓
> Quote: "The Platform team is responsible for creating, developing and maintaining a robust data platform and integrations in/out of it."
> Verified: ✓ found in JD
> Reasoning: Multiple specialized sub-teams (Platform, Data Enablement teams, Flights-specific team) with established domain focus and infrastructure already operational indicates a mature data organization.

**Run 2:** `mid` ✗
> Quote: "ambitious modernisation programme focusing not just on infrastructure transition to the cloud but a complete overhaul of data ingestion, quality, security and governance"
> Verified: ✓ found in JD
> Reasoning: The data function has multiple specialized teams and established infrastructure but is undergoing significant modernization rather than operating in a stable mature state.

**Run 3:** `mature` ✓
> Quote: "The Platform team is responsible for creating, developing and maintaining a robust data platform and integrations in/out of it. In conjunction with our colleagues across Booking.com, the team is embarking on an ambitious modernisation programme"
> Verified: ✓ found in JD
> Reasoning: Multiple specialized data sub-teams with distinct charters (Platform, Data Enablement, Flights Enablement), established governance frameworks, and career progression (Engineer II role) indicate organizational scale and maturity.

⚠ **LLM inconsistency**: runs gave ['mature', 'mid', 'mature']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Modelling data following best practices and Data Warehousing methodologies such as Data Vault and (Kimball) Dimensional modelling."
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical methodology knowledge (Data Vault, Kimball modeling, lakehouse architecture) alongside generic corporate language like "excellent communication skills" and "be working in an agile environment."

**Run 2:** `mixed` ✓
> Quote: "Perform profiling to find bottlenecks and optimise performance, and ensure that performance metrics are set up and monitored for product health."
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical details (performance profiling, metrics setup, SLO implementation) alongside generic collaboration language.

**Run 3:** `mixed` ✓
> Quote: "Driving the implementation of reliable and well trusted metrics defined by the business, connecting disparate datasets into unified data products in the Lakehouse and/or Data Warehouse"
> Verified: ✓ found in JD
> Reasoning: Specific technical methodologies (Lakehouse, unified data products, metrics frameworks) suggest hiring manager authorship, but generic verbs ('engage', 'collaborate', 'help colleagues grow') indicate recruiter contributions.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Producing curated, reusable analytical data products to enable self-serve analytics for many internal customers across departments."
> Verified: ✓ found in JD
> Reasoning: The role is framed around building data infrastructure and products for internal consumption across the organization, not specific external or GTM functions.

**Run 2:** `mixed` ✗
> Quote: "Our customers are anyone from Finance to Marketing and everyone in between"
> Verified: ✓ found in JD
> Reasoning: The role serves multiple equally-weighted stakeholder groups (Finance, Product, Analysts, Marketing) with no single dominant audience in the responsibilities.

**Run 3:** `internal_data` ✓
> Quote: "Producing curated, reusable analytical data products to enable self-serve analytics for many internal customers across departments"
> Verified: ✓ found in JD
> Reasoning: The role's primary purpose is building and maintaining data infrastructure and platforms for internal organizational consumption, not serving Finance, Product, or Commercial teams directly.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines."
> Verified: ✓ found in JD
> Reasoning: The role owns technical decisions and quality standards for its domain, but operates within defined platform governance and architectural principles set by others.

**Run 2:** `mixed` ✓
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines; Adhere to the defined principles for architecture, quality and non-functional requirements."
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of specific technical domains but operates within standardized procedures and defined architecture principles set by others.

**Run 3:** `execution` ✗
> Quote: "Adhere to the defined principles for architecture, quality and non-functional requirements"
> Verified: ✓ found in JD
> Reasoning: While the role has ownership language, it operates within pre-defined frameworks (standardised tooling, defined principles, SLAs) set by others rather than setting strategic direction.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data foundations, GenAI applications, or any AI-specific candidate expectations.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD describes a data infrastructure role with no mention of AI coding tools, AI-assisted development, or AI/ML enablement expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data infrastructure, or AI skill expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensuring that service level agreements are met by implementing tests and processes."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to actively implement tests and testing processes as part of their responsibility, not simply listed as a required tool.

**Run 2:** `responsibility` ✗
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as owned responsibilities with action verbs, not as tools listed in a skill or requirements section.

**Run 3:** `responsibility` ✗
> Quote: "End-to-end ownership of data quality in our core datasets and data pipelines"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as owned end-to-end responsibilities of the candidate, not merely listed as required tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices."
> Verified: ✓ found in JD
> Reasoning: Regulatory compliance and governance are mentioned but are secondary to the primary mission of delivering data products; operational reliability is a concern without dominating the role framing.

**Run 2:** `high` ✗
> Quote: "Be responsible for maintaining data quality, security, integrity and governance by effectively following regulatory requirements, company standards, and best practices."
> Verified: ✓ found in JD
> Reasoning: Regulatory compliance, data trust, and preventing failures are woven throughout the responsibilities, indicating strong loss-aversion framing focused on preventing bad outcomes and regulatory exposure.

**Run 3:** `moderate` ✗
> Quote: "Ensuring that service level agreements are met by implementing tests and processes"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through SLAs and metrics monitoring reflects moderate risk concern, but the JD emphasizes delivery and capability building rather than compliance or stakeholder-trust framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']
