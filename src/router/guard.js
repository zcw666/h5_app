/**路由拦截页面 */
const beforeEach = function (to, from, next) {
    console.log('to', to)
    console.log('form', from)
    next()
}

const afterEach = function(to, from){
    // afterEach下没有next()
    console.log('to1', to)
    console.log('form1', from)
}
const beforeEnter= function (to, from, next) {
    console.log('to', to)
    console.log('form', from)
    // 例：拦截逻辑
    let m = 3
    if(to.path=='/' && m == 3){
        next()
    }else{
        next('/login')
    }
}

export default {
    beforeEach,afterEach,beforeEnter
}