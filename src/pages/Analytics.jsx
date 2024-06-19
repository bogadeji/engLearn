import React from 'react'
import styles from './pages.module.css';
import Status from '../common/Status';
import Calendar from '../components/Calendar/Calendar';
import { MoreBtn } from '../common/clickBtns';

function Analytics() {

  const skills = [
    {
      name: "Reading",
      icon: "./book.svg",
      status: 100
    },
    {
      name: "Writing",
      icon: "./write.svg",
      status: 85
    },
    {
      name: "Speaking",
      icon: "./volume.svg",
      status: 100
    },
    {
      name: "Listening",
      icon: "./listen.svg",
      status: 70
    }
  ]
  return (
    <>
    <div className={styles.calendar}>
      <Calendar />
    </div>
    <div className={styles.skills}>
      <div className='heading-div'>
        <h3 className={styles.heading}>Skills</h3>
        <MoreBtn />
      </div>
      <div className={styles['skills-list']}>
        {skills.map((skill, index) => (
          <div key={index} className={styles['skill-card']}>
            <div className={styles['skill-icon']}>
              <img src={skill.icon} alt="" />
            </div>
            <h4 className={styles.skill}>{skill.name}</h4>
            <p className={styles.status}>{skill.status}%</p>
            <Status percentCompleted={skill.status} />
          </div>  
        ))}
      </div>
    </div>
    </>
  )
}

export default Analytics;