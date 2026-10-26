import pandas as pd,numpy as np,re
from load import load
ads=pd.read_pickle('ads.pkl'); S=pd.read_pickle('sents.pkl')
ROLE=['BUILD','USE','PREP','GENERIC']
R=S[S['cat'].isin(ROLE)]
hire=set(S[S['cat']=='HIRING_NOTICE'].jd_id)
for c in ROLE+['COMPANY','ML_ONLY']: ads[c]=ads.jd_id.isin(S[S['cat']==c].jd_id)
ads['hiring']=ads.jd_id.isin(hire)
ads['roleAI']=ads[ROLE].any(axis=1)
for l in ['req','nice','duty']:
    ads['ai_'+l]=ads.jd_id.isin(R[R.level==l].jd_id)
ads['ai_req_only_nice']=ads.ai_nice&~ads.ai_req
ads['concrete']=ads.jd_id.isin(R[R.concrete].jd_id)
ads['vague_only']=ads.roleAI&~ads.concrete
ads['company_only']=ads.COMPANY&~ads.roleAI
ads['req_no_duty']=ads.ai_req&~ads.ai_duty
ads['guard']=ads.jd_id.isin(R[(R['cat']=='USE')&R.guard].jd_id)
ads['guard_same']=ads.jd_id.isin(R[(R['cat']=='USE')&R.guard_same].jd_id)
ads['use_ad']=ads.USE
ads['stack']=np.where(ads.dbt&~(ads.pbi|ads.fabric),'dbt',np.where((ads.pbi|ads.fabric)&~ads.dbt,'PowerBI/Fabric',np.where(ads.dbt,'both','neither')))
def reg(r):
    return {'uk_remote':'UK/remote','ireland':'UK/IE','dach_other':'DACH','berlin':'DACH','hamburg':'DACH','nordics':'Nordics/Baltics','baltics':'Nordics/Baltics','nyc_metro':'North America','apac':'APAC','benelux':'Benelux','france':'France','iberia':'Iberia','other_europe':'Other Europe','global_remote':'Global remote','other':'Other'}.get(r,'Other')
ads['reg']=ads.region.map(reg)
A=load(); T={a['jd_id']:a['text'] for a in A}
ads['cons']=ads.jd_id.map(lambda j: bool(re.search(r"consultanc|consulting firm|our clients|recruitment agency|staffing|on behalf of our client|for our client",T[j],re.I)))
ads['amazon']=ads.company.str.contains('amazon|aws|prime video',case=False)
ads['aiweb']=ads.jd_id.map(lambda j: bool(re.search(r"\bAI[- ](?:company|platform|first|native|powered)|leading AI|an AI ",T[j][:1500])))
ads.to_pickle('ads2.pkl')
def wil(k,n,z=1.96):
    if n==0: return (np.nan,)*3
    p=k/n;d=1+z*z/n;c=(p+z*z/(2*n))/d;h=z*np.sqrt(p*(1-p)/n+z*z/(4*n*n))/d
    return p,c-h,c+h
def share(df,col): 
    p,l,h=wil(df[col].sum(),len(df));return f'{100*p:.0f}% [{100*l:.0f},{100*h:.0f}] n={len(df)}'
if __name__=='__main__':
    base=ads[~ads.hiring|True]
    print('N',len(ads),'EN',(ads.lang=='en').sum())
    for c in ['roleAI','BUILD','USE','PREP','GENERIC','COMPANY','ML_ONLY','company_only','hiring','ai_req','ai_nice','ai_duty','ai_req_only_nice','concrete','vague_only']:
        print(f'{c:18s} all {share(ads,c)} | EN {share(ads[ads.lang=="en"],c)}')
    r=ads[ads.roleAI]
    print('among roleAI: concrete',share(r,'concrete'),'req',share(r,'ai_req'),'duty',share(r,'ai_duty'),'req_no_duty',share(r,'req_no_duty'))
    rq=ads[ads.ai_req]; print('among ai_req: no duty AI',share(rq,'req_no_duty'))
    u=ads[ads.use_ad]; print('USE ads guard window',share(u,'guard'),'same sent',share(u,'guard_same'))
    b=ads[ads.BUILD]; 
    for g in ['seniority','reg','stack','role_type','cons','amazon']:
        print('\n',g)
        rows=[]
        for k,d in ads.groupby(g):
            if len(d)<25: continue
            rows.append((k,len(d),*[100*d[c].mean() for c in ['roleAI','USE','BUILD','PREP','ai_req','company_only']]))
        print(pd.DataFrame(rows,columns=[g,'n','roleAI','USE','BUILD','PREP','req','co_only']).round(0).to_string(index=False))
    ads.groupby('seniority').apply(lambda d: pd.Series({'n':len(d),'roleAI':d.roleAI.mean()})).to_csv('by_seniority.csv')
