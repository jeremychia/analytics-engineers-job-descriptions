# Two Discourses, One Profession: Vendor Surveys, Employer Job Postings, and the Institutionalisation of Analytics Engineering

**Working paper draft — target: MIS Quarterly / Information Systems Research (research article); fallback: Journal of Information Technology / Information Systems Journal.**
**Status:** pilot empirics (n=123, single European market, single collector). Sections marked `[TIER-1]`/`[TIER-2]` denote work identified in `critical_evaluation.md` as required before submission. This draft is written to final structure so that new data drops into place.

---

## Abstract

Vendor-produced industry surveys are among the most influential accounts of emerging technology occupations, yet they are produced by parties with commercial stakes in the narratives they report. We ask what happens when vendor-mediated community discourse is held against a second, independently produced discourse arena: the language of employer job postings. Drawing on management fashion theory (Abrahamson 1996), the organizing-vision perspective (Swanson and Ramiller 1997), and institutional decoupling (Meyer and Rowan 1977; Bromley and Powell 2012), we derive falsifiable predictions about how quality-governance and AI-adoption narratives should manifest in hiring language at different stages of institutionalisation. We test them against 123 analytics-engineering job descriptions collected in the European market in 2026, classified on ten behavioural dimensions using an LLM-assisted content-analysis pipeline with verbatim-evidence verification. Three findings. First, rigour/quality framing is near-universal (~80%) and *flat* across domain risk, tool stack, and authorship sophistication — the signature of a fully institutionalised norm rather than a locally calibrated response to stakes. Second, AI-skill hiring criteria are nearly absent (83% of coded postings expect none) despite the dominant vendor survey claiming 72% daily AI-coding adoption, and what criteria exist concentrate in structurally AI-dependent roles — a pattern consistent with an unconsummated fashion but not yet distinguishable from a fully diffused, hence unstated, skill. Third, a third of rigour-framed postings never operationalise quality into an owned responsibility — a measurable form of means-ends decoupling we term *ceremonial rigour*. Methodologically, we contribute a validated, auditable LLM annotation pipeline and a cautionary demonstration that evidence-verification tooling can itself be the least reliable component of such a pipeline. The core theoretical move: job postings are not ground truth against which surveys are judged; they are a second, costlier discourse whose *internal inconsistencies* — flatness where variation is expected, talk without accountability — are precisely where institutionalisation becomes observable.

**Keywords:** management fashion, organizing vision, institutional decoupling, job postings, analytics engineering, data work, large language models, content analysis, vendor discourse

---

## 1. Introduction

Every February, dbt Labs — the vendor of the dominant transformation tool in the "modern data stack" — publishes *The State of Analytics Engineering*, a survey of its practitioner community. Each edition headlines a central anxiety: data quality (2023), data trust (2024), AI adoption (2025), and, in 2026, a "trust gap" in which AI adoption is said to outpace governance readiness. The reports are widely read; their vocabulary circulates through hiring managers, conference programmes, and job postings within weeks of publication. They are also produced by an interested party, distributed through the vendor's own channels to a self-selected sample that has shrunk 36% in four years (n=567 to n=363), and each edition's headline anxiety aligns with the vendor's product priorities in the same year.

Information systems research has long recognised this genre. Fashion-setters — consultants, vendors, analysts, the business press — supply the rhetoric through which new techniques come to seem rational and necessary (Abrahamson 1996; Kieser 1997), and technology vendors in particular sustain "organizing visions" that legitimate adoption independent of demonstrated efficacy (Swanson and Ramiller 1997; Pollock and Williams 2010). What the literature has done far less often is hold this vendor-mediated discourse against a *second, independently produced* corpus about the same occupation — one written by actors with different incentives, different production costs, and no stake in the vendor's narrative.

Employer job postings are such a corpus. Labour economics treats postings as high-fidelity demand-side data: writing a posting precedes a costly hiring decision, and posting language demonstrably tracks real wage and skill variation (Deming and Kahn 2018; Hershbein and Kahn 2018). But postings are not innocent text either. They are simultaneously screening instruments, marketing documents, and institutional performances (Rafaeli and Oliver 1998; Backhaus and Tikoo 2004). This dual character is usually treated as a nuisance. We treat it as the phenomenon: **when the same occupational narrative appears in both a vendor survey and employer postings, the comparison reveals not which discourse is "true," but how far the narrative has travelled from talk toward institutionalised practice** — and where, within the employer discourse itself, talk and operationalised accountability come apart.

We therefore ask:

> **RQ1.** Do the central claims of the dominant vendor narrative about analytics engineering (governance anxiety; AI adoption) appear in employer hiring language, and in the form the narrative predicts?
>
> **RQ2.** Where employer language does carry the narrative, does it behave like a calibrated response to organisational conditions, or like a ceremonially adopted norm?
>
> **RQ3.** What can the *gaps* between the two discourses — and within the employer discourse — tell us about the stage of institutionalisation of the underlying practices?

