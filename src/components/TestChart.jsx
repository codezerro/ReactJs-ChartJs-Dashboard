import React, { useState, useEffect, useCallback } from 'react'
import Button from '../ui/Button'
import { barChartOptions } from './../data/data'

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
export const m = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const d1 = [10, 200, 111, 154, 99, 21, 141, 200, 111, 154, 10, 200]
export const d2 = [15, 190, 100, 164, 159, 11, 150, 190, 100, 164, 159, 177]

const TestChart = () => {
  // useState
  let val = 0
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(11)
  const [mSelected, setmSelected] = useState(0)
  const [months, setMonths] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ])
  const [dataOne, setDataOne] = useState([
    10, 200, 111, 154, 99, 21, 141, 200, 111, 154, 10, 200,
  ])
  const [dataTwo, setDataTwo] = useState([
    15, 190, 100, 164, 159, 11, 150, 190, 100, 164, 159, 177,
  ])

  // use
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })

  // useEffect
  useEffect(() => {
    console.log(months.length)
    setData({
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          data: dataOne,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: dataTwo,
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    })
  }, [months])

  // functions
  const popMonth = async (v, id) => {
    v = v * 1
    let mx, mn

    if (id === 1) {
      setMinVal(v)
      mx = maxVal
      mn = v
    } else if (id === 2) {
      setMaxVal(v)
      mx = v
      mn = minVal
    }

    mn = Math.min(mn, mx)
    mx = Math.max(mn, mx)

    console.log(mn)
    console.log(mx)

    let newM = []
    let newDataOne = []
    let newDataTwo = []

    for (var i = mn; i <= mx; i++) {
      newM.push(m[i])
      newDataOne.push(d1[i])
      newDataTwo.push(d2[i])
    }
    setMonths(newM)
    setDataOne(newDataOne)
    setDataTwo(newDataTwo)
  }

  return (
    <div className="">
      {/* button start */}
      <Button
        popMonth={popMonth}
        labels="Choose a Month"
        mSelected={0}
        id={1}
      />
      <Button
        popMonth={popMonth}
        labels="Choose another Month"
        mSelected={11}
        id={2}
      />
      {/* button end */}
      <div className="">
        <Bar
          options={barChartOptions}
          data={data}
          height="300px"
          width="450px"
        />
      </div>
    </div>
  )
}

export default TestChart
