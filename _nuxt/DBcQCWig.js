import{e as Ee,r as N,q as I,s as Ve,v as P,x as _e,o as x,c as E,b as s,w as u,h as l,F as A,a as c,d as V,m as K,t as F,z as W,y as Me,j as q,i as Y,p as he,l as Fe}from"./B4LEY2OC.js";import{_ as Ne,a as Xe,b as Te}from"./D5M2G_Rh.js";import{_ as Se}from"./D5YiijYX.js";import{a as Le,b as Ue,_ as De}from"./UQDTExFp.js";import{_ as ke}from"./V5w1dLgF.js";import{_ as o,A as Ce}from"./DsPweMlB.js";import{A as f,a as m,T as Z,_ as X}from"./B7lAAY5O.js";import"./DnOhiAXk.js";import"./6bm_RRcn.js";import"./CgmagM3f.js";import"./wVOZ42FT.js";import"./CcQyslrq.js";import"./Qy7vSWk7.js";import"./CKRfikd8.js";import"./C0e8eNHv.js";import"./Cpj98o6Y.js";const ee=[{label:"XML schemas",type:"label",group:"display"},{value:"ndr",label:"Validate NDR conformance",type:"item",description:"Check one or more NIEM XML schemas against the NIEM Naming and Design Rules (NDR)",extensions:["xsd","zip"],icon:o.book,group:"XSD",route:f.routes.validate_ndr,file1:{icon:o.xml,description:"NIEM XSD",paramName:"file",validExtensions:[".xsd",".zip"],pathValidExample:"demo/validate/ndr/CrashDriver-6.0.zip",pathInvalidExample:"demo/validate/ndr/Crash Driver IEPD 5.0 invalid.zip"}},{value:"xsd",label:"Validate XSD",type:"item",description:"Validate one or more XML schemas to check that the basic syntax is correct.",extensions:["xsd","zip"],icon:o.xml,group:"XSD",route:f.routes.validate_xsd,file1:{icon:o.xml,description:"XSD",paramName:"file",validExtensions:[".xsd",".zip"],pathValidExample:"demo/validate/xml/single/person.xsd",pathInvalidExample:"demo/validate/xml/single/person-invalid.xsd"}},{type:"separator",group:"display"},{label:"XML instances",type:"label",group:"display"},{value:"cmf",label:"Validate CMF",type:"item",description:"Validate a CMF file (an XML instance file) against its NIEM CMF XML schema.",note:"Note that this does not check NDR conformance of the content.",extensions:["xml","cmf"],icon:o.xml,group:"XML",route:f.routes.validate_cmf,file1:{icon:o.xml,description:"CMF",paramName:"file",validExtensions:[".cmf",".xml"],pathValidExample:"demo/validate/xml/cmf/CrashDriver-5.0.cmf.xml",pathInvalidExample:"demo/validate/xml/cmf/CrashDriver-5.0-invalid.cmf.xml"}},{value:"xml",label:"Validate XML",type:"item",description:"Validate one or more XML instances against its user-provided XML schemas.",extensions:["xml"],icon:o.xml,group:"XML",route:f.routes.validate_xml,file1:{icon:o.xml,description:"XML instance",paramName:"xml",validExtensions:[".xml"],pathValidExample:"demo/validate/xml/single/person.xml",pathInvalidExample:"demo/validate/xml/single/person-invalid.xml"},file2:{icon:o.zip,description:"NIEM XSD",paramName:"xsd",validExtensions:[".xsd",".zip"],pathValidExample:"demo/validate/xml/single/person.xsd",pathInvalidExample:"demo/validate/xml/single/person.xsd"}},{value:"message-catalog",label:"Validate message catalog",type:"item",description:"Validate an IEPD or message catalog (an XML instance file) against its NIEM IEPD / message catalog schema.",extensions:["xml"],icon:o.xml,group:"XML",route:f.routes.validate_message_catalog,file1:{icon:o.xml,description:"message-catalog.xml or iepd-catalog.xml",paramName:"file",validExtensions:[".xml"],pathValidExample:"demo/validate/xml/message-catalog/valid-5.0/iepd-catalog.xml",pathInvalidExample:"demo/validate/xml/message-catalog/invalid-5.0/iepd-catalog.xml"}},{value:"xml-catalog",label:"Validate XML catalog",type:"item",description:"Validate an XML catalog (an XML instance file) against the OASIS schema specification for XML catalogs.",extensions:["xml"],icon:o.xml,group:"XML",route:f.routes.validate_xml_catalog,file1:{icon:o.xml,description:"xml-catalog.xml",paramName:"file",validExtensions:[".xml"],pathValidExample:"demo/validate/xml/xml-catalog/xml-catalog-valid.xml",pathInvalidExample:"demo/validate/xml/xml-catalog/xml-catalog-invalid.xml"}}],$e={class:"bullets spaced-sm"},Re={class:"font-semibold mb-3"},we={class:"bullets spaced-sm"},Pe={class:"font-semibold"},Ae={key:0,class:"font-light"},qe={key:0},ze={key:1},Oe={key:1},sa=Ee({__name:"validate",setup(Ge){const v=N("upload"),z=[{value:"upload",icon:o.upload,label:"Upload"},{type:"separator"},{type:"label",label:"Demo files"},{value:"valid",icon:o.success,label:"Valid"},{value:"invalid",icon:o.error,label:"Invalid"}],ae=I(()=>z.find(e=>e.value==v.value));Ve(v,async(e,a)=>{await O()});const T=N(),S=N();async function le(){await O()}function ie(e){ve.value="",t.file1=m.fileInput(e),_.request="unsent"}function te(e){xe.value="",t.file2=m.fileInput(e),_.request="unsent"}async function O(){var e,a,n,d,b,p,r,g,L,U;_.request="unsent",v.value=="valid"?(t.file1=await m.loadPublicFile((a=(e=i.value)==null?void 0:e.file1)==null?void 0:a.pathValidExample),(n=i.value)!=null&&n.file2&&(t.file2=await m.loadPublicFile((d=i.value)==null?void 0:d.file2.pathValidExample))):v.value=="invalid"&&(t.file1=await m.loadPublicFile((p=(b=i.value)==null?void 0:b.file1)==null?void 0:p.pathInvalidExample),(r=i.value)!=null&&r.file2&&(t.file2=await m.loadPublicFile((g=i.value)==null?void 0:g.file2.pathInvalidExample))),v.value!="upload"&&(T.value=(L=t.file1)==null?void 0:L.name,S.value=(U=t.file2)==null?void 0:U.name)}const t=P({mediaType:"json"}),$=P(ee.filter(e=>e.type=="item")),ne=P({XSD:$.filter(e=>e.group=="XSD"),XML:$.filter(e=>e.group=="XML")}),i=I(()=>$.find(e=>e.value==t.kind)),oe=I(()=>{var e;return G((e=i.value)==null?void 0:e.file1)}),se=I(()=>{var e;return G((e=i.value)==null?void 0:e.file2)});function G(e){return e?`(${e.validExtensions.join(" | ").replaceAll(".","").toUpperCase()})`:""}const de=f.reportMediaTypes,me=I(()=>f.mediaTypeIcon(t.mediaType)),re=I(()=>f.mediaTypeQueryString(t.mediaType));function j(e){return v.value=="upload"?`${m.UPLOAD_WARNING} | ${e||"(pending)"}`:m.DEMO_FILE_MESSAGE}const pe=I(()=>{var e,a,n;return Z.extension((n=(a=(e=i.value)==null?void 0:e.file1)==null?void 0:a.file)==null?void 0:n.name)}),ue=I(()=>{var e,a,n;return Z.extension((n=(a=(e=i.value)==null?void 0:e.file2)==null?void 0:a.file)==null?void 0:n.name)}),ce=I(()=>{var e,a,n,d;return((e=i.value)==null?void 0:e.file2)!=null?`-F ${(n=(a=i.value)==null?void 0:a.file2)==null?void 0:n.paramName}=@${(d=t.file2)==null?void 0:d.name}`:""}),fe=I(()=>{var e,a,n,d;return`curl -i -X POST -H "Content-Type: multipart/form-data" -F ${(a=(e=i.value)==null?void 0:e.file1)==null?void 0:a.paramName}=@${(n=t.file1)==null?void 0:n.name} ${ce.value} ${(d=i.value)==null?void 0:d.route}${re.value}`}),B=_e("form"),ve=N(""),xe=N("");let R=!1;function ge(e){var n,d,b,p,r;const a=m.initFormErrors();return m.validateRequiredField(a,"kind",e.kind),m.validateRequiredField(a,"resultFormat",e.mediaType),R&&(m.validateRequiredField(a,"file1",e.file1),m.validateFileExtension(a,"file1",((d=(n=i.value)==null?void 0:n.file1)==null?void 0:d.validExtensions)||[],pe.value),(b=i.value)!=null&&b.file2&&(m.validateRequiredField(a,"file2",e.file2),m.validateFileExtension(a,"file2",((r=(p=i.value)==null?void 0:p.file2)==null?void 0:r.validExtensions)||[],ue.value))),a}const _=f.initResults();async function ye(){var p,r,g;if(R=!0,await((p=B.value)==null?void 0:p.validate())==!1||!((r=i.value)!=null&&r.file1)||!i.value.route||!t.file1)return;let a={};a[(g=i.value.file1)==null?void 0:g.paramName]=t.file1,i.value.file2&&(a[i.value.file2.paramName]=t.file2),a.mediaType=t.mediaType;let n=t.file1.name.split(".").slice(0,-1).join(".").replaceAll(" ","-"),d=i.value.value=="message-catalog"||i.value.value=="xml-catalog"?"":i.value.value+"-";_.filename=`${n}-${d}validation-report.${t.mediaType}`;const b=await f.post(i.value.route,a,_,!1);await f.downloadReportResults(t.mediaType,b,_),R=!1}return(e,a)=>{const n=he,d=Xe,b=Se,p=Le,r=Ue,g=De,L=Fe,U=Te,Ie=ke,be=Ne;return x(),E(A,null,[s(b,{page:("AppItems"in e?e.AppItems:l(Ce)).validate},{user:u(()=>[a[13]||(a[13]=c("p",null," Validate NIEM artifacts and check NDR conformance. ",-1)),a[14]||(a[14]=c("p",{class:"font-semibold"},"Notes:",-1)),c("ul",$e,[c("li",null,[a[6]||(a[6]=V(" Use the ")),s(n,{to:"/transform"},{default:u(()=>a[5]||(a[5]=[V("Transform")])),_:1}),a[7]||(a[7]=V(" feature to convert a CMF model to XSD to check NDR conformance. "))]),a[8]||(a[8]=c("li",null," JSON instance and schema validation is not yet available. ",-1)),a[9]||(a[9]=c("li",null," CSV results are download-only at this time and cannot be displayed. ",-1))]),(x(!0),E(A,null,K(Object.entries(l(ne)),([D,k])=>(x(),E("div",null,[c("p",Re,F(D)+" validation options:",1),c("ul",we,[(x(!0),E(A,null,K(k,M=>(x(),E("li",null,[c("span",Pe,F(M.label),1),a[11]||(a[11]=V(" - ")),c("span",null,F(M.description),1),M.note?(x(),E("span",Ae,[a[10]||(a[10]=c("br",null,null,-1)),V(F(M.note),1)])):W("",!0)]))),256))]),a[12]||(a[12]=c("br",null,null,-1))]))),256))]),developer:u(()=>[s(d,{title:"POST request",code:l(fe)},null,8,["code"])]),_:1},8,["page"]),s(Ie,null,{default:u(()=>[s(U,{ref_key:"form",ref:B,state:l(t),validate:ge,onSubmit:Me(ye,["prevent"]),enctype:"multipart/form-data"},{default:u(()=>{var D,k,M,H;return[s(r,{name:"kind",required:"",label:"1. Select validation kind",help:(D=l(i))==null?void 0:D.description},{default:u(()=>{var y;return[s(p,{modelValue:l(t).kind,"onUpdate:modelValue":a[0]||(a[0]=h=>l(t).kind=h),items:l(ee),onChange:le,icon:(y=l(i))==null?void 0:y.icon,class:"w-64"},null,8,["modelValue","items","icon"])]}),_:1},8,["help"]),s(r,{name:"mediaType",required:"",label:"2. Select results format"},{default:u(()=>[s(p,{modelValue:l(t).mediaType,"onUpdate:modelValue":a[1]||(a[1]=y=>l(t).mediaType=y),items:l(de),icon:l(me),class:"w-64"},null,8,["modelValue","items","icon"])]),_:1}),s(r,{name:"file1",required:"",label:"3. Select a file to validate",help:j((M=(k=l(i))==null?void 0:k.file1)==null?void 0:M.description)},{default:u(()=>{var y,h,C,Q,J;return[l(v)=="upload"?(x(),E("span",qe,[s(g,{type:"file",onChange:ie,accept:(h=(y=l(i))==null?void 0:y.file1)==null?void 0:h.validExtensions,icon:((Q=(C=l(i))==null?void 0:C.file1)==null?void 0:Q.icon)||("icons"in e?e.icons:l(o)).upload,ui:("UI"in e?e.UI:l(X)).inputFileInGroup},{trailing:u(()=>[V(F(l(oe)),1)]),_:1},8,["accept","icon","ui"])])):(x(),E("span",ze,[s(g,{modelValue:l(T),"onUpdate:modelValue":a[2]||(a[2]=w=>q(T)?T.value=w:null),ui:("UI"in e?e.UI:l(X)).inputFileInGroup,icon:("icons"in e?e.icons:l(o)).magic},null,8,["modelValue","ui","icon"])])),s(p,{modelValue:l(v),"onUpdate:modelValue":a[3]||(a[3]=w=>q(v)?v.value=w:null),items:z,color:"neutral",variant:"subtle",ui:("UI"in e?e.UI:l(X)).inputMode,icon:(J=l(ae))==null?void 0:J.icon},null,8,["modelValue","ui","icon"])]}),_:1},8,["help"]),(H=l(i))!=null&&H.file2?(x(),Y(r,{key:0,name:"file2",label:"4. Select supporting file for validation",help:j(l(i).file2.description)},{default:u(()=>{var y,h;return[l(v)=="upload"?(x(),Y(g,{key:0,type:"file",onChange:te,accept:l(i).file2.validExtensions,icon:((h=(y=l(i))==null?void 0:y.file2)==null?void 0:h.icon)||("icons"in e?e.icons:l(o)).upload,ui:("UI"in e?e.UI:l(X)).inputFileInGroup},{trailing:u(()=>[V(F(l(se)),1)]),_:1},8,["accept","icon","ui"])):(x(),E("span",Oe,[s(g,{modelValue:l(S),"onUpdate:modelValue":a[4]||(a[4]=C=>q(S)?S.value=C:null),ui:("UI"in e?e.UI:l(X)).inputFileInGroup,icon:("icons"in e?e.icons:l(o)).magic},null,8,["modelValue","ui","icon"])]))]}),_:1},8,["help"])):W("",!0),s(L,{type:"submit"},{default:u(()=>a[15]||(a[15]=[V("Validate")])),_:1})]}),_:1},8,["state"])]),_:1}),s(be,{results:l(_),kind:l(t).kind},null,8,["results","kind"])],64)}}});export{sa as default};
//# sourceMappingURL=DBcQCWig.js.map