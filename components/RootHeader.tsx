"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiAlignRight } from "react-icons/tfi";
import { TiFlash } from "react-icons/ti";

const RootHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[11px] py-2 bg-green-400  w-full text-center flex items-center justify-center gap-1">
        {" "}
        <TiFlash size={18} className="text-yellow-500" />
        Prep Smart. Score Big. Rule CBSE.
        <TiFlash size={18} className="text-yellow-500" />
      </div>

      <nav className="flex items-center justify-between w-full px-2 py-2  border-b-1 border-gray-200">
        <div className="font-[400] text-xl">
          Edu<span className="text-green-500">Nation</span>
        </div>
        <div
          className={` ${
            open ? "translate-x-0" : "-translate-x-[100%]"
          } md:translate-x-0 transition-all duration-300 ease-linear absolute bg-white left-0 top-0 z-[999] w-full min-h-screen md:min-h-0 md:h-auto md:w-auto md:static `}
        >
          <ul className="flex items-start md:items-center p-4 md:p-0  flex-col md:flex-row md:gap-10 z-[10000]  text-4xl md:text-lg relative w-full ">
            <li
              className="absolute right-4 top-4 md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IoMdClose />
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <div className="md:flex items-center gap-4 hidden ">
          <div className="border border-green-700 px-4 py-2 rounded-4xl cursor-pointer text-green-700 ">
            Login
          </div>
        </div>
        <div
          className="text-2xl block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <TfiAlignRight />
        </div>
      </nav>
    </div>
  );
};

export default RootHeader;
