import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: 'white',
    },
  },
  maintainAspectRatio: false,
  responsive: false,
}

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 200, 111, 154, 99, 21, 141],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [15, 190, 100, 164, 159, 11, 150],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const BarChart = () => {
  return (
    <div className="">
      <div className="">
        <Bar options={options} data={data} height="300px" width="450px" />
      </div>
    </div>
  )
}

export default BarChart
