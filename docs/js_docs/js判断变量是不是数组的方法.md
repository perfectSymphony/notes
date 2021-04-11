## js判断变量是不是数组的方法

### 方案一： instanceof

```sh
变量 instanceof 类型  返回的是布尔值  true false<br>例: var a = []   a instanceof Array
```

### 方案二： 原型prototype + toString +  call()

[![DYq1xS.png](https://s3.ax1x.com/2020/11/24/DYq1xS.png)](https://imgchr.com/i/DYq1xS)

```sh
首先: Object.prototype.toString.call(variable)来判断，返回值是字符串
其次: Object.prototype.toString.call(variable).indexOf('Array') 如果变量对象是纯数组，返回的数字不是-1
最后: Object.prototype.toString.call(variable).indexOf('Array') !== -1 比对数值是否等于-1就能判断是否是数组类型 是为true
```

### 方案三：原型prototype + isPrototypeOf()

```sh
Array.prototype.isPrototypeOf(variable) 
```

### isPrototypeOf() 函数 : 用于指示对象是否存在于一个对象的原型链中。如果存在返回true，反之返回false。该方法属Object对象，由于所有的对象都继承了Object的对象实例，因此几乎所有的实例对象都可以使用该方法。如果variable的原型链中存在Array对象，就会返回true，也就说明variable是数组类型。

### 方案四：构造函数 constructor

```sh
variable.constructor
variable.constructor.toString()
variable.constructor.toString().indexOf("Array") ！== -1
```

一个数组类型的实例，其原型__proto__.constructor右边是Array关键字，再拿到字符串，最后查找字符串中Array关键字的位置是否等于-1

### 方案五：数组方法 isArray()

```sh
Array.isArray(variable)
```


### javascript如何判断是否为对象？

**先声明一个对象**

```sh
var obj = {}；
```

**判断是否为对象的方法：**

1、toString（推荐）

```sh
Object.prototype.toString.call(obj) === '[Object Object]'
```

2、constructor属性

constructor 属性返回对创建此对象的 Boolean 函数的引用。

```sh
obj.constructor === Object
```

3、instanceof运算符

```sh
obj instanceof Object
```
注：需要注意的是由于数组也是对象，因此用 arr instanceof Object 也为true。

4、typeof运算符

typeof运算符返回一个字符串，表示未经计算的操作数的类型。

```sh
typeof obj === Object

// 根据typeof判断对象也不太准确
表达式                     返回值
typeof undefined       'undefined'
typeof null               'object'
typeof true               'boolean'
typeof 123               'number'
typeof "abc"           'string'
typeof function() {}   'function'
typeof {}               'object'
typeof []               'object'
```

5、$.isPlainObject()

该方法判断指定参数是否是一个纯粹的对象（所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的。）

```sh
$.isPlainObject(obj)
```