import React, { useState } from 'react'
import './SideBar.css';
import Logo from '../../Images/logo.png'
import { SideBarData } from '../../Data/Data';
import {UilSignOutAlt, UilBars} from '@iconscout/react-unicons';
import {motion} from 'framer-motion';

const SideBar = () => {
const [selected, setSelected] = useState(0)
const [expanded, setExpanded] = useState(true)

const sideBarVariants={
  true:{
    left:'0'
  },
  false:{
    left: '-60%'
  }
}
  return (
    <>
    <div style={expanded? {left: '60%'}: {left: '5%'}} className='bars'
    onClick={()=>{setExpanded(!expanded)}}
    >
        <UilBars/>
      </div>
    <motion.div className='side-bar'
    
    variants={sideBarVariants}
    animate={window.innerWidth <=768 ?`${expanded}` : ''}
    >
      
      
      <div className='logo'>
        <img src={Logo} alt='brand' />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className='menu'>
    
    
    {SideBarData.map((item, id)=>{
      return<div key={id} className={selected===id? 'menu-item active' : 'menu-item'} onClick={()=>setSelected(id)}>
        <item.icon/>
        <span>{item.heading}</span>
      </div>
    })}
    <div className='menu-item'>
    <UilSignOutAlt/>
    </div>
      </div>
    </motion.div>
    </>
  )
}

export default SideBar
