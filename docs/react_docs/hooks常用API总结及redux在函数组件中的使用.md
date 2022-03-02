### hooks常用API总结 && redux在函数组件中的使用

#### 一、hooks常用API总结

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


#### 二、redux在函数组件中的使用

##### state、action、reducer关系
  - reducer是一个纯函数。对store的修改都通过action描述动作去纯函数修改store而不是直接修改store数据。
  - 优点：
    - 可预测性
    - 易于调试

![HCDWPs.jpg](https://s4.ax1x.com/2022/01/30/HCDWPs.jpg)

##### redux的使用逻辑

![HCDcVg.jpg](https://s4.ax1x.com/2022/01/30/HCDcVg.jpg)

##### redux处理异步逻辑
 - 引入中间件去进行处理。thunk、saga的中间件角色
 - 常用的thunk和saga其实只是中间件作用，在action和reducer中间添加一层去进行异步处理，action和reducer的逻辑不变


![HCDtVe.jpg](https://s4.ax1x.com/2022/01/30/HCDtVe.jpg)