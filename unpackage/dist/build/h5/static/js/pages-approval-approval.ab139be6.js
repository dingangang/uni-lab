(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-approval-approval"],{2572:function(t,e,n){"use strict";n.r(e);var i=n("7d65"),a=n("60c4");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("870c");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"4513b72b",null);e["default"]=c.exports},"60c4":function(t,e,n){"use strict";n.r(e);var i=n("8b80"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"7d65":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"ct-page"},[n("van-nav-bar",{staticClass:"ct-navbar",attrs:{title:t.title,"left-arrow":""},on:{"click-left":function(e){e=t.$handleEvent(e),t.backMain(e)}}}),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:function(e){e=t.$handleEvent(e),t.init(e)}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,i){return n("van-cell",{key:i},[n("v-uni-view",{staticClass:"ct-lab-item"},[n("v-uni-text",{staticClass:"ct-lab-item__text"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"ct-lab-item__type"},[t._v(t._s(e.type))]),"teacher"===t.role?n("van-button",{staticClass:"ct-lab-item__button",attrs:{type:"done"===e.status?"primary":"info",size:"small"},on:{click:function(n){n.stopPropagation(),n=t.$handleEvent(n),t.goLabDetails(e)}}},[t._v(t._s(e.statusDesc))]):n("v-uni-text",{staticClass:"ct-lab-item__status",class:"ct-lab-item__status--"+e.status},[t._v(t._s(e.statusDesc))])],1)],1)}),1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"870c":function(t,e,n){"use strict";var i=n("fea9"),a=n.n(i);a.a},"8b80":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{list:[],loading:!1,finished:!1,title:"业务审批列表"}},onLoad:function(){},onReachBottom:function(){this.init()},computed:{role:function(){return this.$store.getters.role}},methods:{init:function(){this.finished||(this.loading=!1,this.finished=!0,this.list=[{id:"1",name:"2019上学年度耗材需求申购",type:"申购",status:"wait",statusDesc:"未处理"},{id:"2",name:"2019上学年度耗材需求申购",type:"申购",status:"done",statusDesc:"已处理"},{id:"3",name:"化学品领用",type:"领用",status:"wait",statusDesc:"未处理"},{id:"4",name:"经管实验申报安排",type:"申报",status:"wait",statusDesc:"未处理"}])},goLabDetails:function(t){console.log("传入的审批事项的信息是",t),uni.navigateTo({url:"./approval-details?item=".concat(t),success:function(t){},fail:function(){},complete:function(){}})},backMain:function(){uni.navigateTo({url:"../main/main",success:function(t){},fail:function(){},complete:function(){}})}}};e.default=i},cf6e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-4513b72b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.logo[data-v-4513b72b]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-4513b72b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.title[data-v-4513b72b]{font-size:%?36?%;color:#8f8f94}",""])},fea9:function(t,e,n){var i=n("cf6e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("006534ea",i,!0,{sourceMap:!1,shadowMode:!1})}}]);