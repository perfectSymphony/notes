## css3中定位模型之position属性的使用方法

## 一、position元素介绍

| 属性值 | 描述 | 所属类别 |
| --------- | --------- | --------- |
| static| 默认值。没有定位，<br/>元素出现在正常的流中(忽略top,bottom,left,right或者z-index声明)| 
| relative| 元素遵循默认的文档流。<br/>相对于元素的原位置进行移动，周围元素忽略该元素的移动。<br/>需要设置top、bottom、left、right值进行定位| 相对定位
| absolute| 元素脱离正常的文档流<br/>相对于包含该元素的第一个非静态定位的元素进行定位，<br/>若不满足条件，则会根据最外层的window进行定位。<br/>需要设置top、bottom、left、right值进行定位| 绝对定位
| fixed| 元素脱离正常文档流。<br/>相对于最外层的window进行定位，固定在屏幕上的某个位置，不因屏幕滚动而消失。<br/>需要设置top、bottom、left、right值进行定位| 绝对定位(固定定位)
| inherit| 继承父元素的position值| 


设置position属性只会让元素脱离文档流，需要设置偏移属性使元素移动。包括4个偏移属性，分别为top、bottom、left、right。

具体描述如下表格所示：


| 偏移属性 | 描述 |
| --------- | --------- |
| left| 表示向元素左端插入多少距离，正值使元素右移多少距离。
| right| 表示向元素右端插入多少距离，正值使元素左移多少距离。
| bottom| 表示向元素下方插入多少距离，正值使元素上移多少距离。
| top| 表示向元素上方插入多少距离，正值使元素下移多少距离。


偏移属性的值可以为负值，负值时向相同方向移动。一般设置时设置一个或两个偏移量即可。

当元素中设置position为非默认值后，该元素会成为设定位置的元素。在元素变成设定位置后，就成为了最近的绝对定位后代元素的定位参考点，即该元素为设置为绝对定位子元素的第一个非静态定位的元素。

目前所有主流的浏览器都支持position属性的使用，但注意所有IE浏览器均不支持inherit属性值。


## 二、属性值详细介绍   

首先设置示例的显示内容，分别设定了三个div块元素，并分别设置class属性值。HTML源代码如下：  

```sh
<div class="div0">
    <div class="div1 div">This is div1.</div>
    <div class="div2 div">This is div2.</div>
    <div class="div3 div">This is div3.</div>
</div>
```

设置原始示例的显示效果，为了截图容易理解，将body设置为3px的红色边框。包围三个div块的大div块设置1px的黑边框，灰色的背景色以及50%的宽度。三个div块则设置相同的边框和100px的高度。CSS源代码如下：

```sh
body {
    border: 3px solid red;
}
.div0 {
    border: 1px solid black;
    width: 50%;
    background-color: #f0f0f0;
    margin: 50px;
}
.div {
    height: 100px;
    border: 1px solid black;
    margin: 20px;
    padding: 5px;
}
```

最终的示例效果图如下：

