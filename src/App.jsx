import './App.css'
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (
    <>
      <NavBar />
      <main className='main'>
        <Welcome />
      </main>
    </>
  )
}

export default App
