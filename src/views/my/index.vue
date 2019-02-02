<style lang="sass" scoped>
@import './index.scss'
</style>

<template>
    <div class="my">
        <div class="top"></div>
        <div class="nav"></div>
        <van-cell icon="like-o" title="学生证" to="/login" is-link />
        <van-cell icon="location-o" title="学生证" to="/login" is-link />
        <van-cell icon="star-o" title="学生证" to="/login" is-link />
        <van-cell icon="phone-o" title="学生证" to="/login" is-link />
    </div>
</template>
<script>
import { Cell, CellGroup,Icon } from 'vant';
export default {
    name:'my',
    components:{
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
		[Icon.name]: Icon,
    },
    data(){
        return {

        }
    },
    mounted(){
        this.$axios({
            url:'/prize/prizeList.cgi',
            method:'post',
            data:{
                deveiceToken:''
            }
        })
        .then((res)=>{
        })
        .catch((err)=>{
            
        })

    }
}
</script>
