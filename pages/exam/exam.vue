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
				<view class="ct-lab-item" @tap.stop="goLabDetails(item)">
					<text class="ct-lab-item__text">   
						考试{{item}}
					</text>
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
				<view class="ct-lab-item" @tap.stop="goLabDetails(item)">
					<text class="ct-lab-item__text">   
						考试{{item}}
					</text>
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
    methods: {
		/**
		 * 模拟数据更新
		 */
		init() {
			// 这里包含了滚动加载，文档地址 https://youzan.github.io/vant/#/zh-CN/list
			
			if (this.finished) {
				return
			}
			
			// 异步更新数据
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
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
		 * 去考试详情页面
		 * @param {any} 传入的对应考试的信息  
		 */
		goLabDetails(item) {
			console.log('传入的考试的信息是', item)
			console.log("跳转到对应的考试界面");
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