We answer with a structured content analysis of 123 analytics-engineering and BI job descriptions collected in the European market between April and July 2026, classified on ten behavioural dimensions by a hybrid human/LLM pipeline with per-quote evidence verification, with two predictions derived from fashion theory before analysis.

The paper makes three contributions. **Theoretically**, it extends management fashion and organizing-vision research from its usual single-corpus designs (counting discourse volume over time) to a *dual-discourse* design that can locate a narrative on the institutionalisation trajectory, and it operationalises means-ends decoupling (Bromley and Powell 2012) in hiring text through a construct we call *ceremonial rigour*. **Methodologically**, it contributes a fully auditable LLM-assisted annotation pipeline — majority-vote classification, verbatim evidence quoting, automated quote verification, and reliability reporting — together with an unusually honest failure analysis in which the verification tooling, not the classifier, proved to be the defective component. **Practically**, it gives both sides of the hiring market a map: which posting signals carry information (hiring-manager-authored tool requirements; early-stage maturity) and which are ceremony (rigour boilerplate; the "Senior" title).

---

## 2. Literature review

Five research streams bear on the question. The first two supply the theory of how occupational narratives are produced and absorbed; the third establishes what job postings can and cannot evidence; the fourth situates analytics engineering within the sociology of emerging data occupations; the fifth grounds the method.

### 2.1 Management fashion, organizing visions, and vendor knowledge production

Abrahamson's (1996) theory of management fashion holds that beliefs about which techniques are rational and progressive are supplied by a fashion-setting community — consultants, gurus, business media, and, centrally for IS, technology vendors — whose own success depends on the continual production of new collective beliefs. Fashion demand is driven by sociopsychological forces (anxiety, the appearance of progress) at least as much as by technical performance gaps, and fashions follow lifecycle dynamics of surging and declining discourse that are empirically traceable in print volume (Abrahamson and Fairchild 1999). Kieser (1997) dissects the rhetorical machinery — the crisis diagnosis, the promise of a gap between adopters and laggards, the ambiguity that lets adopters read their own concerns into the label. Benders and van Veen (2001) sharpen that last point into *interpretative viability*: a fashion spreads precisely because its content is elastic enough for heterogeneous adopters to claim adoption. This matters for our setting: "data quality" and "AI-readiness" are highly interpretatively viable labels, which predicts broad, shallow penetration of the vocabulary — visible, we will argue, in job-posting boilerplate.

IS research imported and refined this apparatus. Swanson and Ramiller (1997) proposed the *organizing vision* — a focal community idea for applying information technology in organisations — whose career runs from ascent through taken-for-grantedness to decline, and whose institutional functions are interpretation, legitimation, and mobilisation. Crucially, the organizing-vision literature predicts *who* carries the discourse at each career stage: early on, vendors and visionaries; later, the trade press and practitioner communities; at maturity, the vision dissolves into unremarkable practice and stops being talked about (Ramiller and Swanson 2003). Wang (2010) showed that IT fashions have real organisational consequences even absent performance effects — firms that ride fashion waves gain reputation and executive compensation benefits — and Baskerville and Myers (2009) demonstrated that IS research itself follows the same fashion waves it studies. Miranda, Kim and Summers (2015) traced how the discursive structure of a vision shapes diffusion.

A younger branch examines the *organisations* that produce this discourse. Pollock and Williams (2010, 2016) analyse industry analysts (Gartner archetypally) as "promissory organisations" whose business is the manufacture and calibration of expectations, with formalised genres — the ranked survey, the quadrant, the annual report — that discipline how a market talks about itself. The sociology of expectations (Borup, Brown, Konrad and van Lente 2006; van Lente 2012) generalises: expectations are performative, mobilising resources and coordinating actors regardless of eventual accuracy. The dbt Labs survey sits squarely in this genre: a vendor-produced, annually serialised, community-sampled expectation-setting document whose sample and headline anxieties we detail in §4.1.

What this stream lacks — and what we supply — is a systematic comparison of fashion-setter discourse with a *cost-bearing* discourse about the same practice produced by adopting organisations themselves. Fashion studies overwhelmingly measure discourse volume in a single arena (print media counts in Abrahamson and Fairchild 1999; Wang 2010). The rare multi-arena designs compare talk to adoption *behaviour* (e.g. Staw and Epstein 2000, who found quality-management talk decoupled from performance but coupled to CEO pay). Comparing two *textual* arenas with different production economics is, to our knowledge, novel in this literature — and it is what allows institutionalisation stage, not just fashion volume, to be observed.

### 2.2 Institutionalisation, isomorphism, and decoupling

