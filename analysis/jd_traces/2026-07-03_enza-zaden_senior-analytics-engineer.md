# Trace: 2026-07-03_enza-zaden_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Enza Zaden

**URL:** https://enzazaden.wd103.myworkdayjobs.com/Enza-Careers/job/Enkhuizen-The-Netherlands/Analytics-Engineer_JR105077?source=LinkedIn
**Location:** Enkhuizen, The Netherlands
**Date Posted:** 2026-07-03
**Salary:** 5,104–7,291 EUR

---

Senior Analytics Engineer

Enza Zaden is an international family-owned company that has been developing innovative vegetable varieties since 1938. Together with more than 3,300 colleagues worldwide, we work on vegetable seeds with better flavor, higher yields and strong resistances.

As Senior Analytics Engineer, you play a key role in enabling data-driven decision-making across Enza Zaden worldwide. You design, build and maintain scalable data models and analytics products that empower self-service BI for teams across the organization.

What you'll do
• Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI
• Lead complex analytics and reporting initiatives with a mid- to long-term horizon
• Translate business needs into scalable, well-governed data solutions in collaboration with stakeholders and product owners
• Improve data quality, reliability, performance and cost efficiency through lifecycle management
• Ensure compliance with architecture, security and access standards together with IT, Architecture and Security teams
• Coach colleagues and contribute to knowledge sharing, user enablement and adoption of data solutions

What you bring
As Senior Analytics Engineer, you bring strong ownership and a strategic yet pragmatic mindset. You know how to translate complex business questions into actionable data solutions and use your technical expertise to deliver scalable, high-quality results. You communicate effectively with stakeholders across different levels and guide teams in using data more effectively.

You have:
• A Master's degree (WO) with 6–8 years of relevant experience in analytics, reporting or data engineering
• Strong knowledge of data modelling, analytics and data transformation techniques
• Hands-on experience with Azure (DP203), Databricks, SQL, dbt, Power BI, DAX and Git
• Experience with DevOps practices such as version control, testing and CI/CD for data products
• Understanding of scalability, architecture principles and data platform lifecycle management
• Strong communication, stakeholder management and coaching skills

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 4 | 4 | 4 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | execution | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | responsibility | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, compliance, and architectural standards as core expectations with no velocity or speed-oriented language.

**Run 2:** `rigour` ✓
> Quote: "Ensure compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasise compliance, governance, reliability, and data quality with no velocity-oriented language, establishing a strong rigour orientation.

**Run 3:** `rigour` ✓
> Quote: "Improve data quality, reliability, performance and cost efficiency through lifecycle management"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, reliability, and governed solutions with no velocity or speed-focused language, establishing rigour as the primary orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "enabling data-driven decision-making across Enza Zaden worldwide"
> Verified: ✓ found in JD
> Reasoning: The role supports strategic business decisions for an agricultural company without explicit financial reporting, regulatory, or compliance-critical language.

**Run 2:** `moderate` ✓
> Quote: "empower self-serve BI for teams across the organization"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role supports business intelligence and decision-making without explicit financial reporting or regulatory compliance language, indicating operational rather than compliance-critical consequences.

**Run 3:** `moderate` ✓
> Quote: "enabling data-driven decision-making across Enza Zaden worldwide"
> Verified: ✓ found in JD
> Reasoning: While compliance and governance are mentioned, the JD does not reference financial reporting, regulatory bodies, or audit requirements; this is business decision-making risk, not regulatory risk.

### collaboration_width
**Manual:** `2`

**Run 1:** `4` ✗
> Quote: "product owners; IT; Architecture; Security teams"
> Verified: ✓ found in JD
> Reasoning: Four named partner functions explicitly mentioned: Product (product owners), IT, Architecture, and Security.

**Run 2:** `4` ✗
> Quote: "in collaboration with stakeholders and product owners; IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: The JD names four distinct partner functions: product owners, IT, Architecture, and Security teams.

**Run 3:** `4` ✗
> Quote: "product owners; IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names four distinct collaborators: product owners (from the first collaboration mention) and IT, Architecture, and Security as three separate teams (from the compliance statement).

⚠ **Disagreement**: manual=`2` vs LLM majority=`4`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: Established tools and practices are deployed and actively used; focus on user enablement and adoption signals a scaling phase rather than early-stage build-from-zero.

