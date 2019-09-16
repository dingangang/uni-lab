<template>
	<view class="ct-content">
		<van-cell-group>
			<van-field
				:label="role==='teacgher' ? '回收单号' : '领用单号'"
				v-model="form.billId"
				readonly
			/>
			<van-field
				label="物品名称"
				v-model="form.name"
				readonly
			/>
			<van-field
				label="所属单位"
				v-model="form.unit"
				readonly
			/>
			<van-field
				v-if="role==='student'"
				label="所属仓储"
				v-model="form.warehouse"
				readonly
			/>
			<van-field
				v-if="role==='student'"
				label="领用仓储"
				v-model="form.warehouse"
				readonly
			/>
			<van-field
				v-if="role==='student'"
				label="存量信息"
				v-model="form.stock"
				readonly
			/>
			<van-field
				label="数量"
				v-model="form.number"
			/>
		</van-cell-group>
		<view class="mt-medium bottom-btn-container">
			<van-button
			  size="large"
				type="primary"
				@tap="handleReceive"
				:loading="isReceiveLoading"
				v-if="role==='student'"
			>申请领用</van-button>
			<van-button
				size="large"
				type="primary"
				@tap="handleRecycle"
				:loading="isReceiveLoading"
				v-if="role==='teacher'"
			>回收</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				form: {
					billId: 'HS201810261230301001',
					name: '有机废液',
					unit: '01-机械学院',
					number: '300ml',
				},
				isReceiveLoading: false
			}
		},
		onLoad(e) {
			if (this.role === 'teahcer') {
				this.form = {
					billId: 'HS201810261230301001',
					name: '有机肥料',
					unit: '01-机械学院',
					number: '300ml',
				}
			} else if (this.role === 'student') {
				this.form = {
					billId: 'LY201810261230301001',
					name: '纳米材料',
					unit: '材料学院',
					warehouse: '本部-701',
					stock: '1000g',
					number: '30g',
				}
			}
			uni.setNavigationBarTitle({
				title:'耗材详情'
			})
		},
		computed: {
			role: function() {
				return this.$store.getters.role
			}
		},
		methods: {
			handleReceive() {
				if (this.form.number.length === 0) {
					this.$toast('请先输入数量')
					return
				}
				this.isReceiveLoading = true
				setTimeout(() => {
					this.isReceiveLoading = false
					this.$toast('领用成功')
				}, 2000)
			},
			handleRecycle() {
				this.isReceiveLoading = true
				setTimeout(() => {
					this.isReceiveLoading = false
					this.$toast('回收成功')
				}, 2000)
			},
		},
	}
</script>

<style scoped>

</style>