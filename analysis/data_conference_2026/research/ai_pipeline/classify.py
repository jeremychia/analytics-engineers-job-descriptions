from seg import *
from roletext import ROLE,NON,INTRO
import pandas as pd
AIW=r"(?:\bAI\b|\bA\.I\.|\bAI[-/]|artificial intelligence|\bLLMs?\b|generative|\bgen[- ]?AI\b|\bKI\b|\bIA\b|intelligence artificielle|künstliche|kunstmatige)"
AIW=re.compile(AIW,re.I)
AIX=re.compile(r"\bagentic\b|\bagents?\b|\bMCP\b|\bRAG\b|\bvibe|copilot|chat ?gpt|openai|\bclaude\b|\bcursor\b|\bgemini\b|\bGPT|\bcodex\b|windsurf|large language|prompt|text[- ]to[- ]sql|machine[- ]learning|\bML\b|\bMLOps\b|\bLLMOps\b|deep learning|\bNLP\b|data science",re.I)
HIRE=re.compile(r"(?:\b(?:AI|artificial intelligence|automated (?:tools?|systems?|decision)|KI)\b).{0,100}(?:recruit\w*|hiring|screen\w*|your application|job application|application (?:process|materials|documents)|submit\w* (?:your )?application|applicants?|cv\b|resum\w*|cover letter|interview\w*|assessment)|(?:recruit\w*|hiring|screen\w*|your application|job application|application (?:process|materials)|applicants?|cv\b|resum\w*|cover letter|interview\w*).{0,100}\b(?:AI|artificial intelligence|KI)\b",re.I)
TOOLS=re.compile(r"claude(?: code)?|copilot|cursor|chat ?gpt|openai|\bgemini\b|\bcodex\b|windsurf|\bGPT|langchain|llamaindex|\bMCP\b|\bRAG\b|text[- ]to[- ]sql|mlflow|vertex|bedrock|sagemaker|hugging ?face|dust\b|glean|cortex|genie|dbt (?:mcp|copilot)|snowflake intelligence|n8n|lovable|\bv0\b|replit|\bdevin\b|notebooklm|perplexity|mistral|llama\b|anthropic|azure ai|ai foundry|power ?platform|copilot studio",re.I)
USE=re.compile(r"ai[- ](?:assisted|augmented|enabled development|powered (?:development|coding)|native (?:workflow|development|way))|ai coding|coding (?:agent|assistant)|vibe|ai[- ]generated|llm[- ]generated|(?:use|using|leverag\w*|utili[sz]\w*|adopt\w*|embrac\w*|work(?:ing)? with|proficien\w*|comfortable|fluen\w*|familiar\w*|experience (?:with|using)|hands-on|daily|day-to-day|curio\w*|enthusias\w*|passion\w*|open\w*|interest\w*|explor\w*).{0,60}(?:ai\b|ai[- ]tools?|llms?|generative|copilot|chat ?gpt|claude|cursor|gemini|codex)|(?:ai|llm|genai|gen ai|generative ai)[- ]?(?:tools?|assistants?|tooling|workflows?|productivity)|(?:accelerat|speed up|boost|improv|enhanc|automat|streamlin)\w*.{0,50}\bAI\b|\bAI\b.{0,40}(?:accelerat|speed up|productiv|efficien|workflow)|(?:nutz|verwend|arbeit|utilis|exploit|gebruik)\w*.{0,50}(?:KI|IA|AI)\b|prompt",re.I)
BUILD=re.compile(r"(?:build|building|built|develop\w*|design\w*|deploy\w*|implement\w*|creat\w*|ship\w*|product(?:ion|ionis|ionize)\w*|architect\w*|launch\w*|engineer\w*|own\w*|maintain\w*|operati\w*|orchestrat\w*|fine-?tun\w*|evaluat\w*|train\w*).{0,80}(?:\bAI\b|ai[- ]|llms?|\brag\b|agents?\b|agentic|machine learning|\bML\b|mlops|llmops|text[- ]to[- ]sql|generative|chatbot|genai|copilots?\b|models?\b.{0,20}(?:predict|ml)|nlp|deep learning|recommend\w+)|(?:ai|llm|rag|agent\w*|ml|machine learning)[- ](?:powered|driven|based|solutions?|products?|features?|applications?|apps?|systems?|pipelines?|models?|initiatives?|use cases?|projects?|capabilit\w+)|\bAI engineer|llmops|mlops|text[- ]to[- ]sql|conversational analytics|natural[- ]language (?:querying|query|analytics|interface)|chatbot|\bRAG\b",re.I)
PREP=re.compile(r"ai[- ]ready|ai[- ]consum|ready for ai|(?:foundation|basis|fuel|power|enable|support|feed|underpin|prepare|curate|serve|expose|govern|context|semantic)\w*.{0,60}(?:\bAI\b|llms?|agents?\b|agentic|genai|machine learning|\bML\b)|(?:\bAI\b|llms?|agents?|genai|ml).{0,50}(?:consum|access|context|grounding|ready|reliab\w+ data|trust\w* data|data quality|semantic layer|metadata|governed)|\bMCP\b|semantic layer.{0,80}(?:\bAI\b|llm|agent)|(?:\bAI\b|llm|agent).{0,80}semantic layer|data (?:products?|foundations?|platform|models?) (?:for|that power|powering|to support) .{0,30}(?:\bAI\b|ml|analytics and ai)",re.I)
GUARD=re.compile(r"review|validat|verif|critical|scrutin|quality|test(?:ing|s)?\b|human[- ]in[- ]the[- ]loop|oversight|guardrail|accura|hallucinat|governance|security|responsib|ethic|limitations|trust|sanity|audit|prüf|überprüf|kritisch|vérif|valid",re.I)
NICE=re.compile(r"nice[- ]to[- ]have|preferred|bonus|plus\b|desirable|advantageous|ideal(?:ly)?|a plus|would be (?:a |an )?(?:plus|bonus|great|nice|advantage)|beneficial|good to have|extra|not required|optional|is a plus|gerne|idealerweise|souhait|apprécié|pluspunt|wünschenswert|von vorteil|is een plus|est un plus|serait un plus|un plus|vorteilhaft|bij voorkeur|\bor similar\b.{0,0}",re.I)
REQ_H=re.compile(r"require|must|essential|qualif|looking for|you have|what you.?(?:ll )?(?:bring|need|have)|about you|profile|who you are|skills|experience|your background|we.?re looking|ideal candidate|dein profil|ihr profil|anforderung|profil|vous|compétences|mitbring|bringst|qualifikation|voraussetzung|wir suchen|vous avez|votre profil|ton profil|jouw profiel|wat breng|wie ben jij|competenties|wat vragen|ce que nous cherchons|ce que tu|what we need|what makes you|you are|fit",re.I)
DUTY_H=re.compile(r"respons|what you.?ll (?:do|be doing|own)|what you will|you will|you.?ll|the role|your role|day.to.day|your mission|tasks|duties|impact|key (?:tasks|activities)|aufgaben|verantwort|missions|taak|taken|wat ga je|tâches|activités|responsabilit|dein job|deine rolle|jouw rol|du kommer|ce que tu feras|vos missions|du in this role|how you.?ll|what you.?ll",re.I)
CO_H=re.compile(r"about (?:us|the company)|who we are|\\bour (?:mission|story|values|vision|company|product|team)|why (?:join|us|work)|company|the company|what we do|our culture|über uns|qui sommes|wij zijn|benefit|what we offer|we offer",re.I)
NON2=re.compile(r"benefit|what we offer|\\bwe offer|why join|in it for you|perks|who we are|\\babout (?:us|the company)|company (?:description|overview)|\\bour (?:values|mission|story|culture|company|vision)|culture|compensation|salary|equal opportunit|diversity|inclusion|privacy|cookie|how to apply|disclaimer|legal|life at|about the team|accommodation|recruitment|hiring process|interview",re.I)
def sectype(h):
    if re.match(r"^[Aa]bout [A-Z0-9]",h) and not re.match(r"^[Aa]bout (?:the|this|you|your)\b",h): return 'non'
    if NON2.search(h) or CO_H.search(h): 
        # but "the team" / "about the role" ambiguity: keep role if ROLE-ish strong
        if re.search(r"about the role|role|responsib|you.?ll|you will",h,re.I) and not re.search(r"about us|company|who we are|benefit|offer",h,re.I): return 'duty'
        return 'non'
    if NICE.search(h) and not re.search(r"\byou\b.*\bwill\b",h,re.I): return 'nice'
    if DUTY_H.search(h) and not REQ_H.search(h.replace("the role","")): return 'duty'
    if REQ_H.search(h): return 'req'
    if DUTY_H.search(h): return 'duty'
    return 'other'
