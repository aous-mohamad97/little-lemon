import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";

const NavigationBar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/#services", label: "Services" },
    { path: "/#menu", label: "Menu" },
    { path: "/booking", label: "Reservations" },
    { path: "/booking", label: "Order Online" },
    { path: "/#login", label: "Login" }
  ];

  return (
    <nav className={`navbar ${isMobileMenuVisible ? "open" : ""}`}>
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <img src={logo} alt="Little Lemon Logo" />
      </Link>
      <button 
        className="menu-icon" 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuVisible}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isMobileMenuVisible ? "visible" : ""}`}>
        {navigationItems.map((item, index) => (
          <li key={index}>
            {item.path.startsWith("/#") ? (
              <a href={item.path} onClick={closeMobileMenu}>{item.label}</a>
            ) : (
              <Link to={item.path} onClick={closeMobileMenu}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
