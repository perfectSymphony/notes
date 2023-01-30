(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{328:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前端浏览器缓存及代码部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端浏览器缓存及代码部署"}},[s._v("#")]),s._v(" 前端浏览器缓存及代码部署")]),s._v(" "),a("h3",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[s._v("#")]),s._v(" 浏览器缓存")]),s._v(" "),a("p",[a("strong",[s._v("200 from memory cache")]),s._v(" 不访问服务器，直接读缓存，从内存中读取缓存。此时的数据时缓存到内存中的，当kill进程后，也就是浏览器关闭以后，数据将不存在。但是这种方式只能缓存派生资源")]),s._v(" "),a("p",[a("strong",[s._v("200 from disk cache")]),s._v(" 不访问服务器，直接读缓存，从磁盘中读取缓存，当kill进程时，数据还是存在。这种方式也只能缓存派生资源")]),s._v(" "),a("p",[a("strong",[s._v("304 Not Modified")]),s._v(" 访问服务器，发现数据没有更新，服务器返回此状态码。然后从缓存中读取数据。")]),s._v(" "),a("h3",{attrs:{id:"三级缓存原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三级缓存原理"}},[s._v("#")]),s._v(" 三级缓存原理")]),s._v(" "),a("p",[s._v("1、先去内存看，如果有，直接加载")]),s._v(" "),a("p",[s._v("2、如果内存没有，择取硬盘获取，如果有直接加载")]),s._v(" "),a("p",[s._v("3、如果硬盘也没有，那么就进行网络请求")]),s._v(" "),a("p",[s._v("4、加载到的资源缓存到硬盘和内存")]),s._v(" "),a("p",[s._v("一般浏览图片，如下流程：")]),s._v(" "),a("blockquote",[a("p",[s._v("访问-> 200 -> 退出浏览器"),a("br"),s._v("\n再进来-> 200(from disk cache) -> 刷新 -> 200(from memory cache)")])]),s._v(" "),a("p",[s._v("application cache和上面缓存有点区别，是离线缓存，就是资源可以从硬盘上读取而不用联网，即使断网，用户也可以浏览。")]),s._v(" "),a("h3",{attrs:{id:"设置浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置浏览器缓存"}},[s._v("#")]),s._v(" 设置浏览器缓存")]),s._v(" "),a("p",[s._v("304是协商缓存还是要和服务器通信一次，要想断绝服务器通信，就要强制浏览器使用本地缓存（cache-control/expires），")]),s._v(" "),a("p",[s._v("一般有如下几种方式设置浏览器缓存。")]),s._v(" "),a("p",[s._v("1、通过HTTP的META设置expires和cache-control")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http-equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cache-Control"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max-age=7200"')]),s._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http-equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Expires"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sun Oct 15 2017 20:39:53 GMT+0800 (CST)"')]),s._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样写的话仅对该网页有效，对网页中的图片或其他请求无效。")]),s._v(" "),a("p",[s._v("2、apache服务器配置图片，css，js，flash的缓存")]),s._v(" "),a("p",[s._v("这个主要通过服务器的配置来实现这个技术，如果使用apache服务器的话，可以使用mod_expires模块来实现：")]),s._v(" "),a("p",[s._v("编译mod_expires模块：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("  /root/httpd-2.2.3/modules/metadata\n\n/usr/local/apache/bin/apxs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" mod_expires.c //编译\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("先打开httpd.conf文件，然后查找expires这个模块，找到后，删除左边的#号，表示打这个模块，并重启apache服务器")]),s._v(" "),a("p",[s._v("编辑httpd.conf配置：添加下面内容")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IfModule mod_expires.c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nExpiresActive on\n\nExpiresDefault "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 month"')]),s._v("\n\nExpiresByType text/html "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nExpiresByType text/css "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nExpiresByType image/gif "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nExpiresByType image/jpeg "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nExpiresByType image/jpg "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nExpiresByType image/png "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nEXpiresByType application/x-shockwave-flash "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\nEXpiresByType application/x-javascript      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access plus 1 months"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#ExpiresByType video/x-flv "access plus 1 months"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/IfModule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("3、php等设置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n  header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cache-Control: public"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pragma: cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$offset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("*60*60*24"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // cache "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" month\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ExpStr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Expires: "')]),s._v(".gmdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D, d M Y H:i:s"')]),s._v(", time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" GMT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ExpStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n?"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seconds_to_cache")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ts")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gmdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D, d M Y H:i:s"')]),s._v(", time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seconds_to_cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" GMT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nheader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Expires: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ts")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pragma: cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nheader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cache-Control: max-age='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seconds_to_cache")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"缓存情况下前端代码部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存情况下前端代码部署"}},[s._v("#")]),s._v(" 缓存情况下前端代码部署")]),s._v(" "),a("p",[a("strong",[s._v("问题一：有了缓存，如何进行前端代码更新呢？")]),s._v("\n我们可以在资源文件或者图片后面添加版本号，如下图。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/21/HXAaOe.png",alt:"HXAaOe.png"}})]),s._v(" "),a("p",[a("strong",[s._v("问题二：但是所有文件都加了版本号之后，我们只更改了一个文件，其他文件的缓存不是浪费了吗？")]),s._v("\n解决这个问题，我们可以用 hash算法(摘要算法)，对文件求摘要信息，摘要信息与文件内容一一对应。如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/21/HXAfmQ.png",alt:"HXAfmQ.png"}})]),s._v(" "),a("p",[s._v("这样就解决了这个问题。")]),s._v(" "),a("p",[a("strong",[s._v("hash算法的用途：")]),s._v("相同的输入永远会得到相同的输出，因此，如果输入被修改了，得到的输出就会不同。")]),s._v(" "),a("p",[s._v("问题三：新的问题又来了，文件发布怎么办？")]),s._v(" "),a("blockquote",[a("p",[s._v("1、先部署页面，再部署资源：在二者部署的时间间隔内，如果有用户访问页面，就会在新的页面结构中加载旧的资源，并且把这个旧版本的资源当做新版本缓存起来，其结果就是：用户访问到了一个样式错乱的页面，除非手动刷新，否则在资源缓存过期之前，页面会一直执行错误。")])]),s._v(" "),a("blockquote",[a("p",[s._v("2、先部署资源，再部署页面：在部署时间间隔之内，有旧版本资源本地缓存的用户访问网站，由于请求的页面是旧版本的，资源引用没有改变，浏览器将直接使用本地缓存，这种情况下页面展现正常；但没有本地缓存或者缓存过期的用户访问网站，就会出现旧版本页面加载新版本资源的情况，导致页面执行错误，但当页面完成部署，这部分用户再次访问页面又会恢复正常了。")])]),s._v(" "),a("blockquote",[a("p",[s._v("上面分析是想说：先部署谁都不成！都会导致部署过程中发生页面错乱的问题。所以，访问量不大的项目，等到半夜偷偷上线，先上静态资源，再部署页面，看起来问题少一些。")])]),s._v(" "),a("p",[s._v("如何解决这些问题呢？")]),s._v(" "),a("p",[s._v("这个问题，起源于资源的 覆盖式发布，用 待发布资源 覆盖 已发布资源，就有这种问题。解决它也好办，就是实现 非覆盖式发布，如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/21/HXVk80.png",alt:"HXVk80.png"}})]),s._v(" "),a("p",[s._v("看上图，用文件的摘要信息来对资源文件进行重命名，把摘要信息放到资源文件发布路径中，这样，内容有修改的资源就变成了一个新的文件发布到线上，不会覆盖已有的资源文件。上线过程中，先全量部署静态资源，再灰度部署页面，整个问题就比较完美的解决了。")]),s._v(" "),a("h3",{attrs:{id:"总结如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结如下"}},[s._v("#")]),s._v(" 总结如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、 配置超长时间的本地缓存 —— 节省带宽，提高性能\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、采用内容摘要作为缓存更新依据 —— 精确的缓存控制\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、 静态资源CDN部署 —— 优化网络请求\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、更资源发布路径实现非覆盖式发布 —— 平滑升级\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);