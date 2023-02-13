import React from "react";
import img from "../assets/logo.png";
import homepizza from "../assets/homepizza.png";
import border from "../assets/border.png";
// import { Button } from '@chakra-ui/react'

const Home = () => {
  return (
    <div className="panel1">
      <div className="Navbar">
        <img className="logo" src={img} alt="logo" />
        <button id="button" className="buttonNav">Get in Touch</button>
      </div>
      <div id="main-text" className="maintext">
        Discover the <span>Best</span> Food and Drinks
      </div>
      <p id="bottontext" className="bottomtext">
        Naturally made Healthcare Products for the better care & support of your
        body.
      </p>
      <button className="explorebtn">Explore Now!</button>
      <div className="home-pizza">
        <img src={homepizza} alt="Home Pizza Img" />
      </div>
      <div className="home-border">
        <img src={border} alt="Border" />
      </div>
    </div>
  );
};

export default Home;
