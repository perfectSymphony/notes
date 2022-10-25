## Vue相关面试题

## 一、什么是MVVM，MVC和MVVM的区别，MVVM框架VUE实现原理?

1. MVVM定义:
- MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。
 - 【模型】指的是后端传递的数据。
 - 【视图】指的是所看到的页面。
 - 【视图模型】mvvm模式的核心，它是连接view和model的桥梁。
 -   它有两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。
 - **总结：**在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。MVVM流程图如下：

![4sdL4.png](https://s1.ax1x.com/2020/08/27/d4sdL4.jpg)

2. MVC的定义：MVC是Model-View- Controller的简写。即模型-视图-控制器。
 - M和V指的意思和MVVM中的M和V意思一样。C即Controller指的是页面业务逻辑。
 - 使用MVC的目的就是将M和V的代码分离。
 - ‘MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。
 - MVC和MVVM的区别并不是VM完全取代了C，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用。
 - 由于mvc出现的时间比较早，前端并不那么成熟，很多业务逻辑也是在后端实现，所以前端并没有真正意义上的MVC模式。而我们今天再次提起MVC，是因为大前端的来到，出现了MVVM模式的框架，我们需要了解一下MVVM这种设计模式是如何一步步演变过来的。<br/>

 2. 为什么会有MVVM框架？

 - 在过去的10年中，我们已经把很多传统的服务端代码放到了浏览器中，这样就产生了成千上万行的javascript代码，它们连接了各式各样的HTML 和CSS文件，但缺乏正规的组织形式，这也就是为什么越来越多的开发者使用javascript框架。比如：angular、react、vue。浏览器的兼容性问题已经不再是前端的阻碍。前端的项目越来越大，项目的可维护性和扩展性、安全性等成了主要问题。当年为了解决浏览器兼容性问题，出现了很多类库，其中最典型的就是jquery。但是这类库没有实现对业务逻辑的分成，所以维护性和扩展性极差。综上两方面原因，才有了MVVM模式一类框架的出现。比如vue,通过数据的双向绑定，极大了提高了开发效率。<br/>

 3. MVVM框架:

 VUE的介绍Vue就是基于MVVM模式实现的一套框架，
 - 在vue中：Model:指的是js中的数据，如对象，数组等等。
 - View:指的是页面视图
 - viewModel:指的是vue实例化对象<br/>
 4⃣️为什么说VUE是一个渐进式的javascript框架, 渐进式是什么意思？
 - 1.如果你已经有一个现成的服务端应用，你可以将vue 作为该应用的一部分嵌入其中，带来更加丰富的交互体验;
 - 2.如果你希望将更多业务逻辑放到前端来实现，那么VUE的核心库及其生态系统也可以满足你的各式需求（core+vuex+vue-route）。和其它前端框架一样，VUE允许你将一个网页分割成可复用的组件，每个组件都包含属于自己的HTML、CSS、JAVASCRIPT以用来渲染网页中相应的地方。
 - 3.如果我们构建一个大型的应用，在这一点上，我们可能需要将东西分割成为各自的组件和文件，vue有一个命令行工具，使快速初始化一个真实的工程变得非常简单（vue init webpack my-project）。我们可以使用VUE的单文件组件，它包含了各自的HTML、JAVASCRIPT以及带作用域的CSS或SCSS。以上这三个例子，是一步步递进的，也就是说对VUE的使用可大可小，它都会有相应的方式来整合到你的项目中。所以说它是一个渐进式的框架。
 - VUE最独特的特性：响应式系统VUE是响应式的（reactive），也就是说当我们的数据变更时，VUE会帮你更新所有网页中用到它的地方,[查看响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)。
 - 我们讲一下主流框架实现双向绑定（响应式）的做法：
 - 1 angular(脏值检查)：angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下： DOM事件，譬如用户输入文本，点击按钮等。( ng-click ) XHR响应事件 ( $http ) 浏览器Location变更事件 ( $location ) Timer事件( $timeout , $interval ) 执行 $digest() 或 $apply()在 Angular 中组件是以树的形式组织起来的，相应地，检测器也是一棵树的形状。当一个异步事件发生时，脏检查会从根组件开始，自上而下对树上的所有子组件进行检查，这种检查方式的性能存在很大问题。
 - 2 VUE(观察者-订阅者（数据劫持）)：<br/>

 [vue双向数据绑定](https://www.cnblogs.com/libin-1/p/6893712.html)

## 二、Vue的生命周期

- beforeCreate（创建前） 实例组件刚创建，元素DOM和数据都还没有初始化。
- created（创建后） 数据data已经初始化完成，方法也已经可以调用，但是DOM未渲染。
 beforeMount（载入前） DOM未完成挂载，数据也初始化完成，但是数据的双向绑定还是显示`双花括号`,这是因为Vue采用了Virtual DOM（虚拟Dom）技术。先占住了一个坑。
- mounted（载入后）数据和DOM都完成挂载，在上一个周期占位的数据把值给渲染进去。可以在这边请求，不过created请求会更好一些。这个周期适合执行初始化需要操作DOM的方法。
- beforeUpdate（更新前） 只要是页面数据改变了都会触发，数据更新之前，页面数据还是原来的数据，当你请求赋值一个数据的时候会执行这个周期，如果没有数据改变不执行。
- updated（更新后） 只要是页面数据改变了都会触发，数据更新完毕，页面的数据是更新完成的。beforeUpdate和updated要谨慎使用，因为页面更新数据的时候都会触发，在这里操作数据很影响性能和容易死循环。
- beforeDestroy（销毁前） 这个周期是在组件销毁之前执行，在我项目开发中，觉得这个其实有点类似路由钩子beforeRouterLeave,都是在路由离开的时候执行，只不过beforeDestroy无法阻止路由跳转，但是可以做一些路由离开的时候操作，因为这个周期里面还可以使用data和method。比如一个倒计时组件，如果在路由跳转的时候没有清除，这个定时器还是在的，这时候就可以在这个里面清除计时器。
- destroyed（销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

1.什么是vue生命周期？
答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。

2.vue生命周期的作用是什么？
答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

3.vue生命周期总共有几个阶段？
答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。

4.第一次页面加载会触发哪几个钩子？
答：会触发 下面这几个beforeCreate, created, beforeMount, mounted 。

5.DOM 渲染在 哪个周期中就已经完成？
答：DOM 渲染在 mounted 中就已经完成了。

## 三、 Vue实现数据双向绑定的原理 Object.defineProperty():

**js实现简单的双向绑定**

```sh
<body>
    <div id="app">
    <input type="text" id="txt">
    <p id="show"></p>
</div>
</body>
<script type="text/javascript">
    var obj = {}
    Object.defineProperty(obj, 'txt', {
        get: function () {
            return obj
        },
        set: function (newValue) {
            document.getElementById('txt').value = newValue
            document.getElementById('show').innerHTML = newValue
        }
    })
    document.addEventListener('keyup', function (e) {
        obj.txt = e.target.value
    })
</script>
```

## 四、Vue组件间的参数传
- 父子组件通信
 - 事件机制(**父->子props,子->父 $on、$emit)
 - 获取父子组件实例 $parent、$children
 - Ref 获取实例的方式调用组件的属性或者方法
 - Provide、inject (不推荐使用，组件库很常用)
 - 兄弟组件通信Vue.prototype.$bus = new Vue
- Vuex
 - eventBus 这种方法通过一个空的 Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件
- 跨级组件通信
 - $attrs、$listeners

## 五、Vue的路由实现：hash模式 和 history模式

**hash模式**：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 [http://www.xxx.com](http://www.xxx.com)，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。

**history模式**：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 [http://www.xxx.com/items/id](http://www.xxx.com/items/id)。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。**Vue-Router 官网里如此描述：**“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”


## 六、Vue与Angular以及React的区别？

**1.与AngularJS的区别**
相同点：
都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器。

不同点：
AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观；在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢；Vue.js使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。

**2.与React的区别** <br/>

[vue与react的区别](./vue与react区别.md)

## 七、vue路由的钩子函数 [参看官网：导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫)

一、首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登录才能调整页面的重定向功能。

**beforeEach**主要有3个参数to，from，next：

**to**：route即将进入的目标路由对象，

**from**：route当前导航正要离开的路由

**next**：function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转。

二、vue-router的钩子函数有三类：
1、全局钩子
**beforeEach(to，from，next)**
 - 页面加载之前
 - 页面跳转之前权限认证，访问拦截

 **afterEach(to，from，next)**
  - 页面加载之后

2、组建内的导航钩子
beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave,直接在路由组件内部进行定义的。
**beforeRouteEnter(to, from, next)**
**beforeRouteUpdate(to, from, next)**
**beforeRouteLeave(to, from, next)**
 - 用途：清除当前组件中的定时器，避免占用内存；当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转；保存相关内容到Vuex中或Session中

 3、路由内的导航钩子

 ```javascript
 const router = new VueRouter({
routes: [
  {
    path: '/detail',
    component: detail,
    beforeEnter: (to, from, next) => {
    // ...
    }
  }
]
 ```

### vue-router与location.href的用法区别
1⃣️ vue-router使用pushState进行路由更新、静态跳转、页面不会重新加载；location.href会触发浏览器，页面会重新加载一次。

2⃣️ vue-router使用diff算法，实现按需加载，减少dom操作

3⃣️ vue-router是路由跳转或者是同一页面跳转；location.href是不同页面间的跳转；
4⃣️ vue-router是异步加载this.$nextTick(()=>{获取url})；location.href同步加载

### 其他用法

```sh
this.$router.push({path:'/fillinformation',
        query: {applicationNo: this.applicationNo,contractNo:this.contractNo}})
    }
this.$route.query.applicationNo//页面跳转后获取携带参数applicationNo参数
//此用法参数会展示在跳转地址上---图一
```
![6fj25j.png](https://s4.ax1x.com/2021/03/20/6fj25j.png)
<font size='5' color='red'> 图一</font>

```sh
this.$router.push({
        name: 'clientdetail',
        params: {
          clientCode: clientCode,
          clientType: clientType
        }
      })
 this.$route.params.clientCode//页面跳转后获取携带参数clientCode
//此用法参数不会展示在跳转地址--图二
```
![6fvcy6.png](https://s4.ax1x.com/2021/03/20/6fvcy6.png)
<font size='5' color='red'> 图二</font>

使用location.href实现页面div块的快速定位

```sh
location.href='#divClass'//<div id = "divClass"></div>，通过事件直接跳转到该dev
```

location.href可直接获取当前路径

parent.location.href跳转至上一层页面

top.location.href跳转至最外层页面

## 八、vuex是什么？怎么使用？哪种功能场景使用它？

只用来读取的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的事物； 异步逻辑应该封装在action中。
在main.js引入store，注入。新建了一个目录store，….. export 。
场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车

![at9X6K.png](https://s1.ax1x.com/2020/08/02/at9X6K.png)

**state**
Vuex 使用单一状态树,即每个应用将仅仅包含一个store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。<br/>
**mutations**
mutations定义的方法动态修改Vuex 的 store 中的状态或数据。<br/>
**getters**
类似vue的计算属性，主要用来过滤一些数据。<br/>
**action** 
actions可以理解为通过将mutations里面处理数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。<br/>

上图为官网中vuex各个要素的关系图，**总的来说，我们可以在组件中触发Action，Action则会提交Mution，Mution会对State进行修改，组件再根据State、Getter渲染页面** <br/>

**什么样的应用场景下需要vuex ？**

如果不打算开发大型单页应用，使用vuex可能是繁琐冗余的。确实是如此——如果你的应用够简单，那最好不要使用vuex。一个简单的global event bus 就足够所需了。但是，如果需要构建是一个中大型单页应用，很可能会考虑如何更好地在组件外部管理状态，vuex将会成为自然而然的选择。<br/>

vuex一般用于中大型web单页应用中对应的状态进行管理，对于一些组件间关系较为简单的小型应用，使用vuex的必要性不是很大，因为完全可以用组件prop属性或者事件来完成父子组件之间的通信，vuex更多地用于解决跨组件通信以及作为数据中心集中式存储数据。<br/>

**使用vuex解决跨组件通信问题**

跨组件通信一般指非父子组件间的通信，父子组件的通信一般可以通过以下方式：<br/>

**1、通过prop属性实现父组件向子组件传递数据**<br/>
**2、通过在子组件中触发事件实现向父组件传递数据**<br/>
非父子组件之间的通信一般通过一个空的Vue实例作为 中转站，也可以称之为 事件中心、event bus<br/>


```sh
//创建事件中心实例
let bus = new Vue();

// 在组件A中触发事件
bus.$emit('test',1);

//在组件B中接受事件
bus.$on('test', id) => {
  //...
}
```

采用event bus的方式适合简单的开组件事件，对于多层级组件嵌套等较为复杂的场景，使用vuex能更好的应对。***vuex是通过将state作为数据中心，各个组件共享state实现跨组件通信***，此时的数据完全独立于组件，因此将组件间共享的数据置于state中能有效解决多层级组件嵌套的跨组件通信问题。<br/>

**vuex作为数据存储中心**
vuex的State在单页应用的开发中本身具有一个"数据库"的作用，可以将组件中用到的数据存储在state中，并在Action中封装数据读写的逻辑。这时候存在一个问题，一般什么样的数据会放在State中呢？目前主要有两种数据会使用vuex进行管理：<br/>

1、组件之间全局共享的数据<br/>
2、通过后端异步请求的数据<br/>

即**把通过后端异步请求的数据都纳入vuex状态管理，在Action中封装数据的增删改查等的逻辑，这样可以一定程度上对前端的逻辑代码进行分层，使组件中的代码更多的关注页面交互与数据渲染等视图层的逻辑，而异步请求与状态数据的持久化等则交由vuex管理**。<br/>

**下面是一个使用vuex管理用户数据的demo**

```sh
// State

const state = {
  userInfo: {}
}

// Mutation

const mutations = {
  UPDATE_USER_INFO(state,payload){
    state.userInfo = payload
  }
}

//Action

export const fetchUserInfo = async ({commit}) => {
  //请求用户数据
  // 调用Mutation 写入用户数据
  commit('UPDATE_USER_INFO', userInfo)
}

//component //在组件中引入Action
...mapAction({
  fetchUserInfoAction: `fectchUserInfo`
})

//在method中调用Action

let res = self.fetchUserInfoAction()

```
### Vuex和单纯的全局对象有什么区别？

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

### 为什么 Vuex 的 mutation 中不能做异步操作？
- Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
- 每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

### 新增：vuex的action有返回值吗？返回的是什么？
- store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise
- Action 通常是异步的，要知道 action 什么时候结束或者组合多个 action以处理更加复杂的异步流程，可以通过定义action时返回一个promise对象，就可以在派发action的时候就可以通过处理返回的 Promise处理异步流程

> 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。

### 新增：为什么不直接分发mutation,而要通过分发action之后提交 mutation变更状态
- mutation 必须同步执行，我们可以在 action 内部执行异步操作
- 可以进行一系列的异步操作，并且通过提交 mutation 来记录 action 产生的副作用（即状态变更）

**总结**<br/>
vuex具体应用在哪取决于项目的规模以及具体的业务场景，可能是为了解决多层嵌套组件之间的通信问题，或是为了更好地管理应用中错综复杂的状态关系，而不能为了用vuex而在项目中使vuex。

```sh
const store = new Vuex.Store({ //store实例
      state: {
         count: 0
             },
      mutations: {                
         increment (state) {
          state.count++
         }
          },
      actions: { 
         increment (context) {
          context.commit('increment')
   }
 }
})
```
**modules**

项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

```sh
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
 }
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
 }

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
})
```

## 九、vue-cli如何新增自定义指令？

1、创建局部指令
```sh
var app = new Vue({
    el: '#app',
    data: {    
    },
    // 创建指令(可以多个)
    directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
})
```

2、全局指令
```sh
Vue.directive('dir2', {
    inserted(el) {
        console.log(el);
    }
})
```

3、指令的使用
```sh
<div id="app">
    <div v-dir1></div>
    <div v-dir2></div>
</div>
```

## 十、vue如何自定义一个过滤器？

html代码：

```sh
<div id="app">
     <input type="text" v-model="msg" />
     {{msg| capitalize }}
</div>
```

JS代码：
```sh
var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
})
```

全局定义过滤器
```sh
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```
过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。

## 十一、对keep-alive 的了解？

**keep-alive**是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
#### 1、在vue 2.1.0 版本之后，keep-alive新加入了两个属性: 
include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。

使用方法:
```sh
<keep-alive include='include_components' exclude='exclude_components'>
  <component>
    <!-- 该组件是否缓存取决于include和exclude属性 -->
  </component>
</keep-alive>
```

参数解释
include - 字符串或正则表达式，只有名称匹配的组件会被缓存
exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存
include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind 。

使用示例

```sh
<!-- 逗号分隔字符串，只有组件a与b被缓存。 -->
<keep-alive include="a,b">
  <component></component>
</keep-alive>

<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->
<keep-alive :include="/a|b/">
  <component></component>
</keep-alive>

<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->
<keep-alive :include="['a', 'b']">
  <component></component>
</keep-alive>
```
#### 2、keep-alive的两个生命周期
- 1. activated: 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
- 2. deactivated: 页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated 


## 十二、vue中'.native'修饰符的使用
**官网的解释：**
>你可能想在某个组件的根元素上监听一个原生事件。可以使用 `v-on` 的修饰符 `.native` 。

通俗点讲：就是在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加'.native'事件是无法触发的
![d4BoF0](https://s1.ax1x.com/2020/08/27/d4BoF0.png)
此时点击页面中的按钮无任何反应。
添加修饰符：
![d4B3Ix.png](https://s1.ax1x.com/2020/08/27/d4B3Ix.png)

## 十三、Vue 中的 .sync 修饰符
Vue 修饰符 .sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定，是编译时的一个语法糖。具体表现如下：

```javascript
<template>
 <div>
 <comp :money.sync="total"></comp> //相当于<comp :money="total" @update:money="total=$event"></comp>
 </div>
</template>
<script>
import Vue from "vue";
Vue.component("comp", {
 template: `<div>
      {{ money }}
      <button @click="$emit('update:money':money-100)">cost</button> //定义新的事件监听
</div>`,
 props: ["money"], //子组件的外部属性
});  //子组件
export default {
 data() {
 return { total: 1000 };
  },
};
</script>
```

具体思路为：为了更新子组件的一个外部数据在父组件中的表现，在子组件中定义一个新的事件监听，而后在父组件中监听这个事件，以更新子组件中这个外部属性的值。因为子组件的外部属性无法在子组件内部得到更新。而 .sync就是父组件中这一系列操作的语法糖。

## 十四、[virtual-dom(Vue实现)简析](https://segmentfault.com/a/1190000010090659)

##  十五、一句话就能回答的面试题

**1.css只在当前组件起作用**
答：在style标签中写入scoped即可 例如：<style scoped></style>

**2.v-if 和 v-show 区别**
答：v-if按照条件是否渲染，v-show是display的block或none；

**区别**

 - 1.手段：v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏；
 - 2.编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
 - 3.编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
 - 4.性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；

**使用场景**

基于以上区别，因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

**总结**

v-if判断是否加载，可以减轻服务器的压力，在需要时加载,但有更高的切换开销;v-show调整DOM元素的CSS的dispaly属性，可以使客户端操作更加流畅，但有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

**3.route和router的区别**
答：route是“路由信息对象”，包括path, params, hash, query, fullPath, matched, name
router是“路由实例”对象包括了路由的跳转方法，钩子函数等。

**4.vue.js的两个核心是什么？**
答：数据驱动、组件系统

**5.vue几种常用的指令**
答：v-for 、 v-if 、v-bind、v-on、v-show、v-else

v-for和v-if不应该一起使用，必要情况下应该替换成computed属性。原因：v-for比v-if优先，如果每一次都需要遍历整个数组，将会影响速度，尤其是当需要渲染很小一部分的时候。

错误写法：
```sh
<li
  v-for="user in users"
  v-if="user.isActive"
  :key="user.id"
>
  {{ user.name }}
</li>
```
如上情况，即使100个user中之需要使用一个数据，也会循环整个数组。

```sh
computed: {
    activeUsers: function () {
        return this.users.filter(function (user) {
          return user.isActive
        })
    }
}
<ul>
    <li
          v-for="user in activeUsers"
          :key="user.id"
        >
        {{ user.name }}
    </li>
</ul>
```

**6.vue常用的修饰符？**
答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用

**7.v-on 可以绑定多个方法吗？**
答：可以

**8.什么是vue的计算属性？**
答：在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。好处：①使得数据处理结构清晰；②依赖于数据，数据更新，处理结果自动更新；③计算属性内部this指向vm实例；④在template调用时，直接写计算属性名即可；⑤常用的是getter方法，获取数据，也可以使用set方法改变数据；⑥相较于methods，不管依赖的数据变不变，methods都会重新计算，但是依赖数据不变的时候computed从缓存中获取，不会重新计算。

**9.vue等单页面应用及其优缺点**
答：优点：Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。
缺点：不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。

**10.怎么定义 vue-router 的动态路由? 怎么获取传过来的值**
答：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。

**组件中的data为什么是一个函数？**
- 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。
- 如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

**子组件为什么不可以修改父组件传递的Prop？/怎么理解vue的单向数据流？**

- Vue提倡单向数据流,即父级props的更新会流向子组件,但是反过来则不行。
- 这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解。
- 如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。

**v-model是如何实现双向绑定的？**

- v-model是用来在表单控件或者组件上创建双向绑定的
- 他的本质是v-bind和v-on的语法糖
- 在一个组件上使用v-model，默认会为组件绑定名为value的prop和名为input的事件

**v-model和v-bind的区别**
vue中的数据绑定有三种方式：
 - 插值，也就是{{name}}的形式，以文本的形式和实例data中对应的属性进行绑定。
 - v-bind
 - v-model

 v-bind：
 eg： `v-bind:class`可以简写成 `:class`

 当加上v-bind:之后，它的值class不是字符串，而是vue实例对应的data.class的这个变量。也就是说data.class是什么值，它就会给class属性传递什么值，当data.class发生变化的时候，class属性也发生变化，这非常适合用在通过css来实现动画效果的场合。他只是**单向变动**

 ### v-bind支持的数据类型

 html中的属性、css的样式、对象、数组、number 类型、bool类型

 ### v-bind使用：

```javascript
// 绑定文本
<p v-bind="message"></p>
 
// 绑定属性
<p v-bind:src="http://...."></p>
<p v-bind:class="http://...."></p>
<p v-bind:style="http://...."></p>
 
// 绑定表达式
:class{className:true}
```

### v-model

主要是用在表单元素中，它实现了双向绑定。v-model建立的双向绑定对输入型元素input, textarea, select等具有优先权，会强制实行**双向绑定**。很多时候v-model使用在表单的`<input>`中实现双向绑定。

```sh
<input v-model="something">
```

**[Vue的异步更新实现原理](Vue的异步更新实现原理.md)**

**Vue不能检测数组的哪些变动？Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？**

- Vue 不能检测以下数组的变动：
 - 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
 - 当你修改数组的长度时，例如：`vm.items.length = newLength`
- 解决办法：(vm.$set)
 - vm.$set解决的问题：
 - 给对象加了一个属性，在控制台能打印出来，但是却没有更新到视图上时，也许这个时候就需要用到this.$set()这个方法了，简单来说this.$set的功能就是解决这个问题的啦。官方解释：向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如this.tableData[index].edit = true)，所以用this.$set（）的写法就是this.$set( this.tableData, this.tableData[index].edit, true )。
 - vm.$set 实现原理：
 - 如果目标是数组，直接使用数组的 splice 方法触发相应式；
 - 如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）

```javascript
//调用方法
this.$set( target, key, value )
// target：要更改的数据源(可以是对象或者数组)
// key：要更改的具体数据
// value ：重新赋的值
```

 **虚拟Dom以及key属性的作用**

- 由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。
- Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)
- 虚拟 DOM 的实现原理主要包括以下 3 部分：
 - 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
 - diff 算法 — 比较两棵虚拟 DOM 树的差异；
 - pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。
 - key值是在DOM树进行diff算法时候发挥作用。一个是用来判断新旧Vnode是否为同一个，从而进行下一步的比较以及渲染。另外一个作用就是判断组件是否可以复用，是否需要重新渲染。

**Vue中组件生命周期调用顺序是什么样的？**

- 组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
- 组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

**你的接口请求一般放在哪个生命周期中？**

- 可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
- 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
 - 能更快获取到服务端数据，减少页面loading 时间；
 - ssr不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；

**什么是 mixin ？**

 - Mixin 使我们能够为 Vue 组件编写可插拔和可重用的功能。
 - 如果你希望再多个组件之间重用一组组件选项，例如生命周期 hook、 方法等，则可以将其编写为 mixin，并在组件中简单的引用它。
 - 然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，那么它在执行时将优化于组件自已的 hook。

 **在 Vue 实例中编写生命周期 hook 或其他 option/properties 时，为什么不使用箭头函数 ？**

- 箭头函数自已没有定义 this 上下文中。
- 当你在 Vue 程序中使用箭头函数 ( => ) 时，this 关键字并不会绑定到 Vue 实例，因此会引发错误。所以强烈建议改用标准函数声明。

**简述Vue模版编译原理**

简单说，Vue的编译过程就是将template转化为render函数的过程。会经历以下阶段（生成AST树/优化/codegen）：

 - 首先解析模版，生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。
 - Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。
 - 编译的最后一步是将优化后的AST树转换为可执行的代码。

 **说说你对SSR的了解**

- SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端
- SSR的优势：
  - 更好的SEO
  - 首屏加载速度更快
- SSR的缺点：
  - 开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子
  - 当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境
  - 更多的服务端负载

**做过哪些Vue的性能优化？**

- 编码阶段
 - 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
 - v-if和v-for不能连用
 - 如果需要使用v-for给每项元素绑定事件时使用事件代理
 - SPA 页面采用keep-alive缓存组件
 - 在更多的情况下，使用v-if替代v-show
 - key保证唯一
 - 使用路由懒加载、异步组件
 - 防抖、节流
 - 第三方模块按需导入
 - 长列表滚动到可视区域动态加载
 - 图片懒加载
- SEO优化
 - 预渲染
 - 服务端渲染SSR
- 打包优化
 - 压缩代码
 - Tree Shaking/Scope Hoisting
使用cdn加载第三方模块
多线程打包happypack
splitChunks(webpack分包)
sourceMap优化
用户体验
骨架屏
PWA
还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。

**vue2.x中如何监测数组变化？**

- 使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法，当调用数组api时，可以通知依赖更新。
- 如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

**说说你对 SPA 单页面的理解，它的优缺点分别是什么？**

- SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
- 优点：
 - 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
 - 基于上面一点，SPA 相对于服务器压力小；
 - 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；
- 缺点：
 - 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
 - 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
 - SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

 **vue3.0特性**

- 监测机制的改变
 - 3.0 将带来基于代理 Proxy的 observer 实现，提供全语言覆盖的反应性跟踪。
 - 消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制：
- 只能监测属性，不能监测对象
 - 检测属性的添加和删除；
 - 检测数组索引和长度的变更；
 - 支持 Map、Set、WeakMap 和 WeakSet。
- 模板
 - 模板方面没有大的变更，只改了作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
 - 对于 render 函数的方面，vue3.0 也会进行一系列更改来方便习惯直接使用 api 来生成 vdom 。
- 对象式的组件声明方式
 - vue2.x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。
 - 3.0 修改了组件的声明方式，改成了类式的写法，这样使得和 TypeScript 的结合变得很容易
- 其它方面的更改
 - 支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。
 - 支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
 - 基于 tree shaking 优化，提供了更多的内置功能。
