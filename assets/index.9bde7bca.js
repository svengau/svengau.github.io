const Ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}};Ke();function T(){}function We(t,e){for(const r in e)t[r]=e[r];return t}function Xe(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Be(t){return t()}function Ee(){return Object.create(null)}function Z(t){t.forEach(Be)}function Ge(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function Ce(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function Qe(t){return Object.keys(t).length===0}function Ze(t,e,r,n){if(t){const l=Je(t,e,r,n);return t[0](l)}}function Je(t,e,r,n){return t[1]&&n?We(r.ctx.slice(),t[1](n(e))):r.ctx}function $e(t,e,r,n){if(t[2]&&n){const l=t[2](n(r));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],i=Math.max(e.dirty.length,l.length);for(let c=0;c<i;c+=1)o[c]=e.dirty[c]|l[c];return o}return e.dirty|l}return e.dirty}function et(t,e,r,n,l,o){if(l){const i=Je(e,r,n,o);t.p(i,l)}}function tt(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let n=0;n<r;n++)e[n]=-1;return e}return-1}function a(t,e){t.appendChild(e)}function N(t,e,r){t.insertBefore(e,r||null)}function C(t){t.parentNode.removeChild(t)}function xe(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function s(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function _(){return E(" ")}function ze(){return E("")}function ue(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function nt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function rt(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function lt(t,e,{bubbles:r=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,r,n,e),l}let te;function K(t){te=t}function pe(){if(!te)throw new Error("Function called outside component initialization");return te}function ot(t){pe().$$.on_mount.push(t)}function it(t){pe().$$.after_update.push(t)}function at(){const t=pe();return(e,r,{cancelable:n=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=lt(e,r,{cancelable:n});return l.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}const $=[],_e=[],fe=[],Te=[],Ve=Promise.resolve();let ve=!1;function Ye(){ve||(ve=!0,Ve.then(je))}function st(){return Ye(),Ve}function he(t){fe.push(t)}const be=new Set;let ce=0;function je(){const t=te;do{for(;ce<$.length;){const e=$[ce];ce++,K(e),ct(e.$$)}for(K(null),$.length=0,ce=0;_e.length;)_e.pop()();for(let e=0;e<fe.length;e+=1){const r=fe[e];be.has(r)||(be.add(r),r())}fe.length=0}while($.length);for(;Te.length;)Te.pop()();ve=!1,be.clear(),K(t)}function ct(t){if(t.fragment!==null){t.update(),Z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}const de=new Set;let Q;function ut(){Q={r:0,c:[],p:Q}}function ft(){Q.r||Z(Q.c),Q=Q.p}function W(t,e){t&&t.i&&(de.delete(t),t.i(e))}function X(t,e,r,n){if(t&&t.o){if(de.has(t))return;de.add(t),Q.c.push(()=>{de.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function ke(t,e){const r=e.token={};function n(l,o,i,c){if(e.token!==r)return;e.resolved=c;let d=e.ctx;i!==void 0&&(d=d.slice(),d[i]=c);const f=l&&(e.current=l)(d);let p=!1;e.block&&(e.blocks?e.blocks.forEach((h,b)=>{b!==o&&h&&(ut(),X(h,1,1,()=>{e.blocks[b]===h&&(e.blocks[b]=null)}),ft())}):e.block.d(1),f.c(),W(f,1),f.m(e.mount(),e.anchor),p=!0),e.block=f,e.blocks&&(e.blocks[o]=f),p&&je()}if(Xe(t)){const l=pe();if(t.then(o=>{K(l),n(e.then,1,e.value,o),K(null)},o=>{if(K(l),n(e.catch,2,e.error,o),K(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function ye(t,e,r){const n=e.slice(),{resolved:l}=t;t.current===t.then&&(n[t.value]=l),t.current===t.catch&&(n[t.error]=l),t.block.p(n,r)}const dt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function me(t){t&&t.c()}function ne(t,e,r,n){const{fragment:l,on_mount:o,on_destroy:i,after_update:c}=t.$$;l&&l.m(e,r),n||he(()=>{const d=o.map(Be).filter(Ge);i?i.push(...d):Z(d),t.$$.on_mount=[]}),c.forEach(he)}function re(t,e){const r=t.$$;r.fragment!==null&&(Z(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&($.push(t),Ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,r,n,l,o,i,c=[-1]){const d=te;K(t);const f=t.$$={fragment:null,ctx:null,props:o,update:T,not_equal:l,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Ee(),dirty:c,skip_bound:!1,root:e.target||d.$$.root};i&&i(f.root);let p=!1;if(f.ctx=r?r(t,e.props||{},(h,b,...L)=>{const v=L.length?L[0]:b;return f.ctx&&l(f.ctx[h],f.ctx[h]=v)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](v),p&&ht(t,h)),b}):[],f.update(),p=!0,Z(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const h=rt(e.target);f.fragment&&f.fragment.l(h),h.forEach(C)}else f.fragment&&f.fragment.c();e.intro&&W(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),je()}K(d)}class ie{$destroy(){re(this,1),this.$destroy=T}$on(e,r){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const l=n.indexOf(r);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!Qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt=t=>({intersecting:t&1,entry:t&2,observer:t&4}),Ne=t=>({intersecting:t[0],entry:t[1],observer:t[2]});function pt(t){let e;const r=t[9].default,n=Ze(r,t,t[8],Ne);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&263)&&et(n,r,l,l[8],e?$e(r,l[8],o,mt):tt(l[8]),Ne)},i(l){e||(W(n,l),e=!0)},o(l){X(n,l),e=!1},d(l){n&&n.d(l)}}}function gt(t,e,r){let{$$slots:n={},$$scope:l}=e,{element:o=null}=e,{once:i=!1}=e,{intersecting:c=!1}=e,{root:d=null}=e,{rootMargin:f="0px"}=e,{threshold:p=0}=e,{entry:h=null}=e,{observer:b=null}=e;const L=at();let v=null,j=null;const y=()=>{r(2,b=new IntersectionObserver(m=>{m.forEach(I=>{r(1,h=I),r(0,c=I.isIntersecting)})},{root:d,rootMargin:f,threshold:p}))};return ot(()=>(y(),()=>{b&&(b.disconnect(),r(2,b=null))})),it(async()=>{h!==null&&(L("observe",h),h.isIntersecting&&(L("intersect",h),i&&b.unobserve(o))),await st(),o!==null&&o!==j&&(b.observe(o),j!==null&&b.unobserve(j),j=o),v&&f!==v&&(b.disconnect(),j=null,y()),v=f}),t.$$set=m=>{"element"in m&&r(3,o=m.element),"once"in m&&r(4,i=m.once),"intersecting"in m&&r(0,c=m.intersecting),"root"in m&&r(5,d=m.root),"rootMargin"in m&&r(6,f=m.rootMargin),"threshold"in m&&r(7,p=m.threshold),"entry"in m&&r(1,h=m.entry),"observer"in m&&r(2,b=m.observer),"$$scope"in m&&r(8,l=m.$$scope)},[c,h,b,o,i,d,f,p,l,n]}class bt extends ie{constructor(e){super(),oe(this,e,gt,pt,le,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function Le(t,e,r){const n=t.slice();return n[1]=e[r],n}function Ae(t){let e,r=t[0],n=[];for(let l=0;l<r.length;l+=1)n[l]=Ie(Le(t,r,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=ze()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);N(l,e,o)},p(l,o){if(o&1){r=l[0];let i;for(i=0;i<r.length;i+=1){const c=Le(l,r,i);n[i]?n[i].p(c,o):(n[i]=Ie(c),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(l){xe(n,l),l&&C(e)}}}function Oe(t){let e,r=t[1].stargazers_count+"",n,l,o;return{c(){e=s("div"),n=E(r),l=_(),o=s("i"),u(o,"class","fa-regular fa-star")},m(i,c){N(i,e,c),a(e,n),a(e,l),a(e,o)},p(i,c){c&1&&r!==(r=i[1].stargazers_count+"")&&J(n,r)},d(i){i&&C(e)}}}function Ie(t){let e,r,n,l,o,i,c=t[1].name+"",d,f,p,h=t[1].description+"",b,L,v,j,y=t[1].topics.map(He).join(" ")+"",m,I,x,q,F=t[1].created_at.substring(0,4)+"",D,A,P,z=t[1].language+"",S,g,k,M,w=t[1].stargazers_count&&Oe(t);return{c(){e=s("li"),r=s("a"),n=s("div"),l=s("div"),o=_(),i=s("h2"),d=E(c),f=_(),p=s("div"),b=E(h),L=_(),v=s("div"),j=s("div"),m=E(y),I=_(),x=s("div"),q=s("div"),D=E(F),A=_(),P=s("div"),S=E(z),g=_(),w&&w.c(),M=_(),u(l,"class","flex flex-row gap-4 text-gray-500 text-sm"),u(i,"class","text-xl"),u(x,"class","flex flex-row gap-6"),u(v,"class","mt-2 text-gray-500 "),u(n,"class","flex flex-col"),u(r,"href",k=t[1].html_url),u(r,"target","_blank"),u(e,"class","mb-10")},m(O,R){N(O,e,R),a(e,r),a(r,n),a(n,l),a(n,o),a(n,i),a(i,d),a(n,f),a(n,p),a(p,b),a(n,L),a(n,v),a(v,j),a(j,m),a(v,I),a(v,x),a(x,q),a(q,D),a(x,A),a(x,P),a(P,S),a(x,g),w&&w.m(x,null),a(e,M)},p(O,R){R&1&&c!==(c=O[1].name+"")&&J(d,c),R&1&&h!==(h=O[1].description+"")&&J(b,h),R&1&&y!==(y=O[1].topics.map(He).join(" ")+"")&&J(m,y),R&1&&F!==(F=O[1].created_at.substring(0,4)+"")&&J(D,F),R&1&&z!==(z=O[1].language+"")&&J(S,z),O[1].stargazers_count?w?w.p(O,R):(w=Oe(O),w.c(),w.m(x,null)):w&&(w.d(1),w=null),R&1&&k!==(k=O[1].html_url)&&u(r,"href",k)},d(O){O&&C(e),w&&w.d()}}}function wt(t){let e,r,n=t[0]&&Ae(t);return{c(){e=s("section"),r=s("ul"),n&&n.c()},m(l,o){N(l,e,o),a(e,r),n&&n.m(r,null)},p(l,[o]){l[0]?n?n.p(l,o):(n=Ae(l),n.c(),n.m(r,null)):n&&(n.d(1),n=null)},i:T,o:T,d(l){l&&C(e),n&&n.d()}}}const He=t=>`#${t}`;function _t(t,e,r){let{repositories:n=[]}=e;return t.$$set=l=>{"repositories"in l&&r(0,n=l.repositories)},[n]}class vt extends ie{constructor(e){super(),oe(this,e,_t,wt,le,{repositories:0})}}function Pe(t,e,r){const n=t.slice();return n[1]=e[r],n}function qe(t){let e,r=t[0],n=[];for(let l=0;l<r.length;l+=1)n[l]=Fe(Pe(t,r,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=ze()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);N(l,e,o)},p(l,o){if(o&1){r=l[0];let i;for(i=0;i<r.length;i+=1){const c=Pe(l,r,i);n[i]?n[i].p(c,o):(n[i]=Fe(c),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(l){xe(n,l),l&&C(e)}}}function Fe(t){let e,r,n,l,o,i=t[1].readable_publish_date+"",c,d,f,p=t[1].reading_time_minutes+"",h,b,L,v,j=t[1].title+"",y,m,I,x=t[1].description+"",q,F,D,A,P=t[1].tag_list.map(De).join(" ")+"",z,S,g,k,M=t[1].public_reactions_count+"",w,O,R,G,U,H=t[1].comments_count+"",B,Se,ge,ae,Me;return{c(){e=s("li"),r=s("a"),n=s("div"),l=s("div"),o=s("div"),c=E(i),d=E(`
                -
                `),f=s("div"),h=E(p),b=E(" min. read"),L=_(),v=s("h2"),y=E(j),m=_(),I=s("div"),q=E(x),F=_(),D=s("div"),A=s("div"),z=E(P),S=_(),g=s("div"),k=s("div"),w=E(M),O=_(),R=s("i"),G=_(),U=s("div"),B=E(H),Se=_(),ge=s("i"),Me=_(),u(l,"class","flex flex-row gap-4 text-gray-500 text-sm"),u(v,"class","text-xl"),u(R,"class","fa-regular fa-heart"),u(ge,"class","fa-regular fa-comment"),u(g,"class","flex flex-row gap-6"),u(D,"class","mt-2 text-gray-500 "),u(n,"class","flex flex-col"),u(r,"href",ae=t[1].url),u(r,"target","_blank"),u(e,"class","mb-10")},m(V,Y){N(V,e,Y),a(e,r),a(r,n),a(n,l),a(l,o),a(o,c),a(l,d),a(l,f),a(f,h),a(f,b),a(n,L),a(n,v),a(v,y),a(n,m),a(n,I),a(I,q),a(n,F),a(n,D),a(D,A),a(A,z),a(D,S),a(D,g),a(g,k),a(k,w),a(k,O),a(k,R),a(g,G),a(g,U),a(U,B),a(U,Se),a(U,ge),a(e,Me)},p(V,Y){Y&1&&i!==(i=V[1].readable_publish_date+"")&&J(c,i),Y&1&&p!==(p=V[1].reading_time_minutes+"")&&J(h,p),Y&1&&j!==(j=V[1].title+"")&&J(y,j),Y&1&&x!==(x=V[1].description+"")&&J(q,x),Y&1&&P!==(P=V[1].tag_list.map(De).join(" ")+"")&&J(z,P),Y&1&&M!==(M=V[1].public_reactions_count+"")&&J(w,M),Y&1&&H!==(H=V[1].comments_count+"")&&J(B,H),Y&1&&ae!==(ae=V[1].url)&&u(r,"href",ae)},d(V){V&&C(e)}}}function kt(t){let e,r,n=t[0]&&qe(t);return{c(){e=s("section"),r=s("ul"),n&&n.c()},m(l,o){N(l,e,o),a(e,r),n&&n.m(r,null)},p(l,[o]){l[0]?n?n.p(l,o):(n=qe(l),n.c(),n.m(r,null)):n&&(n.d(1),n=null)},i:T,o:T,d(l){l&&C(e),n&&n.d()}}}const De=t=>`#${t}`;function yt(t,e,r){let{articles:n=[]}=e;return t.$$set=l=>{"articles"in l&&r(0,n=l.articles)},[n]}class xt extends ie{constructor(e){super(),oe(this,e,yt,kt,le,{articles:0})}}class zt extends ie{constructor(e){super(),oe(this,e,null,null,le,{})}}var jt="/assets/stopwar.4dbabeb7.svg";async function we(t,e){const r=localStorage[t];if(!r||r.expiredAt<Date.now()){const n=await fetch(e).then(l=>l.json());localStorage.setItem(t,JSON.stringify({content:n,expiredAt:Date.now()+60*1e3}))}return JSON.parse(localStorage[t]).content}const{window:ee}=dt;function Re(t,e,r){const n=t.slice();return n[17]=e[r],n}function St(t){let e,r=t[15].message+"",n;return{c(){e=s("p"),n=E(r),u(e,"style","bg-red-500")},m(l,o){N(l,e,o),a(e,n)},p:T,d(l){l&&C(e)}}}function Mt(t){let e,r,n,l,o,i,c,d,f,p,h,b,L=t[20].name+"",v,j,y,m,I,x,q,F,D,A,P,z,S,g,k,M,w=t[20].bio+"",O,R,G,U=t[20].company&&Et(t);return{c(){e=s("div"),r=s("div"),n=s("img"),o=_(),i=s("img"),f=_(),p=s("div"),h=s("div"),b=s("h1"),v=E(L),j=_(),y=s("div"),m=s("a"),m.innerHTML='<i class="fa-brands fa-linkedin-in"></i>',I=_(),x=s("a"),x.innerHTML='<i class="fa-brands fa-github"></i>',q=_(),F=s("a"),F.innerHTML='<i class="fa-brands fa-twitter"></i>',D=_(),A=s("a"),A.innerHTML='<i class="fa-brands fa-dev"></i>',P=_(),z=s("a"),z.innerHTML='<i class="fa-brands fa-ethereum"></i>',k=_(),M=s("p"),O=E(w),R=_(),U&&U.c(),Ce(n.src,l=t[20].avatar_url)||u(n,"src",l),u(n,"alt",t[20].name),u(n,"class","rounded-full"),Ce(i.src,c=jt)||u(i,"src",c),u(i,"class","w-10 absolute bottom-0 right-0"),u(i,"alt","Stop war"),u(r,"class",d="relative "+(t[4]?"w-24 h-24":"w-32 h-32")),u(b,"class","text-2xl"),u(m,"href","https://www.linkedin.com/in/svengaubert"),u(x,"href","https://github.com/svengau"),u(F,"href","https://twitter.com/svengau"),u(A,"href","https://dev.to/svengau"),u(z,"href","https://etherscan.io/address/0xe4fcfa964e5ccfc0fbaab38eab0ceffd6e605995"),u(y,"class",S="flex gap-4 text-gray-400 "+(t[4]?"text-lg":"text-3xl mt-4 mb-8")),u(h,"class",g="flex "+(t[4]?"flex-row justify-between mb-4":"flex-col items-center")),u(M,"class","transition-all mb-10"),u(p,"class",G="flex flex-col "+(t[4]?"":"items-center"))},m(H,B){N(H,e,B),a(e,r),a(r,n),a(r,o),a(r,i),N(H,f,B),N(H,p,B),a(p,h),a(h,b),a(b,v),a(h,j),a(h,y),a(y,m),a(y,I),a(y,x),a(y,q),a(y,F),a(y,D),a(y,A),a(y,P),a(y,z),a(p,k),a(p,M),a(M,O),a(M,R),U&&U.m(M,null)},p(H,B){B&16&&d!==(d="relative "+(H[4]?"w-24 h-24":"w-32 h-32"))&&u(r,"class",d),B&16&&S!==(S="flex gap-4 text-gray-400 "+(H[4]?"text-lg":"text-3xl mt-4 mb-8"))&&u(y,"class",S),B&16&&g!==(g="flex "+(H[4]?"flex-row justify-between mb-4":"flex-col items-center"))&&u(h,"class",g),H[20].company&&U.p(H,B),B&16&&G!==(G="flex flex-col "+(H[4]?"":"items-center"))&&u(p,"class",G)},d(H){H&&C(e),H&&C(f),H&&C(p),U&&U.d()}}}function Et(t){let e,r=t[20].company+"",n,l;return{c(){e=s("a"),n=E(r),u(e,"href",l="https://github.com/"+t[20].company.replace("@","")),u(e,"target","_blank")},m(o,i){N(o,e,i),a(e,n)},p:T,d(o){o&&C(e)}}}function Ct(t){let e;return{c(){e=s("p"),e.textContent="...loading"},m(r,n){N(r,e,n)},p:T,d(r){r&&C(e)}}}function Ue(t){let e,r,n=t[17].label+"",l,o,i,c,d,f;return{c(){e=s("li"),r=s("a"),l=E(n),i=_(),u(r,"href",o=t[17].hash),u(e,"class","cursor-pointer pb-2 px-2"),u(e,"style",c=t[3]===t[17].hash?"box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);":"")},m(p,h){N(p,e,h),a(e,r),a(r,l),a(e,i),d||(f=ue(r,"click",nt(qt)),d=!0)},p(p,h){h&8&&c!==(c=p[3]===p[17].hash?"box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);":"")&&u(e,"style",c)},d(p){p&&C(e),d=!1,f()}}}function Tt(t){let e,r=t[15].message+"",n;return{c(){e=s("p"),n=E(r),u(e,"style","bg-red-500")},m(l,o){N(l,e,o),a(e,n)},p:T,i:T,o:T,d(l){l&&C(e)}}}function Nt(t){let e,r;return e=new vt({props:{repositories:t[16]}}),{c(){me(e.$$.fragment)},m(n,l){ne(e,n,l),r=!0},p:T,i(n){r||(W(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){re(e,n)}}}function Lt(t){let e;return{c(){e=s("p"),e.textContent="...loading"},m(r,n){N(r,e,n)},p:T,i:T,o:T,d(r){r&&C(e)}}}function At(t){let e,r=t[15].message+"",n;return{c(){e=s("p"),n=E(r),u(e,"style","bg-red-500")},m(l,o){N(l,e,o),a(e,n)},p:T,i:T,o:T,d(l){l&&C(e)}}}function Ot(t){let e,r;return e=new xt({props:{articles:t[14]}}),{c(){me(e.$$.fragment)},m(n,l){ne(e,n,l),r=!0},p:T,i(n){r||(W(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){re(e,n)}}}function It(t){let e;return{c(){e=s("p"),e.textContent="...loading"},m(r,n){N(r,e,n)},p:T,i:T,o:T,d(r){r&&C(e)}}}function Ht(t){let e,r,n,l,o={ctx:t,current:null,token:null,hasCatch:!0,pending:It,then:Ot,catch:At,value:14,error:15,blocks:[,,,]};return ke(t[7],o),{c(){e=s("h2"),e.innerHTML=`<i class="fa-solid fa-hashtag"></i>
          Articles`,r=_(),n=ze(),o.block.c(),u(e,"class","text-xl font-semibold mb-2")},m(i,c){N(i,e,c),t[12](e),N(i,r,c),N(i,n,c),o.block.m(i,o.anchor=c),o.mount=()=>n.parentNode,o.anchor=n,l=!0},p(i,c){t=i,ye(o,t,c)},i(i){l||(W(o.block),l=!0)},o(i){for(let c=0;c<3;c+=1){const d=o.blocks[c];X(d)}l=!1},d(i){i&&C(e),t[12](null),i&&C(r),i&&C(n),o.block.d(i),o.token=null,o=null}}}function Pt(t){let e=!1,r=()=>{e=!1},n,l,o,i,c,d,f,p,h,b,L,v,j,y,m,I,x,q,F,D;he(t[11]),l=new zt({});let A={ctx:t,current:null,token:null,hasCatch:!0,pending:Ct,then:Mt,catch:St,value:20,error:15};ke(t[5],A);let P=t[8],z=[];for(let g=0;g<P.length;g+=1)z[g]=Ue(Re(t,P,g));let S={ctx:t,current:null,token:null,hasCatch:!0,pending:Lt,then:Nt,catch:Tt,value:16,error:15,blocks:[,,,]};return ke(t[6],S),x=new bt({props:{element:t[0],$$slots:{default:[Ht]},$$scope:{ctx:t}}}),x.$on("observe",t[13]),{c(){me(l.$$.fragment),o=_(),i=s("main"),c=s("div"),d=s("div"),A.block.c(),p=_(),h=s("ul");for(let g=0;g<z.length;g+=1)z[g].c();b=_(),L=s("div"),v=s("div"),j=s("h2"),j.innerHTML=`<i class="fa-solid fa-hashtag"></i>
        Projects`,y=_(),S.block.c(),m=_(),I=s("div"),me(x.$$.fragment),u(d,"class",f="pt-10 flex gap-6 transition-all "+(t[4]?"flex-row":"flex-col items-center")),u(h,"class","flex flex-row gap-4 mb-6 border-b-2 border-b-grey-600 w-full justify-center"),u(c,"class","sticky top-0 bg-white"),u(j,"class","text-xl font-semibold mb-2 "),u(v,"id","projects"),u(I,"id","articles"),u(L,"class","mx-4 md:mx-0 "),u(i,"class","mx-auto max-w-xl flex flex-col items-center font-mono")},m(g,k){ne(l,g,k),N(g,o,k),N(g,i,k),a(i,c),a(c,d),A.block.m(d,A.anchor=null),A.mount=()=>d,A.anchor=null,a(c,p),a(c,h);for(let M=0;M<z.length;M+=1)z[M].m(h,null);a(i,b),a(i,L),a(L,v),a(v,j),a(v,y),S.block.m(v,S.anchor=null),S.mount=()=>v,S.anchor=null,a(L,m),a(L,I),ne(x,I,null),q=!0,F||(D=[ue(ee,"scroll",t[9]),ue(ee,"hashchange",t[10]),ue(ee,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(r,100),t[11]()})],F=!0)},p(g,[k]){if(t=g,k&2&&!e&&(e=!0,clearTimeout(n),scrollTo(ee.pageXOffset,t[1]),n=setTimeout(r,100)),ye(A,t,k),(!q||k&16&&f!==(f="pt-10 flex gap-6 transition-all "+(t[4]?"flex-row":"flex-col items-center")))&&u(d,"class",f),k&264){P=t[8];let w;for(w=0;w<P.length;w+=1){const O=Re(t,P,w);z[w]?z[w].p(O,k):(z[w]=Ue(O),z[w].c(),z[w].m(h,null))}for(;w<z.length;w+=1)z[w].d(1);z.length=P.length}ye(S,t,k);const M={};k&1&&(M.element=t[0]),k&2097153&&(M.$$scope={dirty:k,ctx:t}),x.$set(M)},i(g){q||(W(l.$$.fragment,g),W(S.block),W(x.$$.fragment,g),q=!0)},o(g){X(l.$$.fragment,g);for(let k=0;k<3;k+=1){const M=S.blocks[k];X(M)}X(x.$$.fragment,g),q=!1},d(g){re(l,g),g&&C(o),g&&C(i),A.block.d(),A.token=null,A=null,xe(z,g),S.block.d(),S.token=null,S=null,re(x),F=!1,Z(D)}}}function qt({target:t}){const e=document.querySelector(t.getAttribute("href"));!e||e.scrollIntoView({behavior:"smooth"})}function Ft(t,e,r){let n,l;const o=we("github/profile","https://api.github.com/users/svengau"),i=we("github/repos","https://api.github.com/users/svengau/repos?sort=created&per_page=100").then(m=>m.filter(I=>!I.fork&&!["svengau","fs-status"].includes(I.name))),c=we("dev.to/articles","https://dev.to/api/articles?username=svengau");var d;(function(m){m.projects="#projects",m.articles="#articles"})(d||(d={}));const f=[{hash:d.projects,label:"Projects"},{hash:d.articles,label:"Articles"}];let p=f[0].hash,h=!1;function b(m){l>10&&r(4,h=!0)}function L(){r(3,p=location.hash),p===d.projects&&window.scrollTo(0,0)}function v(){r(1,l=ee.pageYOffset)}function j(m){_e[m?"unshift":"push"](()=>{n=m,r(0,n)})}return[n,l,d,p,h,o,i,c,f,b,L,v,j,m=>{r(3,p=m.detail.isIntersecting?d.articles:d.projects),history.pushState({},"",p)}]}class Dt extends ie{constructor(e){super(),oe(this,e,Ft,Pt,le,{})}}new Dt({target:document.getElementById("app")});
