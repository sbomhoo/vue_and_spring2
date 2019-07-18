import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 // store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
