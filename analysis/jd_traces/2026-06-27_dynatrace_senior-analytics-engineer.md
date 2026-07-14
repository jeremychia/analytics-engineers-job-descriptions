# Trace: 2026-06-27_dynatrace_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Dynatrace

**URL:** https://www.dynatrace.com/careers/jobs/1394626100/
**Location:** Barcelona, Spain (Hybrid)
**Date Posted:** 2026-06-27

---

Senior Analytics Engineer - Dynatrace

Position Overview
Title: Senior Analytics Engineer
Type: Full-time, Hybrid
Location: Barcelona, Spain
Department: Business Systems
Level: Experienced and Senior
Job ID: 5288

Your Role at Dynatrace

The role involves designing and delivering data products for reporting, self-service analytics, and emerging AI use cases. Responsibilities include collaborating with stakeholders and teams while leveraging AI-assisted development tools like GitHub Copilot or Claude.

Key Responsibilities

Data Product Design & Development
- Design scalable analytical data models and curated datasets, conformed dimensions, and standardized metrics
- Translate business requirements into reliable, reusable data products
- Design data models with AI readiness in mind, including column-level descriptions
- Build structures supporting discoverability across analytics and AI/ML use cases

Standards, Quality & Governance
- Follow established SQL development and dbt modeling standards
- Support semantic layer implementation with consistent metrics
- Implement data quality checks and governance within dbt and Snowflake
- Maintain well-tested, documented models aligned with business definitions

Collaboration & Technical Contribution
- Partner with data engineers, platform teams, and stakeholders
- Collaborate through code reviews and knowledge sharing
- Contribute to cross-functional standardization initiatives
- Identify process improvement opportunities

Required Qualifications

- Bachelor's degree in Computer Science, Information Systems, Engineering, or related field
- 5–8+ years in analytics engineering or data modeling with strong SQL focus
- Strong SQL skills for complex analytical queries and optimization
- Hands-on dbt Cloud experience
- Snowflake experience with query tuning knowledge
- Understanding of dimensional modeling (Kimball) concepts
- Experience with established analytics frameworks and standards
- Ability to work independently and collaborate cross-functionally
- Strong communication skills translating technical concepts
- Data quality validation and governance experience
- Git/GitHub workflow proficiency
- Proven experience with AI-assisted development tools such as GitHub Copilot, Claude, or similar
- Power BI experience or familiarity

Preferred Qualifications
- Master's degree
- Python for automation and scripting
- Semantic layer or metric framework exposure
- AI/ML data readiness and feature engineering knowledge
- Fivetran or similar data ingestion tools
- Enterprise systems experience (Salesforce, NetSuite, SuccessFactors)

Why Join Dynatrace

Dynatrace is a leader in unified observability and security serving over 50% of Fortune 100 companies. The role offers opportunities to work at the forefront of innovation with Dynatrace Intelligence.

Benefits

Core Offerings:
- Paid time off and financial security benefits
- Retirement savings plans and health insurance
- Mental health support via Telus Health EAP
- Four designated wellness days annually
- Hybrid work model with flexible hours
- Discounted employee stock purchase plan
- Professional development and learning days
- Paid volunteer time
- Team events and multicultural environment

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | hiring_manager | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, testing, governance, and standards throughout, with no velocity or delivery speed language present.

**Run 2:** `rigour` ✓
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, governance, reliability, and standards compliance with no velocity or speed framing.

**Run 3:** `rigour` ✓
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, governance, testing, and standards throughout with no velocity or speed-related language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "reporting, self-service analytics, and emerging AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role is framed around business intelligence and analytics without explicit financial reporting or compliance language.

**Run 2:** `moderate` ✓
> Quote: "designing and delivering data products for reporting, self-service analytics, and emerging AI use cases"
> Verified: ✓ found in JD
> Reasoning: While Dynatrace serves Fortune 100 companies, the JD describes generic analytics work without explicit financial reporting, compliance, or regulatory language.

**Run 3:** `moderate` ✓
> Quote: "reporting, self-serve analytics, and emerging AI use cases"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role focuses on internal analytics and self-serve reporting rather than financial reporting or regulatory compliance, placing it in the moderate risk category.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "data engineers; platform teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly listed as collaboration partners in the responsibilities.

**Run 2:** `2` ✓
> Quote: "data engineers; platform teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are identified in the partnership statement; stakeholders is generic and not counted.

