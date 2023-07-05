(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{398:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vue-router的params和query传参的使用和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router的params和query传参的使用和区别"}},[s._v("#")]),s._v(" Vue Router的params和query传参的使用和区别")]),s._v(" "),a("p",[s._v("首先简单说明以下 "),a("code",[s._v("$router")]),s._v(" 和 "),a("code",[s._v("$route")]),s._v(" 的区别")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$router")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 为VueRouter的实例，相当于一个全局的路由对象，里面包含很多属性和子对象\n// "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 相当于当前正在跳转的路由对象，可以从里面获取name，path，params，query\n\n//操作 路由跳转\nthis."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$router")]),s._v(".push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v(",\n    params: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),s._v(",\n        age: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'18'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n//读取 路由参数接收\nthis.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".params.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nthis.age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".params.age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_1、query传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、query传递参数"}},[s._v("#")]),s._v(" 1、query传递参数")]),s._v(" "),a("p",[s._v("query 使用name引入可以传递参数，使用path也可以，如果有人知道其中的原因请告诉我一下，非常感谢。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("//query传参，使用name跳转\nthis."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$router")]),s._v(".push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(",\n    query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20200220'")]),s._v(",\n        name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n//query传参，使用path跳转\nthis."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$router")]),s._v(".push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(",\n    query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20200303'")]),s._v(",\n        name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n//query传参接收\nthis.id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".query.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nthis.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".query.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("最终不管是path引入还是name引入效果都一样")]),s._v(" "),a("h2",{attrs:{id:"_2、params传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、params传递参数"}},[s._v("#")]),s._v(" 2、params传递参数")]),s._v(" "),a("p",[s._v("注：使用params传参只能使用name进行引入")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("//params传参 使用name\nthis."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$router")]),s._v(".push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(",\n  params: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'202002020'")]),s._v(",\n    name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'query'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n//params接收参数\nthis.id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".params.id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nthis.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" this."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$route")]),s._v(".params.name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n//路由\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\npath: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/:id/:name'")]),s._v(",\nname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(",\ncomponent: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" import"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/view/test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("需要注意的是：")]),s._v(" "),a("p",[s._v("params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系。\nparams一旦设置在路由，params就是路由的一部分，如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。")]),s._v(" "),a("h2",{attrs:{id:"_3、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、总结"}},[s._v("#")]),s._v(" 3、总结")]),s._v(" "),a("p",[s._v("1、传参可以使用params和query两种方式。"),a("br"),s._v("\n2、使用params传参只能用name来引入路由，即push里面只能是name:’xxxx’,不能是path:’/xxx’,因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！。"),a("br"),s._v("\n3、使用query传参使用path来引入路由。"),a("br"),s._v("\n4、params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系。"),a("br"),s._v("\n5、二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示。")])])}),[],!1,null,null,null);a.default=r.exports}}]);