"""Grid regions for the benefits slide: the first place named in job_location wins, then the scraper's geo_region."""
import re

PLACES = {
    "US": r"\bUSA?\b|United States|\bU\.S\.|Seattle|Bellevue|Kirkland|Redmond|San Francisco|California|New York|\bNYC\b|Brooklyn|Manhattan|Washington, DC|Mountain View|Santa Clara|Stamford|Greenwich, CT|Alpharetta|Boston|Chicago|Austin|Denver|Atlanta|Los Angeles|Miami|Dallas|Houston|Philadelphia|Pittsburgh|Portland, OR|Remote US|, (?:WA|CA|NY|NJ|CT|GA|MI|VA|FL|TX|IL|MA|CO|OR|NC|PA|MN|OH|AZ|UT|MD|DC)\b",
    "UK & Ireland": r"United Kingdom|\bUK\b|England|Scotland|Wales|London|Manchester|Edinburgh|Glasgow|Bristol|Cardiff|Leeds|Birmingham|Oxford|Cambridge|Reading|Southampton|Basingstoke|Halifax|Liverpool|Brighton|Belfast|Ireland|Dublin|Cork\b|Galway",
    "France": r"France|Paris|Lyon|Toulouse|Nantes|Lille|Bordeaux|Marseille|Rennes|Montpellier|Strasbourg|le-de-France|Sophia|Grenoble|Clermont|Rouen|Nanterre|Puteaux|Courbevoie|Levallois|Issy|Annecy|Obernai|Nice\b",
    "DACH": r"German|Deutschland|Berlin|Hamburg|Munich|München|Frankfurt|Cologne|Köln|Bonn|Düsseldorf|Stuttgart|Leipzig|Dresden|Hannover|Nuremberg|Nürnberg|Karlsruhe|Mannheim|Austria|Österreich|Vienna|Wien|Innsbruck|Graz|Linz|Switzerland|Schweiz|Suisse|Zurich|Zürich|Basel|Geneva|Genève|Lausanne|Bern\b|Zug\b",
    "Benelux": r"Netherlands|Nederland|\bNL\b|Amsterdam|Rotterdam|Utrecht|Eindhoven|The Hague|Den Haag|Zwolle|Veghel|Belgi|Brussel|Bruxelles|Antwerp|Antwerpen|Ghent|Gent\b|Leuven|Flanders|Flemish|Luxembourg",
    "Southern Europe": r"Spain|España|Madrid|Barcelona|Valencia|Seville|Málaga|Malaga|Portugal|Lisbon|Lisboa|Porto|Italy|Italia|Milan|Milano|Rome|Roma|Turin|Torino|Greece|Athens|Attiki|Thessaloniki|Cyprus|Limassol|Nicosia|Malta|Gibraltar",
    "CEE/Baltics": r"Poland|Warsaw|Krak|Cracow|Wroc|Pozna|Gdańsk|Gdansk|Łódź|Czech|Prague|Brno|Slovak|Bratislava|Hungary|Budapest|Romania|Bucharest|Cluj|Iași|Bulgaria|Sofia|Croatia|Zagreb|Sloveni|Ljubljana|Serbia|Belgrade|Estonia|Tallinn|Latvia|Riga|Lithuania|Vilnius|Kaunas|Ukraine|Kyiv|Kazakhstan|Armenia|Georgia\b",
    "Nordics": r"Sweden|Sverige|Stockholm|Gothenburg|Göteborg|Malmö|Kiruna|Norway|Norge|Oslo|Bergen|Denmark|Danmark|Copenhagen|København|Billund|Aarhus|Finland|Suomi|Helsinki|Espoo|Tampere|Iceland|Reykjavik",
    "APAC": r"Singapore|Malaysia|Kuala Lumpur|Indonesia|Jakarta|Philippines|Manila|Taguig|Vietnam|Việt|Hà Nội|Ho Chi Minh|Saigon|Thailand|Bangkok|India|Bangalore|Bengaluru|Mumbai|Delhi|Hyderabad|Pune|Chennai|Gurgaon|Noida|China|Shanghai|上海|Beijing|Shenzhen|Hong Kong|Taiwan|Taipei|Japan|Tokyo|Korea|Seoul|Australia|Sydney|Melbourne|Brisbane|Perth|Adelaide|Canberra|New Zealand|Auckland|Wellington|Christchurch|Nepal|Sri Lanka|Pakistan|Bangladesh",
    "Other (CA/LatAm/MEA)": r"Canada|Toronto|Vancouver|Montreal|Montréal|Mexico|Brazil|Brasil|São Paulo|Argentina|Buenos Aires|Chile|Colombia|Bogot|Peru|Dubai|United Arab Emirates|\bUAE\b|Abu Dhabi|Saudi|Riyadh|Qatar|Doha|Israel|Tel Aviv|Turkey|Türkiye|Istanbul|Egypt|Cairo|Nigeria|Lagos|Kenya|Nairobi|South Africa|Johannesburg|Cape Town|Pretoria|Morocco",
}
COMPILED = {k: re.compile(v, re.I) for k, v in PLACES.items()}
GEO = {"nyc_metro": "US", "uk_remote": "UK & Ireland", "ireland": "UK & Ireland", "france": "France", "berlin": "DACH", "hamburg": "DACH",
       "dach_other": "DACH", "benelux": "Benelux", "iberia": "Southern Europe", "baltics": "CEE/Baltics", "nordics": "Nordics", "apac": "APAC"}
GRID = ["US", "UK & Ireland", "France", "DACH", "Benelux", "Southern Europe", "CEE/Baltics", "Nordics", "APAC"]


def grid_region(r):
    loc = r.get("job_location") or ""
    hits = [(m.start(), k) for k, p in COMPILED.items() for m in [p.search(loc)] if m]
    return min(hits)[1] if hits else GEO.get(r.get("geo_region"), "Unknown")
