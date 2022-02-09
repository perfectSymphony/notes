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

#### nohup

Unix/Linux下一般想让某个程序在后台运行，很多都是使用&在程序结尾来让程序自动运行；但如果要想在退出终端后，程序依然还在后台运行，则要用nohup与&组合来实现。

<strong>nohup命令:</strong>
用途：不挂断地运行命令<br/>
语法：nohup Command [选项 参数]  &<br/>
描述：nohup 命令运行由 Command参数和任何相关的Arg参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序：要运行后台中的 nohup 命令，需要添加&到命令的尾部。

日志记录：

无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的nohup.out 文件中。如果当前目录的nohup.out文件不可写，输出重定向到$HOME/nohup.out文件中。如果没有文件能创建或打开以用于追加，那么 Command 参数指定的命令不可调用。

使用时注意：

<font color='#f00'>在当shell中提示了nohup成功后，还需要按终端上键盘任意键退回到shell输入命令窗口，然后通过在shell中输入exit来退出终端；</font>如果在nohup执行成功后直接点关闭程序按钮关闭终端的话，这时候会断掉该命令所对应的session，导致nohup对应的进程被通知需要一起shutdown，起不到关掉终端后调用程序继续后台运行的作用。

### 8.mac下用brew安装mysql后无法kill

```sh
# 使用这个命令停止mac系统后台进程
brew services stop mysql@5.7
```
### 9.linux常用文件备份命令：tar，cp

#### 1.tar（压缩与解压）

-c: 建立压缩档案<br/>
-x：解压<br/>
-t：查看内容<br/>
-r：向压缩归档文件末尾追加文件<br/>
-u：更新原压缩包中的文件<br/>

这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。<br/>

在压缩或解压档案时可选有：<br/>

-z：有gzip属性的<br/>
-j：有bz2属性的<br/>
-Z：有compress属性的<br/>
-v：显示所有过程<br/>
-O：将文件解开到标准输出<br/>

必选参数：-f

-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

```sh
# tar -cf all.tar *.jpg
这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。

# tar -rf all.tar *.gif
这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。

# tar -uf all.tar logo.gif
这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。

# tar -tf all.tar
这条命令是列出all.tar包中所有文件，-t是列出文件的意思

# tar -xf all.tar
这条命令是解出all.tar包中所有文件，-t是解开的意思
```

#### 压缩

```sh
tar -cvf jpg.tar *.jpg//将目录里所有jpg文件打包成tar.jpg 

tar -czf jpg.tar.gz *.jpg  //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，命名为jpg.tar.gz

tar -cjf jpg.tar.bz2 *.jpg 将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，命名为jpg.tar.bz2

tar -cZf jpg.tar.Z *.jpg   将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，命名为jpg.tar.Z

rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux

zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux
```

#### 解压

```sh
tar -xvf file.tar //解压 tar包

tar -xzvf file.tar.gz //解压tar.gz

tar -xjvf file.tar.bz2   //解压 tar.bz2

tar -xZvf file.tar.Z   //解压tar.Z

unrar e file.rar //解压rar

unzip file.zip //解压zip
```

#### 总结
```sh
1、*.tar 用 tar -xvf 解压

2、*.gz 用 gzip -d或者gunzip 解压

3、*.tar.gz和*.tgz 用 tar -xzf 解压

4、*.bz2 用 bzip2 -d或者用bunzip2 解压

5、*.tar.bz2用tar -xjf 解压

6、*.Z 用 uncompress 解压

7、*.tar.Z 用tar -xZf 解压

8、*.rar 用 unrar e解压

9、*.zip 用 unzip 解压

例：压缩某个目录  
tar -cvf 压缩包名字   项目名
tar -cvf AppStore_180808.tar  AppStore

例：解压某个tar包
tar -xvf 压缩包名字
tar -xvf AppStore_180808.tar
```

#### 2.cp（复制）

cp 复制文件或者目录
#### 语法
cp [ 选项 ] 源文件 目标文件<br/>
常用选项：<br/>
-a：相当于pdr<br/>
-d：复制链接文件，目标文件也是指向源文件链接的链接文件或目录。<br/>
-i：目标文件已存在时，会询问是否覆盖<br/>
-p：连同档案的属性一起复制。常用于备份<br/>
-r：递归复制，用于复制目录<br/>
-s：复制为符号链接文件，也就是快捷方式，链接文件被删除，符号链接文件失效。<br/>
-l：进行硬式链接的连结档建立，而非复制档案本身，源文件删除，目标文件依旧在。<br/>
源文件：<br/>
单个文件或者目录，复制目录用r选项。<br/>
多个文件或者目录，多个文件或者目录时，目标文件必须是一个已存在的目录。<br/>
注：<br/>
在不是特权用户root下，一般用户使用cp时候，需要注意源文件的父目录是否有rx权限。文件是否有r权限。<br/>
一般用户用选项-a的时候，权限时间属性能复制到，但是用户和群组属性不能复制到。<br/>
示例：<br/>
root权限备份test1文件<br/>
cp -a test1 ./beifen<br/>
如果直接 备份目录的话，可以进行如下操作<br/>
指令如下：<br/>
cp -pdf + 要备份的文件 + 备份后的文件<br/>