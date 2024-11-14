import{_ as h,a as N}from"./NAbOXu9k.js";import{f as I,w as t,p as y,o as e,b as l,e as E,c as a,r as m,a as r,t as n,F as d,q as u}from"./BTOMz1uO.js";import{l as g}from"./DEqQpGQK.js";import{_ as k}from"./DlAUqK2U.js";const L={key:0},V={class:"ml-5"},X={class:"bullets"},S={class:"feature-summary"},b={key:0,class:"feature-description"},D={__name:"release-notes",setup(C){const p=[{header:"Alpha 2: 2024-11-05",features:[{summary:"Migrate NIEM subsets",description:"Migrate a NIEM subset in a CMF file to a more recent version of NIEM."},{summary:"Validate NIEM XSD",description:"Validate NIEM XML schemas and check for NDR conformance."},{summary:"Validate NIEM XML",description:"Validate NIEM XML instances against their schemas."},{summary:"Validate NIEM message catalogs",description:"Validate NIEM IEPD / message catalog XML instances (defined by NIEM's MPD / IEPD specification)."},{summary:"Validate XML catalogs",description:"Validate XML catalogs (defined by OASIS), which can be used to override file location paths in XSD import statements."}]},{header:"Alpha 1: 2023-03-31",features:[{summary:"Initial application",description:""},{summary:"Transform NIEM models",description:"Transform NIEM models in CMF or XML Schemas to CMF, XML Schemas, JSON Schema, or OWL."}]}];return(i,c)=>{const _=h,f=N,M=y;return e(),I(M,null,{header:t(()=>[l(_,{link:("links"in i?i.links:E(g)).releaseNotes},null,8,["link"])]),default:t(()=>[(e(),a(d,null,m(p,s=>l(f,{key:s.header,class:"card"},{header:t(()=>[r("h2",null,n(s.header),1)]),default:t(()=>[s.features?(e(),a("div",L,[c[0]||(c[0]=r("h3",null,"Features",-1)),r("ul",V,[(e(!0),a(d,null,m(s.features,o=>(e(),a("li",X,[r("span",S,n(o.summary),1),o.description?(e(),a("p",b,n(o.description),1)):u("",!0)]))),256))])])):u("",!0)]),_:2},1024)),64))]),_:1})}}},P=k(D,[["__scopeId","data-v-c04eb1c8"]]);export{P as default};