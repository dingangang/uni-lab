import request from '../utils/request'

// 实验室SSO登录
export function userSSO(data) {
  return request({
    url: 'uc/user/synloginuser',
    method: 'post',
		data
  })
}

// 根据用户角色换取实验室列表
export function getLabList(data) {
  return request({
    url: '/org/base/queryOrgList',
    method: 'post',
		data
  })
}

// 根据用户角色换取实验室列表
export function getLabInfoByID(params) {
  return request({
    url: '/metadata/query/college',
    method: 'get',
		params
  })
}

// 查询实验室人员信息
export function getLabStaff(data) {
  return request({
    url: '/uc/user/query',
    method: 'post',
		data
  })
}