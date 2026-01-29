import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-dark text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-xl leading-tight">
                  Vizhi Dairy
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-wide uppercase">
                  Farm Fresh Since 1985
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Bringing you the purest dairy products straight from our farm to your table.
              Quality you can trust, freshness you can taste.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item === "About Us" ? "about" : item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {["Fresh Milk", "Natural Curd", "Pure Ghee", "Farm Butter", "Paneer"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Farm Road, Green Valley,<br />
                  Tamil Nadu, India - 600001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@vizhidairy.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@vizhidairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Vizhi Dairy Farm. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
