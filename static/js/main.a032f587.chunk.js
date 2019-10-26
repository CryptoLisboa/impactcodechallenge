(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},21:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(2),s=a(1),o="ui icon input loading",u="ui input",m="ui input focus",d="Search wine",p="Search drinks or ingredients...",E=function(e){var t=e.isLoading,a=e.focus;return t?o:a?m:u},f=function(e){var t=e.onSubmit,a=e.term,c=e.onSearchChange,i=Object(n.createRef)();return Object(n.useEffect)(function(){i.current.focus()},[]),r.a.createElement("div",{className:"ui segment search-bar"},r.a.createElement("form",{className:"ui form",onSubmit:t},r.a.createElement("label",null,d),r.a.createElement("div",{className:"field"},r.a.createElement("input",{ref:i,className:E(e),value:a,placeholder:p,onChange:c}))))},v=a(13);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var O={itemsList:[],loadingItemsList:!1,item:void 0,loadingItem:!1,itemId:void 0},g=function(e,t){var a=t.payload;switch(t.type){case"SET_ITEMS_LIST":return h({},e,{itemsList:a,item:void 0});case"LOADING_ITEMS_LIST":return h({},e,{loadingItemsList:a});case"SET_ITEM":return h({},e,{item:a});case"LOADING_ITEM":return h({},e,{loadingItem:a});case"ITEM_ID":return h({},e,{itemId:a});case"ADD_ITEM":return h({},e,{itemsList:[a].concat(Object(v.a)(e.itemsList)),item:a});default:return e}},y=function(e){return{payload:e,type:"SET_ITEMS_LIST"}},j=function(e){return{payload:e,type:"LOADING_ITEMS_LIST"}},I=function(e){return{payload:e,type:"LOADING_ITEM"}},N=function(e){var t=e.title,a=e.setter,n=e.value,c=e.options;return r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("h3",{className:"ui header"},t)),r.a.createElement("div",{className:"fields inline",key:"radio-group"},c.map(function(e){return r.a.createElement("div",{className:"field",key:e},r.a.createElement("div",{className:"ui checked radio checkbox",role:"presentation",onClick:a(e)},r.a.createElement("input",{type:"radio",checked:n===e,className:"hidden",readOnly:!0,tabIndex:"0"}),r.a.createElement("label",null,e)))})))},D=a(3),w=a.n(D),S=a(7),T=function(e){return e?e.map(function(e){return{instructions:e.strInstructions,image:e.strDrinkThumb,id:e.idDrink,alcoholic:e.strAlcoholic,category:e.strCategory,name:e.strDrink,ingredients:function(e){var t=[];if(t.length)return t}()}}):[]},k=function(){var e=Object(S.a)(w.a.mark(function e(t){var a,n,r,c,i,l;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchType,n=t.SEARCH_TYPES,r=t.term,c=t.itemsDispatch,i=a===n.DRINK?"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=":"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",e.prev=2,e.next=5,fetch("".concat(i).concat(r)).then(function(e){return e.json()});case 5:l=e.sent,c(y(T(l.drinks))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,c(j(!1)),e.finish(12);case 15:case"end":return e.stop()}},e,null,[[2,9,12,15]])}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(S.a)(w.a.mark(function e(t){var a,n,r,c,i,l;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.itemId,n=t.itemsDispatch,r=t.itemsList,e.prev=1,c=r.filter(function(e){return e.id===a}),e.next=5,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(a)).then(function(e){return e.json()});case 5:l=e.sent,i=T(l.drinks),n({payload:i.length?i[0]:c[0],type:"SET_ITEM"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,n(I(!1)),e.finish(14);case 17:case"end":return e.stop()}},e,null,[[1,10,14,17]])}));return function(t){return e.apply(this,arguments)}}(),_={DRINK:"Drink",INGREDIENT:"Ingredient"},C=function(e,t,a){return function(n){return n===_.DRINK?function(){e(_.DRINK),a!==_.DRINK&&t(y([]))}:function(){e(_.INGREDIENT),a!==_.INGREDIENT&&t(y([]))}}},M=function(e){var t=e.demo,a=e.COCKTAIL_DEMO,c=e.itemsDispatch,i=e.loadingItemsList,l=Object(n.useState)(""),o=Object(s.a)(l,2),u=o[0],m=o[1],d=Object(n.useState)(_.DRINK),p=Object(s.a)(d,2),E=p[0],v=p[1];return Object(n.useEffect)(function(){i&&k({searchType:E,SEARCH_TYPES:_,term:u,itemsDispatch:c})},[i,c,E,u]),r.a.createElement("div",null,r.a.createElement(f,Object.assign({term:u,onSearchChange:function(e){return m(e.target.value)},onSubmit:function(e){e.preventDefault(),c(j(!0))},hasCocktailSwitch:t===a},_,{searchType:!0,setSearch:!0})),t===a&&r.a.createElement(N,{value:E,setter:C(v,c,E),title:"Set search type",options:Object.values(_)}))},P=(a(20),a(40)),A=(a(21),a(12)),x=a.n(A),R=(a(29),function(e){var t=e.image,a=e.name,n=e.year;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"ui tiny image",src:t,alt:"Wine"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h5",{className:"header"},a)),r.a.createElement("div",null,"Year: ",r.a.createElement("span",{className:"header"},n))))}),K=function(){return r.a.createElement("div",{className:"ui container centered"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui text loader"},"Loading")),r.a.createElement("p",null))},W=function(e){var t=e.label,a=e.value;return a?r.a.createElement("div",null,t,r.a.createElement("span",{className:"header"},a)):null},G=function(e){var t=e.image,a=e.name,n=e.id,c=e.category,i=e.alcoholic;return r.a.createElement("div",{className:"test",key:n},r.a.createElement("img",{className:"ui tiny image",src:t,alt:"Wine"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h5",{className:"ui header"},a)),r.a.createElement(W,{label:"Category: ",value:c}),r.a.createElement(W,{value:i})))};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var q=function(e){var t=e.itemsList,a=e.loadingItemsList,n=e.itemsDispatch,c=e.demo,i=e.WINE_DEMO,l=x()()(function(e){var a=e.virtual,l=a.items,s=a.style,o=e.itemHeight,u=Math.min(160*t.length,640);return r.a.createElement("div",{style:Y({},s,{height:u})},l.map(function(e){return r.a.createElement("div",{role:"presentation",key:"item_".concat(e.id),style:{height:o},onClick:function(){n(I(!0)),n({payload:e.id,type:"ITEM_ID"})}},c===i?r.a.createElement(R,e):r.a.createElement(G,e))}))});return a?r.a.createElement("div",{className:"v-space-xxl"},r.a.createElement(K,null)):r.a.createElement("div",{style:{overflow:"auto",height:Math.min(160*t.length,640)}},r.a.createElement(l,{items:t,itemHeight:160}))},J=function(e){var t=e.item,a=e.loadingItem,c=e.itemId,i=e.itemsDispatch,l=e.itemsList,s=t||{},o=s.name,u=s.image,m=s.instructions,d=s.id,p=s.alcoholic,E=s.ingredients;return Object(n.useEffect)(function(){a&&L({itemId:c,itemsDispatch:i,itemsList:l})},[a,c,i]),a?r.a.createElement(K,null):t?r.a.createElement("div",{className:"ui segment",style:{minHeight:500},key:d},r.a.createElement("div",{className:"ui left floated image large"},r.a.createElement("img",{src:u,alt:"Wine bottle"})),r.a.createElement("div",null,r.a.createElement("b",null,o),p&&" - ",r.a.createElement("b",null,p)),r.a.createElement("p",null,m),r.a.createElement("br",null),E&&r.a.createElement("div",{role:"list",className:"ui bulleted list",style:{position:"absolute",verticalAlign:"middle",marginLeft:500}},E.map(function(e){var t=e.ingredient,a=e.measure;return r.a.createElement("div",{role:"listitem",className:"item"},t,a&&" - ",a)}))):r.a.createElement("div",null)},$=function(e){var t=e.name,a=e.year,n=e.image,c=e.description;return r.a.createElement("div",{className:"ui segment",style:{minHeight:500}},r.a.createElement("div",{className:"ui left floated image large"},r.a.createElement("img",{src:n,alt:"Wine bottle"})),r.a.createElement("div",null,r.a.createElement("b",null,t)," - ",r.a.createElement("b",null,a)),r.a.createElement("p",null,c))},B=function(e){var t=e.demo,a=e.COCKTAIL_DEMO;return r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"four wide column"},r.a.createElement(q,z(e))),r.a.createElement("div",{className:"twelve wide column"},t===a?r.a.createElement(J,F(e)):r.a.createElement($,null)))},z=Object(P.a)(["itemsList","loadingItemsList","itemsDispatch","demo","WINE_DEMO","COCKTAIL_DEMO"]),F=Object(P.a)(["item","itemsList","loadingItem","itemId","itemsDispatch"]),Q=a(8),U=a.n(Q),V=/^$|^\d+$/,X="Add new wine",Z="Name:",ee="Instructions:",te="Alcoholic:",ae="Category:",ne="ID:",re="Image link:",ce="Save",ie="Discard",le=function(e){var t=e.label,a=e.value,n=e.setter,c=e.isNumeric,i=e.fluid;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,t)),r.a.createElement("div",{className:i?"ui input fluid":"ui input"},r.a.createElement("input",{value:a,onChange:c?function(e){var t=e.target.value;V.test(t)?n(parseInt(t,10)):t||n("")}:function(e){return n(e.target.value)},onBlur:c?null:function(e){return n(e.target.value.trim())}})))},se=function(e){var t=e.itemsDispatch,a=e.closeModal,c=Object(n.useState)(""),i=Object(s.a)(c,2),l=i[0],o=i[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],p=m[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),v=f[0],b=f[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),g=O[0],y=O[1],j=Object(n.useState)(""),I=Object(s.a)(j,2),N=I[0],D=I[1],w=Object(n.useState)(""),S=Object(s.a)(w,2),T=S[0],k=S[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,X)),r.a.createElement("div",{className:"content",style:{marginTop:"1.25%"}},le({label:Z,value:l,setter:o}),le({label:ee,value:d,setter:p,fluid:!0}),le({label:te,value:g,setter:y}),le({label:ae,value:N,setter:D}),le({label:ne,value:T,setter:k,isNumeric:!0}),le({label:re,value:v,setter:b,fluid:!0})),r.a.createElement("div",{className:"content",style:{marginTop:"5%"}},r.a.createElement("button",{type:"button",onClick:function(){t({payload:{name:l,instructions:d,alcoholic:g,image:v,category:N,id:T},type:"ADD_ITEM"}),a()},className:"ui primary button"},ce),r.a.createElement("button",{type:"button",onClick:function(){return a()},className:"ui red button"},ie)))};U.a.setAppElement("#root");var oe=function(e){var t=e.itemsDispatch,a=Object(n.useState)(!1),c=Object(s.a)(a,2),i=c[0],l=c[1],o=function(){return l(!1)};return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return l(!0)},className:"ui green button"},"Add new wine"),r.a.createElement(U.a,{isOpen:i,onRequestClose:o,contentLabel:"Example Modal"},r.a.createElement(se,{itemsDispatch:t,closeModal:o})))};function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de={title:"Pick a Demo",WINE_DEMO:"WINE_DEMO",COCKTAIL_DEMO:"COCKTAIL_DEMO"},pe=function(){var e=Object(n.useState)("COCKTAIL_DEMO"),t=Object(s.a)(e,1)[0],a=Object(n.useReducer)(g,O),c=Object(s.a)(a,2),i=c[0],l=c[1],o=me({itemsDispatch:l,demo:t},de,{loadingItemsList:i.loadingItemsList}),u=me({},i,{itemsDispatch:l,demo:t},de),m={itemsDispatch:l};return r.a.createElement("div",{className:"ui container"},r.a.createElement("section",null,r.a.createElement(M,o)),r.a.createElement("section",null,r.a.createElement(oe,m)),r.a.createElement("section",{className:"v-space-xl"},r.a.createElement(B,u)))};i.a.render(r.a.createElement(pe,null),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a032f587.chunk.js.map