<template>
	<view class="page">
		<van-nav-bar
			class="ct-navbar"
			title="消息列表"
			left-arrow
			@click-left="back"
			fixed
		/>
		<view class="ct-notice-list" style="margin-top: 44px;padding: 10px;">
			<view
				class="ct-notice-list__item ct-notice-list__item--border"
				v-for="(item,index) in notices"
				:key="index"
				@tap="goNoticeDetails(index)"
			>
				<view class="ct-notice-list__item__text">{{item.text}}</view>
				<view class="ct-notice-list__item__time">{{item.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				notices: [
					{
						text: '省教育厅安全组来校开展实验室安全检查工作',
						time: '2019-07-09'
					},
					{
						text: '关于做好2019年度实验室安全工作通知',
						time: '2019-04-18'
					},
				],
			}
		},
		methods: {
			/**
			 * 回退
			 */
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			/**
			 * 去消息详情
			 */
			goNoticeDetails(e) {
				console.log('携带参数', e);
				uni.navigateTo({
					url: '../notice/notice-details',
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
