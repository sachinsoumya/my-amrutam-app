import React from "react";
import { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState("");
  const [fullData , setFullData] = useState(" ");

  const getData = () => {
    const data = [
      {
        id: 1,
        name: "All",
        image: "../src/assets/All.png",
      },
      {
        id: 2,
        name: "Hair",
        image: "../src/assets/Hair.png",
      },
      {
        id: 3,
        name: "Skin",
        image: "../src/assets/Skin.png",
      },
      {
        id: 4,

        name: "Digestion",
        image: "../src/assets/Stomach.png",
      },
      {
        id: 5,
        name: "Bones",
        image: "../src/assets/Bones.png",
      },
      {
        id: 6,
        name: "Immunity",
        image: "../src/assets/Immunity.png",
      },
       {
        id: 1,
        name: "All",
        image: "../src/assets/All.png",
      },
      {
        id: 2,
        name: "Hair",
        image: "../src/assets/Hair.png",
      },
      {
        id: 3,
        name: "Skin",
        image: "../src/assets/Skin.png",
      },
      {
        id: 4,

        name: "Digestion",
        image: "../src/assets/Stomach.png",
      },
      {
        id: 5,
        name: "Bones",
        image: "../src/assets/Bones.png",
      },
      {
        id: 6,
        name: "Immunity",
        image: "../src/assets/Immunity.png",
      }
      

    ];

    setFullData(data);

    const halfCategories = data.slice(0,6)

    setCategories(halfCategories);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = ()=>{
    setCategories(fullData);
  }
  return (
    categories && (
      <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  gap-2">
          {categories.map((category) => (
            <div key={category.id} className="cursor-pointer" onClick={category.name ==="All" && handleClick} >
              <img src={category.image} alt="image" />
              <div className="text-center">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Category;
