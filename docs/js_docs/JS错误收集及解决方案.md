## JS错误收集及解决方案

### 情况一: 同步代码出现异常

同一个线程中运行的代码，异常阻塞

```javascript
var a = 0
console.log("--step1")
a = a+b
console.log("--step2")
```

> --step1 <br/> ReferenceError: b is not defined


### 情况二：多个代码片段，其中之一出现异常

当我们在代码中使用多块script

```javascript
<body>
进入part1
<script>
    console.log("====step1")
    var a= 1
    a = a + b
    console.log("====step2")
</script>
 
进入part2
 
<script>
    console.log("====step3")
</script>
</body>

```

>====step1 <br/> ReferenceError: b is not defined <br/> ====step3

### 情况三：外链代码，一个出现异常

多个外联script, s1,s2代码同上
```javascript
<script src="./js/s1.js"></script>
<script src="./js/s2.js"></script>
```

结果同情况2
> ====step1 <br/> 
> ReferenceError: b is not defined<br/> 
> ====step3<br/> 

### 情况四：同步异步代码混合

```javascript
var a = 0
console.log("--step1")
setTimeout(() => {
    console.log("--step3")
    a = a+b
    console.log("--step4")
},1000)
 
console.log("--step2")
```

结果如下：
> --step1<br/> 
> --step2<br/> 
> --step3 <br/> 
> ReferenceError: b is not defined

### 情况五：异步代码外try...catch

对异步代码进行异常捕获

```javascript
window.addEventListener("error", function() {
        console.log("全局错误捕获",arguments)
    })
 
    try{
        var a = 1;
        setTimeout(function() {
            a = a+b
        }, 100)
    }catch(e) {
        console.log("===未在try..catch捕获")
    }
```

### 情况六:加异常捕获

对可能出现异常的代码加异常捕获

```javascript
var a = 0
console.log("--step1")
try{
    a = a+b
}catch(e){
    console.log(e.message)
}
 
console.log("--step2")
```

> --step1 <br/> 
> b is not defined <br/> 
> --step2 <br/> 

### 情况七: await

包含promise的操作, 分别运行下述代码中1、2、3的分支

```javascript
async function a () {
    await Promise.reject("===step1")
}
 
//1
a()
console.log("===step2")        
 
//2
async function b() => {
    await a()
    console.log("===step3")
}
b()
 
// 3
async function c() {
    try{
        await a()
    }catch(e) {
        console.log(e)
    }
    console.log("===step4")
}
c()
```

> 分支1：
> ===step2 <br/> 
> UnhandledPromiseRejectionWarning: ===step1 <br/> 
> 分支2: <br/> 
> UnhandledPromiseRejectionWarning:===step1 <br/> 
> 分支3：<br/> 
> ===step1 <br/> 
> ===step4 

### 情况八： promise代码块异常

```javascript
window.addEventListener("error", function() {
        console.log("全局错误捕获",arguments)
 })
window.addEventListener("unhandledrejection", event => {
    console.warn("promise Error",event.reason.message, event.reason.stack)
 });
 
function a() {
   return new Promise(function() {
      var a = 1
      a = a +b
     })
  }
 a()
```
测试结果
> promise Error  "b is not defined" "ReferenceError: b is not defined <br/> 
> at http://localhost:63342/jserror/test/thead9.html:20:20 <br/> 
> at new Promise ()

以上测试，可以得出以下结论: <br/> 
> a. 同步代码块异常会阻塞后续代码 <br/> 
> b. 不同的script标签之间互不影响 <br/> 
> c. 异步代码只会影响当前异步代码块的后续代码 <br/> 
> d. promise如果返回reject，需要使用catch捕获处理 <br/> 
> f. 如果使用async、await， 可以转换成try..catch捕获 

### 处理跨域情况下的异常收集

非同域下错误是什么样子呢？

看范例

```javascript
<script>
    window.onerror=function(e) {
        console.log("全局错误:", arguments)
    }
</script>
<script src="http://192.168.31.200:8080/js/s1.js"></script>
```

> Chrome下得到的结果是 <br/> 
> Script error. <br/> 
> 这是浏览器同源策略导致的， 会隐藏不同源资源的错误详情

处理以上情况，有两种方案：


### 方案一：crossorigin：

对引入的资源加crossorigin="anonymous"

```javascript
<script>
   window.onerror=function(e) {
      console.log("全局错误:", arguments)
   }
 </script>
 <script src="http://10.10.47.38:8080/js/s1.js" crossorigin="anonymous"></script>
```
> Chrome下得到结果 <br/> 
> Uncaught ReferenceError: b is not defined

>注： 该方法局限性， 一是浏览器兼容性， 二是请求的资源需要添加CORS相关响应

### 方案二：(只作为不支持crossorigin的补充)

使用try..catch包装需要捕获错误的方法或代码块
如何确定哪些方法是我们需要单独封装的？

