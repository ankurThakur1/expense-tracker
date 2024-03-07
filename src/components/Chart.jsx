import React from 'react'
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js/auto";


ChartJS.register(ArcElement, Legend, Tooltip);

const Chart = ({ data }) => {
  return (
    <div className="chart" style={{width: 280}}>
        <Doughnut data={data} />
    </div>
  )
}

export default Chart;