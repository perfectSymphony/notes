(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{387:function(_,o,t){"use strict";t.r(o);var v=t(4),r=Object(v.a)({},(function(){var _=this,o=_._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h2",{attrs:{id:"彻底搞懂js中的prototype、-proto-与constructor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#彻底搞懂js中的prototype、-proto-与constructor"}},[_._v("#")]),_._v(" 彻底搞懂JS中的prototype、__proto__与constructor")]),_._v(" "),o("h3",{attrs:{id:"可以先看一下最后的总结部分再回过头来完整看完"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#可以先看一下最后的总结部分再回过头来完整看完"}},[_._v("#")]),_._v(" 可以先看一下最后的总结部分再回过头来完整看完")]),_._v(" "),o("h3",{attrs:{id:"_1-前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[_._v("#")]),_._v(" 1. 前言")]),_._v(" "),o("p",[_._v("作为一名前端工程师，必须搞懂JS中的"),o("code",[_._v("prototype")]),_._v("、"),o("code",[_._v("__proto__")]),_._v("与"),o("code",[_._v("constructor")]),_._v("属性，相信很多初学者对这些属性存在许多困惑，容易把它们混淆，本文旨在帮助大家理清它们之间的关系并彻底搞懂它们。这里说明一点，"),o("code",[_._v("__proto__")]),_._v("属性的两边是各由两个下划线构成（这里为了方便大家看清，在两下划线之间加入了一个空格："),o("code",[_._v("_ _proto_ _")]),_._v("，读作"),o("code",[_._v("“dunder proto”")]),_._v("，"),o("code",[_._v("“double underscore proto”")]),_._v("的缩写），实际上，该属性在ES标准定义中的名字应该是"),o("code",[_._v("[[Prototype]]")]),_._v("，具体实现是由浏览器代理自己实现，谷歌浏览器的实现就是将"),o("code",[_._v("[[Prototype]]")]),_._v("命名为"),o("code",[_._v("__proto__")]),_._v("，大家清楚这个标准定义与具体实现的区别即可（名字有所差异，功能是一样的），可以通过该方式检测引擎是否支持这个属性："),o("code",[_._v("Object.getPrototypeOf({__proto__: null}) === null")]),_._v("。本文基于谷歌浏览器（版本 72.0.3626.121）的实验结果所得。\n   现在正式开始！ 让我们从如下一个简单的例子展开讨论，并配以相关的图帮助理解：")]),_._v(" "),o("div",{staticClass:"language-sh line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("function")]),_._v(" "),o("span",{pre:!0,attrs:{class:"token function-name function"}},[_._v("Foo")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("..")]),_._v("."),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[_._v("let")]),_._v(" f1 "),o("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" new Foo"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[_._v("1")]),o("br"),o("span",{staticClass:"line-number"},[_._v("2")]),o("br")])]),o("p",[_._v("以上代码表示创建一个构造函数"),o("code",[_._v("Foo()")]),_._v("，并用"),o("code",[_._v("new")]),_._v("关键字实例化该构造函数得到一个实例化对象"),o("code",[_._v("f1")]),_._v("。这里稍微补充一下new操作符将函数作为构造器进行调用时的过程："),o("code",[_._v("函数被调用，然后新创建一个对象，并且成了函数的上下文（也就是此时函数内部的this是指向该新创建的对象，这意味着我们可以在构造器函数内部通过this参数初始化值），最后返回该新对象的引用，")]),_._v("详细请看："),o("a",{attrs:{href:"https://blog.csdn.net/cc18868876837/article/details/103149502",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解JavaScript中的new操作符"),o("OutboundLink")],1),_._v("。虽然是简简单单的两行代码，然而它们背后的关系却是错综复杂的，如下图所示：\n"),o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLQsA.png",alt:"aYLQsA.png"}})]),_._v(" "),o("p",[_._v("看到这图别怕，让我们一步步剖析，彻底搞懂它们！\n"),o("strong",[_._v("图的说明")]),_._v("：右下角为图例，红色箭头表示"),o("code",[_._v("__proto__")]),_._v("属性指向、绿色箭头表示"),o("code",[_._v("prototype")]),_._v("属性的指向、棕色实线箭头表示"),o("code",[_._v("本身具有的constructor属性")]),_._v("的指向，棕色虚线箭头表示"),o("code",[_._v("继承而来的constructor属性")]),_._v("的指向；蓝色方块表示对象，浅绿色方块表示函数（"),o("code",[_._v("这里为了更好看清，Foo()仅代表是函数，并不是指执行函数Foo后得到的结果，图中的其他函数同理")]),_._v("）。图的中间部分即为它们之间的联系，图的最左边即为例子代码。")]),_._v(" "),o("h3",{attrs:{id:"_2-proto-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-proto-属性"}},[_._v("#")]),_._v(" 2. _ _ proto _ _ 属性")]),_._v(" "),o("p",[_._v("首先，我们需要牢记两点：①"),o("code",[_._v("__proto__")]),_._v("和"),o("code",[_._v("constructor")]),_._v("属性是"),o("code",[_._v("对象")]),_._v("所独有的；② "),o("code",[_._v("prototype")]),_._v("属性是"),o("code",[_._v("函数")]),_._v("所独有的。但是由于JS中函数也是一种对象，所以函数也拥有"),o("code",[_._v("__proto__")]),_._v("和"),o("code",[_._v("constructor")]),_._v("属性，这点是致使我们产生困惑的很大原因之一。上图有点复杂，我们把它按照属性分别拆开，然后进行分析：")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLEa6.png",alt:"aYLEa6.png"}})]),_._v(" "),o("p",[_._v("第一，这里我们仅留下 "),o("code",[_._v("__proto__")]),_._v("属性，它是"),o("code",[_._v("对象所独有的")]),_._v("，可以看到"),o("code",[_._v("__proto__")]),_._v("属性都是由"),o("code",[_._v("一个对象指向一个对象")]),_._v("，即指向它们的原型对象（也可以理解为父对象），那么这个属性的作用是什么呢？它的"),o("code",[_._v("作用")]),_._v("就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的"),o("code",[_._v("__proto__")]),_._v("属性所指向的那个对象（可以理解为父对象）里找，如果父对象也不存在这个属性，则继续往父对象的"),o("code",[_._v("__proto__")]),_._v("属性所指向的那个对象（可以理解为爷爷对象）里找，如果还没找到，则继续往上找…直到原型链顶端null（可以理解为原始人。。。），再往上找就相当于在"),o("code",[_._v("null")]),_._v("上取值，会报错（可以理解为，再往上就已经不是“人”的范畴了，找不到了，到此结束，"),o("code",[_._v("null")]),_._v("为原型链的终点），由以上这种通过"),o("code",[_._v("__proto__")]),_._v("属性来连接对象直到"),o("code",[_._v("null")]),_._v("的一条链即为我们所谓的"),o("code",[_._v("原型链")]),_._v("。\n  其实我们平时调用的字符串方法、数组方法、对象方法、函数方法等都是靠"),o("code",[_._v("__proto__")]),_._v("继承而来的。")]),_._v(" "),o("h3",{attrs:{id:"_3-prototype属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-prototype属性"}},[_._v("#")]),_._v(" 3. prototype属性")]),_._v(" "),o("p",[_._v("第二，接下来我们看 "),o("code",[_._v("prototype")]),_._v("属性：\n"),o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLAVx.png",alt:"aYLAVx.png"}})]),_._v(" "),o("p",[o("code",[_._v("prototype")]),_._v("属性，别忘了一点，就是我们前面提到要牢记的两点中的第二点，它是"),o("code",[_._v("函数所独有的")]),_._v("，它是从"),o("code",[_._v("一个函数指向一个对象")]),_._v("。它的含义是"),o("code",[_._v("函数的原型对象")]),_._v("，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象，由此可知："),o("code",[_._v("f1.__proto__ === Foo.prototype")]),_._v("，它们两个完全一样。那"),o("code",[_._v("prototype")]),_._v("属性的作用又是什么呢？它的"),o("code",[_._v("作用")]),_._v("就是包含可以由特定类型的所有实例共享的属性和方法，也就是让该函数所实例化的对象们都可以找到公用的属性和方法。"),o("code",[_._v("任何函数在创建的时候，其实会默认同时创建该函数的prototype对象。")])]),_._v(" "),o("h3",{attrs:{id:"_4-constructor属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-constructor属性"}},[_._v("#")]),_._v(" 4. constructor属性")]),_._v(" "),o("p",[_._v("最后，我们来看一下 "),o("code",[_._v("constructor")]),_._v(" 属性：\n"),o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLVIK.png",alt:"aYLVIK.png"}})]),_._v(" "),o("p",[o("code",[_._v("constructor")]),_._v("属性也是"),o("code",[_._v("对象才拥有的")]),_._v("，它是从"),o("code",[_._v("一个对象指向一个函数")]),_._v("，含义就是"),o("code",[_._v("指向该对象的构造函数")]),_._v("，每个对象都有构造函数（本身拥有或继承而来，继承而来的要结合"),o("code",[_._v("__proto__")]),_._v("属性查看会更清楚点，如下图所示），从上图中可以看出"),o("code",[_._v("Function")]),_._v("这个对象比较特殊，它的构造函数就是它自己（因为Function可以看成是一个函数，也可以是一个对象），所有函数和对象最终都是由Function构造函数得来，所以"),o("code",[_._v("constructor")]),_._v("属性的终点就是"),o("code",[_._v("Function")]),_._v("这个函数。")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLFq1.png",alt:"aYLFq1.png"}})]),_._v(" "),o("p",[_._v("感谢网友的指出，这里解释一下上段中“"),o("code",[_._v("每个对象都有构造函数")]),_._v("”这句话。这里的意思是每个对象都可以找到其对应的constructor，因为创建对象的前提是需要有constructor，而这个constructor可能是对象自己本身显式定义的或者通过"),o("code",[_._v("__proto__")]),_._v("在原型链中找到的。"),o("code",[_._v("而单从constructor这个属性来讲，只有prototype对象才有")]),_._v("。每个函数在创建的时候，JS会同时创建一个该函数对应的prototype对象，而"),o("code",[_._v("函数创建的对象.__proto__ === 该函数.prototype，该函数.prototype.constructor===该函数本身")]),_._v("，故通过函数创建的对象即使自己没有constructor属性，它也能通过"),o("code",[_._v("__proto__")]),_._v("找到对应的constructor，所以任何对象最终都可以找到其构造函数（null如果当成对象的话，将null除外）。如下：")]),_._v(" "),o("p",[o("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYLnRe.png",alt:"aYLnRe.png"}})]),_._v(" "),o("h3",{attrs:{id:"_5-总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[_._v("#")]),_._v(" 5. 总结")]),_._v(" "),o("p",[_._v("** 总结一下：**")]),_._v(" "),o("p",[_._v("1、我们需要牢记两点：①"),o("code",[_._v("__proto__")]),_._v("和"),o("code",[_._v("constructor")]),_._v("属性是对象所独有的；② "),o("code",[_._v("prototype")]),_._v("属性是"),o("code",[_._v("函数")]),_._v("所独有的，因为函数也是一种对象，所以函数也拥有"),o("code",[_._v("__proto__")]),_._v("和"),o("code",[_._v("constructor")]),_._v("属性。\n2、"),o("code",[_._v("__proto__")]),_._v("属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的"),o("code",[_._v("__proto__")]),_._v("属性所指向的那个对象（父对象）里找，一直找，直到"),o("code",[_._v("__proto__")]),_._v("属性的终点"),o("code",[_._v("null")]),_._v("，再往上找就相当于在null上取值，会报错。通过"),o("code",[_._v("__proto__")]),_._v("属性将对象连接起来的这条链路即"),o("code",[_._v("我们所谓的原型链")]),_._v("。\n3、"),o("code",[_._v("prototype")]),_._v("属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，同时，在实例化的时候(let f1 = new Foo() )，prototype上的属性会作为原型对象赋值给实例，即"),o("code",[_._v("f1.__proto__ === Foo.prototype")]),_._v("。\n4、"),o("code",[_._v("constructor")]),_._v("属性的含义就是"),o("code",[_._v("指向该对象的构造函数")]),_._v("，所有函数（此时看成对象了）最终的构造函数都指向"),o("code",[_._v("Function")]),_._v("。")]),_._v(" "),o("p",[_._v("参考文章：\n"),o("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5721552.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.cnblogs.com/xiaohuochai/p/5721552.html"),o("OutboundLink")],1)]),_._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/Narcotic/p/6899088.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.cnblogs.com/Narcotic/p/6899088.html"),o("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=r.exports}}]);