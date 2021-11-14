import React, { PureComponent } from 'react'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Area,
  Legend,
  ReferenceLine,
  Line,
  Tooltip,
  CartesianGrid
} from 'recharts'

import './style.css'

import { format, parseISO, subMinutes } from 'date-fns'

const data = [

]

for(let num = 20; num > 0; num--) {

  let value = 1 + Math.random()

  data.push({
    date: subMinutes(new Date(), num).toISOString().substr(11, 5),
    value: value,
    valueMin: value - 1,
    valueMax: value + 1,
  })
}

// console.log(data)

export default function Chart() {
  
  let values = []

  data.map((ele) => {
    values.push(ele.valueMax)
  })

  let maxValue = Math.max(...values)
  console.log(maxValue)

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data} width='100%' height='100%'>
        <defs>
          <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#3D188C' stopOpacity='0.8'></stop>
            <stop offset='75%' stopColor='#3D188C' stopOpacity='0.05'></stop>
          </linearGradient>
        </defs>

        <Line type="monotone" dataKey="valueMax" stroke="green" dot={false} />
        <Line type="monotone" dataKey="value" stroke="#3D188C" dot={false} />
        <Line type="monotone" dataKey="valueMin" stroke="red" dot={false} />

        <XAxis dataKey='date'
          axisLine={false}
          tickLine={false}
        />

        <Tooltip 
          content={<CustomTooltip />}
        />

        <ReferenceLine y={maxValue} label="" stroke="yellow" />

        <CartesianGrid opacity={0.05} />
      </LineChart>
    </ResponsiveContainer>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className='tooltip'>
        <h2>{label}</h2>
        <p>{payload[0].payload.valueMin.toFixed(10)}</p>
        <p>{payload[0].payload.value.toFixed(10)}</p>
        <p>{payload[0].payload.valueMax.toFixed(10)}</p>
      </div>
    )
  }

  return null
}