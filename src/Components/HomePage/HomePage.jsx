import React from 'react'
import HeroCategories from './HeroCategories'
import HeroTypewrite from './HeroTypewrite'
import ModalArrow from './ModalArrow'
import ImageSlider from '../HomePage/ImageSlider'

const HomePage = () => {
  return (
    <div className="min-h-dvh">
        <HeroTypewrite />
        <HeroCategories />
        <ModalArrow />
        <ImageSlider />
    </div>
  )
}

export default HomePage