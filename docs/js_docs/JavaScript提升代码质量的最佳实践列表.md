### JavaScript提升代码质量的最佳实践列表

#### 一、块范围的声明

`var`定义的变量不是块范围的，因此在较小的作用域内重新定义它们会影响外部作用域的值。

使用var声明变量实例：
```javascript
var x = 10
if (true) {
  var x = 15     // inner declaration overrides declaration in parent scope
  console.log(x) // prints 15
}
console.log(x)   // prints 15
```

用`let`,`const`关键字替换`var`，就没有这方面的缺陷。

```javascript
let y = 10
if (true) {
  let y = 15       // inner declaration is scoped within the if block
  console.log(y)   // prints 15
}
console.log(y)     // prints 10
```

`const`和`let`的语义不同：用`const`声明的变量不能在其范围内重新分配。这并不意味着它们是不可变的，只是它们的引用不能更改。

```javascript
const x = []

x.push("Hello", "World!")
x // ["Hello", "World!"]

x = [] // TypeError: Attempted to assign to readonly property.
```

#### 二、可选链
假设有一个深层嵌套的数据结构，例如此处的`person`对象。想好你要访问的那个人的名和姓，你可以像这样编写代码：

```javascript
person = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  age: 42
}
person.name.first // 'John'
person.name.last  // 'Doe'
```

想象一下，如果`person`对象不包含嵌套的`name`对象，会发生什么。

```javascript
person = {
  age: 42
}
person.name.first // TypeError: Cannot read property 'first' of undefined
person.name.last  // TypeError: Cannot read property 'last' of undefined
```

为避免此类错误，开发人员不得不求助于像下面这样的代码，这些代码不但冗长，而且还难以阅读、难以编写。

```javascript
person && person.name && person.name.first // undefined
```

可选链——JavaScript的一项新功能，可以避免我们陷入这种尴尬的境地。可选链只要遇到`null`或`undefined`的值，就可以在未引发错误的情况下返回未`undefined`。

```javascript
person?.name?.first // undefined
```

#### 三、Nullish合并

在引入`Nullish`合并运作符之前，JavaScript开发人员使用OR运算符`||`（如果缺少输入）回退到默认值。这伴随着一个重要的警告：即使合法但falsy的值也会导致回退到默认值。

```javascript
function print(val) {
    return val || 'Missing'
}

print(undefined) // 'Missing'
print(null)      // 'Missing'

print(0)         // 'Missing'
print('')        // 'Missing'
print(false)     // 'Missing'
print(NaN)       // 'Missing'
```

JavaScript现在提出了空值合并运算符`??`，这为我们提供了一个更好的选择：如果前面的表达式为null-ish，它只会导致回退。这里的null-ish表示`null`或`undefined`的值。

```javascript
function print(val) {
    return val ?? 'Missing'
}

print(undefined) // 'Missing'
print(null)      // 'Missing'

print(0)         // 0
print('')        // ''
print(false)     // false
print(NaN)       // NaN
```
这样一来，就可以确保如果程序接受falsy值作为合法输入，最后就不会回退。

#### 四、逻辑分配

当且仅当变量的值为null-ish时，才为该变量分配一个值。逻辑上的写法如下：

```javascript
if (x === null || x == undefined) {
    x = y
}
```

如果你知道JS短路的工作原理，则可能想要使用null-ish合并运算符将这三行代码改为更简洁的版本。

> 短路，即逻辑运算从左到右。逻辑或运算，当左边的条件成立时，后面的条件将不再参与运算。

```javascript
x ?? (x = y) // x = y if x is nullish, else no effect
```

这里我们使用了null-ish合并运算符的短路功能来执行第二部分，如果`x`为nullish，则`x = y`。代码非常简洁，但理解起来仍然有点难度。逻辑null-ish分配消除了对这种变通方法的需要。

```javascript
x ??= y // x = y if x is nullish, else no effect
```

JavaScript还引入了逻辑AND赋值`&&=`和逻辑OR赋值`||=`运算符。这些运算符仅在满足特定条件时执行分配，否则不起作用。

```javascript
x ||= y // x = y if x is falsy, else no effect
x &&= y // x = y if x is truthy, else no effect
```

#### 五、命名捕获组

让我们首先快速回顾一下正则表达式中的捕获组。捕获组是与括号中的正则表达式部分匹配的字符串的一部分。

```javascript
let re = /(\d{4})-(\d{2})-(\d{2})/
let result = re.exec('Pi day this year falls on 2021-03-14!')

result[0] // '2020-03-14', the complete match
result[1] // '2020', the first capture group
result[2] // '03', the second capture group
result[3] // '14', the third capture group
```

正则表达式在相当长的一段时间内也支持命名捕获组，这是通过名称而不是索引引用捕获组的一种方式。现在，归功于ES9，此功能来到了JavaScript。结果对象包含嵌套的组对象，其中每个捕获组的值都映射到其名称。

```javascript
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
let result = re.exec('Pi day this year falls on 2021-03-14!')

result.groups.year  // '2020', the group named 'year'
result.groups.month // '03', the group named 'month'
result.groups.day   // '14', the group named 'day'
```

新的API与另一个新的JavaScript功能——解构分配——合作起来亲密无间。

```javascript
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
let result = re.exec('Pi day this year falls on 2021-03-14!')
let { year, month, day } = result.groups

year  // '2020'
month // '03'
day   // '14'
```

#### 六、async和await
JavaScript的强大功能之一就是它的异步性。这意味着许多长时间运行或非常耗时的函数可以返回Promise而不阻塞执行。

```javascript
const url = 'https://the-one-api.dev/v2/book'
let prom = fetch(url)
prom // Promise {<pending>}

// wait a bit
prom // Promise {<fullfilled>: Response}, if no errors
// or
prom // Promise {<rejected>: Error message}, if any error
```

调用`fetch`返回Promise，该Promise在创建时的状态为pending。很快，当API返回响应时，它将转换为fulfilled状态，并包装可以访问的Respond。在Promises世界中，你将执行以下操作来进行API调用并将响应解析为JSON

```javascript
const url = 'https://the-one-api.dev/v2/book'
let prom = fetch(url)
prom                               // Promise {<fullfilled>: Response}
  .then(res => res.json())
  .then(json => console.log(json)) // prints response, if no errors
  .catch(err => console.log(err))  // prints error message, if any error
```

2017年，JavaScript宣布了两个新的关键字`async`和`await`，这使Promises的处理和使用变得更加轻松和流畅。它们不是Promise的替代品；它们只是强大的Promise概念之上的语法糖。
取代了将所有代码都发生在一系列`then`函数内，`await`让一切看起来像是同步的JavaScript。另外一个好处是，你可以将`try ... catch`与`await`结合使用，而不是像直接使用Promises那样处理`catch`函数中的错误。用`await`表示的相同代码如下所示。

```javascript
const url = 'https://the-one-api.dev/v2/book'
let res = await fetch(url) // Promise {<fullfilled>: Response} -await-> Response
try {
    let json = await res.json()
    console.log(json) // prints response, if no errors
} catch(err) {
  console.log(err)  // prints error message, if any error
}
```

