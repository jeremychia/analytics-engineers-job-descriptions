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
| collaboration_width | 3 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | strategic | strategic | strategic | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | responsibility | responsibility | 33% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize technical rigor, testing frameworks, optimization, and quality practices throughout, with zero velocity language present.

**Run 2:** `rigour` ✓
> Quote: "utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing frameworks, production-grade SQL, optimization, and data culture quality with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing frameworks, code reviews, optimization, and quality multiple times, with zero velocity signals like fast-paced or rapid delivery.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role centers on business analytics and BI infrastructure without explicit financial reporting, compliance, or regulatory language.

**Run 2:** `moderate` ✓
> Quote: "Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets"
> Verified: ✓ found in JD
> Reasoning: Scale and business importance are indicated without explicit financial reporting, compliance, or regulatory language.

**Run 3:** `moderate` ✓
> Quote: "Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets"
> Verified: ✓ found in JD
> Reasoning: The scale and operational importance are evident, but without explicit financial/compliance/regulatory language, the risk is to business decisions rather than regulatory exposure.

### collaboration_width
**Manual:** `3`

**Run 1:** `1` ✗
> Quote: "Act as translator between engineering and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only Engineering is explicitly named as a distinct team; 'business stakeholders' is too vague to count as a specific named collaboration partner.

**Run 2:** `1` ✗
> Quote: "Act as translator between engineering and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only engineering is explicitly named as a distinct team; business stakeholders is generic.

**Run 3:** `1` ✗
> Quote: "engineering"
> Verified: ✓ found in JD
> Reasoning: Only 'engineering' qualifies as a named distinct team; 'business stakeholders' is generic and does not count.

⚠ **Disagreement**: manual=`3` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: Established tools and infrastructure (dbt, Looker, multi-billion row datasets) coupled with an existing team being mentored indicates mid-stage maturity.

**Run 2:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: Established dbt and Looker tooling with multiple analyst roles implies an existing, structured function growing in capability.

**Run 3:** `mid` ✓
> Quote: "Support the growth of junior analysts through code reviews, coaching, and documentation"
> Verified: ✓ found in JD
> Reasoning: The presence of juniors to mentor and established tools (dbt, Looker) in use indicate a data function that has grown beyond initial stage but is not yet described as fully mature.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Specific technical terminology (Jinja, macros, testing frameworks) and methodology references indicate hands-on expertise from someone who does this work.

**Run 2:** `hiring_manager` ✓
> Quote: "Deliver high-performance, cost-optimized SQL queries designed for multi-billion row datasets"
> Verified: ✓ found in JD
> Reasoning: Specific scale metrics, dbt/Jinja expertise, dependency management, and runtime optimization detail require hiring manager technical knowledge.

**Run 3:** `hiring_manager` ✓
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Named tools with precise technical context (Jinja, macros, testing frameworks) and specific methodology (Discovery-to-Delivery) indicate someone with hands-on dbt expertise wrote this.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary mission is building data infrastructure and enabling internal analytics consumers, not serving commercial, product, or finance functions.

**Run 2:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: Primary focus is building analytics infrastructure and enabling self-service data access for internal platform consumers.

**Run 3:** `internal_data` ✓
> Quote: "Own the data pipeline from architecting dbt models to enabling self-serve in Looker"
> Verified: ⚠ NOT found verbatim
> Reasoning: The emphasis on infrastructure ownership and platform enablement indicates the role primarily serves the data team and analytics consumers, not a specific business domain like GTM or FP&A.

### autonomy_level
**Manual:** `execution`

**Run 1:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally about setting direction for how analytics are discovered, delivered, and architected through independent leadership and pipeline ownership.

**Run 2:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: The role is framed around independent leadership and architectural ownership rather than execution of others' priorities.

**Run 3:** `strategic` ✗
> Quote: "Independently lead the Discovery-to-Delivery cycle for medium to highly complex tasks"
> Verified: ✓ found in JD
> Reasoning: 'Independently lead' combined with 'own the data pipeline' and 'full ownership from definition to delivery' signals expectation to define direction rather than execute against set priorities.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`strategic`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, or AI-enablement responsibilities in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted work, or data infrastructure for AI systems anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted coding, or building AI data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks appear as tools used within dbt workflows without explicit ownership or responsibility language for defining data quality standards.

**Run 2:** `responsibility` ✗
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are presented as integral to the dbt model maintenance work, indicating ownership of testing practices.

**Run 3:** `responsibility` ✗
> Quote: "Design, build, and maintain dbt models, utilizing advanced Jinja, macros, and testing frameworks"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are explicitly named as part of core responsibilities with ownership implied by active verbs 'design, build, maintain'.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'responsibility', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is entirely framed around positive capabilities and delivery outcomes with no mention of risk, reliability, compliance, or preventing bad outcomes.

**Run 2:** `moderate` ✗
> Quote: "maintain data culture quality"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality standards are framed as concerns but lack explicit risk, compliance, or regulatory language.

**Run 3:** `moderate` ✗
> Quote: "maintain data culture quality"
> Verified: ✓ found in JD
> Reasoning: Quality and reliability matter (testing frameworks, code reviews, data culture quality explicitly mentioned), but the dominant framing is delivery capability and infrastructure ownership rather than risk or compliance prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
