'use client';
import Image from 'next/image';
import { useState } from 'react';
import logoImage from "../../../static/images/logo.png";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 py-5 sm:py-6 lg:py-8 px-10 sm:px-16  md:px-24 lg:px-32  xl:px-36  2xl:px-56 flex justify-between items-center shadow-md">
      {/* Logo */}
      <a href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            src={logoImage}      
            alt="logo"
            // width={140}             
            // height={40}           
            className="h-10 w-auto md:h-6 lg:h-8 xl:h-10"
            priority              
          />
        </div>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4 xl:gap-8">
        <ul className="flex gap-4 md:gap-3 lg:gap-6 xl:gap-8 text-sm sm:text-xs  xl:text-sm 2xl:text-lg  font-medium text-black">
          <li><a href="/product" className="hover:text-blue-950">Product</a></li>
          <li><a href="/methodology" className="hover:text-blue-950">Methodology</a></li>
          <li><a href="/pricing" className="hover:text-blue-950">Pricing</a></li>
          <li><a href="/about-us" className="hover:text-blue-950">About Us</a></li>
          <li><a href="/resources-page" className="hover:text-blue-950">Resources</a></li>
          <li><a href="/contact-us" className="hover:text-blue-950">Contact Us</a></li>
        </ul>
        <button className="ml-1 text-sm sm:text-xs  xl:text-sm 2xl:text-lg border border-gray-500 px-2 lg:px-4 py-1.5 rounded hover:bg-lightgrey transition text-black">
          Login / Signup
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t md:hidden z-50 transition-all duration-300">
          <ul className="flex flex-col items-start  gap-4 py-4 text-base font-medium text-black px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56 ">
            <li><a href="/product" className="hover:text-blue-950">Product</a></li>
            <li><a href="/methodology" className="hover:text-blue-950">Methodology</a></li>
            <li><a href="/pricing" className="hover:text-blue-950">Pricing</a></li>
            <li><a href="/about-us" className="hover:text-blue-950">About Us</a></li>
            <li><a href="/resources-page" className="hover:text-blue-950">Resources</a></li>
            <li><a href="/contact-us" className="hover:text-blue-950">Contact Us</a></li>
            <button className="mt-2 border border-gray-500 px-4 py-1.5 rounded hover:bg-lightgrey transition">
              Login / Signup
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};
