import React from "react";
import { Link } from "react-router-dom";

import { Card } from "flowbite-react";
const Product = ({ item }) => {
  const { id, name, image, price, category } = item;
  return (
    <>
      <Link to={`/singleproduct/${id}`}></Link>
      <div className="">
        {/* <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div className="w-52 h-40  rounded-2xl"><img src={image} alt="pro"/></div>
          <div className="">
            <p className="font-extrabold">{name}</p>
            <p className="">{category}</p>
            <p className="">{price}</p>
          </div>
          
        </div> */}
        <Card
          className="max-w-sm"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc={image}
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <a
             
              className="text-xs"
            >
              {category}
            </a>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Product;
