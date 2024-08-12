import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContex";
import PageNavigation from "../Subcomponents/PageNavigation";
import FormatPrice from "../Helpers/FormatPrice";
import ReactStars from "react-rating-stars-component";
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { BiShieldQuarter } from "react-icons/bi";
import MyImages from "../Helpers/MyImages";
import Addtocart from "../Helpers/Addtocart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: store,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    colors,
    review,
  } = singleProduct;

  const firstExample = {
    size: 30,
    value: stars,
    edit: false,
  };
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="mt-64">
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
    );
  }

  return (
    <>
      <div className="mt-16 m-auto max-w-fit">
        
        <div className="container mx-auto ">
        <PageNavigation title={name} />
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 leading-9 pt-16 p-4">
           
            <div className="pt-5">
              <MyImages imgs={image} />
            </div>

            <div className=" md:pt-10">
              <h1 className="text-2xl font-bold">{name}</h1>

              <h2 className="text-xl font-bold text-red-700 pt-2">
                MRP:<del>{<FormatPrice price={price + 50000} />}</del>
              </h2>
              <h2 className="text-xl font-bold animate-pulse text-blue-600 pt-1">
                Deal of the day:{<FormatPrice price={price} />}
              </h2>
              <div className="flex items-center gap-3">
                <ReactStars {...firstExample} />{" "}
                <span className="text-gray-400 text-sm">{stars} out of 5</span>
              </div>
              <p className="text-gray-600">
                Availability: {stock > 0 ? "In Stock" : "Not Available"}
              </p>
              <p className="text-gray-600">Brand:{company}</p>
              <p className="text-gray-600">Category:{category}</p>
              <p className="text-gray-600">Store:{store}</p>
              <p className="text-gray-600 text-justify leading-normal pb-3 text-base border-b-4 border-gray-200">
                {description}
              </p>
              <div className="flex flex-wrap gap-7 p-3 ">
                <div className="text-center align-middle">
                  <div className="w-12 h-12 text-2xl p-3 rounded-full bg-gray-400 ml-2 ">
                    <FaTruckFast />
                  </div>
                  <div className="font-semibold text-gray-600 leading-none pt-3">
                    Fast<br></br> Delivery
                  </div>
                </div>
                <div className="text-center align-middle">
                  <div className="w-12 h-12 text-2xl p-3 rounded-full bg-gray-400 ml-6 ">
                    <TbReplace />
                  </div>
                  <div className="font-semibold text-gray-600 leading-none pt-3">
                    30 Day<br></br> Replacement
                  </div>
                </div>
                <div className="text-center align-middle">
                  <div className="w-12 h-12 text-2xl p-3 rounded-full bg-gray-400 ml-2 ">
                    <GrSecure />
                  </div>
                  <div className="font-semibold text-gray-600 leading-none pt-3">
                    Secure <br></br> Delivery
                  </div>
                </div>
                <div className="text-center align-middle">
                  <div className="w-12 h-12 text-2xl p-3 rounded-full bg-gray-400 ml-3 ">
                    <BiShieldQuarter />
                  </div>
                  <div className="font-semibold text-gray-600 leading-none pt-3">
                    2Year <br></br> Warrenty
                  </div>
                </div>
              </div>
              <div className="">
                {stock > 0 && <Addtocart product={singleProduct} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
