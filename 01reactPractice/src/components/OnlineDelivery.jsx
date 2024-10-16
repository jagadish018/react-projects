import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const fetchTopRest = async () => {
    const response = await fetch("/data/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };
  useEffect(() => {
    fetchTopRest();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[28px] font-bold">
          Restuarant with online food delivery in tumkur
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((val, index) => {
          return <Card {...val} />;
        })}
      </div>
    </div>
  );
}
