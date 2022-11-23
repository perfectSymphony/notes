### hooks常用API总结 & redux工作流程分析

### 一、hooks常用API总结

React一共有10个hooks，`useState`、`useEffect`、`useCallback`、`useMemo`、`useRef`、`useContext`等等

##### 1、useState：让函数具有维持状态的能力

我们要遵循的一个原则就是：<strong>state 中永远不要保存可以通过计算得到的值</strong>，例如：

  - 从 props 传递过来的值。有时候 props 传递过来的值无法直接使用，而是要通过一定的计算后再在 UI 上展示，比如说排序。那么我们要做的就是每次用的时候，都重新排序一下，或者利用某些 cache 机制，而不是将结果直接放到 state 里。
  - 从 URL 中读到的值。比如有时需要读取 URL 中的参数，把它作为组件的一部分状态。那么我们可以在每次需要用的时候从 URL 中读取，而不是读出来直接放到 state 里。
  - 从 cookie、localStorage 中读取的值。通常来说，也是每次要用的时候直接去读取，而不是读出来后放到 state 里。

##### 2、useEffect：执行副作用

<strong>副作用是指一段和当前执行结果无关的代码。</strong>

比如说要修改函数外部的某个变量，要发起一个请求。形式：`useEffect(callback, dependencies)`。涵盖了`componentDidMount`、`componentDidUpdate` 和`componentWillUnmount`三个生命周期方法。简而言之，useEffect 是每次组件 render 完后判断依赖并执行。

使用useEffect应该注意的点：

 - 没有依赖项，则每次 render 后都会重新执行

    ```sh
        useEffect(()=>{
            console.log('re-render')		//每次render完成一次后就执行
        })
    ```

- 空数组作为依赖项，则只在首次执行时触发，对应到 Class 组件就是 componentDidMount

    ```javascript
        useEffect(()=>{
        console.log('did mount')		//相当于componentDidMount
        },[])
    ```

- 可以返回一个函数，用在组件销毁的时候做一些清理的操作

    ```sh
        const [size,setResize] = useState({})
        useEffect(()=>{
            const handler = () => {
            setResize()
            }
            window.addEventListener('resize',handler)
            return ()=>{
                window.removeEventListener('resize',handler)
            }
        },[])
    ```
<strong>总结useEffect使用的四个场景</strong>

 - 每次 render 后执行：不提供第二个依赖项参数。比如useEffect(() => {})。
 - 仅第一次 render 后执行：提供一个空数组作为依赖项。比如useEffect(() => {}, [])。
 - 第一次以及依赖项发生变化后执行：提供依赖项数组。比如useEffect(() => {}, [deps])。
 - 组件 unmount 后执行：返回一个回调函数。比如useEffect() => { return () => {} }, [])。


##### 3、useCallback：缓存回调函数

<strong>React函数组件中，每一次UI的变化都是通过重新执行整个函数来完成的</strong>，函数组件中并没有一个直接的方式在多次渲染之间维持一个状态。例如，通过demo理解：

```sh
    function Counter(){
        const [count,setCount] = useState(0)
        const handleAdd = () => setCount(count+1)
        
        //...other code 
        return <button onClick={handleAdd}>+</button>
    }
```

 - 每次组件状态发生变化的时候，函数组件都会重新执行一边
 - <strong>每次执行的时候，函数内部都会重新创建一个handleAdd的事件处理函数</strong>（这个事件处理函数包含了count这个变量的一个闭包用于保证每次执行的拿到正确的结果），实际上并不是每次的函数组件重新渲染的时候都需要去重新创建一个事件处理函数。虽然结果不影响，但是<strong>增加了系统开销</strong>、并且<strong>每次创建新的函数的方式会让接收事件处理函数的组件重新渲染</strong>（因为，比如这个例子中的button，接收了handleAdd，如果handleAdd发生改变就会认为这个组件的props发生了变化从而去重新渲染）
 - 实际上，我们需要做到的是只有count发生变化的时候才会去重新定义这个组件。<strong>保证了组件不会创建重复的回调函数。而接收这个回调函数作为属性的组件，也不会频繁地需要重新渲染</strong>


 ##### 5、useMemo：缓存计算结果

