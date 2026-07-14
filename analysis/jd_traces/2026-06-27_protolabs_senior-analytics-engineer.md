# Trace: 2026-06-27_protolabs_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Protolabs

**URL:** https://jobs.lever.co/protolabs/b9b433de-3134-490d-bc7c-b74a9da34976
**Location:** Amsterdam
**Date Posted:** 2026-06-27

---

Protolabs - Analytics Engineer

Analytics Engineer
Amsterdam
Technology – Software Engineering / Full-time / Hybrid

Be yourself at Protolabs

Studies have shown that women and people of color are less likely to apply to jobs unless they meet every single qualification. We are an equal opportunity employer, and we are committed to building a diverse team that feels they are valued in the workplace. So do you feel you do not meet every single requirement but still intrigued? We encourage you to still apply! You can help make our company even better. We do not discriminate based on race, color, national origin, sexual orientation, gender, age, mental or physical ability, or any way you represent yourself. We strongly believe diversity makes for more successful teams.

Why Protolabs?

We are the leaders in digital manufacturing. We hire doers, makers, and creative thinkers who tackle our roles with an entrepreneurial spirit. Our culture is centered around meaningful work that brings new and innovative products to market at unprecedented speeds. We are a diverse team that comes from all walks of life and take pride in our team who is smart, genuine, humble, and passionate about what we do. It's our people who fuel our creativity and make our culture feel like home.

We are looking for a Senior Analytics Engineer to join our team! This is a hybrid role, and we are accepting applications from candidates based in the Netherlands.

The Senior Analytics Engineer plays a critical role in shaping and scaling the data foundations that support analytics and decision‑making across the organization. This role transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use to drive insights. Sitting at the intersection of data engineering and business analytics, the Senior Analytics Engineer brings deep technical expertise—particularly in dbt and large‑scale transformation design—to guide the evolution of the analytics platform. Working closely with the Principal Analytics Engineer, this role accelerates the migration from legacy DOMO pipelines to a modern data stack, establishes robust modeling and testing standards, and helps elevate technical best practices across the Analytics Engineering team.

What you'll do

Design, build, and maintain complex, scalable dbt models and projects in large, multi domain environments
Act as the team's dbt expert, including refactoring complex transformations, resolving performance issues, and exploring, evaluating, and introducing advanced dbt features where they add clear value
Accelerate the migration from legacy DOMO pipelines to the modern data platform in close collaboration with the Principal Analytics Engineer
Help shape and refine shared approaches to data modeling, documentation, dbt project structure, and overall transformation practices as the platform scales
Support the team in using AI powered IDEs, coding assistants, agents, and automation tools to improve development workflows and productivity
Guide and support the growth of other Analytics Engineers, helping them strengthen dbt, SQL, modeling, and problem solving skills
Collaborate with business stakeholders to understand workflows and metrics, translating real world logic into clear, reliable data models
Provide Analytics Engineering coverage during EU business hours, partnering closely with EU based stakeholders.

What you'll bring

Education and Experience:
Bachelor's Degree in Computer Science, Software Engineering, Mathematics, Data Engineering, or a related field
Minimum of 5 years of experience in analytics engineering, data modeling, or data transformation
Extensive hands on experience with dbt (or similar transformation tools such as SQLMesh), ideally in large, complex, multi project environmen…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 2 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | hiring_manager | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | execution | mixed | mixed | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | tool_listed | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "establishes robust modeling and testing standards, and helps elevate technical best practices across the Analytics Engineering team"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability, testing standards, and best practices as core expectations with no velocity-oriented language present.

**Run 2:** `rigour` ✓
> Quote: "establish robust modeling and testing standards"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities section emphasizes quality, testing, reliability, and standards throughout, with rigour signals substantially outnumbering velocity signals.

**Run 3:** `rigour` ✓
> Quote: "establishes robust modeling and testing standards"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes robust testing, data quality practices, modeling standards, and technical best practices as core responsibilities rather than delivery speed or rapid iteration.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "reliable, well‑structured data products that analysts and business partners can confidently use to drive insights"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect business decisions but there are no signals of financial reporting, compliance, or regulatory consequences.

**Run 2:** `moderate` ✓
> Quote: "This role transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use to drive insights."
> Verified: ✓ found in JD
> Reasoning: Data errors affect business decisions for a manufacturing company without regulatory or compliance consequences; this is operational/BI work, not financial reporting or compliance-critical.

**Run 3:** `moderate` ✓
> Quote: "support analytics and decision‑making across the organization"
> Verified: ✓ found in JD
> Reasoning: The role supports internal business decision-making through analytics infrastructure without explicit regulatory, compliance, or financial reporting consequences.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "Collaborate with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Collaborators are described generically as 'business stakeholders' with no explicitly named functions like Finance, Product, or Operations identified.

**Run 2:** `0` ✗
> Quote: "No distinct partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: Collaboration is described with generic 'business stakeholders' and work involves the role holder's own Analytics Engineering team; no explicitly named partner functions are listed.

**Run 3:** `2` ✗
> Quote: "Principal Analytics Engineer; analysts"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct collaboration partners: the Principal Analytics Engineer (explicit collaboration) and analysts as a named role cohort consuming data products.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '0', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Help shape and refine shared approaches to data modeling, documentation, dbt project structure, and overall transformation practices as the platform scales"
> Verified: ✓ found in JD
> Reasoning: An existing data function is scaling and refining practices; multiple analytics roles exist and are being developed, indicating a maturing but not yet fully established platform.

