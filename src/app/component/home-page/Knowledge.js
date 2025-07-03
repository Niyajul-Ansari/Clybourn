'use client';

import React from 'react';
import { SectionWrapper } from '../generalComponent/SectionWrapper';

const blogPosts = [
    {
        title: 'How to Value a Startup',
        summary:
            'DCF vs. Multiples.',
        date: '23 September 2025',
    },
    {
        title: 'Preparing for Fundraising',
        summary:
            'Valuation Best Practices.',
        date: '23 September 2025',
    },
    {
        title: 'Case Study',
        summary:
            'How SaaS Company X Secured \$2M Using Clybourne’s Report.',
        date: '23 September 2025',
    },
];

export default function KnowledgeHubSection() {
    return (
        <SectionWrapper customClass={"bg-lightgrey"}>
            <div className="w-full md:px-22 text-center flex flex-col items-center">
                {/* <p className="text-xl text-[#233977] underline">
                    The Knowledge Hub
                </p> */}
                <h4 className="text-themeblue lg:text-lg md:text-sm text-xs  font-normal mb-4">
                    <span className='border-b-2  border-themeblue pb-[2px]'>The Knowledge Hub</span>
                </h4>
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-themeblue mb-1">
                    Business Valuation Guides & <br className="hidden sm:block" /> Growth
                    Strategies
                </h2>
                <p className="text-lg text-themeblack ">
                    Explore trending topics.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 w-[100%]">
                    {/* First (Large) Card */}
                    <div className="lg:row-span-2 bg-white rounded-lg shadow-md  flex flex-col">
                        <div className="h-64 w-full bg-themeblue rounded-t-lg" />
                        <div className="p-6 text-left flex flex-col justify-between gap-2">
                            <h5 className="md:text-2xl text-lg text-themeblack">
                                {blogPosts[0].title}
                            </h5>
                            <p className="text-sm text-themeblack">{blogPosts[0].summary}</p>
                            {/* <p className="text-xs text-themeblack text-[#CCCCCC]">{blogPosts[0].date}</p> */}
                            <button className="text-sm text-themeblue underline underline-offset-2 hover:opacity-80 w-max">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Second & Third Cards */}
                    {[blogPosts[1], blogPosts[2]].map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md  flex rounded-lg"
                        >
                            <div className="w-40 bg-themeblue rounded-l-lg" />
                            <div className="p-4 w-60 text-left flex flex-col justify-between gap-2 flex-1">
                                <h5 className="md:text-2xl text-lg text-themeblack">
                                    {post.title}
                                </h5>
                                <p className="text-sm text-themeblack">{post.summary}</p>
                                <p className="text-sm text-themeblack text-[#CCCCCC]">{post.date}</p>
                                <button className="text-sm text-themeblue underline underline-offset-2 hover:opacity-80 w-max">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}