使用场景：某个数据是通过其他数据计算得到的。只有当用到的数据（依赖）发生变化的时候才需要重新计算。

##### 6、useRef：在多次渲染之间共享数据

可以把useRef看作函数组件之外创建的一个容器空间，这个容器空间上我们可以通过唯一的current属性设置一个值，从而可以在多次渲染之间共用这个值。

使用场景：

 - <strong>window.setInterval计时组件提供计时功能</strong>，需要保存这个计数器的引用方便停止和开始，这时候采用useRef去保存十分合适。

```sh
    export default const Timer () {
        const [time,setTime] = useState(0)
        const timer = useRef(null)
        const handleStart = useCallback(()=>{
            timer.current = window.setInterval(()=>{
                setTime(time=>time+1)
            },100)
        },[])
        const handlePause = useCallback(()=>{
            window.clearInterval(timer.current)
        },[])
        return (
        <div>
            {time/10}seconds
            <br/>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>End</button>
        </div>
        )
    }
```

 - 保存dom节点的引用

    ```sh
        function TextFocusBtn(){
        const inputEl = useRef(null)
        const onBtnClick = () => {
            inputEl.current.focus()
        }
        return (
            <>
                <input ref={inputEl} type="text"/>
                <button onClick={onBtnClick}></button>
            </>
        )
        }
    ```

- useRef保存的数据一般是和UI渲染无关的，因此ref的值发生变化的时候是不会触发组件的重新渲染的。

##### 7、useContext：定义全局状态

 - 目的：跨层次或者同层的组件之间进行数据的共享

```sh
    const themes = { light: { foreground: "#000000", background: "#eeeeee" }, dark: { foreground: "#ffffff", background: "#222222" }};
    const ThemeContext = React.createContext(theme)
    function App(){
        return <ThemeContext.Provider>
            //...
            <ToolBar/>
        </ThemeContext.Provider>
    }

    function ToolBar(){
        return <div>
            <ThemeBtn/>
        </div>
    }

    function  ThemeBtn(){
        const theme = useContext(ThemeContext)
        return <button style={theme.dark}>Style Theme Btn</button>
    }
```

- 为什么不使用全局变量而要去使用这种复杂机制进行共享？能够进行数据的绑定，也就是Context数据变化的时候需要自动刷新


### 二、redux工作流程分析

#### (1) Redux的设计思想：

- React 只是 DOM 的一个抽象层，并不是web应用的完整解决方案。没有涉及代码结构和组件间的通信。
- web应用是一个状态机，视图与状态是一一对应的
- 所有的状态，保存在一个对象里面（唯一数据源）、
- 目的：实现集中式状态管理
- 如果你不知道是否需要 Redux ，那就是不需要它
- 只有遇到 React 实在解决不了的问题，你才需要Redux

  - reducer是一个纯函数。对store的修改都通过action描述动作去纯函数修改store而不是直接修改store数据。
  - 优点：
     - 可预测性
     - 易于调试
----

 - 简单说，如果你的UI层非常简单，没有很多互动，Redux就是不必要的，用了反而增加复杂性
 - 比如：
 - 用户的使用方式非常简单
 - 用户之间没有协作
 - 不需要与服务器大量交互，也没有使用WebSocket
 - 视图层（View）只从单一来源获取数据

 ---
 - 需要使用Redux的项目：
   - 用户的使用方式复杂
   - 不同身份的用户有不同的使用方式（比如普通用户和管理员）
   - 多个用户之间可以协作
   - 与服务器大量交互，或者使用了WebSocket
   - View 要从多个来源获取数据

 ---

- 从组件层面考虑，什么样子需要Redux：
  - 某个组件的状态，需要共享
  - 某个状态需要在任何地方都可以拿到
  - 一个组件需要改变全局状态
  - 一个组件需要改变另一个组件的状态


#### (2) 三大原则

 - 单一数据源
