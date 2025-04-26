"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiAlignRight } from "react-icons/tfi";
import { TiFlash } from "react-icons/ti";
import { Separator } from "./ui/separator";
import { RiHome9Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { GoCpu } from "react-icons/go";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

const RootHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[11px] py-2 bg-green-400  w-full text-center flex items-center justify-center gap-1">
        {" "}
        <TiFlash size={18} className="text-yellow-500" />
        Prep Smart. Score Big. Rule CBSE.
        <TiFlash size={18} className="text-yellow-500" />
      </div>

      <nav className="flex items-center justify-between w-full px-2 py-2  border-b-1 border-gray-300">
        <div className="font-[400] text-xl">
          Edu<span className="text-green-500">Nation</span>
        </div>
        <div
          className={` ${
            open ? "translate-x-0" : "-translate-x-[100%]"
          } md:translate-x-0 transition-all duration-300 ease-linear absolute bg-white left-0 top-0 z-[999] w-full min-h-screen md:min-h-0 md:h-auto md:w-auto md:static `}
        >
          <ul className="flex items-start md:items-center p-4 md:p-0  flex-col md:flex-row gap-2 md:gap-10 z-[10000]  text-[20px] md:text-lg relative w-full ">
            <div className="md:hidden">
              <div className="font-[400] text-xl">
                Edu<span className="text-green-500">Nation</span>
              </div>
            </div>
            <li
              className="absolute right-4 top-4 md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IoMdClose />
            </li>
            <Separator className="w-full border-b-1 border-gray-200 py-1 md:hidden" />

            <li
              className="mt-1 md:mt-0 flex items-center gap-2 hover:text-green-700 cursor-pointer"
              onClick={() => {
                setOpen(false);
                router.push("/");
              }}
            >
              <RiHome9Line />
              Home
            </li>
            <li
              className="flex items-center gap-2 hover:text-green-700 cursor-pointer"
              onClick={() => {
                setOpen(false);
                router.push("/features");
              }}
            >
              <BsStars />
              Features
            </li>
            <li
              className="flex items-center gap-2 hover:text-green-700 cursor-pointer"
              onClick={() => {
                setOpen(false);
                router.push("/about");
              }}
            >
              <GoCpu />
              About
            </li>
            <li
              className="flex items-center gap-2 hover:text-green-700 cursor-pointer"
              onClick={() => {
                setOpen(false);
                router.push("/contact");
              }}
            >
              <IoPhonePortraitOutline />
              Contact
            </li>
            <Separator className="w-full border-b-1 border-gray-200 py-1 md:hidden" />
          </ul>
        </div>
        <div className="md:flex items-center gap-4 hidden ">
          <div
            className="border border-green-700 px-4 py-2 rounded-4xl cursor-pointer text-green-700 "
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </div>
        </div>
        <div className="text-2xl  md:hidden flex items-center gap-4 ">
          <FiUser
            onClick={() => {
              router.push("/login");
            }}
          />
          <TfiAlignRight onClick={() => setOpen(!open)} />
        </div>
      </nav>
    </div>
  );
};

export default RootHeader;
