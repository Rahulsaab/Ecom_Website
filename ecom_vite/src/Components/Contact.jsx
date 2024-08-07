import React from "react";
import Emailjs from "../Subcomponents/Emailjs";
import Footer from "./Footer"
const Contact = () => {
  return <>
      <div className="pt-14 pb-10">
      <div className="service-heading">Connect With Us</div>
      <div className="s-img-from">
        <div className="">
          <img
            className="service-img"
            loading="lazy"
            src="contact.png"
            alt="contact"
          />
        </div>
        <div className="">
          <Emailjs />
        </div>
      </div>
    </div>
    <Footer/>
  </>;
};

export default Contact;
