import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., token exists in localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    setIsLoggedIn(false);
    /*navigate("/login"); // Redirect to login page*/
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-[#101937] text-white p-7 z-50 shadow-md font-sans">
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

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-[16px] px-6 py-3 rounded-md bg-red-500 text-white font-semibold hover:brightness-90"
            >
              Logout
            </button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
