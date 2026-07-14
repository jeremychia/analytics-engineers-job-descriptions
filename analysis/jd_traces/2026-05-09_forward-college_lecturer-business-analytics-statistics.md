# Trace: 2026-05-09_forward-college_lecturer-business-analytics-statistics

## JD text (fed to classifier, Layer B stripped)

```
# Lecturer in Business Analytics and Statistics (Part-Time) — Forward College

**URL:** https://www.linkedin.com/jobs/view/4410103338/
**Location:** Berlin, Germany (Forward College Campus Berlin, Lohmühlenstraße 65, 12435 Berlin)
**Salary:** EUR 6.5 – 7.5k depending on experience
**Employment Type:** Part-time
**Start Date:** September 1, 2026 – April 30, 2027
**Application Deadline:** May 30, 2026

---

## Key Responsibilities

- Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material
- Design and grade four formative assessments
- Organise and provide 2 series of one-on-one tutoring sessions to students
- Teach 22 two-hour weekly seminars
- Provide approximately 15 hours of individual tutoring across the academic term

---

## Required Qualifications

- Experience in teaching Business Analytics and Statistics
- Demonstrated expertise in the subject matter
- Excellent level of English
- Legal right to work in Berlin/Europe (no visa sponsorship available)

---

## Preferred / Bonus Skills

- Passion for teaching and engaging students
- Curiosity about innovative pedagogical methods (including flipped classroom approach)
- Excellent interpersonal skills
- Ability to interact well with the international student body and staff

---

## Benefits

- Forward College values diversity and will prefer candidates from underrepresented groups when qualifications are equivalent

---

## Forward College Pedagogy — Key Details

**Class size:** ~15 students per seminar (part of a 150-student cohort)

**Flipped classroom in practice:**
- Students study independently 4–8 hours BEFORE each seminar (readings, videos, individual/team assignment)
- Students form study groups (2–4 students) to share difficulties and prepare a question list for the Fellow
- Seminars are NOT for content delivery — they are for tackling complex questions, debating, solving problems in teams, simulating real-life scenarios
- Students are expected to escalate the most challenging aspects of the material to the Fellow before the seminar so the Fellow can maximise class impact

**One-on-one tutorials (Oxbridge-inspired):**
- Weekly in Year 1 — Fellows review student performance on the most recent formative assessment
- Students are progressively expected to come with their own analysis of their performance (self-evaluation)
- Year 2–3: may shift to 2 students + Fellow to foster peer emulation

**Weekly formative assessments:**
- Each week: academic assessment task in exam conditions, 60–90 minutes
- Individual feedback delivered in the follow-up tutorial

**Tutored revisions:** Group sessions helping students prepare before the weekly assessment — cover methodological techniques and the most challenging course content

**Study groups:** Students regroup (2–4) to share learning before each seminar; mutual aid + completing the Fellow's pre-seminar assignment

**Personal development programme:** Annual 360° coaching sessions (cognitive, social, emotional, practical skills); students receive feedback from Fellows and peers and debrief with a personal coach

**Four intelligences — skill detail:**
- *Cognitive:* Learning agility, global challenges understanding, theoretical understanding, technical application, critical/analytical thinking, creativity, inquiry and research, written communication
- *Social:* Effective communication, connection, collaboration, influence & negotiation, visual communication, motivation and involvement, empathy, exchanging feedback
- *Emotional:* Courage & resilience, stress management & balance, mindfulness
- *Practical:* Digital skills, self-efficacy, entrepreneurship, decision making, adaptability, ethical conduct & integrity, project management, tech savviness, change management

---

## Course Content — ST2187 Business Analytics, Applied Modelling and Prediction (LSE)

**Module level:** 5 | **Credits:** 30 | **Notional study time:** 300 hours

**Summary:** Course extends and reinforces e…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | low | low | moderate | low | 33% | ✓ |
| collaboration_width | 2 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mature | mature | mature | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | hiring_manager | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | mixed | internal_data | 33% | ✓ |
| autonomy_level | execution | mixed | mixed | execution | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes assessment rigor, individual feedback, and structured evaluation with no pace or velocity signals, indicating a rigour-focused teaching orientation.

**Run 2:** `rigour` ✓
> Quote: "more precise, more accurate in their statements, more selective in their use of data, more critical of advice given to them"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes precision, accuracy, and critical thinking as core to preparing managers for business analytics, with no signals of speed, iteration, or velocity orientation.

**Run 3:** `rigour` ✓
> Quote: "Seminars are NOT for content delivery — they are for tackling complex questions, debating, solving problems in teams, simulating real-life scenarios"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes pedagogical rigor, structured assessment, detailed skill development, and quality teaching methodology with no velocity signals.

### domain_risk
**Manual:** `low`

**Run 1:** `low` ✓
> Quote: "Individual case study coursework (30%) + 3hr 15min closed-book written examination (70%)"
> Verified: ✓ found in JD
> Reasoning: This is an educational teaching role with no financial reporting, compliance, or mission-critical operational consequences; quality failures affect student learning, not business operations.

**Run 2:** `moderate` ✗
> Quote: "Managerial decision making"
> Verified: ✓ found in JD
> Reasoning: Errors in teaching business analytics affect business decisions made by managers without regulatory or compliance consequences, creating moderate risk.

**Run 3:** `low` ✓
> Quote: "Teach 22 two-hour weekly seminars"
> Verified: ✓ found in JD
> Reasoning: This is an educational teaching role with limited, recoverable consequences of errors, not a business-critical data role affecting financial reporting, compliance, or regulatory requirements.

⚠ **LLM inconsistency**: runs gave ['low', 'moderate', 'low']

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "Teach 22 two-hour weekly seminars"
> Verified: ✓ found in JD
> Reasoning: The JD describes teaching and tutoring responsibilities with no explicit named cross-functional teams, partner functions, or business stakeholders mentioned as collaboration partners.

**Run 2:** `0` ✗
> Quote: "Teach 22 two-hour weekly seminars; Organise and provide 2 series of one-on-one tutoring sessions to students"
> Verified: ✓ found in JD
> Reasoning: The JD describes an individual contributor role with no named professional teams or cross-functional partnerships explicitly identified as collaboration partners.

**Run 3:** `0` ✗
> Quote: "Ability to interact well with the international student body and staff"
> Verified: ✓ found in JD
> Reasoning: No named business functions, cross-functional teams, or external parties are explicitly identified as collaboration partners.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mature` ✗
> Quote: "Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: The role operates within an established, mature educational framework with structured LSE-based curriculum, defined pedagogical infrastructure, and implied multiple Fellow roles.

