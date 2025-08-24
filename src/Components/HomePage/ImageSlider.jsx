import React, { useState, useEffect } from "react";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const ImageSlider = () => {
  const images = [
    { id: 1, image: image1, title: "جدید" },
    { id: 2, image: image2, title: "جدید" },
    { id: 3, image: image3, title: "جدید" },
    { id: 4, image: image4, title: "جدید" },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const handleNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  
  return ( 
  <div className="flex mb-2 justify-evenly items-center px-20 md:px-0 mt-10 bg-gradient-to-tl from-main-green to-gray-900">
    <div className="relative flex-col justify-center items-center w-72 h-72">
        <div className="absolute top-36 left-0 transform translate-y-1/2">
            <button onClick={handlePrev} className="text-2xl">
                <ArrowLeftIcon />
            </button> 
        </div>
        <div className="absolute top-36 right-0 transform translate-y-1/2">
            <button onClick={handleNext} className="text-2xl">
                <ArrowRightIcon />
            </button> 
        </div>
        <div className="w-full h-full">
            <img src={images[currentImage].image} alt={images[currentImage].title} className="w-72 h-72 md:w-full md:h-60  object-contain"
        />
        </div>
        <div className="flex justify-center transform -translate-y-6 items-center">
        {images.map((image,index) => (
                <div key={image.id} className={`w-3 h-3 rounded-full mx-2 ${index === currentImage ? "bg-base-green" : "bg-gray-300"}`}
                onClick={() => setCurrentImage(index)}
                />
            ))}
        </div>
    </div>
    <div className="flex-col text-center h-20 items-center justify-center">
          <h1 className="md:text-3xl text-2xl font-bold text-white">اسلایدر محصولات پرفروش</h1>
          <p className="text-sm text-center text-white mt-4 w-96 md:2-96 h-60 hidden md:block">گالری ما تمامی محصولات استیل 316 و ضد حساسیت رو با بهترین متریال  و طراحی های منحصر به فرد طراحی کرده و بهترین کیفیت رو برای شما عزیزان عرضه میکنیم تا با به روزترین محصولات در ارتباط باشید</p>
    </div>
  </div>
);
};

export default ImageSlider;
