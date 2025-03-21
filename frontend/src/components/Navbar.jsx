"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const cartRef = useRef(null);

  // Close cart sidebar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartSidebarOpen(false);
      }
    }

    if (cartSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartSidebarOpen]);

  return (
    <nav className="flex items-center justify-between w-full relative px-10 py-3 bg-white shadow-md z-10 mb-4">
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
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          Electronics
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          Clothing
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/contactus" className="flex items-center">
            Home Goods
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/about" className="flex items-center">
            Summer Style
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/bike" className="flex items-center">
            Bikes & Accessories
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
          <Link to="/about" className="flex items-center">
            Local Craft
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Account Menu */}
        <div className="relative">
          {loggedIn ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            >
              <FiUser />
              <IoIosArrowDown />
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 cursor-pointer font-bold hover:text-[#3B9DF8]"
            >
              Login
            </Link>
          )}
          {accountMenuOpen && loggedIn && (
            <div className="bg-white rounded-md absolute top-[40px] right-0 p-3 shadow-lg">
              <p className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                <FiUser /> Profile
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

        {/* Cart Icon */}
        <div
          className="relative cursor-pointer"
          onClick={() => setCartSidebarOpen(true)}
        >
          <ShoppingCart className="text-[1.8rem]" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            3
          </span>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="md:hidden"
        >
          <Menu className="text-[2rem]" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg p-5">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute top-2 right-2"
          >
            <X className="text-gray-600" />
          </button>
          <ul className=" gap-[16px] text-[1rem] text-[#424242] flex flex-col mt-10">
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              Electronics
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              Clothing
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              <Link to="/contactus" className="flex items-center">
                Home Goods
              </Link>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              <Link to="/about" className="flex items-center">
                Summer Style
              </Link>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              <Link to="/about" className="flex items-center">
                Back to School
              </Link>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-[#3B9DF8]">
              <Link to="/about" className="flex items-center">
                Local Craft
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartSidebarOpen && (
        <div
          ref={cartRef}
          className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg p-5"
        >
          <button
            onClick={() => setCartSidebarOpen(false)}
            className="absolute top-2 right-2"
          >
            <X className="text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
          <div className="flex flex-col space-y-3">
            <p>Item 1 - $20</p>
            <p>Item 2 - $15</p>
            <p>Item 3 - $30</p>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <hr className="w-full border-black" />
            <div className="flex justify-center items-center gap-2 h-16">
              <span className="text-lg font-bold">Subtotal:</span>
              <span className="text-lg font-semibold">$65</span>
            </div>
            <hr className="w-full border-black" />
          </div>
          <div className="mt-5 flex gap-2 justify-between">
            <Link
              to="/cart"
              className="w-1/2 h-16 text-white px-4 rounded cursor-pointer bg-slate-900 hover:bg-slate-800 flex items-center justify-center font-semibold"
            >
              View Cart
            </Link>
            <Button className="w-1/2 h-16 text-white px-4 rounded cursor-pointer">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
