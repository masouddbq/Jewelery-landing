import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Men from './Components/GenderSections/Men'
import Footer from './Components/Footer/Footer'
import ImageSlider from './Components/HomePage/ImageSlider'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => { AOS.init(); }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/men' element={<Men />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
