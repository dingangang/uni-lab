<template>
	<view class="page">
		<van-nav-bar
			class="ct-navbar"
			title="设置"
			left-arrow
			@click-left="backMain"
		/>
		<van-cell-group>
		  <van-cell title="用户名" value="zhangchengxi" />
		  <van-cell title="姓名" value="张晨曦" />
		  <van-cell title="版本信息" value="v1.0.4 beta" />
		</van-cell-group>
		
		<view style="margin-top: 20px; padding: 0 20px;"> 
			<van-button class="big-button" type="danger" @tap="handleExit">退出登录</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
			},
			/**
			 * 退出
			 */
			handleExit(){
				this.$dialog.confirm({
				  title: '退出确认',
				  message: '您将退出系统'
				}).then(() => {
				  // on confirm
					uni.navigateTo({
						url: '../login/login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}).catch(() => {
				  // on cancel
				});
			}
		}
	}
</script>

<style>

</style>
