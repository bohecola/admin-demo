(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba5a3c86"],{1e3:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a={class:"page-detail"},r={key:0,class:"page-detail__head"},o={class:"page-detail__title"},l={class:"page-detail__info"},i=["onClick"],s={key:0},d={class:"page-detail__content"};function b(e,t,c,b,u,j){var O,p=Object(n["resolveComponent"])("paperclip"),m=Object(n["resolveComponent"])("el-icon"),g=Object(n["resolveComponent"])("price-tag"),v=Object(n["resolveComponent"])("v-md-preview"),k=Object(n["resolveDirective"])("loading");return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[e.loading?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("h2",o,Object(n["toDisplayString"])(e.article.title),1),Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p)]})),_:1}),Object(n["createElementVNode"])("span",{onClick:t[0]||(t[0]=function(t){return e.$router.push({name:"CategoryList",query:{categoryId:e.article.category._id,name:e.article.category.name}})}),class:"article-category"},Object(n["toDisplayString"])(null===(O=e.article.category)||void 0===O?void 0:O.name),1),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g)]})),_:1}),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.article.tags,(function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t.name},[Object(n["createElementVNode"])("span",{class:"article-tags",onClick:function(c){return e.$router.push({name:"TagList",query:{tagId:t._id,name:t.name}})}},Object(n["toDisplayString"])(t.name),9,i),c+1!==e.article.tags.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",s,",")):Object(n["createCommentVNode"])("",!0)],64)})),128))])])),Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(v,{text:e.article.content},null,8,["text"])])])),[[k,e.loading]])}var u=c("1da1"),j=(c("96cf"),c("6c02")),O=c("f727"),p=Object(n["defineComponent"])({name:"detail",setup:function(){var e=Object(n["reactive"])({}),t=Object(j["c"])(),c=Object(n["ref"])(!1);return Object(n["onMounted"])(Object(u["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,c.value=!0,n.next=4,Object(O["c"])(t.params.id);case 4:a=n.sent,Object.assign(e,a.data),c.value=!1,n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0),c.value=!1;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))),{article:e,loading:c}}}),m=(c("c2c3"),c("6b0d")),g=c.n(m);const v=g()(p,[["render",b],["__scopeId","data-v-20dbad48"]]);t["default"]=v},bea0:function(e,t,c){},c2c3:function(e,t,c){"use strict";c("bea0")}}]);
//# sourceMappingURL=chunk-ba5a3c86.86f68e76.js.map