
import React from 'react'
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import Update from '../Components/Update/Update';
import './RightSide.css';

const RightSide = () => {
  return (
    <div className='right-side'>
      <div>
        <h3> Updates</h3>
        <Update/>
      </div>
      <div>
        <h3> Customer Review</h3>
        <CustomerReview/>
      </div>
    </div>
  )
}

export default RightSide
