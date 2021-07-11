## CSS相关面试题

## 一、使一个盒子水平居中

目前有4种方式:

```sh
<!DOCTYPE html>
<html lang="en">
<style>
/* 宽度/高度已知 */

.box{
    width: 400px;
    height: 200px;
    position: relative;
    background: #f00;
}
.inner-box {
    width: 200px;
    height: 100px;
    position: absolute;
    background: #ff0;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -50px;
}

/* 第二种方式 */

.box {
    width: 500px;
    height: 300px;
    background: #f00;
    position: relative;
}

.inner-box {
    width: 100px;
    height: 50px;
    background: #ff0;
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}

/* flex布局 */

.box {
    width: 400px;
    height: 200px;
    background: #f00;
    display: flex;
    /* 实现水平居中 */
    justify-content: center; 
    /* 实现垂直居中 */
    align-items: center;
}

.inner-box {
    width: 200px;
    height: 100px;
    background: #ff0;
}

/* 平移 定位+transform (宽度、高度未知时，上下左右居中) */

.box {
    width: 400px;
    height: 200px;
    background: #f00;
    position: relative;
}
.inner-box {
    background:#f90;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
<body>
    <div class="box">
        <div class="inner-box">
          content
        </div>
    </div>
</body>
</html>
```

二、盒模型
1、盒模型分为标准盒模型和怪异盒模型(IE盒模型)

标准盒模型：盒模型的宽高只是内容的宽高；
怪异盒模型：盒模型的宽高是内容(content) + 填充(padding) +边框(border)的总宽度。

现代浏览器和IE9+默认值是content-box。

2、CSS如何设置两种模型

```sh
# 标准盒模型
box-sizing: content-box;

# IE 模型
border-sizing: border-box;
```

最终盒子实际所占位置大小计算公式是这样的：

盒子所占位置的实际宽度=宽度+左填充+右填充+左边框+右边框+左边界+右边界

盒子所占位置的实际高度=高度+顶部填充+底部填充+上边框+下边框+上边界+下边界

要注意区分的是盒子所占位置的实际宽度高度值和盒子实际大小的宽度和高度值，盒子实际大小的宽度和高度是所占位置实际宽度高度的值减去边界（margin）所占的大小，即

盒子的实际宽度=宽度+左填充+右填充+左边框+右边框

盒子的实际高度=高度+顶部填充+底部填充+上边框+下边框

盒子模型的3D示意图，如下图所示，padding与margin是看不见的透明元素

从第一层到第五层依次为：border、content+padding、background-image、background-color、margin。

