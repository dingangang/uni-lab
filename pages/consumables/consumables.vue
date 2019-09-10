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
						{{item.name}}
					</text>
					<text class="ct-lab-item__type ct-lab-item__type--long">
						{{item.type}}
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
			uni.setNavigationBarTitle({
				title: '耗材管理列表'
			})
			// #ifdef MP-WEIXIN
			this.init()
			// #endif
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
			if (this.finished) {
				return
			}
			// 异步更新数据
			// 			setTimeout(() => {
			// 				for (let i = 0; i < 10; i++) {
			// 					this.list.push({
			// 						name: this.list.length + 1,
			// 						type: Math.random() * 10 > 5 ? '1': '2'
			// 					});
			// 				}
			// 				// 加载状态结束
			// 				this.loading = false;
			// 
			// 				// 数据全部加载完成
			// 				if (this.list.length >= 40) {
			// 					this.finished = true;
			// 				}
			// 		    }, 500);
			
			// 填充静态数据
			this.loading = false
			this.finished = true
			// 按角色填充
			if (this.role === 'teacher') {
				this.list = [
					{
						id: '1',
						name: 'HS201810261230301001',
						type: '有机废液'
					},{
						id: '2',
						name: 'HS201810261230301002',
						type: '无机废液'
					},{
						id: '3',
						name: 'HS201810261230301003',
						type: '普通废液'
					},
				]
			} else if (this.role === 'student') {
				this.list = [
					{
						id: '1',
						name: 'LY201810261230301001',
						type: '有机废液'
					},{
						id: '2',
						name: 'LY201810261230301002',
						type: '无机废液'
					},{
						id: '3',
						name: 'LY201810261230301003',
						type: '普通废液'
					},
				]
			}
		},
		/**
		 * 去耗材详情页面
		 * @param {any} 传入的对应耗材的信息  
		 */
		goLabDetails(item) {
			console.log('传入的耗材的信息是', item)
			uni.navigateTo({
				url: `./consumables-details?item=${item.name}&type=${item.type}`,
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
