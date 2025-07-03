import { SectionWrapper } from "../generalComponent/SectionWrapper";

export default function Visionaries() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      initials: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Chief Financial Officer",
      initials: "ET"
    },
    {
      name: "David Kim",
      role: "Chief Operating Officer",
      initials: "DK"
    }
  ];

  return (
    <SectionWrapper customClass="bg-lightgrey" >
      <div className="">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-7xl text-themeblue  mb-1">
            Meet Our Visionaries
          </h2>
          <h2 className="text-3xl lg:text-5xl mb-6 text-themegreen">
            Leaders Who Inspire Confidence
          </h2>
          <p className="text-lg  text-themedark mb-6">
            Behind Clybourne is a team of experts with decades of experience in business valuation and <br />technology. Together, they ensure you get insights that matter.            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group ">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Professional headshot placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--cly-teal-400))] to-[hsl(var(--cly-navy-600))] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">{member.initials}</span>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-lg mb-1 text-themeblue">{member.name}</h3>
                <p className="text-sm text-black mb-3">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
