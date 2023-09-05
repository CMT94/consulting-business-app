import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
    </React.Fragment>
  );
};

export default App;
