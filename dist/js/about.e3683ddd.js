(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"6d5c":function(t,e,a){t.exports=a.p+"img/bin.37033fe1.svg"},"76a4":function(t,e,a){t.exports=a.p+"img/add.95b5803e.svg"},"9e87":function(t,e,a){},b143:function(t,e,a){"use strict";a("9e87")},e232:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n=a("76a4"),r=a.n(n),s=Object(c["G"])("data-v-93641a42");Object(c["s"])("data-v-93641a42");var b={class:"container-fluid mt-4 page-head"},d={class:"d-flex justify-content-between mb-2"},i=Object(c["g"])("div",{class:"mx-2"},"Your Shopping Bags",-1),g=Object(c["g"])("img",{src:r.a,alt:"add",height:"25",width:"25"},null,-1),o=Object(c["g"])("hr",{class:"bg-primary"},null,-1),u=Object(c["g"])("img",{src:r.a,alt:"add",height:"25",width:"25",class:"mt-3"},null,-1);Object(c["q"])();var l=s((function(t,e,a,n,r,l){var j=Object(c["w"])("router-link"),O=Object(c["w"])("BagList");return Object(c["p"])(),Object(c["d"])("div",b,[Object(c["g"])("div",d,[i,Object(c["g"])("div",null,[Object(c["g"])(j,{to:"/add",class:"mx-3"},{default:s((function(){return[g]})),_:1})])]),o,Object(c["g"])(O,{bags:l.bags,onRemoveBag:l.removeBag},null,8,["bags","onRemoveBag"]),Object(c["g"])(j,{class:"fab shadow bg-light",to:"/add"},{default:s((function(){return[u]})),_:1})])})),j=a("1da1"),O=(a("96cf"),a("6d5c")),v=a.n(O),p=Object(c["G"])("data-v-51d0bed4");Object(c["s"])("data-v-51d0bed4");var m={class:"v-center"},f={class:"p-2 d-flex justify-content-between"},h={class:"text-dark ovdden w-100"},w={class:"mt-2"},B=Object(c["g"])("img",{src:v.a,alt:"trash",height:"25",width:"25"},null,-1),_=Object(c["g"])("hr",{class:"bg-primary"},null,-1);Object(c["q"])();var k=p((function(t,e,a,n,r,s){var b=Object(c["w"])("BagListItem");return Object(c["p"])(),Object(c["d"])("div",m,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.bags,(function(e){return Object(c["p"])(),Object(c["d"])("div",{key:e.bag_id},[Object(c["g"])("div",f,[Object(c["g"])("div",h,[Object(c["g"])(b,{bag:e},null,8,["bag"])]),Object(c["g"])("div",w,[Object(c["g"])("div",{onClick:function(a){return t.$emit("remove-bag",e.bag_id)},class:"bg-secondary rounded-circle p-2"},[B],8,["onClick"])])]),_])})),128))])})),x=Object(c["G"])("data-v-3181b560"),y=x((function(t,e,a,n,r,s){var b=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(b,{to:"/bag/".concat(a.bag.bag_id)},{default:x((function(){return[Object(c["g"])("h4",null,Object(c["y"])(a.bag.bag_name),1),Object(c["g"])("div",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.bag.items,(function(t){return Object(c["p"])(),Object(c["d"])("span",{class:"text-black-50 w-100",key:t.item_id},Object(c["y"])(t.item_name)+"... ",1)})),128))])]})),_:1},8,["to"])})),I={props:["bag"]};I.render=y,I.__scopeId="data-v-3181b560";var L=I,$={name:"BagList",components:{BagListItem:L},props:["bags"]};a("b143");$.render=k,$.__scopeId="data-v-51d0bed4";var R=$,G={name:"BagsPage",components:{BagList:R},computed:{bags:function(){return this.$store.getters.getBags}},created:function(){this.$store.dispatch("getBags")},methods:{removeBag:function(t){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("removeBag",t);case 2:e.$store.dispatch("getBags");case 3:case"end":return a.stop()}}),a)})))()}}};G.render=l,G.__scopeId="data-v-93641a42";e["default"]=G}}]);
//# sourceMappingURL=about.e3683ddd.js.map