import './learningpoints.css'
import React from 'react';
import FireIcon from '../../assets/icons/FireIcon';

function LearningPoints({points = 0, textcolor = 'black', border = ''}) {

  return (
    <>
      <div className='learningpoint'>
        <div className={border ? 'circle' : ''}>
          <FireIcon />
        </div>
        <p className={textcolor}>{points}</p>
      </div>
    </>
  )
}

export default LearningPoints;