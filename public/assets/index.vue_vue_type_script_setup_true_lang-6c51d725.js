import{o as k,c as M,a as y,P as L,aL as G,r as x,b as S,e as ae,bg as Ke,aa as Ge,F as q,aE as we,aW as xe,d as j,J as He,a5 as oe,A as ke,t as F,u as m,s as Ve,ai as J,aj as Se,C as R,v as P,w as A,f as T,q as H,T as We,bh as qe,l as _e,I as Ie,Y as ze,m as Ee,k as Me,p as U,_ as ee,a3 as Ze,ac as Ye,Q as Qe,K as ve,ak as Xe}from"./index-f389b6b2.js";import{N as Je}from"./LayoutSider-6620c6dc.js";function et(e,n){let r;return(...o)=>{const t=()=>{clearTimeout(r),e(...o)};clearTimeout(r),r=setTimeout(t,n)}}function tt(e,n){return k(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 12.75 6 6 9-13.5"})])}function nt(e,n){return k(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})])}function rt(e,n){return k(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})])}function at(e,n){return k(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}let ot=0;function lt(){return++ot}function le(){return lt()}function I(e){var n;if(e==null||e.value==null)return null;let r=(n=e.value.$el)!=null?n:e.value;return r instanceof Node?r:null}function z(e,n,...r){if(e in n){let t=n[e];return typeof t=="function"?t(...r):t}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,z),o}var st=Object.defineProperty,ut=(e,n,r)=>n in e?st(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,ge=(e,n,r)=>(ut(e,typeof n!="symbol"?n+"":n,r),r);let it=class{constructor(){ge(this,"current",this.detect()),ge(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},se=new it;function ue(e){if(se.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=I(e);if(n)return n.ownerDocument}return document}let te=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ne=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ne||{}),ct=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ct||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function Te(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(te)).sort((n,r)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ie=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ie||{});function ce(e,n=0){var r;return e===((r=ue(e))==null?void 0:r.body)?!1:z(n,{[0](){return e.matches(te)},[1](){let o=e;for(;o!==null;){if(o.matches(te))return!0;o=o.parentElement}return!1}})}function $e(e){let n=ue(e);L(()=>{n&&!ce(n.activeElement,0)&&pt(e)})}var ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function pt(e){e==null||e.focus({preventScroll:!0})}let vt=["textarea","input"].join(",");function gt(e){var n,r;return(r=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,vt))!=null?r:!1}function De(e,n=r=>r){return e.slice().sort((r,o)=>{let t=n(r),a=n(o);if(t===null||a===null)return 0;let d=t.compareDocumentPosition(a);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function mt(e,n){return ht(Te(),n,{relativeTo:e})}function ht(e,n,{sorted:r=!0,relativeTo:o=null,skipElements:t=[]}={}){var a;let d=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,s=Array.isArray(e)?r?De(e):e:Te(e);t.length>0&&s.length>1&&(s=s.filter(u=>!t.includes(u))),o=o??d.activeElement;let g=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,s.indexOf(o))-1;if(n&4)return Math.max(0,s.indexOf(o))+1;if(n&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=n&32?{preventScroll:!0}:{},h=0,p=s.length,f;do{if(h>=p||h+p<=0)return 0;let u=c+h;if(n&16)u=(u+p)%p;else{if(u<0)return 3;if(u>=p)return 1}f=s[u],f==null||f.focus(l),h+=g}while(f!==d.activeElement);return n&6&&gt(f)&&f.select(),2}function yt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function bt(){return/Android/gi.test(window.navigator.userAgent)}function wt(){return yt()||bt()}function V(e,n,r){se.isServer||G(o=>{document.addEventListener(e,n,r),o(()=>document.removeEventListener(e,n,r))})}function xt(e,n,r){se.isServer||G(o=>{window.addEventListener(e,n,r),o(()=>window.removeEventListener(e,n,r))})}function kt(e,n,r=S(()=>!0)){function o(a,d){if(!r.value||a.defaultPrevented)return;let s=d(a);if(s===null||!s.getRootNode().contains(s))return;let g=function c(l){return typeof l=="function"?c(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let c of g){if(c===null)continue;let l=c instanceof HTMLElement?c:I(c);if(l!=null&&l.contains(s)||a.composed&&a.composedPath().includes(l))return}return!ce(s,ie.Loose)&&s.tabIndex!==-1&&a.preventDefault(),n(a,s)}let t=x(null);V("pointerdown",a=>{var d,s;r.value&&(t.value=((s=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:s[0])||a.target)},!0),V("mousedown",a=>{var d,s;r.value&&(t.value=((s=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:s[0])||a.target)},!0),V("click",a=>{wt()||t.value&&(o(a,()=>t.value),t.value=null)},!0),V("touchend",a=>o(a,()=>a.target instanceof HTMLElement?a.target:null),!0),xt("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function me(e,n){if(e)return e;let r=n??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function St(e,n){let r=x(me(e.value.type,e.value.as));return ae(()=>{r.value=me(e.value.type,e.value.as)}),G(()=>{var o;r.value||I(n)&&I(n)instanceof HTMLButtonElement&&!((o=I(n))!=null&&o.hasAttribute("type"))&&(r.value="button")}),r}function he(e){return[e.screenX,e.screenY]}function _t(){let e=x([-1,-1]);return{wasMoved(n){let r=he(n);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(n){e.value=he(n)}}}function It({container:e,accept:n,walk:r,enabled:o}){G(()=>{let t=e.value;if(!t||o!==void 0&&!o.value)return;let a=ue(e);if(!a)return;let d=Object.assign(g=>n(g),{acceptNode:n}),s=a.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,d,!1);for(;s.nextNode();)r(s.currentNode)})}var re=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(re||{}),Et=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Et||{});function Z({visible:e=!0,features:n=0,ourProps:r,theirProps:o,...t}){var a;let d=Pe(o,r),s=Object.assign(t,{props:d});if(e||n&2&&d.static)return Q(s);if(n&1){let g=(a=d.unmount)==null||a?0:1;return z(g,{[0](){return null},[1](){return Q({...t,props:{...d,hidden:!0,style:{display:"none"}}})}})}return Q(s)}function Q({props:e,attrs:n,slots:r,slot:o,name:t}){var a,d;let{as:s,...g}=Mt(e,["unmount","static"]),c=(a=r.default)==null?void 0:a.call(r,o),l={};if(o){let h=!1,p=[];for(let[f,u]of Object.entries(o))typeof u=="boolean"&&(h=!0),u===!0&&p.push(f);h&&(l["data-headlessui-state"]=p.join(" "))}if(s==="template"){if(c=Ce(c??[]),Object.keys(g).length>0||Object.keys(n).length>0){let[h,...p]=c??[];if(!Tt(h)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(g).concat(Object.keys(n)).map(i=>i.trim()).filter((i,w,b)=>b.indexOf(i)===w).sort((i,w)=>i.localeCompare(w)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let f=Pe((d=h.props)!=null?d:{},g,l),u=Ke(h,f,!0);for(let i in f)i.startsWith("on")&&(u.props||(u.props={}),u.props[i]=f[i]);return u}return Array.isArray(c)&&c.length===1?c[0]:c}return Ge(s,Object.assign({},g,l),{default:()=>c})}function Ce(e){return e.flatMap(n=>n.type===q?Ce(n.children):[n])}function Pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},r={};for(let o of e)for(let t in o)t.startsWith("on")&&typeof o[t]=="function"?(r[t]!=null||(r[t]=[]),r[t].push(o[t])):n[t]=o[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(r).map(o=>[o,void 0])));for(let o in r)Object.assign(n,{[o](t,...a){let d=r[o];for(let s of d){if(t instanceof Event&&t.defaultPrevented)return;s(t,...a)}}});return n}function Mt(e,n=[]){let r=Object.assign({},e);for(let o of n)o in r&&delete r[o];return r}function Tt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ae=Symbol("Context");var K=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(K||{});function $t(){return we(Ae,null)}function Dt(e){xe(Ae,e)}var E=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(E||{});function Ct(e){throw new Error("Unexpected object: "+e)}var $=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))($||{});function Pt(e,n){let r=n.resolveItems();if(r.length<=0)return null;let o=n.resolveActiveIndex(),t=o??-1;switch(e.focus){case 0:{for(let a=0;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 1:{t===-1&&(t=r.length);for(let a=t-1;a>=0;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 2:{for(let a=t+1;a<r.length;++a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 3:{for(let a=r.length-1;a>=0;--a)if(!n.resolveDisabled(r[a],a,r))return a;return o}case 4:{for(let a=0;a<r.length;++a)if(n.resolveId(r[a],a,r)===e.id)return a;return o}case 5:return null;default:Ct(e)}}let ye=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function be(e){var n,r;let o=(n=e.innerText)!=null?n:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return o;let a=!1;for(let s of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),a=!0;let d=a?(r=t.innerText)!=null?r:"":o;return ye.test(d)&&(d=d.replace(ye,"")),d}function At(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=e.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(t=>{let a=document.getElementById(t);if(a){let d=a.getAttribute("aria-label");return typeof d=="string"?d.trim():be(a).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return be(e).trim()}function Nt(e){let n=x(""),r=x("");return()=>{let o=I(e);if(!o)return"";let t=o.innerText;if(n.value===t)return r.value;let a=At(o).trim().toLowerCase();return n.value=t,r.value=a,a}}var Ot=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ot||{}),Ft=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ft||{});function Rt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ne=Symbol("MenuContext");function Y(e){let n=we(Ne,null);if(n===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Y),r}return n}let Lt=j({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:r}){let o=x(1),t=x(null),a=x(null),d=x([]),s=x(""),g=x(null),c=x(1);function l(p=f=>f){let f=g.value!==null?d.value[g.value]:null,u=De(p(d.value.slice()),w=>I(w.dataRef.domRef)),i=f?u.indexOf(f):null;return i===-1&&(i=null),{items:u,activeItemIndex:i}}let h={menuState:o,buttonRef:t,itemsRef:a,items:d,searchQuery:s,activeItemIndex:g,activationTrigger:c,closeMenu:()=>{o.value=1,g.value=null},openMenu:()=>o.value=0,goToItem(p,f,u){let i=l(),w=Pt(p===$.Specific?{focus:$.Specific,id:f}:{focus:p},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.disabled});s.value="",g.value=w,c.value=u??1,d.value=i.items},search(p){let f=s.value!==""?0:1;s.value+=p.toLowerCase();let u=(g.value!==null?d.value.slice(g.value+f).concat(d.value.slice(0,g.value+f)):d.value).find(w=>w.dataRef.textValue.startsWith(s.value)&&!w.dataRef.disabled),i=u?d.value.indexOf(u):-1;i===-1||i===g.value||(g.value=i,c.value=1)},clearSearch(){s.value=""},registerItem(p,f){let u=l(i=>[...i,{id:p,dataRef:f}]);d.value=u.items,g.value=u.activeItemIndex,c.value=1},unregisterItem(p){let f=l(u=>{let i=u.findIndex(w=>w.id===p);return i!==-1&&u.splice(i,1),u});d.value=f.items,g.value=f.activeItemIndex,c.value=1}};return kt([t,a],(p,f)=>{var u;h.closeMenu(),ce(f,ie.Loose)||(p.preventDefault(),(u=I(t))==null||u.focus())},S(()=>o.value===0)),xe(Ne,h),Dt(S(()=>z(o.value,{[0]:K.Open,[1]:K.Closed}))),()=>{let p={open:o.value===0,close:h.closeMenu};return Z({ourProps:{},theirProps:e,slot:p,slots:n,attrs:r,name:"Menu"})}}}),jt=j({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${le()}`}},setup(e,{attrs:n,slots:r,expose:o}){let t=Y("MenuButton");o({el:t.buttonRef,$el:t.buttonRef});function a(c){switch(c.key){case E.Space:case E.Enter:case E.ArrowDown:c.preventDefault(),c.stopPropagation(),t.openMenu(),L(()=>{var l;(l=I(t.itemsRef))==null||l.focus({preventScroll:!0}),t.goToItem($.First)});break;case E.ArrowUp:c.preventDefault(),c.stopPropagation(),t.openMenu(),L(()=>{var l;(l=I(t.itemsRef))==null||l.focus({preventScroll:!0}),t.goToItem($.Last)});break}}function d(c){switch(c.key){case E.Space:c.preventDefault();break}}function s(c){e.disabled||(t.menuState.value===0?(t.closeMenu(),L(()=>{var l;return(l=I(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(c.preventDefault(),t.openMenu(),Rt(()=>{var l;return(l=I(t.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let g=St(S(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var c;let l={open:t.menuState.value===0},{id:h,...p}=e,f={ref:t.buttonRef,id:h,type:g.value,"aria-haspopup":"menu","aria-controls":(c=I(t.itemsRef))==null?void 0:c.id,"aria-expanded":t.menuState.value===0,onKeydown:a,onKeyup:d,onClick:s};return Z({ourProps:f,theirProps:p,slot:l,attrs:n,slots:r,name:"MenuButton"})}}}),Bt=j({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${le()}`}},setup(e,{attrs:n,slots:r,expose:o}){let t=Y("MenuItems"),a=x(null);o({el:t.itemsRef,$el:t.itemsRef}),It({container:S(()=>I(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function d(l){var h;switch(a.value&&clearTimeout(a.value),l.key){case E.Space:if(t.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),t.search(l.key);case E.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeItemIndex.value!==null){let p=t.items.value[t.activeItemIndex.value];(h=I(p.dataRef.domRef))==null||h.click()}t.closeMenu(),$e(I(t.buttonRef));break;case E.ArrowDown:return l.preventDefault(),l.stopPropagation(),t.goToItem($.Next);case E.ArrowUp:return l.preventDefault(),l.stopPropagation(),t.goToItem($.Previous);case E.Home:case E.PageUp:return l.preventDefault(),l.stopPropagation(),t.goToItem($.First);case E.End:case E.PageDown:return l.preventDefault(),l.stopPropagation(),t.goToItem($.Last);case E.Escape:l.preventDefault(),l.stopPropagation(),t.closeMenu(),L(()=>{var p;return(p=I(t.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case E.Tab:l.preventDefault(),l.stopPropagation(),t.closeMenu(),L(()=>mt(I(t.buttonRef),l.shiftKey?ne.Previous:ne.Next));break;default:l.key.length===1&&(t.search(l.key),a.value=setTimeout(()=>t.clearSearch(),350));break}}function s(l){switch(l.key){case E.Space:l.preventDefault();break}}let g=$t(),c=S(()=>g!==null?(g.value&K.Open)===K.Open:t.menuState.value===0);return()=>{var l,h;let p={open:t.menuState.value===0},{id:f,...u}=e,i={"aria-activedescendant":t.activeItemIndex.value===null||(l=t.items.value[t.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(h=I(t.buttonRef))==null?void 0:h.id,id:f,onKeydown:d,onKeyup:s,role:"menu",tabIndex:0,ref:t.itemsRef};return Z({ourProps:i,theirProps:u,slot:p,attrs:n,slots:r,features:re.RenderStrategy|re.Static,visible:c.value,name:"MenuItems"})}}}),X=j({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${le()}`}},setup(e,{slots:n,attrs:r,expose:o}){let t=Y("MenuItem"),a=x(null);o({el:a,$el:a});let d=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),s=Nt(a),g=S(()=>({disabled:e.disabled,get textValue(){return s()},domRef:a}));ae(()=>t.registerItem(e.id,g)),He(()=>t.unregisterItem(e.id)),G(()=>{t.menuState.value===0&&d.value&&t.activationTrigger.value!==0&&L(()=>{var i,w;return(w=(i=I(a))==null?void 0:i.scrollIntoView)==null?void 0:w.call(i,{block:"nearest"})})});function c(i){if(e.disabled)return i.preventDefault();t.closeMenu(),$e(I(t.buttonRef))}function l(){if(e.disabled)return t.goToItem($.Nothing);t.goToItem($.Specific,e.id)}let h=_t();function p(i){h.update(i)}function f(i){h.wasMoved(i)&&(e.disabled||d.value||t.goToItem($.Specific,e.id,0))}function u(i){h.wasMoved(i)&&(e.disabled||d.value&&t.goToItem($.Nothing))}return()=>{let{disabled:i}=e,w={active:d.value,disabled:i,close:t.closeMenu},{id:b,..._}=e;return Z({ourProps:{id:b,ref:a,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:c,onFocus:l,onPointerenter:p,onMouseenter:p,onPointermove:f,onMousemove:f,onPointerleave:u,onMouseleave:u},theirProps:{...r,..._},slot:w,attrs:r,slots:n,name:"MenuItem"})}}});const Ut={class:"mt-3 mb-1 text-xs font-bold"},Kt={class:"ml-1"},Gt=["onClick"],Ht={class:"flex items-center"},Vt=["onUpdate:modelValue","onKeypress"],Wt={key:1,class:"flex-1 truncate max-w-48"},qt={key:0,class:"absolute z-10 right-2"},zt={class:"py-1"},Zt=["onClick"],Yt=["onClick"],Qt=["onClick"],W=j({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(e,{emit:n}){const r=e,o=r.dataSources,t=oe();async function a(f){n("select",f)}function d(f,u,i){i==null||i.stopPropagation(),f.isEdit=u}async function s(f,u){u==null||u.stopPropagation(),await t.updateGroupInfo({isSticky:!f.isSticky,groupId:f.uuid}),await t.queryMyGroup()}async function g(f,u){u==null||u.stopPropagation(),n("delete",f)}const c=et(g,600);async function l(f){const{uuid:u,title:i}=f;f.isEdit=!1,await t.updateGroupInfo({groupId:u,title:i}),await t.queryMyGroup()}async function h(f,u){u==null||u.stopPropagation(),u.key==="Enter"&&l(f)}function p(f){return t.active===f}return(f,u)=>{var w;const i=qe("focus");return k(),M(q,null,[y("p",Ut,[ke(F(r.title)+" ",1),y("span",Kt,"("+F((w=m(o))==null?void 0:w.length)+")",1)]),(k(!0),M(q,null,Ve(m(o),b=>(k(),M("div",{key:`${b.uuid}`},[y("div",{class:H(["relative flex items-center gap-3 px-3 py-2 break-all rounded-md cursor-pointer hover:bg-gray-50 group dark:hover:bg-gray-800 font-medium text-sm",p(b.uuid)?["bg-gray-50","text-primary-600","dark:bg-gray-800","dark:text-white"]:["text-gray-700","dark:bg-gray-900","dark:text-gray-400"]]),onClick:_=>a(b)},[y("div",Ht,[b.isEdit?J((k(),M("input",{key:0,"onUpdate:modelValue":_=>b.title=_,type:"text",class:"bg-transparent border border-gray-200 dark:border-gray-400 px-1 shadow-none flex-1 truncate",onKeypress:_=>h(b,_)},null,40,Vt)),[[Se,b.title],[i]]):(k(),M("span",Wt,F(b.title),1)),b.isEdit?(k(),R(m(tt),{key:2,class:"h-5 w-5 ml-2","aria-hidden":"true",onClick:_=>l(b)},null,8,["onClick"])):P("",!0)]),p(b.uuid)?(k(),M("div",qt,[b.isEdit?P("",!0):(k(),R(m(Lt),{key:0,as:"div",class:"relative inline-block text-left"},{default:A(()=>[T(m(jt),{class:"p-1"},{default:A(()=>[T(m(nt),{class:"h-5 w-5","aria-hidden":"true"})]),_:1}),T(We,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:A(()=>[T(m(Bt),{class:"absolute right-0 z-10 mt-2 w-32 text-gray-700 dark:text-gray-400 origin-top-right text-b rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-primary-100 dark:bg-gray-800"},{default:A(()=>[y("div",zt,[T(m(X),{as:"template"},{default:A(({active:_})=>[y("button",{class:H([_?"flex items-center bg-gray-100 dark:bg-gray-700 ":"flex items-center ","block w-full px-4 py-2 text-left text-sm"]),onClick:v=>d(b,!0,v)}," 重命名 ",10,Zt)]),_:2},1024),T(m(X),{as:"template"},{default:A(({active:_})=>[y("button",{class:H([_?"flex items-end mr-3 bg-gray-100 dark:bg-gray-700":"flex items-end ","block w-full px-4 py-2 text-left text-sm"]),onClick:v=>s(b,v)}," 收藏对话 ",10,Yt)]),_:2},1024),T(m(X),{as:"template"},{default:A(({active:_})=>[y("button",{class:H([_?"flex items-center bg-gray-100 dark:bg-gray-700":"flex items-center ","block w-full px-4 py-2 text-left text-sm"]),onClick:v=>m(c)(b,v)}," 删除对话 ",10,Qt)]),_:2},1024)])]),_:2},1024)]),_:2},1024)]),_:2},1024))])):P("",!0)],10,Gt)]))),128))],64)}}}),Xt={class:"flex flex-col gap-3 text-sm"},Jt={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},en=j({__name:"List",setup(e){const{isMobile:n}=_e(),r=Ie(),o=ze(),t=Ee(),a=oe(),d=Me(),s=x(100),g=S(()=>a.groupList),c=S(()=>a.groupKeyWord);U(g,()=>s.value=s.value+1),U(c,()=>s.value=s.value+1),S(()=>d.isLogin);function l(v){const B=new Date(v).getTime()+8*60*60*1e3;return new Date(B).getTime()}const h=new Date().setHours(0,0,0,0),p=S(()=>g.value.filter(v=>c.value?v.title.includes(c.value)&&v.isSticky:v.isSticky)),f=S(()=>g.value.filter(v=>c.value?v.title.includes(c.value)&&!v.isSticky&&v.appId:!v.isSticky&&v.appId)),u=S(()=>g.value.filter(v=>c.value?v.title.includes(c.value)&&!v.isSticky&&!v.appId&&l(v.createdAt)>=h:!v.isSticky&&!v.appId&&l(v.createdAt)>=h)),i=S(()=>g.value.filter(v=>c.value?v.title.includes(c.value)&&!v.isSticky&&!v.appId&&l(v.createdAt)<h:!v.isSticky&&!v.appId&&l(v.createdAt)<h));async function w(v){const{uuid:N}=v;_(N)||(await a.setActiveGroup(N),o.name!=="Chat"&&r.push("/chat"),n.value&&t.setSiderCollapsed(!0))}async function b(v){event==null||event.stopPropagation(),await a.deleteGroup(v),await a.queryMyGroup(),n.value&&t.setSiderCollapsed(!0)}function _(v){return a.active===v}return ae(()=>{a.queryMyGroup()}),(v,N)=>(k(),R(m(Ze),{class:"px-4"},{default:A(()=>[y("div",Xt,[m(g).length?(k(),M(q,{key:1},[m(p).length?(k(),R(W,{key:1e3+s.value,title:"收藏","data-sources":m(p),onSelect:w,onDelete:b},null,8,["data-sources"])):P("",!0),m(f).length?(k(),R(W,{key:2e3+s.value,title:"应用分类组","data-sources":m(f),onSelect:w,onDelete:b},null,8,["data-sources"])):P("",!0),m(u).length?(k(),R(W,{key:3e3+s.value,title:"今天","data-sources":m(u),onSelect:w,onDelete:b},null,8,["data-sources"])):P("",!0),m(i).length?(k(),R(W,{key:4e3+s.value,title:"其他","data-sources":m(i),onSelect:w,onDelete:b},null,8,["data-sources"])):P("",!0)],64)):(k(),M("div",Jt,[T(m(ee),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),y("span",null,F(v.$t("common.noData")),1)]))])]),_:1}))}}),tn={class:"flex flex-col h-full flex-1"},nn={class:"flex items-center space-x-2 bg-white dark:bg-gray-900 h-14 px-3 border-b border-t-gray-100 dark:border-b dark:border-b-gray-800 text-lg"},rn={class:"flex-1 relative"},an={class:"flex-1 relative"},on={class:"flex-1 min-h-0 overflow-hidden"},ln={class:"p-4 pb-1 pt-1 border-t border-t-gray-100 dark:border-t-gray-800 flex flex-col"},sn={class:"flex justify-between my-3"},un=y("span",null,"应用中心",-1),cn=y("span",null,"清空对话",-1),dn={key:0},fn={type:"button",class:"inline-flex justify-center items-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 w-full"},pn={key:1},vn={type:"button",class:"inline-flex justify-center items-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 w-full"},gn={key:0,class:"w-full flex justify-center items-center py-2 text-xs text-gray-500"},mn={class:"ml-2 transition-all text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",href:"https://beian.miit.gov.cn",target:"_blank"},wn=j({__name:"index",setup(e){Ye();const n=Ie(),r=Ee(),o=oe(),t=Me(),a=x(null),d=x(null),s=S(()=>t.userBalance),g=Qe(),c=S(()=>t.globalConfig),l=S(()=>{var D,C;return((D=c.value)==null?void 0:D.companyName)&&((C=c.value)==null?void 0:C.filingNumber)}),h=S(()=>o==null?void 0:o.activeModelKeyDeductType),p=x(0),f=x(0),u=x(0),i=x(0),w=x(!1),b=x(null);U(()=>t.userBalance.useModel3Token,(D,C)=>{var O;p.value=C||0,f.value=D||0,(O=a.value)==null||O.play()},{immediate:!0,flush:"post"}),U(()=>t.userBalance.useModel4Token,(D,C)=>{var O;u.value=C||0,i.value=D||0,(O=d.value)==null||O.play()},{immediate:!0,flush:"post"});const{isMobile:_}=_e(),v=x(!1),N=S(()=>r.siderCollapsed),B=x("");function de(D){const C=D.target.value;B.value=C,o.setGroupKeyWord(C)}function Oe(){w.value=!1}function Fe(){n.push("/role")}async function Re(){try{v.value=!0,await o.addNewChatGroup(),await o.queryMyGroup(),v.value=!1,_.value&&r.setSiderCollapsed(!0)}catch{v.value=!1}}async function Le(){g.warning({title:"清空对话",content:"清空所有非收藏的对话？",positiveText:"确认",negativeText:"取消",onPositiveClick:async()=>{await o.delAllGroup()}})}function fe(){r.setSiderCollapsed(!N.value)}const je=S(()=>_.value?{position:"fixed",zIndex:50}:{}),Be=S(()=>_.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return U(_,D=>{r.setSiderCollapsed(D)},{immediate:!0,flush:"post"}),(D,C)=>(k(),M("div",null,[T(m(Je),{collapsed:m(N),"collapsed-width":0,width:260,"show-trigger":m(_)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:ve(m(je)),onUpdateCollapsed:fe},{default:A(()=>{var O,pe;return[y("div",{class:"flex flex-col h-full bg-white dark:bg-gray-900",style:ve(m(Be))},[y("main",tn,[y("div",nn,[y("div",rn,[y("div",an,[T(m(rt),{class:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400","aria-hidden":"true"}),J(y("input",{ref_key:"searchRef",ref:b,"onUpdate:modelValue":C[0]||(C[0]=Ue=>B.value=Ue),type:"text",placeholder:"搜索历史对话",class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-700 placeholder:text-gray-400 sm:text-sm dark:bg-gray-900 dark:text-gray-400",onBlur:Oe,onInput:de},null,544),[[Se,B.value]])])]),y("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:Re},[T(m(at),{class:"h-5 w-5","aria-hidden":"true"})])]),y("div",on,[T(en)]),y("div",ln,[y("div",sn,[y("button",{type:"button",class:"inline-flex justify-center items-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800",onClick:Fe},[T(m(ee),{icon:"ri:emoji-sticker-line",class:"ml-0 mr-3 text-sm"}),un]),y("button",{type:"button",class:"inline-flex justify-center items-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800",onClick:Le},[T(m(ee),{icon:"mdi:notice-board",class:"ml-0 mr-3 text-sm"}),cn])]),m(h)===1?(k(),M("div",dn,[y("button",fn,[y("span",null,"剩余： "+F(`${m(s).sumModel3Count||0} 普通积分`),1)])])):P("",!0),m(h)===2?(k(),M("div",pn,[y("button",vn,[y("span",null,"剩余： "+F(`${m(s).sumModel4Count||0} 高级积分`),1)])])):P("",!0)]),m(l)?(k(),M("div",gn,[ke(" 版权所有 © "+F((O=m(c))==null?void 0:O.companyName)+" ",1),y("a",mn,F((pe=m(c))==null?void 0:pe.filingNumber),1)])):P("",!0)])],4)]}),_:1},8,["collapsed","show-trigger","style"]),m(_)?J((k(),M("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:fe},null,512)),[[Xe,!m(N)]]):P("",!0)]))}});export{Lt as I,Bt as S,wn as _,X as b,jt as g};