// import { login, logout, getInfo } from '@/api/user'
import { getToken,
  setToken,
  removeToken,
  removeLocalLabID,
  setTokenInfo,
  getTokenInfo,
  setCode,
  removeCode
} from '../../utils/auth'
import { getAuthToken,
  refreshToken,
  getAuthUserInfo,
  checkTokenActive,
  getAuthUserDetails,
  logoutFromAuth } from '../../api/auth'
// import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: [],
  code: '',
  tokenInfo: null,
  userInfo: null,
  userDetails: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_CODE: (state, code) => {
    state.code = code
  },
  SET_TOKENINFO: (state, tokenInfo) => {
    state.tokenInfo = tokenInfo
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_USERDETAILS: (state, userDetails) => {
    state.userDetails = userDetails
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      // 绕过接口直接复制，正式开发请补全逻辑
      setTimeout(function() {
        const data = 'admin-token'
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }, 1000)
      // 这里是向后台发起登录请求，返回后设置token.
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const res = {
          roles: ['admin'],
          introduction: 'I am a super administrator',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Super Admin'
        }
        const { roles, name, avatar } = res
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(res)
      }, 1000)
      // 这里是向后台请求用户的一些基本信息用于全局配置，后面开发再补全逻辑
      // getInfo(state.token).then(response => {
      //   const { data } = response
      //
      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //
      //   const { roles, name, avatar } = data
      //
      //   // roles must be a non-empty array
      //   if (!roles || roles.length <= 0) {
      //     reject('getInfo: roles must be a non-null array!')
      //   }
      //
      //   commit('SET_ROLES', roles)
      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        // commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        // removeToken()
        // resetRouter()
        removeLocalLabID()
        resolve()
      }, 1000)
      // 发起退出的请求，完成后需要清理一些本地cookies等
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   commit('SET_ROLES', [])
      //   removeToken()
      //   resetRouter()
      //   removeLocalLabID()
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // 从门户退出
  logoutFromGateway({ commit, state }) {
    return new Promise((resolve, reject) => {
      setTimeout(async function() {
        commit('SET_TOKEN', '')
        commit('SET_USERINFO', null)
        commit('SET_USERDETAILS', null)
        const logoutResult = await logoutFromAuth()
        console.log('logoutResult', logoutResult)
        removeToken()
        removeCode()
        resetRouter()
        resolve()
      }, 1000)
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  /**
   * 统一认证，携带code换取token
   * 返回示例：
   * {
   *  access_token: "eyJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiJkaWNQdmt0Y2lhVGlhMjFtVnFHRWwzUWx3IiwiYWMiOiIxODU1NjU3MTY3NSIsImlzcyI6ImMyIiwidW4iOiLlkLTmmajmm6YiLCJleHAiOjE1NzExOTU5ODAsImFpZCI6InNCOVRRVU5OUTBpYWI2REtXR3puVXp3Iiwicm8iOlsiZGVmYXVsdCJdLCJpYXQiOjE1NzExOTU5MjB9.dJ4uliD-OhztDdug4rflSJ8prXez8UpcQU4lUt__7sHucM6zIyLrhogWMKiWzqgf8aPzmxRVSnqBLgYfr3EwiV4uRhANUiLWkjbHehE_8QXdBzKhUhWZV8aXPzjvzjwsqx6njBCZrWr7rnsdRMWSTvQ8YZ06KY6-PFkNoXnhanU"
   *  expires_in: "60"
   *  re_expires_in: "604800"
   *  refresh_token: "dc65c45c8fe3815fc1bae1a2def7280f"
   *  security_level: "0"
   * }
   * @param commit
   * @param dispatch
   * @param code
   * @return {Promise<void>}
   */
  async unifiedAuth({ commit, dispatch }, code) {
    // 将code储存起来了，备用
    commit('SET_CODE', code)
    // 储存code到本地储存
    setCode(code)
    const accessToken = getToken()
    let authTokenInfo = null
    if (accessToken) {
      // 先检查token有效性
      const tokenActive = await checkTokenActive(getToken())
      if (tokenActive.active) {
        // token有效，从localstorage拉取tokenInfo
        authTokenInfo = getTokenInfo()
      } else {
        // token失效了,用code换取新的token
        authTokenInfo = await getAuthToken(code)
        // 储存tokenInfo到localStorage
        setTokenInfo(authTokenInfo)
      }
    } else {
      // cookies中没有access_token 由code换取token信息
      authTokenInfo = await getAuthToken(code)
      // 储存tokenInfo到localStorage
      setTokenInfo(authTokenInfo)
    }
    // 储存access_token
    commit('SET_TOKEN', authTokenInfo.access_token)
    // 储存access_token到Cookies
    setToken(authTokenInfo.access_token)
    // 储存token信息。这里我将两者都进行储存，可以根据实际开发使用
    commit('SET_TOKENINFO', authTokenInfo)
    // 设定立牌刷新功能,后台设定失效时间是7200s,所以7000s进行一次刷新
    setInterval(() => {
      dispatch('refreshToken')
    }, 7000000)
    return authTokenInfo
  },

  /**
   * 检查本地储存中code,并储存到store
   * @param commit
   * @param state
   * @param localCode
   * @returns {Promise<void>}
   */
  async checkCode({ commit, state }, localCode) {
    if (state.code.length === 0) {
      commit('SET_CODE', localCode)
    }
  },

  /**
   * 刷新token,设定为7000s执行一次
   * @param commit
   * @return {Promise<void>}
   */
  async refreshToken({ commit, state }) {
    const refresh_token = state.tokenInfo.refresh_token
    const authTokenInfo = await refreshToken(refresh_token)
    // 储存access_token
    commit('SET_TOKEN', authTokenInfo.access_token)
    // 储存access_token到Cookies
    setToken(authTokenInfo.access_token)
    // 储存token信息。这里我将两者都进行储存，可以根据实际开发使用
    commit('SET_TOKENINFO', authTokenInfo)
  },

  /**
   * 用token换取用户信息
   * @param commit
   * @param state
   * @return {Promise<void>}
   */
  async getAuthUserInfo({ commit, state }) {
    const access_token = state.token
    const userInfo = await getAuthUserInfo(access_token)
    commit('SET_USERINFO', userInfo)
    return userInfo
  },
  async getAuthUserDetails({ commit, state }) {
    const userId = state.userInfo.userId
    const userDetails = await getAuthUserDetails(userId)
    commit('SET_USERDETAILS', userDetails && userDetails.responseEntity ? userDetails.responseEntity : null)
    return userDetails
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

