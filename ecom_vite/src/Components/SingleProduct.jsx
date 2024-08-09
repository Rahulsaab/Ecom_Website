import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContex";
import PageNavigation from "../Subcomponents/PageNavigation";
import FormatPrice from "../Helpers/FormatPrice";
// import { Rating } from "flowbite-react";
import ReactStars from "react-rating-stars-component";
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { BiShieldQuarter } from "react-icons/bi";
import { Button } from "flowbite-react";
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
        <div className="loader m-auto max-w-fit ">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-20">
        <PageNavigation title={name} />
        <div className="container mx-auto p-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 leading-9">
            {/* Product Image Section */}
            <div className="pt-10">
              <MyImages imgs={image} />
            </div>

            <div>
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
              <p className="text-gray-600 text-justify leading-normal pb-3 border-b-4 border-gray-200">
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
                {stock>0 && <Addtocart product={singleProduct}/>}
              </div>

              {/* <div className="flex gap-2 pt-3">
                <div className="w-6 h-6 rounded-full bg-green-800"></div>

                <div className="w-6 h-6 rounded-full bg-black"></div>
                <div className="w-6 h-6 rounded-full bg-blue-700"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>

              
              <div className="flex items-center pt-3 pl-5">
                <button>-</button>
                <input
                  type="number"
                  value="1"
                  className="border border-gray-300 px-2 py-1 text-center w-10"
                />
                <button>+</button>
              </div>

              <div className=" mt-4">
                
                <Button className="CartBtn bg-custom-purple" color="purple">
                  <span className="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="white"
                      className="cart"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>
                  <p className="text">Add to Cart</p>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
