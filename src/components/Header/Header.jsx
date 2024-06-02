import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Bug Membandel? Temukan <br />
          solusinya sambil ngopi di <br />
          <span className="brown-text">Cafe Microdata</span>
        </h2>
        <button onClick={() => (window.location.href = "/menu")}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
