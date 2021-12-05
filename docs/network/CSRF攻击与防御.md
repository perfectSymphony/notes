## CSRF攻击与防御

### 一、CSRF是什么？

CSRF(Cross-site request forgery), 中文名称：跨站请求伪造。攻击者盗用你的身份，以你的名义发送恶意请求。CSRF能够做的事情包括：以你的的名义发送邮件，发消息，盗用你的账号，甚至于购买商品，虚拟货币转账.....造成的问题包括：个人隐私泄漏以及个人财产安全。

### 二、CSRF攻击原理

![yVYKDf.png](https://s4.ax1x.com/2021/12/05/oDAZdg.jpg)

### 三、几种常见的攻击类型

1、GET类型的CSRF

针对get请求，黑客一般会给你发送一张图片，在图片的src里执行请求。
```javascript
// GET类型csrf攻击
<img src='http://127.0.0.1:10086/payfor?money=100&to张三' alt=''>
```

2、POST类型的CSRF

针对post请求，黑客一般会伪造一个表单，在提交表单的时候发送请求。

```javascript
//post类型csrf攻击
<form action='http://127.0.0.1:10086/payfor' method='POST' target='_self'>
    <input type='hidden' name='to' value='hacker'>
</form>
<script>
document.forms[0].submit();
</script>
```

3、链接类型的CSRF

链接类型的csrf并不常见，比起其他的两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者一广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如：

```javascript 
<a href='http://test.com/scrf/widthdraw.php?amount=1000&for=hacker' taget='_blank'>重磅消息！！</a>
```

### 四、防御CSRF的策略：

CSRF通常从第三方网站发起，被攻击的网站无法防止攻击的发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性。

根据CSRF攻击的两个特点：

1、CSRF(通常)发生在第三方域名。
2、CSRF攻击者不能获取到Cookie等信息，只是利用。

我们可以专门制定防护策略，如下：

- 阻止不明外域的访问
  - 同源检测
  - Samesite Cookie
- 提交时要求 附加本域才能获取的信息
 - CSRF Token
 - 双重Cookie验证

 以下我们对各种防护方法做详细说明。

#### 4.1 同源检测

既然CSRF大多来自第三方网站，那么我们就直接禁止外域(或者不受信任的域名)对我们发起请求。

那么问题来了，我们如何判断请求是否来自外域呢？

在HTTP协议中，每一个异步请求都会携带两个Header，用于标记来源域名：

 - Origin Header
 - Referer Header

 ##### 1、使用Origin Header确定来源域名
 
 在部分与CSRF有关的请求中，请求的Header中会携带Origin字段。字段内包含请求的域名(不包含path及query)。

如果Origin存在，那么直接使用origin中字段确认来源域名就可以。

但是，origin在以下两种情况下不存在：

- IE11同源策略： IE11不会跨站CORS请求上添加Origin标头，Refer头将仍然是唯一的标识。最根本原因是因为IE11对同源的定义和其他浏览器有不同，有两个主要的区别，可以参考[MDN Same-origin_policy#IE_Exceptions](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#IE_Exceptions)

- 302重定向： 在302重定向之后Origin不包含在重定向的请求中，因为Origin可能会被认为是其他来源的敏感信息。对于302重定向的情况来说都是定向到新的服务器上的URL，因此浏览器不想将Origin泄漏到新的服务器上。

##### 2. 使用Referer Header确定来源域名

根据HTTP协议，在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来源地址。
注意：是否携带referer还需要看是哪种referer policy。
这种方法并非万无一失，Referer的值是由浏览器提供的，虽然HTTP协议上有明确的要求，但是每个浏览器对于Referer的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。

#### 4.2 CSRF Token

CSRF攻击之所以能够成功，是因为服务器误把攻击者发送的请求当成了用户自己的请求。那么我们可以要求所有的用户请求都携带一个CSRF攻击者无法获取到的Token。服务器通过校验请求是否携带正确的Token，来把正常的请求和攻击的请求区分开，也可以防范CSRF的攻击。

###### 原理: 
CSRF Token的防护策略分为三个步骤：

1. 服务端将CSRF Token下发到客户端

2. 页面提交的请求携带这个Token

 对于GET请求，Token将附在请求地址之后，这样URL 就变成 http://url?csrftoken=tokenvalue。 而对于 POST 请求来说，要在 form 的最后加上：

 ```javascript
<input type='hidden' name='csrftoken' value='tokenvalue' />
```
这样，就把Token以参数的形式加入请求了。

3. 服务器验证Token是否正确

当用户从客户端得到了Token，再次提交给服务器的时候，服务器需要判断Token的有效性，验证过程是先解密Token，对比加密字符串以及时间戳，如果加密字符串一致且时间未过期，那么这个Token就是有效的。

<strong>总结：</strong>

Token是一个比较有效的CSRF防护方法，只要页面没有XSS漏洞泄露Token，那么接口的CSRF攻击就无法成功。

>验证码和密码其实也可以起到CSRF Token的作用，而且更安全。

#### 4.3 双重Cookie验证

利用CSRF攻击不能获取到用户Cookie的特点，我们可以要求Ajax和表单请求携带一个Cookie中的值。

双重Cookie采用以下流程：

 - 在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如csrfcookie=v8g9e4ksfhw）。
 - 在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw）。* 后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。

此方法相对于CSRF Token就简单了许多，但是，此方法并没有大规模应用，其在大型网站上的安全性还是没有CSRF Token高：

 - 服务端设置httpOnly
 - Chrome94以后跨域无法设置cookie
 - XSS注入，攻击者获取cookie
 - Cookie中增加了额外的字段。
 - 难以做到子域名的隔离。

#### 4.4 Samesite Cookie属性

防止CSRF攻击的办法已经有上面的预防措施。为了从源头上解决这个问题，Google起草了一份草案来改进HTTP协议，那就是为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值，分别是 Strict 和 Lax。参考如下：[Cookie 的 SameSite 属性](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)

<strong>补充：</strong>

 - 1、Chrome 51 开始，浏览器的 Cookie 新增加了一个SameSite属性，用来防止 CSRF 攻击和用户追踪。
 - 2、Chrome升级到80版本之后cookie的SameSite属性默认值由None变为Lax，这也就造成了一些访问跨域cookie无法携带的问题。
这个时候，我们可以通过在chrome://flags来将sameSite进行disabled

![oDMGmn.jpg](https://s4.ax1x.com/2021/12/05/oDMGmn.jpg)

 - 3、但是在chrome浏览器94版本SameSite by default cookies被移除，也就是通过chrome://flags不能再设置了。
