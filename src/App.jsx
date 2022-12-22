import React from 'react'
import './App.css'


import {Resume, Homepage, Portfolio, About, Blog, Contact} from './page'
function App() {
  return (
    <div className="App">
        <>
          <Homepage/>
          <About/>
          <Resume/>
          <Blog/>
          <Contact/>
          <Portfolio/>
        </>
    </div>
  )
}

export default App
