## JavaScript的深拷贝与浅拷贝

### 一、预备知识

#### 1.1、JS数据类型

基本数据类型：Boolean、String、Number、null、undefined
引用数据类型：Object、Array、Function、RegExp、Date等

#### 1.2、数据类型的复制

基本数据类型的复制，是按值传递的

```sh
var a = 1;
var b = a;
b = 2;
console.log(a); // 1
console.lob(b); // 2
```

引用数据类型的复制，是按引用传值

```sh
var obj1 = {
 a: 1;
 b: 2;
};
var obj2 = obj1;
obj2.a=3;
console.log(obj1.a); //3
console.log(obj2.a); // 3
```

#### 1.3、深拷贝与浅拷贝

深拷贝和浅拷贝都只针对引用数据类型，浅拷贝会对对象逐个成员依次拷贝，但只复制内存地址，而不复制对象本身，新旧对象成员还是共享同一内存；深拷贝会另外创建一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

区别：浅拷贝只复制对象的第一层属性，而深拷贝会对对象的属性进行递归复制。

### 二、JS浅拷贝

#### 2.1、赋值与浅拷贝

当把一个对象赋值给一个新的变量时，赋的对象是该对象在栈中的地址，而不是堆中的数据。也就是新旧两个对象指的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，两个对象联动的会一起改变。

