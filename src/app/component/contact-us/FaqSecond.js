'use client';
import { useState } from "react";
import { SectionWrapper } from "../generalComponent/SectionWrapper";

const faqs = [
    {
        question: "How long does it take to receive a valuation report?",
        answer: "Our reports are typically delivered within 48 hours of submission."
    },
    {
        question: "How long does it take to receive a valuation report?",
        answer: "Our reports are typically delivered within 48 hours of submission."
    },
    {
        question: "How accurate is the valuation?",
        answer: "Our valuation process uses industry standards and market data for high accuracy."
    },
    {
        question: "Can I edit my inputs after submitting?",
        answer: "Yes! You're allowed one round of modifications within 48 hours of report delivery."
    },
    {
        question: "Do I need financial knowledge to use this tool?",
        answer: "No, the tool is designed to be user-friendly for everyone."
    }
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <SectionWrapper customClass="bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-black">
                {/* FAQ Section */}
                <div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-md mb-6 ${index === activeIndex ? "border-teal-500 text-black" : "border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-4 py-3 flex justify-between items-center"
                            >
                                <span
                                    className={`${index === activeIndex ? "text-teal-600 font-medium" : ""
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <div>
                                    {index === activeIndex ? <span className="text-themegreen">︿</span> : <span>﹀</span>}
                                </div>
                                {/* <span className={`${index===activeIndex}? 'text-themegreen': 'text-black'`} >{index === activeIndex ? "︿" : "﹀"}</span> */}
                            </button>
                            {index === activeIndex && (
                                <div className="px-4 pb-4 text-[#777777] text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Section */}
                <div className="bg-gray-50 md:p-6 p-3 rounded-md shadow-sm">
                    <h3 className="text-2xl font-medium mb-4">Ask your question</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="name*"
                            className="w-full p-3 border border-gray-300 rounded outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="email*"
                            className="w-full p-3 border border-gray-300 rounded outline-none"
                            required
                        />
                        <textarea
                            rows="4"
                            placeholder="write somethings"
                            className="w-full p-3 border border-gray-300 rounded outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
                        >
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
}
