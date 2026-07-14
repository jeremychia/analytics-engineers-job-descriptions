# Trace: 2026-06-27_lego-group_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — The LEGO Group

**URL:** https://www.lego.com/en-dk/careers/job/analytics-engineer-a7101e7f80b11000c6564bebe9dc0000?cmp=SOC-INUS13OctOtherGlobalrecruitment&source=LinkedIn&locale=en-dk
**Location:** Billund, Denmark; London, United Kingdom
**Date Posted:** 2026-06-27

---

Analytics Engineer

Management Level: Lead Professional

Job ID: 0000035262

Category: Data & Analytics

Locations:
- Billund, Denmark
- London, United Kingdom

Are you interested in being a key contributor in enabling our Markets & Channels organisation to understand its commercial impact deeply and expand data transparency to drive data driven decisions that always put the shopper first?

Bring your understanding of data platforms together with your retail knowledge and natural curiosity into play in this role to be part of a pioneering data and analytics team bringing digital transformation to life in our commercial areas!

Core Responsibilities

- Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products centred around one of our three Commercial Domain pillars.

- Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied.

- Build and maintain semantic layer infrastructure including metric view pipelines, materialisation and optimisation

- Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment

- Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products.

- Enable Markets & Channels specific data understanding and champion data literacy via guidelines, training, drop-in sessions, documentation, and knowledge sharing.

- Partner with the Analytics Innovation & Automation and Data Office Product teams to prototype & deliver cutting edge features across the Data Platform; ensure platforms, tools & processes meet business needs

- Collaborate with Shopper & Partner (D2C & B2B) digital product teams to ensure high-quality data is collected and published to LEGO Data Platform (Databricks) to a standard fit for purpose for downstream delivery of data products.

- Consistently champion best practices in data product development within the team, across Markets & Channels and with the broader analytics community, helping ensure data integrity, -quality, and -scalability of overall data products on the LEGO Data Platform.

Play your part in our team succeeding!

The overall department's key focus is to enable self-service data products for Markets & Channels (Commercial) data consumers and decision makers; helping shape data-driven actions both for operational optimisation purposes and tactical and strategical decision recommendations. Within this mandate, the Analytics Engineering team's responsibility is to build an AI-enabled data foundation the entire company can rely on.

The key stakeholders of this role will be focused on our A&I and broader Commercial organisation but have potential to expand to be multifunctional in areas such as Data Science, Marketing, Finance, Operations, etc.

This role is essential as we strive to build a world-class analytics organization, capable of delivering scalable data products, AI-driven insights and real decision intelligence.

Do you have what it takes?

- Analytics Engineer, Data Solutions, Data Engineering and/or Data Specialist experience.

- Strong SQL and/or Python skills or similar experience in manipulating large structured and unstructured datasets.

- Working knowledge of CI/CD pipelines, Git and data transformation best practices.

- Ability to translate technical constraints / trade-offs to people within non-technical roles.

- Thorough and detail-oriented, strong adaptability and focus to deliver results.

- Self-driven, with the ability to deliver towards la…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 9 | 5 | 5 | 5 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | commercial | commercial | commercial | internal_data | 33% | ✓ |
| autonomy_level | mixed | strategic | strategic | mixed | 33% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (CI/CD best practices, data quality frameworks, assertion checks) present throughout with no velocity-oriented language.

**Run 2:** `rigour` ✓
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes CI/CD practices, data quality frameworks, assertion checks, and governance as core responsibilities with no velocity or speed-oriented language present.

**Run 3:** `rigour` ✓
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, testing, quality frameworks, and CI/CD as core expectations with no counterbalancing velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "helping shape data-driven actions both for operational optimisation purposes and tactical and strategical decision recommendations"
> Verified: ✓ found in JD
> Reasoning: The role supports commercial decision-making without explicit financial reporting, compliance, or regulatory language.

**Run 2:** `moderate` ✓
> Quote: "enable self-service data products for Markets & Channels (Commercial) data consumers and decision makers"
> Verified: ✓ found in JD
> Reasoning: The role serves commercial decision-making in a retail context without explicit financial reporting, regulatory, or compliance risk signals beyond data governance.

**Run 3:** `moderate` ✓
> Quote: "enable self-service data products for Markets & Channels (Commercial) data consumers and decision makers"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business intelligence and commercial decision-making without explicit regulatory or financial reporting consequences.

### collaboration_width
**Manual:** `9`

**Run 1:** `5` ✗
> Quote: "Analytics Interface; Commercial Analytics; Analytics Innovation & Automation; Data Office Product teams; Shopper & Partner (D2C & B2B) digital product teams"
> Verified: ✓ found in JD
> Reasoning: Five distinctly named teams and functions are explicitly mentioned as collaboration partners in the core responsibilities section.

**Run 2:** `5` ✗
> Quote: "Analytics Interface; Commercial Analytics; Analytics Innovation & Automation; Data Office Product; digital product teams"
> Verified: ✓ found in JD
> Reasoning: Five distinct named teams are explicitly mentioned as collaboration partners across the responsibilities section.

**Run 3:** `5` ✗
> Quote: "Analytics Interface; Commercial Analytics; Analytics Innovation & Automation; Data Office Product teams; Shopper & Partner (D2C & B2B) digital product teams"
> Verified: ✓ found in JD
> Reasoning: Five distinct named collaborating teams are explicitly identified across the responsibilities section.

