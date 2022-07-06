const monthsOptions = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' },
]

// bar chart data
const barChartData = {
  labels : [],
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
};

// bar chart options
const barChartOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color:'white'
    },
  },
  maintainAspectRatio: false,
  responsive: false,
};

// month select
export {monthsOptions};
// bar chart
export {barChartData};
export {barChartOptions};
