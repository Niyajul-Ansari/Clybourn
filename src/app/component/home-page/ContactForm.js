'use client';
import React from 'react';
import { SectionWrapper } from '../generalComponent/SectionWrapper';

const ContactForm = () => {
    return (
        <SectionWrapper customClass="bg-white" >
            {/* Header */}
            <div className="text-center">
                                <h4 className="text-themeblue lg:text-lg md:text-sm text-xs  font-normal pb-4">
                    <span className='border-b-2  border-themeblue pb-[2px]'>Contact Us</span>
                </h4>
                {/* <p className="text-lg text-themeblue font-medium">Contact Us</p> */}
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-themeblue">Need Help? <br /><span className='text-themegreen'>Let’s Simplify Your Valuation Journey</span></h2>
                {/* <h2 className="text-3xl md:text-4xl lg:text-6xl text-themegreen mt-1">
                    Let’s Simplify Your Valuation Journey
                </h2> */}
                <p className="mt-1 mb-12 text-lg text-themeblue">
                    Reach our experts for support or start your $109 valuation now.
                </p>
            </div>

            {/* Form */}
            <form className="max-w-4xl mx-auto px-4 grid gap-4 text-[11px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#373743] ">
                    <input type="text" placeholder="First Name*" className="form-input border-1 rounded-lg px-4 py-2 border-gray-500 bg-[#f5f5f5] outline-none" />
                    <input type="text" placeholder="Company Name*" className="form-input border-1 rounded-lg px-4 py-2 border-gray-500 bg-[#f5f5f5] outline-none" />
                    <input type="text" placeholder="Last Name*" className="form-input border-1 rounded-lg px-4 py-2 border-gray-500 bg-[#f5f5f5] outline-none" />
                    <input type="email" placeholder="E-mail*" className="form-input border-1 rounded-lg px-4 py-2 border-gray-500 bg-[#f5f5f5] outline-none" />
                </div>
                <textarea
                    rows="5"
                    placeholder="Message"
                    className="form-input resize-none col-span-full text-themeblack border-1 rounded-lg px-4 py-2 border-gray-500 bg-[#f5f5f5] outline-none"
                />
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        className="bg-themegreen text-white px-8 py-2 rounded-md hover:bg-teal-700  transition text-base"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Contact Info Footer */}
            {/* <div className="bg-teal-600 text-white text-center py-4 text-sm">
                Email: <a href="mailto:help@clybourne.com" className="underline">help@clybourne.com</a> &nbsp; | &nbsp;
                Phone Support: <a href="tel:+12223450000" className="underline">+1 222-345-0000</a>
            </div> */}
        </SectionWrapper>
    );
};

export default ContactForm;
