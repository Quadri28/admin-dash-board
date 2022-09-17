
import React from 'react'
import { updateData } from '../../Data/Data';
import './Update.css';

const Update = () => {
  return (
    <div className='update'>
      {updateData.map((updat)=>{
        return(
        <div key={updat.id} className='updat'>
            <img src={updat.img} alt='custome'/>
            <div className='noti'>
            <div style={{marginBottom:'.5rem'}}>
                <span>{updat.name}</span>
                <span> {updat.noti}</span>
            </div>
            {updat.time}
            </div>
            
               
            
        </div>
      )})}
    </div>
  )
}

export default Update
