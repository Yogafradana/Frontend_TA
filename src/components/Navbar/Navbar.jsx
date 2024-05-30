import React, { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
        </Link>
        <Link to="/menu">
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        </Link>
        <Link to="/tentang-kami">
          <li
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            Tentang Kami
          </li>
        </Link>
        <Link to="/hubungi-kami">
          <li
            onClick={() => setMenu("Hubungi-kami")}
            className={menu === "Hubungi-kami" ? "active" : ""}
          >
            Hubungi Kami
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
