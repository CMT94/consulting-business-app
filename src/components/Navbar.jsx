import React from "react";

import Logo from "./../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import classes from "./Navbar.module.css";

const navLinks = ["Home", "About", "Testimonials", "Demo"];

const Navbar = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState(false);
  const toggleMenu = () => setIsMenuDisplayed((prevState) => !prevState);

  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <a href="/">
          <img src={Logo} className={classes.logo} alt="logo" />
        </a>

        <div className={classes.burgerContainer}>
          {!isMenuDisplayed ? (
            <FaBars size={30} className={classes.icon} onClick={toggleMenu} />
          ) : (
            <FaTimes size={30} className={classes.icon} onClick={toggleMenu} />
          )}
        </div>
        <ul
          className={isMenuDisplayed ? classes.navMenuActive : classes.navMenu}
        >
          {navLinks.map((link) => (
            <li key={link} className={classes.navItem}>
              <a href="/" className={classes.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
