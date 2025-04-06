import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#222121] text-white py-10 px-6">

      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Body Posture Detection</h3>
          <p className="text-gray-400">
            Empowering AI-driven behavior understanding through posture, emotion, and expression analysis.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="about" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="upload" className="hover:text-white transition duration-300">Test Image</a></li>
            <li><a href="usecase" className="hover:text-white transition duration-300">Use Cases</a></li>
            <li><a href="contact" className="hover:text-white transition duration-300">Contact us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col ">
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect with Us</h4>
          </div>
          <div className="flex space-x-6 text-gray-400 text-2xl ml-28 ">
            <a href="#" className="hover:text-white transition duration-300"><FaGithub /></a>
            <a href="#" className="hover:text-blue-700 transition duration-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-400 transition duration-300"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Imentiv. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
