import{e as n,q as o,bg as c,b3 as h,b2 as p,bh as l,o as u,s as d,f as a,ao as g}from"./CWQT1cTJ.js";const m="img",b=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return l(e,t.src)}return t.src});return(s,e)=>(u(),d(g(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{b as default};