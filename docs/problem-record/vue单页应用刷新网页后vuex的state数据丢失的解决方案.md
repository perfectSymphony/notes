## vue单页应用刷新网页后vuex的state数据丢失的解决方案

## 产生原因

javascript代码是运行在内存中的，代码运行时的所有变量，函数也都是保存在内存中的。刷新页面，以前申请的内存被释放掉，重新加载脚本代码，变量重新赋值，所以，这些数据要存储就必须存储在外部，如，localStorage，sessionStorage，indexDB等，这些浏览器提供的API，让你可以将数据存储在硬盘上，做持久化存储。

因为store里的数据是保存在运行内存中的,当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值。


## 解决思路

 - 1、一种是state里的数据全部是通过请求来触发action或mutation来改变

 - 2、一种是将state里的数据保存一份到本地存储(localStorage、sessionStorage、cookie）中

 很显然，第一种方案基本不可行，除非项目很小或者vuex存储的数据很少。而第二种可以保证刷新页面数据不丢失且易于读取。

 ## 解决过程

 首先得选择合适的客户端存储

`localStorage`是永久存储在本地，除非你主动去删除;

`sessionStorage`是存储到当前页面关闭为止;

`cookie`则根据你设置的有效时间来存储，但缺点是不能储存大数据且不易读取。

我选择的是`sessionStorage`,选择的原因vue是单页面应用，操作都是在一个页面跳转路由，另一个原因是`sessionStorage`可以保证打开页面时`sessionStorage`的数据为空，而如果是localStorage则会读取上一次打开页面的数据。

然后是怎么用`sessionStorage`来保存state里的数据。

第一种方案

由于`state`里的数据是响应式，所以`sessionStorage`存储也要跟随变化。又由于vuex规定所有state里数据必须通过mutation方法来修改，所以第一种方案就是mutation修改state的同时修改`sessionStorage`对应存储的属性

第二种方案

第一种方案确实可以解决问题，但这种方法很明显让人觉得怪异，都这样了，那不如直接用`sessionStorage`来做状态管理。

那怎么才能不用每次修改`state`时同时也要修改`sessionStorage`呢？这时我们可以换一个思路，因为我们是只有在刷新页面时才会丢失state里的数据，那有没有办法在点击页面刷新时先将state数据保存到`sessionStorage`,然后才真正刷新页面?

当然有，`beforeunload`这个事件在页面刷新时先触发的。那这个事件应该在哪里触发呢？我们总不能每个页面都监听这个事件，所以我选择放在`app.vue`这个入口组件中，这样就可以保证每次刷新页面都可以触发。

## 具体实现

```sh
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
```

应用背景是用户登入后保存状态，退出后移除状态

mutations.js
```sh
ADD_LOGIN_USER (state,data) {  //登入，保存状态
  sessionStorage.setItem("username", data);  //添加到sessionStorage
  sessionStorage.setItem("isLogin",true);
  state.username=data,             //同步的改变store中的状态
  state.isLogin=true
 },
SIGN_OUT (state) {   //退出，删除状态
  sessionStorage.removeItem("username");  //移除sessionStorage
  sessionStorage.removeItem("isLogin");
  state.username=''                //同步的改变story中的状态
  state.isLogin=false
}
```
getters.js

```sh
isLogin (state) {
  if (!state.isLogin) {    
      state.isLogin=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态
      state.username=sessionStorage.getItem('username');
  }
  return state.username
}
```
