## Vue的异步更新实现原理

## JS运行机制

众所周知，JS是基于事件循环的单线程的语言。执行的步骤大致是：

1、当代码执行时，所有同步的任务都在主线程上执行，形成一个执行栈；
2、在主线程之外还有一个任务队列(task queue)，只要异步任务有了运行结果就在任务队列中放置一个事件；
3、一旦执行栈中所有同步任务执行完毕（主线程代码执行完毕），此时主线程不会空闲而是去读取任务队列。此时，异步的任务就结束等待的状态被执行。
4、主线程不断重复以上的步骤。

我们把主线程执行一次的过程叫一个tick，所以nextTick就是下一个tick的意思，也就是说用nextTick的场景就是我们想在下一个tick做一些事的时候。

所有的异步任务结果都是通过任务队列来调度的。而任务分为两类：宏任务(macro task)和微任务(micro task)。它们之间的执行规则就是每个宏任务结束后都要将所有微任务清空。常见的宏任务有setTimeout/MessageChannel/postMessage/setImmediate，微任务有MutationObsever/Promise.then。

想要透彻学习事件循环，推荐Jake在JavaScript全球开发者大会的演讲，
[![yVGwQ0.png](https://s3.ax1x.com/2021/02/01/yVGwQ0.png)](https://imgchr.com/i/yVGwQ0)

## nextTick原理

## 派发更新

大家都知道vue的响应式的靠依赖收集和派发更新来实现的。在修改数组之后的派发更新过程，会触发setter的逻辑，执行dep.notify()：

```javasciprit
// src/core/observer/watcher.js
class Dep {
 notify() {
     //subs是Watcher的实例数组
     const subs = this.subs.slice()
        for(let i=0, l=subs.length; i<l; i++){
         subs[i].update()
        }
    }
}
```

遍历subs里每一个Watcher实例，然后调用实例的update方法，下面我们来看看update是怎么去更新的：

```sh
class Watcher {
 update() {
     ...
     //各种情况判断之后
        else{
         queueWatcher(this)
        }
    }
}
```

update执行后又走到了queueWatcher，那就继续去看看queueWatcher干啥了(希望不要继续套娃了:

```sh
//queueWatcher 定义在 src/core/observer/scheduler.js
const queue: Array<Watcher> = []
let has: { [key: number]: ?true } = {}
let waiting = false
let flushing = false
let index = 0

export function queueWatcher(watcher: Watcher) {
 const id = watcher.id
  //根据id是否重复做优化
  if(has[id] == null){
    has[id] = true
      if(!flushing){
        queue.push(watcher)
      }else{
        let i=queue.length - 1
          while(i > index && queue[i].id > watcher.id){
            i--
          }
          queue.splice(i + 1, 0, watcher)
      }
      
    if(!waiting){
    waiting = true
        //flushSchedulerQueue函数: Flush both queues and run the watchers
        nextTick(flushSchedulerQueue)
    }
  }
}
```

这里queue在pushwatcher时是根据id和flushing做了一些优化的，并不会每次数据改变都触发watcher的回调，而是把这些watcher先添加到⼀个队列⾥，然后在nextTick后执⾏flushSchedulerQueue。

flushSchedulerQueue函数是保存更新事件的queue的一些加工，让更新可以满足Vue更新的生命周期。

这里也解释了为什么for循环不能导致页面更新，因为for是主线程的代码，在一开始执行数据改变就会将它push到queue里，等到for里的代码执行完毕后i的值已经变化为100时，这时vue才走到nextTick(flushSchedulerQueue)这一步。


### nextTick源码

接着打开vue2.x的源码，目录core/util/next-tick.js，代码量很小，加上注释才110行，是比较好理解的。

```sh
const callbacks = []
let pending = false

export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
```

首先将传入的回调函数cb（上节的flushSchedulerQueue）压入callbacks数组，最后通过timerFunc函数一次性解决.

```sh
let timerFunc

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
    }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

timerFunc下面一大片if else是在判断不同的设备和不同情况下选用哪种特性去实现异步任务：优先检测是否原生⽀持Promise，不⽀持的话再去检测是否⽀持MutationObserver，如果都不行就只能尝试宏任务实现，首先是setImmediate，这是⼀个⾼版本 IE 和 Edge 才⽀持的特性，如果都不⽀持的话最后就会降级为 setTimeout 0。

这⾥使⽤callbacks⽽不是直接在nextTick中执⾏回调函数的原因是保证在同⼀个 tick 内多次执⾏nextTick，不会开启多个异步任务，⽽把这些异步任务都压成⼀个同步任务，在下⼀个 tick 执⾏完毕。


## nextTick使用

nextTick不仅是vue的源码文件，更是vue的一个全局API。下面来看看怎么使用吧。

当设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环tick中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用数据驱动的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。

官网用例：

```sh
<div id="example">{{message}}</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: '123'
  }
})
vm.message = 'new message' // 更改数据

vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})
```
并且因为$nextTick() 返回一个 Promise 对象，所以也可以使用async/await 语法去处理事件，非常方便。


## 对vue中的nextTick可以简单理解为：

- 在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的 DOM。
- nextTick主要使用了宏任务和微任务。
- 根据执行环境分别尝试采用Promise、MutationObserver、setImmediate，如果以上都不行则采用setTimeout定义了一个-异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。