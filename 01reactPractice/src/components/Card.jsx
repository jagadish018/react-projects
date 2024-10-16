import React from 'react'
import { FcRating } from "react-icons/fc";

export default function Card(props) {
  return (
    <div className="w-[273px] shrink-0 grow ">
      <div className="h-[182px] group rounded-[15px] overflow-hidden relative">
        <img
          className="group-hover:scale-110 duration-150 object-cover w-full h-full"
          src={"images/" + props.image}
          alt=""
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div className="mt-3 text-xl font-bold">{props.title}</div>
      <div className=" text-l  flex items-center ">
        <FcRating />
        {props.rating}
        <span className="ml-2">
          {props.minTime}-{props.maxTime}mins
        </span>
      </div>
      <div>
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
}
