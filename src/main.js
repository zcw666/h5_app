import "amfe-flexible/index.js"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from './api'

// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')