import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="about  h-[516px] " >
      <div className="aboutImg">
        <img src={about} alt="AboutImage" />
      </div> 
      <div id="about-text" className="about-textpanel justify-center items-center flex ">
        <div id="head-text" className="head-text -ml-8 ">About Us</div>
        <p id="content-text" className="content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. t has survived not only five
            centuries.
        </p>
        <button className="readbtn -ml-80">Read More</button>
      </div>
    </div>
  );
};

export default About;
