## Javascript清除缓存的几种方法

#### 1、meta方法
```sh
//不缓存
<META HTTP-EQUIV="pragma" CONTENT="no-cache"> 
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
<META HTTP-EQUIV="expires" CONTENT="0">
```
#### 2、清理form表单的临时缓存

```sh
<body onLoad="javascript:document.yourFormName.reset()">
```

### 3、jquery ajax清除浏览器缓存

#### 方式一：用ajax请求服务器最新文件，并加上请求头If-Modified-Since和Cache-Control,如下:

```sh
  $.ajax({
     url:'www.haorooms.com',
     dataType:'json',
     data:{},
     beforeSend :function(xmlHttp){ 
        xmlHttp.setRequestHeader("If-Modified-Since","0"); 
        xmlHttp.setRequestHeader("Cache-Control","no-cache");
     },
     success:function(response){
         //操作
     }
     async:false
  });
```

#### 方法二，直接用cache:false,

```sh
  $.ajax({
     url:'www.haorooms.com',
     dataType:'json',
     data:{},
     cache:false, 
     ifModified :true ,

     success:function(response){
         //操作
     }
     async:false
  });
```

#### 方法三：用随机数，随机数也是避免缓存的一种很不错的方法！

> URL 参数后加上 "?ran=" + Math.random(); //当然这里参数 ran可以任意取了

#### 方法四：用随机时间，和随机数一样。

>在 URL 参数后加上 "?timestamp=" + new Date().getTime(); 

#### 用php后端清理

>在服务端加 header("Cache-Control: no-cache, must-revalidate");等等(如php中)


### 微信浏览器自动清理缓存
根本的方式：给静态资源添加md5类型的版本号， 入口文件被缓存，首页是设置服务端的缓存机制(将nginx的缓存设置成{expires-1;}，设置成永远不缓存)

版本号有两种方式: <br/>
   a，传统的文件名后带参数的方式： index.js?v=20170705;<br/>
   b，现在多用的md5文件名的方式： index-8a769sh7f9d.js;<br/>

  因为微信对于第一种方式，可能会直接忽略后面的hash值。<br/>

微信缓存入口文件index.html(项目是单页应用)
