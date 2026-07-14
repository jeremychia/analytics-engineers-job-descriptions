# Trace: 2026-06-27_vinted_area-lead-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Area Lead Analytics Engineer — Vinted

**URL:** https://careers.vinted.com/jobs/j/4838170101?gh_jid=4838170101&gh_src=2aee7c72teu
**Location:** Berlin, Germany
**Date Posted:** 2026-06-27
**Salary:** €90,100–€121,900 EUR

---

Area Lead Analytics Engineer — Vinted

Company: Vinted
Job Title: Area Lead Analytics Engineer
Location: Berlin, Germany
Business Unit: Vinted Marketplace
Salary Range: €90,100—€121,900 EUR (annual gross)

About Vinted

Vinted is a second-hand marketplace platform founded in 2008 in Lithuania, now operating across 20+ European markets with over 2,000 employees. The organization comprises three business units: Vinted Marketplace (core peer-to-peer fashion platform), Vinted Go (shipping logistics network), and Vinted Pay (payment services).

Position Overview

This role involves providing strategic technical oversight across Revenue, Purchase, and Orders domains within the data analytics function. The position balances hands-on engineering with architectural leadership, focusing on building scalable, reliable data systems.

Key Responsibilities

- Establish long-term technical direction for analytics engineering across specified domains
- Identify cross-domain intersections and ensure consistent data modeling approaches
- Maintain architectural standards, data quality, and operational excellence
- Serve as central technical contact for cross-domain initiatives
- Develop reusable patterns and shared design standards
- Drive improvements in data product quality, documentation, and observability
- Manage technical debt and enable sustainable evolution of data systems
- Translate complex challenges into clear technical direction and trade-offs
- Mentor analytics engineers through technical guidance and design reviews
- Communicate architectural decisions to technical and non-technical audiences

Required Qualifications

- Strong experience in Data Engineering, Analytics Engineering, or similar technical roles
- Production-grade expertise designing and maintaining data models and pipelines at scale
- Deep knowledge of analytics engineering principles including testing, documentation, lineage, data quality, and observability
- Demonstrated ability defining technical standards and architectural guardrails
- Strategic systems-thinking approach to identifying dependencies and patterns
- Ability influencing technical direction across multiple teams
- Comfort navigating ambiguity and translating problems into clear solutions
- Balance between local delivery and long-term architectural integrity
- Strong communication capabilities
- Collaborative mentoring orientation
- Fluent English communication skills

Valued Technical Skills

- Advanced SQL, data modeling, and semantic layer design expertise with dbt or similar tools
- Cloud data platform experience (GCP, AWS, Azure)
- Modern data stack technologies: BigQuery, Snowflake, Redshift, Iceberg
- Query performance optimization and cloud cost governance knowledge
- Orchestration tools experience: Airflow, Dagster
- Event-driven data systems understanding
- Feature Store and ML workload familiarity
- BI tool experience: Power BI, Tableau, Looker

Nice-to-Have Qualifications

- Marketplace or e-commerce domain experience
- Modern data warehouse and data mesh familiarity

Work Benefits

- Share options programme
- 30 days paid annual leave
- Latest MacBook models
- Mental health and Employee Assistant Program support
- Home office support with equipment and €540 furniture budget
- Lunch benefits
- Team-building events
- Monthly Vinted shopping budget
- Discounted gym membership
- Pension plan with 150% Vinted matching
- Supplemental private health insurance
- Life and disability coverage
- Subsidized Deutschlandticket (public transit)
- Up to 90 days annual workation (21 days outside EU permitted)
- Dog-friendly office
- Annual professional development learning budget

Work Model

