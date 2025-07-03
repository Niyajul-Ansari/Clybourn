import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function TrustedBy() {
  return (
    <SectionWrapper customClass="bg-white">
      <div className="">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-7xl text-themeblue mb-1">
            Trusted by Industry Leaders
          </h2>
          <h2 className="text-3xl lg:text-5xl text-themegreen mb-6">
            Proven Results Across Businesses
          </h2>
          <p className="text-lg  text-themedark mb-8">
              At Clybourne, we bridge technology and expertise to deliver transparent, data-driven business valuations. Whether you're scaling, seeking investment, or planning for a future sale, our platform equips you with actionable insights to drive confident decisions.
            </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {/* Mock client logos - in real implementation, these would be actual client logos */}
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm">
              <span className="text-gray-400 font-bold">CLIENT {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
