import{S as at,i as rt,s as it,a as ot,e as I,c as st,b as J,g as M,t as A,d as z,f as O,h as C,j as lt,o as Ie,k as ct,l as ft,m as ut,n as $e,p as W,q as dt,r as pt,u as ht,v as q,w as B,x,y as F,z as G,A as de}from"./chunks/index-ec7371c4.js";import{S as tt,I as Y,g as Me,f as ze,a as ke,b as pe,s as Q,i as We,c as he,P as Ye,d as _t,e as mt,h as gt}from"./chunks/singletons-a119f7d7.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function $t(r,e){const n=new URL(r);for(const i of vt){let a=n[i];Object.defineProperty(n,i,{get(){return e(),a},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Et="/__data.json";function Rt(r){return r.replace(/\/$/,"")+Et}function St(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ie.delete(Ne(r)),_e(r,e));const ie=new Map;function Lt(r,e){const n=Ne(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:a,...p}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,p))}return _e(r,e)}function It(r,e,n){if(ie.size>0){const i=Ne(r,n),a=ie.get(i);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ie.delete(i)}}return _e(e,n)}function Ne(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${St(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Nt(r).map(i=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((s,u)=>{if(u%2){if(s.startsWith("x+"))return Ee(String.fromCharCode(parseInt(s.slice(2),16)));if(s.startsWith("u+"))return Ee(String.fromCharCode(...s.slice(2).split("-").map(U=>parseInt(U,16))));const m=At.exec(s);if(!m)throw new Error(`Invalid param: ${s}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,T,D,E]=m;return e.push({name:D,matcher:E,optional:!!y,rest:!!T,chained:T?u===1&&t[0]==="":!1}),T?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Ee(s)}).join("")}).join("")}/?$`),params:e}}function Pt(r){return!/^\([^)]+\)$/.test(r)}function Nt(r){return r.slice(1).split("/").filter(Pt)}function Ut(r,e,n){const i={},a=r.slice(1);let p="";for(let t=0;t<e.length;t+=1){const c=e[t];let s=a[t];if(c.chained&&c.rest&&p&&(s=s?p+"/"+s:p),p="",s===void 0)c.rest&&(i[c.name]="");else{if(c.matcher&&!n[c.matcher](s)){if(c.optional&&c.chained){let u=a.indexOf(void 0,t);if(u===-1){const m=e[t+1];if(m!=null&&m.rest&&m.chained)p=s;else return}for(;u>=t;)a[u]=a[u-1],u-=1;continue}return}i[c.name]=s}}if(!p)return i}function Ee(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(r,e,n,i){const a=new Set(e);return Object.entries(n).map(([c,[s,u,m]])=>{const{pattern:y,params:T}=Ot(c),D={id:c,exec:E=>{const U=y.exec(E);if(U)return Ut(U,T,i)},errors:[1,...m||[]].map(E=>r[E]),layouts:[0,...u||[]].map(t),leaf:p(s)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function p(c){const s=c<0;return s&&(c=~c),[s,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function jt(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&4&&(s.data=t[2]),c&2&&(s.form=t[1]),a!==(a=t[0][0])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Dt(r){let e,n,i;var a=r[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[Ht]},$$scope:{ctx:t}}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&4&&(s.data=t[2]),c&2107&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Vt(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&8&&(s.data=t[3]),c&2&&(s.form=t[1]),a!==(a=t[0][1])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Ct(r){let e,n,i;var a=r[0][1];function p(t){return{props:{data:t[3],$$slots:{default:[Gt]},$$scope:{ctx:t}}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&8&&(s.data=t[3]),c&2099&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function qt(r){let e,n,i;var a=r[0][2];function p(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&16&&(s.data=t[4]),c&2&&(s.form=t[1]),a!==(a=t[0][2])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Bt(r){let e,n,i;var a=r[0][2];function p(t){return{props:{data:t[4],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&16&&(s.data=t[4]),c&2083&&(s.$$scope={dirty:c,ctx:t}),a!==(a=t[0][2])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Ft(r){let e,n,i;var a=r[0][3];function p(t){return{props:{data:t[5],form:t[1]}}}return a&&(e=q(a,p(r))),{c(){e&&B(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,c){e&&F(e,t,c),J(t,n,c),i=!0},p(t,c){const s={};if(c&32&&(s.data=t[5]),c&2&&(s.form=t[1]),a!==(a=t[0][3])){if(e){M();const u=e;A(u.$$.fragment,1,0,()=>{G(u,1)}),z()}a?(e=q(a,p(t)),B(e.$$.fragment),O(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){i||(e&&O(e.$$.fragment,t),i=!0)},o(t){e&&A(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&G(e,t)}}}function Gt(r){let e,n,i,a;const p=[Bt,qt],t=[];function c(s,u){return s[0][3]?0:1}return e=c(r),n=t[e]=p[e](r),{c(){n.c(),i=I()},l(s){n.l(s),i=I()},m(s,u){t[e].m(s,u),J(s,i,u),a=!0},p(s,u){let m=e;e=c(s),e===m?t[e].p(s,u):(M(),A(t[m],1,1,()=>{t[m]=null}),z(),n=t[e],n?n.p(s,u):(n=t[e]=p[e](s),n.c()),O(n,1),n.m(i.parentNode,i))},i(s){a||(O(n),a=!0)},o(s){A(n),a=!1},d(s){t[e].d(s),s&&C(i)}}}function Ht(r){let e,n,i,a;const p=[Ct,Vt],t=[];function c(s,u){return s[0][2]?0:1}return e=c(r),n=t[e]=p[e](r),{c(){n.c(),i=I()},l(s){n.l(s),i=I()},m(s,u){t[e].m(s,u),J(s,i,u),a=!0},p(s,u){let m=e;e=c(s),e===m?t[e].p(s,u):(M(),A(t[m],1,1,()=>{t[m]=null}),z(),n=t[e],n?n.p(s,u):(n=t[e]=p[e](s),n.c()),O(n,1),n.m(i.parentNode,i))},i(s){a||(O(n),a=!0)},o(s){A(n),a=!1},d(s){t[e].d(s),s&&C(i)}}}function Xe(r){let e,n=r[7]&&Ze(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ut(e);n&&n.l(a),a.forEach(C),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(i,a){J(i,e,a),n&&n.m(e,null)},p(i,a){i[7]?n?n.p(i,a):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&C(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=dt(r[8])},l(n){e=pt(n,r[8])},m(n,i){J(n,e,i)},p(n,i){i&256&&ht(e,n[8])},d(n){n&&C(e)}}}function Jt(r){let e,n,i,a,p;const t=[Dt,jt],c=[];function s(m,y){return m[0][1]?0:1}e=s(r),n=c[e]=t[e](r);let u=r[6]&&Xe(r);return{c(){n.c(),i=ot(),u&&u.c(),a=I()},l(m){n.l(m),i=st(m),u&&u.l(m),a=I()},m(m,y){c[e].m(m,y),J(m,i,y),u&&u.m(m,y),J(m,a,y),p=!0},p(m,[y]){let T=e;e=s(m),e===T?c[e].p(m,y):(M(),A(c[T],1,1,()=>{c[T]=null}),z(),n=c[e],n?n.p(m,y):(n=c[e]=t[e](m),n.c()),O(n,1),n.m(i.parentNode,i)),m[6]?u?u.p(m,y):(u=Xe(m),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i(m){p||(O(n),p=!0)},o(m){A(n),p=!1},d(m){c[e].d(m),m&&C(i),u&&u.d(m),m&&C(a)}}}function Kt(r,e,n){let{stores:i}=e,{page:a}=e,{components:p}=e,{form:t}=e,{data_0:c=null}=e,{data_1:s=null}=e,{data_2:u=null}=e,{data_3:m=null}=e;lt(i.page.notify);let y=!1,T=!1,D=null;return Ie(()=>{const E=i.page.subscribe(()=>{y&&(n(7,T=!0),n(8,D=document.title||"untitled page"))});return n(6,y=!0),E}),r.$$set=E=>{"stores"in E&&n(9,i=E.stores),"page"in E&&n(10,a=E.page),"components"in E&&n(0,p=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,c=E.data_0),"data_1"in E&&n(3,s=E.data_1),"data_2"in E&&n(4,u=E.data_2),"data_3"in E&&n(5,m=E.data_3)},r.$$.update=()=>{r.$$.dirty&1536&&i.page.set(a)},[p,t,c,s,u,m,y,T,D,i,a]}class Mt extends at{constructor(e){super(),rt(this,e,Kt,Jt,it,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const zt="modulepreload",Wt=function(r,e){return new URL(r,e).href},Qe={},X=function(e,n,i){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(p=>{if(p=Wt(p,i),p in Qe)return;Qe[p]=!0;const t=p.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const y=a[m];if(y.href===p&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${c}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":zt,t||(u.as="script",u.crossOrigin=""),u.href=p,document.head.appendChild(u),t)return new Promise((m,y)=>{u.addEventListener("load",m),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})})).then(()=>e())},Yt=r=>Number.isInteger(+r)&&+r>0,Xt=r=>r.split("/").length>1,Zt={int:Yt,path:Xt},me=[()=>X(()=>import("./chunks/0-7c205455.js"),["./chunks/0-7c205455.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-3b15beeb.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/1-7bce7cee.js"),["./chunks/1-7bce7cee.js","./components/error.svelte-668ccd25.js","./chunks/index-ec7371c4.js","./chunks/singletons-a119f7d7.js"],import.meta.url),()=>X(()=>import("./chunks/2-6b2843da.js"),["./chunks/2-6b2843da.js","./components/pages/(admin)/_layout.svelte-8ae69541.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/3-a519e3a8.js"),["./chunks/3-a519e3a8.js","./components/pages/(admin)/settings/_layout.svelte-ddc1f428.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/4-61e22bad.js"),["./chunks/4-61e22bad.js","./components/pages/(frontend)/_layout.svelte-73e5816f.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/5-c8fae174.js"),["./chunks/5-c8fae174.js","./components/pages/(admin)/settings/_page.svelte-639b99dd.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/6-23d3c635.js"),["./chunks/6-23d3c635.js","./components/pages/(admin)/settings/profile/_page.svelte-1b02d03f.js","./chunks/index-ec7371c4.js"],import.meta.url),()=>X(()=>import("./chunks/7-99a1905b.js"),["./chunks/7-99a1905b.js","./components/pages/(frontend)/_page.svelte-fa6aedc8.js","./chunks/index-ec7371c4.js","./chunks/navigation-8b7bac5c.js","./chunks/singletons-a119f7d7.js"],import.meta.url),()=>X(()=>import("./chunks/8-52cbb9b7.js"),["./chunks/8-52cbb9b7.js","./components/pages/(frontend)/about/_page.svelte-a7bd64c3.js","./chunks/index-ec7371c4.js","./chunks/navigation-8b7bac5c.js","./chunks/singletons-a119f7d7.js"],import.meta.url)],Qt=[],xt={"/(frontend)":[7,[4]],"/(frontend)/about":[8,[4]],"/(admin)/settings":[5,[2,3]],"/(admin)/settings/profile":[6,[2,3]]},en={handleError:({error:r})=>{console.error(r)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function tn(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,a])=>[i,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const nn=-1,an=-2,rn=-3,on=-4,sn=-5,ln=-6;function cn(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(a,p=!1){if(a===nn)return;if(a===rn)return NaN;if(a===on)return 1/0;if(a===sn)return-1/0;if(a===ln)return-0;if(p)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const s=new Set;n[a]=s;for(let y=1;y<t.length;y+=1)s.add(i(t[y]));break;case"Map":const u=new Map;n[a]=u;for(let y=1;y<t.length;y+=2)u.set(i(t[y]),i(t[y+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const m=Object.create(null);n[a]=m;for(let y=1;y<t.length;y+=2)m[t[y]]=i(t[y+1]);break}else{const c=new Array(t.length);n[a]=c;for(let s=0;s<t.length;s+=1){const u=t[s];u!==an&&(c[s]=i(u))}}else{const c={};n[a]=c;for(const s in t){const u=t[s];c[s]=i(u)}}return n[a]}return i(0)}const Re=Tt(me,Qt,xt,Zt),Oe=me[0],Pe=me[1];Oe();Pe();let oe={};try{oe=JSON.parse(sessionStorage[tt])}catch{}function Se(r){oe[r]=he()}function fn({target:r,base:e}){var He;const n=document.documentElement,i=[];let a=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,s=!1,u=!0,m=!1,y=!1,T=!1,D=!1,E,U=(He=history.state)==null?void 0:He[Y];U||(U=Date.now(),history.replaceState({...history.state,[Y]:U},"",location.href));const ge=oe[U];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Z,Ue,se;async function Te(){se=se||Promise.resolve(),await se,se=null;const o=new URL(location.href),l=fe(o,!0);a=null,await De(l,o,[])}async function we(o,{noScroll:l=!1,replaceState:d=!1,keepFocus:f=!1,state:_={},invalidateAll:h=!1},g,b){return typeof o=="string"&&(o=new URL(o,Me(document))),ue({url:o,scroll:l?he():null,keepfocus:f,redirect_chain:g,details:{state:_,replaceState:d},nav_token:b,accepted:()=>{h&&(D=!0)},blocked:()=>{},type:"goto"})}async function je(o){const l=fe(o,!1);if(!l)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return a={id:l.id,promise:qe(l).then(d=>(d.type==="loaded"&&d.state.error&&(a=null),d))},a.promise}async function le(...o){const d=Re.filter(f=>o.some(_=>f.exec(_))).map(f=>Promise.all([...f.layouts,f.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(d)}async function De(o,l,d,f,_={},h){var b,v;Ue=_;let g=o&&await qe(o);if(g||(g=await Ge(l,{id:null},await re(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(o==null?void 0:o.url)||l,Ue!==_)return!1;if(g.type==="redirect")if(d.length>10||d.includes(l.pathname))g=await ce({status:500,error:await re(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return we(new URL(g.location,l).href,{},[...d,l.pathname],_),!1;else((v=(b=g.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await Q.updated.check()&&await ae(l);if(i.length=0,D=!1,m=!0,f&&f.details){const{details:w}=f,k=w.replaceState?0:1;w.state[Y]=U+=k,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(a=null,s?(t=g.state,g.props.page&&(g.props.page.url=l),E.$set(g.props)):Ve(g),f){const{scroll:w,keepfocus:k}=f;if(k||Le(),await de(),u){const S=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();u=!0,g.props.page&&(Z=g.props.page),h&&h(),m=!1}function Ve(o){var f;t=o.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),Z=o.props.page,E=new Mt({target:r,props:{...o.props,stores:Q},hydrate:!0});const d={from:null,to:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(_=>_(d)),s=!0}async function ne({url:o,params:l,branch:d,status:f,error:_,route:h,form:g}){const b=d.filter(Boolean);let v="never";for(const L of d)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);o.pathname=wt(o.pathname,v),o.search=o.search;const w={type:"loaded",state:{url:o,params:l,branch:d,error:_,route:h},props:{components:b.map(L=>L.node.component)}};g!==void 0&&(w.props.form=g);let k={},S=!Z;for(let L=0;L<b.length;L+=1){const $=b[L];k={...k,...$.data},(S||!t.branch.some(V=>V===$))&&(w.props[`data_${L}`]=k,S=S||Object.keys($.data??{}).length>0)}return S||(S=Object.keys(Z.data).length!==Object.keys(k).length),(!t.url||o.href!==t.url.href||t.error!==_||g!==void 0&&g!==Z.form||S)&&(w.props.page={error:_,params:l,route:{id:(h==null?void 0:h.id)??null},status:f,url:new URL(o),form:g??null,data:S?k:Z.data}),w}async function ye({loader:o,parent:l,url:d,params:f,route:_,server_data_node:h}){var w,k,S;let g=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await o();if((w=v.universal)!=null&&w.load){let K=function(...$){for(const V of $){const{href:H}=new URL(V,d);b.dependencies.add(H)}};const L={route:{get id(){return b.route=!0,_.id}},params:new Proxy(f,{get:($,V)=>(b.params.add(V),$[V])}),data:(h==null?void 0:h.data)??null,url:$t(d,()=>{b.url=!0}),async fetch($,V){let H;$ instanceof Request?(H=$.url,V={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...V}):H=$;const R=new URL(H,d).href;return K(R),s?It(H,R,V):Lt(H,V)},setHeaders:()=>{},depends:K,parent(){return b.parent=!0,l()}};g=await v.universal.load.call(null,L)??null,g=g?await tn(g):null}return{node:v,loader:o,server:h,universal:(k=v.universal)!=null&&k.load?{type:"data",data:g,uses:b}:null,data:g??(h==null?void 0:h.data)??null,slash:((S=v.universal)==null?void 0:S.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(o,l,d,f,_){if(D)return!0;if(!f)return!1;if(f.parent&&o||f.route&&l||f.url&&d)return!0;for(const h of f.params)if(_[h]!==t.params[h])return!0;for(const h of f.dependencies)if(i.some(g=>g(new URL(h))))return!0;return!1}function be(o,l){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?l??null:null}async function qe({id:o,invalidating:l,url:d,params:f,route:_}){if((a==null?void 0:a.id)===o)return a.promise;const{errors:h,layouts:g,leaf:b}=_,v=[...g,b];h.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let w=null;const k=t.url?o!==t.url.pathname+t.url.search:!1,S=t.route?_.id!==t.route.id:!1,K=v.reduce((R,N,j)=>{var te;const P=t.branch[j],ee=!!(N!=null&&N[0])&&((P==null?void 0:P.loader)!==N[1]||Ce(R.some(Boolean),S,k,(te=P.server)==null?void 0:te.uses,f));return R.push(ee),R},[]);if(K.some(Boolean)){try{w=await et(d,K)}catch(R){return ce({status:500,error:await re(R,{url:d,params:f,route:{id:_.id}}),url:d,route:_})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let $=!1;const V=v.map(async(R,N)=>{var te;if(!R)return;const j=t.branch[N],P=L==null?void 0:L[N];if((!P||P.type==="skip")&&R[1]===(j==null?void 0:j.loader)&&!Ce($,S,k,(te=j.universal)==null?void 0:te.uses,f))return j;if($=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:R[1],url:d,params:f,route:_,parent:async()=>{var Ke;const Je={};for(let ve=0;ve<N;ve+=1)Object.assign(Je,(Ke=await V[ve])==null?void 0:Ke.data);return Je},server_data_node:be(P===void 0&&R[0]?{type:"skip"}:P??null,j==null?void 0:j.server)})});for(const R of V)R.catch(()=>{});const H=[];for(let R=0;R<v.length;R+=1)if(v[R])try{H.push(await V[R])}catch(N){if(N instanceof xe)return{type:"redirect",location:N.location};let j=500,P;if(L!=null&&L.includes(N))j=N.status??j,P=N.error;else if(N instanceof Ae)j=N.status,P=N.body;else{if(await Q.updated.check())return await ae(d);P=await re(N,{params:f,url:d,route:{id:_.id}})}const ee=await Be(R,H,h);return ee?await ne({url:d,params:f,branch:H.slice(0,ee.idx).concat(ee.node),status:j,error:P,route:_}):await Ge(d,{id:_.id},P,j)}else H.push(void 0);return await ne({url:d,params:f,branch:H,status:200,error:null,route:_,form:l?void 0:null})}async function Be(o,l,d){for(;o--;)if(d[o]){let f=o;for(;!l[f];)f-=1;try{return{idx:f+1,node:{node:await d[o](),loader:d[o],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:o,error:l,url:d,route:f}){const _={},h=await Oe();let g=null;if(h.has_server_load)try{const w=await et(d,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=w.nodes[0]??null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||c)&&await ae(d)}const b=await ye({loader:Oe,url:d,params:_,route:f,parent:()=>Promise.resolve({}),server_data_node:be(g)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ne({url:d,params:_,branch:[b,v],status:o,error:l,route:null})}function fe(o,l){if(We(o,e))return;const d=yt(o.pathname.slice(e.length)||"/");for(const f of Re){const _=f.exec(d);if(_)return{id:o.pathname+o.search,invalidating:l,route:f,params:bt(_),url:o}}}function Fe({url:o,type:l,intent:d,delta:f}){var b,v;let _=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(d==null?void 0:d.params)??null,route:{id:((v=d==null?void 0:d.route)==null?void 0:v.id)??null},url:o},willUnload:!d,type:l};f!==void 0&&(h.delta=f);const g={...h,cancel:()=>{_=!0}};return y||p.before_navigate.forEach(w=>w(g)),_?null:h}async function ue({url:o,scroll:l,keepfocus:d,redirect_chain:f,details:_,type:h,delta:g,nav_token:b,accepted:v,blocked:w}){const k=fe(o,!1),S=Fe({url:o,type:h,delta:g,intent:k});if(!S){w();return}Se(U),v(),y=!0,s&&Q.navigating.set(S),await De(k,o,f,{scroll:l,keepfocus:d,details:_},b,()=>{y=!1,p.after_navigate.forEach(K=>K(S)),Q.navigating.set(null)})}async function Ge(o,l,d,f){return o.origin===location.origin&&o.pathname===location.pathname&&!c?await ce({status:f,error:d,url:o,route:l}):await ae(o)}function ae(o){return location.href=o.href,new Promise(()=>{})}function nt(){let o;n.addEventListener("mousemove",h=>{const g=h.target;clearTimeout(o),o=setTimeout(()=>{f(g,2)},20)});function l(h){f(h.composedPath()[0],1)}n.addEventListener("mousedown",l),n.addEventListener("touchstart",l,{passive:!0});const d=new IntersectionObserver(h=>{for(const g of h)g.isIntersecting&&(le(new URL(g.target.href).pathname),d.unobserve(g.target))},{threshold:0});function f(h,g){const b=ze(h,n);if(!b)return;const{url:v,external:w}=ke(b,e);if(w)return;const k=pe(b);k.reload||(g<=k.preload_data?je(v):g<=k.preload_code&&le(v.pathname))}function _(){d.disconnect();for(const h of n.querySelectorAll("a")){const{url:g,external:b}=ke(h,e);if(b)continue;const v=pe(h);v.reload||(v.preload_code===Ye.viewport&&d.observe(h),v.preload_code===Ye.eager&&le(g.pathname))}}p.after_navigate.push(_),_()}return{after_navigate:o=>{Ie(()=>(p.after_navigate.push(o),()=>{const l=p.after_navigate.indexOf(o);p.after_navigate.splice(l,1)}))},before_navigate:o=>{Ie(()=>(p.before_navigate.push(o),()=>{const l=p.before_navigate.indexOf(o);p.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(m||!s)&&(u=!1)},goto:(o,l={})=>we(o,l,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:l}=new URL(o,location.href);i.push(d=>d.href===l)}return Te()},invalidateAll:()=>(D=!0,Te()),preload_data:async o=>{const l=new URL(o,Me(document));await je(l)},preload_code:le,apply_action:async o=>{if(o.type==="error"){const l=new URL(location.href),{branch:d,route:f}=t;if(!f)return;const _=await Be(t.branch.length,d,f.errors);if(_){const h=await ne({url:l,params:t.params,branch:d.slice(0,_.idx).concat(_.node),status:o.status??500,error:o.error,route:f});t=h.state,E.$set(h.props),de().then(Le)}}else if(o.type==="redirect")we(o.location,{invalidateAll:!0},[]);else{const l={form:o.data,page:{...Z,form:o.data,status:o.status}};E.$set(l),o.type==="success"&&de().then(Le)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var f;let d=!1;if(!y){const _={from:{params:t.params,route:{id:((f=t.route)==null?void 0:f.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};p.before_navigate.forEach(h=>h(_))}d?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(U);try{sessionStorage[tt]=JSON.stringify(oe)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||nt(),n.addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const d=ze(l.composedPath()[0],n);if(!d)return;const{url:f,external:_,has:h}=ke(d,e),g=pe(d);if(!f||!(d instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||h.download)return;if(_||g.reload){Fe({url:f,type:"link"})||l.preventDefault(),y=!0;return}const[v,w]=f.href.split("#");if(w!==void 0&&v===location.href.split("#")[0]){T=!0,Se(U),t.url=f,Q.page.set({...Z,url:f}),Q.page.notify();return}ue({url:f,scroll:g.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),n.addEventListener("submit",l=>{if(l.defaultPrevented)return;const d=HTMLFormElement.prototype.cloneNode.call(l.target),f=l.submitter;if(((f==null?void 0:f.formMethod)||d.method)!=="get")return;const h=new URL((f==null?void 0:f.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||d.action);if(We(h,e))return;const g=l.target,{noscroll:b,reload:v}=pe(g);if(v)return;l.preventDefault(),l.stopPropagation();const w=new FormData(g),k=f==null?void 0:f.getAttribute("name");k&&w.append(k,(f==null?void 0:f.getAttribute("value"))??""),h.search=new URLSearchParams(w).toString(),ue({url:h,scroll:b?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",l=>{var d;if((d=l.state)!=null&&d[Y]){if(l.state[Y]===U)return;const f=l.state[Y]-U;ue({url:new URL(location.href),scroll:oe[l.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=l.state[Y]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[Y]:++U},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Q.navigating.set(null)})},_hydrate:async({status:o=200,error:l,node_ids:d,params:f,route:_,data:h,form:g})=>{c=!0;const b=new URL(location.href);({params:f={},route:_={id:null}}=fe(b,!1)||{});let v;try{const w=d.map(async(k,S)=>{const K=h[S];return ye({loader:me[k],url:b,params:f,route:_,parent:async()=>{const L={};for(let $=0;$<S;$+=1)Object.assign(L,(await w[$]).data);return L},server_data_node:be(K)})});v=await ne({url:b,params:f,branch:await Promise.all(w),status:o,error:l,form:g,route:Re.find(({id:k})=>k===_.id)??null})}catch(w){if(w instanceof xe){await ae(new URL(w.location,location.href));return}v=await ce({status:w instanceof Ae?w.status:500,error:await re(w,{url:b,params:f,route:_}),url:b,route:_})}Ve(v)}}}async function et(r,e){var p;const n=new URL(r);n.pathname=Rt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await _e(n.href),a=await i.json();if(!i.ok)throw new Error(a);return(p=a.nodes)==null||p.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=cn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){return r instanceof Ae?r.body:en.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function _n({env:r,hydrate:e,paths:n,target:i,version:a}){_t(n),gt(a);const p=fn({target:i,base:n.base});mt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{_n as start};