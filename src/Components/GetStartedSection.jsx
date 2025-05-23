// GetStartedSection.jsx
import React from "react";

const GetStartedSection = () => {
    return (
        <section className="relative bg-white text-center px-4 py-20 md:py-28 overflow-hidden">
            {/* Diagonal Decorative Lines */}
            {/* <div className="hidden md:block absolute left-0 top-8 md:top-16 z-0">
                <div className="space-y-6 rotate-45">
                    <div className="w-24 h-5 bg-teal-500"></div>
                    <div className="w-24 h-5 bg-teal-500"></div>
                </div>
            </div> */}

            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-600">
                    Get Started Today!
                </h2>
                <p className="mt-2 text-sm md:text-base text-blue-900 max-w-xl mx-auto">
                    Pick a plan that fits your needs and gain instant access to industry-leading business valuation insights.
                </p>
                <p className="mt-4 text-lg md:text-xl font-medium text-blue-900">
                    Accurate. Fast. Reliable.
                </p>
                <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded text-sm">
                    Schedule A Call
                </button>
            </div>
        </section>
    );
};

export default GetStartedSection;
