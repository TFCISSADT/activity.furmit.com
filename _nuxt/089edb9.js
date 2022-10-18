(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{421:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(30),n(11),n(52),n(17),n(55),n(67),n(134)),c=n.n(r),l=(n(161),{name:"IndexPage",data:function(){var menu=[];return menu.push({key:"minorities",icon:"iconMinorities.webp",path:"/minorities",enabled:!0,title:this.$t("minorities.itemName"),subtitle:this.$t("common.messages.loading")}),menu.push({key:"furstarsVote",icon:"iconFurstars.webp",path:"/furstars/vote",enabled:!0,title:this.$t("furstars.itemName")}),menu.push({key:"videovote",icon:"iconVideovote.webp",path:"/videovote/options",enabled:!0,title:this.$t("videovote.itemName")}),menu.push({key:"videovoteTickets",icon:"iconVideovoteTickets.webp",path:"/videovote/tickets",enabled:!0,title:this.$t("videovoteTickets.itemName")}),menu.push({key:"raffleTickets",icon:"ticket-confirmation",path:"/raffleTickets",enabled:!0,title:this.$t("raffleTicket.purchaseHistory.title")}),menu.push({key:"accountManage",icon:"account",path:"/accountManage",enabled:!0,title:this.$t("account.menu.title"),subtitle:""}),{COLORS:c.a,menu:menu,timeToNextMinoritiesUpdate:undefined}},mounted:function(){this.$store.commit("app/setTitle",null),this.$store.commit("app/setDarkMode",!1),this.$store.commit("app/setActivity",!1),this.getMinoritiesStatus()},methods:{getMinoritiesStatus:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$axios.get("/api/minorities/status").then((function(e){t.menu.map((function(o){if("minorities"==o.key){switch(e.data.status){case"ended":o.subtitle=t.$t("minorities.status.ended"),e.data.is_alive&&(o.subtitle+=" ("+t.$t("minorities.messages.isWinner")+")");break;case"not started":o.subtitle=t.$t("minorities.status.notStarted");break;case"sorting":o.subtitle=t.$t("minorities.status.sort");break;case"can vote":o.subtitle=t.$t("minorities.status.voteNow");break;case"cannot vote":e.data.is_alive||(o.subtitle=t.$t("minorities.messages.out")),e.data.has_voted&&(o.subtitle=t.$t("minorities.messages.voted"))}n.timeToNextMinoritiesUpdate=null,e.data.open_time&&(n.timeToNextMinoritiesUpdate=1e3*e.data.open_time,o.subtitle+=" ("+t.$t("minorities.messages.timeToNextStage").replace("{minutes}",Math.floor((1e3*e.data.open_time-Date.now())/6e4))+")"),e.data.end_time&&(n.timeToNextMinoritiesUpdate=1e3*e.data.end_time,o.subtitle+=" ("+t.$t("minorities.messages.timeLeft").replace("{minutes}",Math.floor((1e3*e.data.end_time-Date.now())/6e4))+")")}})),t.menu=t.menu})).catch((function(t){})).finally((function(){console.log(n.timeToNextMinoritiesUpdate-Date.now()),n.timeToNextMinoritiesUpdate&&n.timeToNextMinoritiesUpdate>Date.now()&&setTimeout((function(){n.getMinoritiesStatus()}),n.timeToNextMinoritiesUpdate-Date.now()+2e3)}));case 3:case"end":return e.stop()}}),e)})))()}}}),m=n(29),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"display:grid grid-template-columns:1fr|1fr|1fr@>sm grid-template-columns:1fr@<=sm gap:16"},t._l(t.menu,(function(n){return e("nuxt-link",{key:n.key,staticClass:"text:center border:#CECECE|1px|solid border-radius:16 py:48 flex justify-content:center flex-direction:column align-items:center bg:white cursor:pointer",attrs:{to:n.enabled?t.localePath(n.path):"/",event:n.enabled?"click":""}},[-1==n.icon.indexOf("webp")?e("div",{staticClass:"flex justify-content:center flex-direction:column align-items:center"},[e("span",{class:"mdi mdi-"+n.icon+" font-size:4rem"}),t._v(" "),e("span",{staticClass:"font-size:1.2rem mt:4 font-weight:bold px:16"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"font-size:0.8rem mt:4 font-weight:bold pt:8 px:16"},[t._v(t._s(n.subtitle))])]):e("div",{staticClass:"flex justify-content:center flex-direction:column align-items:center"},[-1!=n.icon.indexOf("webp")?e("img",{staticStyle:{"max-height":"72px"},attrs:{src:"/assets/"+n.icon}}):t._e(),t._v(" "),n.subtitle?t._e():e("span",{staticClass:"mt:12"}),t._v(" "),e("span",{staticClass:"font-size:0.8rem mt:4 font-weight:bold px:16 font:gray-50"},[t._v("( "+t._s(n.title)+" )")]),t._v(" "),e("span",{staticClass:"font-size:0.8rem font-weight:bold pt:8 px:16"},[t._v(t._s(n.subtitle))])])])})),1)}),[],!1,null,null,null);e.default=component.exports}}]);