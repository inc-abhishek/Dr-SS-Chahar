import React from "react";
import aboutImage from "../assets/about.jpg.png"; // Replace with your image path

function About() {
  return (
    <div id="about" className="container mx-auto mt-20 mb-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-green-800 text-3xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
          Welcome to Dr. S.S. Chahar Pre Medical Centre, your trusted partner in preparing for a successful career in the defense services and medical fields. Located in Agra, we specialize in providing comprehensive pre-medical assessments and health evaluations tailored for aspiring candidates of the Army, Airforce, Navy, SSC GD, NDA, and OTA.
          </p>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