def segs2(text):
    sec='';st='intro';out=[]
    for raw in text.split('\n'):
        l=raw.strip()
        if not l: continue
        if is_heading(l) and not re.match(r'^[-•*]',l):
            sec=l.strip('*#_ ').rstrip(':'); t=sectype(sec); st=t if t!='other' else (st if st!='intro' else 'other'); continue
        for s in re.split(r'(?<=[.!?])\s+',l):
            s=re.sub(r'^[-•*]\s*','',s.strip())
            if len(s)>12: out.append((sec,st,s))
    return out
COWORDS=re.compile(r"^(?:we |our |at [A-Z]|[A-Z][\w&.-]+ (?:is|are|was|has|builds|helps|provides|offers)|the company|founded|with (?:over|more|thousands)|join us|as (?:a|an|the) (?:leading|global|fast)|trusted by|customers|clients|mission|we.?re|\w+ builds|\w+ is a)",re.I)
YOUW=re.compile(r"\byou\b|\byour\b|candidate|will\b|responsible|must|should|experience|knowledge|proficien|familiar|ability|able to|skills?|understanding|interest|comfortable|curious|passion|hands-on|^(?:build|develop|design|create|own|lead|work|support|partner|collaborate|drive|maintain|ensure|manage|define|implement|use|leverage|help|deliver|translate|explore|evaluate|review|write|contribute)",re.I)
def classify_sentence(sec,st,s):
    """return (cat, level, concrete) or None"""
    if not (AIW.search(s) or AIX.search(s)): return None
    if HIRE.search(s) and not re.search(r"experience|knowledge|skills|proficien|familiar|build|develop|data\b|analytics",s,re.I): return ('HIRING_NOTICE','na',False)
    ai_core=bool(AIW.search(s)) or bool(re.search(r"agentic|\bagents?\b|\bMCP\b|\bRAG\b|\bvibe|copilot|chat ?gpt|openai|claude|cursor|gemini|\bGPT|codex|large language|text[- ]to[- ]sql|prompt|MLOps|LLMOps|machine learning|\bML\b",s,re.I))
    if not ai_core: return None
    # pure traditional ML / data science mention without AI wording => 'ML_ONLY'
    gen_ai=bool(AIW.search(s)) or bool(re.search(r"agentic|\bagents?\b|\bMCP\b|\bRAG\b|\bvibe|copilot|chat ?gpt|openai|claude|cursor|gemini|\bGPT|codex|large language|text[- ]to[- ]sql|prompt|LLMOps",s,re.I))
    if re.search(r"\bagents?\b",s,re.I) and not (AIW.search(s) or re.search(r"agentic|llm|\bAI\b|autonomous|workflow|tools?|claude|copilot|cursor",s,re.I)) :
        gen_ai=False  # "agent" in a non-AI sense (insurance agent, user agent)
    if re.search(r"\bcursor\b",s) and not re.search(r"AI|claude|copilot|IDE|code|agent|windsurf",s): gen_ai=False
    if re.search(r"\bprompt\b",s,re.I) and not re.search(r"AI|LLM|engineer|model|chat|GPT|claude",s,re.I): gen_ai=False
    if not gen_ai:
        if st in('non',): return None
        return ('ML_ONLY','duty' if st=='duty' else 'nice' if (st=='nice' or NICE.search(s)) else 'req',bool(TOOLS.search(s)))
    ENVTOOL=bool(re.search(r"claude code|cursor|copilot|chat ?gpt|codex|windsurf",s,re.I)) and bool(re.search(r"\b(we|our team|team) (use|work|code|run|build|ship|are using|rely)|tech stack|stack",s,re.I))
    # company description?
    if (st=='non' or (st in('intro','other') and COWORDS.search(s) and not re.search(r"\byou\b|\byour\b|candidate",s,re.I))) and not ENVTOOL:
        return ('COMPANY','na',False)
    if st in('intro','other') and not YOUW.search(s): return ('COMPANY','na',False)
    if st=='non' and re.search(r"\byou\b.{0,60}(?:have|will|can|use|leverage|build|bring)|experience (?:with|in|of)|proficien|familiar|you.?ll",s,re.I) and not re.search(r"\bwe\b|\bour\b",s,re.I): st='req'
    if st=='non' and re.match(r"^(?:build|develop|design|create|integrat\w+|own|lead|support|partner|collaborate|drive|define|implement|use|leverage|deliver|evaluate|enable)\b",s,re.I): st='duty'
    level='duty' if st=='duty' else 'nice' if (st=='nice' or NICE.search(s)) else 'req' if st=='req' else 'duty' if st in('intro','other') else 'req'
    if st=='other' and re.search(r"\byou\b|candidate|experience|knowledge|proficien|familiar",s,re.I): level='req' if not NICE.search(s) else 'nice'
    if st=='duty' and re.search(r"(?:experience|proficien|familiar|knowledge|comfortable|curios)",s,re.I) and not re.search(r"^(?:you will|build)",s,re.I): level='req' if not NICE.search(s) else 'nice'
    strong_use=bool(SUSE.search(s)); strong_build=bool(SBUILD.search(s)); prep=bool(SPREP.search(s))
    if strong_build and not (strong_use and not re.search(r"build|develop|deploy|implement|design|contribut",s,re.I)): cat='BUILD'
    elif prep and not strong_use: cat='PREP'
    elif strong_use: cat='USE'
    elif prep: cat='PREP'
    elif BUILD.search(s): cat='BUILD'
    elif USE.search(s): cat='USE'
    else: cat='GENERIC'
    conc=bool(TOOLS.search(s)) or bool(re.search(r"ai[- ]assisted (?:\w+ ){0,2}(?:development|coding|documentation|testing|code|analytics|engineering)|ai[- ]generated (?:code|sql)|prompt engineering|coding (?:agent|assistant)|ai coding|vibe cod|evals?\b|evaluations?|text[- ]to[- ]sql|agents? (?:that|to|for|which)|(?:document|test|review|generat|writ|debug|explor|summar|classif|extract|enrich)\w*.{0,40}\b(?:AI|LLMs?)\b|\b(?:AI|LLMs?)\b.{0,40}(?:document|test|review|generat|debug|summar|classif|extract|enrich)|semantic layer|metadata|data (?:contracts?|quality|models?)",s,re.I))
    return (cat,level,conc)
