import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
    </React.Fragment>
  );
};

export default App;
