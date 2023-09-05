import React from "react";

import User1 from "./../assets/user1.jpeg";
import User2 from "./../assets/user2.jpeg";
import User3 from "./../assets/user3.jpeg";

import globalClasses from "./../global.module.css";
import classes from "./Testimonials.module.css";

const users = [
  {
    id: "u1",
    name: "Johnson.M.J.",
    position: "Director of Financial Times",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh ligula, lobortis vitae metus eu, finibus tincidunt tellus. Proin vehicula justo sed urna varius volutpat. Sed et fermentum leo. Duis quis erat ac eros lacinia fermentum eget nec metus.",
    image: User1,
  },
  {
    id: "u2",
    name: "Carol Harper",
    position: "Director at Risktec Solutions Ltd",
    testimonial:
      "Integer non lacus elementum, feugiat lectus vel, blandit quam. Mauris iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nibh ligula, lobortis vitae metus eu, finibus tincidunt tellus ! Nunc dolor arcu, bibendum ac feugiat in, molestie vel leo.",
    image: User2,
  },
  {
    id: "u3",
    name: "James Anderson",
    position: "Managing Director of BPW Global",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia a nibh vitae elementum. Nunc dolor arcu, bibendum ac feugiat in, molestie vel leo. Maecenas euismod bibendum elit, eu lacinia justo cursus vel. Mauris venenatis et lacus ut porta. Vivamus.",
    image: User3,
  },
];

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className={classes.testimonialsContainer}>
        <h2>Testimonials</h2>
        <span className={globalClasses.line}></span>
        <div className={classes.content}>
          {users.map((user) => (
            <div key={user.id} className={classes.card}>
              <img src={user.image} alt={user.name} />
              <p>{user.testimonial}</p>
              <p>
                <span>{user.name}</span>
              </p>
              <p>{user.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