If fashion theory explains the supply of the narrative, institutional theory explains what organisations do with it. Meyer and Rowan (1977) established that organisations incorporate rationalised myths — vocabularies of structure whose adoption signals legitimacy — and that such adoption is frequently *ceremonial*: the formal structure is displayed while daily practice is decoupled from it. DiMaggio and Powell (1983) supplied the isomorphism typology — coercive (regulation), mimetic (uncertainty-driven copying), normative (professionalisation) — that predicts *which* organisations converge on the same forms and why. Tolbert and Zucker (1983, 1996) added the temporal signature: early adoption is explicable by local technical need; late adoption is explained by legitimacy alone, so **as institutionalisation completes, the correlation between adoption and organisation-specific need should fall toward zero**. This is the sharpest empirical hook available for our design: a hiring norm still tracking local conditions is mid-diffusion; a norm gone flat across every organisational partition is institutionalised.

Bromley and Powell (2012) update decoupling for a world where policies are usually implemented but weakly linked to outcomes — *means-ends decoupling* — and note that evaluation and accountability structures are exactly where the gap shows. In hiring text, the analogue is a posting that speaks the quality vocabulary (rigour framing) without assigning quality accountability to the hire (no owned testing responsibility). We operationalise this as *ceremonial rigour* in §3. Boxenbaum and Jonsson (2008) provide the consolidating review; Staw and Epstein (2000) the canonical demonstration that fashionable-technique talk can be entirely decoupled from substance while still paying reputational dividends.

The isomorphism typology also yields auxiliary predictions we exploit in the exploratory analysis: coercive pressure (financial regulation) should produce the most standardised, execution-oriented role definitions in finance-facing positions; mimetic pressure predicts vocabulary convergence among mid-maturity organisations facing the most uncertainty.

### 2.3 Job postings as labour-market data — and as discourse

A substantial economics literature validates postings as demand-side measurement. Deming and Kahn (2018) coded ten general skill categories from Burning Glass postings and showed they predict wage variation across firms and markets beyond occupation and geography controls. Hershbein and Kahn (2018) used posting-language shifts to show recessions accelerate routine-biased technological change. Modestino, Shoag and Ballance (2016, 2020) demonstrated that stated requirements move with labour-market slack — employers "upskill" postings when workers are plentiful — which is a crucial caution for our design: posting language responds to bargaining conditions, not only to job content. Marinescu and Wolthoff (2020) showed that free-text job *titles* explain far more wage variance than standardised occupation codes, evidence that employers pack real information into unstructured language. Atalay, Phongthiengtham, Sotelo and Tannenbaum (2020) extended posting-text analysis over half a century of newspaper ads to track task change.

The representativeness limits are documented: online postings over-represent high-skill occupations and expanding firms (Carnevale, Jayasundera and Repnikov 2014; Cammeraat and Squicciarini 2021), and any single collection channel adds its own filter — in our case, severely so (§4.5).

Against the economists' revealed-preference reading stands an organisational-communication literature that treats the job ad as a *genre*. Rafaeli and Oliver (1998) argued ads function simultaneously as recruitment instrument, organisational self-presentation, and institutional performance directed at audiences beyond candidates. The employer-branding literature (Backhaus and Tikoo 2004) documents deliberate curation of posting language for image; personnel-selection research models recruitment as a two-sided signalling game in which employers signal as strategically as applicants (Bangerter, Roulin and König 2012; Spence 1973; Stiglitz 1975). Two implications matter here. First, posting language is *costlier* than survey talk (it anchors screening and can create legal exposure) but is **not** free of ceremony — so postings sit *between* cheap talk and revealed action, which is exactly the position our dual-discourse design needs them to occupy. Second, Spence cuts both ways for skill requirements: universal skills carry zero screening value and vanish from postings ("proficient with email"), so a skill absent from hiring criteria may be pre-institutional *or* fully institutionalised. We confront this observational equivalence directly in H2 and §7.2 rather than assuming it away.

### 2.4 Emerging data occupations

Analytics engineering is a textbook case of an occupation being *made* in real time. The professions literature describes the mechanics: occupations claim jurisdiction over task areas through abstraction and boundary-work (Abbott 1988), and professionalisation projects follow recognisable sequences of naming, training, association, and credentialing (Wilensky 1964). What is historically unusual about data occupations is the role of vendors in the project: the term "analytics engineer" was coined and propagated substantially by dbt Labs itself, whose survey both names the population and narrates its priorities — the fashion-setter and the professionalising association are the same commercial actor. Recent studies of adjacent occupations document identity work under this kind of vendor-and-hype pressure: data scientists constructing omnivorous skill repertoires to hold an unsettled jurisdiction (Avnoon 2021), and the "delicate balancing act" of data-science occupational identity under enabling-and-threatening technological change (Vaast and Pinsonneault 2021). Our contribution to this stream is indirect but pointed: employer postings are where jurisdictional claims get cashed into role definitions, so the flatness/variance structure of posting language measures how settled the occupational template actually is.

### 2.5 LLM-assisted content analysis

Classical content-analysis methodology sets the bar: explicit codebooks, chance-corrected reliability, and the insistence that reliability and validity are distinct properties (Krippendorff 2018; Neuendorf 2017; Hayes and Krippendorff 2007). Text-as-data methods surveys reiterate that automated classification requires validation against human judgment for each new task and corpus (Grimmer and Stewart 2013; Gentzkow, Kelly and Taddy 2019).

