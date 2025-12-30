import React from "react";
import { Link } from "react-router-dom";
import UpperNav from "./UpperNav";

const NavBar = () => {
  return (
    <>
      <UpperNav />
      <div className="bg-[#FFF7E2] shadow-sm text-emerald-500 py-2 ">
        <div className="text-center hidden md:block">
          <a className="text-xl ">AMRUTAM</a>
        </div>

        <div className="navbar 	">
          {/* <div class>Hello</div> */}
          <div className="navbar-start grow-0">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FindDoctors</a>
                </li>
                <li>
                  <a>LabTests</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Forum</a>
                </li>

                <li>
                  <a>About us</a>
                </li>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl text-center">AMRUTAM</a> */}
          </div>
          <div className="block md:hidden">
            <div className="text-center">
              <a className="text-md font-bold ">AMRUTAM</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li className=" hover:underline">
                <a>Home</a>
              </li>
              <li className=" hover:underline">
                <a>FindDoctors</a>
              </li>
              <li className=" hover:underline">
                <a>LabTests</a>
              </li>
              <li className=" hover:underline">
                <Link to="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li className=" hover:underline">
                <Link to="/forum">
                  <a>Forum</a>
                </Link>
              </li>
              <li className=" hover:underline">
                <a>About us</a>
              </li>

              {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
            </ul>
          </div>
          <div className="navbar-end  md:justify-evenly grow-7 ">
            <div className="indicator ">
              {/* <span className="indicator-item badge badge-success"></span> */}
              <a className=" rounded-full  p-2">👜</a>
            </div>

            <div className="indicator ">
              <span className="indicator-item badge badge-success">1</span>
              <a className=" rounded-full  p-2">🛒</a>
            </div>
            <div className="hidden md:block ">
              <div className="indicator ">
                <span className="indicator-item badge badge-success">1</span>
                <a className=" rounded-full  p-2">🔔</a>
              </div>
              <div className="indicator pl-10 ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="rounded-field">
                    <a className=" rounded-full  p-2">🙍‍♂️</a>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu dropdown-content bg-[#FFF7E2] rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-active btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:hidden rounded-xl">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
