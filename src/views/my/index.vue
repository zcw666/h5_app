<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
    <div class="my">
        <div class="top"></div>
        <div class="nav"></div>
        <van-cell icon="like-o" title="学生证" to="/login" is-link />
        <van-cell icon="location-o" title="学生证" to="/login" is-link />
        <van-cell icon="star-o" title="学生证" to="/login" is-link />
        <van-cell icon="phone-o" title="学生证" to="/login" is-link />
        <p>{{name}}</p>
        <p>{{$store.state.name}}</p>
        <div @click="changeName">更改名称</div>
        <div @click="get">恢复名称</div>
        <img class="img" :src=url alt="">
    </div>
</template>
<script>
import { Cell, CellGroup,Icon } from 'vant';
import mixin from '@/mixin'
import storeMixin from '@/mixin/store_mixin'
export default {
    name:'my',
    mixins: [mixin,storeMixin],
    components:{
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
		[Icon.name]: Icon,
    },
    data(){
        return {
            url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAIAAAC2vXM1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBNjZGODJBNDAyMTExRTZCOEUyOTJCQTE1RTY4NTA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBNjZGODJCNDAyMTExRTZCOEUyOTJCQTE1RTY4NTA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE2NkY4Mjg0MDIxMTFFNkI4RTI5MkJBMTVFNjg1MDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE2NkY4Mjk0MDIxMTFFNkI4RTI5MkJBMTVFNjg1MDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69bBYBAAAII0lEQVR42uyc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'
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

    },
    methods:{
        changeName(){
            this.$store.commit('setName','李四')
        },
        get() {
			this.setName('张三');
		}
    }
}
</script>
