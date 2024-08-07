import React from "react";
import { useProductContext } from "../Context/ProductContex";
// import Product from "../Components/Product";
import { Card } from "flowbite-react";
const FeaturesProducts = () => {
  const { isLoading, fetaureProducts } = useProductContext();
  console.log(fetaureProducts)
  if (isLoading) {
    return;
    <>
      <div class="loader">
        <span class="loader-text">loading</span>
        <span class="load"></span>
      </div>
    </>;
  }
  return (
    <>
      <div className="container-fp  ">
        <div className="text-3xl m-0-auto max-w-fit">Check Now!</div>
        <div className="">Our Feature Services</div>
        <div className="">
          {fetaureProducts.map((item) => {
            const { id, name, image, price, category } = item;
            return;
            <>
              <Card key={id}
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
                  <a className="text-xs">{category}</a>
                </div>
              </Card>
            </>;
            // <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturesProducts;
