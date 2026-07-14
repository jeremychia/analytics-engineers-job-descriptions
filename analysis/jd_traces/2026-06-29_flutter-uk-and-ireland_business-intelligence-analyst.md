# Trace: 2026-06-29_flutter-uk-and-ireland_business-intelligence-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Analyst — Flutter UK & Ireland

**URL:** https://careers.flutteruki.com/search-jobs/jr134770/business-intelligence-analyst/?source=LinkedIn
**Location:** Gibraltar
**Date Posted:** 2026-06-29

---

Business Intelligence Analyst

Company: Flutter UK & Ireland
Location: Gibraltar

About the role:
This role involves analyzing commercial performance data for the Gaming division's Performance and Business Intelligence team. The analyst will collaborate with Commercial, Marketing, and Acquisition teams to uncover insights from large datasets.

Key Responsibilities:
- Identifying key trends and helping form actionable insight on issues, opportunities and performance drivers using large datasets
- Conduct analysis using SQL, Excel, and data visualization tools to support Commercial, Marketing, and Acquisition teams
- Provide analytical support to our Acquisition team, including various ad-hoc performance analysis and dashboard building
- Analyze revenue impacts of product and process changes
- Collaborate with business stakeholders to identify performance trends
- Develop understanding of reporting suite and identify gaps
- Present findings with appropriate detail and effective communication
- Contribute to projects focusing on the revenue impacts of changes to products and processes

Required Skills:
- SQL proficiency
- Excel expertise
- Data analysis capabilities
- Presentation skills

Desirable Skills:
- Looker
- R programming
- Statistical modeling

About Flutter UK & Ireland:
Flutter UK & Ireland operates several major gaming brands including Sky Betting & Gaming, Paddy Power, Betfair and tombola. The organization emphasizes four core values: Customer First Always, Change The Game, Win Together, and Free To Be Me.

Benefits:
- Competitive pension scheme
- Private medical cover
- Life assurance
- Yearly wellbeing fund allowance

Flutter emphasizes inclusive hiring, stating candidates don't have to meet all the requirements listed to apply and accommodations are available upon request.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: The emphasis on revenue impact analysis and financial precision signals rigour-oriented work where accuracy and measurement quality matter; no velocity signals (fast-paced, iteration, shipping) appear.

**Run 2:** `rigour` ✓
> Quote: "Develop understanding of reporting suite and identify gaps"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality awareness through reporting suite understanding and gap identification, with no velocity signals about speed or iteration pace.

**Run 3:** `rigour` ✓
> Quote: "Present findings with appropriate detail and effective communication"
> Verified: ✓ found in JD
> Reasoning: The JD has no velocity language and emphasizes analytical quality through professional standards, though rigour signals are implicit rather than explicit.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: Gaming revenue analysis affects business decisions but lacks regulatory compliance, audit, or fiduciary language; errors have business consequences but not regulatory exposure.

**Run 2:** `moderate` ✗
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: Gaming sector is regulated but this role is described as commercial analytics without compliance or financial reporting framing, making errors impactful to business decisions but not immediately regulatory or compliance-threatening.

**Run 3:** `moderate` ✗
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: While the gaming sector is regulated, the JD frames the role around commercial performance and revenue analysis for business decisions rather than regulatory compliance.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "Commercial, Marketing, and Acquisition teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions explicitly listed: Commercial, Marketing, and Acquisition.

**Run 2:** `3` ✓
> Quote: "Commercial, Marketing, and Acquisition teams"
> Verified: ✓ found in JD
> Reasoning: Three explicitly named teams are identified as collaboration partners in the responsibilities.

**Run 3:** `3` ✓
> Quote: "Commercial; Marketing; Acquisition teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly listed as collaboration partners: Commercial, Marketing, and Acquisition.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Develop understanding of reporting suite and identify gaps"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and reporting suite are established; the role supports and extends them rather than building from zero or operating at scaled specialisation.

**Run 2:** `mid` ✓
> Quote: "Develop understanding of reporting suite and identify gaps"
> Verified: ✓ found in JD
> Reasoning: The JD references existing reporting infrastructure and named tools while acknowledging gaps to improve, indicating an established but growing data function.

