(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Aqzh:function(n,l,e){n.exports=function(){"use strict";var n=function(n){return function(n){return!!n&&"object"==typeof n}(n)&&!function(n){var e=Object.prototype.toString.call(n);return"[object RegExp]"===e||"[object Date]"===e||function(n){return n.$$typeof===l}(n)}(n)},l="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function e(n,l){return!1!==l.clone&&l.isMergeableObject(n)?r(Array.isArray(n)?[]:{},n,l):n}function t(n,l,t){return n.concat(l).map(function(n){return e(n,t)})}function u(n){return Object.keys(n).concat(function(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(l){return n.propertyIsEnumerable(l)}):[]}(n))}function r(l,o,c){(c=c||{}).arrayMerge=c.arrayMerge||t,c.isMergeableObject=c.isMergeableObject||n;var i=Array.isArray(o);return i===Array.isArray(l)?i?c.arrayMerge(l,o,c):function(n,l,t){var o={};return t.isMergeableObject(n)&&u(n).forEach(function(l){o[l]=e(n[l],t)}),u(l).forEach(function(u){o[u]=t.isMergeableObject(l[u])&&n[u]?function(n,l){if(!l.customMerge)return r;var e=l.customMerge(n);return"function"==typeof e?e:r}(u,t)(n[u],l[u],t):e(l[u],t)}),o}(l,o,c):e(o,c)}return r.all=function(n,l){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(n,e){return r(n,e,l)},{})},r}()},L6id:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var r=e("pMnS"),o=e("SVse");class c{}var i=t.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin-bottom:20px;clear:both}li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{line-height:150%}ul[_ngcontent-%COMP%]{list-style-type:disc}.date[_ngcontent-%COMP%]{float:right;margin:10px}.date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px 0;width:80px;text-align:center}.date[_ngcontent-%COMP%]   div.top[_ngcontent-%COMP%]{background:#9be1fb}.date[_ngcontent-%COMP%]   div.bottom[_ngcontent-%COMP%]{background:#c5effd}@media print{.date[_ngcontent-%COMP%]   div.bottom[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]   div.top[_ngcontent-%COMP%]{border:1px solid #ccc}.date[_ngcontent-%COMP%]   div.top[_ngcontent-%COMP%]{border-bottom:none}li[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{line-height:130%}}"]],data:{}});function a(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Bb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.place.company)})}function s(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Bb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function p(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,6,"div",[["class","date"]],null,null,null,null,null)),(n()(),t.nb(1,0,null,null,2,"div",[["class","top"]],null,null,null,null,null)),(n()(),t.nb(2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Bb(3,null,["",""])),(n()(),t.nb(4,0,null,null,2,"div",[["class","bottom"]],null,null,null,null,null)),(n()(),t.nb(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Bb(6,null,["",""])),(n()(),t.nb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Bb(8,null,["",""])),(n()(),t.cb(16777216,null,null,1,null,a)),t.mb(10,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.nb(11,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),t.Bb(12,null,["",""])),(n()(),t.nb(13,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t.cb(16777216,null,null,1,null,s)),t.mb(15,278528,null,0,o.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,10,0,!(null==e.place||!e.place.company)),n(l,15,0,null==e.place?null:e.place.duties)},function(n,l){var e=l.component;n(l,3,0,(null==e.place?null:e.place.to_date)||"current"),n(l,6,0,null==e.place?null:e.place.from_date),n(l,8,0,null==e.place?null:e.place.role),n(l,12,0,null==e.place?null:e.place.location)})}var d=e("iInd"),b=e("zmaJ"),f=e("gN6Z"),g=e("DQLy"),y=e("U/X8"),h=function(n){return n.experience="experience",n.skills="skills",n}({});const v="[Home] Load Data",m="[Home] Load Data Success",O="[Home] Load Data Fail";class x{constructor(n){this.payload=n,this.type=v}}class M{constructor(n){this.payload=n,this.type=m}}class k{constructor(n){this.payload=n,this.type=O}}const j={experience:[],skills:null,loading:[],loaded:[]};function C(n=j,l){switch(l.type){case v:return Object.assign({},n,{loading:[...n.loading,l.payload]});case m:return Object.assign({},n,{[l.payload.type]:l.payload.data,loaded:[...n.loaded,l.payload.type],loading:n.loading.filter(n=>n!==l.payload.type)});case O:return Object.assign({},n,{loaded:[...n.loaded,l.payload],loading:n.loading.filter(n=>n!==l.payload)});default:return n}}const w=Object(g.v)("home");function P(n){const l={keys:[{home:[h.experience,h.skills,"loaded","loading"]}],rehydrate:!0,removeOnUndefined:!0};return Object(y.localStorageSync)(l)(n)}const _=Object(g.x)(w,n=>n?n.home:null),S=Object(g.x)(_,n=>n.experience),D=Object(g.x)(_,({skills:n})=>n),E=Object(g.x)(_,({loading:n,loaded:l})=>n.includes(h.experience)||!l.includes(h.experience)),F=Object(g.x)(_,({loading:n,loaded:l})=>n.includes(h.skills)||!l.includes(h.skills));var z=e("Yml6"),I=e("Cfvw"),J=e("lJxs"),B=e("5+tZ"),A=e("JIr8");const L=(()=>{class n{constructor(n,l){this.actionStream=n,this.homeService=l,this.loadData=this.actionStream.pipe(Object(z.d)(v),Object(J.a)(n=>n.payload),Object(B.a)(n=>this.homeService.getData(n).pipe(Object(J.a)(l=>new M({type:n,data:l})),Object(A.a)(l=>Object(I.a)([new k(n)])))))}}return function(n,l,e,t){var u,r=arguments.length,o=r<3?l:null===t?t=Object.getOwnPropertyDescriptor(l,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,l,e,t);else for(var c=n.length-1;c>=0;c--)(u=n[c])&&(o=(r<3?u(o):r>3?u(l,e,o):u(l,e))||o);r>3&&o&&Object.defineProperty(l,e,o)}([Object(z.b)()],n.prototype,"loadData",void 0),n})();class H{constructor(n){this.store=n,this.experienceStream=this.store.pipe(Object(g.y)(S)),this.skillsStream=this.store.pipe(Object(g.y)(D)),this.experienceLoadingStream=this.store.pipe(Object(g.y)(E)),this.skillsLoadingStream=this.store.pipe(Object(g.y)(F)),this.disableReorder=(()=>0),this.store.dispatch(new x(h.experience)),this.store.dispatch(new x(h.skills))}}var R=t.lb({encapsulation:0,styles:[['@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column}header[_ngcontent-%COMP%]{display:flex;padding:10px;align-items:center}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-right:auto}@media (max-width:600px){header[_ngcontent-%COMP%]{flex-direction:column-reverse}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.print[_ngcontent-%COMP%]{display:none}}@media print and (max-width:600px){header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}}.portfolio[_ngcontent-%COMP%]{margin-left:10px;text-transform:uppercase;letter-spacing:.1em;font-size:1.1em;text-shadow:.5px .1px 0 #006295}.print[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:20px;padding:0;background:0 0;border:none;cursor:pointer;outline:0}.print[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%]{fill:#231f20}.print[_ngcontent-%COMP%]:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.content[_ngcontent-%COMP%]{display:flex}aside[_ngcontent-%COMP%]{width:200px}@media print,(max-width:1000px){.content[_ngcontent-%COMP%]{flex-direction:column}aside[_ngcontent-%COMP%]{width:auto;margin-top:10px}}main[_ngcontent-%COMP%]{flex:1}.skillset[_ngcontent-%COMP%]{margin-bottom:10px}.skill[_ngcontent-%COMP%]{line-height:1.2em;font-size:.85em}@media print,(max-width:1000px){.skill[_ngcontent-%COMP%]{display:inline-block;font-size:1em}.skill[_ngcontent-%COMP%]:not(:last-child):after{content:",\xa0"}}.heading[_ngcontent-%COMP%]{display:flex;align-items:center;margin:-10px -10px .5em;padding:10px;border-bottom:1px solid #f2f2e9}h2[_ngcontent-%COMP%]{text-shadow:none;margin:0}.total[_ngcontent-%COMP%]{margin-left:auto;margin-right:10px;width:80px;text-align:center}']],data:{}});function N(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,[" loading experience... "]))],null,null)}function U(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"app-place",[["class","no-pagebreak"]],null,null,null,p,i)),t.mb(1,49152,null,0,c,[],{place:[0,"place"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function K(n){return t.Db(0,[(n()(),t.cb(16777216,null,null,2,null,U)),t.mb(1,278528,null,0,o.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.yb(131072,o.b,[t.h]),(n()(),t.cb(0,null,null,0))],function(n,l){var e=l.component;n(l,1,0,t.Cb(l,1,0,t.xb(l,2).transform(e.experienceStream)))},null)}function q(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,[" loading skills... "]))],null,null)}function $(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"div",[["class","skill"]],null,null,null,null,null)),(n()(),t.Bb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function V(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,4,"div",[["class","skillset"]],null,null,null,null,null)),(n()(),t.nb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Bb(2,null,["",""])),(n()(),t.cb(16777216,null,null,1,null,$)),t.mb(4,278528,null,0,o.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,4,0,l.context.$implicit.value)},function(n,l){n(l,2,0,l.context.$implicit.key)})}function T(n){return t.Db(0,[(n()(),t.cb(16777216,null,null,3,null,V)),t.mb(1,278528,null,0,o.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.yb(131072,o.b,[t.h]),t.yb(0,o.f,[t.r]),(n()(),t.cb(0,null,null,0))],function(n,l){var e=l.component;n(l,1,0,t.Cb(l,1,0,t.xb(l,3).transform(t.Cb(l,1,0,t.xb(l,2).transform(e.skillsStream)),e.disableReorder)))},null)}function Y(n){return t.Db(2,[(n()(),t.nb(0,0,null,null,15,"header",[["class","header"]],null,null,null,null,null)),(n()(),t.nb(1,0,null,null,1,"h1",[["itemprop","jobTitle"]],null,null,null,null,null)),(n()(),t.Bb(-1,null,["Frontend developer"])),(n()(),t.nb(3,0,null,null,2,"a",[["class","portfolio not4print"],["routerLink","/portfolio"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.xb(n,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.mb(4,671744,null,0,d.p,[d.o,d.a,o.i],{routerLink:[0,"routerLink"]},null),(n()(),t.Bb(-1,null,["portfolio"])),(n()(),t.nb(6,0,null,null,9,"a",[["class","print not4print"],["href","assets/Nik_Datsko.pdf"],["target","_blank"],["title","PDF"]],null,null,null,null,null)),(n()(),t.nb(7,0,null,null,8,":svg:svg",[[":xml:space","preserve"],[":xmlns:xlink","https://www.w3.org/1999/xlink"],["height","30"],["viewBox","0 0 512 512"],["width","30"],["xmlns","https://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),t.nb(8,0,null,null,0,":svg:path",[["d","M246.8,44.8L224.5,6H113.4v38.8H77v354.3L184.6,506H435V44.8H246.8z M128.6,140.5c3.3-4.3,9-4.7,12.7-0.9l17.9,18.2V75.2   c0-5.7,4-10.4,9-10.4s9,4.6,9,10.4v82.6l17.9-18.2c3.7-3.8,9.4-3.4,12.7,0.9c3.3,4.3,3,10.8-0.8,14.6l-32.8,33.4c0,0,0,0,0,0   l-0.1,0.1c-0.2,0.2-0.4,0.4-0.7,0.6c-0.1,0.1-0.2,0.1-0.2,0.2c-0.2,0.1-0.3,0.3-0.5,0.4c-0.1,0.1-0.2,0.1-0.3,0.2   c-0.2,0.1-0.3,0.2-0.5,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.2,0.1-0.4,0.2-0.5,0.2c-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.4,0.1-0.6,0.2   c-0.1,0-0.2,0.1-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.2,0-0.2,0c-0.3,0-0.6,0.1-0.9,0.1c0,0,0,0,0,0s0,0,0,0   c-0.3,0-0.6,0-0.9-0.1c-0.1,0-0.2,0-0.2,0c-0.2,0-0.4-0.1-0.6-0.1c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.2   c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.5-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.2-0.1-0.3-0.2   c-0.2-0.1-0.4-0.3-0.5-0.4c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.2-0.5-0.4-0.7-0.6l-0.1-0.1c0,0,0,0,0,0l-32.8-33.4   C125.6,151.3,125.3,144.8,128.6,140.5z M415.9,486.9H193.6v-97.1H96.1V63.9h17.3v121.5l55.5,50.3l55.5-50.3V63.9h191.4V486.9z"],["fill","#231F20"]],null,null,null,null,null)),(n()(),t.nb(9,0,null,null,0,":svg:rect",[["fill","#908E8F"],["height","21.3"],["width","132.6"],["x","256"],["y","114.5"]],null,null,null,null,null)),(n()(),t.nb(10,0,null,null,0,":svg:rect",[["fill","#908E8F"],["height","21.3"],["width","132.6"],["x","256"],["y","187.1"]],null,null,null,null,null)),(n()(),t.nb(11,0,null,null,0,":svg:rect",[["fill","#908E8F"],["height","21.3"],["width","267"],["x","121.6"],["y","332.4"]],null,null,null,null,null)),(n()(),t.nb(12,0,null,null,0,":svg:rect",[["fill","#908E8F"],["height","21.3"],["width","267"],["x","121.6"],["y","259.7"]],null,null,null,null,null)),(n()(),t.nb(13,0,null,null,0,":svg:path",[["d","M254.9,394.6h-22.4v58.5h9.8v-22.2h12.7c6.5,0,11.5-1.7,15.2-5c3.7-3.3,5.5-7.7,5.5-13.2c0-5.4-1.8-9.8-5.5-13.2   C266.4,396.2,261.4,394.6,254.9,394.6z M263.1,420.2c-1.8,1.9-4.5,2.9-8.2,2.9h-12.7v-20.7h12.7c3.6,0,6.3,1,8.2,3   c1.8,2,2.7,4.5,2.7,7.4C265.8,415.8,264.9,418.2,263.1,420.2z"],["fill","#231F20"]],null,null,null,null,null)),(n()(),t.nb(14,0,null,null,0,":svg:path",[["d","M306.7,394.6h-19.3v58.5h19.3c7.4,0,13.5-2.3,18.1-6.9c4.6-4.6,7-10.6,7-17.9v-8.9c0-7.3-2.3-13.3-7-17.9   C320.2,396.9,314.1,394.6,306.7,394.6z M322,428.3c0,5-1.4,9.1-4.1,12.2c-2.8,3.2-6.5,4.8-11.2,4.8h-9.6v-42.9h9.6   c4.7,0,8.4,1.6,11.2,4.8c2.8,3.2,4.1,7.2,4.1,12.2V428.3z"],["fill","#231F20"]],null,null,null,null,null)),(n()(),t.nb(15,0,null,null,0,":svg:polygon",[["fill","#231F20"],["points","345,453.1 354.8,453.1 354.8,428.1 378.4,428.1 378.4,420.3 354.8,420.3 354.8,402.4 382.5,402.4 382.5,394.6    345,394.6  "]],null,null,null,null,null)),(n()(),t.nb(16,0,null,null,24,"div",[["class","content"]],null,null,null,null,null)),(n()(),t.nb(17,0,null,null,12,"main",[],null,null,null,null,null)),(n()(),t.nb(18,0,null,null,11,"app-section",[["className","top_section"]],null,null,null,b.b,b.a)),t.mb(19,49152,null,0,f.a,[],{className:[0,"className"]},null),(n()(),t.nb(20,0,null,0,9,null,null,null,null,null,null,null)),(n()(),t.nb(21,0,null,null,4,"div",[["class","heading"]],null,null,null,null,null)),(n()(),t.nb(22,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["Experience"])),(n()(),t.nb(24,0,null,null,1,"span",[["class","total"]],null,null,null,null,null)),(n()(),t.Bb(-1,null,[" > 10 years"])),(n()(),t.cb(16777216,null,null,2,null,N)),t.mb(27,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.yb(131072,o.b,[t.h]),(n()(),t.cb(0,[["experienceBlock",2]],null,0,null,K)),(n()(),t.nb(30,0,null,null,10,"aside",[],null,null,null,null,null)),(n()(),t.nb(31,0,null,null,9,"app-section",[],null,null,null,b.b,b.a)),t.mb(32,49152,null,0,f.a,[],null,null),(n()(),t.nb(33,0,null,0,7,null,null,null,null,null,null,null)),(n()(),t.nb(34,0,null,null,2,"div",[["class","heading page-break"]],null,null,null,null,null)),(n()(),t.nb(35,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["Skills"])),(n()(),t.cb(16777216,null,null,2,null,q)),t.mb(38,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.yb(131072,o.b,[t.h]),(n()(),t.cb(0,[["skillsBlock",2]],null,0,null,T))],function(n,l){var e=l.component;n(l,4,0,"/portfolio"),n(l,19,0,"top_section"),n(l,27,0,t.Cb(l,27,0,t.xb(l,28).transform(e.experienceLoadingStream)),t.xb(l,29)),n(l,38,0,t.Cb(l,38,0,t.xb(l,39).transform(e.skillsLoadingStream)),t.xb(l,40))},function(n,l){n(l,3,0,t.xb(l,4).target,t.xb(l,4).href)})}function X(n){return t.Db(0,[(n()(),t.nb(0,0,null,null,1,"app-home",[],null,null,null,Y,R)),t.mb(1,49152,null,0,H,[g.n],null,null)],null,null)}var Q=t.jb("app-home",H,X,{},{},[]);class Z{}var W=e("PCNd"),G=e("IheW");const nn=(()=>{class n{constructor(n){this.http=n}getData(n){return this.http.get(`/assets/data/${n}.json`)}}return n.ngInjectableDef=t.Fb({factory:function(){return new n(t.Jb(G.c))},token:n,providedIn:"root"}),n})();e.d(l,"HomeModuleNgFactory",function(){return ln});var ln=t.kb(u,[],function(n){return t.ub([t.vb(512,t.j,t.X,[[8,[r.a,Q]],[3,t.j],t.v]),t.vb(4608,o.m,o.l,[t.s,[2,o.s]]),t.vb(1073742336,o.c,o.c,[]),t.vb(1073742336,d.q,d.q,[[2,d.w],[2,d.o]]),t.vb(1073742336,Z,Z,[]),t.vb(1073742336,W.a,W.a,[]),t.vb(1024,g.I,function(){return[{metaReducers:[P]}]},[]),t.vb(1024,g.j,function(){return[{key:"home",reducerFactory:g.s,metaReducers:[P],initialState:void 0}]},[]),t.vb(1024,g.J,g.P,[t.p,g.I,g.j]),t.vb(1024,g.H,function(){return[{home:C}]},[]),t.vb(1024,g.K,function(n){return[n]},[g.H]),t.vb(1024,g.b,function(n,l,e){return[g.Q(n,l,e)]},[t.p,g.H,g.K]),t.vb(1073873408,g.o,g.o,[g.J,g.b,g.g,g.p]),t.vb(512,L,L,[z.a,nn]),t.vb(1024,z.k,function(n){return[z.e(n)]},[L]),t.vb(1073742336,z.h,z.h,[z.g,z.k,[2,g.p],[2,g.o]]),t.vb(1073742336,u,u,[]),t.vb(1024,d.m,function(){return[[{path:"",component:H}]]},[])])})},"U/X8":function(n,l,e){"use strict";var t=this&&this.__assign||Object.assign||function(n){for(var l,e=1,t=arguments.length;e<t;e++)for(var u in l=arguments[e])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n},u=this;Object.defineProperty(l,"__esModule",{value:!0});var r=e("Aqzh"),o=/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;l.dateReviver=function(n,l){return"string"==typeof l&&o.test(l)?new Date(l):l};var c=function(n,l){return l};l.rehydrateApplicationState=function(n,e,t,u){return n.reduce(function(n,r){var o,i=r,a=u?l.dateReviver:c,s=void 0,p=void 0;if("object"==typeof i&&("function"==typeof r[i=Object.keys(i)[0]]?a=r[i]:(r[i].reviver&&(a=r[i].reviver),r[i].deserialize&&(s=r[i].deserialize)),r[i].encrypt&&r[i].decrypt?"function"==typeof r[i].encrypt&&"function"==typeof r[i].decrypt?p=r[i].decrypt:console.error("Either encrypt or decrypt is not a function on '"+r[i]+"' key object."):(r[i].encrypt||r[i].decrypt)&&console.error("Either encrypt or decrypt function is not present on '"+r[i]+"' key object.")),void 0!==e){var d=e.getItem(t(i));if(d){p&&(d=p(d));var b=new RegExp("{|\\["),f=d;return("null"===d||b.test(d.charAt(0)))&&(f=JSON.parse(d,a)),Object.assign({},n,((o={})[i]=s?s(f):f,o))}}return n},{})},l.syncStateUpdate=function(n,l,e,t,u,r){if(r)try{if(!0!==r(n))return}catch(o){if(o instanceof TypeError)return;throw o}l.forEach(function(l){var r=n[l],c=void 0,i=void 0,a=void 0;if("object"==typeof l){var s=Object.keys(l)[0];if(void 0!==(r=n[s])&&l[s]){if(l[s].serialize)r=l[s].serialize(r);else{var p=void 0;l[s].reduce?p=l[s]:l[s].filter&&(p=l[s].filter),p&&(r=p.reduce(function(n,l){return n[l]=r[l],n},{})),l[s].encrypt&&l[s].decrypt?"function"==typeof l[s].encrypt&&(a=l[s].encrypt):(l[s].encrypt||l[s].decrypt)&&console.error("Either encrypt or decrypt function is not present on '"+l[s]+"' key object.")}c=l[s].replacer,i=l[s].space}l=s}if(void 0!==r&&void 0!==e)try{a&&(r=a("string"==typeof r?r:JSON.stringify(r,c,i))),e.setItem(t(l),"string"==typeof r?r:JSON.stringify(r,c,i))}catch(o){console.warn("Unable to save state to localStorage:",o)}else if(void 0===r&&u)try{e.removeItem(t(l))}catch(o){console.warn("Exception on removing/cleaning undefined '"+l+"' state",o)}})},l.localStorageSync=function(n){return function(e){(void 0===n.storage&&!n.checkStorageAvailability||n.checkStorageAvailability&&"undefined"!=typeof window)&&(n.storage=localStorage||window.localStorage),void 0===n.storageKeySerializer&&(n.storageKeySerializer=function(n){return n}),void 0===n.restoreDates&&(n.restoreDates=!0);var u=n.keys.map(function(n){var l=n;if("object"==typeof n&&(l=Object.keys(n)[0]),"string"!=typeof l)throw new TypeError("localStorageSync Unknown Parameter Type: Expected type of string, got "+typeof l);return n}),o=n.rehydrate?l.rehydrateApplicationState(u,n.storage,n.storageKeySerializer,n.restoreDates):void 0;return function(c,i){var a;return a="@ngrx/store/init"!==i.type||c?t({},c):e(c,i),"@ngrx/store/init"!==i.type&&"@ngrx/store/update-reducers"!==i.type||!o||(a=r(a,o,{arrayMerge:function(n,l,e){return l}})),a=e(a,i),"@ngrx/store/init"!==i.type&&l.syncStateUpdate(a,u,n.storage,n.storageKeySerializer,n.removeOnUndefined,n.syncCondition),a}}},l.localStorageSyncAndClean=function(n,l,e){return void 0===l&&(l=!1),void 0===e&&(e=!1),function(t){var r={keys:n,rehydrate:l,storage:localStorage,removeOnUndefined:e};return u.localStorageSync(r)}}}}]);