import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="logo-size" src={logo} alt="" />
      </div>
      <div className="contactUs">
        <div className="contact">Contact Us</div>
        <p className="content-add">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className="content-email">example2020@gmail.com</p>
        <p className="content-no">(904) 443-0343</p>
      </div>
      <div className="more-card">
        <div className="More">More</div>
        <a href="#home">About Us</a>
        <a href="#product">Products</a>
        <a href="#career">Career</a>
        <a className="contactusinmore" href="#contact">Contact Us</a>
      </div>
      <div>
        <div className="social">Social Links</div>
        <div className="links">
            <a href="#home" className="fa fa-instagram"></a>
            <a href="#product" className="fa fa-twitter"></a>
            <a href="#career" className="fa fa-facebook"></a>
        </div>
        <div className="copyright">© 2022 Food Truck Example</div>
      </div>
    </div>
  );
};

export default Footer;
