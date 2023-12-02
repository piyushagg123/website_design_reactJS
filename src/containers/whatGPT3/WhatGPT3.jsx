import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="About Us"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          maxime cumque earum velit totam obcaecati quidem, quis commodi
          repellendus dignissimos aspernatur blanditiis cum asperiores vel."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Where Innovation Meets Intuition</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Title-1"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          maxime cumque earum velit "
        />
        <Feature
          title="Title-2"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          maxime cumque earum velit"
        />
        <Feature
          title={"Title-3"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis maxime cumque earum velit"
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
