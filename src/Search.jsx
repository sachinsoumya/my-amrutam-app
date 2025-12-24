import React from "react";

const Search = () => {
  return (
    <div className="bg-[url(../src/assets/search-bg.png)]  p-10">
      <div className="text-3xl font-bold text-center">Store</div>
      <div className="join flex justify-center gap-2 my-4 ">
        <div >
          <label className="input validator join-item bg-[#FFFFFF]">
            <input type="email" placeholder="Search for Kuntal Care" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn  join-item bg-[#FFFFFF] ">Join</button>
      </div>
    </div>
  );
};

export default Search;
