<template>
	<view class="ct-page">
		<!-- #ifdef H5 -->
		<van-list
		  v-model="loading"
		  :finished="finished"
		  finished-text="没有更多了"
		  @load="init"
		>
		    <van-cell
				v-for="(item, index) in list"
				:key="index"
		    >
				<view class="ct-lab-item" @tap="goLabDetails(item)">
					<text class="ct-lab-item__text">   
						实验室{{item}}
					</text>
					<van-button
						type="primary"
						size="small"
						class="ct-lab-item__button"
						@tap.stop="goBookLab(item)"
					>
						预约
					</van-button>
				</view>
		    </van-cell>
		</van-list>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<van-cell-group>
		    <van-cell
				v-for="(item, index) in list"
				:key="index"
		    >
				<view class="ct-lab-item" @tap="goLabDetails(item)">
					<text class="ct-lab-item__text">   
						实验室{{item}}
					</text>
					<van-button
						type="primary"
						size="small"
						class="ct-lab-item__button"
						@tap.stop="goBookLab(item)"
					>
						预约
					</van-button>
				</view>
		    </van-cell>
		</van-cell-group>
		<view :hidden="finished" @tap="init" class="load-more-btn">加载更多</view>
		<view :hidden="!finished" class="load-more-btn">没有更多了</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				loading: false,
				finished: false
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			this.init()
			// #endif
		},
		// onPageScroll(e) {
		// 	// #ifdef MP-WEIXIN
		// 		console.log(e);
		// 	// #endif
		// },
		onReachBottom() {
			this.init()
		},
		methods: {
			/**
			 * 模拟数据更新
			 */
			init() {
				// 这里包含了滚动加载，文档地址 https://youzan.github.io/vant/#/zh-CN/list
				// 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 15; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			},
			/**
			 * 处理预定按钮点击
			 * @param {any} 传入的对应实验室的信息  
			 */
			goBookLab(lab) {
				console.log('传入的实验室的信息是', lab)
				uni.navigateTo({
					url: `./lab-book?lab=${lab}`,
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
					url: `./lab-details?lab=${lab}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
