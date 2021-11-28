import React from "react";
import "./Update.css";
import Background from "./images/background.png";
import logo from "./images/Developherj_logo.png";

const Update = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-container">
        <h1 data-aos="fade-down" data-aos-delay="100">
          Back soon
        </h1>
        <p data-aos="fade-up" data-aos-delay="100">
          We are making some updates...
        </p>
      </div>
    </>
  );
};

export default Update;
