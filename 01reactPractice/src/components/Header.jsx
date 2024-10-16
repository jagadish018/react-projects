import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offer",
      sup: "New",
    },

    {
      icon: <IoHelpCircleSharp />,
      name: "Help",
    },
    {
      icon: <MdAccountCircle />,
      name: "Sign in",
    },
    {
      icon: <IoCartSharp />,
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-[500ms] "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[500ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className=" w-[100px]">
            <img src="images\logo.png" className="w-full " alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black">
              Jagadish C K
            </span>{" "}
            Tumakur, Karnataka, india
            <RxCaretDown
              fontSize={25}
              className="font-bold inline text-[0.9 rem]  text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className=" cursor-pointer flex list-none gap-16 ml-auto font-semibold text-[18px] mr-10">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap hover:text-[#fc8019]"
              >
                {link.icon}
                {link.name}
                <sup className="text-[#fc8019]">{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
