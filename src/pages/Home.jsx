import React from 'react';
import Welcome from '../components/Welcome/Welcome'
import LearningGoal from '../components/LearningGoal/LearningGoal'
import Lessons from '../components/Lessons/Lessons'
import Leaderboard from '../components/LeaderBoard/LeaderBoard'

function Home() {
  return (
    <>
      <Welcome />
      <LearningGoal />
      <Lessons heading="Your lesson" />
      <Leaderboard />
    </>
  )
}

export default Home;