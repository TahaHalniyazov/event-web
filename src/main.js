import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq';
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.use(VueMq, {
  breakpoints: {
    mobile: 990,
    desktop: Infinity
  }
});