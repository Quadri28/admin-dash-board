import React from 'react'
import './CustomerReview.css';
import Chart from 'react-apexcharts'


const data={
    series:[
        {
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ],
    options:{
        chart:{
          type:"area",
          height: 'auto'
        },
        dropShadow:{
          enabled: false,
          top:0,
          left:0,
          enabledOnSeries:undefined,
          blur:3,
          color:"#0000",
          opacity:  0.35,
        },
        fill:{
          colors: ['#fff'],
          type: 'gradient',
        },
        dataLabels:{
          enabled: false,
        },
        stroke:{
          curve: 'smooth',
          colors:['white']
        },
        tooltip:{
          x:{
            format: 'dd/MM/yy HH:mn' 
          }
        }, 
        grid:{
          show: true,
        },
        xaxis:{
          type: 'datetime',
          categories:[
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z'
          ],
        } 
      }
}
const CustomerReview = () => {
  return (
    <div className='customer-review'>
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
