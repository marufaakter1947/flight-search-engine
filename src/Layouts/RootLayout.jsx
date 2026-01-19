import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar></Navbar>

      <div className=" w-full px-6 py-5  flex-1">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
