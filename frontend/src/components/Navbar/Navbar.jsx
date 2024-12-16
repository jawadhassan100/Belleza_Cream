import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-4 sm:px-8 lg:px-16 bg-purple-500">
        {/* Left: Logo */}
        <div className="text-2xl font-bold md:text-[28px] lg:text-[32px] text-white">
          <Link to="/">BELLEZA</Link>
        </div>

        {/* Center: Menu Items */}
        <div className="hidden md:flex lg:flex space-x-8 text-white font-semibold text-lg items-center">
          <Link to="/" className="hover:text-purple-900 transition duration-300">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-purple-900 transition duration-300">
            About Us
          </Link>
          <Link to="/products" className="hover:text-purple-900 transition duration-300">
            Products
          </Link>
          <Link to="/contact-us" className="hover:text-purple-900 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex items-center gap-5">
          <Link to="/cart" className="text-white  transition duration-300">
            <FaShoppingCart size={24} />
          </Link>

          {/* Hamburger Menu Button for Small Screens */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <CiMenuFries className="text-2xl text-white" />
          </button>
        </div>
      </div>

      {/* Sliding Menu for Smaller Screens */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-purple-400 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
          <TfiClose className="text-3xl" />
        </button>

        <ul className="list-none flex flex-col gap-12 mt-24 items-center font-semibold text-white text-xl">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
