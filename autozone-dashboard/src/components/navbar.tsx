import React, { useState } from "react";
import { FiMenu, FiX, FiStar, FiMapPin, FiUser } from "react-icons/fi";
import Logo from "../images/Logo.png";

import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black w-full fixed top-0 pl-8 z-50 ">
        <div className="w-full navbar-container ">
          <div className="flex items-center justify-between h-16">

            {/* Left: Hamburger (for mobile) */}
            <div className="flex-1 flex bg-black items-center justify-start md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Open Menu"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <img src={Logo} alt="Logo" className="h-6 w-auto object-contain" />
            </div>

            {/* Right: Icons */}
            <div className="flex-1 flex items-center justify-end ">
              {/* Icons for larger screens */}
              <div className="nav-icons">
                <FiStar size={10} />
                <FiMapPin size={10} />
                <FiUser size={10}/>
                 <Link to="/login" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200">
                    Login
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Drawer (mobile only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-6 space-y-6">

          <div className="text-lg font-semibold">Menu</div>
          <div className="flex items-center gap-2">
            <FiStar />
            <span>Favorites</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>Location</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUser />
            <span>Login</span>
          </div>

          <Sidebar isOpen={menuOpen} onClose={toggleMenu} />
          {/* Add links or other content here */}
          {/* Links */}

        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
