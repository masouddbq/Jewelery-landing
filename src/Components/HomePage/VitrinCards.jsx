import React from 'react'

const VitrinCards = () => {

    const productsDetails = [
        {id :1 ,img : '/1.png', name : 'بنگل' , description : "یکی از بهترین محصولات ما" , price : "380.000"},
        {id :2 ,img : '/2.png', name : 'گردنبند ماری نقره ای' , description : "پر استفاده و کاربردی" , price : "380.000"},
        {id :3 ,img : '/3.png', name : 'گردنبند ماری طلایی' , description : "پر استفاده و کاربردی" , price : "380.000"},
        {id :4 ,img : '/4.png', name : 'دستبند استیل' , description : "زیبایی مردانه" , price : "380.000"},
        {id :5 ,img : '/4.png', name : 'انگشتر ساده' , description : "بی نظیر و ساده" , price : "380.000"},
        {id :6 ,img : '/3.png', name : 'حلقه نگین دار' , description : "بهترین برای هدیه" , price : "380.000"},
        {id :7 ,img : '/2.png', name : 'انگشتر پلاتین' , description : "خاص و شیک" , price : "380.000"},
        {id :8 ,img : '/1.png', name : 'گردنبند نقره' , description : "برای طرفداران نقره" , price : "380.000"},
    ]

  return (
    <div className='flex justify-evenly items-center flex-wrap'>
        {productsDetails.map(card => (
            
            (<div key={card.id} className='flex flex-col bg-gradient-to-tl from-main-green to-gray-800  justify-evenly items-center flex-wrap gap-4 p-2 shadow-md shadow-gray-500 min-w-48 border-4 border-main-green border-x-0 rounded-3xl m-10'>
                <img src={card.img} className='w-full object-contain rounded-3xl h-32 bg-gray-100' alt="" />
                <h2 className='font-bold text-white text-lg mb-2'>{card.name}</h2>
                <p className='text-gray-100 text-sm mb-2'>{card.description}</p>
                <h4 className='text-white font-extrabold'>{card.price}</h4>
                <button className='px-8 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all ease-in duration-75 bg-base-green text-gray-800'>خرید</button>
            </div>)
        ))}
    </div>
  )
}

export default VitrinCards