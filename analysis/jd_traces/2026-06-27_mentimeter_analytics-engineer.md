# Trace: 2026-06-27_mentimeter_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Mentimeter

**URL:** https://job-boards.eu.greenhouse.io/mentimeter/jobs/4839752101?gh_src=3d5665c2teu
**Location:** Stockholm (onsite/hybrid)
**Date Posted:** 2026-06-27

---

Analytics Engineer at Mentimeter

Location: Stockholm (onsite/hybrid)

About Mentimeter

Mentimeter is an engagement tool with a clear goal in mind. To turn presentations into conversations. Our vision is to transform the way the world makes decisions. We make this vision a reality by providing engagement tools that remove the fear of sharing and listening to opinions.

We are looking for an Analytics Engineer to join our Analytics Foundation team in Stockholm.

What you'll do

- Design, own, and evolve core data models and the modelling architecture
- Empower the organization to use and interpret data
- Partner with business and technical stakeholders from problem framing to shipped artefacts
- Collaborate closely with other data professionals; this includes giving actionable feedback in code reviews
- Combine subject matter expertise and a high level business understanding to contribute to the direction and strategy
- Develop, own and maintain data modeling standards and the data development experience
- Improve how we work at scale: thoughtful automation and AI-assisted engineering
- Maintain and grow how knowledge is surfaced, e.g in semantic models, a data catalog, or documentation

We believe you have

- Roughly 4-7 years of relevant hands-on experience as an Analytics Engineer, Data Analyst, Data Scientist, BI Analyst, or similar
- Strong SQL and sound judgment in data modelling (grain, reusability, naming, and how metrics should behave)
- Experience partnering across departments, including leading or co-leading cross-functional work
- Strong business acumen with an understanding of sales, marketing, and product analytics
- Ability to map ambiguous stakeholder needs to clear, maintainable models and artefacts
- Experience with BI-tools and development of BI features
- Knowledge of software collaboration using git
- Communication in English with both technical and non-technical audiences
- Experience working with GDPR-sensitive data and collaborating with legal experts on compliance

It's a bonus if you have

- Hands-on experience with dbt or similar tools
- Experience with a semantic or metrics layer
- Experience with AI-assisted coding used with disciplined practices
- Experience working in an Agile environment

Our tech stack includes: Snowflake, dbt core, Hex, Prefect, Fivetran, and Hightouch

What Mentimeter can offer

- Competitive compensation and pension contributions
- Leadership program with external coaching
- Professional development access
- Work-life balance emphasis
- Diverse, inclusive environment (50+ different nationalities)
- Access to benefits detailed on company site

Recruitment process

Our four-stage process includes: introduction, competence (with live case), culture interviews, and references before an offer.

Additional notes

- No visa sponsorship offered
- Swedish language not required
- Cover letter optional
- No automated candidate screening; human review of all applications
- GDPR-sensitive data handling experience required

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | high | high | 33% | ✗ |
| collaboration_width | 4 | 3 | 4 | 0 | 0% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | mixed | strategic | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Develop, own and maintain data modeling standards and the data development experience"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize governance, standards, quality, and maintainability with zero velocity language.

**Run 2:** `rigour` ✓
> Quote: "Develop, own and maintain data modeling standards and the data development experience"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance, standards, compliance, and sound judgment, with no velocity signals present.

**Run 3:** `rigour` ✓
> Quote: "Sound judgment in data modelling (grain, reusability, naming, and how metrics should behave)"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes correctness, maintainability, and standards-driven modeling with explicit GDPR/compliance framing, vastly outweighing a single mention of 'AI-assisted engineering.'

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Experience working with GDPR-sensitive data and collaborating with legal experts on compliance"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance is a requirement for a SaaS engagement platform, but this is not financial reporting, regulatory operations, or mission-critical business systems.

**Run 2:** `high` ✗
> Quote: "GDPR-sensitive data handling experience required"
> Verified: ✓ found in JD
> Reasoning: Explicit regulatory/compliance requirement signals high domain risk around data privacy and legal exposure.

**Run 3:** `high` ✗
> Quote: "collaborating with legal experts on compliance"
> Verified: ✓ found in JD
> Reasoning: Explicit regulatory and compliance framing combined with mandatory GDPR-sensitive data handling experience signals direct regulatory consequences of data errors.

⚠ **Disagreement**: manual=`moderate` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "Strong business acumen with an understanding of sales, marketing, and product analytics"
> Verified: ✓ found in JD
> Reasoning: Three named business functions are explicitly listed that the candidate must understand: sales, marketing, and product.

**Run 2:** `4` ✓
> Quote: "sales, marketing, and product analytics; legal experts"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names Sales, Marketing, Product, and Legal as collaboration partners.

**Run 3:** `0` ✗
> Quote: "Partner with business and technical stakeholders from problem framing to shipped artefacts"
> Verified: ✓ found in JD
> Reasoning: The primary collaboration statement uses generic 'stakeholders' language without naming specific teams, functions, or roles as distinct collaboration partners.

