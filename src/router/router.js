const login = ()=> import( /* webpackChunkName:'login' */ '@views/login')
const register = ()=> import( /* webpackChunkName:'register' */ '@views/login/register')
const my = ()=> import( /* webpackChunkName:'my' */ '@views/my')


const config = [
    {
        path:'/',
        component:my
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/register',
        component:register
    },
]

export default config