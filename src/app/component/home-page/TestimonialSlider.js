"use client";

import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { SectionWrapper } from "../generalComponent/SectionWrapper";

const testimonials = [
    {
        name: "Jane Doe",
        title: "Tech Startup Founder",
        image: "https://i.pravatar.cc/100?img=1",
        quote:
            "Who can receive the hypnosis and shame of a yogi if he has the fraternal afterlife of the sun.",
    },
    {
        name: "Steve Jobs",
        title: "Co-Founder at Apple",
        image: "https://i.pravatar.cc/100?img=2",
        quote:
            "Innovation distinguishes between a leader and a follower.",
    },
    {
        name: "Elon Musk",
        title: "CEO at SpaceX",
        image: "https://i.pravatar.cc/100?img=3",
        quote:
            "I think it is possible for ordinary people to choose to be extraordinary.",
    },
    {
        name: "Bill Gates",
        title: "Founder at Microsoft",
        image: "https://i.pravatar.cc/100?img=4",
        quote:
            "Don't compare yourself with anyone in this world... if you do so, you are insulting yourself.",
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    // Responsive visible testimonials
    const getVisibleTestimonials = () => {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const nextIndex = (currentIndex + 1) % testimonials.length;

        if (typeof window !== "undefined" && window.innerWidth < 768) {
            // Mobile: only center card
            return [
                { ...testimonials[currentIndex], position: "center" },
            ];
        }

        return [
            { ...testimonials[prevIndex], position: "left" },
            { ...testimonials[currentIndex], position: "center" },
            { ...testimonials[nextIndex], position: "right" },
        ];
    };

    return (
        <SectionWrapper customClass={"bg-lightgrey"}>
            <div className="max-w-6xl mx-auto">
                {/* Top Heading Section */}
                <div className="text-center mb-12">
                    <h4 className="text-themeblue lg:text-lg md:text-sm text-xs  font-normal pb-4">
                        <span className='border-b-2  border-themeblue pb-[2px]'>The Knowledge Hub</span>
                    </h4>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl text-themeblue">
                        Hear From 5,000+ Satisfied<br className="hidden sm:block" />Clients
                    </h2>
                    <p className="md:text-lg text-sm text-themeblack max-w-2xl mx-auto mt-1">
                        “Clybourne’s report helped us secure investor funding in days—not weeks.”
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="flex items-center justify-between gap-4">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="w-10 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#1C2E70] text-gray-600 hover:text-[#1C2E70] hover:scale-110 transition duration-300 shadow-sm"
                    >
                        &#8249;
                    </button>

                    {/* Cards */}
                    <div className="flex gap-4 md:gap-6 w-full justify-center items-center transition-all duration-500">
                        {getVisibleTestimonials().map((item, index) => {
                            const baseStyle =
                                "bg-white rounded-xl shadow-md px-6 py-8 w-[90%] sm:w-[80%] md:w-[30%] text-center transition-all duration-500 transform";
                            let positionClass = "";
                            let scaleClass = "";

                            if (item.position === "center") {
                                positionClass = "z-20 scale-105";
                                scaleClass = "shadow-xl";
                            } else {
                                positionClass = "opacity-50 scale-95 hidden md:block";
                                scaleClass = "shadow-md";
                            }

                            return (
                                <div
                                    key={index}
                                    className={`${baseStyle} ${positionClass} ${scaleClass} px-8`}
                                >
                                    <FaQuoteLeft
                                        className={`mx-auto mb-4 text-2xl ${item.position === "center"
                                            ? "text-themegreen"
                                            : "text-themeblack"
                                            }`}
                                    />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <p className="mb-6 text-sm text-themeblack italic">
                                        {item.quote}
                                    </p>
                                    <p className="text-xs text-themeblack pt-10">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-themeblack italic">{item.title}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="w-10 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-themeblue text-themeblack hover:text-themebluehover:scale-110 transition duration-300 shadow-sm"
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TestimonialCarousel;
