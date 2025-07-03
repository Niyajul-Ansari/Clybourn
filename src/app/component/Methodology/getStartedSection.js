import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function GetStartedSection() {
    return (
        <SectionWrapper  customClass="text-center bg-white">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-themegreen mb-0">
                Get Started Today!
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl text-themeblue mb-4 max-w-3xl mx-auto">
                Pick a plan that fits your needs and gain instant access to industry-leading business valuation insights.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-themeblue md:mb-8 pb-4 max-w-2xl mx-auto">
                Accurate. Fast. Reliable.
            </p>

            {/* Call-to-action */}
            <button
                className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                Schedule A Call
            </button>
        </SectionWrapper>
    );
}
