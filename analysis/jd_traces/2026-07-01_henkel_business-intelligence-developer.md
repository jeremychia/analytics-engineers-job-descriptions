# Trace: 2026-07-01_henkel_business-intelligence-developer

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Developer — Henkel

**URL:** https://henkel.csod.com/ux/ats/careersite/1/home?c=henkel&lang=en-US#/requisition/86014&source=LinkedIn
**Location:** Bratislava, Slovakia (Hybrid)
**Date Posted:** 2026-07-01
**Salary:** 2,000–2,600 EUR

---

Business Intelligence Developer at Henkel

Locations: Bratislava, Slovakia
Job ID: 26098076
Posted: 6/30/2026

About this Position

What you'll do:
- Play a key role in development of advanced analytical tools in Power BI
- Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department
- Utilise and combine various data sources, master understanding of the data and underlying financial processes
- Identify opportunities to streamline reporting activities
- Manage your projects and collaborate with worldwide Henkel financial and technical community

What makes you a good fit:
- Strong analytical thinking and ability to translate complex business requirements into Business Intelligence solutions
- Advanced knowledge of Power BI, DAX, Power Query M formula language and MS Excel
- Experience and interest in SQL or Databricks is welcome
- Focus on detail, precision and working transparently with managing priorities independently
- Interest in combining BI acumen with finance & business understanding
- Curiosity and growth mindset, willingness to actively develop and apply new capabilities in practice

Some perks of joining Henkel:
- Flexible work scheme with flexible hours, hybrid work model and up to 30 days per year for remote work abroad
- Diverse national and international growth opportunities
- Globally applicable well-being standards, including health and preventive care programs
- Gender-neutral parental leave for a minimum of 8 weeks
- Employee Share Plan with voluntary investment and Henkel matching shares
- 13th salary, incentives
- Cafeteria benefit system, Multisport card
- Henkel shop and Henkel nursery school
- Extra paid days off for special events, referral and relocation bonus
- Salary: €2,000 – €2,600 gross per month

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 3 | 1 | 3 | 33% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | hiring_manager | mixed | mixed | 33% | ✓ |
| stakeholder_orientation | finance | product | product | product | 100% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Focus on detail, precision and working transparently with managing priorities independently"
> Verified: ✓ found in JD
> Reasoning: Explicit emphasis on detail and precision as key qualities reflects a rigour-oriented approach rather than velocity.

**Run 2:** `rigour` ✓
> Quote: "Focus on detail, precision and working transparently with managing priorities independently"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes 'detail' and 'precision' as core personal attributes, reflecting rigour orientation rather than speed or velocity.

**Run 3:** `rigour` ✓
> Quote: "Focus on detail, precision and working transparently with managing priorities independently"
> Verified: ✓ found in JD
> Reasoning: The responsibilities and qualifications emphasize precision, detail, and mastery of complex financial processes with no mention of speed, iteration, or shipping velocity.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: Financial KPIs for business decisions present moderate risk, lacking explicit regulatory or compliance language that would indicate high risk.

**Run 2:** `moderate` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: Financial KPI work for internal departmental management carries moderate risk to business decisions without regulatory or audit-level financial reporting governance.

**Run 3:** `moderate` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: The role involves financial reporting but at the operational/management level for a product department within a consumer goods company, not regulatory compliance or board-level P&L reporting.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `3` ✗
> Quote: "Product & Technology management department; financial and technical community"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams/functions identified: Product & Technology, Financial community, and Technical community.

**Run 2:** `1` ✗
> Quote: "Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: Only the Product & Technology management department is explicitly named as a collaboration partner; 'financial and technical community' is too generic to count as distinct named teams.

**Run 3:** `3` ✗
> Quote: "Product & Technology management department; financial and technical community"
> Verified: ✓ found in JD
> Reasoning: The JD names three distinct partner functions: Product (from 'Product & Technology management'), Finance (from 'financial community'), and Engineering/Technical (from 'technical community').

⚠ **Disagreement**: manual=`2` vs LLM majority=`3`

