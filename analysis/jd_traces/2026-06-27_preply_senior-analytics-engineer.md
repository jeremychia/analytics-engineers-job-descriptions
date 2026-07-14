# Trace: 2026-06-27_preply_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Preply

**URL:** https://preply.com/en/careers/apply?ashby_jid=c0af4bdc-108c-405c-9425-2a15e9dc4c94
**Location:** Barcelona
**Date Posted:** 2026-06-27

---

Senior Analytics Engineer
Location
Barcelona

Employment Type
Full time

Location Type
Hybrid

Department
Data

Overview
Application
We power people's progress.
At Preply, we're all about creating life-changing learning experiences. We help people discover the magic of the perfect tutor, craft a personalised learning journey, and stay motivated to keep growing. Our approach is human-led, tech-enabled - and it's creating real impact.

We've just reached unicorn status with a $150M Series D, accelerating our vision to transform education through human-led, AI-enhanced learning. Today, 100,000+ tutors teach 90+ languages to learners in 180 countries - and we're only getting started. As a category-defining company, we're shaping what the future of learning looks like at global scale.

Every Preply lesson sparks change, fuels ambition, and drives progress that matters. Joining Preply means helping define the future of education at global scale, and building something that truly matters for millions of people, every day.

Meet the team!
At Preply, we run hundreds of A/B tests at any given time, each with unique tracking and analytical challenges. Our platform spans a diverse product ecosystem, with sophisticated tutor-learner interactions that generate a vast amount of data. This creates an exciting, high-impact environment where data engineering plays a crucial role in shaping our business decisions.

We are passionate about building a modern data infrastructure that enables our teams to extract insights, optimize experiments, and power innovation. As an Analytics Engineer, you will help shape critical data models, streamline pipelines, and optimize our analytics stack to empower decision-making across the company.

Why You'll Love This Role
Cutting-edge data stack: work with DBT, Snowflake, Airflow, Looker, Databricks, Monte Carlo, and help shape our future tech choices.

End-to-End impact: own and evolve the entire data pipeline, from ingestion to transformation and modeling, ensuring accuracy, scalability, and performance.

Cross-team collaboration: partner with data scientists, analysts, and engineers to create high-quality, actionable datasets for business insights.

Continuous learning & growth: be part of a data-driven culture where innovation, best practices, and ownership drive success.

What you will be doing
Lead the architecture, design, and evolution of complex data models ensuring clarity, accessibility, scalability, and reliability.

Develop and optimize sophisticated ETL/ELT pipelines, enhancing performance and scalability within our multi-terabyte data ecosystem.

Own and enhance our BI layer (Looker via LookML), ensuring intuitive, performant, and scalable self-service analytics.

Provide technical leadership in collaboration with data science teams to optimize analytical workflows, reduce redundancy, and enforce robust data governance.

Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring.

Drive initiatives ensuring data reliability, cleanliness, accuracy, and comprehensive documentation for critical business decision-making.

Strategically influence and drive company-wide data strategies supporting rapid product growth, sophisticated experimentation, and large-scale personalization initiatives.

What you need to succeed
5+ years of hands-on experience in analytics engineering, data engineering, or related fields.

Expert proficiency in SQL and Python, with a proven track record in designing, implementing, and optimizing data models.

Deep understanding of advanced data governance frameworks, modeling best practices, and implementation of scalable self-service analytics platforms.

Exceptional blend of technical skills, business ac…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | product | internal_data | mixed | internal_data | 33% | ✗ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring."
> Verified: ✓ found in JD
> Reasoning: Responsibilities consistently emphasize correctness, quality governance, and best practices with explicit CI/CD and data quality signals; velocity language is limited to product business context, not work orientation.

**Run 2:** `rigour` ✓
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring."
> Verified: ✓ found in JD
> Reasoning: Responsibilities consistently emphasize correctness, governance, reliability, and best practices (CI/CD, data quality monitoring, version control) with only one reference to pace in company principles.

