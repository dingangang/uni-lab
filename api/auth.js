import request from '../utils/request'

// code换取token
export function getAuthToken(code) {
  return request({
    url: `http://aip.app.hunnu.edu.cn/oauth2/access_token?client_id=sB9TQUNNQ0iab6DKWGznUzw&client_secret=wHmTzBLGRSqB91EjghVM6g&grant_type=authorization_code&code=${code}&redirect_uri=http://syszhxxpt.hunnu.edu.cn/#/gateway`,
    method: 'get'
  })
}

// 更新token
export function refreshToken(refresh_token) {
  return request({
    url: `http://aip.app.hunnu.edu.cn/oauth2/refresh_token?client_id=sB9TQUNNQ0iab6DKWGznUzw&client_secret=wHmTzBLGRSqB91EjghVM6g&grant_type=refresh_token&refresh_token=${refresh_token}`,
    method: 'get'
  })
}

// 获取用户信息
export function getAuthUserInfo(access_token) {
  return request({
    url: `http://aip.app.hunnu.edu.cn/oauth2/user_info?access_token=${access_token}`,
    method: 'get'
  })
}

// 换取用户详细信息
export function getAuthUserDetails(userId) {
  return request({
    url: `datasyn/getuserbyid/${userId}`,
    // url: `datasyn/getuserbyid/001Bbu22ROy7icMdUhMv3AQ`,
    method: 'get'
  })
}

// 检查token有效性
export function checkTokenActive(access_token) {
  return request({
    url: `http://aip.app.hunnu.edu.cn/oauth2/introspect?access_token=${access_token}`,
    method: 'get'
  })
}

// 内部系统单点登录
export function loginToSSO(key) {
  return request({
    url: `http://202.197.117.216:81/#/sso?key=${key}`,
    method: 'get'
  })
}

// 统一认证退出
export function logoutFromAuth() {
  return request({
    url: `http://aip.app.hunnu.edu.cn/oauth2/logout?client_id=sB9TQUNNQ0iab6DKWGznUzw&response_type=code&redirect_uri=http://syszhxxpt.hunnu.edu.cn/#/gateway?origin`,
    method: 'get'
  })
}

