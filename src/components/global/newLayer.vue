<template>
	<div class="layer-box" @touchmove.prevent>
		<div class="mask c" @touchmove.prevent v-if="!!close" @click="close"></div>
		<div class="mask n" @touchmove.prevent v-if="!close"></div>
        <Scroll class="scroll">
            <div>
                <slot ></slot>
            </div>
        </Scroll>
	</div>
</template>

<script>
import Scroll from '../base/scroll'
export default {
	props: {
		close: Function
    },
    components:{
        Scroll
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
    z-index: 1000;
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
        background: #000;
        z-index: -1;
    }
    .scroll{
        width: 320px;
        height: 475px;
        font-size: 16px;
        border-radius: 10px;
        z-index: 2;
        background: pink;

        overflow: hidden;
    }
}
</style>