⚠ **Disagreement**: manual=`4` vs LLM majority=`3`

⚠ **LLM inconsistency**: runs gave ['3', '4', '0']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Develop, own and maintain data modeling standards and the data development experience"
> Verified: ✓ found in JD
> Reasoning: The team has established infrastructure and practices (semantic models, data catalogs, comprehensive tech stack) and is growing, indicated by evolution focus and 4-7 year experience expectation.

**Run 2:** `mid` ✗
> Quote: "Improve how we work at scale: thoughtful automation and AI-assisted engineering"
> Verified: ✓ found in JD
> Reasoning: The phrase "at scale" and focus on improving existing processes suggests an established data function beyond early-stage.

**Run 3:** `mid` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The verb 'evolve' indicates existing infrastructure rather than greenfield; combined with named tools (Snowflake, dbt, etc.) and references to multiple data professionals, this signals an established but growing analytics function.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: Some technical specificity (modeling architecture, semantic models, data catalog) is present, but lacks context about specific pain points, scale numbers, or what problems these solve.

**Run 2:** `mixed` ✗
> Quote: "sound judgment in data modelling (grain, reusability, naming, and how metrics should behave)"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about methodology appears alongside generic boilerplate like "partner with stakeholders" suggesting both hiring manager and recruiter input.

**Run 3:** `mixed` ✗
> Quote: "Sound judgment in data modelling (grain, reusability, naming, and how metrics should behave)"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about modeling concepts and infrastructure (semantic models, data catalog, dbt, named tech stack) mixes with recruiter boilerplate ('empower the organization', 'collaborate with stakeholders').

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Empower the organization to use and interpret data"
> Verified: ✓ found in JD
> Reasoning: Primary focus is building data infrastructure and platforms that enable organizational access to data, not serving specific business functions like sales or finance.

**Run 2:** `internal_data` ✓
> Quote: "Develop, own and maintain data modeling standards and the data development experience"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities focus on building and maintaining data infrastructure (standards, models, catalogs) for internal data team use.

**Run 3:** `internal_data` ✓
> Quote: "Maintain and grow how knowledge is surfaced, e.g in semantic models, a data catalog, or documentation"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building and maintaining analytics infrastructure (modeling standards, semantic models, data catalog) for internal analytics consumers, not serving commercial, product, or finance teams directly.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: Strategic ownership verbs (own, design, develop) and explicit language about contributing to direction and strategy indicate the role defines approach rather than executes assigned work.

**Run 2:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of data modeling and standards while also being collaborative/execution-oriented in partnerships with broader org.

**Run 3:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: Ownership and design verbs indicate the role is expected to define data architecture direction and shape how analytics is delivered, not execute strategy set by others.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Experience with AI-assisted coding used with disciplined practices"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools as a personal productivity practice within disciplined practices, not to build AI-consuming data systems.

**Run 2:** `ai_user` ✗
> Quote: "Experience with AI-assisted coding used with disciplined practices"
> Verified: ✓ found in JD
> Reasoning: The JD expects candidates to use AI-assisted coding tools for their own productivity, not to build AI data infrastructure.

**Run 3:** `ai_user` ✗
> Quote: "Improve how we work at scale: thoughtful automation and AI-assisted engineering"
> Verified: ✓ found in JD
> Reasoning: The role explicitly involves 'AI-assisted engineering' practices, and the bonus section specifies 'Experience with AI-assisted coding used with disciplined practices,' indicating the candidate should use AI tools to improve engineering productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality framework mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of testing practices, data contracts, data quality frameworks, or observability tools.

**Run 2:** `absent` ✗
> Quote: "Our tech stack includes: Snowflake, dbt core, Hex, Prefect, Fivetran, and Hightouch"
> Verified: ✓ found in JD
> Reasoning: No testing tools or data quality frameworks are mentioned in the JD, despite mentioning specific technical stack.

**Run 3:** `absent` ✗
> Quote: "Develop, own and maintain data modeling standards and the data development experience"
> Verified: ✓ found in JD
> Reasoning: While data modeling standards are mentioned, no testing practice, data quality framework, dbt tests, data contracts, or observability approach is explicitly described as a responsibility or tool.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Experience working with GDPR-sensitive data and collaborating with legal experts on compliance"
> Verified: ✓ found in JD
> Reasoning: Compliance is a stated requirement but does not dominate the role framing, which emphasizes capability and ownership over risk prevention.

**Run 2:** `moderate` ✗
> Quote: "GDPR-sensitive data handling experience required"
> Verified: ✓ found in JD
> Reasoning: Regulatory compliance is a concern mentioned twice, but the role is primarily framed around data modeling delivery and capability, not around preventing bad outcomes.

**Run 3:** `moderate` ✗
> Quote: "GDPR-sensitive data handling experience required"
> Verified: ✓ found in JD
> Reasoning: Compliance and legal collaboration signal risk awareness, but the role is primarily framed around building analytics infrastructure rather than preventing regulatory failures or managing trust as a dominant theme.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
