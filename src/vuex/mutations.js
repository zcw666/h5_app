/**
 * 改变state属性值要通过mutations,当非通过mutations修改state，状态值不会被保留即刷新就会被恢复成初始状态
 */
import state from './state'
/**
 * 
 * @param {*} state //第一个参数必须是state
 * @param {*} name //第二个参数是额外传入的参数，通常是一个对象，用来包含多个参数
 */
const setName = function (state, name) {
    state.name = name
}
/**
 * 删除token
 */
const clearToken = function (state) {
    state.token = ''
}

export default {
    setName,
    clearToken
}