**Run 3:** `rigour` ✓
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes quality, governance, and best practices (CI/CD, data quality monitoring, accuracy, documentation) far outweighing any velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "optimize experiments, and power innovation"
> Verified: ✓ found in JD
> Reasoning: The role supports business experimentation and decision-making rather than financial reporting or regulatory compliance, placing it in the moderate risk category.

**Run 2:** `moderate` ✓
> Quote: "data reliability, cleanliness, accuracy, and comprehensive documentation for critical business decision-making"
> Verified: ✓ found in JD
> Reasoning: The role affects business decision-making quality but the JD lacks financial, regulatory, or compliance language that would indicate high financial or legal risk.

**Run 3:** `moderate` ✓
> Quote: "critical business decision-making"
> Verified: ✓ found in JD
> Reasoning: EdTech role supporting business decisions through analytics without explicit regulatory, compliance, or financial reporting language typical of high-risk sectors.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "partner with data scientists, analysts, and engineers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions are explicitly listed: data scientists, analysts, and engineers.

**Run 2:** `3` ✓
> Quote: "partner with data scientists, analysts, and engineers; collaboration with data science teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions are explicitly listed as collaboration partners: data scientists, analysts, and engineers.

**Run 3:** `3` ✓
> Quote: "partner with data scientists, analysts, and engineers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions explicitly listed: data scientists, analysts, and engineers.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Develop and optimize sophisticated ETL/ELT pipelines, enhancing performance and scalability within our multi-terabyte data ecosystem."
> Verified: ✓ found in JD
> Reasoning: Named tools (Snowflake, DBT, Airflow, Looker, Monte Carlo) appear in responsibilities with specific scale and optimization context, indicating existing infrastructure being scaled rather than greenfield or mature specialization.

**Run 2:** `mid` ✗
> Quote: "work with DBT, Snowflake, Airflow, Looker, Databricks, Monte Carlo, and help shape our future tech choices"
> Verified: ✓ found in JD
> Reasoning: Existing mature tooling and multi-terabyte data ecosystem indicate an established function beyond early stage, with responsibilities focused on evolving rather than establishing foundational infrastructure.

**Run 3:** `mid` ✗
> Quote: "own and evolve the entire data pipeline, from ingestion to transformation and modeling, ensuring accuracy, scalability, and performance"
> Verified: ✓ found in JD
> Reasoning: Multiple named tools in operation (DBT, Snowflake, Airflow, Looker, Databricks, Monte Carlo), multi-terabyte scale, and emphasis on evolution of existing infrastructure indicates established function in growth phase, not early or fully mature.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "own and enhance our BI layer (Looker via LookML), ensuring intuitive, performant, and scalable self-serve analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: Specific tool applications (Looker via LookML), scale details (multi-terabyte ecosystem), and precise technical context indicate hands-on authorship by someone who has done this work.

**Run 2:** `mixed` ✗
> Quote: "Own and enhance our BI layer (Looker via LookML), ensuring intuitive, performant, and scalable self-serve analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: Specific technical details like LookML, multi-terabyte scale, and Looker configuration suggest hiring manager input, mixed with generic collaboration language typical of recruiter-authored content.

**Run 3:** `mixed` ✗
> Quote: "Own and enhance our BI layer (Looker via LookML), ensuring intuitive, performant, and scalable self-service analytics."
> Verified: ✓ found in JD
> Reasoning: Mix of specific technical context (LookML implementation details, named tools with application) and generic responsibility verbs (develop, drive, champion) suggests dual authorship.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `internal_data` ✗
> Quote: "Provide technical leadership in collaboration with data science teams to optimize analytical workflows, reduce redundancy, and enforce robust data governance."
> Verified: ✓ found in JD
> Reasoning: The primary named audience and immediate collaborators are data functions (data scientists, analysts, engineers), and responsibilities focus on building infrastructure for analytics consumers rather than directly serving product teams.

