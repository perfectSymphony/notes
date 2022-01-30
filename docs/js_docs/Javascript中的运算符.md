### Javascript中的运算符

#### 一、链判断运算符（?. 运算符）

实际开发中，如果要读取对象内部的某个属性，往往需要先判断一下该对象是否存在。
比如，要读取 user.firstName，安全的写法应该是下面这样的：

```sh
const firstName = (user && user.firstName) || 'default'
```

这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator）?. 来简化上面的写法

```sh
const firstName = user?.firstName || 'default'
```

>上面代码使用了 ?. 运算符，直接在链式调用的时候判断，左侧的对象是否为 null 或 undefined。如果是的，就不再往下运算，而是返回 undefined。


#### 使用这个运算符，有几个注意点：

##### （1）短路机制

```sh
a?.[++x]
// 等同于
a == null ? undefined : a[++x]
```
上面代码中，如果 a 是 undefined 或 null，那么 x 不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。

##### （2）括号的影响

```sh
(a?.b).c
// 等价于
(a == null ? undefined : a.b).c
```
上面代码中，?. 对圆括号外部没有影响，不管 a 对象是否存在，圆括号后面的 .c 总是会执行。

一般来说，使用 ?. 运算符的场合，不应该使用圆括号。

##### （3）右侧不得为十进制数值

为了保证兼容以前的代码，允许 foo ?. 3 : 0 被解析成 foo ? .3 : 0，因此规定如果 ?. 后面紧跟一个十进制数字，那么 ?. 不再被看成是一个完整的运算符，而会按照三元运算符进行处理，也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。

#### 二、Null 判断运算符

读取对象属性的时候，如果某个属性的值是 null 或 undefined，有时候需要为它们指定默认值。常见做法是通过 || 运算符指定默认值。

```sh
const text = data.text || 'Hello, world!'
```
上面的代码都通过 || 运算符指定默认值，但是这样写可能和预期的结果不一致。

开发者的原意是，只要属性的值为 null 或 undefined，默认值就会生效，但是属性的值如果为空字符串或 false 或 0，默认值也会生效。

为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符??。它的行为类似 ||，但是只有运算符左侧的值为 null 或 undefined 时，才会返回右侧的值。

```sh
const text = data.text ?? 'Hello, world!'
```

上面代码中，默认值只有在属性值为 null 或 undefined 时，才会生效。

这个运算符的一个目的，就是跟链判断运算符 ?. 配合使用，为 null 或 undefined 的值设置默认值。

```sh
const animationDuration = settings?.animationDuration ?? 300
``

上面代码中，settings 如果是 null 或 undefined，就会返回默认值300。
