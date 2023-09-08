import React from "react";

import Logo from "./../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import classes from "./Navbar.module.css";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Testimonials", href: "testimonials" },
  { title: "Demo", href: "demo" },
];

const Navbar = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState(false);
  const toggleMenu = () => setIsMenuDisplayed((prevState) => !prevState);

  const [colorBg, setColorBg] = React.useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 850) {
      setColorBg(true);
    } else {
      setColorBg(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeBgColor);
    return () => window.removeEventListener("scroll", changeBgColor);
  }, []);

  return (
    <div className={`${classes.header} ${colorBg ? classes.header_bg : ""}`}>
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
            <li
              key={link.title}
              className={classes.navItem}
              onClick={toggleMenu}
            >
              <a href={`#${link.href}`} className={classes.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
