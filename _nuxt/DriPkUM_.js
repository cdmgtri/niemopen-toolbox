import{M as O,a0 as pe,i as ke,N as be,P as me,a1 as xe,o as t,f as v,w as s,e as l,bo as Ie,S,q as d,b as c,bp as ze,T as n,V as g,bq as $e,a2 as Ce,l as de,c as u,U as Se,g as j,W as Y,d as ve,t as Z,F as y,r as q,br as Te,X as ge,bs as Be,Y as De,h as G,Z as J,bt as Ve,bu as Q,$ as ee,bv as Ne,a as h,bw as Pe,bx as We,by as Ee}from"./B6CjjYZc.js";import{c as Me}from"./Dub5-De-.js";import{_ as je}from"./C-3kPL-w.js";import{g as ae,a as A,c as Fe,i as Ke}from"./DEqQpGQK.js";import{_ as _e}from"./DlAUqK2U.js";const Re={slots:{root:"",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"}},Ue=pe;var he;const qe=O({extend:O(Re),...((he=Ue.ui)==null?void 0:he.collapsible)||{}}),He=ke({__name:"Collapsible",props:{as:{},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean}},emits:["update:open"],setup(L,{emit:f}){const e=L,k=f,w=be(),V=me(xe(e,"as","defaultOpen","open","disabled"),k),F=qe();return(K,X)=>{var i;return t(),v(l($e),g(l(V),{class:l(F).root({class:[e.class,(i=e.ui)==null?void 0:i.root]})}),{default:s(({open:R})=>{var o;return[w.default?(t(),v(l(Ie),{key:0,"as-child":""},{default:s(()=>[S(K.$slots,"default",{open:R})]),_:2},1024)):d("",!0),c(l(ze),{class:n(l(F).content({class:(o=e.ui)==null?void 0:o.content}))},{default:s(()=>[S(K.$slots,"content")]),_:3},8,["class"])]}),_:3},16,["class"])}}}),Oe={slots:{root:"relative flex gap-1.5",list:"isolate min-w-0",item:"min-w-0",link:"group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",linkLeadingIcon:"shrink-0 size-5",linkLeadingAvatar:"shrink-0",linkLeadingAvatarSize:"2xs",linkTrailing:"ms-auto inline-flex",linkTrailingBadge:"shrink-0 rounded",linkTrailingBadgeSize:"sm",linkTrailingIcon:"size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",linkLabel:"truncate",linkLabelExternalIcon:"size-3 align-top text-[var(--ui-text-dimmed)]",childList:"",childItem:"",childLink:"group size-full px-3 py-2 rounded-[calc(var(--ui-radius)*1.5)] flex items-start gap-2 text-left",childLinkWrapper:"flex flex-col items-start",childLinkIcon:"size-5 shrink-0",childLinkLabel:"font-semibold text-sm relative inline-flex",childLinkLabelExternalIcon:"size-3 align-top text-[var(--ui-text-dimmed)]",childLinkDescription:"text-sm text-[var(--ui-text-muted)]",separator:"px-2 h-px bg-[var(--ui-border)]",viewportWrapper:"absolute top-full inset-x-0 flex w-full",viewport:"relative overflow-hidden bg-[var(--ui-bg)] shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-[var(--ui-border)] h-[var(--radix-navigation-menu-viewport-height)] w-full data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",content:"absolute top-0 left-0 w-full data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]",indicator:"data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] bottom-0 z-[1] flex h-2.5 items-end justify-center overflow-hidden transition-transform duration-200 ease-out",arrow:"relative top-[50%] size-2.5 rotate-45 border border-[var(--ui-border)] bg-[var(--ui-bg)] z-[1] rounded-[calc(var(--ui-radius)/2)]"},variants:{color:{primary:{link:"focus-visible:before:ring-[var(--ui-primary)]",childLink:"focus-visible:outline-[var(--ui-primary)]"},secondary:{link:"focus-visible:before:ring-[var(--ui-secondary)]",childLink:"focus-visible:outline-[var(--ui-secondary)]"},success:{link:"focus-visible:before:ring-[var(--ui-success)]",childLink:"focus-visible:outline-[var(--ui-success)]"},info:{link:"focus-visible:before:ring-[var(--ui-info)]",childLink:"focus-visible:outline-[var(--ui-info)]"},warning:{link:"focus-visible:before:ring-[var(--ui-warning)]",childLink:"focus-visible:outline-[var(--ui-warning)]"},error:{link:"focus-visible:before:ring-[var(--ui-error)]",childLink:"focus-visible:outline-[var(--ui-error)]"},neutral:{link:"focus-visible:before:ring-[var(--ui-border-inverted)]",childLink:"focus-visible:outline-[var(--ui-border-inverted)]"}},highlightColor:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:"",link:""},orientation:{horizontal:{root:"w-full items-center justify-between",list:"flex items-center",item:"py-2",link:"px-2.5 py-1.5 before:inset-x-px before:inset-y-0",childList:"grid grid-cols-2 gap-2 p-2"},vertical:{root:"flex-col",link:"flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",childList:"ml-5 border-l border-[var(--ui-border)]",childItem:"pl-1.5 -ml-px"}},active:{true:{childLink:"bg-[var(--ui-bg-elevated)] text-[var(--ui-text-highlighted)]",childLinkIcon:"text-[var(--ui-text)]"},false:{link:"text-[var(--ui-text-muted)]",linkLeadingIcon:"text-[var(--ui-text-dimmed)]",childLink:["hover:bg-[var(--ui-bg-elevated)]/50 text-[var(--ui-text)] hover:text-[var(--ui-text-highlighted)]","transition-colors"],childLinkIcon:["text-[var(--ui-text-dimmed)] group-hover:text-[var(--ui-text)]","transition-colors"]}},disabled:{true:{link:"cursor-not-allowed opacity-75"}},highlight:{true:""}},compoundVariants:[{highlight:!0,orientation:"horizontal",class:{item:"-mb-px",link:"after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full"}},{highlight:!0,orientation:"vertical",class:{item:"px-1.5 -ml-px",link:"after:absolute after:-left-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full"}},{disabled:!1,active:!1,variant:"pill",class:{link:["hover:text-[var(--ui-text-highlighted)] hover:before:bg-[var(--ui-bg-elevated)]/50 data-[state=open]:text-[var(--ui-text-highlighted)]","transition-colors before:transition-colors"],linkLeadingIcon:["group-hover:text-[var(--ui-text)] group-data-[state=open]:text-[var(--ui-text)]","transition-colors"]}},{disabled:!1,variant:"pill",highlight:!0,orientation:"horizontal",class:{link:"data-[state=open]:before:bg-[var(--ui-bg-elevated)]/50"}},{disabled:!1,variant:"pill",highlight:!1,active:!1,orientation:"horizontal",class:{link:"data-[state=open]:before:bg-[var(--ui-bg-elevated)]/50"}},{color:"primary",variant:"pill",active:!0,class:{link:"text-[var(--ui-primary)]",linkLeadingIcon:"text-[var(--ui-primary)]"}},{color:"secondary",variant:"pill",active:!0,class:{link:"text-[var(--ui-secondary)]",linkLeadingIcon:"text-[var(--ui-secondary)]"}},{color:"success",variant:"pill",active:!0,class:{link:"text-[var(--ui-success)]",linkLeadingIcon:"text-[var(--ui-success)]"}},{color:"info",variant:"pill",active:!0,class:{link:"text-[var(--ui-info)]",linkLeadingIcon:"text-[var(--ui-info)]"}},{color:"warning",variant:"pill",active:!0,class:{link:"text-[var(--ui-warning)]",linkLeadingIcon:"text-[var(--ui-warning)]"}},{color:"error",variant:"pill",active:!0,class:{link:"text-[var(--ui-error)]",linkLeadingIcon:"text-[var(--ui-error)]"}},{color:"neutral",variant:"pill",active:!0,class:{link:"text-[var(--ui-text-highlighted)]",linkLeadingIcon:"text-[var(--ui-text-highlighted)]"}},{variant:"pill",active:!0,highlight:!1,class:{link:"before:bg-[var(--ui-bg-elevated)]"}},{variant:"pill",active:!0,highlight:!0,class:{link:["hover:before:bg-[var(--ui-bg-elevated)]/50","before:transition-colors"]}},{disabled:!1,active:!1,variant:"link",class:{link:["hover:text-[var(--ui-text-highlighted)] data-[state=open]:text-[var(--ui-text-highlighted)]","transition-colors"],linkLeadingIcon:["group-hover:text-[var(--ui-text)] group-data-[state=open]:text-[var(--ui-text)]","transition-colors"]}},{color:"primary",variant:"link",active:!0,class:{link:"text-[var(--ui-primary)]",linkLeadingIcon:"text-[var(--ui-primary)]"}},{color:"secondary",variant:"link",active:!0,class:{link:"text-[var(--ui-secondary)]",linkLeadingIcon:"text-[var(--ui-secondary)]"}},{color:"success",variant:"link",active:!0,class:{link:"text-[var(--ui-success)]",linkLeadingIcon:"text-[var(--ui-success)]"}},{color:"info",variant:"link",active:!0,class:{link:"text-[var(--ui-info)]",linkLeadingIcon:"text-[var(--ui-info)]"}},{color:"warning",variant:"link",active:!0,class:{link:"text-[var(--ui-warning)]",linkLeadingIcon:"text-[var(--ui-warning)]"}},{color:"error",variant:"link",active:!0,class:{link:"text-[var(--ui-error)]",linkLeadingIcon:"text-[var(--ui-error)]"}},{color:"neutral",variant:"link",active:!0,class:{link:"text-[var(--ui-text-highlighted)]",linkLeadingIcon:"text-[var(--ui-text-highlighted)]"}},{highlightColor:"primary",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-primary)]"}},{highlightColor:"secondary",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-secondary)]"}},{highlightColor:"success",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-success)]"}},{highlightColor:"info",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-info)]"}},{highlightColor:"warning",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-warning)]"}},{highlightColor:"error",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-error)]"}},{highlightColor:"neutral",highlight:!0,active:!0,class:{link:"after:bg-[var(--ui-bg-inverted)]"}}],defaultVariants:{color:"primary",highlightColor:"primary",variant:"pill"}},H=pe;var fe;const Ae=O({extend:O(Oe),...((fe=H.ui)==null?void 0:fe.navigationMenu)||{}}),ye=ke({__name:"NavigationMenu",props:{as:{},trailingIcon:{},items:{},color:{},variant:{},orientation:{default:"horizontal"},highlight:{type:Boolean},highlightColor:{},content:{},arrow:{type:Boolean},labelKey:{default:"label"},class:{},ui:{},defaultValue:{},delayDuration:{default:0},disableClickTrigger:{type:Boolean},disableHoverTrigger:{type:Boolean},modelValue:{},skipDelayDuration:{}},emits:["update:modelValue"],setup(L,{emit:f}){const e=L,k=f,w=be(),V=me(xe(e,"as","modelValue","defaultValue","delayDuration","skipDelayDuration","orientation"),k),F=Ce(()=>e.content),[K,X]=Me(),i=de(()=>Ae({orientation:e.orientation,color:e.color,variant:e.variant,highlight:e.highlight,highlightColor:e.highlightColor||e.color})),R=de(()=>{var o;return(o=e.items)!=null&&o.length?Array.isArray(e.items[0])?e.items:[e.items]:[]});return(o,ea)=>{var ie;return t(),u(y,null,[c(l(K),null,{default:s(({item:a,active:p,index:I})=>[S(o.$slots,a.slot||"item",{item:a,index:I},()=>{var z,T,N,P;return[S(o.$slots,a.slot?`${a.slot}-leading`:"item-leading",{item:a,active:p,index:I},()=>{var r,b,x;return[a.avatar?(t(),v(Se,g({key:0,size:((r=e.ui)==null?void 0:r.linkLeadingAvatarSize)||i.value.linkLeadingAvatarSize()},a.avatar,{class:i.value.linkLeadingAvatar({class:(b=e.ui)==null?void 0:b.linkLeadingAvatar,active:p,disabled:!!a.disabled})}),null,16,["size","class"])):a.icon?(t(),v(j,{key:1,name:a.icon,class:n(i.value.linkLeadingIcon({class:(x=e.ui)==null?void 0:x.linkLeadingIcon,active:p,disabled:!!a.disabled}))},null,8,["name","class"])):d("",!0)]}),l(Y)(a,e.labelKey)||w[a.slot?`${a.slot}-label`:"item-label"]?(t(),u("span",{key:0,class:n(i.value.linkLabel({class:(z=e.ui)==null?void 0:z.linkLabel}))},[S(o.$slots,a.slot?`${a.slot}-label`:"item-label",{item:a,active:p,index:I},()=>[ve(Z(l(Y)(a,e.labelKey)),1)]),a.target==="_blank"?(t(),v(j,{key:0,name:l(H).ui.icons.external,class:n(i.value.linkLabelExternalIcon({class:(T=e.ui)==null?void 0:T.linkLabelExternalIcon,active:p}))},null,8,["name","class"])):d("",!0)],2)):d("",!0),a.badge||(N=a.children)!=null&&N.length||w[a.slot?`${a.slot}-trailing`:"item-trailing"]?(t(),u("span",{key:1,class:n(i.value.linkTrailing({class:(P=e.ui)==null?void 0:P.linkTrailing}))},[S(o.$slots,a.slot?`${a.slot}-trailing`:"item-trailing",{item:a,active:p,index:I},()=>{var r,b,x,W;return[a.badge?(t(),v(je,g({key:0,color:"neutral",variant:"outline",size:((r=e.ui)==null?void 0:r.linkTrailingBadgeSize)||i.value.linkTrailingBadgeSize()},typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge,{class:i.value.linkTrailingBadge({class:(b=e.ui)==null?void 0:b.linkTrailingBadge})}),null,16,["size","class"])):d("",!0),(x=a.children)!=null&&x.length?(t(),v(j,{key:1,name:a.trailingIcon||o.trailingIcon||l(H).ui.icons.chevronDown,class:n(i.value.linkTrailingIcon({class:(W=e.ui)==null?void 0:W.linkTrailingIcon,active:p}))},null,8,["name","class"])):d("",!0)]})],2)):d("",!0)]})]),_:3}),c(l(Ee),g(l(V),{class:i.value.root({class:[e.class,(ie=e.ui)==null?void 0:ie.root]})}),{default:s(()=>{var a,p,I;return[(t(!0),u(y,null,q(R.value,(z,T)=>{var N,P;return t(),u(y,{key:`list-${T}`},[c(l(Te),{class:n(i.value.list({class:(N=e.ui)==null?void 0:N.list}))},{default:s(()=>[(t(!0),u(y,null,q(z,(r,b)=>{var x,W,te;return t(),v(ge((x=r.children)!=null&&x.length&&o.orientation==="vertical"?He:l(Be)),{key:`list-${T}-${b}`,as:"li",value:r.value||String(b),class:n(i.value.item({class:(W=e.ui)==null?void 0:W.item}))},De({default:s(()=>[c(G,g({ref_for:!0},l(J)(r),{custom:""}),{default:s(({active:$,...C})=>{var E,M,B,U;return[(t(),v(ge((E=r.children)!=null&&E.length&&o.orientation==="horizontal"?l(Ve):l(Q)),g({ref_for:!0},(M=r.children)!=null&&M.length?{disabled:r.disabled}:{active:$},{"as-child":"",active:$,onSelect:r.onSelect}),{default:s(()=>{var _;return[c(ee,g({ref_for:!0},C,{class:i.value.link({class:[(_=e.ui)==null?void 0:_.link,r.class],active:$,disabled:!!r.disabled})}),{default:s(()=>[c(l(X),{item:r,active:$,index:b},null,8,["item","active","index"])]),_:2},1040,["class"])]}),_:2},1040,["active","onSelect"])),(B=r.children)!=null&&B.length&&o.orientation==="horizontal"?(t(),v(l(Ne),g({key:0,ref_for:!0},F.value,{class:i.value.content({class:(U=e.ui)==null?void 0:U.content})}),{default:s(()=>{var _;return[h("ul",{class:n(i.value.childList({class:(_=e.ui)==null?void 0:_.childList}))},[(t(!0),u(y,null,q(r.children,(m,Le)=>{var le;return t(),u("li",{key:Le,class:n(i.value.childItem({class:(le=e.ui)==null?void 0:le.childItem}))},[c(G,g({ref_for:!0},l(J)(m),{custom:""}),{default:s(({active:D,...we})=>[c(l(Q),{"as-child":"",active:D,onSelect:m.onSelect},{default:s(()=>{var ne;return[c(ee,g({ref_for:!0},we,{class:i.value.childLink({class:[(ne=e.ui)==null?void 0:ne.childLink,m.class],active:D})}),{default:s(()=>{var re,se,oe,ce,ue;return[m.icon?(t(),v(j,{key:0,name:m.icon,class:n(i.value.childLinkIcon({class:(re=e.ui)==null?void 0:re.childLinkIcon,active:D}))},null,8,["name","class"])):d("",!0),h("div",{class:n(i.value.childLinkWrapper({class:(se=e.ui)==null?void 0:se.childLinkWrapper}))},[h("p",{class:n(i.value.childLinkLabel({class:(oe=e.ui)==null?void 0:oe.childLinkLabel,active:D}))},[ve(Z(l(Y)(m,e.labelKey))+" ",1),m.target==="_blank"?(t(),v(j,{key:0,name:l(H).ui.icons.external,class:n(i.value.childLinkLabelExternalIcon({class:(ce=e.ui)==null?void 0:ce.childLinkLabelExternalIcon,active:D}))},null,8,["name","class"])):d("",!0)],2),m.description?(t(),u("p",{key:0,class:n(i.value.childLinkDescription({class:(ue=e.ui)==null?void 0:ue.childLinkDescription,active:D}))},Z(m.description),3)):d("",!0)],2)]}),_:2},1040,["class"])]}),_:2},1032,["active","onSelect"])]),_:2},1040)],2)}),128))],2)]}),_:2},1040,["class"])):d("",!0)]}),_:2},1040)]),_:2},[(te=r.children)!=null&&te.length&&o.orientation==="vertical"?{name:"content",fn:s(()=>{var $;return[h("ul",{class:n(i.value.childList({class:($=e.ui)==null?void 0:$.childList}))},[(t(!0),u(y,null,q(r.children,(C,E)=>{var M;return t(),u("li",{key:E,class:n(i.value.childItem({class:(M=e.ui)==null?void 0:M.childItem}))},[c(G,g({ref_for:!0},l(J)(C),{custom:""}),{default:s(({active:B,...U})=>[c(l(Q),{"as-child":"",active:B,onSelect:C.onSelect},{default:s(()=>{var _;return[c(ee,g({ref_for:!0},U,{class:i.value.link({class:[(_=e.ui)==null?void 0:_.link,C.class],active:B,disabled:!!C.disabled})}),{default:s(()=>[c(l(X),{item:C,active:B,index:E},null,8,["item","active","index"])]),_:2},1040,["class"])]}),_:2},1032,["active","onSelect"])]),_:2},1040)],2)}),128))],2)]}),key:"0"}:void 0]),1032,["value","class"])}),128))]),_:2},1032,["class"]),o.orientation==="vertical"&&T<R.value.length-1?(t(),u("div",{key:0,class:n(i.value.separator({class:(P=e.ui)==null?void 0:P.separator}))},null,2)):d("",!0)],64)}),128)),o.orientation==="horizontal"?(t(),u("div",{key:0,class:n(i.value.viewportWrapper({class:(a=e.ui)==null?void 0:a.viewportWrapper}))},[o.arrow?(t(),v(l(Pe),{key:0,class:n(i.value.indicator({class:(p=e.ui)==null?void 0:p.indicator}))},{default:s(()=>{var z;return[h("div",{class:n(i.value.arrow({class:(z=e.ui)==null?void 0:z.arrow}))},null,2)]}),_:1},8,["class"])):d("",!0),c(l(We),{class:n(i.value.viewport({class:(I=e.ui)==null?void 0:I.viewport}))},null,8,["class"])],2)):d("",!0)]}),_:1},16,["class"])],64)}}}),Xe={__name:"PageNavbar",setup(L){const f=[ae(A.brand),[Fe(null,Ke.menu,A.siteSettings)]],e={viewportWrapper:"w-48 right-0 left-auto",childList:"grid-cols-1",linkLabel:"text-white text-lg",link:"text-white",linkLeadingIcon:"text-white",linkTrailingIcon:"hidden"};return(k,w)=>{const V=ye;return t(),v(V,{items:f,class:"flex justify-between h-12 bg-[var(--color-niem)] p-4",variant:"link",ui:e})}}},Ye=_e(Xe,[["__scopeId","data-v-e1bfe4e4"]]),Ze={__name:"PageFooter",setup(L){const f=[ae(A.footerLeft),ae(A.footerRight)];return(e,k)=>{const w=ye;return t(),u(y,null,[k[0]||(k[0]=h("hr",null,null,-1)),c(w,{items:f,class:"justify"})],64)}}},Ge={},Je={id:"page-contents"};function Qe(L,f){const e=Ye,k=Ze;return t(),u(y,null,[h("header",null,[c(e)]),h("main",null,[f[0]||(f[0]=h("div",{id:"page-header"},null,-1)),h("div",Je,[S(L.$slots,"default",{},void 0,!0)])]),h("footer",null,[c(k)])],64)}const ra=_e(Ge,[["render",Qe],["__scopeId","data-v-48405dfc"]]);export{ra as default};
