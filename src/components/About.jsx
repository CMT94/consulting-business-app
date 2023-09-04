import React from "react";

import JohnDoe from "./../assets/john-doe.png";

import globalClasses from "./../global.module.css";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutContainer}>
        <img src={JohnDoe} alt="John" />
        <div className={classes.col_2}>
          <h2>About</h2>
          <span className={globalClasses.line}></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deleniti quae sunt inventore ducimus minus numquam ab esse amet!
            Labore, ab provident. Voluptatibus quas modi sed aliquid dicta quae.
            Necessitatibus accusamus ipsam eos soluta voluptatem nihil beatae
            aperiam id nesciunt.
          </p>
          <p>
            I am John Doe, senior advisor for an independently owned financial
            planning company called Intense.
          </p>
          <button className={`${globalClasses.button} ${classes.button}`}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
