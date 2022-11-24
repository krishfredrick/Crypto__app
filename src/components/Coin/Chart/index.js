import React from 'react'
import './styles.scss'
import { Line } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'

const LineChart = ({chartData, options}) => {
  return (
   <Line data= {chartData} options= {options}  />
  )
}

export default LineChart
