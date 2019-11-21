const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  mainChecklist: state => state.app.mainChecklist,
  code: state => state.user.code,
  userInfo: state => state.user.userInfo,
  userDetails: state => state.user.userDetails
}
export default getters
