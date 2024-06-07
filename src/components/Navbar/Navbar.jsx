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
        <Link to="/cart">
          <li className="cart-icon">
            <img src={assets.basket_icon} alt="Cart" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
