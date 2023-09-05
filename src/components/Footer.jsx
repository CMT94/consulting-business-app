import React from "react";

import globalClasses from "./../global.module.css";
import classes from "./Footer.module.css";

const navLinks = ["Home", "About", "Testimonials", "Demo"];

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <ul>
          {navLinks.map((link) => (
            <li key={link} className={classes.navItem}>
              <a href="/">{link}</a>
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
