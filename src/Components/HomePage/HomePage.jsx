import React from 'react'
import HeroCategories from './HeroCategories'
import HeroTypewrite from './HeroTypewrite'
import ModalArrow from './ModalArrow'
import ImageSlider from '../HomePage/ImageSlider'
import VitrinCards from '../HomePage/VitrinCards'
import Footer from '../Footer/Footer'
import useUpdateLogger from './useUpdateLogger'

const HomePage = () => {
  const [value, setValue] = useUpdateLogger('')

  return (
    <div className="min-h-dvh">
        <HeroTypewrite />
        <HeroCategories />
        <ModalArrow />
        <ImageSlider />
        <VitrinCards />
        <div>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
        </div>
        <Footer />
    </div>
  )
}

export default HomePage