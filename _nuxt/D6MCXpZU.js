import{_,a as y}from"./CX4XgAwV.js";import{A as M}from"./BWz2AAK7.js";import{e as I,o as e,c as a,b as c,f as N,F as o,r as l,w as m,a as t,t as i,v as p}from"./CD8u9ojq.js";import{_ as g}from"./DlAUqK2U.js";import"./C0e8eNHv.js";const E={key:0},V={class:"ml-5"},L={class:"bullets"},X={class:"feature-summary"},v={key:0,class:"feature-description"},A=I({__name:"release-notes",setup(S){const u=[{header:"Alpha 2.1: 2024-11-25",features:[{summary:"Updated validation reports",description:"Improved display for validation reports and added a custom report for NDR validation to group results across all files by rule number."},{summary:"Updated demo files",description:"Added demo files to the validation page.  Updated the way demo files are access in the transform page for better consistency across the application."}]},{header:"Alpha 2: 2024-11-14",features:[{summary:"Validate NIEM XSD",description:"Validate NIEM XML schemas and check for NDR conformance."},{summary:"Validate NIEM XML",description:"Validate NIEM XML instances against their schemas."},{summary:"Validate NIEM message catalogs",description:"Validate NIEM IEPD / message catalog XML instances (defined by NIEM's MPD / IEPD specification)."},{summary:"Validate XML catalogs",description:"Validate XML catalogs (defined by OASIS), which can be used to override file location paths in XSD import statements."}]},{header:"Alpha 1: 2023-03-31",features:[{summary:"Initial application",description:""},{summary:"Transform NIEM models",description:"Transform NIEM models in CMF or XML Schemas to CMF, XML Schemas, JSON Schema, or OWL."}]}];return(n,d)=>{const f=_,h=y;return e(),a(o,null,[c(f,{page:("AppItems"in n?n.AppItems:N(M)).releaseNotes},null,8,["page"]),(e(),a(o,null,l(u,s=>c(h,{key:s.header,class:"card"},{header:m(()=>[t("h2",null,i(s.header),1)]),default:m(()=>[s.features?(e(),a("div",E,[d[0]||(d[0]=t("h3",null,"Features",-1)),t("ul",V,[(e(!0),a(o,null,l(s.features,r=>(e(),a("li",L,[t("span",X,i(r.summary),1),r.description?(e(),a("p",v,i(r.description),1)):p("",!0)]))),256))])])):p("",!0)]),_:2},1024)),64))],64)}}}),w=g(A,[["__scopeId","data-v-e4e99d01"]]);export{w as default};
