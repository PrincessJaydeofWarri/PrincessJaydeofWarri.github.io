import React from "react";
import "./Update.css";
import Background from "./images/background.png";

const Update = () => {
  return (
    <div className="header-container">
      <img src={Background} alt="jayde-logo" />
      <h1 data-aos="fade-down" data-aos-delay="100">
        Back soon
      </h1>
      <p data-aos="fade-up" data-aos-delay="100">
        We are making some updates...
      </p>
    </div>
  );
};

export default Update;
