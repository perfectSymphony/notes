## flex为1的含义

### 参考文章

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)<br/>
[Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)<br/>
[grid布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 一. flex是由三个属性组成:

### 1. flex-grow: 存在剩余空间, 为正, 分配
属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。在「flex」属性中该值如果被省略则默认为1.
 
### 取值：
number：用数值来定义扩展比率。不允许负值
 
适用于：flex子项
 
### 说明：
设置或检索弹性盒的扩展比率。
根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间。

eg:
[![rOzZeU.jpg](https://s3.ax1x.com/2020/12/30/rOzZeU.jpg)](https://imgchr.com/i/rOzZeU)

[![rOztTe.jpg](https://s3.ax1x.com/2020/12/30/rOztTe.jpg)](https://imgchr.com/i/rOztTe)

## 2. flex-shrink: 不存在剩余空间, 为负, 计算收缩比例
属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。
 
## 取值：
number：用数值来定义收缩比率。不允许负值
 
适用于：flex子项
 
## 说明：
设置或检索弹性盒的收缩比率。
根据弹性盒子元素所设置的收缩因子作为比率来收缩空间。

[![rOzcTg.jpg](https://s3.ax1x.com/2020/12/30/rOzcTg.jpg)](https://imgchr.com/i/rOzcTg)

[![rOz70U.jpg](https://s3.ax1x.com/2020/12/30/rOz70U.jpg)](https://imgchr.com/i/rOz70U)

## 3. flex-basis: 分配剩余空间前, 定义宽度
属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
在「flex」属性中该值如果被省略则默认为「0%」
在「flex」属性中该值如果被指定为「auto」，则伸缩基准值的计算值是自身的 <' width '> 设置，如果自身的宽度没有定义，则长度取决于内容。
 
### 取值：
length：用长度值来定义宽度。不允许负值
percent：用百分比来定义宽度。不允许负值
auto：无特定宽度值，取决于其它属性值
content：基于内容自动计算宽度
 
适用于：flex子项
 
### 说明：
设置或检索弹性盒伸缩基准值。
如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间
对应的脚本特性为flexBasis。


## 二. flex:
## 说明：
复合属性。设置或检索弹性盒模型对象的子元素如何分配空间。
如果缩写「flex: 1」, 则其计算值为「1 1 0%」
如果缩写「flex: auto」, 则其计算值为「1 1 auto」
如果「flex: none」, 则其计算值为「0 0 auto」
如果「flex: 0 auto」或者「flex: initial」, 则其计算值为「0 1 auto」，即「flex」初始值 

 

flex属性默认是0 1 auto
flex-grow为0，则存在剩余空间也不放大
flex-shrink为1，则空间不足该项目缩小
flex-basis为auto，则该项目本来的大小

 

eg1:

页面设计中用到了flex:1, 具体什么意思呢, 说说我自己的理解.

[![rXS1hj.jpg](https://s3.ax1x.com/2020/12/30/rXS1hj.jpg)](https://imgchr.com/i/rXS1hj)

解析:

flex-grow:1; 有剩余空间, 分配

flex-shrink:1; 没有剩余空间, 收缩

flex-basis:0%; 没有基础宽度


[![rXS7vt.jpg](https://s3.ax1x.com/2020/12/30/rXS7vt.jpg)](https://imgchr.com/i/rXS7vt)

## 三、flex的兼容写法

这种兼容写法不一定起效的。尤其是在底版本安卓系统中。因为什么呢?

>所有都是向下兼容的，所以写法的顺序一定要写好了才起作用(尤其是兼容低版本安卓系统更需要注意顺序问题)。就是把旧语法写在底下，个别不兼容的移动设置才会识别，哪些是旧的语法，你懂的。那些带box的一定要写在最下面即可。

- 盒子的兼容性写法

```sh
.box{
    display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
    display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */
    display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;      /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;   /* 混合版本语法: IE 10 */  
}
```
- 子元素的兼容性写法

```sh
.flex1 {  
    -webkit-flex: 1;        /* Chrome */  
    -ms-flex: 1             /* IE 10 */  
    flex: 1;                /* NEW, Spec - Opera 12.1, Firefox 20+ */
    -webkit-box-flex: 1     /* OLD - iOS 6-, Safari 3.1-6 */  
    -moz-box-flex: 1;       /* OLD - Firefox 19- */   
}
```