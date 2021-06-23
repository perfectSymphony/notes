## Promise精选

### 常见 Promise 面试题

```sh
了解 Promise 吗？
Promise 解决的痛点是什么？
Promise 解决的痛点还有其他方法可以解决吗？如果有，请列举。
Promise 如何使用？
Promise 常用的方法有哪些？它们的作用是什么？
Promise 在事件循环中的执行过程是怎样的？
Promise 的业界实现都有哪些？
能不能手写一个 Promise 的 polyfill。
```

### Promise 出现的原因

在 Promise 出现以前，我们处理一个异步网络请求，大概是这样：

```sh
// 请求 代表 一个异步网络调用。
// 请求结果 代表网络请求的响应。
请求1(function(请求结果1){
    处理请求结果1
})
```

看起来也不复杂。
但是需求是永无止境的，于是乎出现了如下的代码

```sh
请求1(function(请求结果1){
    请求2(function(请求结果2){
        请求3(function(请求结果3){
            请求4(function(请求结果4){
                请求5(function(请求结果5){
                    请求6(function(请求结果3){
                        ...
                    })
                })
            })
        })
    })
})
```
回调地狱 现身了。

更糟糕的是，我们基本上还要对每次请求的结果进行一些处理，代码会更加臃肿，在一个团队中，代码 review 以及后续的维护将会是一个很痛苦的过程。

回调地狱带来的负面作用有以下几点：

 - 代码臃肿。
 - 可读性差。
 - 耦合度过高，可维护性差。
 - 代码复用性差。
 - 容易滋生 bug。
 - 只能在回调里处理异常。

出现了问题， 于是，Promise 规范诞生了，并且在业界有了很多实现来解决回调地狱的痛点。比如业界著名的 Q 和 bluebird，bluebird 甚至号称运行最快的类库。

### 什么是 Promise

 Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。现已被 ES6 纳入进规范中。

### 代码书写比较

还是使用上面的网络请求例子，我们看下 Promise 的常规写法：

new Promise(请求1)
    .then(请求2(请求结果1))
    .then(请求3(请求结果2))
    .then(请求4(请求结果3))
    .then(请求5(请求结果4))
    .catch(处理异常(异常信息))

比较一下这种写法和上面的回调式的写法。我们不难发现，Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。

### API

Promise 的常用 API 如下：

- Promise.resolve(value)

```sh
类方法，该方法返回一个以 value 值解析后的 Promise 对象
1、如果这个值是个 thenable（即带有 then 方法），返回的 Promise 对象会“跟随”这个 thenable 的对象，采用它的最终状态（指 resolved/rejected/pending/settled）
2、如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。
3、其他情况以该值为成功状态返回一个 Promise 对象。
```

上面是 resolve 方法的解释，传入不同类型的 value 值，返回结果也有区别。这个 API 比较重要，建议大家通过练习一些小例子，并且配合上面的解释来熟悉它。如下几个小例子：

```sh
//如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。  
function fn(resolve){
    setTimeout(function(){
        resolve(123);
    },3000);
}
let p0 = new Promise(fn);
let p1 = Promise.resolve(p0);
// 返回为true，返回的 Promise 即是 入参的 Promise 对象。
console.log(p0 === p1);
```

传入 thenable 对象，返回 Promise 对象跟随 thenable 对象的最终状态。

> ES6 Promises 里提到了 Thenable 这个概念，简单来说它就是一个非常类似 Promise 的东西。最简单的例子就是 jQuery.ajax，它的返回值就是 thenable 对象。但是要谨记，并不是只要实现了 then 方法就一定能作为 Promise 对象来使用。

```sh
//如果传入的 value 本身就是 thenable 对象，返回的 promise 对象会跟随 thenable 对象的状态。
let promise = Promise.resolve($.ajax('/test/test.json'));// => promise对象
promise.then(function(value){
   console.log(value);
});
```
返回一个状态已变成 resolved 的 Promise 对象。

```sh
let p1 = Promise.resolve(123); 
//打印p1 可以看到p1是一个状态置为resolved的Promise对象
console.log(p1)
```

- Promise.reject

> 类方法，且与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected。

 - Promise.prototype.then

 > 实例方法，为 Promise 注册回调函数，函数形式：fn(vlaue){}，value 是上一个任务的返回结果，then 中的函数一定要 return 一个结果或者一个新的 Promise 对象，才可以让之后的then 回调接收。

 - Promise.prototype.catch

 > 实例方法，捕获异常，函数形式：fn(err){}, err 是 catch 注册 之前的回调抛出的异常信息。

 - Promise.race

 > 类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 

 - Promise.all

 ```sh
 类方法，多个 Promise 任务同时执行。
如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果。
```

### 如何理解 Promise

 为了便于理解 Promise，大家除了要多加练习以外，最好的方式是能够将Promise的机制与现实生活中的例子联系起来，这样才能真正得到消化。
  我们可以把 Promise 比作一个保姆，家里的一连串的事情，你只需要吩咐给他，他就能帮你做，你就可以去做其他事情了。
  比如，某一天要出门办事，但是我还要买菜做饭送到老婆单位。
  出门办的事情很重要，买菜做饭也重要。但我自己只能做一件事。
这时我就可以把买菜做饭的事情交给保姆，我会告诉她：

 - 你先去超市买菜。
 - 用超市买回来的菜做饭。
 - 将做好的饭菜送到老婆单位。
 - 送到单位后打电话告诉我。
我们知道，上面三步都是需要消耗时间的，我们可以理解为三个异步任务。利用 Promise 的写法来书写这个操作：

