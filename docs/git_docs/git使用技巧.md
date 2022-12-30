## git使用技巧

### 一、git stash用法总结


#### 应用场景

经常会遇到这样的场景：当你正在一个分支上做开发任务，现在想切换到另外一个分支上去做一些工作，比如修改bug、继续之前的工作等等。但是，你现在还不想提交你正在进行的工作，这个时候`git stash`命令就排上用场了。具体简单操作：

```sh
$ git stash
Saved working directory and index state \
  "WIP on master: 049d078 added the index file"
HEAD is now at 049d078 added the index file
(To restore them type "git stash apply")
```
这样你的工作目录就干净了

```sh
$ git status
# On branch master
nothing to commit, working directory clean
```

这时，你可以方便地切换到其他分支工作；你的变更都保存在栈上。使用 `git stash list`查看储藏列表。

```sh
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

在这个案例中，之前已经进行了两次储藏，所以访问到三个不同的储藏。使用`git stash apply`就可以重新应用你刚刚的储藏。如果想应用更早的储藏，通过名字指定它，像这样：`git stash apply stash@{2}`。如果不指明，Git 默认使用最近的储藏并尝试应用它。

对文件的变更被重新应用，但是被暂存的文件没有重新被暂存。想那样的话，你必须在运行 `git stash apply` 命令时带上一个 `--index` 的选项来告诉命令重新应用被暂存的变更。如果你是这么做的，你应该已经回到你原来的位置。

```sh

$ git stash apply --index
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      modified:   index.html
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   lib/simplegit.rb
```

apply 选项只尝试应用储藏的工作——储藏的内容仍然在栈上。要移除它，运行 `git stash drop`，加上你希望移除的储藏的名字。

```sh
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
$ git stash drop stash@{0}
Dropped stash@{0} (364e91f3f268f0900bc3ee613f9f733e82aaed43)
```

也可以运行` git stash pop `来重新应用储藏，同时立刻将其从堆栈中移走。

#### 取消储藏(Un-applying a Stash)

在某些情况下，想应用储藏的修改，在进行了一些其他的修改后，又要取消之前所应用储藏的修改。Git没有提供类似于 stash unapply 的命令，但是可以通过取消该储藏的补丁达到同样的效果：

```sh
$ git stash show -p stash@{0} | git apply -R
```

同样的，如果你沒有指定具体的某个储藏，Git 会选择最近的储藏：

```sh
$ git stash show -p | git apply -R
```

你可能会想要新建一个別名，在你的 Git 里增加一个 `stash-unapply` 命令，这样更有效率。例如：

```sh
$ git config --global alias.stash-unapply '!git stash show -p | git apply -R'
$ git stash apply
$ #... work work work
$ git stash-unapply
```

#### 从储藏中创建分支

如果你储藏了一些工作，暂时不去理会，然后继续在你储藏工作的分支上工作，你在重新应用工作时可能会碰到一些问题。你会碰到一个归并冲突并且必须去化解它。如果你想用更方便的方法来重新检验你储藏的变更，你可以运行 git stash branch，这会创建一个新的分支，检出你储藏工作时的所处的提交，重新应用你的工作，如果成功，将会丢弃储藏。

```sh
$ git stash branch testchanges
Switched to a new branch "testchanges"
# On branch testchanges
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      modified:   index.html
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   lib/simplegit.rb
#
Dropped refs/stash@{0} (f0dfc4d5dc332d1cee34a634182e168c4efc3359)
```

这是一个很棒的捷径来恢复储藏的工作然后在新的分支上继续当时的工作。

#### git stash 暂存部分文件

```sh
git stash
```
什么参数不加，会分别对暂存区(没有add的)和工作区(add之后的)的状态进行保存。

```sh
git stash save "message"
```
save可以添加保存时的备注。示例:git stash save "完成user接口"

```sh
git stash
```

-k 或 –-keep-index只备份没有add的文件。示例`git stash save --keep-index "部分文件"`

#### git stash使用技巧

常规 git stash 的一个限制是它会一下暂存所有的文件。有时，只备份某些文件更为方便，让另外一些与代码库保持一致。一个非常有用的技巧，用来备份部分文件：

- add 那些你不想备份的文件（例如： git add file1.js, file2.js）
- 调用 git stash -–keep-index。只会备份那些没有被add的文件。
- 调用 git reset 取消已经add的文件的备份，继续自己的工作。

### 二、git使用技巧

#### Mac配置SourceTree SSH Key
 
- 查看SSH公钥
- 将ssh key添加到sourceTree

```javascript
ssh-add ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_rsa
```
- 将sshkey添加到钥匙串

```javascript
ssh-add -K ~/.ssh/id_ed25519
ssh-add -K ~/.ssh/id_rsa
```

git config --global credential.helper store
