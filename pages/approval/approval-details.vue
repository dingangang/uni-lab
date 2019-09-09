<template>
	<view>
		<van-cell-group>
			<van-field
				class="readonly-textarea"
				v-model="affairId"
				label="业务编号"
				readonly
			/>
			<van-field
				class="readonly-textarea"
				v-model="affairName"
				label="业务名称"
				readonly
			/>
			<van-field
				class="readonly-textarea"
				v-model="affairPerson"
				:label="role==='teacher'?'申请人':'审批人'"
				readonly
			/>
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
				:readonly="role!=='teacher'"
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
		<view class="bottom-btn-container" v-if="role==='teacher'">
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
				affairId: 'LY201810261230301001',
				affairName: '普通耗材领用',
				affairPerson: '张亮',
				message: '化学实验室从本部-701仓库领用纳米材料100g',
				reason: '',
				isPassLoading: false,
				isRejectLoading: false
			}
		},
		onLoad(e) {
			// 设置标题
			uni.setNavigationBarTitle({
				title:`审批详情`
			})
		},
		computed: {
			role: function() {
				return this.$store.getters.role
			}
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