**Run 2:** `mid` ✗
> Quote: "Coach colleagues and contribute to knowledge sharing, user enablement and adoption of data solutions"
> Verified: ✓ found in JD
> Reasoning: The existence of colleagues to coach and multiple named tools in use (Databricks, dbt, Power BI) indicate an established function that is scaling and improving, not building from zero.

**Run 3:** `mid` ✗
> Quote: "Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in responsibilities (not just requirements) and the role includes coaching colleagues, indicating an existing team in growth phase rather than greenfield or fully mature.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: Named tools with specific technical context (Databricks, dbt, Power BI) and lifecycle management practices suggest hiring manager input, but generic phrases like 'translate business needs' and 'coach colleagues' indicate template language.

**Run 2:** `mixed` ✗
> Quote: "Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific tool contexts (Databricks, dbt, Power BI with clear application) indicating hiring-manager input, but also include generic collaboration language.

**Run 3:** `mixed` ✗
> Quote: "Design, develop and maintain advanced data models and analytics products using tools like Databricks, dbt and Power BI"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical requirements (Azure DP203 certification, explicit tool stack with context) mixed with generic collaboration language, indicating both technical authorship and HR/recruiter input.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "empower self-service BI for teams across the organization"
> Verified: ✓ found in JD
> Reasoning: Primary impact is enabling the data platform and self-service analytics for internal teams, not serving commercial, product, or finance functions as direct audiences.

**Run 2:** `internal_data` ✓
> Quote: "empower self-serve BI for teams across the organization"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary focus is enabling self-serve analytics infrastructure for internal data consumers rather than serving commercial, product, or finance functions.

**Run 3:** `internal_data` ✓
> Quote: "self-service BI for teams across the organization"
> Verified: ✓ found in JD
> Reasoning: The role's primary purpose is building data infrastructure and enabling internal consumers to serve themselves, treating the data platform as the product rather than serving commercial, product, or finance-specific outcomes.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Design, develop and maintain advanced data models and analytics products"
> Verified: ✓ found in JD
> Reasoning: Strategic action verbs (design, develop, lead) dominate responsibilities, indicating the role sets direction within the data function rather than executing predefined priorities.

**Run 2:** `execution` ✗
> Quote: "Lead complex analytics and reporting initiatives with a mid- to long-term horizon"
> Verified: ✓ found in JD
> Reasoning: While the role leads analytics initiatives, it responds to business needs set by stakeholders rather than defining organizational analytics direction.

**Run 3:** `strategic` ✓
> Quote: "Lead complex analytics and reporting initiatives with a mid- to long-term horizon"
> Verified: ✓ found in JD
> Reasoning: The repeated use of strategic verbs ('lead', 'design', 'guide teams'), paired with explicit mention of 'strong ownership', positions this as direction-setting rather than execution.

⚠ **LLM inconsistency**: runs gave ['strategic', 'execution', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, or AI/ML pipeline capabilities expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mentions of AI tools, agentic workflows, AI coding assistance, or AI-ready infrastructure expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-augmented infrastructure, or AI capability expectations from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "Experience with DevOps practices such as version control, testing and CI/CD for data products"
> Verified: ✓ found in JD
> Reasoning: Testing appears only in the requirements/skills section without ownership verbs or explicit testing frameworks as a named responsibility.

**Run 2:** `responsibility` ✗
> Quote: "Improve data quality, reliability, performance and cost efficiency through lifecycle management"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to own and improve data quality and reliability as a primary responsibility, not merely list testing tools as a requirement.

**Run 3:** `responsibility` ✗
> Quote: "Improve data quality, reliability, performance and cost efficiency through lifecycle management"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are owned responsibilities (action verb 'improve') in the role's core duties, not merely a tool to be familiar with from a requirements list.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'responsibility', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure compliance with architecture, security and access standards"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and compliance are concerns, but they are secondary to the primary framing of enabling data-driven decision-making and self-service BI.

**Run 2:** `moderate` ✗
> Quote: "Ensure compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Compliance and reliability are integrated concerns throughout the JD but secondary to the primary framing of enabling decision-making and leading analytics initiatives.

**Run 3:** `moderate` ✗
> Quote: "Ensure compliance with architecture, security and access standards together with IT, Architecture and Security teams"
> Verified: ✓ found in JD
> Reasoning: Compliance and reliability concerns are present but secondary to the delivery focus; the fear is operational failure and data quality breakdowns, not regulatory exposure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
