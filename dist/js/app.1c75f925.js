(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,g=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&g.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e3683ddd","chunk-05c36658":"0528f9cd","chunk-1a80fee3":"8db63c6c","chunk-720ae2fe":"e7391b0e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-05c36658":1,"chunk-720ae2fe":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"1a85aea5","chunk-05c36658":"b2ffbb2b","chunk-1a80fee3":"31d6cfe0","chunk-720ae2fe":"3af25c54"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var g=document.getElementsByTagName("style");for(i=0;i<g.length;i++){u=g[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var g=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",g.name="ChunkLoadError",g.type=r,g.request=a,n[1](g)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var g=0;g<u.length;g++)t(u[g]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00e4":function(e,t,n){e.exports=n.p+"img/hero2.83bc04d1.svg"},"05b0":function(e,t,n){e.exports=n.p+"img/stock_shopbag_list.b36013d8.png"},"3ed1":function(e,t,n){},"51ff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function c(e,t,n,c,o,i){var s=Object(r["w"])("Header"),u=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(s),Object(r["g"])(u)])}var o=n("5735"),i=n.n(o),s=n("cade"),u=n.n(s),l={class:"navbar navbar-expand navbar-light bg-primary sticky-top shadow "},g={class:"container-fluid"},d=Object(r["g"])("img",{src:i.a,height:"40",width:"130"},null,-1),b={class:"navbar-nav"},p=Object(r["g"])("img",{src:u.a,alt:"bags",height:"25",width:"25"},null,-1);function f(e,t,n,a,c,o){var i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",l,[Object(r["g"])("div",g,[Object(r["g"])(i,{to:"/",class:"navbar-brand"},{default:Object(r["D"])((function(){return[d]})),_:1}),Object(r["g"])("div",b,[Object(r["g"])(i,{to:"/bags",class:"nav-link active mt-2","aria-current":"page"},{default:Object(r["D"])((function(){return[p]})),_:1})])])])}var h={name:"Header"};h.render=f;var m=h,v={name:"app",components:{Header:m}};n("93b7");v.render=c;var y=v,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("00e4"),w=n.n(j),x=n("05b0"),k=n.n(x),_=n("ed9e"),B=n.n(_),R=n("728c"),S=n.n(R),E=Object(r["G"])("data-v-069031de");Object(r["s"])("data-v-069031de");var I={class:"container-fluid mt-4"},T=Object(r["g"])("div",{class:"d-flex justify-content-center mb-4"},[Object(r["g"])("img",{src:w.a,alt:"hero",class:"img-fluid"})],-1),N=Object(r["g"])("p",{class:"display-6 text-center mb-5"}," Track your grocery items and their prices as you shop ",-1),P={class:"d-flex justify-content-center mb-5"},M=Object(r["f"])(" Start Using "),A=Object(r["g"])("div",{class:"d-flex justify-content-center my-5"},[Object(r["g"])("hr",{class:"hr-short bg-secondary"})],-1),C=Object(r["g"])("div",{class:"d-flex justify-content-center my-5"},[Object(r["g"])("p",{class:"lead col-lg-10"}," You probably put together a grocery list before heading to the store — whether it's in your head or on a piece of paper. But how often do you actually remember to bring that list with you so you can grocery shop faster and track corresponding prices with your budget for future use? Instead of wandering the market aimlessly wondering how much tomatoes you have left or struggling to remember each item on your list, switch up how you create a shopping list in the first place. Next time, use ShopBag web app on your phone as your personal grocery shopping assistant. ")],-1),H=Object(r["g"])("div",{class:"d-flex justify-content-center my-5"},[Object(r["g"])("hr",{class:"hr-short bg-secondary"})],-1),J=Object(r["g"])("div",{class:"container-fluid my-5"},[Object(r["g"])("div",{class:"row"},[Object(r["g"])("div",{class:"col-lg-6 text-center"},[Object(r["g"])("img",{src:k.a,height:"300",width:"300",alt:"image",class:"img-fluid"})]),Object(r["g"])("div",{class:"col-lg-6 my-auto"},[Object(r["g"])("span",{class:"display-6"},"Quickly type on the go"),Object(r["g"])("p",{class:"lead"}," ShopBag is simple and easy to use. In a hurry for shopping or to the market, you can quickly create grocery lists. Write all the items you need in one place, optionally with your budget. ")])])],-1),q=Object(r["g"])("hr",{class:"bg-primary"},null,-1),D=Object(r["g"])("div",{class:"container-fluid my-5"},[Object(r["g"])("div",{class:"row"},[Object(r["g"])("div",{class:"col-lg-6 text-center"},[Object(r["g"])("img",{src:B.a,height:"300",width:"300",alt:"image",class:"img-fluid"})]),Object(r["g"])("div",{class:"col-lg-6 my-auto"},[Object(r["g"])("span",{class:"display-6"},"Easily track prices"),Object(r["g"])("p",{class:"lead"}," ShopBag helps you to track prices and quantities of the items you will buy, and have bought by providing spaces to enter your budget and the price you bought. ")])])],-1),L=Object(r["g"])("hr",{class:"bg-primary"},null,-1),G=Object(r["g"])("div",{class:"container-fluid my-5"},[Object(r["g"])("div",{class:"row"},[Object(r["g"])("div",{class:"col-lg-6 text-center"},[Object(r["g"])("img",{src:S.a,height:"300",width:"300",alt:"image",class:"img-fluid"})]),Object(r["g"])("div",{class:"col-lg-6 my-auto"},[Object(r["g"])("span",{class:"display-6"},"No boundaries at all"),Object(r["g"])("p",{class:"lead"}," ShopBag is a web app which is accessible on every device. And can be used offline because its also a progressive web app(PWA). Your items are locally stored on your device. ")])])],-1),U={class:"d-flex justify-content-center mb-5"},K=Object(r["f"])(" Start Using "),Q=Object(r["g"])("footer",{class:"text-center bg-secondary p-5"},[Object(r["g"])("a",{class:"text-decoration-none text-muted mx-3",href:"https://twitter.com/QuistKofi",target:"blank"},"My Twitter"),Object(r["g"])("a",{class:"text-decoration-none text-muted mx-4",href:"https://github.com/GuyTito/shopping_tracker",target:"blank"},"GitHub Source")],-1);Object(r["q"])();var V=E((function(e,t,n,a,c,o){var i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",I,[T,N,Object(r["g"])("div",P,[Object(r["g"])(i,{to:"/bags",class:"btn btn-lg btn-primary"},{default:E((function(){return[M]})),_:1})]),A,C,H,J,q,D,L,G,Object(r["g"])("div",U,[Object(r["g"])(i,{to:"/bags",class:"btn btn-lg btn-primary"},{default:E((function(){return[K]})),_:1})])]),Q])})),W={};n("77ce");W.render=V,W.__scopeId="data-v-069031de";var Y=W,F=[{path:"/",name:"Home",component:Y},{path:"/bag/:id",component:function(){return n.e("chunk-05c36658").then(n.bind(null,"ebb7"))}},{path:"/add",name:"add",component:function(){return n.e("chunk-1a80fee3").then(n.bind(null,"e825"))}},{path:"/edit/:id",component:function(){return n.e("chunk-720ae2fe").then(n.bind(null,"3ff7"))}},{path:"/bags",component:function(){return n.e("about").then(n.bind(null,"e232"))}}],z=Object(O["a"])({history:Object(O["b"])(),routes:F}),X=z,Z=n("1da1"),$=(n("96cf"),n("159b"),n("4de4"),n("7db0"),n("5502")),ee=n("af0d"),te=new ee["a"]("shopbagDb");te.config.debug=!1;var ne={getBags:function(){return Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te.collection("bags").get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},updateBag:function(e){var t=arguments;return Object(Z["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:"updated",n.next=3,te.collection("bags").doc({bag_id:e.bag_id}).update(JSON.parse(JSON.stringify(e)));case 3:console.log(r);case 4:case"end":return n.stop()}}),n)})))()},addBag:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te.collection("bags").add(JSON.parse(JSON.stringify(e)));case 3:console.log("added"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},removeBag:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te.collection("bags").doc({bag_id:e}).delete();case 2:console.log("deleted");case 3:case"end":return t.stop()}}),t)})))()},removeItem:function(e){var t=this;return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,te.collection("bags").doc({bag_id:e.bagId}).get().then((function(n){n.items=n.items.filter((function(t){return t.item_id!==e.itemId})),t.updateBag(n,"removed item")}));case 2:case"end":return n.stop()}}),n)})))()}},re=Object($["a"])({state:{bags:[]},mutations:{REMOVE_ITEM:function(e,t){e.bags.forEach((function(e){e.bag_id==t.bagId&&(e.items=e.items.filter((function(e){return e.item_id!==t.itemId})))}))}},actions:{getBags:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ne.getBags();case 2:e.state.bags=t.sent;case 3:case"end":return t.stop()}}),t)})))()},addBag:function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.addBag(t);case 2:case"end":return e.stop()}}),e)})))()},removeItem:function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("REMOVE_ITEM",t),n.next=3,ne.removeItem(t);case 3:case"end":return n.stop()}}),n)})))()},removeBag:function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.removeBag(t);case 2:case"end":return e.stop()}}),e)})))()},updateBag:function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.updateBag(t);case 2:case"end":return e.stop()}}),e)})))()}},getters:{getBags:function(e){return e.bags},getBag:function(e){return function(t){return e.bags.find((function(e){return e.bag_id==t}))}}}});n("3e48"),n("ab8b"),n("3ed1");Object(r["c"])(y).use(re).use(X).mount("#app")},5735:function(e,t,n){e.exports=n.p+"img/logo_shopbag.11b432b9.svg"},"728c":function(e,t,n){e.exports=n.p+"img/offline.14decbbe.png"},"77ce":function(e,t,n){"use strict";n("d92c")},"93b7":function(e,t,n){"use strict";n("51ff")},cade:function(e,t,n){e.exports=n.p+"img/shopbags.16247231.svg"},d92c:function(e,t,n){},ed9e:function(e,t,n){e.exports=n.p+"img/stock_shopbag_prices.22a28c9b.png"}});
//# sourceMappingURL=app.1c75f925.js.map