import React from "react";
import { Summer } from "./Summer";
import Search from "./Search";
import NavBar from "./NavBar";

import Category from "./Category";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Summer />
      // <Summer />
      {/* // <Outlet /> */}
    </div>
  );
};

export default Shop;
