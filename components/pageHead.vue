<template>
    <!-- 全局组件text -->
	<view>
		{{headText}}
	</view>
</template>

<script>
	export default {
		name:"pageHead",
		data() {
			return {
				headText:'headText'
			};
		},
		created() {
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		}
	}
</script>

<style lang="less">

</style>
