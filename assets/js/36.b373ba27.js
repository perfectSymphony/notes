(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{317:function(a,s,t){"use strict";t.r(s);var n=t(1),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"linux重启tomcat命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux重启tomcat命令"}},[a._v("#")]),a._v(" linux重启tomcat命令")]),a._v(" "),s("h4",{attrs:{id:"_1、进入到tomcat的bin目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、进入到tomcat的bin目录"}},[a._v("#")]),a._v(" 1、进入到tomcat的bin目录")]),a._v(" "),s("p",[a._v("使用ls命令，查看自己的目录文件")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /home/cattsoft/iona/apache-tomcat-7.0.82/bin （cd 后面接自己的环境目录）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2、启动tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动tomcat"}},[a._v("#")]),a._v(" 2、启动tomcat")]),a._v(" "),s("p",[a._v("运行bin目录下的启动命令脚本")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" startup.sh或者./startup.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"_3-查看tomcat进程是否启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看tomcat进程是否启动"}},[a._v("#")]),a._v(" 3.查看tomcat进程是否启动")]),a._v(" "),s("p",[a._v("使用 ps aux | grep tomcat     查看tomcat进程是否启动")]),a._v(" "),s("h4",{attrs:{id:"_4-关闭tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-关闭tomcat"}},[a._v("#")]),a._v(" 4.关闭tomcat")]),a._v(" "),s("p",[a._v("同样在tomcat的bin目录下，使用sh shutdown.sh可以关闭tomcat")]),a._v(" "),s("h4",{attrs:{id:"_5-重启tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-重启tomcat"}},[a._v("#")]),a._v(" 5.重启tomcat")]),a._v(" "),s("p",[a._v("重启可以理解为先关闭tomcat+再启动tomcat")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" shutdown.sh（关闭）\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" startup.sh或者./startup.sh（启动）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"_6-查看tomcat版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看tomcat版本"}},[a._v("#")]),a._v(" 6.查看tomcat版本")]),a._v(" "),s("p",[a._v("先进到tomcat的bin目录下（cd /tomcat目录/bin），在执行./version.sh")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s4.ax1x.com/2022/02/05/HmobXd.png",alt:"HmobXd.png"}})]),a._v(" "),s("h4",{attrs:{id:"_7-查看tomcat端口号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看tomcat端口号"}},[a._v("#")]),a._v(" 7.查看tomcat端口号")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1、查看tomcat进程")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" tomcat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2、根据进程号查看端口号")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-anop")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5517")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h4",{attrs:{id:"tomcat开启gzip原理介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat开启gzip原理介绍"}},[a._v("#")]),a._v(" tomcat开启Gzip原理介绍：")]),a._v(" "),s("p",[a._v("HTTP 压缩可以大大提高浏览网站的速度，它的原理是，在客户端请求服务器对应资源后，从服务器端将资源文件压缩，再输出到客户端，由客户端的浏览器负责解压缩并浏览。相对于普通的浏览过程HTML ,CSS,Javascript , Text ，它可以节省40%左右的流量。更为重要的是，它可以对动态生成的，包括CGI、PHP , JSP , ASP , Servlet,SHTML等输出的网页也能进行压缩，压缩效率也很高。")]),a._v(" "),s("h4",{attrs:{id:"nohup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[a._v("#")]),a._v(" nohup")]),a._v(" "),s("p",[a._v("Unix/Linux下一般想让某个程序在后台运行，很多都是使用&在程序结尾来让程序自动运行；但如果要想在退出终端后，程序依然还在后台运行，则要用nohup与&组合来实现。")]),a._v(" "),s("p",[s("strong",[a._v("nohup命令:")]),a._v("\n用途：不挂断地运行命令"),s("br"),a._v("\n语法：nohup Command [选项 参数]  &"),s("br"),a._v("\n描述：nohup 命令运行由 Command参数和任何相关的Arg参数指定的命令，忽略所有挂断（SIGHUP）信号。在注销后使用 nohup 命令运行后台中的程序：要运行后台中的 nohup 命令，需要添加&到命令的尾部。")]),a._v(" "),s("p",[a._v("日志记录：")]),a._v(" "),s("p",[a._v("无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的nohup.out 文件中。如果当前目录的nohup.out文件不可写，输出重定向到$HOME/nohup.out文件中。如果没有文件能创建或打开以用于追加，那么 Command 参数指定的命令不可调用。")]),a._v(" "),s("p",[a._v("使用时注意：")]),a._v(" "),s("p",[s("font",{attrs:{color:"#f00"}},[a._v("在当shell中提示了nohup成功后，还需要按终端上键盘任意键退回到shell输入命令窗口，然后通过在shell中输入exit来退出终端；")]),a._v("如果在nohup执行成功后直接点关闭程序按钮关闭终端的话，这时候会断掉该命令所对应的session，导致nohup对应的进程被通知需要一起shutdown，起不到关掉终端后调用程序继续后台运行的作用。")],1),a._v(" "),s("h3",{attrs:{id:"_8-mac下用brew安装mysql后无法kill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-mac下用brew安装mysql后无法kill"}},[a._v("#")]),a._v(" 8.mac下用brew安装mysql后无法kill")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用这个命令停止mac系统后台进程")]),a._v("\nbrew services stop mysql@5.7\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_9-linux常用文件备份命令-tar-cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-linux常用文件备份命令-tar-cp"}},[a._v("#")]),a._v(" 9.linux常用文件备份命令：tar，cp")]),a._v(" "),s("h4",{attrs:{id:"_1-tar-压缩与解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tar-压缩与解压"}},[a._v("#")]),a._v(" 1.tar（压缩与解压）")]),a._v(" "),s("p",[a._v("-c: 建立压缩档案"),s("br"),a._v("\n-x：解压"),s("br"),a._v("\n-t：查看内容"),s("br"),a._v("\n-r：向压缩归档文件末尾追加文件"),s("br"),a._v("\n-u：更新原压缩包中的文件"),s("br")]),a._v(" "),s("p",[a._v("这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。"),s("br")]),a._v(" "),s("p",[a._v("在压缩或解压档案时可选有："),s("br")]),a._v(" "),s("p",[a._v("-z：有gzip属性的"),s("br"),a._v("\n-j：有bz2属性的"),s("br"),a._v("\n-Z：有compress属性的"),s("br"),a._v("\n-v：显示所有过程"),s("br"),a._v("\n-O：将文件解开到标准输出"),s("br")]),a._v(" "),s("p",[a._v("必选参数：-f")]),a._v(" "),s("p",[a._v("-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -cf all.tar *.jpg")]),a._v("\n这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -rf all.tar *.gif")]),a._v("\n这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -uf all.tar logo.gif")]),a._v("\n这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -tf all.tar")]),a._v("\n这条命令是列出all.tar包中所有文件，-t是列出文件的意思\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -xf all.tar")]),a._v("\n这条命令是解出all.tar包中所有文件，-t是解开的意思\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("h4",{attrs:{id:"压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[a._v("#")]),a._v(" 压缩")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" jpg.tar *.jpg//将目录里所有jpg文件打包成tar.jpg \n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czf")]),a._v(" jpg.tar.gz *.jpg  //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，命名为jpg.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cjf")]),a._v(" jpg.tar.bz2 *.jpg 将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，命名为jpg.tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cZf")]),a._v(" jpg.tar.Z *.jpg   将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，命名为jpg.tar.Z\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rar")]),a._v(" a jpg.rar *.jpg //rar格式的压缩，需要先下载rar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" jpg.zip *.jpg //zip格式的压缩，需要先下载zip "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h4",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" file.tar //解压 tar包\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" file.tar.gz //解压tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xjvf")]),a._v(" file.tar.bz2   //解压 tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xZvf")]),a._v(" file.tar.Z   //解压tar.Z\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unrar")]),a._v(" e file.rar //解压rar\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" file.zip //解压zip\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("、*.tar 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("、*.gz 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" -d或者gunzip 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("、*.tar.gz和*.tgz 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzf")]),a._v(" 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("、*.bz2 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bzip2")]),a._v(" -d或者用bunzip2 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("、*.tar.bz2用tar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xjf")]),a._v(" 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("、*.Z 用 uncompress 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("、*.tar.Z 用tar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xZf")]),a._v(" 解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("、*.rar 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unrar")]),a._v(" e解压\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("、*.zip 用 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" 解压\n\n例：压缩某个目录  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" 压缩包名字   项目名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" AppStore_180808.tar  AppStore\n\n例：解压某个tar包\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" 压缩包名字\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" AppStore_180808.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("h4",{attrs:{id:"_2-cp-复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-cp-复制"}},[a._v("#")]),a._v(" 2.cp（复制）")]),a._v(" "),s("p",[a._v("cp 复制文件或者目录")]),a._v(" "),s("h4",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("p",[a._v("cp [ 选项 ] 源文件 目标文件"),s("br"),a._v("\n常用选项："),s("br"),a._v("\n-a：相当于pdr"),s("br"),a._v("\n-d：复制链接文件，目标文件也是指向源文件链接的链接文件或目录。"),s("br"),a._v("\n-i：目标文件已存在时，会询问是否覆盖"),s("br"),a._v("\n-p：连同档案的属性一起复制。常用于备份"),s("br"),a._v("\n-r：递归复制，用于复制目录"),s("br"),a._v("\n-s：复制为符号链接文件，也就是快捷方式，链接文件被删除，符号链接文件失效。"),s("br"),a._v("\n-l：进行硬式链接的连结档建立，而非复制档案本身，源文件删除，目标文件依旧在。"),s("br"),a._v("\n源文件："),s("br"),a._v("\n单个文件或者目录，复制目录用r选项。"),s("br"),a._v("\n多个文件或者目录，多个文件或者目录时，目标文件必须是一个已存在的目录。"),s("br"),a._v("\n注："),s("br"),a._v("\n在不是特权用户root下，一般用户使用cp时候，需要注意源文件的父目录是否有rx权限。文件是否有r权限。"),s("br"),a._v("\n一般用户用选项-a的时候，权限时间属性能复制到，但是用户和群组属性不能复制到。"),s("br"),a._v("\n示例："),s("br"),a._v("\nroot权限备份test1文件"),s("br"),a._v("\ncp -a test1 ./beifen"),s("br"),a._v("\n如果直接 备份目录的话，可以进行如下操作"),s("br"),a._v("\n指令如下："),s("br"),a._v("\ncp -pdf + 要备份的文件 + 备份后的文件"),s("br")])])}),[],!1,null,null,null);s.default=r.exports}}]);