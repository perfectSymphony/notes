## html相关面试题

### 一、什么是HTML语义化标签

语义化的标签，说明让标签有自己的含义。

```html
<p>一行文字</p>
<span>一行文字</span>
```

如上代码，p 标签与 span 标签都区别之一就是，p 标签的含义是：段落。而 span 标签则没有独特的含义。

二、语义化标签的特点

代码结构清晰，方便阅读，有利于团队合作开发。

方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。

有利于搜索引擎优化（SEO）。

便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

三、常见的语义化标签

因此我们在写页面结构时，应尽量使用有 语义的HTML 标签

`<title>`：页面主体内容。

`<hn>`：h1~h6，分级标题，`<h1>` 与 `<title>` 协调有利于搜索引擎优化。

`<ul>`：无序列表。

`<ol>`：有序列表。

`<header>`：页眉通常包括网站标志、主导航、全站链接以及搜索框。

`<nav>`：标记导航，仅对文档中重要的链接群使用。

`<main>`：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。

`<article>`：定义外部的内容，其中的内容独立于文档的其余部分。

`<section>`：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

`<aside>`：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。

`<footer>`：页脚，只有当父级是body时，才是整个页面的页脚。

`<small>`：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。

`<strong>`：和 em 标签一样，用于强调文本，但它强调的程度更强一些。

`<em>`：将其中的文本表示为强调的内容，表现为斜体。

`<mark>`：使用黄色突出显示部分文本。

`<figure>`：规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。

`<figcaption>`：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。

`<cite>`：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。

`<blockquoto>`：定义块引用，块引用拥有它们自己的空间。

`<q>`：短的引述（跨浏览器问题，尽量避免使用）。

`<time>`：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。

`<abbr>`：简称或缩写。

`<dfn>`：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。

`<del>`：移除的内容。

`<ins>`：添加的内容。

`<code>`：标记代码。

`<meter>`：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）

`<progress>`：定义运行中的进度（进程）。

### 二、什么是回流，什么是重绘，有什么区别？

#### html 加载时发生了什么

在页面加载时，浏览器把获取到的HTML代码解析成1个DOM树，DOM树里包含了所有HTML标签，包括display:none隐藏，还有用JS动态添加的元素等。
浏览器把所有样式(用户定义的CSS和用户代理)解析成样式结构体
DOM Tree 和样式结构体组合后构建render tree, render tree类似于DOM tree，但区别很大，因为render tree能识别样式，render tree中每个NODE都有自己的style，而且render tree不包含隐藏的节点(比如display:none的节点，还有head节点)，因为这些节点不会用于呈现，而且不会影响呈现的，所以就不会包含到 render tree中。我自己简单的理解就是DOM Tree和我们写的CSS结合在一起之后，渲染出了render tree。

#### 什么是回流

当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候，这时候是一定会发生回流的，因为要构建render tree。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

#### 什么是重绘

当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。

#### 区别

回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流
当页面布局和几何属性改变时就需要回流
比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变

#### 扩展：

能得知回流比重绘的代价要更高，<font color="red">回流的花销与render tree有多少节点需要重新构建有关系</font>
因为这些机制的存在，所以浏览器会帮助我们优化这些操作，浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流重绘变成一次回流重绘。

#### 触发重排途径

##### 添加、删除或改变元素的可见性
使用JavaScript更改DOM会导致回流

##### 添加、删除或改变css样式
直接应用CSS样式或者类名都可能会改变布局。比如更改元素的宽度会影响同一DOM树及其周围的所有元素

##### CSS3 animations 和 transitions

动画的每一帧都会引起回流

##### 用offsetWidth 和 offsetHeight

读取元素的`offsetWidth`和`offsetHeight`属性会触发回流来计算属性值。

##### 用户行为

一些用户行为会触发回流，比如：hover、在输入框中输入文本、调整窗口大小、更改字体大小、切换样式表或字体。

####    减少回流和重绘的技巧

减少回流、重绘其实就是需要减少对render tree的操作，并减少对一些style信息的请求。

