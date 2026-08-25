"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to an API route
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-creamSoft mb-6">
            Get <span className="text-goldLight">In Touch</span>
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a consultation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information & Hours */}
            <div>
              <SectionHeading title="Contact Information" alignment="left" className="mb-8" />
              
              <div className="space-y-10 mt-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-creamSoft text-maroon rounded-full flex items-center justify-center shrink-0 border border-maroon/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold font-heading text-ink mb-2">Our Office</h3>
                    <p className="text-slate leading-relaxed">
                      The Third Space, 15A, 3rd Floor,<br />
                      Pratap Nagar, above KBM Electro,<br />
                      Pocket 1, Mayur Vihar, Delhi, 110091, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-creamSoft text-maroon rounded-full flex items-center justify-center shrink-0 border border-maroon/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold font-heading text-ink mb-2">Phone</h3>
                    <p className="text-slate">+91-9810095698</p>
                    <p className="text-slate">+91-8178025533</p>
                    <p className="text-slate">+91-9654233987</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-creamSoft text-maroon rounded-full flex items-center justify-center shrink-0 border border-maroon/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold font-heading text-ink mb-2">Email</h3>
                    <p className="text-slate">sdc.integrallex@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start pt-6 border-t border-line">
                  <div className="w-12 h-12 bg-ink text-gold rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold font-heading text-ink mb-2">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-x-8 text-slate">
                      <div>Monday – Saturday:</div>
                      <div>10:00 AM – 7:00 PM</div>
                      <div>Sunday:</div>
                      <div>Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-line shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-ink mb-8 border-b border-line pb-4">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-inkSoft mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-maroon focus:border-maroon bg-creamSoft/50 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-inkSoft mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-maroon focus:border-maroon bg-creamSoft/50 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-inkSoft mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-maroon focus:border-maroon bg-creamSoft/50 outline-none transition-all"
                      placeholder="+91-0000000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-inkSoft mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-maroon focus:border-maroon bg-creamSoft/50 outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service...</option>
                    <option value="drafting">Drafting of Agreements</option>
                    <option value="ip">IPR Registration</option>
                    <option value="litigation">Litigation & Dispute Resolution</option>
                    <option value="compliance">Company Registration and Compliances</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-inkSoft mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-maroon focus:border-maroon bg-creamSoft/50 outline-none transition-all resize-none"
                    placeholder="Please describe your legal requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
