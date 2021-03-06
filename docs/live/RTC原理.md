## RTC原理

## 1、什么是TRTC

<font color="#f00" fontWeight="700">我们先从TRTC这个名字的含义来分析</font>

腾讯[实时音视频](https://cloud.tencent.com/product/trtc?from=10680)（Tencent Real-Time Communication，TRTC），这是官方对TRTC的定义。

首先，我们从名字来解析什么是TRTC：

T   ——   Tencent 腾讯
R-T   ——   Real-Time 实时的
C   ——   Communication 传播 / 交流 / 通信

显而易见，这就是一款做实时音视频通信的产品，其次，我们知道，产品都会各有各的专长，就像IM专注于做实时通讯一样，TRTC做的，就是为实时音视频直播提供技术和服务。这其中，除了多人音视频通话和会议等，当然也包括了屏幕实时分享、音视频实时直播等。

这时候会发现我们忽略了第一个T，也就是Tencent 腾讯，说到腾讯，我们的第一反应就是，QQ、微信，这两款产品，
可以说都是以即时通信为基准，所以说，即时通信这一块，可以说腾讯有着很强的资历，QQ和微信的音视频通话不就是用的TRTC么，多人视频多人语音什么的我们用了多久了。


<font color="#f00" fontWeight="700">接下来，从技术的角度去分析，什么是TRTC</font>
刚刚我们已经了解到TRTC的定义是实时音视频通信，那么它是如何实现的呢？

就是腾讯提供了一个RTC云服务，你可以仅仅通过SDK和应用之间的交互，就能实现音视频实时通讯。

首先我们了解一下各平台和TRTC服务之间的交互：

![6iBD9x.png](https://s3.ax1x.com/2021/03/01/6iBD9x.png)


以小程序和web也就是浏览器之间的的视频通讯为例

很显然，有着一个小难点，跨平台了。这时候，我们可以用到TRTC在微信小程序端的SDK和web端的SDK，先去和TRTC云服务进行通讯，由TRTC云服务去对双方的音视频数据进行处理和传输。

>SDK是什么？  SDK是软件开发工具包，由开发人员使用其工具包提供的接口，去对接TRTC的云服务。同时，各平台的SDK由于使用协议和规则不同，使用方面在风格统一的模式下，又略有差异。

>云服务是什么？  这个的涉及面比较广，粗略的说一下吧，一则是云服务器，以TRTC为例，通过TRTC的SDK，可以访问到TRTC的专有服务器。二则，是云计算，同样以TRTC为例，音视频压缩算法，协议转换交互，状态控制推送等。简单来讲就是，你通过SDK访问我服务器，我通过你的设置和链接，进通讯处理和传输。

由此可知，TRTC本质上就是一个音视频通讯的云服务，TRTC的SDK则是你使用它的工具和桥梁。


## 2、TRTC 简介

实时音视频（Tencent RTC）主打低延时互动直播和多人音视频两大解决方案，支持低延时直播观看、实时录制、屏幕分享、美颜特效、立体声等能力，还能和直播 CDN 无缝对接，适用于互动连麦、跨房PK、语音电台、K 歌、小班课、大班课、语音聊天、视频聊天、在线会议等业务场景。

## 3、TRTC是如何实现的

作为一名程序员，那当然要先了解TRTC如何实现的

以web App之间的视频通讯为例，上面了解到可以通过SDK去联系TRTC云服务，那么，具体是如何进行联系的呢？

首先，我们来看一下这张图：

![6iBj5n.png](https://s3.ax1x.com/2021/03/01/6iBj5n.png)

那么很显然，从生命周期的角度上来讲，我们从加入房间，到退出房间可以为本地音视频通话的一个生命周期，接下来，按照生命周期步骤，一步步来说。

1、加入房间，很显然，这是一切的开始，音视频即时通讯，都会有一个房间，通过这个房间，TRTC云服务才能知道，接收到的某个人的音视频信息要发给哪些人。一个小的团体，或者是两个人，或者是多个人，互相之间进行沟通，这就是房间的概念。
2、发布文件流，加入房间之后，我们需要给房间内的其他人发送本地音视频数据流给到云服务，然后再由云服务经过处理后转发到房间内的其他用户。
3、订阅远程流，这时候，其他的用户需要有一个订阅的处理，利用SDK接收云服务器端，别的用户发送过来经过处理的音视频，然后展现和播放。(官方建议在进入房间之前订阅，避免时间差导致没有接收到关键进房信息)
4、在通讯过程中，可以取消发布本地数据流，可用于取消后重新发布别的本地数据流，达到切换效果，但是不会影响订阅流。
退出房间，生命周期结束，SDK会自动取消订阅远程流和取消发布本地流(但是官方建议先取消发布本地流【unpublish】)。

至此，每个客户端都走一遍这样的流程，一个完整的音视频通话的过程到这儿就全部结束了。

## 总结一下

1、TRTC是用来实现实时音视频通信的云服务。
2、通过官方SDK调用TRTC云服务实现音视频通讯。
3、以房间为概念推送和接收音视频数据流。