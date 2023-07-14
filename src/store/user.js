import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'

class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  async getUserInfo() {
    try {
      const res = await http.get('/user/profile')
      this.userInfo = res.data.data
      // console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserStore
