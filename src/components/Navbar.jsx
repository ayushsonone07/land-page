import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-black font-semibold"
      : "text-gray-700 hover:underline decoration-4 hover:duration-500 ease-in-out font-semibold";

  const navItemClass = ({ isActive }) =>
    `relative inline-block font-semibold transition-colors duration-300
      ${isActive ? "text-black" : "text-gray-700 hover:text-black"}
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-black
      after:transition-all after:duration-300
      hover:after:w-full
      ${isActive ? "after:w-full" : ""}`;
      

  return (
    <nav className="bg-white border-b shadow-sm w-screen fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-12 gap-4 items-center">
        {/* Logo */}
        <div className="col-span-10 md:col-span-2 flex justify-start items-center">
          <NavLink to="/" className={linkClasses}>
            <h1 className="text-xl font-bold text-indigo-700">
              Landing Page
            </h1>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:col-span-7 gap-14 justify-center items-center text-sm">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About Us</NavLink>
          <NavLink to="/services" className={navItemClass}>Pricing</NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:col-span-3 justify-end items-end">
          <NavLink to="https://wa.me/+916232933046">
            <button className="flex items-center gap-2 bg-[#4867fa] hover:bg-blue-700 text-white font-semibold text-base px-5 py-3 rounded-lg shadow-md transition-colors duration-200">
              <FaWhatsapp size={23} /> <span className="text-md">Book Free Demo</span>
            </button>
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden col-span-2 relative w-8 h-8"
          aria-label="Toggle menu"
        >
          {/* Line 1 */}
          <span
            className={`absolute left-0 top-2 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
              open ? "rotate-45 top-4" : ""
            }`}
          />
          {/* Line 2 */}
          <span
            className={`absolute left-0 top-4 w-full h-0.5 bg-gray-800 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Line 3 */}
          <span
            className={`absolute left-0 top-6 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
              open ? "-rotate-45 top-4" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t flex flex-col">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b hover:bg-gray-50"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b hover:bg-gray-50"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b hover:bg-gray-50"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-3 hover:bg-gray-50"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
