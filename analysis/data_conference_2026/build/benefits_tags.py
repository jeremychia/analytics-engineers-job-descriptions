#!/usr/bin/env python3
"""Tag benefits in every ad (full archived text, all languages) and write inputs/benefits_prevalence_by_region.csv.

One keyword pattern per tag; any_tag, any_specific (any tag but competitive_vague) and none are summary rows.
Regions from regions.grid_region; Wilson 95% intervals. Run: python3 build/benefits_tags.py
"""
import csv, json, math, re
from collections import defaultdict
from pathlib import Path
from regions import grid_region

HERE = Path(__file__).resolve().parent; ROOT = HERE.parents[2]
TAGS = {
    "health": r"health\s?(insurance|care|plan|cover(age)?|benefits?)|medical (insurance|cover(age)?|plan|benefits?|aid)|private (medical|health)|dental|vision (insurance|plan|care)|\bBUPA\b|vitality health|mutuelle|compl[ée]mentaire sant[ée]|krankenversicherung|zorgverzekering|seguro (m[ée]dico|de salud)|seguro de sa[úu]de|assurance sant[ée]|\bHMO\b|\bHSA\b",
    "life_disability_ins": r"life (insurance|assurance|cover)|disability (insurance|cover|benefits?)|income protection|pr[ée]voyance|death in service|\bAD&D\b|accident insurance|unfallversicherung",
    "pension": r"pension(?! gap)|401\s?\(?k\)?|retirement (plan|savings|contributions?|scheme|benefits?|fund)|superannuation|plan d.[ée]pargne retraite|\bPERCO\b|altersvorsorge|pensioen|provident fund|\bEPF\b|\bCPF\b|kiwisaver|\bMPF\b|plan de pensiones",
    "equity": r"\bequity\b(?! (research|markets?|analyst|fund|investors?|partners?|firm|capital))|stock options?|share options?|\bRSUs?\b|restricted stock|\bESOP\b|\bESPP\b|employee (stock|share)|share (scheme|plan|purchase)|\bBSPCE\b|virtual (shares|stock)|\bVSOP\b|ownership stake",
    "bonus": r"(?<!preferred / )(?<!a )(?<!as a )(?<!is a )bonus(?! points?| skills| if| experience|:)|incentive (plan|scheme|pay|program)|variable (pay|compensation|remuneration|component)|r[ée]mun[ée]ration variable|prime[s]? (annuelle|sur objectifs|de performance|de vacances)|bonificaci[óo]n|variabele beloning",
    "profit_sharing": r"profit[- ]shar|int[ée]ressement|participation aux b[ée]n[ée]fices|gewinnbeteiligung|winstdeling|erfolgsbeteiligung",
    "thirteenth_month": r"1[34]th[- ]month|1[34](e|[èe]me)? mois|1[34]\.? monatsgehalt|thirteenth|dertiende maand|vakantiegeld|urlaubsgeld|weihnachtsgeld|holiday pay of 8",
    "pto": r"\b\d{2}\s?(\+\s?)?(days?|jours?|tage|dagen|d[íi]as)\b[^.\n]{0,40}(holiday|vacation|leave|annual|PTO|paid time off|time off|cong[ée]s|urlaub|vakantie|vacaciones)|paid time off|\bPTO\b|annual leave|vacation (days|time|policy|allowance)|holiday (allowance|entitlement)|unlimited (holiday|vacation|PTO|time off|leave)|cong[ée]s pay[ée]s|urlaubstage|vakantiedagen|days? off\b|generous (holiday|leave|time off)|paid (holidays|leave|vacation)",
    "rtt_french_leave": r"\bRTT\b|r[ée]duction du temps de travail",
    "sick": r"sick (leave|pay|days?)|paid sick|sickness (pay|benefit|absence|insurance)|enhanced sick|lohnfortzahlung",
    "parental": r"parental leave|maternity|paternity|family leave|cong[ée] (maternit[ée]|paternit[ée]|parental)|elternzeit|ouderschapsverlof|adoption leave|parental (benefits?|support|policy)|shared parental",
    "childcare_family": r"child\s?care|daycare|day care|cr[èe]che|\bkita\b|kinderopvang|guarder[íi]a|family (support|benefits?|planning|forming)|fertility|\bIVF\b|egg freezing|back-?up care|carrot fertility|maven clinic|\bmaven\b",
    "remote_flex": r"remote|hybrid|work(ing)? from (home|anywhere)|\bWFH\b|t[ée]l[ée]travail|homeoffice|home office|thuiswerk|teletrabajo|work from abroad|workation|mobiles arbeiten",
    "flex_hours": r"flexib(le|ility) (in )?(working )?(hours|schedules?|working|time|work)|flexi[- ]?time|flextime|gleitzeit|horaires? flexibles?|flexibele werktijden|core hours|4[- ]day (work ?)?week|compressed hours|flexible arbeitszeit",
    "home_office_equip": r"home[- ]office (budget|allowance|stipend|equipment|set-?up|package)|(equipment|hardware|set-?up) (budget|allowance|stipend)|remote (working |work )?(allowance|stipend)|(work from home|WFH) (allowance|stipend|budget)|laptop of your choice|macbook|latest (hardware|equipment)|forfait t[ée]l[ée]travail|indemnit[ée] (de )?t[ée]l[ée]travail|thuiswerkvergoeding",
    "learning": r"learning (and|&) development|\bL&D\b|plan de formation|formations? (continue|interne|certifiante|r[ée]guli[èe]re|technique)s?|budget (de )?formation|acc[èe]s [àa] des formations|learning (budget|platform|opportunit|allowance|stipend)|training (budget|programs?|programmes?|opportunit|allowance)|professional (development|growth)|development budget|conferences?|certifications? (paid|support|budget|reimburse)|udemy|coursera|linkedin learning|o'?reilly|(education|tuition)(al)? (budget|allowance|assistance|reimburse)|tuition|plan de formation|weiterbildung|opleidingsbudget|career (development|growth|progression)|growth opportunit|mentorship program",
    "language_training": r"language (classes|courses|lessons|training|learning|school)|cours (de langue|de fran[çc]ais|d.anglais)|sprachkurs|babbel|duolingo|(english|french|german|dutch|spanish|swedish|danish|finnish|norwegian) (classes|courses|lessons)",
    "wellbeing": r"well-?being|wellness|mental health|\bgym\b|fitness|urban sports|wellpass|gympass|\bEGYM\b|headspace|\bcalm\b app|yoga|massage|therapy|counsel(l)?ing|employee assistance|\bEAP\b|bien-[êe]tre|salle de sport|sport(s)? (allowance|membership|subsidy|budget)|modern health|spring health|\bOpenUp\b|\bnilo\b",
    "employee_wellness_health_check": r"health (checks?|screenings?|assessments?)|medical (check|screening)|annual (physical|check-?up|medical)|check-?up|flu (jab|shot|vaccin)|vaccinations?|eye tests?",
    "meal": r"\bmeals?\b|lunch|free food|food (allowance|vouchers?|budget)|snacks?|tickets?[- ](restaurant|resto)|restauration du site|edenred|lunchr|bimpli|apetiz|panier repas|titres?[- ]restaurants?|carte (d[ée]jeuner|swile|restaurant)|\bswile\b|restaurant d.entreprise|cantine|canteen|kantine|essenszuschuss|lunchvergoeding|catered|breakfast|\bfruit\b|(free|barista|paid-for) coffee|ticket restaurant|cheques? (de )?comida|tickets? de comida",
    "transport": r"transport (allowance|subsidy|pass|card|costs|ticket|reimburse|benefit)|public transport|transports en commun|remboursement (des |du )?(frais de )?transport|tarjeta transporte|commut(e|ing|er) (allowance|subsidy|support|costs|benefits?|stipend)|travel (pass|card|allowance|subsidy)|navigo|cycle[- ]to[- ]work|bike (scheme|lease|leasing)|jobrad|bicycle|leas(e|ing) (car|bike|bicycle)|company car|car (allowance|lease)|parking|deutschlandticket|jobticket|forfait mobilit[ée]s|mobility (budget|allowance)|ov-?vergoeding|reiskosten|season ticket|mobilit[ée] durable",
    "discounts": r"discount|employee (pricing|offers|deals)|corporate benefits|reduced price|staff (shop|discount|offers)|r[ée]ductions|rabatt|korting|perks platform|\bdeals\b|comit[ée] d.entreprise|\bCSE\b",
    "events": r"team (events|outings|building|off-?sites?|dinners?|lunches|drinks|activities|trips?)|off-?sites?|company (events|parties|party|retreats?|trips?|gatherings)|social (events|activities|calendar|gatherings)|summer party|christmas party|holiday party|hackathons?|afterworks?|s[ée]minaires?|(annual|yearly) (trip|retreat)|friday drinks|vrijmibo|team spirit events|after-?work|ap[ée]ros?|team bonding|regular (team )?events|company-wide events",
    "volunteering_giving": r"volunteer|charit|give back|giving (back|program|campaign)|donation|matching gifts?|community (days?|service|engagement)|b[ée]n[ée]vol|m[ée]c[ée]nat|\bCSR days?|impact days?",
    "relocation": r"relocation|relocate|visa sponsorship|visa support|sponsor (your |a )?visa|moving (allowance|support|costs|package)|umzug|d[ée]m[ée]nagement|30% ruling|30%-regeling",
    "collective_agreement": r"collective (labou?r )?agreement|\bCAO\b|tarifvertrag|convention collective|\bsyntec\b|collective bargaining|tarifliche|convenio colectivo|kollektivavtal",
    "stipend_misc_phone": r"(mobile )?phone (allowance|plan|contract|subscription|bill)|company phone|internet (allowance|stipend|costs|subscription)|stipend|lifestyle (allowance|spending|account|budget)|(monthly|annual) (allowance|budget) (for|to spend)|flex(ible)? benefits? (budget|allowance|pot)|benefits? (budget|allowance|wallet)",
    "competitive_vague": r"competitive (salary|compensation|pay|package|remuneration|base|benefits|total rewards?)|attractive (salary|compensation|package|remuneration|benefits)|salaire (attractif|comp[ée]titif)|r[ée]mun[ée]ration (attractive|comp[ée]titive)|attraktive (verg[üu]tung|gehalt)|marktconform|excellent (benefits|package)|comprehensive benefits|great benefits|benefits package|salario competitivo",
}
COMPILED = {k: re.compile(v, re.I) for k, v in TAGS.items()}
REGIONS = ["US", "UK & Ireland", "France", "DACH", "Benelux", "Southern Europe", "CEE/Baltics", "Nordics", "APAC", "Other (CA/LatAm/MEA)", "Unknown"]


