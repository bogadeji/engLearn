import React from 'react';
import styles from './style.module.css';

function Status({percentCompleted = 0}) {

  const status = percentCompleted === 100 ? 'completed' : 'in-progress'
  return (
    <>
      <div className={styles.status}>
        {status === 'completed' && 
          <div className={styles.completed}>
            <p>Completed</p>
          </div>
        }
        {status !== 'completed' && 
          <div className={styles.inprogress}>
            <p>Good work</p>
          </div>
        }
      </div>
    </>
  )
}

export default Status;