import React from "react";
import BackgroundImage from "../assets/4990224.jpg"; // Import the image

function Home() {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-6 md:px-20 text-center">
        {/* Main Heading */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-green-400 text-4xl md:text-5xl font-extrabold">
          Your Journey to Serving the Nation Begins Here
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl font-medium mt-4">
          Specialized Pre-Medical Services for Armed Forces Candidates
        </p>

        {/* Call to Action */}
        <p className="text-blue-300 text-lg md:text-xl font-semibold mt-2">
          Contact Us for More Information!
        </p>

        {/* Button Section */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md mt-4 transition duration-300 w-3/4 sm:w-auto">
          Book an Appointment!
        </button>
      </div>

      {/* Cards Section */}
      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-8/12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="font-bold text-lg text-blue-600">+91 79004-90281</h3>
          <p className="text-gray-600 mt-2">
            Need help? Call anytime for your queries regarding pre medical!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="font-bold text-lg text-blue-600">Open Hours</h3>
          <p className="text-gray-600 mt-2">
            Mon - Sun: 10:00 AM to 7:00 PM <br />
            Thursday -- Off
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
