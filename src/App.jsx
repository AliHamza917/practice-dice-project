import './App.css'
import { useState } from 'react'
import LayoutPage from './global/layouts'
import HomePage from './pages/homePage'
import GamePage from './pages/gamePage'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <LayoutPage>
      {isPlaying ? <GamePage /> : <HomePage onPlay={() => setIsPlaying(true)} />}
    </LayoutPage>
  )
}

export default App
