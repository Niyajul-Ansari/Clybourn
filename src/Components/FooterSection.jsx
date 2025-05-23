import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
    return (
        <footer className="bg-blue-900 text-white relative overflow-hidden pt-16">
            {/* Decorative Diagonal Lines */}
            {/* <div className="absolute left-0 top-0 hidden md:block z-0">
                <div className="space-y-4 rotate-45">
                    <div className="w-28 h-5 bg-teal-500"></div>
                    <div className="w-28 h-5 bg-teal-500"></div>
                </div>
            </div> */}

            {/* Contact Form */}
            <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
                <p className="text-sm uppercase text-blue-300">Contact Us</p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">Need Help?</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-teal-400 mt-1">
                    Let’s Simplify Your Valuation Journey
                </h3>
                <p className="mt-2 text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
                    Reach out to our team for questions, support, or to get started—we’re here to help.
                </p>

                <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-3 rounded text-white border border-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded text-white border border-white "
                    />
                    <input
                        type="text"
                        placeholder="Website"
                        className="p-3 rounded text-white border border-white md:col-span-1"
                    />
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="p-3 rounded text-white border border-white md:col-span-3"
                    />
                    <div className="md:col-span-3 text-center">
                        <button
                            type="submit"
                            className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>

            </div>

            {/* Contact Details */}
            <div className="bg-blue-950 mt-16 py-8 px-4 md:px-16 text-sm text-white">
                <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <FaEnvelope className="mb-2 text-xl text-teal-400" />
                        <p>info@clybourne.com</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <FaMapMarkerAlt className="mb-2 text-xl text-teal-400" />
                        <p>
                            19, 12th Floor, Tower B, Emaar Digital Green<br />
                            Sector 61, Gurgaon - 122011
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <FaPhoneAlt className="mb-2 text-xl text-teal-400" />
                        <p>+91-124-1234567890</p>
                    </div>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="bg-blue-950 border-t border-blue-800 text-xs flex flex-col md:flex-row justify-between items-center px-4 py-4">
                <p className="text-blue-300">Copyright © 2025 Clybourne</p>
                <div className="flex space-x-4 mt-2 md:mt-0 text-white">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
                <div className="mt-2 md:mt-0 text-blue-300">
                    <a href="#" className="hover:underline mr-4">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
