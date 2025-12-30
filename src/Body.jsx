import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Search from "./Search";
import SemiFooter from "./SemiFooter";

const Body = () => {
  return (
    <div className="bg-[#FFF7E2] text-black">
      <NavBar />

      <Outlet />
      <SemiFooter />

      <Footer />
    </div>
  );
};

export default Body;
