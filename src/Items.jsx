import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
const Items = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const data = [
      {
        id: 0,
        image: "../src/assets/p1.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 5,
        num_ratings: 52,
        price: 699,
        amount: "200ml",
      },
      {
        id: 1,
        image: "../src/assets/p2.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 5,
        num_ratings: 52,
        price: 699,
        amount: "200ml",
      },
      {
        id: 2,
        image: "../src/assets/p3.jpg",
        text: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
        ratings: 5,
        num_ratings: 52,
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
          <Link to={`details/${item.id}`}>
            <img
              src={item.image}
              alt="product picture"
              className="w-full object-cover"
            />
          </Link>

          <div className="text-center w-full pt-3">{item.text}</div>
          <div className="text-center">
            ₹ {item.price}-{item.amount}
          </div>

          

         

          <div className="text-center ">
             <div className="rating">
            <input
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
              aria-current={item.ratings === 1}
            />
            <input
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              aria-current={item.ratings === 2}
            />
            <input
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
              aria-current={item.ratings === 3}
            />
            <input
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
              aria-current={item.ratings === 4}
            />
            <input
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
              aria-current={item.ratings === 5}
            />
          </div>
            <span className="px-2 py-2">({item.num_ratings})</span>
             </div>
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
