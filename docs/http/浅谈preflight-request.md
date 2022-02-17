## 浅谈preflight-request

#### 背景
有时候我们在调用后台接口的时候，会请求两次，如下图的

![HWccE8.png](https://s4.ax1x.com/2022/02/16/HWccE8.png)
其实第一次发送的就是preflight request(预检请求)，那么这篇文章将讲一下，为什么要发预检请求，什么时候会发预检请求，预检请求都做了什么

#### 一. 为什么要发预检请求
我们都知道浏览器的同源策略，就是出于安全考虑，浏览器会限制从脚本发起的跨域HTTP请求，像XMLHttpRequest和Fetch都遵循同源策略。

1、浏览器限制发起跨域请求<br/>
2、跨域请求可以正常发起，但是返回的结果被浏览器拦截了

一般浏览器都是第二种方式限制跨域请求，那就是说请求已到达服务器，并有可能对数据库里的数据进行了操作，但是返回的结果被浏览器拦截了，那么我们就获取不到返回结果，这是一次失败的请求，但是可能对数据库里的数据产生了影响。

为了防止这种情况的发生，规范要求，对这种可能对服务器数据产生副作用的HTTP请求方法，浏览器必须先使用OPTIONS方法发起一个预检请求，从而获知服务器是否允许该跨域请求：如果允许，就发送带数据的真实请求；如果不允许，则阻止发送带数据的真实请求。

#### 二. 什么时候发预检请求

HTTP请求包括： 简单请求 和 需预检的请求

##### 1. 简单请求

简单请求不会触发CORS预检请求，“简属于
单请求”术语并不属于Fetch(其中定义了CORS)规范。
若满足所有下述条件，则该请求可视为“简单请求”：

- 使用下列方法之一：
- GET
- HEAD
- POST
- Content-Type: (仅当POST方法的Content-Type值等于下列之一才算做简单需求)
- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

>注意: WebKit Nightly 和 Safari Technology Preview 为Accept
, Accept-Language
, 和 Content-Language
首部字段的值添加了额外的限制。如果这些首部字段的值是“非标准”的，WebKit/Safari 就不会将这些请求视为“简单请求”。WebKit/Safari 并没有在文档中列出哪些值是“非标准”的，不过我们可以在这里找到相关讨论：Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language, Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS, and Switch to a blacklist model for restricted Accept headers in simple CORS requests。其它浏览器并不支持这些额外的限制，因为它们不属于规范的一部分。

##### 2.需预检的请求

“需预检的请求”要求必须首先使用OPTIONS方法发起一个预检请求到服务区，以获知服务器是否允许该实际请求。“预检请求”的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

当请求满足下述任一条件时，即应首先发送预检请求：

使用了下面任一 HTTP 方法：
- PUT
- DELETE
- CONNECT
- OPTIONS
- TRACE
- PATCH

人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为：
- Accept
- Accept-Language
- Content-Language
- Content-Type
- DPR
- Downlink
- Save-Data
- Viewport-Width
- Width
- Content-Type的值不属于下列之一:
- application/x-www-form-urlencoded
- multipart/form-data
- text/plain

如下是一个需要执行预检请求的HTTP请求：

```sh
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';
    
function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PRODUCT', 'H5');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body); 
    }
}

......
```

上面的代码使用POST请求发送一个XML文档，该请求包含了一个自定义的首部字段（X-PRODUCT:H5）。另外，该请求的Content-Type为application/xml。因此，该请求需要首先发起“预检请求”。

![H4rJ29.png](https://s4.ax1x.com/2022/02/17/H4rJ29.png)
```sh
1. OPTIONS /resources/post-here/ 
2. HTTP/1.1
3. Host: bar.other
4. User-Agent: Mozilla/5.0 (Macintosh; U; 5.Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
6. Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
7. Accept-Language: en-us,en;q=0.5
8. Accept-Encoding: gzip,deflate
9. Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
10. Connection: keep-alive
11. Origin: http://foo.example
12. Access-Control-Request-Method: POST
13. Access-Control-Request-Headers: X-PINGOTHER, Content-Type


14. HTTP/1.1 200 OK
15. Date: Mon, 01 Dec 2008 01:15:39 GMT
16. Server: Apache/2.0.61 (Unix)
17. Access-Control-Allow-Origin: http://foo.example
18. Access-Control-Allow-Methods: POST, GET, OPTIONS
19. Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
20. Access-Control-Max-Age: 86400
21. Vary: Accept-Encoding, Origin
22. Content-Encoding: gzip
23. Content-Length: 0
24. Keep-Alive: timeout=2, max=100
25. Connection: Keep-Alive
26. Content-Type: text/plain
```

从上面的报文中可以看到，第1~12行发送了一个使用OPTIONS方法的预检请求。 OPTIONS是HTTP/1.1协议中定义的方法，用以从服务器获取更多信息。该方法不会对服务器资源产生影响。遇见请求中同时携带了下面两个首部字段：

```sh
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PRODUCT
```
首部字段 Access-Control-Request-Method 告知服务器，实际请求将使用 POST 方法。首部字段 Access-Control-Request-Headers 告知服务器，实际请求将携带两个自定义请求首部字段：X-PINGOTHER 与 Content-Type。服务器据此决定，该实际请求是否被允许。

第14~26行 为预检请求的响应，表明服务器将坚守后续的实际请求。重点看第17~20行：

```sh
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

首部字段 Access-Control-Allow-Methods 表明服务器允许客户端使用 POST,GET 和 OPTIONS 方法发起请求。

首部字段Access-Control-Allow-Headers 表明服务器允许请求中携带字段X-PINGOTHER 与Content-Type。与 Access-Control-Allow-Methods一样，Access-Control-Allow-Headers的值为逗号分割的列表。

最后，首部字段

Access-Control-Max-Age 表明该响应的有效时间为 86400 秒，也就是 24 小时。在有效时间内，浏览器无须为同一请求再次发起预检请求。请注意，浏览器自身维护了一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效。

预检请求完成之后，发送实际请求：

```sh
POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: http://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: http://foo.example
Pragma: no-cache
Cache-Control: no-cache

<?xml version="1.0"?><person><name>Arun</name></person>


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

[Some GZIP'd payload]
```