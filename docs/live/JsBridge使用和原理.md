## JsBridge使用和原理

## What is JsBridge

近期做一个项目，使用的是Native+H5的方式实现的。众所周知的是在android中，webview所实现的java和js的交互存在一些安全问题，并且这样的使用方式，没法让一套H5同时适配Android和IOS两个平台，因此，就需要有一个中间件来实现js与本地代码的交互，也就是JSBrige。

在Android平台我们选用了[开源项目](https://github.com/lzyzsd/JsBridge)。整个库的结构比较简单：一个用来注入的js文件，一个自定义的webview以及作为载体的BriBridgeHandler。

## JsBridge的使用

在介绍JsBridge的原理之前，先简单介绍下JsBridge的使用，也可以看[github](https://github.com/lzyzsd/JsBridge)上的表述

## JsBridge库集成

集成的方式有很多种：

1、使用作者推荐的方式：

```sh
  repositories {  
    maven {url "https://jitpack.io"}  
  }  
  dependencies {  
    compile 'com.github.lzyzsd:jsbridge:1.0.4'
  }
```

2、使用源码集成
下载源码，将源码拷贝至自己的工程内，作为工程的文件。

3、自定义Module
下载源码，新建Module，将源码导入Module，并将项目依赖自定义的Module

## 使用JsBridge库

- 提供操作给js调用

```sh
  webView.registerHandler("submitFromWeb", new BridgeHandler(){
    @Override
    public void handler(String data, CallBackFunction function){
        function.onCallBack("submitFrom web exe, response data from java");
    }
  }
```

Js如果需要调用Java提供的方法时候，则需要调用这个Handler，而在注册时参数`submitFromWeb`将作为Js调用时使用的Key值。调用方式如下：

```sh
  WebViewJavascriptBridge.callHandler(
    'submitFromWeb',
    {'param':str1},
    function(responseData){
      //这里打印的应该是上面Handler实现方法中的callback的入参：submitFrom web exe, response data from java
      document.getElementById("show").innerHTML = "response data from java, data = "+responseData
    }
  )
```

另外，库也提供了一个简单的没有回调的调用方式：

```sh
  webView.setDefaultHandler(new DefaultHandler());
```

Js调用的方式也可以简化为：

```sh
  WebViewJavascriptBridge.send(
    data,
    function(responseData){
        //java中DefaultHandler所实现的方法中callback所定义的入参
    }
  )
```

 - 提供操作给Java调用

 注册方法与Java雷同：

 ```sh
  WebViewJavascriptBridge.registerHandler("functionInJs", function(data, responseCallback) {
      document.getElementById("show").innerHTML = ("data from Java: = " + data);
      var responseData = "Javascript Says Right back aka!";
      responseCallback(responseData);
  });
 ```

 Java调用Handler时，也跟Js一样：

 ```sh
  webView.callHandler("functionInJs", new Gson().toJson(user),
    new CallBackFunction(){
      @Override
      public void onCallBack(String data){
      }
    }
  );
 ```

 同样的，在JS中也可以注册默认的Handler，以方便Java调用时，通过send方法发送数据

 ```sh
  bridge.init(function(message, responseCallback) {
    console.log('JS got a message', message);
    var data = {
        'Javascript Responds': 'Wee!'
    };
    console.log('JS responding with', data);
    responseCallback(data);
  });
 ```
 java调用send方法：

```sh
 webView.send("hello");
```

 ## JsBridge的核心

 JsBridge之所以能实现Native与Js相互调用的功能，其核心实现其实就是：

 - 拦截Url
 - load url("javascript:js_method()");

先说第二点，Native调用Js，通过加载以javascript:开头的url即可实现调用Js的方法。这个很好理解，在web中也是通过这种方式调用Js的方法的。
然后细说下第一点的实现：

向body中添加一个不可见的iframe元素。通过拦截url的方法来执行相应的操作，但是页面本身不能跳转，所以改变一个不可见的iframe的src就可以让webview拦截到url，而用户是无感知的。
拦截url。通过shouldOverrideUrlLoading来拦截约定规则的Url，再做具体操作。

Ps： 添加iframe是H5自身可实现的，但是如果H5来实现的话，需要每个页面实现，且耦合较高；因此放在库里，通过加载完成注入的方式，则会降低耦合