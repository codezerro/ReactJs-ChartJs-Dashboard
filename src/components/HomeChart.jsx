import React from 'react'
import { PieChart, DoughnutChart, BarChart, LineChart } from './index'

const HomeChart = () => {
  return (
    <div className="flex flex-col">
      <div className="h-20 w-full text-center justify-center items-center flex">
        <h1 className="text-white font-bold text-xl">ChartJs Overview</h1>
      </div>
      <div className="xh-screen xw-screen">
        <div className="flex flex-row flex-wrap xw-screen">
          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <PieChart />
          </div>
          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <DoughnutChart />
          </div>

          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <BarChart />
          </div>

          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <LineChart />
          </div>
          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <LineChart />
          </div>
          <div className="basis-1-2 h-100 flex items-center justify-center card ml-3 mb-3">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeChart
