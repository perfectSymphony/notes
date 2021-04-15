## table使用总结

1、(IE浏览器)使用 table-layout:fixed;强制table的宽度,内层td,th采用word-break : break-all;或者word-wrap : break-word ;换行

### 2、解决设置table中td宽度不生效

  - 特性：table是一个整体，每一列td的宽度是由其中一个最长td的宽度决定的。
  - 解决：一定要在table标签上加word-wrap: break-word; word-break: break-all;之后再设置百分比宽度就可以生效了(如果你用的bootstrap，可以添加col-md-1)

[DpvwdS.png](https://s3.ax1x.com/2020/11/13/DpvwdS.png)
[DpvWZT.png](https://s3.ax1x.com/2020/11/13/DpvWZT.png)

  # 让一个元素相对于父元素固定定位

  遇到了一个场景，需要实现相对于父元素的fixed定位：在父元素内拖动滚动条时，"fixed"定位的元素不能滑动，在外层拖动滚动条时，父元素及父元素内的所有元素跟着一起滑动。但是position: fixed是相对于窗口进行的定位，不能直接实现我们需要的效果。


  让特定子元素相对于父元素"fixed"定位，也就是说，剩余的子元素不定位。那我们可以分开来想，如果添加一个祖先元素assistor，有两个祖先元素，一个用于辅助定位，一个用于包裹不定位的内容，这个问题就解决了。

  实质上是child相对于assistorabsolute定位，parent内的内容自己负责展示。只要assistor和parent一样大，看起来就像是子元素child相对于父元素parent固定定位了。具体原理是position: absolute;的元素会相对于第一个设置了position: relative;的祖先元素进行定位，我们将assistor设置为position: reletive;，滚动条是在parent中的，这样"fixed"定位和parent内的内容滚动就都实现了。


  ```sh
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>test</td></title>
<style>
.assistor {
  position: relative; /*关键点*/
  display: block;
  width: 100%;
  height: 300px;
  margin: 100px auto 0 auto;
  background-color: #ddd;
}
.parent {
  width: 100%;
  height: 300px;
  background-color: #888;
  overflow: auto; /*关键点*/
}
.child {
  position: absolute; /*关键点*/
  width: 120px;
  height: 120px;
  margin: 100px 50px;
  background-color: #eee;
}
.placeholder {
  width: 100%;
  height: 1000px;
}
</style>
</head>
<body>
	<div class="assistor">
		<div class="parent">
		  <div class="child">111</div>
		  <div class="placeholder">
			  1114561611<br/>11134111<br/>1111116761111<br/>1111111111111111111111
			  11111111111111111111111111111111111111111111111111111111111
			  1111111111111111111111111111111111111122222222222222222222
			  22222222222222222222222222222222222222222222222222222222222
			  222222222222222222222222<br/> 2222222222222222222222222222222
			  22222222222222222222222222</div>
		</div>
	  </div>
</body>
</html>
  ```
