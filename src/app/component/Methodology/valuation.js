import { SectionWrapper } from "../generalComponent/SectionWrapper";

const cardData = [
    {
        title: 'How We Calculate\nYour Business Value',
        subtitle: 'A Blend of Expertise and\nAutomation',
        description:
            "We use a hybrid model combining two globally recognized valuation methods, carefully weighted based on your industry, stage, and financial profile to deliver meaningful results for your business.",
        methods: ["Discounted Cash Flow (DCF)", "Comparable Analysis"],
    },
    {
        title: "Tailored Weighting\nBased on Your Business",
        subtitle: "Not All Businesses Are the Same—So Neither Are Our Models",
        description:
            "Our platform automatically adjusts the weight assigned to each valuation method, depending on whether you're a startup, growth-stage company, or mature enterprise. This ensures a personalized and more accurate outcome.",
        methods: [],
    },
];

export default function ValuationMethodology() {
    return (
        <div className="relative w-full">
            {/* Blue Section */}
            <SectionWrapper customClass="bg-themeblue pb-48 mt-10">
                <div className="text-center max-w-4xl mx-auto lg:pt-10 md:pt-5 pb-10">
                    <h2 className="text-themegreen text-3xl md:text-4xl lg:text-6xl mb-4">
                        Our Valuation Methodology<br /><span className="text-[#F9F9F9]">Smart. Transparent. Tailored for You.</span>
                    </h2>
                    {/* <h1 className="text-3xl lg:text-6xl mb-4 text-white">
                        Smart. Transparent. Tailored for You.
                    </h1> */}
                    <p className="text-xs md:text-sm lg:text-xl mb-4 text-white">
                        Select a pricing option that suits your needs, with customizable valuation parameters and access to expert insights.
                    </p>
                    <button className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                        Schedule A Call
                    </button>
                </div>
            </SectionWrapper>

            {/* Cards Overlapping Both Sections */}
            <div className="absolute -mt-40 left-0 w-full z-10 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto shadow-sm">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg py-8 px-4 md:py-10 md:px-8 lg:py-12 lg:px-10 xl:py-20 xl:px-[60px] rounded-lg"
                        >
                            <h3 className="text-themeblue font-teko text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4">
                                {card.title}
                            </h3>
                            {card.subtitle && (
                                <p className="text-xs md:text-sm xl:text-lg text-themeblack pb-1">{card.subtitle}</p>
                            )}
                            <p className="text-xs md:text-sm xl:text-lg text-themeblack xl:mb-14">{card.description}</p>
                            {card.methods.length > 0 && (
                                <>
                                    <p className="text-xs md:text-sm xl:text-lg text-themeblue pb-6">Valuation Methods We Use:</p>
                                    <ul className="list-disc pl-5 text-xs md:text-sm xl:text-lg  text-themeblack">
                                        {card.methods.map((method, i) => (
                                            <li key={i}>{method}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            
                </div>
            {/* Gray Background Section */}
            <section className="bg-lightgrey xl:pt-64 lg:pt-56 sm:pt-52 md:pt-40 pt-64 pb-80 px-5 md:px-20 z-0 relative border-0 shadow-none">
                {/* Additional content can go here */}
            </section>

        </div>
    );
}