**Run 2:** `mid` ✓
> Quote: "Working closely with the Principal Analytics Engineer, this role accelerates the migration from legacy DOMO pipelines to a modern data stack, establishes robust modeling and testing standards, and helps elevate technical best practices across the Analytics Engineering team."
> Verified: ✓ found in JD
> Reasoning: Multiple Analytics Engineer roles exist (Principal, Senior, others to guide), legacy infrastructure is being modernized rather than built from zero, and the team is formalizing standards—indicative of a growing mid-stage team.

**Run 3:** `mid` ✓
> Quote: "Accelerate the migration from legacy DOMO pipelines to the modern data platform"
> Verified: ✓ found in JD
> Reasoning: The team has existing infrastructure and multiple analytics engineers, with modernization underway, indicating mid-stage growth rather than early-stage build or mature at-scale operation.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Act as the team's dbt expert, including refactoring complex transformations, resolving performance issues, and exploring, evaluating, and introducing advanced dbt features where they add clear value"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical specificity (multi-domain dbt environments, DOMO migration context, transformation optimization) that reflects real domain knowledge.

**Run 2:** `hiring_manager` ✗
> Quote: "Act as the team's dbt expert, including refactoring complex transformations, resolving performance issues, and exploring, evaluating, and introducing advanced dbt features where they add clear value"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical detail about dbt expertise, performance optimization, and advanced feature evaluation that only someone who performs this work would articulate.

**Run 3:** `hiring_manager` ✗
> Quote: "Act as the team's dbt expert, including refactoring complex transformations, resolving performance issues, and exploring, evaluating, and introducing advanced dbt features where they add clear value"
> Verified: ✓ found in JD
> Reasoning: The specific technical context around dbt expertise, DOMO legacy migration, performance optimization, and advanced feature evaluation reflects hands-on knowledge of the actual work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "The Senior Analytics Engineer plays a critical role in shaping and scaling the data foundations that support analytics and decision‑making across the organization"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and scaling data infrastructure and modeling standards; business collaboration is secondary to understanding requirements.

**Run 2:** `internal_data` ✓
> Quote: "transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use to drive insights"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building data infrastructure and models for internal analysts and the data function itself, not serving commercial, product, or finance teams.

**Run 3:** `internal_data` ✓
> Quote: "transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use to drive insights"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and improving the analytics data platform that serves internal analysts and business stakeholders, not a revenue, product, or finance function.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Accelerate the migration from legacy DOMO pipelines to the modern data platform in close collaboration with the Principal Analytics Engineer"
> Verified: ✓ found in JD
> Reasoning: The role executes a defined migration strategy and supports the Principal Analytics Engineer's direction rather than setting strategic priorities independently.

**Run 2:** `mixed` ✓
> Quote: "Help shape and refine shared approaches to data modeling, documentation, dbt project structure, and overall transformation practices as the platform scales"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (shaping approaches, establishing standards, guiding team growth) with execution (designing, building, and maintaining dbt models).

**Run 3:** `mixed` ✓
> Quote: "Help shape and refine shared approaches to data modeling, documentation, dbt project structure, and overall transformation practices as the platform scales"
> Verified: ✓ found in JD
> Reasoning: The role genuinely combines strategic direction-setting (shaping best practices, guiding team growth, establishing standards) with execution-level delivery (designing, building, and maintaining dbt models).

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Support the team in using AI powered IDEs, coding assistants, agents, and automation tools to improve development workflows and productivity"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use and advocate for AI-powered development tools to accelerate their own and the team's productivity.

**Run 2:** `ai_user` ✗
> Quote: "Support the team in using AI powered IDEs, coding assistants, agents, and automation tools to improve development workflows and productivity"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use and support others' use of AI-powered coding assistants to accelerate development workflows.

**Run 3:** `ai_user` ✗
> Quote: "Support the team in using AI powered IDEs, coding assistants, agents, and automation tools to improve development workflows and productivity"
> Verified: ✓ found in JD
> Reasoning: Candidates are expected to use AI coding tools and assistants to improve personal and team development productivity, not to build AI-enabled data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "establishes robust modeling and testing standards"
> Verified: ✓ found in JD
> Reasoning: The role summary uses the ownership verb 'establishes' for testing and modeling standards, indicating the candidate owns this practice.

**Run 2:** `responsibility` ✗
> Quote: "establish robust modeling and testing standards"
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing standards are framed as an action the candidate owns and defines through the action verb 'establish,' indicating accountability for the testing practice.

**Run 3:** `tool_listed` ✗
> Quote: "Experience working with data quality practices, including tests, validations, and investigating data issues"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality appear as required experience and part of platform foundation but are not framed as an explicit owned responsibility with accountability verbs in the responsibilities section.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['responsibility', 'responsibility', 'tool_listed']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "reliable, well‑structured data products that analysts and business partners can confidently use to drive insights"
> Verified: ✓ found in JD
> Reasoning: Reliability and data quality are emphasized as operational capabilities rather than compliance or risk-prevention concerns.

**Run 2:** `moderate` ✗
> Quote: "transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use to drive insights"
> Verified: ✓ found in JD
> Reasoning: Reliability and confidence in data are emphasized throughout, reflecting concern about preventing bad data reaching stakeholders, but without explicit compliance, regulatory, or audit language.

**Run 3:** `moderate` ✗
> Quote: "transforms complex, raw data into reliable, well‑structured data products that analysts and business partners can confidently use"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability, trust, and data quality as capability and product goals rather than as risk prevention or compliance-driven accountability.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
