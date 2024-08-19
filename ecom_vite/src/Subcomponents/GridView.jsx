import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";
const GridView = ({ products }) => {
  console.log(products);
  return (
    <>
      <div className="">
        <div className="max-w-full max-h-full flex flex-wrap justify-around p-6 pt-20  md:pt-24">
          {products.map((product) => {
            const { id, name, image, price } = product;
            return (
              <Link to={`/singleproduct/${id}`}>
              <div
                className=" shadow-xl relative group cursor-pointer  overflow-hidden duration-500 w-96 h-72 mb-10 rounded-lg bg-purple-400 text-white p-5"
                key={id}
              >
                <div className="group-hover:scale-110 w-full h-fit duration-500">
                  <img
                    className="rounded-lg"
                    src={image}
                    alt={name}
                    loading="lazy"
                  />
                </div>
                <div className="absolute w-56 left-0 p-5 md:-bottom-10 duration-500 group-hover:-translate-y-12">
                  <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-purple-900"></div>
                  <span className="text-xl font-bold underline">{name}</span>

                  <div className="text-base font-medium">
                    Price : {<FormatPrice price={price} />}
                  </div>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridView;
