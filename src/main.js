/*
 * @Desc:
 * @FilePath: /tutor-webpack-split/src/main.js
 * @Author: liujianwei1
 * @Date: 2021-05-20 13:36:37
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
