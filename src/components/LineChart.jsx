import React,{useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = () => {
  const [months,setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June']);
  
  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
        color:'white'
      },
    },
  };


  const data = {
    labels:months,
    datasets: [
      {
        label: 'Dataset 1',
        data:  [10,200,111,154,99,21],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [15,190,100,164,159,11],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} width="450px" height="300px" />
    </div>
  )
}

export default LineChart