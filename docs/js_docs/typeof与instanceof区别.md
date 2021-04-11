## typeof与instanceof区别

> typeof可以判断数据类型，但是无法判断array和object，如何解决?

### typeof

用于判断数据类型，返回值为6种字符串，分别为`string`、`Boolean`、`number`、`function`、`object`、`undefined`。

```sh
var a = [34,4,3,54],
    b = 34,
    c = 'adsfas',
    d = function(){console.log('我是函数')},
    e = true,
    f = null,
    g;

    console.log(typeof(a));//object
    console.log(typeof(b));//number
    console.log(typeof(c));//string
    console.log(typeof(d));//function
    console.log(typeof(e));//boolean
    console.log(typeof(f));//object
    console.log(typeof(g));//undefined
```

`typeof`在判断`null`、`array`、`object`以及函数实例`（new + 函数）`时，得到的都是`object`。这使得在判断这些数据类型的时候，得不到真实的数据类型。由此引出`instanceof`。

### instanceof

instance中文翻译为实例，因此instanceof的含义就不言而喻，判断该对象是谁的实例，同时我们也就知道instanceof是对象运算符。
这里的实例牵扯到对象的继承，它的判断是根据原型链进行搜寻。

### 总结

 typeof和instanceof都是用来判断变量类型的，两者的区别在于：

 - typeof判断所有变量的类型，返回值有number，boolean，string，function，object，undefined。
 - typeof对于丰富的对象实例，只能返回"Object"字符串。
instanceof用来判断对象，代码形式为obj1 instanceof obj2（obj1是否是obj2的实例），obj2必须为对象，否则会报错！其返回值为布尔值。
 - instanceof可以对不同的对象实例进行判断，判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true，否则，返回false。
