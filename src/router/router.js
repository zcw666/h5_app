import guard from './guard'//路由拦截

const login = ()=> import( /* webpackChunkName:'login' */ '@views/login')
const register = ()=> import( /* webpackChunkName:'register' */ '@views/login/register')
const my = ()=> import( /* webpackChunkName:'my' */ '@views/my')
const noFound = ()=> import( /* webpackChunkName:'my' */ '@views/noFound')


const config = [
    {
        path:'/',
        component:my,
        // beforeEnter: guard.beforeEnter//组件独享路由拦截
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/register',
        component:register
    },
    {
        // 404页面配置，注意！！！该配置一定要放到最后
        path: '*',//会匹配所有路径
        component:noFound
    }
]

export default config