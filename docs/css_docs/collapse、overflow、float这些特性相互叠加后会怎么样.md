## collapse、overflow、float这些特性相互叠加后会怎么样

## position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？

这是寒冬大神提出的一个题目，刚开始看到这题的时候完全不知道从什么地方回答起好，题目内容比较广泛，找不到针对点。后来我觉得这个题目应该能拆成几个点来回答：1、'display'、'position' 和 'float' 的相互关系；2、position跟display、overflow、float下的margin collapse。

## 一、'display'、'position' 和 'float' 的相互关系

首先我们先来看下这3个属性。<br/>
display 属性规定元素应该生成的框的类型。 block 象块类型元素一样显示，none 缺省值。象行内元素类型一样显示， inline-block 象行内元素一样显示，但其内容象块类型元素一样显示，list-item 象块类型元素一样显示，并添加样式列表标记（display 还有很多其他值设置，读者自行查找）。<br/>
 position 属性规定元素的定位类型。 absolute表示生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位；fixed（老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位；relative生成相对定位的元素，相对于其正常位置进行定位；static  默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。<br/>
 Float也是是一种布局方式，它定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。 在布局过程中也经常会使用它来达到左右并排布局的效果。<br/>
那么这三种布局和框形成的关键特性( display )之间有什么关系呢，请看下面流程图：<br/>


