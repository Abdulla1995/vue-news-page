import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

require('./components/news');

new Vue({
  render: h => h(App),
}).$mount('#app');
