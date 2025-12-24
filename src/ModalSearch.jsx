import React from "react";
import { useState } from "react";

const ModalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const diseases = [
    {
      id: 1,
      name: "Hair fall",
    },
    {
      id: 2,
      name: "Anxiety",
    },
    {
      id: 3,
      name: "Digestion",
    },
    {
      id: 4,
      name: "Obesity",
    },
    {
      id: 5,
      name: "Allergies",
    },
    {
      id: 6,
      name: "Anemia",
    },
    {
      id: 7,
      name: "Sleep disorder",
    },
    {
      id: 8,
      name: "Influenza",
    },
    {
      id: 9,
      name: "Acne",
    },
    {
      id: 10,
      name: "Sinusities",
    },
    {
      id: 11,
      name: "Infertility",
    },
    {
      id: 12,
      name: "General",
    },
    {
      id: 13,
      name: "Hypertension",
    },
  ];

  return (
    <div className="w-full">
      <label className="input w-6/6   border-gray-300 bg-white rounded-full flex gap-2 ">
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

        <input
          type="search"
          required
          placeholder="Search"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        />

        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white">
            <div className="text-center mb-5">
              <div className="font-medium  text-xl">
                Select a Category for Your Question
              </div>
              <div>Helps doctors respond faster and accurately</div>
            </div>
            <label className="input w-full bg-white rounded-full border border-black">
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
              <input
                type="search"
                required
                placeholder="Search"
                value={searchTerm}
                onChange={(event)=>setSearchTerm(event.target.value)}
              />
            </label>
            <div className="py-4 flex flex-wrap gap-2 justify-center">
              {diseases.map((item) => (
                <button
                  key={item.id}
                  className="btn btn-outline btn-success"
                  onClick={() => setSearchTerm(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-2 pt-4">
              <button className=" w-1/3 cursor-pointer ">Skip</button>
              <button className="btn btn-success text-white w-1/3 curser-pointer">
                Add Concern
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </label>
    </div>
  );
};

export default ModalSearch;
