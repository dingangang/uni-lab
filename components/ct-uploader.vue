<template>
	<view class="ct-uploader">
		<view class="ct-uploader__preview">
			<view v-for="item in fileList" :key="item.url" class="ct-uploader__preview-image">
				 <image
					class="img-container"
					mode="scaleToFill"
					:src="item.url"
				 ></image>
				 <icon type="clear" size="13" class="close-icon" @tap="handleDelete(item.url)"/>
			</view>
			<view class="ct-uploader__upload">
				<van-button
				  type="primary"
					size="small"
					@tap="uploadImg"
				>上传照片</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {vanButton} from '@/wxcomponents/vant-weapp/button/index.js' 
	
	export default {
		name: 'CtUploader',
		components: {
			vanButton
		},
		props: {
			fileList: {
				type: Array,
				default: () => []
			},
			afterRead: {
				type: Function
			},
			maxCount: {
				type: Number,
				default: 5
			},
			beforeDelete: {
				type: Function
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			/**
			 * 删除事件回调
			 * @param {Object} url
			 */
			handleDelete(url) {
				this.beforeDelete({
					url
				})
			},
			/**
			 * 上传照片
			 */
			uploadImg() {
				const $vm = this
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
								$vm.afterRead(res.tempFilePaths)
				    }
				});
			}
		},
	}
</script>

<style lang="scss">
.ct-uploader {
	
	&__preview {
		display: flex;
		align-items: flex-end;
	}
	
	&__preview-image {
		position: relative;
		
		.img-container {
			width: 80px;
			height: 80px;
		}
		
		.close-icon {
			position: absolute;
			right: 3px;
			bottom: 0;
		}
	}
	
	&__upload {
		margin-left: 20upx;
	}
}
</style>
