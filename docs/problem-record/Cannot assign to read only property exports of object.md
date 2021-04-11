## Cannot assign to read only property exports of object

> vue项目打包后生成的dist文件部署到GitHub page上之后，访问时，报`Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'`

#### 原因：
webpack 2中不允许混用import和module.exports 

#### 解决办法：
一、每个页面模块目录通过一个 index.js 主入口来导出（`module.exports`）对应的vue文件，然后 `router.js` 中通过 `require` 方法去引入资源。

这一做法是没毛病的，因为这是组织（webpack 2）允许的。

二、如果好好的`require`不用，非要用 `import` 那么请不要和 `module.exports` 混合服用，因为这是组织不允许的，此时便会报标题的错。（`Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'`）

三、如果你还是要用 import 方法来引入资源的话，你可以放弃 module.exports ，直接引入vue文件路径，因为 import 和 export default 是组织运行的。

四、使用`babel` 的 [plugins babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node)。它只做一件事就是将所有的`import()`转化为`require()`，这样就可以用这个插件将所有异步组件都用同步的方式引入，并结合 [BABEL_ENV](https://babeljs.io/docs/en/config-files/#env-option) 这个`babel`环境变量，让它只作用于开发环境下，在开发环境中将所有`import()`转化为`require()`，这种方案解决了之前重复打包的问题，同时对代码的侵入性也很小，你平时写路由的时候只需要按照官方[文档](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)路由懒加载的方式就可以了，其它的都交给`babel`来处理，当你不想用这个方案的时候，也只要将它从`babel`的 `plugins`中移除就可以了。

```sh
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      'plugins': ['dynamic-import-node']
    }
  }
}
```

#### 结论：

1、`exports` 导出的东西需要 `require` 引入！

2、`export` 导出的东西需要 `import` 引入！

3、在webpack 2中`不允许混用 import` 和 `module.exports`

#### 总结：

其实正确地去理解这个报错的话，就一定要去整明白 require 和 import 的区别！


> node编程中最重要的思想就是模块化，import和require都是被模块化所使用。
1、遵循规范
`require` / `exports` 是`CommonJS`的一部分
`import` / `export` 是ES6的新规范，如果要兼容浏览器的话必须转化成es5的语法
2、调用时间
`require` 是运行时调用，所以`require`理论上可以运用在代码的任何地方
import 是编译时调用，所以必须放在文件开头
3、本质
`require` 是赋值过程，其实`require`的结果就是对象、数字、字符串、函数等，再把`require`的结果赋值给某个变量
`import` 是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，`import`语法会被转码为`require`


