## meta标签和浏览器缓存关系

### 基本介绍

 - meta 标签主要是用来描述一个 html 网页文档的属性的。 例如 作者、日期、时间、页面刷新。
 - 用于 seo 的搜索优化。

 ### 基本属性

>分为必选和可选项

 - 1.必选属性：

   content属性。该属性是为了定义与http-equiv或者name属性相关的元信息，其中的内容是为了便于搜索机器人查找信息和分类使用的。
 - 2.可选属性：

   name属性。该属性主要用于描述网页。name属性的值可以有：author、description、keywords、generator等等<br/>
   http-equiv属性。该属性相当于http的头文件作用，可以向浏览器返回一些有用的信息，以帮助正确和精确的显示内容。http-equiv属性的值可以有content-type、expires、refresh等等。

### name属性的一般应用
 - keyword、description、author、robot 基本应用

```sh
// 语言格式
<meta charset="utf-8">

//关键字 和 描述 html 主体内容
<meta name="keywords" content="关于meta标签,网页,918之初">
<meta name="description" content="HTML中<meta>标签如何正确使用">

// 作者信息
<meta name="author" content="somebody">
```

```sh
//便于 seo 搜索
<meta name="robot" content="none">
```

>该属性的值有all、none、index、noindex、follow和nofollow。默认为all。

 - 设定为all：文件将被检索，且页面上的链接可以被查询；

 - 设定为none：文件将不被检索，且页面上的链接不可以被查询；

 - 设定为index：文件将被检索；

 - 设定为follow：页面上的链接可以被查询；

 - 设定为noindex：文件将不被检索，但页面上的链接可以被查询；

 - 设定为nofollow：文件将被检索，但页面上的链接不可以被查询

### http-equiv 的一般应用

 - content-type(文档内容类型：用于设定文档的类型和字符集)
 - expires(期限：可以用于设定网页的到期期限)
 - pragma（cashe模式：即是否从缓存中访问网页内容）
 - refresh(刷新：等待一定时间自动刷新或跳转到其他url)

```sh
// 文档类型
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

// 必须是 GMT 格式
<meta http-equiv="expires" content="Fri,12 Jan 2001 15:15:15 GMT">

// 是否设置缓存
<meta http-equiv="pragma" content="no-cache">

// 等待一定时间自动跳转
<meta http-equiv="refresh" content="1; url=https://www.baidu.com"/>
```

### <meta>标签中在移动端的使用

- name属性的viewport的值（移动端屏幕的缩放）

```sh
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
```

- name属性的format-detection值。

我们可以通过这个属性禁止自动识别电话和邮箱。举例如下：

```sh
<meta name="format-detection" content="telephone=no,email=no"/>
```

- name属性的apple-mobile-web-app-capable值（网站开启对web app程序的支持）
```sh
<meta name="app-mobile-web-app-capable" content="yes"/>
```

- name属性的apple-mobile-web-app-status-bar-style值（改变顶部状态条的颜色）

```sh
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
```

### 浏览器缓存机制

#### 浏览器是如何判断缓存是否过期？

- 根据Response Header里面的Cache-Control和Expires这两个属性，当两个都存在时，Cache-Control优先级较高。

>浏览器缓存分为：强缓存和协商缓存。

#### 1、强缓存

浏览器加载资源时，第一步先判断它是否是强缓存，如果是，浏览器将直接从自己的缓存中读取，不会向服务器发送请求。
status200，Size是from memory cache就是走的强缓存。那么什么是强缓存呢？浏览器又是咋判断的呢？

 - Expires字段：

1、浏览器第一次向服务器请求，服务器返回资源并在response header加上Expires字段，是客户端缓存有效期，是绝对时间。
2、浏览器接收资源，把资源和相应头缓存起来。
3、待到再次请求这个资源时，先在缓存中找，找到了看Expires字段，判断是否过期。若没过期直接从缓存加载。若过期了，再向服务器请求。

- Cache-Control字段

1、浏览器第一次向服务器请求，服务器返回资源并在response header加上Cache-Control字段，也是缓存的有效期，但是是相对时间，比如：Cache-Control:max-age=56700000。
2、浏览器接收资源，把资源和相应头缓存下来。
3、待到浏览器再次请求这个资源时，先在缓存找，根据第一次的请求时间和Cache-Control相对时间算出过期时间。若没过期，直接从缓存加载。若过期了，再向服务器请求。

>Expires字段:是绝对时间有时会有偏差，所以引出了Cache-Control。Cache-Control弥补了Expires的不足，更安全有效。

#### 服务端如何判断缓存已失效？

- 服务端通过If-Modified-Since（Last-Modified）和If-None-Match（Etag）这两个属性的值来判断缓存是否失效的。

#### 2、协商缓存

当浏览器判断不是强缓存，就会发向服务器发请求，判断是否是协商缓存。如果是，服务器会返回304Not Modified，浏览器从缓存中加载。那什么又是协商缓存呢？

 - Last-Modified和If-Modified-Since字段：

1、浏览器第一次向服务器发请求，服务器返回资源并在response header加上Last-Modified字段，表示资源最后修改的时间。
2、浏览器再次请求这个资源时，请求头会加上If-Modified-Since字段。若这两个字段一样，说明资源没有修改过，返回304Not Modified，浏览器从缓存中获取资源。若这两个字段不一样，说明资源修改过，服务器正常返回资源。

- ETag、If-None-Match

但有时候服务器上资源有变化，但最后修改时间没更新，则引出下面两个字段。
 - 1、浏览器第一次向服务器请求，服务器返回资源并在response header上加ETag字段。表示资源本身，资源有变化，则该字段有变化。
 - 2、浏览器再次向服务器请求这个资源时，请求头携带If-None-Match字段。若这两个字段相同，则代表资源没有变化，服务器返回304Not Modified，浏览器从缓存中加载。若两个字段不同，证明资源有变动，服务器正常返回资源。
