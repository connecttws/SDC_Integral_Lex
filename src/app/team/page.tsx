import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { User, Award } from "lucide-react";

export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-creamSoft mb-6">
            Meet Our <span className="text-goldLight">Legal Team</span>
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Experienced Advocates Dedicated to Your Success. Our team combines specialized knowledge with a relentless commitment to client results.
          </p>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-line shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="md:w-1/3 bg-inkSoft flex items-center justify-center p-12 min-h-[300px] border-b md:border-b-0 md:border-r border-line/20 relative">
                  {member.image ? (
                    <div className="w-48 h-48 rounded-full border-4 border-gold overflow-hidden relative shadow-lg">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 rounded-full bg-ink flex items-center justify-center border-4 border-gold shadow-lg">
                      <User className="w-20 h-20 text-gold" />
                    </div>
                  )}
                </div>

                {/* Profile Info */}
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl font-heading font-bold text-ink mb-2">{member.name}</h2>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-creamSoft text-maroon font-semibold text-sm border border-maroon/20">
                      {member.designation}
                    </span>
                  </div>
                  
                  <p className="text-slate text-lg leading-relaxed mb-8">
                    {member.description}
                  </p>

                  <div>
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-gold" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-ink text-creamSoft text-sm rounded-md border border-inkSoft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-creamSoft border-t border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-6">Work with Our Expert Team</h2>
          <p className="text-lg text-slate mb-10">
            Let our experienced advocates guide you through your legal challenges.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}

const teamMembers = [
  {
    name: "Sarthak Mittal",
    image: "/Photo/Sarthak.png", // Add image path here when available (e.g. "/images/team/sarthak.jpg")
    designation: "Advocate & Company Secretary",
    description: "Pre-eminent lawyer and CS with a profound combination of legal knowledge and business background. Specializes in helping companies navigate complex regulatory environments and prepare for future corporate changes.",
    expertise: ["Corporate Law", "Compliance", "Regulatory Affairs"]
  },
  {
    name: "Divya Kumari",
    image: "/Photo/Divya.png",
    designation: "Advocate",
    description: "Combines extensive legal experience with passionate advocacy to help clients resolve complex challenges creatively and proactively, ensuring the best possible outcomes in difficult situations.",
    expertise: ["Litigation", "Dispute Resolution", "Legal Counseling"]
  },
  {
    name: "Chitra Chanda",
    image: "/Photo/Chitra.png",
    designation: "Advocate",
    description: "Highly experienced lawyer focused on litigation and compliance counseling. Brings strong knowledge of her field and a strategic mindset to every case she handles.",
    expertise: ["Litigation", "Compliance", "Legal Advisory"]
  }
];
