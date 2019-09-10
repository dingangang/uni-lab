<template>
	<view class="page">
		<van-nav-bar
			class="ct-navbar"
		  title="标题"
		  left-arrow
		  @click-left="onClickLeft"
			fixed
		>
			<form action="/" slot="title">
			  <van-search
					class="ct-search"
			    v-model="searchValue"
			    placeholder="搜索实验室"
			    show-action
			    @search="onSearch"
			    @cancel="onCancel"
					background="#575466"
					:show-action="false"
					:clearable="false"
			  />
			</form>
		</van-nav-bar>
		<view class="ct-filter-bar" style="margin-top: 44px;">
			<view class="ct-filter-bar__item" @tap="showSortPicker=true">排序 <img src="../../common/icons/sort.png" alt=""></view>
			<view class="ct-filter-bar__item" @tap="showFilterPicker=true">筛选 <img src="../../common/icons/filter.png" alt=""></view>
		</view>
		<view class="ct-search-list">
			<view class="ct-search-item" v-for="(item, index) in searchList" :key="index">
				<view class="ct-search-item__content">
					<view class="ct-search-item__text">{{item.text}}</view>
					<view class="ct-search-item__info">{{item.info}}</view>
				</view>
				<view class="ct-search-item__grade">{{item.grade}}</view>
			</view>
		</view>
		
		<van-popup v-model="showSortPicker" position="bottom">
		  <van-picker
		    show-toolbar
		    :columns="sortColumns"
		    @cancel="showSortPicker = false"
		    @confirm="onConfirmSort"
		  />
		</van-popup>
		
		<van-popup v-model="showFilterPicker" position="bottom">
		  <van-picker
		    show-toolbar
		    :columns="filterColumns"
		    @cancel="showFilterPicker = false"
		    @confirm="onConfirmFilter"
		  />
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '',
				searchList: [
					{
						text: '化学生物及重要分析教育局重点实验室',
						info: '化学化工学院  化学类  特种设备类',
						grade: '二级'
					},
					{
						text: '长沙理工大学',
						info: '湖南省长沙市天心区长沙理工大学',
						grade: '普通客户'
					},
					{
						text: '湖北工业大学',
						info: '湖北省武汉市洪山区武昌南湖李家墩1号湖北工业大学',
						grade: '普通客户'
					},
					{
						text: '武汉大学',
						info: '未填写',
						grade: '普通客户'
					},
					{
						text: '湖南中医药大学',
						info: '未填写',
						grade: '普通客户'
					},
					{
						text: '武汉大学药学院',
						info: '湖北省武汉市武昌区珞珈山路16号武汉大学（文理学部）',
						grade: '重要客户'
					},
					{
						text: '长江大学',
						info: '湖北省荆州市荆州区南环路1号长江大学东校区',
						grade: '重要客户'
					},
					{
						text: '合肥工业大学',
						info: '未填写',
						grade: '重要客户'
					},
					{
						text: '中南林业科技大学',
						info: '湖南省长沙市天心区中南立业科技大学（长沙小区）',
						grade: '重要客户'
					},
					{
						text: '南华大学',
						info: '未填写',
						grade: '重要客户'
					}
				],
				showSortPicker: false,
				showFilterPicker: false,
				sortColumns: ['普通', '重要'],
				filterColumns: ['学院', '实验室等级', '安全等级'],
			}
		},
		methods: {
			/**
			 * 返回
			 */
			onClickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			/**
			 * 监听搜索
			 */
			onSearch() {
				console.log('搜索方法');
			},
			/**
			 * 监听取消
			 */
			onCancel() {
				console.log('取消了');
			},
			/**
			 * sort回调
			 */
			onConfirmSort(e) {
				console.log('srot ->', e);
				this.showSortPicker = false	
			},
			/**
			 * sort回调
			 */
			onConfirmFilter(e) {
				console.log('filter ->', e);
				this.showFilterPicker = false
			}
		}
	}
</script>

<style>

</style>
