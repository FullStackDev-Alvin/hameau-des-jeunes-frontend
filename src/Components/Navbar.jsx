import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative group block py-2 px-4 text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-white border-2 border-white' : 'text-white'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-primary/90 shadow-md transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-10'
      }`}
    >
      <div className="max-w-screen mx-auto flex  items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <NavLink to="/" className="text-white font-bold tracking-tight text-lg md:text-2xl">
          HAMEAU DES JEUNES St. KIZITO MUSHA
        </NavLink>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links */}
        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block absolute top-20 left-0' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row gap-[5px] md:items-center bg-primary md:bg-transparent  md:rounded-none mt-4 md:mt-0 p-4 md:p-0 space-y-2 md:space-y-0">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="relative group flex items-center text-sm text-white py-2 px-4"
              >
                <span className="relative z-10">Hameau Des Jeunes</span>
                <svg
                  className="w-4 h-4 ml-1 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </button>
              {dropdownOpen && (
                <div className="absolute md:left-0 left-20 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200 z-10">
                  <NavLink
                    to="/etsk-musha"
                    className="block px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white"
                    onClick={() => setDropdownOpen(false)}
                  >
                    ETSK Musha
                  </NavLink>
                  <NavLink
                    to="/father-hermann"
                    className="block px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Father Hermann Schulz
                  </NavLink>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/Blogs" className={navLinkStyle}>
                <span className="relative z-10">Blogs</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Gallery" className={navLinkStyle}>
                <span className="relative z-10">Gallery</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contacts" className={navLinkStyle}>
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
