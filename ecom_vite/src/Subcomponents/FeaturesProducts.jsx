import React from "react";
import {useProductContext} from "../Context/ProductContex"
import Product from "../Components/Product";

const FeaturesProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    );
  }

  return (
    <div className="container-fp">
      <div className="text-3xl m-auto max-w-fit flex-wrap pb-2 font-bold">Check Now!</div>
      <div className="m-auto max-w-fit text-2xl pb-4">Our Feature Services</div>
      <div className="flex-wrap flex justify-around ">
        {featureProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;
