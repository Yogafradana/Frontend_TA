import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram ,  faYoutube , faTwitter   } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Cafe Microdata Logo" />

          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />


            


          </div>
        </div>

        <div className="footer-content-column">
          <h2>Quick Link</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tentang-kami">Tentang</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/hubungi-kami">Hubungi Kami</Link>
            </li>
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>Information</h2>
          <ul>
            <li>cafe microdata</li>
            <li>Sukarame, Bandar Lampung</li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 0877-6689-0990
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} /> cafemicrodata@gmail.com
            </li>
            
          </ul>
        </div>

        <div className="footer-content-column">
          <h2>Opening Hours</h2>
          <ul>
            <li>09.00-23.00</li>
            <li>Tuesday-Sunday</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 PKL-POLINELA-2024
      </p>
    </div>
  );
};

export default Footer;
