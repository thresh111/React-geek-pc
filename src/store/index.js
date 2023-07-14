import React from 'react'
import LoginStore from './login'
import UserStore from './user'
import ChannelStore from './channel'
class RootStore {
  constructor() {
    this.LoginStore = new LoginStore()
    this.UserStore = new UserStore()
    this.ChannelStore = new ChannelStore()
  }
}
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)
export { useStore }
