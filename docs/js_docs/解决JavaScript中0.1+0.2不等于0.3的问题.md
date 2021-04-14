## 解决JavaScript中0.1+0.2不等于0.3的问题

考察对JavaScript的理解层度。

在正常的数学逻辑思维中，0.1+0.2=0.3这个逻辑是正确的，但是在JavaScript中0.1+0.2！==0.3。

在JavaScript中的二进制的浮点数0.1和0.2并不是十分精确，在他们相加的结果并非正好等于0.3，而是一个比较接近的数字 0.30000000000000004 ，所以条件判断结果为false。

**解决办法：**

设置一个误差范围值，通常称为”机器精度“，而对于Javascript来说，这个值通常是2^-52,而在ES6中，已经为我们提供了这样一个
属性：Number.EPSILON，而这个值正等于2^-52。这个值非常非常小，在底层计算机已经帮我们运算好，并且无限接近0，但不等于0,。这个时候我们只要判断(0.1+0.2)-0.3小于Number.EPSILON，在这个误差的范围内就可以判定0.1+0.2===0.3为true。

```javascript
function numbersequal(a,b){ 
    return Math.abs(a-b)<Number.EPSILON;
} 
var a=0.1+0.2， b=0.3;
console.log(numbersequal(a,b)); //true
```

完美的兼容写法：

```javascript
Number.EPSILON=(function(){   //解决兼容性问题
        return Number.EPSILON?Number.EPSILON:Math.pow(2,-52);
      })();
//上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果，相比于
//  if(!Number.EPSILON){
//     Number.EPSILON=Math.pow(2,-52);
//   }
  //这种代码更节约性能，也更美观。
function numbersequal(a,b){ 
    return Math.abs(a-b)<Number.EPSILON;
  }
//接下来再判断   
var a=0.1+0.2, b=0.3;
console.log(numbersequal(a,b)); //这里就为true了
```

这个是二进制浮点数最大的问题（不仅JavaScript，所有遵循IEEE 754规范的语言都是如此）。

　　注意：有人认为，JavaScript应该采用一种可以精确呈现数字的实现方式。一直以来出现过很多替代方案，只是都没能成为标准，以后大概也不会。这个问题看似简单，实则不然，否则早就解决了。
