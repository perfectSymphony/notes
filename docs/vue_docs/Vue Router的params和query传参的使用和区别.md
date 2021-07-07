## Vue Router的params和query传参的使用和区别

首先简单说明以下 `$router` 和 `$route` 的区别
```sh
// $router: 为VueRouter的实例，相当于一个全局的路由对象，里面包含很多属性和子对象
// $route: 相当于当前正在跳转的路由对象，可以从里面获取name，path，params，query

//操作 路由跳转
this.$router.push({
    name: 'hello',
    params: {
        name: 'world',
        age: '18'
    }
})

//读取 路由参数接收
this.name = this.$route.params.name;
this.age = this.$route.params.age;

```

## 1、query传递参数

query 使用name引入可以传递参数，使用path也可以，如果有人知道其中的原因请告诉我一下，非常感谢。

```sh
//query传参，使用name跳转
this.$router.push({
    name: 'test',
    query: {
        id: '20200220',
        name: 'query'
    }
})

//query传参，使用path跳转
this.$router.push({
    path: 'test',
    query: {
        id: '20200303',
        name: 'query'
    }
})

//query传参接收
this.id = this.$route.query.id;
this.name = this.$route.query.name;

```
最终不管是path引入还是name引入效果都一样

## 2、params传递参数

注：使用params传参只能使用name进行引入

```sh
//params传参 使用name
this.$router.push({
  name:'test',
  params: {
    id:'202002020',
    name: 'query'
  }
})

//params接收参数
this.id = this.$route.params.id ;
this.name = this.$route.params.name ;

//路由
{
path: '/test/:id/:name',
name: 'test',
component: () => import('@/view/test')
}
```

需要注意的是：

params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系。
params一旦设置在路由，params就是路由的一部分，如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。

## 3、总结

1、传参可以使用params和query两种方式。<br/>
2、使用params传参只能用name来引入路由，即push里面只能是name:’xxxx’,不能是path:’/xxx’,因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！。<br/>
3、使用query传参使用path来引入路由。<br/>
4、params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系。<br/>
5、二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示。