**Run 3:** `2` ✓
> Quote: "Partner with data engineers, platform teams, and stakeholders"
> Verified: ✓ found in JD
> Reasoning: Two named partner functions are explicitly identified: data engineers and platform teams; stakeholders is too generic to count.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Follow established SQL development and dbt modeling standards"
> Verified: ✓ found in JD
> Reasoning: References to established standards and existing named tools in responsibilities indicate a data function with existing infrastructure, rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "Follow established SQL development and dbt modeling standards"
> Verified: ✓ found in JD
> Reasoning: Established standards, named tools (dbt, Snowflake), multiple data roles, and semantic layer implementation work indicate a maturing infrastructure.

**Run 3:** `mid` ✗
> Quote: "Follow established SQL development and dbt modeling standards"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities and established standards indicate an existing, growing data function, not early-stage or fully mature.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Design scalable analytical data models and curated datasets, conformed dimensions, and standardized metrics"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical terminology (conformed dimensions, standardized metrics, Kimball methodology) and named tool contexts that indicate hands-on authorship.

**Run 2:** `mixed` ✓
> Quote: "Design data models with AI readiness in mind, including column-level descriptions"
> Verified: ✓ found in JD
> Reasoning: Technical specificity around AI-readiness and dimensional modeling coexists with recruiter boilerplate like collaborate and translate requirements.

**Run 3:** `hiring_manager` ✗
> Quote: "Design data models with AI readiness in mind, including column-level descriptions"
> Verified: ✓ found in JD
> Reasoning: The technical specificity about column-level descriptions for AI readiness and dimensional modeling indicates hands-on analytics engineering experience.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "designing and delivering data products for reporting, self-service analytics, and emerging AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building data infrastructure and products for internal analytics consumers rather than serving commercial, product, or financial stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Build structures supporting discoverability across analytics and AI/ML use cases"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building analytics infrastructure and enabling internal data consumers and AI/ML systems rather than serving commercial, product, or finance teams.

**Run 3:** `internal_data` ✓
> Quote: "Build structures supporting discoverability across analytics and AI/ML use cases"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves internal analytics infrastructure and self-serve analytics consumers rather than commercial, product, or finance teams.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Follow established SQL development and dbt modeling standards"
> Verified: ✓ found in JD
> Reasoning: The role operates within established standards and frameworks set by others, with responsibilities framed around support, implementation, and contribution.

**Run 2:** `execution` ✓
> Quote: "Follow established SQL development and dbt modeling standards"
> Verified: ✓ found in JD
> Reasoning: The role designs within constraints set by others and supports initiatives rather than setting direction or defining analytics strategy.

**Run 3:** `execution` ✓
> Quote: "Translate business requirements into reliable, reusable data products"
> Verified: ✓ found in JD
> Reasoning: The role executes on given business requirements within established standards rather than setting strategic direction.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Design data models with AI readiness in mind, including column-level descriptions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure supporting AI/ML use cases; while ai_user signals exist (Copilot/Claude in requirements), the tie-breaker favors ai_enabler.

**Run 2:** `ai_enabler` ✗
> Quote: "Design data models with AI readiness in mind, including column-level descriptions"
> Verified: ✓ found in JD
> Reasoning: The candidate must build data infrastructure that AI/ML systems consume, with proven experience using AI-assisted coding tools; both signals present triggers ai_enabler.

**Run 3:** `ai_enabler` ✗
> Quote: "Build structures supporting discoverability across analytics and AI/ML use cases"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure and models designed for AI/ML system consumption, making them an enabler of AI systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are framed as owned responsibilities using the action verb 'Implement' in the responsibilities section.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are owned responsibilities using the action verb implement, not merely listed as required tool experience.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: Data quality implementation is framed as an active responsibility with ownership verbs, not merely a skill requirement.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are framed as operational responsibilities suggesting institutional concern for reliability, but not as the primary role driver or compliance/trust imperative.

**Run 2:** `moderate` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are emphasized as standards maintenance and practice rather than regulatory risk or catastrophic failure prevention.

**Run 3:** `moderate` ✗
> Quote: "Implement data quality checks and governance within dbt and Snowflake"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational quality standards and governance practices, but frames these as process improvements rather than risk or compliance mitigation.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
