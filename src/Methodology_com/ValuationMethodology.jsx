import React from "react";

const ValuationSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Top Hero Section */}
            <div className="bg-blue-900 text-white text-center px-5 py-25 md:py-30">
                <h2 className="text-xl md:text-2xl font-semibold text-teal-400">
                    Our Valuation Methodology
                </h2>
                <h1 className="text-2xl md:text-4xl font-bold mt-2">
                    Smart. Transparent. Tailored for You.
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base">
                    At Clybourne, we believe business valuation shouldn’t be a black box.
                    That’s why we use a combination of proven valuation methods, real-time
                    data, and AI-powered insights—so you can understand and trust every number.
                </p>
                <button className="mt-6 bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded text-sm">
                    Schedule A Call
                </button>

                {/* Decorative Diagonal Lines */}
                <div className="hidden md:block absolute right-10 top-12">
                    <div className="space-y-4">
                        <div className="w-28 h-4 bg-teal-400 rotate-45"></div>
                        <div className="w-28 h-4 bg-teal-400 rotate-45"></div>
                        <div className="w-28 h-4 bg-teal-400 rotate-45"></div>
                    </div>
                </div>
            </div>

            {/* Overlapping Cards */}
            <div className=" w-full flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 md:px-8 absolute top-[55%] md:top-[55%] left-1/2 transform -translate-x-1/2">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-left">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                        How We Calculate Your Business Value
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">
                        A Blend of Expertise and Automation
                        <br />
                        We use a hybrid model combining two globally recognized valuation methods,
                        carefully weighted based on your industry, stage, and financial profile to deliver
                        meaningful results for your business.
                    </p>
                    <div className="mt-4 text-sm text-blue-700">
                        <p className="font-semibold">Valuation Methods We Use:</p>
                        <ul className="list-disc ml-5 text-gray-800 mt-1">
                            <li>Discounted Cash Flow (DCF)</li>
                            <li>Comparable Analysis</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-left relative">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                        Tailored Weighting Based on Your Business
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">
                        Not All Businesses Are the Same—<br />
                        So Neither Are Our Models
                        <br />
                        Our platform automatically adjusts the weight assigned to each valuation method,
                        depending on whether you’re a startup, growth-stage company, or mature enterprise.
                        This ensures a personalized and more accurate outcome.
                    </p>
                    {/* <div className="hidden md:block absolute -top-5 -right-5 w-8 h-8 bg-white transform rotate-45 shadow-md"></div> */}
                </div>
            </div>

            {/* Spacer to accommodate card overlap */}
            <div className="mt-[300px] md:mt-[220px]" />
        </section>
    );
};

export default ValuationSection;
