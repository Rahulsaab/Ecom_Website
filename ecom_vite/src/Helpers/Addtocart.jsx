import React, { useState } from "react";
import { Button } from "flowbite-react";
const Addtocart = ({ product }) => {
  const { id, colors, stock } = product;
  const [amount ,setAmount]= useState(1)

  const decrement=()=>{
    amount > 1 ? setAmount(amount-1): setAmount(1)
  }
  const increment=()=>{
    amount < stock ? setAmount(amount+1): setAmount(stock)
  }
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
                <Button className="w-9 h-9 rounded-xl font-bold" color="light" onClick={decrement}>-</Button>
                <span className="w-2 font-bold">{amount}</span>
                <Button className="w-9 h-9 rounded-xl font-bold" color="light" onClick={increment}>+</Button>
              </div>
    </>
  );
};

export default Addtocart;
