import React from 'react'
import HeroSection from './components/HeroSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

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
