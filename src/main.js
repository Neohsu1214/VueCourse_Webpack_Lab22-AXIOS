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

// 建立 axios.interceptors 來對每次的 requeest 做些處理
const requeestInterceptor = axios.interceptors.request.use(config => {
  // Do something before request is sent
  console.log('Axios Interceptors Request', config);
  config.headers['INTERCEPTOR_ADDED_HEADER'] = 'yes I can!'; // 以此例就是在每次 axios request 時安插一個 header
  return config;
},error => {
  // Do something with request error
  return Promise.reject(error);
});

// 建立 axios.interceptors 來對每次的 response 做些處理
const responseInterceptor = axios.interceptors.response.use(response => {
  // Do something before response is sent
  console.log('Axios Interceptors Response', response);
  return response;
},error => {
  // Do something with response error
  return Promise.reject(error);
});

// axios 可透過 interceptors.xxx.eject 來跳脫所設定的 interceptor，但是原本宣告 interceptor 的地方要建立變數去接 .use 回傳的 interceptor ID
axios.interceptors.request.eject(requeestInterceptor); // 原本會印出資料到 console 的被 eject 後就不見了
axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
