# Trace: 2026-06-27_lansweeper_revenue-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Revenue Analytics Engineer — Lansweeper

**URL:** https://careers.lansweeper.com/o/revenue-analytics-engineer?source=LinkedIn
**Location:** London, Greater London, United Kingdom (Hybrid) + 2 more
**Date Posted:** 2026-06-27
**Salary:** €107,000–€174,000 per year

---

Revenue Analytics Engineer
Hybrid
London, Greater London, United Kingdom•
+2 more
€107,000 - €174,000 per year
Operations
A high-impact role at the intersection of data, finance, and go-to-market strategy. The opportunity to shape how a growing SaaS company measures and steers its revenue.

About Lansweeper 

Lansweeper is a leading IT asset management company that helps organizations gain complete visibility into their IT landscape. Our technology discovers, inventories, and manages every IT asset across on-premises, cloud, and IoT environments. As we grow through new products and market expansion, revenue analytics is becoming critical to steer the business forward. 

What Success Looks Like 

C-level decisions to optimize growth are based on revenue metrics and insights, as they are highly trusted facts on the evolution of the business 

Revenue metrics are structured so they are relevant for board-level insights 

Key trends in revenue metrics are explained by linking back to sales and finance processes, ensuring the right strategic decisions for growing the company are taken 

Forecasting for key revenue metrics is in place and used to steer go-to-market actions 

The Real Challenge 

The sales organization is moving quickly and needs revenue facts to understand the success of its campaigns and to plan new sales plays 

The market is changing and so is our product — we need to allocate sales and marketing efforts where it matters most for growth 

Revenue metrics are sourced from multiple systems, have historic complexity due to acquisitions and system migrations, and data quality varies over time 

What You Will Do 

Build, maintain, and improve the revenue data models that power executive-level reporting and board-ready metrics 

Reconcile revenue data across systems of record (CRM, billing, ERP) and ensure a single source of truth for financial KPIs 

Design and deliver dashboards and reports that translate complex revenue data into clear, actionable insights for sales, finance, and leadership 

Partner with sales operations and finance to understand changing business processes and reflect them accurately in revenue analytics 

Develop and maintain forecasting models for key revenue metrics to support go-to-market planning 

Investigate and explain trends, anomalies, and shifts in revenue data, linking them back to underlying business drivers 

Proactively improve data quality and integrity across revenue-related data pipelines 

Job requirements
Required 

Experience with financial metrics reporting — you know how revenue, bookings, churn, and related KPIs are defined and measured 

Understanding of subscription sales processes — you are familiar with concepts like ARR, MRR, expansion, contraction, and renewal cycles 

Strong SQL skills — you can write, optimize, and debug complex queries against large datasets 

Experience in reconciling systems of record — you have dealt with data mismatches between CRM, billing, and finance systems and know how to resolve them 

Analytical mindset with the ability to translate data into business narratives that support decision-making 

Nice to Have 

Experience with SaaS KPI reporting (e.g., net revenue retention, LTV, CAC payback) 

Hands-on experience with Snowflake, dbt, and/or Power BI 

Familiarity with data modeling best practices (dimensional modeling, slowly changing dimensions)

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 4 | 3 | 3 | 2 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | recruiter | mixed | 0% | ✗ |
| stakeholder_orientation | mixed | finance | finance | mixed | 33% | ✗ |
| autonomy_level | mixed | mixed | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "ensure a single source of truth for financial KPIs"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize correctness, accuracy, and reconciliation across systems, with no velocity-oriented language; the phrase directly signals quality and reliability as core expectations.

**Run 2:** `rigour` ✓
> Quote: "Reconcile revenue data across systems of record (CRM, billing, ERP) and ensure a single source of truth for financial KPIs"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize reconciliation, data integrity, and establishing a single source of truth across multiple systems—classic rigour signals—with no velocity language like 'fast-paced' or 'rapid iteration' in the role framing.

