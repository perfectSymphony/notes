## JS基础(初级)

### 一、手写冒泡排序

```javascript
let arr = [0, 2, 8, 7, 3, 9, 1, 4, 8];
// 方式一：
function BubbleSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j + 1]){
        let temp;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }  
    }
  }
  return arr;
}

// 方式二：
function BubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        let temp;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 方式三：
function BubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### 二、快速排序：

利用二分法和递归实现快速排序：

```javascript
function quickSort(arr){
  if(arr.length == 0) return []

  //利用Math.floor()方法向下取整找到中间位置
  let Index = Math.floor(arr.length / 2);
  //再用splice()方法将数组中间位置的元素取出来
  let c = arr.splice(Index, 1);
  let l = [];
  let r = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < c){
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  // 从左至右，从小到大
  return quickSort(l).concat(c, quickSort(r));
  // 从左至右，从大到小
  return quickSort(r).concat(c, quickSort(l));
}
```


### 三、事件帧听器

```javascript
var EventUtil = {
    addEvent:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else{
            element["on" + type] = handler;
        }
    },
    removeEvent:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on" + type,handler);
        }else{
            element["on" + type] = null;
        }
    },
    getEvent:function(){
        return event ? event: window.event;
    },
    getTarget:function(event){
        return event.target || event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble();
        }
    }
}

//调用方法
var btn = document.getElementById("myBtn");
var handler = function(){
    event = EventUtil.getEvent();
    EventUtil.preventDefault();
    alert("Clicked");
};
EventUtil.addEvent(btn,click,handler);
```

### 四、数据类型

1、基本数据类型：
undefined、Null、String、Boolean、Number

2、数据封装对象：Object、Array、Boolean、Number、String
3、其他对象：Math、Date、Function、Error、RegExp、Arguments

### 五、闭包

{% post_link 谈谈对闭包的理解 %}

### 六、作用域、原型、原型链、继承

1、JS作用域：分为全局作用域和函数作用域
全局作用域，代码在程序中的任何地方都能访问，window对象的内置属性都拥有全局作用域；
函数作用域，在固定的代码片段才能访问。

2、作用域链：作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。

3、原型和原型链：
每个对象都会在其内部初始化一个属性-prototype（原型）。当我们访问一个对象的属性时，如果这个对象的内部不存在这个属性，就会去prototype中查找这个属性，这个prototype又会有自己的prototype，于是就会像链条一样一直找下去形成原型链。
（因为所有的对象都是由Object对象继承而来，因此最终查找到Object的prototype结束）

4、继承：实现继承的常用方法是原型链+借用构造函数。
原型链实现对原型属性和方法的继承，借用构造函数实现对实例属性的继承。

```javascript
function SuperType(name){
    this.name = name;
}
SuperType.prototype.sayName = function(){
    alert(this.name);
}

function SubType(age){
    //继承属性
    SuperType.call(this, name);
    this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
}

var p1 = new SubType("老王", 70);
var p2 = new SubType("小王", 20);
p1.sayName(); //老王
p2.sayName(); //小王
p1.sayAge();  //70
p2.sayAge();  //20
```

### 七、组件化、模块化

1、组件化：利用组件化思想将多个页面都需要用的功能组件封装起来，提高代码复用性，降低耦合性，增强可维护性和可读性。

2、模块化：主要用途是封装对象
模块化的优点：避免全局变量污染，命名冲突；提高代码复用率；提高了可维护性。
最常用的模块化封装对象的方法是：构造函数模式+原型模式。
构造函数内写属性，原型中放方法和重写构造函数指针。

```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    sayName: function(){
        alert(this.name);
    }
}

var person1 = new Person("老王", 70);
var person2 = new Person("小王", 20);

alert(person1.name === person2.name);    //false,构造函数内属性不公用
alert(person1.sayName === person2.sayName);  //true,原型中的方法共用
```
组合使用构造函数模式和原型模式封装对象的好处在于，每个新建的实例都拥有自己的属性，然后共同享有原型中的方法，不用每次创建新实例都重新创建同样的方法。

### 八、ajax
<1>如何创建一个ajax

```javascript
//get方法
var xhr = new XMLHttpRequest();
xhr.open("get","example.php",true);  //发送的请求类型、请求的URL、是否异步发送请求
xhr.send(null);

xhr.onreadystatechange= function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            success(xhr.responseText);
        }else{
            console.log(xhr.status);
        }
    }
}

