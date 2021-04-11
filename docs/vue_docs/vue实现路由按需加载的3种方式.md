## vue实现路由按需加载的3种方式

- vue异步组件
- es提案的import()
- webpack的require.ensure()

> vue异步组件技术 === 异步加载
  vue-router配置路由, 使用vue的异步组件技术, 可以实现按需加载.
  但是, 这种情况下一个组件生成一个js文件

```sh
/* vue异步组件技术 */
{
  path: '/home',
  name: 'home',
  component: resolve => require(['@/components/home'],resolve)
},{
  path: '/index',
  name: 'Index',
  component: resolve => require(['@/components/index'],resolve)
},{
  path: '/about',
  name: 'about',
  component: resolve => require(['@/components/about'],resolve)
} 
```

> 组件懒加载方案二 路由懒加载(使用import)

```sh
// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
/* const Home = () => import('@/components/home')
const Index = () => import('@/components/index')
const About = () => import('@/components/about') */
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。 把组件按组分块
const Home =  () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')
const About = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/about')

{
  path: '/about',
  component: About
}, {
  path: '/index',
  component: Index
}, {
  path: '/home',
  component: Home
}
```

> webpack提供的require.ensure()
vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。
这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

```sh
/* 组件懒加载方案三: webpack提供的require.ensure() */
{
  path: '/home',
  name: 'home',
  component: r => require.ensure([], () => r(require('@/components/home')), 'demo')
}, {
  path: '/index',
  name: 'Index',
  component: r => require.ensure([], () => r(require('@/components/index')), 'demo')
}, {
  path: '/about',
  name: 'about',
  component: r => require.ensure([], () => r(require('@/components/about')), 'demo-01')
}
```
