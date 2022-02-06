## linux重启tomcat命令

#### 1、进入到tomcat的bin目录

使用ls命令，查看自己的目录文件

```sh
cd /home/cattsoft/iona/apache-tomcat-7.0.82/bin （cd 后面接自己的环境目录）
```

#### 2、启动tomcat

运行bin目录下的启动命令脚本

```sh
sh startup.sh或者./startup.sh
```

#### 3.查看tomcat进程是否启动

使用 ps aux | grep tomcat     查看tomcat进程是否启动


#### 4.关闭tomcat

同样在tomcat的bin目录下，使用sh shutdown.sh可以关闭tomcat

#### 5.重启tomcat

重启可以理解为先关闭tomcat+再启动tomcat

```sh
sh shutdown.sh（关闭）
sh startup.sh或者./startup.sh（启动）
```
#### 6.查看tomcat版本

先进到tomcat的bin目录下（cd /tomcat目录/bin），在执行./version.sh

![HmobXd.png](https://s4.ax1x.com/2022/02/05/HmobXd.png)

#### 7.查看tomcat端口号

```sh
# 1、查看tomcat进程
 ps -ef | grep tomcat

# 2、根据进程号查看端口号
netstat -anop | grep 5517
```

#### tomcat开启Gzip原理介绍：

HTTP 压缩可以大大提高浏览网站的速度，它的原理是，在客户端请求服务器对应资源后，从服务器端将资源文件压缩，再输出到客户端，由客户端的浏览器负责解压缩并浏览。相对于普通的浏览过程HTML ,CSS,Javascript , Text ，它可以节省40%左右的流量。更为重要的是，它可以对动态生成的，包括CGI、PHP , JSP , ASP , Servlet,SHTML等输出的网页也能进行压缩，压缩效率也很高。