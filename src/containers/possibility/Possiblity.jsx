import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possiblity = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Lorem ipsum dolor, sit amet consectetur</h4>
        <h1 className="gradient__text">
          Lorem ipsum it amet consectetur adipisicing{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          sapiente voluptates tempore neque cumque dolor numquam ut nostrum quod
          repellat.
        </p>
        <h4>Lorem ipsum dolor, sit amet consectetur</h4>
      </div>
    </div>
  );
};

export default Possiblity;
