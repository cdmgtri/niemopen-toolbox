if(!self.define){let e,r={};const s=(s,n)=>(s=new URL(s+".js",n).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let a={};const b=e=>s(e,c),o={module:{uri:c},exports:a,require:b};r[c]=Promise.all(n.map((e=>o[e]||b(e)))).then((e=>(i(...e),a)))}}define(["./workbox-157fe50b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/default.CdX1Dr8a.css",revision:"8e3b1572e352f7383fa9234c0be43422"},{url:"_nuxt/default.Hx9sqrzr.js",revision:"10b9eee67ad2b3828fca398e2243e19d"},{url:"_nuxt/entry.BGBNRaYT.js",revision:"e37d66fc764e4a395c50d25ced152479"},{url:"_nuxt/error-404.cEQKhCNJ.js",revision:"e8756c72c13eab33e42b34196736a987"},{url:"_nuxt/error-404.CoUbADi5.css",revision:"8607a19c8d1c65d70059e5bca0decbc5"},{url:"_nuxt/error-500.BrPWrQts.js",revision:"db2739ab83fe113b5920bce06f81271c"},{url:"_nuxt/error-500.BXQ_YkC0.css",revision:"b7550013a7068d171b726207ce5b4a40"},{url:"_nuxt/index.B0mZrDBV.js",revision:"74e6d03b50505d234a6c8be7aa3ad122"},{url:"_nuxt/index.BESFoG_g.css",revision:"270d6b5c17a6cc025493ad677db0db45"},{url:"_nuxt/nuxt-link.D2xeTwVo.js",revision:"f0929b19d1a5b9be75dd7aa660c84af5"},{url:"_nuxt/page-header._Zc83Mor.css",revision:"80a1ae31a68c646c98846278bd78c0d9"},{url:"_nuxt/page-header.Dx-Oszi6.js",revision:"2caa6ab537ee756a1e46bb113398b3e3"},{url:"_nuxt/pages.ChKw-BlP.js",revision:"69cdea52f16398fcae53cf7bbd489574"},{url:"_nuxt/release-notes.DK7OZoBU.js",revision:"813ef9ac1e28ff45aada2f2eb13d2bbb"},{url:"_nuxt/release-notes.FXDAC6_i.css",revision:"b89fc21afb1c1986d1a69c261bb9a071"},{url:"_nuxt/transforms.Cz-fy46w.js",revision:"15a650352e1384ae07fff54482a97889"},{url:"_nuxt/transforms.DByG-TGB.css",revision:"3472b253cf3a960549d2bc3e22cae22a"},{url:"_nuxt/vue.f36acd1f.jUPe0kvx.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.qThfOIam.js",revision:"eb69e6e10bf8bdd2d4704ba235b27fad"},{url:"200",revision:"1b59b71228c93862c891cb97b6f7be92"},{url:"404",revision:"1b59b71228c93862c891cb97b6f7be92"},{url:"/niem-toolbox/",revision:"030cbcf4ac24b4a3c447429e2c3a7a87"},{url:"release-notes",revision:"45dc2639780490296ebf02bca794d01c"},{url:"transforms",revision:"17e9416d373fd85b70059bb7e3188b14"},{url:"manifest.webmanifest",revision:"fffacb23cd131117015c67617ab34d2a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
