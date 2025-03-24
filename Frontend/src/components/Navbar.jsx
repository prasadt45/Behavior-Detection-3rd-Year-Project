import {Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-[#101937] text-white p-7 z-50 shadow-md font-sans ">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-lg">
        
        {/* Left Side - Project Name */}
        <Link className="text-[26px] font-bold" to="/">
         
         
          Body Posture Detection
        
        </Link>

        {/* Navbar Links */}
        <nav className="hidden md:flex gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-[19px] font-medium hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/usecase" 
            className={({ isActive }) =>
              `text-[19px] font-medium hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Use Case
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              `text-[19px] font-medium hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              `text-[19px] font-medium hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Login & Register Buttons */}
        <div className="flex gap-4">
          <NavLink to="/login">
            <button className="text-[16px] px-6 py-3 rounded-md bg-[#0057ff] text-white font-semibold hover:brightness-90">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="text-[16px] px-6 py-3 rounded-md bg-[#0057ff] text-white font-semibold hover:brightness-90">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
