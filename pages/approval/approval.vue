<template>
	<view class="ct-page">
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
				<view class="ct-lab-item">
					<text class="ct-lab-item__text">   
						审批事项{{item}}
					</text>
					<van-button
						type="primary"
						size="small"
						class="ct-lab-item__button"
						@tap.stop="goLabDetails(item)"
					>
						处理
					</van-button>
				</view>
		    </van-cell>
		</van-list>
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
			
		},
    methods: {
		/**
		 * 模拟数据更新
		 */
		init() {
			// 这里包含了滚动加载，文档地址 https://youzan.github.io/vant/#/zh-CN/list
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
		 * 去审批事项详情页面
		 * @param {any} 传入的对应审批事项的信息  
		 */
		goLabDetails(item) {
			console.log('传入的审批事项的信息是', item)
			uni.navigateTo({
				url: `./approval-details?item=${item}`,
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
