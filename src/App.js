import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import OurSuccessStories from "./components/OurSuccessStories"; // Import the new component
import Footer from "./components/Footer";

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

      {/* Add Our Success Stories section below Services */}
      <div id="success-stories">
        <OurSuccessStories />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
