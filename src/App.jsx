import { useState } from 'react'
import Home from "./pages/home/Home.jsx"
import Technology from "./pages/technology/Technology.jsx"
import Crew from "./pages/crew/Crew.jsx"
import Destination from "./pages/destination/Destination.jsx"
import { Routes,Route } from 'react-router-dom'
import './App.css'


function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
          <Route path='/destination' element={<Destination />}/>
          <Route path='/destination/:name' element={<Destination />}/>
          <Route path='/crew/:name' element={<Crew />}/>
          <Route path='/technology/:name' element={<Technology />}/>
        </Routes>
      </>
    )
}

export default App
