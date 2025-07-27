import React from "react";

const CategoryCard = ({img, title, description}) => {
  return (
    <div  data-aos="zoom-out" data-aos-duration="3000" className="sm:w-72 md:w-96 flex items-center justify-evenly transition-all duration-500 hover:shadow-green-950 hover:scale-95 shadow-2xl shadow-main-green p-5 rounded-xl text-white h-32 m-4 bg-gradient-to-tl from-main-green to-gray-800">
      <div className="origin-top-left hover:rotate-12 transition-all duration-500 ease-in-out">
        <img src={img} className="lg:w-48 w-40" alt="" />
      </div>
      <div className="flex-col justify-evenly items-center">
        <h4 className="m-3 text-gray-50 font-medium">{title}</h4>
        <p className="m-3 text-gray-50 font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
