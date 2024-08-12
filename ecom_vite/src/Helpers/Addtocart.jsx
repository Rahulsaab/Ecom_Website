import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";


const Addtocart = ({ product }) => {
  const { id, colors, stock } = product;
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
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

      <div className="flex items-center pt-3 pl-5 gap-5">
        <Button
          className="w-9 h-9 rounded-xl font-bold"
          color="light"
          onClick={decrement}
        >
          -
        </Button>
        <span className="w-2 font-bold">{amount}</span>
        <Button
          className="w-9 h-9 rounded-xl font-bold"
          color="light"
          onClick={increment}
        >
          +
        </Button>
      </div>
      <div className=" mt-4">
        <Button className="CartBtn bg-custom-purple" color="purple"><Link to="/cart">
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
          <p className="text">Add to Cart</p></Link>
        </Button>
      </div>
    </>
  );
};

export default Addtocart;
