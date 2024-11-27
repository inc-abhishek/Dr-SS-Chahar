import React from "react";
import BackgroundImage from "../assets/4990224.jpg"; // Import the image

function Home() {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-6 md:px-20 text-center space-y-4">
        {/* Main Heading */}
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-400 text-4xl md:text-5xl font-extrabold leading-relaxed md:leading-loose pt-4 pb-4"
        >
          शौर्यम.. दक्षम.. युध्धेय..! बलिदान परम धर्म !
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl font-semibold mt-4">
          सशस्त्र बल उम्मीदवारों के लिए विशेष पूर्व-चिकित्सा सेवाएं
        </p>

        {/* Call to Action */}
        <p className="text-blue-300 text-lg md:text-xl font-bold mt-2">
          अधिक जानकारी के लिए संपर्क करें!
        </p>
      </div>

      {/* Cards Section */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-8/12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="font-bold text-lg text-blue-600">+91 79004-90281</h3>
          <p className="text-gray-600 mt-2">
            सहायता चाहिए? पूर्व-चिकित्सा से संबंधित प्रश्नों के लिए कभी भी कॉल करें!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="font-bold text-lg text-blue-600">खुलने का समय</h3>
          <p className="text-gray-600 mt-2">
            सोमवार - रविवार: सुबह 10:00 बजे से शाम 7:00 बजे तक <br />
            गुरुवार -- बंद
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
