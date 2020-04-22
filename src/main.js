import Vue from 'vue'
import App from './App.vue'

// 使用 vue-router
import router from './router'
// 使用 Vuex
import store from './store'
// 使用 axios
import axios from 'axios'

// 建立 global axios 設定
axios.defaults.baseURL = 'https://vuejs-course-lab22-axios.firebaseio.com' // 設定常用 url 為 baseURL
axios.defaults.headers.common['Authorization'] = 'neoishandsome' // headers.common: 設定每個 request 的 header 都要有的參數
axios.defaults.headers.get['Accept'] = 'application/json' // headers.get: 設定 get request 的 header 都要有的參數

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
