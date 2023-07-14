// login module
import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'
class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }

  // 调用登录接口
  getToken = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    // 存token
    console.log(res.data.data.token)
    this.token = res.data.data.token
    setToken(this.token)
  }
  // 登录退出
  loginOut = () => {
    this.token = ''
    removeToken()
  }
}

export default LoginStore
