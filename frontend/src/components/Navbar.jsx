"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// react icons
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CiMail, CiMenuFries } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbListDetails, TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative px-6 py-1 bg-white shadow-md z-10">
      {/* Logo */}
      <Link to="/">
        <img
          src="https://i.ibb.co.com/rK6KHcNd/g-rentify.png"
          alt="logo"
          className="w-[155px]"
        />
      </Link>

      {/* Nav Links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        {/* Other Nav Items */}
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <AiOutlineFire className="text-[1.1rem]" />
          Electronics
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <BiSupport className="text-[1.1rem]" />
          Clothing
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/contactus" className="flex items-center">
            <CiMail className="text-[1.1rem]" />
            Home Goods
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/about" className="flex items-center">
            <TbListDetails className="text-[1.1rem]" />
            Summar Style
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <BiSupport className="text-[1.1rem]" />
          Back to School
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <BiSupport className="text-[1.1rem]" />
          Local Crafts
        </li>
      </ul>

      {/* Account Menu */}
      <div className="relative">
        <button
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          className="flex items-center gap-2"
        >
          <FiUser className="text-[1.5rem]" />
          <IoIosArrowDown
            className={`transition-all duration-300 ${
              accountMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {accountMenuOpen && (
          <div className="bg-white rounded-md absolute top-[40px] right-0 p-3 shadow-lg transition-all duration-300">
            <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              <FiUser /> View Profile
            </p>
            <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
              <IoSettingsOutline /> Settings
            </p>
            <p className="flex items-center gap-2 p-2 text-red-600 hover:bg-gray-100 cursor-pointer">
              <TbLogout2 /> Logout
            </p>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="md:hidden"
      >
        <CiMenuFries className="text-[2rem]" />
      </button>

      {mobileSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg p-5 transition-all duration-300">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute top-2 right-2 text-gray-600"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-4 mt-6">
            <li className="cursor-pointer hover:text-[#3B9DF8]">Gadgets</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Features</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Support</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">Contact</li>
            <li className="cursor-pointer hover:text-[#3B9DF8]">About Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
