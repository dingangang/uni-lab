<template>
	<view class="ct-page">
		<van-nav-bar
			class="ct-navbar"
			:title="title"
			left-arrow
			@click-left="backMain"
		/>
		<van-list
		  v-model="loading"
		  :finished="finished"
		  finished-text="没有更多了"
		  @load="init"
		>
		    <van-cell
				v-for="item in list"
				:key="item.id"
		    >
				<view class="ct-lab-item" @tap="goLabDetails(item)">
					<text class="ct-lab-item__text">   
						{{item.college_name}}
					</text>
					<text> </text>
					<!-- <van-button
						type="primary"
						size="small"
						class="ct-lab-item__button"
						@tap.stop="goBookLab(item)"
					>
						预约
					</van-button> -->
				</view>
		    </van-cell>
		</van-list>
		
	</view>
</template>

<script>
	import { getLabList } from '../../api/lab.js'
	export default {
		data() {
			return {
				list: [],
				loading: false,
				finished: false,
				title: '实验室列表'
			}
		},
		onLoad() {
			this.getLabList()
		},
		onReachBottom() {
			this.init()
		},
		computed: {
			role: function() {
				return this.$store.getters.role
			}
		},
		methods: {
			/**
			 * 模拟数据更新
			 */
			init() {
				// 这里包含了滚动加载，文档地址 https://youzan.github.io/vant/#/zh-CN/list
				// 异步更新数据
				// 				setTimeout(() => {
				// 					for (let i = 0; i < 15; i++) {
				// 						this.list.push(this.list.length + 1);
				// 					}
				// 					// 加载状态结束
				// 					this.loading = false;
				// 
				// 					// 数据全部加载完成
				// 					if (this.list.length >= 40) {
				// 						this.finished = true;
				// 					}
				// 				}, 500);
				if (this.finished) {
					return
				}
				
				
				// 填充静态数据
				this.loading = false
				this.finished = true
				this.list = [
					{
						id: '1',
						name: '化学生物学及中药分析教育部重点实验室'
					},{
						id: '2',
						name: '石化材料工程实验室'
					},{
						id: '3',
						name: '低纬量子结构与调控教育部重点实验室'
					},{
						id: '4',
						name: '纳米化学实验室'
					},
				]
			},
			/**
			 * 处理预定按钮点击
			 * @param {any} 传入的对应实验室的信息  
			 */
			goBookLab(lab) {
				console.log('传入的实验室的信息是', lab)
				uni.navigateTo({
					url: `./lab-book?id=${lab.id}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 去实验室详情页面
			 * @param {any} 传入的对应实验室的信息  
			 */
			goLabDetails(lab) {
				console.log('传入的实验室的信息是', lab)
				uni.navigateTo({
					url: `./lab-details?id=${lab.id}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 回到主页
			 */
			backMain() {
				uni.navigateTo({
					url: '../main/main',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 获取实验室列表
			 */
			getLabList() {
				const data = {}
				getLabList(data).then(res => {
					console.log('实验室列表返回信息', res);
					if (res.serverResult.resultCode === 200) {
						this.list = res.rows
					}
				})
			}
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
