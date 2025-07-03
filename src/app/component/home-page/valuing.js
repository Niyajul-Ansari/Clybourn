import React from 'react';
import { SectionWrapper } from '../generalComponent/SectionWrapper';

export const ValuationApproach = () => {
  const cards = [
    {
      heading: <>Custom Valuation <br />Models</>,
      title: 'Beyond standard\nDCF (Discounted Cash Flow),\nwe use industry-specific methodologies\nfor accuracy.',
      bg: 'bg-white',
      textColor: 'text-[#1C2E70]',
      iconBg: 'bg-[#1C2E70]',
      button: true,
    },
    {
      heading: <>Trusted Data <br />Sources</>,
      title: 'Leverage verified financial databases and market benchmarks for reliable insights.',
      bg: 'bg-white',
      textColor: 'text-[#1C2E70]',
      iconBg: 'bg-[#1C2E70]',
      button: true,
    },
    {
      heading: <>Competitive <br />Benchmarking </>,
      title: ' See how your business stacks up against competitors in your sector.',
      bg: 'bg-white',
      textColor: 'text-[#1C2E70]',
      iconBg: 'bg-[#1C2E70]',
      button: true,
    },
    {
      heading: <>Investor-Ready <br />Reports</>,
      title: 'Detailed PDF reports tailored for fundraising, acquisitions, or exit strategies.',
      bg: 'bg-white',
      textColor: 'text-[#1C2E70]',
      iconBg: 'bg-[#1C2E70]',
      button: true,
    },
  ];

  return (
    <SectionWrapper customClass={"bg-themeblue text-white"}>
      <div className="w-full mx-auto text-center">
        <p className="lg:text-lg md:text-sm text-xs mb-4"><span className="border-b border-white">Our Valuation Approach</span></p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-1">Valuing More Than Numbers:<br/><span className='text-themegreen text-3xl md:text-4xl lg:text-6xl'>Data-Driven & Humanized Methodology</span></h2>
        <p className="text-sm md:text-lg  mx-auto mb-10">
          We make valuations accessible, accurate, and actionable for businesses globally. 
        </p>
        {/* bg-[#1FA9A4] */}
        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-8 ${card.bg} ${card.textColor} flex flex-col gap-1 md:h-60 h-56 w-full shadow-md transform transition duration-300 hover:translate-y-[-4px] hover:bg-[#1FA9A4]`}
            >
              {/* Icon - stays visible */}
              <div
                className={`w-10 h-10 rounded-md ${card.iconBg} flex items-center justify-center mb-2 transition-transform duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-6 text-themegreen transform rotate-[-180deg]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 7l-10 10M17 17H7V7"
                  />
                </svg>
              </div>

              {/* Heading - shown by default, hidden on hover */}
              <div className="transition-opacity duration-300 group-hover:opacity-0 pt-2">
                <p className="text-xl lg:text-xl xl:text-2xl text-left">{card.heading}</p>
              </div>

              {/* Description + Button - hidden by default, shown on hover */}
              <div className="absolute left-8 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto text-white text-left">
                <p className="mt-3 text-[13px] 2xl:text-sm">
                  {card.title}
                </p>

                {card.button && (
                  <div className="mt-4">
                    <button className="border shadow-gray-200 text-[13px] 2xl:text-sm border-gray-100 rounded-xl px-3 py-2 hover:bg-white hover:text-themegreens transition duration-300 hover:text-themegreen">
                      Know More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}



        </div>
      </div>
    </SectionWrapper>
  );
};

