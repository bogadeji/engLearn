import React from 'react'
import styles from './pages.module.css';
import Status from '../common/Status';

function Analytics() {

  const skills = [
    {
      name: "Reading",
      icon: "",
      status: 100
    },
    {
      name: "Writing",
      icon: "",
      status: 85
    },
    {
      name: "Speaking",
      icon: "",
      status: 100
    },
    {
      name: "Listening",
      icon: "",
      status: 70
    }
  ]
  return (
    <>
    <div className={styles.skills}>
      <h3 className={styles.heading}>Skills</h3>

      <div className={styles.skillslist}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillcard}>
            <div className={styles.skillicon}>
              <img src="" alt="" />
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