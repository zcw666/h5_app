import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router'
import guard from './guard'//路由拦截处理文件


Vue.use(Router)
const router = new Router({
    routes: routerConfig
})
// router.beforeEach(guard.beforeEach)//加载之前拦截
// router.afterEach(guard.afterEach)//离开时拦截


export default router