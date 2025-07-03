import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function FirstSection() {
  return (
    <SectionWrapper customClass="mt-12 lg:mt-20 bg-white">
      {/* Background Elements */}
      <div className="">
        <div className="grid gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-7xl text-themeblue mb-1 ">
              Unlocking Business Value with Precision and Purpose
            </h1>
            <h2 className="text-3xl lg:text-5xl mb-6 text-themegreen">
              Empowering Decisions with Smart Valuation Tools
            </h2>
            <p className="text-lg  text-themedark mb-6">
              At Clybourne, we bridge technology and expertise to deliver transparent, data-driven business valuations. Whether you're scaling, seeking investment, or planning for a future sale, our platform equips you with actionable insights to drive confident decisions.
            </p>
            <div className="flex  flex-col sm:flex-row gap-4">
              <button className="bg-themegreen text-white px-6 py-2 rounded hover:bg-teal-700 transition">Let’s Talk!</button>
              <button className="bg-themeblue text-white px-6 py-2 rounded hover:bg-blue-800 transition">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
