import React from "react";
import logo from "../assets/Vector.svg"

const Header = () => {
    return (
        <header className="w-full border-b shadow-sm">
            <div className="w-full mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Left: Logo and Text */}
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Clybourne Logo"
                        className="w-45 h-15"
                    />
                    {/* <div className="leading-tight">
                        <h1 className="text-xl font-semibold text-gray-900">Clybourne</h1>
                        <p className="text-xs text-gray-500">Valuation Made Simple</p>
                    </div> */}
                </div>

                {/* Navigation & Button */}
                <div className="hidden lg:flex items-center gap-8 text-sm xl:text-lg text-gray-700">
                    <a href="#" className="hover:text-blue-600 transition">Product</a>
                    <a href="#" className="hover:text-blue-600 transition">Methodology</a>
                    <a href="#" className="hover:text-blue-600 transition">Pricing</a>
                    <a href="#" className="hover:text-blue-600 transition">About Us</a>
                    <a href="#" className="hover:text-blue-600 transition">Resource</a>
                    <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
                    <button className="border px-4 py-1 rounded hover:bg-gray-100 transition">
                        Login/Sign Up
                    </button>
                </div>

                {/* Tablet View */}
                <div className="hidden md:flex lg:hidden items-center gap-4">
                    <button className="border px-3 py-1 rounded text-sm hover:bg-gray-100 transition">
                        Login
                    </button>
                    <button className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
