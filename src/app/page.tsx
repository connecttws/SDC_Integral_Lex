import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  FileText, 
  Shield, 
  Scale, 
  Building2, 
  Zap, 
  PiggyBank, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ink overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold blur-3xl"></div>
          <div className="absolute bottom-12 -left-24 w-72 h-72 rounded-full bg-maroon blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-creamSoft leading-tight mb-6">
              Strategic Legal Solutions for a <span className="text-goldLight">Dynamic World</span>
            </h1>
            <p className="text-lg md:text-xl text-slate mb-10 max-w-2xl leading-relaxed">
              Going beyond conventional legal services. We combine commercial insight with profound legal expertise to address the root challenges of your business rather than just surface-level concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="primary">
                Contact Us Today
              </Button>
              <Button href="/services" size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-ink">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Services" 
            subtitle="Expertise" 
            alignment="center" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-line rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-14 h-14 bg-creamSoft text-maroon rounded-lg flex items-center justify-center mb-6 group-hover:bg-maroon group-hover:text-cream transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 font-heading">{service.title}</h3>
                <p className="text-slate mb-6 flex-grow">{service.description}</p>
                <Link 
                  href="/services" 
                  className="text-maroon font-semibold flex items-center group/link mt-auto"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-inkSoft text-creamSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center mb-4 text-gold border border-gold/20">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold font-heading">{benefit.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Insights Section */}
      <section className="py-24 bg-creamSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Legal Insights & Updates" 
            subtitle="Knowledge Hub" 
            alignment="center" 
          />
          <p className="text-center text-slate max-w-2xl mx-auto mb-16 -mt-8">
            Stay informed with our latest legal insights, case studies, and regulatory updates affecting your business and life.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className={`group relative rounded-xl overflow-hidden bg-white border border-line ${
                  index === 0 || index === 1 ? "md:col-span-1 lg:col-span-1" : ""
                } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} ${
                  index === 3 || index === 4 ? "md:col-span-1" : ""
                }`}
              >
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold mb-3 block">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-ink mb-3 group-hover:text-maroon transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-slate text-sm">
                    {insight.description}
                  </p>
                </div>
                {/* Decorative bottom border that expands on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-maroon w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Drafting of Agreements",
    description: "Legally sound agreements tailored to client needs ensuring absolute clarity and strict compliance.",
    icon: <FileText className="w-7 h-7" />,
  },
  {
    title: "Trademark & Copyright",
    description: "Comprehensive trademark and copyright registration, including opposition proceedings.",
    icon: <Shield className="w-7 h-7" />,
  },
  {
    title: "Litigation & Dispute",
    description: "Expert representation in family, commercial, civil, and criminal court cases.",
    icon: <Scale className="w-7 h-7" />,
  },
  {
    title: "Corporate Compliance",
    description: "Ensuring compliance with legal regulations for smooth, uninterrupted business operations.",
    icon: <Building2 className="w-7 h-7" />,
  },
];

const benefits = [
  { title: "Faster Delivery", icon: <Zap className="w-8 h-8" /> },
  { title: "Competitive Pricing", icon: <PiggyBank className="w-8 h-8" /> },
  { title: "Personalized Guidance", icon: <Users className="w-8 h-8" /> },
  { title: "Expert Legal Support", icon: <Award className="w-8 h-8" /> },
];

const insights = [
  {
    category: "Legal Update",
    title: "Stay updated with latest legal developments",
    description: "Crucial modifications in corporate law affecting private entities this quarter.",
  },
  {
    category: "Case Study",
    title: "Successful legal solutions in action",
    description: "How we navigated a complex multi-party commercial litigation to secure our client's assets.",
  },
  {
    category: "Legal Analysis",
    title: "In-depth analysis of legal matters",
    description: "Understanding the nuances of recent Supreme Court verdicts on employment laws.",
  },
  {
    category: "Regulatory Update",
    title: "Latest regulatory changes",
    description: "New compliance requirements and their financial implications for tech startups.",
  },
  {
    category: "Expert Opinion",
    title: "Professional insights",
    description: "Strategic approaches to robust intellectual property portfolio management.",
  },
];
