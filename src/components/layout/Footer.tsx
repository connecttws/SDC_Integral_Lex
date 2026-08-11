import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-creamSoft border-t border-line/20 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Contact */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-goldLight">
                SDC Integral Lex
              </span>
            </Link>
            <p className="text-sm leading-6 text-slate">
              Transforming legal challenges into strategic opportunities with excellence and integrity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="ml-3 text-sm text-slate">
                  The Third Space, 15A, 3rd Floor, Pratap Nagar, above KBM Electro, Pocket 1, Mayur Vihar, Delhi, 110091, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <p className="ml-3 text-sm text-slate">
                  +91-9958188245 <br /> +91-8178823988
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <p className="ml-3 text-sm text-slate">
                  sdc.integrallex@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Quick Links */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Home", "About", "Services", "Our Team", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-sm text-slate hover:text-gold transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Disclaimer", "Terms & Conditions", "Privacy Policy"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-slate hover:text-gold transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate/20 pt-8">
          <p className="text-sm text-slate xl:text-center">
            &copy; {new Date().getFullYear()} SDC Integral Lex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
