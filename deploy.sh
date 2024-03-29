#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config --global user.email "2066309334@qq.com"
git config --global user.name "perfectSymphony"


git init
git add -A
git commit -m "deploy"

# 如果发布到 https://<USERNAME>.github.io
git remote add origin git@github.com:perfectSymphony/notes.git
#git push -u origin master

git branch -M master

git push -f git@github.com:perfectSymphony/perfectSymphony.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -