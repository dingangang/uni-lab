<template>
  <view class="page">
    <view class="ct-content">
      <van-cell-group>
        <van-cell
          title="巡查对象"
          value-class="text-left"
          title-class="x-limit-title"
          :value="checkValue"
          @tap="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-cell
          title="巡查对象"
          value-class="text-left"
          title-class="x-limit-title"
        >
          物理科技楼123
          <van-icon slot="right-icon" size="18px" name="scan" />
        </van-cell>
        <van-cell
          title="巡查结果"
					use-label-slot
        >
          <view slot="label">
						<view class="btn-containers">
								<view class="btn-block">
									<van-button
										round
										class="gray-btn"
										:class="activeBtn === '1'? 'gray-btn--green' :''"
										@click="handleChangeBtn('1')"
									>巡查正常</van-button>
								</view>
								<view class="btn-block">
									<van-button
										round
										class="gray-btn"
										:class="activeBtn === '2'? 'gray-btn--green' :''"
										@click="handleChangeBtn('2')"
									>存在问题</van-button>
								</view>
								<view class="btn-block">
									<van-button
										round
										class="gray-btn"
										:class="activeBtn === '3'? 'gray-btn--green' :''"
										@click="handleChangeBtn('3')"
									>优秀实验室</van-button>
								</view>
						</view>
          </view>
        </van-cell>
      </van-cell-group>

      <view class="ct-box mt-medium mb-large" :hidden="activeBtn !== '2'">
        <view class="ct-box__header">
          隐患上报
        </view>
        <van-cell-group>
          <view v-for="trouble in troubles" :key="trouble.id">
            <van-cell
              title="隐患"
            >
              <van-icon
                slot="right-icon"
                name="close"
                color="#f44"
                size="24px"
                @click="handleDelTrouble(trouble)"
              />
            </van-cell>
            <van-cell
              title="隐患等级"
							use-label-slot
            >
              <view slot="label">
								<view class="btn-containers">
									<view class="btn-block btn-block--half">
										<van-button
										  round
										  class="gray-btn"
										  :class="trouble.grade === '1'? 'gray-btn--red' :''"
										  @click="handleGradeChange(trouble, '1')"
										>紧急</van-button>
									</view>
									<view class="btn-block btn-block--half">
										<van-button
										  round
										  class="gray-btn"
										  :class="trouble.grade === '2'? 'gray-btn--red' :''"
										  @click="handleGradeChange(trouble, '2')"
										>普通</van-button>
									</view>
								</view>
              </view>
            </van-cell>
            <van-cell
              title="隐患描述"
							use-label-slot
            >
              <view slot="label">
                <van-field
                  v-model="trouble.content"
                  type="textarea"
                  class="p-0 has-no-border"
                  placeholder="请输入隐患内容"
                />
              </view>
            </van-cell>
            <van-cell use-label-slot>
              <template slot="title">
                <view style="display: flex; justify-content: space-between">
                  <span>隐患照片</span>
                  <span class="text-weakening">1/9</span>
                </view>
              </template>
              <view slot="label">
                <van-uploader
                  :file-list="trouble.fileList"
                  :after-read="afterRead"
                  :before-delete="handleDelImg"
                  :max-count="9"
                />
              </view>
            </van-cell>
          </view>
        </van-cell-group>
        <view class="mt-step mb-large p-small">
          <van-button
						size="large"
            type="info"
            style="border-radius: 4px; width: 100%"
						class="big-btn"
            @click="handleAddTrouble"
          >添加隐患</van-button>
					<view class="mt-small">
						
					</view>
          <van-button
						size="large"
            type="primary"
            class="big-btn"
            style="border-radius: 4px; width: 100%"
            :loading="isUploading"
            @click="handleUpload"
          >上报隐患</van-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: '2',
      troubles: [
        {
          id: this.$dayjs().unix(),
          grade: '1',
          content: '',
          fileList: [
            { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
            // Uploader 根据文件后缀来判断是否为图片文件
            // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            // { url: 'https://cloud-image', isImage: true }
          ]
        }
      ],
      isUploading: false,
      checkValue: '前往查看',
      showPicker: false,
      columns: ['前往查看', '人员上报'],
    }
  },
	onLoad() {
		// 动态设置页面标题
		uni.setNavigationBarTitle({
			title: '纳米氧化物光电实验室'
		})
	},
  methods: {
    /**
     * 处理按钮激活状态
     * @param index {String} 按钮序列
     */
    handleChangeBtn(index) {
      this.activeBtn = index
    },
    /**
     * 修改隐患等级
     * @params trouble {Object} 需要修改的对象
     * @params value {String} 修改的值
     */
    handleGradeChange(trouble, value) {
      this.$set(trouble, 'grade', value)
    },
    /**
     * 文件上传的方法
     */
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    /**
     * 删除文件的方法
     */
    handleDelImg(res) {
      console.log('删除文件的方法', res)
    },
    /**
     * 添加隐患
     */
    handleAddTrouble() {
      this.troubles.push({
        id: this.$dayjs().unix(),
        grade: '1',
        content: '',
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          // { url: 'https://cloud-image', isImage: true }
        ]
      })
    },
    /**
     * 删除隐患条目
     * @param trouble {Object}
     */
    handleDelTrouble(trouble) {
      const index = this.troubles.findIndex(item => item.id === trouble.id)
      console.log(index)
      if (index > -1) {
        this.troubles.splice(index, 1)
      }
    },
    /**
     * 上报隐患
     */
    handleUpload() {
      this.isUploading = true
      setTimeout(() => {
        this.$toast('隐患上报成功')
        this.isUploading = false
      }, 3000)
    },
    /**
     * picker选定事件
     */
    onConfirm(value) {
			console.log("value: " + JSON.stringify(value));
			// #ifdef H5
      this.checkValue = value
			// #endif
			
			// #ifdef MP-WEIXIN
			this.checkValue = value.detail.value
			// #endif
			
      this.showPicker = false
    },
  }
}
</script>

<style scoped lang="scss">
.ct-content {
  padding: 0 12px;
}
</style>
