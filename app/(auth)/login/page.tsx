"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userForm, setUserform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserform({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userForm);
  };

  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center flex-col ">
      <div className="absolute top-4 left-4 flex items-center gap-1">
        <p
          className="cursor-pointer hover:underline transition-all duration-300 ease-in-out"
          onClick={() => router.push("/")}
        >
          Home
        </p>
        <MdKeyboardArrowRight className="text-xl" />
        <span className=" text-green-700">Login</span>
      </div>
      <h1 className="text-3xl font-bold text-green-500">Login</h1>
      <p className=" my-2 md:my-4 text-center">
        Welcome Back, Log in to get started.
      </p>
      <form
        onSubmit={handleSubmit}
        className=" w-[90%] md:w-[50%] lg:w-[30%] flex items-center justify-center flex-col gap-2"
      >
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={userForm.email}
          onChange={handleChange}
          className="border border-green-500 focus:border-green-500 focus:ring-green-500 focus:ring outline-none"
        />

        <div className="relative w-full">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
            className="border md:my-2 border-green-500 focus:border-green-500 focus:ring-green-500 focus:ring outline-none"
          />
          <div
            className="absolute right-2 top-3 md:top-[18px] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
          </div>
        </div>
        <span className="text-green-500 text-right w-full underline cursor-pointer">
          Forget Password
        </span>
        <Button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white cursor-pointer"
        >
          Login
        </Button>
        <p>
          Don`&apos;`t have an account?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
