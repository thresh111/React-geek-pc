import axios from 'axios'
import { getToken, history } from '@/utils'
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

http.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    // console.dir(err.response.status)
    if (err.response.status === 401) {
      // 跳转到登录
      history.push('/login')
    }
    console.dir(err.response.data.message)

    return Promise.reject(err)
  }
)

export { http }
