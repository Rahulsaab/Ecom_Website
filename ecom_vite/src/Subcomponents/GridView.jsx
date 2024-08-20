import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";
const GridView = ({ products }) => {
  console.log(products);
  return (
    <>
      <div className="">
        <div className="max-w-full max-h-full flex flex-wrap justify-around p-6 pt-20  cursor-pointer overflow-hidden duration-500  md:pt-24">
          {products.map((product) => {
            const { id, name, image, price, description } = product;
            return (
              <Link to={`/singleproduct/${id}`}>
                <div className="max-w-sm bg-white  rounded-lg shadow-xl p-5 mb-10 hover:scale-95 duration-300">
                  <a>
                    <img className="rounded-t-lg" src={image} alt="products" />
                  </a>
                  <div className="p-5">
                    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {name}
                    </div>

                    <div className="m font-normal text-gray-700 dark:text-gray-400 pb-1 text-lg font-semibold">
                      Price : {<FormatPrice price={price} />}
                    </div>
                    <p className="line-clamp-2 border-t-2 border-gray-300 pt-1">{description}</p>
                    <div className="pt-2">
                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-purple rounded-lg">
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
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
