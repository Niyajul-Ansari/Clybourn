import { Globe } from "lucide-react";
import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function GlobalReach() {
    return (
        <SectionWrapper customClass="bg-lightgrey">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-7xl text-themeblue mb-1">
                            Global Reach, Local Expertise
                        </h2>
                        <h2 className="text-3xl lg:text-5xl mb-6 text-themegreen">
                            Your Trusted Partner Worldwide
                        </h2>
                    </div>
                    <p className="text-themedark  text-xl mb-8">
                        Clybourne is a key Global Network we have experts around the world who can help you, you can work with qualified professionals who are familiar with local regulations and market conditions.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
