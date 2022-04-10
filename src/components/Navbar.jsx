import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center p-4 bg-[#43919B] text-gray-300">
      <div className="">
        <img src={Logo} alt="logo image" style={{ width: "100px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Article</li>
        <li>Galery</li>
        <li>About</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#43919B] flex flex-col justify-center items-center"
        }
      >
        <li onClick={handleClick} className="py-6 text-4xl">
          Home
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          Article
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          Galery
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          About
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
