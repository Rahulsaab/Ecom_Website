import React from "react";
import HeroSection from "../Subcomponents/HeroSection";
import Services from "./Services";
import Trusted from "../Subcomponents/Trusted";
import Footer from "./Footer";
import FeaturesProducts from "../Subcomponents/FeaturesProducts";

const Home = () => {
  const data = { name: "TECH STORE" };
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <HeroSection mydata={data} />
        <FeaturesProducts />
        <Services />
        <Trusted />
        <Footer />
      </div>
    </>
  );
};

export default Home;
