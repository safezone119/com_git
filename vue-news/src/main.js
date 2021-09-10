// main.js 는 기본적인 설정들(플러그인,라이브러리, 구조)을 파악할 수 있는 청사진

import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
