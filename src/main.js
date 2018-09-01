// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms延迟
import fastClick from 'fastclick'
// 重置样式表
import 'styles/reset.css'
// 解决一象素边框
import 'styles/border.css'
// iconfont
import 'styles/iconfont.css'
// es6->es5
import 'babel-polyfill'
// 移动端UI组件（mint-ui@2.2.13）
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
// 请求数据
import axios from 'axios'

import LyTab from 'ly-tab'

Vue.use(Mint);
Vue.use(LyTab);

const host = process.env.NODE_ENV === 'development' ? '/static/mock' : '' // 根据 
// process.env.NODE_ENV的值判断当前是什么环境
console.log(process.env.NODE_ENV) 
const instance = axios.create({
  baseURL: host
})
Vue.prototype.$http = instance

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
