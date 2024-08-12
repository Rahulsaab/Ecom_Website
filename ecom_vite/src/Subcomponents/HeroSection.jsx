import React from "react";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
const HeroSection = ({mydata}) => {
  const {name} = mydata
  return (
    <>
      <section>
       
          <div className="hero-sec pb-10  ">
            <div className="hero-left">
              <div className="text-gray-500">WELCOME TO</div>
              <div className="text-2xl font-bold ">{name}</div>
              <div className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores porro beatae cumque veniam dolorem commodi omnis. 
              </div>
              <div className="pt-2">
                <Button  color="purple" className="bg-custom-purple">
                  <HiShoppingCart className="mr-2 h-5 w-5"  />
                  Shop now
                </Button>
              </div>
            </div>
            <div className="hero-right">
              <img style={{width:"30rem"}} src="/hero2.png" />
            </div>
          </div>
  
      </section>
    </>
  );
};

export default HeroSection;