![aYs9wq.png](https://s1.ax1x.com/2020/08/02/aYs9wq.png)

1、**relative**——使元素相对于文档流的位置偏移一段距离

元素遵循默认的文档流，相对于元素的原位置进行移动，周围元素忽略该元素的移动。需要设置top、bottom、left、right的值进行相对定位。
举个栗子：设置第二个div块的position属性为relative，并且设置偏移量为向右偏移50px、向下偏移50px。

```sh
.div2 {
    background-color: #e0e0e0;
    position: relative;
    left: 50px;
    top: 50px;
}
```


可以看到如下效果图中，第一和第三块div块并没有移动位置，说明relative属性值使元素遵循默认的文档流。设置偏移量后，第二块div块则向右、向下分别偏移50px。

![aYsikV.png](https://s1.ax1x.com/2020/08/02/aYsikV.png)

```sh
.div2 {
    background-color: #e0e0e0;
    position: relative;
    left: -50px;
    top: 50px;
}
```
当设置左偏移量为-50px时，则如下图所示，第二元素块向左偏移了50px。

![aYsFYT.png](https://s1.ax1x.com/2020/08/02/aYsFYT.png)

2、**absolute**——使元素相对于文档流的位置或最近定位祖先元素的位置偏移一定的距离<br/>
元素脱离默认的文档流，相对于包含该元素的第一个非静态定位的元素进行定位。需要设置top、bottom、left、right值进行绝对定位。

对于元素，使用width、height可以设置它的尺寸，设定百分数是相对于最近定位祖先元素的尺寸。

举个栗子*2：设置第二个div块的position属性为absolute，并且设置偏移量为向右偏移50px、向下偏移50px。注意此时没有设置该元素的父元素的position值为非默认值。

```sh
.div2 {
    background-color: #e0e0e0;
    position: absolute;
    left: 20px;
    top: 20px;
}
```

可以从图中看到，第三块div元素向上移动，第二块元素脱离了原来的文档流。而在没有设置该元素的父元素的position值为非默认值时，第二块div元素块是相对于body的值来向右、向下偏移的。

![aYsEpF.png](https://s1.ax1x.com/2020/08/02/aYsEpF.png)


 再来看设置了该元素的父元素的position值为非默认值的情况。

 ```sh
.div0 {
    border: 1px solid black;
    width: 50%;
    background-color: #f0f0f0;
    margin: 50px;
    position: relative;
}
 ```
 当设置了该元素的父元素的position值为非默认值的情况时，此时的第二块div元素块则是相对于包含三个元素块的大div元素块来进行向右、向下的偏移。

![aYskfU.png](https://s1.ax1x.com/2020/08/02/aYskfU.png)

  3、**fixed**——使元素相对于视口偏移一定的距离<br/>

元素脱离默认的文档流，相对于最外层的window进行定位，固定在屏幕上的某个位置，不因屏幕滚动而消失。需要设置top、bottom、left、right值进行定位。

举个栗子*3：设置第二个div块的position属性为fixed，并且设置偏移量为向右偏移20px、向下偏移200px。

```sh
.div2 {
    background-color: #e0e0e0;
    position: fixed;
    right: 20px;
    top: 200px;
}
```

从图中看出，第二个div元素块的位置在右下角，是相对于视口进行了向左20px、向下200px的偏移。并且在页面滑动时，也会保持着同样的位置不变。

![aYsVl4.png](https://s1.ax1x.com/2020/08/02/aYsVl4.png)

## 三、Z-index

Z-index可用于设置元素之间的层叠顺序。只对于定位元素有效，即只对于position属性的属性值为absolute、relative和fixed有效。静态定位元素按照文档出现顺序从后往前进行堆叠。设定位置元素忽略文档出现顺序，根据z-index值由小到大的顺序从后往前堆叠，即Z-index的值越高表示元素显示的顺序越优先。设置为负值z-index的设定位置元素位于静态定位元素和非设定位置浮动元素之下。z-index值不必为连续值，其默认值为auto。当设置的值相同时，后加载的元素优先显示。<br/>

举个栗子*4：将relative示例的元素设置-index值为-1。

```sh
.div2 {
    background-color: #e0e0e0;
    position: relative;
    left: 50px;
    top: 50px;
    z-index: -1;
}
```

从图中可以看到，当元素的z-index设置为负值时，设定位置元素是位于静态定位元素之下，即是di第二个div元素的父元素div0的位置之下。

![aYseX9.png](https://s1.ax1x.com/2020/08/02/aYseX9.png)

## 四、实际应用——使用绝对定位显示二级菜单

使用无序列表和Flex布局导航栏菜单，HTML源代码如下：

```sh
<ul class="MenuWrap">
    <li id="ListItem1">
        <a href="#" class="ListItem" >Home</a>
        <ul class="MenuWrap2" id="MenuWrap2">
             <li><a href="#" class="ListItem2">Item1</a></li>
            <li><a href="#" class="ListItem2">Item2</a></li>
            <li><a href="#" class="ListItem2">Item3</a></li>
        </ul>
    </li>
    <li id="ListItem2"><a href="#" class="ListItem">About</a></li>
    <li id="ListItem3"><a href="#" class="ListItem">Products</a></li>
</ul> 
```

将包裹二级菜单的ul元素设置的position属性设置为非默认值relative。再将二级菜单的position属性设置为绝对定位，根据一级菜单的高度设置偏移量。并且将二级菜单的显示方式display属性设置为none值表示不显示。最后再通过JavaScript设置鼠标悬浮经过一级菜单栏时显示二级菜单栏。CSS源代码如下：

```sh
.MenuWrap {
    background-color: #f0f0f0;
    min-height: 2.75em;
    display: flex;
    align-items: center;
    list-style-type: none;
    position: relative;
}
.ListItem {
    color: black;
    text-decoration: none;
    padding:0px 20px;
}
ul.MenuWrap2 {
    padding: 0px;
}
.MenuWrap2 {
    list-style-type: none;
    background-color: #f0f0f0;
    min-width: 4.5em;
    text-align: center;
    position: absolute;
    top: 2.75em;
    display: none;
}
.MenuWrap2 li {
    padding-bottom: 5px;
}
.ListItem2 {
    color:black;
    text-decoration: none;
}
```

## 总结

元素的定位模型中需要区分每个属性值的不同定位方式，分为绝对定位、相对定位、固定定位以及默认定位和继承父元素。其中绝对定位和固定定位都脱离原本的文档流，而相对定位则遵循原本的文档流。设置元素的定位方式后，还需要指定偏移量。可以从上、右、下、左四个方向进行偏移。并且可以利用Z-index属性设置元素之间的层叠顺序。

定位模型是在CSS中设置元素位置的重要方式之一，使用该模型可以实现页面常用的菜单导航、悬浮公告等效果。

