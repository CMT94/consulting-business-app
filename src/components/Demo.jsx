import React from "react";

import globalClasses from "./../global.module.css";
import classes from "./Demo.module.css";

const Demo = () => {
  return (
    <div className={classes.demo}>
      <div className={classes.demoContainer}>
        <div className={classes.col_1}>
          <p>More than 100 Financial Planners,</p>
          <p>One Philosophy</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            nesciunt ut, non aspernatur obcaecati explicabo iste dolorum omnis.
            Minima nobis iure voluptatem possimus reprehenderit fugit quasi
            animi expedita laboriosam? Voluptate nobis laboriosam deserunt
            dolorum. Blanditiis.
          </p>
          <button className={globalClasses.button}>
            Get your free financial analysis
          </button>
        </div>
        <div className={classes.col_2}>
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/xm3YgoEiEDc?si=a134IG67V_m7-znS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
