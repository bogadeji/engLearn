import React from 'react';
import styles from './style.module.css'

function CircleRating({progress = 0}) {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.progress}>
          <div className={styles.inner}>
            <span className={styles.progressscore}>{progress}%</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default CircleRating;