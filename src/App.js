import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Address from "./components/Address";

function App() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Sections for scrolling */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="address">
        <Address />
      </div>
    </div>
  );
}

export default App;
