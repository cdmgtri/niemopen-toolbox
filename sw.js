if(!self.define){let e,t={};const n=(n,s)=>(n=new URL(n+".js",s).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const l=e=>n(e,o),c={module:{uri:o},exports:r,require:l};t[o]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"ce79e2433d8edac18183cf00c83f69b1"},{url:"_nuxt/builds/meta/0c43d711-e5d4-4c32-9912-e664d6fd6599.json",revision:null},{url:"manifest.webmanifest",revision:"730244696516379198bcde1198eda23d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/niem-toolbox/")))}));
