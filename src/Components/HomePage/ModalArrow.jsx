import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import image from "/1.png"
import image2 from "/2.png"
import image3 from "/3.png"
import image4 from "/4.png"

const ModalArrow = () => {

    const ArrowCards = [
      {id : 1 , image: image , title :'جدید'},
      {id : 2 , image: image2 , title :'جدید'},
      {id : 3 , image: image3 , title :'جدید'},
      {id : 4 , image: image4 , title :'جدید'}
    ]

    const [showProducts, setShowProducts] = useState(false);
    
    const handleShowProducts = () => {
        setShowProducts(true);
      };

  return (
    <div className="hidden md:flex container mt-20 w-full justify-between items-center">
      <div className={`flex justify-evenly items-center transition-all duration-1000 h-20 w-full mx-10 ${showProducts ? "scale-100" : "scale-50 opacity-0"}`}>
            <div className="flex md:w-full sm:w-48 rounde justify-evenly items-center">
              {ArrowCards.map((card) => (
              <h3 key={card.id} className="p-5 hover:scale-150 transition-all duration-500 rounded-xl hover:cursor-pointer mx-2">
                <img className="md:w-24 sm:w-48 " src={card.image} alt="" />
                <p>{card.title}</p>
              </h3>
              ))}
            </div>
      </div>
      <div className="flex bg-transparent w-40 p-5" onClick={handleShowProducts}>
        <KeyboardDoubleArrowLeftIcon className="hover:cursor-pointer animate-bounce"/>
        <h1 className="rotate-90 animate-pulse hover:cursor-pointer text-main-green font-bold text-xl">
          کلیک کن
        </h1>
      </div>
    </div>
  );
};

export default ModalArrow;
