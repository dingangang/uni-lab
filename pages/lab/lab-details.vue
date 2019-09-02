<template>
  <div class="page">
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item title="实验室基本信息" name="1">
        <div class="ct-block-details">
          <p class="ct-item-block">
            <span class="ct-item-block__title">所属单位：</span>
            <span class="ct-item-block__content">
              <span>江苏省薄膜材料重点实验室物理科技楼123</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室类型：</span>
            <span class="ct-item-block__content">
              <span>科研实验室</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室位置：</span>
            <span class="ct-item-block__content">
              <span>天赐庄校区物理科技楼123123</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室责任人：</span>
            <span class="ct-item-block__content">
              <span>方亮</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室安全分类：</span>
            <span class="ct-item-block__content">
              <span>机电类实验室</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室风险等级：</span>
            <span class="ct-item-block__content">
              <span>三级</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">风险源：</span>
            <span class="ct-item-block__content">
              <span>高温及大功率设备</span>
            </span>
          </p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="实验室人员信息" name="2">
        <div class="ct-block-details">
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验室责任人：</span>
            <span class="ct-item-block__content">
              <span>方亮</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">安全管理员：</span>
            <span class="ct-item-block__content">
              <span>翁雨燕</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>王顺</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
          <p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>涂宝星</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
					<p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>胡一奇</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
					<p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>王纬</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
					<p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>周海林</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
					<p class="ct-item-block">
            <span class="ct-item-block__title">实验人员：</span>
            <span class="ct-item-block__content">
              <span>惠强</span>
              <span>通过安全培训考试</span>
            </span>
          </p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="实验室物资安全信息" name="3">
        <div class="ct-block-details">
          <h4 class="text-red mb-tiny">管制化学品</h4>
					<table class="ct-table van-hairline--bottom">
					  <tbody>
					    <tr>
					      <td>无</td>
					      <td></td>
					      <td></td>
					    </tr>
					  </tbody>
					</table>
          <h4 class="text-red mb-tiny">实验动物</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
              <tr>
                <td>无</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h4 class="text-red mb-tiny">病原微生物</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
              <tr>
                <td>无</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h4 class="text-red mb-tiny">放射性同位素</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
              <tr>
                <td>无</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </van-collapse-item>
      <van-collapse-item title="实验室仪器设备安全管理信息" name="4">
        <div class="ct-block-details">
          <h4 class="text-red mb-tiny">高温</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
            <tr>
              <td>马弗炉</td>
              <td>高温</td>
              <td>1台</td>
            </tr>
            </tbody>
          </table>
          <h4 class="text-red mb-tiny">高压</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
            <tr>
              <td>无</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
          <h4 class="text-red mb-tiny">易爆</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
            <tr>
              <td>无</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
          <h4 class="text-red mb-tiny">辐射</h4>
          <table class="ct-table van-hairline--bottom">
            <tbody>
            <tr>
              <td>无</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </van-collapse-item>
      <van-collapse-item title="实验室隐患排查与治理" name="5">
        <h4 class="text-red mb-tiny">巡查频次：</h4>
        <p class="ct-item-block">
          <span class="ct-item-block__content" style="width: 100%">
              <span>自查≥4次/月 已完成4次</span>
              <span>学院自查≥2次/月   已完成2次           <a class="text-link pull-right">查看</a></span>
              <span>学校巡查≥1次/月   已完成0次           <a class="text-link pull-right">查看</a></span>
            </span>
        </p>
      </van-collapse-item>
    </van-collapse>

    <div class="mt-large text-center" style="margin: 0 20px">
      <van-button type="primary" style="width: 100%" @tap="handleClick">开始巡查</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: '1'
    }
  },
	onLoad() {
		uni.setNavigationBarTitle({
			title: '纳米氧化物光电实验室'
		})
	},
  methods: {
    handleClick: function() {
      console.log('跳转至巡查页面')
      uni.navigateTo({
      	url: './lab-approval',
      	success: res => {},
      	fail: () => {},
      	complete: () => {}
      });
    }
  }
}
</script>

<style scoped>

</style>
