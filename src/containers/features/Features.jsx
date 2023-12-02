import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis maxime cumque earum velit totam obcaecati quidem, quis commodi",
  },
  {
    title: "Lorem ipsum, dolor sit amet",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatismaxime cumque earum velit totam obcaecati quidem, quis commodi",
  },
  {
    title: "Lorem ipsum, dolor sit amet",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis maxime cumque earum velit totam obcaecati quidem, quis commodi",
  },
  {
    title: "Lorem ipsum, dolor sit amet",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis maxime cumque earum velit totam obcaecati quidem, quis commodi",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Crafting Digital Experiences: Where Innovation Meets Intuition.
        </h1>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
