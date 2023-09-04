import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
    </React.Fragment>
  );
};

export default App;
