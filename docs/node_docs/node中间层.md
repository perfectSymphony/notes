## node中间层

### 一、总结


1、node中间层作用：前端也是mvc，NodeJS之后，前端可以更加专注于视图层，而让更多的数据逻辑放在Node层处理  <br/>

2、node中间层作用：当发现所有请求量太多应付不过来的时候就可以考虑做这样的分离，将处理页面渲染的请求分给另一个服务，挡在前面，自己只负责数据相关的请求。nodejs擅长处理io密集型任务，很适合做处理页面渲染的服务 <br/>

3、node中间层作用：功能分离，减轻板块负担  <br/>

4、善用学习网站（不只善用搜索引擎）：去菜鸟教程或者别的里面首页可以了解例如node.js的作用 <br/>

5、node.js：部署在服务器上的js，可以部署一些高性能服务。 <br/>

 

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

 

如果你是一个前端程序员，你不懂得像PHP、Python或Ruby等动态编程语言，然后你想创建自己的服务，那么Node.js是一个非常好的选择。

Node.js 是运行在服务端的 JavaScript，如果你熟悉Javascript，那么你将会很容易的学会Node.js。

当然，如果你是后端程序员，想部署一些高性能的服务，那么学习Node.js也是一个非常好的选择。

### 二、从NodeJS搭建中间层再谈前后端分离

之前在知道创宇的项目中有用到过nodejs作中间层，当时还不太理解其背后真正的原因；后来在和一位学长交谈的过程中，也了解到蚂蚁金服也在使用类似的方法，使用nodejs作为中间层去请求真实后台的数据；之后人到北京，也见到现在的公司也在往nodejs后端方向靠拢。随着知识的增加，加之自己查阅资料，慢慢总结出了一些原理。

#### 从做微信小程序引发的思考

