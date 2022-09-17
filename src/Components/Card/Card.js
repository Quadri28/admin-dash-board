import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from 'react-apexcharts'
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup >
      {expanded ? (
        <ExpandedCard
          param={props}
          setExpanded={() => {
            setExpanded(false);
          }}
        />
      ) : (
        <CompactCard
          param={props}
          setExpanded={() => {
            setExpanded(true);
          }}
        />
      )}
    </LayoutGroup>
  );
};

const CompactCard = ({ param, setExpanded }) => {
  const Png = param.png;

  return (
    <motion.div
      className="compact-card"
      style={{
        background: param.color.backgroundColor,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    
    >
      <div className="radial-bar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span> ${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ param, setExpanded }) => {
  const data={
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
  return (
    <motion.div
      className="expanded-card"
      style={{
        background: param.color.backgroundColor,
        boxShadow: param.color.boxShadow,
      }}
      
    >
        
      <div style={{alignSelf: 'flex-end', cursor: 'pointer', color:'#fff'}}>
        <UilTimes onClick={setExpanded}
        />
      </div>
      <span>{param.title}</span>
      <div className="expanded-card-chart">
        <Chart series={param.series} type='area'options={data.options}/>
        </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};
export default Card;
