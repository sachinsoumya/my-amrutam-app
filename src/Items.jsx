import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
const Items = () => {
  const [data, setData] = useState([]);

   const getData = () => {
    const data = [
      {
        id: 1,
        image: "../src/assets/p1.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 52,
        price: 699,
        amount: "200ml",
      },
      {
        id: 2,
        image: "../src/assets/p2.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 52,
        price: 699,
        amount: "200ml",
      },
      {
        id: 3,
        image: "../src/assets/p3.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 52,
        price: 699,
        amount: "200ml",
      },
    ];
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

 

  return (
    <div className="flex justify-evenly ">
      {data.map((item) => (
        <div className="rounded-full">
          <Link to="/details">
            <img src={item.image} alt="product picture" />
          </Link>

          <div className="text-center w-3/4">{item.text}</div>
          <div className="text-center w-3/4">
            {item.price}-{item.amount}
          </div>
          <div className="text-center w-3/4">{item.ratings}</div>
        </div>
      ))}
      {/* <div>
        <img
          src={data[0].image}
          alt="product picture"
        />
      </div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div> */}
    </div>
  );
};

export default Items;
