# React-极客园PC项目
技术栈： 
  ○ React 官方脚手架 create-react-app
  ○ react hooks
  ○ 状态管理：mobx
  ○ UI 组件库：antd v4
  ○ ajax请求库：axios
  ○ 路由：react-router-dom 以及 history
  ○ 富文本编辑器：react-quill
  ○ CSS 预编译器：sass
# 项目打包优化
## 优化 - 配置 CDN
分析说明：通过 craco 来修改 webpack 配置，从而实现 CDN 优化

````
match.userOptions.cdn = cdn 改成 match.userOptions.files = cdn
htmlWebpackPlugin.userOptions.cdn.js.forEach 改成 htmlWebpackPlugin.options.files.js.forEach
````
## 优化-路由懒加载
分析说明：对路由进行懒加载实现代码分隔


  
