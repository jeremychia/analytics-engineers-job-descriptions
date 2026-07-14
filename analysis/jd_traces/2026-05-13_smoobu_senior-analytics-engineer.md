# Trace: 2026-05-13_smoobu_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Smoobu (HomeToGo Group)

**URL:** https://smoobu.jobs.personio.com/job/2614929?pc=2633709
**Location:** Berlin
**Employment Type:** Full-time, Permanent

---

## Key Responsibilities

- Oversee data ingestion pipelines using Airbyte and Snowplow for event tracking
- Design and maintain complex DAGs, implementing robust alerting mechanisms
- Create modeling principles and domain-level data models (marketing, sales)
- Connect engineering and business teams; manage reverse-ETL via Hightouch

---

## Required Qualifications

- 5+ years in Data Engineering or Analytics Engineering
- Expertise with Airbyte, Snowplow, Airflow, dbt, Snowflake, Hightouch
- Advanced SQL and data modeling skills
- Experience optimizing warehouse costs and queries
- Knowledge of data governance and GDPR practices
- High autonomy and accountability
- Fluent in English, both written and spoken

---

## Preferred / Bonus Skills

- Interest in AI agents within modern data analytics

---

## Benefits

- Remote work up to 50% annually; 63 working days abroad permitted
- 27 vacation days plus tenure bonuses (up to 32 days)
- Deutschland-Ticket subsidy and bike leasing
- Mentorship, German classes, professional development
- Team events, dog-friendly office, mental health support, Wellhub access
- Corporate discounts through FutureBens

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 1 | 1 | 3 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | commercial | internal_data | commercial | 33% | ✗ |
| autonomy_level | strategic | mixed | strategic | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize maintaining robust systems, establishing governance principles, and compliance knowledge (GDPR), with no velocity language like fast-paced or rapid delivery.

**Run 2:** `rigour` ✓
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: The emphasis on 'robust' and alerting mechanisms signals quality and reliability concerns rather than speed or delivery pace.

**Run 3:** `rigour` ✓
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (robust alerting, data governance/GDPR practices, modeling principles) appear throughout with no velocity-oriented language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Knowledge of data governance and GDPR practices"
> Verified: ✓ found in JD
> Reasoning: While GDPR and governance practices signal compliance concern, the JD frames data handling rather than data errors affecting financial reporting or regulatory decision-making at scale.

**Run 2:** `moderate` ✓
> Quote: "Create modeling principles and domain-level data models (marketing, sales)"
> Verified: ✓ found in JD
> Reasoning: Errors in marketing and sales analytics affect business decisions but lack explicit financial reporting or regulatory compliance consequences.

**Run 3:** `moderate` ✓
> Quote: "Knowledge of data governance and GDPR practices"
> Verified: ✓ found in JD
> Reasoning: GDPR and governance are required but the business (vacation rental platform) is not inherently high-risk like fintech or banking; it's a regulated SaaS/marketplace role.

### collaboration_width
**Manual:** `3`

**Run 1:** `1` ✗
> Quote: "Connect engineering and business teams"
> Verified: ✓ found in JD
> Reasoning: Only 'Engineering' qualifies as a specifically named function; 'business teams' is too generic to count per the definition.

**Run 2:** `1` ✗
> Quote: "engineering"
> Verified: ✓ found in JD
> Reasoning: Only 'engineering' is explicitly named as a distinct function; 'business teams' is too generic to count as a named partner.

**Run 3:** `3` ✓
> Quote: "domain-level data models (marketing, sales); Connect engineering and business teams"
> Verified: ✓ found in JD
> Reasoning: Three named partner functions explicitly identified: Marketing, Sales, and Engineering.

⚠ **Disagreement**: manual=`3` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['1', '1', '3']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Oversee data ingestion pipelines using Airbyte and Snowplow for event tracking"
> Verified: ✓ found in JD
> Reasoning: Named tools (Airbyte, Snowplow) appear in responsibilities with specific application context, signaling established infrastructure being maintained and refined.

**Run 2:** `mid` ✓
> Quote: "Design and maintain complex DAGs"
> Verified: ✓ found in JD
> Reasoning: Maintaining existing DAG infrastructure and creating modeling principles for established business domains indicates a mid-stage data function.

**Run 3:** `mid` ✓
> Quote: "Oversee data ingestion pipelines using Airbyte and Snowplow for event tracking; Design and maintain complex DAGs"
> Verified: ✓ found in JD
> Reasoning: Named tools already deployed in responsibilities (Airbyte, Snowplow, Airflow, Snowflake) indicate existing infrastructure, but role is creating principles and frameworks suggesting growth phase rather than green-field or fully mature.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design and maintain complex DAGs, implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: The responsibilities specify exact tools (Airbyte, Snowplow, Hightouch), precise implementation details (alerting mechanisms, reverse-ETL), and domain-specific modeling context (marketing, sales) that only come from hands-on experience.

