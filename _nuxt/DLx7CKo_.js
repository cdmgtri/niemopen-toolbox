import{o,c as f,b as _,a as k,t as T,S as d,g as R,aE as Y,l as I,k as L,ab as Z,$ as g,i as S,f as u,w as p,R as m,d as ee,e as r,ak as q,a5 as P,M,O as te,a0 as J,a1 as N,a2 as ae,aF as se,q as b,aG as oe,aH as re,U as B,F as V,r as Q,aI as ne,a3 as ie,a4 as le,aJ as ce,af as de,aK as ue,aL as pe,T as be,aM as me,aN as fe,n as ve}from"./UIt75vAV.js";import{_ as ge}from"./DlAUqK2U.js";import{i as K}from"./DEqQpGQK.js";const he={class:"align-middle"},W={__name:"CustomIconTitle",props:{icon:{type:String,required:!0},title:{type:String,required:!0},classes:{type:String,required:!1,default:""}},setup(n){return(e,a)=>{const t=R;return o(),f("span",{class:d(n.classes+" space-x-1.5")},[_(t,{name:n.icon,class:"size-4 align-middle"},null,8,["name"]),k("span",he,T(n.title),1)],2)}}},O={meta:"",command:"⌘",shift:"⇧",ctrl:"⌃",option:"⌥",alt:"⎇",enter:"↵",delete:"⌦",backspace:"⌫",escape:"⎋",tab:"⇥",capslock:"⇪",arrowup:"↑",arrowright:"→",arrowdown:"↓",arrowleft:"←",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"},ye=()=>{const n=I(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),e=L(" ");Z(()=>{e.value=n.value?O.command:O.ctrl});function a(t){if(t)return t==="meta"?e.value:O[t]||t.toUpperCase()}return{macOS:n,metaSymbol:e,getKbdKey:a}},_e=Y(ye),ze={base:"inline-flex items-center justify-center px-1 rounded-[var(--ui-radius)] font-medium font-sans",variants:{variant:{solid:"bg-[var(--ui-bg-inverted)] text-[var(--ui-bg)]",outline:"bg-[var(--ui-bg)] text-[var(--ui-text-highlighted)] ring ring-inset ring-[var(--ui-border-accented)]",subtle:"bg-[var(--ui-bg-elevated)] text-[var(--ui-text)] ring ring-inset ring-[var(--ui-border-accented)]"},size:{sm:"h-4 min-w-[16px] text-[10px]",md:"h-5 min-w-[20px] text-[11px]",lg:"h-6 min-w-[24px] text-[12px]"}},defaultVariants:{variant:"outline",size:"md"}},xe=P;var E;const ke=g({extend:g(ze),...((E=xe.ui)==null?void 0:E.kbd)||{}}),$e=S({__name:"Kbd",props:{as:{default:"kbd"},value:{},variant:{},size:{},class:{}},setup(n){const e=n,{getKbdKey:a}=_e();return(t,i)=>(o(),u(r(q),{as:t.as,class:d(r(ke)({variant:t.variant,size:t.size,class:e.class}))},{default:p(()=>[m(t.$slots,"default",{},()=>[ee(T(r(a)(t.value)),1)])]),_:3},8,["as","class"]))}}),we={slots:{content:"flex items-center gap-1 bg-[var(--ui-bg)] text-[var(--ui-text-highlighted)] shadow rounded-[var(--ui-radius)] ring ring-[var(--ui-border)] h-6 px-2 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",arrow:"fill-[var(--ui-border)]",text:"truncate",kbds:"hidden lg:inline-flex items-center shrink-0 gap-0.5 before:content-['·'] before:mr-0.5",kbdsSize:"sm"}},Ce=P;var G;const Se=g({extend:g(we),...((G=Ce.ui)==null?void 0:G.tooltip)||{}}),Be=S({__name:"Tooltip",props:{text:{},kbds:{},content:{},arrow:{type:[Boolean,Object]},portal:{type:Boolean,default:!0},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(n,{emit:e}){const a=n,t=e,i=M(),c=te(J(a,"defaultOpen","open","delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus"),t),z=N(()=>ae(a.content,{side:"bottom",sideOffset:8})),h=N(()=>a.arrow),s=I(()=>Se({side:z.value.side}));return(l,v)=>(o(),u(r(ce),ie(le(r(c))),{default:p(({open:C})=>[i.default?(o(),u(r(se),{key:0,"as-child":""},{default:p(()=>[m(l.$slots,"default",{open:C})]),_:2},1024)):b("",!0),_(r(oe),{disabled:!l.portal},{default:p(()=>{var $;return[_(r(re),B(z.value,{class:s.value.content({class:[a.class,($=a.ui)==null?void 0:$.content]})}),{default:p(()=>{var w;return[m(l.$slots,"content",{},()=>{var y,x,D;return[l.text?(o(),f("span",{key:0,class:d(s.value.text({class:(y=a.ui)==null?void 0:y.text}))},T(l.text),3)):b("",!0),(x=l.kbds)!=null&&x.length?(o(),f("span",{key:1,class:d(s.value.kbds({class:(D=a.ui)==null?void 0:D.kbds}))},[(o(!0),f(V,null,Q(l.kbds,(U,X)=>{var F;return o(),u($e,B({key:X,size:((F=a.ui)==null?void 0:F.kbdsSize)||s.value.kbdsSize(),ref_for:!0},typeof U=="string"?{value:U}:U),null,16,["size"])}),128))],2)):b("",!0)]}),l.arrow?(o(),u(r(ne),B({key:0},h.value,{class:s.value.arrow({class:(w=a.ui)==null?void 0:w.arrow})}),null,16,["class"])):b("",!0)]}),_:3},16,["class"])]}),_:3},8,["disabled"])]),_:3},16))}}),Pe={base:"relative",variants:{size:{xs:"",sm:"",md:"",lg:"",xl:""},orientation:{horizontal:"inline-flex -space-x-px",vertical:"flex flex-col -space-y-px"}}},Ke=P;var j;const Te=g({extend:g(Pe),...(j=Ke.ui)==null?void 0:j.buttonGroup}),Ie=S({__name:"ButtonGroup",props:{as:{},size:{},orientation:{default:"horizontal"},class:{}},setup(n){const e=n;return de(ue,I(()=>({orientation:e.orientation,size:e.size}))),(a,t)=>(o(),u(r(q),{as:a.as,class:d(r(Te)({orientation:a.orientation}))},{default:p(()=>[m(a.$slots,"default")]),_:3},8,["as","class"]))}}),Ue={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-[var(--ui-text)] flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-[var(--ui-primary)]"},secondary:{border:"border-[var(--ui-secondary)]"},success:{border:"border-[var(--ui-success)]"},info:{border:"border-[var(--ui-info)]"},warning:{border:"border-[var(--ui-warning)]"},error:{border:"border-[var(--ui-error)]"},neutral:{border:"border-[var(--ui-border)]"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},Oe=P;var H;const qe=g({extend:g(Ue),...((H=Oe.ui)==null?void 0:H.separator)||{}}),Me=S({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(n){const e=n,a=M(),t=pe(J(e,"as","decorative","orientation")),i=I(()=>qe({color:e.color,orientation:e.orientation,size:e.size,type:e.type}));return(c,z)=>{var h;return o(),u(r(me),B(r(t),{class:i.value.root({class:[e.class,(h=e.ui)==null?void 0:h.root]})}),{default:p(()=>{var s,l,v;return[k("div",{class:d(i.value.border({class:(s=e.ui)==null?void 0:s.border}))},null,2),c.label||c.icon||c.avatar||a.default?(o(),f(V,{key:0},[k("div",{class:d(i.value.container({class:(l=e.ui)==null?void 0:l.container}))},[m(c.$slots,"default",{},()=>{var C,$,w,y;return[c.label?(o(),f("span",{key:0,class:d(i.value.label({class:(C=e.ui)==null?void 0:C.label}))},T(c.label),3)):c.icon?(o(),u(R,{key:1,name:c.icon,class:d(i.value.icon({class:($=e.ui)==null?void 0:$.icon}))},null,8,["name","class"])):c.avatar?(o(),u(be,B({key:2,size:((w=e.ui)==null?void 0:w.avatarSize)||i.value.avatarSize()},c.avatar,{class:i.value.avatar({class:(y=e.ui)==null?void 0:y.avatar})}),null,16,["size","class"])):b("",!0)]})],2),k("div",{class:d(i.value.border({class:(v=e.ui)==null?void 0:v.border}))},null,2)],64)):b("",!0)]}),_:3},16,["class"])}}}),Ve={class:"more mt-2 text-sm spaced-sm"},De={__name:"PageMore",props:{icon:{type:String,required:!0},title:{type:String,required:!0},slot:{type:String,required:!0}},setup(n){return(e,a)=>{const t=Me,i=W;return o(),f("div",null,[_(t,{decorative:!0,class:"my-2"}),_(i,{icon:n.icon,title:n.title,classes:"page-header-title font-semibold ml-3 color-niem"},null,8,["icon","title"]),k("div",Ve,[m(e.$slots,n.slot,{},void 0,!0)])])}}},Fe=ge(De,[["__scopeId","data-v-2a501051"]]),Ne={class:"flex justify-between z-30"},Ee={class:"gap-1.5"},Ge={id:"page-header-more"},Qe=S({__name:"PageHeader",props:{link:{type:Object,required:!0,default:null}},setup(n){const a=n.link,t=L("none");function i(s){const v=s.currentTarget.id.replace("btn-","");t.value=t.value==v?"none":v}const c=["info","developer","preferences"],z=[{id:"info",title:"User information"},{id:"developer",title:"Developer information"},{id:"preferences",title:"Preferences"}];function h(s){var l;return(l=z.find(v=>v.id==s))==null?void 0:l.title}return(s,l)=>{const v=W,C=ve,$=Be,w=Ie,y=Fe;return o(),u(fe,{defer:"",to:"#page-header"},[k("div",Ne,[_(v,{icon:r(a).icon,title:r(a).label,classes:"page-header-title font-bold"},null,8,["icon","title"]),k("span",Ee,[_(w,{size:"sm",id:"page-header-buttons"},{default:p(()=>[(o(),f(V,null,Q(c,x=>_($,{text:h(x)},{default:p(()=>[_(C,{color:"neutral",variant:"outline",id:"btn-"+x,icon:("icons"in s?s.icons:r(K))[x],disabled:!s.$slots[x],onClick:i,class:d({open:t.value==x})},null,8,["id","icon","disabled","class"])]),_:2},1032,["text"])),64))]),_:1})])]),k("div",Ge,[t.value=="info"?(o(),u(y,{key:0,icon:("icons"in s?s.icons:r(K)).info,title:"User information",slot:"info"},{info:p(()=>[m(s.$slots,"info")]),_:3},8,["icon"])):b("",!0),t.value=="developer"?(o(),u(y,{key:1,icon:("icons"in s?s.icons:r(K)).developer,title:"Developer information",slot:"developer"},{developer:p(()=>[m(s.$slots,"developer")]),_:3},8,["icon"])):b("",!0),t.value=="preferences"?(o(),u(y,{key:2,icon:("icons"in s?s.icons:r(K)).preferences,title:"Preferences",slot:"preferences"},{preferences:p(()=>[m(s.$slots,"preferences")]),_:3},8,["icon"])):b("",!0)])])}}}),je={slots:{root:"bg-[var(--ui-bg)] ring ring-[var(--ui-border)] divide-y divide-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)] shadow",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"}},He=P;var A;const Ae=g({extend:g(je),...((A=He.ui)==null?void 0:A.card)||{}}),We=S({__name:"Card",props:{as:{},class:{},ui:{}},setup(n){const e=n,a=M(),t=Ae();return(i,c)=>{var z;return o(),u(r(q),{as:i.as,class:d(r(t).root({class:[e.class,(z=e.ui)==null?void 0:z.root]}))},{default:p(()=>{var h,s,l;return[a.header?(o(),f("div",{key:0,class:d(r(t).header({class:(h=e.ui)==null?void 0:h.header}))},[m(i.$slots,"header")],2)):b("",!0),a.default?(o(),f("div",{key:1,class:d(r(t).body({class:(s=e.ui)==null?void 0:s.body}))},[m(i.$slots,"default")],2)):b("",!0),a.footer?(o(),f("div",{key:2,class:d(r(t).footer({class:(l=e.ui)==null?void 0:l.footer}))},[m(i.$slots,"footer")],2)):b("",!0)]}),_:3},8,["as","class"])}}});export{Qe as _,We as a,$e as b,Ie as c,W as d};
