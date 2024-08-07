import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "flowbite-react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-50 fixed top-0 w-full z-50 py-1">
      <div className="container mx-auto px-7 py-4 flex justify-between items-center">
        <div className="flex items-center pl-3">
          <img src="/vite.svg" alt="Logo" className="h-10 w-10" />
          <span className="ml-3 text-xl font-bold text-gray-800">
            Ecom Website
          </span>
        </div>
        <div className="hidden md:flex items-center text-lg font-semibold space-x-5">
          <Link
            to="/"
            className={`text-gray-800 hover:glow-blue px-3 ${
              isActive("/") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-800 hover:glow-blue px-3 ${
              isActive("/about") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-gray-800 hover:glow-blue px-3 ${
              isActive("/contact") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/products"
            className={`text-gray-800 hover:glow-blue px-3 ${
              isActive("/products") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Products
          </Link>
          <div className="px-1">
            <Button size="sm"  color="purple" className="bg-custom-purple">Login</Button>
          </div>
          <div className=""><Link to='/cart'>
            <button data-quantity={0} className="btn-cart">
              <svg
                className="icon-cart"
                viewBox="0 0 24.38 30.52"
                height="30.52"
                width="24.38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon-cart</title>
                <path
                  transform="translate(-3.62 -0.85)"
                  d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                />
              </svg>
              <span className="quantity" />
            </button></Link>
          </div>
          {/* <div className="relative px-5">
            <Link to="/cart" className="text-gray-800 text-2xl hover:glow-blue">
              <FaCartArrowDown />
              <span className="absolute  rounded-full text-xs w-5 h-5 flex items-center justify-center cart-icon">5</span>
            </Link>
          </div> */}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center px-4 py-4">
          <img src="vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="ml-3 text-xl font-bold text-gray-800">
            Ecom Website
          </span>
          <button
            onClick={toggleMenu}
            className="ml-auto text-gray-800 focus:outline-none"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="p-6 text-xl">
          <div
            className={`flex gap-2 border-b ${
              isActive("/") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaHome />
            </div>
            <Link
              to="/"
              className="block text-gray-800 py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
          </div>
          <div
            className={`flex gap-2 border-b ${
              isActive("/about") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaCircleInfo />
            </div>
            <Link
              to="/about"
              className="block text-gray-800 py-2"
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
          <div
            className={`flex gap-2 border-b ${
              isActive("/products") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaBoxOpen />
            </div>
            <button
              onClick={toggleProducts}
              className="block text-gray-800 py-2 focus:outline-none flex items-center justify-between w-full"
            >
              Products {isProductsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {isProductsOpen && (
            <div className="pl-8 text-lg">
              <Link
                to="/products/category1"
                className={`block text-gray-800 py-2 border-b ${
                  isActive("/products/category1") ? "border-purple-500" : ""
                }`}
                onClick={closeMenu}
              >
                Category 1
              </Link>
              <Link
                to="/products/category2"
                className={`block text-gray-800 py-2 border-b ${
                  isActive("/products/category2") ? "border-purple-500" : ""
                }`}
                onClick={closeMenu}
              >
                Category 2
              </Link>
              <Link
                to="/products/category3"
                className={`block text-gray-800 py-2 border-b ${
                  isActive("/products/category3") ? "border-purple-500" : ""
                }`}
                onClick={closeMenu}
              >
                Category 3
              </Link>
            </div>
          )}
          <div
            className={`flex gap-2 border-b ${
              isActive("/cart") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaCartArrowDown />
            </div>
            <Link
              to="/cart"
              className="block text-gray-800 py-2 relative "
              onClick={closeMenu}
            >
              My Cart
            </Link>
            <div className="cart-icon-phone  text-xs  text-white rounded-full w-5 h-5 flex items-center justify-center">
              5
            </div>
          </div>
          <div
            className={`flex gap-2 border-b ${
              isActive("/contact") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <RiContactsFill />
            </div>
            <Link
              to="/contact"
              className="block text-gray-800 py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
          <div
            className={`flex gap-2 border-b  ${
              isActive("/login") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaPen />
            </div>
            <Link
              to="/login"
              className="block text-gray-800 py-2 "
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
          <div
            className={`flex gap-2 ${
              isActive("/signup") ? "border-purple-500" : ""
            }`}
          >
            <div className="pt-2 text-2xl text-gray-500">
              <FaArrowRightToBracket />
            </div>
            <Link
              to="/signup"
              className="block text-gray-800 py-2 text-"
              onClick={closeMenu}
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
