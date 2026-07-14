# Trace: 2026-06-27_mollie_analytics-engineer-revenue-operations

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer - Revenue Operations — Mollie

**URL:** https://jobs.ashbyhq.com/mollie/06baf630-1c65-4b77-b7fa-35c65b43447d
**Location:** Amsterdam; Milan
**Date Posted:** 2026-06-27

---

Analytics Engineer - Revenue Operations
Location
Amsterdam; Milan

Employment Type
Full time

Location Type
Hybrid

Department
Engineering

Overview
Application
Analytics Engineer II - Revenue Operations

The role:

Job title: Analytics Engineer II

Location: Amsterdam or Milan

Remote/ Hybrid: Hybrid

Build with us

Since 2004, we've had one clear goal: to make payments and money management effortless for every business in Europe.

Today, more than 250,000 companies use Mollie to get paid, manage money and grow with products designed to be simple, scalable, and dependable.

With 950+ Mollies across 14+ locations, we care deeply about autonomy and craft. So we work in small teams, with real ownership, and we trust you to make the right decisions.

We're building for the long term, so we provide the tools you need, processes you can rely on, and a balanced work environment to help you do work you're proud of.

Sound like your kind of place? Let's build together.

Your impact

Revenue Operations at Mollie serves around 200 internal stakeholders across sales, customer success, marketing, and partnerships. The analytics work done here feeds directly into how commercial teams make decisions, assign leads, and manage performance. When the data is right, the whole commercial engine runs better.

This role sits inside the GTM Enablement team, a small group focused on making Mollie's go-to-market motion faster and smarter. You will be the analytics engineering support for the team's projects. At the same time you will own reporting of our GTM domains, such as Merchant Sales and CSM & Customer Growth. That means the work you produce is immediately visible and measurable within the business.

The domain is actively growing and maturing. RevOps has recently adopted a full domain model and is being rebuilt as a proper product and engineering function. There is real space here to shape how analytics is delivered to commercial stakeholders, not just execute on requests. Over time, the expectation is that the team shifts from reactive to proactive, and this role is central to making that happen.

What you'll ship

Own and maintain core dashboards for GTM domains, including CSM, and Merchant Sales, serving as the source of truth for commercial stakeholders

Own and maintain HubSpot data models

Define success metrics, set up data tracking and reporting for GTM Enablement team projects

Reduce dashboard sprawl by establishing centralised, standardised reporting in Omni

Deliver ad hoc analysis and impact scoping to support decision-making

What you'll bring

Strong SQL skills and hands-on experience building dashboards and reports in BI tools such as Looker, Tableau, or similar

Solid data visualisation skills with the ability to translate complex data into clear, actionable outputs for commercial audiences

A working understanding of data modelling concepts, with the ability to apply basic engineering best practices in your work

Experience managing stakeholders in a commercial or sales-facing environment, including the ability to prioritise, and communicate clearly with both technical and non-technical audiences

Around four or more years of experience in an analytics engineering or closely related role, with a proven level of independence to scope and drive your own work

Comfort working in a fast-moving, commercially oriented environment where priorities shift and ambiguity is part of the job


Grow your way

At Mollie, growth is personal. We believe everyone should have the chance to develop their skills, explore new challenges and shape their career on their own terms.

You'll get regular feedback and performance reviews to support your development, with fair and transparent salary reviews along the way. Many Mollies move into new roles or take on…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | velocity | rigour | 33% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 4 | 4 | 4 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | mixed | mixed | 33% | ✓ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | mixed | strategic | strategic | strategic | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Reduce dashboard sprawl by establishing centralised, standardised reporting in Omni"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasise standardisation, data models, and systematic improvement rather than speed of delivery.

**Run 2:** `velocity` ✗
> Quote: "Comfort working in a fast-moving, commercially oriented environment where priorities shift and ambiguity is part of the job"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes speed and commercial pace as core working conditions with explicit velocity language ('fast-moving', 'priorities shift', 'ambiguity'), while rigour signals like data models and standardization are outputs rather than core methodological expectations.

**Run 3:** `rigour` ✓
> Quote: "Reduce dashboard sprawl by establishing centralised, standardised reporting in Omni"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize standardization, governance, and establishing best practices rather than shipping speed or iteration pace.

⚠ **LLM inconsistency**: runs gave ['rigour', 'velocity', 'rigour']

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Revenue Operations at Mollie serves around 200 internal stakeholders across sales, customer success, marketing, and partnerships. The analytics work done here feeds directly into how commercial teams make decisions, assign leads, and manage performance."
> Verified: ✓ found in JD
> Reasoning: While Mollie is a fintech company, this role supports commercial operations decisions without explicit financial reporting, compliance, or regulatory responsibilities, placing it at moderate risk.

**Run 2:** `moderate` ✓
> Quote: "The analytics work done here feeds directly into how commercial teams make decisions, assign leads, and manage performance"
> Verified: ✓ found in JD
> Reasoning: Data errors affect commercial decision-making (GTM, sales, customer success) without directly impacting financial reporting, regulatory compliance, or public-facing products, placing this in the moderate risk category.

