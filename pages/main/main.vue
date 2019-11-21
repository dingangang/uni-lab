<template>
	<view class="page">
		<van-nav-bar class="ct-navbar" title="实验室综合管理平台" fixed>
			<view slot="right">
				<van-icon name="search" color="#fff" size="24px" style="margin-right: 10px;" @tap="goSearch"/>
				<van-icon name="plus" color="#fff" size="24px" />
			</view>
			<van-icon name="setting-o" color="#fff" size="24px" slot="left" @tap="goSetting"></van-icon>
		</van-nav-bar>
		
		<view class="ct-top-container">
			<view class="ct-top-enter">
				<!-- <view class="ct-top-enter__item" @tap="swithTabbar('/pages/approval/approval')">
					<view class="ct-top-enter__img ct-top-enter__img--bg1">
						<img src="../../common/icons/ring.png" alt="">
					</view>
					<view class="ct-top-enter__title">待办</view>
				</view> -->
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/lab/lab')">
					<view class="ct-top-enter__img ct-top-enter__img--bg2">
						<img src="../../common/icons/lab.png" alt="">
					</view>
					<view class="ct-top-enter__title">实验室</view>
				</view>
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/approval/approval')">
					<view class="ct-top-enter__img ct-top-enter__img--bg1">
						<img src="../../common/icons/test.png" alt="">
					</view>
					<view class="ct-top-enter__title">考试</view>
				</view>
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/safety/safety')">
					<view class="ct-top-enter__img ct-top-enter__img--bg3">
						<img src="../../common/icons/safe.png" alt="">
					</view>
					<view class="ct-top-enter__title">安全</view>
				</view>
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/consumables/consumables')">
					<view class="ct-top-enter__img ct-top-enter__img--bg4">
						<img src="../../common/icons/building.png" alt="">
					</view>
					<view class="ct-top-enter__title">危化品</view>
				</view>
			</view>
			<view class="ct-user-status">
				<view class="ct-user-status__role">
					<van-icon name="manager" />
					<text>{{userDetails ? userDetails.name : ''}} {{userRole}}</text>
					<van-icon name="arrow-down" />
				</view>
				<view class="ct-user-status__calendar" @tap="showTimePicker=true">
					<img src="../../common/icons/calendar.png" alt="">
					<text>本月</text>
				</view>
			</view>
		</view>
		
<!-- 		<view class="ct-block__container">
			<view class="ct-block__title">
				<img src="../../common/icons/todo.png" alt="">
				<text>待办事项</text>
			</view>
			<view class="ct-todo-list">
				<view class="ct-todo-list__item" v-for="(item, index) in todos" :key="index" @tap="swithTabbar('/pages/approval/approval')">
					<view class="ct-todo-list__item__icon">
						<img :src="item.src" alt="img">
					</view>
					<view class="ct-todo-list__item__content">
						<view class="ct-todo-list__item__number">{{item.number}} <text class="ct-todo-list__item__unit">{{item.unit}}</text></view>
						<view class="ct-todo-list__item__info">{{item.info}}</view>
					</view>
				</view>
			</view>
		</view> -->
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>实验室系统</text>
			</view>
			<text class="ct-block-desc">实验室系统的描述。实验室系统的描述。实验室系统的描述。实验室系统的描述。实验室系统的描述。实验室系统的描述。</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>考试系统</text>
			</view>
			<text class="ct-block-desc">考试系统介绍性文字，考试系统介绍性文字，考试系统介绍性文字，考试系统介绍性文字，考试系统介绍性文字</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>巡查系统</text>
			</view>
			<text class="ct-block-desc">巡查系统介绍性文字，巡查系统介绍性文字，巡查系统介绍性文字，巡查系统介绍性文字，巡查系统介绍性文字，</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>危化品管理</text>
			</view>
			<text class="ct-block-desc">危化品管理介绍性文字，危化品管理介绍性文字，危化品管理介绍性文字，危化品管理介绍性文字，危化品管理介绍性文字，</text>
		</view>
		