Hybrid arrangement with 2 recommended office days weekly (flexible, team-determined schedul…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | hiring_manager | recruiter | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Deep knowledge of analytics engineering principles including testing, documentation, lineage, data quality, and observability"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, documentation, data quality, and observability throughout responsibilities and requirements with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Drive improvements in data product quality, documentation, and observability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes maintaining standards, quality, documentation, and observability with no competing velocity signals, indicating a rigour-first orientation.

**Run 3:** `rigour` ✓
> Quote: "Maintain architectural standards, data quality, and operational excellence"
> Verified: ✓ found in JD
> Reasoning: The responsibilities consistently emphasize data quality, testing, documentation, and observability rather than shipping speed or iteration pace.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "This role involves providing strategic technical oversight across Revenue, Purchase, and Orders domains within the data analytics function"
> Verified: ✓ found in JD
> Reasoning: While the domains are business-critical, the JD frames the role operationally rather than emphasizing compliance, regulatory, or financial reporting risk.

**Run 2:** `moderate` ✓
> Quote: "Revenue, Purchase, and Orders domains"
> Verified: ✓ found in JD
> Reasoning: While the role touches revenue operations in a marketplace context, there is no explicit financial reporting, compliance, or regulatory language that would elevate risk to high.

**Run 3:** `moderate` ✓
> Quote: "provide strategic technical oversight across Revenue, Purchase, and Orders domains"
> Verified: ⚠ NOT found verbatim
> Reasoning: While the role touches revenue and orders domains, there is no explicit language about financial reporting, compliance, or regulatory consequences.

### collaboration_width
**Manual:** `4`

**Run 1:** `0` ✗
> Quote: "No named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD references generic cross-functional work and the role's own analytics engineers team but does not explicitly name distinct external partner functions.

**Run 2:** `0` ✗
> Quote: "No explicitly named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD describes technical domains (Revenue, Purchase, Orders) this role oversees but does not name external partner functions or teams to collaborate with.

**Run 3:** `0` ✗
> Quote: "No named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions business domains (Revenue, Purchase, Orders) and mentoring responsibilities but does not name specific external partner teams or functions beyond the analytics function itself.

⚠ **Disagreement**: manual=`4` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Mentor analytics engineers through technical guidance and design reviews"
> Verified: ✓ found in JD
> Reasoning: The role implies an existing team of multiple analytics engineers, established systems with architectural standards, and infrastructure being maintained and evolved.

**Run 2:** `mid` ✗
> Quote: "Production-grade expertise designing and maintaining data models and pipelines at scale"
> Verified: ✓ found in JD
> Reasoning: The role assumes existing infrastructure, named tools (dbt, BigQuery, Snowflake), and multiple analytics engineers to mentor, indicating an established team in growth phase rather than early-stage startup.

**Run 3:** `mid` ✗
> Quote: "Maintain architectural standards, data quality, and operational excellence"
> Verified: ✓ found in JD
> Reasoning: The emphasis on maintaining existing standards and mentoring multiple engineers suggests an established data function with growing complexity, rather than one being built from scratch.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Production-grade expertise designing and maintaining data models and pipelines at scale"
> Verified: ✓ found in JD
> Reasoning: The JD contains technical specificity from someone doing this work—precise tool names, scale considerations, and production context—not recruiter boilerplate.

**Run 2:** `recruiter` ✗
> Quote: "Establish long-term technical direction for analytics engineering across specified domains; Identify cross-domain intersections and ensure consistent data modeling approaches"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic leadership verbs and abstract concepts without technical specificity about what the role actually owns or builds; technical details are relegated to the requirements section.

**Run 3:** `hiring_manager` ✗
> Quote: "Advanced SQL, data modeling, and semantic layer design expertise with dbt or similar tools; Query performance optimization and cloud cost governance knowledge"
> Verified: ✓ found in JD
> Reasoning: The JD contains precise technical requirements about specific methodologies such as semantic layer design and query optimization that demonstrate genuine experience with the work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'recruiter', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Establish long-term technical direction for analytics engineering across specified domains"
> Verified: ✓ found in JD
> Reasoning: The role is framed as leading the data platform and analytics engineering function itself, not serving a specific business stakeholder type like finance or revenue operations.

**Run 2:** `internal_data` ✓
> Quote: "providing strategic technical oversight across Revenue, Purchase, and Orders domains within the data analytics function"
> Verified: ✓ found in JD
> Reasoning: The role's primary audience is the analytics engineering team and data infrastructure consumers, not commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Develop reusable patterns and shared design standards; Mentor analytics engineers through technical guidance and design reviews"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building infrastructure, mentoring other data professionals, and establishing standards for the data function itself, not serving external business domains.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Establish long-term technical direction for analytics engineering across specified domains"
> Verified: ✓ found in JD
> Reasoning: The role is expected to set direction, define architectural standards, manage technical debt, and shape team development across domains.

**Run 2:** `strategic` ✓
> Quote: "Establish long-term technical direction for analytics engineering across specified domains"
> Verified: ✓ found in JD
> Reasoning: The responsibilities are dominated by strategic verbs (establish, develop, drive, manage) that frame the role as setting direction and architectural vision rather than executing predefined work.

**Run 3:** `strategic` ✓
> Quote: "Establish long-term technical direction for analytics engineering across specified domains"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities include defining direction, developing standards, and identifying architectural approaches rather than executing scoped work defined by others.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions Feature Store and ML workload familiarity as infrastructure knowledge but does not expect the candidate to use or build AI tools.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation that the candidate use AI coding tools or build AI-ready data infrastructure; ML workload familiarity is only infrastructure knowledge.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, agentic workflows, or AI infrastructure responsibilities expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Drive improvements in data product quality, documentation, and observability"
> Verified: ✓ found in JD
> Reasoning: Data quality and observability are framed as active ownership responsibilities using the verb 'drive', not just listed as required skills.

**Run 2:** `responsibility` ✗
> Quote: "Maintain architectural standards, data quality, and operational excellence"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed with the ownership verb 'maintain,' indicating the candidate is accountable for quality practices, not just familiar with tools.

**Run 3:** `responsibility` ✗
> Quote: "Maintain architectural standards, data quality, and operational excellence; Drive improvements in data product quality, documentation, and observability"
> Verified: ✓ found in JD
> Reasoning: The role explicitly owns the maintenance and improvement of data quality and observability practices, not just the use of specific tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Manage technical debt and enable sustainable evolution of data systems"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and system sustainability are concerns, but there is no high-risk compliance, regulatory, or stakeholder trust framing present.

**Run 2:** `moderate` ✗
> Quote: "Maintain architectural standards, data quality, and operational excellence"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and excellence through repeated quality and standard language, but frames this as operational reliability rather than compliance or risk avoidance.

**Run 3:** `moderate` ✗
> Quote: "Maintain architectural standards, data quality, and operational excellence"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability and quality as operational concerns focused on system health and sustainable evolution, rather than regulatory risks.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
