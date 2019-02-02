import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import State from './state'
import Getter from './getters'
import Mutations from './mutations'
import Actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: State,
    getters: Getter,
    mutations: Mutations,
    actions: Actions,
    plugins: [createPersistedState({key:'store'})]//定义保存到localStorage的vuex的属性名
})