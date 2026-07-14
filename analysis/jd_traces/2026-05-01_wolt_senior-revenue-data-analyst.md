# Trace: 2026-05-01_wolt_senior-revenue-data-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Senior Revenue Data Analyst — Wolt

**URL:** https://job-boards.greenhouse.io/wolt/jobs/7735284
**Location:** Berlin, Germany; Budapest, Hungary

---

## Key Responsibilities

- Support the continued implementation of our revenue subledger to scale our revenue accounting to the next level
- Conduct accounting analysis, measurement, and reconciliations of major revenue accounts
- Prepare journal entries, balance sheet reconciliations, and flux analysis during month-end close
- Collaborate with Product, Analytics, Engineering, and Accounting teams on revenue data requirements
- Apply problem-solving to complex, ambiguous challenges
- Leverage AI tools like Claude Code and Cursor to accelerate analysis and automate reconciliation tasks
- Identify and resolve data issues and reconciliation gaps
- Contribute to process improvement and automation across revenue operations
- Prepare materials for external and internal audit reviews

---

## Required Qualifications

- Degree in Accounting, Business, Data Science, or related field
- 5-7 years of experience in revenue accounting/finance, data analytics, and/or related field
- Cross-functional collaboration skills with Engineering, Product, and Finance teams
- Strong knowledge of IFRS 15/accounting principles required
- Intermediate to advanced SQL proficiency with large transactional datasets
- Proven active usage of AI tools in daily work with specific examples
- EU work eligibility

---

## Preferred / Bonus Skills

- US GAAP and SOX knowledge
- Experience with NetSuite, Snowflake, Looker, and dbt
- Background in gig economy or marketplace companies
- English fluency as working language

---

## Benefits

Not specified in posting

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 5 | 5 | 4 | 5 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Conduct accounting analysis, measurement, and reconciliations of major revenue accounts"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize accounting accuracy, reconciliation, and audit review as core expectations, with no language prioritizing speed or iteration.

**Run 2:** `rigour` ✓
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: The responsibilities center on accounting accuracy, reconciliation, and audit compliance rather than speed or iteration, with audit review preparation as an explicit responsibility.

**Run 3:** `rigour` ✓
> Quote: "Conduct accounting analysis, measurement, and reconciliations of major revenue accounts"
> Verified: ✓ found in JD
> Reasoning: Emphasis on reconciliations, measurement accuracy, and audit compliance throughout indicates rigour-focused orientation.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Revenue accounting errors directly affect financial reporting, regulatory compliance, and stakeholder trust, placing this role in the highest risk category.

**Run 2:** `high` ✓
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Revenue accounting errors directly impact financial reporting and regulatory compliance, with explicit audit review responsibility indicating regulatory risk.

**Run 3:** `high` ✓
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Direct audit involvement and revenue accounting responsibility signal high consequence for data errors in regulatory and financial reporting contexts.

### collaboration_width
**Manual:** `5`

**Run 1:** `5` ✓
> Quote: "Product; Analytics; Engineering; Accounting; Finance"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names five distinct collaborative functions: Product, Analytics, Engineering, and Accounting in responsibilities, and Finance in requirements.

**Run 2:** `4` ✗
> Quote: "Product; Analytics; Engineering; Accounting"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names four distinct partner teams in the requirement to collaborate with them on revenue data requirements.

**Run 3:** `5` ✓
> Quote: "Product; Analytics; Engineering; Accounting; Finance"
> Verified: ✓ found in JD
> Reasoning: Five distinct named partner teams identified across responsibilities and qualifications sections.

⚠ **LLM inconsistency**: runs gave ['5', '4', '5']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Support the continued implementation of our revenue subledger to scale our revenue accounting to the next level"
> Verified: ✓ found in JD
> Reasoning: The language describes scaling and extending an existing revenue subledger system, indicating a mid-stage data function with established infrastructure being improved.

**Run 2:** `mid` ✓
> Quote: "Support the continued implementation of our revenue subledger to scale our revenue accounting to the next level"
> Verified: ✓ found in JD
> Reasoning: The language indicates scaling and improving existing infrastructure rather than building from zero or operating at established scale.

**Run 3:** `mid` ✓
> Quote: "Support the continued implementation of our revenue subledger to scale our revenue accounting to the next level"
> Verified: ✓ found in JD
> Reasoning: Reference to scaling existing revenue accounting infrastructure and continuing implementation indicates an established function growing rather than a greenfield setup.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Prepare journal entries, balance sheet reconciliations, and flux analysis during month-end close"
> Verified: ✓ found in JD
> Reasoning: The JD contains technical specificity (flux analysis, revenue subledger, Claude Code/Cursor usage context) alongside generic collaboration language, indicating mixed authorship.

