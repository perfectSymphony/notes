(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{322:function(s,o,e){"use strict";e.r(o);var t=e(1),a=Object(t.a)({},(function(){var s=this,o=s._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h2",{attrs:{id:"localstorage和sessionstorage区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localstorage和sessionstorage区别"}},[s._v("#")]),s._v(" localStorage和sessionStorage区别")]),s._v(" "),o("p",[s._v("localStorage 和 sessionStorage一样都是用来存储客户端临时信息的对象。")]),s._v(" "),o("p",[s._v("他们均只能存储字符串类型的对象(虽然规范中可以存储其他类型的对象，但是目前位置没有浏览器对其进行实现)。\nlocalStorage生命周期是永久的，这意味着用户除非在浏览器上清除localStorage信息，否则，这些信息将永远存在。\nsessionStorage生命周期为当前窗口或者当前标签页，一旦窗口或者标签页被永久关闭，那么所有通过sessionStorage存储的数据也就被清空了。")]),s._v(" "),o("p",[s._v("不同的浏览器无法共享localStorage或者sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的localStorage(页面属于相同域名和端口)，但是不同页面或者标签页间无法共享sessionStorage的信息。这里需要注意，页面及标签仅指顶级窗口，如果标签页包含多个iframe标签且他们属于同源页面，那么他们之间可以共享sessionStorage的。")])])}),[],!1,null,null,null);o.default=a.exports}}]);