import Vue from 'vue'
import App from './App.vue'

// 使用 vue-router
import router from './router'
// 使用 Vuex
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