The recent LLM-annotation literature is split between demonstrations and warnings. Gilardi, Alizadeh and Kubli (2023) found ChatGPT exceeding crowd-worker accuracy on several political-text tasks; Törnberg (2023) reported expert-level annotation on political tweets; Ziems et al. (2024) mapped where LLMs can and cannot serve computational social science, concluding they are viable zero-shot annotators for many classification tasks but with task-specific variance that demands per-task validation. The cautions: Ollion et al. (2023) warn against hype and emphasise non-reproducibility and prompt sensitivity; Pangakis, Wolken and Fasching (2023) show automated annotation *requires* validation against human labels task-by-task; Reiss (2023) documents alarming sensitivity of zero-shot classification to trivial prompt variation. The emerging consensus protocol — human gold standard first, LLM validated against it, then scaled — is the standard our pilot only partially meets (we document the gap honestly in §4.4 and close it in `[TIER-1]` work). Our pipeline adds one element we have not found elsewhere in the applied literature: **mandatory verbatim evidence quotes per classification, automatically verified against source text** — which converts hallucination from an invisible failure mode into a measurable one, and whose own failure analysis (§5.4) is a methods finding in its own right.

### 2.6 Synthesis and gap

Fashion theory predicts vendors will narrate anxieties that serve product agendas; institutional theory predicts organisations will absorb fashionable vocabulary ceremonially, with adoption decoupling from local need as institutionalisation completes; the postings literature establishes employer language as costly-but-curated discourse capable of carrying both signal and ceremony; the LLM literature supplies scalable measurement with known validation obligations. No prior study, to our knowledge, joins these: using the *internal covariance structure* of employer hiring language (does the norm track need?) to locate a vendor-narrated practice on the institutionalisation trajectory, with a second vendor-produced corpus as the discursive foil. That is the gap this paper fills.

---

## 3. Theory and hypotheses

Two hypotheses were fixed before analysis; one construct is developed exploratorily.

**H1 (calibration vs. institutionalisation).** If quality/rigour framing in postings reflects locally calibrated organisational need, its prevalence should covary with the cost of data errors (`domain_risk`) more strongly than with proxies for exposure to vendor/fashion vocabulary (`has_dbt`; authorship technicality). If instead the norm is institutionalised (Tolbert and Zucker 1996), prevalence should be high and *flat* across all partitions.
*Formally:* H1a — rigour framing is positively associated with domain risk. H1b (institutionalisation alternative) — rigour framing is statistically equivalent across domain risk, tool stack, and authorship strata (equivalence bounds V < 0.20). `[TIER-1: current data supports neither rejection; equivalence test underpowered at n=123 — report TOST at n≈300]`

**H2 (fashion stage of AI criteria).** Abrahamson distinguishes informal, imitative early adoption from institutionalised practice embedded in formal criteria. If AI-assisted work practice is an early-stage fashion inside organisations, then (a) formal hiring criteria should lag self-reported adoption by a wide margin, and (b) the criteria that do exist should concentrate in roles with structural AI dependence (AI-product and AI-consuming-platform contexts) rather than diffusing evenly.
*Rival explanation (zero-signal-value):* a fully diffused skill also vanishes from criteria (Spence 1973). Discriminator: under full diffusion, remaining mentions should be idiosyncratic; under early institutionalisation, they should cluster structurally — (b) is therefore the load-bearing sub-hypothesis, not (a).

**Exploratory construct — ceremonial rigour (means-ends decoupling).** Following Bromley and Powell (2012), we define a posting as *ceremonially rigorous* when it carries rigour orientation in its overall framing but does not operationalise quality into an owned responsibility of the hire (`testing_framing = absent`). The prevalence of ceremonial rigour among rigour-framed postings measures the policy-practice gap inside the employer discourse itself. We report its distribution and correlates without confirmatory claims.

---

## 4. Method

### 4.1 The vendor corpus (discursive foil)

Four editions of dbt Labs' *State of Analytics Engineering* (2023–2026; n=567/456/459/363). Distribution is through the vendor's community channels; in 2023 — the only year with raw data released — 76% of respondents already used dbt. Headline claims per year, and their alignment with contemporaneous product priorities, are tabulated in Appendix A of the companion report. We treat these documents as fashion-setting discourse in Abrahamson's sense, not as population estimates.

### 4.2 The employer corpus

132 job postings collected April–July 2026 in the European market (Berlin/DACH-heavy; Nordics, UK, France, selected remote). Analytical cohort: 123 (116 AE/BI + 7 team-lead; 6 data-engineering and 3 other postings excluded as different discourse populations). Full posting text archived per record with dated identifiers.

`[TIER-1: collection-protocol statement — inclusion rule, source channels, and skip criteria — and a neutral validation corpus (all AE postings on one major board in one window, no applicant filter) to bound double-selection bias; see §7.1]`

