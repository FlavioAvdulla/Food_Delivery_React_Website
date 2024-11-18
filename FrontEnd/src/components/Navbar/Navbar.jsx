import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setIconColor(!iconColor);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="src/assets/tomato_logo_orange.svg" alt="Tomato Logo" />
      </Link>
      <ul className={`navbar-menu ${mobileMenu ? "open" : "closed"}`}>
        <li>
          <a
            href="#header"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            MENU
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            MOBILE APP
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            CONTACT US
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
      <i
        className={`fa-solid fa-bars ${iconColor ? "active-icon" : ""}`}
        alt=""
        onClick={toggleMenu}
      ></i>{" "}
    </nav>
  );
};

export default Navbar;
