import Cookies from 'js-cookie'

const TokenKey = 'access_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setLocalLabID(labID) {
  const storage = window.localStorage
  storage.setItem('labID', labID)
}

export function getLocalLabID() {
  const storage = window.localStorage
  const labId = storage.getItem('labID')
  return labId
}

export function removeLocalLabID() {
  const storage = window.localStorage
  storage.removeItem('labID')
}

export function setTokenInfo(tokenInfo) {
  const storage = window.localStorage
  storage.setItem('tokenInfo', JSON.stringify(tokenInfo))
}

export function getTokenInfo() {
  const storage = window.localStorage
  const tokenInfo = storage.getItem('tokenInfo')
  return JSON.parse(tokenInfo)
}

export function removeTokenInfo() {
  const storage = window.localStorage
  storage.removeItem('tokenInfo')
}

export function setCode(code) {
  const storage = window.localStorage
  storage.setItem('code', code)
}

export function getCode() {
  const storage = window.localStorage
  return storage.getItem('code')
}

export function removeCode() {
  const storage = window.localStorage
  storage.removeItem('code')
}
