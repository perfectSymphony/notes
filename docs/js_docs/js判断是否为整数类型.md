## js判断是否为整数类型

### 方式一、使用取余运算符判断

任何整数都会被1整除，即余数是0。利用这个规则来判断是否是整数。

```javascript
function isInteger(obj) {
 return obj%1 === 0
}

isInteger(3) // true
isInteger(3.3) // false　

isInteger('') // true
isInteger('3') // true
isInteger(true) // true
isInteger([]) // true
```

对于空字符串、字符串类型数字、布尔true、空数组都返回了true。对这些类型的内部转换细节感兴趣的请参考：JavaScript中奇葩的假值
因此，需要先判断下对象是否是数字，比如加一个typeof

```javascript
function isInteger(obj) {
 return typeof obj === 'number' && obj%1 === 0
}

isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

### 方式二、使用Math.round、Math.ceil、Math.floor判断

整数取整后还是等于自己。利用这个特性来判断是否是整数，Math.floor示例，如下

```javascript
function isInteger(obj) {
 return Math.floor(obj) === obj
}


isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false
```

### 方式三、通过parseInt判断

```javascript
function isInteger(obj) {
 return parseInt(obj, 10) === obj
}

isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false、

//很不错，但也有一个缺点
isInteger(1000000000000000000000) // false
```

原因是parseInt在解析整数之前强迫将第一个参数解析成字符串。这种方法将数字转换成整型不是一个好的选择。

### 方式四、通过位运算判断

```javascript
function isInteger(obj) {
 return (obj | 0) === obj
}

isInteger(3) // true
isInteger(3.3) // false
isInteger('') // false
isInteger('3') // false
isInteger(true) // false
isInteger([]) // false

//这个函数很不错，效率还很高。但有个缺陷，上文提到过，位运算只能处理32位以内的数字，对于超过32位的无能为力
isInteger(Math.pow(2, 32)) // 32位以上的数字返回false了
```

### 方式五、ES6提供了Number.isInteger

```javascript
Number.isInteger(3) // true
Number.isInteger(3.1) // false
Number.isInteger('') // false
Number.isInteger('3') // false
Number.isInteger(true) // false
Number.isInteger([]) // false
```