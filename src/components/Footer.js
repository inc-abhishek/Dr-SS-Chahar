import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Logo and Name */}
        <h2 className="text-xl font-bold">Dr. SS Chahar Pre-Medical Centre</h2>
        <p className="text-sm">
          Rajeev Dropadi Vihar, Plot No. 2, near Radha Swami Ashram, front of Aman Shoes Factory, Nainana Jat, Jakhoda, Rohta, Uttar Pradesh 282009
        </p>
        <p className="text-sm">
          <span className="font-semibold">Phone:</span> +91 79004-90281 |{" "}
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:contact@sschahar.com"
            className="text-blue-300 hover:text-blue-500"
          >
            contact@sschahar.com
          </a>
        </p>

        {/* Social Media and Maps Icons */}
        <div className="flex justify-center space-x-6 text-2xl mt-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaFacebook />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
          >
            <FaYoutube />
          </a>
          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/place/Dr.+S+S+Chahar+pre+medical+Test+center/@27.1073172,77.9846367,17z/data=!3m1!4b1!4m6!3m5!1s0x397476bd1e541d53:0xc19a21d3f6de9e4d!8m2!3d27.1073172!4d77.9872116!16s%2Fg%2F11c7518xxl?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-300"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-6">
          © 2024 Dr. SS Chahar Pre-Medical Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
