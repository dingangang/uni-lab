<template>
	<view>
		<van-nav-bar
			class="ct-navbar"
			title="安全巡查"
			left-arrow
			@click-left="backMain"
		/>
		<van-tabs v-model="active">
		  <van-tab title="考试"></van-tab>
		  <van-tab title="巡查"></van-tab>
		</van-tabs>
		<exam v-if="active===0"></exam>
		<check v-if="active===1"></check>
	</view>
</template>

<script>
	import Exam from '../exam/exam.vue'
	import Check from '../check/check.vue'
	
	export default {
		components: {
			Exam,
			Check
		},
		data() {
			return {
				active: 0
			}
		},
		methods: {
			/**
			 * 回到主页
			 */
			backMain() {
				uni.navigateTo({
					url: '../main/main',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