![D14WjK.png](https://s3.ax1x.com/2020/11/21/D14WjK.png)

### 例如一个盒子的 margin 为 20px，border 为 1px，padding 为 10px,content 的宽为 200px、高为50px

假如用标准 w3c 盒子模型解释，那么这个盒子需要占据的位置为：

```sh
宽 20*2+1*2+10*2+200=262px、高20*2+1*2*10*2+50=112px

盒子的实际大小为：宽1*2+10*2+200=222px、高1*2+10*2+50=72px
```
假如用ie 盒子模型，那么这个盒子需要占据的位置为：

```sh
宽 20*2+200=240px、高20*2+50=70px

盒子的实际大小为：宽 200px、高 50px
```

## 浏览器兼容问题
由于IE浏览器使用自己的非标准模型。IE浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。解决IE8及更早版本不兼容问题可以在HTML页面声明 即可。就是要在网页的顶部加上DOCTYPE声明。

二、实现三栏布局(两侧定宽，中间自适应)

```sh
<style>
    /* flex方式实现 */
    .box {
        display: flex;
        # justify-content: center;
        height: 200px;
    }
    .left {
        width: 200px;
        background: #f00;
        height: 100%;
    }
    .center {
        background: #f90;
        flex: 1;
    }
    .right {
        width: 200px;
        background: #ff0;
    }
</style>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
```

```sh
<style>
    /* 浮动方式，此方式 content 必须放在最下边 */
    .box {
        height: 200px;
    }
    .left {
        width: 200px;
        background: #f00;
        height: 100%;
        float: left;
    }
    .center {
        background: #f90;
        height: 100%;
    }
    .right {
        width: 200px;
        float: right;
        height: 100%;
        background: #ff0;
    }
</style>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="right"></div>
        <div class="center"></div>
    </div>
</body>
```

```sh
<style>
    /* 绝对定位的方式实现 */
    .box {
        position: relative;
        height: 200px;
    }
    .left {
        width: 200px;
        background: #f00;
        height: 100%;
        position: absolute;
        left: 0;
    }
    .center {
        background: #f90;
        height: 100%;
        position: absolute;
        left: 200px;
        right: 200px;
    }
    .right {
        width: 200px;
        height: 100%;
        position: absolute;
        right: 0;
        background: #ff0;
    }
</style>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
```

```sh
<style>
    /* grid网格布局 */
    .box {
        display: grid;
        grid-template-columns: 200px auto 200px;
        grid-template-rows: 200px;
    }
    .left {
        background: #f00;
    }
    .center {
        background: #f90;
    }
    .right {
        background: #ff0;
    }
</style>
<body>
    <div class="box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </div>
</body>
```

## 只要一行代码实现CSS五种经典布局

> 以下这几个布局都是自适应的，自动适配桌面设备和移动设备。代码实现简单、实用，核心代码只有一行。
我会用到 CSS 的 [Flex 语法](flex.md)和 [Grid 语法](flex.md)。


### 一、空间居中布局

空间居中布局：不管容器的大小，项目总是占据中心点。

CSS代码如下([CodePen 示例](https://codepen.io/una/pen/YzyYbBx))

```sh
.container { display: grid; place-items: center; }
```

上面代码需要写在容器上，指定为 Grid 布局。核心代码是place-items属性那一行，它是一个简写形式。

```sh
place-items: <align-items> <justify-items>;
```

`align-items`属性控制垂直位置，`justify-items`属性控制水平位置。这两个属性的值一致时，就可以合并写成一个值。所以，`place-items: center;`等同于`place-items: center center;`。

同理，左上角布局可以写成下面这样。

```sh
place-items: start;
```

![](https://s1.ax1x.com/2020/09/16/wgWuIU.jpg)

右下角布局:
```sh
place-items: end;
```
![](https://s1.ax1x.com/2020/09/16/wgWmZV.jpg)


## 二、并列式布局

并列式布局就是多个项目并列

![](https://s1.ax1x.com/2020/09/16/wgWMiF.jpg)

如果宽度不够，放不下的项目就自动折行。

![](https://s1.ax1x.com/2020/09/16/wgWnaT.jpg)


![](https://s1.ax1x.com/2020/09/16/wgWkxs.jpg)

它的实现也很简单。首先，容器设置成 Flex 布局，内容居中（justify-content）可换行（flex-wrap）。

```sh
.container { display: flex; flex-wrap: wrap; justify-content: center; }
```

然后，项目上面只用一行flex属性就够了（[CodePen 示例](https://codepen.io/una/pen/WNQdBza)）。

```sh
.item{ flex: 0 1 150px; margin: 5px; }
```

`flex`属性是`flex-grow`、`flex-shrink`、`flex-basis`这三个属性的简写形式。

```sh
flex: <flex-grow> <flex-shrink> <flex-basis>;
```

`flex: 0 1 150px;`的意思就是，项目的初始宽度是150px，且不可以扩大，但是当容器宽度不足150px时，项目可以缩小。

![](https://s1.ax1x.com/2020/09/16/wgWMiF.jpg)

![](https://s1.ax1x.com/2020/09/16/wgWtZ6.jpg)

## 三、两栏式布局

两栏式布局就是一个边栏，一个主栏。

![](https://s1.ax1x.com/2020/09/16/wgWNdK.jpg)

下面的实现是，边栏始终存在，主栏根据设备宽度，变宽或者变窄。如果希望主栏自动换到下一行，可以参考上面的"并列式布局"。

![](https://s1.ax1x.com/2020/09/16/wgWQG4.jpg)

使用 Grid，实现很容易（[CodePen 示例](https://codepen.io/una/pen/gOaNeWL)）。

```sh
.container { display: grid; grid-template-columns: minmax(150px, 25%) 1fr; }
```

上面代码中，`grid-template-columns`指定页面分成两列。第一列的宽度是`minmax(150px, 25%)`，即最小宽度为`150px`，最大宽度为总宽度的25%；第二列为`1fr`，即所有剩余宽度。


四、三明治布局

三明治布局指的是，页面在垂直方向上，分成三部分：页眉、内容区、页脚。

![](https://s1.ax1x.com/2020/09/16/wgWGs1.jpg)

这个布局会根据设备宽度，自动适应，并且不管内容区有多少内容，页脚始终在容器底部（粘性页脚）。也就是说，这个布局总是会占满整个页面高度。

![](https://s1.ax1x.com/2020/09/16/wgWJqx.jpg)

CSS 代码如下（[CodePen 示例](https://codepen.io/una/pen/bGVXPWB)）

```sh
.container { display: grid; grid-template-rows: auto 1fr auto; }
```

上面代码写在容器上面，指定采用 Grid 布局。核心代码是grid-template-rows那一行，指定垂直高度怎么划分，这里是从上到下分成三部分。第一部分（页眉）和第三部分（页脚）的高度都为auto，即本来的内容高度；第二部分（内容区）的高度为1fr，即剩余的所有高度，这可以保证页脚始终在容器的底部。

### 五、圣杯布局

圣杯布局是最常用的布局，所以被比喻为圣杯。它将页面分成五个部分，除了页眉和页脚，内容区分成左边栏、主栏、右边栏。

这里的实现是，不管页面宽度，内容区始终分成三栏。如果宽度太窄，主栏和右边栏会看不到。如果想将这三栏改成小屏幕自动堆叠，可以参考并列式布局。

![](https://s1.ax1x.com/2020/09/16/wgWlRJ.jpg)

CSS 代码如下（[CodePen 示例](https://codepen.io/una/pen/mdVbdBy)）

```sh
.container { display: grid; grid-template: auto 1fr auto / auto 1fr auto; }
```

上面代码要写在容器上面，指定采用 Grid 布局。核心代码是`grid-template`属性那一行，它是两个属性`grid-template-rows`（垂直方向）和`grid-template-columns`（水平方向）的简写形式。

```sh
grid-template: <grid-template-rows> / <grid-template-columns>
```


`grid-template-rows`和`grid-template-columns`都是`auto 1fr auto`，就表示页面在垂直方向和水平方向上，都分成三个部分。第一部分（页眉和左边栏）和第三部分（页脚和右边栏）都是本来的内容高度（或宽度），第二部分（内容区和主栏）占满剩余的高度（或宽度）。

### 六、CSS开启GPU的方法及可能触发的问题

目前对提升移动端css3动画体验的主要方法有几点：

尽可能多的利用硬件能力，如使用3d变形来开启GPU加速

```sh
-webkit-transform: translate3d(0, 0, 0);
-moz-transform: translate3d(0, 0, 0);
-ms-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```

开启GPU硬件加速之后，有些时候可能会导致浏览器频繁闪烁或抖动，可以尝试以下办法解决之：

```sh
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
backface-visibility: hidden;

-webkit-perspective: 1000;
-moz-perspective: 1000;
-ms-perspective: 1000;
perspective: 1000;
```
