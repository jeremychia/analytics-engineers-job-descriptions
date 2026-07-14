# Trace: 2026-07-03_relyzit_analytics-engineer-freelance

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (Freelance) — RELYzIT Talent (VRT)

**URL:** https://recruitcrm.io/apply/17829782719540068367qXJ
**Location:** Belgium
**Date Posted:** 2026-07-03

---

Analytics Engineer (Freelance) – VRT Belgium | 12-Month Contract

Our client, a leading public broadcaster, is on a mission to transform how data empowers decision-making, audience engagement, and operational excellence. As an Analytics Engineer, you'll be the architect who brings clarity and structure to vast, complex data landscapes—turning raw information into actionable insights that shape the future of media. This is a freelance opportunity for 12 months (with possible extension), based in Belgium.

Why This Role Matters
In a rapidly evolving digital media landscape, data is the compass. Your work will directly impact how our client understands its audience, drives policy, and innovates across every department. By bridging the gap between data engineering and analytics, you'll enable smarter decisions, magical customer experiences, and greater efficiency—fueling a data-driven culture at the heart of public broadcasting.

What You'll Be Doing
• Transforming raw, multi-source data into structured, actionable datasets for analytics and visualization
• Designing and implementing robust data models to support business intelligence and reporting needs
• Collaborating closely with data engineers and analysts as the vital link between technical and business teams
• Optimizing datasets for visualization tools and ensuring seamless integration of new data sources
• Conducting automated data quality checks using tools such as Great Expectations
• Documenting data processes and transformations thoroughly to ensure transparency and reproducibility
• Translating business requirements into effective data solutions and transformations
• Proactively identifying opportunities for new insights and efficiencies within the data ecosystem
• Supporting the Data & AI team in solving complex data challenges across the organization

Technical Skills & Experience
• Minimum 3 years of demonstrable experience as an Analytics Engineer
• Expert-level SQL skills
• Hands-on experience with dbt (Data Build Tool) development framework
• Experience with automated data quality checks (e.g., Great Expectations)
• Proficiency in Python (at least basic level)
• Solid understanding of data modeling principles
• Experience with Git version control
• Proven track record with Business Intelligence tools (Power BI, Metabase, Apache Superset)
• Experience with AWS (Athena, SageMaker), Spark, PySpark is a plus
• Ability to translate business requirements into technical data solutions
• Strong analytical mindset and attention to detail
• Commitment to thorough documentation and process transparency

Language Proficiency
• Excellent command of Dutch (CEFR level C2 required)

Other Requirements
• Bachelor's or Master's degree in a technical/engineering field, or equivalent experience
• Entrepreneurial spirit and initiative
• Team player with strong communication skills
• Customer- and results-oriented approach
• Knowledge of Scrum and DevOps methodologies is a plus
• Ability to work independently as a freelance contractor
• Must have or be willing to obtain all legally required insurances for freelance work in Belgium

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | mixed | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Documenting data processes and transformations thoroughly to ensure transparency and reproducibility"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (documentation, reproducibility, data quality checks, thorough documentation) with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Documenting data processes and transformations thoroughly to ensure transparency and reproducibility"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, testing, documentation, and transparency as core expectations with no counterbalancing velocity or iteration language.

**Run 3:** `rigour` ✓
> Quote: "Documenting data processes and transformations thoroughly to ensure transparency and reproducibility"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (robust models, automated quality checks, thorough documentation, attention to detail) with no velocity or pace-oriented framing present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "understand its audience, drives policy, and innovates across every department"
> Verified: ⚠ NOT found verbatim
> Reasoning: Public broadcaster focused on audience engagement and operational efficiency; no financial reporting, compliance, or regulatory language indicates data errors affect business decisions without immediate financial or compliance consequences.

**Run 2:** `moderate` ✓
> Quote: "Your work will directly impact how our client understands its audience, drives policy, and innovates across every department."
> Verified: ✓ found in JD
> Reasoning: While the role impacts business decisions and policy, the JD contains no explicit financial reporting, regulatory, or compliance language typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "Your work will directly impact how our client understands its audience, drives policy, and innovates across every department"
> Verified: ✓ found in JD
> Reasoning: Business intelligence and operational reporting impact without explicit financial reporting, regulatory, or compliance risk language.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Collaborating closely with data engineers and analysts as the vital link between technical and business teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named role cohorts identified (data engineers; analysts); business teams is too generic to count as a specific function.

