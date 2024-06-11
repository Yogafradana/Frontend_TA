import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-column">
          <h2>Quick Link</h2>
          <ul>
            <li>Home</li>
            <li>Tentang</li>
            <li>Menu</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>Information</h2>
          <ul>
            <li>Home</li>
            <li>Tentang</li>
            <li>Menu</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>Opening Hours</h2>
          <ul>
            <li>+62-853-5720-9322</li>
            <li>yogafradana69@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright@2024 PKL-POLINELA-2024
      </p>
    </div>
  );
};

export default Footer;
