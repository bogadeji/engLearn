import React from 'react';
import styles from './lessons.module.css';
import Lesson from './Lesson';

function Lessons({heading}) {

  const lessons = [
    {
      imgUrl: "",
      duration: 30,
      title: "Speaking 101",
      schedule: "daily",
      completed: 60,
    },
    {
      imgUrl: "",
      duration: 90,
      title: "New words",
      schedule: "daily",
      completed: 50,
    },
    {
      imgUrl: "",
      duration: 30,
      title: "English Grammar",
      schedule: "daily",
      completed: 40,
    }
  ]
  return (
    <>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.lessons}>
        {lessons.map((lesson, index) => (
          <Lesson lesson={lesson} key={index} />
        ))}
      </div>
    </>
  )
}

export default Lessons;