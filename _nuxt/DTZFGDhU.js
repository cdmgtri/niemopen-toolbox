import{_ as Z}from"./tb4pS72A.js";import{_ as Q,a as Y,b as ee}from"./CU3y2PMo.js";import{A as b,T as p,a as oe,_ as ne,b as w,c as le,d as ae,e as te,f as se,g as ie}from"./CmEUE5nd.js";import{e as re,j as T,k as I,l as me,m as ue,n as fe,o as S,c as g,b as a,w as t,f as n,F as pe,a as i,d as r,p as de,q as D,s as ce}from"./D0Pwa46T.js";import{_ as s,A as $}from"./CyY6rk52.js";import"./DchWDw9J.js";import"./6bm_RRcn.js";import"./D2BnHQuX.js";import"./Cpj98o6Y.js";import"./C0e8eNHv.js";const ve={key:0},be={key:1},Se=re({__name:"transform",setup(Ie){const m=T("upload"),A=[{value:"upload",label:"Upload",icon:s.upload},{type:"separator"},{label:"Valid examples",type:"label"},{value:"cmf",label:"CMF",icon:s.cmf,from:"cmf",path:"demo/transform/CrashDriver-5.0.cmf.xml"},{value:"xsd",label:"XSD",icon:s.xml,from:"xsd",path:"demo/transform/CrashDriver-5.0.zip"},{type:"separator"},{label:"Invalid examples",type:"label"},{value:"cmf-invalid",label:"CMF 0.6",icon:s.error,from:"cmf",path:"demo/transform/CrashDriver-5.0-CMFv0.6.cmf.xml"},{value:"text",label:".txt file",icon:s.error,from:void 0,path:"demo/transform/CrashDriver-5.0.txt"}],F=I(()=>A.find(o=>o.value==m.value)),_=T();me(m,async(o,e)=>{var u,v;F.value&&m.value!="upload"?(l.file=await p.loadPublicFile(F.value.path),_.value=(u=l.file)==null?void 0:u.name,l.from=(v=F.value)==null?void 0:v.from):(l.file=void 0,l.from=void 0),x.value.clear(),c.request="unsent"});const l=ue({}),M=[{value:"cmf",label:"CMF XML",icon:s.cmf,extensions:["cmf","xml"]},{value:"xsd",label:"NIEM XSD",icon:s.xml,extensions:["zip","xsd"]}],R=[...M,{value:"json_schema",label:"JSON Schema",icon:s.json,extensions:["schema.json","jschema","json"]},{value:"owl",label:"OWL",icon:s.owl,extensions:["ttl"]}],E=I(()=>M.find(o=>o.value==l.from)),N=I(()=>R.find(o=>o.value===l.to)),k=I(()=>{var o;return oe.extension((o=l.file)==null?void 0:o.name)}),P=M.flatMap(o=>o.extensions),X=P.map(o=>"."+o).join(", ");async function h(o){U.value="",l.file=p.fileInput(o),l.from=j(),c.request="unsent",await x.value.validate({name:"",silent:!0})}function j(){switch(k.value){case"cmf":case"xml":case"cmf.xml":return"cmf";case"xsd":case"zip":return"xsd";default:return}}const z=I(()=>{var o;return`curl -i -X POST -H "Content-Type: multipart/form-data" -F from=${l.from} -F to=${l.to} -F file=@${(o=l.file)==null?void 0:o.name} ${b.routes.transform}`}),x=fe("form"),U=T();let C=!1;function B(o){const e=p.initFormErrors();return U.value=void 0,C&&(p.validateRequiredField(e,"from",o.from),p.validateRequiredField(e,"to",o.to),p.validateRequiredField(e,"file",o.file),p.validateFileExtension(e,"file",P,k.value)),e}const c=b.initResults();async function L(){var u;if(C=!0,await((u=x.value)==null?void 0:u.validate({name:"",silent:!0}))==!1){C=!1;return}const e=await b.post(b.routes.transform,l,c);await b.downloadFileResults(e,c),C=!1}return(o,e)=>{const u=Z,v=ee,O=le,G=Q,q=ae,V=te,y=se,H=ce,W=ie,J=Y,K=ne;return S(),g(pe,null,[a(G,{page:("AppItems"in o?o.AppItems:n($)).transform},{user:t(()=>[e[11]||(e[11]=i("p",null," Transform a NIEM subset, schema, IEPD schemas, or message model in either CMF or NIEM XML Schema to another supported format. ",-1)),i("p",null,[e[6]||(e[6]=r(" This functionality leverages the ")),a(u,{link:("AppItems"in o?o.AppItems:n($)).cmfToolRepo},null,8,["link"]),e[7]||(e[7]=r()),a(v,null,{default:t(()=>e[4]||(e[4]=[r("version 0.7-alpha.6")])),_:1}),e[8]||(e[8]=r(" which supports ")),a(u,{link:("AppItems"in o?o.AppItems:n($)).cmfRepo},null,8,["link"]),e[9]||(e[9]=r()),a(v,null,{default:t(()=>e[5]||(e[5]=[r("version 0.8")])),_:1}),e[10]||(e[10]=r(". "))]),e[12]||(e[12]=i("p",{class:"font-medium"},"Tips:",-1)),e[13]||(e[13]=i("ul",{class:"bullets"},[i("li",null," CMF inputs have to be the version supported by this tool. "),i("li",null," CMF version migration is not automated and must be done by hand. "),i("li",null," NIEM XSD inputs can be a single schema as a XSD file or multiple schemas in a zip file. "),i("li",null," Validation or conformance errors may lead to transform failure. ")],-1)),e[14]||(e[14]=i("br",null,null,-1))]),developer:t(()=>[a(O,{title:"POST request",code:n(z)},null,8,["code"])]),_:1},8,["page"]),a(J,null,{default:t(()=>[a(W,{ref_key:"form",ref:x,state:n(l),validate:B,"validate-on":["change"],onSubmit:de(L,["prevent"]),enctype:"multipart/form-data"},{default:t(()=>[a(y,{name:"file",required:"",error:n(U),label:"1. Select a model input file",help:("ToolboxForm"in o?o.ToolboxForm:n(p)).fileWarning(n(m)=="upload")},{default:t(()=>{var f;return[n(m)=="upload"?(S(),g("span",ve,[a(q,{type:"file",onChange:h,accept:n(X),icon:("icons"in o?o.icons:n(s)).upload,ui:("UI"in o?o.UI:n(w)).inputFileInGroup},{trailing:t(()=>e[15]||(e[15]=[r("(CMF | XSD | ZIP)")])),_:1},8,["accept","icon","ui"])])):(S(),g("span",be,[a(q,{modelValue:n(_),"onUpdate:modelValue":e[0]||(e[0]=d=>D(_)?_.value=d:null),ui:("UI"in o?o.UI:n(w)).inputFileInGroup,icon:("icons"in o?o.icons:n(s)).magic},null,8,["modelValue","ui","icon"])])),a(V,{modelValue:n(m),"onUpdate:modelValue":e[1]||(e[1]=d=>D(m)?m.value=d:null),items:A,color:"neutral",variant:"subtle",ui:("UI"in o?o.UI:n(w)).inputMode,icon:(f=n(F))==null?void 0:f.icon},null,8,["modelValue","ui","icon"])]}),_:1},8,["error","help"]),a(y,{name:"from",required:"",label:"2. Select input file format"},{default:t(()=>{var f;return[a(V,{modelValue:n(l).from,"onUpdate:modelValue":e[2]||(e[2]=d=>n(l).from=d),items:M,icon:(f=n(E))==null?void 0:f.icon,class:"w-64"},null,8,["modelValue","icon"])]}),_:1}),a(y,{name:"to",required:"",label:"3. Select transformation format"},{default:t(()=>{var f;return[a(V,{modelValue:n(l).to,"onUpdate:modelValue":e[3]||(e[3]=d=>n(l).to=d),items:R,icon:(f=n(N))==null?void 0:f.icon,class:"w-64"},null,8,["modelValue","icon"])]}),_:1}),a(H,{type:"submit"},{default:t(()=>e[16]||(e[16]=[r("Transform")])),_:1})]),_:1},8,["state"])]),_:1}),a(K,{results:n(c)},null,8,["results"])],64)}}});export{Se as default};
