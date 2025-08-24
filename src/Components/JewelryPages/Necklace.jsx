import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCart } from '../../Context/CartContext';

const Necklace = () => {
  const { addToCart } = useCart();
  
  const necklaceCategories = [
    {
      id: 1,
      img: '/1.png',
      title: 'گردنبند طلا',
      description: 'طراحی لوکس و شیک',
      price: '380$',
      category: 'طلا'
    },
    {
      id: 2,
      img: '/2.png',
      title: 'گردنبند نقره',
      description: 'زیبایی بی‌نظیر',
      price: '220$',
      category: 'نقره'
    },
    {
      id: 3,
      img: '/3.png',
      title: 'گردنبند الماس',
      description: 'درخشش خیره‌کننده',
      price: '680$',
      category: 'الماس'
    },
    {
      id: 4,
      img: '/4.png',
      title: 'گردنبند مروارید',
      description: 'ظرافت و زیبایی',
      price: '450$',
      category: 'مروارید'
    },
    {
      id: 5,
      img: '/1.png',
      title: 'گردنبند یاقوت',
      description: 'رنگ و درخشش خاص',
      price: '520$',
      category: 'یاقوت'
    },
    {
      id: 6,
      img: '/2.png',
      title: 'گردنبند زمرد',
      description: 'سبزی طبیعت',
      price: '480$',
      category: 'زمرد'
    }
  ];

  const filterCategories = ['همه', 'طلا', 'نقره', 'الماس', 'مروارید', 'یاقوت', 'زمرد'];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-tl from-main-green to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-aos="fade-up">
            گردنبندهای زیبا
          </h1>
          <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="200">
            مجموعه‌ای از زیباترین گردنبندها برای هر مناسبت
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterCategories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-main-green to-base-green text-white font-medium hover:from-base-green hover:to-main-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {necklaceCategories.map((necklace, index) => (
            <div
              key={necklace.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={necklace.img}
                  alt={necklace.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-main-green text-white px-2 py-1 rounded-full text-xs font-medium">
                  {necklace.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{necklace.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{necklace.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-main-green">{necklace.price}</span>
                  <button 
                    onClick={() => handleAddToCart(necklace)}
                    className="bg-gradient-to-r from-main-green to-base-green text-white px-4 py-2 rounded-full hover:from-base-green hover:to-main-green transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 mt-16 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-gray-800" data-aos="fade-up">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">کیفیت برتر</h3>
              <p className="text-gray-600">بهترین متریال و طراحی</p>
            </div>
            <div className="text-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">ارسال رایگان</h3>
              <p className="text-gray-600">در سراسر کشور</p>
            </div>
            <div className="text-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">ضمانت اصالت</h3>
              <p className="text-gray-600">تضمین کیفیت و اصالت</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Necklace;
