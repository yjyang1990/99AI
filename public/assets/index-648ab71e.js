import{a as ne,o as ge,u as _e,t,S as Me,T as Ne,U as Ee,V as Ie,W as Le,X as Re,Y as De}from"./index-d64a7cc4.js";import{_ as je}from"./titleBar.vue_vue_type_script_setup_true_lang-a53d5875.js";import{u as ue}from"./useBasicLayout-a4f17bae.js";import{d as se,e as M,r as I,f as ce,S as A,U as B,a3 as s,V as R,W as o,c as j,a4 as n,M as e,a5 as z,X as u,j as be,l as oe,a8 as pe,F as xe,af as ye,ab as ze,a6 as Oe,H as Ue}from"./vue-10b4afc0.js";import{z as D,S as me,h as Be,i as We,e as de,A as ee,x as V,B as ve,y as Y,T as we,C as Ge,U as he,K as te,d as Fe,V as He,W as Ve,Q as qe,R as Qe,X as Z,v as ie,Y as Ye}from"./naive-ui-fedd20b1.js";import{a as Xe,f as Ke}from"./crami-99ee44eb.js";import"./vueuse-motion-d4cdaf7b.js";const le=""+new URL("avatar-e985e5ec.png",import.meta.url).href,Je={class:"flex flex-col justify-center items-center"},Ze={class:"text-2xl text-primary self-start mb-3 flex justify-between w-full"},et=s("span",null,null,-1),tt={class:"mt-3 text-lg text-[#555]"},nt={class:"text-[#95aac9] mt-2"},st={class:"self-start"},rt={class:"flex pl-3 pt-3 text-base font-bold text-primary"},at={key:0,class:"flex pl-3 pt-3 text-base font-bold text-primary"},ot={class:"flex items-center space-x-4 pl-3 mt-3"},it={class:"flex-shrink-0 w-24 text-primary"},lt={class:"w-[200px]"},ut={class:"flex items-center space-x-4 pl-3 mt-3"},ct={class:"flex-shrink-0 w-24 text-primary"},dt={class:"w-[200px]"},ft={class:"flex items-center space-x-4 pl-3 mt-3"},pt={class:"flex-shrink-0 w-24 text-primary"},mt={class:"w-[200px]"},vt={key:1,class:"flex items-center space-x-4 pl-3 mt-3"},yt={class:"flex-shrink-0 w-24 text-primary"},ht={class:"w-[200px]"},gt={key:1},_t=se({__name:"detail",setup(W){const S=ne(),b=ge(),{userBalance:w}=S,$=_e(),m=M(()=>S.userInfo.email||""),f=M(()=>S.userInfo.isBindWx),r=I(S.userInfo.avatar??le),c=I(S.userInfo.username??t("usercenter.notLoggedIn"));I(S.userInfo.sign??t("usercenter.defaultSignature"));const p=M(()=>Number(S.globalConfig.wechatRegisterStatus)===1);function h(){S.logOut(),b.push("/")}const x=M(()=>S.isLogin);return ce(()=>{x.value||S.setLoginDialog(!0)}),(C,T)=>(A(),B("div",Je,[s("div",Ze,[et,x.value?(A(),R(e(D),{key:0,tertiary:"",type:"error",onClick:h},{default:o(()=>[j(n(e(t)("usercenter.logOut")),1)]),_:1})):z("",!0),x.value?z("",!0):(A(),R(e(D),{key:1,tertiary:"",type:"success",onClick:T[0]||(T[0]=y=>e(S).setLoginDialog(!0))},{default:o(()=>[j(n(e(t)("usercenter.clickToLogin")),1)]),_:1}))]),u(e(me),{size:148,src:r.value,"fallback-src":e(le)},null,8,["src","fallback-src"]),s("b",tt,n(c.value),1),s("span",nt,n(m.value),1),s("div",st,[s("div",rt,[s("span",null,n(e(t)("usercenter.myUsageRecord")),1)]),e(w).expirationTime?(A(),B("div",at,[s("span",null,n(e(t)("usercenter.membershipExpiration")),1),s("span",null,n(e(w).expirationTime),1)])):z("",!0),s("div",ot,[s("span",it,n(e(t)("usercenter.basicModelCredits")),1),s("div",lt,n(e(w).sumModel3Count||"0")+" "+n(e(t)("usercenter.points")),1)]),s("div",ut,[s("span",ct,n(e(t)("usercenter.advancedModelCredits")),1),s("div",dt,n(e(w).sumModel4Count||"0")+" "+n(e(t)("usercenter.points")),1)]),s("div",ft,[s("span",pt,n(e(t)("usercenter.drawingUsageCredits")),1),s("div",mt,n(e(w).sumDrawMjCount||"0")+" "+n(e(t)("usercenter.points")),1)]),p.value?(A(),B("div",vt,[s("span",yt,n(e(t)("usercenter.bindWeChat")),1),s("div",ht,[f.value?(A(),B("span",gt,n(e(t)("usercenter.weChatBound")),1)):(A(),R(e(D),{key:0,text:"",onClick:T[1]||(T[1]=y=>e($).updateBindwxDialog(!0))},{default:o(()=>[j(n(e(t)("usercenter.clickToBindWeChat")),1)]),_:1}))])])):z("",!0)])]))}});var Ce={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(W,S){(function(w,$){W.exports=$()})(Be,function(){return function(){var b={686:function(m,f,r){r.d(f,{default:function(){return Ae}});var c=r(279),p=r.n(c),h=r(370),x=r.n(h),C=r(817),T=r.n(C);function y(_){try{return document.execCommand(_)}catch{return!1}}var a=function(l){var i=T()(l);return y("cut"),i},d=a;function P(_){var l=document.documentElement.getAttribute("dir")==="rtl",i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[l?"right":"left"]="-9999px";var v=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(v,"px"),i.setAttribute("readonly",""),i.value=_,i}var F=function(l,i){var v=P(l);i.container.appendChild(v);var g=T()(v);return y("copy"),v.remove(),g},Q=function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},v="";return typeof l=="string"?v=F(l,i):l instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(l==null?void 0:l.type)?v=F(l.value,i):(v=T()(l),y("copy")),v},H=Q;function q(_){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?q=function(i){return typeof i}:q=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},q(_)}var X=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=l.action,v=i===void 0?"copy":i,g=l.container,k=l.target,G=l.text;if(v!=="copy"&&v!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(k!==void 0)if(k&&q(k)==="object"&&k.nodeType===1){if(v==="copy"&&k.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(v==="cut"&&(k.hasAttribute("readonly")||k.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(G)return H(G,{container:g});if(k)return v==="cut"?d(k):H(k,{container:g})},K=X;function E(_){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?E=function(i){return typeof i}:E=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},E(_)}function L(_,l){if(!(_ instanceof l))throw new TypeError("Cannot call a class as a function")}function N(_,l){for(var i=0;i<l.length;i++){var v=l[i];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(_,v.key,v)}}function U(_,l,i){return l&&N(_.prototype,l),i&&N(_,i),_}function O(_,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(l&&l.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),l&&J(_,l)}function J(_,l){return J=Object.setPrototypeOf||function(v,g){return v.__proto__=g,v},J(_,l)}function ke(_){var l=Te();return function(){var v=re(_),g;if(l){var k=re(this).constructor;g=Reflect.construct(v,arguments,k)}else g=v.apply(this,arguments);return Se(this,g)}}function Se(_,l){return l&&(E(l)==="object"||typeof l=="function")?l:$e(_)}function $e(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function Te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function re(_){return re=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},re(_)}function fe(_,l){var i="data-clipboard-".concat(_);if(l.hasAttribute(i))return l.getAttribute(i)}var Pe=function(_){O(i,_);var l=ke(i);function i(v,g){var k;return L(this,i),k=l.call(this),k.resolveOptions(g),k.listenClick(v),k}return U(i,[{key:"resolveOptions",value:function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof g.action=="function"?g.action:this.defaultAction,this.target=typeof g.target=="function"?g.target:this.defaultTarget,this.text=typeof g.text=="function"?g.text:this.defaultText,this.container=E(g.container)==="object"?g.container:document.body}},{key:"listenClick",value:function(g){var k=this;this.listener=x()(g,"click",function(G){return k.onClick(G)})}},{key:"onClick",value:function(g){var k=g.delegateTarget||g.currentTarget,G=this.action(k)||"copy",ae=K({action:G,container:this.container,target:this.target(k),text:this.text(k)});this.emit(ae?"success":"error",{action:G,text:ae,trigger:k,clearSelection:function(){k&&k.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(g){return fe("action",g)}},{key:"defaultTarget",value:function(g){var k=fe("target",g);if(k)return document.querySelector(k)}},{key:"defaultText",value:function(g){return fe("text",g)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(g){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return H(g,k)}},{key:"cut",value:function(g){return d(g)}},{key:"isSupported",value:function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],k=typeof g=="string"?[g]:g,G=!!document.queryCommandSupported;return k.forEach(function(ae){G=G&&!!document.queryCommandSupported(ae)}),G}}]),i}(p()),Ae=Pe},828:function(m){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function c(p,h){for(;p&&p.nodeType!==f;){if(typeof p.matches=="function"&&p.matches(h))return p;p=p.parentNode}}m.exports=c},438:function(m,f,r){var c=r(828);function p(C,T,y,a,d){var P=x.apply(this,arguments);return C.addEventListener(y,P,d),{destroy:function(){C.removeEventListener(y,P,d)}}}function h(C,T,y,a,d){return typeof C.addEventListener=="function"?p.apply(null,arguments):typeof y=="function"?p.bind(null,document).apply(null,arguments):(typeof C=="string"&&(C=document.querySelectorAll(C)),Array.prototype.map.call(C,function(P){return p(P,T,y,a,d)}))}function x(C,T,y,a){return function(d){d.delegateTarget=c(d.target,T),d.delegateTarget&&a.call(C,d)}}m.exports=h},879:function(m,f){f.node=function(r){return r!==void 0&&r instanceof HTMLElement&&r.nodeType===1},f.nodeList=function(r){var c=Object.prototype.toString.call(r);return r!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in r&&(r.length===0||f.node(r[0]))},f.string=function(r){return typeof r=="string"||r instanceof String},f.fn=function(r){var c=Object.prototype.toString.call(r);return c==="[object Function]"}},370:function(m,f,r){var c=r(879),p=r(438);function h(y,a,d){if(!y&&!a&&!d)throw new Error("Missing required arguments");if(!c.string(a))throw new TypeError("Second argument must be a String");if(!c.fn(d))throw new TypeError("Third argument must be a Function");if(c.node(y))return x(y,a,d);if(c.nodeList(y))return C(y,a,d);if(c.string(y))return T(y,a,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function x(y,a,d){return y.addEventListener(a,d),{destroy:function(){y.removeEventListener(a,d)}}}function C(y,a,d){return Array.prototype.forEach.call(y,function(P){P.addEventListener(a,d)}),{destroy:function(){Array.prototype.forEach.call(y,function(P){P.removeEventListener(a,d)})}}}function T(y,a,d){return p(document.body,y,a,d)}m.exports=h},817:function(m){function f(r){var c;if(r.nodeName==="SELECT")r.focus(),c=r.value;else if(r.nodeName==="INPUT"||r.nodeName==="TEXTAREA"){var p=r.hasAttribute("readonly");p||r.setAttribute("readonly",""),r.select(),r.setSelectionRange(0,r.value.length),p||r.removeAttribute("readonly"),c=r.value}else{r.hasAttribute("contenteditable")&&r.focus();var h=window.getSelection(),x=document.createRange();x.selectNodeContents(r),h.removeAllRanges(),h.addRange(x),c=h.toString()}return c}m.exports=f},279:function(m){function f(){}f.prototype={on:function(r,c,p){var h=this.e||(this.e={});return(h[r]||(h[r]=[])).push({fn:c,ctx:p}),this},once:function(r,c,p){var h=this;function x(){h.off(r,x),c.apply(p,arguments)}return x._=c,this.on(r,x,p)},emit:function(r){var c=[].slice.call(arguments,1),p=((this.e||(this.e={}))[r]||[]).slice(),h=0,x=p.length;for(h;h<x;h++)p[h].fn.apply(p[h].ctx,c);return this},off:function(r,c){var p=this.e||(this.e={}),h=p[r],x=[];if(h&&c)for(var C=0,T=h.length;C<T;C++)h[C].fn!==c&&h[C].fn._!==c&&x.push(h[C]);return x.length?p[r]=x:delete p[r],this}},m.exports=f,m.exports.TinyEmitter=f}},w={};function $(m){if(w[m])return w[m].exports;var f=w[m]={exports:{}};return b[m](f,f.exports,$),f.exports}return function(){$.n=function(m){var f=m&&m.__esModule?function(){return m.default}:function(){return m};return $.d(f,{a:f}),f}}(),function(){$.d=function(m,f){for(var r in f)$.o(f,r)&&!$.o(m,r)&&Object.defineProperty(m,r,{enumerable:!0,get:f[r]})}}(),function(){$.o=function(m,f){return Object.prototype.hasOwnProperty.call(m,f)}}(),$(686)}().default})})(Ce);var bt=Ce.exports;const xt=We(bt),wt=W=>{const S=(W==null?void 0:W.appendToBody)===void 0?!0:W.appendToBody;return{toClipboard(b,w){return new Promise(($,m)=>{const f=document.createElement("button"),r=new xt(f,{text:()=>b,action:()=>"copy",container:w!==void 0?w:document.body});r.on("success",c=>{r.destroy(),$(c)}),r.on("error",c=>{r.destroy(),m(c)}),S&&document.body.appendChild(f),f.click(),S&&document.body.removeChild(f)})}}},Ct={class:"text-[#95aac9] mb-2 text-base"},kt={class:"text-2xl text-[#555] dark:text-[#fff] whitespace-nowrap"},St=s("b",{class:"text-[000]"},"Tips",-1),$t={class:"flex flex-col text-[#707384]"},Tt=se({__name:"invite",setup(W){const{toClipboard:S}=wt(),b=ne(),w=M(()=>b.userInfo.inviteCode),$=M(()=>b.globalConfig),{isSmallXl:m,isMobile:f}=ue(),r=de(),c=I(!1),p=be({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,50],onChange:a=>{p.page=a,T()},onUpdatePageSize:a=>{p.pageSize=a,p.page=1,T()}}),h=M(()=>[{title:t("usercenter.avatar"),key:"avatar",render(a){return oe(me,{src:a.avatar,size:"small",round:!0})}},{title:t("usercenter.username"),key:"username"},{title:t("usercenter.email"),key:"email"},{title:t("usercenter.inviteeStatus"),key:"status",render(a){return oe(D,{type:a.status===1?"primary":"error",size:"small",round:!0,quaternary:!0},{default:()=>a.status===1?t("usercenter.certified"):t("usercenter.notActivated")})}},{title:t("usercenter.inviteTime"),key:"createdAt",render(a){return oe("div",{style:{fontSize:"12px",color:"#999"}},()=>a.createdAt)}},{title:t("usercenter.rewardStatus"),key:"status",render(a){return oe(D,{type:a.status===1?"success":"warning",size:"small",round:!0,quaternary:!0},{default:()=>a.status===1?t("usercenter.rewardReceived"):t("usercenter.waitingConfirmation")})}}]),x=I([]);async function C(){const a=await Ne();if(!a.data)return r.error(a.message);r.error(t("usercenter.linkGeneratedSuccess")),b.getUserInfo()}async function T(){try{c.value=!0;const a=await Me({page:p.page,size:p.pageSize});x.value=a.data.rows,c.value=!1}catch{c.value=!1}}async function y(){if(!w.value)return r.error(t("usercenter.generateLinkFirst"));const a=`${window.location.href}?inVitecode=${w.value}`;try{await S(a),r.success(t("usercenter.linkCopiedSuccess"))}catch{r.error(t("usercenter.copyNotSupported"))}}return ce(()=>{T()}),(a,d)=>(A(),B(xe,null,[u(e(Y),null,{header:o(()=>[s("div",null,n(e(t)("usercenter.inviteForBenefits")),1)]),default:o(()=>[u(e(ee),{"x-gap":24,"y-gap":24,cols:e(m)?1:3,class:"mt-3"},{default:o(()=>{var P;return[u(e(V),{class:"border rounded-sm p-3 dark:border-[#ffffff17]",span:2},{default:o(()=>[s("div",Ct,n(e(t)("usercenter.myInviteCode")),1),s("div",{class:pe(["flex justify-between",[e(m)?"flex-col mt-3":""]])},[s("b",kt,n(w.value||"********"),1),u(e(ve),{class:pe([e(m)?" mt-3":""])},{default:o(()=>[u(e(D),{type:"success",onClick:C},{default:o(()=>[j(n(e(t)("usercenter.generateInviteCode")),1)]),_:1}),u(e(D),{type:"primary",onClick:y},{default:o(()=>[j(n(e(t)("usercenter.copyInviteLink")),1)]),_:1})]),_:1},8,["class"])],2)]),_:1}),Number((P=$.value)==null?void 0:P.inviteSendStatus)===1?(A(),R(e(V),{key:0,class:"border rounded-sm p-3 dark:border-[#ffffff17]",span:1},{default:o(()=>[St,s("div",$t,[s("span",null,n(e(t)("usercenter.inviteOneUser")),1),s("span",null,n($.value.inviteGiveSendModel3Count)+" "+n(e(t)("usercenter.basicModelCredits"))+" "+n($.value.inviteGiveSendModel4Count)+" "+n(e(t)("usercenter.advancedModelCredits"))+" "+n($.value.inviteGiveSendDrawMjCount)+" "+n(e(t)("usercenter.mjDrawingCredits")),1),s("span",null,n(e(t)("usercenter.receiveInvitation")),1),s("span",null,n($.value.invitedGuestSendModel3Count)+" "+n(e(t)("usercenter.basicModelCredits"))+" "+n($.value.invitedGuestSendModel4Count)+" "+n(e(t)("usercenter.advancedModelCredits"))+" "+n($.value.invitedGuestSendDrawMjCount)+" "+n(e(t)("usercenter.mjDrawingCredits")),1)])]),_:1})):z("",!0)]}),_:1},8,["cols"])]),_:1}),u(e(Y),{class:"mt-5"},{header:o(()=>[s("div",null,n(e(t)("usercenter.invitationRecord")),1)]),default:o(()=>[u(e(we),{loading:c.value,remote:!0,"pagination-behavior-on-filter":"first",class:"min-h-[350px]",columns:h.value,data:x.value,pagination:p,"scroll-x":500},null,8,["loading","columns","data","pagination"])]),_:1})],64))}}),Pt={class:"flex justify-between"},At={class:"text-[#95AAC9]"},Mt={class:"text-base"},Nt={class:"text-[#95AAC9] mt-3"},Et={class:"ml-3 text-[#95AAC9] mt-2"},It={class:"ml-3 text-[#95AAC9] mt-2"},Lt={class:"ml-3 text-[#95AAC9] mt-2"},Rt=se({__name:"password",setup(W){const S=I({password:"",reenteredPassword:""}),b=S,w=I(null),$=I(null),m={password:[{required:!0,message:t("usercenter.enterPassword")}],reenteredPassword:[{required:!0,message:t("usercenter.reenterPassword"),trigger:["input","blur"]},{validator:f,message:t("usercenter.passwordsNotMatch"),trigger:"input"},{validator:r,message:t("usercenter.passwordsNotMatch"),trigger:["blur","password-input"]}]};function f(a,d){return!!S.value.password&&S.value.password.startsWith(d)&&S.value.password.length>=d.length}function r(a,d){return d===S.value.password}function c(){var a;S.value.reenteredPassword&&((a=$.value)==null||a.validate({trigger:"password-input"}))}const{isSmallXl:p}=ue(),h=ne(),x=de();async function C(a){await Ee(a),x.success(t("usercenter.passwordUpdateSuccess")),T(),h.updatePasswordSuccess()}function T(){S.value={password:"",reenteredPassword:""}}function y(a){var d;a.preventDefault(),(d=w.value)==null||d.validate(async P=>{if(!P){const{password:F}=S.value;C({password:F})}})}return(a,d)=>(A(),R(e(Y),null,{header:o(()=>[s("div",null,n(e(t)("usercenter.changeYourPassword")),1)]),default:o(()=>[u(e(ee),{"x-gap":24,"y-gap":24,cols:e(p)?1:3,class:"mt-3"},{default:o(()=>[u(e(V),{class:"border rounded-sm p-3 dark:border-[#ffffff17]",span:"2"},{default:o(()=>[u(e(Ge),{ref_key:"formRef",ref:w,model:e(b),rules:m},{default:o(()=>[u(e(he),{path:"password",label:e(t)("usercenter.newPassword")},{default:o(()=>[u(e(te),{value:e(b).password,"onUpdate:value":d[0]||(d[0]=P=>e(b).password=P),type:"password",onInput:c,onKeydown:d[1]||(d[1]=ye(ze(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1},8,["label"]),u(e(he),{ref_key:"rPasswordFormItemRef",ref:$,first:"",path:"reenteredPassword",label:e(t)("usercenter.confirmPassword")},{default:o(()=>[u(e(te),{value:e(b).reenteredPassword,"onUpdate:value":d[2]||(d[2]=P=>e(b).reenteredPassword=P),disabled:!e(b).password,type:"password",tabindex:"0",onKeyup:ye(y,["enter"])},null,8,["value","disabled"])]),_:1},8,["label"]),s("div",Pt,[s("span",At,n(e(t)("usercenter.reloginAfterPasswordChange")),1),u(e(D),{disabled:e(b).password===null,type:"primary",onClick:y},{default:o(()=>[j(n(e(t)("usercenter.updateYourPassword")),1)]),_:1},8,["disabled"])])]),_:1},8,["model"])]),_:1}),u(e(V),{class:"border rounded-sm p-3 dark:border-[#ffffff17]"},{default:o(()=>[s("b",Mt,n(e(t)("usercenter.passwordRequirements")),1),s("p",Nt,n(e(t)("usercenter.newPasswordInstructions")),1),s("div",Et,n(e(t)("usercenter.minimumCharacters")),1),s("div",It,n(e(t)("usercenter.maximumCharacters")),1),s("div",Lt,n(e(t)("usercenter.requireNumber")),1)]),_:1})]),_:1},8,["cols"])]),_:1}))}}),Dt={1:t("rechargeTypes.1"),2:t("rechargeTypes.2"),3:t("rechargeTypes.3"),4:t("rechargeTypes.4"),5:t("rechargeTypes.5"),6:t("rechargeTypes.6"),7:t("rechargeTypes.7"),8:t("rechargeTypes.8")};t("orderStatus.0"),t("orderStatus.1"),t("orderStatus.2"),t("orderStatus.3");const jt={class:"flex h-full flex-col"},zt={class:"text-[#95aac9] mb-2 text-base"},Ot={class:"text-3xl text-[#555]"},Ut={class:"ml-4 text-[#989898]"},Bt={class:"text-[#95aac9] mb-2 text-base"},Wt={class:"text-3xl text-[#555]"},Gt={class:"ml-4 text-[#989898]"},Ft={class:"text-[#95aac9] mb-2 text-base"},Ht={class:"text-3xl text-[#555]"},Vt={class:"ml-4 text-[#989898]"},qt={class:"text-[#95aac9] mb-2 text-base"},Qt={class:"relative"},Yt=["src"],Xt={class:"flex justify-between items-end min-h-28"},Kt={class:"text-sm font-bold mr-1"},Jt={class:"font-bold"},Zt={class:"flex justify-between items-end min-h-28"},en={class:"text-sm font-bold mr-1"},tn={class:"font-bold"},nn={class:"flex justify-between items-end min-h-28"},sn={class:"text-sm font-bold mr-1"},rn={class:"font-bold"},an={class:"flex justify-between items-end mt-5"},on={class:"text-xl text-[red] font-bold"},ln=se({__name:"wallet",setup(W){const{isSmallMd:S,isMobile:b}=ue(),w=ne(),$=de();Fe();const m=M(()=>w.userBalance),f=I(!1),r=I(""),c=I(!1),p=I([]),h=I(!1),x=M(()=>w.globalConfig.model3Name||t("usercenter.basicModelQuota")),C=M(()=>w.globalConfig.model4Name)||t("usercenter.advancedModelQuota"),T=M(()=>w.globalConfig.drawMjName)||t("usercenter.mjDrawingQuota"),y=M(()=>Number(w.globalConfig.isHideModel3Point)===1),a=M(()=>Number(w.globalConfig.isHideModel4Point)===1),d=M(()=>Number(w.globalConfig.isHideDrawMjPoint)===1),P=be({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,50],onChange:N=>{P.page=N,H()},onUpdatePageSize:N=>{P.pageSize=N,P.page=1,H()}}),F=M(()=>{const N=[{title:t("usercenter.orderNumber"),key:"uid"},{title:t("usercenter.rechargeType"),key:"rechargeType",render(U){return Dt[U.rechargeType]}},{title:t("usercenter.validity"),key:"expireDateCn"},{title:t("usercenter.rechargeTime"),key:"createdAt",render(U){return U.createdAt}}];return y.value||N.splice(2,0,{title:x.value,key:"model3Count"}),a.value||N.splice(3,0,{title:C.value,key:"model4Count"}),d.value||N.splice(4,0,{title:T.value,key:"drawMjCount"}),N}),Q=I([]);async function H(){const N=await Ie({page:P.page,size:P.pageSize}),{rows:U}=N.data;Q.value=U}async function q(){$.warning(t("usercenter.enterCardSecret"));try{f.value=!0,await Xe({code:r.value}),$.success(t("usercenter.cardRedeemSuccess")),H(),w.getUserInfo(),f.value=!1}catch{$.error(t("usercenter.unknownError")),f.value=!1}}function X(){c.value=!0}async function K(){const N=await Ke({status:1,size:30});p.value=N.data.rows}const E=M(()=>{var N;return(N=w.globalConfig)==null?void 0:N.buyCramiAddress});function L(){window.open(E.value)}return ce(()=>{H()}),(N,U)=>(A(),B("div",jt,[u(e(Y),null,{header:o(()=>[s("div",null,n(e(t)("usercenter.userWalletBalance")),1)]),default:o(()=>[u(e(ee),{"x-gap":24,"y-gap":24,cols:e(S)?1:2,class:"mt-3"},{default:o(()=>[y.value?z("",!0):(A(),R(e(V),{key:0,class:"border dark:border-[#ffffff17] rounded-sm p-3"},{default:o(()=>[s("div",zt,n(x.value),1),s("b",Ot,n(m.value.sumModel3Count??0),1),s("span",Ut,n(e(t)("usercenter.creditUsageNote")),1)]),_:1})),a.value?z("",!0):(A(),R(e(V),{key:1,class:"border dark:border-[#ffffff17] rounded-sm p-3"},{default:o(()=>[s("div",Bt,n(e(C)),1),s("b",Wt,n(m.value.sumModel4Count??0),1),s("span",Gt,n(e(t)("usercenter.modelConsumptionNote")),1)]),_:1})),d.value?z("",!0):(A(),R(e(V),{key:2,class:"border dark:border-[#ffffff17] rounded-sm p-3"},{default:o(()=>[s("div",Ft,n(e(T)),1),s("b",Ht,n(m.value.sumDrawMjCount??0),1),s("span",Vt,n(e(t)("usercenter.drawingConsumptionNote")),1)]),_:1})),u(e(V),{class:"border dark:border-[#ffffff17] rounded-sm p-3"},{default:o(()=>[s("div",qt,n(e(t)("usercenter.cardRecharge")),1),u(e(ve),{wrap:!1},{default:o(()=>[u(e(te),{value:r.value,"onUpdate:value":U[0]||(U[0]=O=>r.value=O),placeholder:e(t)("usercenter.enterCardDetails"),class:"mr-3",maxlength:"128","show-count":"",clearable:""},null,8,["value","placeholder"]),u(e(D),{type:"primary",loading:f.value,onClick:q},{default:o(()=>[j(n(e(t)("usercenter.exchange")),1)]),_:1},8,["loading"]),E.value?(A(),R(e(D),{key:0,type:"success",onClick:X},{default:o(()=>[j(n(e(t)("usercenter.buyCardSecret")),1)]),_:1})):z("",!0)]),_:1})]),_:1})]),_:1},8,["cols"])]),_:1}),u(e(Y),{class:"mt-5 flex-1"},{header:o(()=>[s("div",null,n(e(t)("usercenter.rechargeRecords")),1)]),default:o(()=>[u(e(we),{columns:F.value,loading:h.value,"scroll-x":800,data:Q.value,"max-height":"280",pagination:P},null,8,["columns","loading","data","pagination"])]),_:1}),u(e(Ve),{show:c.value,"onUpdate:show":U[1]||(U[1]=O=>c.value=O),width:e(S)?"100%":502,"on-after-enter":K},{default:o(()=>[u(e(He),{title:"{{ t('usercenter.packagePurchase') }}",closable:""},{default:o(()=>[u(e(ee),{"x-gap":15,"y-gap":15,cols:e(S)?1:2,class:"mt-3"},{default:o(()=>[(A(!0),B(xe,null,Oe(p.value,(O,J)=>(A(),R(e(V),{key:J},{default:o(()=>[u(e(Y),{size:"small",embedded:""},{header:o(()=>[s("div",Qt,[s("b",null,n(O.name),1)])]),cover:o(()=>[s("img",{src:O.coverImg},null,8,Yt)]),default:o(()=>[s("div",null,[s("p",null,n(O.des),1),s("div",Xt,[s("span",Kt,n(x.value),1),s("span",Jt,n(O.model3Count),1)]),s("div",Zt,[s("span",en,n(e(C)),1),s("span",tn,n(O.model4Count),1)]),s("div",nn,[s("span",sn,n(e(T)),1),s("span",rn,n(O.drawMjCount),1)]),s("div",an,[s("i",on,n(`￥${O.price}`),1),u(e(D),{type:"primary",dashed:"",size:"small",onClick:L},{default:o(()=>[j(n(e(t)("usercenter.buyPackage")),1)]),_:1})])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["cols"])]),_:1})]),_:1},8,["show","width"])]))}}),un={class:"flex flex-col justify-center items-center"},cn={class:"text-2xl text-primary self-start mb-14 flex justify-between w-full"},dn={class:"mt-3 text-lg text-[#555]"},fn={class:"self-start mt-16"},pn={class:"text-xl text-primary"},mn={class:"flex items-center space-x-4 pl-3 mt-3"},vn={class:"flex-shrink-0 w-[150px] text-keft text-primary"},yn={class:"w-[230px]"},hn={class:"flex items-center space-x-4 pl-3 mt-3"},gn={class:"flex-shrink-0 w-[150px] text-keft text-primary"},_n={class:"w-[230px]"},bn={key:0,class:"flex items-center space-x-4 pl-3 mt-3"},xn={class:"flex-shrink-0 w-[150px] text-keft text-primary"},wn={class:"w-[230px]"},Cn={key:1},kn={key:1,class:"flex items-center space-x-4 pl-3 mt-3"},Sn={class:"flex-shrink-0 w-[150px] text-keft text-primary"},$n={class:"w-[230px]"},Tn={key:0,class:"flex text-[red] pt-8 text-base font-bold"},Pn={key:1},An={class:"flex items-center space-x-4"},Mn={class:"flex-shrink-0 w-[60px]"},Nn={class:"flex-1"},En={class:"flex items-center space-x-4 mt-5"},In={class:"flex-shrink-0 w-[60px]"},Ln={class:"flex-1"},Gn=se({__name:"index",setup(W){const S=_e(),b=ne(),w=ge(),$=I(0),m=M(()=>b.userBalance),f=M(()=>{var E;return(E=b.globalConfig)==null?void 0:E.isUseWxLogin}),r=M(()=>Number(b.globalConfig.wechatRegisterStatus)===1),c=M(()=>b.globalConfig.model3Name||t("goods.basicModelQuota")),p=M(()=>b.globalConfig.model4Name)||t("goods.advancedModelQuota");M(()=>b.globalConfig.drawMjName)||t("goods.drawingQuota"),M(()=>Number(b.globalConfig.isHideModel3Point)===1),M(()=>Number(b.globalConfig.isHideModel4Point)===1),M(()=>Number(b.globalConfig.isHideDrawMjPoint)===1);const h=I(!0),x=M(()=>b.isLogin),C=de();M(()=>b.userInfo.email||"");const T=M(()=>b.userInfo.isBindWx),y=I(b.userInfo.avatar??le),a=I(b.userInfo.username??"未登录");I(b.userInfo.sign??t("usercenter.defaultSignature"));const d=I(!1),{isSmallLg:P,isMobile:F}=ue();async function Q(){const E=await Le();$.value=E.data||0}async function H(){(await Re()).success&&C.success(t("usercenter.syncComplete")),Q()}async function q(E){try{d.value=!0;const L=await De(E);if(d.value=!1,!L.success)return C.error(L.message);C.success(t("common.updateUserSuccess")),b.getUserInfo()}catch{d.value=!1}}function X(){x.value||(w.push("/"),b.setLoginDialog(!0))}ce(()=>{X(),Q()});function K(){b.logOut(),w.push("/")}return setTimeout(()=>{h.value=!1},500),(E,L)=>(A(),R(e(qe),{"has-sider":"",class:"flex h-full"},{default:o(()=>[e(P)?z("",!0):(A(),R(e(Qe),{key:0,"content-style":"padding: 24px;",bordered:"",width:"380"},{default:o(()=>[s("div",un,[s("div",cn,[s("span",null,n(e(t)("usercenter.personalCenter")),1),u(e(D),{tertiary:"",type:"error",onClick:K},{default:o(()=>[j(n(e(t)("usercenter.logOut")),1)]),_:1})]),u(e(me),{size:148,src:y.value,"fallback-src":e(le)},null,8,["src","fallback-src"]),s("b",dn,n(a.value),1),s("div",fn,[s("div",pn,n(e(t)("usercenter.myUsageRecord")),1),s("div",mn,[s("span",vn,n(c.value),1),s("div",yn,n(m.value.useModel3Count||"0")+" "+n(e(t)("usercenter.points")),1)]),s("div",hn,[s("span",gn,n(e(p)),1),s("div",_n,n(m.value.useModel4Count||"0")+" "+n(e(t)("usercenter.points")),1)]),f.value&&r.value?(A(),B("div",bn,[s("span",xn,n(e(t)("usercenter.bindWeChat")),1),s("div",wn,[T.value?(A(),B("span",Cn,n(e(t)("usercenter.weChatBound")),1)):(A(),R(e(D),{key:0,text:"",onClick:L[0]||(L[0]=N=>e(S).updateBindwxDialog(!0))},{default:o(()=>[j(n(e(t)("usercenter.clickToBindWeChat")),1)]),_:1}))])])):z("",!0),$.value>0?(A(),B("div",kn,[s("span",Sn,n(e(t)("usercenter.clickToBindWeChat")),1),s("div",$n,[u(e(D),{text:"",onClick:H},{default:o(()=>[j(n(e(t)("usercenter.syncVisitorData")),1)]),_:1})])])):z("",!0)])]),m.value.expirationTime?(A(),B("div",Tn,[s("span",null,n(e(t)("usercenter.membershipExpiration")),1),s("span",null,n(m.value.expirationTime),1)])):z("",!0)]),_:1})),s("div",{class:pe(["flex flex-col",[e(F)?"w-full":"flex-1"]]),style:Ue({padding:e(F)?"10px":"0 28px 0 28px"})},[u(e(je),{title:e(t)("usercenter.personalCenter"),des:e(t)("usercenter.editInfoDescription"),padding:(e(F),1)},null,8,["title","des","padding"]),u(e(Ye),{type:"line",animated:"",class:"mt-5 flex-1"},{default:o(()=>[e(P)?(A(),R(e(Z),{key:0,name:"detail",tab:e(t)("usercenter.myDetails")},{default:o(()=>[u(_t)]),_:1},8,["tab"])):z("",!0),u(e(Z),{name:"account",tab:e(t)("usercenter.myWallet")},{default:o(()=>[u(ln)]),_:1},8,["tab"]),u(e(Z),{name:"baseInfo",tab:e(t)("usercenter.basicInfo")},{default:o(()=>[u(e(Y),null,{header:o(()=>[h.value||!x.value?(A(),R(e(ie),{key:0,size:"medium",width:"20%"})):(A(),B("div",Pn,n(e(t)("usercenter.userBasicSettings")),1))]),default:o(()=>[h.value||!x.value?(A(),R(e(ve),{key:0,vertical:""},{default:o(()=>[u(e(ie),{height:"40px",size:"medium"}),u(e(ie),{height:"40px",size:"medium"}),u(e(ie),{height:"80px",size:"medium"})]),_:1})):(A(),R(e(ee),{key:1,"x-gap":"12",cols:1},{default:o(()=>[u(e(V),null,{default:o(()=>[s("div",An,[s("span",Mn,n(E.$t("setting.avatarLink")),1),s("div",Nn,[u(e(te),{value:y.value,"onUpdate:value":L[1]||(L[1]=N=>y.value=N),placeholder:e(t)("usercenter.avatarPlaceholder")},null,8,["value","placeholder"])]),u(e(D),{size:"tiny",text:"",type:"primary",onClick:L[2]||(L[2]=N=>q({avatar:y.value}))},{default:o(()=>[j(n(E.$t("common.update")),1)]),_:1})]),s("div",En,[s("span",In,n(E.$t("setting.name")),1),s("div",Ln,[u(e(te),{value:a.value,"onUpdate:value":L[3]||(L[3]=N=>a.value=N),placeholder:e(t)("usercenter.usernamePlaceholder"),maxlength:"12","show-count":"",clearable:""},null,8,["value","placeholder"])]),u(e(D),{size:"tiny",text:"",type:"primary",onClick:L[4]||(L[4]=N=>q({username:a.value}))},{default:o(()=>[j(n(E.$t("common.update")),1)]),_:1})])]),_:1})]),_:1}))]),_:1})]),_:1},8,["tab"]),u(e(Z),{name:"password",tab:e(t)("usercenter.passwordManagement")},{default:o(()=>[u(Rt)]),_:1},8,["tab"]),u(e(Z),{name:"invite",tab:e(t)("usercenter.inviteBenefits")},{default:o(()=>[u(Tt)]),_:1},8,["tab"])]),_:1})],6)]),_:1}))}});export{Gn as default};