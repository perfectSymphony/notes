(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(s,t,r){"use strict";r.r(t);var p=r(45),n=Object(p.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h2",{attrs:{id:"jsonp原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jsonp原理"}},[s._v("#")]),s._v(" jsonp原理")]),s._v(" "),r("p",[s._v("在学习jsonp之前首先要明白以下几点：\n首先确定为什么要用jsonp，因为要跨域请求数据，那为什么会发生跨域呢，")]),s._v(" "),r("p",[s._v("因为浏览器的同源策略，那什么是同源策略呢浏览器从A网站向B网站请求资源，必须同时满足三点才可以，协议，域名，端口相同，任何一点不同都会产生跨域，产生跨域后，浏览器就会阻止数据返回。")]),s._v(" "),r("p",[s._v("人们为了满足在不同的域名间传递数据，发明了jsonp技术：")]),s._v(" "),r("p",[s._v("在学习jsonp之前，大家可以思考一下，一张网页中哪些标签是可以跨域请求资源的，我们知道，在页面上有三种资源是可以与页面本身不同源的。它们是：js脚本，css样式文件，图片：")]),s._v(" "),r("p",[s._v("1）"),r("code",[s._v('<script type="text/javascript" src="某个cdn地址" ><\/script>')])]),s._v(" "),r("p",[s._v("2）"),r("code",[s._v('<link type="text/css" rel="stylesheet" href="某个cdn地址" />')])]),s._v(" "),r("p",[s._v("3）"),r("code",[s._v('<img src="某个cdn地址" alt=""/>')])]),s._v(" "),r("p",[s._v("以上三种资源是可以发生跨域后，而资源可以返回的；")]),s._v(" "),r("p",[s._v("而jsonp就是利用了"),r("code",[s._v("<script>")]),s._v("标签可以链接到不同源的js脚本来到达跨域目的。当链接的资源到达浏览器时，浏览器会根据他们的类型来采取不同的处理方式，比如，如果是css文件，则会进行对页面 repaint，如果是img 则会将图片渲染出来，如果是script 脚本，则会进行执行，比如我们在页面引入了jquery库，为什么就可以使用 $ 了呢？就是因为 jquery 库被浏览器执行之后，会给全局对象window增加一个属性： $ ，所以我们才能使用 $ 来进行各种处理。")]),s._v(" "),r("p",[s._v("重点：浏览器会根据他们的类型采用不同的处理方式，js文件则会执行。")]),s._v(" "),r("p",[s._v("通常一般我们利用ajax请求某些接口返回的数据，基本都是json格式，而jsonp请求返回的数据，是什么呢，咱们来看一条完整的jsop请求和其返回的数据：")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://imgchr.com/i/r6ZT39",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://s3.ax1x.com/2020/12/23/r6ZT39.png",alt:"r6ZT39.png"}}),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("前端工程师通过callback向后端传递了一个abc字符串，后端呢将数据包裹在 abc（）中返回，")]),s._v(" "),r("p",[s._v("签名提到过了，浏览器会根据不同的文件类型进行不同的处理，咱们利用的是javascript，所以返回的数据会被解析为，js文件，而上面的数据如果被解析为js文件，就会被执行；")]),s._v(" "),r("p",[s._v("这就是 jsonp 的基本原理，利用script标签的特性，将数据使用json格式用一个函数包裹起来，然后在进行访问的页面中定义一个相同函数名的函数，因为 script 标签src引用的js脚本到达浏览器时会执行，而我们已经定义了一个同名的函数，所以json格式的数据，就作为参数传递给了我们定义的同名函数了。这样就完成了跨域数据交换。jsonp的含义是：json with padding，而在json数据外包裹它的那个函数。\n附上封装的jsop的代码：")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://imgchr.com/i/r6eEE8",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://s3.ax1x.com/2020/12/23/r6eEE8.jpg",alt:"r6eEE8.jpg"}}),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("以上便是利用jquery的风格封装得到jsonp函数，")]),s._v(" "),r("p",[s._v("在和第三方接口调用或者和后端工程师交互式，一定要实现沟通好，向后端传递参数名时，用的什么参数，jquery默认用的是callback，")]),s._v(" "),r("p",[s._v("举个例子：")]),s._v(" "),r("p",[s._v("百度的jsonp用的是")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://imgchr.com/i/r6eavR",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://s3.ax1x.com/2020/12/23/r6eavR.png",alt:"r6eavR.png"}}),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("百度用的是cb传递的；")]),s._v(" "),r("p",[s._v("现在咱们看一看上面封装的代码：")]),s._v(" "),r("p",[s._v("有一句非常关键，就是在window上通过变量挂载了一个Cname的属性，而这个属性是个变量，")]),s._v(" "),r("p",[s._v("变量值为一个很长的字符串，而cname这个属性是一个函数，这个函数就是，jsonp返回函数调用后，调用的函数。")])])}),[],!1,null,null,null);t.default=n.exports}}]);