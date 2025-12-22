import React from "react";
import { useState } from "react";

const Modal = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="modal-box bg-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">Ask Questions!</h3>
        <div className="modal-action mt-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-white btn-neutral border-0">
              <img src="../src/assets/Vector.png" alt="cross mark" />
            </button>
          </form>
        </div>
      </div>

      <hr className="text-base-100" />

      <p className="py-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              <img src="../src/assets/User.png" alt="" />
            </div>
            <div className="font-medium text-xl">
              <div className="text-success ">Priya Singh</div>
              <div>
                <select
                  defaultValue="Xsmall"
                  className="select select-xs bg-white select-neutral w-full"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          </div>

          <button className="btn btn-success p-2 font-medium text-xl text-white w-2/8">
            Ask
          </button>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-black">
            What is your name?
          </legend>
          <input
            type="text"
            className="input bg-white input-neutral w-full"
            placeholder="Ask your question here"
          />
          <legend className="fieldset-legend text-black">Attachments</legend>
          <input
            type="file"
            className="input bg-white input-neutral w-full"
            placeholder="Ask your question here"
          />
          <div className="flex gap-2 my-3 cursor-pointer ">
            <div
              onClick={() => setToggle(!toggle)}
              className="border border-black rounded-full "
            >
              ➕
            </div>
            <div className="font-semibold">Add Description</div>
          </div>
          {toggle && (
            <textarea
              className="textarea w-6/6 my-1 bg-white textarea-neutral"
              placeholder="Ask Description..."
            ></textarea>
          )}
        </fieldset>
      </p>
    </div>
  );
};

export default Modal;
