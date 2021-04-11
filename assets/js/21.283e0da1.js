(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{379:function(s,t,a){"use strict";a.r(t);var n=a(45),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"css3中定位模型之position属性的使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3中定位模型之position属性的使用方法"}},[s._v("#")]),s._v(" css3中定位模型之position属性的使用方法")]),s._v(" "),a("h2",{attrs:{id:"一、position元素介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、position元素介绍"}},[s._v("#")]),s._v(" 一、position元素介绍")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("属性值")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("所属类别")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("static")]),s._v(" "),a("td",[s._v("默认值。没有定位，"),a("br"),s._v("元素出现在正常的流中(忽略top,bottom,left,right或者z-index声明)")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("relative")]),s._v(" "),a("td",[s._v("元素遵循默认的文档流。"),a("br"),s._v("相对于元素的原位置进行移动，周围元素忽略该元素的移动。"),a("br"),s._v("需要设置top、bottom、left、right值进行定位")]),s._v(" "),a("td",[s._v("相对定位")])]),s._v(" "),a("tr",[a("td",[s._v("absolute")]),s._v(" "),a("td",[s._v("元素脱离正常的文档流"),a("br"),s._v("相对于包含该元素的第一个非静态定位的元素进行定位，"),a("br"),s._v("若不满足条件，则会根据最外层的window进行定位。"),a("br"),s._v("需要设置top、bottom、left、right值进行定位")]),s._v(" "),a("td",[s._v("绝对定位")])]),s._v(" "),a("tr",[a("td",[s._v("fixed")]),s._v(" "),a("td",[s._v("元素脱离正常文档流。"),a("br"),s._v("相对于最外层的window进行定位，固定在屏幕上的某个位置，不因屏幕滚动而消失。"),a("br"),s._v("需要设置top、bottom、left、right值进行定位")]),s._v(" "),a("td",[s._v("绝对定位(固定定位)")])]),s._v(" "),a("tr",[a("td",[s._v("inherit")]),s._v(" "),a("td",[s._v("继承父元素的position值")]),s._v(" "),a("td")])])]),s._v(" "),a("p",[s._v("设置position属性只会让元素脱离文档流，需要设置偏移属性使元素移动。包括4个偏移属性，分别为top、bottom、left、right。")]),s._v(" "),a("p",[s._v("具体描述如下表格所示：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("偏移属性")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("left")]),s._v(" "),a("td",[s._v("表示向元素左端插入多少距离，正值使元素右移多少距离。")])]),s._v(" "),a("tr",[a("td",[s._v("right")]),s._v(" "),a("td",[s._v("表示向元素右端插入多少距离，正值使元素左移多少距离。")])]),s._v(" "),a("tr",[a("td",[s._v("bottom")]),s._v(" "),a("td",[s._v("表示向元素下方插入多少距离，正值使元素上移多少距离。")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("表示向元素上方插入多少距离，正值使元素下移多少距离。")])])])]),s._v(" "),a("p",[s._v("偏移属性的值可以为负值，负值时向相同方向移动。一般设置时设置一个或两个偏移量即可。")]),s._v(" "),a("p",[s._v("当元素中设置position为非默认值后，该元素会成为设定位置的元素。在元素变成设定位置后，就成为了最近的绝对定位后代元素的定位参考点，即该元素为设置为绝对定位子元素的第一个非静态定位的元素。")]),s._v(" "),a("p",[s._v("目前所有主流的浏览器都支持position属性的使用，但注意所有IE浏览器均不支持inherit属性值。")]),s._v(" "),a("h2",{attrs:{id:"二、属性值详细介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、属性值详细介绍"}},[s._v("#")]),s._v(" 二、属性值详细介绍")]),s._v(" "),a("p",[s._v("首先设置示例的显示内容，分别设定了三个div块元素，并分别设置class属性值。HTML源代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"div0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"div1 div"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("This is div1."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"div2 div"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("This is div2."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"div3 div"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("This is div3."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("设置原始示例的显示效果，为了截图容易理解，将body设置为3px的红色边框。包围三个div块的大div块设置1px的黑边框，灰色的背景色以及50%的宽度。三个div块则设置相同的边框和100px的高度。CSS源代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    border: 3px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.div0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    border: 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    width: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#f0f0f0;")]),s._v("\n    margin: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.div "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    height: 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    border: 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    margin: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    padding: 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("最终的示例效果图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYs9wq.png",alt:"aYs9wq.png"}})]),s._v(" "),a("p",[s._v("1、"),a("strong",[s._v("relative")]),s._v("——使元素相对于文档流的位置偏移一段距离")]),s._v(" "),a("p",[s._v("元素遵循默认的文档流，相对于元素的原位置进行移动，周围元素忽略该元素的移动。需要设置top、bottom、left、right的值进行相对定位。\n举个栗子：设置第二个div块的position属性为relative，并且设置偏移量为向右偏移50px、向下偏移50px。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#e0e0e0;")]),s._v("\n    position: relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    left: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("可以看到如下效果图中，第一和第三块div块并没有移动位置，说明relative属性值使元素遵循默认的文档流。设置偏移量后，第二块div块则向右、向下分别偏移50px。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsikV.png",alt:"aYsikV.png"}})]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#e0e0e0;")]),s._v("\n    position: relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    left: -50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("当设置左偏移量为-50px时，则如下图所示，第二元素块向左偏移了50px。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsFYT.png",alt:"aYsFYT.png"}})]),s._v(" "),a("p",[s._v("2、"),a("strong",[s._v("absolute")]),s._v("——使元素相对于文档流的位置或最近定位祖先元素的位置偏移一定的距离"),a("br"),s._v("\n元素脱离默认的文档流，相对于包含该元素的第一个非静态定位的元素进行定位。需要设置top、bottom、left、right值进行绝对定位。")]),s._v(" "),a("p",[s._v("对于元素，使用width、height可以设置它的尺寸，设定百分数是相对于最近定位祖先元素的尺寸。")]),s._v(" "),a("p",[s._v("举个栗子*2：设置第二个div块的position属性为absolute，并且设置偏移量为向右偏移50px、向下偏移50px。注意此时没有设置该元素的父元素的position值为非默认值。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#e0e0e0;")]),s._v("\n    position: absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    left: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("可以从图中看到，第三块div元素向上移动，第二块元素脱离了原来的文档流。而在没有设置该元素的父元素的position值为非默认值时，第二块div元素块是相对于body的值来向右、向下偏移的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsEpF.png",alt:"aYsEpF.png"}})]),s._v(" "),a("p",[s._v("再来看设置了该元素的父元素的position值为非默认值的情况。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   border: 1px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   width: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#f0f0f0;")]),s._v("\n   margin: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   position: relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("当设置了该元素的父元素的position值为非默认值的情况时，此时的第二块div元素块则是相对于包含三个元素块的大div元素块来进行向右、向下的偏移。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYskfU.png",alt:"aYskfU.png"}})]),s._v(" "),a("p",[s._v("3、"),a("strong",[s._v("fixed")]),s._v("——使元素相对于视口偏移一定的距离"),a("br")]),s._v(" "),a("p",[s._v("元素脱离默认的文档流，相对于最外层的window进行定位，固定在屏幕上的某个位置，不因屏幕滚动而消失。需要设置top、bottom、left、right值进行定位。")]),s._v(" "),a("p",[s._v("举个栗子*3：设置第二个div块的position属性为fixed，并且设置偏移量为向右偏移20px、向下偏移200px。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#e0e0e0;")]),s._v("\n    position: fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    right: 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("从图中看出，第二个div元素块的位置在右下角，是相对于视口进行了向左20px、向下200px的偏移。并且在页面滑动时，也会保持着同样的位置不变。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsVl4.png",alt:"aYsVl4.png"}})]),s._v(" "),a("h2",{attrs:{id:"三、z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、z-index"}},[s._v("#")]),s._v(" 三、Z-index")]),s._v(" "),a("p",[s._v("Z-index可用于设置元素之间的层叠顺序。只对于定位元素有效，即只对于position属性的属性值为absolute、relative和fixed有效。静态定位元素按照文档出现顺序从后往前进行堆叠。设定位置元素忽略文档出现顺序，根据z-index值由小到大的顺序从后往前堆叠，即Z-index的值越高表示元素显示的顺序越优先。设置为负值z-index的设定位置元素位于静态定位元素和非设定位置浮动元素之下。z-index值不必为连续值，其默认值为auto。当设置的值相同时，后加载的元素优先显示。"),a("br")]),s._v(" "),a("p",[s._v("举个栗子*4：将relative示例的元素设置-index值为-1。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".div2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#e0e0e0;")]),s._v("\n    position: relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    left: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    z-index: -1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("从图中可以看到，当元素的z-index设置为负值时，设定位置元素是位于静态定位元素之下，即是di第二个div元素的父元素div0的位置之下。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYseX9.png",alt:"aYseX9.png"}})]),s._v(" "),a("h2",{attrs:{id:"四、实际应用-使用绝对定位显示二级菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实际应用-使用绝对定位显示二级菜单"}},[s._v("#")]),s._v(" 四、实际应用——使用绝对定位显示二级菜单")]),s._v(" "),a("p",[s._v("使用无序列表和Flex布局导航栏菜单，HTML源代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ul "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MenuWrap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ul "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MenuWrap2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MenuWrap2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Item"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Item"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Item"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("About"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ListItem"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Products"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("将包裹二级菜单的ul元素设置的position属性设置为非默认值relative。再将二级菜单的position属性设置为绝对定位，根据一级菜单的高度设置偏移量。并且将二级菜单的显示方式display属性设置为none值表示不显示。最后再通过JavaScript设置鼠标悬浮经过一级菜单栏时显示二级菜单栏。CSS源代码如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(".MenuWrap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#f0f0f0;")]),s._v("\n    min-height: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".75em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    display: flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    align-items: center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    list-style-type: none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    position: relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.ListItem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    color: black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    text-decoration: none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    padding:0px 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nul.MenuWrap2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    padding: 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.MenuWrap2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    list-style-type: none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    background-color: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#f0f0f0;")]),s._v("\n    min-width: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    text-align: center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    position: absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    top: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".75em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    display: none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.MenuWrap2 li "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    padding-bottom: 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.ListItem2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    color:black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    text-decoration: none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("元素的定位模型中需要区分每个属性值的不同定位方式，分为绝对定位、相对定位、固定定位以及默认定位和继承父元素。其中绝对定位和固定定位都脱离原本的文档流，而相对定位则遵循原本的文档流。设置元素的定位方式后，还需要指定偏移量。可以从上、右、下、左四个方向进行偏移。并且可以利用Z-index属性设置元素之间的层叠顺序。")]),s._v(" "),a("p",[s._v("定位模型是在CSS中设置元素位置的重要方式之一，使用该模型可以实现页面常用的菜单导航、悬浮公告等效果。")])])}),[],!1,null,null,null);t.default=r.exports}}]);