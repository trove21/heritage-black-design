import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h4 className="font-heading font-semibold mb-4">ELEGANCE</h4>
            <p className="text-body-small opacity-70">
              Crafting extraordinary experiences through timeless design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h6 className="section-label mb-4">SERVICES</h6>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Design Excellence
                </a>
              </li>
              <li>
                <a href="#services" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Premium Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="section-label mb-4">COMPANY</h6>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#team" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-body opacity-80 hover:text-primary hover:opacity-100 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="section-label mb-4">CONTACT</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 opacity-60" />
                <span className="text-body-small opacity-70">
                  123 Elegance Avenue<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="opacity-60" />
                <span className="text-body-small opacity-70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="opacity-60" />
                <span className="text-body-small opacity-70">contact@elegance.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-xs opacity-40">
            © 2024 Elegance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
