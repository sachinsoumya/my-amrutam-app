import React from "react";
import Replies from "./Replies";
import { useState } from "react";

const ShowReplies = ({ replies }) => {
  const firstReply = replies.slice(0, 1);

  console.log(firstReply);

  const [showReplies, setShowReplies] = useState(firstReply);

  const handleClick = () => {
    showReplies.length === 1
      ? setShowReplies(replies)
      : setShowReplies(firstReply);
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="text-shadow-gray-300">
          Replies . <span className="px-1">{replies.length} replies</span>
        </div>
        <div
          className="text-shadow-gray-300 cursor-pointer"
          onClick={handleClick}
        >
          {showReplies.length === 1
            ? ` View ${replies.length - firstReply.length} replies`
            : "Hide replies"}
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="w-3/4">
          <Replies replies={showReplies} />
        </div>
      </div>
    </>
  );
};

export default ShowReplies;
