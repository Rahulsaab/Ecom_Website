import React from "react";
import Footer from "./Footer";
import { useState } from "react";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiFilter,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
  HiChevronDown,
} from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../Context/filter_context";
import FormatPrice from "../Helpers/FormatPrice";

const Products = () => {
  const [showDiv, setShowDiv] = useState(false);
  const { filter_products, loading } = useFilterContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  if (loading) {
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
      <div className="mt-20">
        <div className="flex justify-around h-14 align-middle items-center w-full fixed z-10 bg-slate-100">
          <div className="hidden sm:flex items-center text-xl">
            <div
              color="gray"
              className="text-gray-400 h-7 w-7 items-center pt-1"
            >
              <IoGrid />
            </div>
            <div>
              <label className="inline-flex items-center mb-5 cursor-pointer pt-5">
                <input
                  onClick={() => setShowDiv(!showDiv)}
                  type="checkbox"
                  defaultValue=""
                  className="sr-only peer"
                />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-300" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </div>
            <div
              color="gray"
              className="text-gray-400 h-7 w-7 items-center pt-1"
            >
              <FaThList />
            </div>
          </div>

          <div className="text-xl md:text-2xl font-medium  text-gray-400">
            All Products
          </div>
          <div className="">
            <div className="flex items-start justify-end">
              <Button
                color="purple"
                size="sm"
                className="bg-custom-purple"
                onClick={() => setIsOpen(true)}
              >
                Filters
              </Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} className="mt-20">
              <Drawer.Header title="FILTERS" titleIcon={HiFilter} />
              <Drawer.Items>
                <Sidebar
                  aria-label="Sidebar with multi-level dropdown example"
                  className="[&>div]:bg-transparent [&>div]:p-0"
                >
                  <div className="flex h-full flex-col justify-between py-2">
                    <div>
                      <form className="pb-3">
                        <TextInput
                          icon={HiSearch}
                          type="search"
                          placeholder="Search"
                          required
                          size={32}
                        />
                      </form>
                      <Sidebar.Items>
                        <Sidebar.ItemGroup>
                          <Sidebar.Collapse label="Category" icon={HiUsers}>
                            <Sidebar.Item href="/users/list">
                              Users List
                            </Sidebar.Item>
                            <Sidebar.Item href="/users/add">
                              Add User
                            </Sidebar.Item>
                          </Sidebar.Collapse>
                          <Sidebar.Collapse label="Company" icon={HiUsers}>
                            <Sidebar.Item href="/users/list">
                              Users List
                            </Sidebar.Item>
                            <Sidebar.Item href="/users/add">
                              Add User
                            </Sidebar.Item>
                          </Sidebar.Collapse>
                          <Sidebar.Collapse label="Colors" icon={HiUsers}>
                            <Sidebar.Item href="/users/list">
                              Users List
                            </Sidebar.Item>
                            <Sidebar.Item href="/users/add">
                              Add User
                            </Sidebar.Item>
                          </Sidebar.Collapse>
                          <Sidebar.Collapse label="Price" icon={HiUsers}>
                            <Sidebar.Item href="/users/list">
                              Users List
                            </Sidebar.Item>
                            <Sidebar.Item href="/users/add">
                              Add User
                            </Sidebar.Item>
                          </Sidebar.Collapse>
                          <Button
                            color="purple"
                            className="bg-custom-purple"
                            size="sm"
                          >
                            Clear Filters
                          </Button>
                        </Sidebar.ItemGroup>
                      </Sidebar.Items>
                    </div>
                  </div>
                </Sidebar>
              </Drawer.Items>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="p-for-mobile">
        <div className="m-auto max-w-fit pt-20 p-6">
          {filter_products.map((product) => {
            const { id, name, image, company, description, price, colors } =
              product;

            return (
              <div
                className="flex flex-wrap gap-5 mb-10 bg-gray-700 p-7 rounded-xl max-w-full"
                key={id}
              >
                <div className="w-96 h-full ">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
                <div className="w-96 text-white">
                  <div className="text-2xl font-bold">{name}</div>
                  <div className="text-base p-1 font-semibold">
                    {<FormatPrice price={price} />}
                  </div>

                  <div className="text-sm border-t-2 pt-2 text-wrap line-clamp-3">
                    {description}
                  </div>
                  <div className="flex gap-2 pt-3">
                    {colors.map((col, index) => {
                      return (
                        <>
                          <div className="">
                            <Button
                              className="w-6 h-6 rounded-full mr-3 border-custom-purple "
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
                  <div className="pt-2">
                    <Button
                      size="sm"
                      color="purple"
                      className="bg-custom-purple"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-for-pc">
        {showDiv ? (
          <div className="m-auto max-w-fit pt-20 p-4 relative group cursor-pointer overflow-hidden duration-500">
            {filter_products.map((product) => {
              const { id, name, image, company, description, price, colors } =
                product;

              return (
                <div
                  className="flex flex-wrap gap-5 mb-10 bg-gray-700 p-7 rounded-md max-w-full group-hover:scale-95 duration-300"
                  key={id}
                >
                  <div className="w-96 h-full ">
                    <img src={image} alt={name} loading="lazy" />
                  </div>
                  <div className="w-96 text-white ">
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
              );
            })}
          </div>
        ) : (
          <div className="max-w-full max-h-full flex flex-wrap justify-around p-6 pt-20 md:pt-24">
            {filter_products.map((product) => {
              const { id, name, image, company ,price} = product;
              return (
                <div
                  className="relative group cursor-pointer overflow-hidden duration-500 w-96 h-72 mb-10 bg-gray-700 text-white p-5"
                  key={id}
                >
                  <div className="group-hover:scale-110 w-full h-fit duration-500">
                    <img src={image} alt={name} loading="lazy" />
                  </div>
                  <div className="absolute w-56 left-0 p-5 md:-bottom-10 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold underline">{name}</span>
                    
                    <div className="text-base font-medium">
                      Price : {<FormatPrice price={price} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
