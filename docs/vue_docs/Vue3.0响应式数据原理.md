### Vue3.0 响应式数据原理：ES6 Proxy

#### 摘要

 - JavaScript 中的 `proxy`是什么？ 能干什么？
 - vue3.0 开始为什么用 `proxy` 代替`object.defineProperty`

 ### proxy 是什么

 ##### 名词解释：
 	- proxy 对象用于定义基本操作的自定义行为(如属性查找、赋值、枚举、函数调用等)
 	- proxy 用于修改某些操作的默认行为，也可以理解为在目标对象之前架设一层拦截，外部所有的访问都必须先通过这层拦截，因此，提供了一种机制，可以对外部的访问进行过滤和修改。

##### 语法

 - const p = new Proxy(target, handler)

     - target: 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
	 - handler: 对该代理对象的各种操作行为处理(为空对象的情况下，基本可以理解为是对第一个参数做的一次浅拷贝)
 - 简而言之：target 就是你想要代理的对象；而 handler 是一个函数对象，其中定义了所有你想替 target 代为管理的操作对象，包含了：

	 - * handler.has(target, prop): in 操作符的捕捉器，拦截HasProperty操作
	 - * handler.get(target, prop): 属性读取操作的捕捉器
	 - * handler.set(target, prop， value): 属性设置操作的捕捉器
	 - * handler.apply(target, object, args): 函数调用操作的捕捉器，拦截函数的调用、call和apply操作
	 - handler.getPrototypeOf(): Object.getPrototypeOf 方法的捕捉器
	 - handler.setPrototypeOf(): Object.setPrototypeOf 方法的捕捉器
	 - handler.isExtensible(): Object.isExtensible 方法的捕捉器
	 - handler.preventExtensions(): Object.preventExtensions 方法的捕捉器
	 - handler.getOwnPropertyDescriptor(): Object.getOwnPropertyDescriptor 方法的捕捉器
	 - handler.defineProperty(): Object.defineProperty 方法的捕捉器
	 - handler.deleteProperty(): delete 操作符的捕捉器
	 - handler.ownKeys(): Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器
	 - handler.construct(): new 操作符的捕捉器

 - 注意：如果一个属性不可配置 || 不可写，则该属性不可被代理，通过 Proxy 访问该属性会报错。
 - * 标记的trap为本文都要涉及到的

 ##### proxy 能干什么？

 当进行以下操作时proxy模式通常会很有用：
 	- 拦截或控制对某个对象的访问。
 	- 通过隐藏事务或者辅助逻辑来减小方法/或者类的复杂性
 	- 防止在未经验证/准备的情况下执行重度依赖资源的操作

#### 一、JavaScript中真正的私有变量/拦截has...in...操作/给出提示信息或是阻止特定操作

##### 传统方法私有变量可获取可修改

```javascript
const PrivateTar = function (){
	this.title = '定义公共变量'
	this.set = secrect => {
		_secrectTar = secrect;
	};
	this.get = () => {
		return _secrectTar
	}
}

const privateTar = new PrivateTar();
privateTar.set('set变量');
console.log(privateTar.title); // 定义公共变量
console.log(privateTar.get()); // "set变量"
console.log(privateTar._secrectTar); indefined
```

