import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer"; // Add this line


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

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