**Run 3:** `mid` ✓
> Quote: "Develop understanding of reporting suite and identify gaps"
> Verified: ✓ found in JD
> Reasoning: The reference to an existing reporting suite with identifiable gaps indicates established infrastructure beyond early-stage, but the hiring of a single analyst role suggests not yet mature.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Conduct analysis using SQL, Excel, and data visualization tools to support Commercial, Marketing, and Acquisition teams"
> Verified: ✓ found in JD
> Reasoning: Tools and responsibilities are listed without context, scale, or methodology specificity; action verbs are generic boilerplate that apply to any BI analyst role.

**Run 2:** `mixed` ✗
> Quote: "Develop understanding of reporting suite and identify gaps; Provide analytical support to our Acquisition team, including various ad-hoc performance analysis and dashboard building"
> Verified: ✓ found in JD
> Reasoning: Some company-specific technical context (reporting suite, ad-hoc analysis, dashboard building) is mixed with substantial boilerplate (collaborate with stakeholders, identify trends, analytical support).

**Run 3:** `mixed` ✗
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: The JD mixes hiring_manager specificity (multiple mentions of revenue impact analysis, acquisition team support) with recruiter boilerplate (generic collaboration and presentation language).

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Provide analytical support to our Acquisition team, including various ad-hoc performance analysis and dashboard building"
> Verified: ✓ found in JD
> Reasoning: The role primarily supports Commercial, Marketing, and Acquisition teams—all commercial/GTM functions—making revenue and acquisition performance the core audience.

**Run 2:** `commercial` ✓
> Quote: "collaborate with Commercial, Marketing, and Acquisition teams to uncover insights from large datasets"
> Verified: ✓ found in JD
> Reasoning: The primary audience is commercial revenue and GTM functions: Commercial teams, Marketing, and customer Acquisition.

**Run 3:** `commercial` ✓
> Quote: "Collaborate with Commercial, Marketing, and Acquisition teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves commercial, marketing, and acquisition functions with emphasis on supporting revenue-related decisions.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Provide analytical support to our Acquisition team"
> Verified: ✓ found in JD
> Reasoning: All responsibilities use support/delivery verbs (conduct, provide, analyze, contribute) with no strategic ownership language (define, establish, own, shape, drive).

**Run 2:** `execution` ✓
> Quote: "Provide analytical support to our Acquisition team, including various ad-hoc performance analysis and dashboard building"
> Verified: ✓ found in JD
> Reasoning: The role is framed with support and execution verbs (conduct, provide, contribute) without strategic ownership, direction-setting, or defining language.

**Run 3:** `execution` ✓
> Quote: "Provide analytical support to our Acquisition team"
> Verified: ✓ found in JD
> Reasoning: All verbs are execution-oriented with no strategic framing around defining direction or shaping analytics delivery.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted workflows, or AI infrastructure expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, or AI infrastructure in the candidate skills or role responsibilities.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, or AI infrastructure for the candidate to build or use.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal present in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: No mention of testing frameworks, data quality, observability, data contracts, or any quality assurance responsibility.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing, data contracts, observability, or data quality frameworks are not mentioned anywhere in the responsibilities or requirements sections.

**Run 3:** `absent` ✗
> Quote: "Provide analytical support to our Acquisition team, including various ad-hoc performance analysis and dashboard building"
> Verified: ✓ found in JD
> Reasoning: No mention of testing frameworks, data quality ownership, data contracts, or observability; focus is on analytical delivery.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: JD is framed entirely around delivery and capability—analyzing trends, supporting teams, revenue analysis—with no risk, compliance, reliability, or data trustworthiness language.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in analytical delivery and capability terms without risk, compliance, reliability, or stakeholder trust concerns.

**Run 3:** `none` ✗
> Quote: "Analyze revenue impacts of product and process changes"
> Verified: ✓ found in JD
> Reasoning: The JD is framed in analytical delivery and capability terms without explicit risk, compliance, reliability, or trust language that would indicate loss-aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
