import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-pink-200 border-t border-pink-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <h2 className="text-2xl font-extrabold text-pink-600">🌸 Elsa</h2>

        {/* Links */}
        <ul className="flex space-x-6 font-medium text-gray-600">
          <li>
            <a href="#home" className="hover:text-pink-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#karya" className="hover:text-pink-500 transition-colors">
              Karya
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-pink-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media */}
        <div className="flex space-x-5 text-pink-600">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-pink-600 font-semibold">Elsa</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
