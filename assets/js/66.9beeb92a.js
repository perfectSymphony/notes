(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{422:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jsbridge使用和原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge使用和原理"}},[s._v("#")]),s._v(" JsBridge使用和原理")]),s._v(" "),t("h2",{attrs:{id:"what-is-jsbridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-jsbridge"}},[s._v("#")]),s._v(" What is JsBridge")]),s._v(" "),t("p",[s._v("近期做一个项目，使用的是Native+H5的方式实现的。众所周知的是在android中，webview所实现的java和js的交互存在一些安全问题，并且这样的使用方式，没法让一套H5同时适配Android和IOS两个平台，因此，就需要有一个中间件来实现js与本地代码的交互，也就是JSBrige。")]),s._v(" "),t("p",[s._v("在Android平台我们选用了"),t("a",{attrs:{href:"https://github.com/lzyzsd/JsBridge",target:"_blank",rel:"noopener noreferrer"}},[s._v("开源项目"),t("OutboundLink")],1),s._v("。整个库的结构比较简单：一个用来注入的js文件，一个自定义的webview以及作为载体的BriBridgeHandler。")]),s._v(" "),t("h2",{attrs:{id:"jsbridge的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge的使用"}},[s._v("#")]),s._v(" JsBridge的使用")]),s._v(" "),t("p",[s._v("在介绍JsBridge的原理之前，先简单介绍下JsBridge的使用，也可以看"),t("a",{attrs:{href:"https://github.com/lzyzsd/JsBridge",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),t("OutboundLink")],1),s._v("上的表述")]),s._v(" "),t("h2",{attrs:{id:"jsbridge库集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge库集成"}},[s._v("#")]),s._v(" JsBridge库集成")]),s._v(" "),t("p",[s._v("集成的方式有很多种：")]),s._v(" "),t("p",[s._v("1、使用作者推荐的方式：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    maven "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://jitpack.io"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n  dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    compile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.github.lzyzsd:jsbridge:1.0.4'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("2、使用源码集成\n下载源码，将源码拷贝至自己的工程内，作为工程的文件。")]),s._v(" "),t("p",[s._v("3、自定义Module\n下载源码，新建Module，将源码导入Module，并将项目依赖自定义的Module")]),s._v(" "),t("h2",{attrs:{id:"使用jsbridge库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用jsbridge库"}},[s._v("#")]),s._v(" 使用JsBridge库")]),s._v(" "),t("ul",[t("li",[s._v("提供操作给js调用")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  webView.registerHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submitFromWeb"')]),s._v(", new "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("BridgeHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @Override\n    public void handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String data, CallBackFunction "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        function.onCallBack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submitFrom web exe, response data from java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Js如果需要调用Java提供的方法时候，则需要调用这个Handler，而在注册时参数"),t("code",[s._v("submitFromWeb")]),s._v("将作为Js调用时使用的Key值。调用方式如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  WebViewJavascriptBridge.callHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'submitFromWeb'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'param'")]),s._v(":str1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("responseData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      //这里打印的应该是上面Handler实现方法中的callback的入参：submitFrom web exe, response data from java\n      document.getElementById"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"show"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response data from java, data = "')]),s._v("+responseData\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("另外，库也提供了一个简单的没有回调的调用方式：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  webView.setDefaultHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new DefaultHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Js调用的方式也可以简化为：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("  WebViewJavascriptBridge.send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    data,\n    function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("responseData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        //java中DefaultHandler所实现的方法中callback所定义的入参\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("提供操作给Java调用")])]),s._v(" "),t("p",[s._v("注册方法与Java雷同：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" WebViewJavascriptBridge.registerHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"functionInJs"')]),s._v(", function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data, responseCallback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     document.getElementById"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"show"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data from Java: = "')]),s._v(" + data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     var responseData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Javascript Says Right back aka!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     responseCallback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("responseData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Java调用Handler时，也跟Js一样：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" webView.callHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"functionInJs"')]),s._v(", new Gson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".toJson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n   new "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("CallBackFunction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     @Override\n     public void onCallBack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("同样的，在JS中也可以注册默认的Handler，以方便Java调用时，通过send方法发送数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" bridge.init"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message, responseCallback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   console.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JS got a message'")]),s._v(", message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   var data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Javascript Responds'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Wee!'")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   console.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JS responding with'")]),s._v(", data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   responseCallback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("java调用send方法：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" webView.send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"jsbridge的核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge的核心"}},[s._v("#")]),s._v(" JsBridge的核心")]),s._v(" "),t("p",[s._v("JsBridge之所以能实现Native与Js相互调用的功能，其核心实现其实就是：")]),s._v(" "),t("ul",[t("li",[s._v("拦截Url")]),s._v(" "),t("li",[s._v('load url("javascript:js_method()");')])]),s._v(" "),t("p",[s._v("先说第二点，Native调用Js，通过加载以javascript:开头的url即可实现调用Js的方法。这个很好理解，在web中也是通过这种方式调用Js的方法的。\n然后细说下第一点的实现：")]),s._v(" "),t("p",[s._v("向body中添加一个不可见的iframe元素。通过拦截url的方法来执行相应的操作，但是页面本身不能跳转，所以改变一个不可见的iframe的src就可以让webview拦截到url，而用户是无感知的。\n拦截url。通过shouldOverrideUrlLoading来拦截约定规则的Url，再做具体操作。")]),s._v(" "),t("p",[s._v("Ps： 添加iframe是H5自身可实现的，但是如果H5来实现的话，需要每个页面实现，且耦合较高；因此放在库里，通过加载完成注入的方式，则会降低耦合")])])}),[],!1,null,null,null);a.default=e.exports}}]);