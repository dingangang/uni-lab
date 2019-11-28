<template>
	<view class="page">
		<van-nav-bar
			class="ct-navbar"
			title="设置"
			left-arrow
			@click-left="backMain"
		/>
		<van-cell-group>
		  <van-cell title="用户名" :value="userInfo?userInfo.account:''" />
		  <van-cell title="姓名" :value="userInfo?userInfo.realname:''" />
		  <van-cell title="版本信息" value="v1.0.4 beta" />
		</van-cell-group>
		
		<view style="margin-top: 20px; padding: 0 20px;"> 
			<van-button class="big-button" type="danger" @tap="handleExit">退出登录</van-button>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters([
				'token',
				'userInfo',
				'userDetails'
			]),
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
				}).then(async() => {
				  // on confirm
					try{
						await this.$store.dispatch('user/logoutFromGateway')
					}catch(e){
						//TODO handle the exception
						console.log(e);
					}
					uni.reLaunch({
						url: '../main/main',
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
