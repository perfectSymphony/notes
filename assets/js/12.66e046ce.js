(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{370:function(t,r,s){"use strict";s.r(r);var e=s(45),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"吞吐量-tps-、qps、并发数、响应时间-rt-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#吞吐量-tps-、qps、并发数、响应时间-rt-概念"}},[t._v("#")]),t._v(" 吞吐量（TPS）、QPS、并发数、响应时间（RT）概念")]),t._v(" "),s("h2",{attrs:{id:"_1-响应时间-rt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应时间-rt"}},[t._v("#")]),t._v(" 1. 响应时间(RT)")]),t._v(" "),s("p",[s("font",{attrs:{color:"red","font-size":"10"}},[t._v("响应时间是指系统对请求作出响应的时间。")]),t._v("直观上看，这个指标与人对软件性能的主观感受是非常一致的，因为它完整地记录了整个计算机系统处理请求的时间。由于一个系统通常会提供许多功能，而不同功能的处理逻辑也千差万别，因而不同功能的响应时间也不尽相同，甚至同一功能在不同输入数据的情况下响应时间也不相同。所以，在讨论一个系统的响应时间时，人们通常是指该系统所有功能的平均时间或者所有功能的最大响应时间。当然，往往也需要对每个或每组功能讨论其平均响应时间和最大响应时间。\n　　对于单机的没有并发操作的应用系统而言，人们普遍认为响应时间是一个合理且准确的性能指标。需要指出的是，响应时间的绝对值并不能直接反映软件的性能的高低，软件性能的高低实际上取决于用户对该响应时间的接受程度。对于一个游戏软件来说，响应时间小于100毫秒应该是不错的，响应时间在1秒左右可能属于勉强可以接受，如果响应时间达到3秒就完全难以接受了。而对于编译系统来说，完整编译一个较大规模软件的源代码可能需要几十分钟甚至更长时间，但这些响应时间对于用户来说都是可以接受的。")],1),t._v(" "),s("h2",{attrs:{id:"_2-吞吐量-throughput"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-吞吐量-throughput"}},[t._v("#")]),t._v(" 2. 吞吐量(Throughput)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(' <font color="red" font-size="10">吞吐量是指系统在单位时间内处理请求的数量。</font>对于无并发的应用系统而言，吞吐量与响应时间成严格的反比关系，实际上此时吞吐量就是响应时间的倒数。前面已经说过，对于单用户的系统，响应时间（或者系统响应时间和应用延迟时间）可以很好地度量系统的性能，但对于并发系统，通常需要用吞吐量作为性能指标。 \n')])])]),s("p",[t._v("对于一个多用户的系统，如果只有一个用户使用时系统的平均响应时间是t，当有你n个用户使用时，每个用户看到的响应时间通常并不是n×t，而往往比n×t小很多（当然，在某些特殊情况下也可能比n×t大，甚至大很多）。这是因为处理每个请求需要用到很多资源，由于每个请求的处理过程中有许多不走难以并发执行，这导致在具体的一个时间点，所占资源往往并不多。也就是说在处理单个请求时，在每个时间点都可能有许多资源被闲置，当处理多个请求时，如果资源配置合理，每个用户看到的平均响应时间并不随用户数的增加而线性增加。实际上，不同系统的平均响应时间随用户数增加而增长的速度也不大相同，这也是采用吞吐量来度量并发系统的性能的主要原因。一般而言，吞吐量是一个比较通用的指标，两个具有不同用户数和用户使用模式的系统，如果其最大吞吐量基本一致，则可以判断两个系统的处理能力基本一致。")]),t._v(" "),s("h2",{attrs:{id:"_3-并发用户数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-并发用户数"}},[t._v("#")]),t._v(" 3. 并发用户数")]),t._v(" "),s("p",[s("font",{attrs:{color:"red","font-size":"10"}},[t._v("并发用户数是指系统可以同时承载的正常使用系统功能的用户的数量。")]),t._v("与吞吐量相比，并发用户数是一个更直观但也更笼统的性能指标。实际上，并发用户数是一个非常不准确的指标，因为用户不同的使用模式会导致不同用户在单位时间发出不同数量的请求。一网站系统为例，假设用户只有注册后才能使用，但注册用户并不是每时每刻都在使用该网站，因此具体一个时刻只有部分注册用户同时在线，在线用户就在浏览网站时会花很多时间阅读网站上的信息，因而具体一个时刻只有部分在线用户同时向系统发出请求。这样，对于网站系统我们会有三个关于用户数的统计数字：注册用户数、在线用户数和同时发请求用户数。由于注册用户可能长时间不登陆网站，使用注册用户数作为性能指标会造成很大的误差。而在线用户数和同事发请求用户数都可以作为性能指标。相比而言，以在线用户作为性能指标更直观些，而以同时发请求用户数作为性能指标更准确些。")],1),t._v(" "),s("h2",{attrs:{id:"_4-qps每秒查询率-query-per-second"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-qps每秒查询率-query-per-second"}},[t._v("#")]),t._v(" 4. QPS每秒查询率(Query Per Second)")]),t._v(" "),s("p",[t._v("每秒查询率QPS是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准，在因特网上，作为域名系统服务器的机器的性能经常用每秒查询率来衡量。对应fetches/sec，即每秒的响应请求数，也即是最大吞吐能力。 （看来是类似于TPS，只是应用于特定场景的吞吐量）")])])}),[],!1,null,null,null);r.default=a.exports}}]);