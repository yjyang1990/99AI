
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{r as V,p as i,d as x,cs as D,$ as M,co as P,a as U,Z as A,a4 as y,cm as K,cB as L,cl as O,cp as q,cq as z,F,ct as h,av as H,aw as R,g,z as k,w as G,e as w,A as Q,Q as I,i as Z,j as J}from"./index-DEc4xym2.js";import{s as W}from"./use-resolve-button-type-Cmxb6e8K.js";function X(a,l,t){let o=V(t==null?void 0:t.value),n=i(()=>a.value!==void 0);return[i(()=>n.value?a.value:o.value),function(s){return n.value||(o.value=s),l==null?void 0:l(s)}]}function Y(a){var l,t;let o=(l=a==null?void 0:a.form)!=null?l:a.closest("form");if(o){for(let n of o.elements)if(n!==a&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(t=o.requestSubmit)==null||t.call(o)}}let ee=Symbol("GroupContext"),ae=x({name:"Switch",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(a,{emit:l,attrs:t,slots:o,expose:n}){var s;let C=(s=a.id)!=null?s:`headlessui-switch-${D()}`,r=M(ee,null),[d,m]=X(i(()=>a.modelValue),e=>l("update:modelValue",e),i(()=>a.defaultChecked));function p(){m(!d.value)}let $=V(null),c=r===null?$:r.switchRef,B=W(i(()=>({as:a.as,type:t.type})),c);n({el:c,$el:c});function S(e){e.preventDefault(),p()}function N(e){e.key===h.Space?(e.preventDefault(),p()):e.key===h.Enter&&Y(e.currentTarget)}function T(e){e.preventDefault()}let f=i(()=>{var e,u;return(u=(e=P(c))==null?void 0:e.closest)==null?void 0:u.call(e,"form")});return U(()=>{A([f],()=>{if(!f.value||a.defaultChecked===void 0)return;function e(){m(a.defaultChecked)}return f.value.addEventListener("reset",e),()=>{var u;(u=f.value)==null||u.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{name:e,value:u,form:_,tabIndex:v,...b}=a,E={checked:d.value},j={id:C,ref:c,role:"switch",type:B.value,tabIndex:v===-1?0:v,"aria-checked":d.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:S,onKeyup:N,onKeypress:T};return y(F,[e!=null&&d.value!=null?y(K,L({features:O.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:d.value,form:_,disabled:b.disabled,name:e,value:u})):null,q({ourProps:j,theirProps:{...t,...z(b,["modelValue","defaultChecked"])},slot:E,attrs:t,slots:o,name:"Switch"})])}}});const le={class:"absolute inset-0 h-full w-full flex items-center justify-center"},oe=x({__name:"HToggle",props:H({disabled:{type:Boolean,default:!1},onIcon:{},offIcon:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=R(a,"modelValue");return(t,o)=>{const n=J;return g(),k(Z(ae),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),disabled:t.disabled,class:I(["relative h-5 w-10 inline-flex flex-shrink-0 cursor-pointer border-2 border-transparent rounded-full p-0 vertical-middle disabled-cursor-not-allowed disabled-opacity-50 focus-outline-none focus-visible-ring-2 focus-visible-ring-offset-2 focus-visible-ring-offset-white dark-focus-visible-ring-offset-gray-900",[l.value?"bg-ui-primary":"bg-stone-3 dark-bg-stone-7"]])},{default:G(()=>[w("span",{class:I(["pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark-bg-dark",[l.value?"translate-x-5":"translate-x-0"]])},[w("span",le,[l.value&&t.onIcon||!l.value&&t.offIcon?(g(),k(n,{key:0,name:l.value?t.onIcon:t.offIcon,class:"h-3 w-3 text-stone-7 dark-text-stone-3"},null,8,["name"])):Q("",!0)])],2)]),_:1},8,["modelValue","disabled","class"])}}});export{oe as _};