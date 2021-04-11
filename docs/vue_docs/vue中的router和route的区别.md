## vue中的router和route的区别


**一、**

router是VueRouter的实例，相当于一个全局的路由器对象，里面还有好多的属性和子对象，例如history对象，经常用的跳转链接就可以用`this.$router.push()`, 和`router-link`跳转一样。
`this.$router.push()`会往history栈中添加一个新的记录。[详细见vue官方文档](https://router.vuejs.org/zh/guide/essentials/navigation.html)


route相当于正在跳转的路由对象。可以从里面获取name，path，params，query等。

打印`this.$route`和`this.$router`

![atiEdg.png](https://s1.ax1x.com/2020/08/02/atiEdg.png)

路由传参的方式：

1、可以手写完整的path：
```sh
this.$router.push({path:`/user/${userId}`})
```
这样传参的话，配置路由的时候需要在path上加参数path: user/:userId
这种接收参数的方式是this.$route.params.userId

2、也可以用params传参

```sh
//命名路由
router.push({name: 'user', params: { userId:123 }})
```

3、也可以用query传参

```sh
//带查询参数，变成 /register?plan=private
router.push({path: 'register', query: { plan: 'private' }})
```

`query`传参是针对`path`的，`params`传参是针对name的。。接收的方式都差不多。。。`this.$route.query`和`this.$route.params`
注意这只是跳转url，跳转到这个url显示什么组件，得配置路由。router跳转和`<router-link>`标签跳转，规则差不多。

展示的话
![atiFL8.png](https://s1.ax1x.com/2020/08/02/atiFL8.png)

注意：如果提供了path，params将会被忽略，但是query不属于这种情况。。。

如果使用完整路径和query传参，刷新页面时不会造成路由传参的参数丢失。

这个vue官方文档讲的很详细。

**二、**

有时候配置路由时path有时候会加 '/' 有时候不加,例如path:'name'和path:'/name'。区别其实官方文档说了，我当时没仔细看，导致这个问题还困扰了我很久。

![atiisf.png](https://s1.ax1x.com/2020/08/02/atiisf.png)
意思就是以 / 开头的会被当做路径，就不会一直嵌套之前的路径。

