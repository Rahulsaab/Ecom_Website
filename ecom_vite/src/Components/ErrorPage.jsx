import { Button } from "flowbite-react";
import React from "react";
import {Link} from "react-router-dom"
import { TbMoodSadDizzy } from "react-icons/tb";
import Footer from "./Footer"
const ErrorPage = () => {
  return (
    <>
      <div className=" errorpage">
        <div className="text-7xl m-auto max-w-fit text-custom-purple"><TbMoodSadDizzy /></div>
        <h2 className="text-6xl">404</h2>
        <h2 className="text-3xl">UH OH! You're Lost.</h2>
        <p className="text-gray-500">
          The page you are looking for do not exist. How you got here is a
          mystery. But you can click the button below to go back to home page
        </p>
        <div className="m-auto max-w-fit"><Button size="sm"  color="purple" className="bg-custom-purple"><Link to="/">Home</Link></Button></div>
      </div>
      <Footer/>
    </>
  );
};

export default ErrorPage;
