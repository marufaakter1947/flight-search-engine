import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar></Navbar>

      <div className=" max-w-7xl  mx-auto w-full px-4 md:px-8 lg:px-12 py:4 md:py-8 lg:py-12 flex-1">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
