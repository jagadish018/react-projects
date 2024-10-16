import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Category() {
    const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("/data/category.json");

    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

    
    const rightSlide = () => {
        if (categories.length - 8 == slide) return false;
            setSlide((slide) => slide + 3);
      };

    const leftSlide = () => {
        if (slide == 0) return false;
        setSlide((slide) => (slide - 3) );
      };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-[28px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft onClick={leftSlide} />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight onClick={rightSlide} />
          </div>
        </div>
      </div>
      <div className="flex  overflow-hidden">
        {categories.map((cat, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
            key={index}
            className=" w-[150px] grow-1 shrink-0 duration-500"
          >
            <img src={"images/" + cat.image} alt="" />
          </div>
        ))}
      </div>
     <hr className="my-6 border-[1px]"></hr>
    </div>
  );
}

export default Category;
