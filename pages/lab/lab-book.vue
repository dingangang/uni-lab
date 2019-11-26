<template>
	<view class="ct-page">
		<van-cell-group>
		  <van-cell title="实验室名称" :value="labInfo.title" />
		  <van-cell
		    title="预约时间"
				value-class="text-left"
				title-class="x-limit-title"
		    :value="labInfo.time"
		    @click="showTimePicker = true"
		  />
			
			<van-field
				v-model="labInfo.message"
				label="预约原因"
				type="textarea"
				placeholder="请输入预约原因"
				rows="4"
				autosize
			/>
			
		</van-cell-group>
		
		<view class="text-center" style="margin-top: 20rpx;">
			<van-button
				size="large"
			  type="primary"
				@tap="handleSubmit"
				:loading="isBtnLoading"
			>提交预约</van-button>
		</view>
		<!-- #ifdef H5 -->
		<van-popup v-model="showTimePicker" position="bottom">
			<van-datetime-picker
			    v-model="pickerTime"
			    type="datetime"
			    :min-date="minDate"
			    :max-date="maxDate"
					@cancel="showTimePicker=false"
					@confirm="confirmTime"
			  />
			</van-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	import { getLabInfoByID } from '../../api/lab.js'
	export default {
		data() {
			const $vm = this
			return {
				labInfo: {
					title: '纳米氧化物光实验室',
					time:  '(明天) ' + $vm.$dayjs(new Date).add(1,'day').format('YYYY-MM-DD HH:mm:ss'),
					message: '纳米物理实验'
				},
				minDate: new Date(),
				maxDate: new Date(2020, 10, 1),
				pickerTime: $vm.$dayjs(new Date).add(1,'day').toDate(),
				showTimePicker: false,
				isBtnLoading: false
			}
		},
		/**
		 * @param {Object} e 跳转页面时的参数
		 */
		async onLoad(e) {
			const $vm = this
			console.log(e)
			// 获取实验室名称后为标题赋值
			
			const labInfo = await this.getLabInfoByID(e.id)
			
			uni.setNavigationBarTitle({
			    title: labInfo.college_name
			});
			this.labInfo = {
				title: labInfo.college_name,
				time: '(明天) ' + $vm.$dayjs(new Date).add(1,'day').hour(8).format('YYYY-MM-DD HH:mm:ss'),
				message: ''
			}
		},
		methods: {
			/**
			 * @param {Date} value 回调的时间对象
			 * 本方法用于设定时间，如果选择时间是明天，则会加上明天标识
			 */
			confirmTime(value) {
				const $vm = this
				
				// #ifdef H5
				if (this.$dayjs(value).endOf('day')
					.diff(this.$dayjs(new Date()).endOf('day'), 'day') === 1) {
					this.$set(this.labInfo, 'time', '(明天) ' + this.$dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
				} else {
					this.$set(this.labInfo, 'time', this.$dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
				}
				// #endif
				
				this.showTimePicker = false
			},
			/**
			 * 提交预约。这里针对上面添加的‘明天’做了处理
			 */
			handleSubmit() {
				const data = Object.assign({}, this.labInfo)
				this.isBtnLoading = true
				if (data.time && data.time.match(/明天/)) {
					data.time = data.time.split(')')[1].trim()
				}
				console.log('要提交的数据是 ->', data)
				setTimeout(() => {
					this.isBtnLoading = false
					this.$toast('提交成功')
				}, 2000)
			},
			/**
			 * 时间选择器绑定事件
			 */
			onInput(event) {
				this.pickerTime = event.detail
			},
			/**
			 * 输入框绑定事件
			 */
			handleChange(msg, event) {
				this.labInfo.message = event.detail
			},
			/**
			 * 获取实验室信息
			 */
			getLabInfoByID(id) {
				const $vm = this
				return new Promise(resolve => {
					const params = {
						id
					}
					getLabInfoByID(params).then(res => {
						console.log('实验室信息', res);
						if (res.serverResult.resultCode === 200) {
							resolve(res.rows[0])
						}
					}).catch(e => {
						resolve(e)
					})
				})
			}
		},
	}
</script>

<style scoped>

</style>