⚠ **LLM inconsistency**: runs gave ['3', '1', '3']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Play a key role in development of advanced analytical tools in Power BI"
> Verified: ✓ found in JD
> Reasoning: Established BI infrastructure (Power BI) is already in place, and the person plays a key role in development rather than building from zero.

**Run 2:** `mid` ✗
> Quote: "Play a key role in development of advanced analytical tools in Power BI"
> Verified: ✓ found in JD
> Reasoning: Named tool (Power BI) is actively being developed in responsibilities, indicating existing infrastructure at a mid-stage company developing and improving analytics capabilities.

**Run 3:** `mid` ✗
> Quote: "Utilise and combine various data sources, master understanding of the data and underlying financial processes"
> Verified: ✓ found in JD
> Reasoning: The existence of multiple integrated data sources and established financial processes indicates a team beyond early greenfield stage but without signals of large-scale specialization or multiple sub-teams.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Play a key role in development of advanced analytical tools in Power BI"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (Power BI for financial KPIs) demonstrates knowledge of the actual work that only someone with hands-on BI experience would possess.

**Run 2:** `mixed` ✓
> Quote: "Utilise and combine various data sources, master understanding of the data and underlying financial processes"
> Verified: ✓ found in JD
> Reasoning: Specific tools (Power BI, DAX, Power Query) and domain context (financial processes) suggest hiring manager input, but responsibilities use boilerplate verbs typical of recruiter writing.

**Run 3:** `mixed` ✓
> Quote: "Advanced knowledge of Power BI, DAX, Power Query M formula language and MS Excel"
> Verified: ✓ found in JD
> Reasoning: Technical precision around Power BI, DAX, and Power Query M shows domain knowledge, but generic phrases like 'collaborate with worldwide Henkel financial and technical community' and 'translate complex business requirements' are recruiter boilerplate.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `product` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: The primary audience is explicitly named as Product & Technology management, which is a product function.

**Run 2:** `product` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: Primary audience is the Product & Technology management department, a product/operational function, rather than finance or commercial teams.

**Run 3:** `product` ✗
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: The primary audience is the Product & Technology management department, making product management the principal stakeholder, even though the insights relate to financial metrics.

⚠ **Disagreement**: manual=`finance` vs LLM majority=`product`

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities frame the role as delivering insights and solutions to defined stakeholders, not setting overall analytics strategy.

**Run 2:** `execution` ✓
> Quote: "Provide overviews and analytical insights on various financial KPIs for the Product & Technology management department"
> Verified: ✓ found in JD
> Reasoning: Primary verb 'provide' reflects execution of requirements set by the Product & Technology department rather than strategic direction-setting.

**Run 3:** `execution` ✓
> Quote: "Manage your projects and collaborate with worldwide Henkel financial and technical community"
> Verified: ✓ found in JD
> Reasoning: While the role has project management autonomy, the overall framing is delivering Power BI tools and financial insights within a defined scope, not setting analytics strategy.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI, machine learning, coding assistants, or AI-enabled data infrastructure in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, agentic workflows, or AI-enabled data infrastructure; vague 'growth mindset' language does not constitute an AI skill expectation.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding agents, AI-assisted development, or AI data infrastructure as expected candidate skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No mention of testing, data quality frameworks, data contracts, or observability practices anywhere in the JD.

**Run 2:** `absent` ✗
> Quote: "No testing, data quality frameworks, or data contracts mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: Responsibilities focus on development, insights, and data combination with no mention of testing practices, data quality ownership, or observability frameworks.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD makes no mention of testing practices, data quality frameworks, data contracts, or observability as part of the role's responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes delivery and capability development rather than framing the role around preventing bad outcomes or managing risk.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: JD emphasizes delivery and capability building with no mention of compliance, regulatory risk, reliability SLOs, or stakeholder trust as core concerns.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in terms of analytical capability and work style (precision, detail) rather than preventing bad outcomes, regulatory risk, or stakeholder trust.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
