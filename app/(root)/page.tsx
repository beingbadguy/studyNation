"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="min-h-[60vh] flex items-center justify-center flex-col relative">
      <div className="my-10 animate-pulse">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_119_294)">
            {" "}
            <path
              d="M99.6399 68.482C99.6399 -65.4274 141.001 28.3603 107.521 86.3525C141.001 28.3603 242.909 17.2836 126.935 84.2437C242.909 17.2836 182.373 99.9946 115.402 99.9946C182.351 99.9946 242.909 182.706 126.935 115.756C242.909 182.706 141.001 171.629 107.521 113.637C141.001 171.629 99.6399 265.427 99.6399 131.507C99.6399 265.427 58.3333 171.629 91.759 113.637C58.2898 171.629 -43.6179 182.706 72.3558 115.756C-43.6179 182.706 16.918 99.9946 83.889 99.9946C16.9288 99.9946 -43.6179 17.2836 72.3558 84.2437C-43.6179 17.2836 58.2898 28.3603 91.759 86.3525C58.2898 28.3603 99.6399 -65.4274 99.6399 68.482Z"
              fill="url(#paint0_linear_119_294)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_119_294"
              x1="32.4775"
              y1="18.998"
              x2="155.898"
              y2="165.34"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#DCFCE7" />{" "}
              <stop offset="1" stopColor="#22C55E" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_119_294">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </div>
      <h1 className="text-2xl md:text-4xl my-3 text-center">
        Master CBSE. Smarter. Faster. Together.
      </h1>
      <p className=" text-sm md:text-lg text-center  md:w-[80%] lg:w-[50%]">
        A complete learning hub for CBSE students of Class 9 to 12 — access 10
        years of papers, daily quizzes, real-time doubt support, assignments,
        results, and more. Study smarter, not harder.
      </p>
      <div className="my-4">
        <motion.div
          className="relative border border-green-500 cursor-pointer z-10 text-black font-bold py-2 px-4 rounded overflow-hidden hover:text-white transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background */}
          <motion.div
            initial={{ width: 0 }}
            animate={
              isHovered
                ? { width: 148, transition: { duration: 0.5 } }
                : { width: 0 }
            }
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-green-500 z-0"
          />

          {/* Button text */}
          <span className="relative z-10 hover:text-white font-[400]">Get Started</span>
        </motion.div>
      </div>
      <div className="size-10 absolute hidden md:block left-2 md:left-10">
        <svg
          color="#2FA52D"
          viewBox="0 0 82 84"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M49.3429 34.6508L52.917 28.1667"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M32.9786 50.3504L28.6387 54.6391"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M52.6361 48.6656L56.9506 51.5758"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="size-10 absolute left-12 hidden lg:block md:left-45 top-[85%] md:top-[80%]">
        <svg
          color="#2FA52D"
          viewBox="0 0 82 84"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M49.3429 34.6508L52.917 28.1667"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M32.9786 50.3504L28.6387 54.6391"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M52.6361 48.6656L56.9506 51.5758"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="size-10 absolute right-2 hidden md:block  md:right-10">
        <svg
          color="#2FA52D"
          viewBox="0 0 82 84"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M49.3429 34.6508L52.917 28.1667"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M32.9786 50.3504L28.6387 54.6391"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M52.6361 48.6656L56.9506 51.5758"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="size-10 absolute right-12 hidden lg:block  md:right-45 top-[85%] md:top-[80%]">
        <svg
          color="#2FA52D"
          viewBox="0 0 82 84"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M49.3429 34.6508L52.917 28.1667"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M32.9786 50.3504L28.6387 54.6391"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M52.6361 48.6656L56.9506 51.5758"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />{" "}
          <path
            d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
            stroke="currentColor"
            strokeWidth="1.90596"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
