import './App.css'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'
import LearningGoal from './components/LearningGoal/LearningGoal'
import Lessons from './components/Lessons/Lessons'
import Leaderboard from './components/LeaderBoard/LeaderBoard'

function App() {

  return (
    <>
      <NavBar />
      <main className='main'>
        <Welcome />
        <LearningGoal />
        <Lessons heading="Your lesson" />
        <Leaderboard />
      </main>
    </>
  )
}

export default App
