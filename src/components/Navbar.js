import React, { useState } from "react";
import medicalSymbol from "../assets/medical-symbol.png"; // Corrected path

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the menu visibility

  return (
    <nav className="bg-green-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Logo wrapped with <a> for navigation */}
          <a href="#home" className="flex items-center">
            <img
              src={medicalSymbol} // Corrected path
              alt="Medical Symbol"
              className="h-12 w-12 mr-3"
            />
            <div>
              <h1 className="text-gold-500 text-2xl font-bold tracking-wide">
                SS Chahar
              </h1>
              <span className="text-white text-xs tracking-widest">
                Pre-Medical Centre
              </span>
            </div>
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile View) */}
        <button
          className="text-white md:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex space-x-6 text-white absolute md:static bg-green-800 md:bg-transparent top-16 left-0 w-full md:w-auto z-10 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-center md:text-left">
            <a
              href="#home"
              className="hover:text-orange-600 font-semibold tracking-wide transition-all duration-300 block py-2 md:py-0"
            >
              Home
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#about"
              className="hover:text-white font-semibold tracking-wide transition-all duration-300 block py-2 md:py-0"
            >
              About Us
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#services"
              className="hover:text-green-400 font-semibold tracking-wide transition-all duration-300 block py-2 md:py-0"
            >
              Services
            </a>
          </li>
          <li className="text-center md:text-left">
            <a
              href="#address"
              className="hover:text-green-400 font-semibold tracking-wide transition-all duration-300 block py-2 md:py-0"
            >
              Address
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
