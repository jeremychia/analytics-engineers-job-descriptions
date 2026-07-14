# Trace: 2026-07-01_jtl-software_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — JTL Software

**URL:** https://jtl-software-gmbh.jobs.personio.de/job/2684130
**Location:** Remote (Germany)
**Date Posted:** 2026-07-01

---

Senior Analytics Engineer (w/m/d) at JTL Software

Mobil, Vollzeit, Festanstellung (Mobile, Full-time, Permanent)

About JTL
JTL stands as a leading e-commerce software provider in German-speaking regions, operating with approximately 450 employees across the group and serving over 50,000 customers. The organisation develops scalable solutions for online commerce, spanning from ERP systems to shop and marketplace integrations.

Your Responsibilities
- Structuring raw data from JTL's inventory management into clean, documented data models
- Owning the data foundation for a new AI-powered BI product
- Improving query performance and data quality
- Collaborating with development, product, and pilot customers to translate business requirements into viable data models
- Building complex data models with high quality and availability standards

Required Qualifications
- Several years of practical data experience with proficiency in SQL and Python
- BI/analytics background
- Ability to communicate technical concepts with diverse stakeholders
- Du kommunizierst fließend auf Deutsch und sicher auf Englisch (Fluent German and secure English communication required)

Preferred Skills
- dbt framework knowledge
- Basic data science and machine learning understanding
- ERP system data experience
- Azure cloud infrastructure familiarity
- Multi-tenant architecture understanding

Benefits
- Remote-first within Germany with up to 180 days annual remote work eligibility
- Food allowance up to €115 net monthly
- Ergonomic workspace stipend for home office setup
- Team events, company offsites, and seasonal celebrations
- EGYM Wellpass and Job Rad subsidies
- Financial benefits including capital formation payments and occupational pension provisions

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | early | mid | mid | early | 33% | ✗ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | product | internal_data | internal_data | product | 33% | ✗ |
| autonomy_level | strategic | execution | mixed | strategic | 0% | ✗ |
| ai_role |  | none | ai_enabler | none | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | absent | 33% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Building complex data models with high quality and availability standards"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality, availability, documentation, and reliability as core expectations throughout, with no speed, velocity, or iteration-focused language present.

**Run 2:** `rigour` ✓
> Quote: "Building complex data models with high quality and availability standards"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit quality signals ('clean, documented', 'data quality', 'high quality and availability standards') dominate the responsibilities with no velocity or speed language present.

**Run 3:** `rigour` ✓
> Quote: "Building complex data models with high quality and availability standards"
> Verified: ✓ found in JD
> Reasoning: The JD repeatedly emphasizes quality, standards, and documentation with no velocity signals present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: E-commerce SaaS infrastructure for business intelligence affects business decisions but lacks financial reporting, regulatory, or compliance implications typical of high-risk roles.

**Run 2:** `moderate` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: E-commerce BI affects business decisions but without explicit financial, compliance, or regulatory language typical of high-risk roles.

**Run 3:** `moderate` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: E-commerce software domain with BI use case implies moderate risk; no regulatory, compliance, or financial reporting language.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "Collaborating with development, product, and pilot customers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams/roles are identified: development, product, and pilot customers.

**Run 2:** `3` ✓
> Quote: "development; product; pilot customers"
> Verified: ✓ found in JD
> Reasoning: Three distinct collaboration partners explicitly named in the responsibilities: development team, product team, and pilot customers as external partners.

**Run 3:** `3` ✓
> Quote: "development, product, and pilot customers"
> Verified: ✓ found in JD
> Reasoning: Three distinct collaboration partners are explicitly named: development, product, and pilot customers.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: Existing data infrastructure (JTL inventory management systems) combined with building a significant new product indicates a team scaling and expanding capability.

**Run 2:** `mid` ✗
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: A new product initiative within an established 450-person company suggests an existing data function expanding into new domains rather than greenfield or mature scale.

