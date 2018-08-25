import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue';

Vue.use(ElementUI)

Vue.config.productionTip = false;

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app');
