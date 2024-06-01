import React from 'react';
import styles from './leaderboard.module.css';
import LearningPoints from '../LearningPoints/LearningPoints';

function Leaderboard() {

  const users = [
    {
      name: 'Yasmine Lee',
      country: 'Taiwan',
      points: 1250,
      imgUrl: ''
    }, 
    {
      name: 'Guy Hawkins',
      country: 'Spain',
      points: 1130,
      imgUrl: ''
    },
    {
      name: 'Solape Kosoko',
      country: 'Nigeria',
      points: 1125,
      imgUrl: ''
    }
  ]
  return (
    <>
      <div>
        <h3 className={styles.heading}>Leaderboard</h3>

        <div className={styles.users}>
          {
            users.map((user, index) => (
              <div key={index} className={styles.user}>
                <div className={styles.userImg}>
                  <div className={styles.imgDiv}>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p className={styles.username}>{user.name}</p>
                    <p className={styles.country}>{user.country}</p>
                  </div>
                </div>
                <div>
                  <LearningPoints points={user.points} textcolor="orange" />
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Leaderboard;