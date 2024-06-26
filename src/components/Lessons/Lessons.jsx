import React from 'react';
import styles from './lessons.module.css';
import Lesson from './Lesson';
import { ClickRight } from '../../common/clickBtns';

function Lessons({heading}) {

  const lessons = [
    {
      imgUrl: "./flag.webp",
      duration: 30,
      title: "Speaking 101",
      schedule: "daily",
      completed: 60,
    },
    {
      imgUrl: "./flag.webp",
      duration: 90,
      title: "New words",
      schedule: "daily",
      completed: 50,
    },
    {
      imgUrl: "./flag.webp",
      duration: 30,
      title: "English Grammar",
      schedule: "daily",
      completed: 40,
    }
  ]
  return (
    <>
      <div className={styles.lessons}>
        <div className='heading-div'>
          <h3 className={styles.heading}>{heading}</h3>
          <ClickRight />
        </div>
        <div className={styles['lessons-list']}>
          {lessons.map((lesson, index) => (
            <Lesson lesson={lesson} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Lessons;