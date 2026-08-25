import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { 
  FileText, 
  Shield, 
  Scale, 
  Building2, 
  CheckCircle2 
} from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-creamSoft mb-6">
            Our <span className="text-goldLight">Legal Services</span>
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto mb-12">
            Comprehensive Legal Solutions for Every Need. We provide dedicated expertise across multiple practice areas to secure your future.
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto bg-inkSoft rounded-2xl aspect-video border border-line/20 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-maroon/5 mix-blend-overlay"></div>
            <div className="text-center relative z-10 transition-transform group-hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 border border-gold/50 cursor-pointer hover:bg-gold/40 transition-colors">
                <svg className="w-8 h-8 text-gold translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-creamSoft font-medium text-lg">Watch Our Services Overview</p>
              <p className="text-slate text-sm mt-2">[Video Placeholder - Add YouTube/Vimeo link here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Block */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-12 rounded-2xl border border-line shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                      {service.iconBig}
                    </div>
                    <div className="w-16 h-16 bg-creamSoft text-maroon rounded-xl flex items-center justify-center mb-8 relative z-10">
                      {service.iconSmall}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-ink mb-4 relative z-10">{service.title}</h2>
                    <p className="text-slate text-lg leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Sub-services List */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold font-heading text-ink mb-8 border-b border-line pb-4">
                    Key Areas of Practice
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.subServices.map((sub, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0 mr-3" />
                        <span className="text-slate font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-maroon text-creamSoft text-center relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#B08A4E 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Ready to Get Started?" 
            subtitle="Take Action" 
            className="text-creamSoft [&>h2]:text-creamSoft"
          />
          <p className="text-lg text-creamSoft/90 mb-10 -mt-8">
            Contact us today to discuss your legal needs and discover how we can help your business thrive.
          </p>
          <Button href="/contact" size="lg" className="bg-gold hover:bg-goldLight text-ink border-0 shadow-xl shadow-ink/20">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}

const servicesList = [
  {
    title: "Drafting of Agreements",
    description: "We craft legally sound agreements meticulously tailored to our clients' unique needs, ensuring absolute clarity and steadfast legal compliance in every transaction.",
    iconBig: <FileText className="w-48 h-48 text-maroon" />,
    iconSmall: <FileText className="w-8 h-8" />,
    subServices: [
      "Commercial Contracts",
      "Employment Agreements",
      "Partnership Agreements",
      "Non-Disclosure Agreements (NDAs)",
      "Service Level Agreements",
      "Licensing Agreements"
    ]
  },
  {
    title: "IPR Registration",
    description: "Protect your intellectual assets with our comprehensive trademark and copyright registration services, including robust defense in opposition proceedings.",
    iconBig: <Shield className="w-48 h-48 text-maroon" />,
    iconSmall: <Shield className="w-8 h-8" />,
    subServices: [
      "Trademark Registration",
      "Copyright Protection",
      "Patent Registration",
      "IP Enforcement",
      "Brand Protection"
    ]
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Expert representation and strategic counseling across a wide spectrum of legal disputes, aiming for optimal resolutions in and out of the courtroom.",
    iconBig: <Scale className="w-48 h-48 text-maroon" />,
    iconSmall: <Scale className="w-8 h-8" />,
    subServices: [
      "Corporate Litigation",
      "Commercial Litigation",
      "Family Law Matters",
      "Civil Disputes",
      "Criminal Defense",
      "Arbitration & Mediation",
      "Recovery Proceedings"
    ]
  },
  {
    title: "Company Registration and Compliances",
    description: "Navigate the complex regulatory environment seamlessly. We ensure absolute compliance for private companies, facilitating smooth and uninterrupted business operations.",
    iconBig: <Building2 className="w-48 h-48 text-maroon" />,
    iconSmall: <Building2 className="w-8 h-8" />,
    subServices: [
      "Company Registration",
      "Corporate Compliances",
      "Mergers and Acquisitions",
      "Start Up Advisory",
      "Secretarial Audits"
    ]
  }
];
