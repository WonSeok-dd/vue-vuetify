import Vue from 'vue'
import App from './App.vue'

import { store } from "./store/store"
import { router } from "./router.js"

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
new Vue({
  store : store,
  router : router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
