import React from "react";
import {useProductContext} from "../Context/ProductContex"
import Product from "../Components/Product";

const FeaturesProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
    );
  }

  return (
    <div className="container-fp">
      <div className="text-3xl text-center flex-wrap pb-2 font-bold">Check Now!</div>
      <div className=" text-2xl pb-4 text-center">Our Feature Services</div>
      <div className="flex-wrap flex justify-around ">
        {featureProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;
