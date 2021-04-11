## ES6遍历数组和对象的方法总结

1、every 数组的每一项都返回true，遍历完整个数组，最终返回值才为true

```sh
  arr.every((val,index,arr)=>{
　　　　return val<10;
　　})
```
2、some 数组任意一项返回true，则停止遍历，返回值为true

```sh
arr.some((val,index,arr)=>{
　　　　return val<10;
　　})
```

3、filter 遍历整个数组，找到符合的元素，返回这个新组成的数组

```sh
　arr.filter((val,index,arr)=>{
　　　　return val<10;
　　})
```

4、map 遍历整个数组，返回每个元素调用后的结果组成新的数组

```sh
arr.map((val,index,arr)=>{
　　　　return val**2;
　　})
```

5、forEach 遍历数组每一项

```sh
arr.foreach((val,index,arr)=>{
　　　　return val**2;
　　　})
```

6、数组累加器reduce、reduceRight

```sh
arr.reduce((preValue, currentValue)=>{
　　　　return preValue + currentValue
　　})
```

7、for of方法不仅可以遍历数组和对象，还可以遍历自定义的数据结构

```sh
  let arr = [1,2,3,4,5]
  for(let item of arr){
    console.log(item)
  }
```

8、for...in既可以遍历对象也可以遍历数组
```sh
var arr = ['a', 'b', 'c', 'd'];
for(var i in arr) {
  console.log('index:', i, 'value:', arr[i])
}
```

### ES5~ES8 数组拥有的方法
1、判断是否是数组 Array.isArray( arg ) 有兼容性;<br/>
2、toString 数组转字符串 arr.toString();<br/>
3、join 数组每一项间的拼接 arr.join(); String.split();<br/>
4、pop 删除原数组最后一项，返回删除项 arr.pop() 原数组被修改;<br/>
5、push 在原数组末尾添加一项，返回数组新长度，改变原数组<br/>
　　arr.push( ...arg )<br/>
6、shift 删除数组第一项，改变原数组，返回删除项<br/>
　　arr.shift( );<br/>
7、unshift 在原数组首位添加项，返回数组新长度<br/>
　　arr.unshift( ...arg );<br/>
8、reverse 反转数组项的顺序，返回修改后的数组<br/>
　　arr.reverse();<br/>
9、sort 数组每项按照unicode编码排序，默认升序<br/>
　　arr.sort(); <br/>
10、concat 数组合并，返回合并后的数组   arr1.concat( arr2 );<br/>
11、slice 截取数组 参数一：开始位置 参数二：结束位置后一位 <br/>
　　    参数为负数，用数组总长度加上该负数来确定位置;<br/>
　　　结束位置小于起始位置，返回空数组<br/>
　　arr.slice(arg1,arg2)<br/>
12、splice 删除、插入、替换数组元素<br/>
　　参数一：起始位置<br/>
   参数二：删除元素个数<br/> 
   参数三：插入的元素<br/>
　　arr.splice(arg1,arg2,arg3)<br/>
　　返回被删除的项，会改变原数组。<br/>
13、indexOf/lastIndexOf 数组中查找元素的位置<br/>
　　参数一：要查找的元素 <br/>
   参数二：开始查找位置 返回值-1 不存在，返回值大于等于0表示元素位置<br/>
　　arr.indexOf(arg1,arg2) 从左往右查找<br/>
　　arr.lastIndexOf(arg1,arg2) 从右往左查找<br/>

### 总结：

1、forEach、map、filter都可以遍历数组<br/>
2、forEach操作的原数组，map、filter会返回一个新的数组<br/>
3、纯粹的遍历操作使用forEach，如果想得到原数组的克隆使用map，如果想根据条件筛选使用filter<br/>

### ES6新增数组方法

1、from 将类似数组的对象和可遍历的对象转为真正的数组。<br/>
　　`Array.from(["a","b","c"])`<br/>
　　`Array.from("fool")`<br/>
2、of 将一组值转为数组 弥补Array()的不足<br/>
　　`Array.of(7) //[,,,,,,]`<br/>
　　`Array.of(7) // [7]`<br/>
　　`Array.of(1, 2, 3); // [1, 2, 3]`<br/>
3、copyWithin 将数组中指定位置的元素复制到其他位置（会覆盖掉原有元素）<br/>
　　参数一：从该位置开始替换元素 <br/>
   参数二：从该位置开始读取数据，默认为0 <br/>
   参数三：到该位置停止读 取数据，默认为数组长度<br/>
　　`arr.copyWithin(arg1,arg2,arg3)`<br/>
4、fill 使用给定值，填充数组 参数一：给定的值 参数二：起始位置 参数三：结束位置<br/>
　　`arr.fill(arg1,arg2,arg3)`<br/>
5、find/findIndex 找到数组中符合条件的值/位置，若没找到返回undefined<br/>
```sh
　　arr.find((val,index,arr)=>{
　　　　return val>9;
　　})
```
6、keys() 遍历数组获取键名<br/>
   values() 遍历数组获取键值<br/>
   entries() 遍历数组获取键值对<br/>
  ```sh
　　for(let [index,val] of arr.keys()) {
　　　　console.log(val)
　　}
  ```
### ES7.0新增的数组方法

1、includes 判断数组中是否存在该元素 弥补indexOf不能判断NaN<br/>
　　`arr.includes()`

### ES8没有新增数组方法

### ES6遍历对象的方法总结

1、for … in 循环遍历对象自身的和继承的可枚举属性(循环遍历对象自身的和继承的可枚举属性(不含Symbol属性))。

![aYLePO.png](https://s1.ax1x.com/2020/08/02/aYLePO.png)

2、使用Object.keys()遍历 (返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)).

![aYLmGD.png](https://s1.ax1x.com/2020/08/02/aYLmGD.png)

![aYLuxH.png](https://s1.ax1x.com/2020/08/02/aYLuxH.png)

3、Object.getOwnPropertyNames(obj),返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).

```sh
var obj = {'0':'a','1':'b','2':'c'};

Object.getOwnPropertyNames(obj).forEach(function(key){
    console.log(key,obj[key]);
});
```

4、Reflect.ownKeys(obj),返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.

```sh
var obj = {'0':'a','1':'b','2':'c'};

Reflect.ownKeys(obj).forEach(function(key){
console.log(key,obj[key]);
});
```

![aYLMMd.png](https://s1.ax1x.com/2020/08/02/aYLMMd.png)