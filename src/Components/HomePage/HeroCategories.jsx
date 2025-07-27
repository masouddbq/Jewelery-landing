import React from 'react'
import CategoryCard from './CategoryCard'

const HeroCategories = (props) => {

    const cardInfos = [
        {id : 1 , img : '/1.png' ,title : 'شاینی', description : 'درخشش بی نظیر', price : '100$'},
        {id : 2 , img : '/2.png' ,title : 'ستاره', description : 'چشمک بزن به همه', price : '150$'},
        {id : 3 , img : '/1.png' ,title : 'ماه', description : 'نور خیره کننده داری', price : '300$'},
        
    ]

  return (
    <div className='flex flex-col justify-evenly md:flex-row items-center mt-4'>
        {cardInfos.map(card => {
            return <CategoryCard key={card.id} {...card} />
        })}
    </div>
  )
}

export default HeroCategories