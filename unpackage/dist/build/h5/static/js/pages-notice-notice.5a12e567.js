(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice"],{"13bf":function(t,n,e){"use strict";e.r(n);var i=e("284a"),c=e("84df");for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);var o=e("2877"),s=Object(o["a"])(c["default"],i["a"],i["b"],!1,null,"286a464d",null);n["default"]=s.exports},"284a":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("van-nav-bar",{staticClass:"ct-navbar",attrs:{title:"消息列表","left-arrow":"",fixed:""},on:{"click-left":function(n){n=t.$handleEvent(n),t.back(n)}}}),e("v-uni-view",{staticClass:"ct-notice-list",staticStyle:{"margin-top":"44px",padding:"10px"}},t._l(t.notices,function(n,i){return e("v-uni-view",{key:i,staticClass:"ct-notice-list__item ct-notice-list__item--border",on:{click:function(n){n=t.$handleEvent(n),t.goNoticeDetails(i)}}},[e("v-uni-view",{staticClass:"ct-notice-list__item__text"},[t._v(t._s(n.text))]),e("v-uni-view",{staticClass:"ct-notice-list__item__time"},[t._v(t._s(n.time))])],1)}),1)],1)},c=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return c})},"59db":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{notices:[{text:"省教育厅安全组来校开展实验室安全检查工作",time:"2019-07-09"},{text:"关于做好2019年度实验室安全工作通知",time:"2019-04-18"}]}},methods:{back:function(){uni.navigateBack({delta:1})},goNoticeDetails:function(t){console.log("携带参数",t),uni.navigateTo({url:"../notice/notice-details",success:function(t){},fail:function(){},complete:function(){}})}}};n.default=i},"84df":function(t,n,e){"use strict";e.r(n);var i=e("59db"),c=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=c.a}}]);