import { SectionWrapper } from "../generalComponent/SectionWrapper";
import { FaCheck, FaChartLine, FaGem } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

const plans = [
    {
        icon: <LuPackageOpen className="text-themegreen lg:text-4xl text-3xl" />,
        title: "Business Owner Plan",
        subtitle: "Limited Time Access",
        features: [
            "2 valuation methods included",
            "Industry research for WACC calculation",
            "Trusted data sources & access to downloadable PDF report",
            "1 modification allowed within 48 hours after the report delivered",
            "Advanced financial projection support"
        ],
        price: "$109",
        cta: "BUY NOW"
    },
    {
        icon: <FaChartLine className="text-themegreen lg:text-4xl text-3xl" />,
        title: "Business Owner Plus Plan",
        subtitle: "Extended Access",
        features: [
            "All features included in Business Owner Plan",
            "Additionally, get real time support from the experts to fill your financial results and projections"
        ],
        price: "$159",
        cta: "BUY NOW"
    },
    {
        icon: <FaGem className="text-themegreen lg:text-4xl text-3xl" />,
        title: `Advisor Plan`,
        subtitle: "Bulk Valuation for Professionals",
        features: [
            "All features included in Business Owner Plan",
            "Customizable report packages",
            "Choose the number of reports and access days",
            "Bulk discounts available",
            "Ideal for financial advisors, investors, and consultants"
        ],
        dropdowns: ["Nos. of Reports", "Nos. of Access Days", "Price to Pay"],
        cta: "TALK TO US"
    }
];

export default function ValuationMethodology() {
    return (
        <div className="relative w-full bg-lightgrey">
            {/* Top Section */}
            <SectionWrapper customClass="bg-themeblue pb-48 mt-10">
                <div className="text-center max-w-4xl mx-auto pt-10 pb-24">
                    <h2 className="text-themegreen text-3xl md:text-4xl lg:text-6xl mb-4">
                        Buy Now <br/><span className="text-[#F9F9F9]">Choose the Right Valuation Plan for You</span>
                    </h2>
                    <p className="text-xs md:text-sm lg:text-xl mb-4 text-white">
                        Select a pricing option that suits your needs, with customizable valuation parameters and access to expert insights.
                    </p>
                    <button className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                        Schedule A Call
                    </button>
                </div>
            </SectionWrapper>

            {/* Pricing Cards */}
            <div className="relative w-full z-10 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56 -mt-56">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 xl:gap-10">
                    {plans.map((plans, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md ring-2 ring-gray-200 px-6 py-6 xl:px-10 xl:py-10 md:px-7 rounded-xl text-center relative flex flex-col"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="rounded-full bg-white p-5 shadow-lg">
                                    <div className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 flex items-center justify-center rounded-full border-8 border-gray-200">
                                        {plans.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-themegreen text-xl md:text-2xl lg:text-[27px] mb-2 px-7">
                                {plans.title}
                            </h3>

                            {/* Horizontal line */}
                            <hr className="border-t-2 border-gray w-[64%] mx-auto mb-4" />

                            {/* Subtitle */}
                            <p className="text-themeblue text-xs md:text-sm mb-4">
                                {plans.subtitle}
                            </p>

                            {/* Features */}
                            <ul className="text-xs lg:text-base text-black text-left mb-4 md:mb-16 space-y-2 flex-1">
                                {plans.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaCheck className="text-themegreen mt-1 min-w-[16px] h-4 w-4" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Dropdowns if present */}
                            {plans.dropdowns && (
                                <div className="space-y-2 mt-4 mb-8">
                                    {plans.dropdowns.map((drop, i) => (
                                        <select
                                            key={i}
                                            className="w-full border border-gray-300 p-2 rounded lg:text-sm text-xs outline-none"
                                        >
                                            <option>{drop}</option>
                                        </select>
                                    ))}
                                </div>
                            )}

                            {/* Bottom Price & CTA */}
                            <div className="mt-auto">
                                {plans.price && (
                                    <div className="text-xl md:text-2xl lg:text-[43px] text-themeblue mb-8">
                                        {plans.price}
                                        <span className="text-themeblue text-lg lg:text-3xl"> /Report</span>
                                    </div>
                                )}
                                <button className="bg-themegreen text-white py-2 px-6 rounded hover:bg-teal-600 transition">
                                    {plans.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Background Section */}
            <section className="bg-lightgrey md:pt-16 md:pb-12 pt-0 pb-24 px-5 md:px-20 z-0 relative">
                {/* Additional content can go here */}
            </section>
        </div>
    );
}

