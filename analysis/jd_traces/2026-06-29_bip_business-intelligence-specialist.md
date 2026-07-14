# Trace: 2026-06-29_bip_business-intelligence-specialist

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Specialist — BIP (Business Integration Partners)

**URL:** https://fa-etjb-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/1326
**Location:** Milano, Lombardia, Italy
**Date Posted:** 2026-06-29

---

Business Intelligence Specialist - Google
Milano, Lombardia, Italy

Job Description
Entra nel nostro mondo.

Trasforma insieme a noi.

Business Intelligence Specialist

Quale sarà la tua sfida?

In qualità di Business Intelligence Specialist, svolgerai un ruolo fondamentale nella fornitura di soluzioni tecniche e application-based nei progetti di Business Intelligence. Ciò comporta l'analisi e lo sviluppo di soluzioni di visualizzazione dei dati per iniziative basate su progetti o come servizio per i clienti. Ti impegnerai nella raccolta e nella valutazione dei requisiti aziendali, garantendone l'accuratezza e la pertinenza. Le tue responsabilità includono l'analisi dell'origine dei dati, la modellazione dei dati e l'implementazione di servizi di progettazione dei dati con competenza metodica.
Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici utilizzando gli strumenti Looker e Google GCP. Questi strumenti ti aiuteranno a creare rappresentazioni dei dati di grande impatto, fornendo metriche che consentono un processo decisionale aziendale solido e basato sui dati. Inoltre, potresti essere incaricato di riassumere analisi complesse condotte da altri esperti, tra cui Data Scientist, esperti di Data Governance, Data Architect e Project Manager.
In base alla tua esperienza, potrai anche dimostrare e costruire relazioni con i clienti, collaborare con vendor e partner tecnologici e comunicare i tuoi risultati in modo efficace a colleghi e clienti. Inoltre, potrai guidare e coordinare junior analyst all'interno dei team di progetto.

Sarai tu ad entrare nel nostro Team?

Requisiti Indispensabili:

Laurea Specialistica in Ingegneria Informatica, Ingegneria Matematica, Ingegneria delle Telecomunicazioni, Informatica, Statistica, Ingegneria Gestionale o discipline affini (STEM)
Competenza in almeno una tecnologia di visualizzazione dei dati (ad esempio, Looker, Tableau, PowerBI, QlikSense) ed esperienza nell'estrazione, pulizia, modellazione e analisi dei dati utilizzando strumenti come MS Excel, SQL, SAS e Python
Ottima conoscenza e competenza in ambito SQL e capacità funzionale di data analysis IT-based
Conoscenza fluente di italiano e inglese

Plus:

Capacità di realizzare stored procedure, SQL function e conoscenza delle funzionalità di BigQuery
MS Excel avanzato (VBA programming)
Familiarità con Python, R, Java, C++, Javascript/HTML, PHP
Esperienza in progetti che utilizzano modelli di AI (Gemini, OpenAI, altro) che servono a generare insights dei dati

Soft Skills:

Standing consulenziale con ottime doti relazionali e comunicative
Orientamento al cliente e al raggiungimento degli obiettivi
Buona attitudine a lavorare in team e grande attenzione al dettaglio
Precisione e stress tolerance nel rispetto delle scadenze
Disponibilità per trasferte in Italia e all'estero

Perchè Bip?

Crescita e Formazione
Più di 300 corsi su tecnologie e business emergenti, programmi di sviluppo personalizzati e iniziative di training e people care per supportare la tua crescita professionale e personale.

Flessibilità e Work-Life Integration
Lavoro agile con possibilità di programmare le giornate da remoto e in ufficio con il proprio responsabile e in base alle esigenze di progetto, Banca Ore Solidale per usufruire o mettere a disposizione ore di permesso a colleghi e colleghe che vivono momenti di difficoltà e una cultura che favorisce l'equilibrio tra vita e lavoro.

Salute & Benefits
Assicurazione sanitaria, check-up agevolati, piattaforme per il benessere psicofisico e un piano welfare integrativo. Ticket restaurant e altri benefit dedicati.