**Run 3:** `moderate` ✓
> Quote: "The analytics work done here feeds directly into how commercial teams make decisions, assign leads, and manage performance."
> Verified: ✓ found in JD
> Reasoning: Data errors affect business and commercial decisions without regulatory, compliance, or direct financial reporting consequences typical of high-risk domains.

### collaboration_width
**Manual:** `4`

**Run 1:** `4` ✓
> Quote: "sales; customer success; marketing; partnerships"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves four distinct named functions: sales, customer success, marketing, and partnerships.

**Run 2:** `4` ✓
> Quote: "sales, customer success, marketing, and partnerships"
> Verified: ✓ found in JD
> Reasoning: Four distinct named partner functions are explicitly listed as the primary stakeholders served by Revenue Operations.

**Run 3:** `4` ✓
> Quote: "sales; customer success; marketing; partnerships"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names four distinct functions as primary stakeholders.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "RevOps has recently adopted a full domain model and is being rebuilt as a proper product and engineering function. The domain is actively growing and maturing."
> Verified: ⚠ NOT found verbatim
> Reasoning: The team has existing infrastructure (HubSpot models, dashboards) being formalised and expanded, with space to shape future direction, indicating mid-stage maturity.

**Run 2:** `mid` ✓
> Quote: "RevOps has recently adopted a full domain model and is being rebuilt as a proper product and engineering function"
> Verified: ✓ found in JD
> Reasoning: The function exists and has been formally rebuilt with named tools and domain models, but is still actively growing and shifting from reactive to proactive, indicating mid-stage maturity.

**Run 3:** `mid` ✓
> Quote: "RevOps has recently adopted a full domain model and is being rebuilt as a proper product and engineering function."
> Verified: ✓ found in JD
> Reasoning: The team has existing infrastructure and tooling but is actively rebuilding and maturing, indicating mid-stage growth rather than early establishment or full maturity.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Reduce dashboard sprawl by establishing centralised, standardised reporting in Omni"
> Verified: ✓ found in JD
> Reasoning: The responsibility identifies a specific operational problem (dashboard sprawl) and company-specific solution (Omni), requiring insider domain knowledge rather than generic boilerplate.

**Run 2:** `mixed` ✓
> Quote: "Own and maintain HubSpot data models"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (HubSpot models, Omni, named GTM domains like CSM and Merchant Sales) appears alongside generic action verbs ('deliver', 'support'), suggesting dual authorship.

**Run 3:** `mixed` ✓
> Quote: "Own and maintain HubSpot data models"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific technical problems and named tools with context, mixed with generic boilerplate language in the requirements section.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Revenue Operations at Mollie serves around 200 internal stakeholders across sales, customer success, marketing, and partnerships."
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves commercial functions (sales, customer success, marketing) to support GTM decisions and performance management.

**Run 2:** `commercial` ✓
> Quote: "The analytics work done here feeds directly into how commercial teams make decisions, assign leads, and manage performance"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities center on serving GTM, sales, customer success, and commercial teams making go-to-market decisions, with revenue operations explicitly in the role title.

**Run 3:** `commercial` ✓
> Quote: "Revenue Operations at Mollie serves around 200 internal stakeholders across sales, customer success, marketing, and partnerships."
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves GTM-related functions in support of commercial operations, revenue decision-making, and lead management.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "There is real space here to shape how analytics is delivered to commercial stakeholders, not just execute on requests. Over time, the expectation is that the team shifts from reactive to proactive, and this role is central to making that happen."
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed as shaping analytics delivery and driving the team from reactive to proactive, which are core strategic responsibilities.

**Run 2:** `strategic` ✗
> Quote: "There is real space here to shape how analytics is delivered to commercial stakeholders, not just execute on requests"
> Verified: ✓ found in JD
> Reasoning: The role is framed around defining direction ('shape', 'own', 'define success metrics') and shifting the function from reactive to proactive, beyond executing assigned work.

**Run 3:** `strategic` ✗
> Quote: "There is real space here to shape how analytics is delivered to commercial stakeholders, not just execute on requests."
> Verified: ✓ found in JD
> Reasoning: The role is framed as setting direction and defining how analytics is delivered, not executing against pre-defined scope.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions company-level AI philosophy but makes no specific demands on the candidate's AI skills, tool usage, or for building AI infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company philosophy mentions AI, the JD contains no specific expectations for the candidate to use AI tools, build AI-ready infrastructure, or demonstrate AI skills.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The AI section describes company philosophy and culture, not expected candidate skills; no signals like AI-assisted coding, tool usage, or AI infrastructure work appear in role expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: There is no mention of testing frameworks, data quality, data contracts, observability, or related practices in the responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal appears in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD does not mention testing frameworks, data contracts, data quality tools, or observability practices as part of the role's responsibilities.

**Run 3:** `absent` ✗
> Quote: "No testing practice mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no explicit mentions of testing frameworks, data quality ownership, data contracts, or observability practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around delivering analytics for commercial operations without explicit risk, compliance, or trust-building language.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery capability and commercial impact rather than risk prevention, compliance, or safeguarding stakeholder trust.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The role is framed in terms of capability and delivery to commercial stakeholders, not in terms of preventing bad outcomes or managing risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
