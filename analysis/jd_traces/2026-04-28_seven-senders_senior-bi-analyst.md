# Trace: 2026-04-28_seven-senders_senior-bi-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Senior Business Intelligence Analyst (f/m/x) — Seven Senders

**URL:** https://www.linkedin.com/jobs/view/4406635718
**Location:** Berlin, Berlin, Germany
**Employment Type:** Full-time

---

## Key Responsibilities

- Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks
- Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets
- Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks
- Support the growth of junior analysts through code reviews, coaching, and documentation
- Explain complex technical concepts to non-technical audiences
- Own the data pipeline from architecting dbt models to enabling self-service in Looker
- Act as translator between engineering and business stakeholders
- Provide mentorship and maintain data culture quality

---

## Required Qualifications

- 4+ years of experience in Data Analytics, BI, or Data Science
- Proven experience building and maintaining scalable dbt or similar framework projects
- Deep understanding of dependency management, reusability, and runtime optimization
- Expert-Level SQL & Optimization producing efficient, production-grade SQL
- Experience in Looker (or similar tools) from backend development to storytelling
- Ability to break down ambiguous problems and take full ownership from definition to delivery

---

## Preferred / Bonus Skills

- None explicitly listed separately from requirements

---

## Benefits

- Hybrid work model with flexible remote setup and working hours
- Up to 2 months remote work annually from anywhere
- Company lunches twice monthly
- Corporate benefits platform
- German language courses
- Climate-neutral operations initiative
- Regular team events and company-wide celebrations

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 1 | 1 | 2 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | strategic | strategic | strategic | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | responsibility | tool_listed | 33% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "maintain data culture quality"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing frameworks, code reviews, documentation, production-grade SQL, and maintaining data culture quality—core rigour signals—with no velocity language like 'fast-paced', 'ship quickly', or 'iteration speed'.

**Run 2:** `rigour` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing frameworks, cost optimization, dependency management, production-grade SQL, and runtime optimization—all rigour signals with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing frameworks and technical sophistication rather than speed or rapid iteration.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is focused on building analytics infrastructure and enabling business decision-making through self-serve tools, with no language about financial reporting, regulatory compliance, audit, or regulatory requirements.

**Run 2:** `moderate` ✓
> Quote: "Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets"
> Verified: ✓ found in JD
> Reasoning: Business intelligence role with operational scale but no explicit signals of financial reporting, regulatory compliance, or mission-critical financial impact.

**Run 3:** `moderate` ✓
> Quote: "Act as translator between engineering and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The role supports business decisions but shows no explicit financial reporting, compliance, or regulatory language.

### collaboration_width
**Manual:** `3`

**Run 1:** `1` ✗
> Quote: "engineering"
> Verified: ✓ found in JD
> Reasoning: Only 'engineering' is named as a distinct collaborative partner ('Act as translator between engineering and business stakeholders'); 'business stakeholders' is generic language that does not count as a named function.

**Run 2:** `1` ✗
> Quote: "Act as translator between engineering and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only Engineering is explicitly named as a distinct functional partner; 'business stakeholders' is generic language that does not count as a named team.

**Run 3:** `2` ✗
> Quote: "junior analysts; engineering"
> Verified: ✓ found in JD
> Reasoning: Named teams counted are junior analysts as a role cohort and engineering as a function.

⚠ **Disagreement**: manual=`3` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['1', '1', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: The JD implies multiple data roles (junior analysts being supported), existing named tools in use (dbt, Looker), established processes (Discovery-to-Delivery cycle), and focus on scaling rather than building from zero.

**Run 2:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: Presence of junior analysts and established tools (dbt, Looker) indicate a functioning data organization growing in scale, but not yet fully mature.

**Run 3:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: Multiple analysts are implied and named tools (dbt, Looker) appear in responsibilities context, indicating a growing but established function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical detail (Jinja, macros, testing frameworks, multi-billion row datasets, Discovery-to-Delivery cycle, Looker self-serve architecture) that only someone who has performed this work would articulate.

**Run 2:** `hiring_manager` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Specific technical tooling (dbt, Jinja, macros, testing frameworks) and named methodologies (Discovery-to-Delivery cycle) indicate authorship by someone with hands-on experience in this role.

**Run 3:** `hiring_manager` ✓
> Quote: "Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets"
> Verified: ✓ found in JD
> Reasoning: The inclusion of specific scale (multi-billion rows) and optimization goals indicates someone who has performed this work, not a recruiter.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary mission is to build and maintain data infrastructure and enable self-serve analytics for data consumers, rather than directly serve commercial, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary focus is building internal data infrastructure for self-service analytics consumption, not external revenue or product teams.

**Run 3:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-service in Looker"
> Verified: ✓ found in JD
> Reasoning: The role is primarily oriented toward enabling the analytics function through infrastructure and self-serve enablement rather than serving external business decision-makers.

### autonomy_level
**Manual:** `execution`

**Run 1:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: The role uses strategic verbs ('independently lead', 'own', 'architect', 'design') that indicate direction-setting authority and ownership of outcomes, not execution of direction set by others.

**Run 2:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: The words 'independently lead' and the pipeline ownership responsibility ('architect dbt models') indicate strategic decision-making authority over technical direction.

**Run 3:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: The role uses strategic ownership verbs (independently lead, own) that place the person in control of technical direction within their domain.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`strategic`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mentions of AI tools, coding assistants, generative AI infrastructure, or AI-related skills expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, coding assistants, or AI-augmented workflows; the role is standard analytics/BI work.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation of AI tool use or AI-enabling work in any form.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are mentioned as part of the dbt toolkit being used, but without ownership language like 'own', 'define', or 'implement'—the verb 'utilizing' indicates tool usage rather than responsibility for the testing practice.

**Run 2:** `responsibility` ✗
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are embedded as a core part of the design/build/maintain responsibility, indicating ownership of the testing practice rather than incidental tool exposure.

**Run 3:** `tool_listed` ✗
> Quote: "utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks appear as a technical requirement and tool in use but not as an owned responsibility or defined standard.

⚠ **Disagreement**: manual=`` vs LLM majority=`tool_listed`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'responsibility', 'tool_listed']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "maintain data culture quality"
> Verified: ✓ found in JD
> Reasoning: The JD mentions operational reliability concerns ('production-grade SQL', 'maintain data culture quality') but these are secondary to the primary delivery and enablement framing; no risk register, compliance, or regulatory language appears.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around capability delivery, performance optimization, and analytics enablement with no emphasis on risk prevention, compliance, or preventing bad outcomes.

**Run 3:** `moderate` ✗
> Quote: "producing efficient, production-grade SQL"
> Verified: ✓ found in JD
> Reasoning: Production-grade SQL standards indicate operational reliability as a professional concern, but not as a primary loss-prevention focus.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
