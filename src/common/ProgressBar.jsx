import React from 'react';
import styles from './style.module.css'

function ProgressBar({progress = 0}) {
  return (
    <>
      <div className={styles.progressBarDiv}>
        <div className={styles.progressbar}>
          <div style={{width: progress + '%'}} className={styles.progressIndicator}></div>
        </div>
        <span className={styles.score}>{progress}%</span>
      </div>
    </>
  )
}

export default ProgressBar;