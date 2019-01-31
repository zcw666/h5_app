<style lang="sass" scoped>
@import './index.scss'
</style>

<template>
	<div class="login">
		<div class="content">
			<van-field class="input" v-model="username" clearable label="用户名" placeholder="请输入用户名"/>

			<van-field class="input" v-model="password" type="password" label="密码" placeholder="请输入密码"/>

			<van-button class="login-button" type="primary" @click="login">登录</van-button>
			<van-row>
				<van-col class="left-col" span="12">忘记密码？</van-col>
				<van-col  class="right-col" span="12">注册</van-col>
			</van-row>
		</div>
	</div>
</template>
<script>
import { Field, Button, Row, Col } from "vant";
export default {
	name: "login",
	components: {
		[Field.name]: Field,
		[Button.name]: Button,
		[Row.name]: Row,
		[Col.name]: Col
	},
	data() {
		return {
			username: "",
			password: ""
		};
	},
	methods: {
		login() {
			console.log("111");
		}
	}
};
</script>
