import { useState } from 'react'

import './App.css'
import LayoutPage from './global/layouts'
import HomePage from './pages/homePage'

function App() {
 
  return (
    <>
    <div>
        <LayoutPage>
          <HomePage/>

        </LayoutPage>
    </div>
     
    </>
  )
}

export default App
