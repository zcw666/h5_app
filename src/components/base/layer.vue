<template>
	<div class="layer-box" @touchmove.prevent>
		<div class="mask" @touchmove.prevent v-if="!!close" @click="close"></div>
		<div class="mask" @touchmove.prevent v-if="!close"></div>
        <slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		close: Function
	},
	mounted() {
		// console.log('close',this.close)
	}
};
</script>

<style lang="scss" scoped>
.layer-box {
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
    left: 0;
    z-index:1000;
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		background: #000;
    }
}
</style>