```sh
var obj1 = {
  'name' : 'zhangsan',
  'language' : [1,[2,3],[4,5]],
};
var obj2 = obj1;
obj2.name = "lisi";
obj2.language[1] = ["二","三"];
console.log('obj1',obj1)
console.log('obj2',obj2)
```
[![DvCoJx.png](https://s3.ax1x.com/2020/12/07/DvCoJx.png)](https://imgchr.com/i/DvCoJx)

浅拷贝是按位拷贝对象，它会创建一个新对象，对原有对象的成员进行依次拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用类型，拷贝的就是内存地址。因此如果新对象中的某个对象成员改变了地址，就会影响到原有的对象。

```sh
//手写浅拷贝
function shallowCopy(obj1) {
 let obj2 = Array.isArray(obj1) ? [] : {}
 for (let i in obj1) {
  obj2[i] = obj1[i]
 }
 return obj2
}
var obj1 = {
  'name' : 'zhangsan',
  'language' : [1,[2,3],[4,5]],
};
var obj2 = shallowCopy(obj1);
obj2.name = "lisi";
obj2.language[1] = ["二","三"];
console.log('obj1',obj1)
console.log('obj2',obj2)
```
[![DvCTW6.png](https://s3.ax1x.com/2020/12/07/DvCTW6.png)](https://imgchr.com/i/DvCTW6)

#### 2.2、浅拷贝的实现

（1）Object.assign()

Object.assign()方法可以把源对象自身的任意多个的可枚举属性拷贝给目标对象，然后返回目标对象，但是Object.assign()进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。此方法对于Array和Object均可适用。

```sh
var obj1 = {
  'name' : 'zhangsan',
  'language' : [1,[2,3],[4,5]],
};
var obj2 = Object.assign({}, obj1);
obj2.name = "lisi";
obj2.language[1] = ["二","三"];
console.log('obj1',obj1)
console.log('obj2',obj2)
```

[![DvCjwd.png](https://s3.ax1x.com/2020/12/07/DvCjwd.png)](https://imgchr.com/i/DvCjwd)

（2）Array.prototype.concat()和Array.prototype.slice()

Array.prototype.concat()和Array.prototype.slice()均为Array原型上的方法，只适用于Array。

```sh
var arr1 = [1,3,{
 user: 'aaa'
}]
var arr2 = arr1.concat();
arr2[0] = '一';
arr2[2].user = 'AAA';
console.log('arr1',arr1)
console.log('arr2',arr2)
 
 
var arr1 = [1,3,{
 user: 'aaa'
}]
var arr2 = arr1.slice();
arr2[0] = '一';
arr2[2].user = 'AAA';
console.log('arr1',arr1)
console.log('arr2',arr2)
```
[![DvCzFI.png](https://s3.ax1x.com/2020/12/07/DvCzFI.png)](https://imgchr.com/i/DvCzFI)
补充说明：Array的slice和contact方法都不会修改原数组，而是会返回一个对原数组进行浅拷贝的新数组。这两种方法同Object.assign()一样，都是对第一层属性依次拷贝，如果第一层的属性是基本数据类型，就拷贝值；如果是引用数据类型，就拷贝内存地址。

### 三、JS深拷贝

对对象的属性中所有引用类型的值，遍历到是基本类型的值为止。

#### 3.1、深拷贝实现方式

(1)JSON.parse(JSON.stringify())
原理：用JSON.stringify()将对象转成字符串，再用JSON.parse()把字符串解析成对象。

```sh
var obj1 = {
  'name' : 'zhangsan',
  'language' : [1,[2,3],[4,5]],
};
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "lisi";
obj2.language[1] = ["二","三"];
console.log('obj1',obj1)
console.log('obj2',obj2)
```
[![DvPlXF.png](https://s3.ax1x.com/2020/12/07/DvPlXF.png)](https://imgchr.com/i/DvPlXF)

缺点：这种方法可以实现数组和对象和基本数据类型的深拷贝，但不能处理函数。因为JSON.stringify()方法是将一个javascript值转换我一个JSON字符串，不能接受函数。其他影响如下：

- 如果对象中有时间对象，那么用该方法拷贝之后的对象中，时间是字符串形式而不是时间对象
- 如果对象中有RegExp、Error对象，那么序列化的结果是空
- 如果对象中有函数或者undefined，那么序列化的结果会把函数或undefined丢失
- 如果对象中有NAN、infinity、-infinity，那么序列化的结果会变成null
- JSON.stringfy（）只能序列化对象的可枚举自有属性，如果对象中有是构造函数生成的，那么拷贝后会丢弃对象的constructor
- 如果对象中存在循环引用也无法正确实现深拷贝

（2）手写深拷贝函数

通过递归实现深拷贝

```sh
function deepCopy(obj){
 var result= Array.isArray(obj) ? [] : {}
 if (obj && typeof(obj) === 'object') {
  for (let i in obj) {
   if (obj.hasOwnProperty(i)){ // 思考：这句是否有必要？
    if (obj[i] && typeof(obj[i]) === 'object') {
     result[i] = deepCopy(obj[i])
    } else {
     result[i] = obj[i]
    }
   }
  }
 }
 return result
}
var obj1 = {
 a: 1,
 b: {
  c: 2
 }
};
var obj2 = deepCopy(obj1);
obj2.a = '一';
obj2.b.c = '二'
console.log('obj1', obj1)
console.log('obj2', obj2)
```

>obj.hasOwnProperty(prop)用来判断obj这个对象中是否含有prop这个属性，返回布尔值，有则true，没有则false

以上有个缺陷：当遇到两个互相引用的对象时，会出现死循环的情况，从而导致爆栈。为了避免相互引用的对象导致死循环的情况，则应该在遍历的时候判断是否互相引用。

深拷贝函数改进（防止循环递归爆栈）

```sh
function deepCopy(obj, parent = null) {
 let result = Array.isArray(obj) ? [] : {}
 let _parent = parent
 // 该字段有父级则需要追溯该字段的父级
 while(_parent) {
  // 如果该字段引用了它的父级，则为循环引用
  if (_parent.originalParent === obj) {
   // 循环引用返回同级的新对象
   return _parent.currentParent 
  }
  _parent = _parent.parent
 }
 if (obj && typeof(obj) === 'object') {
  for (let i in obj) {
   // 如果字段的值也是一个对象
   if (obj[i] && typeof(obj[i]) === 'object') {
    // 递归执行深拷，将同级的待拷贝对象传递给parent，方便追溯循环引用
    result[i] = deepCopy(obj[i], {
     originalParent: obj,
     currentParent: result,
     parent: parent
    })
   } else {
    result[i] = obj[i]
   }
  }
 }
 return result
}
var obj1 = {
 x: 1,
 y: 2
};
obj1.z = obj1
var obj2 = deepCopy(obj1)
console.log('obj1', obj1)
console.log('obj2', obj2)
```

以上代码可以复制到浏览器去试试吧

深拷贝函数最终版（支持基本数据类型、Array、Object、原型链、RegExp、Date类型）

```sh
function deepCopy(obj, parent = null) {
 let result
 let _parent = parent
 while(_parent) {
  if (_parent.originalParent === obj) {
   return _parent.currentParent
  }
  _parent = _parent.parent
 }
 if (obj && typeof(obj) === 'object') {
  if (obj instanceof RegExp) {
   result = new RegExp(obj.source, obj.flags)
  } else if (obj instanceof Date) {
   result = new Date(obj.getTime())
  } else {
   if (obj instanceof Array) {
    result = []
   } else {
    let proto = Object.getPrototypeOf(obj)
    result = Object.create(proto)
   }
   for (let i in obj) {
    if(obj[i] && typeof(obj[i]) === 'object') {
     result[i] = deepCopy(obj[i], {
      originalParent: obj,
      currentParent: result,
      parent: parent
     })
    } else {
     result[i] = obj[i]
    }
   }
  }
 } else {
  return obj
 }
 return result
}
var obj1 = {
 x: 1 
}
 
//试调用
function construct(){
  this.a = 1,
  this.b = {
    x:2,
    y:3,
    z:[4,5,[6]]
  },
  this.c = [7,8,[9,10]],
  this.d = new Date(),
  this.e = /abc/ig,
  this.f = function(a,b){
    return a+b
  },
  this.g = null,
  this.h = undefined,
  this.i = "hello",
  this.j = Symbol("foo")
}
construct.prototype.str = "I'm prototype"
var obj1 = new construct()
obj1.k = obj1
obj2 = deepCopy(obj1)
 
obj2.b.x = 999
obj2.c[0] = 666
 
console.log('obj1', obj1)
console.log('obj2', obj2)
```
（3）函数库
也可以使用一些函数库，比如函数库lodash，也有提供_.cloneDeep用来做深拷贝；

```sh
var _ = require('lodash');
var obj1 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false
```