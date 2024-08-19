import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const ListView = ({ products }) => {
  return (
    <>
      <div className="">
        <div className="m-auto max-w-fit pt-20 p-4 relative group cursor-pointer overflow-hidden duration-500">
          {products.map((product) => {
            const { id, name, image, company, description, price, colors } =
              product;

            return (
              <Link to={`/singleproduct/${id}`}>
                <div
                  className="flex flex-wrap gap-5 mb-10 shadow-xl text-gray-500 p-7 rounded-md max-w-full group-hover:scale-95 duration-300"
                  key={id}
                >
                  <div className="w-96 h-full ">
                    <img src={image} alt={name} loading="lazy" />
                  </div>
                  <div className="w-96 ">
                    <div className="text-2xl font-bold">{name}</div>
                    <div className="text-lg font-semibold pt-2 pb-1">
                      Price : {<FormatPrice price={price} />}
                    </div>

                    <div className="text-sm border-t-2 pt-2 line-clamp-3">
                      {description}
                    </div>
                    <div className="pt-1">Company: {company}</div>
                    <div className="">
                      <div className="flex gap-2 pt-3">
                        {colors.map((col, index) => {
                          return (
                            <>
                              <div className="">
                                <Button
                                  className="w-6 h-6 rounded-full ml-3 border-custom-purple "
                                  color="dark"
                                  style={{ backgroundColor: col }}
                                >
                                  {null}
                                </Button>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button color="purple" className="bg-custom-purple">
                        Buy Now
                      </Button>
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

export default ListView;
