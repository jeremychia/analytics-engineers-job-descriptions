# Trace: 2026-07-03_bravida_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Bravida

**URL:** https://web103.reachmee.com/ext/I003/475/job?site=2&lang=SE&validator=be182e4eb75429bedb0ddaafd3755823&job_id=11267
**Location:** Stockholm, Sweden
**Date Posted:** 2026-07-03

---

Analytics Engineer

Bravida Analytics Engineer role focuses on data modeling and semantic layer development.

Key Responsibilities
• Design and maintain data models using dbt on Snowflake
• Establish modeling standards and data contracts across business domains
• Construct and oversee pipelines in Dagster
• Leverage AI tools to enhance productivity and enable business self-service analytics
• Advance generative BI capabilities for natural language data querying
• Collaborate with operations, procurement, and finance teams on domain-specific modeling
• Improve data quality and reliability enterprise-wide

Requirements
• 3+ years in analytics engineering, data engineering, or analytics roles
• Production-level dbt expertise
• Snowflake or equivalent modern platform proficiency
• Dimensional modeling and semantic layer design knowledge
• Active AI tool integration in workflows

Soft skills
• Stakeholder management and influence capabilities
• Proactive problem identification and solution development
• Decision-making with incomplete information
• English fluency (Nordic languages preferred)

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | mixed | 100% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize standards, data contracts, and quality frameworks as core expectations—classic rigour signals with no counterbalancing velocity language.

**Run 2:** `rigour` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes governance (standards, contracts) and quality/reliability as core expectations rather than speed or delivery pace.

**Run 3:** `rigour` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The focus on establishing standards and data contracts reflects a governance and reliability orientation with no velocity signals present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Collaborate with operations, procurement, and finance teams on domain-specific modeling"
> Verified: ✓ found in JD
> Reasoning: Finance involvement indicates important business data but absent regulatory, compliance, or financial reporting language keeps this at moderate rather than high risk.

**Run 2:** `moderate` ✓
> Quote: "Improve data quality and reliability enterprise-wide"
> Verified: ✓ found in JD
> Reasoning: Data impacts business decision-making across multiple domains without explicit financial reporting, regulatory, or compliance consequences mentioned.

**Run 3:** `moderate` ✓
> Quote: "Improve data quality and reliability enterprise-wide"
> Verified: ✓ found in JD
> Reasoning: While data quality is emphasized, there is no explicit regulatory, compliance, financial reporting, or audit language that would elevate this to high risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "operations; procurement; finance"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct business functions as collaboration partners.

**Run 2:** `3` ✓
> Quote: "operations; procurement; finance"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly identified as collaboration partners in domain-specific modeling work.

**Run 3:** `3` ✓
> Quote: "Collaborate with operations, procurement, and finance teams on domain-specific modeling"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions are explicitly listed as collaboration partners.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Construct and oversee pipelines in Dagster"
> Verified: ✓ found in JD
> Reasoning: Named tools in core responsibilities (dbt, Snowflake, Dagster) signal established infrastructure, while 'establish standards' language suggests active scaling rather than mature deployment.

**Run 2:** `mid` ✓
> Quote: "Design and maintain data models using dbt on Snowflake"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt, Snowflake, Dagster) and language about establishing standards indicate existing infrastructure being scaled and standardized.

**Run 3:** `mid` ✓
> Quote: "Construct and oversee pipelines in Dagster"
> Verified: ✓ found in JD
> Reasoning: Named tools appearing in responsibilities with specific application context indicates an established platform that the role will enhance rather than build from zero.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design and maintain data models using dbt on Snowflake"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical context (named tools, precise applications, data contracts) that only someone doing this work would know.

**Run 2:** `hiring_manager` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: Specific technical methodologies (data contracts) and precise tool context show domain expertise from someone who has done this work.

**Run 3:** `mixed` ✗
> Quote: "Construct and oversee pipelines in Dagster"
> Verified: ✓ found in JD
> Reasoning: Specific technical tool names and application context appear alongside generic collaboration and capability language, indicating mixed authorship.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "enable business self-serve analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary purpose is building the analytics platform and self-serve capabilities that internal data consumers use, not serving specific business functions.

**Run 2:** `internal_data` ✓
> Quote: "Design and maintain data models using dbt on Snowflake"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building data infrastructure and platforms (models, pipelines, standards) that serve platform consumers rather than specific business functions.

**Run 3:** `internal_data` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The focus on modeling standards, data contracts, and self-serve analytics infrastructure indicates the role serves the data function and analytics consumers rather than a specific business stakeholder group.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic definition (establish standards, advance capabilities) with execution on scoped technical work (design models, construct pipelines).

**Run 2:** `mixed` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership (establishing standards, advancing BI capabilities) with execution responsibilities (maintaining models, constructing pipelines).

**Run 3:** `mixed` ✓
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The responsibility to establish standards and advance BI capabilities suggests strategic direction-setting, while other responsibilities emphasize execution and collaboration.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Advance generative BI capabilities for natural language data querying"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure that enables generative AI applications and natural language data access, not merely use AI tools for personal productivity.

**Run 2:** `ai_enabler` ✗
> Quote: "Advance generative BI capabilities for natural language data querying"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build GenAI BI infrastructure and capabilities that enable end users, indicating AI enablement responsibility beyond personal tool usage.

**Run 3:** `ai_enabler` ✗
> Quote: "Advance generative BI capabilities for natural language data querying"
> Verified: ✓ found in JD
> Reasoning: While the role involves using AI tools for productivity, the explicit responsibility to advance generative BI capabilities indicates the primary expectation is building data infrastructure that AI systems consume.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: Data contracts are framed as an owned responsibility with an action verb, indicating the candidate defines and owns this quality practice.

**Run 2:** `responsibility` ✗
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: The active verb 'establish' shows the candidate owns and defines data contracts as a core responsibility, not just using existing testing tools.

**Run 3:** `responsibility` ✗
> Quote: "Establish modeling standards and data contracts across business domains"
> Verified: ✓ found in JD
> Reasoning: Data contracts and quality improvements are framed with ownership verbs, indicating the candidate owns these practices rather than just using existing tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Improve data quality and reliability enterprise-wide"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is mentioned as a concern to improve, but the dominant framing is delivery and capability advancement rather than risk prevention or compliance.

**Run 2:** `moderate` ✗
> Quote: "Improve data quality and reliability enterprise-wide"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a secondary concern in an otherwise delivery/capability-focused JD, with risk centered on data failures rather than compliance or regulatory exposure.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery and capability (data modeling, standards, analytics enablement) with no explicit risk, compliance, or trust language indicating loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
