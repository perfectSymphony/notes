(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{440:function(t,r,a){"use strict";a.r(r);var e=a(45),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"微前端架构理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构理念"}},[t._v("#")]),t._v(" 微前端架构理念")]),t._v(" "),a("h2",{attrs:{id:"大型企业开发挑战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大型企业开发挑战"}},[t._v("#")]),t._v(" 大型企业开发挑战")]),t._v(" "),a("p",[t._v("构建一个复杂的企业应用是一个系统性的软件工程问题，我们不断通过对技术架构、应用架构、团队协作、研发管理等方向的研究和实践来使事情变得更加美好，各种是我们所有从业人员不断思考和实践的方向。")]),t._v(" "),a("p",[t._v("✅不同产品线选择不同技术栈，技术沉淀困难"),a("br"),t._v("\n✅业务模块较多，并行开发困难，效率低"),a("br"),t._v("\n✅业务模块较多，带来的耦合性问题，样式层叠严重，需要小心维护"),a("br"),t._v("\n✅业务模块较多，带来的耦合性问题，改动某个模块的代码，不经意会影响其他稳定模块"),a("br"),t._v("\n✅构建产出的资源包体积较大，很难合理的做好公共抽取"),a("br"),t._v("\n✅脚手架太多，没有约定，或者是一个项目配一套开发工作流，且不易复用。")]),t._v(" "),a("h2",{attrs:{id:"微服务带来的思考与分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务带来的思考与分析"}},[t._v("#")]),t._v(" 微服务带来的思考与分析")]),t._v(" "),a("p",[t._v("微服务这一概念于2012年提出后，“微服务架构”这个术语也在近几年广泛出现在大家面前，它描述了一种将软件应用程序设计为可独立部署的服务套件的特定方式，且得益于各大企业在微服务相关基础设施上的投入，微服务架构及其实践案例如春笋般涌现。")]),t._v(" "),a("p",[t._v("通过将铁饼一块的巨石应用（所有复杂的业务功能耦合在一起，拆不开分不开，牵一发而动全身）进行微服务化拆分和改造，围绕着业务领域组件来创建应用，这些应用可独立地进行开发、管理和加速。在分散的组件中使用微服务云架构和平台，使部署、管理和服务功能交付变得更加简单。")]),t._v(" "),a("p",[t._v("复杂应用的微服务化改造和基础能力平台化/中台化，可以让业务团队能够演进成为关注业务创新的的2pizza敏捷团队，其中的理念同样值得我们在前端技术领域参考实践。")]),t._v(" "),a("h2",{attrs:{id:"微前端概念的提出与实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端概念的提出与实践"}},[t._v("#")]),t._v(" 微前端概念的提出与实践")]),t._v(" "),a("p",[t._v("我们已经从引入微服务架构中获得了明显的好处，微服务 架构可以让团队裁剪出独立部署的交付物以及可维护的服务。不幸的是，我们还看到许多团队在后端服务之上创建了 前端单体——一个单一，庞大和杂乱无绪的浏览器应用。我 们首选的（经过验证的）方法是将基于浏览器的代码拆分成 微前端。在这种方法中，Web应用程序被分解为多个特性， 每个特性都由不同的前后端团队拥有。这确保每个特性都 独立于其他特性开发，测试和部署。这样可以使用多种技术 来重新组合特性——有时候是页面，有时候是组件——最终 整合成一个内聚的用户体验。")]),t._v(" "),a("p",[t._v("--- By 《ThoughtWorks 2017技术雷达\b》")]),t._v(" "),a("p",[t._v("从上文的节选内容可以看到，ThoughtWorks 最早提出了微前端这一概念，与微服务类似。微前端也希望将某个单体架构的巨石型(Monolithic)应用转化为多个可以独立运行、独立开发、独立部署、独立维护的服务或者应用的聚合，从而满足业务快速变化及分布式多团队并行开发的需求。")]),t._v(" "),a("p",[t._v("微服务与微前端在软件工程中的基本原理同样相通，都是遵循单一职责(Single Responsibility)、关注分离(Separation of Concerns)、模块化(Modularity)与分而治之(Divide & Conquer)等基本的原则。")]),t._v(" "),a("h2",{attrs:{id:"微前端框架落地的难点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端框架落地的难点"}},[t._v("#")]),t._v(" 微前端框架落地的难点")]),t._v(" "),a("h3",{attrs:{id:"统一工程化能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一工程化能力"}},[t._v("#")]),t._v(" 统一工程化能力")]),t._v(" "),a("p",[t._v("我们需要约定一套成体系、成规范的项目规范，这套规范可以满足不同应用的开发诉求\n我们需要一个工具，来统一完成构建、编译、本地服务等事情，并且对使用者是无感知或是少感知的，降低技术复杂度，并约定构建流程和资源输出规范\n我们建议，基于一套技术栈之上，作为不同类型微应用的最佳实践，提炼为模板\n我们需要一个cli工具，来帮助我们快速启动开发，提升对开发者的友好性\n跨技术栈的能力支持（React\\Vue\\Angular等不同框架，JS/TS/Dart等不同语言）")]),t._v(" "),a("h2",{attrs:{id:"门户基座中微应用管理机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#门户基座中微应用管理机制"}},[t._v("#")]),t._v(" 门户基座中微应用管理机制")]),t._v(" "),a("p",[t._v("✅应用组合\n• 组合时机，在构建时组合，还是在运行时组合\n• 应用路由，如何根据 URL 加载/导航到不同的页面，如何根据子应用界面的变化切换 URL\n• 应用加载，确定加载应用的版本，依赖于框架的加载机制，还是采用 AMD 或者 SystemJS 异步加载\n✅应用隔离\n• 应用容错，某个应用的崩溃不应影响到其他应用或容器应用；\n• 样式隔离，避免 CSS 相互污染\n• DOM 隔离，避免子应用操作非自身作用域内的结点\n✅应用协调与治理：\n• 统一配置与切换，主题，利用 CSS Variables 等方式动态换肤\n• 应用的生命周期，规范化子应用的生命周期，并且在不同生命周期中执行不同的操作\n• 数据共享，子应用间数据共享\n• 服务共享，跨应用数据共享与服务调用\n• 组件共享，可能将某个纯界面组件或者业务组件以插件(Plugin)或者部件(Widget)的方式共享出去；提供某个计算能力。")]),t._v(" "),a("h2",{attrs:{id:"微前端与快速开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微前端与快速开发"}},[t._v("#")]),t._v(" 微前端与快速开发")]),t._v(" "),a("h3",{attrs:{id:"开发模式演进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发模式演进"}},[t._v("#")]),t._v(" 开发模式演进")]),t._v(" "),a("p",[t._v("无论是 Web 端的门户型应用还是 Mobile 端的门户型应用，都有一个相同的特点："),a("font",{attrs:{color:"red"}},[t._v("需要满足大型企业统一工作入口这样的核心诉求")]),t._v("，这背后自然少不了快速的规模化的应用开发工作。我们经过实践总结，将大型应用模块化为多个独立的微应用，微应用化的背后则需要提供一套清晰、标准的微应用开发模式，并且提供统一的门户基座，实现对所有微应用的管理（注册、发布、接入、授权、计量计费、更新等）。\n• 门户底座能力：企业门户是个大基座，运行时，能够提供注册机制实现领域应用的集成，并且预至各种自定义的管理能力；具备微应用的导航管理、工作台展示和个性化定制，具备统一的授权认证等能力。\n• 微应用开发模式：细分领域、细分业务模块之后，有太多的功能需要快速开发，一个统一的基础框架下的微应用开发模式能够助力领域应用的快速开发，并且需要遵守一定的规范，保证能够顺利集成到门户基座；\n• 应用管理：也可称之为应用商店，微应用开发模式解决了如何快速开发的问题，那么应用管理则需要解决应用开发完之后如何快速发布、如何在应用商店中搜索发现、如何下载和集成使用、如何授权管理、如何计量计费等。")],1),t._v(" "),a("h3",{attrs:{id:"微应用理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微应用理念"}},[t._v("#")]),t._v(" 微应用理念")]),t._v(" "),a("p",[t._v("微应用化，指的是无论在开发和运行时阶段，应用都是以单一、微小应用的形式存在。微应用化在微前端架构中得到实现，遵循微前端架构下的规范与标准："),a("br"),t._v("\n• 微应用有标准化的项目工程，能够实现完整的开发、调试、构建、发布等流程"),a("br"),t._v("\n• 微应用与微应用之间可以相互组合，集成部署成一个大应用"),a("br"),t._v("\n• 微应用的开发和构建需要遵循一致的规范"),a("br"),t._v("\n• 微应用的开发可以选择不同的前端框架")]),t._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/Wolfmanlq/p/8097663.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThoughtWorks 2017技术雷达\b"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/phodal/microfrontends",target:"_blank",rel:"noopener noreferrer"}},[t._v("微前端的那些事儿"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/92128d26b8ec",target:"_blank",rel:"noopener noreferrer"}},[t._v("「微前端」- 将微服务理念扩展到前端开发（理论篇）"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);