**Run 2:** `mixed` ✓
> Quote: "Prepare journal entries, balance sheet reconciliations, and flux analysis during month-end close"
> Verified: ✓ found in JD
> Reasoning: Mix of specific accounting methodology (flux analysis, month-end close cycles) alongside generic collaboration and problem-solving language suggests both domain expertise and template-based writing.

**Run 3:** `mixed` ✓
> Quote: "Conduct accounting analysis, measurement, and reconciliations of major revenue accounts; Prepare journal entries, balance sheet reconciliations, and flux analysis during month-end close"
> Verified: ✓ found in JD
> Reasoning: Specific accounting methodologies and standards references indicate hiring manager input, while some generic collaboration verbs suggest recruiter additions.

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Conduct accounting analysis, measurement, and reconciliations of major revenue accounts"
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally about ensuring accurate revenue accounting, supporting journal entries, reconciliations, and audit preparation—all core Finance/FP&A responsibilities.

**Run 2:** `finance` ✓
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves finance and audit functions, with audit review preparation and accounting-focused responsibilities as the core deliverables.

**Run 3:** `finance` ✓
> Quote: "Conduct accounting analysis, measurement, and reconciliations of major revenue accounts"
> Verified: ✓ found in JD
> Reasoning: Core responsibility is revenue accounting and financial measurement, with audit review as a primary stakeholder need.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Support the continued implementation of our revenue subledger to scale our revenue accounting to the next level"
> Verified: ✓ found in JD
> Reasoning: The role is framed as supporting an existing implementation rather than defining or architecting the revenue accounting strategy.

**Run 2:** `execution` ✓
> Quote: "Support the continued implementation of our revenue subledger"
> Verified: ✓ found in JD
> Reasoning: The use of 'support' signals executing direction set by others, with no 'define', 'own', or 'drive' language indicating strategic autonomy.

**Run 3:** `execution` ✓
> Quote: "Support the continued implementation of our revenue subledger"
> Verified: ✓ found in JD
> Reasoning: Opening responsibility uses 'support' verb and frames the role as contributing to an existing accounting infrastructure rather than defining direction.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Leverage AI tools like Claude Code and Cursor to accelerate analysis and automate reconciliation tasks"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools to accelerate their own analysis and reconciliation work.

**Run 2:** `ai_user` ✗
> Quote: "Leverage AI tools like Claude Code and Cursor to accelerate analysis and automate reconciliation tasks"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding assistants (Claude Code, Cursor) as personal productivity tools to speed their own analysis work.

**Run 3:** `ai_user` ✗
> Quote: "Leverage AI tools like Claude Code and Cursor to accelerate analysis and automate reconciliation tasks"
> Verified: ✓ found in JD
> Reasoning: Candidate is explicitly expected to use specific AI coding tools to enhance their own analysis and automation work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Identify and resolve data issues and reconciliation gaps"
> Verified: ✓ found in JD
> Reasoning: Data quality concerns exist but are framed reactively (identifying and resolving issues) rather than as an owned testing framework or data quality practice.

**Run 2:** `absent` ✗
> Quote: "Identify and resolve data issues and reconciliation gaps"
> Verified: ✓ found in JD
> Reasoning: While data quality is implied through reconciliation work, there is no mention of testing frameworks, data contracts, or ownership of testing practices.

**Run 3:** `absent` ✗
> Quote: "Identify and resolve data issues and reconciliation gaps"
> Verified: ✓ found in JD
> Reasoning: While data accuracy matters operationally through reconciliation, there is no framing of testing framework ownership, data quality standards, or observability practice responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Audit and compliance are explicit concerns, but the role is framed primarily as implementing and scaling the system, making compliance secondary to delivery.

**Run 2:** `high` ✗
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Audit compliance, regulatory (IFRS 15), and reconciliation language throughout indicates the core fear is bad data reaching auditors and regulators rather than operational delivery concerns.

**Run 3:** `moderate` ✗
> Quote: "Prepare materials for external and internal audit reviews"
> Verified: ✓ found in JD
> Reasoning: Audit preparation and IFRS 15 compliance are explicit requirements, but the role's primary framing emphasizes scaling and implementation rather than preventing compliance failures.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']
