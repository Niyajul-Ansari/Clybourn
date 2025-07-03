'use client';
import React from 'react';
import { SectionWrapper } from '../generalComponent/SectionWrapper';

export default function Footer() {
    return (
        <>
            {/* Contact Info Top Bar */}
            <div className="bg-teal-600 text-white py-4 lg:text-2xl text-center md:text-sm text-xs">
                Email: <a href="mailto:help@clybourne.com" className="underline">help@clybourne.com</a> &nbsp; | &nbsp;
                Phone Support: <a href="tel:+12223450000" className="underline">+1 222-345-0000</a>
            </div>

            {/* Main Footer */}
            <SectionWrapper customClass='bg-themeblue text-white'>
                {/* <footer className="  py-10 px-8 sm:px-8 md:px-16"> */}
                <div className="flex  gap-8 md:flex-row  flex-col">
                    {/* Branding Section */}
                    <div className='lg:w-[40%] w-[100%] pr-10 lg:pr-12 xl:pr-16 2xl:pr-20'>
                        <h2 className="text-sm md:text-lg lg:text-[39px] text-white mb-6 font-interFont">Clybourne</h2>
                        <p className="lg:text-[15px] text-xs text-gray-300 font-inter">
                            Clybourne is a smart, AI-powered platform that simplifies business valuation for startups and growing companies. It delivers accurate, real-time reports using proven methodologies and global data—so you can make confident financial decisions with ease.
                        </p>
                    </div>

                    {/* About Links */}
                    <div className='lg:w-[20%] w-[100%]'>
                        <h3 className="lg:text-lg text-sm text-white mb-4 ">About</h3>
                        <ul className="space-y-2 lg: lg:text-[16px] text-sm text-gray-300 ">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Business</a></li>
                            <li><a href="#" className="hover:text-white">Partners</a></li>
                            <li><a href="#" className="hover:text-white">Faq</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">All Blog</a></li>
                        </ul>
                    </div>

                    {/* Navigation Links */}
                    <div className='lg:w-[20%] w-[100%]'>
                        <h3 className="lg:text-lg text-sm text-white mb-4 ">Navigation</h3>
                        <ul className="space-y-2  lg:text-[16px] text-gray-300 ">
                            <li><a href="/product" className="hover:text-white">Product</a></li>
                            <li><a href="/methodology" className="hover:text-white">Methodology</a></li>
                            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
                            <li><a href="/resources-page" className="hover:text-white">Resources</a></li>
                            <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className='lg:w-[20%] w-[100%]'>
                        <h3 className="lg:text-lg text-sm text-white mb-4 ">Subscribe</h3>
                        <p className="text-base text-gray-300 mb-4">
                            Sign up for our mailing list to get latest updates and offers
                        </p>
                        <div className="flex rounded  bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-sm text-black focus:outline-none"
                            />
                            <button className="bg-teal-500 px-4 py-2 text-white flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 12H8m0 0l4-4m-4 4l4 4"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>


                </div>
                {/* </footer> */}

                {/* Social Icons */}
                <div className="flex flex-col pt-10  ">
                    <h3 className="lg:text-base text-xs text-white mb-4 md:text-left ">
                        Follow Us
                    </h3>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between  md:items-start">
                        <div className="flex gap-4 ">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-telegram-plane"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
