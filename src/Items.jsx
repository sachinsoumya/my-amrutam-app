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
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 px-2 md:px-0 py-2">
      {data.map((item) => (
        <div className="rounded-full">
          <Link to="/details">
            <img src={item.image} alt="product picture" className="w-full object-cover" />
          </Link>

          <div className="text-center w-full pt-3">{item.text}</div>
          <div className="text-center">
            ₹ {item.price}-{item.amount}
          </div>
          <div className="text-center ">Ratings - {item.ratings} </div>
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
