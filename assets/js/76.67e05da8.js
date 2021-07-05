(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{432:function(s,t,n){"use strict";n.r(t);var a=n(45),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"浅谈js防抖和节流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅谈js防抖和节流"}},[s._v("#")]),s._v(" 浅谈js防抖和节流")]),s._v(" "),n("p",[s._v("防抖和节流严格算起来应该属于性能优化的知识，但实际上遇到的频率相当高，处理不当或者放任不管就容易引起浏览器卡死。")]),s._v(" "),n("h2",{attrs:{id:"从滚动条监听的例子说起"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从滚动条监听的例子说起"}},[s._v("#")]),s._v(" 从滚动条监听的例子说起")]),s._v(" "),n("p",[s._v("先说一个常见的功能，很多网站会提供这么一个按钮：用于返回顶部。\n"),n("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsa7t.png",alt:"aYsa7t.png"}})]),s._v(" "),n("p",[s._v("这个按钮只会在滚动到距离顶部一定位置之后才出现，那么我们现在抽象出这个功能需求-- "),n("strong",[s._v("监听浏览器滚动事件，返回当前滚条与顶部的距离")])]),s._v(" "),n("p",[s._v("这个需求很简单，直接写:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("showTop")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    var scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document.body.scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" document.documentElement.scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　console.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'滚动条位置：'")]),s._v(" + scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nwindow.onscroll  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" showTop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("但是！\n"),n("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYs0tf.jpg",alt:"aYs0tf.jpg"}})]),s._v(" "),n("p",[s._v("在运行的时候会发现存在一个问题："),n("strong",[s._v("这个函数的默认执行频率，太！高！了！")]),s._v("。以chrome为例，我们可以点击选中一个页面的滚动条，然后点击一次键盘的【向下方向键】，会发现函数执行了"),n("strong",[s._v("8-9")]),s._v("次！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYsr9S.png",alt:"aYsr9S.png"}})]),s._v(" "),n("p",[s._v("然而实际上我们并不需要如此高频的反馈，毕竟浏览器的性能是有限的，不应该浪费在这里，所以接着讨论如何优化这种场景。")]),s._v(" "),n("h2",{attrs:{id:"防抖-debounce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防抖-debounce"}},[s._v("#")]),s._v(" 防抖(debounce)")]),s._v(" "),n("p",[s._v("基于上述场景，首先提出第一种思路："),n("strong",[s._v("在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms")]),s._v("，然后：")]),s._v(" "),n("ul",[n("li",[s._v("如果在200ms内没有再次触发滚动事件，那么就执行函数")]),s._v(" "),n("li",[s._v("如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时")])]),s._v(" "),n("p",[n("strong",[s._v("效果")]),s._v("：如果短时间内大量触发同一事件，只会执行一次函数。")]),s._v(" "),n("p",[n("strong",[s._v("实现")]),s._v("：既然前面都提到了计时，那实现的关键就在于"),n("code",[s._v("setTimeOut")]),s._v("这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("/*\n* fn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 需要防抖的函数\n* delay "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 毫秒，防抖期限值\n*/\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" debounce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" null //借助闭包\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            clearTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时\n            timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" setTimeOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("else"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" setTimeOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // 进入该分支说明当前并没有在计时，那么就开始一个计时\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("当然 上述代码是为了贴合思路，方便理解，写完会发现其实 "),n("code",[s._v("time = setTimeOut(fn,delay)")]),s._v("是一定会执行的，所以可以稍微简化下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" debounce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" null //借助闭包\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            clearTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" setTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // 简化写法\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n// 然后是旧代码\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("showTop")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    var scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document.body.scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" document.documentElement.scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　console.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'滚动条位置：'")]),s._v(" + scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nwindow.onscroll "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" debounce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("showTop,1000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("此时会发现，必须在停止滚动1秒以后，才会打印出滚动条位置。")]),s._v(" "),n("p",[s._v("到这里，已经把"),n("strong",[s._v("防抖")]),s._v("实现了，现在给出定义：")]),s._v(" "),n("ul",[n("li",[s._v("对于"),n("strong",[s._v("短时间内连续触发")]),s._v("的事件（上面的滚动事件），"),n("strong",[s._v("防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。")])])]),s._v(" "),n("h2",{attrs:{id:"节流-throttle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节流-throttle"}},[s._v("#")]),s._v(" 节流(throttle)")]),s._v(" "),n("p",[s._v("继续思考，使用上面的防抖方案来处理问题的结果是：")]),s._v(" "),n("ul",[n("li",[s._v("如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。\n"),n("strong",[s._v("但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？")])])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://s1.ax1x.com/2020/08/02/aYss1g.jpg",alt:"aYss1g.jpg"}})]),s._v(" "),n("p",[s._v("其实很简单：我们可以设计一种"),n("strong",[s._v("类似控制阀门一样定期开放的函数，也就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活")]),s._v("（类似于技能冷却时间）。")]),s._v(" "),n("p",[n("strong",[s._v("效果："),n("strong",[s._v("如果短时间内大量触发同一事件，那么")]),s._v("在函数执行一次之后，该函数在指定的时间期限内不再工作")]),s._v("，直至过了这段时间才重新生效。")]),s._v(" "),n("p",[n("strong",[s._v("实现")]),s._v(" 这里借助"),n("code",[s._v("setTimeout")]),s._v("来做一个简单的实现，加上一个状态位"),n("code",[s._v("valid")]),s._v("来表示当前函数是否处于工作状态：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" throttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn,delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" valid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       if"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("valid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           //休息时间 暂不接客\n           "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" \n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       // 工作时间，执行函数并且在间隔期内把状态位设为无效\n        valid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        setTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            valid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", delay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/* 请注意，节流函数并不止上面这种实现方案,\n   例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。\n   也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样\n    */\n\n// 以下照旧\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("showTop")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    var scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document.body.scrollTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" document.documentElement.scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　console.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'滚动条位置：'")]),s._v(" + scrollTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nwindow.onscroll "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" throttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("showTop,1000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("运行以上代码的结果是：")]),s._v(" "),n("ul",[n("li",[s._v("如果一直拖着滚动条进行滚动，那么会以1s的时间间隔，持续输出当前位置和顶部的距离")])]),s._v(" "),n("h2",{attrs:{id:"其他应用场景举例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他应用场景举例"}},[s._v("#")]),s._v(" 其他应用场景举例")]),s._v(" "),n("p",[s._v("讲完了这两个技巧，下面介绍一下平时开发中常遇到的场景：")]),s._v(" "),n("p",[s._v("1、搜索框input事件，例如要支持输入实时搜索可以使用节流方案（间隔一段时间就必须查询相关内容），或者实现输入间隔大于某个值（如500ms），就当做用户输入完成，然后开始搜索，具体使用哪种方案要看业务需求。\n2、页面resize事件，常见于需要做页面适配的时候。需要根据最终呈现的页面情况进行dom渲染（这种情形一般是使用防抖，因为只需要判断最后一次的变化情况）")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/goloving/p/8672361.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参看：深入理解JS函数节流和防抖"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);