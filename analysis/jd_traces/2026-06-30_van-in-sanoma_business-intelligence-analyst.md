# Trace: 2026-06-30_van-in-sanoma_business-intelligence-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Analyst — Van In (Sanoma Learning)

**URL:** https://sanoma.wd3.myworkdayjobs.com/en-US/Sanoma_Learning/job/Wommelgem/Data-analyst_JR-1550?source=LinkedIn
**Location:** Wommelgem, Belgium / Den Bosch, Netherlands (hybrid)
**Date Posted:** 2026-06-30

---

Business Intelligence Analyst
Van In (Sanoma Learning)
Hybrid — Wommelgem / Den Bosch
Full time
Job requisition id: JR-1550
Posted 30+ Days Ago

Wil jij met data échte impact maken op het onderwijs van morgen?
Als Data Analist help je onze organisatie betere beslissingen nemen door data om te zetten in heldere inzichten. Je werkt met een moderne data stack (SQL, Power BI,…) en krijgt veel autonomie om end-to-end oplossingen uit te bouwen die ook écht gebruikt worden.

Je komt terecht in een mensgerichte organisatie waar data steeds belangrijker wordt en waar jouw werk zichtbaar bijdraagt aan maatschappelijke impact.

Jouw team

Je wordt onderdeel van het Data & Analytics team, waar je samenwerkt met één andere data-analist in België. Daarnaast heb je regelmatig contact met een groter team van data-analisten en experts in Nederland. Via kennisdeling en best practices versterk je je expertise en draag je mee bij aan de verdere uitbouw van een data gedreven organisatie. Af en toe werk je ook samen op locatie in Den Bosch.

Wat ga je doen?

Als Data Analist werk je van businessvraag tot bruikbaar inzicht. Je fungeert als brug tussen data en besluitvorming en helpt collega's data beter te begrijpen en te gebruiken.

Concreet betekent dit dat je:
- Businessvragen scherp stelt en vertaalt naar analyses en datavereisten
- Data verzamelt, transformeert en modelleert uit verschillende bronnen
- End-to-end oplossingen bouwt met SQL en Snowflake, Power BI en DBT is een mooie plus!
- Heldere, actiegerichte dashboards en rapporten ontwikkelt die effectief gebruikt worden
- Datakwaliteit, governance en betrouwbaarheid mee bewaakt
- Inzichten en aanbevelingen duidelijk communiceert naar zowel technische als niet-technische stakeholders
- Business teams ondersteunt in projecten en besluitvorming
- Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform
- Data literacy binnen de organisatie versterkt via begeleiding, workshops of kennisdeling

Wie zoeken wij?

Je hoeft niet alles al perfect te beheersen, leergierigheid en analytisch denkvermogen zijn minstens zo belangrijk.
- Je hebt een bachelor diploma of gelijkwaardige ervaring
- Je hebt 2 tot 4 jaar ervaring in data-analyse, BI of insights
- Je werkt vlot met SQL en BI-tools
- Ervaring met dbt, Power BI en Snowflake is een sterke troef, of je wil je hierin snel verdiepen
- Kennis van Python is een plus
- Je kan complexe informatie helder uitleggen aan verschillende doelgroepen
- Je werkt gestructureerd, denkt analytisch en neemt ownership
- Je bent een teamspeler die kennis deelt en graag bijleert
- Je volgt trends in data, AI en analytics en denkt mee over toepassingen
- Je kan professioneel communiceren in het Frans of bent bereid dit verder te versterken

Wat mag je van ons verwachten?

Een mensgerichte cultuur met een DNA waarbij veel aandacht gaat naar het welzijn en werkgeluk. Een betekenisvolle job met maatschappelijke impact. Werken binnen een sterke, internationale groep (SANOMA). Ruimte om te groeien, leren en initiatief te nemen. Samenwerking met ervaren data-professionals in België en Nederland. Een competitief loon aangevuld met extralegale voordelen. Hybride werken: meerdere dagen per week thuiswerk mogelijk.

About Sanoma Learning

Sanoma Learning is a leading K12 European learning company, operating in 12 countries. With over 3000 employees, we help shape the future of education for 25+ million of students.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | low | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | mixed | internal_data | 33% | ✓ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | tool_listed | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes data quality, governance, and reliability monitoring as core responsibilities with no velocity or speed-focused language.

**Run 2:** `rigour` ✓
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities emphasize data quality, governance, and reliability as core monitoring responsibilities, with no emphasis on speed or iteration velocity.

**Run 3:** `rigour` ✓
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewaakt"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, governance, and reliability as core work components with no velocity-oriented language like 'fast-paced' or 'rapid delivery.'

### domain_risk
**Manual:** `low`

**Run 1:** `moderate` ✗
> Quote: "Wil jij met data échte impact maken op het onderwijs van morgen?"
> Verified: ✓ found in JD
> Reasoning: The role impacts educational outcomes and student data but lacks explicit regulatory, compliance, or financial reporting language typical of high-risk domains.

**Run 2:** `moderate` ✗
> Quote: "je organisatie betere beslissingen nemen door data om te zetten in heldere inzichten"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role supports organizational decision-making in education without explicit financial reporting, regulatory, or compliance language, placing it in the moderate-risk category.

**Run 3:** `moderate` ✗
> Quote: "betere beslissingen nemen door data om te zetten in heldere inzichten"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making without explicit financial reporting, regulatory compliance, or audit responsibilities typical of high-risk domains.

