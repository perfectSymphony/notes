## Javascript问题汇总

#### 1、base64 web前端js解码与转码

解码，就是把base64的转换成常规字符串

```sh
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
  }));
}
b64EncodeUnicode('我是很厉害的'); // "5oiR5piv5b6I5Y6J5a6z55qE"
```
转码

```sh
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

b64DecodeUnicode('5oiR5piv5b6I5Y6J5a6z55qE'); // "我是很厉害的"
```
#### 2、URL加解密

```sh
//escape()不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值。比如"春节"的返回结果是%u6625%u8282，escape()不对"+"编码 主要用于汉字编码。
alert(escape("春节"));
alert(unescape(escape("春节")));
//encodeURI()是用来对URL编码的函数。 编码整个url地址，但对特殊含义的符号"; / ? : @ & = + $ , #"不进行编码。对应的解码函数是：decodeURI()。
alert(encodeURI('http://baidu.com?hello=您好&word=文档'));
alert(decodeURI(encodeURI('http://baidu.com?hello=您好&word=文档')));
//encodeURIComponent() 能编码"; / ? : @ & = + $ , #"这些特殊字符。对应的解码函数是decodeURIComponent()。
alert(encodeURIComponent('http://baidu.com?hello=您好&word=文档'));
alert(decodeURIComponent(encodeURIComponent('http://baidu.com?hello=您好&word=文档')));

```

#### 3、js修改iframe内的css样式

```sh
# 这种方式生效的前提是父页面与子页面必须在同一域名下，否则会跨域，如果出现跨域，可以使用postMessage代替
<body οnlοad="ft()"><!-- 加载完之后才能读取完整的document对象 -->
<div style="text-align: center;">
<iframe id="myFrame" name="myFrame" src="MyHtml.html" frameborder="0" scrolling="no"  height="560px;" sandbox="allow-forms"></iframe>
</div>
 
<script type="text/javascript">
function ft(){
//alert(document.getElementById("myFrame").document);
var deptObjs= document.getElementById("myFrame").contentWindow.document.getElementsByTagName("div");
for(var i=0;i<deptObjs.length;i++){
   var tmp=deptObjs[i];
   if(tmp.className=="myTest"){
	   //alert(tmp.style.display);
       tmp.style.display="none";
       //alert(tmp.style.display);
   }  
}
}
```

#### 4、Unexpected token < in JSON at position 0 的错误解析

##### 1、引起的原因
这些错误发生在当你向服务器发送请求，返回值不是JSON而用JSON的方法解析的时候，发生这种情况的代码可能是这样的
```sh
fetch('/users').then(res => res.json())
```
实际的请求没有问题，它得到了一个返回值，发生问题的关键在于`res.json()`

##### 2、JSON.parse
用另一种方法JSON.parse来解析Json的， 代码可能是这样的

```sh
JSON.parse(`不是Json的字符串`);
```
`JSON.parse()`本质上是和`res.json()`一样的，所以它们发生错误的情况是相同的。

##### 3、无效的JSON

>JSON应该以有效的JSON值开始 —— 一个object, array, string, number, 或者是
false/true/null。以<开始的返回值会有Unexpected token <这样的提示。
<这个符号意味着返回值是HTML而不是JSON。
引起这个错误的根源是服务端返回的是HTML或者其他不是Json的字符串。

<strong>为什么会这样呢？</strong>
“Unexpected token o in JSON at position 1” 或者其他变量。
错误的提示一些差别会随着服务器返回的不同而不同

它所提示的符号或者位置可能不同，但是引起它的原因是相同的： 你的代码所有解析的Json不是真的有效的Json。
下面是一些我所看见的错误的提示：

- Unexpected token < in JSON at position 1
- Unexpected token p in JSON at position 0
- Unexpected token d in JSON at position 0

##### 4、解决方案

With fetch, you can use res.text() instead of res.json() to get the text string itself. Alter your code to read something like this, and check the console to see what’s causing the problem:
首先要做是先把返回值打印出来。如果用fetch，可以用`res.text()`代替`res.json()`来获得字符串。把你的代码转换成如下这样，并且通过打印出来的内容查看哪里出问题了。

```sh
fetch('/users')
  // .then(res => res.json()) // comment this out for now
  .then(res => res.text())          // convert to plain text
  .then(text => console.log(text))  // then log it out
```

注意像`res.json()`和`res.text()`这样的方法是异步的。所以不能直接把它们的返回值打印出来，这就是console.log必须在.then的括号里面的原因。

##### 5、是因为服务器的原因吗？

服务器有好几种原因返回HTML而不是JSON：

- 请求的url不存在，服务器以HTML的方式返回404页面。你可能在请求时代码写错（像把/user写成了/users）,或者服务端的代码的错误。
- 当添加了新的路由时，服务器需要重启。比如你在用Express写的服务器时，刚刚新加了一个app.get('/users', ...)路由，但是没有重启，服务器就不会对新的路由地址有反应。
- 客户端的代理没有设置： 如果在使用像Create React App的Webpack dev server时，你可以设置一个指向后端服务器的代理。
- API的根url是/,如果你在通过Webpack 或Create React App使用代理,要确认你的API路由不在根的层级/。这样会时代理服务器混淆，你将得到一个HTML而不是你的API请求的返回。你可以在如有前面加个前缀像/api/。

同时可以通过devtools的network查看请求的返回值。

>是不是404页面？（可能是缺少该地址或者代码输入错误）。
这是不是index.html的页面？（可能是缺少地址或者代理配置错误）

>如果一切看起来没问题（新加的地址，服务端没有重启），那就重启前端和后端服务器，看看是不是问题解决了