<template>
	<view>
		<view class="text-center" style="padding: 20upx 0;">{{collegeName}}</view>
		<van-radio-group v-model="radio">
		  <van-cell-group>
		    <van-cell
					v-for="item in userRoleOrgTable"
					:title="item.rolename"
					:key="item.id"
					clickable
					@click="radio = item.id"
				>
		      <van-radio slot="right-icon" :name="item.id" />
		    </van-cell>
		  </van-cell-group>
		</van-radio-group>
		<view class="text-center" style="margin-top: 40upx;">
			<van-button type="primary" size="large" @tap="selectUserRoleClick">确定</van-button>
		</view>
	</view>
</template>

<script>
	import { userSSO } from '../../api/lab.js'
	import Cookies from 'js-cookie'
	import { Base64 } from 'js-base64'
	export default {
		data() {
			return {
				roledialogTableVisible: false,
				userRoleOrgTable: [],
				loading: false,
				radio: null
			};
		},
		onLoad:function(option){
			const vm = this
			const keyParams = option.key
			if (keyParams) {
				const decodeStr = Base64.decode(keyParams)
				const userinfoJson = JSON.parse(decodeStr)
				if (userinfoJson && userinfoJson.name) {
					// const userLoginReq = { 'user_code': userinfoJson.usercode, 'user_name': userinfoJson.username }
					vm.getUserInfo(userinfoJson)
					// 动态设置页面标题
					uni.setNavigationBarTitle({
						title: '请选择角色'
					})
				} else {
					vm.$toast('非法参数')
				}
			} else {
				// 非法路径
				vm.$toast('非法登陆')
			}
		},
		computed: {
			collegeName() {
				if (this.userRoleOrgTable.length > 0) {
					return this.userRoleOrgTable[0].college_name
				}
				return ''
			}
		},
		methods: {
			/**
			 * 实验室系统拉取用户信息
			 * @param {Object} data
			 */
			getUserInfo(data) {
				const vm = this
				userSSO(data).then((response) => {
          if (response && response.rows && response.rows.length > 0) {
            const userinfo = response.rows[0]
            console.log('userinfo', userinfo)
            // 本地存储用户信息
            Cookies.set('user_name', userinfo.user_name)
            Cookies.set('user_id', userinfo.id)
            Cookies.set('logincode', userinfo.logincode)
            if (userinfo.userRoleOrgList && userinfo.userRoleOrgList.length > 0) {
              vm.roledialogTableVisible = true
              vm.userRoleOrgTable = userinfo.userRoleOrgList
              Cookies.set('userRoleOrgTable', JSON.stringify(userinfo.userRoleOrgList))
            } else {
              Cookies.set('user_rightpath', '')
              Cookies.set('user_role', '')
              // 跳转本地页面
              vm.loading = false
              // vm.$router.push({ path: '/main' })
              // 跳转回门户
              
            }
          } else if (response.serverResult && response.serverResult.resultMessage) {
            this.$notify({
              message: response.serverResult.resultMessage,
              type: 'warning'
            })
            vm.loading = false
            return
          } else {
            vm.loading = false
            vm.$notify({
              message: '登陆异常',
              type: 'warning'
            })
            vm.loading = false
          }
				})
			},
			/**
			 * 选定角色
			 * 
			 */
			selectUserRoleClick() {
				const vm = this
				if (vm.radio === null) {
					vm.$toast('请先选择一个角色')
					return
				}
				const row = vm.userRoleOrgTable.find(item => item.id === vm.radio)
				Cookies.set('user_rightpath', row.rightpath)
				Cookies.set('user_role', row.roleid)
				Cookies.set('current_userroleorg_id', row.id)
				console.log('角色处理完毕');
				uni.switchTab({
					url: './lab'
				})
			}
	},
}
</script>

<style lang="scss">

</style>
