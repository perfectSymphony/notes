(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{387:function(t,a,s){"use strict";s.r(a);var e=s(45),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git常见问题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git常见问题总结"}},[t._v("#")]),t._v(" Git常见问题总结")]),t._v(" "),s("h3",{attrs:{id:"一、git-提示fatal-remote-origin-already-exists-错误解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git-提示fatal-remote-origin-already-exists-错误解决办法"}},[t._v("#")]),t._v(" 一、Git 提示fatal: remote origin already exists 错误解决办法")]),t._v(" "),s("p",[t._v("1、先删除远程 Git 仓库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("2、再添加远程 Git 仓库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:FBing/java-code-generator\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("3、如果执行 git remote rm origin 报错的话，我们可以手动修改gitconfig文件的内容")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" .git/config\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"二、git在commit时报错fatal-unable-to-auto-detect-email-address的解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、git在commit时报错fatal-unable-to-auto-detect-email-address的解决办法"}},[t._v("#")]),t._v(" 二、git在commit时报错fatal: unable to auto-detect email address的解决办法")]),t._v(" "),s("blockquote",[s("p",[t._v("关于这个问题，我最开始在百度上查的，看别人的方法是直接修改.git文件夹中的config文件，后来我想想，我记得在文档上看过，非常不建议直接修改.git文件夹下的文件。")])]),t._v(" "),s("blockquote",[s("p",[t._v("其实大家仔细观察的话，在git日志里已经给出了解决办法，请看下图：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s4.ax1x.com/2022/02/02/HENHu6.png",alt:"HENHu6.png"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);