(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{424:function(t,e,r){"use strict";r.r(e);var n=r(3),c=(r(30),r(52),r(36),r(135)),o={data:function(){return{loading:!1,purchaseHistory:null}},mounted:function(){this.$store.commit("app/setTitle",this.$t("raffleTicket.purchaseHistory.title")),this.getRaffleTicketPurchases()},methods:{getRaffleTicketPurchases:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/raffleTickets/history").then((function(e){var output=[],r=null,n=[],c=[];if(e.data.raffleTicketsHistory&&(e.data.raffleTicketsHistory.map((function(t){if(r&&t.purchased_at!=r.purchaseTime){var dt=new Date(r.purchaseTime);r.purchaseTime=dt.toLocaleString(),n.push(c),r.serials=n,output.unshift(r),r=null}r||(r={count:t.batch_total,purchaseTime:t.purchased_at,serials:[]},n=[],c=[]),t.raffle_ticket_id-c.slice(-1)[0]>1&&(n.push(c),c=[]),c.push(t.raffle_ticket_id)})),r)){var dt=new Date(r.purchaseTime);r.purchaseTime=dt.toLocaleString(),n.push(c),r.serials=n,output.unshift(r)}t.purchaseHistory=output})).catch((function(t){c.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},l=r(29),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Loading",{attrs:{value:t.loading}}),t._v(" "),t.purchaseHistory&&t.purchaseHistory.length>0?e("div",t._l(t.purchaseHistory,(function(r){return e("div",{key:r.purchaseTime,staticClass:"round drop-shadow p:16|48 p:16|24@<xs mb:16 bg:white lh:48px",staticStyle:{position:"relative"}},[e("div",{staticClass:"font:24",staticStyle:{width:"90px",float:"left"}},[t._v("\n        +"+t._s(r.count)+"\n      ")]),t._v(" "),e("div",{staticClass:"lh:24px@<xs flex:wrap-reverse@<xs",staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{staticClass:"font:24 {font:16;w:100%}@<xs"},t._l(r.serials,(function(r){return e("div",[t._v("\n            #"+t._s(r[0])+" ~ "+t._s(r[r.length-1])+"\n          ")])})),0),t._v(" "),e("div",[t._v(t._s(r.purchaseTime))])]),t._v(" "),e("div",{staticStyle:{clear:"both"}})])})),0):e("div",[e("div",{staticClass:"round drop-shadow p:16|48 p:16|24@<xs mb:16 bg:white lh:48px text:center",staticStyle:{position:"relative"}},[t._v("\n      "+t._s(t.$t("common.messages.noData"))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:r(245).default})}}]);