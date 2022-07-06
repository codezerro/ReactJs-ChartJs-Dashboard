import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import {
  HomeChart,
  DoughnutChart,
  PieChart,
  BarChart,
  LineChart,
  TestChart,
} from './components/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full" style={{ minHeight: '100vh' }}>
          <Sidebar />
          <div className="w-full bg-main-dark-bg xh-screen">
            <Routes>
              <Route path="/" element={<HomeChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/doughnut" element={<DoughnutChart />} />
              <Route path="/dynamic-chart" element={<TestChart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
