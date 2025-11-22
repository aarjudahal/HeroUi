import React from 'react'
import HeroSection from './components/Herosection'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Router> 
      <Routes>
        
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </Router>  
    </div>
  )
}

export default App