⚠ **Disagreement**: manual=`low` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Je wordt onderdeel van het Data & Analytics team, waar je samenwerkt met één andere data-analist in België"
> Verified: ✓ found in JD
> Reasoning: No explicitly named partner functions (Finance, Product, Marketing, etc.) are mentioned; collaboration is internal to the Data & Analytics team or with generic 'Business teams'.

**Run 2:** `0` ✗
> Quote: ""
> Verified: ✓ found in JD
> Reasoning: Collaboration is described generically as 'business teams' and 'stakeholders' without naming specific functions like Finance, Product, Marketing, or Engineering.

**Run 3:** `0` ✗
> Quote: "Business teams ondersteunt in projecten en besluitvorming"
> Verified: ✓ found in JD
> Reasoning: The JD references 'business teams' generically without naming specific partner functions like Product, Finance, Marketing, or Engineering.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform"
> Verified: ✓ found in JD
> Reasoning: The JD mentions named tools in responsibilities (SQL, Snowflake, DBT), ongoing infrastructure improvements, and a growing team structure, suggesting a maturing data function.

**Run 2:** `mid` ✓
> Quote: "Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform"
> Verified: ✓ found in JD
> Reasoning: The team uses named tools (SQL, Snowflake, Power BI, dbt) operationally and is in an active phase of scaling infrastructure, indicating mid-stage maturity rather than greenfield setup or fully mature enterprise.

**Run 3:** `mid` ✓
> Quote: "Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform"
> Verified: ✓ found in JD
> Reasoning: The data function has established tools (SQL, Snowflake, Power BI, dbt) and multiple roles but remains in active growth and professionalization, signaled by emphasis on 'further building' infrastructure.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "End-to-end oplossingen bouwt met SQL en Snowflake, Power BI en DBT is een mooie plus!"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section contains specific tool names and technical workflows (collect-transform-model, end-to-end solutions) indicating hands-on authorship from someone experienced with this work.

**Run 2:** `mixed` ✓
> Quote: "End-to-end oplossingen bouwt met SQL en Snowflake, Power BI en DBT is een mooie plus!"
> Verified: ✓ found in JD
> Reasoning: Some responsibilities show specific tool context (SQL/Snowflake for end-to-end solutions) while others use generic action verbs, indicating partial hiring manager input and partial recruiter language.

**Run 3:** `hiring_manager` ✗
> Quote: "End-to-end oplossingen bouwt met SQL en Snowflake, Power BI en DBT is een mooie plus!"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical context naming tools with precise application to the role, revealing hands-on familiarity with the day-to-day work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building data infrastructure, platform maturity, and data literacy within the organization, serving other analytics professionals and business data consumers.

**Run 2:** `mixed` ✗
> Quote: "Business teams ondersteunt in projecten en besluitvorming"
> Verified: ✓ found in JD
> Reasoning: While primarily supporting business teams in decision-making, the role also contributes to data infrastructure professionalization, creating a mixed orientation between business and internal_data audiences.

**Run 3:** `internal_data` ✓
> Quote: "Meebouwt aan de verdere professionalisering van processen, data infrastructuur en het dataplatform"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building and professionalizing data infrastructure and platform capabilities that analytics consumers rely on, positioning the analyst as a builder of the data function itself.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Business teams ondersteunt in projecten en besluitvorming"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities frame the role as supporting and delivering work within a team context rather than setting strategic direction.

**Run 2:** `execution` ✗
> Quote: "je veel autonomie om end-to-end oplossingen uit te bouwen"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role has high autonomy in how to solve problems but executes within direction set by business teams' needs rather than defining the data strategy itself.

**Run 3:** `execution` ✗
> Quote: "Business teams ondersteunt in projecten en besluitvorming"
> Verified: ✓ found in JD
> Reasoning: The role is framed as supporting and delivering on priorities set by business teams, with the analyst receiving business questions to translate rather than setting strategic direction.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "Je volgt trends in data, AI en analytics en denkt mee over toepassingen"
> Verified: ✓ found in JD
> Reasoning: The reference to AI is vague awareness and trend-following rather than a specific expectation for the candidate to use or build AI systems.

**Run 2:** `none` ✗
> Quote: "Je volgt trends in data, AI en analytics en denkt mee over toepassingen"
> Verified: ✓ found in JD
> Reasoning: Following trends and thinking about AI applications is vague trend awareness language; no specific AI tool usage or AI infrastructure building is expected of the candidate.

**Run 3:** `none` ✗
> Quote: "Je volgt trends in data, AI en analytics en denkt mee over toepassingen"
> Verified: ✓ found in JD
> Reasoning: The only AI mention is a vague requirement to follow trends and think about applications, which does not constitute a specific AI skill expectation for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data quality and reliability are framed as responsibilities the candidate participates in ('mee bewacht'), indicating shared accountability for these practices.

**Run 2:** `tool_listed` ✗
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data quality and governance are mentioned as monitoring responsibilities but not framed as owned practices; dbt is listed as a nice-to-have tool rather than a core ownership area.

**Run 3:** `responsibility` ✗
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewaakt"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability monitoring are listed in the responsibilities section as core activities the candidate participates in, though framed as shared accountability using 'mee' rather than solo ownership.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['responsibility', 'tool_listed', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data quality and reliability are operational concerns but framed as professionalization practices rather than regulatory/compliance risk; reliability is secondary to delivery and infrastructure building.

**Run 2:** `moderate` ✗
> Quote: "Datakwaliteit, governance en betrouwbaarheid mee bewacht"
> Verified: ⚠ NOT found verbatim
> Reasoning: Operational reliability (data quality, governance) is a concern but framed as best practice rather than risk mitigation or preventing negative stakeholder impact.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around capability building and delivering insights without risk, compliance, or regulatory language—no fear register is evident.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