Famiglia e Genitorialità
Supporto concreto a neogenitori: integrazione al 100% per i primi 3 mesi del congedo parenta…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 6 | 4 | 5 | 0% | ✗ |
| data_team_maturity | mid | mid | mid | mature | 33% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | mixed | mixed | internal_data | internal_data | 33% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | ai_enabler | none | ai_enabler | 33% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "garantendone l'accuratezza e la pertinenza"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize accuracy, precision, methodic competence, and attention to detail throughout with no velocity signals, establishing rigour as the clear primary orientation.

**Run 2:** `rigour` ✓
> Quote: "garantendone l'accuratezza e la pertinenza"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit signals emphasize accuracy, methodical competence, and precision as core expectations with no velocity or speed language present.

**Run 3:** `rigour` ✓
> Quote: "l'implementazione di servizi di progettazione dei dati con competenza metodica"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize methodical expertise, accuracy, precision, and attention to detail over speed or iteration.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "consentono un processo decisionale aziendale solido e basato sui dati"
> Verified: ✓ found in JD
> Reasoning: The data supports general business decision-making without explicit signals of financial reporting, regulatory compliance, audit, or P&L impact, placing this at moderate risk.

**Run 2:** `moderate` ✓
> Quote: "processo decisionale aziendale solido e basato sui dati"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making through BI solutions but lacks explicit financial reporting, compliance, or regulatory risk language.

**Run 3:** `moderate` ✓
> Quote: "fornendo metriche che consentono un processo decisionale aziendale solido e basato sui dati"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business decision-making without explicit regulatory, compliance, or financial reporting context that would elevate to high risk.

### collaboration_width
**Manual:** `4`

**Run 1:** `6` ✗
> Quote: "Data Scientist; esperti di Data Governance; Data Architect; Project Manager; junior analyst; clienti"
> Verified: ✓ found in JD
> Reasoning: Six distinct named teams or functions are identified: Data Scientists, Data Governance experts, Data Architects, Project Managers, junior analysts, and customers as explicit collaboration partners.

**Run 2:** `4` ✓
> Quote: "Data Scientist, esperti di Data Governance, Data Architect e Project Manager"
> Verified: ✓ found in JD
> Reasoning: Four distinct named functions are explicitly identified as collaboration partners in the responsibilities section.

**Run 3:** `5` ✗
> Quote: "Data Scientist; esperti di Data Governance; Data Architect; Project Manager; clienti"
> Verified: ✓ found in JD
> Reasoning: Five distinct named collaborators are explicitly mentioned: Data Scientists, Data Governance experts, Data Architects, Project Managers, and Clients.

⚠ **Disagreement**: manual=`4` vs LLM majority=`6`

⚠ **LLM inconsistency**: runs gave ['6', '4', '5']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "potrai guidare e coordinare junior analyst all'interno dei team di progetto"
> Verified: ✓ found in JD
> Reasoning: The existence of junior analysts to coordinate and multiple named tools deployed (Looker, Google GCP, SQL) indicate an established data function with growth underway.

**Run 2:** `mid` ✓
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici utilizzando gli strumenti Looker e Google GCP"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities and multiple specialized roles implied suggest established infrastructure and tooling rather than greenfield building.

**Run 3:** `mature` ✗
> Quote: "Data Scientist, esperti di Data Governance, Data Architect e Project Manager"
> Verified: ✓ found in JD
> Reasoning: Multiple specialized data roles with distinct charters (Data Science, Governance, Architecture) operating within a 4500+ person organization indicate an established, specialized team at scale.

⚠ **LLM inconsistency**: runs gave ['mid', 'mid', 'mature']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici utilizzando gli strumenti Looker e Google GCP"
> Verified: ✓ found in JD
> Reasoning: Technical specificity with named tools and methodologies is present, but balanced by generic phrases like collaboration and stakeholder engagement typical of recruiting templates.

