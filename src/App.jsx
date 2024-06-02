import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Analytics from './pages/Analytics'

function App() {

  return (
    <>
      <NavBar />
      <main className='main'>
        <Analytics />
      </main>
    </>
  )
}

export default App
