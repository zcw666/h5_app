import "amfe-flexible/index.js"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from './api'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')