最近出于爱好，写了个音乐播放器的微信小程序（原本想用vue写的，后来因为公司业务原因，年后可能去做微信小程序，所以就换了前端技术栈）。示例：
[wx-audio](https://github.com/xingbofeng/wx-audio)

后端出于性能和别的原因，提供的接口所返回的数据格式也许不太适合前端直接使用，前端所需的排序功能、筛选功能，以及到了视图层的页面展现，也许都需要对接口所提供的数据进行二次处理。这些处理虽可以放在前端来进行，但也许数据量一大便会浪费浏览器性能。因而现今，增加node端便是一种良好的解决方案。

在我的微信小程序demo的server端代码中，我通过http模块对真实后台（网易云音乐API）发起http请求，然后通过express模块搭建后端服务。
发起请求：
```sh
// http.js
var formatURL = require('./formatURL.js');
var http = require('http');
const POSThttp = function(request){
  return new Promise((resolve, reject) => {
    let body = '';
    // http模块拿到真实后台api的数据
    http.get(formatURL(request.body.musicname), function(res){
      res.on('data', (data) => {
        body += data;
      }).on('end', () => {
        // 格式化
        const {
          name,
          audio: musicUrl,
          page,
          album: {
            name: musicName,
            picUrl,
          },
          artists: [{
            name: singer,
          }],
        } = JSON.parse(body).result.songs[0];
        const reply = {
          name,
          picUrl,
          musicUrl,
          page,
          singer,
        };
        resolve(reply);
      });
    });
  });
};
module.exports = POSThttp;
```
得到数据传回前端：

```sh
var express = require('express');
var POSThttp = require('./POSThttp.js');
var bodyParser = require('body-parser');
// 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/', (req, res) => {
  POSThttp(req).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
});
app.listen(3000, () => {
  console.log('open wx-audio server successful!')
});
```
这几十行代码也就实现了一个简单的中间层的demo，并做到了在中间层格式化参数，便于前端进行使用的过程。

#### 为什么需要中间层？

其实这个问题，我认为跟面试常考的题：“为什么需要前后端分离？”是类似的，其原因可以归纳为以下几点：

#### 现今网站存在问题

之前有向一位在百度有多年工作经验的老前辈交谈这类问题，我所提到的搜狐公司代码冗余、前后端耦合的问题，他是这么回答并且给予我这样的建议：

![brcSqP.png](https://s1.ax1x.com/2022/03/07/brcSqP.png)

其实，提炼出来，现今大公司的老项目（包括百度、搜狐等公司所采用的后端渲染等），或多或少都会存在这样的一些 问题 ：

前端代码越来越复杂<br/>
前后端依旧高度耦合<br/>
无法良好的支持跨终端<br/>

#### 前辈们提出的解决方案

参考[ 淘宝前后端分离解决方案](https://2014.jsconfchina.com/slides/herman-taobaoweb/index.html#/)

前端代码越来越复杂，我们希望尽可能地减少工作量，开始使用类似MV*的分层结构，使前端后分离成为必要。<br/>
前端需要处理更多的工作，希望有权操控View，Router（如：SPA的尝试）<br/>
各种终端设备的兴起，需要我们把页面适配到更多的地方。<br/>

开始：我们所尝试的CLIENT-SIDE MV* 框架，后端暴露数据接口、处理业务逻辑，前端接收数据、处理渲染逻辑。<br/>

```sh
关于MVC的定义：

MVC是一种设计模式，它将应用划分为3个部分：数据（模型）、展现层（视图）和用户交互（控制器）。换句话说，一个事件的发生是这样的过程：
　　1. 用户和应用产生交互。
　　2. 控制器的事件处理器被触发。
　　3. 控制器从模型中请求数据，并将其交给视图。
　　4. 视图将数据呈现给用户。
我们不用类库或框架就可以实现这种MVC架构模式。关键是要将MVC的每部分按照职责进行划分，将代码清晰地分割为若干部分，并保持良好的解耦。这样可以对每个部分进行独立开发、测试和维护。
```
![brcrzd.png](https://s1.ax1x.com/2022/03/07/brcrzd.png)

但这样的方式仍旧存在问题：
##### 各层职责重叠

Client-side Model 是 Server-side Model 的加工<br/>
Client-side View 跟 Server-side是 不同层次的东西<br/>
Client-side的Controller 跟 Sever-side的Controller 各搞各的<br/>
Client-side的Route 但是 Server-side 可能没有<br/>

##### 性能问题

渲染，取值都在客户端进行，有性能的问题<br/>
需要等待资源到齐才能进行，会有短暂白屏与闪动<br/>
在移动设备低速网路的体验奇差无比<br/>

##### 重用问题

模版无法重用，造成维护上的麻烦与不一致<br/>
逻辑无法重用，前端的校验后端仍须在做一次<br/>
路由无法重用，前端的路由在后端未必存在<br/>

##### 跨终端问题

业务太靠前，导致不同端重复实现<br/>
逻辑太靠前，造成维护上的不易<br/>

##### 渲染都在客户端，模版无法重用，SEO实现 麻烦


#### NodeJS作为中间层的全栈开发方案

![br2Aun.png](https://s1.ax1x.com/2022/03/07/br2Aun.png)

我们使用Node层：<br/>

转发数据，串接服务<br/>
路由设计，控制逻辑<br/>
渲染页面，体验优化<br/>
中间层带来的性能问题，在异步ajax转成同步渲染过程中得到平衡<br/>
更多的可能<br/>
其实更为重要的是，对于前端来说，NodeJS的学习成本是相当低的：我们无需学习一门新的语言，就能做到以前开发帮我们做的事情，一切都显得那么自然。<br/>

技术在不断变化中，唯有跟上技术革新的浪潮，才能不被时代所淘汰，不管是人还是企业。<br/>

### 三、node做中间层是什么意思，能具体详说么？

问题：

没接触过node，经常看文章说node做中间层，不知道具体指什么意思？比如在程序中解决了什么问题，如果说解决了渲染问题，那也是页面端，前端框架已经解决了，难道说是后端渲染前端框架，然后整个塞到前端吗？

解答：

很多项目中后端应用往往不止一个服务，而是一群各司其职的服务，比如nginx的存在就是因为服务器上运行着多个服务，而不同的网络请求由不同的服务处理，需要在这些服务前假设一层nginx做为代理，将请求分发给不同的服务，nginx在这里的角色就相当于中间层。

对于一个比较复杂的web站点，页面中的请求通常分为两种，请求页面与请求数据(ajax)。如果后端是个单体应用，当发现所有请求量太多应付不过来的时候就可以考虑做这样的分离，将处理页面渲染的请求分给另一个服务，挡在前面，自己只负责数据相关的请求。nodejs擅长处理io密集型任务，很适合做处理页面渲染的服务，于是很多人选择了nodejs。淘宝也是类似的架构，据说现在所有淘宝的页面都是由node服务渲染的。

 

讲道理就是用nodejs做静态资源管理和请求转发。
做到后端只管数据接口，前端负责路由，静态资源。

 

加了node的中间层，可以让前端处理view层和control层，后端只负责处理model层。前后端分离比较彻底，分工更明确一些吧。

另外就是有些框架在服务器不是node的时候SEO比较难做。加了node中间层后比较好做SEO

 

node就是链状执行

请求接收 -> 中间件1 -> 中间件2 -> ... 中间件n ... -> 返回

中间件就是某一个处理操作