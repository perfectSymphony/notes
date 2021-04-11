## Vue的computed和watch的细节全面分析

## 1、computed


#### 1.1、定义

是一个计算属性,类似于过滤器,对绑定到view的数据进行处理

#### 1.2、get用法

```sh
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
```
fullName不可在data里面定义,
如果定义会报如下图片的错误,因为对应的computed作为计算属性定义fullName并返回对应的结果给这个变量,变量不可被重复定义和赋值

![at9Ol6.png](https://s1.ax1x.com/2020/08/02/at9Ol6.png)


#### 1.3 get和set用法

```sh
data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
  fullName：{
   get(){//回调函数 当需要读取当前属性值时执行，根据相关数据计算并返回当前属性的值
      return this.firstName + ' ' + this.lastName
    },
   set(val){//监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
       //val就是fullName的最新属性值
       console.log(val)
        const names = val.split(' ');
        console.log(names)
        this.firstName = names[0];
        this.lastName = names[1];
   }
   }
  }
```

## 2、watch

#### 2.1 定义

watch是一个观察的动作

#### 2.2 示例

```sh
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
     firstName: function (val) {
     this.fullName = val + ' ' + this.lastName
  },
  lastName: function (val) {
     this.fullName = this.firstName + ' ' + val
   }
   }
```
上面是监听firstName和lastName的变化，但是仅限简单数据类型

##### 2.2.1、监听简单数据类型

```sh
data(){
      return{
        'first':121
      }
    },
    watch:{
      first(){
        console.log(this.first)
      }
    },
```
##### 2.2.2 监听复杂数据类型

1、监听复杂数据类型需用深度监听
```sh
data(){
      return{
        'first':{
          second:0
        }
      }
    },
    watch:{
      secondChange:{
        handler(oldVal,newVal){
          console.log(oldVal)
          console.log(newVal)
        },
        deep:true
      }
    },
```
2、console.log打印的结果,发现oldVal和newVal值是一样的,所以深度监听虽然可以监听到对象的变化,但是无法监听到具体对象里面那个属性的变化

3、oldVal和newVal值一样的原因是它们索引同一个对象/数组。Vue 不会保留修改之前值的副本
[vm.$watch的深度监听](https://cn.vuejs.org/v2/api/#vm-watch) 补充个知识点儿 [Vue.nextTick( [callback, context] )](https://cn.vuejs.org/v2/api/#Vue-nextTick)

![at9xmD.png](https://s1.ax1x.com/2020/08/02/at9xmD.png)

4、深度监听对应的函数名必须为handler,否则无效果,因为watcher里面对应的是对handler的调用

##### 2.2.3 监听对象单个属性

方法一：可以直接对用对象.属性的方法拿到属性
```sh
data(){
    return{
        'first':{
            second:0
        }
        }
    },
    watch:{
        first.second:function(newVal,oldVal){
        console.log(newVal,oldVal);
        }
    },
    
```

方法二：watch如果想要监听对象的单个属性的变化,必须用computed作为中间件转化,因为computed可以取到对应的属性值

```sh
data(){
    return{
        'first':{
          second:0
        }
      }
    },
    computed:{
      secondChange(){
        return this.first.second
      }
    },
    watch:{
      secondChange(){
        console.log('second属性值变化了')
      }
    },
```

### 运用场景：
- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用watch选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

## 3、computed和watch的区别

#### 3.1、computed特性

1、是计算值，
2、应用：就是简化tempalte里面`{{}}`计算和处理props或$emit的传值
3、具有缓存性，页面重新渲染值不变化,计算属性会立即返回之前的计算结果，而不必再次执行函数

#### 3.2、watch特性

1、是观察的动作，
2、应用：监听props，$emit或本组件的值执行异步操作
3、无缓存性，页面重新渲染时值不变化也会执行

## 4、props传值

#### 4.1 常见错误1

传入的值想作为局部变量来使用,直接使用会
```sh
props:['listShop'],
    data(){
      return{}
    },
    created(){
      this.listShop=30
}
```
报错

![at9jOO.png](https://s1.ax1x.com/2020/08/02/at9jOO.png)
这个错误是说的避免直接修改父组件传入的值,因为会改变父组件的值,贴上![官网介绍](https://cn.vuejs.org/v2/guide/components.html#通过-Prop-向子组件传递数据)

#### 4.2 解决方案一

简单数据类型解决方案:
所以可以在data中重新定义一个变量,改变指向,但是也只是针对简单数据类型,因为复杂数据类型栈存贮的是指针。

```sh
props:['listShop'],
data(){
    return{
    listShopChild:this.listShop
    }
},
created(){
    this.listShopChild=30
}
```
这样就可以愉快的更改传入的简单数据类型的数据啦!不会有任何报错,也不会影响父组件!

##### 4.2.1 存在的问题

复杂数据类型在栈中存贮的是指针,所以赋值给新的变量也会改变原始的变量值.那么应该怎么办?
1、可以手动深度克隆一个复杂的数据出来,循环或者递归都行

数组深度克隆:

```sh
var x = [1,2,3];
var y = [];
for (var i = 0; i < x.length; i++) {
    y[i]=x[i];
}
console.log(y);  //[1,2,3]
y.push(4);
console.log(y);  //[1,2,3,4]
console.log(x);  //[1,2,3]
```

对象深度克隆:
```sh
var x = {a:1,b:2};
var y = {};
for(var i in x){
    y[i] = x[i];
}
console.log(y);  //Object {a: 1, b: 2}
y.c = 3;
console.log(y);  //Object {a: 1, b: 2, c: 3}
console.log(x);  //Object {a: 1, b: 2}
```

函数深度克隆:
```sh
var x = function(){console.log(1);};
var y = x;
y = function(){console.log(2);};
x();  //1
y();  //2
```

为什么函数可以直接赋值克隆?
由于函数对象克隆之后的对象会单独复制一次并存储实际数据，因此并不会影响克隆之前的对象。所以采用简单的复制“=”即可完成克隆。

2、Object.assign
只会对只是一级属性复制，比浅拷贝多深拷贝了一层而已,所以还是无法达到深度克隆的目的.
[详情](https://blog.csdn.net/waiterwaiter/article/details/50267787)

3、强大的JSON.stringify和JSON.parse

```sh
const obj1 = JSON.parse(JSON.stringify(obj));
```
这是ES5新出来的API,先将对象转化为字符串,就是简单数据类型赋值,再用JSON.parse转化

#### 4.3 解决方案二

直接用computed改变
```sh
computed:{
  listShopChild(){
    return this.listShop
   }
}
```

##### 4.3.1 存在的问题

注意:此时用computed时,如果是数组this.$set(arr,1,true)对应的值也不更新，
这个很坑，这个bug我找个很久
如果传入的值只是在data定义，并未在methods或生命周期钩子更改，直接改变也会报错
所以还是可以先用局部变量接收,再修改，这个坑比较多

## 5、应用

1、监听本组件计算和监听
2、计算或监听父传子的props值
3、分为简单数据类型和复杂数据类型监听,监听方法如上watch的使用
4、监听vuex的state或者getters值的变化

```sh
computed:{
    stateDemo(){
        return this.$store.state.demoState;
    }
}
watch:{
    stateDemo(){
        console.log('vuex变化啦')
    }
}
```

## 6、computed和watch的原理分析

接下来给大家简单罗列下他们的原理!

#### 5.1 computed的原理

[深入理解 Vue Computed 计算属性](https://segmentfault.com/a/1190000010408657)

#### 5.2 watch的原理

分为三个过程:实例化Vue、调用$watch方法、属性变化，触发回调

[Vue的数据依赖实现原理简析](https://segmentfault.com/a/1190000010014281#articleHeader2)<br/>
[vue中$watch源码阅读笔记](https://www.cnblogs.com/Clarence2J/p/6860329.html)


## 7、简单实现computed和watch

公共类

```sh
function defineReactive(data, key, val, fn) {
      let subs = [] // 新增
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get: function() {
          // 新增
       if (data.$target) {
        subs.push(data.$target)
      }
      return val
     },
     set: function(newVal) {
      if (newVal === val) return
      fn && fn(newVal)
      // 新增
      if (subs.length) {
        // 用 setTimeout 因为此时 this.data 还没更新
        setTimeout(() => {
          subs.forEach(sub => sub())
        }, 0)
      }
      val = newVal
    },
   })
 }
```

#### 7.1 computed实现

```sh
function computed(ctx, obj) {
  let keys = Object.keys(obj)
  let dataKeys = Object.keys(ctx.data)
  dataKeys.forEach(dataKey => {
    defineReactive(ctx.data, dataKey, ctx.data[dataKey])
  })
  let firstComputedObj = keys.reduce((prev, next) => {
    ctx.data.$target = function() {
      ctx.setData({ [next]: obj[next].call(ctx) })
    }
    prev[next] = obj[next].call(ctx)
    ctx.data.$target = null
    return prev
  }, {})
  ctx.setData(firstComputedObj)
}
```

#### 7.2 watch实现

```sh
function watch(ctx, obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(ctx.data, key, ctx.data[key], function(value) {
      obj[key].call(ctx, value)
    })
  })
}
```

[在微信小程序里使用 watch 和 computed](https://segmentfault.com/a/1190000014109601)