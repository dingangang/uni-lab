<template>
	<view class="ct-content">
		<van-cell-group>
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
				label="存量信息"
				v-model="form.stock"
				readonly
			/>
			<van-field
				v-if="type==='1'"
				label="数量"
				v-model="form.number"
				placeholder="请输入数量"
			/>
		</van-cell-group>
		<view class="mt-medium bottom-btn-container">
			<van-button
			  size="large"
				type="primary"
				@tap="handleReceive"
				:loading="isReceiveLoading"
				v-if="type==='1'"
			>领用</van-button>
			<van-button
				size="large"
				type="primary"
				@tap="handleRecycle"
				:loading="isReceiveLoading"
				v-if="type==='2'"
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
					name: '',
					unit: '化学学院',
					stock: '3',
					number: '',
				},
				isReceiveLoading: false
			}
		},
		onLoad(e) {
			console.log(e)
			let str = ''
			if (e.type === '1') {
				str += '耗材用品'
			} else if (e.type === '2') {
				str += '废液废品'
			}
			uni.setNavigationBarTitle({
				title:`${str} ${e.item}`
			})
			this.$set(this.form, 'name', `${str} ${e.item}`)
			this.type = e.type
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