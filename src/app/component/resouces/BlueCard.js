import { SectionWrapper } from "../generalComponent/SectionWrapper";

const cardData = [
    {
        title: "How to Make a Solid Pitch Backed by Real Valuation",
        subtitle: "Master the art of pitching with data-driven valuations.",
        description:
            "Learn how to present your business as a valuable opportunity and attract investors with confidence.",
      },
    {
        title: "Understanding Multiples: What Your Industry Says About You",
        subtitle: "Industry multiples reveal your business’s value in the market.",
        description:
            "Discover how to use multiples to strengthen your valuation and negotiation strategy.",
    },
    {
        title: "Fundraising Strategy: When to Value and How Much to Ask",
        subtitle: "Timing and value are key to fundraising success.",
        description:
            "Learn how to value your business and approach investors for the right amount at the right time.",
    
    },
    {
        title: "Pre-Money vs Post-Money Valuation: Know the Difference",
        subtitle: "Understanding how funding affects ownership.",
        description:
            "Break down funding terms so you can make smart choices in your next raise.",
    },
    {
        title: "Top 5 Valuation Mistakes Founders Make",
        subtitle: "Avoid costly errors when raising capital.",
        description:
            "We highlight common mistakes and how to avoid them in your startup valuation process.",
    
    },
    {
        title: "Investor Ready: What Valuations Say to VCs",
        subtitle: "Position your company with the right numbers.",
        description:
            "VCs read your valuation like a resume—make sure it speaks to growth and returns.",
        },
        {
        title: "Pre-Money vs Post-Money Valuation: Know the Difference",
        subtitle: "Understanding how funding affects ownership.",
        description:
            "Break down funding terms so you can make smart choices in your next raise.",
    },
    {
        title: "Top 5 Valuation Mistakes Founders Make",
        subtitle: "Avoid costly errors when raising capital.",
        description:
            "We highlight common mistakes and how to avoid them in your startup valuation process.",
    
    },
    {
        title: "Investofsfdsfsdfr Ready: What Valuations Say to VCs",
        subtitle: "Position your company with the right numbers.",
        description:
            "VCs read your valuation like a resume—make sure it speaks to growth and returns.",
        },
        {
        title: "Pre-Money vs Post-Money Valuation: Know the Difference",
        subtitle: "Understanding how funding affects ownership.",
        description:
            "Break down funding terms so you can make smart choices in your next raise.",
    },
    {
        title: "Top 5 Valuation Mistakes Founders Make",
        subtitle: "Avoid costly errors when raising capital.",
        description:
            "We highlight common mistakes and how to avoid them in your startup valuation process.",
    
    }
];
  

export default function BlueCard() {
    return (
        <div className="w-full relative bg-lightgrey">
            {/* Top Section */}
            <SectionWrapper customClass="bg-themeblue pb-48 sm:mt-10">
                <div className="text-center max-w-4xl mx-auto pt-10 pb-15">
                    <h2 className="text-themegreen text-3xl md:text-4xl lg:text-6xl mb-4">
                        Insights Hub<br /><span className="text-[#F9F9F9]">Valuation Know-How, Market Trends & Growth Insights</span>
                    </h2>
                    {/* <h1 className="text-3xl lg:text-6xl mb-4 text-white">
                        Valuation Know-How, Market Trends & Growth Insights
                    </h1> */}
                    <p className="text-xs md:text-sm lg:text-xl mb-4 text-white">
                        Welcome to our knowledge center—designed for entrepreneurs, founders, and finance professionals. Discover practical guides, expert tips, and industry updates to help you grow and scale smarter.
                    </p>
                </div>
            </SectionWrapper>

            {/* Cards Grid with Overlap */}
            <div className="relative z-10 -mt-36 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md flex flex-col">
                            {/* Placeholder Image */}
                            <div className="h-40 bg-[#2C234D] w-full rounded-t-lg"></div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col justify-between flex-1">
                                <h3 className="text-themeblue text-base sm:text-lg lg:text-xl mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-themeblack text-sm lg:text-base mb-6">
                                    {card.description}
                                </p>
                                <button className="bg-themegreen text-white px-2 py-2 rounded lg:text-base text-xs hover:bg-teal-500 transition h-10 w-28 lg:mb-5 mb-3">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gray Section placed naturally after content */}
            <section className="bg-lightgrey pt-16 md:pt-20 lg:pt-24 px-5 md:px-20 relative">
                <div className="pb-16 flex justify-center">
                    <button className="bg-themegreen text-white px-6 py-2 rounded lg:text-lg text-xs hover:bg-teal-500 transition">
                        View More
                    </button>
                </div>
            </section>
        </div>
    );
}

