// 封装图表组件bar
import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

function Bar({ title, xData, yData, style }) {
  const domRef = useRef()
  const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '满意比例',
          type: 'bar',
          data: yData
        }
      ]
    })
  }
  // 执行初始化函数
  useEffect(() => {
    chartInit()
  }, [])

  return (
    <div>
      <div ref={domRef} style={style}></div>
    </div>
  )
}

export default Bar
