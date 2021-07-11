## display:inline-block元素之间空隙的产生原因和解决办法

在CSS布局中，如果我们想要将一些元素在同一行显示，其中的一种方法就是把要同行显示的元素设置display属性为inline-block。但是你会发现这些同行显示的inline-block元素之间会出现一定的空隙。

![RWbPaT.png](https://z3.ax1x.com/2021/07/04/RWbPaT.png)

代码： 

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        body {
            margin: 0;
        }
 
        .box1,.box2 {
            width: 200px;
            height: 200px;
            border: 1px solid;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>
</html>
```

原因： 

元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式(默认是normal,空白会被浏览器忽略)，HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。

解决办法：

一、删除元素之间的空白符
缺点:代码可读性差

代码：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        body {
            margin: 0;
        }
 
        .box1,.box2 {
            width: 200px;
            height: 200px;
            border: 1px solid;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="box1">box1</div><div class="box2">box2</div>
</body>
</html>
```

二、在父元素中设置font-size: 0,在子元素上重新设置正确的font-size

缺点：inline-block的元素必须设定字体大小，不然行内元素中的字体不会显示,且增加了代码量

代码:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        body {
            margin: 0;
            font-size: 0;
        }
 
        .box1,.box2 {
            width: 200px;
            height: 200px;
            border: 1px solid;
            display: inline-block;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
</body>
</html>
```

三、为inline-block元素添加样式float:left

缺点:直接浮动就可以让一些元素在同一行显示,inline-block再浮动显得多此一举

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        body {
            margin: 0;
        }
 
        .box1,.box2 {
            width: 200px;
            height: 200px;
            border: 1px solid;
            display: inline-block;
            float: left;
        }
    </style>
</head>
<body>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
</body>
</html>
```

最后来张解决问题的效果图:

![RWOQoV.png](https://z3.ax1x.com/2021/07/04/RWOQoV.png)