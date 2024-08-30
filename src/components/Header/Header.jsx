import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-white font-bold text-lg">
        <Link to="/" >
          Marketplace Logo
        </Link>
      </div>

      {/* Menu for Desktop */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link to="/login" className="text-white ">Login</Link>
        <Link to="/signup" className="text-white ">Signup</Link>
        <Link to="/cart" className="text-white ">Add to Cart</Link>
        <Link to="/profile" className="text-white ">Profile</Link>
       
  
      </nav>

      {/* Hamburger Menu & Profile Icon for Mobile */}
      <div className="md:hidden flex items-center space-x-4">
        <Link to="/profile" className="text-white ">Profile</Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`md:hidden bg-blue-600 fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white p-4 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex  flex-col p-4 space-y-4 text-center">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Signup</Link>
          <Link to="/cart" className="text-white">Add to Cart</Link>
 
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
