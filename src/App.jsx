import './App.css'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'
import LearningGoal from './components/LearningGoal/LearningGoal'

function App() {

  return (
    <>
      <NavBar />
      <main className='main'>
        <Welcome />
        <LearningGoal />
      </main>
    </>
  )
}

export default App
