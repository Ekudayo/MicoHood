import styles from "../header/header.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>Micotech</h1>

      {/* Desktop Navigation */}
      <nav className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#About-us">About us</a>
        <a href="#Career">Career</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Centered Mobile Dropdown within header */}
      <div
        className={`${styles.navLinksMobileContainer} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <nav className={styles.navLinksMobile}>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#About-us" onClick={toggleMenu}>
            About us
          </a>
          <a href="#Career" onClick={toggleMenu}>
            Career
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      </div>

      {/* Menu Icon */}
      <i className={`fas fa-bars ${styles.menuIcon}`} onClick={toggleMenu}></i>
    </header>
  );
};

export default Header;
