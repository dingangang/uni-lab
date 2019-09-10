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
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/approval/approval')">
					<view class="ct-top-enter__img ct-top-enter__img--bg1">
						<img src="../../common/icons/ring.png" alt="">
					</view>
					<view class="ct-top-enter__title">待办</view>
				</view>
				<view class="ct-top-enter__item" @tap="swithTabbar('/pages/lab/lab')">
					<view class="ct-top-enter__img ct-top-enter__img--bg2">
						<img src="../../common/icons/lab.png" alt="">
					</view>
					<view class="ct-top-enter__title">实验室</view>
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
					<text>吴晨曦 校级管理员</text>
					<van-icon name="arrow-down" />
				</view>
				<view class="ct-user-status__calendar" @tap="showTimePicker=true">
					<img src="../../common/icons/calendar.png" alt="">
					<text>本月</text>
				</view>
			</view>
		</view>
		
		<view class="ct-block__container">
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
		</view>
		
		<view class="ct-block__container">
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
		</view>
		
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
			}
		}
	}
</script>

<style>

</style>
