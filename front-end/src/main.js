import Vue from 'vue'
import App from './App.vue'
import forSale from './store';
import router from './router'

Vue.config.productionTip = false
let data = {
  inCart: [],
  forSale: forSale,
}
new Vue({
  router,
  data,
  forSale,
  render: h => h(App),
}).$mount('#app')