### 4.3 Codebook

Ten behavioural dimensions, defined in a written codebook with decision rules and evidence requirements: `velocity_vs_rigour`, `domain_risk`, `data_team_maturity`, `greenfield_vs_fix`, `stakeholder_orientation`, `autonomy_level`, `jd_authorship`, `collaboration_width`, plus three added mid-study (`ai_role`, `testing_framing`, `loss_aversion_framing`; coverage n=86 — April–June records only `[TIER-1: backfill July batch]`). Tool mentions (`has_dbt` etc.) are keyword flags, not coded dimensions.

### 4.4 Classification pipeline and reliability

A subset of records was hand-coded by the first author during collection; the remainder classified by majority vote over three independent runs of an LLM (claude-haiku-4-5) against the codebook. Every LLM classification must cite a verbatim evidence quote, automatically verified against source text by a segment-aware substring check (§5.4 reports the verifier's own failure analysis). Inter-run self-consistency is high on structured dimensions (0.94–0.95) and low on underspecified ones (`jd_authorship` 0.58; `autonomy_level` 0.72); human–model agreement ranges 13–54% by dimension — read as codebook-ambiguity diagnostics, not model accuracy, since no adjudicated gold standard yet exists.

`[TIER-1: the validation design must be inverted to meet the Pangakis et al. (2023) standard — second trained coder on a stratified 25–30% sample, adjudication, Cohen's κ per dimension, then LLM validated against adjudicated labels, then scaled; Krippendorff's α replacing raw agreement throughout. jd_authorship and autonomy_level decision rules to be tightened first.]`

### 4.5 Known threats accepted at pilot stage

(1) **Double selection** — the corpus passed through one job-seeker's relevance filter before analysis; headline findings are wave-stable (rigour: 81% pre-July vs 76% July) but wave-stability does not remove collector taste. (2) **Geography** — European, Berlin-heavy; no claim travels to North America. (3) **Power** — minimum detectable effect V≈0.28 at n=123; sparse cells handled with exact tests `[TIER-1: currently χ² in places where expected frequencies < 5]`. (4) **Provenance confound** — manual codes concentrate in early collection waves `[TIER-1: stratified reporting by provenance]`.

### 4.6 Analysis

Categorical associations: Fisher-Freeman-Halton exact tests with Cramér's V; ordinal pairs additionally Jonckheere-Terpstra `[TIER-1: rerun — pilot used Pearson χ² throughout]`. Exploratory battery controlled with Benjamini-Hochberg FDR. Flatness claims assessed by equivalence testing (TOST) rather than failure-to-reject. Proportions reported with Wilson intervals.

---

## 5. Results

*(Statistics below are the pilot values, independently recomputed and replicated from the archived data; test-family caveats per §4.6 apply.)*

### 5.1 H1 — rigour is prevalent and flat: the institutionalisation signature

Rigour orientation dominates the cohort (80%; 95% Wilson CI ≈ 72–86%), with pure velocity framing essentially absent (1/123). Association with domain risk: χ²=5.01, p=0.286, V=0.14; with dbt adoption: χ²=2.20, p=0.333, V=0.13; across authorship strata: 77/84/78% (flat). H1a is unsupported — rigour does not track stakes. The institutionalisation alternative (H1b) is *consistent with* every partition tested — the norm is high everywhere and differentiates nowhere — but at this n the design cannot statistically confirm equivalence, only report the observed flatness. Per Tolbert and Zucker's temporal signature, this pattern is what a completed diffusion looks like; per §4.6, confirming it requires the powered equivalence test. What can be said now: the vendor narrative's premise that quality anxiety is a *response to rising stakes* finds no support in how employers distribute the vocabulary.

### 5.2 H2 — AI criteria: a large gap, structurally concentrated

Among coded postings (n=86), 83% expect no AI skill of any kind; 16% seek builders of AI-consumed infrastructure (`ai_enabler`); 1% seek AI-tool users — against the vendor survey's claim of 72% *daily* AI-coding use. H2a's gap is large and directionally as predicted. The discriminating sub-hypothesis H2b: `ai_enabler` criteria concentrate in internal-data/platform-facing roles (9/14) rather than spreading evenly (exact test p≈0.06, V=0.29 — marginal at pilot n). Because the mentions cluster structurally rather than idiosyncratically, the pattern leans toward *early institutionalisation in structurally dependent niches* over the zero-signal-value rival — but the rival is not eliminated, and the temporal censoring of this dimension in the pilot (§4.3) means the estimate is stale by one collection wave. `[TIER-2: wave-2 collection converts this from a cross-sectional gap into a diffusion trajectory — the fashion-theoretic quantity of actual interest.]`

### 5.3 Ceremonial rigour — the decoupling measure

Of coded postings, 59% assign testing/quality as an owned responsibility of the hire; 36% carry no testing operationalisation at all. Within *rigour-framed* postings, roughly a third are ceremonially rigorous: the vocabulary is present, the accountability is not. This is means-ends decoupling rendered measurable in hiring text — organisations displaying the institutionalised vocabulary while leaving its enforcement structure unbuilt (Bromley and Powell 2012; Meyer and Rowan 1977). Notably, the *direction* of the 2026 vendor narrative (governance lagging AI adoption) is inverted in employer discourse: governance accountability is far further institutionalised into formal criteria (59%) than AI skill (17% combined). The vendor's deficit story and the employers' hiring language disagree about which side of the gap is deficient.

### 5.4 Methods finding — when the verifier is the defect

The evidence-verification layer initially flagged 391 LLM-cited quotes as absent from source text — an apparent mass-hallucination signal. Investigation attributed 74% of flags to the *verifier*: dimensions that legitimately synthesise evidence across non-adjacent bullets produce semicolon-joined quotes that a single-substring check cannot recognise, though every segment was verbatim-present. The remaining ~26% were single-word paraphrase drift, not fabrication. The episode is a worked demonstration of Krippendorff's (2018) distinction between reliability and validity operating *inside the tooling*: a verifier can be perfectly consistent and consistently wrong. For the growing LLM-annotation literature (§2.5), the implication is uncomfortable and useful — validation infrastructure needs validation, and audit trails (mandatory quotes) are what made the tooling's failure discoverable at all.

### 5.5 Exploratory structure (FDR-controlled)

Three robust relationships characterise the market's covariance structure: team maturity × mission (early=greenfield 70%, mature=greenfield 3%; V=0.46) — the strongest structure in the corpus; domain risk × stakeholder orientation (high-risk concentrates in finance; V=0.47) — consistent with coercive isomorphism, since finance's risk hierarchy is externally imposed; and authorship × tool naming (hiring-manager-authored postings name dbt at 79% vs recruiters' 28%; V=0.37) — a fidelity gradient *within* the employer discourse that refines the revealed-preference reading: who wrote the text changes how much preference it reveals. Seniority titles predict autonomy weakly at the modal title ("Senior": 47/22/31 across strategic/mixed/execution) — title inflation as signal degradation (Spence 1973).

---

## 6. Discussion

### 6.1 Theoretical contributions

**Dual-discourse designs can locate a practice on the institutionalisation trajectory.** Single-corpus fashion studies measure discourse volume; comparing vendor talk with employer hiring text lets the *covariance structure* of the costlier corpus do the diagnostic work. Rigour vocabulary that is everywhere and correlated with nothing is post-diffusion ceremony; AI criteria that are almost nowhere but structurally clustered are pre-diffusion practice. Same data type, two different institutional clocks read off one corpus.

**Job postings are neither cheap talk nor revealed preference — and their intermediate position is the methodological asset.** Against Deming and Kahn's revealed-preference reading, our own results show employer language carrying ceremony (flat rigour; a third of it unoperationalised). Against a pure-genre reading, tool requirements and structural clusters carry real screening information, with fidelity gradients by author. The lesson for IS and labour-economics text work alike: model the posting as a *two-layer* document — ceremonial frame plus operational criteria — and put the analytical weight on the second layer and on layer *disagreement*, which is where decoupling becomes visible.

**The fashion-setter and the professionalisation project can be the same actor.** Analytics engineering's naming, training, community, and annual self-survey all route through one vendor. This collapses Abbott's jurisdiction-claiming and Abrahamson's fashion-setting into a single commercial entity — a configuration the professions literature has not theorised and that data occupations make increasingly common.

### 6.2 Practical implications

For employers: rigour boilerplate is market wallpaper; differentiation lives in operationalised accountability and specific tool context — the signals hiring-manager-authored postings already carry. For candidates: read the criteria layer, not the frame (verbs over adjectives; titles are weak signals; early-stage maturity is the reliable strategic-autonomy predictor). For consumers of vendor surveys: read them as expectation-setting genre documents (Pollock and Williams 2010) — informative about community sentiment, structurally incapable of measuring the profession they name.

### 6.3 Limitations

Stated bluntly: this is a pilot. Single collector (double selection), single market, n=123 with V≈0.28 detectable effects, one human coder without adjudication, an LLM pipeline validated by self-consistency rather than gold standard, three dimensions temporally censored, cross-sectional where the theory is dynamic. Each has a named remediation (§4 tiers); none is waved away. The claims defensible at pilot scale are the flatness *pattern*, the gap *direction*, the ceremonial-rigour *construct*, and the methods contribution — not point estimates.

### 6.4 Future research

(1) Wave-2 and wave-3 collection against the frozen codebook, pre-registered, converting both hypotheses into trajectory tests — does AI-criterion prevalence climb and structurally de-concentrate as institutionalisation proceeds? Does ceremonial rigour shrink as enforcement structures build, or persist as stable decoupling? (2) A North American arm to test whether the flatness replicates under different labour-market institutions. (3) Interview-stage data linking posting ceremony to actual screening behaviour — closing the loop from discourse to practice that no text corpus alone can close. (4) Replication of the two-layer posting model on other vendor-narrated occupations (platform engineering, prompt engineering) where fashion-setters are similarly identifiable.

---

## References

- Abbott, A. (1988). *The System of Professions: An Essay on the Division of Expert Labor*. University of Chicago Press.
- Abrahamson, E. (1991). Managerial fads and fashions: The diffusion and rejection of innovations. *Academy of Management Review*, 16(3), 586–612.
- Abrahamson, E. (1996). Management fashion. *Academy of Management Review*, 21(1), 254–285.
- Abrahamson, E., & Fairchild, G. (1999). Management fashion: Lifecycles, triggers, and collective learning processes. *Administrative Science Quarterly*, 44(4), 708–740.
- Atalay, E., Phongthiengtham, P., Sotelo, S., & Tannenbaum, D. (2020). The evolution of work in the United States. *American Economic Journal: Applied Economics*, 12(2), 1–34.
- Avnoon, N. (2021). Data scientists' identity work: Omnivorous symbolic boundaries in skills acquisition. *Work, Employment and Society*, 35(2), 332–349.
- Backhaus, K., & Tikoo, S. (2004). Conceptualizing and researching employer branding. *Career Development International*, 9(5), 501–517.
- Bangerter, A., Roulin, N., & König, C. J. (2012). Personnel selection as a signaling game. *Journal of Applied Psychology*, 97(4), 719–738.
- Baskerville, R. L., & Myers, M. D. (2009). Fashion waves in information systems research and practice. *MIS Quarterly*, 33(4), 647–662.
- Benders, J., & van Veen, K. (2001). What's in a fashion? Interpretative viability and management fashions. *Organization*, 8(1), 33–53.
- Borup, M., Brown, N., Konrad, K., & van Lente, H. (2006). The sociology of expectations in science and technology. *Technology Analysis & Strategic Management*, 18(3–4), 285–298.
- Boxenbaum, E., & Jonsson, S. (2008). Isomorphism, diffusion and decoupling. In R. Greenwood et al. (Eds.), *The SAGE Handbook of Organizational Institutionalism* (pp. 78–98). Sage.
- Bromley, P., & Powell, W. W. (2012). From smoke and mirrors to walking the talk: Decoupling in the contemporary world. *Academy of Management Annals*, 6(1), 483–530.
- Cammeraat, E., & Squicciarini, M. (2021). *Burning Glass Technologies' Data Use in Policy-Relevant Analysis: An Assessment*. OECD Science, Technology and Industry Working Papers.
- Carnevale, A. P., Jayasundera, T., & Repnikov, D. (2014). *Understanding Online Job Ads Data: A Technical Report*. Georgetown University Center on Education and the Workforce.
- Collingridge, D. (1980). *The Social Control of Technology*. Frances Pinter.
- Deming, D., & Kahn, L. B. (2018). Skill requirements across firms and labor markets: Evidence from job postings for professionals. *Journal of Labor Economics*, 36(S1), S337–S369.
- DiMaggio, P. J., & Powell, W. W. (1983). The iron cage revisited: Institutional isomorphism and collective rationality in organizational fields. *American Sociological Review*, 48(2), 147–160.
- Gentzkow, M., Kelly, B., & Taddy, M. (2019). Text as data. *Journal of Economic Literature*, 57(3), 535–574.
- Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-annotation tasks. *Proceedings of the National Academy of Sciences*, 120(30), e2305016120.
- Grimmer, J., & Stewart, B. M. (2013). Text as data: The promise and pitfalls of automatic content analysis methods for political texts. *Political Analysis*, 21(3), 267–297.
- Hayes, A. F., & Krippendorff, K. (2007). Answering the call for a standard reliability measure for coding data. *Communication Methods and Measures*, 1(1), 77–89.
- Hershbein, B., & Kahn, L. B. (2018). Do recessions accelerate routine-biased technological change? Evidence from vacancy postings. *American Economic Review*, 108(7), 1737–1772.
- Kieser, A. (1997). Rhetoric and myth in management fashion. *Organization*, 4(1), 49–74.
- Krippendorff, K. (2018). *Content Analysis: An Introduction to Its Methodology* (4th ed.). Sage.
- Lakens, D. (2017). Equivalence tests: A practical primer for t tests, correlations, and meta-analyses. *Social Psychological and Personality Science*, 8(4), 355–362.
- Marinescu, I., & Wolthoff, R. (2020). Opening the black box of the matching function: The power of words. *Journal of Labor Economics*, 38(2), 535–568.
- Meyer, J. W., & Rowan, B. (1977). Institutionalized organizations: Formal structure as myth and ceremony. *American Journal of Sociology*, 83(2), 340–363.
- Miranda, S. M., Kim, I., & Summers, J. D. (2015). Jamming with social media: How cognitive structuring of organizing vision facets affects IT innovation diffusion. *MIS Quarterly*, 39(3), 591–614.
- Modestino, A. S., Shoag, D., & Ballance, J. (2016). Downskilling: Changes in employer skill requirements over the business cycle. *Labour Economics*, 41, 333–347.
- Modestino, A. S., Shoag, D., & Ballance, J. (2020). Upskilling: Do employers demand greater skill when workers are plentiful? *Review of Economics and Statistics*, 102(4), 793–805.
- Neuendorf, K. A. (2017). *The Content Analysis Guidebook* (2nd ed.). Sage.
- Ollion, É., Shen, R., Macanovic, A., & Chatelain, A. (2023). *ChatGPT for Text Annotation? Mind the Hype!* SocArXiv preprint.
- Orlikowski, W. J., & Barley, S. R. (2001). Technology and institutions: What can research on information technology and research on organizations learn from each other? *MIS Quarterly*, 25(2), 145–165.
- Pangakis, N., Wolken, S., & Fasching, N. (2023). *Automated Annotation with Generative AI Requires Validation*. arXiv:2306.00176.
- Pollock, N., & Williams, R. (2010). The business of expectations: How promissory organizations shape technology and innovation. *Social Studies of Science*, 40(4), 525–548.
- Pollock, N., & Williams, R. (2016). *How Industry Analysts Shape the Digital Future*. Oxford University Press.
- Rafaeli, A., & Oliver, A. L. (1998). Employment ads: A configurational research agenda. *Journal of Management Inquiry*, 7(4), 342–358.
- Ramiller, N. C., & Swanson, E. B. (2003). Organizing visions for information technology and the information systems executive response. *Journal of Management Information Systems*, 20(1), 13–50.
- Reiss, M. V. (2023). *Testing the Reliability of ChatGPT for Text Annotation and Classification: A Cautionary Remark*. arXiv:2304.11085.
- Rogers, E. M. (2003). *Diffusion of Innovations* (5th ed.). Free Press.
- Spence, M. (1973). Job market signaling. *Quarterly Journal of Economics*, 87(3), 355–374.
- Staw, B. M., & Epstein, L. D. (2000). What bandwagons bring: Effects of popular management techniques on corporate performance, reputation, and CEO pay. *Administrative Science Quarterly*, 45(3), 523–556.
- Stiglitz, J. E. (1975). The theory of "screening," education, and the distribution of income. *American Economic Review*, 65(3), 283–300.
- Swanson, E. B., & Ramiller, N. C. (1997). The organizing vision in information systems innovation. *Organization Science*, 8(5), 458–474.
- Swanson, E. B., & Ramiller, N. C. (2004). Innovating mindfully with information technology. *MIS Quarterly*, 28(4), 553–583.
- Tolbert, P. S., & Zucker, L. G. (1983). Institutional sources of change in the formal structure of organizations: The diffusion of civil service reform, 1880–1935. *Administrative Science Quarterly*, 28(1), 22–39.
- Tolbert, P. S., & Zucker, L. G. (1996). The institutionalization of institutional theory. In S. Clegg et al. (Eds.), *Handbook of Organization Studies* (pp. 175–190). Sage.
- Törnberg, P. (2023). *ChatGPT-4 Outperforms Experts and Crowd Workers in Annotating Political Twitter Messages with Zero-Shot Learning*. arXiv:2304.06588.
- Vaast, E., & Pinsonneault, A. (2021). When digital technologies enable and threaten occupational identity: The delicate balancing act of data scientists. *Journal of Strategic Information Systems*, 30(3), 101680.
- van Lente, H. (2012). Navigating foresight in a sea of expectations: Lessons from the sociology of expectations. *Technology Analysis & Strategic Management*, 24(8), 769–782.
- Wang, P. (2010). Chasing the hottest IT: Effects of information technology fashion on organizations. *MIS Quarterly*, 34(1), 63–85.
- Wilensky, H. L. (1964). The professionalization of everyone? *American Journal of Sociology*, 70(2), 137–158.
- Ziems, C., Held, W., Shaikh, O., Chen, J., Zhang, Z., & Yang, D. (2024). Can large language models transform computational social science? *Computational Linguistics*, 50(1), 237–291.

---

## Appendix: mapping from the pilot report

| Paper element | Source in `report.md` | Status |
|---|---|---|
| H1 test | §4.0 Prediction 1, §4.1–4.2 | Replicated; needs exact tests + TOST |
| H2 test | §4.0 Prediction 2, §4.10 | Replicated; July batch uncoded — backfill before resubmitting numbers |
| Ceremonial rigour | §4.11 (was a throwaway paragraph) | Promoted to named construct |
| Verifier failure analysis | §9.1 | Promoted to methods finding (§5.4) |
| Exploratory structure | §4.9 Findings A–G | Kept; FDR control to be applied |
| Secondary lenses (Rogers, Collingridge) | §6 | Demoted to auxiliary predictions/footnotes — the paper runs on fashion + institutionalism only |
