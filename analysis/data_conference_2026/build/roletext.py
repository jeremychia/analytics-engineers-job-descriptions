import re
ROLE=re.compile(r"respons|what you'?ll do|what you will do|what you.ll be doing|what you will be doing|the role|about the role|role (overview|summary)|job (description|summary|overview)|position overview|your role|in this role|your mission|requirement|qualification|what you.?ll bring|what you bring|what we.?re looking for|what we are looking for|looking for|about you|who you are|your profile|experience|skills|nice.to.have|preferred|required|essential|desirable|tech stack|what success looks like|the opportunity|duties|you will|you.ll|day.to.day|key tasks|bonus|must.have|minimum|basic|description$|overview$",re.I)
NON=re.compile(r"benefit|what we offer|we offer|why join|in it for you|perks|about us|who we are|company (description|overview)|about the company|our values|our mission|culture|compensation|salary|pay |interview|how to apply|additional information|privacy|cookie|equal opportunit|diversity|inclusion|about the team|the team|application|our story|life at|working at|location|employment type|seniority|apply|sign in|user agreement|show (more|less)|accommodation|disclaimer|legal|our approach|recruitment|hiring process|data protection",re.I)
INTRO=re.compile(r'^(about the role|the role|role (overview|summary)|job (description|summary|overview)|position overview|description|overview|the opportunity|your role|about the position|about this role)$',re.I)
YOU=re.compile(r"\byou\b|\byour\b|\bwill\b|responsible|looking for|\bjoin\b",re.I)
def is_heading(s):
    t=s.strip().strip('*#_ ').rstrip(':').strip()
    return 1<=len(t.split())<=8 and not re.search(r'[.;,]$',t) and not t.startswith(('-','•')) and len(t)>3 and not re.match(r'^[\d$€£]',t)
LEAK=re.compile(r"recruitment team|hiring decision|webfetch|data is processed|equal opportunit|artificial intelligence|candidates remain|privacy notice|we are an? .*employer|accommodation|background check|discounts?\b|rewards? program|career (possibilities|development|growth)|unique opportunity|time (and space )?to think|time off|annual leave|paid leave|holidays?\b|pension|\bgym|wellbeing|well-being|bonus scheme|stock options|\bperks?\b|flexible working|work from (home|anywhere)|learning budget|team (events|building)|we (offer|provide|value|believe|are committed)|competitive (salary|compensation|package)",re.I)
def role_lines(text,resp=()):
    text=re.sub(r'^\*\*URL:\*\*.*$','',text.split('## Layer B')[0],flags=re.M)
    sec='intro';out=[];seen=False
    for raw in text.split('\n'):
        l=raw.strip()
        if not l: continue
        if is_heading(l):
            h=l.strip('*#_ ').rstrip(':')
            if NON.search(h): sec='non';seen=True
            elif INTRO.search(h): sec='intro_role';seen=True
            elif ROLE.search(h): sec='role';seen=True
            continue
        if sec in('role','intro_role'):
            for s in re.split(r'(?<=[.!?])\s+',l):
                s=re.sub(r'^[-•*]\s*','',s.strip())
                if len(s.split())>=3 and not LEAK.search(s) and (sec=='role' or YOU.search(s)): out.append(s)
    for b in resp:
        if len(b.split())>=3 and b not in out and not LEAK.search(b): out.append(b)
    return out
