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
				<view class="ct-top-enter__item" @tap="goLabSSO">
					<view class="ct-top-enter__img ct-top-enter__img--bg2">
						<img src="../../common/icons/lab.png" alt="">
					</view>
					<view class="ct-top-enter__title">实验室</view>
				</view>
				<view class="ct-top-enter__item" @tap="goExam">
					<view class="ct-top-enter__img ct-top-enter__img--bg1">
						<img src="../../common/icons/test.png" alt="">
					</view>
					<view class="ct-top-enter__title">考试</view>
				</view>
				<view class="ct-top-enter__item" @tap="goCheck">
					<view class="ct-top-enter__img ct-top-enter__img--bg3">
						<img src="../../common/icons/safe.png" alt="">
					</view>
					<view class="ct-top-enter__title">巡查</view>
				</view>
				<view class="ct-top-enter__item" @tap="goDanger">
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
					<!-- <van-icon name="arrow-down" /> -->
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
			<text class="ct-block-desc">提供了统一性全局性的实验室信息管理系统，涵盖了实验室基础信息管理，人员信息管理，安全检查管理等等模块，方便学校实验室管理</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>考试系统</text>
			</view>
			<text class="ct-block-desc">可以给学生老师进行题库生成，考试，自动阅卷评分等功能，功能强大，方便快捷</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>巡查系统</text>
			</view>
			<text class="ct-block-desc">主要是给实验室的安全负责人和学校的安全管理人员，及时的对实验室安全情况进行检查和排查，有助于实验室安全管理更上一个台阶</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>危化品管理</text>
			</view>
			<text class="ct-block-desc">学校实验室管理的重点管理部分，简化了危化品采购，储藏，报废等各个环节的管理工作，为危化品管理工作提供了更高效的作用</text>
		</view>
		
		<view class="ct-block__container">
			<view class="ct-block__title">
				<text>智能BI</text>
			</view>
			<text class="ct-block-desc">学校实验室综合管理系统各个模块数据的一个统计展示，能方便快捷的根据学校的数据统计需求，快速深度的做出BI统计结果</text>
		</view>
		
		<view style="height: 30upx;"></view>
		
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
	import { Base64 } from 'js-base64'
	import { checkTokenActive } from '../../api/auth.js'
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
		
			// 系统后台跳转参数中会忽略掉vue路由的#符号，导致参数错误。
			// 暂时先处理一下，如果不行，则需要启用history路由模式处理
			const result = window.location.href.match(/code=(.*?)#/)
			if (result && result.length > 1 && result[1]) {
				// 暂时还未确定路径
				window.location.href = 'http://syszhxxpt.hunnu.edu.cn/lab-mobile/#/?code=' + result[1]
				console.log('捕获， result', result)
			} else {
				// 统一认证
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
			 * 跳转到考试系统
			 * @constructor
			 */
			goExam() {
				const $vm = this
				// 检查用户信息是否存在
				if (!this.userDetails) {
					uni.showToast({
						title: '用户信息错误，请联系管理员',
						icon: 'none'
					})
					return
				}
				const data = {
					...this.userDetails,
					type: 'apps'
				}
				const infoJsonStr = Base64.encode(JSON.stringify(data))
				const href = `https://labexam.hunnu.edu.cn/labexam/apiLogin.php?key=${infoJsonStr}`
				window.location.href = href
			},
			/**
			 * 跳转到巡查系统
			 * @constructor
			 */
			goCheck() {
				const $vm = this
				// 检查用户信息是否存在
				if (!this.userDetails) {
					uni.showToast({
						title: '用户信息错误，请联系管理员',
						icon: 'none'
					})
					return
				} else if (this.userDetails.USER_TYPE === '2') {
					// 在前端禁止学生进入实验室系统，如果开发调试，请先注释此处
					uni.showToast({
						title: '学生无权限进入系统',
						icon: 'none'
					})
					return
				}
				const data = {
					...this.userDetails,
					type: 'apps'
				}
				const infoJsonStr = Base64.encode(JSON.stringify(data))
				const href = `https://labexam.hunnu.edu.cn/lab-platform-server/openApiLogin?key=${infoJsonStr}`
				window.location.href = href
			},
			/**
			 * 跳转到危化品管理
			 * @constructor
			 */
			goDanger() {
				const $vm = this
				// 检查用户信息是否存在
				if (!this.userDetails) {
					uni.showToast({
						title: '用户信息错误，请联系管理员',
						icon: 'none'
					})
					return
				} else if (this.userDetails.USER_TYPE === '2') {
					// 在前端禁止学生进入实验室系统，如果开发调试，请先注释此处
					uni.showToast({
						title: '学生无权限进入系统',
						icon: 'none'
					})
					return
				}
				const data = {
					...this.userDetails,
					type: 'apps'
				}
				const infoJsonStr = Base64.encode(JSON.stringify(data))
				const href = `http://202.197.117.218/hbnu/public/base/Login/schoolLogin?key=${infoJsonStr}`
				window.location.href = href
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
				uni.showToast({
					title: '暂未开放',
					icon: 'none'
				})
				// if (url !== '') {
				// 	uni.switchTab({
				// 		url: url
				// 	})
				// } else {
				// 	uni.showToast({
				// 		title: '暂无页面',
				// 		icon: 'none'
				// 	})
				// }
			},
			/**
			 * 去实验室SSO页面，
			 */
			goLabSSO() {
				if (!this.userDetails) {
					this.$toast('用户信息错误')
					return
				} else if (this.userDetails.USER_TYPE === '2') {
					this.$toast('学生无权限')
					return
				}
				const data = {
					...this.userDetails,
					type: 'apps'
				}
				const infoJsonStr = Base64.encodeURI(JSON.stringify(data))
				uni.navigateTo({
					url: `../lab/lab-sso?key=${infoJsonStr}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},/**
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
			 * 手机端，进入到首页时，先验证一次token有效性
			 */
			checkTokenActive() {
				console.log(this.token);
				return new Promise(resolve => {
					if (this.token) {
						checkTokenActive(this.token).then(res => {
							console.log(res);
							if (res.active) {
								resolve(true)
							} else {
								resolve(false)
							}
						})
					} else {
						resolve(false)
					}
				})
			},
			/**
			 * checkAuth 统一认证方法
			 *    因为本系统中permission.js中加入了路由钩子做了权限设置，此时先将gateway放入路由白名单中，可以直接访问。
			 * 1、检查路径参数，存在code视为统一认证后的跳转。换取token再获取用户信息并储存。
			 * 2、存在token视为单点登录，换取用户信息并储存。
			 * 3、code和token均不存在，视为直接登录，应当直接跳转到统一认证页。
			 */
			async checkAuth() {
				// 手机端的再每次回退到首页时都要做一次验证
				const isTokenActive = await this.checkTokenActive()
				
				console.log('isTokenActive', isTokenActive);
				
				if (isTokenActive) {
					const userInfo = await this.$store.dispatch('user/getAuthUserInfo')
					console.log('userInfo', userInfo)
					const userDetails = await this.$store.dispatch('user/getAuthUserDetails')
					console.log('userDetails', userDetails)
					return
				}
				
				
				if (this.$route.query.hasOwnProperty('code')) {
					// 存在code,统一认证的情况
					const code = this.$route.query.code
					const tokenInfo = await this.$store.dispatch('user/unifiedAuth', code)
					console.log('tokenInfo', tokenInfo)
					const userInfo = await this.$store.dispatch('user/getAuthUserInfo')
					console.log('userInfo', userInfo)
					const userDetails = await this.$store.dispatch('user/getAuthUserDetails')
					console.log('userDetails', userDetails)
					// 完成本地化信息储存。
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
					window.location.href = 'http://aip.app.hunnu.edu.cn/oauth2/authorize?client_id=sB9TQUNNQ0iab6DKWGznUzw&response_type=code&redirect_uri=http://syszhxxpt.hunnu.edu.cn/lab-mobile/#/'
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
