import React from "react";

import Logo from "./../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";

import classes from "./Navbar.module.css";

const navLinks = [
  { title: "Home", href: "home", offset: 0 },
  { title: "About", href: "about", offset: 0 },
  { title: "Testimonials", href: "testimonials", offset: -50 },
  { title: "Demo", href: "demo", offset: 0 },
];

const Navbar = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = React.useState(false);
  const toggleMenu = () => setIsMenuDisplayed((prevState) => !prevState);
  const closeMobileMenu = () => setIsMenuDisplayed(false);

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
        <Link to={"home"} smooth={true} offset={0} duration={500}>
          <img src={Logo} className={classes.logo} alt="logo" />
        </Link>

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
            <li key={link.title} className={classes.navItem}>
              <Link
                to={link.href}
                smooth={true}
                offset={link.offset}
                duration={500}
                className={classes.link}
                onClick={closeMobileMenu}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
