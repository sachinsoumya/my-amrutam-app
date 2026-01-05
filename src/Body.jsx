import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Search from "./Search";
import SemiFooter from "./SemiFooter";
import Category from "./Category";

const Body = () => {
  return (
    <div className="bg-[#FFF7E2] text-black">
      <NavBar />
      <Search />
      <Category />

      <Outlet />

      <SemiFooter />

      <Footer />
    </div>
  );
};

export default Body;
