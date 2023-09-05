import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </React.Fragment>
  );
};

export default App;
