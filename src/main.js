// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import {$axios} from './utils'
import store from './view/store'
import Mint from 'mint-ui';

Vue.config.productionTip = false
Vue.use(Mint);
Vue.prototype.$axios = $axios
Vue.prototype.back = function () {
    router.go(-1)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