**Run 3:** `rigour` ✓
> Quote: "Proactively improve data quality and integrity across revenue-related data pipelines"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, integrity, reconciliation across systems, and ensuring a single source of truth—core rigour signals—with no velocity language in the work expectations.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "C-level decisions to optimize growth are based on revenue metrics and insights, as they are highly trusted facts on the evolution of the business"
> Verified: ✓ found in JD
> Reasoning: Revenue errors directly affect board-level and executive decision-making, constituting financial reporting risk at the highest level of the organization.

**Run 2:** `high` ✓
> Quote: "C-level decisions to optimize growth are based on revenue metrics and insights, as they are highly trusted facts on the evolution of the business"
> Verified: ✓ found in JD
> Reasoning: Data errors directly affect C-level and board-level financial and revenue decisions, placing this squarely in high-risk domain territory.

**Run 3:** `high` ✓
> Quote: "C-level decisions to optimize growth are based on revenue metrics and insights, as they are highly trusted facts on the evolution of the business"
> Verified: ✓ found in JD
> Reasoning: Errors in revenue metrics directly affect executive decisions, board-level reporting, and financial KPI reporting—all hallmarks of high-risk financial domain work.

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "Partner with sales operations and finance; dashboards and reports that translate complex revenue data into clear, actionable insights for sales, finance, and leadership"
> Verified: ✓ found in JD
> Reasoning: Named distinct teams are sales operations, finance, and sales; leadership is generic and does not count as a named function.

**Run 2:** `3` ✗
> Quote: "Partner with sales operations and finance; dashboards and reports...for sales, finance, and leadership"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role explicitly names three distinct partner functions: sales operations, finance, and sales.

**Run 3:** `2` ✗
> Quote: "Partner with sales operations and finance to understand changing business processes"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly listed for collaboration: sales operations and finance.

⚠ **Disagreement**: manual=`4` vs LLM majority=`3`

