"""
Derive a coarse geo_region bucket from a JD's free-text job_location string.

Buckets match analysis/index.html's GEO_LABELS:
  berlin, hamburg, nordics, uk_remote, france, benelux, iberia, ireland,
  dach_other, baltics, other_europe, global_remote, other
"""

import re

NORDICS_CITIES = [
    "stockholm", "gothenburg", "göteborg", "malmö", "malmo", "solna",
    "vantaa", "helsinki", "aarhus", "copenhagen", "copenhagen s",
    "vaxjo", "växjö", "sweden", "denmark", "finland", "norway", "oslo",
]

UK_MARKERS = [
    "united kingdom", "uk", "london", "manchester", "liverpool", "bath",
    "worthing", "luton", "holborn", "old street", "england", "scotland",
]

BERLIN_MARKERS = ["berlin"]
HAMBURG_MARKERS = ["hamburg"]

FRANCE_MARKERS = [
    "france", "paris", "lille", "lyon", "montreuil", "suresnes",
    "issy-les-moulineaux", "villeneuve", "btwin village", "nord,",
]

BENELUX_MARKERS = [
    "netherlands", "belgium", "luxembourg", "amsterdam", "eindhoven",
    "utrecht", "zeist", "hoofddorp", "enkhuizen", "groningen", "ede,",
    "wommelgem", "antwerpen", "mechelen", "ghent", "brussels", "bruxelles",
    "den bosch", "sandweiler", "bascharage",
]

IBERIA_MARKERS = [
    "spain", "portugal", "madrid", "barcelona", "lisbon", "lisboa",
    "porto", "maia,", "alicante", "palma",
]

IRELAND_MARKERS = ["ireland", "dublin"]

DACH_OTHER_MARKERS = [
    "germany", "austria", "switzerland", "munich", "münchen", "düsseldorf",
    "duesseldorf", "stuttgart", "frankfurt", "hannover", "münster",
    "weeze", "gerolstein", "vienna", "mattighofen",
]

BALTICS_MARKERS = [
    "estonia", "latvia", "lithuania", "tallinn", "vilnius",
]

GLOBAL_REMOTE_MARKERS = [
    "global remote", "100% remote", "remote europe", "remote (europe)",
    "remote - europe", "europe (remote", "remote (multiple hubs)",
    "remote (deutschland)", "remote (germany)", "remote (spain",
    "remote (spain / united kingdom)",
]

# Long tail of single-country clusters too small to warrant their own bucket.
OTHER_EUROPE_MARKERS = [
    "italy", "milan", "milano", "poland", "warsaw", "krakow", "cracow",
    "wroclaw", "poznań", "poznan", "bulgaria", "sofia", "romania", "iași",
    "iasi", "greece", "athens", "croatia", "cyprus", "limassol",
    "slovakia", "bratislava", "slovenia", "hungary", "serbia", "czech",
    "gibraltar",
]


def classify_geo_region(job_location: str) -> str:
    """Classify a job_location string into a coarse geo bucket."""
    if not job_location:
        return "other"

    loc = job_location.strip().lower()
    if loc in ("", "not stated in jd", "not specified"):
        return "other"

    is_remote = bool(re.search(r"\bremote\b|telecommute", loc))

    has_berlin = any(m in loc for m in BERLIN_MARKERS)
    has_hamburg = any(m in loc for m in HAMBURG_MARKERS)

    # City-specific buckets win even if the posting also allows remote work,
    # since the primary hub still tells us where demand is concentrated.
    if has_berlin and not has_hamburg:
        return "berlin"
    if has_hamburg and not has_berlin:
        return "hamburg"
    if has_berlin and has_hamburg:
        return "berlin"  # multi-city Berlin/Hamburg listings: Berlin as primary hub

    if any(m in loc for m in NORDICS_CITIES):
        return "nordics"
    if any(m in loc for m in UK_MARKERS):
        return "uk_remote"

    if is_remote:
        # "Remote" with no specific country/region anchor, or explicit global/Europe-wide remote.
        return "global_remote"

    # Country/sub-region buckets, checked in order of specificity.
    if any(m in loc for m in FRANCE_MARKERS):
        return "france"
    if any(m in loc for m in BENELUX_MARKERS):
        return "benelux"
    if any(m in loc for m in IBERIA_MARKERS):
        return "iberia"
    if any(m in loc for m in IRELAND_MARKERS):
        return "ireland"
    if any(m in loc for m in DACH_OTHER_MARKERS):
        return "dach_other"
    if any(m in loc for m in BALTICS_MARKERS):
        return "baltics"
    if any(m in loc for m in OTHER_EUROPE_MARKERS):
        return "other_europe"

    return "other"