**Run 2:** `hiring_manager` ✓
> Quote: "Oversee data ingestion pipelines using Airbyte and Snowplow for event tracking; Design and maintain complex DAGs, implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: Each responsibility includes specific tools (Airbyte, Snowplow, Hightouch), use cases (event tracking, alerting), and technical features that demonstrate hands-on domain expertise.

**Run 3:** `mixed` ✗
> Quote: "Oversee data ingestion pipelines using Airbyte and Snowplow for event tracking; Design and maintain complex DAGs, implementing robust alerting mechanisms; Create modeling principles and domain-level data models (marketing, sales)"
> Verified: ✓ found in JD
> Reasoning: Specific tool names with clear technical context (Airbyte for ingestion, domain models for marketing/sales) mix with more generic verbs (oversee, connect, maintain) suggesting both hiring manager and recruiter input.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `commercial` ✗
> Quote: "Create modeling principles and domain-level data models (marketing, sales)"
> Verified: ✓ found in JD
> Reasoning: The role explicitly creates models for marketing and sales—commercial/GTM functions—making revenue-facing teams the primary audience for the analytical deliverables.

**Run 2:** `internal_data` ✓
> Quote: "Create modeling principles and domain-level data models (marketing, sales)"
> Verified: ✓ found in JD
> Reasoning: The role is primarily focused on architecting data infrastructure, establishing modeling standards, and managing the data platform that serves other functions.

**Run 3:** `commercial` ✗
> Quote: "Create modeling principles and domain-level data models (marketing, sales); manage reverse-ETL via Hightouch"
> Verified: ✓ found in JD
> Reasoning: Domain models are explicitly built for commercial functions (marketing, sales) and reverse-ETL is operationalizing data for business team use, not building a self-serve platform.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`commercial`

⚠ **LLM inconsistency**: runs gave ['commercial', 'internal_data', 'commercial']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Create modeling principles and domain-level data models"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic responsibilities (defining modeling principles and designing architecture) with execution responsibilities (managing pipelines, coordinating teams).

**Run 2:** `strategic` ✓
> Quote: "Create modeling principles"
> Verified: ✓ found in JD
> Reasoning: The verb 'create' combined with responsibility for 'modeling principles' signals the role is expected to define how analytics work, not execute on predefined direction.

**Run 3:** `strategic` ✓
> Quote: "Create modeling principles and domain-level data models"
> Verified: ✓ found in JD
> Reasoning: The core responsibility of creating modeling principles is strategic ownership of how analytics is delivered, not executing scoped work set by others.

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "Interest in AI agents within modern data analytics"
> Verified: ✓ found in JD
> Reasoning: The vague phrase 'interest' placed in Preferred/Bonus skills, without specifying how the candidate should use or build AI agent infrastructure, does not constitute an expected AI skill.

**Run 2:** `none` ✗
> Quote: "Interest in AI agents within modern data analytics"
> Verified: ✓ found in JD
> Reasoning: The phrase 'interest in' is too vague per classification rules and appears only in preferred qualifications, not as an expected candidate skill.

**Run 3:** `none` ✗
> Quote: "Interest in AI agents within modern data analytics"
> Verified: ✓ found in JD
> Reasoning: Listed as preferred/bonus skill with vague framing ('interest'); per guidance, vague phrases do not constitute expected candidate skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Design and maintain complex DAGs, implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes infrastructure and alerting but contains no mention of testing, data quality frameworks, data contracts, or observability practices.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality frameworks mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes pipeline architecture and observability alerting but does not mention testing frameworks, data quality ownership, or quality standards.

**Run 3:** `responsibility` ✗
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: Observability through alerting is framed as a responsibility the candidate owns and implements (action verb, responsibilities section), though testing frameworks are not explicitly mentioned.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['absent', 'absent', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: The role signals operational reliability (robust alerting) and compliance knowledge (GDPR, governance), but these are secondary to delivery-focused infrastructure responsibilities rather than pervasive risk framing.

**Run 2:** `moderate` ✗
> Quote: "implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: Emphasis on operational reliability through alerting indicates moderate risk awareness focused on pipeline stability, but this is not the dominant framing of the role.

**Run 3:** `moderate` ✗
> Quote: "Knowledge of data governance and GDPR practices; implementing robust alerting mechanisms"
> Verified: ✓ found in JD
> Reasoning: Compliance (GDPR) and operational reliability (alerting) are present but secondary to delivery focus; risk framing is not dominant throughout the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
