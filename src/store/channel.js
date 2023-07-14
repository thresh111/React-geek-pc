import { http } from '@/utils'
const { makeAutoObservable } = require('mobx')

class ChannelStore {
  channels = []
  constructor() {
    makeAutoObservable(this)
  }
  loadChannelList = async () => {
    const res = await http.get('/channels')
    // console.log(res.data.data.channels)
    this.channels = res.data.data.channels
  }
}

export default ChannelStore
