## vue中的this指向

### 一、普通函数中的this

这是vue文档里的原话：

> All lifecycle hooks are called with their 'this' context pointing to the Vue instance invoking it.

意思是：在Vue所有的生命周期钩子方法（如created，mounted， updated以及destroyed）里使用this，this指向调用它的Vue实例，即（new Vue）。

```sh
<div id="app">
    <button class="btn btn-primary" v-on:click="on()">点击添加并查看this</button>
    <ul class="list-group" v-for="item in list">
        <li class="list-group-item">{{item}}</li>
    </ul>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            list: ["banner", "orange", "apple"]
        },
        methods: {
            on: function() {
            alert(this.list);
            this.list.push("Potato")
        }
})
</script>
```

实例：这里的this指向的是new Vue这个对象。new Vue也可以写成var C=new Vue({}).所以这里的this指向的是C。

### 二、箭头函数中的this

箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象, 定义它的时候,可能环境是window; 箭头函数可以方便地让我们在 setTimeout ,setInterval中方便的使用this。

![bxp8aT.png](https://s1.ax1x.com/2022/03/15/bxp8aT.png)

这里箭头函数指向window。