**Run 2:** `mature` ✗
> Quote: "Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: The pedagogical program is sophisticated with established LSE curriculum, detailed governance frameworks (flipped classroom, Oxbridge tutoring, four intelligences model), and comprehensive course structure indicating a mature educational environment.

**Run 3:** `mature` ✗
> Quote: "Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: The role operates within an established pedagogical framework from a leading institution with pre-defined objectives, 15-week curriculum, and structured teaching methodology.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mature`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic teaching verbs, but the extensive pedagogy section (flipped classroom, four intelligences framework, 360° coaching structure, study group composition) shows deep pedagogical specificity from an experienced educator.

**Run 2:** `hiring_manager` ✓
> Quote: "Teach 22 two-hour weekly seminars"
> Verified: ✓ found in JD
> Reasoning: The specific quantitative parameters (22 seminars, 2-hour duration, 15 hours tutoring) combined with detailed pedagogical methodology only come from someone directly managing this role.

**Run 3:** `hiring_manager` ✓
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: The responsibilities specify exact class counts, assessment structures, tutoring hours, and pedagogical details that only someone who has designed or delivered this program would know.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Aimed at managers who need to be 'more inquisitive, more precise, more accurate in their statements, more selective in their use of data, more critical of advice given to them.'"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role serves students as analytics capability builders and literacy developers, analogous to building internal analytics infrastructure for stakeholder decision-making.

**Run 2:** `mixed` ✗
> Quote: "Aimed at managers who need to be "more inquisitive, more precise, more accurate in their statements, more selective in their use of data, more critical of advice given to them.""
> Verified: ✓ found in JD
> Reasoning: The course teaches general business analytics to managers across unspecified functions for generic decision-making, not serving a single stakeholder category (commercial, product, finance, or internal_data).

**Run 3:** `internal_data` ✓
> Quote: "Teach 22 two-hour weekly seminars"
> Verified: ✓ found in JD
> Reasoning: The primary audience is the students and the institution's internal educational mission, serving skill development and learning outcomes rather than external commercial, product, or finance stakeholders.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Design and deliver seminars adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: The role owns curriculum and assessment design (strategic verbs: design) while executing within the LSE framework and delivering teaching (execution verbs: deliver, teach).

**Run 2:** `mixed` ✗
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: The lecturer has strategic autonomy to design seminars and assessments, while executing within the LSE curriculum framework and specified pedagogical approach.

**Run 3:** `execution` ✓
> Quote: "adopting the flipped classroom approach based on London School of Economics material"
> Verified: ✓ found in JD
> Reasoning: The role executes within a pre-defined pedagogical framework, established curriculum, and LSE-sourced content; autonomy is constrained by the structured program design.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or GenAI applications; it is a teaching position with no expected AI candidate skills.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, generative AI, or AI-ready data infrastructure; all required and preferred qualifications focus on traditional teaching expertise and subject matter mastery.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation that the candidate use or build AI tools; the curriculum covers traditional analytics methods only without any AI-related skill requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: Assessment language refers to educational evaluation of student learning outcomes, not data quality testing, observability frameworks, or data contracts; no data testing responsibility.

**Run 2:** `absent` ✗
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: Formative assessments are pedagogical tools for student evaluation, not data quality testing or observability frameworks; no data testing practice is mentioned or implied in the JD.

**Run 3:** `absent` ✗
> Quote: "Design and grade four formative assessments"
> Verified: ✓ found in JD
> Reasoning: The JD references educational assessment and grading of student learning outcomes, not data quality frameworks, data testing tools, or data reliability practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames teaching in pedagogical terms with no operational risk, compliance, audit, or prevention-of-bad-outcomes language typical of loss-aversion framing.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around teaching excellence and student learning outcomes with no mention of risk, compliance, reliability, or preventing bad outcomes.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely around teaching excellence, pedagogical innovation, and student skill development with no risk, compliance, reliability, or loss-prevention language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
