## Vue2.4中$attrs和$listeners的使用

![bx9OhD.jpg](https://s1.ax1x.com/2022/03/15/bx9OhD.jpg)

现在我们来讨论一种情况，A组件与C组件怎么通信，我们有多少种解决方案？

 - 我们使用VueX来进行数据管理，但是如果项目中多个组件共享状态比较少，项目比较小，并且全局状态比较少,那使用VueX来实现该功能，并没有发挥出VueX的威力。
- 使用B来做中转站，当A组件需要把信息传给C组件时，B接受A组件的信息，然后利用属性传给C组件，这是一种解决方案，但是如果嵌套的组件过多，会导致代码繁琐，代码维护比较困难;如果C中状态的改变需要传递给A, 使用事件系统一级级往上传递 。本来
- 自定义一个Vue 中央数据总线，这个情况适合碰到组件跨级传递消息，但是使用VueX感觉又有点浪费的项目中，但是缺点是，碰到多人合作时，代码的维护性较低，代码可读性低。

在很多开发情况下，我们只是想把A组件的信息传递给C组件，如果使用props 绑定来进行信息的传递，虽然能够实现，但是代码并不美观。

在vue2.4中，为了解决该需求，引入了$attrs 和$listeners ， 新增了inheritAttrs 选项。 在版本2.4以前，默认情况下父作用域的不被认作props的属性属性百年孤独，将会“回退”且作为普通的HTML特性应用在子组件的根元素上。如下列的例子

父组件demo代码如下：

```sh
<template>
   <div>
     <child-dom
      :foo="foo"
      :coo="foo"
     >
     </child-dom>
   </div>
</template>
<script>
   import childDom from "./ChildDom.vue";
   export default {
     data() {
        return {
          foo:"Hello, world",
          coo:"Hello,rui"
        }
     },
     components:{childDom},
   }
</script>
```

子组件child-dom代码如下: 

```sh
<template>
   <div>
      <p>foo:{{foo}}</p>
   </div>
</template>
<script>
export default {
 name:'child-dom'
 props:["foo"]
}
</script>
```
当显示父组件时，查看Dom结构，结构如下:
![bxCIPS.jpg](https://s1.ax1x.com/2022/03/15/bxCIPS.jpg)

在2.4中新增选项inheritAttrs  inheritAttrs的默认值为true, 将inheritAttrs的值设为false, 这些默认的行为会禁止掉。但是通过实例属性$attrs ,可以将这些特性生效，且可以通过v-bind 绑定到子组件的非根元素上。

修改子组件代码如下

```sh
<template>
   <div>
      <p>foo:{{foo}}</p>
      <p>attrs:{{$attrs}}</p>
      <childDomChild v-bind="$attrs"></childDomChild>
   </div>
</template>
<script>
import childDomChild from './childDomChild';
export default {
 name:'child-dom'
 props:["foo"],
 inheritAttrs:false,
}
</script>
```

新增子组件 childDomChild

```sh
<template>
  <div>
   <p>coo:{{coo}}</p>
  </div>
</template>
<script>
  export default {
    name:'childDomChild'
    props:["coo"],
    inheritAttrs:false
  }
</script>
```
输出的结果如下

![bxPAVx.png](https://s1.ax1x.com/2022/03/15/bxPAVx.png)

从上面的代码，可以看出使用$attrs ，inheritAttrs 属性 能够使用简洁的代码，将A组件的数据传递给C组件 ，该场景的使用范围还是挺广的。

此时我们又想到了一个问题，c组件的信息，怎么同步给a组件呢？ 

vue2.4版本新增了$listeners 属性，我们在b组件上 绑定 v-on=”$listeners”, 在a组件中，监听c组件触发的事件。就能把c组件发出的数据，传递给a组件。

A组件代码更新如下:

```sh
<template>
 <div>
   <child-dom
    :foo="foo"
    :coo="coo"
     v-on:upRocket="reciveRocket"
   >
   </child-dom>
 </div>
</template>
<script>
 import childDom from "@/components/ChildDom.vue";
 export default {
   name:'demoNo',
   data() {
     return {
       foo:"Hello, world",
        coo:"Hello,rui"
    }
  },
 components:{childDom},
 methods:{
   reciveRocket(){
      console.log("reciveRocket success")
   }
 }
}
</script>
```

b组件更新如下: 
```sh
<template>
 <div>
 <p>foo:{{foo}}</p>
 <p>attrs:{{$attrs}}</p>
 <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
 </div>
</template>
<script>
import childDomChild from './childDomChild';
export default {
 name:'child-dom'
 props:["foo"],
 inheritAttrs:false,
}
</script>
```

c组件更新如下: 

```sh
<template> 
 <div>
 <p>coo:{{coo}}</p>
 <button @click="startUpRocket">我要发射火箭</button>
 </div>
</template>
<script>
 export default {
 name:'childDomChild',
 props:['coo'],
 methods:{
 startUpRocket(){
 this.$emit("upRocket");
 console.log("startUpRocket")
 }
 }
 }
</script>
```

运行效果如下: 
![bxPtJS.png](https://s1.ax1x.com/2022/03/15/bxPtJS.png)

现在我们应该清楚了$attrs,$listerners，inheritAttrs 的作用了吧