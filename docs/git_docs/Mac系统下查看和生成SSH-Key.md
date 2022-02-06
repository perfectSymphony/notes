## Mac系统下查看和生成SSH-Key

### 一、打开vim（terminal.app）查看本地是否存在SSH-Key

```sh
ls -al ~/.ssh
```

 如果vim输出的是如下内容：证明本地没有生成的SSH Key，请执行第二步。

```sh
No such file or directory
```

如果vim输出的是如下内容： 证明本地已经存在SSH Key 文件，请执行第四步。

```sh
id_rsa        id_rsa.pub
```

### 二、如果没有，生成新的SSH Key

```sh
ssh-keygen -t rsa -C "you_email"
```
your_email：这里填写你在GitLab或者GitHub注册时的邮箱。
后面的提示直接敲回车，一路完成。

###  三、生成并添加SSH Key

```sh
ssh-add ~/.ssh/id_rsa
```

### 四、查看SSH Key

>cat /Users/xxx/.ssh/id_rsa.pub

复制生成好的SSH Key 添加到 GitLab 或者GitHub中的SSH Key中即可
