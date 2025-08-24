import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Men from './Components/GenderSections/Men'
import Women from './Components/GenderSections/Women'
import Bracelet from './Components/JewelryPages/Bracelet'
import Necklace from './Components/JewelryPages/Necklace'
import ImageSlider from './Components/HomePage/ImageSlider'
import { CartProvider } from './Context/CartContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => { AOS.init(); }, []);

  return (
    <CartProvider>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/men' element={<Men />} />
              <Route path='/women' element={<Women />} />
              <Route path='/bangle' element={<Bracelet />} />
              <Route path='/chain' element={<Necklace />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
