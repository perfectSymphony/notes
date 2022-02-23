## 如何将本地项目上传到Github

### 第一步：我们需要先创建一个本地的版本库（其实也就是一个文件夹）

### 第二步：在命令行中输入git init把这个文件夹变成Git可管理的仓库

  这时你会发现test里面多了个.git文件夹，它是Git用来跟踪和管理版本库的，因为它默认是隐藏文件，要是看不到就设置下文件夹和搜索选项。

  之后把需要上传到GitHub的文件全部复制到这test这个目录下。

  然后通过git add .(注意这个"."，是有空格的，"."代表这个test这个文件夹下的目录全部都提交。你也可以通过git add 文件名  提交指定的文件)把文件添加到缓存区。

  然后，在使用命令git commit -m "这里面写你的注释"  把文件提交的本地仓库


### 第三步：下面就到了连接远程仓库（也就是连接Github）


  由于本地Git仓库和Github仓库之间的传输是通过SSH加密的，所以连接时需要设置一下：

　　创建SSH KEY。先看一下你C盘用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建

```sh
$ ssh-keygen -t rsa -C "youremail@example.com"
```
  然后一路回车。这时你就会在用户下的.ssh目录里找到id_rsa和id_rsa.pub这两个文件。

## 第四步：登录Github,找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，点击右上角的New SSH key，然后Title里面随便填，再把刚才id_rsa.pub里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密。具体步骤也可看下面：  

![bPwzdI.png](https://s4.ax1x.com/2022/02/23/bPwzdI.png)

上面key默认在C:\Users\Administrator\.ssh下的id_rsa.pub文件中，把这个文件中的内容全部复制到上面的key里面就可以了。

### 第五步：在Github上创建一个Git仓库。

 你可以直接点New repository来创建，比如我创建了一个tes2t的仓库。

![bP08OJ.png](https://s4.ax1x.com/2022/02/23/bP08OJ.png)

上面我没有默认勾选Initialize this repository with a README，勾选和不勾选创建的结果区别如下：

![bP0BlD.png](https://s4.ax1x.com/2022/02/23/bP0BlD.png)

下边这个是勾选的

![bP0RtP.png](https://s4.ax1x.com/2022/02/23/bP0RtP.png)

### 第六步：在Github上创建好Git仓库之后我们就可以和本地仓库进行关联了，根据创建好的Git仓库页面的提示，可以在本地test仓库的命令行输入：

```sh
$ git remote add origin git@github.com:smfx1314/test2.git
```

### 第七步：关联好之后我们就可以把本地库的所有内容推送到远程仓库（也就是Github）上了，通过：

```sh
$ git push -u origin master
```
由于新建的远程仓库是空的，所以要加上-u这个参数。然后进去GitHub test2这个仓库刷新下就会有已经上传的文件夹了。

![bPBpnJ.png](https://s4.ax1x.com/2022/02/23/bPBpnJ.png)

如果新建远程仓库不是空的，例如你勾选了 Initialize this repository with a README。那么你通过命令

```sh
$ git push -u origin master是会报错的，如下：
```
![bPBZcD.png](https://s4.ax1x.com/2022/02/23/bPBZcD.png)

这是由于你新创建的那个仓库里面的README文件不在本地仓库目录中，这时我们可以通过以下命令先将内容合并以下：

```sh
$ git pull --rebase origin master
```

![bPBNuQ.png](https://s4.ax1x.com/2022/02/24/bPBNuQ.png)

再输入

```sh
$ git push origin master。
```

等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需下面这样就可以了：

```sh
$ git push origin master。
```
至此就完成了将本地项目上传到Github的整个过程。