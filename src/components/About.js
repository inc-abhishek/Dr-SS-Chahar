import React from "react";
import aboutImage from "../assets/about.jpg.png"; // Replace with your image path

function About() {
  return (
    <div id="about" className="container mx-auto mt-20 mb-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-green-800 text-3xl font-bold mb-4">
          </h2>
          <p className="text-gray-700 text-2xl leading-relaxed">
          डॉ. एस.एस. चाहर प्री मेडिकल सेंटर में आपका स्वागत है, जो रक्षा सेवाओं और चिकित्सा क्षेत्रों में सफल करियर की तैयारी के लिए आपका विश्वसनीय साथी है। आगरा में स्थित, हम सेना, वायु सेना, नौसेना, एसएससी जीडी, एनडीए और ओटीए के इच्छुक उम्मीदवारों के लिए विशेष रूप से तैयार की गई व्यापक प्री-मेडिकल आकलन और स्वास्थ्य मूल्यांकन प्रदान करने में विशेषज्ञता रखते हैं।          </p>
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
