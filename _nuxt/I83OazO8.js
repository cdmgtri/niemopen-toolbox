import{_ as M}from"./BLReP4tF.js";import{_ as N}from"./Bu0u5di3.js";import{c as T}from"./n2hCANGf.js";import{e as w,f as A,r as u,q as l,g as f,o as P,i as x,w as y,b as d,h as n}from"./B4LEY2OC.js";import{u as v}from"./6HjxEEwp.js";import{A as C}from"./B7lAAY5O.js";const E=w({__name:"ContentNamespace",props:{namespace:{},as:{}},async setup(e){let a,s;const p=A().params;p.prefix=p.slug;const m=v(),o=u([]),r=u([]),h=l(()=>!e.namespace.propertiesLoaded),L=l(()=>!e.namespace.typesLoaded);e.namespace.propertiesCount=0,e.namespace.typesCount=0,[a,s]=f(()=>c()),await a,s(),[a,s]=f(()=>i()),await a,s();async function c(){if(e.namespace.propertiesLoaded)return;e.namespace.propertiesCount||(e.namespace.propertiesCount=0);let t=await m.propertiesFromNamespace(e.namespace,o.value.length);t.length<C.PAGINATION_LIMIT&&(e.namespace.propertiesLoaded=!0),e.namespace.propertiesCount+=t.length,o.value.push(...t)}async function i(){if(e.namespace.typesLoaded)return;e.namespace.typesCount||(e.namespace.typesCount=0);let t=await m.typesFromNamespace(e.namespace,r.value.length);t.length<C.PAGINATION_LIMIT&&(e.namespace.typesLoaded=!0),e.namespace.typesCount+=t.length,r.value.push(...t)}return(t,$)=>{const b=M,I=N,g=T;return P(),x(g,{as:t.as,entity:t.namespace},{properties:y(()=>[d(b,{properties:n(o),"enable-more":n(h),onLoadMore:c},null,8,["properties","enable-more"])]),types:y(()=>[d(I,{types:n(r),"enable-more":n(L),onLoadMore:i},null,8,["types","enable-more"])]),_:1},8,["as","entity"])}}});export{E as _};
//# sourceMappingURL=I83OazO8.js.map
