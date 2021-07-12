(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{397:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"揭秘简单请求和复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#揭秘简单请求和复杂请求"}},[t._v("#")]),t._v(" 揭秘简单请求和复杂请求")]),t._v(" "),a("p",[t._v("开发网站时经常会用到跨域资源共享（简称cors，后面使用简称）来解决跨域问题，但是在使用cors的时候，http请求会被划分为两类，简单请求和复杂请求，而这两种请求的区别主要在于是否会触发cors预检请求。")]),t._v(" "),a("p",[t._v("首先我们要明白cors的原理（引自MDN）：")]),t._v(" "),a("blockquote",[a("p",[t._v("跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 "),a("code",[t._v("GET")]),t._v(" 以外的 HTTP 请求，或者搭配某些 MIME 类型的 "),a("code",[t._v("POST")]),t._v(" 请求），浏览器必须首先使用 "),a("code",[t._v("OPTIONS")]),t._v(" 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）")])]),t._v(" "),a("p",[t._v("从上面的文字中我们得到如下信息：")]),t._v(" "),a("p",[t._v("1、跨域资源共享标准新增了一组 HTTP 首部字段，服务器通过这些字段来控制浏览器有权访问哪些资源。")]),t._v(" "),a("p",[t._v("2、为了安全起见请求方式分为两类，一类不会预先发送options请求，一些会预先发送options请求。")]),t._v(" "),a("p",[t._v("3、 "),a("code",[t._v("GET")]),t._v(" 以外的 HTTP 请求，或者搭配某些 MIME 类型的 "),a("code",[t._v("POST")]),t._v(" 请求会触发options请求。")]),t._v(" "),a("p",[t._v("4、服务器验证OPTIONS完成后才会允许发送实际的http请求。")]),t._v(" "),a("p",[t._v("不会触发http预检请求的便是简单请求，能够触发http预检请求的便是复杂请求。")]),t._v(" "),a("p",[t._v("那么有哪些简单请求呢？以下是来自MDN官方引用：")]),t._v(" "),a("p",[t._v("1、使用下列方法之一：")]),t._v(" "),a("p",[t._v("GET、")]),t._v(" "),a("p",[t._v("POST、")]),t._v(" "),a("p",[t._v("HEAD。")]),t._v(" "),a("p",[t._v("2、不得人为设置该集合之外的其他首部字段。该集合为：")]),t._v(" "),a("p",[t._v("Accept")]),t._v(" "),a("p",[t._v("Accept-Language")]),t._v(" "),a("p",[t._v("Content-Language")]),t._v(" "),a("p",[t._v("Content-Type")]),t._v(" "),a("p",[t._v("3、Content-Type 的值仅限于下列三者之一：")]),t._v(" "),a("p",[t._v("text/plain")]),t._v(" "),a("p",[t._v("multipart/form-data")]),t._v(" "),a("p",[t._v("application/x-www-form-urlencoded")]),t._v(" "),a("p",[t._v("4、请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问")]),t._v(" "),a("p",[t._v("5、请求中没有使用 ReadableStream 对象")]),t._v(" "),a("p",[t._v("那什么是复杂请求呢，除了简单请求都是复杂请求。")]),t._v(" "),a("p",[t._v("简单请求的发送从代码上来看和普通的XHR没太大区别，但是HTTP头当中要求总是包含一个域（Origin）的信息。该域包含协议名、地址以及一个可选的端口。不过这一项实际上由浏览器代为发送，并不是开发者代码可以触及到的。")]),t._v(" "),a("p",[t._v("简单请求的部分响应头及解释如下：")]),t._v(" "),a("blockquote",[a("p",[t._v('Access-Control-Allow-Origin（必含）- 不可省略，否则请求按失败处理。该项控制数据的可见范围，如果希望数据对任何人都可见，可以填写"*"。\nAccess-Control-Allow-Credentials（可选） – 该项标志着请求当中是否包含cookies信息，只有一个可选值：true（必为小写）。如果不包含cookies，请略去该项，而不是填写false。这一项与XmlHttpRequest2对象当中的withCredentials属性应保持一致，即withCredentials为true时该项也为true；withCredentials为false时，省略该项不写。反之则导致请求失败。\nAccess-Control-Expose-Headers（可选） – 该项确定XmlHttpRequest2对象当中getResponseHeader()方法所能获得的额外信息。通常情况下，getResponseHeader()方法只能获得如下的信息：\nCache-Control\nContent-Language\nContent-Type\nExpires\nLast-Modified\nPragma\n当你需要访问额外的信息时，就需要在这一项当中填写并以逗号进行分隔')])]),t._v(" "),a("p",[t._v("如果仅仅是简单请求，那么即便不用CORS也没有什么大不了，但CORS的复杂请求就令CORS显得更加有用了。简单来说，任何不满足上述简单请求要求的请求，都属于复杂请求。比如说你需要发送PUT、DELETE等HTTP动作，或者发送Content-Type: application/json的内容。")]),t._v(" "),a("p",[t._v('复杂请求表面上看起来和简单请求使用上差不多，但实际上浏览器发送了不止一个请求。其中最先发送的是一种"预请求"，此时作为服务端，也需要返回"预回应"作为响应。预请求实际上是对服务端的一种权限请求，只有当预请求成功返回，实际请求才开始执行。')]),t._v(" "),a("p",[t._v("预请求以OPTIONS形式发送，当中同样包含域，并且还包含了两项CORS特有的内容")]),t._v(" "),a("blockquote",[a("p",[t._v("Access-Control-Request-Method – 该项内容是实际请求的种类，可以是GET、POST之类的简单请求，也可以是PUT、DELETE等等。\nAccess-Control-Request-Headers – 该项是一个以逗号分隔的列表，当中是复杂请求所使用的头部。")])]),t._v(" "),a("p",[t._v("显而易见，这个预请求实际上就是在为之后的实际请求发送一个权限请求，在预回应返回的内容当中，服务端应当对这两项进行回复，以让浏览器确定请求是否能够成功完成。")]),t._v(" "),a("p",[t._v("复杂请求的部分响应头及解释如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("Access-Control-Allow-Origin（必含） – 和简单请求一样的，必须包含一个域。\nAccess-Control-Allow-Methods（必含） – 这是对预请求当中Access-Control-Request-Method的回复，这一回复将是一个以逗号分隔的列表。尽管客户端或许只请求某一方法，但服务端仍然可以返回所有允许的方法，以便客户端将其缓存。\nAccess-Control-Allow-Headers（当预请求中包含Access-Control-Request-Headers时必须包含） – 这是对预请求当中Access-Control-Request-Headers的回复，和上面一样是以逗号分隔的列表，可以返回所有支持的头部。这里在实际使用中有遇到，所有支持的头部一时可能不能完全写出来，而又不想在这一层做过多的判断，没关系，事实上通过request的header可以直接取到Access-Control-Request-Headers，直接把对应的value设置到Access-Control-Allow-Headers即可。\nAccess-Control-Allow-Credentials（可选） – 和简单请求当中作用相同\nAccess-Control-Max-Age（可选） – 以秒为单位的缓存时间。预请求的的发送并非免费午餐，允许时应当尽可能缓存。")])]),t._v(" "),a("p",[t._v("理论聊完之后，咱们来看一下实践，首先启动两个服务，一个端口为3000,的静态资源服务器，用于请求接口，另一台端口为5000的接口服务器，如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/15/rMNRdP.png",alt:"rMNRdP.png"}})]),t._v(" "),a("p",[t._v("后端接口服务器代码如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("const  express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst bodyParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParser.urlencoded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("extended:false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParser.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n// 实现CORS\napp.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req, res, next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS,GET,POST,PUT,DELETE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Origin,X-Requested-With,Content-Type,Accept,Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cache-control"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-type"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json; charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETag"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp.post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/p"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req,res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res.send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req.body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp.listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("前端请求资源脚本代码如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("axios.post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:5000/p"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zs"')]),t._v(",age:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们用axios这个http请求库发送了一个post请求，axios发送post请求默认会把数据转化为json格式，并且会默认设置请求头：Content-Type：application/json，很显然这是一个复杂请求，这样的话，会触发options请求。")]),t._v(" "),a("p",[t._v("我们分别启动两个服务，并打开浏览器，访问页面，加载请求接口脚本，观察network如图：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgchr.com/i/rMN7ss",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/15/rMN7ss.jpg",alt:"rMN7ss.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("我们看到，代码中命名只发送了一次异步请求为什么显示两次呢？详细截图如下：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://imgchr.com/i/rMUpQJ",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/15/rMUpQJ.jpg",alt:"rMUpQJ.jpg"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://imgchr.com/i/rMUEFK",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/15/rMUEFK.jpg",alt:"rMUEFK.jpg"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("我们看到确实发送了两次请求一次为OPTIONS一次为POST，而我们代码中并没有处理对OPTIONS请求的响应处理，所以上面服务端代码是不合理的，综合考虑，OPTIONS请求并会对实际http请求差生影响，所以我们统一的对OPTIONS请求返回204，服务端负责支持CORS的中间件修正代码如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("app.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req, res, next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS,GET,POST,PUT,DELETE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Origin,X-Requested-With,Content-Type,Accept,Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cache-control"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-type"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json; charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res.header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETag"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    //header头信息设置结束后，结束程序往下执行，返回\n    if"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req.method.toLocaleLowerCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res.status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" res.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   //直接返回空数据，结束此次请求\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("else"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("我们在中间件中判断请求方式，如果请求方式为OPTIONS返回状态码204,并返回空信息。")]),t._v(" "),a("p",[t._v("限于篇幅文章到此就该结束了，当然了还有好多文档没有测试希望大家看完文章亲手测试一下。")]),t._v(" "),a("p",[t._v("如果我们将请求脚本改成如下代码：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("axios.post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:5000/p"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name=zs&age=18"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("headers:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("或者又改成如下代码：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("axios.post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:5000/p"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name=zs&age=18"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("headers:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),t._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clm"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"234"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("以上两次请求的netmork会是什么样的呢？")])])}),[],!1,null,null,null);s.default=e.exports}}]);