<template>
	<view>
		<van-cell-group>
			<van-field
				class="readonly-textarea"
				v-model="message"
				label="审批内容"
				type="textarea"
				placeholder="审批内容"
				rows="4"
				autosize
				readonly
			/>
			<!-- #ifdef H5 -->
			<van-field
				v-model="reason"
				label="审批原因"
				type="textarea"
				placeholder="审批原因"
				rows="4"
				autosize
			/>
			<!-- #endif -->
			
			<!-- #ifdef MP-WEIXIN -->
			<van-field
				:value="reason"
				label="审批原因"
				type="textarea"
				placeholder="审批原因"
				rows="4"
				autosize
				@change="handleChange('reason', $event)" 
			/>
			<!-- #endif -->
		</van-cell-group>
		<view class="bottom-btn-container">
			<view class="mt-small">
				<van-button
					size="large"
					type="primary"
					:loading="isPassLoading"
					:disabled="isRejectLoading"
					@tap="handlePassTap"
				>通过</van-button>
			</view>
			<view class="mt-small">
				<van-button
					size="large"
					type="danger"
					:loading="isRejectLoading"
					:disabled="isPassLoading"
					@tap="handleRejectTap"
				>不通过</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: "审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容审批内容",
				reason: "",
				isPassLoading: false,
				isRejectLoading: false
			}
		},
		onLoad(e) {
			// 设置标题
			uni.setNavigationBarTitle({
				title:`事项${e.item}`
			})
		},
		methods: {
			/**
			 * 通过按钮点击事件
			 */
			handlePassTap() {
				this.isPassLoading = true
				setTimeout(() => {
					this.isPassLoading = false
					this.$toast('事项审批通过成功')
				}, 2000)
			},
			/**
			 * 不通过按钮点击事件
			 */
			handleRejectTap() {
				this.isRejectLoading = true
				setTimeout(() => {
					this.isRejectLoading = false
					this.$toast('事项审批不通过')
				}, 2000)
			},
			/**
			 * 输入框绑定事件
			 */
			handleChange(msg, event) {
				this.reason = event.detail
			}
		},
	}
</script>

<style scoped>

</style>