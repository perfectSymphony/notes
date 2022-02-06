## Nginx的gzip配置参数

　首先浏览器请求某个 URL 地址，并在请求的头 (head) 中设置属性 accept-encoding 值为 gzip, deflate，表明浏览器支持 gzip 和 deflate 这两种压缩方式;<br/>
    WEB 服务器接收到请求后判断浏览器是否支持压缩，如果支持就传送压缩后的响应内容，否则传送不经过压缩的内容;浏览器获取响应内容后，判断内容是否被压缩，如果是则解压缩，然后显示响应页面的内容。<br/>
　　在实际的应用中我们发现压缩的比率往往在 3 到 10 倍，也就是本来 50k 大小的页面，采用压缩后实际传输的内容大小只有 5 至 15k 大小，这可以大大节省服务器的网络带宽，同时如果应用程序的响应足够快时，网站的速度瓶颈就转到了网络的传输速度上，因此内容压缩后就可以大大的提升页面的浏览速度。

#### 配置启用gzip

```sh
gzip on;
gzip_min_length  5k;
gzip_buffers     4 16k;
#gzip_http_version 1.0;
gzip_comp_level 3;
gzip_types       text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary on;

# :wq保存退出，重新加载Nginx

/usr/local/nginx/sbin/nginx -s reload
```

#### gzip
决定是否开启gzip模块
param:on|off
example:gzip on;

#### gzip_buffers 
设置gzip申请内存的大小,其作用是按块大小的倍数申请内存空间
param1:int
param2:int(k) 后面单位是k
example: gzip_buffers 4 8k;

#### gzip_comp_level
设置gzip压缩等级，等级越底压缩速度越快文件压缩比越小，反之速度越慢文件压缩比越大
param:1-9
example:gzip_com_level 1;

#### gzip_min_length
当返回内容大于此值时才会使用gzip进行压缩,以K为单位,当值为0时，所有页面都进行压缩
param:int
example:gzip_min_length 1000;

#### gzip_http_version
用于识别http协议的版本，早期的浏览器不支持gzip压缩，用户会看到乱码，所以为了支持前期版本加了此选项,目前此项基本可以忽略
param: 1.0|1.1
example:gzip_http_version 1.0

#### gzip_proxied
Nginx做为反向代理的时候启用，
param:off|expired|no-cache|no-sotre|private|no_last_modified|no_etag|auth|any]
expample:gzip_proxied no-cache;
off – 关闭所有的代理结果数据压缩
expired – 启用压缩，如果header中包含”Expires”头信息
no-cache – 启用压缩，如果header中包含”Cache-Control:no-cache”头信息
no-store – 启用压缩，如果header中包含”Cache-Control:no-store”头信息
private – 启用压缩，如果header中包含”Cache-Control:private”头信息
no_last_modified – 启用压缩，如果header中包含”Last_Modified”头信息
no_etag – 启用压缩，如果header中包含“ETag”头信息
auth – 启用压缩，如果header中包含“Authorization”头信息
any – 无条件压缩所有结果数据

#### gzip_types
设置需要压缩的MIME类型,非设置值不进行压缩
param:text/html|application/x-javascript|text/css|application/xml
example:gzip_types text/html;

#### Demo
gzip on;
gzip_min_length 1000;
gzip_buffers 4 8k;
gzip_types text/html application/x-javascript text/css application/xml;

#### 使用curl测试

```sh
curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/"

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Sun, 26 Aug 2012 18:13:09 GMT
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
X-Powered-By: PHP/5.2.17p1
X-Pingback: http://www.slyar.com/blog/xmlrpc.php
Content-Encoding: gzip

页面成功压缩

 

curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/wp-content/plugins/photonic/include/css/photonic.css"

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Sun, 26 Aug 2012 18:21:25 GMT
Content-Type: text/css
Last-Modified: Sun, 26 Aug 2012 15:17:07 GMT
Connection: keep-alive
Expires: Mon, 27 Aug 2012 06:21:25 GMT
Cache-Control: max-age=43200
Content-Encoding: gzip

css文件成功压缩

curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/wp-includes/js/jquery/jquery.js"

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Sun, 26 Aug 2012 18:21:38 GMT
Content-Type: application/x-javascript
Last-Modified: Thu, 12 Jul 2012 17:42:45 GMT
Connection: keep-alive
Expires: Mon, 27 Aug 2012 06:21:38 GMT
Cache-Control: max-age=43200
Content-Encoding: gzip

js文件成功压缩

curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/wp-content/uploads/2012/08/2012-08-23_203542.png"

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Sun, 26 Aug 2012 18:22:45 GMT
Content-Type: image/png
Last-Modified: Thu, 23 Aug 2012 13:50:53 GMT
Connection: keep-alive
Expires: Tue, 25 Sep 2012 18:22:45 GMT
Cache-Control: max-age=2592000
Content-Encoding: gzip

图片成功压缩

curl -I -H "Accept-Encoding: gzip, deflate" "http://www.slyar.com/blog/wp-content/plugins/wp-multicollinks/wp-multicollinks.css"

HTTP/1.1 200 OK
Server: nginx/1.0.15
Date: Sun, 26 Aug 2012 18:23:27 GMT
Content-Type: text/css
Content-Length: 180
Last-Modified: Sat, 02 May 2009 08:46:15 GMT
Connection: keep-alive
Expires: Mon, 27 Aug 2012 06:23:27 GMT
Cache-Control: max-age=43200
Accept-Ranges: bytes

最后来个不到1K的文件，由于我的阈值是1K，所以没压缩
```