**Run 3:** `early` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: The language 'owning the data foundation' for a new product signals greenfield data work.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'mid', 'early']

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Collaborating with development, product, and pilot customers to translate business requirements into viable data models"
> Verified: ✓ found in JD
> Reasoning: Specific domain context (JTL systems, AI product) suggests hiring manager input, but generic collaboration verbs ('collaborating', 'translate') typical of recruiter involvement.

**Run 2:** `mixed` ✗
> Quote: "Structuring raw data from JTL's inventory management into clean, documented data models"
> Verified: ✓ found in JD
> Reasoning: Contains hiring-manager specificity about inventory management systems and ERP context alongside recruiter boilerplate like 'translate business requirements into viable data models'.

**Run 3:** `mixed` ✗
> Quote: "Structuring raw data from JTL's inventory management into clean, documented data models; Collaborating with development, product, and pilot customers to translate business requirements into viable data models"
> Verified: ✓ found in JD
> Reasoning: Specific business context (inventory management, new AI BI product) shows hiring manager input, but generic collaboration language indicates recruiter involvement.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `internal_data` ✗
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: Primary focus is building and maintaining the data infrastructure layer that BI systems and consumers depend on, not serving commercial, product, or finance stakeholders directly.

**Run 2:** `internal_data` ✗
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: The primary responsibility is building the data infrastructure and foundation that other teams will consume, making data platform consumers the core audience.

**Run 3:** `product` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: The role exists to support a product initiative with product and development teams as primary collaborators.

⚠ **Disagreement**: manual=`product` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'product']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `execution` ✗
> Quote: "Collaborating with development, product, and pilot customers to translate business requirements into viable data models"
> Verified: ✓ found in JD
> Reasoning: Responsibilities centre on translating and delivering defined requirements for a specific product; ownership is tactical execution rather than strategic direction-setting.

**Run 2:** `mixed` ✗
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of the data foundation domain with execution responsibilities (structuring, improving, building) in service of product and customer teams.

**Run 3:** `strategic` ✓
> Quote: "Owning the data foundation for a new AI-powered BI product"
> Verified: ✓ found in JD
> Reasoning: The verb 'owning' indicates strategic responsibility for defining the data layer and shaping how the foundation is built.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`execution`

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Despite the company developing an AI-powered BI product, the JD contains no expectation that the candidate use AI coding tools or build AI/ML infrastructure.

**Run 2:** `ai_enabler` ✗
> Quote: "Basic data science and machine learning understanding"
> Verified: ✓ found in JD
> Reasoning: The candidate is building data infrastructure for an AI-powered product and should understand ML/AI basics to structure data appropriately for AI system consumption.

**Run 3:** `none` ✗
> Quote: "Basic data science and machine learning understanding"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to have general ML knowledge as background, not to use AI tools or build AI-ready data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['none', 'ai_enabler', 'none']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Improving query performance and data quality"
> Verified: ✓ found in JD
> Reasoning: The action verb 'improving' indicates the candidate is responsible for data quality outcomes, though no specific testing framework or tool is named.

**Run 2:** `responsibility` ✗
> Quote: "Improving query performance and data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality improvement is explicitly listed as a core responsibility with supporting language about 'high quality and availability standards', indicating ownership rather than just tool awareness.

**Run 3:** `absent` ✗
> Quote: "Improving query performance and data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned as an outcome to achieve, not as testing frameworks, data contracts, or quality practices the candidate owns.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['responsibility', 'responsibility', 'absent']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Building complex data models with high quality and availability standards"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are concerns, but the overall frame is delivery-oriented; fear is production stability and quality, not compliance or regulatory exposure.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely around building new capabilities and improving performance, with no risk, compliance, reliability, or loss-prevention language.

**Run 3:** `moderate` ✗
> Quote: "Building complex data models with high quality and availability standards"
> Verified: ✓ found in JD
> Reasoning: Emphasis on quality and availability standards reflects operational reliability concerns without regulatory or compliance framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
