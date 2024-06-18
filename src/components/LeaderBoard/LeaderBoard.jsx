import React from 'react';
import styles from './leaderboard.module.css';
import LearningPoints from '../LearningPoints/LearningPoints';

function Leaderboard() {

  const users = [
    {
      name: 'Yasmine Lee',
      country: 'Taiwan',
      points: 1250,
      imgUrl: './user1.svg'
    }, 
    {
      name: 'Guy Hawkins',
      country: 'Spain',
      points: 1130,
      imgUrl: './user2.svg'
    },
    {
      name: 'Solape Kosoko',
      country: 'Nigeria',
      points: 1125,
      imgUrl: './user3.svg'
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
                <div className={styles['user-img']}>
                  <div className={styles['img-div']}>
                    <img src={user.imgUrl} alt="" />
                  </div>
                  <div>
                    <p className={styles.username}>{user.name}</p>
                    <p className={styles.country}>{user.country}</p>
                  </div>
                </div>
                <div className={styles["points"]}>
                  <p className={styles["points-growth"]}>&#x1F851;</p>
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