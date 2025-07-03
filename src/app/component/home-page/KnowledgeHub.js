'use client';
import React from 'react';
import { SectionWrapper } from '../generalComponent/SectionWrapper';

const KnowledgeHub = () => {
    const resources = [
        {
            title: 'Vivamus Eget Lorem a Dui',
            date: 'September 10, 2020',
            linkText: 'Download Brochure',
        },
        {
            title: 'Vivamus Eget Lorem a Dui',
            date: 'September 10, 2020',
            linkText: 'Download Case Study',
        },
        {
            title: 'Vivamus Eget Lorem a Dui',
            date: 'September 10, 2020',
            linkText: 'Download Whitepaper',
        },
    ];

    return (
        <SectionWrapper customClass={"bg-lightgrey"} >
            {/* Heading */}
            <div className="mb-12 text-center">
                <h4 className="text-themeblue lg:text-lg md:text-sm text-xs  font-normal pb-4">
                    <span className='border-b-2  border-themeblue pb-[2px]'>The Knowledge Hub</span>
                </h4>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-center text-themegreen">Free Valuation Toolkit:<br />
                    <span className=" text-themeblue">Templates & Financial Models</span>
                </h2>
                <p className="mt-1 max-w-xl mx-auto md:text-lg text-sm text-themeblack">
                    Download our Business Valuation Checklist and Financial Projection Template.
                </p>
            </div>

            {/* Cards */}
            <div className="flex w-full flex-col md:flex-row justify-center md:px-22  items-center gap-6">
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className="bg-themeblue text-white rounded-xl w-full shadow-lg transition-transform hover:translate-y-[-4px] h-50 md:h-72 flex"
                    >
                        {/* For desktop: align content at bottom, for mobile: normal flow */}
                        <div className="bg-white text-thebg-themeblue rounded-md pt-4 pl-4 pr-4 pb-8 ml-4 mb-3 mt-4 mr-10 w-full md:self-end">
                            <h3 className=" text-lg text-black">{resource.title}</h3>
                            <p className="text-[10px] text-themegreen mt-1">{resource.date}</p>
                            <a
                                href="#"
                                className="block mt-3 text-themeblue text-sm "
                            >
                                {resource.linkText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>);
};

export default KnowledgeHub;
