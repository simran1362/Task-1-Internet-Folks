import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImg">
        <img src={about} alt="AboutImage" />
      </div>
      <div className="about-textpanel">
        <div className="head-text">About Us</div>
        <p className="content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. t has survived not only five
            centuries.
        </p>
        <button className="readbtn">Read More</button>
      </div>
    </div>
  );
};

export default About;
