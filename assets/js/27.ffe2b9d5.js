(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"常见问题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题总结"}},[t._v("#")]),t._v(" 常见问题总结")]),t._v(" "),a("h3",{attrs:{id:"一、css-readonly和disabled的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、css-readonly和disabled的区别"}},[t._v("#")]),t._v(" 一、css readonly和disabled的区别")]),t._v(" "),a("p",[t._v("两者的字面意义先介绍一下："),a("br")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("readonly表示“"),a("font",{attrs:{color:"#f00"}},[t._v("只读")]),t._v("”，一般表示对于文字内容只读，即不可更改内容，对于非文字的表单“只读”与“不只读”似乎没有啥区别；"),a("br")],1)]),t._v(" "),a("li",[a("p",[t._v("disabled表示“"),a("font",{attrs:{color:"#f00"}},[t._v("使残废，使无效")]),t._v("”，都残废了，那还管你有没有文字内容，都得残掉。"),a("br")],1)])]),t._v(" "),a("h4",{attrs:{id:"_1、readonly和disabled作用元素的范围不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、readonly和disabled作用元素的范围不同"}},[t._v("#")]),t._v(" 1、readonly和disabled作用元素的范围不同")]),t._v(" "),a("p",[t._v('readonly并没有对input[type="button"]产生作用，按钮效果仍然在，并没有“不可用”；'),a("br"),t._v('\n而disabled直接对input[type="button"]的按钮效果产生作用，导致按钮不可点击。'),a("br")]),t._v(" "),a("p",[t._v("那么两者的作用范围区别在哪呢？"),a("br"),t._v("\ndisabled属性可以作用于"),a("code",[t._v("所有的表单元素")]),t._v("。"),a("br"),t._v("\nreadonly属性只对"),a("code",[t._v('<input type="text">、<input type="number">、<textarea>和<input type="password">')]),t._v("等可以输入的表单元素有效。")]),t._v(" "),a("h4",{attrs:{id:"_2、readonly和disabled对元素的作用程度不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、readonly和disabled对元素的作用程度不同"}},[t._v("#")]),t._v(" 2、readonly和disabled对元素的作用程度不同")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("//添加input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("readonly\ndocument.write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<br/><br/><input type="number" name="number1" readonly="readonly" value="button" placeholder="123456">\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n//添加input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("disabled\ndocument.write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<br/><br/><input type="number" name="number2" disabled="disabled" value="button" placeholder="123456">\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n//给input添加blur事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("边框变成红色"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("readonly\ndocument.querySelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"input[name='number1']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blur"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document.querySelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"input[name='number1']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".style.cssText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"border: 1px solid red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n//给input添加blur事件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("边框变成红色"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("disabled\ndocument.querySelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"input[name='number2']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blur"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document.querySelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"input[name='number2']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".style.cssText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"border: 1px solid red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("通过上面的测试可以知道，"),a("code",[t._v("readonly")]),t._v("属性只是将元素设置为只读，可以获取焦点、失去焦点。而"),a("code",[t._v("disabled")]),t._v("属性直接阻止对元素的一切操作。")]),t._v(" "),a("p",[a("code",[t._v("disabled")]),t._v("属性"),a("code",[t._v("阻止对元素的一切操作")]),t._v("，例如"),a("code",[t._v("获取焦点，点击事件")]),t._v("等等。"),a("br"),t._v(" "),a("code",[t._v("readonly")]),t._v("属性"),a("code",[t._v("只是将元素设置为只读")]),t._v("，其他操作正常。")]),t._v(" "),a("h4",{attrs:{id:"_3、readonly和disabled对表单提交的作用不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、readonly和disabled对表单提交的作用不同"}},[t._v("#")]),t._v(" 3、readonly和disabled对表单提交的作用不同")]),t._v(" "),a("p",[a("code",[t._v("disabled")]),t._v("属性"),a("code",[t._v("可以让表单元素的值无法被提交")]),t._v("。\n"),a("code",[t._v("readonly")]),t._v("属性则不影响提交问题。"),a("br"),t._v("\n这个需要进行测试。。。")]),t._v(" "),a("p",[a("strong",[t._v("综上所述：")])]),t._v(" "),a("ul",[a("li",[t._v("readonly 属性规定输入字段为只读。")])]),t._v(" "),a("p",[t._v("只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还"),a("code",[t._v("可以选中或拷贝其文本")]),t._v("。")]),t._v(" "),a("p",[t._v("readonly 属性"),a("code",[t._v("可以防止用户对值进行修改，直到满足某些条件为止")]),t._v("（比如选中了一个复选框）。然后，需要使用 JavaScript 消除 readonly 值，将输入字段切换到可编辑状态。")]),t._v(" "),a("p",[t._v("readonly 属性可与 "),a("code",[t._v('<input type="text"> 或 <input type="password"> 配合使用')]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("disabled 属性规定应该禁用 input 元素。")])]),t._v(" "),a("p",[a("code",[t._v("被禁用的 input 元素既不可用，也不可点击。")]),t._v("可以设置 disabled 属性，直到满足某些其他的条件为止（比如选择了一个复选框等等）。然后，就需要通过 JavaScript 来删除 disabled 值，将 input 元素的值切换为可用。")]),t._v(" "),a("p",[t._v("注释："),a("code",[t._v('disabled 属性无法与 <input type="hidden"> 一起使用。')])])])}),[],!1,null,null,null);s.default=e.exports}}]);