**Run 2:** `mixed` ✓
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici utilizzando gli strumenti Looker e Google GCP"
> Verified: ✓ found in JD
> Reasoning: Technical precision in tool names and data modeling context is paired with generic soft skills language such as consulting standing and teamwork.

**Run 3:** `mixed` ✓
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici utilizzando gli strumenti Looker e Google GCP"
> Verified: ✓ found in JD
> Reasoning: Specific tool applications and outputs (Looker/GCP for dashboards) indicate hiring manager input, while generic requirement gathering and collaboration language reflects recruiter influence.

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "fornitura di soluzioni tecniche e application-based nei progetti di Business Intelligence"
> Verified: ✓ found in JD
> Reasoning: As a consulting firm serving various clients on BI projects without specifying customer domain (commercial, product, finance), the stakeholder focus spans multiple categories.

**Run 2:** `internal_data` ✗
> Quote: "processo decisionale aziendale solido e basato sui dati"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building BI infrastructure and analytics systems to enable business decision-making rather than serving commercial or product teams.

**Run 3:** `internal_data` ✗
> Quote: "fornitura di soluzioni tecniche e application-based nei progetti di Business Intelligence"
> Verified: ✓ found in JD
> Reasoning: The role builds BI analytics platforms and solutions consumed by business stakeholders and data professionals, serving the analytics function rather than commercial, product, or finance teams.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['mixed', 'internal_data', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities emphasize delivery of BI solutions to specifications; leadership and relationship-building are framed as optional capabilities (potrai = may/could) rather than core strategic direction-setting.

**Run 2:** `execution` ✗
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici"
> Verified: ✓ found in JD
> Reasoning: The role is framed as delivering specific BI systems and implementing data services within project contexts defined by others, with strategic elements conditional on experience.

**Run 3:** `execution` ✗
> Quote: "Svilupperai sistemi di analisi delle performance, report interattivi e dashboard analitici"
> Verified: ✓ found in JD
> Reasoning: Responsibility phrasing emphasizes delivery and execution of defined analytical solutions with some junior leadership rather than strategic direction-setting or defining analytics approach.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Esperienza in progetti che utilizzano modelli di AI (Gemini, OpenAI, altro) che servono a generare insights dei dati"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to have experience with GenAI models for generating data insights, indicating they will build BI solutions that incorporate AI/ML capabilities.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The core role makes no AI skill requirement; the Plus section mentions AI project experience but is optional and too vague to constitute a clear expected AI capability.

**Run 3:** `ai_enabler` ✗
> Quote: "Esperienza in progetti che utilizzano modelli di AI (Gemini, OpenAI, altro) che servono a generare insights dei dati"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to have experience with projects integrating AI models into analytics work to generate data insights, fitting the pattern of building analytics infrastructure that AI systems contribute to.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'none', 'ai_enabler']

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal in responsibilities or requirements."
> Verified: ⚠ NOT found verbatim
> Reasoning: While precision and attention to detail are mentioned as soft skills, no testing frameworks, data contracts, observability practices, or quality assurance methodologies appear anywhere in the JD.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No mention of data quality frameworks, testing practices, observability, data contracts, or quality assurance appears anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality frameworks mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: While accuracy and precision are emphasized as expectations, no data quality frameworks, testing tools (dbt, Great Expectations, Soda), data contracts, or owned testing practices are mentioned in the responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "garantendone l'accuratezza e la pertinenza"
> Verified: ✓ found in JD
> Reasoning: Emphasis on accuracy and precision indicates concern for delivering correct results and quality standards, but lacks explicit compliance, audit, or stakeholder-trust language characteristic of high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "garantendone l'accuratezza e la pertinenza"
> Verified: ✓ found in JD
> Reasoning: Emphasis on accuracy and precision signals concern for operational quality but lacks explicit risk, compliance, or trust language that would indicate high loss aversion.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames accuracy and precision as professional values and standards, not as risk mitigation or loss aversion; there is no mention of regulatory compliance, audit, reliability targets, or preventing bad outcomes.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
