import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import {SectionWrapper} from "../generalComponent/SectionWrapper"

export const Hero = () => {
  return (
    <SectionWrapper customClass="mt-12 lg:md-20 bg-white">
      {/* Main Container with 3 Sections */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">

        {/* Social Icons (10%) */}
        <div className="w-full md:w-[2%] hidden md:flex flex-col items-center gap-7">
          <div className="w-px h-24 bg-black mb-2"></div>
          <span className="text-gray-400 hover:opacity-100 hover:scale-105 hover:text-themeblue cursor-pointer"><FaInstagram size={26} /></span>
          <span className="text-gray-400 hover:opacity-100 hover:scale-105 hover:text-themeblue cursor-pointer"><FaXTwitter size={26} /></span>
          <span className="text-gray-400 hover:opacity-100 hover:scale-105 hover:text-themeblue cursor-pointer"><FaLinkedinIn size={26} /></span>
          <span className="text-gray-400 hover:opacity-100 hover:scale-105 hover:text-themeblue cursor-pointer"><FaFacebookF size={26} /></span>
          <div className="w-px h-24 bg-black mt-2"></div>
        </div>

        {/* Left Content (45%) */}
        <div className="w-full md:w-[45%] flex flex-col ">
          <p className="text-themegreen font-teko text-xl md:text-2xl lg:text-4xl">Accurate Business Valuation Services</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-themeblue">
            Unlock Your <br />
            True Company
            Value
          </h1>
          <p className="text-themeblack  text-base md:text-lg max-w-xl">
            At Clybourne, we simplify business valuation—delivering fast, affordable, and accurate company valuations to empower growth with clarity.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-8">
            <button className="bg-themegreen text-white px-6 py-2 rounded hover:bg-teal-700 transition">Let’s Talk!</button>
            <button className="bg-themeblue text-white px-6 py-2 rounded hover:bg-blue-800 transition">Buy Now</button>
          </div>

          {/* Watch Demo */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-full bg-themeblue flex items-center justify-center">
              <svg className="w-5 h-5 text-themegreen" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <p className="text-themeblue text-base">Watch Demo</p>
          </div>
        </div>

        {/* Right Content (45%) */}
        <div className="w-full md:w-[45%] flex justify-center mt-10 md:mt-10">
          <img src="h.png" alt="Hero Graphic" className="w-full max-w-xl object-contain" />
        </div>
      </div>
    </SectionWrapper>
  );
};