def wilson(k, n, z=1.96):
    if not n: return [0, 0]
    p = k / n; d = 1 + z * z / n; c = (p + z * z / (2 * n)) / d; h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return [c - h, c + h]


def tag_ad(text):
    t = {k: bool(p.search(text)) for k, p in COMPILED.items()}
    t["any_tag"] = any(t.values()); t["any_specific"] = any(v for k, v in t.items() if k not in ("competitive_vague", "any_tag")); t["none"] = not t["any_tag"]
    return t


def main():
    rows, by = [], defaultdict(list)
    for r in json.load(open(ROOT / "analysis/data.json")):
        txt = (ROOT / "data" / r["jd_id"] / "jd_archive.md").read_text(encoding="utf-8").split("## Layer B")[0]
        txt = re.sub(r"^\*\*URL:\*\*.*$", "", txt, flags=re.M)
        t = tag_ad(txt); by[grid_region(r)].append(t); by["ALL"].append(t)
    for reg in ["ALL"] + REGIONS:
        ads = by.get(reg, [])
        for tag in list(TAGS) + ["any_tag", "any_specific", "none"]:
            n = len(ads); k = sum(a[tag] for a in ads); lo, hi = wilson(k, n)
            rows.append({"region": reg, "tag": tag, "n": n, "k": k, "pct": round(100 * k / n, 1) if n else 0, "lo": round(100 * lo, 1), "hi": round(100 * hi, 1), "flag": "ci" if n >= 30 else "thin"})
    with open(HERE / "inputs/benefits_prevalence_by_region.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["region", "tag", "n", "k", "pct", "lo", "hi", "flag"]); w.writeheader(); w.writerows(rows)
    print({r["tag"]: r["pct"] for r in rows if r["region"] == "ALL"}); print({reg: len(v) for reg, v in by.items()})


if __name__ == "__main__":
    main()
