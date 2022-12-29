#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:perfectSymphony/perfectSymphony.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://perfectSymphony.github.io/
  git config --global user.name "perfectSymphony"
  git config --global user.email "2066309334@qq.com"
fi

git init
git add -A
git commit -m "${msg}"

# 如果发布到 https://<USERNAME>.github.io
#git remote add origin git@github.com:perfectSymphony/perfectSymphony.github.io.git
#git push -u origin master

git push -f ${githubUrl} master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -