# Trace: 2026-07-02_enza-zaden_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Enza Zaden

**URL:** https://enzazaden.wd103.myworkdayjobs.com/Enza-Careers/job/Enkhuizen-The-Netherlands/Analytics-Engineer_JR105077?source=LinkedIn
**Location:** Enkhuizen, Netherlands
**Date Posted:** 2026-07-02
**Salary:** 5,104–7,291 EUR

---

# Senior Analytics Engineer

Company: Enza Zaden
Location: Enkhuizen, The Netherlands
Time type: Full time
Job requisition ID: JR105077
Salary: EUR 5,103.90 - EUR 7,291.28 gross monthly, based on full-time 38-hour workweek

## Role summary
As a Senior Analytics Engineer, you make an impact by strengthening data-driven decision-making across Enza Zaden worldwide. You develop scalable data solutions and translate complex challenges into valuable insights that help teams perform better. You design, build and maintain scalable data models and analytics products that empower self-service BI for teams across the organization. Working closely with product owners, analytics engineers, IT specialists and business stakeholders, you translate complex requirements into reliable solutions on the global data platform.

## Responsibilities
- Designing, developing and maintaining advanced data models and analytics products using tools like Databricks, dbt and Power BI
- Leading complex analytics and reporting initiatives with a mid- to long-term horizon
- Translating business needs into scalable, well-governed data solutions in collaboration with stakeholders and product owners
- Improving data quality, reliability, performance and cost efficiency through lifecycle management
- Ensuring compliance with architecture, security and access standards together with IT, Architecture and Security teams
- Coaching colleagues and contributing to knowledge sharing, user enablement and adoption of data solutions

## Requirements
- Master's degree (WO) with 6-8 years of relevant experience in analytics, reporting or data engineering
- Strong knowledge of data modelling, analytics and data transformation techniques
- Hands-on experience with Azure (DP203), Databricks, SQL, dbt, Power BI, DAX and Git
- Experience with DevOps practices such as version control, testing and CI/CD for data products
- Understanding of scalability, architecture principles and data platform lifecycle management
- Strong communication, stakeholder management and coaching skills

## Enza Zaden as employer
Enza Zaden is an international family-owned company developing innovative vegetable varieties since 1938. Together with more than 3,300 colleagues worldwide, working on vegetable seeds with better flavor, higher yields and strong resistances. Mission: 'Breeding to feed the world.' Every day, more than 480 million people eat vegetables grown from their seeds.

## Benefits
32-38 hours/week position. 8.33% vacation allowance and annual bonus program of 10% of annual salary. 25 vacation days plus purchase option and vitality day. Laptop and mobile phone provided. Accommodation contribution for long commutes. Retirement plan, commuting reimbursement, remote work allowance. Great to Grow development program, training, workshops, e-learning. Social events, free fresh fruit, healthy lunch, bike-to-work program, sports activities, mental well-being support (OpenUp).

Contact: Sandra Hoeneveld, Corporate Recruiter, s.hoeneveld-blekkink@enzazaden.nl. Response within 10 business days. This role cannot be filled on an interim basis.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | low | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 4 | 5 | 4 | 5 | 33% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | mixed | execution | execution | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | tool_listed | tool_listed | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Improving data quality, reliability, performance and cost efficiency through lifecycle management"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, reliability, governance, and compliance as core expectations throughout, with no velocity or iteration language present.

**Run 2:** `rigour` ✓
> Quote: "Improving data quality, reliability, performance and cost efficiency through lifecycle management"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes data quality, reliability, and compliance across multiple responsibilities with no counterbalancing velocity or shipping-focused language.

**Run 3:** `rigour` ✓
> Quote: "Ensuring compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals emphasizing quality, reliability, compliance, and governance throughout the responsibilities section with no velocity language present.

### domain_risk
**Manual:** `low`

**Run 1:** `moderate` ✗
> Quote: "Translating business needs into scalable, well-governed data solutions in collaboration with stakeholders and product owners"
> Verified: ✓ found in JD
> Reasoning: While the JD emphasizes governance and compliance, Enza Zaden is an agriculture/seed development company rather than a high-risk sector like finance or regulated healthcare, making the domain risk moderate rather than high.

**Run 2:** `moderate` ✗
> Quote: "strengthening data-driven decision-making across Enza Zaden worldwide"
> Verified: ✓ found in JD
> Reasoning: The role serves business decision-making for an agricultural seed company with no regulatory, financial reporting, or compliance-driven language indicating high-risk consequences.

**Run 3:** `moderate` ✗
> Quote: "strengthen data-driven decision-making across Enza Zaden worldwide"
> Verified: ⚠ NOT found verbatim
> Reasoning: Operational business intelligence for general decision-making without explicit financial reporting, regulatory, or compliance risk implications.

⚠ **Disagreement**: manual=`low` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `4`

**Run 1:** `5` ✗
> Quote: "product owners; analytics engineers; IT specialists; Architecture; Security"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names five distinct partner teams: product owners, analytics engineers, IT, Architecture, and Security across the role summary and responsibilities sections.

**Run 2:** `4` ✓
> Quote: "product owners; IT specialists; IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Four distinct collaborative functions are named: Product, IT, Architecture, and Security teams.

