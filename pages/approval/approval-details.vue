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
			<van-field
				v-model="reason"
				label="审批原因"
				type="textarea"
				placeholder="审批原因"
				rows="4"
				autosize
			/>
		</van-cell-group>
		<van-row type="flex" justify="space-around">
			<van-col span="10">
				<van-button
					type="primary"
					class="big-button"
					:loading="isPassLoading"
					:disabled="isRejectLoading"
					@tap="handlePassTap"
				>通过</van-button>
			</van-col>
			<van-col span="10">
				<van-button
					type="danger"
					class="big-button"
					:loading="isRejectLoading"
					:disabled="isPassLoading"
					@tap="handleRejectTap"
				>不通过</van-button>
			</van-col>
		</van-row>
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
		},
	}
</script>

<style scoped>

</style>