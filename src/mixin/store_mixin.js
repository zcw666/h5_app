/**对一些公用的vuex封装 */
import {mapMutations} from 'vuex'

export default {
    methods: {
        // ...mapMutations({
		// 	setName: "setName" // 映射 this.setName() 为 this.$store.commit('setName')
        // }),
        ...mapMutations(['setName','clearToken']),
    }
}