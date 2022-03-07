## uni-app项目公共方法封装

### uni-app 环境配置，uni.request封装，接口配置，全局配置，接口调用的封装


#### 1.环境配置

common文件夹下新建config.js

```sh
let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'https://*****.com/'
}else{
    // 生产环境
    url_config = 'https://*****.com/'
}

export default url_config
```

#### 2.uni.request封装

common文件夹下新建request.js

```sh
import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'
    
request.globalRequest = (url, method, data, power) => {
/*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
    1 == 不通过access_token校验的接口
    2 == 文件下载接口列表
    3 == 验证码登录 */
        
    switch (power){
        case 1:
            headers['Authorization'] = 'Basic a3N1ZGk6a3N1ZGk='
            break;
        case 2:
            headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
            break;
        case 3:
            responseType = 'blob'
            break;
        default:
            headers['Authorization'] = `Bearer ${
                this.$store.getters.userInfo
            }`
            headers['TENANT-ID'] = this.$store.getters.userInfo.tenant_id
            break;
    }
            
    return uni.request({
        url: urlConfig + url,
        method,
        data: data,
        dataType: 'json',
        header: headers
    }).then(res => {
        if (res[1].data.status && res[1].data.code == 200) {
            return res[1]
        } else {
            throw res[1].data
        }
    }).catch(parmas => {

　　　　　　switch (parmas.code) {
　　　　　　　　case 401:
　　　　　　　　　　uni.clearStorageSync()
　　　　　　　　　　break
　　　　　　　　default:
　　　　　　　　　　uni.showToast({
　　　　　　　　　　　　title: parmas.message,
　　　　　　　　　　　　icon: 'none'
　　　　　　　　　　})
　　　　　　　　　　return Promise.reject()
　　　　　　　　　　break
　　　　　　}

　　})
 } export default request
```

#### 3.接口配置

项目根目录下新建api文件，api下新建index.js

```sh
import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = 'baseinfo'
// POST请求方式
api.register = params => request.globalRequest(`${PORT1}/mobile/signUp`, 'POST//必须大写，为了兼容其他应用', params, 1)// GET请求方式api.register = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET //必须大写，为了兼容其他应用',{}, 1)
export default api
```

#### 4. 新建common/util.js

```sh
/**
 * 拼接对象为请求字符串
 * 对于需要编码的文本（比如说中文）我们要进行编码
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 **/
export function formatGetUri(obj) {
  const params = []
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    if (typeof value !== 'undefined' || value !== null) {
      params.push([key, encodeURIComponent(value)].join('='))
    }
  })
  return '?' + params.join('&')
}
```

#### 5.全局配置

在main.js中新增

```sh
import Vue from 'vue'
import App from './App'
import store from './store'  // 与vue项目中配置相同，可自行配置

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'


Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})

app.$mount()
```

接口调用

```sh
this.$api.register({mobile: this.mobile}).then(res => {
   // 获得数据 
   console.log(res) 
}).catch(res => {
　　// 失败进行的操作
})
```