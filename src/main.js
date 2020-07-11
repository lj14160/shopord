import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 导入mint-ui 插件
import Mint from './plugins/mintui.js'
import 'mint-ui/lib/style.css'

import './assets/global.css'



//导入基础路由请求头
Vue.prototype.$http=axios
axios.default.baseURL='https://www.sinya.online/api/'

Vue.config.productionTip = false

//设置全局过滤器
Vue.filter('newTime',function(time){
  const timeStr=new Date(time)
  const year =timeStr.getFullYear()
  const mouth=timeStr.getMonth()+1
  const date=timeStr.getDate()
  const hour=timeStr.getHours()
  const minute=timeStr.getMinutes()
  const seconds=timeStr.getSeconds()
  return `${year}-${mouth}-${date} ${hour}:${minute}:${seconds}`
})

//导入moment 时间过滤器
import Moment from 'moment'
Vue.filter('momentTime',function(time,timeStr){
  return Moment(time).format(timeStr)
})
Vue.filter('retime',(time,newTime)=>{
  return Moment(time).fromNow()
})
Moment.locale('zh-cn')

import Topnav from './components/nav/topnav.vue'
Vue.component('topnav',Topnav)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Mint.Indicator.open('加载中...');
  console.log('qingiu')
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Mint.Indicator.close()
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