⚠ **Disagreement**: manual=`9` vs LLM majority=`5`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "the Analytics Engineering team's responsibility is to build an AI-enabled data foundation the entire company can rely on"
> Verified: ✓ found in JD
> Reasoning: Infrastructure exists with named tools (Databricks, semantic layers, Unity Catalog) and multiple data teams in place, but the team is actively evolving the foundation.

**Run 2:** `mid` ✗
> Quote: "Partner with the Analytics Innovation & Automation and Data Office Product teams to prototype & deliver cutting edge features across the Data Platform"
> Verified: ✓ found in JD
> Reasoning: The existence of multiple specialized sub-teams with distinct charters and reference to an established Data Platform suggests a scaling operation beyond early stage but not yet fully mature.

**Run 3:** `mid` ✗
> Quote: "Build and maintain semantic layer infrastructure including metric view pipelines, materialisation and optimisation"
> Verified: ✓ found in JD
> Reasoning: Named tools with specific technical application in responsibilities combined with multiple established data teams indicates growth and extension of an existing data function.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Build and maintain semantic layer infrastructure including metric view pipelines, materialisation and optimisation"
> Verified: ✓ found in JD
> Reasoning: Technical specificity around semantic layers, metric views, and Unity Catalog shows hiring manager knowledge, but generic collaboration verbs elsewhere indicate recruiter contributions.

**Run 2:** `hiring_manager` ✓
> Quote: "Build and maintain semantic layer infrastructure including metric view pipelines, materialisation and optimisation"
> Verified: ✓ found in JD
> Reasoning: The specific technical terminology (semantic layer, metric view pipelines, materialisation) and named tools with precise application context indicate hands-on experience from the JD author.

**Run 3:** `mixed` ✗
> Quote: "Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment; Build and maintain semantic layer infrastructure including metric view pipelines, materialisation and optimisation; Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products."
> Verified: ✓ found in JD
> Reasoning: Some responsibilities show technical specificity (Unity Catalog governance, metric views, assertion checks) suggesting hiring manager input, while others use generic collaboration language typical of recruiter writing.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "helping shape data-driven actions both for operational optimisation purposes and tactical and strategical decision recommendations"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves Markets & Channels (Commercial) decision-makers supporting business and commercial strategy.

**Run 2:** `commercial` ✓
> Quote: "enable self-service data products for Markets & Channels (Commercial) data consumers and decision makers"
> Verified: ✓ found in JD
> Reasoning: The role's primary purpose is explicitly framed as serving the Markets & Channels (Commercial) organization's decision-making needs.

**Run 3:** `internal_data` ✗
> Quote: "Within this mandate, the Analytics Engineering team's responsibility is to build an AI-enabled data foundation the entire company can rely on."
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally building and maintaining data infrastructure and platforms for internal consumption by analytics and business teams, not running analytics or serving product decisions directly.

⚠ **LLM inconsistency**: runs gave ['commercial', 'commercial', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products"
> Verified: ✓ found in JD
> Reasoning: The role uses strategic ownership verbs ('Build', 'Drive', 'champion') indicating it sets direction for data infrastructure and governance rather than executing work defined by others.

**Run 2:** `strategic` ✗
> Quote: "Build data pipeline engineering, orchestration, and monitoring to deliver high-quality data products centred around one of our three Commercial Domain pillars."
> Verified: ✓ found in JD
> Reasoning: The role is expected to architect and build data pipelines, drive governance, and champion standards, indicating strategic ownership of the analytics engineering domain.

**Run 3:** `mixed` ✓
> Quote: "Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment; Collaborate closely with the Analytics Interface, Commercial Analytics and business teams to turn business requirements into productionised AI-enabling data products."
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of technical domains like governance and semantic layer infrastructure while executing deliverables against business-set requirements.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['strategic', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "build an AI-enabled data foundation the entire company can rely on"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure specifically designed to enable AI systems and applications downstream.

**Run 2:** `ai_enabler` ✗
> Quote: "build an AI-enabled data foundation the entire company can rely on"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build and architect data infrastructure that enables AI systems and AI-enabling data products.

**Run 3:** `ai_enabler` ✗
> Quote: "Within this mandate, the Analytics Engineering team's responsibility is to build an AI-enabled data foundation the entire company can rely on."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure and foundations that enable AI/ML pipelines and applications rather than to use AI tools for their own productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks"
> Verified: ✓ found in JD
> Reasoning: Ownership verbs 'Ensure' and 'include' show the candidate is accountable for defining and maintaining data quality and testing practices.

**Run 2:** `responsibility` ✗
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: Data quality practices, CI/CD standards, and assertion checks are framed as core responsibilities the candidate owns and ensures across all data products.

**Run 3:** `responsibility` ✗
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as core responsibilities with ownership verbs rather than as tools listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure Data Products follow CI/CD best practice, adhere to data quality frameworks; include assertion checks and have performance & cost optimisation applied."
> Verified: ✓ found in JD
> Reasoning: Operational reliability through best practices and quality frameworks is expected but secondary to the overall mission of building and enabling analytics products.

**Run 2:** `moderate` ✗
> Quote: "Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment"
> Verified: ✓ found in JD
> Reasoning: Data governance and compliance are concerns in an operational sense (access control, metadata), but the framing emphasizes operational reliability rather than regulatory or financial risk.

**Run 3:** `moderate` ✗
> Quote: "Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled compliant environment"
> Verified: ✓ found in JD
> Reasoning: Governance and compliance are mentioned as responsibilities but the overall framing emphasizes building and delivering data products rather than preventing bad outcomes.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
