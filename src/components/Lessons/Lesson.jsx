import React from 'react';
import styles from './lessons.module.css';
import ProgressBar from '../../common/ProgressBar';

function Lesson({lesson}) {

  const {imgUrl = "", duration = "", title = "", schedule = "", completed = 0} = lesson
  return (
    <>
      <div>
        <div className={styles.lessonIcon}>
          <div className={styles.lessonImg}>
            <img src={imgUrl} alt="lesson image" />
          </div>
          <ProgressBar progress={completed} />
        </div>
        <div className={styles.lessonDetails}>
          <p className={styles.lessonTitle}>{title}</p>
          <p className={styles.lessonDays}>{duration} days . {schedule}</p>
        </div>
      </div>
    </>
  )
}

export default Lesson;