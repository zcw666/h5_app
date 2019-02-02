/**定义方法用来对state中的数据做过滤 */
import state from './state'

/**
 * 获取大于3的元素
 */
const get3 = function (state) {
    return state.arr.filter(num => num > 3)
}
/***
 * 在方法中引用getters的另一个方法
 * state参数必须是第一个
 * getters参数必须是第二个
 */
const getLength = function (state, getters) {
    return getters.get3.length
}
/**
 * 返回函数，便于getters传参
 */
// const getNum = (state) => (id) => {
//     debugger
//     return state.arr.find(todo => todo === id)
// }
/**
 * 
 * 等同于上面的用法（函数函数柯里化）
 */
const getNum = function (state) {
    return function(id){
        // debugger
        return state.arr.find(todo => todo === id)
    }
}



export default {
    get3,
    getLength,
    getNum
}