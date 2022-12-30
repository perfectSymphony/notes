(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{304:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"深入理解css之vertical-align"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解css之vertical-align"}},[s._v("#")]),s._v(" 深入理解css之vertical-align")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("vertical-align用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。也就是说，对于块级元素，vertical-align是不起作用的。")]),s._v(" "),a("h2",{attrs:{id:"vertical-align的各类属性值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-align的各类属性值"}},[s._v("#")]),s._v(" vertical-align的各类属性值")]),s._v(" "),a("p",[s._v("vertical-align的属性值可以归为以下4类：")]),s._v(" "),a("ul",[a("li",[s._v("线类，如 baseline、top、middle、bottom；")]),s._v(" "),a("li",[s._v("文本类，如 text-top、text-bottom；")]),s._v(" "),a("li",[s._v("上标下标类，如 sub、super；")]),s._v(" "),a("li",[s._v("数值百分比类，如 10px、1em、5%；")])]),s._v(" "),a("h2",{attrs:{id:"线类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线类"}},[s._v("#")]),s._v(" 线类")]),s._v(" "),a("p",[s._v("baseline，baseline为vertical-align的默认值，其意思是指基线对齐，所谓基线，指的是字母x的下边缘，具体可看"),a("a",{attrs:{href:""}},[s._v("深入理解css之line-height")]),s._v("有讲解到，不懂的小伙伴建议先看看这篇文章。我们来看个例子，代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    line-height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ccc;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("文本"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rHxDKg.png",alt:"rHxDKg.png"}})]),s._v(" "),a("p",[s._v("由于baseline是默认值，所以可以不用写。.box的line-height为100px，这其实是给“strut”设置的（不懂strut概念的可以看看"),a("a",{attrs:{href:""}},[s._v("深入理解css盒子模型")]),s._v("，简单点说就是每一个行框盒子都有一个看不见的节点，该节点继承了line-height），因此.text对齐于该节点的基线（可以想象成这个看不见的节点有一个字母x，而.text就是跟这个字母x的下边缘对齐）")]),s._v(" "),a("p",[s._v("关于baseline，有一个需要注意的地方就是inline-block元素，如果一个inline-block元素，里面没有内联元素，或者overflow不是visible，则该元素的基线是其margin底边缘；否则其基线就是元素里面最后一行内联元素的基线。例子如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    display: inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ccc;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"container"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("文本"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rHz1J0.png",alt:"rHz1J0.png"}})]),s._v(" "),a("p",[s._v("top，对于内联元素，指的是元素的顶部和当前行框盒子的顶部对齐；对于table-cell元素，指的是元素的顶padding边缘和表格行的顶部对齐。例子如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    line-height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ccc;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.top "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    line-height: normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    vertical-align: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"top"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("文本"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rbSl0H.png",alt:"rbSl0H.png"}})]),s._v(" "),a("p",[s._v("bottom，跟top类似，将顶部换成底部即可。")]),s._v(" "),a("p",[s._v("middle，这个属性值用得比较多。对于内联元素指的是元素的垂直中心点与行框盒子基线往上1/2x-height处对齐，简单点说就是字母x的中心位置对齐；对于table-cell元素，指的是单元格填充盒子相对于外面的表格行居中对齐。基本上所有字体中，字母x的位置都是偏下一点的，font-size越大偏移越明显，因此，字母x中心的位置不是行框盒子的中心，也就是说vertical-align只能实现近似垂直居中对齐。")]),s._v(" "),a("h2",{attrs:{id:"文本类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本类"}},[s._v("#")]),s._v(" 文本类")]),s._v(" "),a("p",[s._v("text-top，指的是盒子的顶部和父级内容区域的顶部对齐。")]),s._v(" "),a("p",[s._v("text-bottom，指的是盒子的底部和父级内容区域的底部对齐。")]),s._v(" "),a("p",[s._v("例子如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    width: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    line-height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ccc;")]),s._v("\n    font-size: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.f12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font-size: 12px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.f16 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font-size: 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.f20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font-size: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.text-top "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    line-height: normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    vertical-align: text-top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    width: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f12"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("12px"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f16"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("16px"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f20"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("20px"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text-top"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./card.jpg"')]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rbCF0g.png",alt:"rbCF0g.png"}})]),s._v(" "),a("p",[s._v("所谓内容区域，可以看成是鼠标选中文字后高亮的背景色区域，上面的例子中，由于父元素设置的是20px，所以图片的vertical-align设置text-top的时候，就可以看成是跟子元素为20px元素的内容区域顶部对齐。")]),s._v(" "),a("h2",{attrs:{id:"上标下标类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上标下标类"}},[s._v("#")]),s._v(" 上标下标类")]),s._v(" "),a("p",[s._v("上标和下标对应着两个标签super和sub，super在上面，sub在下面，这两个属性值在数学公式和化学表达式中用得比较多，平时我们开发几乎用不到，也没啥好讲的。")]),s._v(" "),a("h2",{attrs:{id:"数值百分比类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值百分比类"}},[s._v("#")]),s._v(" 数值百分比类")]),s._v(" "),a("p",[s._v("vertical-align是支持数值的，并且兼容性也非常好，但大部分开发人员却不知道vertical-align支持数值。对于数值，正值表示由基线往上偏移，负值表示由基线往下偏移。而百分比则是基于line-height来计算的，百分比用得比较少，因为line-height一般都是开发人员给出的，这时候数值就可以精确定位元素，不需要再使用百分比再去计算一遍。使用数值的代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    width: 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    line-height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ccc;")]),s._v("\n    font-size: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.num "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    line-height: normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    vertical-align: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("文本"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("效果如下：\n"),a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rbPEDO.png",alt:"rbPEDO.png"}})]),s._v(" "),a("h2",{attrs:{id:"vertical-align起作用的前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-align起作用的前提"}},[s._v("#")]),s._v(" vertical-align起作用的前提")]),s._v(" "),a("p",[s._v("vertical-align起作用是有前提条件的，这个前提条件就是：只能应用于内联元素以及display值为table-cell的元素。在css中，有些css属性是会改变元素的display值的，例如float和position: absolute，一旦设置了这两个属性之一，元素的display值就是变为block，因此，vertical-align也就失去了作用。下面这段代码这样写就是错的：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("   span "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        float: left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        vertical-align: middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" /* 错误，该行代码无效 */\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("另外，更多人遇到的是以下这种无效的情况：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    height: 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.box "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    vertical-align: middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.jpg"')]),s._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("其实，不是vertical-align无效，而是前面所说的“strut”的影响，由于.box没有设置line-height，所以“strut”的line-height就非常小，比图片的高度小很多，vertical-align: middle没法发挥作用。这时给.box一个比较高的line-height，就会看到vertical-align起作用了：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    height: 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    line-height: 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"vertical-align与line-height的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-align与line-height的关系"}},[s._v("#")]),s._v(" vertical-align与line-height的关系")]),s._v(" "),a("p",[s._v("前面讲了，vertical-align的百分比值是根据line-height来计算的。但实质上，只要是内联元素，这两个元素都会同时在起作用。如下例子：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".box "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    line-height: 32px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.box "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" span "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    font-size: 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("文本"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/29/rbkp5Q.png",alt:"rbkp5Q.png"}})]),s._v(" "),a("p",[s._v('从代码上看，好像.box的高度会是32px，但实质上.box的高度会比32px还要高。原因是"strut"继承了line-height: 32px，span也继承了line-height: 32px，但两者的font-size不一样，这就导致了"strut"的font-size比较小，而span的font-size比较大，也就是说它们的基线不在同一位置上，"strut"偏上一点，而span默认又是基线对齐，为此，span总体会往上移以便跟"strut"基线对齐，.box元素就是这样被撑高了。而解决方案可以有以下几种：')]),s._v(" "),a("ul",[a("li",[s._v("span元素不使用基线对齐，可以改为top对齐")]),s._v(" "),a("li",[s._v("span元素块状化")]),s._v(" "),a("li",[s._v("line-height设置为0")]),s._v(" "),a("li",[s._v("font-size设置为0")])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("讲解了vertical-align的各类属性值及其效果")]),s._v(" "),a("li",[s._v("vertical-align起作用的前提是内联元素")]),s._v(" "),a("li",[s._v("vertical-align与line-height都是同时作用在内联元素上的")])])])}),[],!1,null,null,null);a.default=e.exports}}]);