import React from 'react'
import './App.css'


import {Resume, Homepage, Portfolio, About, Blog, Contact} from './page'
function App() {
  return (
    <div className="App">
        <>
         hello
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
