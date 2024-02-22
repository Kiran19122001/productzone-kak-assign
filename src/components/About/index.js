import React from "react";
import Navigation from "../Navigation";
import "./index.css";

const About = () => {
  return (
    <>
      <Navigation />
      <div>
        <div>
          <img
            src="https://www.impactbnd.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg"
            alt="about-us"
            className="about-image"
          />
          <div>
            <h1 className="about-head">About Us</h1>
            <p className="about-text">
              Welcome to Productzone, where convenience meets quality. Discover
              a seamless shopping experience tailored to your needs.At
              productzone, we're passionate about bringing you the latest trends
              and must-have products at your fingertips, with just a few
              clicks.Join our community at productzone and embark on a journey
              of style, savings, and satisfaction. Your perfect shopping
              destination awaits!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