![aYsltK.png](https://s1.ax1x.com/2020/08/02/aYsltK.png)

转换对应表：


| 设定值 | 计算值 | 
| --------- | --------- | 
| inline-table| table
| inline, run-in, table-row-group, table-column, table-column-group, table-header-group, table-footer-group, table-row, table-cell, table-caption, inline-block| block
| 其他| 同设定值

总的来说，可以把它看作是一个类似优先级的机制， "position:absolute" 和 "position:fixed" 优先级最高，有它存在的时候，浮动不起作用，'display' 的值也需要调整； 其次，元素的 'float' 特性的值不是 "none" 的时候或者它是根元素的时候，调整 'display' 的值； 最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display' 特性值同设置值。<br/>

这从另一个侧面说明了一个问题：浮动或绝对定位的元素，只能是块元素或表格。<br/>

**1. 'display' 的值为 'none'**

如果 'display' 的值为 'none'，那么 'position' 和 'float' 不起作用。在这种情况下，元素不产生框。因此浮动和定位无效。

**2. 'position' 的值是 'absolute' 或 'fixed'**

否则，如果 'position' 的值是 'absolute' 或 'fixed'，框就是绝对定位的，'float' 计算后的值应该是 'none'，并且，'display' 会被按照上表设置。 框的位置将由 'top'，'right'，'bottom' 和 'left' 属性和该框的包含块确定。<br/>

也就是说，当元素是绝对定位时，浮动失效，'display' 会被按规则重置。<br/>

示例代码：

```sh
<script type="text/javascript">
    function getStyle(obj, style) {
       var _style = (style == "float") ? "styleFloat" : style;
       return document.defaultView ? document.defaultView.getComputedStyle(obj, null).getPropertyValue(style) : obj.currentStyle[_style.replace(/-[a-z]/g, function() {
           return arguments[0].charAt(1).toUpperCase();
       })];
    }
    window.onload = function() {
       document.getElementById("info").innerHTML = "float : " + getStyle(document.getElementById("test"), "float") +
               "<br/>display : " + getStyle(document.getElementById("test"), "display");
    }
</script>
<div id="test" style="position:absolute; float:left;display:inline;"></div>
<div id="info"></div>
```

上面代码中有一个既是绝对定位又是浮动的元素，以上代码可取出其 'display' 和 'float' 的计算值。<br/>

IE 中，'float' 值和 'display' 的特性值未发生变化，还是 "float: left; display: inline"。<br/>

其他浏览器中计算后的结果是："float: none; display: block"。<br/>

**3. 'float' 的值不是 "none"**

如果 'float' 的值不是 "none"，该框浮动并且 'display' 会被按照转换对应表设置。

```sh
<!DOCTYPE html>
<script type="text/javascript">
    function getStyle(obj, style) {
       var _style = (style == "float") ? "styleFloat" : style;
       return document.defaultView ? document.defaultView.getComputedStyle(obj, null).getPropertyValue(style) : obj.currentStyle[_style.replace(/-[a-z]/g, function() {
           return arguments[0].charAt(1).toUpperCase();
       })];
    }
    window.onload = function() {
       document.getElementById("info").innerHTML = "display : " + getStyle(document.getElementById("test"), "display");
    }
</script>
<span id="test" style="width:100px; height:100px; border:1px solid red;float:left;">float span</span>
<div id="info"></div>
```

按照规则，SPAN 是行内元素，因此不能够设置其宽度和高度。但是浮动后，'display' 值按照转换对应表设置后，成为块级元素。

![aYsnmR.png](https://s1.ax1x.com/2020/08/02/aYsnmR.png)


其他浏览器中：

![aYsu01.png](https://s1.ax1x.com/2020/08/02/aYsu01.png)

**4. 元素是根元素**

如果元素是根元素，'display' 的值按照转换对应表设置。

**5. 否则，应用指定的 'display' 特性值**。


## 二、position跟display、overflow、float下的margin collapse。


margin collapse我觉得这里的意思应该是Collapsing margins，即外边距折叠，指的是毗邻的两个或多个外边距 (margin) 会合并成一个外边距。<br/>

其中所说的 margin 毗邻，可以归结为以下两点：<br/>

 - 这两个或多个外边距没有被非空内容、padding、border 或 clear 分隔开。<br/>
 - 这些 margin 都处于普通流中。<br/>

 **1.两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠**。

 注意一点，在没有被分隔开的情况下，一个元素的 margin-top 会和它普通流中的第一个子元素(非浮动元素等)的 margin-top 相邻； 只有在一个元素的 height 是 "auto" 的情况下，它的 margin-bottom 才会和它普通流中的最后一个子元素(非浮动元素等)的 margin-bottom 相邻。<br/>

 示例代码：

 ```sh
<div style="border:1px solid red; width:100px;">
    <div style="margin:50px 0; background-color:green; height:50px; width:50px;">
       <div style="margin:20px 0;">
           <div style="margin:100px 0;">B</div>
       </div>
    </div>
</div>
 ```

 效果图：


![aYsKTx.png](https://s1.ax1x.com/2020/08/02/aYsKTx.png)


 以上代码中，margin 会把 B 的包含块撑开。<br/>

如果一个元素的 height 特性的值不是 auto，那么它的 margin-bottom 和它子元素的 margin-bottom 不算相邻，因此，不会发生折叠。 margin-top 没有此限制，所以是 100px，margin-bottom 没有折叠，只有 50px。<br/>

垂直方向<br/>

是指具体的方位，只有垂直方向的 margin 才会折叠，也就是说，水平方向的 margin 不会发生折叠的现象。<br/>

**折叠后 margin 的计算**

**1). 参与折叠的 margin 都是正值**

例子：

```sh
<div style="height:50px; margin-bottom:50px;width:50px; background-color: red;">A</div>
<div style="height:50px;margin-top:100px; width:50px; background-color: green;">B</div>
```

示意图：

![aYsQk6.png](https://s1.ax1x.com/2020/08/02/aYsQk6.png)

在 margin 都是正数的情况下，取其中 margin 较大的值为最终 margin 值。

**2). 参与折叠的 margin 都是负值**


当 margin 都是负值的时候，取的是其中绝对值较大的，然后，从 0 位置，负向位移。

示例代码：

```sh
<div style="height:100px; margin-bottom:-75px;width:100px; background-color: red;">A</div>
<div style="height:100px;margin-top:-50px; margin-left:50px; width:100px; background-color: green;">B</div>
```

示意图：

![aYs1fO.png](https://s1.ax1x.com/2020/08/02/aYs1fO.png)

**3). 参与折叠的 margin 中有正值，有负值**


如果，毗邻的 margin 中有正值，同时存在负值会怎样呢？有正有负，先取出负 margin 中绝对值中最大的，然后，和正 margin 值中最大的 margin 相加。


示例代码：

```sh
<div style="height:50px; margin-bottom:-50px;width:50px; background-color: red;">A</div>
<div style="height:50px;margin-top:100px; width:50px; background-color: green;">B</div>
```

示意图：

![aYs8pD.png](https://s1.ax1x.com/2020/08/02/aYs8pD.png)

上面的例子最终的 margin 应该是 100 + (-50) = 50px。

**4). 相邻的 margin 要一起参与计算，不得分步计算**

要注意，相邻的元素不一定非要是兄弟节点，父子节点也可以，即使不是兄弟父子节点也可以相邻。

而且，在计算时，相邻的 margin 要一起参与计算，不得分步计算。

一个复杂的实例：

```sh
<div style="margin:50px 0;background-color:green; width:50px;">
    <div style="margin:-60px 0;">
           <div style="margin:150px 0;">A</div>
    </div>
</div>
<div style="margin:-100px 0;background-color:green; width:50px;">
    <div style="margin:-120px 0;>
           <div style="margin:200px 0;">B</div>
    </div>
</div>
```

错误的计算方式：算 A 和 B 之间的 margin，分别算 A 和其父元素的折叠，然后与其父元素的父元素的折叠，这个值算出来之后，应该是 90px。依此法算出 B 的为 80px；然后，A和B折叠，margin 为 90px。

请注意，多个 margin 相邻折叠成一个 margin，所以计算的时候，应该取所有相关的值一起计算，而不能分开分步来算。

以上例子中，A 和 B 之间的 margin 折叠产生的 margin，是6个相邻 margin 折叠的结果。将其 margin 值分为两组：

正值：50px，150px，200px
负值：-60px，-100px，-120px
根据有正有负时的计算规则，正值的最大值为 200px，负值中绝对值最大的是 -120px，所以，最终折叠后的 margin 应该是 200 + (-120) = 80px。


**2.浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠**

浮动元素的 margin 在垂直方向上也不会发生 margin 折叠，即使和它相邻的子元素也不会。

```sh
<div style="margin-bottom:50px;width:50px; height:50px; background-color:green;">A</div>
<div style="margin-top:50px; width:100px; height:100px; background-color:green; float:left;">
    <div style="margin-top:50px;background-color:gold;">B</div>
</div>
```

示意图：

![aYsG1e.png](https://s1.ax1x.com/2020/08/02/aYsG1e.png)

两个绿色的块儿之间，相距100px，而若 B 和它的浮动包含块发生 margin 折叠的话，金色的条应该位于绿色块的最上方，显然，没有发生折叠。inline-block 元素、绝对定位元素的 margin同样如此， 不会和垂直方向上其他元素的 margin 折叠。

**3.创建了块级格式化上下文的元素，不和它的子元素发生 margin 折叠**

以 “overflow : hidden” 的元素为例：

```sh
<div style="margin-top:50px; width:100px; height:100px; background-color:green; overflow:hidden;">
    <div style="margin-top:50px; background-color:gold;">B</div>
</div>
```

若 B 和它的 "overflow:hidden" 包含块发生 margin 折叠的话，金色的条应该位于绿色块的最上方，否则，没有发生。

示意图：

![aYsJ6H.png](https://s1.ax1x.com/2020/08/02/aYsJ6H.png)

**4.元素自身的 margin-bottom 和 margin-top 相邻时也会折叠**

自身 margin-bottom 和 margin-top 相邻，只能是自身内容为空，垂直方向上 border、padding 为 0。

示例：

```sh
<div style="border:1px solid red; width:100px;">
    <div style="margin-top: 100px;margin-bottom: 50px;></div>
</div>
```

以上代码运行后，我们讲得到的是红色边框的正方形，方框的宽高都应该是 100px，高度不应该是 150px。

示意图：

![aYsYXd.png](https://s1.ax1x.com/2020/08/02/aYsYXd.png)


 参考资料来源: [http://www.w3help.org/zh-cn/](http://www.w3help.org/zh-cn/)