//post方法
var data = new FormData(document.forms[0]);
xhr.open("post","example.php",true);
xhr.send(data);
```
<2>同步和异步的区别：
同步：用户请求，等待，响应，刷新页面展示内容再操作；
异步：用户请求的同时可继续对页面操作，响应完成不刷新页面展示新内容。
<3>
Ajax优点：
异步请求响应快，用户体验好；页面无刷新、数据局部更新；按需取数据，减少了冗余请求和服务器的负担；
Ajax缺点：
异步回调问题、this指向问题、路由跳转back问题；对搜索引擎的支持比较弱，对于一些手机还不是很好的支持
<4>post一般用于修改服务器上的资源，对发送的数据没有限制；而get一般用于请求获取数据。

### 九、其他

1、事件代理：
事件代理又称之为事件委托，是绑定事件的常用技巧。即把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。
事件代理的原理是DOM元素的事件冒泡。
使用事件代理的好处是可以提高性能，节省内存占用，减少事件注册。可以实现当新增子对象时无需再对其绑定。
比如在table上代理td的click事件。

2、this对象：
·this总是指向函数的直接调用者（而非间接调用者）；
·如果有new关键字，this指向new出来的新对象
·在事件中，this指向触发这个事件的对象，但IE中的attachEvent中的this指向window对象。

3、事件模型：
·冒泡型事件：当你使用事件冒泡时，子元素先触发，父元素后触发；
·捕获型事件：当你使用事件捕获时，父元素先触发，子元素后触发；
·DOM事件流：同时支持两种事件模型，冒泡型事件和捕获型事件；
·阻止冒泡：阻止事件冒泡。在w3c中使用stopPropagation()方法，在IE中使用cancelBubble = true；
·阻止捕获：阻止事件的默认行为。在w3c中使用preventDefault()方法，在IE中使用returnValue = false。

4、XML和JSON的区别：
·JSON相对XML，数据体积更小，传递速度更快些；
·JSON与JS的交互更方便，更容易解析处理，更好的数据交互；
·JSON对数据的描述性比XML较差；
·JSON的传输速度远远快于XML。

5、eval()的作用：
把对应的字符串解析成可执行的JS代码并运行；
应该避免使用eval()，不安全且非常耗性能。

6、Null和Undefined的区别：
undefined表示声明的变量未赋值，而null表示声明变量的值为空值；
两者相比较时要使用===，因为==无法区分。

7、["1", "2", "3"].map(parseInt) 答案是多少？
[1,NaN.NaN]。因为parseInt的参数时(val,radix)，radix表示基数（多少进制），而map的参数是(function(currentValue,index,arr),thisIndex)。所以map传了三个参数给parseInt，radix对应index不合法导致解析失败。
[详细参考的使用技巧案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
8、JSON与字符串的转换：
- 字符串转换为JSON

```javascript
var obj = eval('(' + str + ')');
var obj = str.parseJSON();
var obj = JSON.parse(str);  //最常用
```

 - JSON转换为字符串

```javascript
var str = obj.toJSONString();
var str = JSON.stringify(obj);
```

9、attribute和property的区别：
attribute是DOM元素在文档中作为html标签拥有的属性；
property是DOM元素在JS中作为对象所拥有的属性；

10、如何判断一个对象是否为数组：

```javascript
// 在JS中，可以通过Object.prototype.toString方法，判断某个对象之属于哪种内置类型。
function isArray(){
  if(typeof obj === 'object'){
    return Object.prototype.toString.call(obj) === '[Object Array]';
  }
  return false
}
```

10、map、foreach、reduce 间的区别？

[如何形象地解释 JavaScript 中 map、foreach、reduce 间的区别？](https://www.zhihu.com/question/24927450)

### 十、promise

{% post_link Promise精选 %}

### 十一、事件循环

{% post_link JS事件循环机制-event-loop-之宏任务、微任务 %}

### 十二、对数组进行扁平化、排序、去重

```javascript
const source = [ [3, 9, 2,4], [99, 32, 5, 7,3], [6, 3,12,45,9, [11, 8, [22,15, 313, [44] ] ] ], 10, [99,32]];

// 扁平化
function recursionFlat(arr = []){
  const res = []
  arr.forEach(item => {
    if(Array.isArray(item)){
      res.push(...recursionFlat(item))
    } else {
      res.push(item)
    }
  })
  return res
}

const newArray = recursionFlat(source)
console.log(newArray)

// 排序
function BubbleSort(arr = []){
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

const sortArray = BubbleSort(trimArray)
console.log(sortArray)

// 去重： 方式一
const trimArray = [...new Set(newArray)]

//去重：方式二
let hash = {}
for(let i = 0; i < newArray.length; i++){
  hash[arr[i]] = 1
}
console.log(hash)
```
### 十三、将数组乱序输出

```javascript
//将数组乱序输出
let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = [];
  for(let i=0; i<arr.length; i++){
    let index = Math.floor(Math.random()*arr.length);//随机下标
        newArr.push(arr[index]);//将随机出的元素，存放新数组newArr中去
        arr.splice(index,1);//    将随机出的元素在arr中删除            
  }
//arr中删除随机出的元素,arr.length-1,同时i++,导致循环不会10次,会是5次.最后得到newArr中只有一半的随机数字,arr中剩下另一半. 将其合并到一起,得到res
let res =[...newArr,...arr];
console.log(res)

```


```javascript
//从数组中筛选出指定的长度、不重复的数组
var array = [1,2,3,4,5,6,7,8,9,10]
var resArray = []
function test(arr, n){
    for(let i = 0; i < n; i++){
        let index = Math.floor(Math.random()*arr.length);  
        resArray.push(array[index])
        arr.splice(index, 1)
    }
    console.log(resArray)
}


test(array, 6)
```