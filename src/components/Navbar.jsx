import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-pink-200/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">🌸 Elsa</h1>
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
          </li>
          <li>
            <a href="#karya" className="hover:text-pink-500">
              Karya
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
