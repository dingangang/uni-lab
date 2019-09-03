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
			  class="big-button"
				@tap="handleSubmit"
				:loading="isBtnLoading"
			>提交预约</van-button>
		</view>
		<!-- #ifdef H5 -->
		<van-popup v-model="showTimePicker" position="bottom">
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<van-popup :show="showTimePicker" position="bottom">
		<!-- #endif -->
		  <van-datetime-picker
		    v-model="pickerTime"
		    type="datetime"
		    :min-date="minDate"
		    :max-date="maxDate"
				@cancel="showTimePicker=false"
				@confirm="confirmTime"
		  />
		</van-popup>
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
				minHour: 10,
			  maxHour: 20,
				minDate: new Date(),
				maxDate: new Date(2020, 10, 1),
				showTimePicker: false,
				pickerTime: $vm.$dayjs(new Date).add(1,'day').toDate(),
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
				if (this.$dayjs(value).endOf('day')
					.diff(this.$dayjs(new Date()).endOf('day'), 'day') === 1) {
					this.$set(this.labInfo, 'time', '(明天) ' + this.$dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
				} else {
					this.$set(this.labInfo, 'time', this.$dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
				}
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
			}
		},
	}
</script>

<style scoped>

</style>
