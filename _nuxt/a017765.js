(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{393:function(t,e){t.exports={ticketSources:["DEFAULT","REDCARPET","DJPARTY","MITMALL","BALLOONPARTY","PANEL3X1","MOVIEQA","FURSTARS","COMPENSATION"],voteOptions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}},396:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("42b9c353",content,!0,{sourceMap:!1})},404:function(t,e,o){"use strict";o(396)},405:function(t,e,o){var n=o(50)(!1);n.push([t.i,".pending[data-v-0a3947b2]{border:2px solid #ccc}.voted[data-v-0a3947b2]{font-weight:700}.voted.videoBG[data-v-0a3947b2]{background-color:hsla(0,0%,100%,.4)}.videoBG[data-v-0a3947b2]{background-color:hsla(0,0%,100%,.8);background-blend-mode:lighten;background-size:cover;background-repeat:no-repeat;background-position:50%;text-shadow:1px 0 #fff,-1px 0 #fff,0 1px #fff,0 -1px #fff,1px 1px #fff,-1px -1px #fff,1px -1px #fff,-1px 1px #fff}",""]),t.exports=n},430:function(t,e,o){"use strict";o.r(e);o(45),o(53);var n=o(3),r=(o(17),o(55),o(30),o(135)),c=(o(134),o(393),{data:function(){return{loading:!1,votes:[1],showNotification:!1,previewVideoID:null,options:[],tickets:[]}},mounted:function(){this.loading=!0,this.$store.commit("app/setTitle",this.$t("videovote.itemName")),this.$store.commit("app/setDarkMode",!0),this.$store.commit("app/setActivity","videovote"),this.getOptions(),this.getVotes(),this.getTickets()},methods:{toggleVideoPreview:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.previewVideoID=t},toggleNotification:function(){this.showNotification=!this.showNotification},getTickets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/videovote/tickets").then((function(e){t.tickets=e.data.mitVideovoteTickets,console.log(t.data)})).catch((function(t){r.a.showRequestError(t)}));case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},getOptions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/videovote/options").then((function(e){t.options=e.data.mitVideovoteOptions,console.log(t.data)})).catch((function(t){r.a.showRequestError(t)}));case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},getVotes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/videovote/votes").then((function(e){t.votes=e.data.mitVideovoteVotes,console.log(t.data)})).catch((function(t){r.a.showRequestError(t)}));case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},submitVote:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(""!=confirm(e.$t("videovote.messages.confirmVoteFor").replace("{{ message }}",e.$t("videovote.enums.title."+t)))){o.next=3;break}return o.abrupt("return");case 3:return o.next=5,e.$axios.post("/api/videovote/vote/"+t).then((function(t){e.getVotes()})).catch((function(t){r.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return o.stop()}}),o)})))()}}}),d=c,v=(o(404),o(29)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("Loading",{attrs:{value:t.loading}}),t._v(" "),e("div",{staticClass:"center mb:16 text:24"},[t._v("\n    "+t._s(t.$t("videovote.messages.availableTickets")+": "+(t.tickets.length-t.votes.length))+"\n  ")]),t._v(" "),e("div",{staticClass:"mb:32",staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://www.furmit.com/film-contest-results-zh/",target:"_blank"}},[e("span",{staticClass:"mdi mdi-menu-right"}),t._v("\n      "+t._s(t.$t("videovote.messages.viewFullVideosOnWebsite"))+"\n      "),e("span",{staticClass:"mdi mdi-menu-left"})])]),t._v(" "),t._l(t.options,(function(option){return e("div",{key:option.mit_videovote_option_id,staticClass:"round drop-shadow p:16|48 p:16@<xs mb:16 bg:white lh:2 videoBG max-w:xs mx:auto",class:{voted:t.votes.includes(option.mit_videovote_option_id)||option.tickets,pending:!t.votes.includes(option.mit_videovote_option_id)},style:"background-image: url(/assets/videovote/previewicons/"+option.mit_videovote_option_id+".webp); color: black;"},[e("div",{staticClass:"mt:8 text:20"},[t._v(t._s(t.$t("videovote.enums.title."+option.mit_videovote_option_id)))]),t._v(" "),e("div",{staticClass:"italic text:12 mt:8"},[t._v("by "+t._s(t.$t("videovote.enums.author."+option.mit_videovote_option_id)))]),t._v(" "),e("div",{staticClass:"flex justify-content:space-between align-item:center mt:8"},[e("div",[t.previewVideoID&&t.previewVideoID==option.mit_videovote_option_id?e("span",{staticClass:"mdi mdi-youtube",on:{click:function(){return t.toggleVideoPreview()}}},[t._v(" "+t._s(t.$t("videovote.actions.hidePreview")))]):e("span",{staticClass:"mdi mdi-youtube",on:{click:function(){return t.toggleVideoPreview(option.mit_videovote_option_id)}}},[t._v(" "+t._s(t.$t("videovote.actions.showPreview")))])]),t._v(" "),e("div",[option.tickets?e("span",{staticClass:"mdi mdi-vote color:red-50 text:24"},[t._v("\n          "+t._s(option.tickets+" "+t.$t("videovote.messages.totalVotes"))+"\n        ")]):t.votes.includes(option.mit_videovote_option_id)?e("span",{staticClass:"mdi mdi-check color:green-50"},[t._v(" "+t._s(t.$t("videovote.messages.voted")))]):e("span",{staticClass:"r:6 p:8|4 drop-shadow",staticStyle:{border:"1px solid #aaa","background-color":"white"},on:{click:function(){return t.submitVote(option.mit_videovote_option_id)}}},[e("span",{staticClass:"mdi mdi-menu-right"}),t._v("\n          "+t._s(t.$t("videovote.actions.submitVote"))+"\n          "),e("span",{staticClass:"mdi mdi-menu-left"})])])]),t._v(" "),t.previewVideoID&&t.previewVideoID==option.mit_videovote_option_id?e("div",{staticClass:"mt:16"},[e("iframe",{staticClass:"round",staticStyle:{width:"100%"},attrs:{src:option.mit_videovote_option_preview_url}})]):t._e()])}))],2)}),[],!1,null,"0a3947b2",null);e.default=component.exports;installComponents(component,{Loading:o(245).default})}}]);