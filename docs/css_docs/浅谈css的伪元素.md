## 浅谈css的伪元素

### 浅谈css的伪元素::after和::before

css中的::after和::before已经被大量地使用在我们日常开发中了，使用他们可以使我们的文档结构更加简洁。但是很多人对::after和::before仍不是特别了解，究竟他们是做什么的？如何使用他们？什么时候应该使用他们？笔者总结了一些对伪元素的理解和使用经验。

### 一、概念：

#### 1.定义

The CSS ::before(::after) pseudo-element matches a virtual first(last) child of the selected element. It is typically used to add cosmetic content to an element by using the content CSS property. This element is inline by default.

从定义我们知道::before和::after匹配一个虚拟元素，主要被用于为当前元素增加装饰性内容的。他显示的内容是其自身的“content”属性，默认是内联元素。

其实::after和::before被引入css中，最核心的目的，还是为了实现语义化。在我们实际开发时候经常有这样的经历，为了实现一些效果，在文档中创建了一些没有实际内容的节点，或者加入辅助样式的文本，如：

```sh
<style>
    ul{
        list-style: none;
    }
    li{
        display: inline;
    }
</style>
<nav>
    <ul>
        <li>HTML 5</li>
        <li>|</li>
        <li>CSS3</li>
        <li>|</li>
        <li>JavaScript</li>
    </ul>
</nav>
```

很明显，例子中的“|”仅是显示时候用的间隔符，没有实际的意义，而他所在的li元素仅是为了装饰才被创建的，本是不应该被创建在文档内的。那么能不能由样式（css）去创建出节点把他们代替掉呢？

出于这样的需求，就诞生了::after和::before，这两个伪元素相当于是对当前元素的装潢，他们并不是节点，不会出现在dom树中，但是在显示上具备节点的效果。我们使用::after和::before重构一下上边的代码：

```sh
<style>
    ul{
        list-style: none;
    }
    li{
        display: inline;
    }
    li:not(:last-child)::after{
        content: "|";
    }
</style>
<nav>
    <ul>
        <li>HTML 5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
    </ul>
</nav>
```
显示效果没有变化，但是文档结构变得清晰了多了。

### 2.使用

::after和::before的使用很简单，可以认为其所在元素上存在一前一后的两个的元素，这两个元素默认是内联元素，但我们可以为其增添样式。::after和::before使用的时候一定要注意，必须设置content，否则这两个伪元素是无法显示出来的。而content属性，会作为这两个伪元素的内容嵌入他们中。如：

```sh
<style>
    p:before{
        content: "H";
    p:after{
        content: "d";
    }
  </style>
  <p>ello Worl</p>
```

显示为完整的Hello World。

::after和::before是虚拟元素，不会影响真正元素的所在文档的位置，对:first-child或者:last-child这种伪类选择不会造成影响。

### 3.操作
::after和::before是虚拟节点，而不是正在的节点，不在documont里面找到对应Node对象，在之前的例子中，我们执行下列js代码：

```sh
console.log( document.querySelector("ul").childNodes)；
```

得到的是一个只有3个节点的NodeList对象，而两个伪元素并不在对象中。因为::after和::before不是真正的节点，所以我们取不到他们，也不发设置点击等用户事件。::after和::before虽然是不能设置事件，但还会捕获用户事件，并把事件“冒泡”到伪元素所在的元素上。之所以“冒泡”二字加了引号，是因为他不是真的冒泡，更准确的说::after和::before帮所在元素去捕获去事件，事件的srcElement对象是伪元素所在的元素，而不是伪元素本身。

document不能获取到::after和::before所对应的节点对象，但是可以通过css的接口获取其样式属性，如：

```sh
window.getComputedStyle(
    document.querySelector('li'), ':before'
)
```
返回是个CSSStyleDeclaration对象，可以获取当前的style值。

### 二、分享一些::after和::before使用的经验

以下例子多数是在特定平台上使用过的，未做兼容处理，建议在chrome下浏览

1.间隔符用法
如文章最开始的例子，使用::after伪元素做间隔符，并使用伪类:not排除掉最后一个元素。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example1.html)

2.做border三角图标
很多开发者都用过border做的三角图标，本身三角符号就不属于文档，使用伪元素做三角符最合适了。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example2.html)

3.字符图标
最近笔者在开发微信小程序，因为微信小程序不支持svg和背景图，于是笔者大量使用字符图标，感觉字符图标非常方便，就是受设备系统字体库限制。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example3.html)

4.webfont的图标
现在webfont图标的最佳实践就是使用i标签和::after或者::before，实现这种图标最佳实践的工具非常多，比如http://fontello.com/，从这个网站我们可以下载svg的图标库。这种例子太多了，这里就不再列举。

5.做单位、标签、表单必填标准
笔者一直认为表单输入框的必填标记（往往是红色的“*”字符），不应该放到文档当中，使用::before可以很优雅地解决这个问题（其实就是字符图标的进一步应用）。

对于单位和前（后）置标签，也可以这样做。但是多数情况下不推荐这种做法，因为单位和标签应该是文档的一部分。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example5.html)

6.做一些效果
可以参考《理解伪元素 :before 和 :after》这篇文章的效果，笔者曾经在实际项目中使用过“迷人的阴影”效果，也曾在微场景开发中实现过一些类似的动画。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example6.html)

7.实现一些标签对placeholder的支持
只有几个标签支持placeholder，而且如<input type='date' />虽然是input但是也不支持。使用::before可以让一部分标签也实现对placeholder属性的支持。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example7.html)

8.实现文字图片居中对齐
优雅地实现张鑫旭老师的inline-box居中方法，使用一个高度为100%的::before将自身的对齐线移动到自己的中线，这样里面的所有内联元素都居中对齐了。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example8.html)

9.清除浮动
这个很常用，bootstrap的clearfix类就是使用这个方法。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example9.html)

10.使用pointer-events消除伪元素事件
之前提到过，伪元素::after和::before会替所在元素捕获用户事件，有时候这并非我们想要的，因为这样会影响被::after和::before覆盖的子节点或者兄弟节点捕获用户事件，使用pointer-events可以消除这种问题。

[例子](http://htmlpreview.github.io/?https://github.com/laden666666/css-before-and-after-test/blob/master/example10.html)

所有例子的源码在[https://github.com/laden666666/css-before-and-after-test](https://github.com/laden666666/css-before-and-after-test)

简单就分享这么多，总之使用伪元素的核心是更利于语义化，这是我们活用::after和::before的前提，否则就是胡乱使用了。总体可以分为四种用法：

1.用css创建装饰性元素

2.用css创建用于布局的元素，实现特殊布局的特殊需要

3.做显示图标的实现手段

4.配合attr显示属性值