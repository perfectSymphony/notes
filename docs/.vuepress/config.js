module.exports = {
  title: 'perfectSymphony',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/home.jpeg' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '上次更新时间',
    smoothScroll: true,
    repo: 'https://github.com/perfectSymphony/notes.git',
    docsRepo: 'https://github.com/perfectSymphony/notes',
    docsDir: 'docs',
    ocsBranch: 'master',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',
    nav:[ // 导航栏配置
      {text: '博客园', link: 'https://www.cnblogs.com/myprogramer/' },
      {text: '算法题库', link: '/css_docs/CSS中的BFC详解'},
      // {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: [
      {
        title: 'HTML',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          '/html_docs/html相关面试题',
          '/html_docs/table使用总结',
          '/html_docs/localStorage和sessionStorage区别',
          '/html_docs/meta标签和浏览器缓存关系'
        ]
      },
      {
        title: 'CSS',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/css_docs/CSS中的BFC详解',
          '/css_docs/移动端Web页面适配方案',
          '/css_docs/collapse、overflow、float这些特性相互叠加后会怎么样',
          '/css_docs/css优先级和权重问题以及important优先级',
          '/css_docs/深入理解css之vertical-align',
          '/css_docs/深入理解css之line-height',
          '/css_docs/CSS3属性之perspective详解',
          '/css_docs/CSS相关面试题',
          '/css_docs/前端样式导入的方式有哪些？',
          '/css_docs/css3中定位模型之position属性的使用方法',
          '/css_docs/CSS命名规范——BEM思想',
          '/css_docs/flex为1的含义',
          '/css_docs/display:inline-block元素之间空隙的产生原因和解决办法',
          '/css_docs/常见问题总结',
          '/css_docs/浅谈css的伪元素'
        ]
      },     
      {
        title: 'JavaScript',
        collapsable: true,
        sidebarDepth: 3,
        children: [ 
          '/js_docs/变量提升必须注意的问题',
          '/js_docs/typeof与instanceof区别',
          '/js_docs/call、apply和bind方法的用法以及区别',
          '/js_docs/Promise精选',
          '/js_docs/事件循环机制相关问题总结',
          '/js_docs/彻底搞懂JS中的prototype、__proto__与constructor',
          '/js_docs/ES6遍历数组和对象的方法总结',
          '/js_docs/JS数据类型有哪些，有什么区别？',
          '/js_docs/解决JavaScript中0.1+0.2不等于0.3的问题',
          '/js_docs/ES6中的Set和Map',
          '/js_docs/谈谈对闭包的理解',
          '/js_docs/JS基础',
          '/js_docs/JS能力测评',
          '/js_docs/手写出场率极高的面试题',
          '/js_docs/什么是纯函数',
          '/js_docs/什么是函数柯里化',
          '/js_docs/js判断变量是不是数组的方法',
          '/js_docs/判断一个对象是否为空对象',
          '/js_docs/JavaScript的深拷贝与浅拷贝',
          '/js_docs/关于面向对象',
          '/js_docs/AMD、CMD、CommonJs到底是什么？它们有什么区别？',
          '/js_docs/箭头函数与普通函数的区别',
          '/js_docs/js判断是否为整数类型',
          '/js_docs/JavaScript实现数据双向绑定的三种方式',
          '/js_docs/浏览器与Node的事件循环有何区别',
          '/js_docs/异步编程实现任务调度器',
          '/js_docs/javascript面试题七问七答',
          '/js_docs/JavaScript提升代码质量的最佳实践列表',
          '/js_docs/null和undefined的区别',
          '/js_docs/Javascript中的运算符',
          '/js_docs/Javascript清除缓存的几种方法',
          '/js_docs/Javascript问题汇总',
          '/js_docs/H5图片上传实现'
         ],
      },
      {
        title: '工具篇',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/tools/工具汇总',
        ]
      },      
      {
        title: 'vue',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/vue_docs/Vue相关面试题',
          '/vue_docs/vue中的mixins',
          '/vue_docs/Vue Router的params和query传参的使用和区别',
          '/vue_docs/Vue的computed和watch的细节全面分析',
          '/vue_docs/vue实现路由按需加载的3种方式',
          '/vue_docs/vue中的router和route的区别',
          '/vue_docs/从单页应用改造成多页应用',
          '/vue_docs/Vue子组件调用父组件的三种方法',
          '/vue_docs/Vue的异步更新实现原理',
          '/vue_docs/Vue项目性能优化总结',
          '/vue_docs/vue进阶之路-vue3新特性',
          '/vue_docs/vue3面试中必问的5个考点',
          '/vue_docs/Vue3.0响应式数据原理',
          '/vue_docs/Vue中的watch与computed',
          '/vue_docs/vue中的this指向',
          '/vue_docs/Vue2.4中$attrs和$listeners的使用'
        ]
      },
      {
        title: 'webpack',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/webpack/webpack性能优化——DLL',
          '/webpack/webpack相关面试题',
        ]
      },      
      {
        title: 'uni-app',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/uni-app/uni-app利用rich-text展示富文本内容,图片的宽度溢出屏幕',
          '/uni-app/uni-app项目公共方法封装',
        ]
      },      
      {
        title: 'React',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/react_docs/React的生命周期',
          '/react_docs/受控组件和非受控组件',
          '/react_docs/hooks常用API总结及redux在函数组件中的使用'
        ]
      },      
      {
        title: 'NodeJS',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/node_docs/NodeJS优缺点及适用场景讨论',
          '/node_docs/node中间层',
        ]
      },           
      {
        title: 'GIT',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/git_docs/详解git pull和git fetch的区别',
          '/git_docs/git stash的用法总结',
          '/git_docs/linux重启tomcat命令',
          '/git_docs/Git常见问题总结',
          '/git_docs/Mac系统下查看和生成SSH-Key',
          '/git_docs/如何将本地项目上传到Github',
        ]
      }, 
      {
        title: 'Nginx',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/nginx/Nginx正向代理与反向代理',
          '/nginx/nginx的gzip设置详解',
          '/nginx/Nginx虚拟目录alias和root目录'
        ]
      }, 
      {
        title: 'HTTP',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/http/HTTP和HTTPS的区别',
          '/http/揭秘简单请求和复杂请求',
          '/http/浏览器渲染机制',
          '/http/HTTP状态码汇总',
          '/http/Nginx的gzip配置参数',
          '/http/浅谈preflight-request',
          '/http/前端浏览器缓存及代码部署'
        ]
      }, 
      {
        title: '跨域',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/cross-domain/jsonp原理',
          '/cross-domain/关于跨域,以及跨域的几种方式',
          '/cross-domain/jsonp返回的数据格式与普通json的区别',
        ]
      },       
      {
        title: '网络',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/network/理解cookie、session、token',
          '/network/CSRF攻击与防御'
        ]
      },       
      {
        title: '性能优化',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/optimization/前端性能优化点汇总',
          '/optimization/浅谈js防抖和节流',
        ]
      },
      {
        title: '数据结构与算法',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/accumulate/时间复杂度和空间复杂度如何计算？',
          '/accumulate/两数之和',
          '/accumulate/算法总结',
          '/accumulate/比较版本号',
        ]
      }, 
      {
        title: '架构',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/structure/BFF架构设计',
          '/structure/微前端架构理念',
          '/structure/什么是MPA、SPA',
          '/structure/前端实现自动化部署'
        ]
      }, 
      {
        title: '概念篇',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/concept/吞吐量（TPS）、QPS、并发数、响应时间（RT）概念',
        ]
      }, 
      {
        title: '正则表达式',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/RegEx/前端常用60余种工具方法',
        ]
      },     
      {
        title: '移动直播',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/live/RTC原理',
          '/live/JsBridge使用和原理'
        ]
      }, 
      {
        title: '问题记录',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/problem-record/vue单页应用刷新网页后vuex的state数据丢失的解决方案',
          '/problem-record/Cannot assign to read only property exports of object',
          '/problem-record/Homebrew安装',
          '/problem-record/常见问题'
        ]
      },
      {
        title: '语录篇',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/philosophy/语录篇一',
          '/philosophy/语录篇二',
          '/philosophy/语录篇三',
        ]
      }, 
      {
        title: '每日反思',  
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/review/2022-10-13',
          '/review/2022-10-14',
        ]
      },
      {
        title: '功能点预览',   
        collapsable: true,
        sidebarDepth: 3,
        children: [
          '/preview/one',
        ]
      },                                                            
    ], // 侧边栏配置
  }
};