**Run 2:** `mixed` ✗
> Quote: "supporting rapid product growth, sophisticated experimentation, and large-scale personalization initiatives"
> Verified: ✓ found in JD
> Reasoning: Responsibilities balance product-oriented goals (experimentation, personalization) with internal data infrastructure work (self-serve BI layer, analytical workflows for data scientists), making primary audience internal_data and product equally.

**Run 3:** `internal_data` ✗
> Quote: "ensure intuitive, performant, and scalable self-service analytics"
> Verified: ⚠ NOT found verbatim
> Reasoning: Primary framing centers on enabling internal data consumers and building infrastructure (models, pipelines, BI layer) rather than serving commercial, product, or finance teams directly.

⚠ **Disagreement**: manual=`product` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Lead the architecture, design, and evolution of complex data models ensuring clarity, accessibility, scalability, and reliability."
> Verified: ✓ found in JD
> Reasoning: Verbs emphasizing direction-setting (lead, drive, champion, strategically influence) indicate the role defines approach and priorities rather than executing direction set by others.

**Run 2:** `strategic` ✓
> Quote: "Strategically influence and drive company-wide data strategies supporting rapid product growth, sophisticated experimentation, and large-scale personalization initiatives"
> Verified: ✓ found in JD
> Reasoning: The role uses explicit strategic verbs (lead, drive, influence, champion) and is framed around setting direction, architecture decisions, and company-wide strategy rather than executing defined work.

**Run 3:** `strategic` ✓
> Quote: "Strategically influence and drive company-wide data strategies supporting rapid product growth, sophisticated experimentation, and large-scale personalization initiatives."
> Verified: ✓ found in JD
> Reasoning: Consistent use of ownership and direction-setting verbs (lead, own, champion, drive, strategically) throughout responsibilities indicates the role sets data strategy, not executes pre-defined direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company description mentions AI-enhanced learning, there is no expectation that the candidate use AI tools or build AI-enabling infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Although the company uses AI-enhanced learning and Databricks is listed as a tool, the JD contains no signals that the candidate must demonstrate AI skills, use AI coding tools, or build data infrastructure for AI/ML systems.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Company operates AI-enhanced products but the JD contains no expectation that the candidate use AI tools or build AI infrastructure; no mention of coding agents, LLM data infrastructure, or AI-assisted development.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring."
> Verified: ✓ found in JD
> Reasoning: Data quality and monitoring are framed as owned responsibilities with action verbs (champion, drive) rather than as tools in a requirements list.

**Run 2:** `responsibility` ✗
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring"
> Verified: ✓ found in JD
> Reasoning: Data quality monitoring is framed as an ownership responsibility to champion and implement, not just a tool to have experience with.

**Run 3:** `responsibility` ✗
> Quote: "Champion engineering best practices, including advanced version control, CI/CD pipelines for analytics, and rigorous automated data quality monitoring."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality monitoring are framed as ownership responsibilities the candidate champions and enforces, not as tools listed in a requirements section.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Drive initiatives ensuring data reliability, cleanliness, accuracy, and comprehensive documentation for critical business decision-making."
> Verified: ✓ found in JD
> Reasoning: The focus is on operational reliability and preventing data errors from affecting business decisions, rather than compliance or regulatory risk.

**Run 2:** `moderate` ✗
> Quote: "data reliability, cleanliness, accuracy, and comprehensive documentation for critical business decision-making"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes preventing operational failures and bad data from reaching decision-makers, but lacks regulatory or compliance language that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Drive initiatives ensuring data reliability, cleanliness, accuracy, and comprehensive documentation for critical business decision-making."
> Verified: ✓ found in JD
> Reasoning: Emphasis on operational reliability and data accuracy to support business decisions, but no compliance, regulatory, or catastrophic-failure prevention language typical of high loss-aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
