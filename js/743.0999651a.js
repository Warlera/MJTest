"use strict";(self["webpackChunkmjadmin"]=self["webpackChunkmjadmin"]||[]).push([[743],{1743:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var i=t(3396),l=t(7139),n=t(3369),s=t(6824),r=t(8521),o=t(6556),u=t(4413);const v=(0,i._)("h1",null,"Журнал транзакций",-1),c=["onClick"];function d(e,a,t,d,p,f){return(0,i.wg)(),(0,i.j4)(n.K,null,{default:(0,i.w5)((()=>[v,(0,i.Wm)(u.Y,{density:"compact"},{default:(0,i.w5)((()=>[(0,i._)("thead",null,[(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.TableHead,(e=>((0,i.wg)(),(0,i.iD)("th",{key:e,class:"text-left"},(0,l.zw)(e),1)))),128))])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.services.slice((this.page-1)*this.Pagination,this.page*this.Pagination),(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e,onClick:a=>f.modalStart(e),class:"table"},[(0,i._)("td",null,(0,l.zw)(e.titel),1),(0,i._)("td",null,(0,l.zw)(e.alres),1),(0,i._)("td",null,(0,l.zw)(e.phoneNumb),1),(0,i._)("td",null,(0,l.zw)(e.subscription),1),(0,i._)("td",null,(0,l.zw)(e.subscriptionStatus),1)],8,c)))),128))])])),_:1}),(0,i.Wm)(s.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r.D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(o.k,{"total-visible":p.Pagination,modelValue:p.page,"onUpdate:modelValue":a[0]||(a[0]=e=>p.page=e),length:Math.ceil(p.services.length/p.Pagination)},null,8,["total-visible","modelValue","length"])])),_:1})])),_:1})])),_:1})}t(7658);var p={data(){return{modal:!1,OrgModal:!1,modalInput:[],checkboxSubscriptionStatus:void 0,page:1,Pagination:8,filter:"",TableHead:["Плательщик","Услуга","Сумма оплаты","Дата оплаты","Срок действия услуги"],services:[]}},methods:{BtnPlus(){this.Pagination=this.Pagination+2},modalStart(e){this.modal=!0,this.modalInput=e,console.log(this.modalInput)},filteredList(){return void 0!=this.checkboxSubscriptionStatus?this.org.filter((e=>(e.titel.toLowerCase().includes(this.filter.toLowerCase())||e.alres.toLowerCase().includes(this.filter.toLowerCase())||e.phoneNumb.toLowerCase().includes(this.filter.toLowerCase())||e.email.toLowerCase().includes(this.filter.toLowerCase()))&&e.subscriptionStatus.includes(this.checkboxSubscriptionStatus))):this.org.filter((e=>e.titel.toLowerCase().includes(this.filter.toLowerCase())||e.surname.toLowerCase().includes(this.filter.toLowerCase())||e.nickname.toLowerCase().includes(this.filter.toLowerCase())||e.email.toLowerCase().includes(this.filter.toLowerCase())))}},async mounted(){const e=await fetch("https://jsonplaceholder.typicode.com/users"),a=await e.json();console.log(a);for(let t=0;t<a.length;t++){const e={titel:"Организаторы/заведения",alres:"Подписка,  за размещение мероприятия, баннеры, закрепы",phoneNumb:"Сумма оплаты",subscription:"Дата оплаты",subscriptionStatus:"Срок действия"};this.services.push(e),this.services.push(e)}}},f=t(89);const g=(0,f.Z)(p,[["render",d]]);var b=g},6556:function(e,a,t){t.d(a,{k:function(){return P}});var i=t(3396),l=t(870),n=t(8157),s=t(2718),r=t(9166),o=t(6107),u=t(9694),v=t(2465),c=t(4960),d=t(1629),p=t(8717),f=t(4870);function g(){const e=(0,f.iH)([]);function a(a,t){e.value[t]=a}return(0,i.Xn)((()=>e.value=[])),{refs:e,updateRef:a}}var b=t(3712),h=t(4231),m=t(9374),L=t(1138),y=t(7041),w=t(5221),_=t(3766),k=t(1107),C=t(131),x=t(9888);const S=(0,_.U)({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:c.lE,default:"$first"},prevIcon:{type:c.lE,default:"$prev"},nextIcon:{type:c.lE,default:"$next"},lastIcon:{type:c.lE,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...(0,s.m)(),...(0,r.l)(),...(0,u.f)(),...(0,v.c)(),...(0,h.I)(),...(0,m.Z)(),...(0,L.Q)({tag:"nav"}),...(0,y.x$)(),...(0,w.bk)({variant:"text"})},"VPagination"),P=(0,k.ev)()({name:"VPagination",props:S(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:t,emit:s}=a;const r=(0,p.z)(e,"modelValue"),{t:u,n:v}=(0,d.bU)(),{isRtl:c}=(0,d.Vw)(),{themeClasses:h}=(0,y.ER)(e),{width:m}=(0,n.AW)(),L=(0,f.XI)(-1);(0,o.AF)(void 0,{scoped:!0});const{resizeRef:w}=(0,b.y)((e=>{if(!e.length)return;const{target:a,contentRect:t}=e[0],i=a.querySelector(".v-pagination__list > *");if(!i)return;const l=t.width,n=i.offsetWidth+2*parseFloat(getComputedStyle(i).marginRight);L.value=P(l,n)})),_=(0,i.Fl)((()=>parseInt(e.length,10))),k=(0,i.Fl)((()=>parseInt(e.start,10))),S=(0,i.Fl)((()=>e.totalVisible?parseInt(e.totalVisible,10):L.value>=0?L.value:P(m.value,58)));function P(a,t){const i=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*i)/t).toFixed(2)))}const V=(0,i.Fl)((()=>{if(_.value<=0||isNaN(_.value)||_.value>Number.MAX_SAFE_INTEGER)return[];if(S.value<=1)return[r.value];if(_.value<=S.value)return(0,C.MT)(_.value,k.value);const a=S.value%2===0,t=a?S.value/2:Math.floor(S.value/2),i=a?t:t+1,l=_.value-t;if(i-r.value>=0)return[...(0,C.MT)(Math.max(1,S.value-1),k.value),e.ellipsis,_.value];if(r.value-l>=(a?1:0)){const a=S.value-1,t=_.value-a+k.value;return[k.value,e.ellipsis,...(0,C.MT)(a,t)]}{const a=Math.max(1,S.value-3),t=1===a?r.value:r.value-Math.ceil(a/2)+k.value;return[k.value,e.ellipsis,...(0,C.MT)(a,t),e.ellipsis,_.value]}}));function I(e,a,t){e.preventDefault(),r.value=a,t&&s(t,a)}const{refs:A,updateRef:W}=g();(0,o.AF)({VPaginationBtn:{color:(0,f.Vh)(e,"color"),border:(0,f.Vh)(e,"border"),density:(0,f.Vh)(e,"density"),size:(0,f.Vh)(e,"size"),variant:(0,f.Vh)(e,"variant"),rounded:(0,f.Vh)(e,"rounded"),elevation:(0,f.Vh)(e,"elevation")}});const F=(0,i.Fl)((()=>V.value.map(((a,t)=>{const i=e=>W(e,t);if("string"===typeof a)return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const t=a===r.value;return{isActive:t,key:a,page:v(a),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:t?e.activeColor:e.color,ariaCurrent:t,ariaLabel:u(t?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:e=>I(e,a)}}}})))),$=(0,i.Fl)((()=>{const a=!!e.disabled||r.value<=k.value,t=!!e.disabled||r.value>=k.value+_.value-1;return{first:e.showFirstLastPage?{icon:c.value?e.lastIcon:e.firstIcon,onClick:e=>I(e,k.value,"first"),disabled:a,ariaLabel:u(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:c.value?e.nextIcon:e.prevIcon,onClick:e=>I(e,r.value-1,"prev"),disabled:a,ariaLabel:u(e.previousAriaLabel),ariaDisabled:a},next:{icon:c.value?e.prevIcon:e.nextIcon,onClick:e=>I(e,r.value+1,"next"),disabled:t,ariaLabel:u(e.nextAriaLabel),ariaDisabled:t},last:e.showFirstLastPage?{icon:c.value?e.firstIcon:e.lastIcon,onClick:e=>I(e,k.value+_.value-1,"last"),disabled:t,ariaLabel:u(e.lastAriaLabel),ariaDisabled:t}:void 0}}));function M(){const e=r.value-k.value;A.value[e]?.$el.focus()}function T(a){a.key===C.ff.left&&!e.disabled&&r.value>+e.start?(r.value=r.value-1,(0,i.Y3)(M)):a.key===C.ff.right&&!e.disabled&&r.value<k.value+_.value-1&&(r.value=r.value+1,(0,i.Y3)(M))}return(0,x.L)((()=>(0,i.Wm)(e.tag,{ref:w,class:["v-pagination",h.value,e.class],style:e.style,role:"navigation","aria-label":u(e.ariaLabel),onKeydown:T,"data-test":"v-pagination-root"},{default:()=>[(0,i.Wm)("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&(0,i.Wm)("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first($.value.first):(0,i.Wm)(l.T,(0,i.dG)({_as:"VPaginationBtn"},$.value.first),null)]),(0,i.Wm)("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev($.value.prev):(0,i.Wm)(l.T,(0,i.dG)({_as:"VPaginationBtn"},$.value.prev),null)]),F.value.map(((e,a)=>(0,i.Wm)("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(e):(0,i.Wm)(l.T,(0,i.dG)({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),(0,i.Wm)("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next($.value.next):(0,i.Wm)(l.T,(0,i.dG)({_as:"VPaginationBtn"},$.value.next),null)]),e.showFirstLastPage&&(0,i.Wm)("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last($.value.last):(0,i.Wm)(l.T,(0,i.dG)({_as:"VPaginationBtn"},$.value.last),null)])])]}))),{}}})}}]);
//# sourceMappingURL=743.0999651a.js.map