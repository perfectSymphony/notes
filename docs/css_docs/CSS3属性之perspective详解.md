## CSS3属性之perspective详解

简单来说，就是设置这个属性后，那么，就可以模拟出像我们人看电脑上的显示的元素一样。比如说， perspective：800px   意思就是，我在离屏幕800px 的地方观看这个元素。(这个属性，要设置在父元素上面)

![6FvCGj.png](https://s3.ax1x.com/2021/03/02/6FvCGj.png)

先来看看， 加了perspective  和 没有加是什么区别， 第一个小方块，是有加的效果，能明显的看到空间感了有没有， 感觉他是真的像在旋转， 而第二个呢，像是在伸缩。

![6FvedU.gif](https://s3.ax1x.com/2021/03/02/6FvedU.gif)

那么思考一个问题，transform：translateZ  呢，可以增加  Z轴的距离， 那么Z轴越大，是不是也就代表着，这个元素，离我们的距离越近？  那么，你把一张图片，贴到你脸上，有什么效果？ 是不是非常大？有人可能会问，这两者之间有什么关系吗？  肯定是有的，这个 perspective  配合 transform：translateZ  就有这种效果， 我们来看看。(先记着，我们设置了perspective：800px，那么来看看 Z到800px 有什么效果)

![6FvzOx.gif](https://s3.ax1x.com/2021/03/02/6FvzOx.gif)


有没有发现，临近 <font color="#f00">800px</font> 的时候， 图片突然变黑了， 然后到<font color="#f00">800px</font>的时候， 图片消失了。  这又是为啥呢？   其实很像我们现实中的例子一样，一张远处的图片，慢慢的移动到你脸上， 你会看见图片越来越大，贴到你脸上的时候，是不是 你就看不见了？  到800px 的时候，你人都和图片 融合在一体了， 如果<font color="#f00">801px</font> 是不是你都穿过这张图片了？道理是一样的。

那么transform：translateZ， 到负数的时候， 是不是值越小，图片离我们越远，同理的 图片也就越小。

![6kSJe0.gif](https://s3.ax1x.com/2021/03/02/6kSJe0.gif)

按照我们的思路继续，如果 perspective： 这个值，越小，是不是我们就离屏幕越近， 那么 图片也会越大，(translateZ 是移动图片， perspective是移动 人 和屏幕的距离，这么想也是没问题的哈。对吧，那么把translateZ(0px)。然后增加 perspective 试试看。  )

![6kFxcF.png](https://s3.ax1x.com/2021/03/02/6kFxcF.png)

你会惊奇的发现，好像perspective的值无论是增加，还是减少，图片都没有任何变化。 这个时候，先卖个关子，接着看下个案例，把 translateZ(-100px) 设置成 负值。(正常，按照我们的想法，是不是 Z的值是正数，说明这个图片，离我们越近，那么反之，负值，离我们越远对吧)  那么这次我们不移动 translateZ 了， 设置好Z 值为-100px 之后，移动perspective的值，把他的值变小，(正常来说，值越小，是不是就代表 我们离屏幕越近， 看的东西也就越大对吧)

![6kpRH0.gif](https://s3.ax1x.com/2021/03/02/6kpRH0.gif)

然后，你又会惊奇的发现， 怎么图片不是越来越大呢? 我们离屏幕越大，图片应该越大才对啊， 怎么变小了呢？  

其实把。这里我们一直误导一个情况，我们看到的，并不是图片本身，而是图片的投影。 看下面的图解。

第一个情况，translateZ 的值越大，图片越大。

![6k90q1.png](https://s3.ax1x.com/2021/03/02/6k90q1.png)

第二个情况，translateZ 的值越小，图片越小。
![6k9gRe.png](https://s3.ax1x.com/2021/03/02/6k9gRe.png)

第三个情况，translateZ 为0的时候，为什么移动我们perspective 的值，图片的大小没有改变呢？

![6k9hqI.png](https://s3.ax1x.com/2021/03/02/6k9hqI.png)

第四个情况，为什么translateZ 为负数之后，增加 perspective 的值后，图片不是变大， 反而变小呢？

![6k9Xss.png](https://s3.ax1x.com/2021/03/02/6k9Xss.png)


好了，最后补充一点，这个perspective 属性呢，要放在父级身上。然后还有一个属性perspective-origin，这个属性也是设置在父级身上。

这个属性呢，默认值是 center  center，也就是 居中。这两个参数呢，是根据自身来定位的， 0px 0px 代表着元素的左上角，center center代表着元素的中间点。可以设置像素 50px  也可设置百分比 50%，还可以设置 top right left bottom center 等。

这个属性有什么用呢？ 这个属性是相当于人 的眼睛看哪里。你没有设置，也就是默认看父元素 中间的地方。看下面两张图的例子，就知道什么意思啦。

![6kCiz4.png](https://s3.ax1x.com/2021/03/02/6kCiz4.png)

![6kCJeI.png](https://s3.ax1x.com/2021/03/02/6kCJeI.png)