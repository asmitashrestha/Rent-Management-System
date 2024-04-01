import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/rentlogo.png'
const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-64 bg-gray-950 rounded-r-xl text-white h-full fixed top-0 left-0 z-50">
      <div className="p-4">
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4 6h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4zm0 5h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4zm0 5h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z"
              fill="white"
            />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="relative top-2">
            <img src={Logo} alt="Logo" className="p-3 rounded-full h-24 w-24"/>
          </div>
          <nav className="mt-7 font-serif font-semibold md:text-lg">
            <ul>
              <li>
                <Link
                  to="/my-floor"
                  className="block py-2 px-4 hover:bg-stone-900 rounded transition duration-300 mb-1"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/building-details"
                  className="block py-2 px-4 hover:bg-stone-900 transition duration-300 mb-1"
                  onClick={toggleMenu}
                >
                  Add Floor
                </Link>
              </li>
              <li>
                <Link
                  to="/floor-summary"
                  className="block py-2 px-4 hover:bg-stone-900 transition duration-300 mb-1"
                  onClick={toggleMenu}
                >
                  Floor Rent
                </Link>
              </li>
              <li>
                <Link
                  to="/add-payment"
                  className="block py-2 px-4 hover:bg-stone-900 transition duration-300 mb-1"
                  onClick={toggleMenu}
                >
                  Add Payment
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
