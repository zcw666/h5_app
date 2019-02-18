<style lang="scss" scoped>
@import "./index.scss";
</style>

<template>
	<div class="home">
        <router-link tag='a' to='/my'>我的</router-link><br>
		<!-- 遮罩层弹框 -->
		<Layer :close="close" v-if="show">
            <div>全局组件</div>
			<div>点击遮罩层关闭弹框</div>
		</Layer>
		<input type="text" v-model="watchValue" placeholder="监听数据变化">
		<div>2倍-{{computedVal}}</div>
		<div class="m" @click="click">设置</div>
        <div class="show" @click="showLayer" >显示</div>
	</div>
</template>
<script>
export default {
	name: "home",
	data() {
		let that = this;
		return {
			show: false,
			close: () => {
				that.show = !that.show;
			},
			watchValue: null
		};
	},
	computed: {
		// 仅读取
		// computedVal() {
		// 	// 当给computedVal赋值时，会报错
		// 	return this.watchValue * 2;
		// }
		// 读取和设置
		computedVal: {
			get: function() {
				return this.watchValue + 1;
			},
			set: function(v) {
				this.watchValue = v - 1;
			}
		}
	},
	watch: {
		// 写法一
		// watchValue(newV,oldV){
		//     console.log(oldV,newV,typeof(newV))
		// },
		// 写法二
		watchValue: {
			// 深度遍历
			deep: true,
			// 立即触发
			immediate: true,
			// 执行的函数
			handler: function(newV, oldV) {
				console.log(oldV, newV, typeof newV);
			}
		}
	},
	methods: {
		click() {
			this.computedVal = 5;
        },
        showLayer(){
            this.show = true
        }
	}
};
</script>
