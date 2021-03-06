## Vue中的watch与computed

### 一、 vue开发computed，watch，method执行的先后顺序

1#computed：计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。

2#methods：methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。

3#watch：是一种更通用的方式来观察和响应 Vue 实例上的数据变动。一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

通俗来讲，

computed是在HTML DOM加载后马上执行的，如赋值；

而methods则必须要有一定的触发条件才能执行，如点击事件；

watch呢？它用于观察Vue实例上的数据变动。对应一个对象，键是观察表达式，值是对应回调。值也可以是方法名，或者是对象，包含选项。

所以他们的执行顺序为：默认加载的时候先computed再watch，不执行methods；等触发某一事件后，则是：先methods再watch。

下面的例子可以做为说明。

computed 属性 vs watched 属性：Vue 确实提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：watch 属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的想法是使用 computed 属性而不是命令式的 watch 回调。



所以他们的执行顺序为：默认加载的时候先computed再watch，不执行methods；等触发某一事件后，则是：先methods再watch。


### 二、watch与computed

自己的理解：

- computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
- computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。这里的这个总金额使用computed属性来进行计算是最好的选择


与watch之间的区别：

　　刚开始总是傻傻分不清到底在什么时候使用watch，什么时候使用computed。这里大致说一下自己的理解：

- watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象，但是我们不能类似这样监控，比如：

```sh
watch:{
goodsList.price(newVal,oldVal){
    //监控商品列表中是商品价格
}
}
```

这样会报错。只能监控整个对象或单个变量，如下所示：

```sh
data(){
　　　　　　　　return {
　　　　　　　　　　example0:"",
　　　　　　　　　　example1:"",
　　　　　　　　　　example2:{
 　　　　　　　　　　　　inner0:1, 　　　　　　　　　
                        　　　innner1:2 　　　　　　　　　
                    　}
　　　　　　}
　　　　},
watch:{
　example0(newVal,oldVal){//监控单个变量
           ……
   }，example2(newVal,oldVal){//监控对象
           ……
   }，}
```

watch一般用于监控路由、input输入框的值特殊处理等等，它比较适合的场景是一个数据影响多个数据
另外一种监听对象的方式
![b4vi4J.png](https://s1.ax1x.com/2022/03/10/b4vi4J.png)
 监听appversionName用下面的方式，将对象和属性用引号的方式：‘对象名.属性名’（newVal,oldVal）{}

 ```sh
  watch: {
    "dialogForm.appversionName"(newVal, oldVal) {
      console.log("新值："+newVal,"旧值："+ oldVal);
    }
  },
 ```
 监听情况如下：

![b5MBvt.png](https://s1.ax1x.com/2022/03/11/b5MBvt.png)

计算属性可用于快速计算视图（View）中显示的属性。这些计算将被缓存，并且只在需要时更新。

在Vue中有多种方法为视图设置值：

使用指令直接将数据值绑定到视图
使用简单的表达式对内容进行简单的转换
使用过滤器对内容进行简单的转换
除此之外，我们还可以使用计算属性根据数据模型中的值或一组值来计算显示值。

#### 计算属性

计算属性允许我们对指定的视图，复杂的值计算。这些值将绑定到依赖项值，只在需要时更新。

例如，我们可以在数据模型中有一个results数组：
![bvKIbD.png](https://s1.ax1x.com/2022/03/15/bvKIbD.png)

假设我们想要查看所有主题的总数。我们不能使用filters或expressions来完成这个任务。

- filters：用于简单的数据格式，在应用程序的多个位置都需要它
- expressions：不允许使用流操作或其他复杂的逻辑。他们应该保持简单

这个时候，计算属性就可以派上用场。我们可以向模型中添加一个计算值，如下：

![bvKzqS.png](https://s1.ax1x.com/2022/03/15/bvKzqS.png)

效果如下：

![bvMnZF.png](https://s1.ax1x.com/2022/03/15/bvMnZF.png)

#### 计算属性 vs 方法

我们可以使用Vue中的method计算出学科的总分，最终得到的总数结果是相同的。

```sh
在上例的基础上，我们把computed区块中的totalMarks函数整体移到methods中。同时在模板中将`{{ totalMarks }}` 替换成`{{ totalMarks() }}`。 你最终看到的结果是一样的，如下所示：

```
![bvMnZF.png](https://s1.ax1x.com/2022/03/15/bvMnZF.png)

虽然这两种方式输出的结果是相同的，但是性能将遭受毁灭性的打击。使用这种方法totalMarks()方法在每次页面渲染时都被执行一次（例如，使用每一个change）。

如果我们有一个计算属性，那么Vue会记住计算的属性所依赖的值（在我们这个示例中，那就是results）。通过这样做，Vue只有在依赖变化时才可以计算值。否则，将返回以前缓存的值。这也意味着只要results还没有发生改变，多次访问totalMark计算属性会立即返回之前的计算结果，而不必再次执行函数。

上面两个示例也说明，在Vue中计算属性是基于它们的依赖进行缓存的，而方法是不会基于它们的依赖进行缓存的。从而使用计算属性要比方法性能更好。

这也同样意味着下面的计算属性将不再更新，因为Date.now()不是响应式依赖：

![bvMqwF.png](https://s1.ax1x.com/2022/03/15/bvMqwF.png)

相比之下，每当触发重新渲染时，方法的调用方式将总是再次执行函数。因此，函数必须是一个纯函数。它不能有副作用。输出只能依赖于传递给函数的值。

那么我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性A，它需要遍历一个极大的数组和做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。

#### 计算属性的setter

计算属性默认只有getter，不过在需要时你也可以提供一个setter

![bvQmlt.png](https://s1.ax1x.com/2022/03/15/bvQmlt.png)

效果如下：

![bvQYpn.png](https://s1.ax1x.com/2022/03/15/bvQYpn.png)

你在输入框中输入一个fullName，然后点击set按钮，可以看到对应的效果。你现在再运行app.fullName="Airen liao"时，计算属性的setter会被调用，app.firstName和app.lastName也相应地会被更新。如下图所示：

![bvQDk4.gif](https://s1.ax1x.com/2022/03/15/bvQDk4.gif)

#### 观察者：

虽然计算属性在大多数情况下更合适，但有时候也需要一个自定义的watcher。这是为什么Vue通过watch选项提供一个更通用的方法，来响应数据的变化。当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。

Vue确实提供了一种更通用的方式来观察和响应Vue实例上的数据变动：watch属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用watch。然而，通常更好的想法是使用计算属性而不是命令式的watch回调。比如下面的示例：

![bvQ5Ae.png](https://s1.ax1x.com/2022/03/15/bvQ5Ae.png)
上面代码是命令式的和重复的。将它与计算属性的版本进行比较：

![bvl99s.png](https://s1.ax1x.com/2022/03/15/bvl99s.png)