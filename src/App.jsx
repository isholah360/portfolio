import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Resume, Homepage, Portfolio, About, Blog, Contact} from './page';
import Abouts from './abouts';



function App() {
  return (
    <div className="App">
        <>
             <Homepage/>
         <Routes>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/abouts' element={<Abouts/>}/>
         </Routes>
         
        </>
    </div>
  )
}

export default App
