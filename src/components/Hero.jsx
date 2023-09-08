import React from "react";

import classes from "./Hero.module.css";
import globalClasses from "./../global.module.css";

const Hero = () => {
  return (
    <div className={classes.hero} id="home">
      <div className={classes.content}>
        <p>Call us</p>
        <p>1-800-123-4567</p>
        <p>Because Money</p>
        <p>Doesn't come with instructions.</p>
        <button className={`${globalClasses.button} ${classes.button}`}>
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Hero;
