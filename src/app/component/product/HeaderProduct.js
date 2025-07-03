import Image from "next/image";
import { SectionWrapper } from "../generalComponent/SectionWrapper";
import DashboardImage from "../../../static/images/dashboadImage/image1.png"
import VerticalStickWithBox from "../../component/VerticalStickWithBox"

const cardData = [
    {
        topHeading: "Your Input, Our Intelligence",
        title: <><span className="text-themegreen">Streamline</span><br />Data Collection</>,
        description:
            "Answer simple questions to capture key business details like industry, country of operation, experience, and earnings history. Our intuitive process ensures a hassle-free start.",
    },
    {
        topHeading: "Financial Forecast",
        title: <><span className="text-themegreen">Capture</span><br />Business Performance</>,
        description:
            "Input your latest financial data and projected earnings for the next five years. Our platform evaluates your financial strength and future potential in minutes.",
    },
    {
        topHeading: "Valuation Models",
        title: <><span className="text-themegreen">AI-Powered </span><br />Valuation Inputs</>,
        description:
            "Our system integrates trusted financial sources to deliver accurate valuation parameters, such as multiples and discount rates.",
    },
];
export default function HeaderProduct() {

    return (
        <div className="relative w-full bg-lightgrey">
            {/* Blue Section */}
            {/* Your One-Stop Business Valuation Solution */}
            <SectionWrapper customClass="bg-themeblue pb-48 mt-10">
                <div className="text-center max-w-4xl mx-auto lg:pt-10 md:pt-5 pb-0 sm:pb-4 md:pb-8">
                    <h1 className="text-themegreen text-3xl md:text-4xl lg:text-6xl">
                        How It Works <br /><span className="text-[#F9F9F9]">Your One-Stop Business Valuation Solution</span>
                    </h1>
                    {/* <h1 className="text-3xl lg:text-6xl mb-4 text-white">
                        Your One-Stop Business Valuation Solution
                    </h1> */}
                    <p className="text-xs md:text-sm lg:text-xl mb-4 text-white">
                        We’ve simplified the valuation process to make it seamless and
                    </p>
                    <div className="flex gap-5 justify-center">
                        <button className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                            Schedule A Call
                        </button>
                        <button className="bg-white text-themeblue px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </SectionWrapper>

            {/* Cards Overlapping Both Sections */}
            <div className="relative z-10 -mt-36 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56">
                <div className=" max-w-7xl mx-auto shadow-sm">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg py-8 px-4 md:py-10 md:px-8 lg:py-12 lg:px-10 xl:py-20 xl:px-[60px] rounded-md flex flex-col lg:flex-row gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-28 2xl:mb-32"
                        >
                            <div className="w-[100%] lg:w-[40%] flex gap-14">
                                <VerticalStickWithBox count={index}/>
                                <div>
                                    <p className="text-2xl text-themeblue pb-8">{card.topHeading}</p>
                                    <h3 className="text-themeblue font-teko text-3xl md:text-4xl lg:text-5xl xl:text-6xl pr-6 pb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs md:text-sm xl:text-lg text-themeblack">{card.description}</p>

                                </div>
                            </div>
                            <div className="w-[100%] lg:w-[60%] flex items-center justify-center">
                                <Image
                                    src={DashboardImage}
                                    alt="logo"
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/* Gray Background Section */}
            <section className="bg-lightgrey pt-2 md:pt-3 lg:pt-4 px-5 md:px-20 relative">
                {/* <div className="pb-16 flex justify-center">
                    <button className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                        View More
                    </button>
                </div> */}
            </section>

        </div>
    );
}
