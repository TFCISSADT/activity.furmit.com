(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{387:function(t,e,r){"use strict";r.r(e);r(31),r(21),r(39),r(11),r(48),r(35),r(49);var n=r(13);r(85);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=r(134),f=r.n(l),O={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:f.a}},computed:{computedErrorStyle:function(){return{color:f.a.negative.background}}}},d=r(29),component=Object(d.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,c(c({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports}}]);