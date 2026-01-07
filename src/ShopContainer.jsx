import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Search from "./Search";
import Category from "./Category";
import Shop from "./Shop";

const ShopContainer = () => {
  return (
    <div>
      <Search />
      <Category />

      {/* <Shop /> */}
      <Outlet />
    </div>
  );
};

export default ShopContainer;