**Run 2:** `2` ✓
> Quote: "data engineers; analysts"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are identified: data engineers and analysts; 'business teams' is generic and does not count as a named partner.

**Run 3:** `2` ✓
> Quote: "data engineers; analysts"
> Verified: ✓ found in JD
> Reasoning: Two named partner functions explicitly listed as collaboration targets in the responsibilities section; business teams and Data & AI team are either too generic or the candidate's own team.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: Existing data function with named sub-roles (engineers, analysts, Data & AI team) indicates established function beyond early stage but no signal of mature scale (20+ team, multiple specialised sub-teams).

**Run 2:** `mid` ✓
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in the responsibilities section and multiple data roles are implied (data engineers, analysts, Data & AI team), signaling a team that exists and produces with tools already deployed.

**Run 3:** `mid` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: Existing team structure, deployed tools (dbt, Great Expectations, visualization platforms), and optimization framing signal mid-stage rather than early build or mature at-scale operations.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations; Designing and implementing robust data models to support business intelligence and reporting needs"
> Verified: ✓ found in JD
> Reasoning: Some technical specificity (named tools with application context, methodology) but mostly generic responsibility verbs and no scale/volume or specific problem details typical of hiring managers.

**Run 2:** `mixed` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: The JD contains technical specificity (Great Expectations, dbt, specific BI tools) indicating hiring manager input, but also significant boilerplate language like 'collaborating closely with data engineers and analysts as the vital link' typical of recruiter scaffolding.

**Run 3:** `hiring_manager` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Specific tool names with applied technical context in responsibilities indicate hiring manager input; understanding of day-to-day work is clear, not generic boilerplate.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Designing and implementing robust data models to support business intelligence and reporting needs; Supporting the Data & AI team in solving complex data challenges"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities focus on building data infrastructure (models, quality frameworks, documentation) that serves the analytics function and BI teams directly.

**Run 2:** `internal_data` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building data infrastructure (dbt models, data models, quality frameworks) that the data team and analytics function consume, not directly serving business, finance, or commercial stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: Primary audience is the data function itself—data engineers and analysts—serving analytics infrastructure and platform consumers, not external business functions.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges; Translating business requirements into effective data solutions"
> Verified: ✓ found in JD
> Reasoning: Role receives scoped requirements from business and data team and delivers solutions within established structures rather than defining analytics direction or strategy.

**Run 2:** `execution` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: While the intro describes the role as an 'architect,' the actual responsibilities use execution verbs (supporting, collaborating, implementing, translating) and the 12-month freelance structure limits strategic scope.

**Run 3:** `execution` ✓
> Quote: "Supporting the Data & AI team in solving complex data challenges across the organization"
> Verified: ✓ found in JD
> Reasoning: Execution-oriented verbs (supporting, delivering, implementing, conducting) dominate with no direction-setting or strategy ownership responsibility.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, agentic workflows, or AI-ready data infrastructure expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, GenAI applications, AI-ready data infrastructure, or ML pipeline work; the 'Data & AI team' reference is merely the team name.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Company has a Data & AI team but no candidate skill expectation around AI coding tools, GenAI applications, or AI-ready infrastructure is stated.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Data quality practice framed as an owned responsibility with action verb 'Conducting', not merely listed as a tool requirement.

**Run 2:** `responsibility` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Data quality testing is framed as something the candidate owns and conducts using a named tool, indicating responsibility rather than just tool experience.

**Run 3:** `responsibility` ✗
> Quote: "Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Action verb conducting frames automated data quality as an owned responsibility, not merely a listed tool or absent concern.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Commitment to thorough documentation and process transparency; Conducting automated data quality checks using tools such as Great Expectations"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are valued (documentation, automated checks) but without high-stakes risk language around compliance, financial accuracy, or regulatory exposure.

**Run 2:** `moderate` ✗
> Quote: "Commitment to thorough documentation and process transparency"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability through documentation and data quality, but does not frame the role around preventing regulatory, compliance, or trust-breaking outcomes.

**Run 3:** `moderate` ✗
> Quote: "Documenting data processes and transformations thoroughly to ensure transparency and reproducibility"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and auditability are secondary concerns supporting delivery; no compliance, regulatory, or stakeholder-trust language present.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
