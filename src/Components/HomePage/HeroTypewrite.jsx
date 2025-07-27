import React, { useEffect, useState } from 'react'

const HeroTypewrite = () => {

   const effectText = "اینجا هر چیزی با هر طرح و استایلی پیدا میکنی"
   const chars = effectText.split("")
   const [visibleCount,setVisibleCount] = useState(0)

   useEffect(() => {
    if (visibleCount < chars.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1)
      }, 200);
      return () => clearTimeout(timer);
    }
   },[visibleCount , chars.length])

  return (
    <div className='mt-20'>
        <h1 className='lg:text-4xl text-lg font-semibold'>
          {chars.slice(0,visibleCount).map((char,idx) => (
            <span key={idx}>{char}</span>
          ))}
        </h1>
    </div>
  )
}

export default HeroTypewrite