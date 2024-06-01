import './learninggoal.css'
import React from 'react';
import LearningPoints from '../LearningPoints/LearningPoints';
import CircleRating from '../../common/CircleRating';

function LearningGoal() {
  return (
    <>
    <div className='learninggoal'>
    <p className='today'>Today's goal</p>
      <div className='rating'>
        <CircleRating progress='75' />
        <div>
          <h2 className='rating-heading'>Excellent!</h2>
          <p className='rating-text'>You're almost there</p>
          <p className='rating-text'>Finish the goal to achieve</p>
          <div>
            <LearningPoints points="10" textcolor='orange'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LearningGoal;