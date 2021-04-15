## CSS中的BFC详解

## 一、何为BFC

BFC（Block Formatting Context）格式化上下文，是web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

## 二、形成BFC的条件

1、浮动元素，float除none以外的值。<br />
2、定位元素，position（absolute、fixed）。<br />
3、display为以下其中之一的值inline-block、table-cell、table-caption。<br />
4、overflow除了 visible 以外的值（hidden、auto、scroll）。<br />

## 三、BFC的特性

1、内部的Box会在垂直方向上一个接一个的放置。<br />
2、垂直方向上的距离由margin决定。<br />
3、bfc的区域不会与float的元素区域重叠。<br />
4、计算bfc的高度时，浮动元素也参与计算。<br />
5、bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。<br />

下面使用案例来帮助认识理解：

## 四、实践是检验真理的唯一标准

### （1）BFC中的盒子对齐

特性的第一条是：内部的Box（块级元素）会在垂直方向上一个接一个的放置。（即便不在BFC里块级盒子也会垂直排列）

### （2）外边距折叠

特性的第二条：垂直方向上的距离由margin决定
在常规文档流中，两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。

![](https://s1.ax1x.com/2020/08/02/aYrzOs.th.png)

html:

```sh
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
```

css: 

```sh
    .container {
        overflow: hidden;
        width: 100px;
        height: 100px;
        background-color: red;
    }
    
    .box1 {
        height: 20px;
        margin: 10px 0;
        background-color: green;
    }
    
    .box2 {
        height: 20px;
        margin: 20px 0;
        background-color: green;
    }
```
这里我门可以看到，第一个子盒子有上边距（不会发生margin穿透的问题）；两个子盒子的垂直距离为20px而不是30px，因为垂直外边距会折叠，间距以较大的为准。

 那么有没有方法让垂直外边距不折叠呢？答案是：有。特性的第5条就说了：bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素，同样外面的元素不会影响到BFC内的元素。所以就让box1或box2再处于另一个BFC中就行了。

 ![](https://s1.ax1x.com/2020/08/02/aYrxyj.th.png)

 html:

 ```sh
     <div class="container">
        <div class="wrapper">
            <div class="box1"></div>
        </div>
        <div class="box2"></div>
    </div>
```

css:

```sh
    .container {
        overflow: hidden;
        width: 100px;
        height: 100px;
        background-color: red;
    }
    
    .wrapper {
        overflow: hidden;
    }
    
    .box1 {
        height: 20px;
        margin: 10px 0;
        background-color: green;
    }
    
    .box2 {
        height: 20px;
        margin: 20px 0;
        background-color: green;
    }
```

### （3）不被浮动元素覆盖 

以常见的两栏布局为例。

左边固定宽度，右边不设宽，因此右边的宽度自适应，随浏览器窗口大小的变化而变化。

![](https://s1.ax1x.com/2020/08/02/aYrvlQ.md.png)

html:

```sh
    <div class="column"></div>
    <div class="column"></div>
```

css: 

```sh
    .column:nth-of-type(1) {
        float: left;
        width: 200px;
        height: 300px;
        margin-right: 10px;
        background-color: red;
    }
    
    .column:nth-of-type(2) {
        overflow: hidden;/*创建bfc */
        height: 300px;
        background-color: purple;
    }
```

三栏布局:

左右两边固定宽度，中间不设宽，因此中间的宽度自适应，随浏览器的大小变化而变化。

![1.4](https://s1.ax1x.com/2020/08/02/aYspmn.th.png)

html:

```sh
    <div class="contain">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
```

css: 

```sh
    .column:nth-of-type(1),
    .column:nth-of-type(2) {
        float: left;
        width: 100px;
        height: 300px;
        background-color: green;
    }
    
    .column:nth-of-type(2) {
        float: right;
    }
    
    .column:nth-of-type(3) {
        overflow: hidden;  /*创建bfc*/
        height: 300px;
        background-color: red;
    }
```

也可以用来防止字体环绕：

众所周知，浮动的盒子会遮盖下面的盒子，但是下面盒子里的文字是不会被遮盖的，文字反而还会环绕浮动的盒子。

![aYrjSg.png](https://s1.ax1x.com/2020/08/02/aYrjSg.png)

html:

```sh
    <div class="left"></div>
    <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
       你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
       你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
    </p>
```

css:

(1) 环绕

```sh
    .left {
        float: left;
        width: 100px;
        height: 100px;
        background-color: yellow;
    }
    
    p {
        background-color: green;
        /* overflow: hidden; */
    }
```

（2）利用bfc防止环绕

```sh
    .left {
        float: left;
        width: 100px;
        height: 100px;
        background-color: yellow;
    }
    
    p {
        background-color: green;
        overflow: hidden;
    }
```

（4）BFC包含浮动的块

利用overflow:hidden清除浮动，因为浮动的盒子无法撑出处于标准文档流的父盒子的height。这个就不过多解释了。

如果你有任何想要补充的欢迎[issues](https://github.com/perfectSymphony/FrontEnd-interview/issues)
