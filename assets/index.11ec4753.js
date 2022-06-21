const Ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}};Ke();function T(){}function We(t,e){for(const r in e)t[r]=e[r];return t}function Xe(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Be(t){return t()}function Ee(){return Object.create(null)}function $(t){t.forEach(Be)}function Ge(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ue;function Ce(t,e){return ue||(ue=document.createElement("a")),ue.href=e,t===ue.href}function Qe(t){return Object.keys(t).length===0}function Ze(t,e,r,n){if(t){const l=Je(t,e,r,n);return t[0](l)}}function Je(t,e,r,n){return t[1]&&n?We(r.ctx.slice(),t[1](n(e))):r.ctx}function $e(t,e,r,n){if(t[2]&&n){const l=t[2](n(r));if(e.dirty===void 0)return l;if(typeof l=="object"){const o=[],i=Math.max(e.dirty.length,l.length);for(let u=0;u<i;u+=1)o[u]=e.dirty[u]|l[u];return o}return e.dirty|l}return e.dirty}function et(t,e,r,n,l,o){if(l){const i=Je(e,r,n,o);t.p(i,l)}}function tt(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let n=0;n<r;n++)e[n]=-1;return e}return-1}function a(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function E(t){t.parentNode.removeChild(t)}function ze(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function c(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function v(){return M(" ")}function je(){return M("")}function de(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function nt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function s(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function rt(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function lt(t,e,{bubbles:r=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,r,n,e),l}let re;function W(t){re=t}function be(){if(!re)throw new Error("Function called outside component initialization");return re}function ot(t){be().$$.on_mount.push(t)}function it(t){be().$$.after_update.push(t)}function at(){const t=be();return(e,r,{cancelable:n=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=lt(e,r,{cancelable:n});return l.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}const te=[],ve=[],he=[],Te=[],Ve=Promise.resolve();let ke=!1;function Ye(){ke||(ke=!0,Ve.then(Se))}function st(){return Ye(),Ve}function pe(t){he.push(t)}const we=new Set;let fe=0;function Se(){const t=re;do{for(;fe<te.length;){const e=te[fe];fe++,W(e),ct(e.$$)}for(W(null),te.length=0,fe=0;ve.length;)ve.pop()();for(let e=0;e<he.length;e+=1){const r=he[e];we.has(r)||(we.add(r),r())}he.length=0}while(te.length);for(;Te.length;)Te.pop()();ke=!1,we.clear(),W(t)}function ct(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}const me=new Set;let Z;function ut(){Z={r:0,c:[],p:Z}}function ft(){Z.r||$(Z.c),Z=Z.p}function X(t,e){t&&t.i&&(me.delete(t),t.i(e))}function Q(t,e,r,n){if(t&&t.o){if(me.has(t))return;me.add(t),Z.c.push(()=>{me.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function ye(t,e){const r=e.token={};function n(l,o,i,u){if(e.token!==r)return;e.resolved=u;let d=e.ctx;i!==void 0&&(d=d.slice(),d[i]=u);const f=l&&(e.current=l)(d);let p=!1;e.block&&(e.blocks?e.blocks.forEach((h,b)=>{b!==o&&h&&(ut(),Q(h,1,1,()=>{e.blocks[b]===h&&(e.blocks[b]=null)}),ft())}):e.block.d(1),f.c(),X(f,1),f.m(e.mount(),e.anchor),p=!0),e.block=f,e.blocks&&(e.blocks[o]=f),p&&Se()}if(Xe(t)){const l=be();if(t.then(o=>{W(l),n(e.then,1,e.value,o),W(null)},o=>{if(W(l),n(e.catch,2,e.error,o),W(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function xe(t,e,r){const n=e.slice(),{resolved:l}=t;t.current===t.then&&(n[t.value]=l),t.current===t.catch&&(n[t.error]=l),t.block.p(n,r)}const dt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ge(t){t&&t.c()}function le(t,e,r,n){const{fragment:l,on_mount:o,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,r),n||pe(()=>{const d=o.map(Be).filter(Ge);i?i.push(...d):$(d),t.$$.on_mount=[]}),u.forEach(pe)}function oe(t,e){const r=t.$$;r.fragment!==null&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(te.push(t),Ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,r,n,l,o,i,u=[-1]){const d=re;W(t);const f=t.$$={fragment:null,ctx:null,props:o,update:T,not_equal:l,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Ee(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};i&&i(f.root);let p=!1;if(f.ctx=r?r(t,e.props||{},(h,b,...N)=>{const k=N.length?N[0]:b;return f.ctx&&l(f.ctx[h],f.ctx[h]=k)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](k),p&&ht(t,h)),b}):[],f.update(),p=!0,$(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const h=rt(e.target);f.fragment&&f.fragment.l(h),h.forEach(E)}else f.fragment&&f.fragment.c();e.intro&&X(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Se()}W(d)}class se{$destroy(){oe(this,1),this.$destroy=T}$on(e,r){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const l=n.indexOf(r);l!==-1&&n.splice(l,1)}}$set(e){this.$$set&&!Qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt=t=>({intersecting:t&1,entry:t&2,observer:t&4}),Le=t=>({intersecting:t[0],entry:t[1],observer:t[2]});function pt(t){let e;const r=t[9].default,n=Ze(r,t,t[8],Le);return{c(){n&&n.c()},m(l,o){n&&n.m(l,o),e=!0},p(l,[o]){n&&n.p&&(!e||o&263)&&et(n,r,l,l[8],e?$e(r,l[8],o,mt):tt(l[8]),Le)},i(l){e||(X(n,l),e=!0)},o(l){Q(n,l),e=!1},d(l){n&&n.d(l)}}}function gt(t,e,r){let{$$slots:n={},$$scope:l}=e,{element:o=null}=e,{once:i=!1}=e,{intersecting:u=!1}=e,{root:d=null}=e,{rootMargin:f="0px"}=e,{threshold:p=0}=e,{entry:h=null}=e,{observer:b=null}=e;const N=at();let k=null,S=null;const y=()=>{r(2,b=new IntersectionObserver(m=>{m.forEach(I=>{r(1,h=I),r(0,u=I.isIntersecting)})},{root:d,rootMargin:f,threshold:p}))};return ot(()=>(y(),()=>{b&&(b.disconnect(),r(2,b=null))})),it(async()=>{h!==null&&(N("observe",h),h.isIntersecting&&(N("intersect",h),i&&b.unobserve(o))),await st(),o!==null&&o!==S&&(b.observe(o),S!==null&&b.unobserve(S),S=o),k&&f!==k&&(b.disconnect(),S=null,y()),k=f}),t.$$set=m=>{"element"in m&&r(3,o=m.element),"once"in m&&r(4,i=m.once),"intersecting"in m&&r(0,u=m.intersecting),"root"in m&&r(5,d=m.root),"rootMargin"in m&&r(6,f=m.rootMargin),"threshold"in m&&r(7,p=m.threshold),"entry"in m&&r(1,h=m.entry),"observer"in m&&r(2,b=m.observer),"$$scope"in m&&r(8,l=m.$$scope)},[u,h,b,o,i,d,f,p,l,n]}class bt extends se{constructor(e){super(),ae(this,e,gt,pt,ie,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function Ne(t,e,r){const n=t.slice();return n[1]=e[r],n}function Ae(t){let e,r=t[0],n=[];for(let l=0;l<r.length;l+=1)n[l]=Ie(Ne(t,r,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=je()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);L(l,e,o)},p(l,o){if(o&1){r=l[0];let i;for(i=0;i<r.length;i+=1){const u=Ne(l,r,i);n[i]?n[i].p(u,o):(n[i]=Ie(u),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(l){ze(n,l),l&&E(e)}}}function Oe(t){let e,r=t[1].stargazers_count+"",n,l,o;return{c(){e=c("div"),n=M(r),l=v(),o=c("i"),s(o,"class","fa-regular fa-star")},m(i,u){L(i,e,u),a(e,n),a(e,l),a(e,o)},p(i,u){u&1&&r!==(r=i[1].stargazers_count+"")&&B(n,r)},d(i){i&&E(e)}}}function Ie(t){let e,r,n,l,o,i,u=t[1].name+"",d,f,p,h=t[1].description+"",b,N,k,S,y=t[1].topics.map(He).join(" ")+"",m,I,x,F,P=t[1].created_at.substring(0,4)+"",D,C,H,z=t[1].language+"",A,g,_,O,w=t[1].stargazers_count&&Oe(t);return{c(){e=c("li"),r=c("a"),n=c("div"),l=c("div"),o=v(),i=c("h2"),d=M(u),f=v(),p=c("div"),b=M(h),N=v(),k=c("div"),S=c("div"),m=M(y),I=v(),x=c("div"),F=c("div"),D=M(P),C=v(),H=c("div"),A=M(z),g=v(),w&&w.c(),O=v(),s(l,"class","flex flex-row gap-4 text-gray-500 text-sm"),s(i,"class","text-xl"),s(x,"class","flex flex-row gap-6"),s(k,"class","mt-2 text-gray-500 "),s(n,"class","flex flex-col"),s(r,"href",_=t[1].html_url),s(r,"target","_blank"),s(e,"class","mb-10")},m(j,R){L(j,e,R),a(e,r),a(r,n),a(n,l),a(n,o),a(n,i),a(i,d),a(n,f),a(n,p),a(p,b),a(n,N),a(n,k),a(k,S),a(S,m),a(k,I),a(k,x),a(x,F),a(F,D),a(x,C),a(x,H),a(H,A),a(x,g),w&&w.m(x,null),a(e,O)},p(j,R){R&1&&u!==(u=j[1].name+"")&&B(d,u),R&1&&h!==(h=j[1].description+"")&&B(b,h),R&1&&y!==(y=j[1].topics.map(He).join(" ")+"")&&B(m,y),R&1&&P!==(P=j[1].created_at.substring(0,4)+"")&&B(D,P),R&1&&z!==(z=j[1].language+"")&&B(A,z),j[1].stargazers_count?w?w.p(j,R):(w=Oe(j),w.c(),w.m(x,null)):w&&(w.d(1),w=null),R&1&&_!==(_=j[1].html_url)&&s(r,"href",_)},d(j){j&&E(e),w&&w.d()}}}function wt(t){let e,r,n=t[0]&&Ae(t);return{c(){e=c("section"),r=c("ul"),n&&n.c()},m(l,o){L(l,e,o),a(e,r),n&&n.m(r,null)},p(l,[o]){l[0]?n?n.p(l,o):(n=Ae(l),n.c(),n.m(r,null)):n&&(n.d(1),n=null)},i:T,o:T,d(l){l&&E(e),n&&n.d()}}}const He=t=>`#${t}`;function _t(t,e,r){let{repositories:n=[]}=e;return t.$$set=l=>{"repositories"in l&&r(0,n=l.repositories)},[n]}class vt extends se{constructor(e){super(),ae(this,e,_t,wt,ie,{repositories:0})}}function Pe(t,e,r){const n=t.slice();return n[1]=e[r],n}function qe(t){let e,r=t[0],n=[];for(let l=0;l<r.length;l+=1)n[l]=Fe(Pe(t,r,l));return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=je()},m(l,o){for(let i=0;i<n.length;i+=1)n[i].m(l,o);L(l,e,o)},p(l,o){if(o&1){r=l[0];let i;for(i=0;i<r.length;i+=1){const u=Pe(l,r,i);n[i]?n[i].p(u,o):(n[i]=Fe(u),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(l){ze(n,l),l&&E(e)}}}function Fe(t){let e,r,n,l,o,i=t[1].readable_publish_date+"",u,d,f,p=t[1].reading_time_minutes+"",h,b,N,k,S=t[1].title+"",y,m,I,x=t[1].description+"",F,P,D,C,H=t[1].tag_list.map(De).join(" ")+"",z,A,g,_,O=t[1].public_reactions_count+"",w,j,R,ee,G,K=t[1].comments_count+"",V,q,U,ce,Me;return{c(){e=c("li"),r=c("a"),n=c("div"),l=c("div"),o=c("div"),u=M(i),d=M(`
                -
                `),f=c("div"),h=M(p),b=M(" min. read"),N=v(),k=c("h2"),y=M(S),m=v(),I=c("div"),F=M(x),P=v(),D=c("div"),C=c("div"),z=M(H),A=v(),g=c("div"),_=c("div"),w=M(O),j=v(),R=c("i"),ee=v(),G=c("div"),V=M(K),q=v(),U=c("i"),Me=v(),s(l,"class","flex flex-row gap-4 text-gray-500 text-sm"),s(k,"class","text-xl"),s(R,"class","fa-regular fa-heart"),s(U,"class","fa-regular fa-comment"),s(g,"class","flex flex-row gap-6"),s(D,"class","mt-2 text-gray-500 "),s(n,"class","flex flex-col"),s(r,"href",ce=t[1].url),s(r,"target","_blank"),s(e,"class","mb-10")},m(J,Y){L(J,e,Y),a(e,r),a(r,n),a(n,l),a(l,o),a(o,u),a(l,d),a(l,f),a(f,h),a(f,b),a(n,N),a(n,k),a(k,y),a(n,m),a(n,I),a(I,F),a(n,P),a(n,D),a(D,C),a(C,z),a(D,A),a(D,g),a(g,_),a(_,w),a(_,j),a(_,R),a(g,ee),a(g,G),a(G,V),a(G,q),a(G,U),a(e,Me)},p(J,Y){Y&1&&i!==(i=J[1].readable_publish_date+"")&&B(u,i),Y&1&&p!==(p=J[1].reading_time_minutes+"")&&B(h,p),Y&1&&S!==(S=J[1].title+"")&&B(y,S),Y&1&&x!==(x=J[1].description+"")&&B(F,x),Y&1&&H!==(H=J[1].tag_list.map(De).join(" ")+"")&&B(z,H),Y&1&&O!==(O=J[1].public_reactions_count+"")&&B(w,O),Y&1&&K!==(K=J[1].comments_count+"")&&B(V,K),Y&1&&ce!==(ce=J[1].url)&&s(r,"href",ce)},d(J){J&&E(e)}}}function kt(t){let e,r,n=t[0]&&qe(t);return{c(){e=c("section"),r=c("ul"),n&&n.c()},m(l,o){L(l,e,o),a(e,r),n&&n.m(r,null)},p(l,[o]){l[0]?n?n.p(l,o):(n=qe(l),n.c(),n.m(r,null)):n&&(n.d(1),n=null)},i:T,o:T,d(l){l&&E(e),n&&n.d()}}}const De=t=>`#${t}`;function yt(t,e,r){let{articles:n=[]}=e;return t.$$set=l=>{"articles"in l&&r(0,n=l.articles)},[n]}class xt extends se{constructor(e){super(),ae(this,e,yt,kt,ie,{articles:0})}}class zt extends se{constructor(e){super(),ae(this,e,null,null,ie,{})}}var jt="/assets/stopwar.4dbabeb7.svg";async function _e(t,e){const r=localStorage[t];if(!r||r.expiredAt<Date.now()){const n=await fetch(e).then(l=>l.json());localStorage.setItem(t,JSON.stringify({content:n,expiredAt:Date.now()+60*1e3}))}return JSON.parse(localStorage[t]).content}const{window:ne}=dt;function Re(t,e,r){const n=t.slice();return n[17]=e[r],n}function St(t){let e,r=t[15].message+"",n;return{c(){e=c("p"),n=M(r),s(e,"style","bg-red-500")},m(l,o){L(l,e,o),a(e,n)},p:T,d(l){l&&E(e)}}}function Mt(t){let e,r,n,l,o,i,u,d,f,p,h,b,N=t[20].name+"",k,S,y,m,I,x,F,P,D,C,H,z,A,g,_,O,w,j,R=t[20].bio+"",ee,G,K,V=t[20].company&&Et(t);return{c(){e=c("div"),r=c("div"),n=c("img"),o=v(),i=c("img"),f=v(),p=c("div"),h=c("div"),b=c("h1"),k=M(N),S=v(),y=c("div"),m=c("a"),m.innerHTML='<i class="fa-brands fa-linkedin-in"></i>',I=v(),x=c("a"),x.innerHTML='<i class="fa-brands fa-github"></i>',F=v(),P=c("a"),P.innerHTML='<i class="fa-brands fa-twitter"></i>',D=v(),C=c("a"),C.innerHTML='<i class="fa-brands fa-dev"></i>',H=v(),z=c("a"),z.innerHTML='<i class="fa-brands fa-ethereum"></i>',A=v(),g=c("a"),g.innerHTML='<i class="fa-brands fa-npm"></i>',w=v(),j=c("p"),ee=M(R),G=v(),V&&V.c(),Ce(n.src,l=t[20].avatar_url)||s(n,"src",l),s(n,"alt",t[20].name),s(n,"class","rounded-full"),Ce(i.src,u=jt)||s(i,"src",u),s(i,"class","w-10 absolute bottom-0 right-0"),s(i,"alt","Stop war"),s(r,"class",d="relative "+(t[4]?"w-24 h-24":"w-32 h-32")),s(b,"class","text-2xl"),s(m,"href","https://www.linkedin.com/in/svengaubert"),s(m,"target","_blank"),s(x,"href","https://github.com/svengau"),s(x,"target","_blank"),s(P,"href","https://twitter.com/svengau"),s(P,"target","_blank"),s(C,"href","https://dev.to/svengau"),s(C,"target","_blank"),s(z,"href","https://etherscan.io/address/0xe4fcfa964e5ccfc0fbaab38eab0ceffd6e605995"),s(g,"href","https://www.npmjs.com/~svengau"),s(g,"target","_blank"),s(g,"class","text-4xl"),s(y,"class",_="flex gap-4 text-gray-400 "+(t[4]?"text-lg":"text-3xl mt-4 mb-8")),s(h,"class",O="flex "+(t[4]?"flex-row justify-between mb-4":"flex-col items-center")),s(j,"class","transition-all mb-10"),s(p,"class",K="flex flex-col "+(t[4]?"":"items-center"))},m(q,U){L(q,e,U),a(e,r),a(r,n),a(r,o),a(r,i),L(q,f,U),L(q,p,U),a(p,h),a(h,b),a(b,k),a(h,S),a(h,y),a(y,m),a(y,I),a(y,x),a(y,F),a(y,P),a(y,D),a(y,C),a(y,H),a(y,z),a(y,A),a(y,g),a(p,w),a(p,j),a(j,ee),a(j,G),V&&V.m(j,null)},p(q,U){U&16&&d!==(d="relative "+(q[4]?"w-24 h-24":"w-32 h-32"))&&s(r,"class",d),U&16&&_!==(_="flex gap-4 text-gray-400 "+(q[4]?"text-lg":"text-3xl mt-4 mb-8"))&&s(y,"class",_),U&16&&O!==(O="flex "+(q[4]?"flex-row justify-between mb-4":"flex-col items-center"))&&s(h,"class",O),q[20].company&&V.p(q,U),U&16&&K!==(K="flex flex-col "+(q[4]?"":"items-center"))&&s(p,"class",K)},d(q){q&&E(e),q&&E(f),q&&E(p),V&&V.d()}}}function Et(t){let e,r=t[20].company+"",n,l;return{c(){e=c("a"),n=M(r),s(e,"href",l="https://github.com/"+t[20].company.replace("@","")),s(e,"target","_blank")},m(o,i){L(o,e,i),a(e,n)},p:T,d(o){o&&E(e)}}}function Ct(t){let e;return{c(){e=c("p"),e.textContent="...loading"},m(r,n){L(r,e,n)},p:T,d(r){r&&E(e)}}}function Ue(t){let e,r,n=t[17].label+"",l,o,i,u,d,f;return{c(){e=c("li"),r=c("a"),l=M(n),i=v(),s(r,"href",o=t[17].hash),s(e,"class","cursor-pointer pb-2 px-2"),s(e,"style",u=t[3]===t[17].hash?"box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);":"")},m(p,h){L(p,e,h),a(e,r),a(r,l),a(e,i),d||(f=de(r,"click",nt(qt)),d=!0)},p(p,h){h&8&&u!==(u=p[3]===p[17].hash?"box-shadow: 0 -4px 0 0 inset rgb(229, 231, 235);":"")&&s(e,"style",u)},d(p){p&&E(e),d=!1,f()}}}function Tt(t){let e,r=t[15].message+"",n;return{c(){e=c("p"),n=M(r),s(e,"style","bg-red-500")},m(l,o){L(l,e,o),a(e,n)},p:T,i:T,o:T,d(l){l&&E(e)}}}function Lt(t){let e,r;return e=new vt({props:{repositories:t[16]}}),{c(){ge(e.$$.fragment)},m(n,l){le(e,n,l),r=!0},p:T,i(n){r||(X(e.$$.fragment,n),r=!0)},o(n){Q(e.$$.fragment,n),r=!1},d(n){oe(e,n)}}}function Nt(t){let e;return{c(){e=c("p"),e.textContent="...loading"},m(r,n){L(r,e,n)},p:T,i:T,o:T,d(r){r&&E(e)}}}function At(t){let e,r=t[15].message+"",n;return{c(){e=c("p"),n=M(r),s(e,"style","bg-red-500")},m(l,o){L(l,e,o),a(e,n)},p:T,i:T,o:T,d(l){l&&E(e)}}}function Ot(t){let e,r;return e=new xt({props:{articles:t[14]}}),{c(){ge(e.$$.fragment)},m(n,l){le(e,n,l),r=!0},p:T,i(n){r||(X(e.$$.fragment,n),r=!0)},o(n){Q(e.$$.fragment,n),r=!1},d(n){oe(e,n)}}}function It(t){let e;return{c(){e=c("p"),e.textContent="...loading"},m(r,n){L(r,e,n)},p:T,i:T,o:T,d(r){r&&E(e)}}}function Ht(t){let e,r,n,l,o={ctx:t,current:null,token:null,hasCatch:!0,pending:It,then:Ot,catch:At,value:14,error:15,blocks:[,,,]};return ye(t[7],o),{c(){e=c("h2"),e.innerHTML=`<i class="fa-solid fa-hashtag"></i>
          Articles`,r=v(),n=je(),o.block.c(),s(e,"class","text-xl font-semibold mb-2")},m(i,u){L(i,e,u),t[12](e),L(i,r,u),L(i,n,u),o.block.m(i,o.anchor=u),o.mount=()=>n.parentNode,o.anchor=n,l=!0},p(i,u){t=i,xe(o,t,u)},i(i){l||(X(o.block),l=!0)},o(i){for(let u=0;u<3;u+=1){const d=o.blocks[u];Q(d)}l=!1},d(i){i&&E(e),t[12](null),i&&E(r),i&&E(n),o.block.d(i),o.token=null,o=null}}}function Pt(t){let e=!1,r=()=>{e=!1},n,l,o,i,u,d,f,p,h,b,N,k,S,y,m,I,x,F,P,D;pe(t[11]),l=new zt({});let C={ctx:t,current:null,token:null,hasCatch:!0,pending:Ct,then:Mt,catch:St,value:20,error:15};ye(t[5],C);let H=t[8],z=[];for(let g=0;g<H.length;g+=1)z[g]=Ue(Re(t,H,g));let A={ctx:t,current:null,token:null,hasCatch:!0,pending:Nt,then:Lt,catch:Tt,value:16,error:15,blocks:[,,,]};return ye(t[6],A),x=new bt({props:{element:t[0],$$slots:{default:[Ht]},$$scope:{ctx:t}}}),x.$on("observe",t[13]),{c(){ge(l.$$.fragment),o=v(),i=c("main"),u=c("div"),d=c("div"),C.block.c(),p=v(),h=c("ul");for(let g=0;g<z.length;g+=1)z[g].c();b=v(),N=c("div"),k=c("div"),S=c("h2"),S.innerHTML=`<i class="fa-solid fa-hashtag"></i>
        Projects`,y=v(),A.block.c(),m=v(),I=c("div"),ge(x.$$.fragment),s(d,"class",f="pt-10 flex gap-6 transition-all "+(t[4]?"flex-row":"flex-col items-center")),s(h,"class","flex flex-row gap-4 mb-6 border-b-2 border-b-grey-600 w-full justify-center"),s(u,"class","sticky top-0 bg-white"),s(S,"class","text-xl font-semibold mb-2 "),s(k,"id","projects"),s(I,"id","articles"),s(N,"class","mx-4 md:mx-0 "),s(i,"class","mx-auto max-w-xl flex flex-col items-center font-mono")},m(g,_){le(l,g,_),L(g,o,_),L(g,i,_),a(i,u),a(u,d),C.block.m(d,C.anchor=null),C.mount=()=>d,C.anchor=null,a(u,p),a(u,h);for(let O=0;O<z.length;O+=1)z[O].m(h,null);a(i,b),a(i,N),a(N,k),a(k,S),a(k,y),A.block.m(k,A.anchor=null),A.mount=()=>k,A.anchor=null,a(N,m),a(N,I),le(x,I,null),F=!0,P||(D=[de(ne,"scroll",t[9]),de(ne,"hashchange",t[10]),de(ne,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(r,100),t[11]()})],P=!0)},p(g,[_]){if(t=g,_&2&&!e&&(e=!0,clearTimeout(n),scrollTo(ne.pageXOffset,t[1]),n=setTimeout(r,100)),xe(C,t,_),(!F||_&16&&f!==(f="pt-10 flex gap-6 transition-all "+(t[4]?"flex-row":"flex-col items-center")))&&s(d,"class",f),_&264){H=t[8];let w;for(w=0;w<H.length;w+=1){const j=Re(t,H,w);z[w]?z[w].p(j,_):(z[w]=Ue(j),z[w].c(),z[w].m(h,null))}for(;w<z.length;w+=1)z[w].d(1);z.length=H.length}xe(A,t,_);const O={};_&1&&(O.element=t[0]),_&2097153&&(O.$$scope={dirty:_,ctx:t}),x.$set(O)},i(g){F||(X(l.$$.fragment,g),X(A.block),X(x.$$.fragment,g),F=!0)},o(g){Q(l.$$.fragment,g);for(let _=0;_<3;_+=1){const O=A.blocks[_];Q(O)}Q(x.$$.fragment,g),F=!1},d(g){oe(l,g),g&&E(o),g&&E(i),C.block.d(),C.token=null,C=null,ze(z,g),A.block.d(),A.token=null,A=null,oe(x),P=!1,$(D)}}}function qt({target:t}){const e=document.querySelector(t.getAttribute("href"));!e||e.scrollIntoView({behavior:"smooth"})}function Ft(t,e,r){let n,l;const o=_e("github/profile","https://api.github.com/users/svengau"),i=_e("github/repos","https://api.github.com/users/svengau/repos?sort=created&per_page=100").then(m=>m.filter(I=>!I.fork&&!["svengau","fs-status"].includes(I.name))),u=_e("dev.to/articles","https://dev.to/api/articles?username=svengau");var d;(function(m){m.projects="#projects",m.articles="#articles"})(d||(d={}));const f=[{hash:d.projects,label:"Projects"},{hash:d.articles,label:"Articles"}];let p=f[0].hash,h=!1;function b(m){l>10&&r(4,h=!0)}function N(){r(3,p=location.hash),p===d.projects&&window.scrollTo(0,0)}function k(){r(1,l=ne.pageYOffset)}function S(m){ve[m?"unshift":"push"](()=>{n=m,r(0,n)})}return[n,l,d,p,h,o,i,u,f,b,N,k,S,m=>{r(3,p=m.detail.isIntersecting?d.articles:d.projects),history.pushState({},"",p)}]}class Dt extends se{constructor(e){super(),ae(this,e,Ft,Pt,ie,{})}}new Dt({target:document.getElementById("app")});
