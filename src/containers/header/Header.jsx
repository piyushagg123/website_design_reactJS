import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Crafting Digital Experiences: Where Innovation Meets Intuition.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          maxime cumque earum velit totam obcaecati quidem, quis commodi
          repellendus dignissimos aspernatur blanditiis cum asperiores vel.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
