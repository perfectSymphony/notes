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