(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{381:function(t,n,e){"use strict";e.r(n);var o=e(134),r=e.n(o),l={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:r.a[this.type].background,color:r.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=e(29),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"position:relative"},[n("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(n){return n.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?n("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(381).default})},451:function(t,n,e){"use strict";e.r(n);var o={},r=e(29),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex"},[n("Button",{staticClass:"mr:8",on:{click:function(n){return t.params.editHandler(t.params)}}},[t._v(t._s(t.$t("common.actions.edit")))]),t._v(" "),n("Button",{attrs:{type:"negative"},on:{click:function(n){return t.params.deleteHandler(t.params)}}},[t._v(t._s(t.$t("common.actions.delete")))])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(381).default})}}]);