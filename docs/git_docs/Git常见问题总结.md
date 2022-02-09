## Git常见问题总结

### 一、Git 提示fatal: remote origin already exists 错误解决办法

1、先删除远程 Git 仓库

```sh
$ git remote rm origin
```

2、再添加远程 Git 仓库

```sh
$ git remote add origin git@github.com:FBing/java-code-generator
```

3、如果执行 git remote rm origin 报错的话，我们可以手动修改gitconfig文件的内容

```sh
$ vi .git/config
```

### 二、git在commit时报错fatal: unable to auto-detect email address的解决办法

> 关于这个问题，我最开始在百度上查的，看别人的方法是直接修改.git文件夹中的config文件，后来我想想，我记得在文档上看过，非常不建议直接修改.git文件夹下的文件。

> 其实大家仔细观察的话，在git日志里已经给出了解决办法，请看下图：

![HENHu6.png](https://s4.ax1x.com/2022/02/02/HENHu6.png)

### npm audit fix

```sh
npm audit ： npm@5.10.0 & npm@6，允许开发人员分析复杂的代码，并查明特定的漏洞和缺陷。

npm audit fix ：npm@6.1.0,  检测项目依赖中的漏洞并自动安装需要更新的有漏洞的依赖，而不必再自己进行跟踪和修复。
```

1. 运行audit fix，但是只更新pkglock， 不更新node_modules：

```sh
npm audit fix --package-lock-only
```

2. 只更新dependencies中安装的包，跳过devDependencies中的包：

```sh
npm audit fix --only=prod
```

3. 运行命令，得到audit fix将会更新的内容，并且输出json格式的安装信息，但是并不真的安装更新：

```sh
npm audit fix --dry-run --json
```

4. 得到json格式的详细检测报告

```sh
npm audit --json
```

### Mac下彻底卸载node和npm

1、使用brew安装的，可以使用`brew uninstall node`

2、官网下载pkg安装包的，可以使用`sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`

3、其他路子安装的

写个脚本，命名为：uninstallnode.sh
```sh
#!/bin/bash
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \
| while read i; do
  sudo rm /usr/local/${i}
done
sudo rm -rf /usr/local/lib/node \
     /usr/local/lib/node_modules \
     /var/db/receipts/org.nodejs.*
```

修改文件权限 `chmod 777 uninstallNodejs.sh`
在命令行执行

<strong>Tips：</strong>
<br/>
这些东西删完了，node就算删除了。
但是还有好多基于node安装的一堆软件和命令行工具，也需要重新安装，例如 react-native, supervisor,pm2 etc
需要删除/usr/local/bin 下面相关的文件，其实它们只是些软连接，正主都在 /usr/local/lib/node_modules/ 目录下。
在之前的步骤中，已经被删除了，但是按 tab键还能找到，就是因为这些软连接还存在