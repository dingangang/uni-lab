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
			
			<!-- #ifdef H5 -->
			<van-field
				v-model="labInfo.message"
				label="预约原因"
				type="textarea"
				placeholder="请输入预约原因"
				rows="4"
				autosize
			/>
			<!-- #endif -->
			
			<!-- #ifdef MP-WEIXIN -->
			<van-field
				:value="labInfo.message"
				label="预约原因"
				type="textarea"
				placeholder="请输入预约原因"
				rows="4"
				autosize
				@change="handleChange('message', $event)" 
			/>
			<!-- #endif -->
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
		<!-- #ifdef MP-WEIXIN -->
		<van-popup :show="showTimePicker" position="bottom">
		  <van-datetime-picker
		    :value="pickerTime.getTime()"
		    type="datetime"
		    :min-date="minDate.getTime()"
		    :max-date="maxDate.getTime()"
				@cancel="showTimePicker=false"
				@confirm="confirmTime"
		  />
		</van-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			const $vm = this
			return {
				labInfo: {
					title: 'XX实验室',
					time:  '(明天) ' + $vm.$dayjs(new Date).add(1,'day').format('YYYY-MM-DD HH:mm:ss'),
					message: ''
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
		onLoad(e) {
			console.log(e)
			// 获取实验室名称后为标题赋值
			uni.setNavigationBarTitle({
			    title: `实验室${e.lab}`
			});
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
				
				// #ifdef MP-WEIXIN
				console.log(value);
				this.pickerTime = $vm.$dayjs(value.detail).toDate()
				this.labInfo.time = $vm.$dayjs(value.detail).format('YYYY-MM-DD HH:mm:ss')
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
					// #ifdef H5
					this.$toast('提交成功')
					// #endif
					
					// #ifdef MP-WEIXIN
					uni.showToast({
						title: '提交成功'
					})
					// #endif
					
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
			}
		},
	}
</script>

<style scoped>

</style>
