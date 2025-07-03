import { Globe } from "lucide-react";
import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function VerifiedMarket() {
    return (
        <SectionWrapper customClass="bg-lightgrey">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl xl:text-7xl text-themeblue mb-4">
                            Verified Market Multiples
                           <br/> and Data Sources
                        </h2>
                    </div>
                    <p className="text-themedark xl:text-xl lg:text-lg md:text-base sm:text-sm">
                        Clybourne is a key Global Network we have experts around the world who can help you, you can work with qualified professionals who are familiar with local regulations and market conditions.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
