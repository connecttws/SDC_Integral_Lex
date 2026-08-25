import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Handshake, 
  Briefcase, 
  Search, 
  Scale, 
  FileCheck 
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-creamSoft mb-6">
            Your Trusted <span className="text-goldLight">Legal Partners</span>
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Dedicated to providing exceptional legal services with integrity, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Our Mission" alignment="left" />
              <div className="prose prose-lg text-slate">
                <p className="text-xl text-ink font-medium leading-relaxed mb-6">
                  Transform legal challenges into strategic opportunities. Don't merely practice law. Craft solutions. Empower businesses and individuals.
                </p>
                <p className="mb-6">
                  Focusing on complex legal environments, SDC Integral Lex was founded around core principles of integrity, innovation, and excellence. We believe in providing accessible, high-quality legal services across Delhi and beyond.
                </p>
                <div className="mt-10 p-8 bg-maroon rounded-xl border border-maroonDeep shadow-lg">
                  <h4 className="text-2xl font-heading text-creamSoft mb-2">Justice Through Excellence</h4>
                  <p className="text-goldLight">Every case, every client, every outcome matters to us.</p>
                </div>
              </div>
            </div>
            
            {/* Our Approach (Side by Side on LG) */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-line">
              <h3 className="text-2xl font-bold font-heading text-ink mb-8 border-b border-line pb-4">Our Approach</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-creamSoft text-maroon flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">Strategic Thinking</h4>
                    <p className="text-slate text-sm">Analyze the bigger picture and address root causes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-creamSoft text-maroon flex items-center justify-center shrink-0">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">Client Partnership</h4>
                    <p className="text-slate text-sm">Work as an extension of the client's team.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-creamSoft text-maroon flex items-center justify-center shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ink mb-1">Proactive Solutions</h4>
                    <p className="text-slate text-sm">Identify and mitigate legal risks before they become costly problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Excellence */}
      <section className="py-24 bg-creamSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Areas of Excellence" subtitle="Expertise" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-line hover:border-gold/50 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-inkSoft text-gold rounded flex items-center justify-center mr-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-ink">{area.title}</h3>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate">
                      <div className="w-1.5 h-1.5 rounded-full bg-maroon mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-ink text-creamSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-sm font-semibold tracking-wider text-gold uppercase mb-3">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Core Values</h2>
            <div className="h-1 w-20 bg-maroon mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-inkSoft flex items-center justify-center mb-6 text-gold border border-gold/20">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold font-heading mb-3">{value.title}</h4>
                <p className="text-slate text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-creamSoft mb-6">Ready to Work with Us?</h2>
          <p className="text-lg text-creamSoft/80 mb-10">
            We are here to provide the strategic legal counsel you need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-gold hover:bg-goldLight text-ink border-0">
              Schedule Consultation
            </Button>
            <Button href="/services" size="lg" variant="outline" className="border-creamSoft text-creamSoft hover:bg-creamSoft hover:text-maroon">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const areas = [
  {
    title: "Contract & Agreement Drafting",
    icon: <FileCheck className="w-5 h-5" />,
    items: [
      "Commercial Agreements",
      "Employment Contracts",
      "Partnership Deeds",
      "Service Agreements"
    ]
  },
  {
    title: "Intellectual Property Rights",
    icon: <Lightbulb className="w-5 h-5" />,
    items: [
      "Trademark Registration",
      "Copyright Protection",
      "Patent Registration",
      "IP Enforcement",
      "Brand Protection"
    ]
  },
  {
    title: "Litigation & Dispute Resolution",
    icon: <Scale className="w-5 h-5" />,
    items: [
      "Corporate Litigation",
      "Commercial Litigation",
      "Family Law Matters",
      "Civil & Criminal Cases",
      "Arbitration & Mediation"
    ]
  },
  {
    title: "Corporate Secretarial",
    icon: <Briefcase className="w-5 h-5" />,
    items: [
      "Company Registration",
      "Corporate Compliances",
      "Mergers and Acquisitions",
      "Start Up Advisory",
      "Secretarial Audits"
    ]
  }
];

const values = [
  {
    title: "Excellence",
    description: "Delivering the highest standard of legal service.",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Integrity",
    description: "Upholding absolute transparency and ethical practice.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Innovation",
    description: "Finding creative solutions to complex challenges.",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: "Partnership",
    description: "Building enduring relationships with our clients.",
    icon: <Handshake className="w-8 h-8" />
  }
];
