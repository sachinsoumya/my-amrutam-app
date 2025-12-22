import React, { useState } from "react";

const Replies = ({ replies }) => {
  

  return replies.map((self) => (
    <>
      {/* <div className="flex justify-between">
        <div className="text-shadow-gray-300">
          Replies . <span className="px-1">{replies.length} replies</span>
        </div>
        <div
          className="text-shadow-gray-300 cursor-pointer"
          onClick={handleClick}
        >
          View {replies.length - firstReply.length} replies
        </div>
      </div> */}
      <div className="card bg-green-200 card-sm shadow-sm my-2 ">
        <div className="card-body">
          <div className="flex gap-2">
            <img src={self.image} alt="image" />
            <div className="self-center font-bold">{self.name}</div>
          </div>

          <p>{self.reply}</p>
        </div>
      </div>
    </>
  ));
};

export default Replies;
