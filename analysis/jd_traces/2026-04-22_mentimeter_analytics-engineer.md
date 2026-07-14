# Trace: 2026-04-22_mentimeter_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Mentimeter

**URL:** https://job-boards.eu.greenhouse.io/mentimeter/jobs/4839752101?gh_src=3d5665c2teu

**Location:** Stockholm, Sweden (Onsite/Hybrid)

**Visa Sponsorship:** Not available

---

## Key Responsibilities

- Design, own, and evolve core data models and the modelling architecture
- Partner with business and technical stakeholders from problem framing to shipped artefacts
- Build standards, documentation, and data catalogs for the organization
- Contribute strategic input around data modeling, BI tooling, and AI-assisted analytics
- Help the organization interpret data

---

## Required Qualifications

- Roughly 4–7 years of relevant hands-on experience as an Analytics Engineer, Data Analyst, Data Scientist, BI Analyst, or similar role
- Strong SQL proficiency and sound data modeling judgment
- Experience collaborating and translating ambiguous stakeholder needs to clear, maintainable models
- Business acumen covering sales, marketing, and product analytics
- Experience with BI tools and development of BI features
- Git proficiency
- Communication in English with both technical and non-technical audiences
- Experience working with GDPR-sensitive data

---

## Preferred / Bonus Skills

- Hands-on dbt experience
- Experience with a semantic layer or metrics layer
- Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)
- Agile environment experience

---

## Benefits

- Competitive compensation and benefits package, including pension contributions
- Professional development access
- Flexible work-life balance policies

---

## Analysis

### Layer A — Surface Extraction

| Field | Value |
|-------|-------|
| **Company slug** | mentimeter |
| **Job title slug** | analytics-engineer |
| **Experience range** | 4–7 years |
| **Team maturity signal** | Data team maturing; emphasis on standards, architecture, documentation |
| **Compliance context** | GDPR-sensitive data handling required |

---

#
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 3 | 0 | 0 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize establishing standards, documentation, and catalogs as core deliverables, with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building governance structures and documentation as core work, with no velocity-oriented language about shipping fast or iteration speed.

**Run 3:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities explicitly prioritize building governance infrastructure (standards, documentation, catalogs) over delivery speed, indicating a rigour orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: GDPR-sensitive data handling introduces compliance considerations, but the role is not framed around preventing regulatory violations.

**Run 2:** `moderate` ✓
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: While GDPR compliance signals regulatory awareness, the role is not framed around financial reporting, audit, or regulatory as primary concerns, placing it in moderate-risk territory.

**Run 3:** `moderate` ✓
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: The JD requires GDPR-sensitive data handling, indicating compliance concerns, but lacks financial or regulatory reporting language, placing this as moderate rather than high risk.

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "sales; marketing; product analytics"
> Verified: ✓ found in JD
> Reasoning: Sales, Marketing, and Product are explicitly named as business domains in the required qualifications section.

**Run 2:** `0` ✗
> Quote: "Partner with business and technical stakeholders from problem framing to shipped artefacts"
> Verified: ✓ found in JD
> Reasoning: No distinctly named functions (Finance, Product, Engineering, etc.) are explicitly identified; generic stakeholder language does not count toward collaboration width.

**Run 3:** `0` ✗
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: No named teams are explicitly identified as collaboration partners in the responsibilities; generic stakeholder language does not meet the threshold for counting.

⚠ **Disagreement**: manual=`4` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['3', '0', '0']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The emphasis on evolving existing models and formalizing standards suggests an established data function scaling beyond its initial phase.

**Run 2:** `mid` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building standards and catalogs indicates a team transitioning from ad-hoc analytics to organized infrastructure, without the greenfield signals of early stage.

**Run 3:** `mid` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The focus on standardizing and formalizing an existing data function suggests a mid-stage team that has produced infrastructure but needs to scale and govern it.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture; Partner with business and technical stakeholders from problem framing to shipped artefacts"
> Verified: ✓ found in JD
> Reasoning: Specific architectural responsibilities demonstrate hiring-manager input, while stakeholder partnership language uses generic recruiter phrasing.

**Run 2:** `mixed` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The JD contains both generic boilerplate (partnering with stakeholders) and specific technical context about AI tool usage discipline and semantic layers, mixing recruiter and hiring-manager language.

**Run 3:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: Technical specificity in this phrase contrasts with generic placeholders like 'Help the organization interpret data', indicating both hiring manager and recruiter contributions.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The primary responsibility is building analytics infrastructure and standards for internal data consumers rather than directly serving commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building data infrastructure and governance artifacts that serve the broader data organization as consumers.

**Run 3:** `internal_data` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture; Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building data infrastructure, standards, and governance rather than serving commercial, product, or financial teams directly.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The verbs 'design' and 'own' indicate the role sets direction for analytics architecture and standards rather than executing work defined by others.

**Run 2:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The responsibility to own and design the modeling architecture places this role in strategic territory where the candidate shapes how analytics infrastructure is delivered.

**Run 3:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The role is framed with ownership and design responsibility over core data infrastructure, not in a support or execution capacity.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools competently as a personal productivity tool, with disciplined practices around review and testing.

**Run 2:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools to accelerate their own work, with demonstrated discipline in code reviews, testing, and documentation.

**Run 3:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The JD lists AI-assisted coding as a preferred skill, expecting the candidate to use AI tools for their own development work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No data quality, testing frameworks, or observability signals present in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: There is no mention of data quality ownership, testing frameworks, data contracts, or observability practices in the responsibilities or qualifications.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of data quality frameworks, testing practices, observability standards, or data contracts.

**Run 3:** `absent` ✗
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes building standards and documentation but makes no mention of data quality frameworks, testing practices, or observability despite listing standards as a core responsibility.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: One compliance signal (GDPR) appears in an otherwise delivery and capability-focused JD, indicating moderate risk awareness secondary to building and delivery.

**Run 2:** `moderate` ✗
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: The GDPR compliance requirement and emphasis on building standards imply operational reliability and regulatory concerns without risk/compliance language dominating the overall role framing.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes building and evolving data infrastructure in capability terms, with no framing around preventing bad outcomes or regulatory compliance risks beyond domain knowledge of GDPR.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