##### proxy 设置私有变量

 - 针对私有变量，可以使用一个proxy来截获针对某个属性的请求并作出限制或是直接返回 undefined
 - 还可以使用 has trap 来掩盖这个属性的存在

 ```javascript
let TargetData = {
	_secrectTar: '定义私有变量',
	title: '定义公共变量'
}
ProxyTarget = new Proxy(TargetData, {
	get: function(target, prop){
		// 以下划线开头的是私有变量
		if(prop.startWidth('_')){
			console.log('不能获取私有变量！');
			return false
		}
		// 非私有变量，返回原属性值
		return target[prop];
	},
	set: function(target, prop, value){
		if(prop.startWidth('_')){
			console.log('不能修改私有变量！');
			return false
		}
		target[prop] = value;
	},
	// in操作符的捕捉器
	has: function(target, prop){
		return prop.startWidth('_') ? false : (prop in target)
	}
})

PrivateTarget._secrectDrink; // 不能获取私有变量！
console.log(ProxyTarget.title); // '定义公共变量'
PrivateTarget._secrectDrink = '修改私有变量' // 不能修改私有变量
console.log('_secrectDrink' in ProxyTarget) // false
console.log('title' in ProxyTarget) // true
 ```

 - `has` 方法拦截的是 `hasProperty` 操作，不是 `hasOwnProperty`,所以 `	has...in` 方法不判断一个属性是自身属性还是继承的属性

 - 注意: `has...in` 可以拦截到，`for...in` 拦截不到

 - 阻止其他人删除属性，想让调用方法的人知道该方法已经被废弃，或是想阻止其他人修改属性

 ```javascript
let dataStore = {
	noDelete: 12345,
	oldMethod: () => {},
	doNotChange: 'tried or true'
}

const NODELETE = ['noDelete'];
const DEPRECATED = ['oldMethod'];
const NOCHANGE = ['doNotChange'];

dataStore = new Proxy(dataStore, {
	set(target, key, value, proxy){
		if(NOCHANGE.includes(key)){
			throw Error(`Error! ${key} is immutable`);
		}
		return Reflect.set(target, key, value, proxy)
	},
	deleteProperty(target, key){
		if(NODELETE.includes(key)){
			throw Error(`Error! ${key} cannot be deleted.`);
		}
		return Reflect.deleteProperty(target, key)
	},
	get(target, key, proxy){
		if(DEPRECATED.includes(key)){
			console.warn(`warning! ${key} is deprecated.`);
		}

		return typeof val === 'function' ? function(...args){
			Reflect.apply(target[key], target, args)
		} : target[key]
	}
})

dataStore.doNotChange = 'foo' // error: doNotChange is immutable
delete dataStore.noDelete // error: noDelete cannot be deleted
dataStore.oldMethod();  // warning: oldMethod is deprecated
 ```

- 注意: 要是 Proxy 代理起作用，必须针对 Proxy 的实例进行操作，而不是针对目标对象进行操作

#### 数据校验(看代码)

- 利用Proxy代理简单数据校验

```javascript
let ValidTarget = {
	phoneNum: '17612345678'
}

ValidTarget = new Proxy(ValidTarget, {
	set: function(target, prop, value){
		if(prop === 'phoneNum'){
			// 电话号码校验
			let re = /^1[0-9]{10}$/;
			if(!re.test(value)){
				throw Error(`cannot set ${prop} to ${value}.Wrong format.Should be 1xx-xxxx-xxxx`)
			}
		}
		target[prop] = value
	}
})

ValidTarget.phoneNum = '12312378900' // error message
```
- 校验逻辑直接加在代理处理函数中过于繁重，我们可以把校验模块直接抽离出来，只需要去处理校验的逻辑，代理层面后续不需要改动

```javascript
let ValidatorUtil = {
	phoneNum: function(value){
		let re = /^1[0-9]{10}$/;
		if(!re.test(value)){
			throw Error(`cannot set ${prop} to ${value}.Wrong format.Should be 1xx-xxxx-xxxx`)
		}		
	}
}

proxyTargetValidUtil = new Proxy(ValidatorUtil, {
	set: function(target, prop, value){
		if(!ValidatorUtil[prop][value]){
			target[prop] = value;
		}
	}
})

proxyTargetValidUtil.phoneNum = '123123123121' // error message
```

