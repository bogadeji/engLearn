import React from 'react';
import styles from './calendar.module.css';
import { ClickLeft, ClickRight } from '../../common/clickBtns';

function Calendar() {
  return(
    <>
      <div className='heading-div'>
        <ClickLeft />
        <h3 className={styles.heading}>September</h3>
        <ClickRight />
      </div>
      <div className={styles.week}>
        <div className={styles.date}>
          <p className={styles.day}>2</p>
          <p className={styles['day-name']}>Mon</p>
        </div>
        <div className={styles.date}>&#10003;
          <p className={[styles.day, styles.selected].join(' ')}>3</p>
          <p className={styles['day-name']}>Tue</p>
        </div>
        <div className={styles.date}>
          <p className={[styles.day, styles.selected].join(' ')}>4</p>
          <p className={styles['day-name']}>Wed</p>
        </div>
        <div className={[styles.date, styles.today].join(' ')}>
          <p className={[styles.day, styles.today].join(' ')}>5</p>
          <p className={styles['day-name']}>Thu</p>
        </div>
        <div className={styles.date}>
          <p className={styles.day}>6</p>
          <p className={styles['day-name']}>Fri</p>
        </div>
        <div className={styles.date}>
          <p className={styles.day}>7</p>
          <p className={styles['day-name']}>Sat</p>
        </div>
        <div className={styles.date}>
          <p className={styles.day}>8</p>
         <p className={styles['day-name']}>Sun</p>
        </div>
      </div>
    </>
  )
}

export default Calendar;