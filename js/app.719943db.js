(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"0c4e":function(t,e,s){},"2e71":function(t,e,s){},"329d":function(t,e,s){"use strict";var a=s("2e71"),i=s.n(a);i.a},"35f1":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("contactList")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.items.length>0?s("div",{staticClass:"mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col row align-items-center justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"validate w-75",attrs:{placeholder:"Поиск",id:"first_name",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("button",{staticClass:"waves-effect waves-light btn-small ml-2",on:{click:t.search}},[t._v("Найти")])])]),s("div",{staticClass:"row justify-content-center"},[0==t.isPagination?s("button",{staticClass:"waves-effect waves-light btn-small",on:{click:t.clearSearch}},[t._v("Сбросить фильтр поиска")]):t._e()]),t.error?s("div",{staticClass:"mb-4"},[s("span",{staticClass:"error"},[t._v("Результатов не найдено")])]):t._e(),s("table",{staticClass:"table table-hover table-dark"},[s("thead",[s("tr",t._l(t.columns,(function(e,a){return s("th",{key:a,class:{active:t.sortKey==a},on:{click:function(e){return t.change(a)}}},[t._v(" "+t._s(e)+" "),s("span",{staticClass:"arrow",class:t.sortKey==a&&1==t.changeFlag?"asc":"dsc"})])})),0)]),s("contactListItems",{attrs:{items:t.displayedPosts},on:{showModal:t.showModal}})],1)]):t._e(),t.isActive?s("modal",{attrs:{user:t.getUser},on:{closeModal:function(e){t.isActive=!t.isActive}}}):t._e(),t.btnVisible?s("button",{staticClass:"btn_get-items waves-effect waves-light btn-small",on:{click:t.getData}},[t._v("Показать пользователей")]):t._e(),t.loading?s("loading"):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPagination,expression:"isPagination"}],staticClass:"row justify-content-center"},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"},on:{click:function(e){t.page=1}}},[s("span",{staticClass:"material-icons"},[t._v("first_page")])])]),s("li",{staticClass:"waves-effect"},[1!=t.page?s("a",{attrs:{href:"#!"},on:{click:function(e){t.page--}}},[s("i",{staticClass:"material-icons"},[t._v("chevron_left")])]):t._e()]),t._l(t.pages.slice(t.page-1,t.page+5),(function(e){return s("li",{key:e,staticClass:"waves-effect",class:{active:t.page==e},on:{click:function(s){t.page=e}}},[s("a",{attrs:{href:"#!"}},[t._v(t._s(e))])])})),t.page<t.pages.length?s("li",{staticClass:"waves-effect",on:{click:function(e){t.page++}}},[t._m(0)]):t._e(),s("li",{staticClass:"waves-effect"},[s("a",{attrs:{href:"#!"},on:{click:function(e){t.page=t.pages.length}}},[s("span",{staticClass:"material-icons"},[t._v("last_page")])])])],2)])],1)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"#!"}},[s("i",{staticClass:"material-icons"},[t._v("chevron_right")])])}],o=(s("4de4"),s("7db0"),s("c975"),s("fb6a"),s("b0c0"),s("bc3a")),l=s.n(o),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tbody",t._l(t.items,(function(e){return s("tr",{key:e.id,on:{click:function(s){return t.showModal(e.id)}}},[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.fullname))]),s("td",[t._v(t._s(e.uname))]),s("td",[t._v(t._s(e.company))]),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(e.address.state))])])})),0)},d=[],f={props:["items"],methods:{showModal:function(t){this.$emit("showModal",t)}}},h=f,v=(s("329d"),s("2877")),p=Object(v["a"])(h,u,d,!1,null,"a4f639e8",null),m=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[t._v(" Контактные данные ")]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"mb-1"},[t._v("Имя: "),s("span",[t._v(t._s(t.user.name))])]),s("div",[t._v("Адрес: "),s("span",[t._v(t._s(t.user.adress))])])]),s("div",{staticClass:"modal-footer"},[t._t("footer",[s("button",{staticClass:"modal-default-button btn-small waves-effect waves-light black",on:{click:t.closeModal}},[t._v(" Закрыть ")])])],2)])])])])},_=[],b={props:["user"],methods:{closeModal:function(){this.$emit("closeModal")}}},w=b,y=(s("b338"),Object(v["a"])(w,g,_,!1,null,null,null)),C=y.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader-wrapper big active"},[s("div",{staticClass:"spinner-layer spinner-blue-only"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])])}],j={},O=j,x=Object(v["a"])(O,k,P,!1,null,null,null),M=x.exports,L={data:function(){return{columns:{id:"#",fullname:"Fullname",uname:"Username",company:"Company",email:"E-mail",state:"State"},items:[],loading:!1,btnVisible:!0,page:1,perPage:45,pages:[],query:"",getUser:{name:"",adress:""},isActive:!1,error:!1,changeFlag:!1,isPagination:!1,sortKey:""}},methods:{getData:function(){var t=this;this.btnVisible=!1,this.loading=!0,l.a.get("http://www.filltext.com/?rows=1000&id={index}&fullname={firstName}~{lastName}&company={business}&email={email}&uname={username}&address={addressObject}").then((function(e){t.loading=!1,t.items=e.data,t.isPagination=!0}))},setPages:function(){for(var t=Math.ceil(this.items.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},paginate:function(t){var e=this.page,s=this.perPage,a=e*s-s,i=e*s;return t.slice(a,i)},change:function(t){this.sortKey=t,"id"===t?!1===this.changeFlag?(this.changeFlag=!0,this.items.sort((function(t,e){return t.id>e.id?-1:t.id<e.id?1:void 0}))):(this.changeFlag=!1,this.items.sort((function(t,e){return t.id>e.id?1:t.id<e.id?-1:void 0}))):"state"===t?!1===this.changeFlag?(this.changeFlag=!0,this.items.sort((function(e,s){return e=e.address[t].toLowerCase(),s=s.address[t].toLowerCase(),e>s?1:e<s?-1:void 0}))):(this.changeFlag=!1,this.items.sort((function(e,s){return e=e.address[t].toLowerCase(),s=s.address[t].toLowerCase(),e>s?-1:e<s?1:void 0}))):!1===this.changeFlag?(this.changeFlag=!0,this.items.sort((function(e,s){return e=e[t].toLowerCase(),s=s[t].toLowerCase(),e>s?1:e<s?-1:void 0}))):(this.changeFlag=!1,this.items.sort((function(e,s){return e=e[t].toLowerCase(),s=s[t].toLowerCase(),e>s?-1:e<s?1:void 0})))},search:function(){var t=this;this.isPagination=!1,""!=this.query?(this.error=!1,this.items=this.items.filter((function(e){for(var s in e)if(-1!==String(e[s]).indexOf(t.query))return!0})),0==this.items.length&&(this.error=!0,this.query="",this.getData())):(this.error=!1,this.items=[],this.getData())},showModal:function(t){var e=this;this.isActive=!0,this.items.find((function(s){s.id==t&&(e.getUser.name=s.fullname,e.getUser.adress=s.address.zip+", "+s.address.state+", "+s.address.city+", "+s.address.streetAddress)}))},clearSearch:function(){this.query="",this.items=[],this.getData()}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){27==e.keyCode&&(t.isActive=!1)}))},watch:{items:function(){this.setPages()}},computed:{displayedPosts:function(){return this.paginate(this.items)}},components:{contactListItems:m,modal:C,loading:M}},F=L,$=(s("5cdc"),Object(v["a"])(F,r,c,!1,null,null,null)),q=$.exports,E={components:{contactList:q}},S=E,A=(s("034f"),Object(v["a"])(S,i,n,!1,null,null,null)),D=A.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(D)}}).$mount("#app")},"5cdc":function(t,e,s){"use strict";var a=s("35f1"),i=s.n(a);i.a},"85ec":function(t,e,s){},b338:function(t,e,s){"use strict";var a=s("0c4e"),i=s.n(a);i.a}});
//# sourceMappingURL=app.719943db.js.map