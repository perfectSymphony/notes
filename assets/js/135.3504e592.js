(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{413:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"从单页应用改造成多页应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从单页应用改造成多页应用"}},[t._v("#")]),t._v(" 从单页应用改造成多页应用")]),t._v(" "),s("h2",{attrs:{id:"需求再现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求再现"}},[t._v("#")]),t._v(" 需求再现")]),t._v(" "),s("p",[t._v("项目A/B/C的内容是交叉的，有的页面不同，有的页面和组件是公用的，例如A项目多了个人中心及其里面所有内容（最全的一个项目，但是是放在微信中的，需要获取微信授权），B项目是通用版的项目（也就是说可以放在微信，也可以放在app内，不需要获取授权之类的。）,C项目是A/B项目中共有的一个页面功能抽取出来了。\n所以有的时候比如说这块功能需要调整，那么就得A/B/C三个项目关于这块的功能与页面也要一起调整。")]),t._v(" "),s("h2",{attrs:{id:"关于动态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于动态组件"}},[t._v("#")]),t._v(" 关于动态组件")]),t._v(" "),s("p",[t._v("这一块做的主要是"),s("code",[t._v('<components :is="xxx">')]),t._v("配合vuex来做的。\n前端页面改成上述模式，具体的组件排列顺序由后台传过来，比如说请求接口的时候，告诉它这是在D页面，并且把相应的机构号6传过去，后台传给我一个组件数组，moduleList:['2', '1', '3', '4']，然后我前端的"),s("code",[t._v('<components :is="item" v-for="(item, index) in moduleList" :key="index">')]),t._v("会按照moduleList里的组件顺序来动态渲染组件，之前一些父子组件传数据，在这里就变得不太适用了，所以这里的数据改用vuex存储。考虑到vuex在刷新数据丢失的问题，部分比较重要的，不想重新请求的，改用sessionStorage存储。")]),t._v(" "),s("h2",{attrs:{id:"关于多入口多出口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于多入口多出口"}},[t._v("#")]),t._v(" 关于多入口多出口")]),t._v(" "),s("p",[t._v("其实就是最开始的项目入口是"),s("code",[t._v("App.vue")]),t._v("和"),s("code",[t._v("main.js")]),t._v("，打包出来的出入口是"),s("code",[t._v("index.html")]),t._v("，然后现在增加了两个，我这边是增加了"),s("code",[t._v("genneral.js")]),t._v("和"),s("code",[t._v("genneral.html")]),t._v("以及"),s("code",[t._v("single.js")]),t._v("和"),s("code",[t._v("single.html")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("1.首先要更改vue-cli生成的webpack里的参数，声明一下我这个版本的webpack版本还是2.6.x的，比较老了，现在应该都到4.x.x了吧。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/atiRSI.png",alt:"atiRSI.png"}})]),t._v(" "),s("p",[t._v("PS：路由和store记得要各自独立，因为我这里的vuex很少只涉及一两个模块。并且仅仅是传递数据之类的，所以这里没有做成独立的。")]),t._v(" "),s("ul",[s("li",[t._v("2.修改build/webpack.base.conf.js")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/atiWlt.png",alt:"atiWlt.png"}})]),t._v(" "),s("ul",[s("li",[t._v("3.修改 build/webpack.dev.conf.js")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/atif6P.png",alt:"atif6P.png"}})]),t._v(" "),s("ul",[s("li",[t._v("4.修改 build/webpack.prod.conf.js")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/atihOf.png",alt:"atihOf.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/ati5m8.png",alt:"ati5m8.png"}})]),t._v(" "),s("ul",[s("li",[t._v("5.修改 config/index.js\n"),s("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/atioTg.png",alt:"atioTg.png"}})])]),t._v(" "),s("blockquote",[s("p",[t._v("理一下对应关系")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("main.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" App.vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" router/index.js  A项目\ngeneral.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" general.vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" router/general.js  B项目\nsingle.js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" single.vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" router/single.js C项目\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("blockquote",[s("p",[t._v("部署的时候分三个不同的url")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xxxxx/index.html对应A项目\nxxxxx/general.html 对应B项目\nxxxxx/single.html对应C项目\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("至于页面中的差异，我是通过v-if来控制，A项目的D页面是否有顶部tab，B项目的D页面是否有底部footer。\n因为这些页面大致是一样，仅有部分微调。所以改成用v-if来控制。")]),t._v(" "),s("p",[t._v("大神给的"),s("a",{attrs:{href:"https://github.com/muzi8/multiPage-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);