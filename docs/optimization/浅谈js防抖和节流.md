## 浅谈js防抖和节流

## 从滚动条监听的例子说起

先说一个常见的功能，很多网站会提供这么一个按钮：用于返回顶部。
![aYsa7t.png](https://s1.ax1x.com/2020/08/02/aYsa7t.png)

这个按钮只会在滚动到距离顶部一定位置之后才出现，那么我们现在抽象出这个功能需求-- **监听浏览器滚动事件，返回当前滚条与顶部的距离**

这个需求很简单，直接写:

```sh
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
window.onscroll  = showTop
```
但是，在运行的时候会发现存在一个问题：**这个函数的默认执行频率，太！高！了！**。以chrome为例，我们可以点击选中一个页面的滚动条，然后点击一次键盘的【向下方向键】，会发现函数执行了**8-9**次！

![aYsr9S.png](https://s1.ax1x.com/2020/08/02/aYsr9S.png)

然而实际上我们并不需要如此高频的反馈，毕竟浏览器的性能是有限的，不应该浪费在这里，所以接着讨论如何优化这种场景。

## 防抖(debounce)

基于上述场景，首先提出第一种思路：**在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms**，然后：

 - 如果在200ms内没有再次触发滚动事件，那么就执行函数
 - 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

**效果**：如果短时间内大量触发同一事件，只会执行一次函数。

**实现**：既然前面都提到了计时，那实现的关键就在于`setTimeOut`这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：

```sh
/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
            timer = setTimeOut(fn,delay) 
        }else{
            timer = setTimeOut(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
        }
    }
}
```

当然 上述代码是为了贴合思路，方便理解，写完会发现其实 `time = setTimeOut(fn,delay)`是一定会执行的，所以可以稍微简化下：

```sh
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
}
// 然后是旧代码
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
window.onscroll = debounce(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置
```

此时会发现，必须在停止滚动1秒以后，才会打印出滚动条位置。

到这里，已经把**防抖**实现了，现在给出定义：

 - 对于**短时间内连续触发**的事件（上面的滚动事件），**防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。**


 ## 节流(throttle)

继续思考，使用上面的防抖方案来处理问题的结果是：

 - 如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。
**但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？**

其实很简单：我们可以设计一种**类似控制阀门一样定期开放的函数，也就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活**（类似于技能冷却时间）。

**效果：**如果短时间内大量触发同一事件，那么**在函数执行一次之后，该函数在指定的时间期限内不再工作**，直至过了这段时间才重新生效。

**实现** 这里借助`setTimeout`来做一个简单的实现，加上一个状态位`valid`来表示当前函数是否处于工作状态：

```sh
function throttle(fn,delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false 
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}
/* 请注意，节流函数并不止上面这种实现方案,
   例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。
   也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
    */

// 以下照旧
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
window.onscroll = throttle(showTop,1000) 
```

运行以上代码的结果是：

 - 如果一直拖着滚动条进行滚动，那么会以1s的时间间隔，持续输出当前位置和顶部的距离

 ## 其他应用场景举例

 讲完了这两个技巧，下面介绍一下平时开发中常遇到的场景：

 1、搜索框input事件，例如要支持输入实时搜索可以使用节流方案（间隔一段时间就必须查询相关内容），或者实现输入间隔大于某个值（如500ms），就当做用户输入完成，然后开始搜索，具体使用哪种方案要看业务需求。
 2、页面resize事件，常见于需要做页面适配的时候。需要根据最终呈现的页面情况进行dom渲染（这种情形一般是使用防抖，因为只需要判断最后一次的变化情况）


[参看：深入理解JS函数节流和防抖](https://www.cnblogs.com/goloving/p/8672361.html)