异常是出现在外部js中，有可能是cdn的资源或者引用网络上其他的资源，他们有个特点就是跨域， 一旦这些文件发生错误， 我们无法获取到具体的错误信息。
那么除了crossorigin,我们还有那些方法可以取到跨域js的异常呢？

**a. 在同域js中调用跨域js的函数， 手动包装try..catch**

```javascript
// s1.js
function m1 () {
    console.log("====step1")
    var a = 1
    a = a+b
    console.log("====step2")
}
// test.html
try{
    m1()
}catch(e){
    throw e
}
```

m1为跨域js提供的一个函数 这时候抛出的error等同于同域下的错误信息

**b. 跨域js中有一些异步的代码， 如setTimeout、eventListener等**

对于这一类，我们可以对原生的方法进行封装， 对参数包裹try...catch， 可以达到手动包装的效果
如 setTimeout， 我们对函数入参进行封装即可

```javascriipt
// test.html
 window.onerror=function(e) {
            console.log("全局错误:", arguments[0])
        }
        var originTo = window.setTimeout
        function wrap (originTo) {
            return function(fun, arg) {
                var fun2 = function() {
                    try{
                        fun.call(this, arguments)
                    }catch(e){
                        throw e
                    }
                }
                originTo(fun2, arg)
            }
        }
        window.setTimeout = wrap(originTo)
m1()

// s5.js
function m1 () {
    setTimeout(function() {
        console.log("====step1")
        var a = 1
        a = a+b
        console.log("====step2")
    },100)
}
```

输出结果为：
> 全局错误: Uncaught ReferenceError: b is not defined

> 我们使用自定义方法可以对常用对象进行包裹， 但是并不能做到全部拦截， 如大家常用的sentry， 如果出现不在特定方法内的跨域错误， 会直接被sentry吞掉

基于以上思路， 我们提供一个通用的封装方法，可参考sentry或者badjs， sentry代码如下

```javascript
context: function(options, func, args) {
    if (isFunction(options)) {
      args = func || [];
      func = options;
      options = undefined;
    }
 
    return this.wrap(options, func).apply(this, args);
  },
 
  /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
  wrap: function(options, func, _before) {
    var self = this;
    // 1 argument has been passed, and it's not a function
    // so just return it
    if (isUndefined(func) && !isFunction(options)) {
      return options;
    }
 
    // options is optional
    if (isFunction(options)) {
      func = options;
      options = undefined;
    }
 
    // At this point, we've passed along 2 arguments, and the second one
    // is not a function either, so we'll just return the second argument.
    if (!isFunction(func)) {
      return func;
    }
 
    // We don't wanna wrap it twice!
    try {
      if (func.__raven__) {
        return func;
      }
 
      // If this has already been wrapped in the past, return that
      if (func.__raven_wrapper__) {
        return func.__raven_wrapper__;
      }
    } catch (e) {
      // Just accessing custom props in some Selenium environments
      // can cause a "Permission denied" exception (see raven-js#495).
      // Bail on wrapping and return the function as-is (defers to window.onerror).
      return func;
    }
 
    function wrapped() {
      var args = [],
        i = arguments.length,
        deep = !options || (options && options.deep !== false);
 
      if (_before && isFunction(_before)) {
        _before.apply(this, arguments);
      }
 
      // Recursively wrap all of a function's arguments that are
      // functions themselves.
      while (i--) args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
 
      try {
        // Attempt to invoke user-land function
        // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
        //       means Raven caught an error invoking your application code. This is
        //       expected behavior and NOT indicative of a bug with Raven.js.
        return func.apply(this, args);
      } catch (e) {
        self._ignoreNextOnError();
        self.captureException(e, options);
        throw e;
      }
    }
 
    // copy over properties of the old function
    for (var property in func) {
      if (hasKey(func, property)) {
        wrapped[property] = func[property];
      }
    }
    wrapped.prototype = func.prototype;
 
    func.__raven_wrapper__ = wrapped;
    // Signal that this function has been wrapped already
    // for both debugging and to prevent it to being wrapped twice
    wrapped.__raven__ = true;
    wrapped.__inner__ = func;
 
    return wrapped;
  }
```

我们可以调用wrap方法对函数进行封装
如项目中使用了requirejs，那我们可以通过直接对require和define对象封装，从而达到对跨域文件全内容封装的目的

```javascript
if (typeof define === 'function' && define.amd) {
    window.define = wrap({deep: false}, define);
    window.require = wrap({deep: false}, require);
  }
```

> 注: 该方法的局限性在于，需要开发者发现项目中的一些关键入口并手动封装

以上我们讨论了Error的类型、出现原因及如何捕获异常，然而上图中标识的错误字段兼容性也是一大问题

好在 ***前人栽树后人乘凉***，有一个库可以帮助我们处理该问题[TraceKit](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcsnover%2FTraceKit%2F)O(∩_∩)O~~





> 腾讯开源前端监控方案[bad.js源码解析](https://github.com/RicardoCao-Biker/Front-End-Monitoring/blob/master/badjs-sourcedoce-explain.md)可以点击查阅