具体方法：
##### 1、不要1个1个改变元素的样式属性，最好直接改变className，但className是预先定义好的样式，不是动态的，如果你要动态改变一些样式，则使用cssText来改变，见下面代码：
```sh
// 不好的写法  
var left = 1;  
var top = 1;  
el.style.left = left + "px";  
el.style.top  = top  + "px";  
 
// 比较好的写法   
el.className += " className1";  
 
// 比较好的写法   
el.style.cssText += "; left: " + left + "px; top: " + top + "px;"; 
```

##### 2、让要操作的元素进行"离线处理"，处理完后一起更新，这里所谓的"离线处理"即让元素不存在于render tree中，比如：
a) 使用documentFragment或div等元素进行缓存操作，这个主要用于添加元素的时候，大家应该都用过，就是先把所有要添加的元素添加到1个div(这个div也是新加的)，最后才把这个div append到body中。

b) 先display:none 隐藏元素，然后对该元素进行所有的操作，最后再显示该元素。因对display:none的元素进行操作不会引起回流、重绘。所以只要操作只会有2次回流。

##### 3、不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，就先读取到变量中进行缓存，以后用的时候直接读取变量就可以了，见下面代码：

```sh
// 别这样写  
for(循环) {  
    elel.style.left = el.offsetLeft + 5 + "px";  
    elel.style.top  = el.offsetTop  + 5 + "px";  
}  
 
// 这样写好点  
var left = el.offsetLeft,top = el.offsetTop,s = el.style;  
for(循环) {  
    left += 10;  
    top  += 10;  
    s.left = left + "px";  
    s.top  = top  + "px";  
}
```

##### 4、操作会影响到render tree中的多少节点以及影响的方式，影响越多，花费肯定就越多。比如现在很多人使用jquery的animate方法移动元素来展示一些动画效果，想想下面2种移动的方法：

```sh

// block1是position:absolute 定位的元素，它移动会影响到它父元素下的所有子元素。  
// 因为在它移动过程中，所有子元素需要判断block1的z-index是否在自己的上面，  
// 如果是在自己的上面,则需要重绘,这里不会引起回流  
$("#block1").animate({left:50});  
// block2是相对定位的元素,这个影响的元素与block1一样，但是因为block2非绝对定位  
// 而且改变的是marginLeft属性，所以这里每次改变不但会影响重绘，  
// 还会引起父元素及其下元素的回流  
$("#block2").animate({marginLeft:50});
```

##### 使用最佳布局方案

不要使用内联样式和table布局！
内联样式会在下载HTML时影响布局，并触发额外的reflow。
table布局开销很大，因为解析器需要多次传递去计算单元格维度，使用table时应用fixed定位有一定的优化效果，因为列的宽度是基于标题行的内容。
主页面布局应用flexbox也会有性能影响，因为在HTML下载的时候，flex items的位置和尺寸可能会变化。

##### 最小化CSS规则的数量
css规则越少，重排越快，要尽量避免复杂的css选择器。
如果您使用的是Bootstrap这样的框架，那么这一点尤其成问题——很少有站点使用了框架提供的所有样式。像Unused CSS、uCSS、grunt-uncss和gulp-uncss这样的工具可以显著减少样式定义和文件大小。

##### 最小化DOM层级
稍微复杂一点——减小DOM树大小和每个分支的元素数量。文档越小越浅，回流越快。如果不需要支持古老的浏览器，可以删除不必要的包裹元素

##### 从文档流中移除复杂的动效

通过使用`position: absolute;` 或者 `position: fixed;`来使有动效的元素脱离文档流，这可以在不影响文档流中的其它元素的情况下更新尺寸和位置。

##### 更新隐藏的元素
通过`display: none;`来隐藏的元素在改变时不会触发重绘和重排，可以的话，在元素可见之前进行更改。

#### 行内元素和块级元素的区别

**1）、行内元素**

①：设置宽高无效

②：对margin设置左右方向有效，而上下无效，padding设置都无效

③：不会自动换行

**2）、块级元素**

①：可以设置宽高

②：设置margin和padding都有效

③：可以自动换行

④：多个块状，默认排列从上到下

#### JS

数字递归求和：

```sh
function sum (n){
    if(n == 0) return 0;
    return n + sum(n-1)
}
console.log(sum(100))
```