<!-- 		<view class="ct-block__container">
			<view class="ct-block__title">
				<img src="../../common/icons/notice.png" alt="">
				<text>通知公告</text>
				<van-icon name="arrow" style="float: right; margin-top: 3px;" @tap="goNotice" />
			</view>
			<view class="ct-notice-list">
				<view class="ct-notice-list__item" v-for="(item,index) in notices" :key="index" @tap="goNoticeDetails(index)">
					<view class="ct-notice-list__item__text">{{item.text}}</view>
					<view class="ct-notice-list__item__time">{{item.time}}</view>
				</view>
			</view>
		</view> -->
		
		<van-popup v-model="showTimePicker" position="bottom">
		  <van-picker
		    show-toolbar
		    :columns="timeColumns"
		    @cancel="showTimePicker = false"
		    @confirm="onConfirmTime"
		  />
		</van-popup>
		
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				todos: [
					{
						src: require('../../common/icons/gct-user.png'),
						number: '0',
						unit: '个',
						info: '实验室基础信息管理'
					},
					{
						src: require('../../common/icons/exam.png'),
						number: '0',
						unit: '个',
						info: '实验室安全考试'
					},
					{
						src: require('../../common/icons/target.png'),
						number: '0',
						unit: '个',
						info: '实验室安全检查'
					},
					{
						src: require('../../common/icons/danger.png'),
						number: '0',
						unit: '个',
						info: '实验室危化品管理'
					},
					{
						src: require('../../common/icons/list.png'),
						number: '0',
						unit: '条',
						info: '实验室开放管理'
					},
				],
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
				showTimePicker: false,
				timeColumns: ['本月', '上月']
				
			}
		},
		created() {
			console.log('hello from main');
			
			// 系统后台跳转参数中会忽略掉vue路由的#符号，导致参数错误。
			// 暂时先处理一下，如果不行，则需要启用history路由模式处理
			const result = window.location.href.match(/code=(.*?)#/)
			if (result && result.length > 1 && result[1]) {
				// 暂时还未确定路径
				// window.location.href = 'http://syszhxxpt.hunnu.edu.cn/#/gateway?code=' + result[1]
				console.log('捕获， result', result)
			} else {
				// 统一认证
				this.checkAuth()
			}
			
			if (this.token) {
				console.log('存在token');
			} else {
				console.log('不存在token，跳转到统一认证页面');
				this.checkAuth()
			}
		},
		computed: {
			...mapGetters([
				'token',
				'userInfo',
				'userDetails'
			]),
			userRole() {
				const userType = this.userDetails ? this.userDetails.USER_TYPE : ''
				if (userType) {
					switch (userType) {
						case '1':
							return '教师'
						case '2':
							return '学生'
						default:
							return ''
					}
				} else {
					return ''
				}
			}
		},
		methods: {
			/**
			 * 跳转到搜索页
			 */
			goSearch() {
				uni.navigateTo({
					url: '../search/search',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 月份选择回调
			 */
			onConfirmTime(e) {
				console.log('月份', e);
				this.showTimePicker = false;
			},
			/**
			 * 切换到内部视图
			 */
			swithTabbar(url) {
				if (url !== '') {
					uni.switchTab({
						url: url
					})
				} else {
					uni.showToast({
						title: '暂无页面',
						icon: 'none'
					})
				}
			},
			/**
			 * 去设置页
			 */
			goSetting() {
				uni.navigateTo({
					url: '../setting/setting',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 去消息列表
			 */
			goNotice() {
				uni.navigateTo({
					url: '../notice/notice',
					success: res => {},
					fail: () => {},
					complete: () => {}
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
			},
			/**
			 * checkAuth 统一认证方法
			 *    因为本系统中permission.js中加入了路由钩子做了权限设置，此时先将gateway放入路由白名单中，可以直接访问。
			 * 1、检查路径参数，存在code视为统一认证后的跳转。换取token再获取用户信息并储存。
			 * 2、存在token视为单点登录，换取用户信息并储存。
			 * 3、code和token均不存在，视为直接登录，应当直接跳转到统一认证页。
			 */
			async checkAuth() {
				if (this.$route.query.hasOwnProperty('code')) {
					// 存在code,统一认证的情况
					const code = this.$route.query.code
					const tokenInfo = await this.$store.dispatch('user/unifiedAuth', code)
					console.log('tokenInfo', tokenInfo)
					const userInfo = await this.$store.dispatch('user/getAuthUserInfo')
					console.log('userInfo', userInfo)
					const userDetails = await this.$store.dispatch('user/getAuthUserDetails')
					console.log('userDetails', userDetails)
					// 子系统跳转放到卡片点击事件中。
				} else if (this.$route.query.hasOwnProperty('token')) {
					// 存在token,单点登录的情况.
					this.$message({
						message: '单点登录逻辑还未部署!!',
						type: 'warning'
					})
				} else if (this.$route.query.hasOwnProperty('origin')) {
					// 从lab中退回的情况
					this.$message.info('您已经退出')
				} else {
					// 两者都不存在，直接登录的情况，跳转统一认证页
					window.location.href = 'http://aip.app.hunnu.edu.cn/oauth2/authorize?client_id=sB9TQUNNQ0iab6DKWGznUzw&response_type=code&redirect_uri=http://syszhxxpt.hunnu.edu.cn/#/gateway'
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.ct-block-desc {
	font-size: 12px;
	line-height: 20px;
}
</style>
