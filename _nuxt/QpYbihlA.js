const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bazqnq_Y.js","./B4LEY2OC.js","./entry.BHrD8RTB.css","./BzhXaii1.js","./D8WWXvNT.js","./6bm_RRcn.js","./Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{bg as f,bi as c,bj as v,e as g,C as d,q as l,bk as h,O as _,af as r,_ as C}from"./B4LEY2OC.js";import{q as y,w as m,e as w,s as P,j as $,u as N,a as b}from"./BzhXaii1.js";import{u as j}from"./D8WWXvNT.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./Bazqnq_Y.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await b(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=D;export{L as default};
//# sourceMappingURL=QpYbihlA.js.map
