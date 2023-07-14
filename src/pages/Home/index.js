import './index.scss'
// 1. 看文档 echarts -- 如何在react 中获取 dom --> useRef
// 2. 什么地方获取dom节点 --> useEffect
import Bar from '@/components/Bar'
const Home = () => {
  return (
    <div className="charts">
      <Bar
        title="主流框架使用满意度1"
        xData={['react', 'vue', 'angular']}
        yData={[70, 40, 30]}
        style={{ width: '500px', height: '400px' }}
      ></Bar>
      <Bar
        title="主流框架使用满意度2"
        xData={['vue', 'react', 'angular']}
        yData={[50, 80, 30]}
        style={{ width: '400px', height: '400px' }}
      ></Bar>
    </div>
  )
}
export default Home
