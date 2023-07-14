// 1. 判断token是否存在
// 2. 如果存在直接正常渲染
// 3. 如果不存在 重定向到 登录页

// 高阶组件: 把一个组件当成另一个组件的参数传入
// 然后通过一定的判断 返回新的组件

// 高阶函数：把一个函数当成另一个函数的参数传入
// 然后通过一定的判断 返回新的函数
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthComponent({ children }) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace></Navigate>
  }
}

// <AuthComponent> <Layout /> </AuthComponent>
// 登录： <>{children}</>
// 非登录： <Navigate to="/login" replace></Navigate>

export { AuthComponent }