SUSE=re.compile(r"ai[- ](?:assisted|augmented|native|first|enabled development|powered (?:development|coding))|ai coding|coding (?:agents?|assistants?)|vibe|ai[- ]generated|llm[- ]generated|(?:ai|llm|genai|gen ai|generative ai|ki|ia)[- ]?(?:tools?|tooling|assistants?|workflows?|productivity|outputs?)|copilot|claude|cursor|chat ?gpt|codex|windsurf|gemini|agentic (?:development|coding|engineering)|(?:use|using|leverag\w*|utili[sz]\w*|embrac\w*|adopt\w*|fluent|comfortable|curious about|proficient|inzetten|nutz\w*|utilis\w*)\W+(?:\w+\W+){0,4}(?:\bAI\b|llms?|ki\b|ia\b|generative)|prompt",re.I)
SBUILD=re.compile(r"(?:build|building|built|develop\w*|design\w*|deploy\w*|implement\w*|creat\w*|ship\w*|architect\w*|launch\w*|engineer\w*|contribut\w*|production\w*|orchestrat\w*|fine-?tun\w*|evaluat\w*|monitor\w*|bouw\w*|entwickl\w*|constru\w*)\W+(?:\w+\W+){0,6}(?:ai (?:agents?|solutions?|products?|features?|applications?|apps?|systems?|models?|use cases?|assistants?|analysts?|capabilit\w+|initiatives)|llm[- ]?(?:powered|based|driven|apps?|applications?|features?)|\brag\b|agents?\b|agentic|chatbots?|text[- ]to[- ]sql|mlops|llmops|genai|machine learning (?:models?|pipelines?|systems?)|ml (?:models?|pipelines?|systems?)|conversational|natural[- ]language (?:querying|interface|analytics))|ai[- ](?:powered|driven) (?:analytics|insights?|reporting|product|feature|app)|\bAI engineer",re.I)
SPREP=re.compile(r"ai[- ]?ready|ready for (?:ai|llm)|ai/llm[- ]ready|ai readiness|(?:power|fuel|support|enable|feed|underpin|serve|foundation for|data for|datasets? for|consum\w+ by|used by|inputs?)\W+(?:\w+\W+){0,6}(?:\bAI\b|llms?|agents?|agentic|genai|ml/ai|ai/ml|machine learning)|(?:\bAI\b|llms?|agents?|genai|ml)\W+(?:\w+\W+){0,5}(?:consum\w+|context|grounding|semantic layer|metadata|governed|use cases?)|\bMCP\b|semantic layer\W+(?:\w+\W+){0,10}(?:\bAI\b|llm|agent)|(?:\bAI\b|llm|agent)\W+(?:\w+\W+){0,10}semantic layer|data foundation",re.I)
PRI=['BUILD','USE','PREP','GENERIC','COMPANY','ML_ONLY','HIRING_NOTICE']
def ad_rows():
    rows=[];sents=[]
    for a in load():
        if a['jd_id'] not in META: continue
        m=META[a['jd_id']]; ss=segs2(a['text']); cats=set(); lv={}
        for i,(sec,st,s) in enumerate(ss):
            c=classify_sentence(sec,st,s)
            if not c: continue
            ctx=' '.join(x[2] for x in ss[max(0,i-1):i+2])
            sents.append(dict(jd_id=a['jd_id'],sec=sec,st=st,sent=s,cat=c[0],level=c[1],concrete=c[2],guard=bool(GUARD.search(ctx)),guard_same=bool(GUARD.search(s))))
        rows.append(dict(jd_id=a['jd_id'],scrape=a['scrape'],company=m['company'],role=m['role'],seniority=m['seniority'],role_type=m['role_type'],region=m.get('geo_region'),lang=m['jd_language'],length=len(a['text']),dbt=m['has_dbt'],pbi=m['has_power_bi'],fabric=m['has_fabric_synapse'],ai_role=m['ai_role'],auth=m['jd_authorship']))
    return pd.DataFrame(rows),pd.DataFrame(sents)
if __name__=='__main__':
    ads,S=ad_rows(); ads.to_pickle('ads.pkl'); S.to_pickle('sents.pkl')
    print(S.cat.value_counts()); print(S.groupby(['cat','level']).size().unstack())
