(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{337:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"javascript问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript问题汇总"}},[s._v("#")]),s._v(" Javascript问题汇总")]),s._v(" "),t("h4",{attrs:{id:"_1、base64-web前端js解码与转码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、base64-web前端js解码与转码"}},[s._v("#")]),s._v(" 1、base64 web前端js解码与转码")]),s._v(" "),t("p",[s._v("解码，就是把base64的转换成常规字符串")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" b64EncodeUnicode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" btoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".replace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9A-F"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/g, function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("match, p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" String.fromCharCode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0x'")]),s._v(" + p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nb64EncodeUnicode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是很厉害的'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5oiR5piv5b6I5Y6J5a6z55qE"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("转码")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" b64DecodeUnicode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" decodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atob"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'00'")]),s._v(" + c.charCodeAt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".toString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(".slice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nb64DecodeUnicode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5oiR5piv5b6I5Y6J5a6z55qE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我是很厉害的"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"_2、url加解密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、url加解密"}},[s._v("#")]),s._v(" 2、URL加解密")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("//escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值。比如"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"春节"')]),s._v("的返回结果是%u6625%u8282，escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("不对"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v("编码 主要用于汉字编码。\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"春节"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unescape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("escape"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"春节"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n//encodeURI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("是用来对URL编码的函数。 编码整个url地址，但对特殊含义的符号"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"; / ? : @ & = + $ , #"')]),s._v("不进行编码。对应的解码函数是：decodeURI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodeURI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://baidu.com?hello=您好&word=文档'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decodeURI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodeURI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://baidu.com?hello=您好&word=文档'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n//encodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 能编码"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"; / ? : @ & = + $ , #"')]),s._v("这些特殊字符。对应的解码函数是decodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://baidu.com?hello=您好&word=文档'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodeURIComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://baidu.com?hello=您好&word=文档'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"_3、js修改iframe内的css样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js修改iframe内的css样式"}},[s._v("#")]),s._v(" 3、js修改iframe内的css样式")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这种方式生效的前提是父页面与子页面必须在同一域名下，否则会跨域，如果出现跨域，可以使用postMessage代替")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body οnlοad"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ft()"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-- 加载完之后才能读取完整的document对象 --"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("style")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text-align: center;"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("iframe "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myFrame"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myFrame"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyHtml.html"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("frameborder")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("scrolling")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"560px;"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sandbox")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allow-forms"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/iframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("ft")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n//alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document.getElementById"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myFrame"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nvar "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deptObjs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document.getElementById"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myFrame"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".contentWindow.document.getElementsByTagName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"div"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("deptObjs.length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i++"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   var "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tmp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deptObjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   if"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp.className"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myTest"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t   //alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp.style.display"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tmp.style.display")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       //alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp.style.display"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h4",{attrs:{id:"_4、unexpected-token-in-json-at-position-0-的错误解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、unexpected-token-in-json-at-position-0-的错误解析"}},[s._v("#")]),s._v(" 4、Unexpected token < in JSON at position 0 的错误解析")]),s._v(" "),t("h5",{attrs:{id:"_1、引起的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、引起的原因"}},[s._v("#")]),s._v(" 1、引起的原因")]),s._v(" "),t("p",[s._v("这些错误发生在当你向服务器发送请求，返回值不是JSON而用JSON的方法解析的时候，发生这种情况的代码可能是这样的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/users'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".then"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" res.json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("实际的请求没有问题，它得到了一个返回值，发生问题的关键在于"),t("code",[s._v("res.json()")])]),s._v(" "),t("h5",{attrs:{id:"_2、json-parse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、json-parse"}},[s._v("#")]),s._v(" 2、JSON.parse")]),s._v(" "),t("p",[s._v("用另一种方法JSON.parse来解析Json的， 代码可能是这样的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("JSON.parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("不是Json的字符串"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("JSON.parse()")]),s._v("本质上是和"),t("code",[s._v("res.json()")]),s._v("一样的，所以它们发生错误的情况是相同的。")]),s._v(" "),t("h5",{attrs:{id:"_3、无效的json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、无效的json"}},[s._v("#")]),s._v(" 3、无效的JSON")]),s._v(" "),t("blockquote",[t("p",[s._v("JSON应该以有效的JSON值开始 —— 一个object, array, string, number, 或者是\nfalse/true/null。以<开始的返回值会有Unexpected token <这样的提示。\n<这个符号意味着返回值是HTML而不是JSON。\n引起这个错误的根源是服务端返回的是HTML或者其他不是Json的字符串。")])]),s._v(" "),t("p",[t("strong",[s._v("为什么会这样呢？")]),s._v("\n“Unexpected token o in JSON at position 1” 或者其他变量。\n错误的提示一些差别会随着服务器返回的不同而不同")]),s._v(" "),t("p",[s._v("它所提示的符号或者位置可能不同，但是引起它的原因是相同的： 你的代码所有解析的Json不是真的有效的Json。\n下面是一些我所看见的错误的提示：")]),s._v(" "),t("ul",[t("li",[s._v("Unexpected token < in JSON at position 1")]),s._v(" "),t("li",[s._v("Unexpected token p in JSON at position 0")]),s._v(" "),t("li",[s._v("Unexpected token d in JSON at position 0")])]),s._v(" "),t("h5",{attrs:{id:"_4、解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、解决方案"}},[s._v("#")]),s._v(" 4、解决方案")]),s._v(" "),t("p",[s._v("With fetch, you can use res.text() instead of res.json() to get the text string itself. Alter your code to read something like this, and check the console to see what’s causing the problem:\n首先要做是先把返回值打印出来。如果用fetch，可以用"),t("code",[s._v("res.text()")]),s._v("代替"),t("code",[s._v("res.json()")]),s._v("来获得字符串。把你的代码转换成如下这样，并且通过打印出来的内容查看哪里出问题了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/users'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  // .then"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" res.json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v(" // comment this out "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" now\n  .then"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" res.text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("          // convert to plain text\n  .then"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" console.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("  // "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" log it out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意像"),t("code",[s._v("res.json()")]),s._v("和"),t("code",[s._v("res.text()")]),s._v("这样的方法是异步的。所以不能直接把它们的返回值打印出来，这就是console.log必须在.then的括号里面的原因。")]),s._v(" "),t("h5",{attrs:{id:"_5、是因为服务器的原因吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、是因为服务器的原因吗"}},[s._v("#")]),s._v(" 5、是因为服务器的原因吗？")]),s._v(" "),t("p",[s._v("服务器有好几种原因返回HTML而不是JSON：")]),s._v(" "),t("ul",[t("li",[s._v("请求的url不存在，服务器以HTML的方式返回404页面。你可能在请求时代码写错（像把/user写成了/users）,或者服务端的代码的错误。")]),s._v(" "),t("li",[s._v("当添加了新的路由时，服务器需要重启。比如你在用Express写的服务器时，刚刚新加了一个app.get('/users', ...)路由，但是没有重启，服务器就不会对新的路由地址有反应。")]),s._v(" "),t("li",[s._v("客户端的代理没有设置： 如果在使用像Create React App的Webpack dev server时，你可以设置一个指向后端服务器的代理。")]),s._v(" "),t("li",[s._v("API的根url是/,如果你在通过Webpack 或Create React App使用代理,要确认你的API路由不在根的层级/。这样会时代理服务器混淆，你将得到一个HTML而不是你的API请求的返回。你可以在如有前面加个前缀像/api/。")])]),s._v(" "),t("p",[s._v("同时可以通过devtools的network查看请求的返回值。")]),s._v(" "),t("blockquote",[t("p",[s._v("是不是404页面？（可能是缺少该地址或者代码输入错误）。\n这是不是index.html的页面？（可能是缺少地址或者代理配置错误）")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果一切看起来没问题（新加的地址，服务端没有重启），那就重启前端和后端服务器，看看是不是问题解决了")])])])}),[],!1,null,null,null);t.default=e.exports}}]);