import React from "react";

import { Link } from "react-scroll";

import globalClasses from "./../global.module.css";
import classes from "./Footer.module.css";

const navLinks = [
  { title: "Home", href: "home", offset: 0 },
  { title: "About", href: "about", offset: 0 },
  { title: "Testimonials", href: "testimonials", offset: -50 },
  { title: "Demo", href: "demo", offset: 0 },
];

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <ul>
          {navLinks.map((link) => (
            <li key={link} className={classes.navItem}>
              <Link
                to={link.href}
                smooth={true}
                offset={link.offset}
                duration={500}
                className={classes.link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.bottom}>
          <span className={`${globalClasses.line} ${classes.line}`}></span>
          <p>{currentYear} Execute, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
