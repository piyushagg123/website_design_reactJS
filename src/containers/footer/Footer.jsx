import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor
        </h1>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <p style={{ color: "white", fontSize: "x-large" }}>company_name</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
