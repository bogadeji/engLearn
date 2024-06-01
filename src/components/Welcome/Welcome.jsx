import './welcome.css'
import React from 'react';
import LearningPoints from '../LearningPoints/LearningPoints';

function Welcome() {

  return (
    <>
      <div className='user-welcome'>
        <div>
          <h1 className='user'>Hello Rachel,</h1>
          <p className='ready'>Ready to <span className='orange'>play English?</span></p>
        </div>
        <LearningPoints points='65' border textcolor='black' />
      </div>
    </>
  )
}

export default Welcome;