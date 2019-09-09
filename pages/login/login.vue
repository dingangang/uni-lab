<template>
  <view class="login-page">
    <h2 class="text-center" style="position: absolute; top: 10vh; width: 100%;">
			师大物理实验室
		</h2>
    <view class="login-form__container">
      <van-cell-group class="login-form">
        <van-field
          v-model="loginForm.username"
          clearable
          placeholder="请输入用户名"
          autocomplete="off"
        >
          <span slot="label">
            用户名
          </span>
        </van-field>

        <van-field
          v-model="loginForm.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          autocomplete="off"
        >
          <span slot="label">
            密码
          </span>
        </van-field>
      </van-cell-group>
      <view class="text-center login-btn__container">
        <van-button
          :loading="isLoading"
          class="login-btn"
          size="large"
          type="info"
          loading-type="spinner"
          loading-text="登录中..."
          @click="login"
        >登录</van-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'teacher',
        password: '123456'
      },
      isLoading: false
    }
  },
  methods: {
    /**
     * 登录方法
     */
    login() {
	  // 模拟登录
	  // 这里路由跳转由uniapp代理 实验室界面是属于tabbar接管的页面。所以只能用触发tabbar来控制
	  const $vm = this
	  $vm.isLoading = true
		// 模拟选择角色
		switch (this.loginForm.username) {
			case 'teacher':
				$vm.$store.commit('SET_ROLE', 'teacher')
				break
			case 'student':
				$vm.$store.commit('SET_ROLE', 'student')
				break
			default:
				uni.showToast({
				    title: '用户或密码错误',
				    duration: 2000,
						icon: 'none'
				});
				$vm.isLoading = false
				return
		}
		
	  setTimeout(function() {
		console.log('登陆成功,跳转到实验室界面');
		uni.switchTab({
			url: '../lab/lab',
			success: res => {},
			fail: () => {},
			complete: () => {}
		})
	  }, 2000)
    },
    /**
     * 设置按钮点击处理
     */
    onClickRight() {
      alert('预留')
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  
  &__container {
	  padding: 0 40upx;
  }
}
.van-nav-bar .van-icon.white-icon {
  color: #fff;
}
.login-page {
  height: 100%;
  padding-top: 40vh;
  background: url("~@/static/images/bg.png") no-repeat top;
  background-size: 100% 200px;
}
.login-btn {
  
  &__container {
	margin-top: 40upx;
  }
}
.text-center {
	text-align: center;
}
</style>