```sh
function 买菜(resolve，reject) {
    setTimeout(function(){
        resolve(['西红柿'、'鸡蛋'、'油菜']);
    },3000)
}
function 做饭(resolve, reject){
    setTimeout(function(){
        //对做好的饭进行下一步处理。
        resolve ({
            主食: '米饭',
            菜: ['西红柿炒鸡蛋'、'清炒油菜']
        })
    },3000) 
}
function 送饭(resolve，reject){
    //对送饭的结果进行下一步处理
    resolve('老婆的么么哒');
}
function 电话通知我(){
    //电话通知我后的下一步处理
    给保姆加100块钱奖金;
}
```

好了，现在我整理好了四个任务，这时我需要告诉保姆，让他按照这个任务列表去做。这个过程是必不可少的，因为如果不告诉保姆，保姆不知道需要做这些事情。

```sh

// 告诉保姆帮我做几件连贯的事情，先去超市买菜
new Promise(买菜)
//用买好的菜做饭
.then((买好的菜)=>{
    return new Promise(做饭);
})
//把做好的饭送到老婆公司
.then((做好的饭)=>{
    return new Promise(送饭);
})
//送完饭后打电话通知我
.then((送饭结果)=>{
    电话通知我();
})
```

至此，我通知了保姆要做这些事情，然后我就可以放心地去办我的事情。

>请一定要谨记：如果我们的后续任务是异步任务的话，必须return 一个 新的 promise 对象。
如果后续任务是同步任务，只需 return 一个结果即可。
我们上面举的例子，除了电话通知我是一个同步任务，其余的都是异步任务，异步任务 return 的是 promise对象。

除此之外，一定谨记，一个 Promise 对象有三个状态，并且状态一旦改变，便不能再被更改为其他状态。

 - pending，异步任务正在进行。
 - resolved (也可以叫fulfilled)，异步任务执行成功。
 - rejected，异步任务执行失败。

### Promise的使用总结

Promise 这么多概念，初学者很难一下子消化掉，那么我们可以采取强制记忆法，强迫自己去记住使用过程。

 - 首先初始化一个 Promise 对象，可以通过两种方式创建， 这两种方式都会返回一个 Promise 对象。
  - 1、new Promise(fn)
  - 2、Promise.resolve(fn)
 - 然后调用上一步返回的 promise 对象的 then 方法，注册回调函数。

 - then 中的回调函数可以有一个参数，也可以不带参数。如果 then 中的回调函数依赖上一步的返回结果，那么要带上参数。比如:

```sh
    new Promise(fn)
    .then(fn1(value）{
        //处理value
    })
```
 - 最后注册 catch 异常处理函数，处理前面回调中可能抛出的异常。

  通常按照这三个步骤，你就能够应对绝大部分的异步处理场景。用熟之后，再去研究 Promise 各个函数更深层次的原理以及使用方式即可。

  看到这里之后，我们便能回答上面的问题 4 和问题 5了。

### Promsie 与事件循环

Promise在初始化时，传入的函数是同步执行的，然后注册 then 回调。注册完之后，继续往下执行同步代码，在这之前，then 中回调不会执行。同步代码块执行完毕后，才会在事件循环中检测是否有可用的 promise 回调，如果有，那么执行，如果没有，继续下一个事件循环。

  关于 Promise 在事件循环中还有一个 微任务的概念(microtask)，感兴趣的话可以看另外一篇关于nodejs 时间循环的文章 [剖析nodejs的事件循环](https://juejin.cn/post/6844903621444763662)，虽然和浏览器端有些不同，但是Promise 微任务的执行时机相差不大。

### Promise 的升级

 ES6 出现了 generator 以及 async/await 语法，使异步处理更加接近同步代码写法，可读性更好，同时异常捕获和同步代码的书写趋于一致。上面的列子可以写成这样：

```sh
(async ()=>{
  let 蔬菜 = await 买菜();
  let 饭菜 = await 做饭(蔬菜);
  let 送饭结果 = await 送饭(饭菜);
  let 通知结果 = await 通知我(送饭结果);
})();
```

需要记住的是，async/await也是基于 Promise 实现的，所以，我们有必要深入理解 Promise 的用法。

### Promise相关补充:

1、

```sh
  new Promise(function(resolve,reject){
    console.log("promise start...");
    var timeout = Math.random()*2;   //0-2
    console.log("set timeout to：" + timeout + "seconds");
    setTimeout(function(){
      if(timeout < 1){
        console.log("call resolve()...");
        resolve("200 ok");
      }else{
        console.log("call reject()...");
        reject("timeout in" + timeout + "seconds");
      }
    },timeout * 1000);
  }).then(function(resolve){
    console.log("Done：" + resolve);
  }).catch(function(reject){
    console.log("Failed：" + reject)
  });
```

可见Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了。

2、任何任务失败则不再继续并执行错误处理函数。
要串行执行这样的异步任务，不需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

```sh
function multi(input){
    return new Promise(function(resolve,reject){
        console.log('计算 ' + input + ' x ' + input + '...');
        setTimeout(resolve,500, input * input);
    });
}
function add(input){
    return new Promise(function(resolve,reject){
        console.log('计算 ' + input + ' + ' + input + '...');
        setTimeout(resolve,500,input + input);
    });
}
var p = new Promise(function(resolve,reject){
    console.log("start ....");
    resolve(33);
});
p.then(multi)
 .then(add)
 .then(multi)
 .then(add)
 .then(function(result){
    console.log("结果：" + result);
 });
```