> 整个应用的state被存储在一棵对象结构树中,（整个state不是组件中的state，请不要混淆）,并且这个对象结构只存在唯一一个store中

 - State 是只读的
> 唯一改变 state 的方法就是触发 dispatch+action, action是一个用于描述已发生时间的**普通对象**,（action普通对象必须要有`type`属性，值是什么无所谓，其余属性也无所谓）

 - 数据的改变必须通过纯函数完成

 > 为了描述action如何改变state tree，我们需要编写reducer; reducer必须是纯函数，它接收先前的state和action，并返回新的state（不会合并的，自行注意这个坑）; 一个函数的返回结果只接收其形参的影响，则其就是纯函数

#### (3) 工作流程图
 
![z828aR.png](https://s1.ax1x.com/2022/11/23/z828aR.png)

 - 完整版

<strong>先来个简单版本的：</strong>

 - Store 相当于老板
 - Reducers 相当于厨师
 - Action Creators相当于服务员
 - React Component 相当于顾客
 - 打个比方：
1、顾客（React Component）想吃点东西，于是就把吃啥告诉了服务员（Action Creators）<br/>
2、服务员（Action Creators）就用菜单（dispatch）记录（action）下来，点了什么菜（type），和数量（data）。<br/>
3、然后把菜单（ dispatch(action) ）交给了老板（Store），老板就根据菜单上的内容，告诉给厨师（Reducers）让他炒什么菜<br/>
4、厨师（Reducers）收到老板的指示后，迅速的把菜做好。并端给（return newState）老板（Store）。<br/>
5、菜放到老板这后，老板（Store）就通知顾客（React Component）来取餐（getState）<br/>
 - （previousState, action）：顾客如果开始点了一个蛋炒饭，后面又加了一个紫菜汤。
 - 此时表示蛋炒饭之前的数据（previousState），紫菜汤表示现在的数据（ action）

---

<strong>再来看具体实现的：</strong>

- `Action`：动作的对象，有两个属性

> type：标识属性，值为字符串，唯一，必选参数; <br/>
 data：数据属性，值类型任意，可选参数

- `Reducer`：用于初始化状态和加工状态

>加工时根据旧的state值和传过来的action;  <br/>
生成新的state的值，是一个纯函数

 - `Store`：将state、action、reducer联系在一起的对象，相当于指挥者

 > 1. 创建store对象：createStore(reducer);<br/>
 > 2. 获取state的值：getState()<br/>
 > 3. 派发动作：dispatch(action)<br/>
 > 4. 注册监听：subscribe() 当产生新的 state 时，自动调用<br/>


#### redux处理异步逻辑
 - 引入中间件去进行处理。thunk、saga的中间件角色
 - 常用的thunk和saga其实只是中间件作用，在action和reducer中间添加一层去进行异步处理，action和reducer的逻辑不变

![HCDtVe.jpg](https://s4.ax1x.com/2022/01/30/HCDtVe.jpg)


#### 问题记录

> redux 中dispatch一个方法 return后的值去哪了?

我理解为 dispatch 就是发布，他接受一个 object 发送给 reducer <br/>
你发布的object 由 action 决定 <br/>
所以action 是 return 一个 特定的 object <br/>
你在里面 请求等异步操作 是使用了一个中间件实现的 thunk <br/>
但最终的你的action 还是返回一个 object <br/>
object 最终给到 reducer ，<br/>
一般根据 type 区分 改变 reducer 也就是store <br/>
一般看到的就是一个switch （action.type）<br/>
当然你也可以换成 if else 也可以不用type 区分 <br/>
因为react 是数据驱动，所以 view 就会相应变化 <br/>

另外一个dispatch 可以触发多个 reducer 改变 <br/>

比如你一个 click 事件，“我要获取帖子列表” <br/>
dispatch（去服务器拿）<br/>

action 一个纯函数，<br/>
服务器给我数据，拿到之后 <br/>
return 一个｛type：拿到数据了，data：[...]｝<br/>

然后reducer A 拿到数据了，好！<br/>
把store.post.push（action.data）<br/>

reducer B 我也关心这个信息 <br/>
store.hasnewpost = true <br/>