#### 三：利用proxy进行记录对象访问

 - 针对那些重度依赖资源，执行缓慢或是频繁使用的方法或接口，统计它们的使用或是性能
 - 可以记录各种各样的信息而不用修改应用程序的代码或是阻塞代码执行。并且只需要在这些代码的基础上稍事修改就可以记录特性函数的执行性能

 ```javascript
let api = {
	apiKey: 'xxx',
	getUsers: () => {}
}

api = new Proxy(api, {
	get: (target, key, proxy) => {
		var value = target[key];
		return function(){
			logMethodAsync(new Date(), key)
			return Reflect.apply(value, target, arguments)
		}
	}
})

api.getUsers();

function logMethodAsync(timestamp, method){
	setTimeOut(() => {
		console.log(`${timestamp} - Logging ${method} request asynchronously.`)
	}, 0)
}
 ```

 - 以上例子就是一个监听函数执行的代理，可以将其进行扩展为打点函数
 - 这里面 Proxy 的 trap 为什么使用 get 而不是 apply ? [答案](https://exploringjs.com/es6/ch_proxies.html#_intercepting-method-calls)

#### 四：普通函数与构造函数的兼容

 - 构造函数调用没有使用new关键字来调用的话， class对象会直接抛出异常
 - 使用`proxy`进行封装让构造函数也能够直接进行函数调用

 ```javascript
class Test {
	constructor(a,b){
		console.log('constructor', a, b)
	}
}

// Test(1,2) // throw an error(非new方式调用报错)
let proxyClass = new Proxy(Test, {
	apply: (target, thisArg, argumentsList) =>{
		//如果想要禁止使用非new的方式调用函数，直接抛出异常即可
		//throw new Error(`Function ${target.name} cannot be invoked widthout 'new！'`)
		return new (target.bind(thisArg, ...argumentsList))()
	}
})
proxyClass(1,2) // constructor: 1,2
```

#### 五：深层取值判断(看代码)

 - 需要解决的几个问题
    - 获取数据进行拦截
    - `xxx.xxx.xxx...`无论 `undefined` 出现在哪里都不能报错
    - `Proxy` 的 `get()` 传入的参数必须是对象
 - 传统方式深层取值繁琐，利用Proxy可以简化不必要代码

 ```javascript
 const country = {
 	name: 'China',
 	city: {
 		name: 'BeiJing',
 		area: {
 			name: 'haiDian'
 		}
 	}
 }
 const country = {
 	name: 'China',
 	city: {
 		name: 'BeiJing',
 		area: {
 			name: 'haiDian'
 		}
 	}
 }
 //传统方式
 const areaName = country.city 
 		&& country.city.area 
 		&& country.city.area.name
const areaId = country.provice.city.area.name;

// 利用Proxy get()拦截，实现(要注意的是proxy第一个参数传入的是对象)
// 基础版： 利用get()对传入的对象进行拦截
function getData(obj){
	return new Proxy(obj, {
		get(target, prop){
			return target[prop];
		}
	})
}

let res = getData(country).provice;
console.log(res) // undefined
 ```
 - 但是当 `target[prop]` 是 `undefined` 的时候，`Proxy get()`的入参变成了 `undefined`，但 `Proxy` 第一个入参必须为对象

 - 需要对 obj 为 `undefined` 的时候进行特殊处理，为了能够深层取值，所以使用一个空函数进行设置拦截，利用 `apply` trap 进行处理

 ```javascript
 const country = {
 	name: 'China',
 	city: {
 		name: 'BeiJing',
 		area: {
 			name: 'haiDian'
 		}
 	}
 }
 function noop(){}
 function getData(obj){
 	//这里拦截的是noop函数
 	return new Proxy(noop, {
 		// 这里支持返回执行的传入的参数
 		apply(target, context, [arg]){
 			return obj
 		},
 		get(target, prop){
 			return getData(obj[prop]);
 		}
 	})
 }
 let res1 = getData(country)() === country; // true
 let res2 = getData(country).city.name(); // Beijing
 let res3 = getData(country).city.name.xxx.yyy.zzz() // cannot read property 'yyy' of undefined
 ```

 - 我们理想中的应该是，如果属性为 `undefined` 就返回 `undefined`，但仍要支持访问下级属性，而不是抛出错误

 - 顺着这个思路来的话，很明显当属性为 `undefined` 的时候也需要用 `Proxy` 进行特殊处理
所以我们需要一个具有下面特性的 `get()` 方法

```javascript
	getData(undefined)() === undefined; // true
	getData(undefined).xxx.yyy.zzz(); // undefined
```

 - 这里完全不需要注意 `get(undefined).xxx` 是否为正确的值，因为想获取值必须要执行才能拿到
 - 那么只需要对所有 `undefined` 后面访问的属性都默认为 `undefined` 就好了,所以我们需要一个代理了 `undefined` 后的返回对象
 - 同时为了解决无限循环执行的问题，当第一次检测到出现 `undefined` 的时候，停止执行

```javascript
let isFirst = true;
function noop(){}
let proxyVoid = getData(undefined);
function getData(obj){
	if(obj === undefined && !isFirst){
		// 让get 方法第一次接收代理 undefined 的时候不会死循环
		return proxyVoid;
	}
	if(obj === undefined && isFirst){
		isFirst = false;
	}
	// 注意这里拦截的是noop函数
	return new Proxy(noop, {
		// 这里支持返回执行的时候传入参数
		apply: function(target, context, [arg]){
			return obj === undefined ? arg : obj;
		},
		get: function(target, prop){
			if(obj !== undefined &&
			   obj !== null &&
			   obj.hasOwnProperty(prop)){
				return getData(obj[prop])
			}
			return proxyVoid;
		}
	})
}

let res1 = getData(country)() === country; // true
let res2 = getData(country).city.name(); // Beijing
let res3 = getData(country).city.name.xxx.yyy.zzz() // undefined
```

#### 六、日志上报

 - [腾讯利用Proxy进行日志上报功能](https://www.infoq.cn/article/6eKiic82aQu3uqaYvvfV)

### Vue 3.0 的 Proxy & Object.defineProperty

#### Proxy 
  - **劫持方式:** 代理整个对象，只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性
  - **本质**： `Proxy`本质上属于元编程非破坏性数据劫持，在原对象的基础上进行了功能的衍生而又不影响原对象，符合松耦合高内聚的设计理念

#### Object.defineProperty

  - **劫持方式:** 只能劫持对象的属性，不能直接代理对象
  - **流程:** get中进行依赖收集，set数据时通知订阅者更新
  - **存在的问题:** 虽然 Object.defineProperty 通过为属性设置 getter/setter 能够完成数据的响应式，但是它并不算是实现数据的响应式的完美方案，某些情况下需要对其进行修补或者hack，这也是它的缺陷，主要表现在两个方面：
       
       - 无法检测到对象属性的新增或删除
       - 不能监听数组的变化

```javascript
let boy = {
	name: 'Jack',
	age: 22
}
boy = new Proxy(boy, {
	set: (target, prop, value) =>{
		console.log('监听属性值得变化',prop)
		target[prop] = value + '&Rose';
		return true;
	},
	get: (target, prop) =>{
		return target[prop] + '&Proxy';
	}
})
boy.name = 'Jack'; //监听到值得变化 name
boy.sex = 'male'; //监听到值的变化 sex
console.log(boy.sex) // male&Rose&Proxy
```
##### 1. Object.defineProperty 无法监听新增加的属性

 - 解决方式：提供方法重新手动Observe，需要监听的话使用`Vue.set()`重新设置添加属性的响应式

 ```javascript
let girl = {
	name: 'Rose',
	age: 22,
	hobbies: ['篮球', '足球', '游泳']
}

observe(girl)
function observe(data){
	if(!data || typeof data !== 'object') return
	//取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data, key, data[key]);
	})
}
function defineReactive(data, key, val){
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		set: function(newVal){
			console.log('监听到值得变化', newVal);
			val = newVal;
		},
		get: function(){
			return val + '&defineProperty';
		}
	})
}

girl.name = 'RoseRose' // 监听到值得变化 RoseRose
console.log(girl.name) // RoseRose&defineProperty
girl.sex = 'female';
console.log(girl.sex) // female
defineReactive(girl, 'sex', 'other');
console.log(girl.sex) //other&defineProperty
 ```

##### 2. Object.defineProperty 无法一次性监听对象所有属性，如对象属性的子属性

   - 解决方式: 通过递归调用来实现子属性响应式

```javascript
let girl = {
	name: 'Rose',
	nickName: {
		name: 'RoseNickName'
	},
	age: 22,
	hobbies: ['篮球', '足球', '游泳']
}

observe(girl)
function observe(data){
	if(!data || typeof data !== 'object') return
	//取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data, key, data[key]);
	})
}

function defineReactive(data, key, val){
	// 递归制造响应式数据
	observe(val)
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		set: newVal => {
			observe(val)
			console.log('监听到值得变化', newVal);
			val = newVal;
		},
		get: function(){
			return val;
		}
	})
}

girl.nickName.name = 'RoseNickNameChange'; // 监听到值的变化RoseNickNameChange
console.log(girl.nickName.name) // RoseNickNameChange
```

##### 3. Object.defineProperty 无法响应数组操作

 - 解决方式：通过遍历和重写Array数组原型方法操作方法实现，但是也只限制在`push/pop/shift/unshift/splice/sort/reverse`这七个方法，其他数组方法及数组的使用则无法检测到，也无法监听数组索引的变化和长度的变更

```javascript
let girl = {
	name: 'Rose',
	nickName: {
		name: 'RoseNickName'
	},
	age: 22,
	hobbies: ['篮球', '足球', '游泳']
}

const originalProto = Array.prototype;
//先克隆一份Array的原型出来
const arrayProto = Object.create(originalProto);
const methodsToPatch = [
	'push',
	'pop',
	'shift',
	'unshift',
	'splice',
	'sort',
	'reverse'
]

methodsToPatch.forEach(method => {
	arrayProto[method] = function(){
		//执行原始操作
		console.log('监听到方法的执行', method);
		originalProto[method].apply(this, arguments);
	}
})

function observe(data){
	if(!data || typeof data !== 'object') return

	if(Array.isArray(data)){
		// 如果是数组，重写原型
		//data.__prpto__ = arrayProto
		Object.setPrototypeOf(data, arrayProto)
		// 传入的可能是多维度的，也需要执行响应式
		for(let i = 0; i < data.length; i++){
			observe(data[i])
		}
	} else {
		// 取出所有属性遍历
		Object.keys(data).forEach(key =>{
			defineReactive(data, key, data[key])
		})
	}
}

function defineReactive(data, key, val){
	observe(val)
	//递归制造响应式数据
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		set: newVal => {
			val = newVal;
		},
		get: function(){
			return val;
		}
	})	
}

observe(girl)

girl.hobbies.push('健身') // 监听到方法执行 push
console.log(girl.hobbies)  // ['篮球', '足球', '游泳']
```
 
##### 4. Proxy 拦截方式更多(如：文章开头提到的13种方式); Object.defineProperty 只有 get 和 set

##### 5. Proxy 性能问题

- `Proxy` 的性能比 `Promise` 还差
- `Proxy` 作为新标准，从长远来看，JS 引擎会继续优化 `Proxy`
- [Thoughts on ES6 Proxies Performance](https://thecodebarbarian.com/thoughts-on-es6-proxies-performance)
- [Proxy 性能之我见](https://www.cnblogs.com/zmj97/p/10954968.html)

##### 6. Proxy 兼容性差

  - `Vue 3.0` 中放弃了对于IE的支持(以为`Vue 3.0`中会对不兼容的浏览器进行向下兼容，但是经过查看资料和源码发现尤大压根没做兼容)
  - 目前并没有一个完整支持`Proxy`所有拦截方法的`Polyfill`方案，有一个 `google` 编写的`proxy-polyfill`也只支持了`get/set/apply/construct`四种拦截