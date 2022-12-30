(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{292:function(s,a,t){"use strict";t.r(a);var n=t(13),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"css中的bfc详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css中的bfc详解"}},[s._v("#")]),s._v(" CSS中的BFC详解")]),s._v(" "),a("h2",{attrs:{id:"一、何为bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、何为bfc"}},[s._v("#")]),s._v(" 一、何为BFC")]),s._v(" "),a("p",[s._v("BFC（Block Formatting Context）格式化上下文，是web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。")]),s._v(" "),a("h2",{attrs:{id:"二、形成bfc的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、形成bfc的条件"}},[s._v("#")]),s._v(" 二、形成BFC的条件")]),s._v(" "),a("p",[s._v("1、浮动元素，float除none以外的值。"),a("br"),s._v("\n2、定位元素，position（absolute、fixed）。"),a("br"),s._v("\n3、display为以下其中之一的值inline-block、table-cell、table-caption。"),a("br"),s._v("\n4、overflow除了 visible 以外的值（hidden、auto、scroll）。"),a("br")]),s._v(" "),a("h2",{attrs:{id:"三、bfc的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、bfc的特性"}},[s._v("#")]),s._v(" 三、BFC的特性")]),s._v(" "),a("p",[s._v("1、内部的Box会在垂直方向上一个接一个的放置。"),a("br"),s._v("\n2、垂直方向上的距离由margin决定。"),a("br"),s._v("\n3、bfc的区域不会与float的元素区域重叠。"),a("br"),s._v("\n4、计算bfc的高度时，浮动元素也参与计算。"),a("br"),s._v("\n5、bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。"),a("br")]),s._v(" "),a("p",[s._v("下面使用案例来帮助认识理解：")]),s._v(" "),a("h2",{attrs:{id:"四、案例实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、案例实践"}},[s._v("#")]),s._v(" 四、案例实践")]),s._v(" "),a("h3",{attrs:{id:"_1-bfc中的盒子对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-bfc中的盒子对齐"}},[s._v("#")]),s._v(" （1）BFC中的盒子对齐")]),s._v(" "),a("p",[s._v("特性的第一条是：内部的Box（块级元素）会在垂直方向上一个接一个的放置。（即便不在BFC里块级盒子也会垂直排列）")]),s._v(" "),a("h3",{attrs:{id:"_2-外边距折叠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-外边距折叠"}},[s._v("#")]),s._v(" （2）外边距折叠")]),s._v(" "),a("p",[s._v("特性的第二条：垂直方向上的距离由margin决定\n在常规文档流中，两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYrzOs.th.png",alt:""}})]),s._v(" "),a("p",[s._v("html:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"container"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("css:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .container "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .box1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        height: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: 10px "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .box2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        height: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: 20px "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("这里我门可以看到，第一个子盒子有上边距（不会发生margin穿透的问题）；两个子盒子的垂直距离为20px而不是30px，因为垂直外边距会折叠，间距以较大的为准。")]),s._v(" "),a("p",[s._v("那么有没有方法让垂直外边距不折叠呢？答案是：有。特性的第5条就说了：bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素，同样外面的元素不会影响到BFC内的元素。所以就让box1或box2再处于另一个BFC中就行了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYrxyj.th.png",alt:""}})]),s._v(" "),a("p",[s._v("html:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"container"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wrapper"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("css:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .container "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .wrapper "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .box1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        height: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: 10px "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .box2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        height: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: 20px "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_3-不被浮动元素覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-不被浮动元素覆盖"}},[s._v("#")]),s._v(" （3）不被浮动元素覆盖")]),s._v(" "),a("p",[s._v("以常见的两栏布局为例。")]),s._v(" "),a("p",[s._v("左边固定宽度，右边不设宽，因此右边的宽度自适应，随浏览器窗口大小的变化而变化。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYrvlQ.md.png",alt:""}})]),s._v(" "),a("p",[s._v("html:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("css:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin-right: 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("/*创建bfc */\n        height: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: purple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("三栏布局:")]),s._v(" "),a("p",[s._v("左右两边固定宽度，中间不设宽，因此中间的宽度自适应，随浏览器的大小变化而变化。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYspmn.th.png",alt:"1.4"}})]),s._v(" "),a("p",[s._v("html:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"contain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("css:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    .column:nth-of-type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  /*创建bfc*/\n        height: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("也可以用来防止字体环绕：")]),s._v(" "),a("p",[s._v("众所周知，浮动的盒子会遮盖下面的盒子，但是下面盒子里的文字是不会被遮盖的，文字反而还会环绕浮动的盒子。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYrjSg.png",alt:"aYrjSg.png"}})]),s._v(" "),a("p",[s._v("html:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"left"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好\n       你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好\n       你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("css:")]),s._v(" "),a("p",[s._v("(1) 环绕")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .left "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        /* overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" */\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（2）利用bfc防止环绕")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    .left "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        background-color: yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        background-color: green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        overflow: hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（4）BFC包含浮动的块")]),s._v(" "),a("p",[s._v("利用overflow:hidden清除浮动，因为浮动的盒子无法支撑处于标准文档流的父盒子的height。")])])}),[],!1,null,null,null);a.default=r.exports}}]);