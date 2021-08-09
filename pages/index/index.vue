<template>
	<view class="container">
		<!-- <page-head></page-head> -->
		<view class="intro">23333</view>
		<!-- <text class="intro">详见：</text> -->
		<!-- <uni-link :href="href" :text="href"></uni-link> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		created() {
			uniCloud.callFunction({
				//调用云函数
				name: "signup",
				//传的参数
				data: {
					"name": "xihongshi"
				},
				//成功回调
				success(res) {
					console.log('云函数调用成功', res.result);
				},
				//失败回调
				fail(res) {
					console.log('云函数调用失败', res);
				}
			})
		},

		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
