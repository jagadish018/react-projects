import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0); // Current slide index

  const fetchTopRest = async () => {
    const response = await fetch("/data/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRest();
  }, []);



  const rightSlide = () => {
    // Check if we can slide right
    if (slide < data.length - 4) {
      setSlide((prevSlide) => prevSlide + 1);
    }
  };

  const leftSlide = () => {
    // Check if we can slide left
    if (slide > 0) {
      setSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-[28px] font-bold">
          Top restaurant chains in Tumkur
        </div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={leftSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={rightSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        {/* Container for sliding */}
        <div
          className="flex gap-7 transition-transform duration-500"
          style={{
            transform: `translateX(-${slide * (100 / 4)}%)`,
          }}
        >
          {data.map((cards, index) => (
            <Card
              {...cards}
              key={index}
              className="w-[150px] grow-1 shrink-0"
            />
          ))}
        </div>
      </div>
      <hr className="my-1 border-[1px]"></hr>
    </div>
  );
}

export default TopRest;
