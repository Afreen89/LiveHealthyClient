import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
