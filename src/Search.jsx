import React from "react";

const Search = () => {
  return (
    <div className="bg-[url(../src/assets/search-bg.png)]  p-10">
      <div className="text-3xl font-bold text-center my-2">Store</div>
      <div className="flex justify-center gap-2 my-4 ">
        <div className=" w-full lg:w-1/3">
          <label className="input w-full bg-white rounded-lg border border-black">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search for Kuntal Care" />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral bg-[#FFFFFF] ">  🔍</button>
      </div>
    </div>
  );
};

export default Search;
