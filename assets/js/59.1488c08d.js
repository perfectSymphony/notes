(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{415:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"javascript中的运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的运算符"}},[s._v("#")]),s._v(" Javascript中的运算符")]),s._v(" "),t("h4",{attrs:{id:"一、链判断运算符-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、链判断运算符-运算符"}},[s._v("#")]),s._v(" 一、链判断运算符（?. 运算符）")]),s._v(" "),t("p",[s._v("实际开发中，如果要读取对象内部的某个属性，往往需要先判断一下该对象是否存在。\n比如，要读取 user.firstName，安全的写法应该是下面这样的：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("const firstName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" user.firstName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator）?. 来简化上面的写法")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("const firstName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user?.firstName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("上面代码使用了 ?. 运算符，直接在链式调用的时候判断，左侧的对象是否为 null 或 undefined。如果是的，就不再往下运算，而是返回 undefined。")])]),s._v(" "),t("h4",{attrs:{id:"使用这个运算符-有几个注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用这个运算符-有几个注意点"}},[s._v("#")]),s._v(" 使用这个运算符，有几个注意点：")]),s._v(" "),t("h5",{attrs:{id:"_1-短路机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-短路机制"}},[s._v("#")]),s._v(" （1）短路机制")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("a?."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("++x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n// 等同于\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" null ? undefined "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("++x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面代码中，如果 a 是 undefined 或 null，那么 x 不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。")]),s._v(" "),t("h5",{attrs:{id:"_2-括号的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-括号的影响"}},[s._v("#")]),s._v(" （2）括号的影响")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a?.b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".c\n// 等价于\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" null ? undefined "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" a.b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上面代码中，?. 对圆括号外部没有影响，不管 a 对象是否存在，圆括号后面的 .c 总是会执行。")]),s._v(" "),t("p",[s._v("一般来说，使用 ?. 运算符的场合，不应该使用圆括号。")]),s._v(" "),t("h5",{attrs:{id:"_3-右侧不得为十进制数值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-右侧不得为十进制数值"}},[s._v("#")]),s._v(" （3）右侧不得为十进制数值")]),s._v(" "),t("p",[s._v("为了保证兼容以前的代码，允许 foo ?. 3 : 0 被解析成 foo ? .3 : 0，因此规定如果 ?. 后面紧跟一个十进制数字，那么 ?. 不再被看成是一个完整的运算符，而会按照三元运算符进行处理，也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。")]),s._v(" "),t("h4",{attrs:{id:"二、null-判断运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、null-判断运算符"}},[s._v("#")]),s._v(" 二、Null 判断运算符")]),s._v(" "),t("p",[s._v("读取对象属性的时候，如果某个属性的值是 null 或 undefined，有时候需要为它们指定默认值。常见做法是通过 || 运算符指定默认值。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("const text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data.text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, world!'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面的代码都通过 || 运算符指定默认值，但是这样写可能和预期的结果不一致。")]),s._v(" "),t("p",[s._v("开发者的原意是，只要属性的值为 null 或 undefined，默认值就会生效，但是属性的值如果为空字符串或 false 或 0，默认值也会生效。")]),s._v(" "),t("p",[s._v("为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符??。它的行为类似 ||，但是只有运算符左侧的值为 null 或 undefined 时，才会返回右侧的值。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("const text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data.text ?? "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, world!'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面代码中，默认值只有在属性值为 null 或 undefined 时，才会生效。")]),s._v(" "),t("p",[s._v("这个运算符的一个目的，就是跟链判断运算符 ?. 配合使用，为 null 或 undefined 的值设置默认值。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("const animationDuration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" settings?.animationDuration ?? "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n``\n\n上面代码中，settings 如果是 null 或 undefined，就会返回默认值300。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);