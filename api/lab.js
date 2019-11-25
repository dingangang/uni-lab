import request from '../utils/request'

// 根据用户角色换取实验室列表
export function getLabList(data) {
  return request({
    url: '/org/base/queryOrgList',
    method: 'post',
		data
  })
}

// 实验室SSO登录
export function userSSO(data) {
  return request({
    url: 'uc/user/synloginuser',
    method: 'post',
		data
  })
}