⚠ **LLM inconsistency**: runs gave ['3', '3', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Revenue metrics are sourced from multiple systems, have historic complexity due to acquisitions and system migrations, and data quality varies over time"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and pipelines are present with named systems (CRM, billing, ERP) and operational challenges, but no mention of multiple data sub-teams or large-scale platform governance suggests a growing but not yet mature function.

**Run 2:** `mid` ✓
> Quote: "Revenue metrics are sourced from multiple systems, have historic complexity due to acquisitions and system migrations, and data quality varies over time"
> Verified: ✓ found in JD
> Reasoning: The JD describes existing infrastructure (CRM, billing, ERP systems) with accumulated complexity and quality challenges, indicating an established but still-evolving data function, not a greenfield build.

**Run 3:** `mid` ✓
> Quote: "Revenue metrics are sourced from multiple systems, have historic complexity due to acquisitions and system migrations, and data quality varies over time"
> Verified: ✓ found in JD
> Reasoning: Multiple systems already exist (CRM, billing, ERP) with legacy complexity, but the role is to improve and standardize them rather than build from zero or manage an established platform at scale.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Reconcile revenue data across systems of record (CRM, billing, ERP) and ensure a single source of truth for financial KPIs"
> Verified: ✓ found in JD
> Reasoning: The phrase demonstrates domain-specific technical knowledge of system reconciliation challenges, named tools with precise context, and methodological understanding that only comes from someone who has done this work.

**Run 2:** `recruiter` ✗
> Quote: "Build, maintain, and improve the revenue data models that power executive-level reporting and board-ready metrics"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section uses generic action verbs ('build', 'maintain', 'design', 'deliver') without technical specificity, scale context, or methodology detail that would indicate hands-on authorship.

**Run 3:** `mixed` ✓
> Quote: "Reconcile revenue data across systems of record (CRM, billing, ERP) and ensure a single source of truth for financial KPIs"
> Verified: ✓ found in JD
> Reasoning: The JD shows domain-specific knowledge (system names, financial KPI context, subscription metrics) alongside generic action verbs and no technical depth about methodology or scale.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `finance` ✗
> Quote: "Build, maintain, and improve the revenue data models that power executive-level reporting and board-ready metrics"
> Verified: ✓ found in JD
> Reasoning: The primary responsibility is building models for executive and board reporting; while go-to-market planning is mentioned, the weighted emphasis is on C-level financial decision-making and board-level insights.

**Run 2:** `finance` ✗
> Quote: "Build, maintain, and improve the revenue data models that power executive-level reporting and board-ready metrics"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building revenue models for executive and board-level financial reporting; while the role touches go-to-market and sales, the core output serves finance and C-level decision-making.

**Run 3:** `mixed` ✓
> Quote: "A high-impact role at the intersection of data, finance, and go-to-market strategy"
> Verified: ✓ found in JD
> Reasoning: The role equally serves finance (board reporting, financial KPIs) and commercial/GTM audiences (sales operations, go-to-market planning), with balanced emphasis throughout responsibilities.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`finance`

⚠ **LLM inconsistency**: runs gave ['finance', 'finance', 'mixed']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Design and deliver dashboards and reports"
> Verified: ✓ found in JD
> Reasoning: The candidate has autonomy over the design and architecture of revenue analytics deliverables, but the direction and success criteria are set by stakeholder needs (executive reporting, GTM support), making this a blend of strategic ownership within a defined scope.

**Run 2:** `mixed` ✓
> Quote: "Build, maintain, and improve the revenue data models that power executive-level reporting and board-ready metrics; Partner with sales operations and finance to understand changing business processes and reflect them accurately in revenue analytics"
> Verified: ✓ found in JD
> Reasoning: The role contains both strategic elements ('build', 'design', 'develop' revenue frameworks) and execution elements ('partner with' others to reflect their processes, 'maintain').

**Run 3:** `execution` ✗
> Quote: "Partner with sales operations and finance to understand changing business processes and reflect them accurately in revenue analytics"
> Verified: ✓ found in JD
> Reasoning: The role receives direction from sales operations and finance on business process changes, then executes by building and delivering analytics to serve those needs.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or building data infrastructure for AI systems; revenue analytics here is traditional business intelligence work.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, AI tools, or GenAI infrastructure anywhere in the JD; the company focus is IT asset management, not AI products.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted work, or AI infrastructure requirements in the candidate skill expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Proactively improve data quality and integrity across revenue-related data pipelines"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a candidate responsibility with an ownership verb ('proactively improve'), not merely listed as a tool or requirement.

**Run 2:** `responsibility` ✗
> Quote: "Proactively improve data quality and integrity across revenue-related data pipelines"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility with the candidate accountable for proactive improvement, not merely as a tool listed in the tech stack.

**Run 3:** `responsibility` ✗
> Quote: "Proactively improve data quality and integrity across revenue-related data pipelines"
> Verified: ✓ found in JD
> Reasoning: Data quality improvement is framed as an owned responsibility with action verbs, though specific testing practices, frameworks, or observability tools are not named.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "highly trusted facts on the evolution of the business"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes trust and data quality to enable good decisions rather than to prevent regulatory or compliance failure, reflecting operational reliability concern without high-stakes risk framing.

**Run 2:** `moderate` ✗
> Quote: "C-level decisions to optimize growth are based on revenue metrics and insights, as they are highly trusted facts on the evolution of the business"
> Verified: ✓ found in JD
> Reasoning: The fear is operational—bad data undermining business decisions for growth and go-to-market—rather than regulatory or compliance failure, placing this at moderate loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Revenue metrics are sourced from multiple systems, have historic complexity due to acquisitions and system migrations, and data quality varies over time"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and trustworthiness of metrics are primary concerns (single source of truth, data quality proactive improvement), but there is no compliance, regulatory, or risk-avoidance language framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
