import{d as f,o as h,c as w,a as e,r as t,b as y,e as b,f as r,u as n,w as L,g as M,N,h as j,i as B}from"./index-f389b6b2.js";import{_ as I}from"./index.vue_vue_type_style_index_0_lang-2ace27b7.js";import"./index-c94da121.js";const $={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},z=e("path",{d:"M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),C=[z],W=f({name:"FlashOutline",render:function(a,u){return h(),w("svg",$,C)}}),D={class:"bg-[#fff] h-[100vh] overflow-hidden p-4 pr-0 dark:bg-[#18181c] flex flex-col"},F={class:"p-4 flex pr-6 justify-between items-center"},O=e("div",{class:"font-bold text-xl"},"AI绘画广场",-1),R={class:"w-[200px] sm:w-[300px] flex justify-between"},U=e("span",{class:"hidden sm:block"},"尺寸调整",-1),V={class:"flex-1 ml-5"},q={class:"px-4 mb-1 pr-5"},A={class:"market overflow-y-scroll flex-1 min-h-screen p-4 dark:bg-[#18181c] relative"},P=f({__name:"index",setup(m){const a=t([]),u=t(null),i=t(50),l=t(""),c=t(1),p=t(20),v=t(!1),x=t(!0),g=y(()=>l.value?a.value.filter(o=>{const{prompt:s}=o;return s.includes(l.value)}):a.value);async function _(){v.value=!0;const o=await M({page:c.value,size:p.value,rec:1});v.value=!1,x.value=p.value===o.data.rows.length,a.value=[...a.value,...o.data.rows]}b(async()=>{await _()});function k(){c.value=c.value+1,_()}return(o,s)=>(h(),w("div",D,[e("div",F,[O,e("div",R,[U,e("div",V,[r(n(N),{value:i.value,"onUpdate:value":s[0]||(s[0]=d=>i.value=d),step:10},null,8,["value"])])])]),e("div",q,[r(n(B),{value:l.value,"onUpdate:value":s[1]||(s[1]=d=>l.value=d),placeholder:"prompt关键词搜索"},{prefix:L(()=>[r(n(j),{component:n(W)},null,8,["component"])]),_:1},8,["value"])]),e("div",A,[e("div",{id:"wapper",ref_key:"wapperRef",ref:u,class:"wapper"},[r(I,{onLoadMore:k,copyPropmpt:"",isDrawLike:"",dataList:n(g),scaleWidth:i.value},null,8,["dataList","scaleWidth"])],512)])]))}});export{P as default};