**Run 3:** `5` ✗
> Quote: "product owners; analytics engineers; IT specialists; Architecture; Security"
> Verified: ✓ found in JD
> Reasoning: Five distinct named teams or functions explicitly identified across role summary and responsibilities sections.

⚠ **Disagreement**: manual=`4` vs LLM majority=`5`

⚠ **LLM inconsistency**: runs gave ['5', '4', '5']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "You design, build and maintain scalable data models and analytics products that empower self-service BI for teams across the organization."
> Verified: ✓ found in JD
> Reasoning: Named tools appear in active use across responsibilities (Databricks, dbt, Power BI), multiple analytics roles are implied, and the focus is on scaling and improving existing solutions rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "You design, build and maintain scalable data models and analytics products that empower self-serve BI for teams across the organization"
> Verified: ⚠ NOT found verbatim
> Reasoning: The presence of named tools in responsibilities (Databricks, dbt, Power BI), multiple analytics engineers, established self-serve BI infrastructure, and coaching roles indicate a productive growing function without evidence of scale (20+ teams) or multiple sub-teams characteristic of mature organizations.

**Run 3:** `mid` ✗
> Quote: "design, build and maintain scalable data models and analytics products that empower self-service BI for teams across the organization"
> Verified: ✓ found in JD
> Reasoning: Existing analytics products and global data platform being maintained and improved indicates established but still-growing mid-stage maturity.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Designing, developing and maintaining advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: The specific application of named tools to data modelling responsibilities demonstrates technical depth from someone who performs this work, not recruiter boilerplate.

**Run 2:** `hiring_manager` ✓
> Quote: "Designing, developing and maintaining advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: The specific tool mentions with precise application context (dbt for data models, Databricks platform, Power BI dashboards) indicate technical familiarity from someone performing this work.

**Run 3:** `mixed` ✗
> Quote: "Designing, developing and maintaining advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: Technical specificity with named tools and application context mixed with generic action verbs like collaborating, translating, and leading.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "You design, build and maintain scalable data models and analytics products that empower self-service BI for teams across the organization."
> Verified: ✓ found in JD
> Reasoning: The primary framing centers on building and maintaining data infrastructure (self-serve BI and data models) for internal consumption rather than serving external customers or specific business functions.

**Run 2:** `internal_data` ✓
> Quote: "empower self-serve BI for teams across the organization"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary framing emphasizes building data infrastructure and analytics products for internal business teams to self-serve, not commercial, product, or finance-specific audiences.

**Run 3:** `internal_data` ✓
> Quote: "empower self-service BI for teams across the organization"
> Verified: ✓ found in JD
> Reasoning: Role focuses on enabling internal teams through analytics infrastructure and self-serve capabilities rather than serving commercial, product, or finance functions.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Leading complex analytics and reporting initiatives with a mid- to long-term horizon"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of analytics solutions (designing and leading initiatives) with execution in service of business-defined needs (translating business requirements into solutions).

**Run 2:** `execution` ✗
> Quote: "Translating business needs into scalable, well-governed data solutions in collaboration with stakeholders and product owners"
> Verified: ✓ found in JD
> Reasoning: The role is framed around translating requirements set by others into solutions rather than defining analytics strategy or direction.

**Run 3:** `execution` ✗
> Quote: "Translating business needs into scalable, well-governed data solutions in collaboration with stakeholders and product owners"
> Verified: ✓ found in JD
> Reasoning: Requirements originate from stakeholders and product owners; role executes against specified business needs rather than setting analytics strategy.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`execution`

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or AI-enabled data infrastructure that the candidate is expected to build or use.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI, machine learning, coding assistants, GenAI, or AI-augmented workflows expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, GenAI applications, or AI skill expectations in responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "Experience with DevOps practices such as version control, testing and CI/CD for data products"
> Verified: ✓ found in JD
> Reasoning: Testing appears in the requirements as a DevOps skill without explicit ownership framing or named testing frameworks/practices in the responsibilities section.

**Run 2:** `tool_listed` ✗
> Quote: "Experience with DevOps practices such as version control, testing and CI/CD for data products"
> Verified: ✓ found in JD
> Reasoning: Testing appears in the requirements as a DevOps competency without ownership verbs in the responsibilities section.

**Run 3:** `tool_listed` ✗
> Quote: "Experience with DevOps practices such as version control, testing and CI/CD for data products"
> Verified: ✓ found in JD
> Reasoning: Testing appears in requirements as an experience requirement rather than framed as an owned responsibility or leadership accountability.

⚠ **Disagreement**: manual=`` vs LLM majority=`tool_listed`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensuring compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Compliance and governance are expected responsibilities, but the overall role framing emphasizes delivery impact and empowerment rather than preventing bad outcomes or regulatory risk.

**Run 2:** `moderate` ✗
> Quote: "Ensuring compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Compliance and reliability are secondary operational concerns framed as one of multiple responsibilities, while the overall tone emphasizes capability and empowerment over risk prevention.

**Run 3:** `moderate` ✗
> Quote: "Ensuring compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Compliance and reliability are mentioned concerns but secondary to primary value proposition of empowerment and insight delivery.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
